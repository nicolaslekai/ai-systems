// Thumbnail ideas for the hero film (Nicky, 26.09: "the thumbnail somehow needs to invite to watch the video ...
// it doesn't have to be from the video"). The play button, the label, the progress bar and the duration badge are
// NOT baked in: the page lays them over any poster, so they stay sharp and translatable.
//   node tools/film_thumbs.js   -> WEBSITE/previews/film_thumbs/thumb_{A,B,C}_{de,en}.jpg (1600x900)
// A = light card in the film's big-type style (the film's own highlight line), pops on the dark page; the headline stays
//     in the top quarter because on a phone the play button + label cover the middle ~44 % of the poster
// B = six key frames of the film as a 3x2 contact sheet (a peek, like a trailer)
// C = Nano Banana still: the red robot in a cinema seat with popcorn, waving you in (robot_a.jpg, cropped to 16:9)
const fs = require("fs"), path = require("path");
const puppeteer = require("/Users/nicolaslekai/Documents/Claude/Projects/WEBSITE/tools/mobile-shot/node_modules/puppeteer-core");
const OUT = "/Users/nicolaslekai/Documents/Claude/Projects/WEBSITE/previews/film_thumbs";
// v2 (Nicky picked A, "this is it!", then "add KI or AI Betriebssystem ... for English AI and for German KI")
const T = { en: { l1: "your own", l2: ["ai operating", " system."], tag: "NL/OS · the film" },
            de: { l1: "ihr eigenes", l2: ["ki-betriebs", "system."], tag: "NL/OS · der film" } };
const url = f => "file://" + path.join(OUT, f);
const A = l => `<div style="position:absolute;inset:0;background:#f6f5f8"></div>
  <div class="h" style="left:100px;top:46px;color:#1d1d1f">${T[l].l1}</div>
  <div class="h" style="left:100px;top:138px;color:#f0413f">${T[l].l2.join("")}</div>
  <div class="m" style="left:116px;bottom:84px;color:#8e8e93"><span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#f0413f;margin-right:12px;vertical-align:1px"></span>${T[l].tag}</div>`;
const B = l => `<div style="position:absolute;inset:0;background:#0e0e10"></div>` +
  [0, 1, 2, 3, 4, 5].map(i => `<img src="${url(`frames/${l}_${i}.jpg`)}" style="position:absolute;left:${(i % 3) * 536}px;top:${Math.floor(i / 3) * 452}px;width:528px;height:448px;object-fit:cover">`).join("");
const C = () => `<img src="${url("robot_a.jpg")}" style="position:absolute;left:0;top:0;width:1600px;height:900px;object-fit:cover;object-position:40% 50%">`;
(async () => {
  const b = await puppeteer.launch({ executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", headless: "new", args: ["--allow-file-access-from-files"] });
  const p = await b.newPage(); await p.setViewport({ width: 1600, height: 900 });
  for (const [k, fn] of [["A", A], ["B", B], ["C", C]]) for (const l of ["de", "en"]) {
    const html = `<!doctype html><meta charset="utf-8"><style>*{margin:0}body{width:1600px;height:900px;position:relative;overflow:hidden;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased}
      .h{position:absolute;font-weight:700;font-size:92px;letter-spacing:-.045em;line-height:1}.m{position:absolute;font:500 18px "IBM Plex Mono","SF Mono",monospace;letter-spacing:.16em;text-transform:uppercase}</style>${fn(l)}`;
    const f = path.join(OUT, `_thumb.html`); fs.writeFileSync(f, html);
    await p.goto("file://" + f, { waitUntil: "networkidle0" }); await p.evaluate(() => document.fonts.ready);
    await p.screenshot({ path: path.join(OUT, `thumb_${k}_${l}.jpg`), type: "jpeg", quality: 86 });
  }
  fs.unlinkSync(path.join(OUT, "_thumb.html")); await b.close(); console.log("ok");
})();
