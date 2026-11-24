"""Backt den Blattkranz des Desktop-Hero-Luefters (team-gpu.webp, voll im Bild) als Polartextur fuer assets/hero-luefter.js.
Zeile = Winkel (N), Spalte = rho 0..1 von der Nabe zum Ring (M). Zweite Fassung farblich an das Hochkant-Bild angeglichen,
dessen Luefter am linken Rand abgeschnitten ist (24.11.2026). Aufruf: python3 tools/luefter_textur.py"""
import numpy as np
from PIL import Image
from pathlib import Path
B = Path(__file__).resolve().parent.parent / "preview/assets/bilder"
N, M = 1400, 200

def polar(img, c, r, h):
    a = np.asarray(img.convert("RGB"), dtype=np.float32)
    cx, cy = c; rx, ry = r; px, py = (h[0]-cx)/rx, (h[1]-cy)/ry
    ang = 2*np.pi*np.arange(N)/N; dx, dy = np.cos(ang), np.sin(ang)
    b = px*dx+py*dy; cc = px*px+py*py-1; t = -b+np.sqrt(b*b-cc)
    rho = (np.arange(M)+0.5)/M
    X = cx + rx*(px + dx[:, None]*t[:, None]*rho[None, :])
    Y = cy + ry*(py + dy[:, None]*t[:, None]*rho[None, :])
    ok = (X >= 0) & (Y >= 0) & (X <= a.shape[1]-1) & (Y <= a.shape[0]-1)
    Xc, Yc = np.clip(X, 0, a.shape[1]-1.001), np.clip(Y, 0, a.shape[0]-1.001)
    x0, y0 = Xc.astype(int), Yc.astype(int); fx, fy = (Xc-x0)[..., None], (Yc-y0)[..., None]
    v = (a[y0, x0]*(1-fx)*(1-fy) + a[y0, x0+1]*fx*(1-fy) + a[y0+1, x0]*(1-fx)*fy + a[y0+1, x0+1]*fx*fy)
    return v, ok

d, _ = polar(Image.open(B/"team-gpu.webp"), (1230, 639), (168, 257), (1215, 642))
Image.fromarray(d.clip(0, 255).astype(np.uint8)).save(B/"luefter-polar.webp", quality=92)
h, ok = polar(Image.open(B/"team-gpu-hoch.webp"), (115, 651), (170, 262), (100, 649))
# Farbangleich je Kanal und je Radius-Band (Mittel/Streuung der gueltigen Hochkant-Abtastungen)
o = d.copy()
for j0 in range(0, M, 20):
    sl = slice(j0, j0+20); m = ok[:, sl]
    for k in range(3):
        src, ref = d[:, sl, k], h[:, sl, k][m]
        if ref.size < 50: continue
        o[:, sl, k] = (src - src.mean())/(src.std()+1e-3)*ref.std() + ref.mean()
Image.fromarray(o.clip(0, 255).astype(np.uint8)).save(B/"luefter-polar-hoch.webp", quality=92)
print("ok", (B/"luefter-polar.webp").stat().st_size, (B/"luefter-polar-hoch.webp").stat().st_size)
