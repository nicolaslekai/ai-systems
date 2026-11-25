#!/usr/bin/env python3
"""Neuer Hero: Menschen in einer modernen Werbeagentur statt Grafikkarte · Coralrooms · 25.11.2026

Nicky 25.11.2026: "the first photo needs to be just a really fun agency, people having a meeting together. Let's remove
everything technical from the website, like graphic cards and computers … make it like people having fun in a modern
advertising agency."  Desktop 16:9 (Text links ueber dunklem Verlauf -> Handlung rechts der Mitte), Handy 1:1 aus der
gewaehlten Fassung. Nano Banana ueber ComfyUI :8188, Mechanik aus rendern_film.py.

    python3 tools/rendern_hero_agentur.py [name ...]
Ergebnis: preview/_quellen/hero-agentur/<name>_KJ_v###.png
"""
import sys
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent))
import rendern_film as rf

rf.OUT = rf.ROOT / "preview/_quellen/hero-agentur"

LOOK = ("Analogue photograph on a Leica M6 with a 35mm Summicron at f/4 on Kodak Portra 400: fine natural grain, "
        "gentle halation, true warm colours, every face sharp with real skin texture, rich fine detail.")

SZENE = ("A creative meeting in a modern advertising agency: a bright converted loft with whitewashed brick, tall "
  "steel-frame windows and plants, seen as one continuous room in a single wide frame. GEOMETRY: the group sits "
  "right of centre; toward the LEFT edge the same brick wall runs on into soft shade with a tall monstera beside "
  "it. Six people gather around a long oak table covered in printed "
  "campaign layouts, sticky notes, markers, coffee cups and a bowl of oranges. A woman with a short black bob "
  "stands at a wall of pinned poster prints and turns back laughing, pointing at one print. A man with a red "
  "beanie leans back in his chair, laughing with his head tipped back. A woman with grey curls and round glasses "
  "covers her mouth, giggling. A young man in a denim jacket holds up a hand-drawn storyboard sheet like a trophy. "
  "Two more lean in across the table, grinning. Everyone in relaxed creative clothes. The only screens in the room "
  "are switched off. Late-afternoon sun through the windows from the RIGHT, warm light on faces, ~70% warm wood, "
  "brick and skin, ~20% soft daylight blue, ~10% coral from one jumper and a few sticky notes. 47 degree lens (50mm), "
  "eye level, standing at the end of the table. ")

HOCH = ("Image 1 is the photograph: keep the same room, the same six people, their faces, clothes, expressions and the "
  "light exactly. Recompose as a square frame closer on the group: the woman at the poster wall and the laughing man "
  "with the red beanie in the centre, the table with the prints in the lower third. ")

rf.JOBS = {
  "hero-agentur-a": (SZENE + LOOK + " 16:9.", "16:9", "4K", 14001, []),
  "hero-agentur-b": (SZENE + LOOK + " 16:9.", "16:9", "4K", 14017, []),
}
for _w in ("a", "b"):
    rf.JOBS[f"hero-agentur-{_w}-handy"] = (HOCH + LOOK + " 1:1.", "1:1", "2K", 14101, [f"@hero-agentur-{_w}"])

# Team-Band statt Steckfeld-Rack (Nicky 25.11.: "remove everything technical"): derselbe Agenturtisch nach dem Meeting, ohne
# Menschen (keine erfundenen Gesichter neben Nicolas und Mirko). Breit 16:9, Handy 9:16 aus der Breitfassung.
TISCH = ("Image 1 shows the agency loft and its long oak table: keep the same room, brick, windows, light and objects. "
  "The meeting has just ended and everyone has left. Close on the table from a low angle along its length: printed "
  "campaign layouts fanned out, a hand-drawn storyboard sheet, rows of coloured sticky notes, uncapped markers, three "
  "half-drunk coffee cups, the bowl of oranges with one orange peeled, two chairs pushed back. Pinned poster prints on "
  "the brick wall soft behind. Late-afternoon sun from the RIGHT in long warm stripes across the table. 63 degree lens (32mm). ")
rf.JOBS["team-tisch"] = (TISCH + LOOK + " 16:9.", "16:9", "4K", 14201, ["@hero-agentur-a"])
rf.JOBS["team-tisch-hoch"] = ("Image 1 is the photograph: keep the same table, objects, room and light exactly. Recompose as "
  "a tall vertical frame: the end of the table with the storyboard, sticky notes and the bowl of oranges in the lower half, "
  "the brick wall with pinned prints and a tall window above. " + LOOK + " 9:16.", "9:16", "2K", 14202, ["@team-tisch"])

# "Built by us"-Band statt Schnittraum: Variante B, die Schreibtische mit Bildschirmen hinten rechts werden Wand und Fenster
rf.JOBS["werkstatt-agentur"] = ("Image 1 is the photograph: keep every person, face, expression, pose, piece of clothing, "
  "the table, the posters, the light and the framing exactly as they are. One change at the far RIGHT behind the two "
  "men: the back of the loft is whitewashed brick with a tall arched steel window and a coat rack with two jackets, "
  "the floor runs on empty. " + LOOK + " 16:9.", "16:9", "4K", 14301, ["@hero-agentur-b"])


def main():
    rf.OUT.mkdir(parents=True, exist_ok=True)
    namen = sys.argv[1:] or list(rf.JOBS)
    erst = [n for n in namen if not rf.JOBS[n][4]]
    dann = [n for n in namen if n not in erst]
    with ThreadPoolExecutor(6) as ex:
        for r in ex.map(rf.rendere, erst):
            print(r, flush=True)
        for r in ex.map(rf.rendere, dann):
            print(r, flush=True)


if __name__ == "__main__":
    main()
