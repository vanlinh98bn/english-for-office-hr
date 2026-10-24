/* =========================================================
   RESULTS — kết quả lần luyện tập gần nhất của một bài:
   vòng điểm, thời gian học, chuỗi ngày, từ mới, các câu sai.
   ========================================================= */
(function () {
  "use strict";

  var E = window.EOH;
  var ui = E.ui, esc = ui.esc, icon = E.icon, store = E.store, course = E.course;
  var KEYS = ["A", "B", "C", "D", "E"];

  E.screens.results = function (main, params) {
    var meta = course.lesson(params.id);
    if (!meta) {
      main.innerHTML = '<div class="page">' + ui.error("Không tìm thấy bài học", "Mã bài “" + params.id + "” không có trong khóa học.") + "</div>";
      return;
    }
    if (!meta.available) {
      main.innerHTML = '<div class="page">' + ui.unavailable(meta) + "</div>";
      return;
    }
    ui.pageTitle("Kết quả · " + meta.title);
    var rec = store.lesson(meta.id);
    if (!rec || !rec.attempts) {
      main.innerHTML = '<div class="page">' + ui.empty("Chưa có kết quả", "Bạn chưa làm phần luyện tập của bài này.",
        '<a class="btn btn--primary" href="#/practice/' + meta.id + '">Bắt đầu luyện tập</a><a class="btn btn--secondary" href="#/lesson/' + meta.id + '">Về bài học</a>') + "</div>";
      return;
    }
    main.innerHTML = '<div class="page">' + ui.loading("Đang tải kết quả…") + "</div>";
    var alive = true;

    E.loadLesson(meta.id).then(function (L) {
      if (!alive) return;
      var passed = rec.lastPercent >= store.PASS_PERCENT;
      var wrong = (L.practice || []).filter(function (q) { return rec.lastMistakes.indexOf(q.id) !== -1; });
      var answers = rec.lastAnswers || {};
      var next = course.adjacentLesson(meta.id, 1);
      var streak = store.streak();
      var color = passed ? "var(--color-success-btn)" : "var(--color-warning-ring)";
      var title = rec.lastPercent === 100 ? "Xuất sắc! 🎉" : passed ? "Hoàn thành bài học! 🎉" : "Gần được rồi!";

      document.body.classList.add("is-flow");
      main.innerHTML =
        '<div class="result screen-enter">' +
          '<header class="flow__top"><div class="flow__top-in">' +
            '<a class="flow__x" href="#/lesson/' + meta.id + '" aria-label="Đóng, về trang mở đầu bài">' + icon("x") + "</a>" +
            '<div class="flow__bar is-complete" aria-hidden="true"><i style="width:100%"></i></div>' +
          "</div></header>" +
          '<div class="result__body">' +
            '<h1 class="result__title">' + title + "</h1>" +
            '<p class="result__lesson">' + esc(meta.title) + "</p>" +
            '<div class="result-hero" aria-label="Điểm ' + rec.lastScore + " trên " + rec.lastTotal + '">' +
              E.art.ring(rec.lastPercent, 190, 18, color, passed ? "var(--color-success-soft)" : "var(--color-warning-soft)",
                '<span class="result-hero__num">' + rec.lastScore + "/" + rec.lastTotal + "</span>" +
                '<span class="tag ' + (passed ? "tag--done" : "tag--review") + '">' + rec.lastPercent + "% · " + (passed ? "Đạt" : "Chưa đạt") + "</span>") +
            "</div>" +
            '<p class="result__note">' + (passed ? "Kết quả đã được ghi vào tiến độ." : "Cần đạt từ " + store.PASS_PERCENT + "% để hoàn thành bài. Bài này sẽ nằm trong mục Ôn tập.") +
              " Lần làm thứ " + rec.attempts + " · cao nhất " + rec.bestPercent + "%." + (store.isDemo() ? " (Chế độ dữ liệu mẫu: không lưu.)" : "") + "</p>" +
            '<div class="stats3">' +
              '<div class="st"><b>' + (rec.lastMinutes ? rec.lastMinutes + " phút" : "—") + "</b><span>thời gian học</span></div>" +
              '<div class="st"><b class="text-accent">' + streak + " ngày</b><span>học liên tục</span></div>" +
              '<div class="st"><b>' + (L.vocabulary ? L.vocabulary.length : 0) + "</b><span>từ mới</span></div>" +
            "</div>" +
            '<h2 class="result__h2">' + (wrong.length ? wrong.length + " câu cần xem lại" : "Không có câu sai") + "</h2>" +
            (wrong.length
              ? '<ol class="mistake-review">' + wrong.map(function (q) {
                  var mine = answers[q.id];
                  return "<li>" +
                    (q.context ? '<p class="small muted">' + esc(q.context) + "</p>" : "") +
                    '<p class="mistake-review__q">' + esc(q.prompt).replace("___", '<span class="gap">&nbsp;</span>') + "</p>" +
                    '<p class="mistake-review__line is-wrong">' + icon("x") + "<span>Bạn chọn: " + (mine !== null && mine !== undefined ? KEYS[mine] + ". " + esc(q.options[mine]) : "—") + "</span></p>" +
                    '<p class="mistake-review__line is-right">' + icon("check") + "<span>Đáp án: " + KEYS[q.answer] + ". " + esc(q.options[q.answer]) + "</span></p>" +
                    '<p class="mistake-review__exp">' + esc(q.explanation) + "</p></li>";
                }).join("") + "</ol>"
              : '<p class="muted">Bạn trả lời đúng tất cả các câu trong lần làm gần nhất.</p>') +
          "</div>" +
          '<footer class="flow__foot"><div class="flow__foot-in flow__foot-in--stack">' +
            (passed && next && next.available ? '<a class="btn btn--primary" href="#/lesson/' + next.id + '">Bài tiếp theo' + icon("arrowRight") + "</a>" : "") +
            (wrong.length ? '<a class="btn ' + (passed ? "btn--secondary" : "btn--primary") + '" href="#/practice/' + meta.id + '?review=1">Ôn lại ' + wrong.length + " câu sai</a>" : "") +
            '<div class="result__more"><a class="link-arrow" href="#/practice/' + meta.id + '">' + icon("refresh") + "Làm lại luyện tập</a>" +
              '<a class="link-arrow" href="#/">' + icon("home") + "Về trang chủ</a></div>" +
          "</div></footer>" +
        "</div>";
    }).catch(function (err) {
      if (!alive) return;
      main.innerHTML = '<div class="page">' + ui.error("Không mở được kết quả", err.message) + "</div>";
    });

    return function () { alive = false; };
  };
})();
