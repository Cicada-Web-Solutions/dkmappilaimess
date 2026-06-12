const menuData = [
  {
    category: "Breakfast",
    items: [
      { name: "Idly", type: "veg", price: "40" },
      { name: "Idiyappam", type: "veg", price: "40" },
      { name: "Poori", type: "veg", price: "80" },
      { name: "Pongal", type: "veg", price: "150" },
      { name: "Parotta", type: "veg", price: "35" },
      { name: "Omelette", type: "non-veg", price: "50" },
    ],
  },
  {
    category: "Dosa Varieties",
    items: [
      { name: "Plain Dosa", type: "veg", price: "80" },
      { name: "Kal Dosa", type: "veg", price: "60" },
      { name: "Ghee Dosa", type: "veg", price: "120" },
      { name: "Onion Dosa", type: "veg", price: "100" },
      { name: "Podi Dosa", type: "veg", price: "100" },
      { name: "Egg Dosa", type: "non-veg", price: "100" },
    ],
  },
  {
    category: "Parotta Varieties",
    items: [
      { name: "Plain Parotta", type: "veg", price: "35" },
      { name: "Veechu Parotta", type: "veg", price: "60" },
      { name: "Kothu Parotta", type: "veg", price: "140" },
      { name: "Egg Kothu Parotta", type: "non-veg", price: "150" },
      { name: "Chicken Kothu Parotta", type: "non-veg", price: "200" },
      { name: "Mutton Kothu Parotta", type: "non-veg", price: "240" },
    ],
  },
  {
    category: "Egg Varieties",
    items: [
      { name: "Boiled Egg", type: "non-veg", price: "30" },
      { name: "Half Boil", type: "non-veg", price: "35" },
      { name: "Kalakki", type: "non-veg", price: "35" },
      { name: "Omelette", type: "non-veg", price: "50" },
      { name: "Egg Podimas", type: "non-veg", price: "60" },
    ],
  },
  {
    category: "Non-Veg Gravy / Dry",
    items: [
      { name: "Chicken Chukka", type: "non-veg", price: "240" },
      { name: "Mutton Chukka", type: "non-veg", price: "160" },
      { name: "Fish Fry", type: "non-veg", price: "250 / 290" },
      { name: "Prawn Fry", type: "non-veg", price: "320" },
      { name: "Naatu Kozhi Gravy", type: "non-veg", price: "280" },
    ],
  },
  {
    category: "Tandoori",
    items: [
      { name: "Tandoori Chicken", type: "non-veg", price: "280 / 540" },
      { name: "Chicken Tikka", type: "non-veg", price: "285" },
      { name: "Paneer Tikka", type: "veg", price: "270" },
      { name: "Tangdi Kebab", type: "non-veg", price: "300" },
    ],
  },
  {
    category: "Grill",
    items: [
      { name: "Grill Chicken Quarter", type: "non-veg", price: "280" },
      { name: "Grill Chicken Half", type: "non-veg", price: "280" },
      { name: "Grill Chicken Full", type: "non-veg", price: "540" },
      { name: "Pepper Grill Chicken", type: "non-veg", price: "300 / 560" },
    ],
  },
  {
    category: "BBQ",
    items: [
      { name: "BBQ Chicken Wings", type: "non-veg", price: "280" },
      { name: "BBQ Chicken Leg", type: "non-veg", price: "280" },
      { name: "BBQ Paneer", type: "veg", price: "270" },
      { name: "BBQ Chicken Platter", type: "non-veg", price: "540" },
    ],
  },
  {
    category: "Soups",
    items: [
      { name: "Veg Soup", type: "veg", price: "100" },
      { name: "Mushroom Soup", type: "veg", price: "120" },
      { name: "Chicken Soup", type: "non-veg", price: "120" },
      { name: "Mutton Bone Soup", type: "non-veg", price: "140" },
    ],
  },
  {
    category: "Starters Veg",
    items: [
      { name: "Gobi 65", type: "veg", price: "220" },
      { name: "Paneer 65", type: "veg", price: "270" },
      { name: "Mushroom Pepper Fry", type: "veg", price: "250" },
      { name: "Crispy Corn", type: "veg", price: "250" },
    ],
  },
  {
    category: "Starters Non-Veg",
    items: [
      { name: "Chicken 65", type: "non-veg", price: "250" },
      { name: "Pepper Chicken", type: "non-veg", price: "280" },
      { name: "Fish 65", type: "non-veg", price: "280" },
      { name: "Prawn 65", type: "non-veg", price: "320" },
    ],
  },
  {
    category: "Meals",
    items: [
      { name: "Veg Meals", type: "veg", price: "150" },
      { name: "Non-Veg Chettinad Meals", type: "non-veg", price: "230" },
      { name: "SPL Chicken Meals", type: "non-veg", price: "300" },
      { name: "SPL Mutton Meals", type: "non-veg", price: "340" },
      { name: "SPL Fish Meals", type: "non-veg", price: "320" },
    ],
  },
  {
    category: "Biryani",
    items: [
      { name: "Veg Biryani", type: "veg", price: "150" },
      { name: "Egg Biryani", type: "non-veg", price: "160" },
      { name: "Chicken Biryani", type: "non-veg", price: "240" },
      { name: "Mutton Biryani", type: "non-veg", price: "300" },
      { name: "Fish Biryani", type: "non-veg", price: "300" },
    ],
  },
  {
    category: "Indian Breads",
    items: [
      { name: "Chapati", type: "veg", price: "50" },
      { name: "Naan", type: "veg", price: "60" },
      { name: "Butter Naan", type: "veg", price: "80" },
      { name: "Roti", type: "veg", price: "50" },
      { name: "Garlic Naan", type: "veg", price: "100" },
    ],
  },
  {
    category: "Veg Gravies",
    items: [
      { name: "Paneer Butter Masala", type: "veg", price: "270" },
      { name: "Mushroom Masala", type: "veg", price: "260" },
      { name: "Veg Kurma", type: "veg", price: "150" },
      { name: "Gobi Masala", type: "veg", price: "230" },
    ],
  },
  {
    category: "Non-Veg Gravies",
    items: [
      { name: "Chicken Gravy", type: "non-veg", price: "260" },
      { name: "Mutton Gravy", type: "non-veg", price: "250" },
      { name: "Fish Curry", type: "non-veg", price: "250" },
      { name: "Prawn Masala", type: "non-veg", price: "320" },
    ],
  },
  {
    category: "Chinese",
    items: [
      { name: "Veg Fried Rice", type: "veg", price: "180" },
      { name: "Egg Fried Rice", type: "non-veg", price: "220" },
      { name: "Chicken Fried Rice", type: "non-veg", price: "240" },
      { name: "Veg Noodles", type: "veg", price: "180" },
      { name: "Chicken Noodles", type: "non-veg", price: "240" },
    ],
  },
  {
    category: "Hot Drinks",
    items: [
      { name: "Healing Tea", type: "veg", price: "40" },
      { name: "Tea", type: "veg", price: "40" },
      { name: "Coffee", type: "veg", price: "50" },
      { name: "Filter Coffee", type: "veg", price: "50" },
    ],
  },
  {
    category: "Cool Drinks",
    items: [
      { name: "Rose Milk", type: "veg", price: "100" },
      { name: "Badam Milk", type: "veg", price: "120" },
      { name: "Lassi", type: "veg", price: "100" },
      { name: "Cool Drinks", type: "veg", price: "100" },
    ],
  },
  {
    category: "Mojito",
    items: [
      { name: "Virgin Mojito", type: "veg", price: "120" },
      { name: "Blue Lime Mojito", type: "veg", price: "130" },
      { name: "Mint Mojito", type: "veg", price: "130" },
      { name: "Watermelon Mojito", type: "veg", price: "130" },
    ],
  },
  {
    category: "Fresh Juice",
    items: [
      { name: "Lemon Juice", type: "veg", price: "80" },
      { name: "Orange Juice", type: "veg", price: "100" },
      { name: "Watermelon Juice", type: "veg", price: "80" },
      { name: "Mosambi Juice", type: "veg", price: "100" },
    ],
  },
  {
    category: "Milkshakes",
    items: [
      { name: "Vanilla Milkshake", type: "veg", price: "120" },
      { name: "Chocolate Milkshake", type: "veg", price: "150" },
      { name: "Strawberry Milkshake", type: "veg", price: "150" },
      { name: "Oreo Milkshake", type: "veg", price: "160" },
    ],
  },
];

const signaturePicks = [
  ["Mappillai Meals", "Full leaf energy", "#CFF5A2"],
  ["Chicken Biryani", "Spice pot favourite", "#FFC7C7"],
  ["Mutton Biryani", "Weekend royal mood", "#FFE08A"],
  ["Fish Fry", "Crisp coastal kick", "#BBDDFB"],
  ["Parotta Varieties", "Layered mess magic", "#FFD47A"],
  ["Grill Chicken", "Charred and juicy", "#F7A1CF"],
  ["Chettinad Gravy", "Pepper fire bowl", "#D8C8FF"],
  ["Rose Milk", "Pink chill classic", "#FBCFE8"],
  ["Virgin Mojito", "Minty lime spark", "#B9F6CA"],
  ["Filter Coffee", "Steam top finish", "#DDB892"],
];

const iconLibrary = {
  leaf: '<svg viewBox="0 0 90 90"><path d="M14 57c14-31 46-42 65-30-8 31-38 48-65 30Z" fill="#168B3A" stroke="#151515" stroke-width="6"/><path d="M23 56c15-8 30-16 47-29" stroke="#FFF2C6" stroke-width="5" stroke-linecap="round"/></svg>',
  pot: '<svg viewBox="0 0 90 90"><path d="M25 33h40l9 38H16z" fill="#3C2F72" stroke="#151515" stroke-width="6" stroke-linejoin="round"/><path d="M20 32c5-21 45-21 50 0" fill="#D62828" stroke="#151515" stroke-width="6"/><circle cx="37" cy="56" r="6" fill="#FFB000"/><circle cx="54" cy="61" r="6" fill="#FFB000"/></svg>',
  fish: '<svg viewBox="0 0 90 90"><path d="M16 48c18-24 43-26 60 0-17 26-42 23-60 0Z" fill="#8bd3ff" stroke="#151515" stroke-width="6"/><path d="m74 48 12-12v24z" fill="#D62828" stroke="#151515" stroke-width="6" stroke-linejoin="round"/><circle cx="34" cy="44" r="4" fill="#151515"/></svg>',
  parotta:
    '<svg viewBox="0 0 90 90"><circle cx="45" cy="45" r="32" fill="#FFD47A" stroke="#151515" stroke-width="6"/><path d="M27 43c11-14 29-18 41-4M25 55c15 4 32-1 44-16M40 24c-3 17 2 30 16 41" fill="none" stroke="#C78128" stroke-width="5" stroke-linecap="round"/></svg>',
  cup: '<svg viewBox="0 0 90 90"><path d="M28 24h34l-7 54H35z" fill="#F77F00" stroke="#151515" stroke-width="6"/><path d="M24 24h42" stroke="#151515" stroke-width="8" stroke-linecap="round"/><path d="M36 15c-4-7 4-9 0-14M49 15c-4-7 4-9 0-14" stroke="#fff" stroke-width="5" stroke-linecap="round"/></svg>',
  glass:
    '<svg viewBox="0 0 90 90"><path d="M27 15h36l-8 64H35z" fill="#B9F6CA" stroke="#151515" stroke-width="6"/><path d="M31 43h25" stroke="#fff" stroke-width="5" stroke-linecap="round"/><circle cx="55" cy="29" r="7" fill="#168B3A" stroke="#151515" stroke-width="3"/></svg>',
};

const builderShapes = {
  rice: { color: "#fff9e8", size: [88, 62], radius: "50%", pattern: "rice" },
  curry: {
    color: "#F77F00",
    size: [76, 58],
    radius: "47% 53% 41% 59%",
    pattern: "dots",
  },
  poriyal: {
    color: "#8ed14b",
    size: [70, 54],
    radius: "42% 58% 48% 52%",
    pattern: "veg",
  },
  appalam: {
    color: "#ffe7a6",
    size: [82, 82],
    radius: "50%",
    pattern: "spots",
  },
  pickle: {
    color: "#D62828",
    size: [48, 40],
    radius: "52% 48% 43% 57%",
    pattern: "pickle",
  },
  chicken: {
    color: "#b95324",
    size: [76, 60],
    radius: "44% 56% 48% 52%",
    pattern: "dots",
  },
  fish: {
    color: "#6ac4ff",
    size: [90, 42],
    radius: "52% 48% 48% 52%",
    pattern: "fish",
  },
  sweet: { color: "#fdb5d9", size: [58, 58], radius: "50%", pattern: "sweet" },
};

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) =>
  Array.from(scope.querySelectorAll(selector));
const hasGsap = typeof window.gsap !== "undefined";
const hasScrollTrigger = typeof window.ScrollTrigger !== "undefined";

const navLinks = $("#nav-links");
const hamburger = $("#hamburger");
hamburger.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  document.body.classList.toggle("menu-open", isOpen);
  hamburger.setAttribute("aria-expanded", String(isOpen));
  hamburger.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu",
  );
});

$$("#nav-links a, .mobile-action-bar a[href^='#']").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    hamburger.setAttribute("aria-expanded", "false");
    hamburger.setAttribute("aria-label", "Open navigation menu");
  });
});

$$(".time-card").forEach((card) => {
  const toggle = $("button", card);
  toggle.addEventListener("click", () => {
    $$(".time-card").forEach((item) => {
      if (item !== card) item.classList.remove("is-open");
    });
    card.classList.toggle("is-open");
    if (hasGsap) {
      gsap.fromTo(
        card,
        { scale: 0.98 },
        {
          scale: 1.02,
          duration: 0.22,
          yoyo: true,
          repeat: 1,
          ease: "back.out(2)",
        },
      );
    }
  });
});

function getSignatureIcon(index) {
  const icons = [
    iconLibrary.leaf,
    iconLibrary.pot,
    iconLibrary.pot,
    iconLibrary.fish,
    iconLibrary.parotta,
    iconLibrary.pot,
    iconLibrary.leaf,
    iconLibrary.glass,
    iconLibrary.glass,
    iconLibrary.cup,
  ];
  return icons[index % icons.length];
}

function renderSignaturePicks() {
  const track = $("#signature-track");
  const looped = [...signaturePicks, ...signaturePicks];
  track.innerHTML = looped
    .map(
      ([title, text, color], index) => `
        <article class="signature-card" tabindex="0" style="--tilt:${index % 2 ? "1.3deg" : "-1.1deg"};--sticker:${color};">
          <div class="sticker-top">
            <span class="sticker-icon" aria-hidden="true">${getSignatureIcon(index)}</span>
            <span class="sticker-pin" aria-hidden="true"></span>
          </div>
          <h3>${title}</h3>
          <p>${text}</p>
        </article>
      `,
    )
    .join("");
}

const filterRow = $("#filter-row");
const menuGroups = $("#menu-groups");
const searchInput = $("#menu-search");
let activeCategory = "All";

function renderFilters() {
  const categories = ["All", ...menuData.map((group) => group.category)];
  filterRow.innerHTML = categories
    .map(
      (category) => `
        <button class="filter-btn ${category === activeCategory ? "is-active" : ""}" type="button" data-category="${category}" aria-pressed="${category === activeCategory}">
          ${category}
        </button>
      `,
    )
    .join("");

  $$(".filter-btn", filterRow).forEach((button) => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.category;
      renderFilters();
      renderMenu();
    });
  });
}

function renderMenu() {
  const term = searchInput.value.trim().toLowerCase();
  const filteredGroups = menuData
    .filter(
      (group) => activeCategory === "All" || group.category === activeCategory,
    )
    .map((group) => ({
      ...group,
      items: group.items.filter(
        (item) =>
          item.name.toLowerCase().includes(term) ||
          group.category.toLowerCase().includes(term),
      ),
    }))
    .filter((group) => group.items.length);

  if (!filteredGroups.length) {
    menuGroups.innerHTML =
      '<p class="empty-menu">No matching mess items found.</p>';
    return;
  }

  menuGroups.innerHTML = filteredGroups
    .map(
      (group) => `
        <section class="menu-group">
          <h3>${group.category}<span class="menu-count">${group.items.length}</span></h3>
          ${group.items
            .map(
              (item) => `
            <div class="menu-item">
              <span class="menu-item-name">${item.name}</span>
              <span class="food-badge" title="${item.type === "veg" ? "Vegetarian" : "Non-vegetarian"}" aria-label="${item.type === "veg" ? "Vegetarian" : "Non-vegetarian"}" style="--badge:${item.type === "veg" ? "#168B3A" : "#D62828"}"></span>
              <span class="price">${item.price}</span>
            </div>
          `,
            )
            .join("")}
        </section>
      `,
    )
    .join("");

  if (hasGsap) {
    gsap.fromTo(
      ".menu-group",
      { y: 22, opacity: 0, scale: 0.98 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.35,
        stagger: 0.035,
        ease: "back.out(1.5)",
      },
    );
  }
}

searchInput.addEventListener("input", renderMenu);

function foodPattern(type) {
  const patternMap = {
    rice: "radial-gradient(circle at 22% 28%, #fff 0 4px, transparent 4.5px), radial-gradient(circle at 55% 34%, #fff 0 5px, transparent 5.5px), radial-gradient(circle at 76% 60%, #fff 0 3px, transparent 3.5px)",
    dots: "radial-gradient(circle at 30% 42%, rgba(21,21,21,.22) 0 5px, transparent 5.5px), radial-gradient(circle at 68% 58%, rgba(255,255,255,.45) 0 5px, transparent 5.5px)",
    veg: "radial-gradient(circle at 28% 30%, #FFB000 0 5px, transparent 5.5px), radial-gradient(circle at 68% 55%, #168B3A 0 6px, transparent 6.5px)",
    spots:
      "radial-gradient(circle at 30% 26%, rgba(21,21,21,.13) 0 5px, transparent 5.5px), radial-gradient(circle at 68% 65%, rgba(21,21,21,.12) 0 4px, transparent 4.5px)",
    pickle:
      "radial-gradient(circle at 34% 54%, #FFB000 0 5px, transparent 5.5px)",
    fish: "linear-gradient(90deg, transparent 0 70%, #D62828 70% 100%)",
    sweet:
      "radial-gradient(circle at 50% 50%, #FFF2C6 0 8px, transparent 8.5px)",
  };
  return patternMap[type] || "";
}

function addFoodToLeaf(food) {
  const config = builderShapes[food];
  const leaf = $("#builder-leaf");
  const blob = document.createElement("span");
  const x = 18 + Math.random() * 64;
  const y = 24 + Math.random() * 52;
  const rotate = Math.round(-18 + Math.random() * 36);
  blob.className = `builder-food builder-${food}`;
  blob.style.left = `${x}%`;
  blob.style.top = `${y}%`;
  blob.style.width = `${config.size[0]}px`;
  blob.style.height = `${config.size[1]}px`;
  blob.style.borderRadius = config.radius;
  blob.style.background = `${foodPattern(config.pattern)}, ${config.color}`;
  blob.style.rotate = `${rotate}deg`;
  leaf.appendChild(blob);

  if (hasGsap) {
    gsap.to(blob, { scale: 1, duration: 0.35, ease: "back.out(2.6)" });
  } else {
    blob.style.transform = "translate(-50%, -50%) scale(1)";
  }
}

$$(".builder-btn[data-food]").forEach((button) => {
  button.addEventListener("click", () => addFoodToLeaf(button.dataset.food));
});

$("#reset-builder").addEventListener("click", () => {
  const foods = $$(".builder-food");
  if (hasGsap && foods.length) {
    gsap.to(foods, {
      scale: 0,
      duration: 0.18,
      stagger: 0.02,
      ease: "back.in(1.5)",
      onComplete: () => foods.forEach((food) => food.remove()),
    });
  } else {
    foods.forEach((food) => food.remove());
  }
});

function runAnimations() {
  if (!hasGsap) return;

  if (hasScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  }

  gsap.from(".hero-animate", {
    y: 38,
    duration: 0.8,
    stagger: 0.14,
    ease: "back.out(1.7)",
  });

  gsap.to(".floaty", {
    y: -14,
    rotation: "+=4",
    duration: 2.4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    stagger: 0.18,
  });

  gsap.to(".float-slow", {
    rotation: -5,
    y: 12,
    duration: 3.6,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  gsap.utils.toArray(".float-food").forEach((element, index) => {
    gsap.to(element, {
      y: index % 2 ? -18 : 18,
      x: index % 3 ? 8 : -8,
      rotation: index % 2 ? "+=5" : "-=5",
      duration: 2.2 + index * 0.16,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  });

  gsap.utils.toArray(".tiny-particle").forEach((element, index) => {
    gsap.to(element, {
      y: index % 2 ? 20 : -20,
      x: index % 2 ? -10 : 10,
      rotation: index % 2 ? 16 : -16,
      duration: 2.5 + index * 0.22,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  });

  if (hasScrollTrigger) {
    gsap.utils.toArray(".reveal").forEach((section) => {
      gsap.from(
        section.querySelectorAll(
          ".section-heading, .time-card, .social-card, .contact-panel, .map-card, .builder-stage, .builder-controls",
        ),
        {
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
          },
          y: 40,
          opacity: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "back.out(1.4)",
        },
      );
    });
  }

  gsap.to("#signature-track", {
    xPercent: -50,
    duration: 30,
    ease: "none",
    repeat: -1,
  });

  $$(".btn, .builder-btn, .filter-btn").forEach((button) => {
    button.addEventListener("mouseenter", () =>
      gsap.to(button, { scale: 1.035, duration: 0.16, ease: "back.out(2)" }),
    );
    button.addEventListener("mouseleave", () =>
      gsap.to(button, { scale: 1, duration: 0.16, ease: "power2.out" }),
    );
  });
}

renderSignaturePicks();
renderFilters();
renderMenu();
runAnimations();
