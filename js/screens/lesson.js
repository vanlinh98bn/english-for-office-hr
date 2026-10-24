/* =========================================================
   READ — cả bài học trên một trang (#/read/<mã bài>).
   Cách học chính là học từng màn (learn.js); trang này dành cho
   người muốn xem lại cả bài một lượt. Mục lục bên trái (máy tính)
   hoặc thu gọn ở đầu trang (điện thoại). Mỗi phần có cách trình bày
   riêng, không ép tất cả thành thẻ.
   ========================================================= */
(function () {
  "use strict";

  var E = window.EOH;
  var ui = E.ui, esc = ui.esc, icon = E.icon, store = E.store, course = E.course, speech = E.speech, Q = E.question;

  var SECTIONS = [
    { id: "objectives", en: "Learning objectives", vi: "Mục tiêu bài học" },
    { id: "vocabulary", en: "Vocabulary", vi: "Từ vựng" },
    { id: "pronunciation", en: "Pronunciation", vi: "Phát âm" },
    { id: "listening", en: "Listening", vi: "Nghe hiểu" },
    { id: "reading", en: "Reading", vi: "Đọc hiểu" },
    { id: "grammar", en: "Grammar & usage", vi: "Ngữ pháp và cách dùng" },
    { id: "exercises", data: "practice", en: "Exercises", vi: "Luyện tập" },
    { id: "writing", en: "Writing task", vi: "Viết thực hành" },
    { id: "review", en: "Review & results", vi: "Ôn tập và kết quả" }
  ];

  function pad(n) { return n < 10 ? "0" + n : String(n); }

  function sayBtn(text, label, rate) {
    var dis = speech.supported() ? "" : ' disabled title="Trình duyệt này không hỗ trợ đọc tiếng Anh"';
    return '<button type="button" class="audio-btn" data-say="' + esc(text) + '"' + (rate ? ' data-rate="' + rate + '"' : "") +
      ' aria-pressed="false" aria-label="' + esc(label || "Nghe: " + text) + '"' + dis + ">" + icon("volume") + "</button>";
  }

  function head(sec) {
    return '<header class="lsec__head"><span class="lsec__num" aria-hidden="true">' + pad(sec.num) + "</span>" +
      '<div><h2 class="lsec__title" id="h-' + sec.id + '">' + esc(sec.en) + '</h2><p class="lsec__vi">' + esc(sec.vi) +
      (sec.meta ? " · " + esc(sec.meta) : "") + "</p></div></header>";
  }

  // ---------- Từng phần ----------
  var render = {
    objectives: function (L) {
      return '<p class="lsec__scenario">' + esc(L.scenario) + "</p>" +
        '<p class="eyebrow">Sau bài này, bạn có thể</p>' +
        '<ol class="objectives">' + L.objectives.map(function (o) { return "<li>" + esc(o) + "</li>"; }).join("") + "</ol>";
    },

    vocabulary: function (L) {
      return '<div class="lsec__tools"><p class="small muted">Bấm ' + icon("volume", "inline-icon") + " để nghe. Che nghĩa để tự kiểm tra trí nhớ.</p>" +
        '<button type="button" class="btn btn--secondary btn--sm" data-toggle-meaning aria-pressed="false">' + icon("eye") + "Che nghĩa tiếng Việt</button></div>" +
        '<ol class="vocab">' + L.vocabulary.map(function (v, i) {
          return '<li class="vocab__item">' +
            '<span class="vocab__index">' + (i + 1) + "</span>" +
            '<div class="vocab__word-wrap"><div class="vocab__word-line"><span class="vocab__word" lang="en">' + esc(v.word) + "</span>" + sayBtn(v.word) + "</div>" +
              '<span class="vocab__ipa">' + esc(v.ipa) + " · " + esc(v.pos) + "</span></div>" +
            '<div class="vocab__body"><p class="vocab__meaning">' + esc(v.meaning) + "</p>" +
              '<p class="vocab__example"><span lang="en">' + esc(v.example) + "</span>" + sayBtn(v.example, "Nghe câu ví dụ") + "</p>" +
              '<p class="vocab__example-vi">' + esc(v.exampleVi) + "</p></div>" +
            "</li>";
        }).join("") + "</ol>";
    },

    pronunciation: function (L) {
      var P = L.pronunciation;
      function marked(m) { // "o·ri·en·TA·tion" -> âm tiết in hoa được nhấn
        return esc(m).replace(/([A-Z]{2,})/g, '<strong class="stress">$1</strong>').replace(/(\/[^/]+\/)/g, '<strong class="stress">$1</strong>');
      }
      return '<p class="notice small">' + icon("info") + "<span>Âm thanh dùng giọng đọc tổng hợp của trình duyệt, chưa phải giọng người bản ngữ thu âm. Bấm lại nút đang phát để dừng.</span></p>" +
        P.groups.map(function (g) {
          return '<div class="pron-group"><h3 class="lsub">' + esc(g.title) + "</h3><p>" + esc(g.text) + "</p>" +
            '<ul class="pron-list">' + g.items.map(function (it) {
              return '<li><span class="pron-list__word" lang="en">' + esc(it.word) + "</span>" +
                '<span class="pron-list__marked" lang="en">' + marked(it.marked) + "</span>" +
                sayBtn(it.word) + (it.note ? '<span class="pron-list__note">' + esc(it.note) + "</span>" : "") + "</li>";
            }).join("") + "</ul></div>";
        }).join("") +
        '<div class="pron-group"><h3 class="lsub">Đọc theo câu</h3><p>Nghe tốc độ thường, sau đó nghe chậm và đọc to theo.</p>' +
        '<ul class="sentence-list">' + P.sentences.map(function (s) {
          return '<li><span lang="en">' + esc(s) + '</span><span class="sentence-list__btns">' + sayBtn(s, "Nghe tốc độ thường") +
            '<button type="button" class="btn btn--ghost btn--sm" data-say="' + esc(s) + '" data-rate="0.7" aria-pressed="false"' +
            (speech.supported() ? "" : " disabled") + ">Chậm</button></span></li>";
        }).join("") + "</ul></div>";
    },

    listening: function (L) {
      var Li = L.listening;
      return '<div class="listen">' +
        '<div class="listen__player">' +
          '<div><p class="eyebrow">Hội thoại</p><h3 class="listen__title">' + esc(Li.title) + "</h3>" +
          '<p class="small muted">' + esc(Li.setting) + "</p></div>" +
          '<div class="btn-row"><button type="button" class="btn btn--dark" data-say-all="normal" aria-pressed="false"' + (speech.supported() ? "" : " disabled") + ">" + icon("headphones") + "Nghe hội thoại</button>" +
          '<button type="button" class="btn btn--secondary" data-say-all="slow" aria-pressed="false"' + (speech.supported() ? "" : " disabled") + ">Nghe chậm</button></div>" +
          (speech.supported() ? "" : '<p class="small">Trình duyệt này không hỗ trợ đọc tiếng Anh. Bạn có thể mở lời thoại để đọc.</p>') +
        "</div>" +
        '<p class="small muted">Nghe trước, trả lời câu hỏi, sau đó mới mở lời thoại để kiểm tra.</p>' +
        '<div class="inline-questions" data-qgroup="listening"></div>' +
        '<details class="transcript"><summary>' + icon("file") + "Lời thoại và bản dịch</summary>" +
          '<div class="transcript__tools"><label class="check-inline"><input type="checkbox" data-toggle-vi checked> Hiện bản dịch tiếng Việt</label></div>' +
          '<ol class="dialogue">' + Li.lines.map(function (l) {
            return '<li class="dialogue__line dialogue__line--' + esc(l.s) + '"><span class="dialogue__speaker">' + esc(Li.speakers[l.s]) + "</span>" +
              '<div><p lang="en">' + esc(l.text) + '</p><p class="dialogue__vi">' + esc(l.vi) + "</p></div>" + sayBtn(l.text, "Nghe câu này") + "</li>";
          }).join("") + "</ol></details>" +
        "</div>";
    },

    reading: function (L) {
      var R = L.reading, m = R.email;
      return "<p>" + esc(R.intro) + "</p>" +
        '<div class="reading-layout">' +
          '<article class="email" aria-label="Email: ' + esc(m.subject) + '" lang="en">' +
            '<dl class="email__head"><div><dt>From</dt><dd>' + esc(m.from) + "</dd></div><div><dt>To</dt><dd>" + esc(m.to) + "</dd></div>" +
            "<div><dt>Date</dt><dd>" + esc(m.date) + '</dd></div><div><dt>Subject</dt><dd class="email__subject">' + esc(m.subject) + "</dd></div></dl>" +
            '<div class="email__body"><p>' + esc(m.greeting) + "</p>" +
              m.paragraphs.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") +
              "<ul>" + m.list.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>" +
              m.after.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") +
              "<p>" + esc(m.closing) + '</p><p class="email__sign">' + m.signature.map(esc).join("<br>") + "</p>" +
            "</div></article>" +
          '<aside class="glossary" aria-labelledby="gloss-title"><p class="eyebrow" id="gloss-title">Từ cần chú ý</p><dl>' +
            R.glossary.map(function (g) { return '<dt lang="en">' + esc(g.term) + "</dt><dd>" + esc(g.vi) + "</dd>"; }).join("") +
          "</dl></aside>" +
        "</div>" +
        '<h3 class="lsub">Kiểm tra đọc hiểu</h3><div class="inline-questions" data-qgroup="reading"></div>';
    },

    grammar: function (L) {
      var G = L.grammar;
      return '<h3 class="grammar__title" lang="en">' + esc(G.title) + '</h3><p class="muted">' + esc(G.titleVi) + "</p>" +
        "<p>" + esc(G.intro) + "</p>" +
        '<div class="patterns">' + G.patterns.map(function (p) {
          return '<div class="pattern"><p class="pattern__form">' + esc(p.form) + "</p>" +
            '<div><p class="pattern__use">' + esc(p.use) + '</p><ul class="pattern__examples">' +
            p.examples.map(function (x) { return '<li><span lang="en">' + esc(x) + "</span>" + sayBtn(x) + "</li>"; }).join("") + "</ul></div></div>";
        }).join("") + "</div>" +
        '<h3 class="lsub">Lỗi hay gặp</h3><ul class="mistakes">' + G.mistakes.map(function (m) {
          return '<li><p class="mistakes__wrong">' + icon("x") + '<span class="visually-hidden">Sai: </span><s lang="en">' + esc(m.wrong) + "</s></p>" +
            '<p class="mistakes__right">' + icon("check") + '<span class="visually-hidden">Đúng: </span><span lang="en">' + esc(m.right) + "</span></p>" +
            '<p class="mistakes__note">' + esc(m.note) + "</p></li>";
        }).join("") + "</ul>" +
        '<p class="notice">' + icon("info") + "<span>" + esc(G.tip) + "</span></p>";
    },

    exercises: function (L) {
      return '<div class="exercise-cta" data-exercise-cta>' + exerciseCta(L) + "</div>";
    },

    writing: function (L) {
      var W = L.writing;
      return '<h3 class="lsub" lang="en">' + esc(W.title) + "</h3><p>" + esc(W.task) + "</p>" +
        '<ul class="requirements">' + W.requirements.map(function (r) { return "<li>" + esc(r) + "</li>"; }).join("") + "</ul>" +
        '<div class="writing">' +
          '<label class="writing__label" for="writing-box">Bài viết của bạn</label>' +
          '<textarea id="writing-box" class="writing__box" rows="10" lang="en" spellcheck="true" placeholder="Dear Ms. Lan,"></textarea>' +
          '<div class="writing__bar"><span data-word-count class="small">0 từ</span><span data-save-state class="small muted" aria-live="polite"></span></div>' +
          '<div class="btn-row"><button type="button" class="btn btn--dark" data-writing-check>Kiểm tra bài viết</button></div>' +
          '<div data-writing-result aria-live="polite"></div>' +
        "</div>";
    },

    review: function (L) {
      return '<h3 class="lsub">Cụm từ quan trọng</h3><ul class="phrases">' + L.review.keyPhrases.map(function (p) {
          return '<li><div><p lang="en">' + esc(p.en) + '</p><p class="muted small">' + esc(p.vi) + "</p></div>" + sayBtn(p.en) + "</li>";
        }).join("") + "</ul>" +
        '<div data-review-summary></div>';
    }
  };

  function exerciseCta(L) {
    var rec = store.lesson(L.id);
    var n = L.practice.length;
    var tried = rec && rec.attempts > 0;
    return "<p>" + n + " câu hỏi ôn lại từ vựng, ngữ pháp và phát âm của bài. Mỗi câu có giải thích sau khi trả lời. Đạt từ " +
      store.PASS_PERCENT + "% trở lên thì bài học được tính là hoàn thành.</p>" +
      (tried ? '<p class="exercise-cta__last">Lần gần nhất: <strong>' + rec.lastScore + "/" + rec.lastTotal + "</strong> (" + rec.lastPercent + "%) · Cao nhất: " + rec.bestPercent + "% · " + rec.attempts + " lần làm</p>" : "") +
      '<div class="btn-row"><a class="btn btn--primary" href="#/practice/' + L.id + '">' + (tried ? "Làm lại" : "Bắt đầu luyện tập") + icon("arrowRight") + "</a>" +
      (tried ? '<a class="btn btn--secondary" href="#/results/' + L.id + '">Xem kết quả lần trước</a>' : "") + "</div>";
  }

  function countWords(t) { var m = t.trim().match(/[A-Za-zÀ-ỹ0-9'’:.-]+/g); return m ? m.filter(function (w) { return /[A-Za-z0-9]/.test(w); }).length : 0; }

  E.screens.read = function (main, params) {
    var meta = course.lesson(params.id);
    if (!meta) {
      main.innerHTML = '<div class="page">' + ui.error("Không tìm thấy bài học", "Mã bài “" + params.id + "” không có trong khóa học.",
        '<a class="btn btn--secondary" href="#/course">Xem khóa học</a>') + "</div>";
      return;
    }
    ui.pageTitle(meta.title);
    if (!meta.available) {
      main.innerHTML = '<div class="page">' + ui.unavailable(meta) + "</div>";
      return;
    }

    main.innerHTML = '<div class="page">' + ui.loading("Đang tải bài học…") + "</div>";
    var alive = true;
    var cleanups = [];

    E.loadLesson(meta.id).then(function (L) {
      if (!alive) return;
      draw(L);
    }).catch(function (err) {
      if (!alive) return;
      main.innerHTML = '<div class="page">' + ui.error("Không mở được bài học", err.message + " Hãy kiểm tra lại file và thử lại.",
        '<button type="button" class="btn btn--dark" data-retry>Thử lại</button><a class="btn btn--secondary" href="#/">Về trang tổng quan</a>') + "</div>";
      main.querySelector("[data-retry]").addEventListener("click", function () { E.router.resolve(); });
    });

    function draw(L) {
      L.id = meta.id;
      var mod = course.module(meta.moduleId);
      var lv = course.level(meta.levelId);
      var secs = SECTIONS
        .filter(function (s) { return s.id === "review" || s.id === "objectives" || L[s.data || s.id]; })
        .map(function (s, i) { return Object.assign({}, s, { num: i + 1 }); });
      var vocabSec = secs.filter(function (s) { return s.id === "vocabulary"; })[0];
      if (vocabSec) vocabSec.meta = L.vocabulary.length + " từ";
      var exSec = secs.filter(function (s) { return s.id === "exercises"; })[0];
      if (exSec) exSec.meta = L.practice.length + " câu";

      store.markVisited(meta.id, secs.length);
      var rec = store.lesson(meta.id);
      var next = course.adjacentLesson(meta.id, 1);

      main.innerHTML =
        '<div class="lesson screen-enter">' +
          '<header class="lesson-hero"><div class="lesson-hero__inner">' +
            '<nav class="crumbs" aria-label="Đường dẫn"><a href="#/course/' + lv.id + '">' + lv.code + "</a>" + icon("chevronRight") +
              '<a href="#/module/' + mod.id + '">Module ' + mod.number + " · " + esc(mod.title) + "</a>" + icon("chevronRight") +
              '<span aria-current="page">Bài ' + meta.number + "</span></nav>" +
            '<p class="eyebrow">' + esc(course.lessonLabel(meta)) + "</p>" +
            '<h1 class="display">' + esc(meta.title) + "</h1>" +
            '<p class="lead">' + esc(meta.titleVi) + "</p>" +
            '<ul class="lesson-hero__meta"><li>' + icon("clock") + esc(L.duration) + "</li><li>" + icon("list") + secs.length + " phần</li>" +
              "<li>" + ui.statusTag(store.status(meta.id)) + "</li></ul>" +
            '<div class="btn-row lesson-hero__actions"><a class="btn btn--primary btn--sm" href="#/lesson/' + meta.id + '">' + icon("play") + "Học từng màn</a></div>" +
          "</div></header>" +
          '<div class="lesson-layout">' +
            '<nav class="outline" aria-label="Mục lục bài học">' +
              '<button type="button" class="outline__toggle" data-outline-toggle aria-expanded="false" aria-controls="outline-list">' +
                '<span><span class="small muted">Mục lục</span> <span data-outline-current>' + esc(secs[0].en) + "</span></span>" +
                '<span class="outline__count"><span data-outline-seen>' + rec.sectionsSeen.length + "</span>/" + secs.length + icon("chevronDown") + "</span></button>" +
              '<ol class="outline__list" id="outline-list">' + secs.map(function (s) {
                var seen = rec.sectionsSeen.indexOf(s.id) !== -1;
                return '<li><button type="button" class="outline__item' + (seen ? " is-seen" : "") + '" data-goto="' + s.id + '">' +
                  '<span class="outline__num">' + (seen ? icon("check") : pad(s.num)) + "</span>" +
                  '<span><span class="outline__en">' + esc(s.en) + '</span><span class="outline__vi">' + esc(s.vi) + "</span></span></button></li>";
              }).join("") + "</ol>" +
            "</nav>" +
            '<div class="lesson-content">' +
              secs.map(function (s) {
                return '<section class="lsec lsec--' + s.id + '" id="sec-' + s.id + '" data-section="' + s.id + '" aria-labelledby="h-' + s.id + '">' +
                  head(s) + '<div class="lsec__body">' + render[s.id](L) + "</div></section>";
              }).join("") +
              '<nav class="pager lesson-pager" aria-label="Bài trước và sau">' +
                '<a class="pager__link" href="#/module/' + mod.id + '">' + icon("arrowLeft") + '<span><span class="small muted">Quay lại</span><br>Module ' + mod.number + "</span></a>" +
                (next ? (next.available
                  ? '<a class="pager__link pager__link--next" href="#/lesson/' + next.id + '"><span><span class="small muted">Bài tiếp theo</span><br>' + esc(next.title) + "</span>" + icon("arrowRight") + "</a>"
                  : '<div class="pager__link pager__link--next is-disabled"><span><span class="small muted">Bài tiếp theo · đang biên soạn</span><br>' + esc(next.title) + "</span></div>")
                  : "<span></span>") +
              "</nav>" +
            "</div>" +
          "</div>" +
        "</div>";

      wireAudio(L);
      wireOutline(secs);
      wireQuestions(L);
      wireWriting(L);
      wireVocab();
      updateReview(L);
    }

    // ---------- Âm thanh ----------
    function wireAudio(L) {
      var onClick = function (e) {
        var b = e.target.closest("[data-say]");
        if (b && !b.disabled) {
          speech.speak(b.getAttribute("data-say"), b, Number(b.getAttribute("data-rate")) || undefined);
          return;
        }
        var all = e.target.closest("[data-say-all]");
        if (all && !all.disabled) {
          speech.speak(L.listening.lines.map(function (l) { return l.text; }), all, all.getAttribute("data-say-all") === "slow" ? 0.72 : 0.92);
        }
      };
      main.addEventListener("click", onClick);
      cleanups.push(function () { main.removeEventListener("click", onClick); speech.stop(); });
    }

    // ---------- Mục lục & đánh dấu phần đã xem ----------
    function wireOutline(secs) {
      var toggle = main.querySelector("[data-outline-toggle]");
      var outline = main.querySelector(".outline");
      toggle.addEventListener("click", function () {
        var open = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", String(!open));
        outline.classList.toggle("is-open", !open);
      });
      main.querySelectorAll("[data-goto]").forEach(function (b) {
        b.addEventListener("click", function () {
          var target = document.getElementById("sec-" + b.getAttribute("data-goto"));
          toggle.setAttribute("aria-expanded", "false");
          outline.classList.remove("is-open");
          if (target) {
            target.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
            var h = target.querySelector(".lsec__title");
            if (h) { h.setAttribute("tabindex", "-1"); h.focus({ preventScroll: true }); }
          }
        });
      });

      function setCurrent(id) {
        main.querySelectorAll(".outline__item").forEach(function (b) {
          var on = b.getAttribute("data-goto") === id;
          b.classList.toggle("is-current", on);
          if (on) b.setAttribute("aria-current", "true"); else b.removeAttribute("aria-current");
        });
        var s = secs.filter(function (x) { return x.id === id; })[0];
        main.querySelector("[data-outline-current]").textContent = s ? s.en : "";
      }
      function markSeen(id) {
        store.markSectionSeen(meta.id, id);
        var b = main.querySelector('.outline__item[data-goto="' + id + '"]');
        if (b && !b.classList.contains("is-seen")) {
          b.classList.add("is-seen");
          b.querySelector(".outline__num").innerHTML = icon("check");
        }
        main.querySelector("[data-outline-seen]").textContent = store.lesson(meta.id).sectionsSeen.length;
      }

      // Phần hiện tại = phần cuối cùng có tiêu đề đã qua mốc 35% chiều cao màn hình.
      // Cuộn tới đáy trang thì tính là phần cuối.
      var sectionEls = Array.prototype.slice.call(main.querySelectorAll(".lsec"));
      var ticking = false;
      var lastId = null;
      function update() {
        ticking = false;
        var line = window.innerHeight * 0.35;
        var id = secs[0].id;
        sectionEls.forEach(function (el) { if (el.getBoundingClientRect().top <= line) id = el.getAttribute("data-section"); });
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) id = secs[secs.length - 1].id;
        if (id !== lastId) { lastId = id; setCurrent(id); markSeen(id); }
      }
      var onScroll = function () { if (!ticking) { ticking = true; window.requestAnimationFrame(update); } };
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
      cleanups.push(function () { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); });
      update();
    }

    // ---------- Câu hỏi Nghe & Đọc (không tính điểm, chỉ để tự kiểm tra) ----------
    var inline = { listening: [], reading: [] };
    function wireQuestions(L) {
      ["listening", "reading"].forEach(function (group) {
        var box = main.querySelector('[data-qgroup="' + group + '"]');
        if (!box || !L[group]) return;
        L[group].questions.forEach(function (q, i) {
          var holder = document.createElement("div");
          holder.className = "inline-q";
          box.appendChild(holder);
          var label = document.createElement("p");
          label.className = "inline-q__num eyebrow";
          label.textContent = "Câu " + (i + 1) + "/" + L[group].questions.length;
          box.insertBefore(label, holder);
          var st = { selected: null, checked: false };
          inline[group].push({ q: q, st: st });
          Q.mount(holder, q, st, { onChange: function () { updateReview(L); } });
        });
      });
      var vi = main.querySelector("[data-toggle-vi]");
      if (vi) vi.addEventListener("change", function () {
        main.querySelector(".dialogue").classList.toggle("hide-vi", !vi.checked);
      });
    }

    // ---------- Viết ----------
    function wireWriting(L) {
      var box = main.querySelector("#writing-box");
      if (!box) return;
      var W = L.writing;
      var countEl = main.querySelector("[data-word-count]");
      var saveEl = main.querySelector("[data-save-state]");
      var result = main.querySelector("[data-writing-result]");
      var timer = null;
      box.value = store.getWriting(meta.id);

      function showCount() {
        var n = countWords(box.value);
        var ok = n >= W.minWords && n <= W.maxWords;
        countEl.textContent = n + " từ · yêu cầu " + W.minWords + "–" + W.maxWords + " từ";
        countEl.className = "small " + (n === 0 ? "muted" : ok ? "text-success" : "text-warning");
        return n;
      }
      showCount();
      box.addEventListener("input", function () {
        showCount();
        saveEl.textContent = "Đang lưu…";
        clearTimeout(timer);
        timer = setTimeout(function () {
          store.saveWriting(meta.id, box.value);
          saveEl.textContent = store.isDemo() ? "Chế độ dữ liệu mẫu: chỉ giữ tạm, không lưu" :
            store.storageOk() ? "Đã lưu trên máy này" : "Không lưu được (trình duyệt chặn bộ nhớ)";
          updateReview(L);
        }, 600);
      });
      cleanups.push(function () {
        if (timer) { clearTimeout(timer); store.saveWriting(meta.id, box.value); }
      });

      main.querySelector("[data-writing-check]").addEventListener("click", function () {
        var text = box.value;
        var n = showCount();
        if (n < 10) {
          result.innerHTML = '<p class="notice notice--warning">' + icon("alert") + "<span>Hãy viết ít nhất 10 từ rồi kiểm tra. Bài mẫu sẽ hiện sau khi bạn tự viết.</span></p>";
          return;
        }
        var checks = W.checks.map(function (c) { return { label: c.label, ok: new RegExp(c.pattern, "i").test(text) }; });
        var lenOk = n >= W.minWords && n <= W.maxWords;
        result.innerHTML =
          '<div class="writing-check">' +
            '<p class="eyebrow">Kiểm tra tự động (chỉ tìm các ý chính, không chấm ngữ pháp)</p>' +
            '<ul class="checklist">' +
              '<li class="' + (lenOk ? "is-ok" : "is-miss") + '">' + icon(lenOk ? "check" : "alert") + "<span>Độ dài " + n + " từ (" + W.minWords + "–" + W.maxWords + " từ)" + (lenOk ? "" : " — chưa đạt") + "</span></li>" +
              checks.map(function (c) {
                return '<li class="' + (c.ok ? "is-ok" : "is-miss") + '">' + icon(c.ok ? "check" : "alert") + "<span>" + esc(c.label) + (c.ok ? "" : " — chưa thấy") + "</span></li>";
              }).join("") +
            "</ul>" +
            '<p class="small muted">Hãy tự so sánh với bài mẫu bên dưới, hoặc nhờ giáo viên/đồng nghiệp đọc lại bài của bạn.</p>' +
            '<details class="model"><summary>' + icon("eye") + "Xem bài mẫu</summary>" +
              '<div class="model__text" lang="en">' + W.model.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + "</div></details>" +
          "</div>";
        store.saveWriting(meta.id, text);
        updateReview(L);
      });
    }

    function wireVocab() {
      var b = main.querySelector("[data-toggle-meaning]");
      if (!b) return;
      b.addEventListener("click", function () {
        var list = main.querySelector(".vocab");
        var on = !list.classList.contains("is-hiding");
        list.classList.toggle("is-hiding", on);
        b.setAttribute("aria-pressed", String(on));
        b.lastChild.textContent = on ? "Hiện nghĩa tiếng Việt" : "Che nghĩa tiếng Việt";
      });
    }

    // ---------- Tổng kết cuối bài ----------
    function updateReview(L) {
      var el = main.querySelector("[data-review-summary]");
      if (!el) return;
      var rec = store.lesson(meta.id);
      function groupLine(name, list) {
        if (!list.length) return "";
        var answered = list.filter(function (x) { return x.st.checked; }).length;
        var right = list.filter(function (x) { return Q.isCorrect(x.q, x.st); }).length;
        return "<li><span>" + name + "</span><span>" + (answered ? right + "/" + list.length + " đúng" + (answered < list.length ? " · còn " + (list.length - answered) + " câu" : "") : "Chưa trả lời") + "</span></li>";
      }
      var words = countWords(store.getWriting(meta.id));
      var done = store.status(meta.id) === "done";
      var next = course.adjacentLesson(meta.id, 1);
      el.innerHTML =
        '<div class="lesson-result' + (done ? " is-done" : "") + '">' +
          '<p class="eyebrow">Kết quả của bạn</p>' +
          '<h3 class="lesson-result__title">' + (done ? "Bạn đã hoàn thành bài học này." : "Bài học chưa hoàn thành.") + "</h3>" +
          '<p class="small muted">' + (done ? "Kết quả đã được ghi vào tiến độ." : "Hoàn thành phần Luyện tập với kết quả từ " + store.PASS_PERCENT + "% trở lên để hoàn thành bài.") + "</p>" +
          '<ul class="result-lines">' +
            groupLine("Nghe hiểu (tự kiểm tra)", inline.listening) +
            groupLine("Đọc hiểu (tự kiểm tra)", inline.reading) +
            "<li><span>Luyện tập</span><span>" + (rec && rec.attempts ? "Gần nhất " + rec.lastPercent + "% · cao nhất " + rec.bestPercent + "%" : "Chưa làm") + "</span></li>" +
            "<li><span>Bài viết</span><span>" + (words ? words + " từ" : "Chưa viết") + "</span></li>" +
            "<li><span>Phần đã xem</span><span>" + (rec ? rec.sectionsSeen.length + "/" + (rec.sectionsTotal || "") : "0") + "</span></li>" +
          "</ul>" +
          '<div class="btn-row">' +
            (done
              ? (next && next.available ? '<a class="btn btn--primary" href="#/lesson/' + next.id + '">Bài tiếp theo' + icon("arrowRight") + "</a>" : "") +
                '<a class="btn btn--secondary" href="#/module/' + meta.moduleId + '">Về module</a>'
              : '<a class="btn btn--primary" href="#/practice/' + meta.id + '">' + (rec && rec.attempts ? "Làm lại luyện tập" : "Làm phần luyện tập") + icon("arrowRight") + "</a>") +
          "</div>" +
        "</div>";
    }

    return function cleanup() {
      alive = false;
      cleanups.forEach(function (fn) { fn(); });
    };
  };
})();
