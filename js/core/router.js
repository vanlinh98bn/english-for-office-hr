/* =========================================================
   ROUTER — điều hướng bằng dấu # trên địa chỉ trang, nên app
   chạy được khi mở trực tiếp file index.html, không cần máy chủ.

   #/                     Tổng quan (dashboard)
   #/course[/a2]          Khóa học, chọn cấp độ
   #/module/a2-m3         Một module
   #/lesson/a2-m3-l4      Trang mở đầu một bài học
   #/learn/a2-m3-l4?s=5   Học từng màn (s = màn bắt đầu)
   #/read/a2-m3-l4        Cả bài trên một trang
   #/practice/a2-m3-l4    Luyện tập của bài
   #/results/a2-m3-l4     Kết quả lần luyện tập gần nhất
   #/review               Ôn tập
   #/progress             Tiến độ
   ========================================================= */
(function () {
  "use strict";

  var routes = [];

  var router = {
    add: function (pattern, handler) {
      // "/lesson/:id" -> /^\/lesson\/([^/]+)$/
      var keys = [];
      var re = new RegExp("^" + pattern.replace(/:([a-z]+)/g, function (_, k) {
        keys.push(k); return "([^/]+)";
      }) + "/?$");
      routes.push({ re: re, keys: keys, handler: handler });
    },
    path: function () {
      var h = window.location.hash.replace(/^#/, "");
      return h || "/";
    },
    go: function (path) { window.location.hash = path; },
    resolve: function () {
      var path = router.path().split("?")[0];
      for (var i = 0; i < routes.length; i++) {
        var m = path.match(routes[i].re);
        if (m) {
          var params = {};
          routes[i].keys.forEach(function (k, j) { params[k] = decodeURIComponent(m[j + 1]); });
          return routes[i].handler(params, path);
        }
      }
      return router.notFound && router.notFound(path);
    },
    start: function () {
      window.addEventListener("hashchange", router.resolve);
      router.resolve();
    }
  };

  window.EOH.router = router;
})();
