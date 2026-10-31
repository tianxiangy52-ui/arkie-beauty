/* 阿奇美容院 — 交互脚本 */

(function () {
  'use strict';

  /* ---------- 导航滚动状态 ---------- */
  var nav = document.getElementById('nav');
  var lastY = 0;

  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (y > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    lastY = y;
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- 移动端菜单 ---------- */
  var burger = document.getElementById('burger');
  var mobileMenu = document.getElementById('mobileMenu');

  function closeMenu() {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
    burger.setAttribute('aria-label', '打开菜单');
  }

  burger.addEventListener('click', function () {
    var isOpen = mobileMenu.classList.toggle('open');
    document.body.style.overflow = isOpen ? 'hidden' : '';
    burger.setAttribute('aria-label', isOpen ? '关闭菜单' : '打开菜单');
  });

  mobileMenu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });

  /* ---------- 滚动进场动画 ---------- */
  var revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var el = entry.target;
            // 同组元素依次错开出现
            var siblings = Array.prototype.slice.call(
              el.parentElement ? el.parentElement.querySelectorAll('.reveal') : []
            );
            var idx = siblings.indexOf(el);
            var delay = idx > -1 ? Math.min(idx, 5) * 90 : 0;
            el.style.transitionDelay = delay + 'ms';
            el.classList.add('in');
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- Hero 首屏立即进场 ---------- */
  window.addEventListener('load', function () {
    document.querySelectorAll('.hero .reveal').forEach(function (el, i) {
      el.style.transitionDelay = 220 + i * 130 + 'ms';
      requestAnimationFrame(function () { el.classList.add('in'); });
    });
  });

  /* ---------- FAQ 手风琴：同时只展开一项 ---------- */
  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    item.addEventListener('toggle', function () {
      if (item.open) {
        faqItems.forEach(function (other) {
          if (other !== item) other.open = false;
        });
      }
    });
  });

  /* ---------- 预约时段：点击记录选择 ---------- */
  var slots = document.querySelectorAll('.slots li');
  slots.forEach(function (li) {
    li.style.cursor = 'pointer';
    li.addEventListener('click', function () {
      slots.forEach(function (s) { s.style.background = ''; });
      li.style.background = 'rgba(185,146,79,0.16)';
      var time = li.querySelector('span').textContent;
      var cta = document.querySelector('#booking .btn-solid');
      if (cta) {
        cta.textContent = '微信预约 ' + time + ' 面诊';
      }
    });
  });

  /* ---------- 年份自动更新（页脚） ---------- */
  var copyEl = document.querySelector('.footer-bottom p');
  if (copyEl) {
    var year = new Date().getFullYear();
    copyEl.textContent = '© ' + year + ' 阿奇美容院 · 医疗美容门诊';
  }
})();
