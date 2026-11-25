#!/usr/bin/env python3
"""Neue Beschriftung auf dem Seitenblech der Grafikkarte im Hero · consulting.nicolaslekai.com
Nicky 25.11.2026: "the logo on the card is wrong, run the image again" — "also dont call the graphic card render core"
— "call it local GPU". Das Modell hatte das Zeichen nur angenaehert (verzogene Raute) und RENDER CORE geschrieben.
Hier deterministisch, Bild fuer Bild: alte Beschriftung samt Zeichen vom gebuersteten Blech nehmen (Verlauf je Spalte
+ Buerstspuren aus dem Blech darueber), dann das echte Zeichen (assets/logo-mark-coral.png) und "LOCAL GPU · 48 GB"
(Barlow Medium, DIN-artig wie das Original, tools/fonts) in der Druckfarbe des Originals setzen.
Die Kamera steht im Film (Drift < 0,2 px), deshalb gilt eine Lage fuer alle Bilder. Aufgerufen von tools/hero_frames.py.
Koordinaten in Ausgabepixeln: breit 1600x900; handy 900x900 liegt 180 px weiter links (gleicher Massstab)."""
from pathlib import Path
import numpy as np, cv2
from PIL import Image, ImageDraw, ImageFont, ImageFilter
ROOT = Path(__file__).resolve().parent.parent
TEXT = "LOCAL GPU · 48 GB"
FONT = ROOT / "tools/fonts/Barlow-Medium.ttf"
DX = {"breit": 0, "handy": -180}
# Werte aus dem Original (breit): Band der alten Beschriftung, Zeichen und Schrift
BAND = (946, 404, 1380, 486)          # x0, y0, x1, y1
ZEICHEN = (954, 412, 1009, 466)       # altes Zeichen (Bounding Box)
SCHRIFT_X, KAPPE_OBEN, KAPPE = 1020, 430, 30   # erstes R links, Oberkante der Versalien, Versalhoehe
INK = np.array([200, 86, 70], np.float32)      # gesaettigter Kern der alten Schrift

MARK = Image.open(ROOT / "assets/logo-mark-coral.png").convert("RGBA")
MARK = MARK.crop(MARK.split()[3].getbbox()).split()[3]

def _schrift_maske(w, h):
    """Alpha der neuen Schrift, 4fach ueberabgetastet; Versalhoehe = KAPPE."""
    S = 4
    f = ImageFont.truetype(str(FONT), 100)
    cap = f.getbbox("H")[3] - f.getbbox("H")[1]
    f = ImageFont.truetype(str(FONT), round(100 * KAPPE * S / cap))
    im = Image.new("L", (w * S, h * S), 0); d = ImageDraw.Draw(im)
    oben = f.getbbox("H")[1]
    x = 0; track = 0.06 * KAPPE * S                  # leichte Sperrung wie das Original
    for ch in TEXT:
        d.text((x, -oben), ch, font=f, fill=255)
        x += f.getlength(ch) + track
    return im.resize((w, h), Image.BOX)

def fix(im, art):
    a = np.asarray(im.convert("RGB")).astype(np.float32)
    H, W = a.shape[:2]
    dx = DX[art]
    x0, y0, x1, y1 = BAND; x0 += dx; x1 += dx
    x0c, x1c = max(0, x0), min(W, x1)
    bh = y1 - y0
    # 1) Blech: je Spalte Verlauf zwischen Zeile ueber und unter dem Band, dazu die Buerstspuren von oben
    oben = a[y0 - 4:y0, x0c:x1c].mean(0); unten = a[y1:y1 + 4, x0c:x1c].mean(0)
    t = np.linspace(0, 1, bh)[:, None, None]
    glatt = oben[None] * (1 - t) + unten[None] * t
    # Buerstspuren aus einem schmalen Blechstreifen direkt ueber dem Band (darueber beginnen die Kuehlrippen),
    # gespiegelt gestapelt bis zur Bandhoehe
    streifen = a[y0 - 36:y0 - 4, x0c:x1c]
    st = streifen - cv2.GaussianBlur(streifen, (0, 0), 5)
    spur = np.concatenate([st, st[::-1]] * (bh // (2 * len(st)) + 1))[:bh]
    neu = glatt + spur
    # weich einblenden an den Bandkanten (oben/unten 6 px, links 8 px; rechts liegt das Band im Blech)
    k = np.ones((bh, x1c - x0c), np.float32)
    for i in range(6): k[i] *= (i + 1) / 7; k[-1 - i] *= (i + 1) / 7
    if x0c == x0:
        for i in range(8): k[:, i] *= (i + 1) / 9
    for i in range(8): k[:, -1 - i] *= (i + 1) / 9
    reg = a[y0:y1, x0c:x1c]
    a[y0:y1, x0c:x1c] = reg * (1 - k[..., None]) + neu * k[..., None]
    # 2) Zeichen + Schrift als ein Alpha
    al = np.zeros((H, W), np.float32)
    zx0, zy0, zx1, zy1 = ZEICHEN
    zh = round((zy1 - zy0 + 1) * 0.80); zw = round(zh * MARK.width / MARK.height)
    zx = zx1 + 1 - zw + dx; zy = round((zy0 + zy1 + 1) / 2 - zh / 2)
    gross = MARK.resize((zw * 4, zh * 4), Image.LANCZOS).filter(ImageFilter.MaxFilter(5))   # Linien so kraeftig wie die Schrift
    m = np.asarray(gross.resize((zw, zh), Image.BOX), np.float32) / 255
    _paste(al, m, zx, zy)
    sw, sh = 420, KAPPE + 6
    s = np.asarray(_schrift_maske(sw, sh), np.float32) / 255
    _paste(al, s, SCHRIFT_X + dx, KAPPE_OBEN)
    al = cv2.GaussianBlur(al, (0, 0), 0.45)[..., None]
    lum = a.mean(2, keepdims=True) / 230.0             # Blechschimmer traegt auch die Farbe
    a = a * (1 - al) + INK * lum * al
    return Image.fromarray(np.clip(a, 0, 255).astype(np.uint8))

def _paste(dst, src, x, y):
    H, W = dst.shape; h, w = src.shape
    sx0, sy0 = max(0, -x), max(0, -y); dx0, dy0 = max(0, x), max(0, y)
    w2, h2 = min(w - sx0, W - dx0), min(h - sy0, H - dy0)
    if w2 > 0 and h2 > 0:
        dst[dy0:dy0 + h2, dx0:dx0 + w2] = np.maximum(dst[dy0:dy0 + h2, dx0:dx0 + w2], src[sy0:sy0 + h2, sx0:sx0 + w2])

if __name__ == "__main__":
    import sys
    for art in ("breit", "handy"):
        fix(Image.open(ROOT / f"preview/assets/bilder/hero-film/{art}/f000.webp"), art).save(sys.argv[1] + f"/karte_{art}.png")
