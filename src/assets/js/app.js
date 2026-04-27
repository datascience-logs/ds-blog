/**
 * app.js — Data Science Diaries
 * Reading progress, active nav, scroll animations
 */

(function () {
  'use strict';

  /* ── Reading progress bar ─────────────────────────────── */
  var progressBar = document.getElementById('reading-progress');

  function updateProgress() {
    if (!progressBar) return;
    var scrollTop    = window.scrollY || document.documentElement.scrollTop;
    var docHeight    = document.documentElement.scrollHeight - window.innerHeight;
    var pct          = docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0;
    progressBar.style.width = pct + '%';
    progressBar.setAttribute('aria-valuenow', pct);
  }

  /* ── Active nav link ──────────────────────────────────── */
  function setActiveNav() {
    var path  = window.location.pathname;
    var links = document.querySelectorAll('.nav-links a');

    links.forEach(function (link) {
      var href = link.getAttribute('href');
      var isActive = (href === '/' && path === '/') ||
                     (href !== '/' && path.startsWith(href));
      link.classList.toggle('active', isActive);
      if (isActive) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  /* ── Intersection-observer fade-in ───────────────────── */
  function initFadeIn() {
    if (!('IntersectionObserver' in window)) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(function (el) {
      el.style.animationPlayState = 'paused';
      observer.observe(el);
    });
  }

  /* ── Event listeners ──────────────────────────────────── */
  window.addEventListener('scroll', updateProgress, { passive: true });

  /* ── Init ─────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    updateProgress();
    setActiveNav();
    initFadeIn();
  });
})();
