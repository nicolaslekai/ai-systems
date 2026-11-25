#!/usr/bin/env python3
"""Produktbilder fuer die App-Vorschlaege (PDF, danach Website) · Coralrooms · 25.11.2026

Nicky 25.11.2026 nach dem Wella-Creative-Studio-Film: "we cannot use any of that footage … instead of hair … a drinks
brand … maybe mix it with a shoe brand. Make small images for the products using Nano Banana Pro. And then suggest
products like those in a PDF … before we include it in the website." Top fuenf Apps, Platz sechs = Audit + Massanfertigung.

Getraenke = ZULU (erfundene Marke, schon im Footage-Such-Beispiel, Dosen-Referenz aus _quellen/zulu), dazu die
erfundene Laufschuhmarke NORROW. Nano Banana ueber ComfyUI :8188, Mechanik aus rendern_film.py.

    python3 tools/rendern_produkte.py [name ...]
Ergebnis: preview/_quellen/produkte/<name>_KJ_v###.png
"""
import shutil, sys
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent))
import rendern_film as rf

rf.OUT = rf.ROOT / "preview/_quellen/produkte"

SCHUH = ("Product photograph of one trail running shoe from the brand NORROW, clean side view with the toe pointing "
  "screen-left, on a pale grey seamless studio surface. Off-white engineered knit upper, a coral heel tab, coral laces, "
  "a chunky dark graphite outsole with deep lugs. The only branding: one thin coral ring the size of a coin on the "
  "side panel and the word NORROW in small black capitals along the heel; the rest of the side panel is plain knit. "
  "Soft even daylight, open soft shadow, crisp detail at f/8. 3:2.")
# v001 (25.11.) hatte einen Doppel-Winkel wie ein echtes Sportmarkenlogo -> v002 mit schlichtem Ring

REFS = ("Image 1 shows the ZULU drink cans: every can in this frame is one of them, label exactly as in Image 1. "
        "Image 2 shows the NORROW running shoe: every shoe in this frame is that model. ")
FOTO = (" Photograph on a Leica M11 with a 35mm Summilux, real available light, true natural colours, fine grain, "
        "crisp detail, deep focus where it matters. 3:2.")

SZENEN = {
  "produkt-archiv": "A post-production suite at night. A large monitor fills the RIGHT two thirds of the frame and "
    "shows a media library app in a dark interface: a search field at the top reading \"fruity, outdoors, water\" and "
    "below it a tidy grid of twelve bright photo thumbnails, all summer scenes by water: friends on a lake jetty "
    "holding ZULU cans, a runner in NORROW shoes splashing through a shallow river, ZULU cans in a cooler of ice, sliced "
    "peaches on a towel by the sea. Small coral tag pills under each thumbnail. On the desk at LEFT a keyboard, a hand on "
    "a mouse and a cold ZULU ICED TEA PEACH can with droplets. The screen is the main light. 47 degree lens (50mm).",
  "produkt-plakat": "A city street at blue hour after rain. On the LEFT a bus shelter with a backlit poster, on the "
    "RIGHT a large portrait digital billboard on a brick wall, both showing the same campaign in two layouts: a runner "
    "in NORROW shoes mid-stride on a lakeside path, a ZULU ORANGE can large in the foreground, the headline "
    "\"RUN ON ORANGE\" in heavy white capitals and the ZULU wordmark in the corner. Wet asphalt reflects both "
    "posters, a cyclist passes soft in the background. 63 degree lens (32mm).",
  "produkt-social": "Top-down view of a pale grey table. Five phones lie in a neat row, each screen showing a "
    "different vertical social video from one ZULU summer campaign: a runner in NORROW shoes splashing through a river, "
    "a ZULU ORANGE can opening with spray, friends jumping off a jetty, a NORROW shoe on a wet rock, ZULU cans on "
    "crushed ice. Each screen has a slim caption line at the bottom. A ZULU ICED TEA LEMON can and one NORROW shoe lie "
    "at the top edge of the frame. Soft window daylight from the LEFT. 47 degree lens (50mm).",
  "produkt-schnitt": "An empty editing suite in a loft at dusk, the chair pushed back. A wide monitor shows an "
    "editing timeline with rows of colourful clips and a large viewer: a runner in NORROW shoes leaps over a stream "
    "holding a ZULU ICED TEA LEMON can. Beside the viewer a vertical 9:16 version of the same shot. On the desk a "
    "coral desk lamp glowing, two studio speakers, a ZULU COLA can, a plant. Brick wall and tall steel window soft "
    "behind. 47 degree lens (50mm).",
  "produkt-packshot": "A white studio wall with six large printed photographs pinned in a 3 by 2 grid with small "
    "black clips. Every print shows the same ZULU ORANGE can in a different setting: on a pile of halved oranges, in a "
    "clear mountain stream, on a white marble plinth, floating in a turquoise pool, on cracked desert earth, beside a "
    "NORROW shoe on a wet rock. A designer's hand in a grey sleeve pins the last print at the lower RIGHT. Soft "
    "daylight from the LEFT. 47 degree lens (50mm).",
  "produkt-audit": "A workshop in a loft studio. Two people lean over a big wooden table covered by a long sheet of "
    "paper with a hand-drawn process map: boxes, arrows and rows of coloured sticky notes. A woman in her fifties with "
    "short grey hair and a navy sweater points at one box with a pen; a younger man with a beard and a denim shirt "
    "writes a new sticky note. Two open laptops, coffee cups and two ZULU cans on the table. A whiteboard with sketched "
    "boxes behind them, tall window light from the LEFT. 47 degree lens (50mm).",
}

rf.JOBS = {"norrow-schuh": (SCHUH, "3:2", "2K", 13001, [])}
for _i, (_n, _s) in enumerate(SZENEN.items()):
    rf.JOBS[_n] = (REFS + _s + FOTO, "3:2", "2K", 13011 + _i * 7, ["@zulu-dosen", "@norrow-schuh"])


def main():
    rf.OUT.mkdir(parents=True, exist_ok=True)
    dosen = rf.OUT / "zulu-dosen_KJ_v001.png"
    if not dosen.exists():
        shutil.copy(rf.ROOT / "preview/_quellen/zulu/zulu-dosen_KJ_v001.png", dosen)
    namen = sys.argv[1:] or list(rf.JOBS)
    erst = [n for n in namen if not any(r.startswith("@norrow") for r in rf.JOBS[n][4])]
    dann = [n for n in namen if n not in erst]
    with ThreadPoolExecutor(6) as ex:
        for r in ex.map(rf.rendere, erst):
            print(r, flush=True)
        for r in ex.map(rf.rendere, dann):
            print(r, flush=True)


if __name__ == "__main__":
    main()
