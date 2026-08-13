/* NEO Lounge Bar — renders menu.html from MENU_DATA */

(function () {
  "use strict";

  if (typeof MENU_DATA === "undefined") return;

  var tabsRoot = document.querySelector("[data-menu-tabs]");
  var contentRoot = document.querySelector("[data-menu-root]");
  if (!tabsRoot || !contentRoot) return;

  var sectionKeys = Object.keys(MENU_DATA);

  function renderItem(item) {
    var hasTwoPrices = item.bottle !== undefined || item.glass !== undefined;
    var desc = item.desc ? '<div class="menu-item__desc">' + item.desc + "</div>" : "";
    var pricesHtml;

    if (hasTwoPrices) {
      var b = item.bottle ? "<span>" + item.bottle + "</span>" : '<span class="is-pending">—</span>';
      var g = item.glass ? "<span>" + item.glass + "</span>" : '<span class="is-pending">—</span>';
      pricesHtml = '<div class="menu-item__prices">' + b + g + "</div>";
    } else {
      var pending = item.price === "уточнюється";
      pricesHtml =
        '<div class="menu-item__prices"><span class="' +
        (pending ? "is-pending" : "") +
        '">' +
        item.price +
        "</span></div>";
    }

    return (
      '<div class="menu-item"><div class="menu-item__main"><div class="menu-item__name">' +
      item.name +
      "</div>" +
      desc +
      "</div>" +
      pricesHtml +
      "</div>"
    );
  }

  function renderGroup(group) {
    var colsHtml = "";
    if (group.columns) {
      colsHtml =
        '<div class="menu-group__cols"><span></span><div style="display:flex;gap:22px;"><span style="min-width:92px;">' +
        group.columns[0] +
        '</span><span style="min-width:92px;">' +
        group.columns[1] +
        "</span></div></div>";
    }
    var itemsHtml = group.items.map(renderItem).join("");
    return (
      '<div class="menu-group"><div class="menu-group__title">' +
      group.title +
      "</div>" +
      colsHtml +
      '<div class="menu-list">' +
      itemsHtml +
      "</div></div>"
    );
  }

  var tabsHtml = sectionKeys
    .map(function (key, i) {
      var section = MENU_DATA[key];
      return (
        '<a href="#menu-' +
        key +
        '" class="menu-tab' +
        (i === 0 ? " is-active" : "") +
        '" data-tab="' +
        key +
        '">' +
        section.title +
        "</a>"
      );
    })
    .join("");
  tabsRoot.innerHTML = tabsHtml;

  var sectionsHtml = sectionKeys
    .map(function (key) {
      var section = MENU_DATA[key];
      var noteHtml = section.note
        ? '<p class="section-lede" style="margin-bottom:32px;">' + section.note + "</p>"
        : "";
      var groupsHtml = section.groups.map(renderGroup).join("");
      return (
        '<section class="menu-section" id="menu-' +
        key +
        '" data-section="' +
        key +
        '"><div class="container"><span class="eyebrow">// ' +
        section.title.toUpperCase() +
        "</span>" +
        noteHtml +
        groupsHtml +
        "</div></section>"
      );
    })
    .join("");
  contentRoot.innerHTML = sectionsHtml;

  /* active tab on scroll */
  var tabLinks = Array.prototype.slice.call(tabsRoot.querySelectorAll("[data-tab]"));
  var sections = Array.prototype.slice.call(contentRoot.querySelectorAll("[data-section]"));

  function setActive(key) {
    tabLinks.forEach(function (link) {
      link.classList.toggle("is-active", link.dataset.tab === key);
    });
  }

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            setActive(entry.target.dataset.section);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach(function (s) {
      observer.observe(s);
    });
  }
})();
