const menuData = [
  {
    category: "Breakfast Combos",
    items: [
      { name: "Idly (2 Pcs) + SPL Meen Kuzhambu (Fish 1 Pc)", type: "non-veg", price: "220" },
      { name: "Idly (2 Pcs) + Chicken Kuzhambu (Chicken 4 Pcs)", type: "non-veg", price: "220" },
      { name: "Idly (2 Pcs) + Mutton Kuzhambu (Mutton 4 Pcs)", type: "non-veg", price: "265" },
      { name: "Idly (2 Pcs) + Attu Kal Paya (1 Big Pc)", type: "non-veg", price: "300" },
      { name: "Appam (2 Pcs) + SPL Meen Kuzhambu (Fish 1 Pc)", type: "non-veg", price: "265" },
      { name: "Appam (2 Pcs) + Chicken Kuzhambu (Chicken 4 Pcs)", type: "non-veg", price: "265" },
      { name: "Appam (2 Pcs) + Mutton Kuzhambu (Mutton 4 Pcs)", type: "non-veg", price: "310" },
      { name: "Appam (2 Pcs) + Attu Kal Paya (1 Big Pc)", type: "non-veg", price: "310" },
      { name: "Egg Appam (1 Pc) + SPL Meen Kuzhambu (Fish 1 Pc)", type: "non-veg", price: "265" },
      { name: "Egg Appam (1 Pc) + Chicken Kuzhambu (Chicken 4 Pcs)", type: "non-veg", price: "265" },
      { name: "Egg Appam (1 Pc) + Mutton Kuzhambu (Mutton 4 Pcs)", type: "non-veg", price: "310" },
      { name: "Egg Appam (1 Pc) + Attu Kal Paya (1 Big Pc)", type: "non-veg", price: "310" },
      { name: "Idiyappam (2 Pcs) + SPL Meen Kuzhambu (Fish 1 Pc)", type: "non-veg", price: "265" },
      { name: "Idiyappam (2 Pcs) + Chicken Kuzhambu (Chicken 4 Pcs)", type: "non-veg", price: "265" },
      { name: "Idiyappam (2 Pcs) + Mutton Kuzhambu (Mutton 4 Pcs)", type: "non-veg", price: "310" },
      { name: "Idiyappam (2 Pcs) + Attu Kal Paya (1 Big Pc)", type: "non-veg", price: "310" },
      { name: "Kal Dosa (2 Pcs) + SPL Meen Kuzhambu (Fish 1 Pc)", type: "non-veg", price: "275" },
      { name: "Kal Dosa (2 Pcs) + Chicken Kuzhambu (Chicken 4 Pcs)", type: "non-veg", price: "275" },
      { name: "Kal Dosa (2 Pcs) + Mutton Kuzhambu (Mutton 4 Pcs)", type: "non-veg", price: "290" },
      { name: "Kal Dosa (2 Pcs) + Attukal Paya (1 Big Pc)", type: "non-veg", price: "290" },
      { name: "Egg Kal Dosa (1 Pc) + SPL Meen Kuzhambu (Fish 1 Pc)", type: "non-veg", price: "265" },
      { name: "Egg Kal Dosa (1 Pc) + Chicken Kuzhambu (Chicken 4 Pcs)", type: "non-veg", price: "265" },
      { name: "Egg Kal Dosa (1 Pc) + Mutton Kuzhambu (Mutton 4 Pcs)", type: "non-veg", price: "310" },
      { name: "Egg Kal Dosa + Attukal Paya (1 Big Pc)", type: "non-veg", price: "310" },
      { name: "Idly (2 Pcs) + Veg Paya", type: "veg", price: "120" },
      { name: "Idly (2 Pcs) + Vada Curry", type: "veg", price: "120" },
      { name: "Idiyappam (2 Pcs) + Veg Paya", type: "veg", price: "140" },
      { name: "Kal Dosa (2 Pcs) + Veg Paya", type: "veg", price: "140" },
      { name: "Kal Dosa (2 Pcs) + Vada Curry", type: "veg", price: "140" },
      { name: "Appam (2 Pcs) + Veg Paya", type: "veg", price: "140" },
      { name: "Vada Curry (200 ml)", type: "veg", price: "80" }
    ]
  },
  {
    category: "Dosa Varieties",
    items: [
      { name: "Mutton Kari Dosa", type: "non-veg", price: "275", bestSeller: true },
      { name: "Chicken Kari Dosa", type: "non-veg", price: "220", bestSeller: true },
      { name: "Egg Roast", type: "non-veg", price: "110" },
      { name: "Egg Onion Roast", type: "non-veg", price: "130" },
      { name: "Egg Kal Dosa", type: "non-veg", price: "90" },
      { name: "Kal Dosai (2 Pcs) + Meen Kuzhambu (Gravy Only)", type: "non-veg", price: "140" },
      { name: "Kal Dosai (2 Pcs) + Chicken Kuzhambu (Gravy Only)", type: "non-veg", price: "140" },
      { name: "Kal Dosai (2 Pcs) + Mutton Kuzhambu (Gravy Only)", type: "non-veg", price: "150" },
      { name: "Kal Dosai (2 Pcs) + Veg Kurma", type: "veg", price: "130" }
    ]
  },
  {
    category: "Parotta Varieties",
    items: [
      { name: "Parotta (1 Pc)", type: "veg", price: "45" },
      { name: "Parotta (2 Pcs) + Chicken Kuzhambu (Gravy Only)", type: "non-veg", price: "140" },
      { name: "Parotta (2 Pcs) + Mutton Kuzhambu (Gravy Only)", type: "non-veg", price: "150" },
      { name: "Parotta (2 Pcs) + Veg Kurma", type: "veg", price: "130" },
      { name: "Egg Veechu Parotta", type: "non-veg", price: "90" },
      { name: "Egg Kothu Parotta", type: "non-veg", price: "180" },
      { name: "Chicken Kothu Parotta", type: "non-veg", price: "220", bestSeller: true },
      { name: "Mutton Kothu Parotta", type: "non-veg", price: "290", bestSeller: true },
      { name: "Ilai Parotta (Chicken)", type: "non-veg", price: "290" },
      { name: "Ilai Parotta (Mutton)", type: "non-veg", price: "330" },
      { name: "Laba Parotta (Egg)", type: "non-veg", price: "165" },
      { name: "Laba Parotta (Chicken)", type: "non-veg", price: "220" },
      { name: "Laba Parotta (Mutton)", type: "non-veg", price: "290" }
    ]
  },
  {
    category: "Egg Varieties",
    items: [
      { name: "Omelette", type: "non-veg", price: "45" },
      { name: "Double Omelette", type: "non-veg", price: "80" },
      { name: "Chinna Vengayam Omelette", type: "non-veg", price: "60" },
      { name: "Karandi Omelette", type: "non-veg", price: "90", bestSeller: true },
      { name: "Chicken Omelette", type: "non-veg", price: "135" },
      { name: "Mutton Omelette", type: "non-veg", price: "165" },
      { name: "Prawn Omelette", type: "non-veg", price: "135" },
      { name: "Chilli Egg", type: "non-veg", price: "165" },
      { name: "Boiled Egg Kothu Podimas", type: "non-veg", price: "110" },
      { name: "Kalakki", type: "non-veg", price: "45", bestSeller: true },
      { name: "Kuzhambu Kalakki", type: "non-veg", price: "55" },
      { name: "Half Boil", type: "non-veg", price: "35" },
      { name: "Full Boil", type: "non-veg", price: "35" }
    ]
  },
  {
    category: "Mutton Starters",
    items: [
      { name: "Mutton Fry", type: "non-veg", price: "250", bestSeller: true },
      { name: "Mutton Uppu Kari", type: "non-veg", price: "250" },
      { name: "Mutton Sevarotti", type: "non-veg", price: "245", bestSeller: true },
      { name: "Mutton Liver Fry", type: "non-veg", price: "220" },
      { name: "Mutton Ratham Poriyal", type: "non-veg", price: "220" },
      { name: "Mutton Suthu Kolupu", type: "non-veg", price: "220" },
      { name: "Mutton Brian Fry", type: "non-veg", price: "185" },
      { name: "Mutton Boti", type: "non-veg", price: "220" },
      { name: "Mutton Thalakari", type: "non-veg", price: "220" }
    ]
  },
  {
    category: "Chicken Starters",
    items: [
      { name: "Mappillai Mess Spl Dry Chicken", type: "non-veg", price: "220", bestSeller: true },
      { name: "DK's Special Chicken (1 Big Pc)", type: "non-veg", price: "300", bestSeller: true },
      { name: "Spl Chicken 65 Boneless", type: "non-veg", price: "300" },
      { name: "Chicken 65 Bone", type: "non-veg", price: "290" },
      { name: "Chicken Lolly Pop (6 Pcs)", type: "non-veg", price: "340" },
      { name: "Kozhi Uppu Kari (5 Pcs)", type: "non-veg", price: "245" },
      { name: "Chinthamani Chicken", type: "non-veg", price: "245" },
      { name: "Pallipalayam Chicken (5 Pcs)", type: "non-veg", price: "245" },
      { name: "Chicken Pepper Fry", type: "non-veg", price: "245" },
      { name: "Chicken Chettinad Perattal", type: "non-veg", price: "245" },
      { name: "Pichi Potta Kozhi Varuval", type: "non-veg", price: "245" },
      { name: "Chilly Chicken", type: "non-veg", price: "340" },
      { name: "Dragon Chicken", type: "non-veg", price: "350" },
      { name: "Chicken Manchurian", type: "non-veg", price: "340" },
      { name: "Kadai 65 (1 Pc)", type: "non-veg", price: "185" },
      { name: "Pichi Potta Nattu Kozhi", type: "non-veg", price: "270" },
      { name: "Nattu Kozhi Milagu Varuval", type: "non-veg", price: "300" },
      { name: "Nattu Kozhi Fry", type: "non-veg", price: "270" }
    ]
  },
  {
    category: "Veg Starters",
    items: [
      { name: "Paneer 65", type: "veg", price: "315" },
      { name: "Paneer Tikka", type: "veg", price: "350" },
      { name: "Chilly Paneer", type: "veg", price: "325" },
      { name: "Gobi Chilly / Manchurian / Dry / 65", type: "veg", price: "300" },
      { name: "Mushroom Chilly / Manchurian / Dry / 65", type: "veg", price: "310" },
      { name: "Mushroom Pepper Fry", type: "veg", price: "310" },
      { name: "French Fries", type: "veg", price: "150" },
      { name: "Crispy Corn", type: "veg", price: "275" }
    ]
  },
  {
    category: "Sea Food",
    items: [
      { name: "Fish Fry (Seasonal) (1 Pc)", type: "non-veg", price: "305 / 340 / 390" },
      { name: "Fish Vanjaram (1 Pc)", type: "non-veg", price: "305 / 365 / 425", bestSeller: true },
      { name: "Chilly Fish", type: "non-veg", price: "340" },
      { name: "Nethili Fry", type: "non-veg", price: "300" },
      { name: "Fish Sankara Fry (1 Pc)", type: "non-veg", price: "425 / 485 / 545" },
      { name: "Pomfret (1 Pc)", type: "non-veg", price: "520 / 580 / 630" },
      { name: "Prawn 65 / Pepper Fry (8 Pcs)", type: "non-veg", price: "300" },
      { name: "Crab Masala / Fry", type: "non-veg", price: "300" }
    ]
  },
  {
    category: "Meals",
    items: [
      { name: "Veg Chettinad Meals (Unlimited)", type: "veg", price: "180", bestSeller: true },
      { name: "Non-Veg Chettinad Meals (Unlimited)", type: "non-veg", price: "310", bestSeller: true }
    ]
  },
  {
    category: "Biryani",
    items: [
      { name: "Seeraga Sampa Mutton Biryani", type: "non-veg", price: "440", bestSeller: true },
      { name: "Chicken Biryani", type: "non-veg", price: "310", bestSeller: true },
      { name: "Spl Chicken 65 Biryani (4 Pcs)", type: "non-veg", price: "360" },
      { name: "Prawn Biryani", type: "non-veg", price: "390" },
      { name: "Egg Biryani", type: "non-veg", price: "225" }
    ]
  },
  {
    category: "Indian Breads",
    items: [
      { name: "Naan", type: "veg", price: "65" },
      { name: "Butter Naan", type: "veg", price: "90" },
      { name: "Butter Garlic Naan", type: "veg", price: "110" },
      { name: "Butter Roti (1 Pc)", type: "veg", price: "65" },
      { name: "Roti (1 Pc)", type: "veg", price: "55" },
      { name: "Plain Kulcha (1 Pc)", type: "veg", price: "55" },
      { name: "Paneer Kulcha (1 Pc)", type: "veg", price: "110" },
      { name: "Onion Kulcha (1 Pc)", type: "veg", price: "90" },
      { name: "Pulkha (1 Pc)", type: "veg", price: "35" },
      { name: "Butter Pulkha (1 Pc)", type: "veg", price: "45" },
      { name: "Chappathi (2 Pcs) + Chicken Kuzhambu (Gravy Only)", type: "non-veg", price: "140" },
      { name: "Chappathi (2 Pcs) + Mutton Kuzhambu (Gravy Only)", type: "non-veg", price: "150" },
      { name: "Chappathi (2 Pcs) + Veg Kurma", type: "veg", price: "130" }
    ]
  },
  {
    category: "Veg Gravies",
    items: [
      { name: "Paneer Tikka Masala", type: "veg", price: "310" },
      { name: "Paneer Butter Masala", type: "veg", price: "300" },
      { name: "Paneer Pepper Masala", type: "veg", price: "300" },
      { name: "Kadai Paneer Gravy", type: "veg", price: "310" },
      { name: "Mushroom Masala", type: "veg", price: "275" },
      { name: "Kadai Mushroom", type: "veg", price: "310" },
      { name: "Kadai Mix Veg", type: "veg", price: "310" }
    ]
  },
  {
    category: "Non-Veg Gravies",
    items: [
      { name: "Attukal Paya Spl", type: "non-veg", price: "245 / 280", bestSeller: true },
      { name: "Mutton Pepper Masala", type: "non-veg", price: "290" },
      { name: "Mutton Chettinad", type: "non-veg", price: "275" },
      { name: "Spl Mutton Gravy", type: "non-veg", price: "250" },
      { name: "Mutton Kuzhambu", type: "non-veg", price: "240" },
      { name: "Chettinad Chicken", type: "non-veg", price: "245" },
      { name: "Chicken Pepper Curry", type: "non-veg", price: "245" },
      { name: "Coriander Chicken Curry", type: "non-veg", price: "265" },
      { name: "Kadai Chicken", type: "non-veg", price: "280" },
      { name: "Butter Chicken", type: "non-veg", price: "290" },
      { name: "Chicken Tikka Masala", type: "non-veg", price: "310" },
      { name: "Spl Nattu Kozhi Gravy", type: "non-veg", price: "310" },
      { name: "Spl Chicken Gravy", type: "non-veg", price: "250" },
      { name: "Chicken Kuzhambu", type: "non-veg", price: "200" },
      { name: "Fish Curry (Meen Kuzhambu) (2 Pcs)", type: "non-veg", price: "200" },
      { name: "Prawn Masala (8 Pcs)", type: "non-veg", price: "310" },
      { name: "Crab Masala", type: "non-veg", price: "275" },
      { name: "Chettinad Egg Masala Gravy", type: "non-veg", price: "180" },
      { name: "Egg Curry", type: "non-veg", price: "170" }
    ]
  },
  {
    category: "Chinese Rice / Noodles",
    items: [
      { name: "Veg Fried Rice / Noodles", type: "veg", price: "200" },
      { name: "Schezwan Veg Fried Rice / Noodles", type: "veg", price: "210" },
      { name: "Paneer Fried Rice / Noodles", type: "veg", price: "245" },
      { name: "Mushroom Fried Rice / Noodles", type: "veg", price: "225" },
      { name: "Gobi Fried Rice / Noodles", type: "veg", price: "225" },
      { name: "Mixed Veg Fried Rice / Noodles", type: "veg", price: "265" },
      { name: "Egg Fried Rice / Noodles", type: "non-veg", price: "200" },
      { name: "Chicken Fried Rice / Noodles", type: "non-veg", price: "245" },
      { name: "Mutton Fried Rice / Noodles", type: "non-veg", price: "290" },
      { name: "Prawn Fried Rice / Noodles", type: "non-veg", price: "290" },
      { name: "Mixed Fried Rice / Noodles", type: "non-veg", price: "320" },
      { name: "Schezwan Egg Fried Rice / Noodles", type: "non-veg", price: "210" },
      { name: "Schezwan Chicken Fried Rice / Noodles", type: "non-veg", price: "255" },
      { name: "Schezwan Mutton Fried Rice / Noodles", type: "non-veg", price: "300" },
      { name: "Schezwan Prawn Fried Rice / Noodles", type: "non-veg", price: "300" },
      { name: "Schezwan Mixed Fried Rice / Noodles", type: "non-veg", price: "335" },
      { name: "Jeera Rice", type: "veg", price: "165" },
      { name: "Ghee Rice", type: "veg", price: "165" },
      { name: "Steam Rice", type: "veg", price: "110" },
      { name: "Garlic Burnt Fried Rice", type: "veg", price: "245" }
    ]
  },
  {
    category: "Tandoori & Grill",
    items: [
      { name: "Tandoori Chicken", type: "non-veg", price: "340 / 670" },
      { name: "Chicken Tikka", type: "non-veg", price: "400" },
      { name: "BBQ Chicken", type: "non-veg", price: "340 / 670" },
      { name: "Pepper BBQ Chicken", type: "non-veg", price: "365 / 700" },
      { name: "Grill Chicken", type: "non-veg", price: "340 / 670", bestSeller: true }
    ]
  },
  {
    category: "Soups",
    items: [
      { name: "Hot & Sour Soup", type: "veg", price: "130" },
      { name: "Cream of Mushroom Soup", type: "veg", price: "180" },
      { name: "Cream of Corn Soup", type: "veg", price: "140" },
      { name: "Mutton Nenju Elumbu Soup", type: "non-veg", price: "170" },
      { name: "Hot & Sour Chicken Soup", type: "non-veg", price: "160" }
    ]
  },
  {
    category: "Hot Drinks",
    items: [
      { name: "Healing Tea", type: "veg", price: "40" },
      { name: "Tea", type: "veg", price: "40" },
      { name: "Coffee", type: "veg", price: "50" },
      { name: "Filter Coffee", type: "veg", price: "50", bestSeller: true }
    ]
  },
  {
    category: "Cool Drinks",
    items: [
      { name: "Rose Milk", type: "veg", price: "100", bestSeller: true },
      { name: "Badam Milk", type: "veg", price: "120" },
      { name: "Lassi", type: "veg", price: "100" },
      { name: "Cool Drinks", type: "veg", price: "100" }
    ]
  },
  {
    category: "Mojito",
    items: [
      { name: "Virgin Mojito", type: "veg", price: "120" },
      { name: "Blue Lime Mojito", type: "veg", price: "130" },
      { name: "Mint Mojito", type: "veg", price: "130" },
      { name: "Watermelon Mojito", type: "veg", price: "130" }
    ]
  },
  {
    category: "Fresh Juice",
    items: [
      { name: "Lemon Juice", type: "veg", price: "80" },
      { name: "Orange Juice", type: "veg", price: "100" },
      { name: "Watermelon Juice", type: "veg", price: "80" },
      { name: "Mosambi Juice", type: "veg", price: "100" }
    ]
  },
  {
    category: "Milkshakes",
    items: [
      { name: "Vanilla Milkshake", type: "veg", price: "120" },
      { name: "Chocolate Milkshake", type: "veg", price: "150" },
      { name: "Strawberry Milkshake", type: "veg", price: "150" },
      { name: "Oreo Milkshake", type: "veg", price: "160" }
    ]
  }
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

// ── SVG Food Illustrations for Build Your Virundhu ──
// Each food is a hand-crafted inline SVG to look like the real thing.
const foodSVGs = {

  // Rice: a fluffy white mound with individual grain dots and steam wisps
  rice: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 78" width="110" height="78">
    <!-- Rice mound base -->
    <ellipse cx="55" cy="62" rx="50" ry="14" fill="#e8e0c8" stroke="#151515" stroke-width="3"/>
    <!-- Mound body -->
    <path d="M10 62 Q12 30 55 20 Q98 30 100 62 Z" fill="#fff9e8" stroke="#151515" stroke-width="3" stroke-linejoin="round"/>
    <!-- Highlight on top -->
    <ellipse cx="52" cy="32" rx="18" ry="8" fill="rgba(255,255,255,0.55)" />
    <!-- Rice grains scattered on mound -->
    <ellipse cx="38" cy="48" rx="5" ry="2.5" fill="#fffdf3" stroke="#ccc" stroke-width="1" transform="rotate(-20 38 48)"/>
    <ellipse cx="55" cy="38" rx="5" ry="2.5" fill="#fffdf3" stroke="#ccc" stroke-width="1" transform="rotate(10 55 38)"/>
    <ellipse cx="70" cy="50" rx="5" ry="2.5" fill="#fffdf3" stroke="#ccc" stroke-width="1" transform="rotate(-10 70 50)"/>
    <ellipse cx="45" cy="55" rx="4.5" ry="2" fill="#fffdf3" stroke="#ccc" stroke-width="1" transform="rotate(15 45 55)"/>
    <ellipse cx="64" cy="43" rx="4" ry="2" fill="#fffdf3" stroke="#ccc" stroke-width="1" transform="rotate(-25 64 43)"/>
    <ellipse cx="50" cy="60" rx="4" ry="2" fill="#fffdf3" stroke="#ccc" stroke-width="1"/>
    <ellipse cx="72" cy="58" rx="4" ry="2" fill="#fffdf3" stroke="#ccc" stroke-width="1" transform="rotate(20 72 58)"/>
    <!-- Steam wisps -->
    <path d="M40 18 Q36 10 40 4" fill="none" stroke="rgba(180,180,180,0.7)" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M55 14 Q51 6 55 1" fill="none" stroke="rgba(180,180,180,0.7)" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M70 18 Q66 10 70 4" fill="none" stroke="rgba(180,180,180,0.7)" stroke-width="2.5" stroke-linecap="round"/>
  </svg>`,

  // Curry: a round terracotta bowl filled with orange gravy, with a ladle
  curry: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 90" width="100" height="90">
    <!-- Bowl outer -->
    <path d="M8 40 Q8 82 50 82 Q92 82 92 40 Z" fill="#c9703a" stroke="#151515" stroke-width="3" stroke-linejoin="round"/>
    <!-- Bowl rim -->
    <ellipse cx="50" cy="40" rx="42" ry="12" fill="#d4834a" stroke="#151515" stroke-width="3"/>
    <!-- Curry surface (liquid) -->
    <ellipse cx="50" cy="40" rx="38" ry="10" fill="#F77F00"/>
    <!-- Gravy ripple -->
    <ellipse cx="50" cy="40" rx="26" ry="6" fill="#f8a234" opacity="0.7"/>
    <!-- Oil / sheen dots -->
    <circle cx="40" cy="37" r="3" fill="rgba(255,200,50,0.6)"/>
    <circle cx="58" cy="42" r="2.5" fill="rgba(255,200,50,0.5)"/>
    <circle cx="50" cy="35" r="2" fill="rgba(255,220,80,0.55)"/>
    <!-- Spice specks -->
    <circle cx="35" cy="41" r="1.5" fill="#8B1A00"/>
    <circle cx="62" cy="38" r="1.5" fill="#8B1A00"/>
    <circle cx="48" cy="44" r="1.2" fill="#8B1A00"/>
    <!-- Ladle -->
    <line x1="72" y1="18" x2="58" y2="38" stroke="#5a3010" stroke-width="4" stroke-linecap="round"/>
    <ellipse cx="56" cy="40" rx="7" ry="5" fill="#c9703a" stroke="#5a3010" stroke-width="2.5"/>
    <!-- Bowl shadow line -->
    <path d="M16 62 Q50 80 84 62" fill="none" stroke="rgba(21,21,21,0.18)" stroke-width="3" stroke-linecap="round"/>
  </svg>`,

  // Poriyal: a green veggie stir-fry heap with mustard seeds and curry leaf accents
  poriyal: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 80" width="100" height="80">
    <!-- Stir-fry base mound -->
    <ellipse cx="50" cy="65" rx="44" ry="13" fill="#5a9e28" stroke="#151515" stroke-width="3"/>
    <!-- Main heap -->
    <path d="M12 65 Q14 36 50 26 Q86 36 88 65 Z" fill="#7bc833" stroke="#151515" stroke-width="3" stroke-linejoin="round"/>
    <!-- Veggie texture: small bean / carrot shapes -->
    <ellipse cx="36" cy="52" rx="7" ry="3.5" fill="#f97316" stroke="#151515" stroke-width="1.5" transform="rotate(-20 36 52)"/>
    <ellipse cx="58" cy="48" rx="7" ry="3.5" fill="#f97316" stroke="#151515" stroke-width="1.5" transform="rotate(15 58 48)"/>
    <ellipse cx="44" cy="44" rx="6" ry="3" fill="#86efac" stroke="#151515" stroke-width="1.5"/>
    <ellipse cx="62" cy="58" rx="6" ry="3" fill="#86efac" stroke="#151515" stroke-width="1.5" transform="rotate(-10 62 58)"/>
    <!-- Mustard seeds -->
    <circle cx="30" cy="58" r="2.5" fill="#fde047" stroke="#151515" stroke-width="1"/>
    <circle cx="50" cy="56" r="2.5" fill="#fde047" stroke="#151515" stroke-width="1"/>
    <circle cx="68" cy="54" r="2.5" fill="#fde047" stroke="#151515" stroke-width="1"/>
    <circle cx="40" cy="62" r="2" fill="#fde047" stroke="#151515" stroke-width="1"/>
    <!-- Curry leaf -->
    <path d="M72 36 Q78 28 75 22 Q69 30 72 36 Z" fill="#15803d" stroke="#151515" stroke-width="1.5"/>
    <line x1="72" y1="36" x2="75" y2="22" stroke="#151515" stroke-width="1" stroke-linecap="round"/>
  </svg>`,

  // Appalam: a round golden crisp disc with bubble texture and crack lines
  appalam: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92 92" width="92" height="92">
    <!-- Disc shadow -->
    <ellipse cx="50" cy="54" rx="38" ry="10" fill="rgba(21,21,21,0.18)"/>
    <!-- Main disc -->
    <circle cx="46" cy="46" r="40" fill="#f5d66a" stroke="#151515" stroke-width="3.5"/>
    <!-- Inner ring (rim highlight) -->
    <circle cx="46" cy="46" r="34" fill="none" stroke="rgba(255,255,255,0.35)" stroke-width="2"/>
    <!-- Crack lines (crisped texture) -->
    <path d="M46 12 Q52 30 46 46" fill="none" stroke="#c9a227" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M46 80 Q40 62 46 46" fill="none" stroke="#c9a227" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M12 46 Q30 40 46 46" fill="none" stroke="#c9a227" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M80 46 Q62 52 46 46" fill="none" stroke="#c9a227" stroke-width="1.5" stroke-linecap="round"/>
    <!-- Fried bubbles -->
    <circle cx="32" cy="32" r="5" fill="#ffe484" stroke="#c9a227" stroke-width="1.5"/>
    <circle cx="60" cy="28" r="4" fill="#ffe484" stroke="#c9a227" stroke-width="1.5"/>
    <circle cx="62" cy="58" r="5.5" fill="#ffe484" stroke="#c9a227" stroke-width="1.5"/>
    <circle cx="28" cy="60" r="4" fill="#ffe484" stroke="#c9a227" stroke-width="1.5"/>
    <circle cx="46" cy="30" r="3.5" fill="#fff7c2" stroke="#c9a227" stroke-width="1"/>
    <circle cx="40" cy="56" r="3" fill="#fff7c2" stroke="#c9a227" stroke-width="1"/>
    <!-- Centre highlight -->
    <ellipse cx="40" cy="38" rx="9" ry="5" fill="rgba(255,255,255,0.38)" transform="rotate(-20 40 38)"/>
  </svg>`,

  // Pickle: sliced red chilli pieces with seeds visible and oil sheen
  pickle: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 70" width="90" height="70">
    <!-- Pickle smear / oil base -->
    <ellipse cx="45" cy="58" rx="38" ry="10" fill="rgba(180,20,20,0.22)"/>
    <!-- Chilli piece 1 (sliced ring) -->
    <ellipse cx="30" cy="42" rx="16" ry="12" fill="#D62828" stroke="#151515" stroke-width="2.5" transform="rotate(-15 30 42)"/>
    <ellipse cx="30" cy="42" rx="10" ry="7" fill="#ff4444" stroke="#151515" stroke-width="1.5" transform="rotate(-15 30 42)"/>
    <circle cx="30" cy="41" r="2.5" fill="#ffb3b3"/>
    <circle cx="27" cy="44" r="1.5" fill="#ffb3b3"/>
    <circle cx="33" cy="43" r="1.5" fill="#ffb3b3"/>
    <!-- Chilli piece 2 (bigger, rotated) -->
    <ellipse cx="55" cy="36" rx="18" ry="13" fill="#bf1616" stroke="#151515" stroke-width="2.5" transform="rotate(20 55 36)"/>
    <ellipse cx="55" cy="36" rx="11" ry="8" fill="#e03030" stroke="#151515" stroke-width="1.5" transform="rotate(20 55 36)"/>
    <circle cx="55" cy="35" r="2.5" fill="#ffb3b3"/>
    <circle cx="51" cy="38" r="1.5" fill="#ffb3b3"/>
    <circle cx="58" cy="37" r="1.5" fill="#ffb3b3"/>
    <!-- Chilli tip/stalk -->
    <path d="M68 24 Q72 18 70 13" fill="none" stroke="#15803d" stroke-width="3" stroke-linecap="round"/>
    <!-- Oil dots (glistening) -->
    <circle cx="40" cy="54" r="2" fill="rgba(255,180,0,0.55)"/>
    <circle cx="55" cy="56" r="1.5" fill="rgba(255,180,0,0.45)"/>
    <circle cx="28" cy="52" r="1.5" fill="rgba(255,180,0,0.45)"/>
  </svg>`,

  // Chicken Gravy: a rustic bowl with rich dark brown chicken curry and visible bone piece
  chicken: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108 95" width="108" height="95">
    <!-- Bowl base shadow -->
    <ellipse cx="54" cy="88" rx="46" ry="8" fill="rgba(21,21,21,0.2)"/>
    <!-- Bowl outer body -->
    <path d="M10 44 Q12 86 54 86 Q96 86 98 44 Z" fill="#7c3d1a" stroke="#151515" stroke-width="3" stroke-linejoin="round"/>
    <!-- Bowl rim -->
    <ellipse cx="54" cy="44" rx="44" ry="12" fill="#8b4513" stroke="#151515" stroke-width="3"/>
    <!-- Gravy surface -->
    <ellipse cx="54" cy="44" rx="39" ry="10" fill="#b85c28"/>
    <!-- Richer gravy centre -->
    <ellipse cx="54" cy="44" rx="26" ry="6.5" fill="#c96a2e" opacity="0.8"/>
    <!-- Chicken piece (bone-in) -->
    <path d="M42 36 Q50 28 62 34 Q68 44 58 50 Q48 54 40 46 Q34 38 42 36 Z" fill="#d4844a" stroke="#151515" stroke-width="2.5"/>
    <!-- Bone tip 1 -->
    <circle cx="42" cy="35" r="4" fill="#f5deb3" stroke="#151515" stroke-width="2"/>
    <!-- Bone tip 2 -->
    <circle cx="62" cy="33" r="4" fill="#f5deb3" stroke="#151515" stroke-width="2"/>
    <!-- Chicken highlight -->
    <path d="M46 36 Q52 31 60 36" fill="none" stroke="rgba(255,200,140,0.5)" stroke-width="2.5" stroke-linecap="round"/>
    <!-- Spice dots on gravy -->
    <circle cx="36" cy="47" r="2" fill="#7c1d00"/>
    <circle cx="68" cy="42" r="1.8" fill="#7c1d00"/>
    <circle cx="52" cy="50" r="1.5" fill="#7c1d00"/>
    <!-- Oil sheen -->
    <circle cx="44" cy="40" r="3.5" fill="rgba(255,160,0,0.4)"/>
    <circle cx="62" cy="46" r="2.5" fill="rgba(255,160,0,0.35)"/>
    <!-- Curry leaf -->
    <path d="M74 34 Q80 26 77 20 Q71 28 74 34 Z" fill="#15803d" stroke="#151515" stroke-width="1.5"/>
    <line x1="74" y1="34" x2="77" y2="20" stroke="#151515" stroke-width="1" stroke-linecap="round"/>
  </svg>`,

  // Fish Fry: a golden fried whole fish with grill marks, tail fin, and eye
  fish: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 72" width="120" height="72">
    <!-- Plate / oil smear -->
    <ellipse cx="60" cy="64" rx="52" ry="8" fill="rgba(180,120,0,0.18)"/>
    <!-- Fish body -->
    <path d="M18 36 Q22 14 60 18 Q95 22 102 36 Q95 50 60 54 Q22 58 18 36 Z" fill="#d4842a" stroke="#151515" stroke-width="3" stroke-linejoin="round"/>
    <!-- Fried golden skin highlight -->
    <path d="M25 30 Q50 18 85 26" fill="none" stroke="#f5b942" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>
    <!-- Grill marks -->
    <line x1="42" y1="20" x2="38" y2="52" stroke="rgba(21,21,21,0.35)" stroke-width="3" stroke-linecap="round"/>
    <line x1="57" y1="18" x2="53" y2="54" stroke="rgba(21,21,21,0.3)" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="72" y1="20" x2="68" y2="52" stroke="rgba(21,21,21,0.28)" stroke-width="2" stroke-linecap="round"/>
    <!-- Tail fin -->
    <path d="M102 36 L118 22 L112 36 L118 50 Z" fill="#c97020" stroke="#151515" stroke-width="2.5" stroke-linejoin="round"/>
    <!-- Head area -->
    <circle cx="22" cy="36" r="12" fill="#b86a1a" stroke="#151515" stroke-width="2.5"/>
    <!-- Eye -->
    <circle cx="19" cy="33" r="4.5" fill="#fff" stroke="#151515" stroke-width="2"/>
    <circle cx="19" cy="33" r="2.5" fill="#151515"/>
    <circle cx="20" cy="32" r="1" fill="#fff"/>
    <!-- Mouth -->
    <path d="M12 38 Q16 41 20 38" fill="none" stroke="#151515" stroke-width="2" stroke-linecap="round"/>
    <!-- Dorsal fin -->
    <path d="M38 20 Q55 8 72 18" fill="none" stroke="#a05010" stroke-width="4" stroke-linecap="round"/>
    <!-- Coriander garnish -->
    <circle cx="85" cy="20" r="5" fill="#22c55e" stroke="#151515" stroke-width="1.5"/>
    <circle cx="93" cy="16" r="4" fill="#16a34a" stroke="#151515" stroke-width="1.5"/>
    <circle cx="90" cy="25" r="3.5" fill="#22c55e" stroke="#151515" stroke-width="1.5"/>
  </svg>`,

  // Sweet: a small payasam / kheer bowl with saffron garnish, raisins and cashews
  sweet: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92 90" width="92" height="90">
    <!-- Bowl shadow -->
    <ellipse cx="46" cy="84" rx="36" ry="7" fill="rgba(21,21,21,0.18)"/>
    <!-- Bowl outer -->
    <path d="M10 44 Q12 80 46 80 Q80 80 82 44 Z" fill="#c9703a" stroke="#151515" stroke-width="3"/>
    <!-- Bowl rim -->
    <ellipse cx="46" cy="44" rx="36" ry="10" fill="#d4834a" stroke="#151515" stroke-width="3"/>
    <!-- Kheer / payasam surface -->
    <ellipse cx="46" cy="44" rx="31" ry="8.5" fill="#fff8e7"/>
    <!-- Saffron swirl -->
    <path d="M30 42 Q38 36 46 42 Q54 48 62 42" fill="none" stroke="#f59e0b" stroke-width="3" stroke-linecap="round"/>
    <!-- Raisins -->
    <ellipse cx="36" cy="47" rx="4" ry="2.5" fill="#7c2d12" stroke="#151515" stroke-width="1"/>
    <ellipse cx="56" cy="45" rx="3.5" ry="2" fill="#7c2d12" stroke="#151515" stroke-width="1"/>
    <ellipse cx="46" cy="50" rx="3.5" ry="2" fill="#7c2d12" stroke="#151515" stroke-width="1"/>
    <!-- Cashew pieces -->
    <path d="M28 42 Q31 36 35 40" fill="none" stroke="#d97706" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M58 48 Q61 42 65 46" fill="none" stroke="#d97706" stroke-width="3.5" stroke-linecap="round"/>
    <!-- Cardamom dot -->
    <circle cx="46" cy="38" r="3" fill="#a8d5a2" stroke="#151515" stroke-width="1"/>
    <!-- Silver foil accent (top) -->
    <path d="M38 35 Q46 30 54 35" fill="rgba(200,200,200,0.45)" stroke="rgba(180,180,180,0.5)" stroke-width="1"/>
    <!-- Bowl inner shadow -->
    <path d="M18 62 Q46 78 74 62" fill="none" stroke="rgba(21,21,21,0.14)" stroke-width="3" stroke-linecap="round"/>
  </svg>`,
};

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) =>
  Array.from(scope.querySelectorAll(selector));
const hasGsap = typeof window.gsap !== "undefined";
const hasScrollTrigger = typeof window.ScrollTrigger !== "undefined";

// Only run homepage-specific code when the relevant elements exist
const isHomePage = Boolean(document.getElementById("menu-groups") && document.querySelector(".time-card"));

if (isHomePage) {
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

    $$("#nav-links a, .mobile-action-bar a[href^='#']").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("is-open");
        document.body.classList.remove("menu-open");
        hamburger.setAttribute("aria-expanded", "false");
        hamburger.setAttribute("aria-label", "Open navigation menu");
      });
    });
  }

  $$(".time-card").forEach((card) => {
    const toggle = $("button", card);
    if (!toggle) return;
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
} // end isHomePage time-card block

function getSignatureIcon(index) {
  const iconPaths = [
    "assets/meals_icon.png",
    "assets/chicken_biryani_icon.png",
    "assets/mutton_biryani_icon.png",
    "assets/fish_fry_icon.png",
    "assets/parotta_icon.png",
    "assets/grill_chicken_icon.png",
    "assets/chettinad_gravy_icon.png",
    "assets/rose_milk_icon.png",
    "assets/mojito_icon.png",
    "assets/filter_coffee_icon.png"
  ];
  const src = iconPaths[index % iconPaths.length];
  const altText = signaturePicks[index % signaturePicks.length][0];
  return `<img src="${src}" alt="${altText}" class="sticker-icon-img">`;
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

// ---- Optimized filter + menu rendering ----
// These elements only exist on index.html (homepage)
const filterRow = isHomePage ? $("#filter-row") : null;
const menuGroups = isHomePage ? $("#menu-groups") : null;
const searchInput = isHomePage ? $("#menu-search") : null;
let activeCategory = "All";
// renderFilters only builds buttons once; subsequent calls just toggle classes
let filtersBuilt = false;

function renderFilters() {
  const categories = ["All", ...menuData.map((group) => group.category)];

  if (!filtersBuilt) {
    // Build the buttons once
    filterRow.innerHTML = categories
      .map(
        (category) =>
          `<button class="filter-btn${category === activeCategory ? " is-active" : ""}" type="button" data-category="${category}" aria-pressed="${category === activeCategory}">${category}</button>`,
      )
      .join("");

    filterRow.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      activeCategory = btn.dataset.category;
      // Toggle active state without rebuilding all buttons
      filterRow.querySelectorAll(".filter-btn").forEach((b) => {
        const isActive = b.dataset.category === activeCategory;
        b.classList.toggle("is-active", isActive);
        b.setAttribute("aria-pressed", String(isActive));
      });
      renderMenu();
    });
    filtersBuilt = true;
  } else {
    // Just update active state on existing buttons
    filterRow.querySelectorAll(".filter-btn").forEach((b) => {
      const isActive = b.dataset.category === activeCategory;
      b.classList.toggle("is-active", isActive);
      b.setAttribute("aria-pressed", String(isActive));
    });
  }
}

// Preview categories shown on the homepage (3 most popular)
const HOMEPAGE_PREVIEW_CATEGORIES = ["Meals", "Biryani", "Chicken Starters"];
// Set to true when rendering the full menu.html page
const IS_FULL_MENU_PAGE = false;

function renderMenu() {
  const term = searchInput.value.trim().toLowerCase();
  const categoriesToShow = IS_FULL_MENU_PAGE
    ? null
    : HOMEPAGE_PREVIEW_CATEGORIES;

  const filteredGroups = menuData
    .filter((group) => {
      if (activeCategory !== "All" && group.category !== activeCategory)
        return false;
      if (categoriesToShow && !categoriesToShow.includes(group.category))
        return false;
      return true;
    })
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
              <div class="menu-item-details">
                <span class="menu-item-name">${item.name}</span>
                ${item.bestSeller ? '<span class="best-seller-tag">★ Best Seller</span>' : ""}
              </div>
              <span class="food-badge" title="${item.type === "veg" ? "Vegetarian" : "Non-vegetarian"}" aria-label="${item.type === "veg" ? "Vegetarian" : "Non-vegetarian"}" style="--badge:${item.type === "veg" ? "#168B3A" : "#D62828"}"></span>
              <span class="price">₹${item.price}</span>
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

// Debounced search using requestAnimationFrame to avoid per-keystroke reflow
let searchRafId = null;
if (searchInput) {
  searchInput.addEventListener("input", () => {
    if (searchRafId) cancelAnimationFrame(searchRafId);
    searchRafId = requestAnimationFrame(() => {
      renderMenu();
      searchRafId = null;
    });
  });
}

function addFoodToLeaf(food) {
  const svgMarkup = foodSVGs[food];
  if (!svgMarkup) return;

  const leaf = $("#builder-leaf");
  const wrapper = document.createElement("div");

  // Random placement within the safe inner area of the banana leaf
  const x = 16 + Math.random() * 68;
  const y = 20 + Math.random() * 56;
  // Mild random rotation so items don't look robotically aligned
  const rotate = Math.round(-12 + Math.random() * 24);

  wrapper.className = `builder-food builder-${food}`;
  wrapper.setAttribute("aria-hidden", "true");
  wrapper.style.left = `${x}%`;
  wrapper.style.top = `${y}%`;
  wrapper.style.rotate = `${rotate}deg`;
  // Scale SVG so larger leaf = larger food items (responsive via cqw)
  wrapper.style.width = "18cqw";
  wrapper.style.height = "auto";
  wrapper.innerHTML = svgMarkup;
  leaf.appendChild(wrapper);

  if (hasGsap) {
    // Pop-in: start scaled down and spring to full size
    gsap.fromTo(
      wrapper,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.42, ease: "back.out(2.8)" },
    );
    // Tiny wobble after landing
    gsap.fromTo(
      wrapper,
      { rotate: rotate - 8 },
      { rotate: rotate, duration: 0.3, ease: "elastic.out(1.2, 0.5)", delay: 0.3 },
    );
  } else {
    wrapper.style.transform = "translate(-50%, -50%) scale(1)";
    wrapper.style.opacity = "1";
  }
}

// Builder buttons — only on homepage
if (isHomePage) {
  $$(".builder-btn[data-food]").forEach((button) => {
    button.addEventListener("click", () => addFoodToLeaf(button.dataset.food));
  });

  const resetBuilder = $("#reset-builder");
  if (resetBuilder) {
    resetBuilder.addEventListener("click", () => {
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
  }
}


function runAnimations() {
  if (!hasGsap) return;

  if (hasScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  }

  // Update --navbar-h CSS variable so sticky offsets are always accurate
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    const updateNavbarHeight = () => {
      document.documentElement.style.setProperty(
        "--navbar-h",
        navbar.offsetHeight + "px",
      );
    };
    updateNavbarHeight();
    window.addEventListener("resize", updateNavbarHeight, { passive: true });
  }

  // Add is-animating class before running animations to enable will-change only on animated elements
  document.querySelectorAll(".float-food, .floaty, .float-slow").forEach((el) =>
    el.classList.add("is-animating"),
  );

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
    element.classList.add("is-animating");
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

  const marqueeTrack = document.querySelector("#signature-track");
  if (marqueeTrack) {
    marqueeTrack.classList.add("is-animating");
  }

  const marquee = gsap.to("#signature-track", {
    xPercent: -50,
    duration: 30,
    ease: "none",
    repeat: -1,
  });

  const track = $("#signature-track");
  if (track) {
    track.addEventListener("mouseenter", () => marquee.pause());
    track.addEventListener("mouseleave", () => marquee.play());
    track.addEventListener("focusin", () => marquee.pause());
    track.addEventListener("focusout", () => marquee.play());
  }

  $$(".btn, .builder-btn, .filter-btn").forEach((button) => {
    button.addEventListener("mouseenter", () =>
      gsap.to(button, { scale: 1.035, duration: 0.16, ease: "back.out(2)" }),
    );
    button.addEventListener("mouseleave", () =>
      gsap.to(button, { scale: 1, duration: 0.16, ease: "power2.out" }),
    );
  });
}

if (isHomePage) {
  renderSignaturePicks();
  renderFilters();
  renderMenu();
}
runAnimations();

// ── Back to Top button ──
(function () {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;

  // Show button after scrolling 300px
  const SHOW_AFTER = 300;
  let rafId = null;

  function onScroll() {
    if (rafId) return;
    rafId = requestAnimationFrame(() => {
      btn.classList.toggle("is-visible", window.scrollY > SHOW_AFTER);
      rafId = null;
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });

  btn.addEventListener("click", () => {
    // CSS ripple effect
    btn.classList.remove("ripple");
    void btn.offsetWidth; // force reflow to restart animation
    btn.classList.add("ripple");
    setTimeout(() => btn.classList.remove("ripple"), 450);

    if (typeof gsap !== "undefined") {
      // Animate the arrow icon: bounce up then reset
      gsap.fromTo(
        btn.querySelector("svg"),
        { y: 0 },
        { y: -6, duration: 0.15, ease: "power2.out", yoyo: true, repeat: 1 },
      );
      // Press squish on the button itself
      gsap.fromTo(
        btn,
        { scale: 1 },
        { scale: 0.88, duration: 0.1, ease: "power2.in", yoyo: true, repeat: 1 },
      );
    }

    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();

// ── Contact Us nav button animation ──
(function () {
  const contactBtn = document.getElementById("nav-contact-btn");
  if (!contactBtn) return;

  contactBtn.addEventListener("click", () => {
    // Flash the white overlay via CSS class
    contactBtn.classList.add("is-clicked");
    setTimeout(() => contactBtn.classList.remove("is-clicked"), 300);

    if (typeof gsap !== "undefined") {
      // Quick press-down squish
      gsap.fromTo(
        contactBtn,
        { scale: 1 },
        {
          scale: 0.92,
          duration: 0.1,
          ease: "power2.in",
          yoyo: true,
          repeat: 1,
          onComplete() {
            // Spring back with a little bounce
            gsap.to(contactBtn, { scale: 1, duration: 0.28, ease: "back.out(3)" });
          },
        },
      );
    }
  });
})();
