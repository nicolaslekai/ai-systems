"""Bake the brain callouts into the plate so nothing can drift at any viewport.

Leader lines stop at the brain's real silhouette, measured off the source pixels,
so a label never floats in empty space or lands on top of the cloud.
"""
import sys
from PIL import Image, ImageDraw, ImageFont

SRC = "/Users/nicolaslekai/Documents/Claude/Projects/NORMAL AI CONSULTANTS/assets/brain_cloud.jpg"
MONO = "/System/Library/Fonts/SFNSMono.ttf"
RED = (240, 65, 63)
INK = (26, 26, 28)

W = int(sys.argv[1]) if len(sys.argv) > 1 else 2200
FS = float(sys.argv[2]) if len(sys.argv) > 2 else 24.0   # px on the W-wide canvas
OUT = sys.argv[3] if len(sys.argv) > 3 else "baked.jpg"

TRACK = 0.20       # letter-spacing, em
SS = 3             # supersample for crisp small type
GAP_TXT = 0.020    # text -> line gap, fraction of width
GAP_BRAIN = 0.014  # line -> brain gap, fraction of width
COL_L = 0.235      # left column: where the labels end
COL_R = 0.765      # right column: where the labels start
MIN_LINE = 0.020   # shorter than this and the leader is left out

LEFT = ["YOUR DATA", "YOUR PROJECT FILES", "YOUR BEST PRACTICES", "YOUR BRAND VOICE"]
RIGHT = ["YOUR SKILL FILES", "YOUR DECISIONS", "YOUR CLIENTS", "YOUR WORKFLOWS"]
ROWS_L = [0.26, 0.41, 0.55, 0.69]
ROWS_R = [0.25, 0.40, 0.56, 0.70]

src = Image.open(SRC).convert("RGB")
sw, sh = src.size
spx = src.load()
LUM_MAX = 195          # below this a pixel belongs to the cloud
CLUSTER_GAP = sw * 0.03


def silhouette(fy):
    """Left/right edge of the main cloud on this row, as fractions of width."""
    y = min(sh - 1, round(fy * sh))
    xs = []
    for x in range(sw):
        r, g, b = spx[x, y]
        if 0.299 * r + 0.587 * g + 0.114 * b < LUM_MAX:
            xs.append(x)
    if not xs:
        return 0.42, 0.58
    clusters, cur = [], [xs[0]]
    for x in xs[1:]:
        if x - cur[-1] <= CLUSTER_GAP:
            cur.append(x)
        else:
            clusters.append(cur)
            cur = [x]
    clusters.append(cur)
    main = max(clusters, key=len)
    return main[0] / sw, main[-1] / sw


H = round(sh * W / sw)
img = src.resize((W, H), Image.LANCZOS)

layer = Image.new("RGBA", (W * SS, H * SS), (0, 0, 0, 0))
d = ImageDraw.Draw(layer)
font = ImageFont.truetype(MONO, round(FS * SS))
extra = FS * SS * TRACK
LINE_W = max(1, round(W / 1500)) * SS


def tracked_width(s):
    return sum(d.textlength(ch, font=font) + extra for ch in s) - extra


def draw_tracked(x, y, s):
    for ch in s:
        d.text((x, y), ch, font=font, fill=INK + (235,), anchor="lm")
        x += d.textlength(ch, font=font) + extra


for text, fy in zip(LEFT, ROWS_L):
    ys = fy * H * SS
    text_end = COL_L * W * SS
    draw_tracked(text_end - tracked_width(text), ys, text)
    line_start = text_end + GAP_TXT * W * SS
    line_end = (silhouette(fy)[0] - GAP_BRAIN) * W * SS
    if line_end - line_start > MIN_LINE * W * SS:
        d.line([(line_start, ys), (line_end, ys)], fill=RED + (255,), width=LINE_W)

for text, fy in zip(RIGHT, ROWS_R):
    ys = fy * H * SS
    text_start = COL_R * W * SS
    draw_tracked(text_start, ys, text)
    line_end = text_start - GAP_TXT * W * SS
    line_start = (silhouette(fy)[1] + GAP_BRAIN) * W * SS
    if line_end - line_start > MIN_LINE * W * SS:
        d.line([(line_start, ys), (line_end, ys)], fill=RED + (255,), width=LINE_W)

layer = layer.resize((W, H), Image.LANCZOS)
img = Image.alpha_composite(img.convert("RGBA"), layer).convert("RGB")
img.save(OUT, quality=90, optimize=True, progressive=True)
print(OUT, img.size, "font", FS)
