/* =========================================================
   UI — các thành phần giao diện dùng lại ở nhiều màn hình.
   Mỗi hàm trả về một đoạn HTML.
   ========================================================= */
(function () {
  "use strict";

  var icon = window.EOH.icon;
  var store = window.EOH.store;
  var course = window.EOH.course;

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  var STATUS = {
    "done": { label: "Đã hoàn thành", cls: "tag--done", icon: "check" },
    "in-progress": { label: "Đang học", cls: "tag--current", icon: "dot" },
    "not-started": { label: "Chưa học", cls: "", icon: "" },
    "soon": { label: "Đang biên soạn", cls: "tag--soon", icon: "clock" }
  };

  var ui = {
    esc: esc,

    statusTag: function (status) {
      var s = STATUS[status];
      return '<span class="tag ' + s.cls + '">' + (s.icon ? icon(s.icon) : "") + esc(s.label) + "</span>";
    },

    progressBar: function (value, total, opts) {
      opts = opts || {};
      var pct = total ? Math.round((value / total) * 100) : 0;
      return '<div class="progress' + (opts.accent ? " progress--accent" : "") + (opts.thin ? " progress--thin" : "") +
        '" role="progressbar" aria-valuemin="0" aria-valuemax="' + total + '" aria-valuenow="' + value +
        '" aria-label="' + esc(opts.label || "Tiến độ") + '"><span class="progress__bar" style="width:' + pct + '%"></span></div>';
    },

    // 5 vạch cho 5 bài của một module
    segments: function (moduleId) {
      return '<div class="segments" aria-hidden="true">' + course.lessonsOfModule(moduleId).map(function (l) {
        var st = store.status(l.id);
        return '<span class="' + (st === "done" ? "is-done" : st === "in-progress" ? "is-current" : "") + '"></span>';
      }).join("") + "</div>";
    },

    // Một dòng bài học. Bài chưa có nội dung không phải là liên kết.
    lessonRow: function (lesson, opts) {
      opts = opts || {};
      var st = store.status(lesson.id);
      var cls = st === "done" ? "is-done" : st === "in-progress" ? "is-current" : st === "soon" ? "is-soon" : "";
      var num = st === "done" ? icon("check") : lesson.number;
      var rec = store.lesson(lesson.id);
      var extra = rec && rec.lastPercent !== null && rec.lastPercent !== undefined
        ? '<span class="small muted">' + rec.lastPercent + "%</span> " : "";
      var inner =
        '<span class="lesson-row__num">' + num + "</span>" +
        '<span><span class="lesson-row__title">' + (opts.showCode ? '<span class="muted small">' + esc(course.lessonLabel(lesson)) + "</span><br>" : "") +
        esc(lesson.title) + '</span><span class="lesson-row__vi">' + esc(lesson.titleVi) + "</span></span>" +
        "<span>" + extra + ui.statusTag(st) + "</span>";
      if (lesson.available) {
        return '<li><a class="lesson-row ' + cls + '" href="#/lesson/' + lesson.id + '">' + inner + "</a></li>";
      }
      return '<li><div class="lesson-row ' + cls + '">' + inner + "</div></li>";
    },

    // ---------- Khối trạng thái ----------
    loading: function (text) {
      return '<div class="state" role="status" aria-live="polite"><div class="spinner"></div><p>' + esc(text || "Đang tải…") + "</p></div>";
    },
    empty: function (title, text, actionHtml, inline) {
      return '<div class="state' + (inline ? " state--inline" : "") + '"><div class="state__icon">' + icon("layers") + "</div>" +
        "<h2>" + esc(title) + "</h2>" + (text ? "<p>" + esc(text) + "</p>" : "") +
        (actionHtml ? '<div class="btn-row">' + actionHtml + "</div>" : "") + "</div>";
    },
    error: function (title, text, actionHtml) {
      return '<div class="state state--error" role="alert"><div class="state__icon">' + icon("alert") + "</div>" +
        "<h2>" + esc(title) + "</h2>" + (text ? "<p>" + esc(text) + "</p>" : "") +
        '<div class="btn-row">' + (actionHtml || '<a class="btn btn--secondary" href="#/">Về trang tổng quan</a>') + "</div></div>";
    },
    unavailable: function (lesson) {
      var mod = course.module(lesson.moduleId);
      return '<div class="state"><div class="state__icon">' + icon("clock") + "</div>" +
        '<p class="eyebrow">' + esc(course.lessonLabel(lesson)) + "</p>" +
        "<h2>" + esc(lesson.title) + "</h2>" +
        "<p>Bài học này đang được biên soạn và chưa có nội dung. Bạn có thể xem các bài khác trong module hoặc tiếp tục bài đang học.</p>" +
        '<div class="btn-row"><a class="btn btn--secondary" href="#/module/' + mod.id + '">' + icon("arrowLeft") + "Về module</a>" +
        '<a class="btn btn--dark" href="#/">Về trang tổng quan</a></div></div>';
    },

    pageTitle: function (title) {
      document.title = title ? title + " — English for Office & HR" : "English for Office & HR";
    },

    formatDate: function (iso) {
      var d = new Date(iso);
      if (isNaN(d)) return "";
      return d.toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit", year: "numeric" });
    }
  };

  window.EOH.ui = ui;
})();
