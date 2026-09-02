#!/usr/bin/env python3
"""Queue a Nano Banana (GeminiImage2Node) image-to-image job on the local ComfyUI
and wait for the result.

usage: comfy_i2i.py OUT_PATH ASPECT PROMPT_FILE REF1 [REF2 ...]
  REFs are file names inside the ComfyUI input/ dir.
"""
import json, os, sys, time, urllib.request, shutil

PORT = int(os.environ.get("COMFY_PORT", "8188"))
KEY = os.environ.get("COMFY_API_KEY") or open(os.path.expanduser(
    "~/.claude/skills/comfyui-api/api_key.txt")).read().strip()
BASE = f"http://127.0.0.1:{PORT}"
COMFY_OUT = os.path.expanduser("~/ComfyUI-Installs/ComfyUI/ComfyUI/output")

out_path, aspect, prompt_file, *refs = sys.argv[1:]
prompt = open(prompt_file).read().strip()
seed = int(os.environ.get("SEED", "42"))

g = {}
for i, r in enumerate(refs):
    g[f"L{i}"] = {"class_type": "LoadImage", "inputs": {"image": r}}
img_ref = ["L0", 0]
for i in range(1, len(refs)):
    g[f"B{i}"] = {"class_type": "ImageBatch", "inputs": {"image1": img_ref, "image2": [f"L{i}", 0]}}
    img_ref = [f"B{i}", 0]
g["G"] = {"class_type": "GeminiImage2Node", "inputs": {
    "prompt": prompt, "model": "gemini-3-pro-image-preview", "seed": seed,
    "aspect_ratio": aspect, "resolution": "2K", "response_modalities": "IMAGE",
    "images": img_ref}}
g["S"] = {"class_type": "SaveImage", "inputs": {"images": ["G", 0],
          "filename_prefix": "nl_plates/" + os.path.splitext(os.path.basename(out_path))[0]}}

body = json.dumps({"prompt": g, "extra_data": {"api_key_comfy_org": KEY}}).encode()
req = urllib.request.Request(BASE + "/prompt", data=body, headers={"Content-Type": "application/json"})
resp = json.load(urllib.request.urlopen(req))
if "prompt_id" not in resp:
    sys.exit(f"queue failed: {resp}")
pid = resp["prompt_id"]
print("queued", pid, flush=True)

for _ in range(240):
    time.sleep(5)
    h = json.load(urllib.request.urlopen(f"{BASE}/history/{pid}"))
    if pid not in h:
        continue
    st = h[pid].get("status", {})
    if st.get("status_str") == "error":
        sys.exit("ERROR: " + json.dumps(st.get("messages"))[:1500])
    if st.get("completed"):
        for o in h[pid]["outputs"].values():
            for im in o.get("images", []):
                src = os.path.join(COMFY_OUT, im.get("subfolder", ""), im["filename"])
                shutil.copy(src, out_path)
                print("saved", out_path)
                sys.exit(0)
sys.exit("timeout")
