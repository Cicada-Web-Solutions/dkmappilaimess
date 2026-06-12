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
];;

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
              <div class="menu-item-details">
                <span class="menu-item-name">${item.name}</span>
                ${item.bestSeller ? '<span class="best-seller-tag">★ Best Seller</span>' : ''}
              </div>
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
  blob.style.width = `${(config.size[0] / 640) * 100}cqw`;
  blob.style.height = `${(config.size[1] / 640) * 100}cqw`;
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

renderSignaturePicks();
renderFilters();
renderMenu();
runAnimations();
