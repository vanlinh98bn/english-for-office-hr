/* =========================================================
   PROGRESS — tiến độ toàn khóa, theo cấp độ, theo module,
   lịch sử luyện tập. Ghi rõ nguồn dữ liệu (thật hay mẫu).
   ========================================================= */
(function () {
  "use strict";

  var E = window.EOH;
  var ui = E.ui, esc = ui.esc, icon = E.icon, store = E.store, course = E.course;

  E.screens.progress = function (main) {
    ui.pageTitle("Tiến độ");
    var t = store.totals();
    var history = store.history(50);
    var demo = store.isDemo();

    var source = demo
      ? '<p class="notice notice--warning">' + icon("info") + "<span><strong>Đang xem dữ liệu mẫu.</strong> Các con số dưới đây là của một người học giả định, không phải của bạn. Tắt ở dải màu tối phía trên để quay lại dữ liệu thật.</span></p>"
      : store.storageOk()
        ? '<p class="notice">' + icon("info") + "<span>Tiến độ được lưu trong trình duyệt trên máy này. Nếu xóa dữ liệu trình duyệt hoặc dùng máy khác, tiến độ sẽ không còn. Chức năng tài khoản và đồng bộ chưa có.</span></p>"
        : '<p class="notice notice--warning">' + icon("alert") + "<span>Trình duyệt đang chặn bộ nhớ, nên tiến độ chỉ giữ tới khi đóng trang.</span></p>";

    main.innerHTML =
      '<div class="page screen-enter">' +
        '<header class="page-head"><p class="eyebrow">Tiến độ</p><h1 class="display">Hành trình học của bạn</h1></header>' +
        source +
        '<div class="stats">' +
          '<div class="stat"><span class="stat__num">' + t.done + '</span><span class="stat__label">bài đã hoàn thành<br><span class="muted">trên ' + t.total + " bài</span></span></div>" +
          '<div class="stat"><span class="stat__num">' + history.length + '</span><span class="stat__label">lần luyện tập<br><span class="muted">đã ghi lại</span></span></div>' +
          '<div class="stat"><span class="stat__num">' + store.reviewList().length + '</span><span class="stat__label">bài cần ôn<br><span class="muted">dưới ' + store.REVIEW_PERCENT + "% lần gần nhất</span></span></div>" +
          '<div class="stat"><span class="stat__num">' + t.available + '</span><span class="stat__label">bài đã có nội dung<br><span class="muted">các bài khác đang biên soạn</span></span></div>' +
        "</div>" +
        '<h2 class="section-label">Theo cấp độ và module</h2>' +
        '<div class="progress-levels">' + course.levels.map(function (lv) {
          var st = store.levelStats(lv.id);
          return '<section class="progress-level" aria-labelledby="pl-' + lv.id + '">' +
            '<div class="progress-level__head"><h3 id="pl-' + lv.id + '"><span class="tag tag--level" style="--lv: var(--lv-' + lv.id + ')">' + lv.code + "</span> " + esc(lv.name) + "</h3>" +
            '<span class="small muted">' + st.done + "/" + st.total + " bài</span></div>" +
            ui.progressBar(st.done, st.total, { label: "Tiến độ " + lv.code }) +
            '<ul class="progress-modules">' + course.modulesOf(lv.id).map(function (m) {
              var ms = store.moduleStats(m.id);
              return '<li><a href="#/module/' + m.id + '"><span class="progress-modules__title">' + m.number + ". " + esc(m.title) + "</span>" +
                ui.segments(m.id) + '<span class="small muted">' + ms.done + "/" + ms.total + "</span></a></li>";
            }).join("") + "</ul></section>";
        }).join("") + "</div>" +
        '<h2 class="section-label">Lịch sử luyện tập</h2>' +
        (history.length
          ? '<div class="table-wrap"><table class="table"><thead><tr><th scope="col">Ngày</th><th scope="col">Bài học</th><th scope="col">Điểm</th><th scope="col">Kết quả</th></tr></thead><tbody>' +
            history.map(function (x) {
              var h = x.entry, pass = h.percent >= store.PASS_PERCENT;
              return "<tr><td>" + ui.formatDate(h.date) + "</td><td>" + esc(x.lesson.title) + '<br><span class="small muted">' + esc(course.lessonLabel(x.lesson)) + "</span></td>" +
                "<td>" + h.score + "/" + h.total + " (" + h.percent + "%)</td><td>" +
                '<span class="tag ' + (pass ? "tag--done" : "tag--review") + '">' + icon(pass ? "check" : "refresh") + (pass ? "Đạt" : "Cần ôn") + "</span></td></tr>";
            }).join("") + "</tbody></table></div>"
          : ui.empty("Chưa có lịch sử", "Mỗi lần bạn hoàn thành phần luyện tập, kết quả sẽ được ghi ở đây.",
              '<a class="btn btn--primary" href="#/">Bắt đầu học</a>', true)) +
        (!demo
          ? '<div class="danger-zone"><h2 class="section-label">Xóa tiến độ</h2><p class="small muted">Xóa toàn bộ kết quả, lịch sử và bài viết đã lưu trên máy này. Không thể hoàn tác.</p>' +
            '<button type="button" class="btn btn--secondary" data-reset>' + icon("refresh") + "Xóa tiến độ</button></div>"
          : "") +
      "</div>";

    var reset = main.querySelector("[data-reset]");
    if (reset) reset.addEventListener("click", function () {
      if (window.confirm("Xóa toàn bộ tiến độ học trên máy này? Không thể hoàn tác.")) store.reset();
    });
  };
})();
