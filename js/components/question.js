/* =========================================================
   QUESTION — câu hỏi lựa chọn (trắc nghiệm / điền chỗ trống).
   Dùng chung cho phần Nghe, Đọc trong bài học và màn Luyện tập.

   Dữ liệu câu hỏi:
     { id, type: "choice" | "gap", prompt, context?, options: [],
       answer: <vị trí đáp án đúng>, explanation }
     Với "gap", chỗ trống trong prompt viết là ___
   Trạng thái (do màn hình giữ): { selected: số | null, checked: true/false }
   Đáp án chỉ hiện SAU khi bấm "Kiểm tra".
   ========================================================= */
(function () {
  "use strict";

  var icon = window.EOH.icon;
  var esc = window.EOH.ui.esc;
  var KEYS = ["A", "B", "C", "D", "E"];

  function promptHtml(q, st) {
    var text = esc(q.prompt);
    if (q.type === "gap") {
      var fill = st.checked && st.selected !== null ? esc(q.options[st.selected]) : "&nbsp;";
      var cls = st.checked ? (st.selected === q.answer ? " gap--ok" : " gap--bad") : "";
      text = text.replace("___", '<span class="gap' + cls + '">' + fill + '</span><span class="visually-hidden">(chỗ trống)</span>');
    }
    return text;
  }

  function render(q, st, opts) {
    opts = opts || {};
    var correct = st.checked && st.selected === q.answer;
    var h = '<div class="question" data-question="' + esc(q.id) + '">';
    if (q.context) h += '<p class="question__context">' + esc(q.context) + "</p>";
    h += '<p class="question__prompt" id="qp-' + esc(q.id) + '">' + promptHtml(q, st) + "</p>";
    h += '<ul class="options" role="list" aria-labelledby="qp-' + esc(q.id) + '">';
    q.options.forEach(function (opt, i) {
      var cls = "option";
      var mark = "";
      if (st.checked) {
        if (i === q.answer) { cls += " is-correct"; mark = icon("check"); }
        else if (i === st.selected) { cls += " is-wrong"; mark = icon("x"); }
        else cls += " is-dim";
      } else if (i === st.selected) {
        cls += " is-selected";
      }
      var sr = st.checked && i === q.answer ? " (đáp án đúng)" : st.checked && i === st.selected ? " (bạn chọn, chưa đúng)" : "";
      h += '<li><button type="button" class="' + cls + '" data-option="' + i + '" aria-pressed="' + (i === st.selected) + '"' +
        (st.checked ? " disabled" : "") + '><span class="option__key">' + KEYS[i] + "</span><span>" + esc(opt) +
        '<span class="visually-hidden">' + sr + '</span></span><span class="option__mark">' + mark + "</span></button></li>";
    });
    h += "</ul>";

    if (st.checked && opts.noFeedback) {
      // lời giải thích do màn hình gọi tự hiển thị (bảng màu dưới đáy khi học từng màn)
    } else if (st.checked) {
      h += '<div class="feedback ' + (correct ? "feedback--correct" : "feedback--wrong") + '" role="status">' +
        '<p class="feedback__title">' + icon(correct ? "check" : "x") + (correct ? "Chính xác" : "Chưa đúng — đáp án: " + esc(q.options[q.answer])) + "</p>" +
        "<p>" + esc(q.explanation) + "</p></div>";
    } else if (!opts.hideCheck) {
      h += '<div class="btn-row"><button type="button" class="btn btn--dark" data-check' + (st.selected === null ? " disabled" : "") + ">Kiểm tra</button></div>";
    }
    return h + "</div>";
  }

  // Gắn câu hỏi vào một phần tử. hooks.onChange(state) gọi khi chọn / kiểm tra.
  function mount(el, q, st, hooks) {
    hooks = hooks || {};
    function draw() { el.innerHTML = render(q, st, hooks); }
    el.addEventListener("click", function (e) {
      var opt = e.target.closest("[data-option]");
      if (opt && !st.checked) {
        st.selected = Number(opt.getAttribute("data-option"));
        draw();
        var again = el.querySelector('[data-option="' + st.selected + '"]');
        if (again) again.focus();
        if (hooks.onChange) hooks.onChange(st);
        return;
      }
      if (e.target.closest("[data-check]") && st.selected !== null && !st.checked) {
        check();
      }
    });
    function check() {
      st.checked = true;
      draw();
      var fb = el.querySelector(".feedback");
      if (fb) fb.setAttribute("tabindex", "-1");
      if (hooks.onChange) hooks.onChange(st);
    }
    draw();
    return { redraw: draw, check: check, state: st };
  }

  window.EOH.question = { render: render, mount: mount, isCorrect: function (q, st) { return st.checked && st.selected === q.answer; } };
})();
