/* =========================================================
   COURSE MAP — lộ trình của một cấp độ: chọn cấp độ ở trên,
   mỗi module là một dải màu, các bài là vòng tròn nối nhau.
   ========================================================= */
(function () {
  "use strict";

  var E = window.EOH;
  var ui = E.ui, esc = ui.esc, icon = E.icon, store = E.store, course = E.course;
  var OFFSETS = [0, 56, 0, -56, 0]; // vị trí lệch trái/phải của 5 bài, tạo đường đi uốn lượn

  function levelPills(activeId) {
    return '<nav class="level-pills" aria-label="Chọn cấp độ">' + course.levels.map(function (lv) {
      var on = lv.id === activeId;
      return '<a class="level-pill' + (on ? " is-active" : "") + '" style="--lv: var(--lv-' + lv.id + ')" href="#/course/' + lv.id + '"' +
        (on ? ' aria-current="page"' : "") + ">" + lv.code + '<span class="visually-hidden"> · ' + esc(lv.name) + "</span></a>";
    }).join("") + "</nav>";
  }

  function moduleMap(mod, cur) {
    var st = store.moduleStats(mod.id);
    var lessons = course.lessonsOfModule(mod.id);
    var started = st.done > 0 || lessons.some(function (l) { return store.lesson(l.id); });
    return '<section class="map-mod" aria-labelledby="mm-' + mod.id + '">' +
      '<a class="map-head' + (started ? "" : " is-quiet") + '" href="#/module/' + mod.id + '">' +
        '<span class="map-head__ico">' + icon(st.done === st.total ? "check" : "user") + "</span>" +
        '<span><strong id="mm-' + mod.id + '">Module ' + mod.number + " · " + esc(mod.title) + "</strong>" +
        "<span>" + esc(mod.titleVi) + " · " + st.done + "/" + st.total + " bài</span></span></a>" +
      '<ol class="map">' + lessons.map(function (l, i) {
        var s = store.status(l.id);
        var isCur = cur && cur.id === l.id;
        var cls = s === "done" ? "is-done" : isCur ? "is-current" : s === "soon" ? "is-soon" : "";
        var label = s === "done" ? "đã hoàn thành" : isCur ? "bài tiếp theo" : s === "in-progress" ? "đang học" : s === "soon" ? "đang biên soạn" : "chưa học";
        var node = '<span class="node">' + (s === "done" ? icon("check") : l.number) + "</span>" +
          '<span class="node-label">' + esc(l.title) + '<span class="visually-hidden"> – ' + label + "</span></span>";
        return '<li class="node-wrap ' + cls + '" style="--dx:' + OFFSETS[i % OFFSETS.length] + 'px">' +
          (isCur ? '<span class="start-pop" aria-hidden="true">' + (store.lesson(l.id) ? "HỌC TIẾP" : "BẮT ĐẦU") + "</span>" : "") +
          (l.available ? '<a class="node-link" href="#/lesson/' + l.id + '">' + node + "</a>" : '<div class="node-link">' + node + "</div>") +
          "</li>";
      }).join("") + "</ol></section>";
  }

  E.screens.course = function (main, params) {
    var current = store.currentLesson() || store.lastLesson();
    var levelId = params.level || (current ? current.levelId : "a1");
    var lv = course.level(levelId);
    if (!lv) {
      main.innerHTML = '<div class="page">' + ui.error("Không tìm thấy cấp độ", "Cấp độ “" + levelId + "” không có trong khóa học.",
        '<a class="btn btn--secondary" href="#/course">Xem lộ trình</a>') + "</div>";
      return;
    }
    ui.pageTitle("Lộ trình " + lv.code);
    var st = store.levelStats(lv.id);
    var next = course.levels[lv.order];
    var cur = store.currentLesson();

    main.innerHTML =
      '<div class="page page--map screen-enter" style="--lv: var(--lv-' + lv.id + ')">' +
        levelPills(lv.id) +
        '<header class="level-card">' +
          '<div class="level-card__top"><span class="level-card__code">' + lv.code + "</span>" +
            '<div><h1 class="level-card__name">' + esc(lv.name) + '</h1><p class="small muted">' + esc(lv.nameVi) + " · " + st.done + "/" + st.total + " bài hoàn thành</p></div></div>" +
          ui.progressBar(st.done, st.total, { label: "Tiến độ cấp " + lv.code }) +
          '<details class="level-card__more"><summary>Cấp độ này học gì?</summary><p>' + esc(lv.description) + "</p>" +
            '<ul class="outcomes">' + lv.outcomes.map(function (o) { return "<li>" + icon("check") + "<span>" + esc(o) + "</span></li>"; }).join("") + "</ul></details>" +
        "</header>" +
        course.modulesOf(lv.id).map(function (m) { return moduleMap(m, cur); }).join("") +
        (next ? '<a class="map-next" href="#/course/' + next.id + '" style="--lv: var(--lv-' + next.id + ')"><span class="map-next__code">' + next.code + "</span>" +
          '<span><span class="small muted">Cấp độ tiếp theo</span><strong>' + esc(next.name) + "</strong></span>" + icon("arrowRight") + "</a>" : "") +
      "</div>";
  };
})();
