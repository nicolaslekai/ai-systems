#!/usr/bin/env python3
"""consulting.nicolaslekai.com V3 — Aufbau und Bilder der Otter-&-Stein-Seite, in Nicolas' Marke.

Nicky 24.11.2026 (WEBSITE-Gruppe): "update my website that is for AI Architect with the same images
same everything but in my branding" + "a nice coral like Kimi Jimmy across the webpage, not the red".

Baut preview/index.html (EN) und preview/de/index.html (DE) aus EINER Vorlage. Stil, 3D-Systembild
und Gedaechtnis-Grafik kommen aus preview/assets (Kopien der O&S-Dateien, Blau -> Koralle per
tools/koralle.py und tools/koralle_code.py). Film vorerst der bestehende NL/OS-Film aus /assets.
Weggelassen gegenueber O&S: BSFZ-Band und Forschungsabsatz (die Bescheinigung gehoert der
Otter & Stein AI GbR), Teamkarten der anderen, Telefon, Anschrift, Unterseiten-Links.

    python3 tools/build_preview.py
"""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PREV = ROOT / "preview"
SPRITE = (PREV / "_sprite.svg.html").read_text().strip()
MAIL = "nicolaslekai@gmail.com"
WA = "491716269660"; WA_SHOW = "+49 171 6269660"   # Nicky 24.11.2026: "add my whatsapp also"
SITE = "https://consulting.nicolaslekai.com/"

# Nicolas' Marke: der isometrische offene Rahmen in Orange (assets/logo-mark-orange.png) + Wortmarke
def brand(a):
    return (f'<span class="nl-brand"><img class="nl-mark" src="{a}logo-mark-coral.webp" width="512" height="384" alt="">'
            '<span>MACHINEROOMS</span></span>')

T = {
 "en": dict(
  lang="en", other="de", other_label="DE", other_long="Deutsch", other_title="Deutsche Fassung",
  title="Machinerooms — your own AI operating system · film, post and AI",
  desc="We build companies their own AI operating system, web apps and AI automation: all models and tools under one roof, costs in view, a human approves what goes out. Munich · London.",
  nav=[("#themen", "What we build"), ("#arbeitsweise", "How we work"), ("#team", "About")],
  cta="Start a project", also="Also",
  hero_alt="A graphics card on a worn walnut table by a steel-frame window in a brick loft; on its silver plate the open-frame logo mark and RENDER CORE · 48 GB in coral, beside it a light meter, a film canister and a stoneware cup",
  eyebrow="AI operating systems · Munich · London",
  h1="Your own AI operating system <em>for your business.</em>",
  lead="We build your company its own AI operating system, web apps and automation for whatever repeats every week. A human approves anything that goes out. You work directly with the people who build it.",
  ghost="What we build",
  film_label="Watch the film · 2:22", film_name="Explainer film: your own AI operating system",
  film_src="nlos_film_en_v031.mp4", film_poster="nlos_film_poster_en_coral_KJ_v001.jpg", film_close="Close film",
  themen_h2="What we build <em>and how it gets to you.</em>",
  themen_lead="Whatever we build takes the same route: from the first conversation to something that runs in your business.",
  bauten=[
   ("bau-ki.webp", "Illustrative image: an operating system built from frosted-glass panes in a bright studio, a grid of rounded icons, one with a small coral dot, an approval panel with a check mark, a timeline strip below",
    "Your own AI operating system", "All models and tools under one roof, costs in view, a small assistant for every role — and an approval before anything goes out."),
   ("bau-apps.webp", "Illustrative image: a film-production app built from frosted-glass panes: a shot list with thumbnails, one row highlighted, the same list on a phone-sized pane, an audio waveform behind",
    "Web apps and custom software", "Web applications, desktop apps, interfaces and data pipelines — for processes standard software doesn’t cover. You own the source code."),
   ("bau-automatisierung.webp", "Illustrative image: a film strip runs into a small frosted-glass box with a coral light, and out the other side come the same frames as stacked formats, portrait, square and landscape, in a bright white studio",
    "Automate workflows with AI", "Sort what comes in, read documents, prepare drafts, reconcile data. The AI prepares, a human approves."),
  ],
  bau_mehr="Talk to us →",
  weg_h3="The route is always the same.", weg_p="A prototype in days, not months.",
  weg=[
   ("i-gespraech", "ablauf-erstgespraech.webp", "Two flat whites and an open notebook with pencil storyboard thumbnails on a worn walnut table in a loft",
    "First conversation", "30 minutes", "You tell us what hurts. We tell you whether and how we can help."),
   ("i-angebot", "ablauf-angebot.webp", "A printed production budget with a pen across it and a film slate beside it on a walnut table by a steel window",
    "Quote", "Fixed price or capped hours", "A clear frame with a cap. No surprises, no subscription rent."),
   ("i-wuerfel", "ablauf-prototyp.webp", "An open laptop with an edit timeline, beside it a storyboard sketch and a sticky note, a hand drawing",
    "Prototype", "in days", "You see early what is taking shape and steer along. Iteration instead of a novel-length spec."),
   ("i-uebergabe", "ablauf-uebergabe.webp", "A sand-coloured manual with a coral elastic band, a portable SSD and a key on top, a tattooed hand sliding it across the table",
    "Handover", "with source code", "Source code, documentation, instructions. You don’t depend on us — but we stay within reach."),
  ],
  beg_alt="Four young creatives laugh around a walnut table in a brick loft; one points at a laptop, behind them a large screen shows an edit suite with a drinks commercial: a glass of coral spritz with ice on a marble bar",
  beg_h2="After the handover <em>we stay with you.</em>",
  beg_lead="A system has only arrived once your people like working with it. We run the rollout together with you: with staff, management and the board — step by step, while the business keeps running.",
  beg=[("i-schulung", "Training", "Your people learn on their own work", "We train on the real tasks of your business, in small groups and tailored to each role. The written guide stays with you."),
       ("i-gespraech", "Support", "We stay within reach", "For questions and errors you talk to the people who built your system. No layer in between, long after the handover too."),
       ("i-auto", "Further development", "We build what comes up later", "What is still missing often only shows in day-to-day work. We keep building the features your team asks for after the first weeks.")],
  sys_h2="Camera, edit, render: <em>one system.</em>",
  sys_lead="Everything your production works with is connected to the same core. What gets settled in the edit is known afterwards to every assistant on set, in grading and on the render server.",
  sys_marken={"camera": "Camera", "server": "Render server", "desk": "Edit suite", "laptop": "Grading", "tablet": "Storyboard", "phone": "Set", "core": "Project memory"},
  sys_alt="A film studio laid out like a product diorama on a pale grey surface: a cinema camera on a tripod, a studio display with an edit timeline, a small silver render computer, a tablet with a storyboard and a pencil, a grading panel with three trackballs, a clapperboard, white headphones and an acrylic stand with photo prints of the same film still, all cabled to a small white hub with a coral ring",
  sys_cap="Camera, edit, grading, storyboard, posters and render machine on one hub: the project memory at the core",
  stein_alt="A laid course of cut granite, one joint between the blocks glowing coral",
  stein="A foundation to build on: a system that lasts, instead of a fix that holds until the next tool arrives.",
  g_eyebrow="Company memory", g_h2="A memory <em>that keeps learning.</em>",
  g_lead="At the core of every AI operating system is a company memory: decisions, solutions and facts as a linked store that every assistant in the team queries.",
  g_p="Our own studio runs on one every day: what gets decided, fixed or corrected in a project goes in, and every assistant knows it the next morning. That is the system we build for you.",
  g_brain="Team memory", g_alt="Segmented data ring with fine threads across it: signals travel from one side to the other and light up the ring where they arrive",
  g_cap="Schematic view: signals travel across the data ring",
  w_alt="An edit suite in a bright loft: two editors seen from behind at a walnut desk with a grading panel and a camera, a young woman in a denim jacket leans over the monitor and points at the timeline",
  w_eyebrow="Munich · London", w_h2="Built <em>by us.</em>",
  w_lead="No handing off to third parties, no layer in between: you talk to the people who write the code — from the first conversation into day-to-day operation.",
  t_alt="A broadcast video patch bay in a rack, black coax cables with silver BNC plugs, one cable glowing coral",
  t_h2="You talk to the people <em>who build.</em>", t_lead="Two people, forty years between them in film, music and post-production.",
  t_cards=[("File 01 · AI Systems Architect", "Nicolas Lekai", "Builds AI operating systems, control centres and production pipelines for companies. Twenty years in the film and music industry: from the recording studio through web development to visual effects. Along the way, web technology developer for the IFC and the World Bank in Washington DC. He still builds the systems behind the images.", None),
           ("File 02 · Producer — Post · VFX", "Mirko Hampel", "Twenty years in post-production: VFX producer, managing director and head of post. He advises and looks after clients from the first call to the final delivery, keeps budget and schedule honest, and is simply a great person to work with.", None),
           ("File 03 · VFX Director — Film · AI", "The director side", "VFX director. In London he went from Nuke compositor to senior artist at INK on automotive and commercial films. Today he directs from Germany with his own studio: films, VFX, post- and audio production. The explainer film on this page comes out of that pipeline.", ("https://nicolaslekai.com/", "nicolaslekai.com →"))],
  faq_h2="Frequently asked <em>questions.</em>",
  faq=[("What is an AI operating system?", "Your own system in which all the AI models and tools you pay for run under one roof: a hub with the costs per model, a small assistant for every role and approval before anything is sent."),
       ("Where does our data run?", "Wherever you want. Where client data must not leave the building, the models run on your server or your computer. No obligation to use the cloud."),
       ("How do we start?", "With an audit: five days in which we look at how work really runs at your company. Then we build in weekly steps (4–8 weeks) and train your people."),
       ("Who owns the source code?", "You do. For web apps and software we hand over source code, documentation and instructions.")],
  k_h2="What would you like to build <em>or automate?</em>", k_ort="Munich · London",
  k_btn="Write to us", k_subject="Project%20enquiry",
  k_h3="For a first conversation, this is enough:",
  k_li=["What should work better? One sentence is enough.", "Which tools do you use today (email, accounting, CAD, shop)?", "What would be a good result for you in three months?"],
  f_home="Home", f_dir="Director site", menu="Menu", mainnav="Main navigation",
 ),
 "de": dict(
  lang="de", other="en", other_label="EN", other_long="English", other_title="English version",
  title="Machinerooms — Ihr eigenes KI-Betriebssystem · Film, Post und KI",
  desc="Wir bauen Betrieben ein eigenes KI-Betriebssystem, Web-Anwendungen und KI-Automatisierung: alle Modelle und Werkzeuge unter einer Haube, die Kosten im Blick, Freigabe durch einen Menschen. München · London.",
  nav=[("#themen", "Was wir bauen"), ("#arbeitsweise", "Wie wir arbeiten"), ("#team", "Über uns")],
  cta="Projekt anfragen", also="Außerdem",
  hero_alt="Eine Grafikkarte auf einem alten Nussholztisch am Stahlfenster in einem Backstein-Loft; auf der silbernen Platte das offene Rahmen-Logo und RENDER CORE · 48 GB in Koralle, daneben ein Belichtungsmesser, eine Filmdose und eine Steinguttasse",
  eyebrow="KI-Betriebssysteme · München · London",
  h1="Ihr eigenes KI-Betriebssystem <em>für Ihren Betrieb.</em>",
  lead="Wir bauen Ihrem Betrieb ein eigenes KI-Betriebssystem, Web-Anwendungen und Automatisierung für alles, was sich jede Woche wiederholt. Was nach außen geht, gibt ein Mensch frei. Sie arbeiten direkt mit denen, die es bauen.",
  ghost="Was wir bauen",
  film_label="Film ansehen · 2:15", film_name="Erklärfilm: Ihr eigenes KI-Betriebssystem",
  film_src="nlos_film_de_v030.mp4", film_poster="nlos_film_poster_de_coral_KJ_v001.jpg", film_close="Film schließen",
  themen_h2="Was wir bauen <em>und wie es zu Ihnen kommt.</em>",
  themen_lead="Was wir bauen, geht immer denselben Weg: vom ersten Gespräch bis zu etwas, das bei Ihnen läuft.",
  bauten=[
   ("bau-ki.webp", "Symbolbild: ein Betriebssystem aus Milchglasscheiben im hellen Studio, ein Raster runder Symbole, eines mit kleinem korallenem Punkt, eine Freigabe mit Haken, darunter eine Timeline-Leiste",
    "Ihr eigenes KI-Betriebssystem", "Alle Modelle und Werkzeuge unter einer Haube, die Kosten im Blick, ein kleiner Assistent für jede Rolle — und eine Freigabe, bevor etwas nach außen geht."),
   ("bau-apps.webp", "Symbolbild: eine Produktions-App aus Milchglasscheiben: eine Shotliste mit Vorschaubildern, eine Zeile hervorgehoben, dieselbe Liste auf einer Handy-Scheibe, dahinter eine Tonspur",
    "Web-Apps und Software nach Maß", "Web-Anwendungen, Desktop-Apps, Schnittstellen und Datenpipelines — für Abläufe, die Standardsoftware nicht abdeckt. Der Quellcode gehört Ihnen."),
   ("bau-automatisierung.webp", "Symbolbild: ein Filmstreifen läuft in einen kleinen Milchglas-Kasten mit korallenem Licht, auf der anderen Seite kommen dieselben Bilder als gestapelte Formate heraus, hochkant, quadratisch und quer, im hellen weißen Studio",
    "Abläufe mit KI automatisieren", "Eingänge sortieren, Dokumente auslesen, Entwürfe vorbereiten, Daten abgleichen. Die KI bereitet vor, ein Mensch gibt frei."),
  ],
  bau_mehr="Sprechen Sie uns an →",
  weg_h3="Der Weg ist immer derselbe.", weg_p="Prototyp in Tagen, nicht Monaten.",
  weg=[
   ("i-gespraech", "ablauf-erstgespraech.webp", "Zwei Flat Whites und ein offenes Notizbuch mit Storyboard-Skizzen auf einem alten Nussholztisch im Loft",
    "Erstgespräch", "30 Minuten", "Sie sagen, was weh tut. Wir sagen, ob und wie wir helfen können."),
   ("i-angebot", "ablauf-angebot.webp", "Ein ausgedrucktes Produktionsbudget mit Stift, daneben eine Filmklappe, auf einem Nussholztisch am Stahlfenster",
    "Angebot", "Festpreis oder Stundenrahmen", "Klarer Rahmen mit Deckel. Keine Überraschungen, keine Abo-Miete."),
   ("i-wuerfel", "ablauf-prototyp.webp", "Ein aufgeklappter Laptop mit Schnitt-Timeline, daneben eine Storyboard-Skizze und ein Klebezettel, eine Hand zeichnet",
    "Prototyp", "in Tagen", "Sie sehen früh, was entsteht, und lenken mit. Iteration statt Pflichtenheft-Roman."),
   ("i-uebergabe", "ablauf-uebergabe.webp", "Eine sandfarbene Anleitung mit korallenem Gummiband, darauf eine SSD und ein Schlüssel, eine tätowierte Hand schiebt sie über den Tisch",
    "Übergabe", "mit Quellcode", "Quellcode, Doku, Anleitung. Sie sind nicht von uns abhängig — aber wir bleiben erreichbar."),
  ],
  beg_alt="Vier junge Kreative lachen um einen Nussholztisch in einem Backstein-Loft; einer zeigt auf einen Laptop, dahinter zeigt ein großer Bildschirm einen Schnittplatz mit einem Drinks-Spot: ein Glas Koralle-Spritz mit Eis auf einer Marmorbar",
  beg_h2="Nach der Übergabe <em>bleiben wir dabei.</em>",
  beg_lead="Ein System ist erst angekommen, wenn Ihre Leute gern damit arbeiten. Die Einführung machen wir gemeinsam mit Ihnen: mit der Belegschaft, mit der Geschäftsleitung, mit dem Vorstand — Schritt für Schritt, im laufenden Betrieb.",
  beg=[("i-schulung", "Schulung", "Ihre Leute lernen an der eigenen Arbeit", "Wir schulen an den echten Aufgaben Ihres Betriebs, in kleinen Runden und passend zur jeweiligen Rolle. Die Anleitung zum Nachschlagen bleibt bei Ihnen."),
       ("i-gespraech", "Support", "Wir bleiben erreichbar", "Bei Fragen und Fehlern sprechen Sie mit denen, die Ihr System gebaut haben. Ohne Zwischenschicht, auch lange nach der Übergabe."),
       ("i-auto", "Weiterentwicklung", "Neue Wünsche bauen wir nach", "Was noch fehlt, zeigt sich oft erst im Alltag. Funktionen, die Ihr Team sich nach den ersten Wochen wünscht, setzen wir weiter um.")],
  sys_h2="Kamera, Schnitt, Render: <em>ein System.</em>",
  sys_lead="Alles, womit Ihre Produktion arbeitet, hängt am selben Kern. Was im Schnitt geklärt wird, weiß danach jeder Assistent am Set, im Grading und auf dem Render-Server.",
  sys_marken={"camera": "Kamera", "server": "Render-Server", "desk": "Schnitt", "laptop": "Grading", "tablet": "Storyboard", "phone": "Set", "core": "Projekt-Gedächtnis"},
  sys_alt="Ein Filmstudio als Produkt-Diorama auf hellgrauem Grund: Kinokamera auf Stativ, Studio-Bildschirm mit Schnitt-Timeline, ein kleiner silberner Render-Rechner, ein Tablet mit Storyboard und Stift, ein Grading-Pult mit drei Rollkugeln, eine Filmklappe, weiße Kopfhörer und ein Acrylständer mit Fotoabzügen aus demselben Filmbild, alle verkabelt mit einem kleinen weißen Knoten mit korallenem Ring",
  sys_cap="Kamera, Schnitt, Grading, Storyboard, Plakate und Render-Rechner an einem Knoten: das Projekt-Gedächtnis im Kern",
  stein_alt="Eine gesetzte Lage aus behauenem Granit, eine Fuge zwischen den Blöcken leuchtet korallenrot",
  stein="Ein Fundament, auf das sich bauen lässt: ein System, das bleibt, statt einer Lösung, die hält, bis das nächste Werkzeug kommt.",
  g_eyebrow="Firmengedächtnis", g_h2="Ein Gedächtnis, <em>das mitlernt.</em>",
  g_lead="Im Kern jedes KI-Betriebssystems steht ein Firmengedächtnis: Entscheidungen, Lösungen und Fakten als vernetzter Speicher, den jeder Assistent im Team abfragt.",
  g_p="Unser eigenes Studio läuft jeden Tag darauf: Was in einem Projekt entschieden, gelöst oder korrigiert wird, landet dort, und am nächsten Morgen weiß es jeder Assistent. Genau dieses System bauen wir für Sie.",
  g_brain="Team-Speicher", g_alt="Segmentierter Datenring mit feinen Fäden quer hindurch: Signale laufen von einer Seite zur anderen und lassen den Ring dort aufleuchten, wo sie ankommen",
  g_cap="Schematische Darstellung: Signale laufen quer durch den Datenring",
  w_alt="Ein Schnittraum in einem hellen Loft: zwei Cutter von hinten an einem Nussholztisch mit Grading-Pult und Kamera, eine junge Frau in Jeansjacke beugt sich über den Monitor und zeigt auf die Timeline",
  w_eyebrow="München · London", w_h2="Gebaut <em>von uns.</em>",
  w_lead="Keine Weitergabe an Dritte, keine Zwischenschicht: Sie sprechen mit denen, die den Code schreiben — vom ersten Gespräch bis in den laufenden Betrieb.",
  t_alt="Ein Video-Steckfeld im Rack, schwarze Koaxkabel mit silbernen BNC-Steckern, ein Kabel leuchtet korallenrot",
  t_h2="Sie sprechen mit denen, <em>die bauen.</em>", t_lead="Zwei Menschen, zusammen vierzig Jahre Film, Musik und Postproduktion.",
  t_cards=[("File 01 · AI Systems Architect", "Nicolas Lekai", "Baut KI-Betriebssysteme, Leitstände und Produktions-Pipelines für Betriebe. Zwanzig Jahre in der Film- und Musikbranche: vom Tonstudio über die Webentwicklung zu den Visual Effects. Dazwischen Web-Technologie-Entwickler für die IFC und die Weltbank in Washington DC. Er baut bis heute die Systeme hinter den Bildern.", None),
           ("File 02 · Producer — Post · VFX", "Mirko Hampel", "Zwanzig Jahre Postproduktion: VFX Producer, Geschäftsführer und Head of Postproduktion. Er berät und betreut Kunden vom ersten Gespräch bis zur Abgabe, hält Budget und Zeitplan im Blick und ist einfach ein toller Typ.", None),
           ("File 03 · VFX Director — Film · KI", "Die Regie-Seite", "VFX Director. In London vom Nuke-Compositor zum Senior Artist bei INK, für Automobil- und Werbefilme. Heute führt er Regie aus Deutschland mit eigenem Studio: Filme, VFX, Post- und Tonproduktion. Der Erklärfilm auf dieser Seite kommt aus dieser Pipeline.", ("https://nicolaslekai.com/", "nicolaslekai.com →"))],
  faq_h2="Häufige <em>Fragen.</em>",
  faq=[("Was ist ein KI-Betriebssystem?", "Ein eigenes System, in dem alle KI-Modelle und Werkzeuge, für die Sie zahlen, unter einer Haube laufen: eine Zentrale mit den Kosten je Modell, ein kleiner Assistent für jede Rolle und Freigabe vor jedem Versand."),
       ("Wo laufen unsere Daten?", "Wo Sie es wollen. Wo Kundendaten das Haus nicht verlassen dürfen, laufen die Modelle auf Ihrem Server oder Ihrem Rechner. Kein Cloud-Zwang."),
       ("Wie fangen wir an?", "Mit einem Audit: fünf Tage, in denen wir sehen, wie die Arbeit bei Ihnen wirklich läuft. Danach bauen wir in wöchentlichen Schritten (4–8 Wochen) und schulen Ihre Leute."),
       ("Wem gehört der Quellcode?", "Ihnen. Bei Web-Apps und Software übergeben wir Quellcode, Doku und Anleitung.")],
  k_h2="Was möchten Sie bauen <em>oder automatisieren?</em>", k_ort="München · London",
  k_btn="Mail schreiben", k_subject="Projektanfrage",
  k_h3="Fürs Erstgespräch reicht:",
  k_li=["Was soll besser laufen? Ein Satz genügt.", "Welche Werkzeuge nutzen Sie heute (Mail, Buchhaltung, CAD, Shop)?", "Was wäre für Sie ein gutes Ergebnis in drei Monaten?"],
  f_home="Start", f_dir="Regie-Seite", menu="Menü", mainnav="Hauptnavigation",
 ),
}

def ico(i):
    return f'<svg class="ico s" aria-hidden="true" focusable="false"><use href="#{i}"></use></svg>'

def esc(s):
    return s.replace("&", "&amp;").replace('"', "&quot;").replace("<", "&lt;")

def s3d_stand(name):
    """Cache-Buster fuer das 3D-Systembild: die ersten zehn Zeichen des sha256 der Datei (wie bei O&S)."""
    import hashlib
    return hashlib.sha256((PREV / "assets/system3d" / name).read_bytes()).hexdigest()[:10]

def page(t, base, root, other_href, robots="noindex,nofollow", thema=None):
    a, b, r = base + "assets/", base + "assets/bilder/", root + "assets/"
    url = SITE + ("de/" if t["lang"] == "de" else "")
    ld = {"@context": "https://schema.org", "@graph": [
        {"@type": "Person", "@id": SITE + "#nicolas", "name": "Nicolas Lekai", "url": SITE,
         "jobTitle": "AI Systems Architect", "email": "mailto:" + MAIL, "sameAs": ["https://nicolaslekai.com/"],
         "worksFor": {"@id": SITE + "#practice"}},
        {"@type": "Person", "@id": SITE + "#mirko", "name": "Mirko Hampel", "jobTitle": "Producer, post-production and VFX", "worksFor": {"@id": SITE + "#practice"}},
        {"@type": "ProfessionalService", "@id": SITE + "#practice", "name": "Machinerooms", "alternateName": "Machinerooms · AI operating systems",
         "url": SITE, "email": "mailto:" + MAIL, "founder": [{"@id": SITE + "#nicolas"}, {"@id": SITE + "#mirko"}],
         "areaServed": ["DE", "AT", "CH", "GB"], "description": t["desc"]},
        {"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": x}} for q, x in t["faq"]]}]}
    nav = "".join(f'<a href="{h}">{l}</a>' for h, l in t["nav"])
    bauten = "".join(f'''
    <a class="bau" href="#kontakt">
      <img src="{b}{img}" width="1200" height="800" alt="{esc(alt)}" loading="lazy" decoding="async">
      <span class="bau-text"><span class="bau-titel">{ti}</span><span class="bau-satz">{sa}</span><span class="mehr">{t["bau_mehr"]}</span></span>
    </a>''' for img, alt, ti, sa in t["bauten"])
    weg = "".join(f'''
    <li><span class="punkt">{ico(i)}</span>
      <figure class="tn"><img src="{b}{img}" width="900" height="604" alt="{esc(alt)}" loading="lazy" decoding="async"></figure>
      <h3>{h}</h3><div class="dauer">{d}</div><p>{p}</p></li>''' for i, img, alt, h, d, p in t["weg"])
    beg = "".join(f'\n    <div class="card"><div class="was">{ico(i)}{w}</div><h3>{h}</h3><p>{p}</p></div>' for i, w, h, p in t["beg"])
    cards = "".join(f'\n    <div class="card person"><div class="rolle">{ro}</div><h3>{n}</h3><p>{p}</p>'
                    + (f'<p><a class="mehr" href="{l[0]}" target="_blank" rel="noopener">{l[1]}</a></p>' if l else "") + '</div>'
                    for ro, n, p, l in t["t_cards"][:2])
    # Regie-Karte (Nicky 24.11.2026: "remove this … put it at the bottom … in a different look"): eigenes helles Band ueber dem Fuss
    ro2, n2, p2, l2 = t["t_cards"][2]
    regie = (f'<section class="tile light regie-band" id="regie"><div class="wrap regie">\n'
             f'  <div class="regie-kopf"><div class="eyebrow">{ro2}</div><h2>{n2}</h2></div>\n'
             f'  <div class="regie-text"><p>{p2}</p><p><a class="btn ghost" href="{l2[0]}" target="_blank" rel="noopener">{l2[1]}</a></p></div>\n'
             f'</div></section>\n')
    faq = "".join(f"\n    <details><summary>{q}</summary><p>{x}</p></details>" for q, x in t["faq"])
    li = "".join(f"<li>{x}</li>" for x in t["k_li"])
    marken = esc(json.dumps(t["sys_marken"], ensure_ascii=False))
    return f'''<!doctype html>
<html lang="{t["lang"]}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="only light">
<title>{esc(t["title"])}</title>
<meta name="description" content="{esc(t["desc"])}">
<meta name="robots" content="{robots}">
<meta property="og:type" content="website">
<meta property="og:title" content="{esc(t["title"])}">
<meta property="og:description" content="{esc(t["desc"])}">
<meta property="og:url" content="{url}">
<meta property="og:image" content="{SITE}assets/og-architect-1200x630.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#1c1c1e">
<link rel="canonical" href="{url}">
<link rel="alternate" hreflang="en" href="{SITE}">
<link rel="alternate" hreflang="de" href="{SITE}de/">
<link rel="icon" type="image/png" sizes="32x32" href="{root}favicon-32x32.png">
<link rel="apple-touch-icon" href="{root}apple-touch-icon.png">
<link rel="stylesheet" href="{a}style.css?v=nl4">
<link rel="stylesheet" href="{a}nl.css?v=nl4">{f'''
<link rel="stylesheet" id="thema" href="{a}{thema}.css?v=s14">
<script>(function(){{var m=location.search.match(/thema=(\\w+)/);if(m)document.getElementById('thema').href='{a}'+m[1]+'.css?v=s14';}})();</script>''' if thema else ""}
<script type="application/ld+json">{json.dumps(ld, ensure_ascii=False)}</script>
</head>
<body>
{SPRITE}
<header class="top"><div class="wrap">
  <a class="brand" href="./" aria-label="Machinerooms">{brand(a)}</a>
  <nav class="main" aria-label="{t["mainnav"]}">{nav}<a class="sprache" href="{other_href}" hreflang="{t["other"]}" lang="{t["other"]}" title="{t["other_title"]}">{t["other_label"]}</a><a class="btn primary nav-cta" href="#kontakt">{t["cta"]}</a></nav>
  <details class="menue">
    <summary aria-label="{t["menu"]}"><span class="burger" aria-hidden="true"><i></i><i></i><i></i></span></summary>
    <nav class="menue-inhalt" aria-label="{t["menu"]}">
      <div class="m-haupt">{nav}</div>
      <div class="m-weitere"><span>{t["also"]}</span><a href="https://nicolaslekai.com/">{t["f_dir"]}</a></div>
      <div class="m-fuss"><a class="btn primary" href="#kontakt">{t["cta"]}</a><a class="sprache" href="{other_href}" hreflang="{t["other"]}" lang="{t["other"]}">{t["other_long"]}</a></div>
    </nav>
  </details>
</div></header>

<section class="tile dark hero bild-hinter hero-bild mit-hoch">
  <picture><source media="(max-width: 900px)" srcset="{b}hero-film-handy.webp" width="900" height="900"><img class="hg" src="{b}hero-film-breit.webp" width="1600" height="900" alt="{esc(t["hero_alt"])}" fetchpriority="high" decoding="async"></picture>
  <span class="schleier" aria-hidden="true"></span>
  <div class="wrap"><div class="hero-gitter">
  <div class="text">
    <div class="eyebrow">{t["eyebrow"]}</div>
    <h1>{t["h1"]}</h1>
    <p class="lead">{t["lead"]}</p>
    <div class="cta"><a class="btn primary" href="#kontakt">{t["cta"]}</a><a class="btn ghost" href="#themen">{t["ghost"]}</a></div>
  </div>
  <figure class="film film-klein">
    <button type="button" class="film-wrap film-oeffnen" data-film-dialog aria-haspopup="dialog">
      <img src="{r}{t["film_poster"]}" width="1920" height="1080" alt="" decoding="async">
      <span class="film-cta"><span class="film-dot" aria-hidden="true"></span><span class="film-label">{t["film_label"]}</span></span>
    </button>
  </figure>
  <dialog class="film-dialog" aria-label="{t["film_name"]}">
    <form method="dialog"><button class="film-zu" aria-label="{t["film_close"]}">×</button></form>
    <video playsinline controls preload="none" width="1920" height="1080" poster="{r}{t["film_poster"]}"><source src="{r}{t["film_src"]}" type="video/mp4"></video>
  </dialog>
  </div></div>
</section>
<section class="tile light bauweg" id="themen"><div class="wrap">
  <h2>{t["themen_h2"]}</h2>
  <p class="lead">{t["themen_lead"]}</p>
  <div class="bauten" style="--n:3">{bauten}
  </div>
  <div class="weiche" style="--n:3" aria-hidden="true"><span style="--i:0"></span><span style="--i:1"></span><span style="--i:2"></span></div>
  <div class="weg-kopf" id="arbeitsweise">
    <h3>{t["weg_h3"]}</h3>
    <p>{t["weg_p"]}</p>
  </div>
  <ol class="weg">{weg}
  </ol>
</div></section>
<section class="tile dark team-bild begleit" id="begleitung">
  <picture>
    <source media="(max-width:760px)" srcset="{b}begleitung-runde-hoch.webp" width="1100" height="1375">
    <img src="{b}begleitung-runde.webp" width="2400" height="1340" alt="{esc(t["beg_alt"])}" loading="lazy" decoding="async">
  </picture>
  <span class="tb-schleier" aria-hidden="true"></span>
  <div class="wrap">
  <div class="team-kopf">
    <div><h2>{t["beg_h2"]}</h2>
    <p class="lead">{t["beg_lead"]}</p></div>
  </div>
  <div class="cards">{beg}
  </div>
</div></section>
<section class="tile light nl-system" id="system">
  <div class="wrap">
    <h2>{t["sys_h2"]}</h2>
    <p class="lead">{t["sys_lead"]}</p>
  </div>
  <figure class="nl-system-bild">
    <img src="{b}system-film-weit.webp" width="2400" height="1870" loading="lazy" decoding="async" alt="{esc(t["sys_alt"])}">
  </figure>
</section>
<section class="tile light bildband next gross">
  <div class="bb-bild">
    <img src="{b}stein-block.webp" width="1800" height="1005" alt="{esc(t["stein_alt"])}"
         style="object-position:50% 52%" loading="lazy" decoding="async">
    <div class="bb-schleier" aria-hidden="true"></div>
    <div class="wrap"><h2 class="bu">{t["stein"]}</h2></div>
  </div>
</section>
<section class="tile dark" id="gedaechtnis"><div class="wrap gedaechtnis">
  <div class="g-text">
    <div class="eyebrow">{t["g_eyebrow"]}</div>
    <h2>{t["g_h2"]}</h2>
    <p class="lead">{t["g_lead"]}</p>
    <p>{t["g_p"]}</p>
  </div>
  <figure class="g-bild" data-brain="{t["g_brain"]}">
    <img src="{a}brain/brain-ring_KJ_v004.webp" width="900" height="900" alt="{esc(t["g_alt"])}" loading="lazy">
    <figcaption>{t["g_cap"]}</figcaption>
  </figure>
  <script src="{a}brain/brain.js?v=nl2" defer></script>
</div></section>
<section class="tile dark bild-hinter">
  <img class="hg" src="{b}werkstatt-team.webp" width="1800" height="1005" alt="{esc(t["w_alt"])}" loading="lazy" decoding="async">
  <span class="schleier" aria-hidden="true"></span>
  <div class="wrap"><div class="bh-text">
    <div class="eyebrow">{t["w_eyebrow"]}</div>
    <h2>{t["w_h2"]}</h2>
    <p class="lead">{t["w_lead"]}</p>
  </div></div>
</section>
<section class="tile dark next team-bild" id="team">
  <picture>
    <source media="(max-width:760px)" srcset="{b}patchfeld-rack-hoch.webp" width="1100" height="1956">
    <img src="{b}patchfeld-rack.webp" width="2400" height="1340" alt="{esc(t["t_alt"])}" loading="lazy" decoding="async">
  </picture>
  <span class="tb-schleier" aria-hidden="true"></span>
  <div class="wrap">
  <div class="team-kopf">
    <div><h2>{t["t_h2"]}</h2>
    <p class="lead">{t["t_lead"]}</p></div>
  </div>
  <div class="cards team nl-zwei">{cards}
  </div>
</div></section>
<section class="tile light" id="fragen"><div class="wrap">
  <h2>{t["faq_h2"]}</h2>
  <div class="faq">{faq}
  </div>
</div></section>
<section id="kontakt" class="tile dark kontakt next"><div class="wrap">
  <h2>{t["k_h2"]}</h2>
  <div class="box">
    <div class="daten">
      <div>{ico("i-mail")}<a href="mailto:{MAIL}">{MAIL}</a></div>
      <div>{ico("i-whatsapp")}<a href="https://wa.me/{WA}" target="_blank" rel="noopener">WhatsApp {WA_SHOW}</a></div>
      <div class="soft">{ico("i-ort")}<span>{t["k_ort"]}</span></div>
      <p class="knoepfe"><a class="btn primary" href="mailto:{MAIL}?subject={t["k_subject"]}">{t["k_btn"]}</a> <a class="btn ghost" href="https://wa.me/{WA}" target="_blank" rel="noopener">WhatsApp</a></p>
    </div>
    <div><h3>{t["k_h3"]}</h3><ul>{li}</ul></div>
  </div>
</div></section>
{regie}<footer class="tile dark"><div class="wrap">
  <a class="brand fuss-marke" href="./" aria-label="Machinerooms">{brand(a)}</a>
  <div class="foot">
    <span>© 2026 Machinerooms · {t["k_ort"]}</span>
    <a href="./">{t["f_home"]}</a><a href="https://nicolaslekai.com/">{t["f_dir"]}</a><a href="mailto:{MAIL}">{MAIL}</a>
  </div>
</div></footer>
<script>
  var fd = document.querySelector('.film-dialog');
  if (fd && fd.showModal) {{
    var fv = fd.querySelector('video');
    document.querySelectorAll('[data-film-dialog]').forEach(function (b) {{
      b.addEventListener('click', function () {{ fd.showModal(); var p = fv.play(); if (p) p.catch(function () {{}}); }});
    }});
    fd.addEventListener('click', function (ev) {{ if (ev.target === fd) fd.close(); }});
    fd.addEventListener('close', function () {{ fv.pause(); }});
    fv.addEventListener('ended', function () {{ fd.close(); }});
  }}
  var mn = document.querySelector('details.menue');
  if (mn) {{
    document.addEventListener('keydown', function (ev) {{ if (ev.key === 'Escape' && mn.open) {{ mn.open = false; mn.querySelector('summary').focus(); }} }});
    document.addEventListener('click', function (ev) {{ if (mn.open && (!mn.contains(ev.target) || ev.target.closest('a'))) mn.open = false; }});
  }}
</script>
<script src="{a}hero-film.js?v=4" defer></script>
</body></html>
'''

if __name__ == "__main__":
    import shutil, sys
    if "--live" in sys.argv:
        # Live: Seite an die Wurzel, die Vorschau-Assets nach /assets (keine Namenskollisionen mit dem Altbestand)
        for d in ["bilder", "brain"]:
            shutil.copytree(PREV / "assets" / d, ROOT / "assets" / d, dirs_exist_ok=True)
        # 3D-Systembild: nur was die Seite laedt (gepackte Szene, Lader, Standbilder), nicht Quelle und Packskript
        (ROOT / "assets/system3d").mkdir(parents=True, exist_ok=True)
        for f in ["system3d.js", "laden.js", "systembild_KJ_v010.webp", "systembild-hoch_KJ_v010.webp"]:
            shutil.copy(PREV / "assets/system3d" / f, ROOT / "assets/system3d" / f)
        shutil.copytree(PREV / "assets/system3d/tex", ROOT / "assets/system3d/tex", dirs_exist_ok=True)   # Bilder fuer Bildschirme und Fotos
        for f in ["style.css", "nl.css", "logo-mark-coral.webp", "koralle-grau.css", "hero-luefter.js", "hero-film.js"]:
            shutil.copy(PREV / "assets" / f, ROOT / "assets" / f)
        (ROOT / "index.html").write_text(page(T["en"], "", "", "de/", "index,follow", thema="koralle-grau"))
        (ROOT / "de").mkdir(exist_ok=True)
        (ROOT / "de/index.html").write_text(page(T["de"], "../", "../", "../", "index,follow", thema="koralle-grau"))
        print("LIVE: index.html + de/index.html + assets/")
    else:
        thema = next((a.split("=", 1)[1] for a in sys.argv if a.startswith("--thema=")), None)
        (PREV / "index.html").write_text(page(T["en"], "", "../", "de/", thema=thema))
        (PREV / "de").mkdir(exist_ok=True)
        (PREV / "de/index.html").write_text(page(T["de"], "../", "../../", "../", thema=thema))
        print("preview/index.html + preview/de/index.html")
