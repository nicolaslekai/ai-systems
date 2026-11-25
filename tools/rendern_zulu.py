#!/usr/bin/env python3
"""Beispiel-Fall "Zulu" fuer consulting.nicolaslekai.com: ein ausgedachter Getraenkehersteller mit 20 TB Drehmaterial.

Nicky 25.11.2026: "let's use an imaginary drink company … called Zulu … cool iced teas and cool Coke drinks and Fanta
stuff … they have 20 terabyte of footage, and we will build a system where you can just browse, AI that we custom
build scans the images for content."  (Auf der Seite keine echten Markennamen: Eistee, Cola, Orange.)

Erst die Dosen-Referenz (zulu-dosen), dann die Standbilder aus den "Drehs", alle mit den Dosen als Image 1.
Nutzt die Render-Mechanik aus rendern_film.py (Nano Banana ueber ComfyUI :8188).

    python3 tools/rendern_zulu.py [name ...]
Ergebnis: preview/_quellen/zulu/<name>_KJ_v###.png
"""
import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent))
import rendern_film as rf

rf.OUT = rf.ROOT / "preview/_quellen/zulu"

DOSEN = ("Product photograph of four slim 330 ml aluminium drink cans from the brand ZULU, standing in a row on a pale "
  "grey seamless studio surface, soft even light, straight front view, every label fully readable. All four cans share "
  "one design: matte finish, the word ZULU in heavy rounded geometric capitals running vertically up the can, a thin "
  "horizontal band near the bottom with the flavour name in small capitals, a small round sun emblem near the top. "
  "From left to right: ZULU ICED TEA PEACH in warm peach with a cream wordmark; ZULU ICED TEA LEMON in pale lemon "
  "yellow with a deep green wordmark; ZULU COLA in deep black with a silver wordmark; ZULU ORANGE in bright tangerine "
  "with a white wordmark. Fine condensation droplets on each can. Crisp detail at f/8. 3:2.")

DOSE = "Image 1 shows the ZULU cans: every can in this frame is one of them, with its label exactly as in Image 1. "
LOOK = (" Frame from a drinks commercial, shot on ARRI Alexa 35 with a vintage anamorphic lens: natural skin with "
        "pores, fine film grain, real light, rich but natural colour. 16:9.")

SZENEN = {
  "zulu-strand": "Golden hour on a wide sandy beach. Two friends in their twenties sit on a faded towel, a woman with "
    "dark curls laughs with her head tipped back, holding a ZULU ICED TEA PEACH can, her friend in a linen shirt "
    "grins beside her. Low sun from screen-right, warm rim light on hair, the sea soft behind them. 47 degree lens (50mm).",
  "zulu-skatepark": "A concrete skatepark in Berlin on an overcast afternoon. A young man in a grey hoodie sits on "
    "the lip of a bowl, skateboard across his knees, drinking from a ZULU COLA can, graffiti and a few skaters soft in "
    "the background. 63 degree lens (32mm), low angle.",
  "zulu-giessen": "Macro close-up in a dark studio: ZULU ICED TEA LEMON pours from the can into a tall glass full of "
    "clear ice cubes, amber tea swirling, bubbles and a lemon slice, the can tilted at the top of frame, a hard back "
    "light making the tea glow. 18 degree lens (120mm macro).",
  "zulu-packshot": "Studio packshot: the four ZULU cans standing on wet black slate, crushed ice around their base, a "
    "frozen splash of water arcing behind them, droplets on every can, one soft key light from above-left, deep black "
    "background. 29 degree lens (80mm).",
  "zulu-festival": "Summer festival at dusk, seen from inside the crowd. Raised hands holding ZULU ORANGE cans in the "
    "foreground, a woman on a friend's shoulders cheering, stage lights and haze far behind, confetti in the air. "
    "84 degree lens (22mm), handheld.",
  "zulu-dach": "A rooftop party at night above a city, string lights overhead. A zinc tub full of ice and ZULU cans of "
    "all four flavours in the foreground, sharp; behind it friends dancing and talking, soft. 47 degree lens (50mm).",
  "zulu-kuehlschrank": "Morning in a bright apartment kitchen. A young woman in an oversized t-shirt opens the fridge "
    "and reaches for a ZULU ICED TEA PEACH can, the fridge door shelf filled with ZULU cans, cool fridge light on her "
    "face, warm sunlight from the window behind. 63 degree lens (32mm).",
  "zulu-spaeti": "Evening outside a Berlin corner shop. Two friends sit on the bench in front, one opening a ZULU "
    "ORANGE can, the other holding a ZULU COLA, the lit shop window and a drinks fridge full of ZULU cans behind them, "
    "a bicycle leaning on the wall. 47 degree lens (50mm).",
}

rf.JOBS = {"zulu-dosen": (DOSEN, "3:2", "2K", 12001, [])}
for _i, (_n, _s) in enumerate(SZENEN.items()):
    rf.JOBS[_n] = (DOSE + _s + LOOK, "16:9", "2K", 12011 + _i * 7, ["@zulu-dosen"])


def main():
    rf.OUT.mkdir(parents=True, exist_ok=True)
    namen = sys.argv[1:] or list(rf.JOBS)
    erst = [n for n in namen if not any(r.startswith("@") for r in rf.JOBS[n][4])]
    dann = [n for n in namen if n not in erst]
    from concurrent.futures import ThreadPoolExecutor
    with ThreadPoolExecutor(8) as ex:
        for r in ex.map(rf.rendere, erst):
            print(r, flush=True)
        for r in ex.map(rf.rendere, dann):
            print(r, flush=True)


if __name__ == "__main__":
    main()
