/* ============================================================================
 * 5 MINUTE AI NEWS — homepage behavior
 * The page itself is now prerendered by the pipeline (see templates/ and
 * app_v2/steps/siteupdate.py) — this file no longer renders any data blob,
 * it only wires up the subscribe form.
 * ========================================================================= */
(function () {
  "use strict";

  /* ——— Subscribe form: no backend wired yet — just acknowledge input. ——— */
  function initSubscribeForm() {
    const form = document.querySelector("[data-subscribe-form]");
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thanks — subscriber signup isn't wired to a backend yet.");
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initSubscribeForm();
  });
})();
