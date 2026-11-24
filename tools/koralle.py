#!/usr/bin/env python3
"""Otter-&-Stein-Bilder -> Nicolas' Koralle.

Nimmt die fertigen WebP der O&S-Seite (Blau auf #8DD2EC gezogen) und dreht nur die
blauen Anteile auf Koralle #ff7f61 (Kimi Jimmy, H 11.7 Grad). Warme Toene (Haut, Holz)
und fast graue Flaechen bleiben stehen: das Gewicht steigt weich mit der Saettigung und
faellt an den Raendern des Farbfensters ab, damit keine Kanten entstehen.

    python3 tools/koralle.py <quellordner> <zielordner> [datei.webp ...]
"""
import sys
from pathlib import Path
import numpy as np
from PIL import Image

KORALLE = 11.7
FENSTER = (165.0, 265.0)
WEICH = 20.0              # Grad Uebergang an den Fenstergrenzen
CHROMA = (0.09, 0.20)     # Gewicht 0 -> 1 ueber diese Buntheit (max-min); dunkle kuehle Schatten bleiben
REST = 0.18


def hsv(rgb):
    hi, lo = rgb.max(-1), rgb.min(-1); d = hi - lo
    r, g, b = rgb[..., 0], rgb[..., 1], rgb[..., 2]
    h = np.zeros_like(hi); n = d > 1e-6
    m = n & (hi == r); h[m] = (60 * (g - b)[m] / d[m]) % 360
    m = n & (hi == g) & ~(hi == r); h[m] = 60 * (b - r)[m] / d[m] + 120
    m = n & (hi == b) & ~(hi == r) & ~(hi == g); h[m] = 60 * (r - g)[m] / d[m] + 240
    s = np.where(hi > 1e-6, d / np.maximum(hi, 1e-6), 0)
    return h, s, hi


def rgb(h, s, v):
    h = h % 360; i = np.floor(h / 60).astype(int) % 6; f = h / 60 - np.floor(h / 60)
    p, q, t = v * (1 - s), v * (1 - f * s), v * (1 - (1 - f) * s)
    c = [i == k for k in range(6)]
    return np.stack([np.select(c, [v, q, p, p, t, v]), np.select(c, [t, v, v, q, p, p]),
                     np.select(c, [p, p, t, v, v, q])], -1)


def koralle(img):
    a = np.asarray(img.convert("RGB"), dtype=np.float64) / 255
    h, s, v = hsv(a)
    lo, hi = FENSTER
    wh = np.clip(np.minimum(h - (lo - WEICH), (hi + WEICH) - h) / WEICH, 0, 1)
    ws = np.clip((s * v - CHROMA[0]) / (CHROMA[1] - CHROMA[0]), 0, 1)
    w = wh * ws
    mitte = (lo + hi) / 2
    h2 = KORALLE + (h - mitte) * REST
    # Koralle braucht etwas mehr Saettigung als Hellblau, sonst wirkt sie rosa-grau
    s2 = np.minimum(s * 1.15 + 0.03, 1)
    neu = rgb(h2, s2, v)
    out = a * (1 - w[..., None]) + neu * w[..., None]
    return Image.fromarray(np.clip(out * 255 + 0.5, 0, 255).astype(np.uint8))


if __name__ == "__main__":
    src, dst = Path(sys.argv[1]), Path(sys.argv[2]); dst.mkdir(parents=True, exist_ok=True)
    files = [src / f for f in sys.argv[3:]] or sorted(src.glob("*.webp"))
    for f in files:
        koralle(Image.open(f)).save(dst / f.name, "WEBP", quality=84, method=6)
        print("ok", f.name)
