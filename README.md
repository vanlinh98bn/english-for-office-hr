# English for Office & HR

Ứng dụng web học tiếng Anh cho người đi làm: tiếng Anh văn phòng và tiếng Anh Hành chính – Nhân sự, từ A1 đến C1.
Khung giáo trình: 5 cấp độ × 4 module × 5 bài = 100 bài. Bản hiện tại có **1 bài mẫu đầy đủ** (A2 · Module 3 · Bài 4 "Welcoming a new employee"); 99 bài còn lại mới có tên bài và hiện là "Đang biên soạn".

## Cách chạy

Không cần cài đặt gì.

1. Mở thư mục `English-for-Office-HR`.
2. Bấm đúp vào `index.html` → app mở trong trình duyệt (nên dùng Chrome hoặc Edge).

Phông chữ (Be Vietnam Pro, Newsreader) tải từ Google Fonts khi có mạng; khi không có mạng app dùng phông dự phòng của máy.

## Công nghệ

HTML + CSS + JavaScript thuần, không thư viện, không bước build, không máy chủ, không khóa API.
Lý do: máy chưa có Node.js; cách này dễ đọc, dễ sửa, đưa lên Netlify/GitHub Pages được ngay.

## Cấu trúc thư mục

```
index.html                  Khung trang, thanh điều hướng, nạp các file bên dưới
css/
  tokens.css                Màu, chữ, khoảng cách, bo góc (design tokens) — sửa giao diện ở đây trước
  base.css                  Chữ, khung trang, thanh điều hướng, điện thoại
  components.css            Nút, nhãn trạng thái, thanh tiến độ, danh sách bài, câu hỏi, thông báo
  screens.css               Bố cục riêng của từng màn hình
js/
  data/curriculum.js        Khung giáo trình 100 bài (chỉ dữ liệu) + danh sách bài đã có nội dung
  data/demo-progress.js     Dữ liệu mẫu (người học giả định) — chỉ dùng khi bật "Xem với dữ liệu mẫu"
  content/lessons/<mã>.js   Nội dung từng bài (hiện có a2-m3-l4.js)
  core/                     course (tra cứu giáo trình), store (lưu tiến độ), router (điều hướng #/...),
                            lesson-loader (tải bài khi cần), speech (đọc tiếng Anh), icons
  components/               ui.js (thành phần dùng chung), question.js (câu hỏi trắc nghiệm / điền chỗ trống)
  screens/                  dashboard, course, module, lesson, practice, results, progress
  app.js                    Khởi động app
tests/                      Bộ kiểm thử tự động và ảnh chụp màn hình
```

## Các màn hình

| Đường dẫn | Màn hình |
|---|---|
| `#/` | Tổng quan: tiếp tục học, cấp độ hiện tại, tiến độ theo cấp độ, module đang học, bài cần ôn, kết quả gần đây |
| `#/course/a1` … `#/course/c1` | Khóa học: mô tả và mục tiêu đầu ra của cấp độ, 4 module, 20 bài |
| `#/module/a2-m3` | Một module: 5 bài, trạng thái từng bài, module trước/sau |
| `#/lesson/a2-m3-l4` | Bài học: 9 phần (mục tiêu, từ vựng, phát âm, nghe, đọc, ngữ pháp, luyện tập, viết, ôn tập và kết quả) |
| `#/practice/a2-m3-l4` | Luyện tập 10 câu, từng câu một, có giải thích; `?review=1` = chỉ ôn câu sai (không tính điểm) |
| `#/results/a2-m3-l4` | Kết quả lần gần nhất và xem lại câu sai |
| `#/progress` | Tiến độ toàn khóa, lịch sử, xóa tiến độ |

## Mã định danh

- Cấp độ: `a1` … `c1` · Module: `a2-m3` · Bài: `a2-m3-l4`
- Mã sinh tự động theo thứ tự trong `curriculum.js`. **Không đổi thứ tự** sau khi đã có người học, vì tiến độ lưu theo mã.

## Thêm nội dung cho một bài

1. Sao chép `js/content/lessons/a2-m3-l4.js`, đổi tên thành mã bài mới (ví dụ `a1-m1-l1.js`) và đổi `id` bên trong.
2. Viết nội dung. Phần nào không có thì xóa đi — màn hình bài học tự ẩn phần đó.
3. Thêm mã bài vào `AVAILABLE_LESSONS` ở đầu `js/data/curriculum.js`.
4. Câu hỏi: `answer` là vị trí đáp án đúng (0 = A, 1 = B, …). Dạng `gap` viết chỗ trống là `___`.

## Soạn và duyệt nội dung

- Hướng dẫn soạn bài đầy đủ (khuôn bài, nhân vật, bảng ngữ pháp 100 bài, cách kiểm tra): `HUONG-DAN-SOAN-BAI.md`.
- Duyệt bài: bấm đúp `duyet-noi-dung.html`, chọn bài. Trang này hiện toàn bộ bài, mọi câu hỏi có sẵn đáp án và giải thích, kèm kết quả kiểm tra cấu trúc tự động.
- Kiểm tra mọi bài cùng lúc: `tests/content-check.html`.
- Mỗi bài có `reviewStatus`: `"draft"` (bản nháp) hoặc `"approved"` (đã duyệt).

## Lưu tiến độ

- Lưu trong trình duyệt (localStorage, khóa `eoh.progress.v1`) **trên máy đang dùng**. Đổi máy / xóa dữ liệu trình duyệt là mất.
- Bài được tính **hoàn thành** khi phần Luyện tập đạt từ 70%. Lần gần nhất dưới 80% → vào "Bài cần ôn tập".
- "Xem với dữ liệu mẫu": dùng dữ liệu của người học giả định, có dải màu tối báo rõ, không ghi vào dữ liệu thật.
- Muốn thêm tài khoản/đồng bộ sau này: viết một "adapter" mới có hai hàm `load()` và `save(data)` trong `js/core/store.js`; các màn hình không phải sửa.

## Giới hạn hiện tại (chưa làm, không giả lập)

- Âm thanh là giọng đọc tổng hợp của trình duyệt, chưa có file ghi âm người thật. Hội thoại đọc bằng một giọng.
- Bài viết chỉ được kiểm tra tự động bằng từ khóa (có lời chào, cảm ơn, giờ hẹn…), **không chấm ngữ pháp**; có bài mẫu để tự so sánh.
- Chưa có tài khoản, máy chủ, đồng bộ nhiều máy.
- Câu hỏi Nghe/Đọc trong bài là để tự kiểm tra, không tính điểm và không lưu.

## Kiểm thử

```powershell
# Cửa sổ 1: chạy máy chủ nhỏ (chỉ cần cho bộ kiểm thử)
powershell -ExecutionPolicy Bypass -File tests\serve.ps1
# Cửa sổ 2: chạy 62 phép thử bằng Chrome không giao diện
powershell -ExecutionPolicy Bypass -File tests\run-test.ps1
```

Hoặc mở `http://localhost:8770/tests/self-test.html` để xem chạy trực tiếp. Bộ thử **xóa tiến độ** của trình duyệt đang dùng ở địa chỉ localhost (không ảnh hưởng khi mở bằng bấm đúp `index.html`).
`tests/frame.html?w=390&h=844&route=/lesson/a2-m3-l4` xem app ở khổ điện thoại. Ảnh chụp ở `tests/screenshots`.
