/* =========================================================
   PRACTICE — ôn tập phần luyện tập của bài: mọi câu trên một trang,
   chọn hết rồi bấm "Kiểm tra" một lần để xem đúng sai.
   #/practice/<mã bài>              làm lại toàn bộ, có tính điểm
   #/practice/<mã bài>?review=1     chỉ ôn lại các câu sai lần trước (không tính điểm)
   (Khi học bài từng màn thì chọn đáp án là chấm ngay — xem player.js.)
   ========================================================= */
(function () {
  "use strict";

  var E = window.EOH;
  var ui = E.ui, esc = ui.esc, icon = E.icon, store = E.store, course = E.course, Q = E.question;

  E.screens.practice = function (main, params) {
    var meta = course.lesson(params.id);
    if (!meta) {
      main.innerHTML = '<div class="page">' + ui.error("Không tìm thấy bài học", "Mã bài “" + params.id + "” không có trong khóa học.") + "</div>";
      return;
    }
    if (!meta.available) {
      main.innerHTML = '<div class="page">' + ui.unavailable(meta) + "</div>";
      return;
    }
    var reviewMode = /[?&]review=1/.test(window.location.hash);
    ui.pageTitle((reviewMode ? "Ôn câu sai · " : "Luyện tập · ") + meta.title);
    main.innerHTML = '<div class="page">' + ui.loading("Đang tải câu hỏi…") + "</div>";

    var alive = true;
    var startedAt = Date.now();

    E.loadLesson(meta.id).then(function (L) {
      if (!alive) return;
      var questions = L.practice || [];
      if (reviewMode) {
        var rec = store.lesson(meta.id);
        var wrong = rec && rec.lastMistakes ? rec.lastMistakes : [];
        questions = questions.filter(function (q) { return wrong.indexOf(q.id) !== -1; });
        if (!questions.length) {
          main.innerHTML = '<div class="page">' + ui.empty("Không có câu sai để ôn", "Lần luyện tập gần nhất bạn không sai câu nào, hoặc bạn chưa làm bài luyện tập.",
            '<a class="btn btn--primary" href="#/practice/' + meta.id + '">Làm bài luyện tập</a><a class="btn btn--secondary" href="#/lesson/' + meta.id + '">Về bài học</a>') + "</div>";
          return;
        }
      }
      if (!questions.length) {
        main.innerHTML = '<div class="page">' + ui.empty("Bài này chưa có câu luyện tập", "Phần luyện tập đang được biên soạn.",
          '<a class="btn btn--secondary" href="#/lesson/' + meta.id + '">Về bài học</a>') + "</div>";
        return;
      }
      run(questions);
    }).catch(function (err) {
      if (!alive) return;
      main.innerHTML = '<div class="page">' + ui.error("Không mở được phần luyện tập", err.message,
        '<button type="button" class="btn btn--dark" data-retry>Thử lại</button><a class="btn btn--secondary" href="#/lesson/' + meta.id + '">Về bài học</a>') + "</div>";
      main.querySelector("[data-retry]").addEventListener("click", function () { E.router.resolve(); });
    });

    function run(questions) {
      var states = questions.map(function () { return { selected: null, checked: false }; });
      var apis = [];
      var submitted = false;

      document.body.classList.add("is-flow");
      main.innerHTML =
        '<div class="flow quiz screen-enter">' +
          '<header class="flow__top"><div class="flow__top-in">' +
            '<a class="flow__x" href="#/lesson/' + meta.id + '" aria-label="Thoát, về bài học">' + icon("x") + "</a>" +
            '<div class="flow__bar" aria-hidden="true"><i></i></div>' +
            '<span class="flow__count" data-count></span>' +
          "</div></header>" +
          '<div class="flow__body"><div class="flow__step">' +
            '<p class="step-tag">' + (reviewMode ? "Ôn câu sai · không tính điểm" : "Ôn tập · " + esc(meta.title)) + "</p>" +
            '<p class="flow-hint">Chọn đáp án cho tất cả ' + questions.length + " câu, sau đó bấm “Kiểm tra” ở cuối trang.</p>" +
            '<div data-summary aria-live="polite"></div>' +
            '<ol class="quiz__list">' + questions.map(function (q, i) {
              return '<li class="quiz__item" data-item="' + i + '"><p class="quiz__num">Câu ' + (i + 1) + "</p><div data-q></div></li>";
            }).join("") + "</ol>" +
          "</div></div>" +
          '<footer class="flow__foot"><div class="flow__foot-in" data-foot></div></footer>' +
        "</div>";

      var countEl = main.querySelector("[data-count]");
      var barEl = main.querySelector(".flow__bar i");
      var footEl = main.querySelector("[data-foot]");
      var summaryEl = main.querySelector("[data-summary]");

      questions.forEach(function (q, i) {
        var holder = main.querySelector('[data-item="' + i + '"] [data-q]');
        apis.push(Q.mount(holder, q, states[i], { hideCheck: true, onChange: drawFoot }));
      });

      function answered() { return states.filter(function (s) { return s.selected !== null; }).length; }

      function drawFoot() {
        var n = answered(), total = questions.length;
        countEl.textContent = n + "/" + total;
        barEl.style.width = Math.round((n / total) * 100) + "%";
        if (submitted) return;
        footEl.innerHTML = '<span class="quiz__left">' + (n < total ? "Còn " + (total - n) + " câu chưa chọn" : "Đã chọn đủ " + total + " câu") + "</span>" +
          '<button type="button" class="btn btn--primary flow__main" data-submit' + (n < total ? " disabled" : "") + ">Kiểm tra</button>";
      }

      function submit() {
        if (submitted || answered() < questions.length) return;
        submitted = true;
        var score = 0, mistakes = [], answers = {};
        questions.forEach(function (q, i) {
          apis[i].check();
          answers[q.id] = states[i].selected;
          if (states[i].selected === q.answer) score++; else mistakes.push(q.id);
          main.querySelector('[data-item="' + i + '"]').classList.add(states[i].selected === q.answer ? "is-right" : "is-wrong");
        });
        var total = questions.length;
        if (!reviewMode) {
          store.recordPractice(meta.id, score, total, mistakes, answers, Math.max(1, Math.round((Date.now() - startedAt) / 60000)));
        }
        var all = score === total;
        var good = Math.round(score / total * 100) >= store.PASS_PERCENT;
        summaryEl.innerHTML = '<div class="quiz__summary ' + (good ? "is-ok" : "is-bad") + '" tabindex="-1">' +
          '<strong>Đúng ' + score + "/" + total + " câu" + (reviewMode ? "" : " · " + Math.round(score / total * 100) + "%") + "</strong>" +
          "<span>" + (all ? "Bạn đã làm đúng tất cả." : "Xem lại các câu sai bên dưới, mỗi câu có giải thích.") +
          (reviewMode ? " Phần ôn lại không tính điểm." : "") + "</span></div>";
        footEl.innerHTML = reviewMode
          ? '<a class="btn btn--secondary" href="#/practice/' + meta.id + '">Làm lại toàn bộ</a><a class="btn btn--primary flow__main" href="#/review">Về Ôn tập</a>'
          : '<a class="btn btn--secondary" href="#/review">Về Ôn tập</a><a class="btn btn--primary flow__main" href="#/results/' + meta.id + '">Xem kết quả</a>';
        drawFoot();
        window.scrollTo(0, 0);
        summaryEl.firstChild.focus({ preventScroll: true });
      }

      footEl.addEventListener("click", function (e) { if (e.target.closest("[data-submit]")) submit(); });
      drawFoot();
    }

    return function cleanup() { alive = false; };
  };
})();
