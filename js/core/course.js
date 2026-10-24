/* =========================================================
   COURSE — hàm tra cứu giáo trình (không chứa giao diện)
   ========================================================= */
(function () {
  "use strict";
  var C = window.EOH.curriculum;

  function byId(list) {
    var map = {};
    list.forEach(function (x) { map[x.id] = x; });
    return map;
  }
  var levelMap = byId(C.levels);
  var moduleMap = byId(C.modules);
  var lessonMap = byId(C.lessons);

  var course = {
    levels: C.levels,
    modules: C.modules,
    lessons: C.lessons,

    level: function (id) { return levelMap[id] || null; },
    module: function (id) { return moduleMap[id] || null; },
    lesson: function (id) { return lessonMap[id] || null; },

    modulesOf: function (levelId) {
      var lv = levelMap[levelId];
      return lv ? lv.moduleIds.map(function (id) { return moduleMap[id]; }) : [];
    },
    lessonsOfModule: function (moduleId) {
      var m = moduleMap[moduleId];
      return m ? m.lessonIds.map(function (id) { return lessonMap[id]; }) : [];
    },
    lessonsOfLevel: function (levelId) {
      return C.lessons.filter(function (l) { return l.levelId === levelId; });
    },
    availableLessons: function () {
      return C.lessons.filter(function (l) { return l.available; });
    },

    // Module trước / sau trong toàn khóa (để điều hướng)
    adjacentModule: function (moduleId, step) {
      var i = C.modules.findIndex(function (m) { return m.id === moduleId; });
      return C.modules[i + step] || null;
    },
    // Bài trước / sau trong cùng khóa
    adjacentLesson: function (lessonId, step) {
      var i = C.lessons.findIndex(function (l) { return l.id === lessonId; });
      return C.lessons[i + step] || null;
    },

    // "A2 · Module 3 · Bài 4"
    lessonLabel: function (lesson) {
      var m = moduleMap[lesson.moduleId];
      return lesson.levelId.toUpperCase() + " · Module " + m.number + " · Bài " + lesson.number;
    }
  };

  window.EOH.course = course;
})();
