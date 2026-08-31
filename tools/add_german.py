#!/usr/bin/env python3
"""Add a DE/EN switch and German copy to index.html.

English stays the default and the source of truth in the markup; German rides
along in data-de attributes and is swapped in at runtime. Every replacement is
asserted — a swap that silently matches nothing is the failure mode that has
burned this project before, so the script refuses to write anything unless all
of them land exactly once.

Images are left alone on purpose, English words in them included.
"""
import re
import sys

SRC = "index.html"
html = open(SRC, encoding="utf-8").read()
original = html
applied = []


def sub(old, new, count=1):
    """Replace `old` exactly `count` times or abort."""
    global html
    n = html.count(old)
    if n != count:
        print(f"ABORT: expected {count} match(es), found {n} for:\n  {old[:110]}")
        sys.exit(1)
    html = html.replace(old, new)
    applied.append(old[:60])


# ---------------------------------------------------------------- head
sub('<title>Nicolas Lekai — AI Systems Architect</title>',
    '<title>Nicolas Lekai — AI Systems Architect</title>\n'
    '<meta name="de-title" content="Nicolas Lekai — AI Systems Architect">')

# ---------------------------------------------------------------- nav
sub('<a href="#system">The System</a>',
    '<a href="#system" data-de="Das System">The System</a>')
sub('<a href="#costs">Costs</a>',
    '<a href="#costs" data-de="Kosten">Costs</a>')
sub('<a href="#services">Services</a>',
    '<a href="#services" data-de="Leistungen">Services</a>')
sub('<a href="#process">Process</a>',
    '<a href="#process" data-de="Ablauf">Process</a>')
sub('<a class="nav-cta" href="mailto:nicolaslekai@gmail.com?subject=Consulting%20enquiry">Start a brief</a>',
    '<a class="nav-cta" href="mailto:nicolaslekai@gmail.com?subject=Consulting%20enquiry" '
    'data-de="Briefing starten">Start a brief</a>\n'
    '    <div class="lang" role="group" aria-label="Language / Sprache">\n'
    '      <button type="button" class="lang-btn is-on" data-lang="en" aria-pressed="true">EN</button>\n'
    '      <span class="lang-sep" aria-hidden="true">/</span>\n'
    '      <button type="button" class="lang-btn" data-lang="de" aria-pressed="false">DE</button>\n'
    '    </div>')

# ---------------------------------------------------------------- hero
sub('<h1>make ai <span class="flip-slot" id="flip-hero">work.</span></h1>',
    '<h1><span data-de="ki wird">make ai</span> '
    '<span class="flip-slot" id="flip-hero">work.</span></h1>')
sub('<p><strong>I turn AI into ordinary, reliable capability:</strong> custom systems, '
    'production pipelines, numbers you can check. I ship with these tools every day.</p>',
    '<p data-de="&lt;strong&gt;Ich mache aus KI eine ganz normale, verlässliche Fähigkeit:&lt;/strong&gt; '
    'maßgeschneiderte Systeme, Produktions-Pipelines, Zahlen, die Sie nachrechnen können. '
    'Ich arbeite jeden Tag selbst mit diesen Werkzeugen."><strong>I turn AI into ordinary, '
    'reliable capability:</strong> custom systems, production pipelines, numbers you can check. '
    'I ship with these tools every day.</p>')
sub('<div>Munich · London</div>', '<div data-de="München · London">Munich · London</div>')

# ---------------------------------------------------------------- system
sub('<span class="mono kicker">Briefing 002 — the custom OS</span>',
    '<span class="mono kicker" data-de="Briefing 002 — das eigene OS">Briefing 002 — the custom OS</span>')
sub('<h2 class="big-h" id="system-h">many tools.<br><em>one system.</em></h2>',
    '<h2 class="big-h" id="system-h" data-de="viele werkzeuge.&lt;br&gt;&lt;em&gt;ein system.&lt;/em&gt;">'
    'many tools.<br><em>one system.</em></h2>')
sub("""<p class="lede sys-lede reveal">Your company already pays for a dozen good products. They just don't talk to each other. I wire them into one operating system that runs the way you run. <em>One login, your data stays yours.</em></p>""",
    '<p class="lede sys-lede reveal" data-de="Ihr Unternehmen bezahlt bereits ein Dutzend guter '
    'Produkte. Sie sprechen nur nicht miteinander. Ich verbinde sie zu einem Betriebssystem, das '
    'so läuft, wie Sie arbeiten. &lt;em&gt;Ein Login, Ihre Daten bleiben Ihre.&lt;/em&gt;">'
    "Your company already pays for a dozen good products. They just don't talk to each other. "
    'I wire them into one operating system that runs the way you run. <em>One login, your data '
    'stays yours.</em></p>')
sub('<h3 class="toolwall-label reveal">under the <em>hood</em></h3>',
    '<h3 class="toolwall-label reveal" data-de="unter der &lt;em&gt;haube&lt;/em&gt;">'
    'under the <em>hood</em></h3>')
sub('<span class="mono">Custom build / v1.0</span>',
    '<span class="mono" data-de="Eigenbau / v1.0">Custom build / v1.0</span>')
sub('<h3>your operating system</h3>',
    '<h3 data-de="ihr betriebssystem">your operating system</h3>')
sub('<p>One piece of software that runs every AI tool you pay for. Your team learns one window and gets all of them.</p>',
    '<p data-de="Eine Software, die jedes KI-Werkzeug bedient, für das Sie zahlen. Ihr Team lernt '
    'ein Fenster und bekommt alle.">One piece of software that runs every AI tool you pay for. '
    'Your team learns one window and gets all of them.</p>')

# app mock (decorative, but it is on screen)
sub('<span class="am-title mono">NL/OS — control centre</span>',
    '<span class="am-title mono" data-de="NL/OS — Leitstand">NL/OS — control centre</span>')
sub('<span class="am-active">Overview</span>',
    '<span class="am-active" data-de="Übersicht">Overview</span>')
sub('<span>Projects</span>', '<span data-de="Projekte">Projects</span>')
sub('<span>Costs</span>', '<span data-de="Kosten">Costs</span>')
sub('<span>Team</span>', '<span data-de="Team">Team</span>')
sub('<span class="mono">Renders queued</span>',
    '<span class="mono" data-de="Renders in Warteschlange">Renders queued</span>')
sub('<span class="mono">Tokens today</span>',
    '<span class="mono" data-de="Tokens heute">Tokens today</span>')
sub('<span class="mono">Spend today</span>',
    '<span class="mono" data-de="Ausgaben heute">Spend today</span>')
sub('<span class="mono am-panel-label">Image budget · August</span>',
    '<span class="mono am-panel-label" data-de="Bildbudget · August">Image budget · August</span>')
sub('<span>€128 used</span>', '<span data-de="€128 verbraucht">€128 used</span>')
sub('<span>cap €200</span>', '<span data-de="Limit €200">cap €200</span>')

# ---------------------------------------------------------------- brain
sub('<span class="mono kicker">Briefing 004 — long-term memory</span>',
    '<span class="mono kicker" data-de="Briefing 004 — Langzeitgedächtnis">'
    'Briefing 004 — long-term memory</span>')
sub('<h2 class="big-h" id="brain-h">a brain that<br><em>grows with you.</em></h2>',
    '<h2 class="big-h" id="brain-h" data-de="ein gedächtnis, das&lt;br&gt;&lt;em&gt;mit ihnen '
    'wächst.&lt;/em&gt;">a brain that<br><em>grows with you.</em></h2>')
sub('<p class="lede sys-lede reveal">The system keeps a long-term memory of your company: every '
    'project, every decision, every preference. <em>It learns how you work and gets sharper the '
    'longer it runs.</em></p>',
    '<p class="lede sys-lede reveal" data-de="Das System führt ein Langzeitgedächtnis Ihres '
    'Unternehmens: jedes Projekt, jede Entscheidung, jede Vorliebe. &lt;em&gt;Es lernt, wie Sie '
    'arbeiten, und wird schärfer, je länger es läuft.&lt;/em&gt;">The system keeps a long-term '
    'memory of your company: every project, every decision, every preference. <em>It learns how '
    'you work and gets sharper the longer it runs.</em></p>')
sub('<li>your data</li><li>your skill files</li>',
    '<li data-de="ihre daten">your data</li><li data-de="ihre skill-dateien">your skill files</li>')
sub('<li>your project files</li><li>your decisions</li>',
    '<li data-de="ihre projektdateien">your project files</li>'
    '<li data-de="ihre entscheidungen">your decisions</li>')
sub('<li>your best practices</li><li>your clients</li>',
    '<li data-de="ihre best practices">your best practices</li>'
    '<li data-de="ihre kunden">your clients</li>')
sub('<li>your brand voice</li><li>your workflows</li>',
    '<li data-de="ihre markensprache">your brand voice</li>'
    '<li data-de="ihre abläufe">your workflows</li>')
sub('<div><strong>Context that stays</strong>Ask about a project from last year and get the full picture.</div>',
    '<div data-de="&lt;strong&gt;Kontext, der bleibt&lt;/strong&gt;Fragen Sie nach einem Projekt '
    'vom letzten Jahr und bekommen Sie das ganze Bild."><strong>Context that stays</strong>'
    'Ask about a project from last year and get the full picture.</div>')
sub('<div><strong>Grows with you</strong>Starts with one department, scales to the whole company.</div>',
    '<div data-de="&lt;strong&gt;Wächst mit Ihnen&lt;/strong&gt;Startet in einer Abteilung, '
    'skaliert auf das ganze Unternehmen."><strong>Grows with you</strong>Starts with one '
    'department, scales to the whole company.</div>')

# ---------------------------------------------------------------- costs
sub('<span class="mono kicker">Briefing 003 — cost control</span>',
    '<span class="mono kicker" data-de="Briefing 003 — Kostenkontrolle">Briefing 003 — cost control</span>')
sub('<h2 class="big-h" id="costs-h">see every token.<br><em>control spending.</em></h2>',
    '<h2 class="big-h" id="costs-h" data-de="jeden token sehen.&lt;br&gt;&lt;em&gt;ausgaben '
    'steuern.&lt;/em&gt;">see every token.<br><em>control spending.</em></h2>')
sub('<span><i class="dot dot-red"></i>Tokens</span>',
    '<span data-de="&lt;i class=&quot;dot dot-red&quot;&gt;&lt;/i&gt;Tokens">'
    '<i class="dot dot-red"></i>Tokens</span>')
sub('<span><i class="dot dot-orange"></i>Spend €</span>',
    '<span data-de="&lt;i class=&quot;dot dot-orange&quot;&gt;&lt;/i&gt;Ausgaben €">'
    '<i class="dot dot-orange"></i>Spend €</span>')
sub('<span><i class="dot dot-cap"></i>Budget cap</span>',
    '<span data-de="&lt;i class=&quot;dot dot-cap&quot;&gt;&lt;/i&gt;Budgetlimit">'
    '<i class="dot dot-cap"></i>Budget cap</span>')
sub('<span>Image</span><span>Video</span><span>Language</span><span>Voice</span><span>Storage</span>',
    '<span data-de="Bild">Image</span><span data-de="Video">Video</span>'
    '<span data-de="Sprache">Language</span><span data-de="Stimme">Voice</span>'
    '<span data-de="Speicher">Storage</span>')
sub('<text x="290" y="288" text-anchor="middle">MAR</text>',
    '<text x="290" y="288" text-anchor="middle" data-de="MÄR">MAR</text>')
sub('<text x="510" y="288" text-anchor="middle">MAY</text>',
    '<text x="510" y="288" text-anchor="middle" data-de="MAI">MAY</text>')
sub('<p class="lede">Every AI service you run is metered as it happens. <em>The system holds the '
    'caps you set, so the bill stays flat while usage climbs.</em></p>',
    '<p class="lede" data-de="Jeder KI-Dienst wird in dem Moment gemessen, in dem er läuft. '
    '&lt;em&gt;Das System hält die Limits, die Sie setzen — die Rechnung bleibt flach, während '
    'die Nutzung steigt.&lt;/em&gt;">Every AI service you run is metered as it happens. <em>The '
    'system holds the caps you set, so the bill stays flat while usage climbs.</em></p>')
sub('<div><strong>Live preview</strong>Every model call metered as it happens.</div>',
    '<div data-de="&lt;strong&gt;Live-Anzeige&lt;/strong&gt;Jeder Modellaufruf wird sofort '
    'gemessen."><strong>Live preview</strong>Every model call metered as it happens.</div>')
sub('<div><strong>Budget caps</strong>Hard limits per tool, per project, per month.</div>',
    '<div data-de="&lt;strong&gt;Budgetlimits&lt;/strong&gt;Harte Grenzen pro Werkzeug, pro '
    'Projekt, pro Monat."><strong>Budget caps</strong>Hard limits per tool, per project, per month.</div>')

# ---------------------------------------------------------------- services
sub('<h2 id="services-h">what i do</h2>',
    '<h2 id="services-h" data-de="was ich mache">what i do</h2>')
sub('<h3>custom systems</h3>', '<h3 data-de="eigene systeme">custom systems</h3>')
sub('<li>Bespoke operating systems and control centres → <a href="#system">see the system</a></li>',
    '<li data-de="Maßgeschneiderte Betriebssysteme und Leitstände → &lt;a href=&quot;#system&quot;&gt;'
    'das system ansehen&lt;/a&gt;">Bespoke operating systems and control centres → '
    '<a href="#system">see the system</a></li>')
sub('<li>Internal tools shaped around how your team already works</li>',
    '<li data-de="Interne Werkzeuge, geformt um die Arbeitsweise Ihres Teams">'
    'Internal tools shaped around how your team already works</li>')
sub('<h3>production pipelines</h3>', '<h3 data-de="produktions-pipelines">production pipelines</h3>')
sub('<li>AI image and video pipelines, wired into real post-production</li>',
    '<li data-de="KI-Bild- und Video-Pipelines, verdrahtet mit echter Postproduktion">'
    'AI image and video pipelines, wired into real post-production</li>')
sub('<li>Built by filmmakers and CGI artists with over 25 years of experience</li>',
    '<li data-de="Gebaut von Filmemachern und CGI-Artists mit über 25 Jahren Erfahrung">'
    'Built by filmmakers and CGI artists with over 25 years of experience</li>')
sub('<h3>strategy &amp; training</h3>', '<h3 data-de="strategie &amp;amp; training">strategy &amp; training</h3>')
sub('<li>Audits, roadmaps and build-vs-buy calls with real numbers</li>',
    '<li data-de="Audits, Roadmaps und Make-or-Buy-Entscheidungen mit echten Zahlen">'
    'Audits, roadmaps and build-vs-buy calls with real numbers</li>')
sub('<li>Hands-on training at the desk, role by role</li>',
    '<li data-de="Training direkt am Arbeitsplatz, Rolle für Rolle">'
    'Hands-on training at the desk, role by role</li>')

# ---------------------------------------------------------------- process
sub('<h2 id="process-h">how i work</h2>',
    '<h2 id="process-h" data-de="wie ich arbeite">how i work</h2>')
sub('<span class="mono">Phase 01 — 2 weeks</span>',
    '<span class="mono" data-de="Phase 01 — 2 Wochen">Phase 01 — 2 weeks</span>')
sub('<h3>audit</h3>', '<h3 data-de="audit">audit</h3>')
sub('<p>Two weeks with your teams, mapping how the work really moves. You get a written brief '
    'with the hours and the costs in it.</p>',
    '<p data-de="Zwei Wochen mit Ihren Teams, um zu kartieren, wie die Arbeit wirklich läuft. Sie '
    'bekommen ein schriftliches Briefing, mit Stunden und Kosten darin.">Two weeks with your '
    'teams, mapping how the work really moves. You get a written brief with the hours and the '
    'costs in it.</p>')
sub('<span class="mono">Phase 02 — 4–8 weeks</span>',
    '<span class="mono" data-de="Phase 02 — 4–8 Wochen">Phase 02 — 4–8 weeks</span>')
sub('<h3>build</h3>', '<h3 data-de="bauen">build</h3>')
sub('<p>I build the highest-value systems myself, in your stack, shipped in weekly increments '
    'you can veto.</p>',
    '<p data-de="Ich baue die wertvollsten Systeme selbst, in Ihrem Stack, in wöchentlichen '
    'Schritten, gegen die Sie jederzeit Veto einlegen können.">I build the highest-value systems '
    'myself, in your stack, shipped in weekly increments you can veto.</p>')
sub('<span class="mono">Phase 03 — ongoing</span>',
    '<span class="mono" data-de="Phase 03 — laufend">Phase 03 — ongoing</span>')
sub('<h3>embed</h3>', '<h3 data-de="verankern">embed</h3>')
sub('<p>I train your people, document everything, and step back. Optional retainer as the models change.</p>',
    '<p data-de="Ich schule Ihre Leute, dokumentiere alles und trete zurück. Auf Wunsch ein '
    'Retainer, während sich die Modelle ändern.">I train your people, document everything, and '
    'step back. Optional retainer as the models change.</p>')

# ---------------------------------------------------------------- footer
sub('<span class="mono kicker">Open channel</span>',
    '<span class="mono kicker" data-de="Offener Kanal">Open channel</span>')
sub("<h2>let's talk.</h2>", '<h2 data-de="sprechen wir.">let\'s talk.</h2>')
sub('<h3 class="onb-h" id="onb-h">or start the brief here</h3>',
    '<h3 class="onb-h" id="onb-h" data-de="oder starten sie das briefing hier">'
    'or start the brief here</h3>')
sub('<legend class="onb-q">What would you fix first?</legend>',
    '<legend class="onb-q" data-de="Was würden Sie zuerst lösen?">What would you fix first?</legend>')
sub('<button type="button" class="onb-chip" data-v="Too many tools that do not talk to each other">too many tools</button>',
    '<button type="button" class="onb-chip" data-v="Too many tools that do not talk to each other" '
    'data-v-de="Zu viele Werkzeuge, die nicht miteinander sprechen" data-de="zu viele werkzeuge">'
    'too many tools</button>')
sub('<button type="button" class="onb-chip" data-v="AI spend we cannot see or cap">ai spend</button>',
    '<button type="button" class="onb-chip" data-v="AI spend we cannot see or cap" '
    'data-v-de="KI-Kosten, die wir weder sehen noch deckeln können" data-de="ki-kosten">ai spend</button>')
sub('<button type="button" class="onb-chip" data-v="A production pipeline that needs building">production pipeline</button>',
    '<button type="button" class="onb-chip" data-v="A production pipeline that needs building" '
    'data-v-de="Eine Produktions-Pipeline, die gebaut werden muss" data-de="produktions-pipeline">'
    'production pipeline</button>')
sub('<button type="button" class="onb-chip" data-v="Still working out where to start">still working it out</button>',
    '<button type="button" class="onb-chip" data-v="Still working out where to start" '
    'data-v-de="Noch am Sortieren, wo wir anfangen" data-de="noch am sortieren">still working it out</button>')
sub('<legend class="onb-q">How many people would use it?</legend>',
    '<legend class="onb-q" data-de="Wie viele Menschen würden es nutzen?">How many people would use it?</legend>')
sub('data-v="1 to 10 people"', 'data-v="1 to 10 people" data-v-de="1 bis 10 Personen"')
sub('data-v="11 to 50 people"', 'data-v="11 to 50 people" data-v-de="11 bis 50 Personen"')
sub('data-v="51 to 200 people"', 'data-v="51 to 200 people" data-v-de="51 bis 200 Personen"')
sub('data-v="More than 200 people"', 'data-v="More than 200 people" data-v-de="Mehr als 200 Personen"')
sub('<legend class="onb-q">Where do I read up on you?</legend>',
    '<legend class="onb-q" data-de="Wo lese ich mich über Sie ein?">Where do I read up on you?</legend>')
sub('<span class="mono">Company or website</span>',
    '<span class="mono" data-de="Firma oder Website">Company or website</span>')
sub('<span class="mono">Your email</span>',
    '<span class="mono" data-de="Ihre E-Mail">Your email</span>')
sub('placeholder="you@acme.com"', 'placeholder="you@acme.com" data-de-placeholder="sie@acme.de"')
sub('<p class="onb-note">I read the site before we talk, so the first call can start at your workflows.</p>',
    '<p class="onb-note" data-de="Ich lese die Seite, bevor wir sprechen — dann kann das erste '
    'Gespräch direkt bei Ihren Abläufen anfangen.">I read the site before we talk, so the first '
    'call can start at your workflows.</p>')
sub('<button type="button" class="onb-back" id="onb-back" hidden>back</button>',
    '<button type="button" class="onb-back" id="onb-back" hidden data-de="zurück">back</button>')
sub('<span>Munich · London</span>', '<span data-de="München · London">Munich · London</span>')
sub('<span class="mono">Short bio</span>',
    '<span class="mono" data-de="Kurzbiografie">Short bio</span>')
sub('<p>I started in web development, then worked as a web technology consultant for ComDev at '
    'the <strong>IFC</strong> and the <strong>World Bank</strong> in Washington DC, and as a data '
    'centre engineer at the cloud company Backup247 in Melbourne. London brought me back to where '
    'it all converged: visual effects. At <strong>INK</strong> I went from Nuke compositor to '
    'senior artist on automotive and commercial film, and I never stopped building the systems '
    'behind the pictures.</p>',
    '<p data-de="Ich habe in der Webentwicklung angefangen, war dann Berater für Web-Technologie '
    'bei ComDev der &lt;strong&gt;IFC&lt;/strong&gt; und der &lt;strong&gt;Weltbank&lt;/strong&gt; '
    'in Washington DC und Rechenzentrums-Ingenieur beim Cloud-Anbieter Backup247 in Melbourne. '
    'London hat mich dorthin zurückgebracht, wo alles zusammenlief: Visual Effects. Bei '
    '&lt;strong&gt;INK&lt;/strong&gt; ging es vom Nuke-Compositor zum Senior Artist für '
    'Automotive- und Werbefilm — und ich habe nie aufgehört, die Systeme hinter den Bildern zu '
    'bauen.">I started in web development, then worked as a web technology consultant for ComDev '
    'at the <strong>IFC</strong> and the <strong>World Bank</strong> in Washington DC, and as a '
    'data centre engineer at the cloud company Backup247 in Melbourne. London brought me back to '
    'where it all converged: visual effects. At <strong>INK</strong> I went from Nuke compositor '
    'to senior artist on automotive and commercial film, and I never stopped building the systems '
    'behind the pictures.</p>')
sub('<span class="mono cross-kicker">The other side</span>',
    '<span class="mono cross-kicker" data-de="Die andere Seite">The other side</span>')
sub('<p class="cross-copy">Films, VFX, post- and audio production.</p>',
    '<p class="cross-copy" data-de="Filme, VFX, Post- und Audioproduktion.">'
    'Films, VFX, post- and audio production.</p>')
sub('<span class="cross-cta">visit the studio</span>',
    '<span class="cross-cta" data-de="zum studio">visit the studio</span>')

# ---------------------------------------------------------------- JS strings
sub("const words = ['work.', 'useful.', 'cheaper.', 'safe.', 'yours.'];",
    "const WORDS = {\n"
    "    en: ['work.', 'useful.', 'cheaper.', 'safe.', 'yours.'],\n"
    "    de: ['nutzbar.', 'nützlich.', 'günstiger.', 'sicher.', 'ihre eigene.']\n"
    "  };\n"
    "  let words = WORDS.en;")
sub("      go.textContent = lastStep() ? 'send the brief' : 'next';",
    "      go.textContent = window.__t(lastStep() ? 'send' : 'next');")
sub("""      const body = [
        'First thing to fix: ' + (answers[0] || 'not answered'),
        'Team size: ' + (answers[1] || 'not answered'),
        'Company: ' + (co.value.trim() || 'not given'),
        'Reply to: ' + mail.value.trim(),
        '',
        'Sent from the brief form on consulting.nicolaslekai.com'
      ].join('\\n');""",
    """      const body = [
        window.__t('bFix') + (answers[0] || window.__t('bNone')),
        window.__t('bSize') + (answers[1] || window.__t('bNone')),
        window.__t('bCo') + (co.value.trim() || window.__t('bNotGiven')),
        window.__t('bReply') + mail.value.trim(),
        '',
        window.__t('bFrom')
      ].join('\\n');""")
sub("        + '?subject=' + encodeURIComponent('Brief — ' + (co.value.trim() || mail.value.trim()))",
    "        + '?subject=' + encodeURIComponent(window.__t('bSubj') + (co.value.trim() || mail.value.trim()))")
sub("      done.textContent = 'Your mail app should be opening with the brief filled in. If it does not, write to nicolaslekai@gmail.com.';",
    "      done.textContent = window.__t('bDone');")
sub("    refresh();\n  })();",
    "    refresh();\n    window.__onbRefresh = refresh;\n  })();")

open(SRC, "w", encoding="utf-8").write(html)
print(f"applied {len(applied)} replacements, {len(original)} -> {len(html)} bytes")
