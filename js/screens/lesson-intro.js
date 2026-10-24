/* =========================================================
   LESSON INTRO — trang mở đầu một bài (#/lesson/<mã bài>).
   Tên bài, thời lượng, danh sách các phần (bấm để vào thẳng phần đó)
   và nút "Bắt đầu học" / "Học tiếp".
   ========================================================= */
(function () {
  "use strict";

  var E = window.EOH;
  var ui = E.ui, esc = ui.esc, icon = E.icon, store = E.store, course = E.course;

  E.screens.lesson = function (main, params) {
    var meta = course.lesson(params.id);
    if (!meta) {
      main.innerHTML = '<div class="page">' + ui.error("Không tìm thấy bài học", "Mã bài “" + params.id + "” không có trong khóa học.",
        '<a class="btn btn--secondary" href="#/course">Xem lộ trình</a>') + "</div>";
      return;
    }
    ui.pageTitle(meta.title);
    if (!meta.available) {
      main.innerHTML = '<div class="page">' + ui.unavailable(meta) + "</div>";
      return;
    }
    main.innerHTML = '<div class="page">' + ui.loading("Đang tải bài học…") + "</div>";
    var alive = true;

    E.loadLesson(meta.id).then(function (L) {
      if (!alive) return;
      L.id = meta.id;
      draw(L);
    }).catch(function (err) {
      if (!alive) return;
      main.innerHTML = '<div class="page">' + ui.error("Không mở được bài học", err.message + " Hãy kiểm tra lại file và thử lại.",
        '<button type="button" class="btn btn--dark" data-retry>Thử lại</button><a class="btn btn--secondary" href="#/">Về trang chủ</a>') + "</div>";
      main.querySelector("[data-retry]").addEventListener("click", function () { E.router.resolve(); });
    });

    function draw(L) {
      var plan = E.lessonPlan(L);
      var total = plan.steps.length;
      var rec = store.lesson(meta.id);
      var status = store.status(meta.id);
      var resume = rec && rec.stepTotal === total && rec.step > 0 && rec.step < total - 1 ? rec.step : null;
      var seen = rec ? rec.sectionsSeen : [];
      var curSec = resume !== null
        ? plan.sections.filter(function (s) { return resume >= s.first && resume < s.first + s.count; })[0]
        : (status === "done" ? null : plan.sections[0]);
      var mod = course.module(meta.moduleId);
      var lv = course.level(meta.levelId);

      document.body.classList.add("is-flow");
      main.innerHTML =
        '<div class="intro screen-enter" style="--lv: var(--lv-' + lv.id + ')">' +
          '<header class="flow__top"><div class="flow__top-in">' +
            '<a class="flow__x" href="#/course/' + lv.id + '" aria-label="Đóng, về lộ trình ' + lv.code + '">' + icon("x") + "</a>" +
            '<span class="intro__crumb">' + esc(course.lessonLabel(meta)) + "</span>" +
          "</div></header>" +
          '<div class="intro__body">' +
            '<div class="intro__art">' + E.art.desk(210, 158) + "</div>" +
            '<div class="intro__head">' +
              '<h1 class="intro__title">' + esc(meta.title) + "</h1>" +
              '<p class="intro__sub">' + esc(meta.titleVi) + " · khoảng " + esc(L.duration) + "</p>" +
              '<div class="intro__meta">' + ui.statusTag(status) +
                (rec && rec.attempts ? '<span class="tag">' + icon("target") + "Luyện tập: cao nhất " + rec.bestPercent + "%</span>" : "") +
                '<span class="tag">' + icon("list") + total + " màn</span></div>" +
            "</div>" +
            '<ol class="intro-list">' + plan.sections.map(function (s) {
              var isSeen = seen.indexOf(s.id) !== -1 && s !== curSec;
              var isCur = s === curSec;
              return '<li><a class="intro-item' + (isCur ? " is-current" : "") + (isSeen ? " is-seen" : "") + '" href="#/learn/' + meta.id + "?s=" + s.first + '">' +
                '<span class="intro-item__ico tone-' + s.tone + '">' + icon(s.icon) + "</span>" +
                '<span class="intro-item__text"><strong>' + esc(s.label) + "</strong><span>" + esc(s.meta) + "</span></span>" +
                (isCur ? '<span class="chip chip--accent">' + (resume !== null ? "Đang học" : "Bắt đầu") + "</span>"
                  : isSeen ? '<span class="intro-item__done" aria-label="Đã học">' + icon("check") + "</span>" : "") +
                "</a></li>";
            }).join("") + "</ol>" +
            '<p class="intro__links"><a class="link-arrow" href="#/read/' + meta.id + '">' + icon("file") + "Xem cả bài trên một trang</a>" +
              (rec && rec.attempts ? '<a class="link-arrow" href="#/results/' + meta.id + '">' + icon("chart") + "Kết quả lần trước</a>" : "") +
              '<a class="link-arrow" href="#/module/' + mod.id + '">' + icon("map") + "Module " + mod.number + "</a></p>" +
          "</div>" +
          '<footer class="flow__foot"><div class="flow__foot-in">' +
            (resume !== null
              ? '<a class="btn btn--secondary" href="#/learn/' + meta.id + '?s=0">Học lại từ đầu</a>' +
                '<a class="btn btn--primary flow__main" href="#/learn/' + meta.id + "?s=" + resume + '" data-start>Học tiếp · màn ' + (resume + 1) + "/" + total + "</a>"
              : '<a class="btn btn--primary flow__main" href="#/learn/' + meta.id + '?s=0" data-start>' + (status === "done" ? "Học lại" : "Bắt đầu học") + "</a>") +
          "</div></footer>" +
        "</div>";
    }

    return function () { alive = false; };
  };
})();
