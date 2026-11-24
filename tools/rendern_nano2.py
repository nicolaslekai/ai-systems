"""Nano Banana 2 (Gemini 3.1 Flash Image) ueber ComfyUI :8188 — fuer den Modellvergleich 24.11.2026.
Aufruf: python3 tools/rendern_nano2.py <name> <prompt-name> <ref-name> <seed>"""
import sys, shutil
from PIL import Image
sys.path.insert(0, __file__.rsplit("/", 1)[0])
import rendern_film as R
name, pname, ref, seed = sys.argv[1], sys.argv[2], sys.argv[3], int(sys.argv[4])
datei = f"nl_n2_{ref}_ref.png"
Image.open(R.neuestes(ref)).convert("RGB").save(R.COMFY / "input" / datei)
wf = {"1": {"class_type": "LoadImage", "inputs": {"image": datei}},
      "2": {"class_type": "GeminiImage2Node", "inputs": {"prompt": getattr(R, pname), "model": "Nano Banana 2 (Gemini 3.1 Flash Image)",
            "seed": seed, "aspect_ratio": "16:9", "resolution": "4K", "response_modalities": "IMAGE", "images": ["1", 0]}},
      "3": {"class_type": "SaveImage", "inputs": {"images": ["2", 0], "filename_prefix": f"nl_architect/{name}_KJ_"}}}
src = R.warte(R.post(wf)); z = R.ziel(name); shutil.copy(src, z); print(name, "ok ->", z.name)
