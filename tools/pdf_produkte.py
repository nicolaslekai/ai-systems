#!/usr/bin/env python3
"""PDF "Apps we build" · Coralrooms · 25.11.2026 — Vorschlag der Produkte, bevor sie auf die Website kommen.

Nicky 25.11.2026: "suggest products like those in a PDF, please, before we include it in the website … introduce the
top five … as the sixth position … an audit … Every company's software needs are different. We build and customize
this for you." Beispielmarken ZULU (Getraenke) und NORROW (Laufschuhe), beide erfunden. Bilder: tools/rendern_produkte.py.

    python3 tools/pdf_produkte.py <ausgabe.pdf>
"""
import base64, io, subprocess, sys, tempfile
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
BILDER = ROOT / "preview/_quellen/produkte"
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"


def neuestes(name):
    return sorted(BILDER.glob(f"{name}_KJ_v*.png"))[-1]


def bild(name, breite=1400):
    im = Image.open(neuestes(name) if not str(name).endswith(".png") else name).convert("RGB")
    im.thumbnail((breite, breite))
    b = io.BytesIO(); im.save(b, "JPEG", quality=82)
    return "data:image/jpeg;base64," + base64.b64encode(b.getvalue()).decode()


def logo():
    im = Image.open(ROOT / "assets/logo-mark-coral.png"); im.thumbnail((200, 200))
    b = io.BytesIO(); im.save(b, "PNG")
    return "data:image/png;base64," + base64.b64encode(b.getvalue()).decode()


APPS = [
 dict(nr="01", name="Footage Library", bild="produkt-archiv",
  claim="Every shot you own, <em>found in seconds.</em>",
  text="Most brands sit on years of shoots they can no longer find. The library takes it all in, and Jev looks at every "
       "photo and every frame of film and writes down exactly what is in it. After that you search the way you talk.",
  punkte=["Tagged by Jev, image by image: product, people, place, light, mood, colour, format",
          "Search in plain words, in any language, and get the clip with its timecode",
          "Usage rights and talent releases stored with each asset, with expiry alerts",
          "Connects to the drives, Dropbox, Frame.io or DAM you already use",
          "Duplicates, versions and proxies handled on the way in"],
  beispiel="ZULU types <b>fruity, outdoors, water</b> and gets the lake jetty, the river run in NORROW shoes and the "
           "peaches on the beach towel: pictures they shot years ago and already own."),
 dict(nr="02", name="Poster Studio", bild="produkt-plakat",
  claim="Out-of-home posters, <em>on brand every time.</em>",
  text="A design tool that knows the brand rules, so the marketing team can make posters without breaking them. Type "
       "the line, pick a photo from the library, and every format comes out ready for print or screen.",
  punkte=["Logo, claim, fonts, colours and safe zones built in as rules",
          "Bus shelter, billboard, city light and digital screens from one layout",
          "Translated copy and local legal lines per market",
          "Print-ready PDF with bleed, or MP4 for digital screens",
          "Nothing goes to print until a person approves it"],
  beispiel="NORROW and ZULU run a summer collaboration: one photo and the line <b>Run on orange</b> become the bus "
           "shelter, the 18-sheet and the portrait screen in four countries in one afternoon."),
 dict(nr="03", name="Social Autopilot", bild="produkt-social",
  claim="One campaign, <em>a month of posts.</em>",
  text="The campaign film and the library feed a content plan that fills itself. Cut-downs, captions and posting "
       "times are prepared every week; the team only checks, changes and approves.",
  punkte=["Cuts every film into 9:16, 1:1 and 16:9 with the subject kept in frame",
          "Captions and subtitles in every language you post in",
          "A weekly plan built from the library and from what is trending now",
          "Posts to Instagram, TikTok, YouTube and LinkedIn after approval",
          "Shows what worked, so next week's plan gets better"],
  beispiel="Every Monday ZULU gets twelve ready posts for the week from the summer shoot: the river run, the can "
           "opening, the jump off the jetty. They approve nine, change two and drop one."),
 dict(nr="04", name="Edit Room", bild="produkt-schnitt",
  claim="The first cut is ready <em>before the editor sits down.</em>",
  text="Pick clips, drop in a storyboard, or just type what you need. The edit room picks the best takes, builds the "
       "cut with music and sound, and hands the timeline to your editor to finish.",
  punkte=["\"Turn the summer film into a 15-second vertical\" as a brief",
          "Best takes pre-selected from the whole shoot, hours of logging saved",
          "Music and sound laid in, levels set",
          "Timeline download for Premiere, Resolve or Avid",
          "One 16:9 master from the editor, every other format follows"],
  beispiel="NORROW's 60-second trail film becomes a 15-second cut-down, a 6-second bumper and a vertical story while "
           "the editor is still grading the master."),
 dict(nr="05", name="Packshot Studio", bild="produkt-packshot",
  claim="The product anywhere, <em>without a new shoot.</em>",
  text="Product images for settings you never shot: on ice, in a river, on marble, by the pool. Each image is checked "
       "against the real product, so the label is right every time.",
  punkte=["Any setting, season or mood from one product photo",
          "Label and shape checked against the real product before anyone sees it",
          "Every format: ad, poster, story, banner, shop page",
          "Model, source and approval recorded for every image",
          "AI-made images labelled where the law asks for it"],
  beispiel="ZULU ORANGE needs six autumn and summer looks for the online shop. They are on the wall by lunch, and "
           "the one next to the NORROW shoe goes straight into the collaboration."),
]


def seite_app(a, n):
    li = "".join(f"<li>{p}</li>" for p in a["punkte"])
    return f"""<section class="seite app">
  <div class="foto"><img src="{bild(a['bild'])}" alt="">
    <div class="beispiel"><span>Example</span>{a['beispiel']}</div></div>
  <div class="text">
    <div class="nr">{a['nr']} / 06</div>
    <h2 class="name">{a['name']}</h2>
    <h3>{a['claim']}</h3>
    <p class="lead">{a['text']}</p>
    <ul>{li}</ul>
  </div>
  {fuss(n)}
</section>"""


def fuss(n):
    return f'<div class="fuss"><span>Coralrooms · Apps we build · Draft for discussion</span><span>{n}</span></div>'


def html():
    L = logo()
    kacheln = "".join(f"""<div class="kachel"><img src="{bild(a['bild'], 700)}" alt=""><div><b>{a['nr']}</b> {a['name']}</div>
      <p>{a['claim'].replace('<em>','').replace('</em>','')}</p></div>""" for a in APPS)
    kacheln += f"""<div class="kachel sechs"><img src="{bild('produkt-audit', 700)}" alt=""><div><b>06</b> Yours</div>
      <p>An audit, then the app your company actually needs.</p></div>"""
    mehr = [("Review", "Feedback marked on the image itself instead of going round in emails."),
            ("Markets", "Every country gets its own version: language, packshot, legal lines, voice."),
            ("Decks", "Pitches and presentations in the brand template, out as PowerPoint or PDF."),
            ("Trend Radar", "What is rising on social today, matched to clips you already own."),
            ("Planner", "The campaign year on one timeline, with the assets attached."),
            ("How-to films", "Step-by-step product films from existing footage, in every language."),
            ("Retouch & Grade", "Cut-outs, clean-ups and the brand look applied to every frame."),
            ("Brand Hub", "Several brands, each with its own rules, in one system.")]
    mehr_html = "".join(f"<div><b>{t}</b><p>{d}</p></div>" for t, d in mehr)
    apps = "".join(seite_app(a, i + 3) for i, a in enumerate(APPS))
    return f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Coralrooms · Apps we build</title>
<style>
@page{{size:16in 9in;margin:0}}
*{{box-sizing:border-box;margin:0;padding:0}}
:root{{--k:#ff7f61;--d:#1c1c1e;--g:#6e7378;--l:#eceded}}
body{{font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;color:var(--d);-webkit-print-color-adjust:exact;print-color-adjust:exact}}
.seite{{width:16in;height:9in;position:relative;overflow:hidden;page-break-after:always;background:#fff;padding:.7in .8in}}
em{{font-style:normal;color:var(--k)}}
.marke{{display:flex;align-items:center;gap:14px;font-weight:700;letter-spacing:.22em;font-size:15px}}
.marke img{{width:44px}}
.fuss{{position:absolute;left:.8in;right:.8in;bottom:.4in;display:flex;justify-content:space-between;font-size:11px;color:var(--g);letter-spacing:.04em}}
.eyebrow{{font-size:13px;letter-spacing:.2em;text-transform:uppercase;color:var(--g);font-weight:700}}
/* Titel */
.titel{{background:var(--d);color:#f0efec;display:flex;flex-direction:column;justify-content:space-between}}
.titel .bg{{position:absolute;right:0;top:0;width:55%;height:100%;object-fit:cover;opacity:.9}}
.titel .schleier{{position:absolute;inset:0;background:linear-gradient(90deg,var(--d) 42%,rgba(28,28,30,.2) 75%,rgba(28,28,30,0))}}
.titel>*{{position:relative}}
.titel h1{{font-size:78px;line-height:1.02;letter-spacing:-.02em;max-width:8.6in;margin-top:.2in}}
.titel p{{font-size:22px;line-height:1.45;color:#c7cacf;max-width:6.6in;margin-top:26px}}
.titel .klein{{font-size:13px;letter-spacing:.2em;text-transform:uppercase;color:#c7cacf}}
.titel .eyebrow{{color:#c7cacf}}
/* Uebersicht */
.uebersicht h2{{font-size:46px;letter-spacing:-.015em;margin:14px 0 30px}}
.raster{{display:grid;grid-template-columns:repeat(3,1fr);gap:22px 26px}}
.kachel img{{width:100%;aspect-ratio:16/8;object-fit:cover;border-radius:10px;display:block}}
.kachel div{{font-size:20px;font-weight:700;margin-top:10px}}
.kachel div b{{color:var(--k);margin-right:6px}}
.kachel p{{font-size:15px;color:#3a3d42;margin-top:4px;line-height:1.4}}
.kachel.sechs img{{outline:3px solid var(--k);outline-offset:-3px}}
/* App-Seiten */
.app{{display:grid;grid-template-columns:8.6in 1fr;gap:.6in}}
.app .foto img{{width:100%;aspect-ratio:3/2;object-fit:cover;display:block;border-radius:12px}}
.app .text{{display:flex;flex-direction:column}}
.nr{{font-size:13px;letter-spacing:.2em;color:var(--g);font-weight:700}}
.name{{font-size:20px;letter-spacing:.16em;text-transform:uppercase;margin-top:18px;color:var(--k)}}
.app h3{{font-size:40px;line-height:1.08;letter-spacing:-.015em;margin-top:10px}}
.lead{{font-size:17px;line-height:1.5;color:#3a3d42;margin-top:18px}}
.app ul{{list-style:none;margin-top:18px;border-top:1px solid #d4d6d9}}
.app li{{font-size:15px;line-height:1.35;padding:8px 0 8px 22px;border-bottom:1px solid #e4e5e7;position:relative}}
.app li::before{{content:"";position:absolute;left:2px;top:14px;width:8px;height:8px;border-radius:50%;background:var(--k)}}
.beispiel{{margin-top:22px;background:#fff3ef;border-left:4px solid var(--k);padding:14px 18px;font-size:15px;line-height:1.45;color:#3a3d42}}
.beispiel span{{display:block;font-size:11px;letter-spacing:.2em;text-transform:uppercase;font-weight:700;color:var(--k);margin-bottom:4px}}
/* Sechs */
.sechs-seite{{background:var(--d);color:#f0efec;display:grid;grid-template-columns:1fr 6.2in;gap:.7in}}
.sechs-seite .eyebrow{{color:#c7cacf}}
.sechs-seite h2{{font-size:58px;line-height:1.04;letter-spacing:-.02em;margin-top:16px}}
.sechs-seite .lead{{color:#c7cacf;font-size:20px;max-width:7in}}
.schritte{{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-top:36px}}
.schritte div{{border-top:2px solid var(--k);padding-top:12px}}
.schritte b{{display:block;font-size:30px;color:var(--k)}}
.schritte i{{display:block;font-style:normal;font-weight:700;font-size:17px;margin:6px 0}}
.schritte p{{font-size:14px;line-height:1.45;color:#c7cacf}}
.sechs-seite img{{width:100%;height:5.6in;object-fit:cover;border-radius:12px;margin-top:.55in}}
.sechs-seite .fuss{{color:#8d9196}}
/* Mehr */
.mehr h2{{font-size:42px;letter-spacing:-.015em;margin:14px 0 8px}}
.mehr .lead{{max-width:9in}}
.mehrraster{{display:grid;grid-template-columns:repeat(4,1fr);gap:20px 28px;margin-top:34px}}
.mehrraster div{{border-top:1px solid #d4d6d9;padding-top:12px}}
.mehrraster b{{font-size:19px}}
.mehrraster p{{font-size:14px;line-height:1.45;color:#3a3d42;margin-top:6px}}
.web{{margin-top:40px;display:grid;grid-template-columns:1fr 1fr;gap:28px}}
.web div{{background:var(--l);border-radius:10px;padding:18px 22px;font-size:15px;line-height:1.5;color:#3a3d42}}
.web b{{display:block;font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:var(--d);margin-bottom:6px}}
</style></head><body>

<section class="seite titel">
  <img class="bg" src="{bild('produkt-schnitt', 1800)}" alt=""><div class="schleier"></div>
  <div class="marke"><img src="{L}" alt="">CORALROOMS</div>
  <div>
    <div class="eyebrow">Apps we build</div>
    <h1>Five apps for brands that shoot a lot. <em>The sixth is built for you.</em></h1>
    <p>Product ideas for the website, shown with two invented brands: ZULU drinks and NORROW running shoes.</p>
  </div>
  <div class="klein">Draft for discussion · 25 November 2026</div>
</section>

<section class="seite uebersicht">
  <div class="eyebrow">Overview</div>
  <h2>Five apps ready to start from. <em>One audit to find yours.</em></h2>
  <div class="raster">{kacheln}</div>
  {fuss(2)}
</section>

{apps}

<section class="seite sechs-seite">
  <div>
    <div class="nr" style="color:#8d9196">06 / 06</div>
    <h2>Every company's software needs are different. <em>We build and customise this for you.</em></h2>
    <p class="lead" style="margin-top:22px">The five apps are starting points. Most clients need a mix of them, joined
       to the tools they already run, plus one or two things nobody sells. So we start with an audit.</p>
    <div class="schritte">
      <div><b>1</b><i>Audit</i><p>We spend time with your team and map where the hours go: briefs, searches, versions, approvals.</p></div>
      <div><b>2</b><i>Prototype</i><p>The first working app on your own material, in weeks rather than months.</p></div>
      <div><b>3</b><i>Build</i><p>Connected to your drives, DAM, Frame.io and single sign-on, with your brand rules inside.</p></div>
      <div><b>4</b><i>Run</i><p>We stay on: updates, new models, new features as your team asks for them.</p></div>
    </div>
  </div>
  <img src="{bild('produkt-audit', 1400)}" alt="">
  {fuss(8)}
</section>

<section class="seite mehr">
  <div class="eyebrow">Also in the system</div>
  <h2>More we can build. <em>Pick what fits.</em></h2>
  <p class="lead">Modules from the same studio system. Each one can stand alone or plug into the five apps.</p>
  <div class="mehrraster">{mehr_html}</div>
  <div class="web">
    <div><b>On the website</b>One section "Apps we build": five product tiles with these images and one line each, the
      sixth tile "Yours" with the audit line. Each tile opens a short page like the ones in this PDF.</div>
    <div><b>To decide</b>App names and order · ZULU and NORROW as example brands, marked as invented · whether the Footage
      Library replaces the Zulu search example or sits next to it.</div>
  </div>
  {fuss(9)}
</section>
</body></html>"""


def main():
    ziel = Path(sys.argv[1]).resolve()
    with tempfile.TemporaryDirectory() as t:
        h = Path(t) / "produkte.html"; h.write_text(html())
        subprocess.run([CHROME, "--headless=new", "--disable-gpu", "--no-pdf-header-footer",
                        f"--print-to-pdf={ziel}", h.as_uri()], check=True, capture_output=True)
    print(ziel)


if __name__ == "__main__":
    main()
