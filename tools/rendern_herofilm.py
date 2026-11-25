#!/usr/bin/env python3
"""Hero-Film fuer consulting.nicolaslekai.com (Nicky 24.11.2026: "run a film on Seedance 2.5 for both the mobile and the
desktop version ... and then animate those frames via the scroll"). Seedance 2.5 ueber ComfyUI :8188.
Ausgang: preview/_quellen/hero-film/<name>_KJ_v###.mp4
    python3 tools/rendern_herofilm.py breit|hoch [seed]
"""
import json, shutil, sys, time, urllib.request
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent))
import rendern_film as R

OUT = R.ROOT / "preview/_quellen/hero-film" if hasattr(R, "ROOT") else Path(__file__).resolve().parent.parent / "preview/_quellen/hero-film"

LOOK = ("Shot on 35mm film: organic grain, soft halation on the window highlights, 24fps with a 180-degree shutter, "
        "matte surfaces, the colours and light of the still kept exactly. ")
FAN = ("Both fans already spinning at a slow steady speed in FIRST FRAME, the seven blades turning clockwise with soft "
       "motion blur, the silver hubs turning with them, the same steady speed the whole time. ")

PROMPTS = {
 "breit": ("1 shot, 5 seconds, one continuous take, everything real-time. " + LOOK +
   "Image 1 is the first frame exactly: the graphics card on the worn walnut table in the brick loft, the coral logo "
   "and the coral lettering RENDER CORE · 48 GB on the brushed silver plate, the light meter, the film canister and the "
   "stoneware cup, the steel-frame window on the LEFT. " + FAN +
   "0.0–5.0s: a slow, smooth dolly push-in on a slider toward the lettering on the silver plate, drifting gently to the "
   "RIGHT, ending with the silver plate and the first fan large in frame. Daylight from the window on the LEFT stays "
   "constant, a few dust motes drift in the window light. The logo and the lettering stay crisp and identical in every "
   "frame. LENS 47° (50mm), locked on the slider, perfectly smooth."),
 "hoch": ("1 shot, 5 seconds, one continuous take, everything real-time. " + LOOK +
   "Image 1 is the first frame, Image 2 is the last frame: the same graphics card on the worn walnut table in the brick "
   "loft, the coral logo and the coral lettering RENDER CORE · 48 GB on the brushed silver plate. " + FAN +
   "0.0–5.0s: a slow, smooth dolly push-in on a slider from the wide view with the brick wall and the stoneware cup on "
   "the LEFT toward the silver plate, drifting to the RIGHT, arriving exactly on the close-up of Image 2 with the "
   "lettering large in frame. Daylight from the LEFT stays constant. The logo and the lettering stay crisp and identical "
   "in every frame. Perfectly smooth camera."),
}
BILDER = {"breit": ("hero-erst-breit_KJ_v001.png", None), "hoch": ("hero-erst-hoch_KJ_v001.png", "hero-letzt-hoch_KJ_v001.png")}


# V2 (Nicky 18:17: "we dont want to scale the image towards us, we only want the fans to spin with the scrolling"):
# Kamera steht, nur die Luefter drehen. Erstes = letztes Bild = Originalstandbild -> nahtlose Schleife.
STEHT = ("1 shot, 5 seconds, one continuous take, everything real-time. " + LOOK +
   "Image 1 is both the first frame and the last frame exactly: the graphics card on the worn walnut table in the brick "
   "loft, the coral logo and the coral lettering RENDER CORE · 48 GB on the brushed silver plate. The camera is locked "
   "off on a heavy tripod, the frame perfectly still from start to end. " + FAN +
   "0.0–5.0s: only the fans move, turning smoothly and evenly, the blades returning exactly to their starting position "
   "on the last frame for a seamless loop. Everything else in the room stays perfectly still: table, cup, window light, "
   "the silver plate, the logo and the lettering crisp and identical in every frame.")
PROMPTS["steht-breit"] = STEHT
PROMPTS["steht-handy"] = STEHT
BILDER["steht-breit"] = ("hero-erst-breit_KJ_v001.png", "hero-erst-breit_KJ_v001.png")
BILDER["steht-handy"] = ("hero-still-handy_KJ_v001.png", "hero-still-handy_KJ_v001.png")


# V3 (Nicky 25.11.2026: "call it local GPU" — "please do from scratch not edit"): neues Standbild von Grund auf
# (rendern_film.py gpu-lokal-szene2-b), Karte traegt das echte Zeichen + LOCAL GPU · 48 GB. Handy = Quadrat x 636 von 5504.
PROMPTS["lokal-breit"] = PROMPTS["lokal-handy"] = STEHT.replace("RENDER CORE · 48 GB", "LOCAL GPU · 48 GB")
BILDER["lokal-breit"] = ("hero-erst-breit_KJ_v003.png", "hero-erst-breit_KJ_v003.png")   # 25.11. GPT-Logo-Fassung (gpu-logo-gpt2 v003)
BILDER["lokal-handy"] = ("hero-still-handy_KJ_v003.png", "hero-still-handy_KJ_v003.png")   # Quadrat x 444 von 3840


def ziel(name):
    nr = 1
    while (OUT / f"{name}_KJ_v{nr:03d}.mp4").exists(): nr += 1
    return OUT / f"{name}_KJ_v{nr:03d}.mp4"


def los(art, seed=2511):
    erst, letzt = BILDER[art]
    wf = {}
    for i, f in enumerate([erst, letzt]):
        if not f: continue
        datei = f"nl_herofilm_{f}"
        shutil.copy(OUT / f, R.COMFY / "input" / datei)
        wf[str(10 + i)] = {"class_type": "LoadImage", "inputs": {"image": datei}}
    inp = {"model": "Seedance 2.5", "model.prompt": PROMPTS[art], "model.resolution": "1080p", "model.duration": 5,
           "model.generate_audio": False, "model.output_format": "mp4", "seed": seed, "watermark": False,
           "first_frame": ["10", 0]}
    if letzt: inp["last_frame"] = ["11", 0]
    wf["2"] = {"class_type": "ByteDance2FirstLastFrameNode", "inputs": inp}
    wf["3"] = {"class_type": "SaveVideo", "inputs": {"video": ["2", 0], "filename_prefix": f"nl_architect/hero-film-{art}_KJ_", "format": "mp4", "codec": "auto"}}
    pid = R.post(wf) if hasattr(R, "post") else None
    for _ in range(600):
        time.sleep(5)
        h = json.load(urllib.request.urlopen(f"http://127.0.0.1:{R.PORT}/history/{pid}"))
        if pid not in h: continue
        if h[pid]["status"].get("status_str") == "error":
            return "FEHLER " + json.dumps(h[pid]["status"]["messages"])[-600:]
        for o in h[pid]["outputs"].values():
            for v in o.get("images", []) + o.get("videos", []) + o.get("gifs", []):
                z = ziel(f"hero-film-{art}"); shutil.copy(R.COMFY / "output" / v["subfolder"] / v["filename"], z)
                return f"ok -> {z.name}"
        return "keine Ausgabe: " + json.dumps(h[pid]["outputs"])[:300]
    return "Zeitueberschreitung"


if __name__ == "__main__":
    print(sys.argv[1], los(sys.argv[1], int(sys.argv[2]) if len(sys.argv) > 2 else 2511))
