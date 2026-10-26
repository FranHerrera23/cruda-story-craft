(() => {
  // Production: the server embeds only the accounts this person may see.
  const P = window.PORTAL; // { viewer, team, account, key, api }
  const ACC = window.PORTAL_ACCOUNTS;
  let events = [];
  const reduced = () => window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const viewer = P.viewer;
  let acct = P.team ? Object.keys(ACC)[0] : P.account, route = P.team ? "studio" : "overview", queue = [], toastTimer = null, skipAnim = false;
  const api = (method, body) => fetch(P.api + "?k=" + encodeURIComponent(P.key), { method, headers: { "Content-Type": "application/json" }, body: body ? JSON.stringify(body) : undefined, cache: "no-store" }).then((r) => { if (!r.ok) throw new Error(String(r.status)); return r.json(); });
  const root = document.getElementById("root");

  /* ── helpers */
  const A = () => ACC[acct];
  const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const D = (iso) => new Date(iso.length === 10 ? iso + "T12:00:00" : iso);
  const fmt = (iso, o) => (iso ? D(iso).toLocaleDateString("en-US", o) : "");
  const fmtT = (iso) => new Date(iso).toLocaleString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
  const isoDay = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  const TODAY = isoDay(new Date());
  const TOMORROW = isoDay(new Date(Date.now() + 864e5));
  const day = (iso, long) => (iso === TODAY ? "Today" : iso === TOMORROW ? "Tomorrow" : fmt(iso, long ? { weekday: "long", month: "long", day: "numeric" } : { weekday: "short", month: "short", day: "numeric" }));
  const team = () => !!P.team;
  const isClient = (o) => A().clients.includes(o);
  const ORDER = () => Object.keys(A().channels);
  const chLabel = (c) => (A().channels[c] && A().channels[c].label) || c;
  const words = ["no", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];
  const w = (n) => words[n] || String(n);
  const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
  const plural = (n, a, b) => (n === 1 ? a : b);
  const CHECK = `<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3.5 8.5l3 3 6-7"/></svg>`;
  const CHEV = `<svg class="chev" viewBox="0 0 8 14" aria-hidden="true"><path d="M1 1l6 6-6 6"/></svg>`;

  /* ── state */
  function items() {
    return A().items.map((it) => {
      let c = { ...it };
      for (const e of events) {
        if (e.acct !== acct || e.itemId !== it.id) continue;
        if (e.kind === "undo") { if (c.decided && c.decided.id === e.ref) c = { ...it }; continue; }
        if (e.kind === "approve" && c.status === "Needs approval") c = { ...c, owner: "Fran", status: "Scheduling", decided: e };
        if (e.kind === "changes" && c.status === "Needs approval") c = { ...c, owner: "Fran", status: "Revising", decided: e };
        if (e.kind === "sent" && c.status === "Needs input") c = { ...c, owner: "Fran", status: "Drafting", decided: e };
      }
      return c;
    });
  }
  const canUndo = (it) => !!(it.decided && (it.decided.who === viewer || team()));
  const canAct = (it) => it.owner === viewer || (team() && it.owner && isClient(it.owner));
  const sortDate = (a, b) => ((a.date || "9999") + (a.at || "")).localeCompare((b.date || "9999") + (b.at || ""));
  const toApprove = (its) => its.filter((i) => i.status === "Needs approval" && canAct(i)).sort(sortDate);
  const toInput = (its) => its.filter((i) => i.status === "Needs input" && canAct(i)).sort(sortDate);
  const decidedHere = (its) => its.filter((i) => i.decided && i.decided.kind !== "sent");

  /* ── atoms */
  function icon(it) {
    const k = it.kind;
    if (k === "Reel") return `<span class="ic reel" aria-hidden="true"><svg viewBox="0 0 16 16"><path d="M5.5 4v8l6.5-4z"/></svg></span>`;
    if (k === "Carousel") return `<span class="ic" aria-hidden="true"><svg viewBox="0 0 16 16" class="ln"><rect x="2.5" y="4" width="8" height="9.5" rx="1.5"/><path d="M6 2.5h6a1.5 1.5 0 0 1 1.5 1.5v7"/></svg></span>`;
    if (k === "LinkedIn post" || k === "X thread" || k === "LinkedIn posts") return `<span class="ic" aria-hidden="true"><svg viewBox="0 0 16 16" class="ln"><path d="M3 4.5h10M3 8h10M3 11.5h6"/></svg></span>`;
    if (k === "Newsletter") return `<span class="ic" aria-hidden="true"><svg viewBox="0 0 16 16" class="ln"><rect x="2.5" y="3.5" width="11" height="9" rx="1.5"/><path d="M3 4.5l5 4 5-4"/></svg></span>`;
    if (k === "Input") return `<span class="ic up" aria-hidden="true"><svg viewBox="0 0 16 16" class="ln"><path d="M8 12.5V3.5M4.5 7L8 3.5 11.5 7"/></svg></span>`;
    return `<span class="ic" aria-hidden="true"><svg viewBox="0 0 16 16" class="ln"><path d="M4 2.5h5.5L12.5 5.5v8H4z"/><path d="M9.5 2.5v3h3"/></svg></span>`;
  }
  function tick(it) {
    if (it.status === "Needs approval" && canAct(it)) return `<button type="button" class="tick" data-act="approve:${it.id}" aria-label="Approve ${esc(it.title)}" title="Approve">${CHECK}</button>`;
    if (it.decided && it.decided.kind === "approve") return canUndo(it) ? `<button type="button" class="tick done" data-act="undo:${it.id}" aria-label="Undo approval of ${esc(it.title)}" title="Undo">${CHECK}</button>` : `<span class="tick done">${CHECK}</span>`;
    if (it.decided && it.decided.kind === "changes") return `<span class="tick sent" title="Changes requested"><i></i></span>`;
    if (it.status === "Needs input" && canAct(it)) return `<span class="tick need" aria-hidden="true"><i></i></span>`;
    return `<span class="tick none" aria-hidden="true"></span>`;
  }
  function stateText(it) {
    if (it.status === "Live") return `Live`;
    if (it.decided && it.decided.kind === "approve") return `Approved`;
    if (it.decided && it.decided.kind === "changes") return `Changes requested`;
    if (it.decided && it.decided.kind === "sent") return `Sent`;
    if (it.owner === viewer) return it.status === "Needs input" ? "Needs you" : "To approve";
    return `${it.owner} ${it.status.toLowerCase()}`;
  }
  const etNow = () => { const p = new Intl.DateTimeFormat("en-CA", { timeZone: "America/New_York", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hour12: false }).formatToParts(new Date()); const g = (t) => p.find((x) => x.type === t).value; return { day: `${g("year")}-${g("month")}-${g("day")}`, min: (+g("hour") % 24) * 60 + +g("minute") }; };
  const toMin = (at) => { const m = /^(\d{1,2}):(\d{2})\s*(am|pm)$/i.exec(at || ""); if (!m) return null; return ((+m[1] % 12) + (m[3].toLowerCase() === "pm" ? 12 : 0)) * 60 + +m[2]; };
  const overdue = (it) => { if (A().noDates || !it.date || it.status !== "Needs approval") return false; const n = etNow(); if (it.date < n.day) return true; if (it.date > n.day) return false; const t = toMin(it.at); return t != null && t <= n.min; };
  const when = (it, long) => overdue(it) ? (long ? "as soon as you approve" : "Ready now · goes out after your yes") : (A().noDates || !it.date ? "" : `${day(it.date, long)}${it.at ? `${long ? " at " : " · "}${esc(it.at)}` : ""}`);
  const aLink = (a) => (a.go ? `<a href="#" data-go="${esc(a.go)}" class="lnk">${esc(a.label)}</a>` : a.href && a.href !== "#" ? `<a href="${esc(a.href)}" target="_blank" rel="noreferrer" class="lnk">${esc(a.label)} <span aria-hidden="true">↗</span></a>` : "");
  const sub = (it) => [it.kind === "Input" ? null : it.kind, it.forWho].filter(Boolean).join(" · ");

  /* one row, used everywhere */
  function row(it, opt = {}) {
    const meta = opt.meta ?? [opt.channel ? chLabel(it.channel) : null, when(it) || null].filter(Boolean).join(" · ");
    const right = opt.state ? `<span class="r-s ${it.owner === viewer && !it.decided ? "you" : ""}">${esc(stateText(it))}</span>` : "";
    return `<div class="r ${it.decided ? "is-done" : ""}">
      ${tick(it)}
      <a href="#" class="r-m" data-go="item:${it.id}"><span class="r-t"><b>${esc(it.title)}</b>${meta ? `<small>${meta}</small>` : ""}</span></a>${opt.links && it.assets && it.assets.length ? `<span class="r-l">${it.assets.map(aLink).join("")}</span>` : ""}${right}<a href="#" class="r-go" data-go="item:${it.id}" aria-label="Open ${esc(it.title)}" tabindex="-1">${CHEV}</a>
    </div>`;
  }

  /* ── shell */
  const demobar = () => (team() && route !== "studio" ? `<div class="demobar" role="region" aria-label="Team view"><span>CRUDA team · viewing ${esc(A().name)} as the client sees it</span><span class="sw"><button type="button" data-go="studio">Back to Studio</button></span></div>` : "");
  function tabs(active) {
    const its = items();
    const t = [["overview", "Overview", false]].concat(ORDER().filter((c) => its.some((i) => i.channel === c)).map((c) => [`ch:${c}`, chLabel(c), its.some((i) => i.channel === c && canAct(i) && (i.status === "Needs approval" || i.status === "Needs input"))]));
    return t.map(([r, l, dot]) => `<a href="#" data-go="${r}" ${active === r ? 'aria-current="page"' : ""}>${esc(l)}${dot ? `<i class="dot" aria-label="needs you"></i>` : ""}</a>`).join("");
  }
  const shell = (active, body) => `${demobar()}
    <div class="app">
      <header class="top"><div class="topin">
        <a href="#" class="brand" data-go="overview"><b>${esc(A().name)}</b></a>
        <nav class="tabs" aria-label="Sections">${tabs(active)}</nav>
        <span class="me"><span class="av" title="${esc(viewer)}">${esc(viewer[0])}</span></span>
      </div></header>
      <main class="in">${body}</main>
      <footer class="foot"><span>CRUDA</span><span>Nothing goes out without your yes.</span></footer>
    </div>`;

  /* ── overview */
  function overview() {
    const its = items();
    const ap = toApprove(its), inp = toInput(its);
    const done = decidedHere(its).filter((i) => i.decided.who === viewer || team());
    const list = ap.concat(done).sort(sortDate);
    const h1 = ap.length ? `${cap(w(ap.length))} ${plural(ap.length, "piece", "pieces")} to approve.` : inp.length ? `${cap(w(inp.length))} ${plural(inp.length, "thing", "things")} we need from you.` : "You’re all caught up.";
    const lead = ap.length && inp.length ? `And ${w(inp.length)} ${plural(inp.length, "thing", "things")} we need from you.` : !ap.length && !inp.length ? "Everything else is with CRUDA. We’ll bring the next round here." : "";
    const g = {}; list.forEach((i) => (g[i.channel] ||= []).push(i));
    const groups = ORDER().filter((c) => g[c]).map((c) => `<div class="grp"><div class="grp-h"><span>${esc(chLabel(c))}</span><a href="#" data-go="ch:${c}">See plan</a></div>${g[c].map((i) => row(i)).join("")}</div>`).join("");
    const lines = A().scope.lines;
    return shell("overview", `
      <section class="hero">
        <p class="eyebrow">${new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}</p>
        <h1>${esc(h1)}</h1>
        ${lead ? `<p class="lead">${esc(lead)}</p>` : ""}
        ${ap.length ? `<div class="cta"><button type="button" class="btn pri" data-act="review:all">Start review</button><span class="hint">One at a time. About ${Math.max(1, Math.round(ap.length * 0.5))} minutes.</span></div>` : ""}
      </section>
      ${list.length ? `<section class="sec"><h2 class="sec-h">To approve</h2>${groups}</section>` : ""}
      ${inp.length ? `<section class="sec"><h2 class="sec-h">We need from you</h2>${inp.map((i) => row(i, { meta: [chLabel(i.channel), i.askHow].filter(Boolean).join(" · ") })).join("")}</section>` : ""}
      <section class="sec">
        <details class="more"><summary><span>How the work is going</span>${CHEV}</summary>
          <div class="more-b">
            <p class="obj">${esc(A().objective)}</p>
            ${lines.map((x) => `<div class="pr"><span>${esc(x.name)}</span><span class="pr-c">${x.done} of ${x.total}</span><span class="pr-b"><i style="width:${Math.round((x.done / x.total) * 100)}%"></i></span><small>${esc(x.note)}</small></div>`).join("")}
            ${A().results.length ? `<div class="res">${A().results.map((r) => `<div><b>${esc(r.value)}</b><small>${esc(r.label)}</small></div>`).join("")}</div>` : ""}
          </div>
        </details>
      </section>`);
  }

  /* ── channel */
  function channel(c) {
    const its = items();
    const info = A().channels[c] || {};
    const all = its.filter((i) => i.channel === c);
    const planned = all.filter((i) => i.status !== "Live").sort(sortDate);
    const live = all.filter((i) => i.status === "Live").sort((a, b) => (b.date || "").localeCompare(a.date || ""));
    const open = planned.filter((i) => i.status === "Needs approval" && canAct(i));
    const dated = planned.filter((i) => i.date);
    const span = !A().noDates && dated.length ? (dated[0].date === dated[dated.length - 1].date ? day(dated[0].date) : `${fmt(dated[0].date, { month: "short", day: "numeric" })} to ${fmt(dated[dated.length - 1].date, { month: "short", day: "numeric" })}`) : "";
    const facts = [planned.length ? `${planned.length} ${plural(planned.length, "piece", "pieces")}` : "Nothing planned", span].filter(Boolean).join(" · ");
    const visual = planned.filter((i) => i.kind === "Reel" || i.kind === "Carousel");
    const mon = (iso) => { const d = D(iso); d.setDate(d.getDate() - ((d.getDay() + 6) % 7)); return isoDay(d); };
    const gr = {}; planned.forEach((i) => (gr[!A().noDates && i.date ? mon(i.date) : "none"] ||= []).push(i));
    const plan = Object.keys(gr).map((k) => `${k !== "none" && Object.keys(gr).length > 1 ? `<p class="wkh">${mon(TODAY) === k ? "This week" : `Week of ${fmt(k, { month: "long", day: "numeric" })}`}</p>` : ""}${gr[k].map((i) => row(i, { meta: [when(i), sub(i)].filter(Boolean).join(" · "), state: !(i.owner === viewer && i.status === "Needs approval"), links: true })).join("")}`).join("");
    const grid = false && visual.length >= 3 ? `<div class="phone" aria-label="Preview of the grid"><div class="ph-top"><b>m2develop</b><span>Newest first</span></div><div class="ph-grid">
      ${[...visual].reverse().map((i) => `<a href="#" class="gt ${i.kind === "Reel" ? "reel" : "car"} ${i.decided && i.decided.kind === "approve" ? "ok" : ""}" data-go="item:${i.id}" title="${esc(i.title)}"><span class="gt-k">${i.kind === "Reel" ? `<svg viewBox="0 0 16 16"><path d="M5.5 4v8l6.5-4z"/></svg>` : `<svg viewBox="0 0 16 16" class="ln"><rect x="2.5" y="4" width="8" height="9.5" rx="1.5"/><path d="M6 2.5h6a1.5 1.5 0 0 1 1.5 1.5v7"/></svg>`}</span><b>${esc(i.title)}</b><span class="gt-d">${day(i.date)}</span></a>`).join("")}
      </div></div>` : "";
    return shell(`ch:${c}`, `
      <section class="hero ch">
        <h1>${esc(chLabel(c))}</h1>
        <p class="lead">${esc(info.blurb || "")}</p>
        <p class="meta">${esc(facts)}${info.links ? info.links.map((l) => ` · ${aLink(l)}`).join("") : ""}</p>
        ${open.length ? `<div class="cta"><button type="button" class="btn pri" data-act="review:${c}">Review ${open.length === 1 ? "it" : `all ${open.length}`}</button>${open.length > 1 ? `<button type="button" class="btn ghost" data-act="all:${c}">Approve all</button>` : ""}</div>` : ""}
      </section>
      <section class="sec ${grid ? "split" : ""}">
        ${grid ? `<div class="split-a">${grid}</div>` : ""}
        <div class="split-b">${planned.length ? plan : `<p class="empty">Nothing planned yet.</p>`}</div>
      </section>
      ${live.length ? `<section class="sec"><details class="more"><summary><span>Already live · ${live.length}</span>${CHEV}</summary><div class="more-b">${live.map((i) => row(i, { meta: [i.date ? fmt(i.date, { month: "short", day: "numeric" }) : "October", i.result].filter(Boolean).join(" · ") })).join("")}</div></details></section>` : ""}`);
  }

  /* ── one piece */
  function slide(s) {
    if (s.type === "cover") return `<div class="slide cover"><span class="lb">${esc(s.label)}</span><span class="ph">${esc(s.photo)}</span><span class="hl">${esc(s.headline)}</span></div>`;
    if (s.type === "photo") return `<div class="slide photo"><span class="ph">${esc(s.photo)}</span>${s.caption ? `<span class="ft">${esc(s.caption)}</span>` : ""}</div>`;
    if (s.type === "close") return `<div class="slide close"><span></span><span class="hl">${esc(s.headline)}</span><span class="mk">M2DEVELOP</span></div>`;
    return `<div class="slide text"><span></span><span class="hl">${esc(s.headline)}</span><span class="ft">${esc(s.body || "")}</span></div>`;
  }
  const sheet = (name, subt, body) => `<div class="sheet"><div class="by"><i>${esc(name[0])}</i><span><b>${esc(name)}</b><span>${esc(subt)}</span></span></div><div class="sheet-b">${esc(body)}</div></div>`;
  function preview(it) {
    const block = (label, body) => `<div class="tb"><p class="lbl">${label}</p><div class="tb-b">${esc(body)}</div></div>`;
    const sLine = (x, n) => `<li><span class="sn">${n}</span><span>${x.type === "photo" ? `<span class="dim">Photo · ${esc(x.photo)}</span>${x.caption ? `<br>${esc(x.caption)}` : ""}` : `${esc(x.headline || "")}${x.body ? `<br><span class="dim">${esc(x.body)}</span>` : ""}${x.photo ? `<br><span class="dim">Photo · ${esc(x.photo)}</span>` : ""}`}</span></li>`;
    if (it.kind === "Reel") return `<div class="stack">${it.scene ? block("The scene", it.scene) : ""}${it.caption ? block("Caption", it.caption) : ""}</div>`;
    if (it.slides) return `<div class="stack"><div class="tb"><p class="lbl">${it.slides.length} slides</p><ol class="sl">${it.slides.map((x, n) => sLine(x, n + 1)).join("")}</ol></div>${it.caption ? block("Caption", it.caption) : ""}</div>`;
    if (it.post) return block(it.channel === "X" ? "Thread on X" : "Post on LinkedIn", it.post);
    const file = it.assets && it.assets.find((a) => a.href && a.href !== "#");
    if (it.kind === "Reel") return `<div class="stack"><div class="rv"><span class="rv-s">${esc(it.scene || "")}</span>${file ? `<a class="rv-p" href="${esc(file.href)}" target="_blank" rel="noreferrer"><span class="play"><svg viewBox="0 0 16 16"><path d="M5.5 4v8l6.5-4z"/></svg></span>Watch the reel</a>` : ""}</div>${it.caption ? sheet("m2develop", "Caption", it.caption) : ""}</div>`;
    if (it.slides) return `<div class="stack"><div><div class="track" tabindex="0" aria-label="Slides, use arrow keys" data-track>${it.slides.map(slide).join("")}</div>
      <div class="carnav"><span aria-live="polite" data-count>1 / ${it.slides.length}</span><span class="b"><button type="button" data-prev aria-label="Previous slide">‹</button><button type="button" data-next aria-label="Next slide">›</button></span></div></div>
      ${it.caption ? sheet("m2develop", "Caption", it.caption) : ""}</div>`;
    if (it.post) return sheet(A().name === "M2Develop" ? "Ryan Altman" : A().name, it.channel === "X" ? "Post on X" : "Post on LinkedIn", it.post);
    if (it.ask) return `<div class="doc"><h3>Seven questions</h3><ol>${it.ask.map((q) => `<li>${esc(q)}</li>`).join("")}</ol></div>`;
    return `<div class="doc"><p>${esc(it.excerpt || it.why || "")}</p></div>`;
  }

  function item(id) {
    const its = items();
    const it = its.find((i) => i.id === id);
    if (!it) return overview();
    const th = events.filter((e) => e.acct === acct && e.itemId === id);
    const notes = th.filter((e) => e.kind === "note" || e.kind === "changes");
    const sibs = it.story ? its.filter((i) => i.story === it.story && i.id !== id) : [];
    const qi = queue.indexOf(id);
    const d = it.decided;
    let panel = "";
    if (canAct(it) && it.status === "Needs approval") panel = `<div class="decide" data-decide>
        <button class="btn pri wide" type="button" data-act="approve:${id}">Approve</button>
        <button class="btn tx" type="button" data-act="open:${id}">Request changes</button>
      </div>`;
    else if (canAct(it) && it.status === "Needs input") panel = `<div class="decide" data-decide>
        <p class="how">${esc(it.askHow || "")}</p>
        <button class="btn pri wide" type="button" data-act="sent:${id}">I’ve sent it</button>
      </div>`;
    else if (d) panel = `<div class="done">
        <span class="tick done">${CHECK}</span>
        <div><p>${d.kind === "changes" ? "Changes requested." : d.kind === "approve" ? "Approved." : "Sent."} <span class="dim">${d.kind === "changes" ? `Fran is on it. Version ${it.version + 1} comes back here.` : d.kind === "approve" ? "Fran schedules it." : "Fran has it."}</span></p>
        ${canUndo(it) ? `<button type="button" class="btn tx" data-act="undo:${id}">${({ approve: "Undo approval", changes: "Withdraw request", sent: "Undo" })[d.kind]}</button>` : ""}</div>
      </div>`;
    else panel = `<div class="done quiet"><p>${esc(stateText(it))}.</p></div>`;
    const files = (it.assets || []).filter((a) => a.go !== "item:" + id).map(aLink).filter(Boolean);
    const verbN = { note: (e) => e.text, changes: (e) => `Requested changes: ${e.text}` };
    return shell(`ch:${it.channel}`, `
      <div class="itbar">
        <a href="#" class="back" data-go="${qi >= 0 ? "overview" : "ch:" + it.channel}"><svg viewBox="0 0 8 14" aria-hidden="true"><path d="M7 1L1 7l6 6"/></svg>${qi >= 0 ? "Overview" : esc(chLabel(it.channel))}</a>
        ${qi >= 0 ? `<div class="qnav"><span class="q-c">${qi + 1} of ${queue.length}</span><button type="button" data-q="${qi - 1}" ${qi === 0 ? "disabled" : ""} aria-label="Previous">‹</button><button type="button" data-q="${qi + 1}" ${qi === queue.length - 1 ? "disabled" : ""} aria-label="Next">›</button></div>` : ""}
      </div>
      <div class="itgrid">
        <div class="min0">
          <header class="ithead"><p class="eyebrow">${esc([chLabel(it.channel), it.kind === "Input" ? null : it.kind, it.series].filter(Boolean).join(" · "))}</p><h1>${esc(it.title)}</h1>
            ${when(it, true) ? `<p class="goes">Goes out ${when(it, true).replace(/^(Today|Tomorrow)/, (m) => m.toLowerCase())}</p>` : ""}</header>
          ${preview(it)}
        </div>
        <aside class="min0 side">
          ${panel}
          ${it.why ? `<p class="why">${esc(it.why)}</p>` : ""}
          ${files.length ? `<div class="files">${files.join("")}</div>` : ""}
          ${sibs.length ? `<div class="sibs"><p class="lbl">Same story elsewhere</p>${sibs.map((s) => `<a href="#" class="sib" data-go="item:${s.id}"><span>${esc(s.title)}</span><small>${esc(chLabel(s.channel))}</small></a>`).join("")}</div>` : ""}
          <details class="notes" ${notes.length ? "open" : ""}><summary>${notes.length ? `Notes · ${notes.length}` : "Add a note"}</summary>
            ${notes.map((e) => `<div class="msg"><small><b>${esc(e.who === viewer ? "You" : e.who)}</b> · ${fmtT(e.at)}</small>${esc(verbN[e.kind](e))}</div>`).join("")}
            <form data-note="${id}"><label class="sr" for="n-${id}">Note for Fran</label><textarea id="n-${id}" rows="2" placeholder="A note for Fran"></textarea><button class="btn ghost sm" type="submit">Add note</button></form>
          </details>
          ${team() ? `<details class="notes"><summary>For CRUDA</summary><dl class="facts"><dt>Owner</dt><dd>${esc(it.owner || "None")}</dd><dt>Status</dt><dd>${esc(it.status)}</dd><dt>Version</dt><dd>${it.version}</dd>${it.eden ? `<dt>Eden</dt><dd>${esc(it.eden)}</dd>` : ""}<dt>History</dt><dd>${th.length ? th.map((e) => `${esc(e.who)} ${e.kind}, ${fmtT(e.at)}`).join("<br>") : "None"}</dd></dl></details>` : ""}
        </aside>
      </div>
      ${qi >= 0 ? `<p class="keys" aria-hidden="true"><kbd>A</kbd> approve <kbd>←</kbd><kbd>→</kbd> move</p>` : ""}`);
  }

  /* ── studio + sign in */
  function studio() {
    const verb = { approve: "approved", changes: "asked for changes on", sent: "sent", note: "left a note on", undo: "took back a decision on" };
    const blocks = Object.keys(ACC).map((k) => {
      const s0 = acct; acct = k; const its = items(); acct = s0;
      const a = ACC[k]; const evs = events.filter((e) => e.acct === k);
      const onC = its.filter((i) => i.owner && a.clients.includes(i.owner)).length;
      return `<section class="sec"><div class="grp-h big"><span>${esc(a.name)} <span class="dim">· ${onC} with ${esc(a.clients[0])}</span></span><a href="#" data-open="${k}">Open as ${esc(a.clients[0])}</a></div>
        ${evs.length ? [...evs].reverse().map((e) => { const it = its.find((i) => i.id === e.itemId); return `<div class="act"><span><b>${esc(e.who)}</b> ${verb[e.kind]} ${esc(it ? it.title : "")}</span>${e.text ? `<q>${esc(e.text)}</q>` : ""}<small>${fmtT(e.at)}</small></div>`; }).join("") : `<p class="empty">Nothing yet.</p>`}</section>`;
    }).join("");
    return `${demobar()}<div class="app"><header class="top"><div class="topin"><span class="brand"><b>CRUDA</b> <span class="dim">Studio</span></span><span class="me"><span class="av">${esc(viewer[0])}</span></span></div></header>
      <main class="in"><section class="hero"><p class="eyebrow">Studio</p><h1>What clients did.</h1><p class="lead">Every decision and note, newest first. This page replaces notifications.</p></section>${blocks}</main></div>`;
  }

  /* ── render */
  function render(top = true) {
    let h;
    if (route === "studio" && team()) h = studio();
    else if (route.startsWith("ch:")) h = channel(route.slice(3));
    else if (route.startsWith("item:")) h = item(route.slice(5));
    else h = overview();
    root.classList.toggle("anim", top && !skipAnim);
    skipAnim = false;
    root.innerHTML = h;
    document.body.classList.toggle("has-bar", !!root.querySelector("[data-decide]"));
    const tr = root.querySelector("[data-track]");
    if (tr) {
      const n = tr.children.length, c = root.querySelector("[data-count]");
      const mv = (x) => tr.scrollTo({ left: Math.max(0, Math.min(n - 1, Math.round(tr.scrollLeft / tr.clientWidth) + x)) * tr.clientWidth, behavior: reduced() ? "auto" : "smooth" });
      tr.addEventListener("scroll", () => { c.textContent = `${Math.round(tr.scrollLeft / tr.clientWidth) + 1} / ${n}`; }, { passive: true });
      tr.addEventListener("keydown", (e) => { if (e.key === "ArrowRight") { e.stopPropagation(); mv(1); } if (e.key === "ArrowLeft") { e.stopPropagation(); mv(-1); } });
      root.querySelector("[data-prev]").onclick = () => mv(-1);
      root.querySelector("[data-next]").onclick = () => mv(1);
    }
    if (top) window.scrollTo(0, 0);
  }
  function toast(msg, undoIds) {
    let t = document.querySelector("[data-toast]");
    if (!t) { t = document.createElement("div"); t.className = "toast"; t.setAttribute("role", "status"); t.setAttribute("aria-live", "polite"); t.dataset.toast = ""; t.hidden = true; document.body.appendChild(t); }
    t.innerHTML = `<span>${esc(msg)}</span>${undoIds ? `<button type="button" data-undo="${undoIds.join(",")}">Undo</button>` : ""}`;
    t.hidden = false;
    t.classList.remove("in"); void t.offsetWidth; t.classList.add("in");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { t.hidden = true; }, 5000);
  }
  const uid = () => (crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36) + Math.random().toString(36).slice(2, 10));
  const add = (itemId, kind, text, ref) => {
    const e = { id: uid(), acct, itemId, who: viewer, kind, text, ref, at: new Date().toISOString() };
    events.push(e);
    api("POST", { id: e.id, acct: e.acct, itemId, kind, text, ref }).catch(() => {
      events = events.filter((x) => x.id !== e.id);
      render(false);
      toast("That didn’t save. Check your connection and try again.");
    });
    return e.id;
  };
  let syncing = false;
  const sync = () => {
    if (syncing) return; syncing = true;
    api("GET").then((r) => {
      const local = events.filter((e) => !r.events.some((x) => x.id === e.id) && Date.now() - Date.parse(e.at) < 15000);
      events = r.events.concat(local);
      const busy = document.activeElement && /^(TEXTAREA|INPUT)$/.test(document.activeElement.tagName);
      if (!busy) render(false);
    }).catch(() => {}).finally(() => { syncing = false; });
  };
  document.addEventListener("visibilitychange", () => { if (document.visibilityState === "visible") sync(); });
  setInterval(() => { if (document.visibilityState === "visible") sync(); }, 45000);
  const takeBack = (ids) => ids.forEach((id) => { const e = events.find((x) => x.id === id); if (e) { const s0 = acct; acct = e.acct; add(e.itemId, "undo", "", id); acct = s0; } });
  function go(fn, dir) {
    if (!document.startViewTransition || reduced()) { fn(); return; }
    document.documentElement.dataset.dir = dir || "fade";
    skipAnim = true;
    document.startViewTransition(fn);
  }
  const toRoute = (to, dir) => go(() => { route = to; if (!route.startsWith("item:") || !queue.includes(route.slice(5))) queue = []; render(); }, dir);
  const qMove = (i) => { const cur = queue.indexOf(route.slice(5)); if (queue[i]) go(() => { route = "item:" + queue[i]; render(); }, i > cur ? "next" : "prev"); };

  function act(k, id) {
    const its = items();
    if (k === "review") {
      queue = (id === "all" ? toApprove(its) : toApprove(its).filter((i) => i.channel === id)).map((i) => i.id);
      if (queue.length) go(() => { route = "item:" + queue[0]; render(); });
      return;
    }
    if (k === "open") {
      const d = root.querySelector("[data-decide]");
      d.classList.add("writing");
      d.innerHTML = `<label class="sr" for="ch">What should change</label><textarea id="ch" rows="4" placeholder="What should change? A line, a photo, a word."></textarea><p class="err" data-err hidden>Say what should change so Fran can act on it.</p>
        <div class="btns"><button class="btn pri" type="button" data-send="${id}">Send to Fran</button><button class="btn tx" type="button" data-cancel>Cancel</button></div>`;
      d.querySelector("textarea").focus(); return;
    }
    if (k === "all") {
      const ids = toApprove(its).filter((i) => i.channel === id).map((i) => add(i.id, "approve"));
      render(false); toast(`${cap(w(ids.length))} approved. Fran has them.`, ids); return;
    }
    const it = its.find((i) => i.id === id);
    if (!it) return;
    if (k === "undo") { if (it.decided) { takeBack([it.decided.id]); render(false); toast(`Taken back. ${it.title} needs your decision again.`); } return; }
    const evId = add(id, k);
    if (route === "item:" + id && queue.includes(id)) {
      const rest = queue.filter((x) => x !== id && items().find((i) => i.id === x && i.status === "Needs approval"));
      if (rest.length) { const nx = queue.indexOf(rest.find((x) => queue.indexOf(x) > queue.indexOf(id)) || rest[0]); go(() => { route = "item:" + queue[nx]; render(); }, "next"); toast(`Approved. ${rest.length} to go.`, [evId]); return; }
      go(() => { queue = []; route = "overview"; render(); }); toast("All done. Fran has them to schedule.", [evId]); return;
    }
    render(false);
    toast(k === "sent" ? `Thanks. Fran has it.` : `Approved. Fran schedules it.`, [evId]);
  }

  document.addEventListener("click", (e) => {
    const g = e.target.closest("[data-go]");
    if (g) { e.preventDefault(); toRoute(g.dataset.go); return; }
    const op = e.target.closest("[data-open]");
    if (op) { e.preventDefault(); acct = op.dataset.open; route = "overview"; render(); return; }
    const u = e.target.closest("[data-undo]");
    if (u) { takeBack(u.dataset.undo.split(",")); render(false); toast("Undone."); return; }
    const q = e.target.closest("[data-q]");
    if (q) { qMove(+q.dataset.q); return; }
    const a = e.target.closest("[data-act]");
    if (a) { const [k, id] = a.dataset.act.split(":"); act(k, id); return; }
    const s = e.target.closest("[data-send]");
    if (s) { const ta = root.querySelector("#ch"); const v = ta.value.trim(); if (!v) { root.querySelector("[data-err]").hidden = false; ta.focus(); return; } const ev = add(s.dataset.send, "changes", v); render(false); toast("Sent to Fran. A new version comes back here.", [ev]); return; }
    if (e.target.closest("[data-cancel]")) { render(false); return; }
  });
  document.addEventListener("keydown", (e) => {
    if (e.metaKey || e.ctrlKey || e.altKey || /^(TEXTAREA|INPUT)$/.test(document.activeElement && document.activeElement.tagName)) return;
    if (!route.startsWith("item:")) return;
    const id = route.slice(5), qi = queue.indexOf(id);
    if ((e.key === "a" || e.key === "A") && root.querySelector(`[data-decide] [data-act="approve:${id}"]`)) { e.preventDefault(); act("approve", id); }
    else if (e.key === "ArrowRight" && qi >= 0 && qi < queue.length - 1) qMove(qi + 1);
    else if (e.key === "ArrowLeft" && qi > 0) qMove(qi - 1);
    else if (e.key === "Escape") toRoute(qi >= 0 ? "overview" : "ch:" + (items().find((i) => i.id === id) || {}).channel);
  });
  document.addEventListener("submit", (e) => {
    e.preventDefault();
    const f = e.target;
    if (f.dataset.note) { const v = f.querySelector("textarea").value.trim(); if (!v) { f.querySelector("textarea").focus(); return; } add(f.dataset.note, "note", v); render(false); toast("Note added."); return; }
  });
  render();
  sync();
})();
