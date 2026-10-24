/* =========================================================
   REVIEW — Ôn tập: các bài có câu sai ở lần luyện tập gần nhất
   và các bài dưới 80%, xếp từ điểm thấp đến cao.
   ========================================================= */
(function () {
  "use strict";

  var E = window.EOH;
  var ui = E.ui, esc = ui.esc, icon = E.icon, store = E.store, course = E.course;

  function lessonsToReview() {
    return course.lessons
      .map(function (l) { return { lesson: l, record: store.lesson(l.id) }; })
      .filter(function (x) {
        var r = x.record;
        return x.lesson.available && r && r.lastPercent !== null && r.lastPercent !== undefined &&
          ((r.lastMistakes && r.lastMistakes.length) || r.lastPercent < store.REVIEW_PERCENT);
      })
      .sort(function (a, b) { return a.record.lastPercent - b.record.lastPercent; });
  }

  E.screens.review = function (main) {
    ui.pageTitle("Ôn tập");
    var list = lessonsToReview();
    var wrongTotal = list.reduce(function (n, x) { return n + (x.record.lastMistakes || []).length; }, 0);

    main.innerHTML =
      '<div class="page page--narrow screen-enter">' +
        '<header class="page-head"><h1 class="display">Ôn tập</h1>' +
          '<p class="lead">' + (list.length
            ? "Bạn có " + wrongTotal + " câu sai trong " + list.length + " bài. Ôn lại những câu này là cách nhanh nhất để nhớ lâu."
            : "Chưa có câu sai nào cần ôn.") + "</p></header>" +
        (list.length
          ? '<ul class="review-cards">' + list.map(function (x) {
              var l = x.lesson, r = x.record, n = (r.lastMistakes || []).length;
              var low = r.lastPercent < store.REVIEW_PERCENT;
              return '<li class="card review-card">' +
                '<span class="review-row__pct' + (low ? "" : " is-ok") + '">' + r.lastPercent + "%</span>" +
                '<div class="review-card__body"><strong>' + esc(l.title) + '</strong><span class="small muted">' + esc(course.lessonLabel(l)) +
                  " · " + (n ? n + " câu sai" : "không có câu sai") + (low ? " · dưới " + store.REVIEW_PERCENT + "%" : "") + "</span></div>" +
                '<div class="review-card__actions">' +
                  (n ? '<a class="btn btn--primary btn--sm" href="#/practice/' + l.id + '?review=1">Ôn ' + n + " câu sai</a>" : "") +
                  '<a class="btn btn--secondary btn--sm" href="#/practice/' + l.id + '">' + icon("refresh") + "Làm lại</a>" +
                "</div></li>";
            }).join("") + "</ul>"
          : ui.empty("Không có gì cần ôn", "Khi bạn làm sai câu nào trong phần luyện tập, bài đó sẽ hiện ở đây để ôn lại.",
              '<a class="btn btn--primary" href="#/">Về trang chủ</a><a class="btn btn--secondary" href="#/course">Xem lộ trình</a>', true)) +
      "</div>";
  };
})();
