/* ===========================================================
   ART DECO — main.js
   Header sticky · Mega-menu · Mobile nav · Scroll reveal · Filters
   Vanilla JS, no dependencies.
   =========================================================== */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    initStickyHeader();
    initMegaMenu();
    initMobileNav();
    initScrollReveal();
    initFilters();
    initSliders();
    initContactForm();
    initPartnersMarquee();
  });

  /* ---------- Sticky header on scroll ---------- */
  function initStickyHeader() {
    var header = document.querySelector('.site-header');
    if (!header) return;
    var onScroll = function () {
      if (window.scrollY > 80) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- Mega-menu (hover on desktop) ---------- */
  function initMegaMenu() {
    var item = document.querySelector('.has-mega');
    if (!item) return;

    var open = function () { item.classList.add('open'); };
    var close = function () { item.classList.remove('open'); };

    item.addEventListener('mouseenter', open);
    item.addEventListener('mouseleave', close);

    // Keyboard accessibility
    var trigger = item.querySelector('.nav-link');
    if (trigger) {
      trigger.addEventListener('focus', open);
      item.addEventListener('focusout', function (e) {
        if (!item.contains(e.relatedTarget)) close();
      });
    }
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });
  }

  /* ---------- Mobile fullscreen nav ---------- */
  function initMobileNav() {
    var burger = document.querySelector('.hamburger');
    var nav = document.querySelector('.mobile-nav');
    if (!burger || !nav) return;

    var closeBtn = nav.querySelector('.mobile-nav__close');
    var matItem = nav.querySelector('.mobile-nav__item--has-sub');
    var matBtn = matItem ? matItem.querySelector('.mobile-nav__btn') : null;

    var openNav = function () {
      nav.classList.add('open');
      burger.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    };

    var closeNav = function () {
      nav.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    };

    burger.addEventListener('click', openNav);
    if (closeBtn) closeBtn.addEventListener('click', closeNav);

    if (matBtn && matItem) {
      matBtn.addEventListener('click', function () {
        matItem.classList.toggle('is-open');
      });
    }

    var links = nav.querySelectorAll('.mobile-nav__link, .mobile-nav__sub-all, .mobile-nav__sub-group a');
    links.forEach(function (link) {
      link.addEventListener('click', closeNav);
    });
  }

  /* ---------- Scroll reveal via IntersectionObserver ---------- */
  function initScrollReveal() {
    var els = document.querySelectorAll('.reveal');
    if (!els.length) return;

    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    els.forEach(function (el, i) {
      // subtle stagger for grouped elements
      el.style.transitionDelay = (i % 4) * 80 + 'ms';
      io.observe(el);
    });
  }

  /* ---------- Filter buttons (materiale / proiecte) ---------- */
  function initFilters() {
    var bars = document.querySelectorAll('.filter-bar');
    bars.forEach(function (bar) {
      var buttons = bar.querySelectorAll('.filter-btn');
      var targetSel = bar.getAttribute('data-target');
      var items = targetSel ? document.querySelectorAll(targetSel + ' [data-cat]') : [];

      buttons.forEach(function (btn) {
        btn.addEventListener('click', function () {
          buttons.forEach(function (b) { b.classList.remove('is-active'); });
          btn.classList.add('is-active');
          var filter = btn.getAttribute('data-filter');

          items.forEach(function (item) {
            var cats = (item.getAttribute('data-cat') || '').split(' ');
            var show = filter === 'all' || cats.indexOf(filter) !== -1;
            item.style.display = show ? '' : 'none';
          });
        });
      });
    });
  }

  /* ---------- Project sliders (prev/next, no library) ---------- */
  function initSliders() {
    var wraps = document.querySelectorAll('.slider-wrap');
    wraps.forEach(function (wrap) {
      var track = wrap.querySelector('.slider-track');
      var slides = wrap.querySelectorAll('.slide');
      var prev = wrap.querySelector('.slider-btn--prev');
      var next = wrap.querySelector('.slider-btn--next');
      if (!track || !slides.length) return;

      var index = 0;

      var perView = function () {
        if (window.innerWidth <= 768) return 1;
        if (window.innerWidth <= 1024) return 2;
        return 3;
      };

      var maxIndex = function () { return Math.max(0, slides.length - perView()); };

      var update = function () {
        if (index > maxIndex()) index = maxIndex();
        var slide = slides[0];
        var step = slide.getBoundingClientRect().width +
          parseFloat(getComputedStyle(slide).marginRight || 0);
        track.style.transform = 'translateX(' + (-step * index) + 'px)';
        if (prev) prev.disabled = index <= 0;
        if (next) next.disabled = index >= maxIndex();
      };

      if (next) next.addEventListener('click', function () {
        if (index < maxIndex()) { index++; update(); }
      });
      if (prev) prev.addEventListener('click', function () {
        if (index > 0) { index--; update(); }
      });

      var resizeTimer;
      window.addEventListener('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(update, 150);
      });

      update();
    });
  }

  /* ---------- Partners infinite marquee ---------- */
  function initPartnersMarquee() {
    var list = document.querySelector('.partners-list');
    if (!list) return;
    var logos = Array.prototype.slice.call(list.querySelectorAll('.partner-logo'));
    if (!logos.length) return;

    var track = document.createElement('div');
    track.className = 'partners-track';
    logos.forEach(function (logo) { track.appendChild(logo); });

    // Duplicate logos inside same track for seamless loop (translateX -50%)
    logos.forEach(function (logo) {
      var clone = logo.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      track.appendChild(clone);
    });

    list.innerHTML = '';
    list.appendChild(track);
    list.classList.add('is-marquee');
  }

  /* ---------- Contact form (no backend) ---------- */
  function initContactForm() {
    var form = document.querySelector('.contact-form');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var note = form.querySelector('.form-note');
      if (note) {
        note.textContent = 'Thank you. Your message has been recorded — we will be in touch soon.';
        note.style.color = 'var(--color-accent)';
      }
      form.reset();
    });
  }
})();
