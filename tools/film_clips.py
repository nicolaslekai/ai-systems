#!/usr/bin/env python3
"""Site v3 (26.09, Nicky: "bring more of the video onto the page"): muted film clips for the page's sections, cut from the
lossless masters and cropped to the picture only (the film's own headline stays out, the page sets it).

  film_clips.py [name ...]        names: os costs phases secure auto   (default: all)

Each clip: assets/film_<name>_<lang>.mp4 (H.264, BT.709, no audio) + _start.jpg / _end.jpg posters taken from the encoded
clip, so poster and video decode to the same colours. Light clips sit on the film's light stage (#f5f5f7), dark ones on the
dark stage (#1c1c1e); the LUT pulls the levels so the browser's decode lands on the page colour (measured in Chrome).
"auto" is not in the film: explainer-video/tools/auto07b/site_clip.js renders the six site tiles as PNG frames first.
"""
import os, subprocess, sys, glob, tempfile
from PIL import Image

EV = "/Users/nicolaslekai/Documents/Claude/Projects/WEBSITE/explainer-video"
A = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "assets")
SRC = {"en": f"{EV}/renders/v031_parts/EN_full.mov", "de": f"{EV}/renders/v030_parts/DE_full.mov"}
TILES = "/private/tmp/claude-501/-Users-nicolaslekai-Documents-Claude-Projects-WEBSITE/2fdca26a-39d3-43f8-b4de-ad3a32307c05/scratchpad/tiles_{}"
# in/out per language (read off the masters), crop w:h:x:y in master pixels, stage
CLIPS = {
    "os":     {"de": (40.85, 46.10), "en": (43.90, 49.90), "crop": "1184:800:680:36", "stage": "light"},   # models, then tools
    "costs":  {"de": (46.15, 49.85), "en": (51.10, 53.85), "crop": "1184:800:680:36", "stage": "light"},   # spend counts up
    "phases": {"de": (92.20, 96.10), "en": (96.70, 100.75), "crop": "1920:120:0:440", "stage": "light"},  # the three dots
    "secure": {"de": (123.75, 128.35), "en": (131.00, 135.55), "crop": "1440:580:243:400", "stage": "dark"},
    "auto":   {"stage": "dark"},
}
PAD = 24   # auto: stage margin around the tile grid
STAGE = {"light": (245, 245, 247), "dark": (28, 28, 30)}
# measured in Chrome: plain BT.709 clips decode ~2 levels light; dark -2/-2/-1 lands at (29,28,31) on (28,28,30)
LUT = {"dark": (2, 2, 1), "light": (2, 2, 2)}   # light: plain decode measured (247,247,249) on (245,245,247)


def lut(stage):
    r, g, b = LUT[stage]
    return f"lutrgb=r='clip(val-{r}\\,0\\,255)':g='clip(val-{g}\\,0\\,255)':b='clip(val-{b}\\,0\\,255)'"


ENC = ["-an", "-c:v", "libx264", "-preset", "slow", "-crf", "22", "-pix_fmt", "yuv420p",
       "-colorspace", "bt709", "-color_primaries", "bt709", "-color_trc", "bt709", "-color_range", "tv", "-movflags", "+faststart"]


def poster(src_png, out_jpg):
    # posters come from the source frames, not from the encoded clip: ffmpeg's decode of the H.264 differs from Chrome's by
    # ~2 levels, the lossless source lands on the page colour as a JPEG
    Image.open(src_png).convert("RGB").save(out_jpg, quality=90, subsampling=0)


def cut(name, l):
    c = CLIPS[name]
    out = f"{A}/film_{name}_{l}.mp4"
    vf_tail = f"format=rgb24,{lut(c['stage'])},scale=out_color_matrix=bt709:out_range=tv,format=yuv420p"
    if name == "auto":
        frames = sorted(glob.glob(os.path.join(TILES.format(l), "t_*.png")))
        if not frames:
            sys.exit(f"no tile frames for {l}: run site_clip.js {l} {TILES.format(l)} first")
        tmp = tempfile.mkdtemp(dir=os.path.dirname(TILES))
        for i, f in enumerate(frames):
            fr = Image.open(f).convert("RGBA")
            bg = Image.new("RGBA", (fr.width + 2 * PAD, fr.height + 2 * PAD), STAGE["dark"] + (255,))   # air around the grid
            bg.alpha_composite(fr, (PAD, PAD))
            bg.convert("RGB").save(f"{tmp}/c_{i:04d}.png")
        subprocess.run(["ffmpeg", "-v", "error", "-y", "-framerate", "25", "-i", f"{tmp}/c_%04d.png", "-vf", vf_tail, *ENC, out], check=True)
        poster(f"{tmp}/c_0000.png", out[:-4] + "_start.jpg")
        poster(f"{tmp}/c_{len(frames) - 1:04d}.png", out[:-4] + "_end.jpg")
    else:
        a, b = c[l]
        subprocess.run(["ffmpeg", "-v", "error", "-y", "-ss", str(a), "-i", SRC[l], "-t", f"{b - a:.2f}",
                        "-vf", f"crop={c['crop']},{vf_tail}", *ENC, out], check=True)
        for tag, t in (("start", a), ("end", b - 0.04)):
            png = f"/private/tmp/claude-501/_poster_{name}_{l}.png"
            subprocess.run(["ffmpeg", "-v", "error", "-y", "-ss", f"{t:.3f}", "-i", SRC[l], "-frames:v", "1", "-vf", f"crop={c['crop']}",
                            "-pix_fmt", "rgb24", png], check=True)
            poster(png, out[:-4] + f"_{tag}.jpg")
    print(f"{name} {l}: {os.path.getsize(out) / 1e6:.2f} MB -> {os.path.basename(out)}")


for name in (sys.argv[1:] or list(CLIPS)):
    for l in ("de", "en"):
        cut(name, l)
