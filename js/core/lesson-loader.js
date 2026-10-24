/* =========================================================
   LESSON LOADER — tải nội dung bài học khi cần.
   Mỗi bài là một file js/content/lessons/<mã>.js, tự đăng ký
   bằng EOH.registerLesson({...}). Cách này chạy được cả khi mở
   file trực tiếp (file://), không cần máy chủ.
   ========================================================= */
(function () {
  "use strict";

  var cache = {};
  var pending = {};
  var TIMEOUT_MS = 10000;

  window.EOH.registerLesson = function (lesson) {
    cache[lesson.id] = lesson;
    if (pending[lesson.id]) pending[lesson.id].resolve(lesson);
  };

  window.EOH.loadLesson = function (id) {
    if (cache[id]) return Promise.resolve(cache[id]);
    if (pending[id]) return pending[id].promise;

    var entry = {};
    entry.promise = new Promise(function (resolve, reject) {
      entry.resolve = function (l) { clearTimeout(timer); delete pending[id]; resolve(l); };
      entry.reject = function (err) { clearTimeout(timer); delete pending[id]; script.remove(); reject(err); };
      var script = document.createElement("script");
      script.src = "js/content/lessons/" + encodeURIComponent(id) + ".js";
      script.onerror = function () { entry.reject(new Error("Không tải được file nội dung bài " + id + ".")); };
      script.onload = function () {
        if (!cache[id]) entry.reject(new Error("File nội dung bài " + id + " không đăng ký đúng mã bài."));
      };
      var timer = setTimeout(function () { entry.reject(new Error("Tải bài học quá lâu.")); }, TIMEOUT_MS);
      document.head.appendChild(script);
    });
    pending[id] = entry;
    return entry.promise;
  };
})();
