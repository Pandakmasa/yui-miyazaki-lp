// 身体調整サロン結-YUI- LP
// スマホの固定予約バー：FVの予約ボタン、または最後のCTA（同じ行き先のボタン）が見えている間は隠し、
// 最初の画面でのボタンの重複と、見出し・ボタンへの重なりを避ける。
(function () {
  'use strict';
  var bar = document.getElementById('sticky-cta');
  var targets = [document.getElementById('fv-actions'), document.getElementById('contact')].filter(Boolean);
  if (!bar) return;
  if (!('IntersectionObserver' in window) || !targets.length) {
    bar.classList.remove('is-hidden');
    return;
  }
  var visible = new Set();
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) visible.add(entry.target); else visible.delete(entry.target);
    });
    bar.classList.toggle('is-hidden', visible.size > 0);
  }, { threshold: 0.2 });
  targets.forEach(function (t) { io.observe(t); });
})();
