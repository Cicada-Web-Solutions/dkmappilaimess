/**
 * menu-page.js — Full menu page logic for DK's Mappillai Mess menu.html
 * Relies on menuData being defined in script.js (loaded first).
 * Features:
 *  - Full 18-category accordion menu
 *  - Search with RAF debounce
 *  - Type filter (All / Veg / Non-Veg)
 *  - Sticky sidebar TOC with IntersectionObserver active-link highlighting
 *  - Stats bar (total item count)
 *  - Hamburger nav support
 */

(function () {
  "use strict";

  /* ── Utilities ── */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const hasGsap = typeof window.gsap !== "undefined";

  /* ── Hamburger ── */
  const navLinks = $("#nav-links");
  const hamburger = $("#hamburger");
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("is-open");
      document.body.classList.toggle("menu-open", isOpen);
      hamburger.setAttribute("aria-expanded", String(isOpen));
      hamburger.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu",
      );
    });
    $$('#nav-links a, .mobile-action-bar a[href^="index"]').forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("is-open");
        document.body.classList.remove("menu-open");
        hamburger.setAttribute("aria-expanded", "false");
        hamburger.setAttribute("aria-label", "Open navigation menu");
      });
    });
  }

  /* ── Update --navbar-h CSS variable ── */
  const navbar = $(".navbar");
  if (navbar) {
    const updateNavbarH = () =>
      document.documentElement.style.setProperty(
        "--navbar-h",
        navbar.offsetHeight + "px",
      );
    updateNavbarH();
    window.addEventListener("resize", updateNavbarH, { passive: true });
  }

  /* ── Mobile action bar (show on mobile) ── */
  const actionBar = $(".mobile-action-bar");
  if (actionBar) {
    actionBar.style.display = ""; // CSS media query handles actual display
  }

  /* ── State ── */
  let activeType = "All"; // "All" | "veg" | "non-veg"
  let searchTerm = "";
  let openGroups = new Set(); // which category slugs are accordion-open

  /* ── Total item count ── */
  const totalItems = menuData.reduce((sum, g) => sum + g.items.length, 0);
  const totalCount = $("#total-items-count");
  if (totalCount) totalCount.textContent = totalItems;

  /* ── Type filter buttons ── */
  const fullFilterRow = $("#full-filter-row");
  const typeFilters = ["All", "veg", "non-veg"];

  function renderTypeFilters() {
    if (!fullFilterRow) return;
    fullFilterRow.innerHTML = typeFilters
      .map(
        (t) =>
          `<button class="full-filter-btn${t === activeType ? " is-active" : ""}" type="button" data-type="${t}" role="listitem">
            ${t === "All" ? "🍽️ All" : t === "veg" ? "🟢 Veg" : "🔴 Non-Veg"}
          </button>`,
      )
      .join("");

    fullFilterRow.querySelectorAll(".full-filter-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeType = btn.dataset.type;
        fullFilterRow.querySelectorAll(".full-filter-btn").forEach((b) => {
          b.classList.toggle("is-active", b.dataset.type === activeType);
        });
        renderFullMenu();
      });
    });
  }

  /* ── Sidebar TOC ── */
  function renderTOC(categories) {
    const toc = $("#menu-toc");
    if (!toc) return;
    const title = toc.querySelector(".menu-toc-title");
    toc.innerHTML = "";
    if (title) toc.appendChild(title);

    categories.forEach((cat) => {
      const slug = slugify(cat);
      const a = document.createElement("a");
      a.href = `#cat-${slug}`;
      a.innerHTML = `<span class="menu-toc-dot"></span>${cat}`;
      a.addEventListener("click", (e) => {
        e.preventDefault();
        // Ensure the target accordion is open
        openGroups.add(cat);
        renderFullMenu();
        // Scroll after paint
        requestAnimationFrame(() => {
          const target = document.getElementById(`cat-${slug}`);
          if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      });
      toc.appendChild(a);
    });
  }

  function updateTOCActive() {
    const toc = $("#menu-toc");
    if (!toc) return;
    const groups = $$(".full-menu-group[id]");
    let current = null;
    groups.forEach((g) => {
      const rect = g.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.35 + 100) current = g.id;
    });
    toc.querySelectorAll("a").forEach((a) => {
      const matches = a.getAttribute("href") === `#${current}`;
      a.classList.toggle("is-active", matches);
    });
  }

  /* ── Render full menu ── */
  function renderFullMenu() {
    const groups = $("#full-menu-groups");
    if (!groups) return;

    const filtered = menuData
      .map((group) => ({
        ...group,
        items: group.items.filter((item) => {
          const termMatch =
            !searchTerm ||
            item.name.toLowerCase().includes(searchTerm) ||
            group.category.toLowerCase().includes(searchTerm);
          const typeMatch =
            activeType === "All" || item.type === activeType;
          return termMatch && typeMatch;
        }),
      }))
      .filter((g) => g.items.length > 0);

    if (!filtered.length) {
      groups.innerHTML =
        '<p class="full-empty-menu">No matching mess items found. Try a different search term.</p>';
      return;
    }

    // Render TOC with visible categories
    renderTOC(filtered.map((g) => g.category));

    groups.innerHTML = filtered
      .map((group) => {
        const slug = slugify(group.category);
        const isOpen = openGroups.has(group.category);
        return `
          <div class="full-menu-group${isOpen ? " is-open" : ""}" id="cat-${slug}" data-category="${group.category}">
            <button class="full-menu-group-header" type="button" aria-expanded="${isOpen}" aria-controls="body-${slug}">
              <h2>
                ${group.category}
                <span class="menu-count">${group.items.length}</span>
              </h2>
              <span class="accordion-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path fill="currentColor" d="m7 10 5 5 5-5z"/></svg>
              </span>
            </button>
            <div class="full-menu-group-body" id="body-${slug}" role="region" aria-label="${group.category} items">
              ${group.items
                .map(
                  (item) => `
                <div class="full-menu-item">
                  <div class="full-menu-item-details">
                    <span class="full-menu-item-name">${item.name}</span>
                    ${item.bestSeller ? '<span class="best-seller-tag">★ Best Seller</span>' : ""}
                  </div>
                  <span class="food-badge"
                    title="${item.type === "veg" ? "Vegetarian" : "Non-vegetarian"}"
                    aria-label="${item.type === "veg" ? "Vegetarian" : "Non-vegetarian"}"
                    style="--badge:${item.type === "veg" ? "#168B3A" : "#D62828"}">
                  </span>
                  <span class="price">₹${item.price}</span>
                </div>`,
                )
                .join("")}
            </div>
          </div>`;
      })
      .join("");

    // Bind accordion toggles
    $$(".full-menu-group-header").forEach((btn) => {
      btn.addEventListener("click", () => {
        const group = btn.closest(".full-menu-group");
        const cat = group.dataset.category;
        const isOpen = group.classList.toggle("is-open");
        btn.setAttribute("aria-expanded", String(isOpen));
        if (isOpen) {
          openGroups.add(cat);
          if (hasGsap) {
            gsap.fromTo(
              group.querySelector(".full-menu-group-body"),
              { opacity: 0, y: -10 },
              { opacity: 1, y: 0, duration: 0.2, ease: "back.out(1.5)" },
            );
          }
        } else {
          openGroups.delete(cat);
        }
      });
    });

    // Button hover GSAP (only after render)
    if (hasGsap) {
      $$(".full-filter-btn").forEach((btn) => {
        btn.addEventListener("mouseenter", () =>
          gsap.to(btn, { scale: 1.04, duration: 0.15, ease: "back.out(2)" }),
        );
        btn.addEventListener("mouseleave", () =>
          gsap.to(btn, { scale: 1, duration: 0.15, ease: "power2.out" }),
        );
      });
    }
  }

  /* ── Search ── */
  const searchEl = $("#full-menu-search");
  let searchRafId = null;
  if (searchEl) {
    searchEl.addEventListener("input", () => {
      if (searchRafId) cancelAnimationFrame(searchRafId);
      searchRafId = requestAnimationFrame(() => {
        searchTerm = searchEl.value.trim().toLowerCase();
        // Open all groups when searching so results are visible
        if (searchTerm) {
          menuData.forEach((g) => openGroups.add(g.category));
        }
        renderFullMenu();
        searchRafId = null;
      });
    });
  }

  /* ── IntersectionObserver for TOC active links ── */
  window.addEventListener("scroll", updateTOCActive, { passive: true });

  /* ── Utility: slugify category name ── */
  function slugify(str) {
    return str
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  }

  /* ── Init ── */
  renderTypeFilters();
  // Open first 3 categories by default for a good first impression
  menuData.slice(0, 3).forEach((g) => openGroups.add(g.category));
  renderFullMenu();

  // Entrance animation for page hero
  if (hasGsap) {
    gsap.from(".menu-page-hero-inner > *", {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.12,
      ease: "back.out(1.5)",
    });
    gsap.from(".full-menu-group", {
      y: 20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.04,
      ease: "back.out(1.3)",
      delay: 0.2,
    });
  }
})();
