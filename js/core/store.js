/* =========================================================
   STORE — lưu tiến độ học.

   Hiện tại lưu trong trình duyệt (localStorage) trên máy này.
   Mọi thao tác đọc/ghi đi qua "adapter", nên sau này muốn
   đồng bộ với tài khoản/máy chủ chỉ cần viết adapter mới có
   cùng hai hàm load() và save(data).

   Chế độ "dữ liệu mẫu": dùng bản sao của EOH.demoProgress trong
   bộ nhớ, KHÔNG ghi vào dữ liệu thật, mất khi tải lại trang.
   ========================================================= */
(function () {
  "use strict";

  var KEY = "eoh.progress.v1";
  var DEMO_KEY = "eoh.demo-mode";
  var PASS_PERCENT = 70;     // đạt từ 70% trở lên thì hoàn thành bài
  var REVIEW_PERCENT = 80;   // lần làm gần nhất dưới 80% thì gợi ý ôn lại
  var WEEK_GOAL = 5;         // mục tiêu tuần: số bài luyện tập trong một tuần
  var course = window.EOH.course;

  function emptyData() {
    return { version: 1, lessons: {}, history: [], writing: {}, days: {} };
  }

  // ---------- Adapter lưu trên máy ----------
  var localAdapter = {
    ok: true,
    load: function () {
      try {
        var raw = window.localStorage.getItem(KEY);
        if (!raw) return emptyData();
        var data = JSON.parse(raw);
        if (!data || data.version !== 1) return emptyData();
        data.lessons = data.lessons || {};
        data.history = data.history || [];
        data.writing = data.writing || {};
        data.days = data.days || {};
        return data;
      } catch (e) {
        this.ok = false;
        return emptyData();
      }
    },
    save: function (data) {
      try {
        window.localStorage.setItem(KEY, JSON.stringify(data));
        this.ok = true;
      } catch (e) {
        this.ok = false;
      }
    }
  };

  function readFlag() {
    try { return window.sessionStorage.getItem(DEMO_KEY) === "1"; } catch (e) { return false; }
  }
  function writeFlag(on) {
    try {
      if (on) window.sessionStorage.setItem(DEMO_KEY, "1");
      else window.sessionStorage.removeItem(DEMO_KEY);
    } catch (e) { /* không sao: chế độ mẫu chỉ kéo dài tới khi tải lại */ }
  }

  var adapter = localAdapter;
  var demo = readFlag();
  var realData = adapter.load();
  var demoData = demo ? clone(window.EOH.demoProgress) : null;
  var listeners = [];

  function clone(x) { return JSON.parse(JSON.stringify(x)); }
  function data() { return demo ? demoData : realData; }
  // kind: "data" (ghi tiến độ) hoặc "mode" (bật/tắt dữ liệu mẫu, xóa tiến độ)
  function commit(kind) {
    if (!demo) adapter.save(realData);
    listeners.forEach(function (fn) { fn(kind || "data"); });
  }
  function rec(lessonId, create) {
    var d = data();
    if (!d.lessons[lessonId] && create) {
      d.lessons[lessonId] = {
        status: "in-progress", sectionsSeen: [], attempts: 0,
        bestPercent: null, lastPercent: null, lastMistakes: [],
        firstOpened: new Date().toISOString(), lastVisited: null, completedAt: null
      };
    }
    return d.lessons[lessonId] || null;
  }
  function percent(score, total) { return total ? Math.round((score / total) * 100) : 0; }
  // Đánh dấu hôm nay là một ngày có học (dùng cho chuỗi ngày học)
  function markToday() {
    var d = data();
    d.days = d.days || {};
    d.days[dayKey(new Date())] = true;
  }

  var store = {
    PASS_PERCENT: PASS_PERCENT,
    REVIEW_PERCENT: REVIEW_PERCENT,

    isDemo: function () { return demo; },
    storageOk: function () { return adapter.ok; },
    enterDemo: function () { demo = true; demoData = clone(window.EOH.demoProgress); writeFlag(true); commit("mode"); },
    exitDemo: function () { demo = false; demoData = null; writeFlag(false); commit("mode"); },
    onChange: function (fn) { listeners.push(fn); },

    lesson: function (lessonId) { return rec(lessonId, false); },

    markVisited: function (lessonId, sectionsTotal) {
      var r = rec(lessonId, true);
      r.lastVisited = new Date().toISOString();
      if (sectionsTotal) r.sectionsTotal = sectionsTotal;
      data().lastLessonId = lessonId;
      commit();
    },
    markSectionSeen: function (lessonId, sectionId) {
      var r = rec(lessonId, true);
      if (r.sectionsSeen.indexOf(sectionId) === -1) {
        r.sectionsSeen.push(sectionId);
        commit();
      }
    },
    // Học từng màn: lưu màn đang học để lần sau học tiếp
    saveStep: function (lessonId, index, total, sectionId) {
      var r = rec(lessonId, true);
      r.step = index;
      r.stepTotal = total;
      r.lastVisited = new Date().toISOString();
      if (sectionId && r.sectionsSeen.indexOf(sectionId) === -1) r.sectionsSeen.push(sectionId);
      data().lastLessonId = lessonId;
      markToday();
      commit();
    },
    // Ghi kết quả một lượt luyện tập
    // answers: { mã câu hỏi: vị trí lựa chọn } để xem lại lỗi sai
    // minutes: thời gian học của lượt này (không bắt buộc)
    recordPractice: function (lessonId, score, total, mistakeIds, answers, minutes) {
      var r = rec(lessonId, true);
      var p = percent(score, total);
      r.attempts += 1;
      r.lastMinutes = minutes || null;
      markToday();
      r.lastPercent = p;
      r.lastScore = score;
      r.lastTotal = total;
      r.lastMistakes = mistakeIds.slice();
      r.lastAnswers = answers || {};
      r.bestPercent = r.bestPercent === null ? p : Math.max(r.bestPercent, p);
      if (p >= PASS_PERCENT && r.status !== "completed") {
        r.status = "completed";
        r.completedAt = new Date().toISOString();
      }
      data().history.unshift({ lessonId: lessonId, score: score, total: total, percent: p, date: new Date().toISOString() });
      data().history = data().history.slice(0, 50);
      commit();
      return { percent: p, passed: p >= PASS_PERCENT };
    },
    getWriting: function (lessonId) { return data().writing[lessonId] || ""; },
    saveWriting: function (lessonId, text) {
      data().writing[lessonId] = text;
      commit();
    },
    reset: function () {
      if (demo) return;
      realData = emptyData();
      commit("mode");
    },

    // ---------- Số liệu suy ra ----------
    // "done" | "in-progress" | "not-started" | "soon"
    status: function (lessonId) {
      var lesson = course.lesson(lessonId);
      var r = rec(lessonId, false);
      if (r && r.status === "completed") return "done";
      if (!lesson || !lesson.available) return "soon";
      return r ? "in-progress" : "not-started";
    },

    // Bài để "Tiếp tục học": bài đang học gần nhất, nếu không có thì
    // bài có nội dung đầu tiên chưa hoàn thành.
    currentLesson: function () {
      var d = data();
      if (d.lastLessonId && store.status(d.lastLessonId) === "in-progress") {
        return course.lesson(d.lastLessonId);
      }
      var next = course.availableLessons().filter(function (l) { return store.status(l.id) !== "done"; })[0];
      return next || null;
    },

    // Bài mở gần nhất (kể cả đã hoàn thành)
    lastLesson: function () {
      var id = data().lastLessonId;
      return id ? course.lesson(id) : null;
    },

    levelStats: function (levelId) {
      var list = course.lessonsOfLevel(levelId);
      return {
        total: list.length,
        done: list.filter(function (l) { return store.status(l.id) === "done"; }).length,
        available: list.filter(function (l) { return l.available; }).length
      };
    },
    moduleStats: function (moduleId) {
      var list = course.lessonsOfModule(moduleId);
      return {
        total: list.length,
        done: list.filter(function (l) { return store.status(l.id) === "done"; }).length,
        available: list.filter(function (l) { return l.available; }).length
      };
    },
    totals: function () {
      var done = course.lessons.filter(function (l) { return store.status(l.id) === "done"; }).length;
      return { total: course.lessons.length, done: done, available: course.availableLessons().length };
    },

    reviewList: function () {
      var d = data();
      return Object.keys(d.lessons)
        .filter(function (id) { var r = d.lessons[id]; return r.lastPercent !== null && r.lastPercent < REVIEW_PERCENT; })
        .map(function (id) { return { lesson: course.lesson(id), record: d.lessons[id] }; })
        .filter(function (x) { return x.lesson; });
    },
    history: function (limit) {
      return data().history.slice(0, limit || 50)
        .map(function (h) { return { entry: h, lesson: course.lesson(h.lessonId) }; })
        .filter(function (x) { return x.lesson; });
    },

    // Chuỗi ngày học: ngày nào có học ít nhất một màn hoặc một lần luyện tập là một ngày học.
    // Tính theo giờ trên máy người học. Chuỗi vẫn giữ nếu hôm nay chưa học nhưng hôm qua có học.
    activeDays: function () {
      var set = {};
      data().history.forEach(function (h) { set[dayKey(new Date(h.date))] = true; });
      Object.keys(data().days || {}).forEach(function (k) { set[k] = true; });
      return set;
    },
    // Mục tiêu tuần: số bài khác nhau đã luyện tập từ thứ Hai tuần này
    WEEK_GOAL: WEEK_GOAL,
    weekStart: function () {
      var d = new Date();
      d.setHours(0, 0, 0, 0);
      d.setDate(d.getDate() - ((d.getDay() + 6) % 7));
      return d;
    },
    weekLessons: function () {
      var from = store.weekStart().getTime();
      var seen = {};
      data().history.forEach(function (h) { if (new Date(h.date).getTime() >= from) seen[h.lessonId] = true; });
      return Object.keys(seen).length;
    },
    streak: function () {
      var days = store.activeDays();
      var d = new Date();
      if (!days[dayKey(d)]) d.setDate(d.getDate() - 1);
      var n = 0;
      while (days[dayKey(d)]) { n++; d.setDate(d.getDate() - 1); }
      return n;
    },
    dayKey: function (d) { return dayKey(d); }
  };

  function dayKey(d) {
    return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
  }

  window.EOH.store = store;
})();
