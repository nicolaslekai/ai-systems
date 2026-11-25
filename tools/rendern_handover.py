#!/usr/bin/env python3
"""Begleitungs-Band "After the handover": dieselben vier Menschen, ohne Schnittsoftware, dazu ein Mann im CORALROOMS-Shirt,
der ihnen etwas auf dem iPad zeigt · 25.11.2026

Nicky 25.11.2026: "lets do more of a handover image, same people with no editing software screens put a dude on there who
has a coralrooms tshirt who shows those people stuff on a ipad". GPT Image 2.5 Pro ueber rendern_gpt.py; Image 1 = altes
Bild (Gesichter), Image 2 = Logo-Lockup (Zeichen + Wortmarke, fuer das Shirt Linie fuer Linie).

    python3 tools/rendern_handover.py breit|hoch
Ergebnis: preview/_quellen/film/handover-<breit|hoch>_KJ_v###.png
"""
import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent))
import rendern_gpt as G

LOOK = ("Analogue photograph on a Leica M6 with Kodak Portra 400: fine grain, warm natural colours, soft window light from "
        "the LEFT, every face sharp with real skin texture.")

BREIT = ("Image 1 is the photograph: keep the brick loft, the steel window, the plants, the warm light and the four people "
  "exactly: the man with the short haircut and denim jacket, the man in the tan beanie and navy jumper, the woman with "
  "long braids in the brown leather jacket, the woman with tortoiseshell glasses and gold hoops. Same faces, hair and "
  "clothes. Image 2 is the CORALROOMS logo: the coral open-frame mark above the spaced wordmark.\n\n"
  "New moment: behind the group the bare brick wall, the window and the plants run on, open and calm. A fifth person "
  "stands in the centre of the group: a friendly man in his thirties with dark curly hair and a short beard, in a "
  "charcoal t-shirt with the logo from Image 2 printed on the chest, the coral mark above the word CORALROOMS in white "
  "spaced capitals, matching Image 2 line for line. He holds an iPad at chest height turned toward the others, "
  "showing a bright grid of photos. They lean in, smiling and laughing; the woman with braids points at the iPad, the "
  "man in the beanie grins. " + LOOK + " 16:9.")

HOCH = ("Image 1 is the photograph: keep the room, the light and all five people exactly, with the same faces, clothes, "
  "the CORALROOMS t-shirt and the iPad. Image 2 is the logo on the t-shirt, matching line for line. Recompose as a "
  "vertical 4:5 frame closer on the group: the man in the CORALROOMS t-shirt with the iPad in the centre, the others "
  "around him, faces in the upper half. " + LOOK + " 4:5.")

# Nicky 25.11.: "showing one of our zulu products on the ipad?" + "make sure the coral rooms dudes tshirt is a bit more crumpled"
IPAD = ("Image 1 is the photograph: keep the room, the light, all five people, their faces, poses, clothes and the "
  "CORALROOMS t-shirt. Image 2 is the logo on the t-shirt, matching line for line. Image 3 shows the ZULU drink "
  "cans. The t-shirt is soft, well-worn cotton, visibly crumpled with natural creases across the chest and belly, the "
  "print following the folds. The iPad screen shows a media library app with an orange title bar and the word ZULU, below it a "
  "grid of six bright photos: the four ZULU cans on ice, a peach ZULU can on a sunny beach, friends at a festival "
  "holding orange ZULU cans, a ZULU can pouring into a glass of ice. The cans on screen match Image 3. " + LOOK + " 16:9.")

# Nicky 25.11. 17:17 zu v004: "a bit more detailed and more black like the library zulu thing" -> iPad zeigt die dunkle
# ZULU-Footage-Bibliothek der Website (Image 3 = Bildschirmfoto der Website-Demo), Shirt bleibt zerknittert (Image 1 = v004)
IPAD2 = ("Image 1 is the photograph: keep the room, the light, all five people, their faces, poses, clothes and the crumpled "
  "CORALROOMS t-shirt exactly. Image 2 is the logo on the t-shirt, matching line for line. Image 3 is the app on the iPad "
  "screen: a dark near-black interface with an orange title bar carrying the ZULU logo and the words Footage library, a "
  "search field reading people having fun, and below it a detailed grid of eight photo cards with timecodes, small grey "
  "tags and coral highlight frames on three matching cards. One change: the iPad screen shows exactly this app from "
  "Image 3, sharp, bright on its dark background, with fine readable detail. " + LOOK + " 16:9.")

# Nicky 25.11. 19:15 zu v006: "image looks messed up, probably edited too many times. run from scratch" -> NEU, kein Foto-
# Ref mehr (v006 war die vierte Bearbeitung in Folge). Nur Image 1 = Logo-Lockup, Image 2 = ZULU-App fuer den Bildschirm.
# Das Handy-Bild wird ein 4:5-Ausschnitt desselben Renders, keine Bearbeitung.
NEU = ("Image 1 is the CORALROOMS logo: the coral open-frame mark above the spaced wordmark. Image 2 is the app on the iPad.\n\n"
  "One continuous photograph in a sunlit brick-walled agency loft, a steel window on the LEFT, a few big green plants. "
  "Five people stand close together, framed from the waist up, 47 degree lens (50mm) at eye level. In the centre a "
  "friendly man in his thirties with dark curly hair and a short beard wears a worn, softly crumpled charcoal cotton "
  "t-shirt with the logo from Image 1 printed on the chest, the coral mark above CORALROOMS in white spaced capitals, "
  "following the creases. He holds an iPad in both hands at chest height, the screen angled toward the camera, showing "
  "exactly the app from Image 2: near-black, orange title bar, sharp and bright. The others lean in from both sides: a "
  "woman with long braids in a brown leather jacket points at the screen, a man in a tan beanie and navy jumper grins, a "
  "woman with tortoiseshell glasses and gold hoops laughs, a man in a denim jacket smiles. Relaxed natural hands. " + LOOK + " 16:9.")

if __name__ == "__main__":
    art = sys.argv[1]
    if art == "neu":
        print(G.rendere("handover-neu", NEU, "coralrooms-marke,zulu-app-ui", n=2, w=3840, h=2160))
    elif art == "breit":
        print(G.rendere("handover-breit", BREIT, "begleit-quelle,coralrooms-marke", n=2, w=3840, h=2160))
    elif art == "ipad2":
        print(G.rendere("handover-ipad", IPAD2, "handover-ipad,coralrooms-marke,zulu-app-ui", n=2, w=3840, h=2160))
    elif art == "ipad":
        print(G.rendere("handover-ipad", IPAD, "handover-breit,coralrooms-marke,zulu-dosen", n=2, w=3840, h=2160))
    else:
        print(G.rendere("handover-hoch", HOCH, "handover-breit,coralrooms-marke", n=2, w=1728, h=2160))
