"""GPT Image 2.5 (sunburst) ueber ComfyUI :8188 fuer consulting.nicolaslekai.com — Nicky 24.11.2026: "use chat gpt image 2.5 pro".
Nutzt Plumbing und Prompts aus rendern_film.py. Aufruf: python3 tools/rendern_gpt.py <name> <prompt-name> <ref-name> [n] [quality]"""
import sys, shutil
from PIL import Image
sys.path.insert(0, __file__.rsplit("/", 1)[0])
import rendern_film as R

def rendere(name, prompt, ref, n=2, quality="high", w=3840, h=2160):
    datei = f"nl_gpt_{ref}_ref.png"
    Image.open(R.neuestes(ref)).convert("RGB").save(R.COMFY / "input" / datei)
    wf = {"1": {"class_type": "LoadImage", "inputs": {"image": datei}},
          "2": {"class_type": "OpenAIGPTImageNodeV2", "inputs": {
              "prompt": prompt, "model": "gpt-image-2.5-sunburst", "model.size": (f"{w}x{h}" if f"{w}x{h}" in ("1024x1024", "1024x1536", "1536x1024", "2048x2048", "2048x1152", "1152x2048", "3840x2160", "2160x3840") else "Custom"),
              "model.custom_width": w, "model.custom_height": h, "model.background": "opaque",
              "model.quality": quality, "model.images.image_1": ["1", 0], "n": n, "seed": 0}},
          "3": {"class_type": "SaveImage", "inputs": {"images": ["2", 0], "filename_prefix": f"nl_architect/{name}_KJ_"}}}
    pid = R.post(wf)
    import json, time, urllib.request
    for _ in range(600):
        time.sleep(5)
        hh = json.load(urllib.request.urlopen(f"http://127.0.0.1:{R.PORT}/history/{pid}"))
        if pid not in hh:
            continue
        if hh[pid]["status"].get("status_str") == "error":
            raise RuntimeError(json.dumps(hh[pid]["status"]["messages"])[-600:])
        bilder = [R.COMFY / "output" / im["subfolder"] / im["filename"] for o in hh[pid]["outputs"].values() for im in o.get("images", [])]
        if bilder:
            out = []
            for b in bilder:
                z = R.ziel(name); shutil.copy(b, z); out.append(z.name)
            return out
    raise RuntimeError("Zeitueberschreitung")

if __name__ == "__main__":
    name, pname, ref = sys.argv[1:4]
    n = int(sys.argv[4]) if len(sys.argv) > 4 else 2
    q = sys.argv[5] if len(sys.argv) > 5 else "high"
    print(rendere(name, getattr(R, pname), ref, n, q))
