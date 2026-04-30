/* OTURK — site etkileşimleri (Apple-tarzı sade) */
(() => {
  'use strict';

  // Yıl
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobil menü
  const toggle = document.getElementById('globalnav-menu');
  const list = document.querySelector('.globalnav-list');
  if (toggle && list) {
    toggle.addEventListener('click', () => {
      const open = list.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    list.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        list.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Header scroll state
  const nav = document.getElementById('globalnav');
  const onScroll = () => {
    if (nav) nav.classList.toggle('is-scrolled', window.scrollY > 4);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

})();
