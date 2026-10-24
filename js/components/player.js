/* =========================================================
   PLAYER — khung "học từng màn": mỗi màn một việc.
   Trên cùng: nút thoát, thanh tiến độ, số màn.
   Giữa: nội dung màn. Dưới đáy: nút "Tiếp tục". Màn câu hỏi: bấm chọn
   đáp án là chấm ngay, hiện bảng xanh (đúng) hay đỏ (sai) kèm giải thích.

   Màn có một câu hỏi:   { question }
   Màn có nhiều câu hỏi: { questions: [...] } — đoạn văn / bài nghe (html)
     nằm yên ở trên, các câu hỏi hiện lần lượt bên dưới. Trả lời xong thì
     hiện đáp án rồi tự chuyển sang câu tiếp sau vài giây (hoặc bấm nút).

   EOH.player.run(main, {
     steps: [ { tag, html: function () {}, wire?: function (el) { return cleanup }, lines?,
                question?, questions?, onLeave?: function () {} } ],
     start, exitHref, exitLabel, finishLabel,
     onStep: function (index, step) {},   // gọi mỗi khi sang màn mới
     onFinish: function () {}             // bấm nút ở màn cuối
   })  → { destroy, states }
   ========================================================= */
(function () {
  "use strict";

  var E = window.EOH;
  var icon = E.icon, esc = E.ui.esc, speech = E.speech, Q = E.question;
  var AUTO_OK_MS = 2200;    // đúng: xem đáp án rồi tự sang câu tiếp
  var AUTO_WRONG_MS = 5000; // sai: chờ lâu hơn để đọc giải thích

  function run(main, cfg) {
    var steps = cfg.steps;
    var total = steps.length;
    var index = Math.max(0, Math.min(cfg.start || 0, total - 1));
    var states = steps.map(function (s) {
      if (s.questions) return { qi: 0, subs: s.questions.map(function () { return { selected: null, checked: false }; }) };
      return s.question ? { selected: null, checked: false } : null;
    });
    var stepCleanup = null;
    var alive = true;
    var timer = null;

    document.body.classList.add("is-flow");
    main.innerHTML =
      '<div class="flow">' +
        '<header class="flow__top"><div class="flow__top-in">' +
          '<a class="flow__x" href="' + cfg.exitHref + '" aria-label="' + esc(cfg.exitLabel || "Thoát") + '">' + icon("x") + "</a>" +
          '<div class="flow__bar" role="progressbar" aria-label="Tiến độ bài học" aria-valuemin="0" aria-valuemax="' + total + '"><i></i></div>' +
          '<span class="flow__count" data-count></span>' +
        "</div></header>" +
        '<div class="flow__body" data-body></div>' +
        '<footer class="flow__foot" data-foot></footer>' +
      "</div>";

    var bodyEl = main.querySelector("[data-body]");
    var footEl = main.querySelector("[data-foot]");
    var barEl = main.querySelector(".flow__bar");
    var countEl = main.querySelector("[data-count]");
    var qApi = null;

    function isLast() { return index === total - 1; }
    function clearTimer() { if (timer) { clearTimeout(timer); timer = null; } }

    // Câu hỏi đang hiển thị của màn hiện tại: { q, st } hoặc null
    function cur() {
      var step = steps[index], s = states[index];
      if (step.questions) return { q: step.questions[s.qi], st: s.subs[s.qi], multi: true, last: s.qi === step.questions.length - 1 };
      if (step.question) return { q: step.question, st: s, multi: false, last: true };
      return null;
    }

    function backBtn() {
      return '<button type="button" class="btn btn--secondary flow__back" data-back aria-label="Màn trước"' + (index === 0 ? " disabled" : "") + ">" + icon("arrowLeft") + "</button>";
    }
    function nextLabel() { return isLast() ? (cfg.finishLabel || "Hoàn thành") : "Tiếp tục"; }

    function drawFoot() {
      var c = cur();
      if (c && !c.st.checked) {
        // chọn đáp án là chấm ngay, nên ở đây chỉ nhắc chọn
        footEl.className = "flow__foot";
        footEl.innerHTML = '<div class="flow__foot-in">' + backBtn() +
          '<button type="button" class="btn btn--primary flow__main" disabled>Chọn một đáp án</button></div>';
        return;
      }
      if (c) {
        var ok = c.st.selected === c.q.answer;
        var more = c.multi && !c.last;
        footEl.className = "flow__foot sheet " + (ok ? "sheet--ok" : "sheet--bad");
        footEl.innerHTML = '<div class="flow__foot-in flow__foot-in--sheet">' +
          '<div class="sheet__msg" role="status" tabindex="-1">' +
            '<p class="sheet__title"><span class="sheet__bubble">' + icon(ok ? "check" : "x") + "</span>" + (ok ? "Chính xác!" : "Chưa đúng") + "</p>" +
            "<p>" + (ok ? "" : "Đáp án: <strong>" + esc(c.q.options[c.q.answer].replace(/[.!?]+$/, "")) + "</strong>. ") + esc(c.q.explanation) + "</p>" +
            (more ? '<p class="sheet__auto small">Tự chuyển sang câu tiếp sau vài giây…</p>' : "") +
          "</div>" +
          '<div class="flow__foot-row">' + backBtn() +
            '<button type="button" class="btn ' + (ok ? "btn--green" : "btn--red") + ' flow__main" data-next>' + (more ? "Câu tiếp" : ok || isLast() ? nextLabel() : "Đã hiểu") + "</button></div>" +
        "</div>";
        return;
      }
      footEl.className = "flow__foot";
      footEl.innerHTML = '<div class="flow__foot-in">' + backBtn() +
        '<button type="button" class="btn btn--primary flow__main" data-next>' + nextLabel() + "</button></div>";
    }

    // Gắn câu hỏi hiện tại vào ô [data-q]
    function mountQuestion(focusIt) {
      var c = cur();
      qApi = null;
      var holderEl = bodyEl.querySelector("[data-q]");
      if (!c || !holderEl) return;
      holderEl.innerHTML = "";
      var holder = document.createElement("div");
      holderEl.appendChild(holder);
      qApi = Q.mount(holder, c.q, c.st, {
        hideCheck: true, noFeedback: true,
        onChange: function (st) { if (!st.checked && st.selected !== null) check(); else drawFoot(); }
      });
      var step = steps[index];
      if (step.questions) {
        var tag = bodyEl.querySelector(".step-tag");
        if (tag) tag.textContent = step.tag + " · Câu " + (states[index].qi + 1) + "/" + step.questions.length;
        var head = bodyEl.querySelector("[data-qhead]");
        if (head) head.textContent = "Câu " + (states[index].qi + 1) + "/" + step.questions.length;
        if (focusIt) holderEl.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
      }
    }

    function show(i) {
      clearTimer();
      if (stepCleanup) { try { stepCleanup(); } catch (e) { /* bỏ qua */ } stepCleanup = null; }
      speech.stop();
      index = i;
      var step = steps[i];
      barEl.firstChild.style.width = Math.round((i / total) * 100) + "%";
      barEl.setAttribute("aria-valuenow", String(i + 1));
      countEl.textContent = (i + 1) + "/" + total;

      bodyEl.innerHTML = '<div class="flow__step screen-enter">' +
        (step.tag ? '<p class="step-tag" tabindex="-1">' + esc(step.tag) + "</p>" : "") +
        step.html() +
        (step.questions ? '<div class="qblock"><p class="qblock__head" data-qhead></p><div data-q class="flow__q"></div></div>'
          : step.question ? '<div data-q class="flow__q"></div>' : "") + "</div>";
      mountQuestion(false);
      if (step.wire) stepCleanup = step.wire(bodyEl.firstChild) || null;
      drawFoot();
      window.scrollTo(0, 0);
      var tag = bodyEl.querySelector(".step-tag");
      if (tag) tag.focus({ preventScroll: true });
      if (cfg.onStep) cfg.onStep(i, step);
    }

    function check() {
      var c = cur();
      if (!qApi || !c || c.st.selected === null || c.st.checked) return;
      qApi.check();
      drawFoot();
      var msg = footEl.querySelector(".sheet__msg");
      if (msg) msg.focus({ preventScroll: true });
      // đưa các đáp án lên phần trên màn hình để không bị bảng đúng/sai che
      if (c.multi) {
        var qh = bodyEl.querySelector(".qblock");
        if (qh) qh.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
      }
      // nhiều câu hỏi trên một màn: tự sang câu tiếp
      if (c.multi && !c.last) {
        clearTimer();
        var at = index;
        timer = setTimeout(function () { timer = null; if (alive && index === at) next(); }, c.st.selected === c.q.answer ? AUTO_OK_MS : AUTO_WRONG_MS);
      }
    }
    function next() {
      clearTimer();
      var c = cur();
      if (c && !c.st.checked) return;
      if (c && c.multi && !c.last) {
        states[index].qi++;
        mountQuestion(true);
        drawFoot();
        return;
      }
      var step = steps[index];
      if (step.onLeave) step.onLeave();
      if (!alive) return;
      if (isLast()) { if (cfg.onFinish) cfg.onFinish(); return; }
      show(index + 1);
    }
    function back() {
      clearTimer();
      var c = cur();
      if (c && c.multi && states[index].qi > 0) {
        states[index].qi--;
        mountQuestion(true);
        drawFoot();
        return;
      }
      if (index > 0) show(index - 1);
    }

    var onClick = function (e) {
      if (e.target.closest("[data-check]")) return check();
      if (e.target.closest("[data-next]")) return next();
      if (e.target.closest("[data-back]")) return back();
      var b = e.target.closest("[data-say]");
      if (b && !b.disabled) { speech.speak(b.getAttribute("data-say"), b, Number(b.getAttribute("data-rate")) || undefined); return; }
      var all = e.target.closest("[data-say-all]");
      if (all && !all.disabled && steps[index].lines) speech.speak(steps[index].lines, all, Number(all.getAttribute("data-rate")) || 0.92);
    };
    main.addEventListener("click", onClick);

    var onKey = function (e) {
      if (e.altKey || e.ctrlKey || e.metaKey) return;
      var a = document.activeElement;
      if (a && /^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName)) return;
      var c = cur();
      var map = { A: 0, B: 1, C: 2, D: 3, 1: 0, 2: 1, 3: 2, 4: 3 };
      var k = e.key.toUpperCase();
      if (c && !c.st.checked && k in map && map[k] < c.q.options.length) {
        var opt = bodyEl.querySelector('[data-option="' + map[k] + '"]');
        if (opt) { opt.click(); e.preventDefault(); }
      } else if (e.key === "Enter") {
        if (a && a.closest && a.closest("a, button, summary") && !a.hasAttribute("data-option")) return;
        e.preventDefault();
        if (!c || c.st.checked) next();
      }
    };
    document.addEventListener("keydown", onKey);

    show(index);

    return {
      states: states,
      index: function () { return index; },
      destroy: function () {
        alive = false;
        clearTimer();
        if (stepCleanup) { try { stepCleanup(); } catch (e) { /* bỏ qua */ } }
        speech.stop();
        main.removeEventListener("click", onClick);
        document.removeEventListener("keydown", onKey);
        document.body.classList.remove("is-flow");
      }
    };
  }

  E.player = { run: run };
})();
