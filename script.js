(function () {
  "use strict";

  // Mobile navigation toggle
  var navToggle = document.getElementById("nav-toggle");
  var navMenu = document.getElementById("primary-nav");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      var expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
      navMenu.classList.toggle("is-open", !expanded);
    });

    navMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navToggle.setAttribute("aria-expanded", "false");
        navMenu.classList.remove("is-open");
      });
    });
  }

  // Case study category filter
  var filterButtons = document.querySelectorAll(".filter-btn");
  var caseCards = document.querySelectorAll(".case-card");

  filterButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var filter = btn.getAttribute("data-filter");

      filterButtons.forEach(function (b) {
        var active = b === btn;
        b.classList.toggle("is-active", active);
        b.setAttribute("aria-selected", String(active));
      });

      caseCards.forEach(function (card) {
        var category = card.getAttribute("data-category");
        var visible = filter === "all" || category === filter;
        card.classList.toggle("is-hidden", !visible);
      });
    });
  });

  // 7-Rule Delivery Playbook accordion
  var accTriggers = document.querySelectorAll(".acc-trigger");

  accTriggers.forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      var isOpen = trigger.getAttribute("aria-expanded") === "true";
      var panel = trigger.nextElementSibling;
      trigger.setAttribute("aria-expanded", String(!isOpen));
      if (panel) {
        panel.hidden = isOpen;
      }
    });
  });

  // Copy email button
  var copyBtn = document.getElementById("copy-email-btn");
  var emailLink = document.getElementById("email-text");

  if (copyBtn && emailLink) {
    copyBtn.addEventListener("click", function () {
      var email = emailLink.textContent.trim();
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(function () {
          copyBtn.textContent = "Copied";
          window.setTimeout(function () {
            copyBtn.textContent = "Copy Email";
          }, 2000);
        });
      } else {
        window.location.href = "mailto:" + email;
      }
    });
  }
})();
