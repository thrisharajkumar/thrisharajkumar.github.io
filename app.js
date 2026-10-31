// Renders the page from content.js. You shouldn't need to edit this file.
(function () {
  const S = window.SITE, $ = (id) => document.getElementById(id);
  const el = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; };
  const EMOJI = { health: "🫀", energy: "⚡", climate: "🌱" };
  const fmt = (d) => { const [y, m] = String(d).split("-"); return m ? new Date(y, m - 1).toLocaleDateString("en-GB", { month: "short", year: "numeric" }) : y; };

  // basics
  $("name").textContent = S.name; $("intro").textContent = S.intro; $("photo").src = S.photo;
  ["followTop", "follow", "message", "floatFollow", "momentsLi"].forEach((id) => ($(id).href = S.linkedin));
  $("gh").href = S.github; $("recs").href = S.recommendations; $("yr").textContent = new Date().getFullYear();

  // now
  S.now.forEach((n) => { const li = el("li"); li.append(el("b", null, n.label), document.createTextNode(n.text)); $("now").append(li); });

  // threads + bridges
  THREADS.forEach((t) => {
    const art = el("article", "th " + t.id); art.id = "thread-" + t.id;
    const badge = el("div", "badge", t.emoji); badge.setAttribute("aria-hidden", "true");
    const body = el("div"); body.append(el("h3", null, t.title), el("p", "line", t.line), el("p", null, t.story));
    const chips = el("ul", "chips"); t.skills.forEach((s) => chips.append(el("li", null, s))); body.append(chips);
    art.append(badge, body); $("threadList").append(art);
    $("threadList").append(el("p", "bridge " + t.id, t.bridge));
  });

  // papers with filters
  let filter = "all";
  function renderPapers() {
    const list = $("paperList"); list.innerHTML = "";
    PAPERS.filter((p) => filter === "all" || p.thread === filter).forEach((p) => {
      const li = el("li", p.thread);
      const title = el("p", "t");
      if (p.link) { const a = el("a", null, p.title); a.href = p.link; a.target = "_blank"; a.rel = "noopener"; title.append(a); } else title.textContent = p.title;
      const meta = el("p", "m"); meta.append(el("span", "role", p.role), document.createTextNode(` in ${p.venue}, ${p.year}`));
      li.append(title, meta); list.append(li);
    });
  }
  [["all", "All"], ["health", "🫀 Health"], ["energy", "⚡ Energy"], ["climate", "🌱 Climate"]].forEach(([k, label]) => {
    const b = el("button", null, label); b.setAttribute("aria-pressed", k === "all");
    b.onclick = () => { filter = k; document.querySelectorAll("#paperFilters button").forEach((x) => x.setAttribute("aria-pressed", x === b)); renderPapers(); };
    $("paperFilters").append(b);
  });
  renderPapers();

  // moments
  const SHOW = 8; let showAll = false;
  function renderMoments() {
    const grid = $("momentGrid"); grid.innerHTML = "";
    const items = showAll ? MOMENTS : MOMENTS.slice(0, SHOW);
    items.forEach((m) => {
      const card = el(m.link && !m.embed ? "a" : "div", "card " + (m.thread || "health"));
      if (card.tagName === "A") { card.href = m.link; card.target = "_blank"; card.rel = "noopener"; }
      if (m.embed) {
        const f = document.createElement("iframe"); f.src = m.embed; f.title = m.title; f.loading = "lazy"; f.allowFullscreen = true; card.append(f);
      } else {
        const pic = el("div", "pic", EMOJI[m.thread] || "✨");
        if (m.photo) {
          const img = new Image(); img.alt = m.title; img.loading = "lazy";
          img.onload = () => { pic.textContent = ""; pic.append(img); };
          img.src = m.photo;
        }
        card.append(pic);
      }
      const body = el("div", "body"); body.append(el("div", "when", fmt(m.date)), el("h3", null, m.title), el("p", null, m.text));
      card.append(body); grid.append(card);
    });
    $("moreMoments").hidden = MOMENTS.length <= SHOW || showAll;
  }
  $("moreMoments").onclick = () => { showAll = true; renderMoments(); };
  renderMoments();

  // journey, awards, quotes, tools
  JOURNEY.forEach((j) => { const li = el("li"); li.append(el("div", "w", j.when), el("p", "h", `${j.title}, ${j.where}`), el("p", "n", j.note)); $("journeyList").append(li); });
  AWARDS.forEach((a) => { const d = el("div"); d.append(el("b", null, a.title), el("span", null, a.note)); $("awards").append(d); });
  QUOTES.forEach((q) => { const f = el("figure"); const c = el("figcaption"); c.append(el("b", null, q.who), el("span", null, q.role)); f.append(el("blockquote", null, q.text), c); $("quotes").append(f); });
  TOOLKIT.forEach((t) => $("tools").append(el("li", null, t)));

  // the thread fills as you scroll: health, then energy, then climate
  const strands = document.querySelectorAll(".thread .t");
  function onScroll() {
    const max = document.documentElement.scrollHeight - innerHeight;
    const p = max > 0 ? scrollY / max : 0;
    strands.forEach((s, i) => s.style.setProperty("--p", Math.min(1, Math.max(0, p * 3 - i))));
  }
  addEventListener("scroll", onScroll, { passive: true }); addEventListener("resize", onScroll); onScroll();

  // theme toggle
  $("theme").onclick = () => {
    const root = document.documentElement;
    const dark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = dark ? "light" : "dark";
  };
})();
