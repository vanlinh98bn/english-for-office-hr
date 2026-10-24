/* =========================================================
   MODULE OVERVIEW — 5 bài của một module
   ========================================================= */
(function () {
  "use strict";

  var E = window.EOH;
  var ui = E.ui, esc = ui.esc, icon = E.icon, store = E.store, course = E.course;

  E.screens.module = function (main, params) {
    var mod = course.module(params.id);
    if (!mod) {
      main.innerHTML = '<div class="page">' + ui.error("Không tìm thấy module", "Module “" + params.id + "” không có trong khóa học.",
        '<a class="btn btn--secondary" href="#/course">Xem khóa học</a>') + "</div>";
      return;
    }
    var lv = course.level(mod.levelId);
    var lessons = course.lessonsOfModule(mod.id);
    var st = store.moduleStats(mod.id);
    var prev = course.adjacentModule(mod.id, -1), next = course.adjacentModule(mod.id, 1);
    var nextLesson = lessons.filter(function (l) { return l.available && store.status(l.id) !== "done"; })[0];
    ui.pageTitle(mod.title);

    main.innerHTML =
      '<div class="page page--narrow screen-enter">' +
        '<nav class="crumbs" aria-label="Đường dẫn"><a href="#/course">Khóa học</a>' + icon("chevronRight") +
          '<a href="#/course/' + lv.id + '">' + lv.code + " · " + esc(lv.name) + "</a>" + icon("chevronRight") +
          '<span aria-current="page">Module ' + mod.number + "</span></nav>" +
        '<header class="page-head">' +
          '<p class="eyebrow">' + lv.code + " · Module " + mod.number + "</p>" +
          '<h1 class="display">' + esc(mod.title) + "</h1>" +
          '<p class="lead">' + esc(mod.titleVi) + ". " + esc(mod.summary) + "</p>" +
        "</header>" +
        '<div class="module-summary">' +
          '<div><div class="progress-meta"><span>Tiến độ module</span><strong>' + st.done + "/" + st.total + " bài</strong></div>" +
          ui.segments(mod.id) + "</div>" +
          (nextLesson
            ? '<a class="btn btn--primary" href="#/lesson/' + nextLesson.id + '">' + (store.lesson(nextLesson.id) ? "Tiếp tục bài " : "Bắt đầu bài ") + nextLesson.number + icon("arrowRight") + "</a>"
            : '<p class="small muted">' + (st.available ? "Bạn đã hoàn thành các bài hiện có của module này." : "Module này đang được biên soạn. Chưa có bài nào để học.") + "</p>") +
        "</div>" +
        '<h2 class="section-label">Bài học trong module</h2>' +
        '<ul class="lesson-list">' + lessons.map(function (l) { return ui.lessonRow(l); }).join("") + "</ul>" +
        '<nav class="pager" aria-label="Module trước và sau">' +
          (prev ? '<a class="pager__link" href="#/module/' + prev.id + '">' + icon("arrowLeft") + '<span><span class="small muted">Module trước · ' + prev.levelId.toUpperCase() + "</span><br>" + esc(prev.title) + "</span></a>" : "<span></span>") +
          (next ? '<a class="pager__link pager__link--next" href="#/module/' + next.id + '"><span><span class="small muted">Module tiếp theo · ' + next.levelId.toUpperCase() + "</span><br>" + esc(next.title) + "</span>" + icon("arrowRight") + "</a>" : "<span></span>") +
        "</nav>" +
      "</div>";
  };
})();
