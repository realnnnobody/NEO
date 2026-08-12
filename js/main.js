/* NEO Lounge Bar — shared behaviour for every page */

(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------- Boot sequence ---------------- */
  var boot = document.querySelector("[data-boot]");
  if (boot) {
    var seen = false;
    try {
      seen = sessionStorage.getItem("neo-booted") === "1";
    } catch (e) {
      /* sessionStorage unavailable — treat as not seen */
    }

    if (reduceMotion || seen) {
      boot.hidden = true;
    } else {
      var lines = [
        "NEO.SYSTEM — ІНІЦІАЛІЗАЦІЯ...",
        "ПІДКЛЮЧЕННЯ: БАР ................ OK",
        "ПІДКЛЮЧЕННЯ: КУХНЯ .............. OK",
        "ПІДКЛЮЧЕННЯ: VR × 4 .............. OK",
        "ПІДКЛЮЧЕННЯ: PLAYSTATION 5 ....... OK",
        "ПІДКЛЮЧЕННЯ: СИМУЛЯТОР ........... OK",
        "РІВЕНЬ ЗАНУРЕННЯ: МАКСИМАЛЬНИЙ",
      ];
      var log = boot.querySelector("[data-boot-log]");
      var delay = 0;
      lines.forEach(function (text, i) {
        var span = document.createElement("span");
        span.textContent = text;
        span.style.animationDelay = delay + "ms";
        log.appendChild(span);
        delay += 220;
      });
      var cursor = document.createElement("span");
      cursor.className = "boot__cursor";
      log.appendChild(cursor);

      var closeBoot = function () {
        try {
          sessionStorage.setItem("neo-booted", "1");
        } catch (e) {}
        boot.classList.add("is-leaving");
        window.setTimeout(function () {
          boot.hidden = true;
        }, 500);
      };

      var autoTimer = window.setTimeout(closeBoot, delay + 700);
      boot.addEventListener("click", function () {
        window.clearTimeout(autoTimer);
        closeBoot();
      });
    }
  }

  /* ---------------- Nav scroll state ---------------- */
  var nav = document.querySelector("[data-nav]");
  if (nav) {
    var onScroll = function () {
      if (window.scrollY > 8) {
        nav.classList.add("is-scrolled");
      } else {
        nav.classList.remove("is-scrolled");
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------------- Mobile nav toggle ---------------- */
  var toggle = document.querySelector("[data-nav-toggle]");
  var mobileMenu = document.querySelector("[data-nav-mobile]");
  if (toggle && mobileMenu) {
    toggle.addEventListener("click", function () {
      var isOpen = mobileMenu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      document.body.style.overflow = isOpen ? "hidden" : "";
    });
    mobileMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileMenu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  /* ---------------- Digital rain background ---------------- */
  var canvas = document.querySelector("[data-rain]");
  if (canvas && !reduceMotion) {
    var ctx = canvas.getContext("2d");
    var glyphs = "01アイウエオカキクケコサシスセソNEO";
    var fontSize = 16;
    var columns, drops;

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      columns = Math.floor(canvas.width / fontSize);
      drops = new Array(columns).fill(0).map(function () {
        return Math.floor((Math.random() * canvas.height) / fontSize) * -1;
      });
    }

    function draw() {
      ctx.fillStyle = "rgba(7, 8, 10, 0.14)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = fontSize + "px 'JetBrains Mono', monospace";

      for (var i = 0; i < columns; i++) {
        var char = glyphs[Math.floor(Math.random() * glyphs.length)];
        var x = i * fontSize;
        var y = drops[i] * fontSize;
        ctx.fillStyle = Math.random() > 0.95 ? "#e9fbf1" : "rgba(60, 255, 158, 0.75)";
        ctx.fillText(char, x, y);
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    resize();
    window.addEventListener("resize", resize);
    window.setInterval(draw, 55);
  }
})();
