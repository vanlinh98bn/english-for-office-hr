/* =========================================================
   DASHBOARD — trang chủ của người học:
   lời chào, ô "Học tiếp", các bài của module đang học, kết quả gần đây;
   cột phải: mục tiêu tuần, cấp độ, bài cần ôn lại.
   ========================================================= */
(function () {
  "use strict";

  var E = window.EOH;
  var ui = E.ui, esc = ui.esc, icon = E.icon, store = E.store, course = E.course, art = E.art;
  var DAYS = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];

  function greeting() {
    var h = new Date().getHours();
    if (h < 11) return "Chào buổi sáng!";
    if (h < 14) return "Chào buổi trưa!";
    if (h < 18) return "Chào buổi chiều!";
    return "Chào buổi tối!";
  }

  // Ô cam "Học tiếp"
  function heroBlock(lesson, isNew) {
    if (!lesson) {
      return '<section class="hero hero--empty">' +
        ui.empty("Bạn đã học hết các bài hiện có", "Bạn có thể làm lại bài cũ hoặc vào mục Ôn tập để ôn những câu còn sai.",
          '<a class="btn btn--primary" href="#/review">Vào Ôn tập</a><a class="btn btn--secondary" href="#/course">Xem lộ trình</a>', true) + "</section>";
    }
    var rec = store.lesson(lesson.id);
    var label, value = 0, total = 0;
    if (rec && rec.stepTotal) {
      value = Math.min(rec.step + 1, rec.stepTotal); total = rec.stepTotal;
      label = "Đã học " + value + "/" + total + " màn";
    } else if (rec && rec.sectionsTotal) {
      value = rec.sectionsSeen.length; total = rec.sectionsTotal;
      label = "Đã xem " + value + "/" + total + " phần";
    }
    return '<section class="hero" aria-labelledby="hero-title">' +
      '<div class="hero__text">' +
        '<span class="chip chip--glass">' + esc(course.lessonLabel(lesson)) + "</span>" +
        '<p class="hero__kicker">' + (isNew ? "Bài học đầu tiên" : rec ? "Tiếp tục bài đang học" : "Bài học tiếp theo") + "</p>" +
        '<h2 class="hero__title" id="hero-title">' + esc(lesson.title) + "</h2>" +
        '<p class="hero__sub">' + esc(lesson.titleVi) + "</p>" +
        (total ? '<div class="hero__progress"><p>' + label + "</p>" + ui.progressBar(value, total, { label: label }) + "</div>" : "") +
        '<a class="btn btn--white" href="#/lesson/' + lesson.id + '">' + (rec ? "Học tiếp" : "Bắt đầu học") + icon("arrowRight") + "</a>" +
      "</div>" +
      '<div class="hero__art">' + art.desk(200, 150) + "</div>" +
    "</section>";
  }

  // Mục tiêu tuần (vòng tròn) + 7 ngày trong tuần
  function weekDays() {
    var days = store.activeDays();
    var monday = store.weekStart();
    var todayKey = store.dayKey(new Date());
    return '<ul class="week">' + DAYS.map(function (lab, i) {
      var d = new Date(monday); d.setDate(monday.getDate() + i);
      var key = store.dayKey(d);
      var on = !!days[key], today = key === todayKey;
      return '<li class="' + (on ? "is-on" : "") + (today ? " is-today" : "") + '"><i aria-hidden="true">' + (on ? icon("flame") : "") + "</i>" + lab +
        '<span class="visually-hidden">' + (on ? " – có học" : " – chưa học") + (today ? " (hôm nay)" : "") + "</span></li>";
    }).join("") + "</ul>";
  }
  function goalBlock() {
    var n = store.weekLessons(), goal = store.WEEK_GOAL;
    var left = Math.max(0, goal - n);
    return '<section class="card box goal-box" aria-labelledby="goal-title"><h3 id="goal-title">Mục tiêu tuần</h3>' +
      '<div class="goal">' + art.ring(Math.round(Math.min(n, goal) / goal * 100), 92, 12, "var(--color-accent)", null, "<b>" + n + "/" + goal + "</b>") +
        '<div><p class="goal__big">Bạn đã luyện tập <strong>' + n + " trên " + goal + " bài</strong> tuần này.</p>" +
        '<p class="small muted">' + (left ? "Còn " + left + " bài để đạt mục tiêu." : "Bạn đã đạt mục tiêu tuần. Tuyệt vời!") + "</p></div></div>" +
      weekDays() + "</section>";
  }
  // Trên điện thoại: hai ô nhỏ (mục tiêu tuần, chuỗi ngày)
  function miniBlock() {
    var n = store.weekLessons(), goal = store.WEEK_GOAL, s = store.streak();
    return '<div class="mini-row">' +
      '<div class="card mini">' + art.ring(Math.round(Math.min(n, goal) / goal * 100), 52, 7, "var(--color-accent)", null, "") +
        "<div><b>" + n + "/" + goal + "</b><span>bài tuần này</span></div></div>" +
      '<div class="card mini"><span class="mini__flame">' + icon("flame") + "</span><div><b>" + s + " ngày</b><span>học liên tục</span></div></div>" +
    "</div>";
  }

  function levelsBlock(currentLevelId) {
    return '<section class="card box" aria-labelledby="levels-title"><h3 id="levels-title">Cấp độ</h3><ul class="levels">' +
      course.levels.map(function (lv) {
        var st = store.levelStats(lv.id);
        return '<li><a href="#/course/' + lv.id + '" style="--lv: var(--lv-' + lv.id + ')" class="lv' + (lv.id === currentLevelId ? " is-current" : "") + (st.done ? "" : " is-empty") + '">' +
          '<span class="lv__code">' + lv.code + "</span>" +
          '<span class="lv__body"><span class="lv__name">' + esc(lv.name) + "</span>" + ui.progressBar(st.done, st.total, { thin: true, label: "Tiến độ " + lv.code }) + "</span>" +
          '<span class="lv__num">' + st.done + "/" + st.total + "</span></a></li>";
      }).join("") + "</ul></section>";
  }

  function reviewBlock() {
    var list = store.reviewList();
    var body = list.length
      ? '<ul class="review-list">' + list.slice(0, 3).map(function (x) {
          var n = (x.record.lastMistakes || []).length;
          return '<li><a class="review-row" href="#/practice/' + x.lesson.id + (n ? "?review=1" : "") + '">' +
            '<span class="review-row__pct">' + x.record.lastPercent + "%</span>" +
            '<span><strong>' + esc(x.lesson.title) + '</strong><span class="small muted">' +
            (n ? n + " câu sai · ôn khoảng " + Math.max(1, Math.ceil(n * 0.7)) + " phút" : "Làm lại để nâng điểm") + "</span></span></a></li>";
        }).join("") + "</ul>" + (list.length > 3 ? '<a class="link-arrow" href="#/review">Xem tất cả ' + list.length + " bài" + icon("arrowRight") + "</a>" : "")
      : '<p class="small muted">Chưa có bài cần ôn. Bài có kết quả dưới ' + store.REVIEW_PERCENT + "% ở lần làm gần nhất sẽ hiện ở đây.</p>";
    return '<section class="card box" aria-labelledby="review-title"><h3 id="review-title">Cần ôn lại</h3>' + body + "</section>";
  }

  // 5 bài của module đang học, dạng thẻ
  function moduleBlock(lesson) {
    if (!lesson) return "";
    var mod = course.module(lesson.moduleId);
    var cur = store.currentLesson();
    return '<section aria-labelledby="mod-title"><div class="sec-title"><h3 id="mod-title">Module ' + mod.number + " · " + esc(mod.title) + "</h3>" +
      '<a class="link-arrow" href="#/course/' + mod.levelId + '">Xem lộ trình' + icon("arrowRight") + "</a></div>" +
      '<ul class="lcards">' + course.lessonsOfModule(mod.id).map(function (l) {
        var st = store.status(l.id), rec = store.lesson(l.id);
        var isCur = cur && cur.id === l.id;
        var cls = st === "done" ? "is-done" : isCur ? "is-current" : st === "soon" ? "is-soon" : "";
        var note = st === "done" ? "Hoàn thành · " + rec.bestPercent + "%" : isCur ? (rec ? "Đang học" : "Học tiếp theo") : st === "in-progress" ? "Đã mở" : st === "soon" ? "Đang biên soạn" : "Chưa học";
        var inner = '<span class="lcard__n">' + (st === "done" ? icon("check") : l.number) + "</span>" +
          '<strong class="lcard__t">' + esc(l.title) + '</strong><span class="lcard__s">' + note + "</span>";
        return "<li>" + (l.available ? '<a class="card lcard ' + cls + '" href="#/lesson/' + l.id + '">' + inner + "</a>" : '<div class="card lcard ' + cls + '">' + inner + "</div>") + "</li>";
      }).join("") + "</ul></section>";
  }

  function historyBlock() {
    var list = store.history(3);
    var body = list.length
      ? '<ol class="card recent">' + list.map(function (x) {
          var h = x.entry, pass = h.percent >= store.PASS_PERCENT;
          return '<li class="recent__row"><span class="recent__icon ' + (pass ? "is-pass" : "is-fail") + '">' + icon(pass ? "check" : "refresh") + "</span>" +
            '<span class="recent__t"><strong>' + esc(x.lesson.title) + '</strong><span class="small muted">' + ui.formatDate(h.date) + "</span></span>" +
            '<span class="recent__score">' + h.score + "/" + h.total + '<span class="visually-hidden">' + (pass ? " – đạt" : " – cần ôn") + "</span></span></li>";
        }).join("") + "</ol>"
      : '<p class="card recent recent--empty small muted">Chưa có kết quả nào. Kết quả mỗi lần luyện tập sẽ được lưu ở đây.</p>';
    return '<section aria-labelledby="recent-title"><div class="sec-title"><h3 id="recent-title">Kết quả gần đây</h3>' +
      (list.length ? '<a class="link-arrow" href="#/progress">Xem tất cả' + icon("arrowRight") + "</a>" : "") + "</div>" + body + "</section>";
  }

  E.screens = E.screens || {};
  E.screens.dashboard = function (main) {
    ui.pageTitle("");
    var lesson = store.currentLesson();
    var focus = lesson || store.lastLesson();
    var totals = store.totals();
    var isNew = !store.history(1).length && totals.done === 0 && !(lesson && store.lesson(lesson.id));

    main.innerHTML =
      '<div class="page screen-enter dash">' +
        '<div class="dash-grid">' +
          '<div class="dash-main">' +
            '<header class="hello"><h1>' + greeting() + ' <span aria-hidden="true">👋</span></h1>' +
              '<p class="muted">' + (isNew
                ? "Chào mừng bạn đến với English for Office &amp; HR — tiếng Anh cho công việc văn phòng và nhân sự, học theo tình huống thật."
                : "Hôm nay học tiếp một bài nhé. Bạn đã hoàn thành " + totals.done + " trên " + totals.total + " bài.") + "</p>" +
              (isNew && !store.isDemo()
                ? '<p class="small muted hello__demo">Muốn xem trước giao diện khi đã học nhiều bài? <button type="button" class="link-btn" data-demo-on>Xem với dữ liệu mẫu</button></p>'
                : "") +
            "</header>" +
            heroBlock(lesson, isNew) +
            miniBlock() +
            moduleBlock(focus) +
            historyBlock() +
          "</div>" +
          '<aside class="dash-aside">' + goalBlock() + levelsBlock(focus ? focus.levelId : "a1") + reviewBlock() +
            (totals.available < totals.total
              ? '<p class="small muted">Hiện có ' + totals.available + " trên " + totals.total + " bài đã có nội dung. Các bài khác đang được biên soạn.</p>"
              : "") +
          "</aside>" +
        "</div>" +
      "</div>";

    var demoBtn = main.querySelector("[data-demo-on]");
    if (demoBtn) demoBtn.addEventListener("click", function () { store.enterDemo(); });
  };
})();
