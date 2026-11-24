#!/usr/bin/env python3
"""Blau -> Koralle in Quelltext (three.js-Szene, brain.js): 0xRRGGBB, #rrggbb, 'r,g,b' und rgba(r,g,b.
Nur sichtbar bunte Werte (Buntheit max-min >= 0.10) im Blaufenster 165-265 Grad; neutrale Metalle und
Grautoene bleiben, auch wenn sie einen Hauch Blaustich haben.
    python3 tools/koralle_code.py datei.js [...]"""
import sys, re, colorsys

def shift(r, g, b):
    h, s, v = colorsys.rgb_to_hsv(r / 255, g / 255, b / 255)
    if 165 / 360 <= h <= 265 / 360 and s * v >= 0.10:
        return tuple(round(x * 255) for x in colorsys.hsv_to_rgb(11.7 / 360, min(1, s * 1.05), v)), True
    return (r, g, b), False

for f in sys.argv[1:]:
    t = open(f).read(); n = [0]
    def hx(m):
        v = int(m.group(1), 16); c, ch = shift(v >> 16, (v >> 8) & 255, v & 255); n[0] += ch
        return "0x%02x%02x%02x" % c if ch else m.group(0)
    def trip(m):
        c, ch = shift(*map(int, m.group(2, 3, 4))); n[0] += ch
        return f"{m.group(1)}{c[0]},{c[1]},{c[2]}" if ch else m.group(0)
    def hs(m):
        h = m.group(1); c, ch = shift(int(h[:2], 16), int(h[2:4], 16), int(h[4:], 16)); n[0] += ch
        return "#%02x%02x%02x" % c if ch else m.group(0)
    t = re.sub(r"0x([0-9a-fA-F]{6})\b", hx, t)
    t = re.sub(r"(rgba?\(\s*|')(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})", trip, t)
    t = re.sub(r"#([0-9a-fA-F]{6})\b", hs, t)
    open(f, "w").write(t); print(f, n[0], "Farben umgestellt")
