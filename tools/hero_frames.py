#!/usr/bin/env python3
"""Zerlegt die Hero-Filme in Einzelbilder fuer assets/hero-film.js (Scroll-Scrub).
    python3 tools/hero_frames.py <breit.mp4> <hoch.mp4>
Je 72 Bilder einer nahtlosen Schleife (letztes Quellbild = erstes, faellt weg); breit 1600x900, handy 900x900, WebP q72.
Bild 0 wird zusaetzlich als Standbild (Poster) abgelegt: hero-film-breit.webp / hero-film-hoch.webp.
"""
import subprocess, sys, shutil, tempfile
from pathlib import Path
from PIL import Image
sys.path.insert(0, str(Path(__file__).resolve().parent))
from karte_beschriftung import fix as beschriften   # LOCAL GPU + echtes Zeichen (Nicky 25.11.2026)
ROOT = Path(__file__).resolve().parent.parent
ZIEL = ROOT / "preview/assets/bilder/hero-film"
N = 72
GROESSE = {"breit": (1600, 900), "handy": (900, 900)}

def zerlege(mp4, art):
    w, h = GROESSE[art]
    out = ZIEL / art; shutil.rmtree(out, ignore_errors=True); out.mkdir(parents=True)
    with tempfile.TemporaryDirectory() as t:
        subprocess.run(["ffmpeg", "-v", "error", "-i", str(mp4), "-vsync", "0", f"{t}/%04d.png"], check=True)
        alle = sorted(Path(t).glob("*.png"))
        alle = alle[:-1]   # letztes Bild = erstes (Schleife), nicht doppelt
        for k in range(N):
            src = alle[min(len(alle) - 1, round(k * len(alle) / N))]
            im = Image.open(src).convert("RGB")
            s = max(w / im.width, h / im.height)
            im = im.resize((round(im.width * s), round(im.height * s)), Image.LANCZOS)
            x, y = (im.width - w) // 2, (im.height - h) // 2
            im = im.crop((x, y, x + w, y + h))
            im = beschriften(im, art)
            im.save(out / f"f{k:03d}.webp", quality=72, method=6)
            if k == 0: im.save(ZIEL.parent / f"hero-film-{art}.webp", quality=85, method=6)
        print(art, len(alle), "Quellbilder ->", N, sum(f.stat().st_size for f in out.iterdir()) // 1024, "KB")

if __name__ == "__main__":
    zerlege(sys.argv[1], "breit"); zerlege(sys.argv[2], "handy")
