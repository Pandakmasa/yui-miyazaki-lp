// 身体調整サロン結-YUI- LP
// スマホの固定予約バー：最後のCTA（同じ行き先のボタン）が見えている間は隠し、ボタンの重複を避ける。
(function () {
  'use strict';
  var bar = document.getElementById('sticky-cta');
  var finalCta = document.getElementById('contact');
  if (bar && finalCta && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        bar.classList.toggle('is-hidden', entry.isIntersecting);
      });
    }, { threshold: 0.35 }).observe(finalCta);
  }
})();
