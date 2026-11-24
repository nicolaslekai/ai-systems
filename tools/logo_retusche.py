#!/usr/bin/env python3
"""Die vier O&S-Bilder mit Logo auf Nicolas' Marke umziehen (Nano Banana Edit ueber ComfyUI :8188).

Eingang sind die schon korallenen WebP aus preview/assets/bilder. Ergebnis landet als PNG in
preview/_quellen/<name>_KJ_v###.png (naechste freie Nummer).
    python3 tools/logo_retusche.py [name ...]
"""
import json, os, shutil, subprocess, sys, time, urllib.request
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
BILDER = ROOT / "preview/assets/bilder"
QUELLEN = ROOT / "preview/_quellen"
COMFY = Path.home() / "ComfyUI-Installs/ComfyUI/ComfyUI"
PORT = 8188
KEY = os.environ.get("COMFY_API_KEY") or subprocess.run(
    ["security", "find-generic-password", "-s", "comfy-org-api-key", "-w"],
    capture_output=True, text=True).stdout.strip()

SHIRTS = ("Edit this photo and keep it identical: same people, faces, poses, hands, clothes, blue denim "
          "jeans, table, light, window and framing. The dark T-shirts are plain charcoal cotton with clean "
          "fronts. The wall screen and the laptop screen show the same dashboard tiles in soft coral "
          "(#ff7f61) instead of light blue; the header text on both screens reads 'Nicolas Lekai' with a "
          "small coral diamond before it. Natural daylight photo, unchanged grade.")
OS_BILDER = Path.home() / "Documents/Claude/Projects/Otter and Stein/assets/bilder"
GPU = ("Edit this photo and keep it identical: same graphics card, angle, fan, cooling fins, light, "
       "depth of field and colours. The brushed silver plate on the card carries a new engraved "
       "wordmark: 'Nicolas Lekai' in bold white sans-serif, with a small solid coral diamond (#ff7f61) "
       "right before the N. Same size, position and perspective as the lettering it replaces.")

JOBS = {  # name: (eingang, prompt, verhaeltnis, aufloesung, seed)
    "begleitung-runde": (OS_BILDER / "begleitung-runde.webp", SHIRTS, "16:9", "2K", 8101),
    "begleitung-runde-hoch": (OS_BILDER / "begleitung-runde-hoch.webp", SHIRTS, "4:5", "2K", 8102),
    "team-gpu": ("team-gpu.webp", GPU, "16:9", "4K", 8201),
    "team-gpu-hoch": ("team-gpu-hoch.webp", GPU, "4:5", "2K", 8202),
}


def post(wf):
    body = json.dumps({"prompt": wf, "extra_data": {"api_key_comfy_org": KEY}}).encode()
    req = urllib.request.Request(f"http://127.0.0.1:{PORT}/prompt", body, {"Content-Type": "application/json"})
    return json.load(urllib.request.urlopen(req))["prompt_id"]


def warte(pid, ziel):
    for _ in range(300):
        time.sleep(3)
        h = json.load(urllib.request.urlopen(f"http://127.0.0.1:{PORT}/history/{pid}"))
        if pid not in h:
            continue
        st = h[pid]["status"]
        if st.get("status_str") == "error":
            return "FEHLER " + json.dumps(st["messages"])[-500:]
        for o in h[pid]["outputs"].values():
            for im in o.get("images", []):
                shutil.copy(COMFY / "output" / im["subfolder"] / im["filename"], ziel)
                return f"ok -> {ziel.name}"
        return "keine Ausgabe"
    return "Zeitueberschreitung"


def main():
    QUELLEN.mkdir(parents=True, exist_ok=True)
    namen = sys.argv[1:] or list(JOBS)
    laufend = []
    for name in namen:
        eingang, prompt, verh, aufl, seed = JOBS[name]
        png = f"nl_{name}_eingang.png"
        Image.open(BILDER / eingang).convert("RGB").save(COMFY / "input" / png)
        wf = {"1": {"class_type": "LoadImage", "inputs": {"image": png}},
              "2": {"class_type": "GeminiImage2Node", "inputs": {
                  "prompt": prompt, "model": "gemini-3-pro-image-preview", "seed": seed,
                  "aspect_ratio": verh, "resolution": aufl, "response_modalities": "IMAGE",
                  "images": ["1", 0]}},
              "3": {"class_type": "SaveImage", "inputs": {"images": ["2", 0], "filename_prefix": f"nl_architect/{name}_KJ_"}}}
        nr = 1
        while (QUELLEN / f"{name}_KJ_v{nr:03d}.png").exists():
            nr += 1
        laufend.append((name, post(wf), QUELLEN / f"{name}_KJ_v{nr:03d}.png"))
    for name, pid, ziel in laufend:
        print(name, warte(pid, ziel), flush=True)


if __name__ == "__main__":
    main()
