/* ===================================================================
   NEO Lounge Bar — ENTERTAINMENT DATA
   Тарифи + каталог VR-ігор. Щоб додати нову гру — скопіюйте один
   об'єкт у GAMES_DATA і заповніть поля. Порожні поля (null) означають
   "ще не вказано" і чесно показуються так на сайті, доки власник їх
   не заповнить — це стосується і вікового рейтингу.
   =================================================================== */

const TARIFFS_DATA = {
  vr: {
    title: "VR-шоломи (Meta Quest 3)",
    note: "4 шоломи, у кожного своя бібліотека ігор — дивись позначки на картці гри",
    rows: [
      { duration: "15 хв", price: "150 грн" },
      { duration: "30 хв", price: "250 грн" },
      { duration: "60 хв", price: "350 грн" },
      { duration: "90 хв", price: "450 грн" },
      { duration: "120 хв", price: "550 грн" }
    ]
  },
  simulator: {
    title: "Симулятор занурення",
    note: "Одна конкретна гра на сесію, без перемикання під час гри. Таймер стоїть на 10 хв, щоб встигнути завантажити гру — фактичний час гри ≈ 8 хв.",
    rows: [{ duration: "8 хв гри (сесія 10 хв)", price: "200 грн" }]
  },
  ps5: {
    title: "PlayStation 5",
    note: "Хочеш гру з підписки PS Plus, якої немає в списку? Зателефонуй заздалегідь — поставимо її до твого приходу.",
    rows: [
      { duration: "30 хв · 1 особа", price: "100 грн" },
      { duration: "1 год · 1 особа", price: "180 грн" },
      { duration: "30 хв · 2 особи", price: "200 грн" },
      { duration: "1 год · 2 особи", price: "270 грн" }
    ]
  },
  airhockey: {
    title: "Аерохокей",
    rows: [{ duration: "1 гра (≈5 хв)", price: "50 грн" }]
  }
};

const COMBO_DATA = {
  title: "Комбо-пакет",
  priceNew: "600 грн",
  priceOld: "900 грн",
  note: "Тільки для компанії — одна людина купити чи використати пакет не може.",
  includes: [
    "PlayStation 5 соло — 30 хв",
    "Аерохокей — 2 гри",
    "VR-шолом — 30 хв",
    "Симулятор занурення — 1 сесія"
  ]
};

const MAFIA_DATA = {
  title: "Мафія з ведучим",
  status: "pending",
  note: "Формат, ціна та кількість учасників уточнюються — скоро тут з'явиться повна інформація. А поки — дізнавайся деталі за дзвінком."
};

const BOARD_GAMES_DATA = {
  title: "Настільні ігри",
  status: "partial",
  note: "Список поповнюється.",
  items: ["Дженга кольорова", "Уно"]
};

/* categories: "shooter" | "sim" | "puzzle" | "rhythm" | "horror" | "social" | "sport" | "other" | null
   age: число (мінімальний рекомендований вік) або null, якщо ще не вказано
   headsets: масив номерів шоломів 1-4, де є гра, або [] якщо ще не вказано
   video: YouTube ID (тільки ID, не повне посилання) або null
   type: "game" (за замовчуванням) або "video" — для DeoVR-контенту, який є відеоплеєром, а не грою */
const GAMES_DATA = [
  { id: "epic-roller-coasters", name: "Epic Roller Coasters", category: null, age: null, headsets: [], video: null },
  { id: "water-ride-express", name: "Water Ride Express", category: null, age: null, headsets: [], video: null },
  { id: "aim-xr", name: "Aim XR", category: null, age: null, headsets: [], video: null },
  { id: "pistol-whip", name: "Pistol Whip", category: null, age: null, headsets: [], video: null },
  { id: "speed-shooting", name: "Speed Shooting", category: null, age: null, headsets: [], video: null },
  { id: "spatial-zombies", name: "Spatial Zombies", category: null, age: null, headsets: [], video: null },
  { id: "puzzling-places", name: "Puzzling Places", category: null, age: null, headsets: [], video: null },
  { id: "runner", name: "RUNNER", category: null, age: null, headsets: [], video: null },
  { id: "job-simulator", name: "Job Simulator", category: null, age: null, headsets: [], video: null },
  { id: "i-am-cat", name: "I Am Cat", category: null, age: null, headsets: [], video: null },
  { id: "beat-saber", name: "Beat Saber", category: null, age: null, headsets: [], video: null },
  { id: "i-expect-you-to-die-3", name: "I Expect You To Die 3", category: null, age: null, headsets: [], video: null },
  { id: "red-matter-2", name: "Red Matter 2", category: null, age: null, headsets: [], video: null },
  { id: "animal-rivals", name: "Animal Rivals VR", category: null, age: null, headsets: [], video: null },
  { id: "superhot", name: "SUPERHOT VR", category: null, age: null, headsets: [], video: null },
  { id: "crisis-brigade-2", name: "Crisis Brigade 2 Reloaded", category: null, age: null, headsets: [], video: null },
  { id: "starvault", name: "STARVAULT", category: null, age: null, headsets: [], video: null },
  { id: "war-of-wizards", name: "War of Wizards", category: null, age: null, headsets: [], video: null },
  { id: "gun-world-vr", name: "Gun World VR", category: null, age: null, headsets: [], video: null },
  { id: "guardian-of-realms", name: "Guardian of Realms", category: null, age: null, headsets: [], video: null },
  { id: "deovr-videos", name: "DeoVR Videos", category: null, age: null, headsets: [], video: null, type: "video", note: "Відеоплеєр 360°, не гра — формат ще уточнюється" },
  { id: "hyper-deovr", name: "Hyper DeoVR", category: null, age: null, headsets: [], video: null, type: "video", note: "Відеоплеєр, формат ще уточнюється" },
  { id: "les-mills-bodycombat", name: "LES MILLS XR BODYCOMBAT", category: null, age: null, headsets: [], video: null },
  { id: "road-ready-vr", name: "Road Ready VR", category: null, age: null, headsets: [], video: null },
  { id: "air-brigade-2", name: "Air Brigade 2", category: null, age: null, headsets: [], video: null },
  { id: "project-e", name: "Project E", category: null, age: null, headsets: [], video: null },
  { id: "tiny-archers", name: "Tiny Archers", category: null, age: null, headsets: [], video: null },
  { id: "exer-gale", name: "Exer Gale", category: null, age: null, headsets: [], video: null },
  { id: "water-ride-extreme", name: "Water Ride Extreme", category: null, age: null, headsets: [], video: null },
  { id: "guardians-frontline", name: "Guardians Frontline", category: null, age: null, headsets: [], video: null },
  { id: "shooty-fruity", name: "Shooty Fruity", category: null, age: null, headsets: [], video: null },
  { id: "exit-code", name: "Exit Code: Immersive Escape Rooms", category: null, age: null, headsets: [], video: null },
  { id: "airport-security-guard-vr", name: "Airport Security Guard VR", category: null, age: null, headsets: [], video: null },
  { id: "thief-simulator", name: "Thief Simulator", category: null, age: null, headsets: [], video: null },
  { id: "the-first-encounter-vr", name: "The First Encounter VR", category: null, age: null, headsets: [], video: null },
  { id: "premium-bowling", name: "Premium Bowling", category: null, age: null, headsets: [], video: null },
  { id: "onward", name: "Onward", category: null, age: null, headsets: [], video: null },
  { id: "the-climb-2", name: "The Climb 2", category: null, age: null, headsets: [], video: null },
  { id: "project-demigod", name: "Project Demigod", category: null, age: null, headsets: [], video: null },
  { id: "last-bone", name: "Last Bone", category: null, age: null, headsets: [], video: null },
  { id: "synth-riders", name: "Synth Riders", category: null, age: null, headsets: [], video: null },
  { id: "breachers", name: "Breachers", category: null, age: null, headsets: [], video: null },
  { id: "blackgate", name: "BlackGate", category: null, age: null, headsets: [], video: null },
  { id: "the-chicking", name: "The ChicKing", category: null, age: null, headsets: [], video: null },
  { id: "gun-shooting", name: "Gun Shooting", category: null, age: null, headsets: [], video: null },
  { id: "demeo-battles", name: "Demeo Battles", category: null, age: null, headsets: [], video: null },
  { id: "apex-construct", name: "Apex Construct", category: null, age: null, headsets: [], video: null },
  { id: "vibe-punch", name: "Vibe Punch", category: null, age: null, headsets: [], video: null },
  { id: "alvo", name: "Alvo", category: null, age: null, headsets: [], video: null },
  { id: "hyper-bullet", name: "Hyper Bullet", category: null, age: null, headsets: [], video: null },
  { id: "motox", name: "MotoX", category: null, age: null, headsets: [], video: null },
  { id: "darksword-battle-eternity", name: "Darksword: Battle Eternity", category: null, age: null, headsets: [], video: null },
  { id: "espire-1", name: "Espire 1: VR Operative", category: null, age: null, headsets: [], video: null },
  { id: "gang-warfare", name: "Gang Warfare", category: null, age: null, headsets: [], video: null },
  { id: "ghosts-of-tabor", name: "Ghosts of Tabor", category: null, age: null, headsets: [], video: null },
  { id: "mannequin", name: "Mannequin", category: null, age: null, headsets: [], video: null },
  { id: "ironstrike", name: "IRONSTRIKE", category: null, age: null, headsets: [], video: null },
  { id: "vail", name: "VAIL", category: null, age: null, headsets: [], video: null },
  { id: "secret-of-retropolis", name: "The Secret of Retropolis", category: null, age: null, headsets: [], video: null },
  { id: "the-light-brigade", name: "The Light Brigade", category: null, age: null, headsets: [], video: null },
  { id: "vrchat", name: "VRChat", category: null, age: null, headsets: [], video: null }
];
