#!/usr/bin/env python3
"""Frischer Bild-Durchlauf fuer consulting.nicolaslekai.com V3 — Filmwelt statt Buero (Nano Banana ueber ComfyUI :8188).

Nicky 24.11.2026: "make new images for everything that are similar to the ones that we did for Otter and
Stein, but do a fresh run … more like film people, not so much corporate people in an office … trendy,
some hipsters … our colors are orange, coral, and what we currently have" und zur Grafikkarte: "only my
logo, not my name … and some description of a graphic card".
Gleiche Bildrollen wie auf otterstein.ai (rendern.py dort), Orange #f4933b als Akzent.

    python3 tools/rendern_film.py [name ...]     # ohne Namen: alle; *-hoch laufen nach ihrer Vorlage
Ergebnis: preview/_quellen/film/<name>_KJ_v###.png
"""
import json, os, shutil, subprocess, sys, time, urllib.request
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "preview/_quellen/film"
COMFY = Path.home() / "ComfyUI-Installs/ComfyUI/ComfyUI"
PORT = 8188
KEY = os.environ.get("COMFY_API_KEY") or subprocess.run(
    ["security", "find-generic-password", "-s", "comfy-org-api-key", "-w"], capture_output=True, text=True).stdout.strip()

ORANGE = "warm orange (#f4933b)"
# Nicky 24.11.2026, zweite Runde: "cool young people, film agency, hipsters, mixed race crowd, some german people,
# less brand color … not too many oranges … more like Leica photos, analogue"
FILM = ("Analogue photograph shot on a Leica M6 with a 35mm Summicron on Kodak Portra 400: fine natural grain, soft "
        "contrast, gentle halation, slightly faded warm colours, available light, a candid moment. Natural muted "
        "colours of wood, brick, denim and skin.")
# Runde 3 (Nicky: "too blurry and not enough detail", "easy on the orange"): alles scharf, mehr Feindetail, Orange nur als Punkt
STUDIO = ("Bright high-key studio photograph in the style of Apple product photography, soft overcast daylight from a "
          "large window on the left, pale light grey seamless surface, open soft shadows, thick frosted glass, white, "
          "silver and graphite, deep focus at f/8 with every edge crisp, rich fine detail. ")
GLAS_FUSS = "63 degree lens (32mm).\n\n" + STUDIO + " Subject centred, calm empty space around it. 3:2."
TISCH = ("On a worn walnut table in a loft studio by a tall steel-frame window, soft daylight from the left, a raw "
         "concrete wall soft in the background, shallow depth of field, only these objects on the table. ")
LOGO = "logo_mark_orange_ref.png"

JOBS = {  # name: (prompt, aspect, resolution, seed, refs)  refs: Dateien in Comfy input/ oder "@name" = Ergebnis eines Jobs
 "gpu": ("Image 1 is a logo mark: an isometric open square frame drawn as one orange line.\n\n"
   "Extreme close-up of a high-end graphics card: matte graphite shroud, brushed aluminium side plate, dense "
   "heat-sink fins, machined screws and vents. The card fills the frame and runs out "
   "of frame on both sides; the camera looks along the side plate at a shallow angle. On the side plate, in the "
   "upper half of the frame: the logo mark from Image 1, engraved and filled warm orange, followed by engraved "
   "white lettering \"RENDER CORE · 48 GB\" in a bold grotesque sans-serif, sharp. That is the only marking on "
   "the card. In the lower half the fins and the fan in crisp fine detail. 29 degree lens (80mm).\n\n" + STUDIO + " 16:9.",
   "16:9", "4K", 9101, [LOGO]),
 "gpu-hoch": ("Image 1 carries the object: the same graphics card with the same logo mark, lettering, materials "
   "and light. Image 2 is the logo mark. Recompose as a vertical frame: the card stands upright on its short end "
   "in the upper two thirds of the frame, three-quarter view, the orange logo mark and \"RENDER CORE · 48 GB\" "
   "on its side plate facing the camera and fully readable. Pale light grey seamless studio surface, open soft "
   "shadow, calm empty space below the card.\n\n" + STUDIO + " 4:5.", "4:5", "2K", 9102, ["@gpu", LOGO]),
 "bau-ki": ("A desktop operating system built as a physical object: three thick frosted-glass window slabs float "
   "in layers above the studio surface, tilted in three-quarter perspective, each casting an open soft shadow.\n\n"
   "GEOMETRY: the large main window in the centre has a slim title bar with three small round graphite buttons, a "
   "sidebar on its LEFT with a column of small round icons, and a main area with a tidy grid of rounded square "
   "icons in white, grey and graphite, each carrying one simple glyph (a dot, a ring, a bar, a triangle); one icon "
   "carries a small orange dot. In front on the lower RIGHT floats a small dialog slab with a check mark and one graphite "
   "button. Along the lower edge floats a slim timeline slab with a row of small clip blocks. Every label "
   "is a soft grey bar.\n\n" + GLAS_FUSS, "3:2", "2K", 9201, []),
 "bau-apps": ("A custom film-production app built as a physical object: thick frosted-glass slabs float in layers "
   "above the studio surface, each casting an open soft shadow.\n\nGEOMETRY: the large main window in the centre "
   "has a slim title bar with three small round graphite buttons and a shot list of seven even rows; each row is a "
   "small grey thumbnail rectangle, a line of soft grey bars and one small round status dot; the fourth row is "
   "highlighted white with a small orange dot. Above the list sit three small raised number tiles. In front on the lower RIGHT floats a "
   "phone-sized slab showing the same rows in one narrow column. Behind on the upper LEFT a slim slab with an audio "
   "waveform in graphite. Every label is a soft grey bar.\n\n" + GLAS_FUSS,
   "3:2", "2K", 9202, []),
 "bau-automatisierung": ("One tightly packed row of upright objects stands on the studio surface and recedes "
   "diagonally from the near LEFT into the depth on the RIGHT, edges touching like records in a crate.\n\n"
   "GEOMETRY: the near part of the row is round 35mm film cans standing on edge, matte aluminium with "
   "frosted-glass lids, blank labels as soft grey bars. Without a gap the row continues as graphics cards of the "
   "same height standing just as tightly: matte white and graphite shrouds, round fans, aluminium heat-sink "
   "fins, one small orange status light. Focus on the point where film cans hand over to graphics cards. "
   "Every surface plain and unmarked.\n\n" + GLAS_FUSS, "3:2", "2K", 9203, []),
 "ablauf-erstgespraech": (TISCH + "Two flat whites in handmade stoneware cups, one half drunk, stand across from "
   "each other. Between them an open notebook with pencil storyboard thumbnails, six small frames joined by "
   "arrows, a pencil resting in the fold, and a phone lying face down. Two empty bentwood chairs just out of "
   "focus behind. A conversation that has just started. " + FILM + " 3:2.", "3:2", "2K", 9311, []),
 "ablauf-angebot": (TISCH + "A crisp printed production budget lies squared up on the table: clean typographic "
   "columns, a small table of figures, the type too soft to read. A black fineliner rests across it, a small "
   "black film slate with blank chalk fields lies beside it, and a stoneware cup sits at the edge. Everything "
   "tidy and settled. " + FILM + " 3:2.", "3:2", "2K", 9312, []),
 "ablauf-prototyp": (TISCH + "An open laptop stands at an angle, its screen showing an edit timeline in a dark "
   "interface with grey clips on three tracks and one small orange marker, one track still empty. Beside it a paper storyboard sheet "
   "covered in pencil marks with one crossed-out frame, a pencil and a sticky note. Work in progress, caught "
   "mid-build. " + FILM + " 3:2.", "3:2", "2K", 9313, []),
 "ablauf-uebergabe": (TISCH + "A slim modern manual with a matte sand-coloured cover and one thin orange elastic band lies closed on the table, "
   "crisp white pages with a clean printed index just visible at the edge. A small silver portable SSD and a "
   "single key rest on the cover. A closed silver laptop is pushed to the side. A hand with fine-line tattoos on "
   "two fingers and one silver ring slides the manual across the table toward the viewer, fingertips flat on the "
   "cover. " + FILM + " 3:2.", "3:2", "2K", 9314, []),
 "begleitung-runde": ("The studio of a small film agency in a converted Berlin warehouse loft, late morning: exposed brick, "
   "tall steel-frame windows on the LEFT, plants, a worn rug, a film poster leaning against the wall.\n\nGEOMETRY: four "
   "young creatives in their twenties and early thirties stand loosely around a high walnut table. MIDDLE RIGHT a Black "
   "woman with long braids in a vintage brown leather jacket laughs at something just said; beside her a blond German "
   "guy with a moustache and a knitted beanie gestures with one hand. LEFT a South Asian woman with round tortoiseshell "
   "glasses and an oversized cardigan holds a coffee, and a tall German guy with a buzz cut in a faded workwear jacket "
   "points at an open laptop on the table. BEHIND them a large wall screen shows an edit timeline, soft.\n\n"
   "Relaxed real smiles, natural skin. " + FILM + " 16:9.", "16:9", "2K", 9411, []),
 "begleitung-runde-hoch": ("Image 1 is the photograph: the same loft, the same daylight, the same people with "
   "the same faces, hair and clothes, the same wall screen.\n\nThe camera has stepped to the right and closer for "
   "a vertical frame. GEOMETRY: the laughing woman with the braids and the guy with the beanie stand in the "
   "MIDDLE, upper bodies filling the upper two thirds. Behind them the wall screen with the edit timeline. "
   "FOREGROUND LEFT, soft, the cardigan shoulder and coffee cup of the woman with the glasses seen from behind. The walnut table runs "
   "along the bottom third with the open laptop on it.\n\n47 degree lens (50mm), shallow depth of field. "
   + FILM + " 4:5.", "4:5", "2K", 9412, ["@begleitung-runde"]),
 "werkstatt-team": ("The edit and colour-grading room of a small film agency in a bright loft.\n\nGEOMETRY: the camera sits "
   "low and close behind the near edge of a long walnut desk. FOREGROUND LEFT and FOREGROUND RIGHT two young editors "
   "seated closest to the lens, seen from directly behind: backs, shoulders and the backs of their heads, one with a "
   "knitted beanie, one with a short dark curly afro. MIDDLE a large monitor showing an edit timeline, a grading panel "
   "with three trackballs, a pair of studio speakers, a cinema camera body and espresso cups on the desk. BEHIND THE "
   "MONITOR a young German woman with a blond bob in a denim jacket stands leaning over the desk toward the screen, "
   "head above and behind its top edge, pointing hand in view. Tall window behind with Berlin rooftops.\n\nThe moment "
   "is cheerful: open hands mid-gesture, one of the seated leaning back. Bright room, soft open shadows, pale brick. "
   + FILM + " 16:9.", "16:9", "2K", 9511, []),
 "stein-block": ("A low, wide foundation course of dark quarried granite blocks, laid tight on a bare floor. The "
   "blocks are cut square and fit closely; one hairline joint between them glows warm orange, as if lit from "
   "inside. The nearest block has a single face polished to a soft mirror sheen while the rest keeps its rough "
   "quarry texture, every crystal visible. Raking light from the left grazes the stone, picking out the grain and "
   "the sharp cut edges; fine dust hangs in the beam. Deep charcoal background falling off to black.\n\n"
   "Photoreal studio photography, 100mm macro, shallow depth of field, neutral grade with one warm orange accent. "
   "16:9.", "16:9", "2K", 9601, []),
 "patchfeld-rack": ("A close-up of a broadcast video patch bay in a dark equipment rack, photographed nearly "
   "straight on.\n\nGEOMETRY: two rows of BNC jacks run unbroken from the left edge to the right edge. Neat black "
   "coaxial video cables with silver BNC plugs leave the jacks and sweep horizontally across the frame in a tight "
   "bundle. ONE cable through the middle glows warm orange along its whole length; the rest stay matte black and "
   "grey. Raking light from the left on the brushed metal front and the cable jackets, the depth of the rack "
   "falling off to black.\n\nPhotoreal studio photography, 85mm lens, shallow depth of field, low key, neutral "
   "grade with one warm orange accent. 16:9.", "16:9", "4K", 9701, []),
 "patchfeld-rack-hoch": ("Image 1 carries the object and the look: the same video patch bay, the same black coax "
   "cables with one cable glowing warm orange, the same dark rack and raking light from the left. Recompose as a "
   "vertical frame for a phone screen: the jacks run from top to bottom along the LEFT third, the cables leave "
   "them and curve down and to the RIGHT in a tight bundle, the orange cable through its middle.\n\nPhotoreal "
   "studio photography, 29 degree lens (80mm), shallow depth of field, low key, neutral grade with one warm "
   "orange accent. Vertical frame 9:16.", "9:16", "2K", 9702, ["@patchfeld-rack"]),
}


# Systembild als Bild statt three.js (Nicky 24.11.2026: "make it less techy … much more like film making and graphic
# automation, use apple design style vibes, and mostly add more detail")
SYS_KERN = ("A film-making and graphics-automation studio laid out as a clean product diorama, seen from a high "
  "three-quarter angle, in the style of Apple product photography: silver aluminium, white and graphite, generous "
  "space, every object crisp.\n\nGEOMETRY: CENTRE a small round white hub with a softly glowing warm orange ring; "
  "thin white cables run from it to each object in a wide circle. LEFT a cinema camera on a carbon-fibre tripod with "
  "a matte box and follow-focus. BACK LEFT a large studio display on a silver stand showing an edit timeline with rows "
  "of film-frame thumbnails. BACK RIGHT a compact silver studio computer. RIGHT a tablet with a pencil showing a "
  "hand-drawn storyboard. FRONT RIGHT a colour-grading panel with three trackballs. FRONT LEFT a slim acrylic rack "
  "holding printed posters and social cut-downs in 9:16, 1:1 and 16:9, all generated from the same film still of a "
  "woman on a rooftop at dusk. FRONT studio headphones and a small clapperboard.\n\nRich fine detail: buttons, "
  "ports, knurled rings, film frames on every screen. Colours: white, silver, graphite and the natural colours of the "
  "film frames; the only orange is the hub ring. 47 degree lens (50mm), deep focus. ")
SYS_HELL = SYS_KERN + "Pale light grey seamless surface, soft diffuse daylight from above, open soft shadows. 16:9."
SYS_DUNKEL = SYS_KERN + "Deep charcoal seamless surface, soft top light like a keynote stage, gentle reflections. 16:9."

JOBS.update({
 "system-hell-a": (SYS_HELL, "16:9", "2K", 9801, []),
 "system-hell-b": (SYS_HELL, "16:9", "2K", 9802, []),
 "system-dunkel-a": (SYS_DUNKEL, "16:9", "2K", 9803, []),
 "system-dunkel-b": (SYS_DUNKEL, "16:9", "2K", 9804, []),
})

# Zweite Variante je Motiv (Nicky: "try a few more")
for _n in ["gpu", "bau-ki", "bau-apps", "bau-automatisierung"]:
    _p, _v, _r, _s, _refs = JOBS[_n]
    JOBS[_n + "-v2"] = (_p, _v, _r, _s + 50, _refs)

# Plakat im Teambild trug einen echten Filmtitel ("Der Himmel ueber Berlin") -> ohne Schrift
PLAKAT = ("Image 1 is the photograph: keep every person, face, pose, smile, piece of clothing, the room, the light, "
  "the grain and the framing exactly as they are. One change: the film poster leaning against the wall now shows a "
  "single moody film still of a woman on a rooftop at dusk, full bleed, with no lettering at all. " + FILM)
JOBS["begleitung-runde-plakat"] = (PLAKAT + " 16:9.", "16:9", "2K", 9421, ["@begleitung-runde"])
JOBS["begleitung-runde-hoch-plakat"] = (PLAKAT + " 4:5.", "4:5", "2K", 9422, ["@begleitung-runde-hoch"])

# Apple-Logo auf dem kleinen Rechner raus (keine fremden Marken auf der Seite)
JOBS["system-hell-a-clean"] = ("Image 1 is the photograph: keep every object, its position, every screen, cable, the hub, "
  "the light, the colours and the framing exactly as they are. One change: the top of the small silver studio computer "
  "at the back right is plain brushed aluminium, completely unmarked. 16:9.", "16:9", "4K", 9811, ["@system-hell-a"])


def post(wf):
    body = json.dumps({"prompt": wf, "extra_data": {"api_key_comfy_org": KEY}}).encode()
    req = urllib.request.Request(f"http://127.0.0.1:{PORT}/prompt", body, {"Content-Type": "application/json"})
    return json.load(urllib.request.urlopen(req))["prompt_id"]


def warte(pid):
    for _ in range(400):
        time.sleep(4)
        h = json.load(urllib.request.urlopen(f"http://127.0.0.1:{PORT}/history/{pid}"))
        if pid not in h:
            continue
        if h[pid]["status"].get("status_str") == "error":
            raise RuntimeError(json.dumps(h[pid]["status"]["messages"])[-400:])
        for o in h[pid]["outputs"].values():
            for im in o.get("images", []):
                return COMFY / "output" / im["subfolder"] / im["filename"]
    raise RuntimeError("Zeitueberschreitung")


def ziel(name):
    nr = 1
    while (OUT / f"{name}_KJ_v{nr:03d}.png").exists():
        nr += 1
    return OUT / f"{name}_KJ_v{nr:03d}.png"


def neuestes(name):
    v = sorted(OUT.glob(f"{name}_KJ_v*.png"))
    return v[-1] if v else None


def rendere(name):
    prompt, verh, aufl, seed, refs = JOBS[name]
    assert len(prompt) < 1500, (name, len(prompt))
    wf, kette = {}, None
    for i, r in enumerate(refs):
        if r.startswith("@"):
            quelle = neuestes(r[1:]); datei = f"nl_film_{r[1:]}_ref.png"
            Image.open(quelle).convert("RGB").save(COMFY / "input" / datei)
        else:
            datei = r
        k = f"1{chr(97 + i)}"
        wf[k] = {"class_type": "LoadImage", "inputs": {"image": datei}}
        if kette is None:
            kette = [k, 0]
        else:
            wf[f"b{i}"] = {"class_type": "ImageBatch", "inputs": {"image1": kette, "image2": [k, 0]}}
            kette = [f"b{i}", 0]
    wf["2"] = {"class_type": "GeminiImage2Node", "inputs": {
        "prompt": prompt, "model": "gemini-3-pro-image-preview", "seed": seed, "aspect_ratio": verh,
        "resolution": aufl, "response_modalities": "IMAGE", **({"images": kette} if kette else {})}}
    wf["3"] = {"class_type": "SaveImage", "inputs": {"images": ["2", 0], "filename_prefix": f"nl_architect/{name}_KJ_"}}
    try:
        src = warte(post(wf)); z = ziel(name); shutil.copy(src, z)
        return f"{name}: ok -> {z.name}"
    except Exception as e:
        return f"{name}: FEHLER {e}"


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    # Logo-Referenz: transparente PNG auf Weiss gelegt
    logo = Image.open(ROOT / "assets/logo-mark-orange.png").convert("RGBA")
    weiss = Image.new("RGBA", logo.size, "white"); weiss.alpha_composite(logo)
    weiss.convert("RGB").save(COMFY / "input" / LOGO)
    namen = sys.argv[1:] or list(JOBS)
    erst = [n for n in namen if not any(r.startswith("@") for r in JOBS[n][4])]
    dann = [n for n in namen if n not in erst]
    with ThreadPoolExecutor(6) as ex:
        for r in ex.map(rendere, erst):
            print(r, flush=True)
        for r in ex.map(rendere, dann):
            print(r, flush=True)


if __name__ == "__main__":
    main()
