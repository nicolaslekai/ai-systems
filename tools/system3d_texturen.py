#!/usr/bin/env python3
"""Bildschirm- und Foto-Texturen fuer das 3D-Systembild, geschnitten aus dem alten Standbild.

Nicky 24.11.2026: "model this exactly" und "make sure have the image content inside" — die Bildschirme und
Fotos im 3D-Bild zeigen dieselben Bilder wie das Diorama davor (preview/assets/bilder/system-film.webp,
Quelle preview/_quellen/film/system-koralle_KJ_v001.png, 5504 x 3072). Jede Flaeche wird mit einer
Perspektiv-Entzerrung (cv2.getPerspectiveTransform) flach gezogen und als deckendes JPG gespeichert —
ohne Alphakanal, damit iOS Safari beim Hochladen nichts entmultipliziert (die bunten Punkte vom 24.11.).

Eckpunkte in Pixeln der Quelle, Reihenfolge oben links, oben rechts, unten rechts, unten links (auf der
Flaeche selbst gesehen). Der Bildschirm ragt oben aus dem Standbild heraus; dort fehlt Bild, deshalb wird
nur der sichtbare Teil links unten genommen (gleiches Seitenverhaeltnis, 16:9).

    python3 tools/system3d_texturen.py
"""
from pathlib import Path
import cv2
import numpy as np

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "preview/_quellen/film/system-koralle_KJ_v001.png"
OUT = ROOT / "preview/assets/system3d/tex"
OUT.mkdir(parents=True, exist_ok=True)
img = cv2.imread(str(SRC))


def flat(quad, w, h):
    """Zieht ein Viereck der Quelle auf ein Rechteck w x h."""
    m = cv2.getPerspectiveTransform(np.float32(quad), np.float32([[0, 0], [w, 0], [w, h], [0, h]]))
    return cv2.warpPerspective(img, m, (w, h), flags=cv2.INTER_LANCZOS4, borderMode=cv2.BORDER_REPLICATE)


def save(name, im, w=None):
    if w:
        im = cv2.resize(im, (w, round(im.shape[0] * w / im.shape[1])), interpolation=cv2.INTER_AREA)
    cv2.imwrite(str(OUT / name), im, [cv2.IMWRITE_JPEG_QUALITY, 88])
    print(name, im.shape[1], "x", im.shape[0])


# Studio-Bildschirm: schwarze Glasfront. Oben rechts liegt sie ausserhalb des Standbilds -> sichtbarer Ausschnitt.
TL, BL, BR = np.array([1525, 123]), np.array([1585, 1088]), np.array([3020, 520])
TR = TL + BR - BL
m = cv2.getPerspectiveTransform(np.float32([TL, TR, BR, BL]), np.float32([[0, 0], [1600, 0], [1600, 900], [0, 900]]))
mon = cv2.warpPerspective(img, m, (1600, 900), flags=cv2.INTER_LANCZOS4, borderMode=cv2.BORDER_CONSTANT, borderValue=0)
valid = cv2.warpPerspective(np.full(img.shape[:2], 255, np.uint8), m, (1600, 900), borderValue=0)
miss = cv2.dilate((valid < 250).astype(np.uint8) * 255, np.ones((9, 9), np.uint8)) > 0   # ausserhalb des Standbilds
mon = mon.astype(np.float32)
# Rechter Bildbetrachter (x 737-1353, y 122-468): fehlender Himmel = Himmelsverlauf aus dem linken Betrachter
# (Zeile fuer Zeile), an jeder Spalte weich an das erste vorhandene Pixel angeglichen.
prof = np.median(mon[:, 40:190], axis=1)
for x in range(737, 1353):
    col = miss[122:468, x]
    if not col.any():
        continue
    y0 = 122 + int(np.argmin(col)) if not col.all() else 468
    ref = mon[min(y0 + 4, 467), x] - prof[min(y0 + 4, 467)]
    if np.abs(ref).max() > 35:                   # dunkles Motiv (Kopf) nicht nach oben verschmieren
        ref = ref * 0
    for y in range(122, y0 + 1):
        w = max(0.0, 1 - (y0 - y) / 30)
        mon[y, x] = prof[y] + ref * w
band = np.zeros(miss.shape, bool); band[122:468, 737:1353] = miss[122:468, 737:1353]
soft = cv2.GaussianBlur(mon, (0, 0), 7)
mon[band] = soft[band]
# Werkzeugleiste oben: jede Zeile nach rechts fortgesetzt; Inspektor rechts: jede Spalte nach oben fortgesetzt
fixed = band.copy()
for y in range(0, 122):
    row = miss[y]
    if row.any() and not row.all():
        x0 = int(np.argmax(row))
        mon[y, x0:][row[x0:]] = np.median(mon[y, max(0, x0 - 60):x0], axis=0)
        fixed[y, x0:] |= row[x0:]
for x in range(1353, 1600):
    col = miss[:, x]
    if col[122:].any() and not col[122:].all():
        y0 = 122 + int(np.argmin(col[122:]))
        mon[122:y0, x] = np.median(mon[y0:y0 + 30, x], axis=0)
        fixed[122:y0, x] = True
mon[miss & ~fixed] = np.median(mon[505:515, 40:600].reshape(-1, 3), axis=0)
mon = np.clip(mon, 0, 255).astype(np.uint8)
cv2.rectangle(mon, (0, 0), (1599, 899), (14, 13, 15), 14)
save("schnitt_KJ_v001.jpg", mon, 1280)

# Tablet: weisse Flaeche mit dem Bleistift-Storyboard
save("storyboard_KJ_v001.jpg", flat([[4125, 1195], [4835, 985], [5305, 1228], [4545, 1652]], 1600, 1200), 1024)

# Grading-Pult: die schwarze Glasleiste mit Farbraedern und Scopes
save("grading_KJ_v001.jpg", flat([[3645, 2010], [4440, 1720], [4575, 1895], [3770, 2245]], 1600, 500), 1024)

# Foto im Acrylstaender: das grosse Querformat; unten verdecken es die vorderen Abzuege -> obere 60 Prozent
big = flat([[1153, 1997], [2008, 1675], [2080, 2233], [1225, 2555]], 1650, 1000)
save("foto-quer_KJ_v001.jpg", big[0:600, 330:1320], 800)          # Frau im Profil, Skyline, Abendhimmel
save("foto-hoch_KJ_v001.jpg", big[0:600, 520:1050], 480)           # enger: Kopf und Schultern
