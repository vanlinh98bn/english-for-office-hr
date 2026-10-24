/* =========================================================
   CURRICULUM — khung giáo trình 5 cấp độ × 4 module × 5 bài.
   Chỉ chứa DỮ LIỆU, không chứa giao diện.

   Mã định danh:
     cấp độ  : "a1" … "c1"
     module  : "<cấp độ>-m<số>"         ví dụ "a2-m3"
     bài học : "<module>-l<số>"         ví dụ "a2-m3-l4"
   Mã được tạo tự động từ thứ tự trong mảng — KHÔNG đổi thứ tự
   sau khi đã có người học (tiến độ lưu theo mã).

   Thêm nội dung cho một bài:
     1. Tạo file js/content/lessons/<mã bài>.js
     2. Ghi mã bài vào AVAILABLE_LESSONS bên dưới.
   ========================================================= */
(function () {
  "use strict";

  // Các bài đã có nội dung đầy đủ.
  var AVAILABLE_LESSONS = [
    "a1-m1-l1", "a1-m1-l2", "a1-m1-l3", "a1-m1-l4", "a1-m1-l5",
    "a1-m2-l1", "a1-m2-l2", "a1-m2-l3", "a1-m2-l4", "a1-m2-l5",
    "a1-m3-l1", "a1-m3-l2", "a1-m3-l3", "a1-m3-l4", "a1-m3-l5",
    "a1-m4-l1", "a1-m4-l2", "a1-m4-l3", "a1-m4-l4", "a1-m4-l5",
    "a2-m1-l1", "a2-m1-l2", "a2-m1-l3", "a2-m1-l4", "a2-m1-l5",
    "a2-m2-l1", "a2-m2-l2", "a2-m2-l3", "a2-m2-l4", "a2-m2-l5",
    "a2-m3-l1", "a2-m3-l2", "a2-m3-l3", "a2-m3-l4", "a2-m3-l5",
    "a2-m4-l1", "a2-m4-l2", "a2-m4-l3", "a2-m4-l4", "a2-m4-l5",
    "b1-m1-l1", "b1-m1-l2", "b1-m1-l3", "b1-m1-l4", "b1-m1-l5",
    "b1-m2-l1", "b1-m2-l2", "b1-m2-l3", "b1-m2-l4", "b1-m2-l5",
    "b1-m3-l1", "b1-m3-l2", "b1-m3-l3", "b1-m3-l4", "b1-m3-l5",
    "b1-m4-l1", "b1-m4-l2", "b1-m4-l3", "b1-m4-l4", "b1-m4-l5",
    "b2-m1-l1", "b2-m1-l2", "b2-m1-l3", "b2-m1-l4", "b2-m1-l5",
    "b2-m2-l1", "b2-m2-l2", "b2-m2-l3", "b2-m2-l4", "b2-m2-l5",
    "b2-m3-l1", "b2-m3-l2", "b2-m3-l3", "b2-m3-l4", "b2-m3-l5",
    "b2-m4-l1", "b2-m4-l2", "b2-m4-l3", "b2-m4-l4", "b2-m4-l5",
    "c1-m1-l1", "c1-m1-l2", "c1-m1-l3", "c1-m1-l4", "c1-m1-l5",
    "c1-m2-l1", "c1-m2-l2", "c1-m2-l3", "c1-m2-l4", "c1-m2-l5",
    "c1-m3-l1", "c1-m3-l2", "c1-m3-l3", "c1-m3-l4", "c1-m3-l5",
    "c1-m4-l1", "c1-m4-l2", "c1-m4-l3", "c1-m4-l4", "c1-m4-l5"
  ];

  // Mỗi bài: [tiêu đề tiếng Anh, tên tiếng Việt]
  var LEVELS = [
    {
      code: "A1",
      name: "Beginner",
      nameVi: "Khởi đầu",
      description: "Làm quen với tiếng Anh nơi làm việc: chào hỏi, giới thiệu bản thân, con số, thời gian và những câu ngắn dùng hằng ngày trong văn phòng.",
      outcomes: [
        "Giới thiệu bản thân, chức danh và phòng ban.",
        "Hiểu và trả lời câu hỏi đơn giản về giờ giấc, lịch làm việc.",
        "Điền biểu mẫu thông tin cá nhân bằng tiếng Anh."
      ],
      modules: [
        { title: "English Foundations", titleVi: "Nền tảng tiếng Anh",
          summary: "Chào hỏi, số đếm, ngày giờ và cách đặt câu hỏi đơn giản.",
          lessons: [
            ["Greetings and introductions at work", "Chào hỏi và giới thiệu ở nơi làm việc"],
            ["Numbers, dates and times", "Số đếm, ngày tháng và giờ"],
            ["Spelling names and email addresses", "Đánh vần tên và địa chỉ email"],
            ["Days, months and work schedules", "Thứ, tháng và lịch làm việc"],
            ["Asking simple questions", "Đặt câu hỏi đơn giản"]
          ] },
        { title: "People and the Workplace", titleVi: "Con người và nơi làm việc",
          summary: "Nghề nghiệp, phòng ban, đồng nghiệp và công việc hằng ngày.",
          lessons: [
            ["Jobs and job titles", "Nghề nghiệp và chức danh"],
            ["Departments in a company", "Các phòng ban trong công ty"],
            ["Describing colleagues", "Miêu tả đồng nghiệp"],
            ["Places in the office and directions", "Các khu vực trong văn phòng và chỉ đường"],
            ["Daily work routines", "Công việc hằng ngày"]
          ] },
        { title: "Everyday Office English", titleVi: "Tiếng Anh văn phòng hằng ngày",
          summary: "Đồ dùng văn phòng, lời đề nghị, điện thoại và tin nhắn ngắn.",
          lessons: [
            ["Office equipment and supplies", "Thiết bị và văn phòng phẩm"],
            ["Simple requests and offers", "Lời nhờ và lời đề nghị đơn giản"],
            ["Telephone basics", "Nghe gọi điện thoại cơ bản"],
            ["Short notes and messages", "Ghi chú và tin nhắn ngắn"],
            ["Booking meeting rooms and appointments", "Đặt phòng họp và lịch hẹn"]
          ] },
        { title: "HR and Administrative Basics", titleVi: "Hành chính – Nhân sự cơ bản",
          summary: "Biểu mẫu cá nhân, giờ làm việc, xin nghỉ, nội quy và tiếp khách.",
          lessons: [
            ["Personal information and forms", "Thông tin cá nhân và biểu mẫu"],
            ["Working hours and breaks", "Giờ làm việc và giờ nghỉ"],
            ["Asking for a day off", "Xin nghỉ một ngày"],
            ["Company rules and signs", "Nội quy và biển báo trong công ty"],
            ["Reception and visitors", "Lễ tân và tiếp khách"]
          ] }
      ]
    },
    {
      code: "A2",
      name: "Elementary",
      nameVi: "Sơ cấp",
      description: "Giao tiếp được trong các tình huống văn phòng quen thuộc: gọi điện, viết email ngắn, hiểu thông báo, tham gia tuyển dụng và đón nhân viên mới.",
      outcomes: [
        "Viết và trả lời email ngắn, đúng cấu trúc, lịch sự.",
        "Đọc hiểu tin tuyển dụng, thông báo và giấy tờ đơn giản.",
        "Hướng dẫn nhân viên mới về thủ tục ngày đầu đi làm."
      ],
      modules: [
        { title: "Office Communication", titleVi: "Giao tiếp văn phòng",
          summary: "Trò chuyện với đồng nghiệp, sắp xếp lịch hẹn và nhận lời nhắn.",
          lessons: [
            ["Small talk with colleagues", "Trò chuyện xã giao với đồng nghiệp"],
            ["Making and changing appointments", "Đặt và đổi lịch hẹn"],
            ["Phone calls: taking messages", "Điện thoại: nhận lời nhắn"],
            ["Asking for and offering help", "Nhờ giúp đỡ và đề nghị giúp đỡ"],
            ["Talking about past work events", "Kể lại sự việc đã xảy ra ở công ty"]
          ] },
        { title: "Emails and Documents", titleVi: "Email và văn bản",
          summary: "Cấu trúc email, yêu cầu, xác nhận, tệp đính kèm và thông báo.",
          lessons: [
            ["Email structure and greetings", "Cấu trúc email và lời chào"],
            ["Writing short requests", "Viết lời đề nghị ngắn"],
            ["Confirming and replying", "Xác nhận và trả lời"],
            ["Attachments and file names", "Tệp đính kèm và cách đặt tên tệp"],
            ["Simple notices and announcements", "Thông báo đơn giản"]
          ] },
        { title: "Recruitment and Onboarding", titleVi: "Tuyển dụng và hội nhập",
          summary: "Tin tuyển dụng, hồ sơ ứng viên, lịch phỏng vấn và ngày đầu đi làm.",
          lessons: [
            ["Reading a job advertisement", "Đọc tin tuyển dụng"],
            ["CVs and application forms", "Hồ sơ xin việc và đơn ứng tuyển"],
            ["Arranging an interview", "Sắp xếp lịch phỏng vấn"],
            ["Welcoming a new employee", "Đón nhân viên mới ngày đầu đi làm"],
            ["Onboarding checklists", "Danh sách việc cần làm khi hội nhập"]
          ] },
        { title: "HR Operations", titleVi: "Nghiệp vụ nhân sự",
          summary: "Chấm công, nghỉ phép, phiếu lương, hồ sơ nhân viên và an toàn lao động.",
          lessons: [
            ["Attendance and timekeeping", "Chấm công và giờ giấc"],
            ["Leave requests and approvals", "Đơn xin nghỉ phép và phê duyệt"],
            ["Payslips: basic terms", "Phiếu lương: các thuật ngữ cơ bản"],
            ["Keeping employee records", "Quản lý hồ sơ nhân viên"],
            ["Health and safety at work", "An toàn và sức khỏe nơi làm việc"]
          ] }
      ]
    },
    {
      code: "B1",
      name: "Intermediate",
      nameVi: "Trung cấp",
      description: "Tự tin xử lý công việc nhân sự hằng ngày bằng tiếng Anh: phỏng vấn, trao đổi về lương thưởng, đào tạo và giải quyết vấn đề của nhân viên.",
      outcomes: [
        "Thực hiện một buổi phỏng vấn đơn giản và ghi nhận xét ứng viên.",
        "Giải thích chính sách lương, phúc lợi, chấm công cho nhân viên.",
        "Viết email phản hồi khiếu nại và thông báo nội bộ rõ ràng."
      ],
      modules: [
        { title: "Recruitment and Interviewing", titleVi: "Tuyển dụng và phỏng vấn",
          summary: "Mô tả công việc, sàng lọc, câu hỏi phỏng vấn và thư mời nhận việc.",
          lessons: [
            ["Writing a job description", "Viết bản mô tả công việc"],
            ["Screening candidates", "Sàng lọc ứng viên"],
            ["Asking interview questions", "Đặt câu hỏi phỏng vấn"],
            ["Evaluating candidates", "Đánh giá ứng viên"],
            ["Job offers and rejection emails", "Thư mời nhận việc và thư từ chối"]
          ] },
        { title: "Employee Lifecycle", titleVi: "Vòng đời nhân viên",
          summary: "Thử việc, trao đổi hiệu suất, thăng chức, nghỉ việc và phỏng vấn thôi việc.",
          lessons: [
            ["Probation and confirmation", "Thử việc và ký hợp đồng chính thức"],
            ["Performance check-ins", "Trao đổi định kỳ về hiệu quả công việc"],
            ["Promotions and transfers", "Thăng chức và điều chuyển"],
            ["Resignation and notice period", "Thôi việc và thời gian báo trước"],
            ["Exit interviews", "Phỏng vấn thôi việc"]
          ] },
        { title: "Compensation, Benefits and Attendance", titleVi: "Lương, phúc lợi và chấm công",
          summary: "Cơ cấu lương, phụ cấp, phúc lợi, làm thêm giờ và câu hỏi về lương.",
          lessons: [
            ["Salary structure and allowances", "Cơ cấu lương và phụ cấp"],
            ["Explaining benefits", "Giải thích chế độ phúc lợi"],
            ["Overtime and shift work", "Làm thêm giờ và làm ca"],
            ["Dealing with attendance issues", "Xử lý vấn đề chấm công"],
            ["Answering payroll questions", "Trả lời thắc mắc về lương"]
          ] },
        { title: "Training and Employee Relations", titleVi: "Đào tạo và quan hệ lao động",
          summary: "Lên kế hoạch đào tạo, lấy phản hồi, xử lý khiếu nại và mâu thuẫn.",
          lessons: [
            ["Planning a training session", "Lên kế hoạch buổi đào tạo"],
            ["Collecting training feedback", "Thu thập phản hồi sau đào tạo"],
            ["Handling employee complaints", "Xử lý khiếu nại của nhân viên"],
            ["Managing team conflicts", "Xử lý mâu thuẫn trong nhóm"],
            ["Writing internal announcements", "Viết thông báo nội bộ"]
          ] }
      ]
    },
    {
      code: "B2",
      name: "Upper-Intermediate",
      nameVi: "Trung cao cấp",
      description: "Làm việc chuyên nghiệp với đối tác và lãnh đạo: xây dựng chính sách, phân tích số liệu nhân sự, điều hành cuộc họp và thương lượng.",
      outcomes: [
        "Soạn thảo chính sách và quy trình nhân sự bằng tiếng Anh.",
        "Trình bày số liệu nhân sự và đưa ra đề xuất có căn cứ.",
        "Điều hành cuộc họp, thương lượng và xử lý cuộc trò chuyện khó."
      ],
      modules: [
        { title: "Advanced Recruitment and Talent Acquisition", titleVi: "Tuyển dụng nâng cao và thu hút nhân tài",
          summary: "Thương hiệu nhà tuyển dụng, kênh tìm kiếm, phỏng vấn năng lực và chỉ số tuyển dụng.",
          lessons: [
            ["Employer branding", "Thương hiệu nhà tuyển dụng"],
            ["Choosing sourcing channels", "Lựa chọn kênh tìm ứng viên"],
            ["Competency-based interviews", "Phỏng vấn theo năng lực"],
            ["Negotiating job offers", "Thương lượng mức đề nghị"],
            ["Recruitment metrics", "Các chỉ số tuyển dụng"]
          ] },
        { title: "HR Policies and Employee Relations", titleVi: "Chính sách nhân sự và quan hệ lao động",
          summary: "Viết chính sách, quy tắc ứng xử, kỷ luật, khiếu nại và chăm lo sức khỏe tinh thần.",
          lessons: [
            ["Writing policy documents", "Soạn văn bản chính sách"],
            ["The code of conduct", "Bộ quy tắc ứng xử"],
            ["Disciplinary procedures", "Quy trình xử lý kỷ luật"],
            ["Grievance handling", "Giải quyết khiếu nại chính thức"],
            ["Workplace wellbeing", "Sức khỏe và tinh thần nơi làm việc"]
          ] },
        { title: "Compensation, Benefits and HR Analytics", titleVi: "Lương thưởng, phúc lợi và phân tích nhân sự",
          summary: "So sánh lương thị trường, đánh giá phúc lợi và đọc số liệu nhân sự.",
          lessons: [
            ["Pay benchmarking", "So sánh mức lương với thị trường"],
            ["Reviewing benefits", "Rà soát chế độ phúc lợi"],
            ["Reading HR dashboards", "Đọc bảng số liệu nhân sự"],
            ["Turnover and retention data", "Số liệu nghỉ việc và giữ chân nhân viên"],
            ["Presenting HR data", "Trình bày số liệu nhân sự"]
          ] },
        { title: "Business Communication and Negotiation", titleVi: "Giao tiếp kinh doanh và thương lượng",
          summary: "Điều hành họp, email thuyết phục, thương lượng và báo cáo.",
          lessons: [
            ["Leading meetings", "Điều hành cuộc họp"],
            ["Writing persuasive emails", "Viết email thuyết phục"],
            ["The language of negotiation", "Ngôn ngữ thương lượng"],
            ["Handling difficult conversations", "Xử lý cuộc trò chuyện khó"],
            ["Writing reports and summaries", "Viết báo cáo và bản tóm tắt"]
          ] }
      ]
    },
    {
      code: "C1",
      name: "Advanced",
      nameVi: "Cao cấp",
      description: "Sử dụng tiếng Anh ở cấp quản lý: hoạch định chiến lược nhân sự, truyền đạt rủi ro pháp lý, dẫn dắt thay đổi và viết văn bản chuyên nghiệp cho lãnh đạo.",
      outcomes: [
        "Viết đề xuất, báo cáo chính sách và bản tóm tắt cho lãnh đạo.",
        "Truyền đạt thay đổi tổ chức và rủi ro tuân thủ một cách rõ ràng, thận trọng.",
        "Trình bày và bảo vệ một kế hoạch cải tiến nhân sự."
      ],
      modules: [
        { title: "Strategic HR Management", titleVi: "Quản trị nhân sự chiến lược",
          summary: "Hoạch định nhân lực, gắn chiến lược nhân sự với mục tiêu kinh doanh, văn hóa và ngân sách.",
          lessons: [
            ["Workforce planning", "Hoạch định nguồn nhân lực"],
            ["Aligning HR strategy with business goals", "Gắn chiến lược nhân sự với mục tiêu kinh doanh"],
            ["Talent management and succession", "Quản lý nhân tài và kế thừa"],
            ["Shaping organizational culture", "Xây dựng văn hóa tổ chức"],
            ["HR budgets and business cases", "Ngân sách nhân sự và đề xuất đầu tư"]
          ] },
        { title: "Employment Compliance and Risk Communication", titleVi: "Tuân thủ lao động và truyền đạt rủi ro",
          summary: "Thuật ngữ pháp lý, điều khoản hợp đồng, điều tra, bảo mật dữ liệu và báo cáo rủi ro.",
          lessons: [
            ["Labor law terminology", "Thuật ngữ luật lao động"],
            ["Contracts and clauses", "Hợp đồng và điều khoản"],
            ["Workplace investigations and records", "Điều tra nội bộ và lưu hồ sơ"],
            ["Data privacy in HR", "Bảo mật dữ liệu nhân sự"],
            ["Communicating risk to leadership", "Báo cáo rủi ro với lãnh đạo"]
          ] },
        { title: "Organizational Change and Executive Communication", titleVi: "Thay đổi tổ chức và giao tiếp cấp lãnh đạo",
          summary: "Thông báo thay đổi, xử lý phản đối, tái cấu trúc và báo cáo lãnh đạo.",
          lessons: [
            ["Announcing organizational change", "Thông báo thay đổi tổ chức"],
            ["Managing resistance to change", "Xử lý sự phản đối thay đổi"],
            ["Communicating a restructuring", "Truyền thông về tái cấu trúc"],
            ["Briefing senior executives", "Báo cáo nhanh cho lãnh đạo cấp cao"],
            ["Town hall presentations", "Trình bày trước toàn thể nhân viên"]
          ] },
        { title: "Advanced HR Projects and Professional Writing", titleVi: "Dự án nhân sự và viết chuyên nghiệp",
          summary: "Đề xuất dự án, cập nhật tiến độ, báo cáo chính sách và dự án tổng kết.",
          lessons: [
            ["Writing project proposals", "Viết đề xuất dự án"],
            ["Stakeholder updates", "Cập nhật tiến độ cho các bên liên quan"],
            ["Policy reports", "Báo cáo chính sách"],
            ["Executive summaries", "Bản tóm tắt cho lãnh đạo"],
            ["Capstone: an HR improvement plan", "Dự án cuối khóa: kế hoạch cải tiến nhân sự"]
          ] }
      ]
    }
  ];

  // ---- Chuẩn hóa: gắn mã định danh và liên kết cha–con ----
  var levels = [];
  var modules = [];
  var lessons = [];

  LEVELS.forEach(function (lv, li) {
    var levelId = lv.code.toLowerCase();
    var level = {
      id: levelId, code: lv.code, order: li + 1,
      name: lv.name, nameVi: lv.nameVi,
      description: lv.description, outcomes: lv.outcomes,
      moduleIds: []
    };
    lv.modules.forEach(function (m, mi) {
      var moduleId = levelId + "-m" + (mi + 1);
      var mod = {
        id: moduleId, levelId: levelId, number: mi + 1,
        title: m.title, titleVi: m.titleVi, summary: m.summary,
        lessonIds: []
      };
      m.lessons.forEach(function (pair, i) {
        var lessonId = moduleId + "-l" + (i + 1);
        lessons.push({
          id: lessonId, moduleId: moduleId, levelId: levelId, number: i + 1,
          title: pair[0], titleVi: pair[1],
          available: AVAILABLE_LESSONS.indexOf(lessonId) !== -1
        });
        mod.lessonIds.push(lessonId);
      });
      modules.push(mod);
      level.moduleIds.push(moduleId);
    });
    levels.push(level);
  });

  window.EOH = window.EOH || {};
  window.EOH.curriculum = { levels: levels, modules: modules, lessons: lessons };
})();
