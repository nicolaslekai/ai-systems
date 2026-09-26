#!/usr/bin/env python3
"""Site v2 (26.09.2026, Nicky: "you can make new images as well with ComfyUI via ChatGPT Image 2.5 ... make it smaller"):
the props of the process and service rows as free-standing cutouts with a real alpha channel (GPT Image 2.5, flare, high,
transparent), so they float on the dark page instead of sitting in big 16:9 plates. Same objects as the old plates.
  python3 tools/gpt_cutouts.py [name ...]   -> assets/cut_<name>.png (1024x1024 RGBA)"""
import json, os, shutil, sys, time, urllib.request
PORT = int(os.environ.get("COMFY_PORT", "8188")); BASE = f"http://127.0.0.1:{PORT}"
KEY = open(os.path.expanduser("~/.claude/skills/comfyui-api/api_key.txt")).read().strip()
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "assets")
COMFY_OUT = os.path.expanduser("~/ComfyUI-Installs/ComfyUI/ComfyUI/output")
STYLE = ("Photoreal product render in glossy vermilion red, the red of a classic rotary telephone, with matte black details. "
         "Soft studio key light from the upper left, subtle reflections, three-quarter view. The whole object sits centered with "
         "generous empty margin on all sides, on a fully transparent background, PNG with alpha.")
OBJ = {"audit": "A single magnifying glass with a vermilion-red handle and a black metal rim around clear glass.",
       "build": "A single adjustable wrench with a vermilion-red rubber grip and a brushed dark steel head.",
       "train": "A single glossy vermilion-red jigsaw puzzle piece, slightly tilted, thick and rounded like a toy.",
       "systems": "A single neatly coiled patch cable with a vermilion-red jacket and two black jack plugs.",
       "pipelines": "A single film clapperboard with a black slate and a vermilion-red and black striped clapper, slightly open.",
       "strategy": "A single glossy vermilion-red chess knight on a round base."}
def post(g):
    r = urllib.request.Request(BASE + "/prompt", data=json.dumps({"prompt": g, "extra_data": {"api_key_comfy_org": KEY}}).encode(),
                               headers={"Content-Type": "application/json"})
    return json.load(urllib.request.urlopen(r))["prompt_id"]
for i, name in enumerate(sys.argv[1:] or list(OBJ)):
    g = {"1": {"class_type": "OpenAIGPTImageNodeV2", "inputs": {"prompt": OBJ[name] + " " + STYLE, "seed": 2609 + i, "n": 1,
               "model": "gpt-image-2.5-flare", "model.size": "1024x1024", "model.custom_width": 1024, "model.custom_height": 1024,
               "model.background": "transparent", "model.quality": "high"}},
         "2": {"class_type": "SaveImage", "inputs": {"images": ["1", 0], "filename_prefix": f"nl_cutouts/cut_{name}"}}}
    pid = post(g); t0 = time.time()
    while True:
        time.sleep(3)
        h = json.load(urllib.request.urlopen(f"{BASE}/history/{pid}")).get(pid)
        if h and h.get("status", {}).get("completed"):
            im = h["outputs"]["2"]["images"][0]
            shutil.copy(os.path.join(COMFY_OUT, im["subfolder"], im["filename"]), os.path.join(OUT, f"cut_{name}.png"))
            print(f"{name}: {time.time() - t0:.0f}s -> assets/cut_{name}.png", flush=True); break
        if h and h.get("status", {}).get("status_str") == "error":
            print(name, "ERROR", json.dumps(h["status"])[:400], flush=True); break
        if time.time() - t0 > 300:
            print(name, "timeout", flush=True); break
