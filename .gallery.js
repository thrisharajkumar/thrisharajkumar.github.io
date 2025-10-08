// ===================== 1) DATA (edit this only) =====================
window.GALLERY_ITEMS = [
  {
    id: "nihr-showcase",
    date: "2025-09-20",
    title: "NIHR i4i FAST Showcase — London",
    desc: "Co-presented AI for personalised stroke rehab.",
    href: "https://www.linkedin.com/posts/xxxx",
    thumb: "assets/gallery/thumbs/nihr.webp",
    source: "linkedin",
    tags: ["NIHR","presentation","healthcare"]
  },
  {
    id: "census-dashboard",
    date: "2025-07-05",
    title: "UK Census Dashboard",
    desc: "UMAP/t-SNE + KMeans, interactive Tableau.",
    href: "https://github.com/thrisharajkumar/...",
    thumb: "assets/gallery/thumbs/census.webp",
    source: "github",
    tags: ["tableau","bayesian","viz"]
  },
  {
    id: "emi-plots",
    date: "2025-06-12",
    title: "EMI Surrogate Modelling",
    desc: "Multi-output ANN, physics-informed features.",
    href: "https://github.com/thrisharajkumar/...",
    thumb: "assets/gallery/thumbs/emi.webp",
    source: "github",
    tags: ["tensorflow","optuna"]
  },
  // add more items...
];

// ===================== 2) HELPERS =====================
const byNewest = (a, b) => new Date(b.date) - new Date(a.date);
const fmtDate = (d) =>
  new Date(d).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "2-digit" });

const SRC_LABEL = {
  linkedin: "LinkedIn",
  github: "GitHub",
  youtube: "YouTube",
  image: "Image",
  other: "Link"
};

function tileHTML(item, globalIndex) {
  const src = SRC_LABEL[item.source] || SRC_LABEL.other;
  // Button, not anchor — we’ll open lightbox. The “Open on …” link lives in the lightbox.
  return `
    <li>
      <button type="button" data-gidx="${globalIndex}"
        class="block group rounded-xl overflow-hidden u-card w-full text-left">
        <div class="aspect-square w-full relative overflow-hidden">
          <img src="${item.thumb}" alt="${item.title}" loading="lazy"
            class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105">
          <div class="absolute inset-x-0 bottom-0 p-2 sm:p-3 bg-gradient-to-t from-black/60 to-transparent text-white">
            <div class="flex items-center gap-2 text-[10px] sm:text-xs opacity-90">
              <span class="uppercase tracking-wide">${src}</span><span>•</span>
              <time datetime="${item.date}">${fmtDate(item.date)}</time>
            </div>
            <div class="text-xs sm:text-sm font-semibold leading-tight mt-0.5 truncate">${item.title}</div>
            <div class="text-[10px] sm:text-xs opacity-85 truncate">${item.desc || ""}</div>
          </div>
        </div>
      </button>
    </li>
  `;
}

// Keep one sorted array so lightbox can navigate across ALL items
const SORTED = (window.GALLERY_ITEMS || []).slice().sort(byNewest);
const idToIndex = new Map(SORTED.map((it, i) => [it.id, i]));

// ===================== 3) LIGHTBOX =====================
(function setupLightbox() {
  // Create overlay once
  const overlay = document.createElement("div");
  overlay.id = "lbOverlay";
  overlay.className = "fixed inset-0 z-[60] hidden";
  overlay.innerHTML = `
    <div class="absolute inset-0 bg-black/70"></div>
    <div class="relative h-full w-full flex items-center justify-center p-4">
      <div class="u-card rounded-2xl max-w-4xl w-full overflow-hidden">
        <div class="relative">
          <button id="lbClose" class="absolute top-2 right-2 u-chip" aria-label="Close">✕</button>
          <div class="relative w-full">
            <img id="lbImg" alt="" class="w-full h-auto object-contain max-h-[70vh]" />
            <button id="lbPrev"
              class="absolute left-1 top-1/2 -translate-y-1/2 u-chip px-3 py-2"
              aria-label="Previous">←</button>
            <button id="lbNext"
              class="absolute right-1 top-1/2 -translate-y-1/2 u-chip px-3 py-2"
              aria-label="Next">→</button>
          </div>
        </div>
        <div class="p-4">
          <div class="flex items-center gap-2 text-xs u-muted">
            <span id="lbSource" class="u-chip"></span>
            <span id="lbDate"></span>
          </div>
          <h3 id="lbTitle" class="font-semibold text-lg mt-1"></h3>
          <p id="lbDesc" class="text-sm u-muted mt-1"></p>
          <div class="mt-3 flex gap-2 flex-wrap">
            <a id="lbOpen" target="_blank" rel="noopener"
               class="px-4 py-2 rounded-xl u-accent-bg font-semibold text-white text-sm">Open</a>
          </div>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  const img = overlay.querySelector("#lbImg");
  const title = overlay.querySelector("#lbTitle");
  const desc = overlay.querySelector("#lbDesc");
  const dateEl = overlay.querySelector("#lbDate");
  const srcChip = overlay.querySelector("#lbSource");
  const openBtn = overlay.querySelector("#lbOpen");
  const btnPrev = overlay.querySelector("#lbPrev");
  const btnNext = overlay.querySelector("#lbNext");
  const btnClose = overlay.querySelector("#lbClose");

  let idx = 0;
  const open = (index) => {
    idx = (index + SORTED.length) % SORTED.length;
    const item = SORTED[idx];
    img.src = item.thumb;
    img.alt = item.title;
    title.textContent = item.title || "";
    desc.textContent = item.desc || "";
    dateEl.textContent = fmtDate(item.date);
    srcChip.textContent = SRC_LABEL[item.source] || SRC_LABEL.other;
    openBtn.textContent = `Open on ${SRC_LABEL[item.source] || SRC_LABEL.other}`;
    openBtn.href = item.href || "#";
    overlay.classList.remove("hidden");
    document.documentElement.classList.add("mobile-nav-open"); // prevent bg scroll
  };
  const close = () => {
    overlay.classList.add("hidden");
    document.documentElement.classList.remove("mobile-nav-open");
  };
  const next = () => open(idx + 1);
  const prev = () => open(idx - 1);

  // Events
  overlay.addEventListener("click", (e) => {
    // click backdrop to close
    const bg = overlay.querySelector(".absolute.inset-0.bg-black\\/70");
    if (e.target === overlay || e.target === bg) close();
  });
  btnClose.addEventListener("click", close);
  btnNext.addEventListener("click", next);
  btnPrev.addEventListener("click", prev);
  window.addEventListener("keydown", (e) => {
    if (overlay.classList.contains("hidden")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  });

  // Expose open() so grids can call it
  window.__openLightbox = open;
})();

// ===================== 4) HOMEPAGE PREVIEW =====================
// expects: <ul id="galleryGrid">…</ul> and optional <a id="gallerySeeAll">
(function renderPreview() {
  const grid = document.getElementById("galleryGrid");
  if (!grid) return;

  const items = SORTED.slice(0, 6);
  const html = items
    .map((it) => tileHTML(it, idToIndex.get(it.id)))
    .join("");
  grid.innerHTML = html;

  grid.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-gidx]");
    if (!btn) return;
    const gidx = Number(btn.getAttribute("data-gidx"));
    if (!Number.isNaN(gidx)) window.__openLightbox(gidx);
  });

  const seeAll = document.getElementById("gallerySeeAll");
  if (seeAll && !seeAll.getAttribute("href")) seeAll.setAttribute("href", "gallery.html");
})();

// ===================== 5) FULL GALLERY PAGE =====================
// expects on gallery.html:
//   <div id="galFilters"></div>
//   <ul id="galleryAll"></ul>
(function renderFull() {
  const wall = document.getElementById("galleryAll");
  if (!wall) return;

  const filterBar = document.getElementById("galFilters");
  const SOURCES = ["all", "linkedin", "github", "youtube", "image", "other"];

  function renderFilters(active = "all") {
    if (!filterBar) return;
    filterBar.innerHTML = SOURCES
      .map((src) => {
        const selected = src === active;
        const label = src[0].toUpperCase() + src.slice(1);
        const style = selected ? "box-shadow:0 0 0 2px var(--accent) inset" : "";
        return `
          <button data-src="${src}"
            class="px-3 py-1.5 rounded-xl u-card font-semibold"
            style="${style}">
            ${label}
          </button>
        `;
      })
      .join("");

    filterBar.querySelectorAll("button").forEach((btn) => {
      btn.addEventListener("click", () => renderAll(btn.dataset.src));
    });
  }

  function renderAll(filter = "all") {
    renderFilters(filter);
    let items = SORTED.slice();
    if (filter !== "all") items = items.filter((i) => (i.source || "other") === filter);
    wall.innerHTML = items
      .map((it) => tileHTML(it, idToIndex.get(it.id)))
      .join("");
  }

  wall.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-gidx]");
    if (!btn) return;
    const gidx = Number(btn.getAttribute("data-gidx"));
    if (!Number.isNaN(gidx)) window.__openLightbox(gidx);
  });

  renderAll("all");
})();
