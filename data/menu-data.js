/* ===================================================================
   NEO Lounge Bar — MENU DATA
   Тут зберігається все меню. Щоб додати/змінити страву чи напій —
   просто відредагуйте потрібний об'єкт нижче й збережіть файл.
   Кожна позиція: { name, desc (необов'язково), price, unit (необов'язково) }
   =================================================================== */

const MENU_DATA = {
  bar: {
    title: "Барна карта",
    note: "Ціни вказані на 0,7–1 л (пляшка) і на порцію (келих/чарка) окремо",
    groups: [
      {
        title: "Віскі",
        columns: ["Пляшка", "Порція 50 мл"],
        items: [
          { name: "J&B Rare", bottle: "1480 грн / 1 л", glass: "120 грн" },
          { name: "O'Brian", bottle: "1360 грн / 0,7 л", glass: "120 грн" },
          { name: "Johnnie Walker Red Label", bottle: "2060 грн / 1 л", glass: "150 грн" },
          { name: "Jameson Irish Whiskey", bottle: "1940 грн / 1 л", glass: "160 грн" },
          { name: "Jack Daniel's Old No.7", bottle: "2150 грн / 1 л", glass: "160 грн" },
          { name: "Jack Daniel's Honey", bottle: "1630 грн / 0,7 л", glass: "160 грн" },
          { name: "Glenmorangie Original 12 YO", bottle: "4210 грн / 0,7 л", glass: "250 грн" },
          { name: "Bulleit Bourbon", bottle: "1870 грн / 0,7 л", glass: "160 грн" }
        ]
      },
      {
        title: "Горілка",
        items: [
          { name: "Koskenkorva Original", bottle: "1190 грн / 1 л", glass: "100 грн" },
          { name: "Koskenkorva Vanilla", bottle: "890 грн / 0,7 л", glass: "100 грн" },
          { name: "Ketel One", bottle: "1650 грн / 1 л", glass: "130 грн" },
          { name: "Grey Goose", bottle: "1990 грн / 1 л", glass: "150 грн" }
        ]
      },
      {
        title: "Джин",
        items: [
          { name: "Gordon's London Dry", bottle: "1490 грн / 1 л", glass: "110 грн" },
          { name: "Gordon's Premium Pink", bottle: "1490 грн / 1 л", glass: "120 грн" }
        ]
      },
      {
        title: "Ром",
        items: [
          { name: "Captain Morgan Spiced Gold", bottle: "1620 грн / 1 л", glass: "120 грн" },
          { name: "Captain Morgan Black Spiced", bottle: "2150 грн / 1 л", glass: "140 грн" },
          { name: "Santiago de Cuba Carta Blanca", bottle: "1130 грн / 0,7 л", glass: "120 грн" },
          { name: "Santiago de Cuba Añejo", bottle: "1530 грн / 0,7 л", glass: "140 грн" }
        ]
      },
      {
        title: "Текіла",
        items: [
          { name: "Jarana Blanco", bottle: "1540 грн / 1 л", glass: "110 грн" },
          { name: "Jarana Reposado", bottle: "1540 грн / 1 л", glass: "120 грн" }
        ]
      },
      {
        title: "Бренді / Коньяк",
        items: [
          { name: "Арарат 5*", bottle: "1520 грн / 0,7 л", glass: "130 грн" },
          { name: "Metaxa 5*", bottle: "1390 грн / 0,7 л", glass: "130 грн" },
          { name: "St-Rémy VSOP", bottle: "1200 грн / 0,7 л", glass: "140 грн (Authentic XO)" },
          { name: "Saint Rémy VSOP", bottle: "1200 грн / 0,7 л", glass: "130 грн" }
        ]
      },
      {
        title: "Лікери",
        items: [
          { name: "Jägermeister", bottle: "1830 грн / 1 л", glass: "120 грн" },
          { name: "Baileys Original", bottle: "2500 грн / 1 л", glass: "130 грн" },
          { name: "Becherovka", bottle: "1360 грн / 1 л", glass: "130 грн" },
          { name: "Sambuca Antica Classica", bottle: "1000 грн / 0,7 л", glass: "120 грн" },
          { name: "Volare Triple Sec", bottle: "950 грн / 0,7 л", glass: "100 грн" },
          { name: "Volare Green Melon", bottle: "900 грн / 0,7 л", glass: "100 грн" },
          { name: "Volare Espresso Coffee", bottle: "900 грн / 0,7 л", glass: "100 грн" },
          { name: "Volare Coconut", bottle: "900 грн / 0,7 л", glass: "100 грн" },
          { name: "Volare Peach", bottle: "880 грн / 0,7 л", glass: "100 грн" },
          { name: "Volare Pisang", bottle: "880 грн / 0,7 л", glass: "100 грн" }
        ]
      },
      {
        title: "Аперитиви",
        items: [
          { name: "Martini Rosso (червоний солодкий)", bottle: "800 грн / 1 л", glass: "80 грн" },
          { name: "Gamondi Orange", bottle: "1320 грн / 1 л", glass: "130 грн" },
          { name: "Gamondi Pink Citrus", bottle: "1660 грн / 1 л", glass: "130 грн" },
          { name: "Di Torino Bianco", bottle: "950 грн / 1 л", glass: "100 грн" },
          { name: "Di Torino Rosso", bottle: "950 грн / 1 л", glass: "100 грн" }
        ]
      },
      {
        title: "Вино",
        columns: ["Пляшка", "Келих 150 мл"],
        items: [
          { name: "JP Rosévé Medium (Франція)", bottle: "600 грн", glass: "120 грн" },
          { name: "Sensi Chianti Dalcampo, червоне сухе", bottle: "700 грн", glass: "140 грн" },
          { name: "JP Chenet Rouge Medium Sweet, червоне напівсолодке", bottle: "600 грн", glass: "120 грн" },
          { name: "Yellow Tail Moscato, біле напівсолодке", bottle: "650 грн", glass: "130 грн" },
          { name: "Don Simon Cabernet Sauvignon", bottle: "405 грн", glass: "130 грн" },
          { name: "Don Simon Chardonnay", bottle: "405 грн", glass: "130 грн" },
          { name: "10Wool Sauvignon Blanc Marlborough AOP, біле сухе", bottle: "790 грн", glass: "150 грн" },
          { name: "Sensi Collezione Pinot Grigio, біле сухе", bottle: "880 грн", glass: "130 грн" },
          { name: "Geo Alazani Valley White, біле напівсолодке", bottle: "480 грн", glass: "120 грн" },
          { name: "Geo Alazani Valley Red, червоне напівсолодке", bottle: "460 грн", glass: "120 грн" },
          { name: "Terra Italiana Chianti, червоне сухе", bottle: "460 грн", glass: "120 грн" },
          { name: "Lambrusco Rosso, червоне напівсолодке", bottle: "460 грн", glass: "120 грн" },
          { name: "Lambrusco Bianco, біле напівсолодке", bottle: "450 грн", glass: "120 грн" },
          { name: "San Mare Fragolino, полуниця напівсолодке", bottle: null, glass: "120 грн" },
          { name: "Latimin Sparkling, ігристе напівсолодке", bottle: null, glass: "120 грн" }
        ]
      },
      {
        title: "Ігристе вино",
        columns: ["Пляшка", "Келих 150 мл"],
        items: [
          { name: "Mionetto Prosecco Treviso DOC, біле брют", bottle: "910 грн", glass: "170 грн" },
          { name: "Serena 1881 Prosecco Frizzante", bottle: "810 грн", glass: "160 грн" },
          { name: "Serena 1881 Bianco", bottle: "795 грн", glass: "160 грн" },
          { name: "Gran Cuvée Extra Dry", bottle: "530 грн", glass: "160 грн" },
          { name: "Tosti Prosecco DOC, біле екстра-сухе", bottle: "800 грн", glass: "160 грн" }
        ]
      },
      {
        title: "Інше",
        items: [{ name: "Абсент Xenta", bottle: "2570 грн / 1 л", glass: "130 грн (Хента, 50 мл)" }]
      }
    ]
  },

  beer: {
    title: "Пиво, сидр і слабоалкогольні напої",
    groups: [
      {
        title: "Розливне пиво",
        items: [
          { name: "Розмай Лісовий", desc: "0,3 / 0,5 л", price: "уточнюється" },
          { name: "Kronenbourg 1664 Blanc", desc: "0,3 л", price: "55 грн" },
          { name: "Kronenbourg 1664 Blanc", desc: "0,5 л", price: "80 грн" },
          { name: "Львівське 1715", desc: "0,3 / 0,5 л", price: "уточнюється" }
        ]
      },
      {
        title: "Пиво у пляшках / банках — класика",
        items: [
          { name: "Львівське 1715", desc: "0,45 л", price: "70 грн" },
          { name: "Львівське М'яке", desc: "0,45 л", price: "80 грн" },
          { name: "Львівське Світле", desc: "0,5 л", price: "70 грн" },
          { name: "Старопрамен", desc: "0,45 л", price: "90 грн" }
        ]
      },
      {
        title: "Пиво у пляшках / банках — імпорт / преміум",
        items: [
          { name: "Kronenbourg 1664 Blanc", desc: "0,46 л", price: "100 грн" },
          { name: "Carlsberg", desc: "0,45 л", price: "90 грн" },
          { name: "Tuborg Green", desc: "0,5 л", price: "70 грн" }
        ]
      },
      {
        title: "Безалкогольне пиво",
        items: [
          { name: "Carlsberg 0,0", desc: "0,5 л", price: "70 грн" },
          { name: "Львівське 1715 0,0", desc: "0,48 л", price: "70 грн" }
        ]
      },
      {
        title: "Сидр",
        items: [{ name: "Somersby (солодкий)", desc: "0,5 л", price: "70 грн" }]
      },
      {
        title: "Garage (слабоалкогольні напої)",
        items: [
          { name: "Garage Hardcore Cherry & More", desc: "0,44 л", price: "90 грн" },
          { name: "Garage Hardcore Exotic Kiss", desc: "0,44 л", price: "90 грн" },
          { name: "Garage Hardcore Pomegranate Fizz", desc: "0,44 л", price: "90 грн" },
          { name: "Garage Лимон", desc: "0,44 л", price: "90 грн" },
          { name: "Garage Мандарин", desc: "0,44 л", price: "90 грн" }
        ]
      }
    ]
  },

  kitchen: {
    title: "Кухня",
    groups: [
      {
        title: "Салати та відбивні",
        items: [
          { name: "Салат «Камамбер»", desc: "Мікс салату, хрусткий обсмажений камамбер, черрі, печериці, соус", price: "250 грн" },
          { name: "Відбивна з помідором", desc: "Біток свинячий, помідор, майонез, сир твердий", price: "250 грн" },
          { name: "Відбивна з ананасом", desc: "Куряче філе, ананас, майонез, сир твердий", price: "200 грн" },
          { name: "Відбивна з грибами", desc: "Куряче філе, гриби смажені, майонез, сир твердий", price: "200 грн" },
          { name: "Куряче філе під сирним соусом", desc: "Ніжне куряче філе під вершково-сирним соусом, брусничний соус", price: "260 грн" },
          { name: "Цезар з креветками", desc: "Пекінка, айсберг, креветки, помідори чері, перепелині яйця, пармезан, сухарі, соус «Цезар»", price: "330 грн" },
          { name: "Салат м'ясний", desc: "Ветчина, філе, черрі, сир, чилі, сухарі, мікс салату, брусничний соус", price: "290 грн" }
        ]
      },
      {
        title: "Гарячі страви",
        items: [
          { name: "Стейк з овочами гриль", desc: "Соковитий стейк зі свинячої шиї, овочі гриль, соус на вибір · 250 г", price: "320 грн" },
          { name: "Солянка", desc: "Насичений м'ясний суп з копченостями, солоними огірками, маслинами, лимоном та сметаною · 400 мл", price: "200 грн" },
          { name: "Бедра курячі", desc: "Соковиті курячі стегна в медово-гірчичному соусі, запечені до золотистої скоринки, соус на вибір", price: "200 грн" },
          { name: "Бургер з курячою котлетою", desc: "Соковита куряча котлета, свіжі овочі, лист салату, соус, подається з картоплею фрі", price: "220 грн" }
        ]
      },
      {
        title: "Закуски",
        items: [
          { name: "Картопля фрі", desc: "Класична хрустка картопля фрі, золотиста скоринка · 250 г, соус на вибір", price: "175 грн" },
          { name: "Картопля по-селянськи", desc: "Запечена картопля по-селянськи з ароматними спеціями · 300 г, соус на вибір", price: "200 грн" },
          { name: "Нагетси", desc: "Соковиті курячі нагетси в хрусткій паніровці · 6 шт, соус на вибір", price: "200 грн" },
          { name: "Хеш браун", desc: "Хрусткі картопляні трикутники з рум'яною скоринкою · 5 шт, соус на вибір", price: "175 грн" },
          { name: "Сирні палички", desc: "Хрустка паніровка, обсмажені до золотистості · 200 г, соус на вибір", price: "225 грн" },
          { name: "Стріпси", desc: "Ніжне куряче філе в хрусткій паніровці · 13 шт, соус на вибір", price: "200 грн" },
          { name: "Лукові кільця", desc: "Хрусткі цибулеві кільця в ароматній паніровці · 200 г, соус на вибір", price: "180 грн" }
        ]
      }
    ]
  },

  drinks: {
    title: "Лимонади та безалкогольні коктейлі",
    groups: [
      {
        title: "Лимонади",
        items: [
          { name: "Ананас-щавель", desc: "Корд ананас-щавель, лимонний фреш, вода газована", price: "140 грн" },
          { name: "Лимонад класика", desc: "Лимонний фреш, сироп, вода газована", price: "130 грн" },
          { name: "Мохіто Б/А", desc: "Лайм, м'ята, сироп, вода газована", price: "150 грн" },
          { name: "Мохіто полуничний", desc: "Лайм, м'ята, сироп полуничний, вода газована", price: "160 грн" },
          { name: "Espresso Tonic", desc: "Schweppes Tonic, еспресо, лимонний фреш, сироп", price: "140 грн" },
          { name: "Ожина-бузина", desc: "Корд ожина, сироп бузина, лимонний фреш, вода газована", price: "140 грн" }
        ]
      },
      {
        title: "Коктейлі та розлив",
        items: [
          { name: "Молочний коктейль", desc: "Молоко, морозиво, сироп на вибір, ягоди", price: "120 грн" },
          { name: "Вода на розлив", price: "25 грн" },
          { name: "Солодка вода на розлив", price: "35 грн" },
          { name: "Сік на розлив", price: "40 грн" }
        ]
      }
    ]
  },

  coffee: {
    title: "Кава",
    groups: [
      {
        title: "Coffee menu",
        items: [
          { name: "Еспресо", price: "40 грн" },
          { name: "Американо", price: "45 грн" },
          { name: "Американо з молоком", price: "55 грн" },
          { name: "Капучино", price: "70 грн" },
          { name: "Латте", price: "70 грн" },
          { name: "Ice Latte", price: "70 грн" },
          { name: "Латте з сиропом", price: "85 грн" },
          { name: "Флет Уайт", price: "95 грн" },
          { name: "Гляссе", price: "140 грн" },
          { name: "Бамбл", price: "130 грн" }
        ]
      }
    ]
  }
};
