/* =========================================================
   APP — khởi động: khai báo đường dẫn, thanh điều hướng,
   dải "dữ liệu mẫu", dọn dẹp khi chuyển màn hình.
   ========================================================= */
(function () {
  "use strict";

  var E = window.EOH;
  var router = E.router, store = E.store, ui = E.ui, icon = E.icon;
  var main = document.getElementById("main");
  var cleanup = null;
  var firstRender = true;

  function mount(screen, navKey) {
    return function (params, path) {
      if (cleanup) { try { cleanup(); } catch (e) { /* bỏ qua */ } cleanup = null; }
      document.body.classList.remove("is-focus-mode", "is-flow");
      setNav(navKey);
      drawStreak();
      try {
        cleanup = E.screens[screen](main, params || {}) || null;
      } catch (err) {
        main.innerHTML = '<div class="page">' + ui.error("Đã xảy ra lỗi", "Màn hình không hiển thị được. Hãy tải lại trang.",
          '<button type="button" class="btn btn--dark" onclick="location.reload()">Tải lại trang</button>') + "</div>";
        if (window.console) console.error(err);
      }
      if (!firstRender) {
        window.scrollTo(0, 0);
        main.focus({ preventScroll: true });
      }
      firstRender = false;
    };
  }

  function setNav(key) {
    document.querySelectorAll(".main-nav a").forEach(function (a) {
      if (a.getAttribute("data-nav") === key) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
  }

  // Chuỗi ngày học liên tiếp trên thanh trên cùng
  function drawStreak() {
    var el = document.getElementById("streak-chip");
    if (!el) return;
    var n = store.streak();
    el.classList.toggle("is-zero", n === 0);
    el.innerHTML = icon("flame") + n + '<span class="streak-chip__unit"> ngày</span><span class="visually-hidden"> học liên tiếp</span>';
    el.title = n ? n + " ngày học liên tiếp" : "Làm một bài luyện tập hôm nay để bắt đầu chuỗi ngày học";
  }

  function drawBanner() {
    var el = document.getElementById("demo-banner");
    if (store.isDemo()) {
      el.hidden = false;
      el.innerHTML = '<div class="demo-banner__inner"><span>' + icon("info", "inline-icon") +
        " Đang xem <strong>dữ liệu mẫu</strong> của một người học giả định — thao tác lúc này không được lưu.</span>" +
        '<button type="button" data-demo-off>Thoát dữ liệu mẫu</button></div>';
      el.querySelector("[data-demo-off]").addEventListener("click", function () { store.exitDemo(); });
    } else {
      el.hidden = true;
      el.innerHTML = "";
    }
  }

  // Thanh điều hướng: thêm biểu tượng (chỉ hiện trên điện thoại)
  document.querySelectorAll(".main-nav a").forEach(function (a) {
    a.insertAdjacentHTML("afterbegin", icon(a.getAttribute("data-icon")));
  });

  router.add("/", mount("dashboard", "home"));
  router.add("/course", mount("course", "course"));
  router.add("/course/:level", mount("course", "course"));
  router.add("/module/:id", mount("module", "course"));
  router.add("/lesson/:id", mount("lesson", "course"));      // trang mở đầu bài
  router.add("/learn/:id", mount("learn", "course"));        // học từng màn
  router.add("/read/:id", mount("read", "course"));          // cả bài trên một trang
  router.add("/practice/:id", mount("practice", "course"));
  router.add("/results/:id", mount("results", "course"));
  router.add("/review", mount("review", "review"));
  router.add("/progress", mount("progress", "progress"));
  router.notFound = function (path) {
    if (cleanup) { cleanup(); cleanup = null; }
    document.body.classList.remove("is-focus-mode", "is-flow");
    setNav("");
    ui.pageTitle("Không tìm thấy trang");
    main.innerHTML = '<div class="page">' + ui.error("Không tìm thấy trang", "Đường dẫn “" + path + "” không tồn tại.") + "</div>";
  };

  store.onChange(function (kind) {
    if (kind === "mode") { drawBanner(); router.resolve(); }
  });

  drawBanner();
  router.start();
})();
