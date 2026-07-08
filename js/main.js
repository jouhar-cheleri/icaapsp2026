/* =========================================================================
   ICAAP & SP 2026 — site scripts
   1) Mobile navigation toggle
   2) Subtle mathematical-formula background (canvas), drifting very slowly.
      Honors prefers-reduced-motion by rendering a single static frame.
   ========================================================================= */
(function () {
  "use strict";

  /* ---------------------- mobile nav toggle --------------------------- */
  var nav = document.querySelector(".nav");
  var toggle = document.querySelector(".nav__toggle");
  if (nav && toggle) {
    toggle.addEventListener("click", function () {
      var open = nav.getAttribute("data-open") === "true";
      nav.setAttribute("data-open", String(!open));
      toggle.setAttribute("aria-expanded", String(!open));
    });
    // Close the menu when a link is chosen (mobile)
    nav.querySelectorAll(".nav__links a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.setAttribute("data-open", "false");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* --------------------- math formula background ---------------------- */
  var canvas = document.getElementById("math-bg");
  if (!canvas || !canvas.getContext) return;
  var ctx = canvas.getContext("2d");

  var FORMULAS = [
    "P(A\\,|\\,B) = \\frac{P(B|A)P(A)}{P(B)}",
    "dX_t = \\mu\\,dt + \\sigma\\,dW_t",
    "P(N=k) = \\frac{\\lambda^{k} e^{-\\lambda}}{k!}",
    "\\pi = \\pi Q",
    "E[X] = \\int x\\,f(x)\\,dx",
    "\\lim_{n\\to\\infty} \\frac{S_n}{n} = \\mu",
    "\\rho = \\lambda / \\mu",
    "L = \\lambda W",
    "\\sum_{n=0}^{\\infty} p_n = 1",
    "\\Phi(z) = \\tfrac{1}{\\sqrt{2\\pi}} e^{-z^2/2}",
    "M/M/1",
    "\\mathbb{P}(T > t) = e^{-\\lambda t}",
    "Var(X) = E[X^2] - (E[X])^2",
    "Q_{ij} \\ge 0",
    "f(x) = \\theta e^{-\\theta x}"
  ];
  // Plain-text glyph forms so we don't need a LaTeX renderer.
  var TEXT = [
    "P(A|B) = P(B|A)P(A) / P(B)",
    "dXt = μ dt + σ dWt",
    "P(N=k) = λ^k e^{-λ} / k!",
    "π = πQ",
    "E[X] = ∫ x f(x) dx",
    "Sn / n → μ",
    "ρ = λ / μ",
    "L = λW",
    "Σ pn = 1",
    "Φ(z) = (1/√2π) e^{−z²/2}",
    "M / M / 1",
    "P(T > t) = e^{−λt}",
    "Var(X) = E[X²] − (E[X])²",
    "Qij ≥ 0",
    "f(x) = θ e^{−θx}"
  ];

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var items = [];
  var dpr = Math.min(window.devicePixelRatio || 1, 2);

  function seedItems() {
    var w = window.innerWidth, h = window.innerHeight;
    var count = Math.max(10, Math.round((w * h) / 130000));
    items = [];
    for (var i = 0; i < count; i++) {
      items.push({
        text: TEXT[i % TEXT.length],
        x: Math.random() * w,
        y: Math.random() * h,
        size: 13 + Math.random() * 20,
        vy: 0.05 + Math.random() * 0.12,     // slow upward drift
        rot: (Math.random() - 0.5) * 0.5,
        alpha: 0.05 + Math.random() * 0.08
      });
    }
  }

  function resize() {
    var w = window.innerWidth, h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    seedItems();
  }

  function draw() {
    var w = window.innerWidth, h = window.innerHeight;
    ctx.clearRect(0, 0, w, h);
    for (var i = 0; i < items.length; i++) {
      var it = items[i];
      ctx.save();
      ctx.translate(it.x, it.y);
      ctx.rotate(it.rot);
      ctx.font = "italic " + it.size + "px Georgia, 'Times New Roman', serif";
      ctx.fillStyle = "rgba(15, 92, 82, " + it.alpha + ")";
      ctx.fillText(it.text, 0, 0);
      ctx.restore();
    }
  }

  function tick() {
    var h = window.innerHeight;
    for (var i = 0; i < items.length; i++) {
      var it = items[i];
      it.y -= it.vy;
      if (it.y < -30) { it.y = h + 30; it.x = Math.random() * window.innerWidth; }
    }
    draw();
    requestAnimationFrame(tick);
  }

  var rt;
  window.addEventListener("resize", function () {
    clearTimeout(rt);
    rt = setTimeout(function () { resize(); if (reduced) draw(); }, 200);
  });

  resize();
  if (reduced) { draw(); } else { requestAnimationFrame(tick); }
})();
