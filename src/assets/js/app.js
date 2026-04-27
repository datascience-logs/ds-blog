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

  /* ── Back to Top ─────────────────────────────────────── */
  var backToTop = document.getElementById('back-to-top');
  
  function toggleBackToTop() {
    if (!backToTop) return;
    if (window.scrollY > 300) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }

  /* ── Share Button ─────────────────────────────────────── */
  function initShareButtons() {
    var shareBtn = document.getElementById('share-post');
    if (!shareBtn) return;

    shareBtn.addEventListener('click', function() {
      if (navigator.share) {
        navigator.share({
          title: document.title,
          url: window.location.href
        }).catch(console.error);
      } else {
        // Fallback: Copy to clipboard
        navigator.clipboard.writeText(window.location.href).then(function() {
          var originalText = shareBtn.innerHTML;
          shareBtn.innerHTML = 'Link Copied!';
          setTimeout(function() {
            shareBtn.innerHTML = originalText;
          }, 2000);
        });
      }
    });
  }

  /* ── Event listeners ──────────────────────────────────── */
  window.addEventListener('scroll', function() {
    updateProgress();
    toggleBackToTop();
  }, { passive: true });

  /* ── Init ─────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    updateProgress();
    setActiveNav();
    initFadeIn();
    initShareButtons();
  });
})();
