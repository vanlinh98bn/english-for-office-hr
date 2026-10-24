/* =========================================================
   LEARN — học một bài theo kiểu từng màn (#/learn/<mã bài>?s=<màn>).

   EOH.lessonPlan(L) chia nội dung bài thành các phần và các màn:
     Mở đầu → Từ vựng (1 từ/màn) → Phát âm → Nghe (hội thoại, từng câu
     hỏi, lời thoại) → Đọc (email, từng câu hỏi) → Ngữ pháp (giới thiệu,
     từng mẫu câu, lỗi hay gặp) → Luyện tập (1 câu/màn, tính điểm)
     → Viết → Tổng kết. Trang mở đầu bài (lesson-intro.js) dùng chung.
   ========================================================= */
(function () {
  "use strict";

  var E = window.EOH;
  var ui = E.ui, esc = ui.esc, icon = E.icon, store = E.store, course = E.course, speech = E.speech;

  // Các phần của bài. id giữ như trang đọc cả bài để "phần đã xem" dùng chung.
  var SECTIONS = [
    { id: "objectives", label: "Mở đầu", icon: "flag", tone: "slate" },
    { id: "vocabulary", label: "Từ vựng", icon: "abc", tone: "orange" },
    { id: "pronunciation", label: "Phát âm", icon: "volume", tone: "blue" },
    { id: "listening", label: "Nghe hội thoại", icon: "headphones", tone: "violet" },
    { id: "reading", label: "Đọc hiểu", icon: "file", tone: "teal" },
    { id: "grammar", label: "Ngữ pháp", icon: "layers", tone: "yellow" },
    { id: "exercises", label: "Luyện tập", icon: "target", tone: "red" },
    { id: "writing", label: "Viết", icon: "pen", tone: "green" },
    { id: "review", label: "Tổng kết", icon: "list", tone: "slate" }
  ];

  function sayBtn(text, label, rate, cls) {
    var dis = speech.supported() ? "" : ' disabled title="Trình duyệt này không hỗ trợ đọc tiếng Anh"';
    return '<button type="button" class="audio-btn' + (cls ? " " + cls : "") + '" data-say="' + esc(text) + '"' + (rate ? ' data-rate="' + rate + '"' : "") +
      ' aria-pressed="false" aria-label="' + esc(label || "Nghe: " + text) + '"' + dis + ">" + icon("volume") + "</button>";
  }
  function playAll(label, rate, cls) {
    return '<button type="button" class="btn ' + (cls || "btn--primary") + '" data-say-all data-rate="' + rate + '" aria-pressed="false"' +
      (speech.supported() ? "" : " disabled") + ">" + icon("headphones") + label + "</button>";
  }
  function countWords(t) { var m = t.trim().match(/[A-Za-zÀ-ỹ0-9'’:.-]+/g); return m ? m.filter(function (w) { return /[A-Za-z0-9]/.test(w); }).length : 0; }
  function marked(m) { // "o·ri·en·TA·tion" -> âm tiết in hoa được nhấn
    return esc(m).replace(/([A-Z]{2,})/g, '<strong class="stress">$1</strong>').replace(/(\/[^/]+\/)/g, '<strong class="stress">$1</strong>');
  }
  function emailHtml(m) {
    return '<article class="email" aria-label="Email: ' + esc(m.subject) + '" lang="en">' +
      '<dl class="email__head"><div><dt>From</dt><dd>' + esc(m.from) + "</dd></div><div><dt>To</dt><dd>" + esc(m.to) + "</dd></div>" +
      "<div><dt>Date</dt><dd>" + esc(m.date) + '</dd></div><div><dt>Subject</dt><dd class="email__subject">' + esc(m.subject) + "</dd></div></dl>" +
      '<div class="email__body"><p>' + esc(m.greeting) + "</p>" +
        m.paragraphs.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") +
        (m.list && m.list.length ? "<ul>" + m.list.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>" : "") +
        (m.after || []).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") +
        "<p>" + esc(m.closing) + '</p><p class="email__sign">' + m.signature.map(esc).join("<br>") + "</p>" +
      "</div></article>";
  }
  function hint(q) {
    return '<p class="flow-hint">' + (q.type === "gap" ? "Chọn từ đúng để điền vào chỗ trống" : "Chọn đáp án đúng") + "</p>";
  }

  // ---------- Chia bài thành các màn ----------
  function lessonPlan(L) {
    var steps = [];
    var sections = [];
    function section(id, meta, build) {
      var def = SECTIONS.filter(function (s) { return s.id === id; })[0];
      var first = steps.length;
      build();
      if (steps.length > first) sections.push(Object.assign({}, def, { meta: meta, first: first, count: steps.length - first }));
    }
    function add(sec, s) { s.section = sec; steps.push(s); }

    section("objectives", "Tình huống và mục tiêu", function () {
      add("objectives", {
        tag: "Mở đầu",
        html: function () {
          return '<h1 class="flow-title">Tình huống</h1><p class="flow-scenario">' + esc(L.scenario) + "</p>" +
            '<h2 class="flow-sub">Sau bài này, bạn có thể</h2><ol class="flow-goals">' +
            L.objectives.map(function (o) { return "<li>" + esc(o) + "</li>"; }).join("") + "</ol>";
        }
      });
    });

    var V = L.vocabulary || [];
    section("vocabulary", V.length + " từ", function () {
      V.forEach(function (v, i) {
        add("vocabulary", {
          tag: "Từ vựng · " + (i + 1) + "/" + V.length,
          html: function () {
            return '<div class="wordcard">' +
              '<p class="wordcard__word" lang="en">' + esc(v.word) + "</p>" +
              '<p class="wordcard__ipa">' + esc(v.ipa) + " · " + esc(v.pos) + "</p>" +
              sayBtn(v.word, "Nghe từ " + v.word, null, "speak-btn") +
              '<p class="wordcard__meaning">' + esc(v.meaning) + "</p>" +
              '<div class="wordcard__example"><p><span lang="en">' + esc(v.example) + "</span>" + sayBtn(v.example, "Nghe câu ví dụ") + "</p>" +
              "<p>" + esc(v.exampleVi) + "</p></div></div>";
          }
        });
      });
    });

    var P = L.pronunciation;
    if (P) {
      var pItems = P.groups.reduce(function (n, g) { return n + g.items.length; }, 0) + P.sentences.length;
      var pCount = P.groups.length + 1;
      section("pronunciation", pItems + " từ và câu", function () {
        P.groups.forEach(function (g, i) {
          add("pronunciation", {
            tag: "Phát âm · " + (i + 1) + "/" + pCount,
            html: function () {
              return (i === 0 ? '<p class="notice small">' + icon("info") + "<span>Âm thanh dùng giọng đọc tổng hợp của trình duyệt, chưa phải giọng người thật thu âm. Bấm lại nút đang phát để dừng.</span></p>" : "") +
                '<h1 class="flow-title">' + esc(g.title) + '</h1><p class="flow-text">' + esc(g.text) + "</p>" +
                '<ul class="pron-list">' + g.items.map(function (it) {
                  return '<li><span class="pron-list__word" lang="en">' + esc(it.word) + "</span>" +
                    '<span class="pron-list__marked" lang="en">' + marked(it.marked) + "</span>" +
                    sayBtn(it.word) + (it.note ? '<span class="pron-list__note">' + esc(it.note) + "</span>" : "") + "</li>";
                }).join("") + "</ul>";
            }
          });
        });
        add("pronunciation", {
          tag: "Phát âm · " + pCount + "/" + pCount,
          html: function () {
            return '<h1 class="flow-title">Đọc theo câu</h1><p class="flow-text">Nghe tốc độ thường, sau đó nghe chậm và đọc to theo.</p>' +
              '<ul class="sentence-list">' + P.sentences.map(function (s) {
                return '<li><span lang="en">' + esc(s) + '</span><span class="sentence-list__btns">' + sayBtn(s, "Nghe tốc độ thường") +
                  '<button type="button" class="btn btn--secondary btn--sm" data-say="' + esc(s) + '" data-rate="0.7" aria-pressed="false"' +
                  (speech.supported() ? "" : " disabled") + ">Chậm</button></span></li>";
              }).join("") + "</ul>";
          }
        });
      });
    }

    var Li = L.listening;
    if (Li) {
      var lines = Li.lines.map(function (l) { return l.text; });
      section("listening", Li.questions.length + " câu hỏi", function () {
        // Một màn: nút nghe nằm yên ở trên, các câu hỏi hiện lần lượt bên dưới
        add("listening", {
          tag: "Nghe hội thoại",
          lines: lines,
          questions: Li.questions,
          html: function () {
            return '<div class="listen-card"><span class="listen-card__icon">' + icon("headphones") + "</span>" +
              '<h1 class="flow-title" lang="en">' + esc(Li.title) + '</h1><p class="flow-text">' + esc(Li.setting) + "</p>" +
              '<div class="btn-row">' + playAll("Nghe hội thoại", 0.92) + playAll("Nghe chậm", 0.72, "btn--secondary") + "</div></div>" +
              (speech.supported() ? "" : '<p class="notice small">' + icon("alert") + "<span>Trình duyệt này không hỗ trợ đọc tiếng Anh. Bấm “Xem lời thoại” để đọc.</span></p>") +
              '<button type="button" class="btn btn--secondary btn--sm transcript-btn" data-toggle-transcript aria-expanded="false" aria-controls="transcript-box">' + icon("file") + "<span>Xem lời thoại</span></button>" +
              '<div id="transcript-box" class="transcript-box" hidden>' +
                '<label class="check-inline"><input type="checkbox" data-toggle-vi checked> Hiện bản dịch tiếng Việt</label>' +
                '<ol class="dialogue">' + Li.lines.map(function (l) {
                  return '<li class="dialogue__line dialogue__line--' + esc(l.s) + '"><span class="dialogue__speaker">' + esc(Li.speakers[l.s]) + "</span>" +
                    '<div><p lang="en">' + esc(l.text) + '</p><p class="dialogue__vi">' + esc(l.vi) + "</p></div>" + sayBtn(l.text, "Nghe câu này") + "</li>";
                }).join("") + "</ol></div>" +
              '<p class="flow-text muted">Nghe bao nhiêu lần cũng được, rồi trả lời ' + Li.questions.length + " câu hỏi bên dưới.</p>";
          },
          wire: function (el) {
            var btn = el.querySelector("[data-toggle-transcript]");
            var box = el.querySelector("#transcript-box");
            var vi = el.querySelector("[data-toggle-vi]");
            btn.addEventListener("click", function () {
              var open = box.hidden;
              box.hidden = !open;
              btn.setAttribute("aria-expanded", String(open));
              btn.lastChild.textContent = open ? "Ẩn lời thoại" : "Xem lời thoại";
            });
            vi.addEventListener("change", function () { el.querySelector(".dialogue").classList.toggle("hide-vi", !vi.checked); });
          }
        });
      });
    }

    var R = L.reading;
    if (R) {
      section("reading", R.questions.length + " câu hỏi", function () {
        // Một màn: email nằm yên ở trên, các câu hỏi hiện lần lượt bên dưới
        add("reading", {
          tag: "Đọc hiểu",
          questions: R.questions,
          html: function () {
            return '<p class="flow-text">' + esc(R.intro) + "</p>" + emailHtml(R.email) +
              '<aside class="glossary"><p class="eyebrow">Từ cần chú ý</p><dl>' +
                R.glossary.map(function (g) { return '<dt lang="en">' + esc(g.term) + "</dt><dd>" + esc(g.vi) + "</dd>"; }).join("") +
              "</dl></aside>" +
              '<p class="flow-text muted">Đọc xong, trả lời ' + R.questions.length + " câu hỏi bên dưới. Email vẫn nằm ở trên để bạn xem lại.</p>";
          }
        });
      });
    }

    var G = L.grammar;
    if (G) {
      var gCount = G.patterns.length + 2;
      section("grammar", G.patterns.length + " mẫu câu", function () {
        add("grammar", {
          tag: "Ngữ pháp · 1/" + gCount,
          html: function () {
            return '<h1 class="flow-title" lang="en">' + esc(G.title) + '</h1><p class="muted flow-text">' + esc(G.titleVi) + "</p>" +
              '<p class="flow-text">' + esc(G.intro) + "</p>";
          }
        });
        G.patterns.forEach(function (p, i) {
          add("grammar", {
            tag: "Ngữ pháp · " + (i + 2) + "/" + gCount,
            html: function () {
              return '<div class="pattern-card"><p class="pattern-card__label">Mẫu câu ' + (i + 1) + '</p><p class="pattern-card__form">' + esc(p.form) + "</p>" +
                '<p class="flow-text">' + esc(p.use) + "</p></div>" +
                '<ul class="pattern__examples">' + p.examples.map(function (x) { return '<li><span lang="en">' + esc(x) + "</span>" + sayBtn(x) + "</li>"; }).join("") + "</ul>";
            }
          });
        });
        add("grammar", {
          tag: "Ngữ pháp · " + gCount + "/" + gCount,
          html: function () {
            return '<h1 class="flow-title">Lỗi hay gặp</h1><ul class="mistakes">' + G.mistakes.map(function (m) {
                return '<li><p class="mistakes__wrong">' + icon("x") + '<span class="visually-hidden">Sai: </span><s lang="en">' + esc(m.wrong) + "</s></p>" +
                  '<p class="mistakes__right">' + icon("check") + '<span class="visually-hidden">Đúng: </span><span lang="en">' + esc(m.right) + "</span></p>" +
                  '<p class="mistakes__note">' + esc(m.note) + "</p></li>";
              }).join("") + "</ul>" +
              '<p class="notice">' + icon("info") + "<span>" + esc(G.tip) + "</span></p>";
          }
        });
      });
    }

    var PR = L.practice || [];
    section("exercises", PR.length + " câu · tính điểm", function () {
      PR.forEach(function (q, i) {
        add("exercises", {
          tag: "Luyện tập · Câu " + (i + 1) + "/" + PR.length,
          question: q,
          graded: true,
          html: function () { return hint(q); }
        });
      });
    });

    var W = L.writing;
    if (W) {
      section("writing", W.minWords + "–" + W.maxWords + " từ", function () {
        add("writing", {
          tag: "Viết",
          html: function () {
            return '<h1 class="flow-title" lang="en">' + esc(W.title) + '</h1><p class="flow-text">' + esc(W.task) + "</p>" +
              '<ul class="requirements">' + W.requirements.map(function (r) { return "<li>" + esc(r) + "</li>"; }).join("") + "</ul>" +
              '<div class="writing">' +
                '<label class="writing__label" for="writing-box">Bài viết của bạn</label>' +
                '<textarea id="writing-box" class="writing__box" rows="8" lang="en" spellcheck="true" placeholder="Dear …,"></textarea>' +
                '<div class="writing__bar"><span data-word-count class="small">0 từ</span><span data-save-state class="small muted" aria-live="polite"></span></div>' +
                '<div class="btn-row"><button type="button" class="btn btn--dark" data-writing-check>Kiểm tra bài viết</button></div>' +
                '<div data-writing-result aria-live="polite"></div>' +
              "</div>" +
              '<p class="small muted">Phần viết không bắt buộc và không tính điểm. Bấm “Tiếp tục” khi xong.</p>';
          },
          wire: function (el) { return wireWriting(el, L, W); }
        });
      });
    }

    section("review", (L.review ? L.review.keyPhrases.length : 0) + " cụm từ quan trọng", function () {
      add("review", {
        tag: "Tổng kết",
        html: function () {
          return '<h1 class="flow-title">Cụm từ quan trọng</h1><p class="flow-text">Nghe và đọc to lại một lần trước khi xem kết quả.</p>' +
            '<ul class="phrases">' + (L.review ? L.review.keyPhrases : []).map(function (p) {
              return '<li><div><p lang="en">' + esc(p.en) + '</p><p class="muted small">' + esc(p.vi) + "</p></div>" + sayBtn(p.en) + "</li>";
            }).join("") + "</ul>";
        }
      });
    });

    return { sections: sections, steps: steps };
  }

  // ---------- Viết: đếm từ, tự lưu, kiểm tra ý chính ----------
  function wireWriting(el, L, W) {
    var box = el.querySelector("#writing-box");
    var countEl = el.querySelector("[data-word-count]");
    var saveEl = el.querySelector("[data-save-state]");
    var result = el.querySelector("[data-writing-result]");
    var timer = null;
    box.value = store.getWriting(L.id);

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
        timer = null;
        store.saveWriting(L.id, box.value);
        saveEl.textContent = store.isDemo() ? "Chế độ dữ liệu mẫu: chỉ giữ tạm, không lưu" :
          store.storageOk() ? "Đã lưu trên máy này" : "Không lưu được (trình duyệt chặn bộ nhớ)";
      }, 600);
    });
    el.querySelector("[data-writing-check]").addEventListener("click", function () {
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
          '<p class="small muted">Hãy tự so sánh với bài mẫu bên dưới, hoặc nhờ giáo viên hay đồng nghiệp đọc lại bài của bạn.</p>' +
          '<details class="model"><summary>' + icon("eye") + "Xem bài mẫu</summary>" +
            '<div class="model__text" lang="en">' + W.model.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + "</div></details>" +
        "</div>";
      store.saveWriting(L.id, text);
    });
    return function () { if (timer) { clearTimeout(timer); store.saveWriting(L.id, box.value); } };
  }

  // ---------- Chấm điểm phần luyện tập ----------
  // Gắn vào màn luyện tập cuối: khi bấm tiếp tục mà đã trả lời đủ thì ghi kết quả (một lần mỗi lượt học).
  function attachScoring(meta, steps, getStates, startedAt, opts) {
    opts = opts || {};
    var idx = [];
    steps.forEach(function (s, i) { if (s.graded) idx.push(i); });
    if (!idx.length) return function () { return false; };
    var done = false;
    function score() {
      if (done) return true;
      var states = getStates();
      if (!idx.every(function (i) { return states[i].checked; })) return false;
      var right = 0, mistakes = [], answers = {};
      idx.forEach(function (i) {
        var q = steps[i].question, st = states[i];
        answers[q.id] = st.selected;
        if (st.selected === q.answer) right++; else mistakes.push(q.id);
      });
      done = true;
      if (opts.onScore) opts.onScore(right, idx.length, mistakes);
      else store.recordPractice(meta.id, right, idx.length, mistakes, answers, Math.max(1, Math.round((Date.now() - startedAt) / 60000)));
      return true;
    }
    steps[idx[idx.length - 1]].onLeave = score;
    return score;
  }

  E.lessonPlan = lessonPlan;
  E.attachScoring = attachScoring;

  E.screens.learn = function (main, params) {
    var meta = course.lesson(params.id);
    if (!meta) {
      main.innerHTML = '<div class="page">' + ui.error("Không tìm thấy bài học", "Mã bài “" + params.id + "” không có trong khóa học.",
        '<a class="btn btn--secondary" href="#/course">Xem lộ trình</a>') + "</div>";
      return;
    }
    if (!meta.available) {
      main.innerHTML = '<div class="page">' + ui.unavailable(meta) + "</div>";
      return;
    }
    ui.pageTitle(meta.title);
    main.innerHTML = '<div class="page">' + ui.loading("Đang tải bài học…") + "</div>";
    var alive = true, player = null;

    E.loadLesson(meta.id).then(function (L) {
      if (!alive) return;
      L.id = meta.id;
      var plan = lessonPlan(L);
      var steps = plan.steps;
      var m = /[?&]s=(\d+)/.exec(window.location.hash);
      var rec = store.lesson(meta.id);
      var start = m ? Number(m[1]) : (rec && rec.step && rec.stepTotal === steps.length && rec.step < steps.length - 1 ? rec.step : 0);
      start = Math.min(Math.max(0, start), steps.length - 1);
      // Câu trả lời luyện tập không được lưu giữa chừng: vào giữa phần luyện tập thì bắt đầu lại từ câu 1
      var ex = plan.sections.filter(function (s) { return s.id === "exercises"; })[0];
      if (ex && start > ex.first && start < ex.first + ex.count) start = ex.first;

      var startedAt = Date.now();
      attachScoring(meta, steps, function () { return player.states; }, startedAt);
      player = E.player.run(main, {
        steps: steps,
        start: start,
        exitHref: "#/lesson/" + meta.id,
        exitLabel: "Thoát, về trang mở đầu bài",
        finishLabel: "Xem kết quả",
        onStep: function (i, step) { store.saveStep(meta.id, i, steps.length, step.section); },
        onFinish: function () {
          var r = store.lesson(meta.id);
          E.router.go(r && r.attempts ? "/results/" + meta.id : "/lesson/" + meta.id);
        }
      });
    }).catch(function (err) {
      if (!alive) return;
      main.innerHTML = '<div class="page">' + ui.error("Không mở được bài học", err.message + " Hãy kiểm tra lại file và thử lại.",
        '<button type="button" class="btn btn--dark" data-retry>Thử lại</button><a class="btn btn--secondary" href="#/">Về trang chủ</a>') + "</div>";
      main.querySelector("[data-retry]").addEventListener("click", function () { E.router.resolve(); });
    });

    return function cleanup() {
      alive = false;
      if (player) player.destroy();
    };
  };
})();
