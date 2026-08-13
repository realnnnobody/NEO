/* NEO Lounge Bar — renders entertainment.html from TARIFFS_DATA / COMBO_DATA / GAMES_DATA */

(function () {
  "use strict";

  if (typeof TARIFFS_DATA === "undefined") return;

  var CATEGORY_LABELS = {
    shooter: "Шутери",
    sim: "Симулятори",
    puzzle: "Головоломки",
    rhythm: "Ритм-ігри",
    horror: "Хорор",
    social: "Соціальні",
    sport: "Спорт",
    other: "Інше"
  };

  function categoryLabel(cat) {
    return CATEGORY_LABELS[cat] || cat;
  }

  /* ---------------- Tariffs ---------------- */
  var tariffsRoot = document.querySelector("[data-tariffs]");
  if (tariffsRoot) {
    var order = ["vr", "simulator", "ps5", "airhockey"];
    tariffsRoot.innerHTML = order
      .map(function (key) {
        var t = TARIFFS_DATA[key];
        var rows = t.rows
          .map(function (r) {
            return '<div class="tariff-row"><span>' + r.duration + "</span><span>" + r.price + "</span></div>";
          })
          .join("");
        var note = t.note ? '<div class="tariff-card__note">' + t.note + "</div>" : "";
        return (
          '<div class="tariff-card"><div class="tariff-card__title">' +
          t.title +
          "</div>" +
          note +
          '<div class="tariff-card__rows">' +
          rows +
          "</div></div>"
        );
      })
      .join("");
  }

  /* ---------------- Combo ---------------- */
  var comboRoot = document.querySelector("[data-combo]");
  if (comboRoot && typeof COMBO_DATA !== "undefined") {
    var items = COMBO_DATA.includes.map(function (i) {
      return "<li>" + i + "</li>";
    }).join("");
    comboRoot.innerHTML =
      '<div><span class="eyebrow eyebrow--pink">// НАЙВИГІДНІШЕ</span><h3 class="card__title" style="font-size:28px;">' +
      COMBO_DATA.title +
      '</h3><div class="combo__price"><span class="combo__price-new">' +
      COMBO_DATA.priceNew +
      '</span><span class="combo__price-old">' +
      COMBO_DATA.priceOld +
      '</span></div><ul class="combo__list">' +
      items +
      '</ul><div class="combo__note">' +
      COMBO_DATA.note +
      '</div></div><a href="tel:+380973788699" class="btn btn--fill">Зателефонувати</a>';
  }

  /* ---------------- Mafia + board games ---------------- */
  var infoRoot = document.querySelector("[data-info]");
  if (infoRoot && typeof MAFIA_DATA !== "undefined") {
    var mafiaBadge = MAFIA_DATA.status === "pending" ? '<span class="info-card__badge">Деталі скоро</span>' : "";
    var boardBadge =
      BOARD_GAMES_DATA.status === "partial" ? '<span class="info-card__badge">Список поповнюється</span>' : "";
    var boardTags = BOARD_GAMES_DATA.items
      .map(function (i) {
        return "<span>" + i + "</span>";
      })
      .join("");
    infoRoot.innerHTML =
      '<div class="info-card"><div class="info-card__title">' +
      MAFIA_DATA.title +
      mafiaBadge +
      '</div><div class="info-card__note">' +
      MAFIA_DATA.note +
      '</div></div><div class="info-card"><div class="info-card__title">' +
      BOARD_GAMES_DATA.title +
      boardBadge +
      '</div><div class="info-card__note">' +
      BOARD_GAMES_DATA.note +
      '</div><div class="info-card__tags">' +
      boardTags +
      "</div></div>";
  }

  /* ---------------- Games grid + filters ---------------- */
  var filtersRoot = document.querySelector("[data-filters]");
  var gridRoot = document.querySelector("[data-games-grid]");
  var countRoot = document.querySelector("[data-games-count]");

  if (filtersRoot && gridRoot && typeof GAMES_DATA !== "undefined") {
    var state = { category: "all", kid: false };

    function renderFilters() {
      var cats = [];
      GAMES_DATA.forEach(function (g) {
        if (g.category && cats.indexOf(g.category) === -1) cats.push(g.category);
      });
      var allChips = ["all"].concat(cats);
      var chipsHtml = allChips
        .map(function (cat) {
          var label = cat === "all" ? "Усі ігри" : categoryLabel(cat);
          return (
            '<button type="button" class="filter-chip' +
            (state.category === cat ? " is-active" : "") +
            '" data-cat="' +
            cat +
            '">' +
            label +
            "</button>"
          );
        })
        .join("");
      chipsHtml +=
        '<button type="button" class="filter-chip filter-chip--kid' +
        (state.kid ? " is-active" : "") +
        '" data-kid="1">Дитячий режим</button>';
      filtersRoot.innerHTML = chipsHtml;

      filtersRoot.querySelectorAll("[data-cat]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          state.category = btn.dataset.cat;
          renderFilters();
          renderGrid();
        });
      });
      var kidBtn = filtersRoot.querySelector("[data-kid]");
      if (kidBtn) {
        kidBtn.addEventListener("click", function () {
          state.kid = !state.kid;
          renderFilters();
          renderGrid();
        });
      }
    }

    function renderGrid() {
      var list = GAMES_DATA;
      if (state.category !== "all") {
        list = list.filter(function (g) {
          return g.category === state.category;
        });
      }
      if (state.kid) {
        list = list.filter(function (g) {
          return g.age !== null && g.age <= 12;
        });
      }

      if (countRoot) {
        countRoot.textContent = list.length + " з " + GAMES_DATA.length + " ігор";
      }

      if (!list.length) {
        gridRoot.innerHTML =
          '<div class="gallery-empty"><div class="gallery-empty__code">// NO MATCHES</div><p>' +
          (state.kid
            ? "Дитячі ігри ще позначаються — зателефонуй, підкажемо на місці."
            : "Ігор за цим фільтром поки немає.") +
          "</p></div>";
        return;
      }

      gridRoot.innerHTML = list
        .map(function (g) {
          var ageTag =
            g.age !== null
              ? '<span class="game-card__tag game-card__tag--age">' + g.age + "+</span>"
              : '<span class="game-card__tag">вік не вказано</span>';
          var catTag = g.category ? '<span class="game-card__tag">' + categoryLabel(g.category) + "</span>" : "";
          var headTag =
            g.headsets && g.headsets.length
              ? '<span class="game-card__tag">шолом ' + g.headsets.join(", ") + "</span>"
              : "";
          var typeTag = g.type === "video" ? '<span class="game-card__tag">відео 360°</span>' : "";
          var thumbInner =
            '<div class="game-card__play"><svg viewBox="0 0 16 16"><path d="M4 2l10 6-10 6V2z"></path></svg></div>';
          var thumb = g.video
            ? '<div class="game-card__thumb" data-video="' + g.video + '">' + thumbInner + "</div>"
            : '<div class="game-card__thumb">' + thumbInner + "</div>";
          return (
            '<div class="game-card">' +
            thumb +
            '<div class="game-card__body"><div class="game-card__name">' +
            g.name +
            '</div><div class="game-card__meta">' +
            ageTag +
            catTag +
            headTag +
            typeTag +
            "</div></div></div>"
          );
        })
        .join("");

      gridRoot.querySelectorAll("[data-video]").forEach(function (el) {
        el.addEventListener("click", function () {
          var id = el.dataset.video;
          el.innerHTML =
            '<iframe src="https://www.youtube.com/embed/' +
            id +
            '?autoplay=1" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
        });
      });
    }

    renderFilters();
    renderGrid();
  }
})();
