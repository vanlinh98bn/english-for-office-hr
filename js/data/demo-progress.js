/* =========================================================
   DỮ LIỆU MẪU — chỉ dùng khi bật "Xem với dữ liệu mẫu".
   Đây là tiến độ của một người học giả định, để xem trước
   giao diện khi đã học nhiều bài. Không phải dữ liệu thật.
   ========================================================= */
(function () {
  "use strict";

  function done(percent, date) {
    return {
      status: "completed", sectionsSeen: [], attempts: 1,
      bestPercent: percent, lastPercent: percent, lastScore: percent / 10, lastTotal: 10, lastMistakes: [],
      firstOpened: date, lastVisited: date, completedAt: date
    };
  }

  window.EOH = window.EOH || {};
  window.EOH.demoProgress = {
    version: 1,
    lastLessonId: "a2-m3-l4",
    lessons: {
      "a1-m1-l1": done(100, "2026-09-01T08:10:00Z"),
      "a1-m1-l2": done(90, "2026-09-02T08:05:00Z"),
      "a1-m1-l3": done(90, "2026-09-03T08:15:00Z"),
      "a1-m1-l4": done(80, "2026-09-05T08:00:00Z"),
      "a1-m1-l5": done(100, "2026-09-06T08:20:00Z"),
      "a1-m2-l1": done(90, "2026-09-08T08:00:00Z"),
      "a1-m2-l2": done(70, "2026-09-09T08:00:00Z"),
      "a1-m2-l3": {
        status: "in-progress", sectionsSeen: [], attempts: 2,
        bestPercent: 60, lastPercent: 60, lastScore: 6, lastTotal: 10, lastMistakes: [],
        firstOpened: "2026-09-10T08:00:00Z", lastVisited: "2026-09-11T08:00:00Z", completedAt: null
      },
      "a2-m3-l4": {
        status: "in-progress", sectionsSeen: ["objectives", "vocabulary", "pronunciation"], sectionsTotal: 9, attempts: 0,
        bestPercent: null, lastPercent: null, lastMistakes: [],
        firstOpened: "2026-10-20T08:00:00Z", lastVisited: "2026-10-22T08:00:00Z", completedAt: null
      }
    },
    history: [
      { lessonId: "a1-m2-l3", score: 6, total: 10, percent: 60, date: "2026-09-11T08:00:00Z" },
      { lessonId: "a1-m2-l3", score: 5, total: 10, percent: 50, date: "2026-09-10T08:00:00Z" },
      { lessonId: "a1-m2-l2", score: 7, total: 10, percent: 70, date: "2026-09-09T08:00:00Z" },
      { lessonId: "a1-m2-l1", score: 9, total: 10, percent: 90, date: "2026-09-08T08:00:00Z" },
      { lessonId: "a1-m1-l5", score: 10, total: 10, percent: 100, date: "2026-09-06T08:20:00Z" },
      { lessonId: "a1-m1-l4", score: 8, total: 10, percent: 80, date: "2026-09-05T08:00:00Z" }
    ],
    writing: {}
  };
})();
