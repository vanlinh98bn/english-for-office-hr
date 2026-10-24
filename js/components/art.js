/* =========================================================
   ART — hình minh họa nhỏ vẽ bằng hình khối đơn giản (SVG)
   và vòng tiến độ. Dùng: EOH.art.desk(200, 150), EOH.art.ring(...)
   ========================================================= */
(function () {
  "use strict";

  var art = {
    // Bàn làm việc: máy tính, cốc cà phê, điện thoại bàn
    desk: function (w, h) {
      return '<svg width="' + w + '" height="' + h + '" viewBox="0 0 200 150" aria-hidden="true" focusable="false">' +
        '<rect x="20" y="100" width="160" height="10" rx="5" fill="#C2410C"/><rect x="34" y="110" width="8" height="34" rx="3" fill="#C2410C"/><rect x="158" y="110" width="8" height="34" rx="3" fill="#C2410C"/>' +
        '<rect x="62" y="40" width="80" height="54" rx="8" fill="#1E2A3B"/><rect x="68" y="46" width="68" height="40" rx="4" fill="#FFE3CC"/><rect x="96" y="94" width="12" height="6" fill="#1E2A3B"/>' +
        '<rect x="76" y="54" width="34" height="5" rx="2.5" fill="#F76707"/><rect x="76" y="64" width="50" height="4" rx="2" fill="#fff"/><rect x="76" y="72" width="42" height="4" rx="2" fill="#fff"/>' +
        '<rect x="150" y="70" width="22" height="30" rx="4" fill="#fff"/><circle cx="161" cy="80" r="5" fill="#F76707"/><rect x="154" y="89" width="14" height="3" rx="1.5" fill="#1E2A3B"/><path d="M161 70V58" stroke="#1E2A3B" stroke-width="2"/>' +
        '<rect x="30" y="80" width="24" height="20" rx="5" fill="#fff"/><path d="M54 85h5a4 4 0 0 1 0 8h-5" stroke="#fff" stroke-width="3" fill="none"/>' +
        '<path d="M36 74c0-4 4-4 4-8M44 74c0-4 4-4 4-8" stroke="#fff" stroke-width="2" fill="none" opacity=".7"/></svg>';
    },

    // Vòng tiến độ. pct: 0–100; inner: HTML đặt giữa vòng
    ring: function (pct, size, stroke, color, track, inner) {
      var r = (size - stroke) / 2, c = 2 * Math.PI * r, half = size / 2;
      var len = Math.max(0, Math.min(100, pct)) * c / 100;
      return '<div class="ring" style="width:' + size + "px;height:" + size + 'px">' +
        '<svg width="' + size + '" height="' + size + '" aria-hidden="true" focusable="false">' +
        '<circle cx="' + half + '" cy="' + half + '" r="' + r + '" fill="none" stroke="' + (track || "var(--color-surface)") + '" stroke-width="' + stroke + '"/>' +
        (len > 0 ? '<circle cx="' + half + '" cy="' + half + '" r="' + r + '" fill="none" stroke="' + color + '" stroke-width="' + stroke + '" stroke-linecap="round" ' +
          'stroke-dasharray="' + len + " " + c + '" transform="rotate(-90 ' + half + " " + half + ')"/>' : "") +
        '</svg><div class="ring__val">' + (inner || "") + "</div></div>";
    }
  };

  window.EOH.art = art;
})();
