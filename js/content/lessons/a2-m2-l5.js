/* =========================================================
   A2 · Module 2 (Emails and Documents) · Bài 5
   "Simple notices and announcements"
   Thứ Sáu 20/11/2026. Chị Lan nhờ Tuấn viết thông báo: nhà ăn đóng cửa
   thứ Hai 23/11 để dọn dẹp, cơm hộp sẽ được giao lên từng tầng.
   Điểm ngữ pháp: bị động tương lai will be + V3.
   Công ty Riverside Trading và các nhân vật đều là hư cấu.
   ========================================================= */
window.EOH.registerLesson({
  id: "a2-m2-l5",
  reviewStatus: "draft", // "draft" = bản nháp, chưa duyệt
  duration: "35–45 phút",
  scenario: "Thứ Sáu 20/11, nhà ăn nhân viên sẽ đóng cửa vào thứ Hai 23/11 để dọn dẹp bếp. Chị Lan nhờ Tuấn viết thông báo gửi toàn công ty. Tuấn học cách dùng will be + V3 (The canteen will be closed) để viết thông báo ngắn, rõ và lịch sự.",

  objectives: [
    "Hiểu và dùng 10 từ vựng thường gặp trong thông báo nội bộ (notice, postpone, apologize…).",
    "Nghe hiểu cuộc trao đổi về việc lên kế hoạch cho một thông báo.",
    "Đọc thông báo và tìm đúng thông tin: ngày, giờ, nơi đặt cơm, người phụ trách.",
    "Dùng bị động tương lai will be + V3 để viết thông báo (The canteen will be closed).",
    "Viết thông báo ngắn về việc phòng đào tạo máy tính đóng cửa."
  ],

  vocabulary: [
    { word: "notice", ipa: "/ˈnoʊtɪs/", pos: "noun", meaning: "thông báo (viết)",
      example: "The notice is on the intranet.", exampleVi: "Thông báo có trên mạng nội bộ." },
    { word: "announcement", ipa: "/əˈnaʊnsmənt/", pos: "noun", meaning: "lời thông báo, tin báo",
      example: "I have an announcement about Monday.", exampleVi: "Tôi có một thông báo về thứ Hai." },
    { word: "maintenance", ipa: "/ˈmeɪntənəns/", pos: "noun", meaning: "bảo trì",
      example: "The system is down for maintenance.", exampleVi: "Hệ thống đang dừng để bảo trì." },
    { word: "temporary", ipa: "/ˈtɛmpəˌrɛri/", pos: "adjective", meaning: "tạm thời",
      example: "This is a temporary change.", exampleVi: "Đây là thay đổi tạm thời." },
    { word: "inconvenience", ipa: "/ˌɪnkənˈviːniəns/", pos: "noun", meaning: "sự bất tiện",
      example: "We apologize for the inconvenience.", exampleVi: "Chúng tôi xin lỗi vì sự bất tiện này." },
    { word: "apologize", ipa: "/əˈpɑːləˌdʒaɪz/", pos: "verb", meaning: "xin lỗi",
      example: "We apologize for the late notice.", exampleVi: "Chúng tôi xin lỗi vì thông báo muộn." },
    { word: "cancel", ipa: "/ˈkænsəl/", pos: "verb", meaning: "hủy",
      example: "They canceled the training.", exampleVi: "Họ đã hủy buổi đào tạo." },
    { word: "postpone", ipa: "/poʊstˈpoʊn/", pos: "verb", meaning: "hoãn sang lúc khác",
      example: "We will postpone the training until Thursday.", exampleVi: "Chúng tôi sẽ hoãn buổi đào tạo đến thứ Năm." },
    { word: "deliver", ipa: "/dɪˈlɪvər/", pos: "verb", meaning: "giao, chuyển đến",
      example: "They deliver lunch to each floor.", exampleVi: "Họ giao cơm lên từng tầng." },
    { word: "in advance", ipa: "/ɪn ədˈvæns/", pos: "phrase", meaning: "trước, báo trước",
      example: "Please order in advance.", exampleVi: "Vui lòng đặt trước." }
  ],

  pronunciation: {
    groups: [
      {
        title: "Đuôi -ed của quá khứ phân từ",
        text: "Trong will be + V3, đuôi -ed đọc /d/ sau âm hữu thanh, /t/ sau âm vô thanh và /ɪd/ sau t hoặc d.",
        items: [
          { word: "closed", marked: "close/d/", note: "Đọc /kloʊzd/." },
          { word: "cleaned", marked: "cleane/d/", note: "Đọc /kliːnd/." },
          { word: "delivered", marked: "delivere/d/", note: "Đọc /dɪˈlɪvərd/." },
          { word: "checked", marked: "checke/t/", note: "Đọc /tʃɛkt/." },
          { word: "postponed", marked: "postpone/d/", note: "Đọc /poʊstˈpoʊnd/." }
        ]
      },
      {
        title: "Trọng âm của từ",
        text: "Âm tiết in hoa là âm đọc to và dài hơn.",
        items: [
          { word: "maintenance", marked: "MAIN·te·nance" },
          { word: "announcement", marked: "an·NOUNCE·ment" },
          { word: "inconvenience", marked: "in·con·VE·nience" },
          { word: "apologize", marked: "a·POL·o·gize" },
          { word: "temporary", marked: "TEM·po·rar·y" }
        ]
      }
    ],
    sentences: [
      "The canteen will be closed on Monday.",
      "Lunch boxes will be delivered to each floor.",
      "We apologize for the inconvenience."
    ]
  },

  listening: {
    title: "A notice about the canteen",
    setting: "Sáng thứ Sáu, văn phòng Nhân sự. Chị Lan giao cho Tuấn việc viết thông báo.",
    speakers: { lan: "Lan (HR Officer)", tuan: "Tuan (HR Assistant)" },
    lines: [
      { s: "lan", text: "Tuan, can you write a notice for all staff? The canteen will be closed on Monday.",
        vi: "Tuấn, em viết giúp chị một thông báo gửi toàn công ty nhé? Nhà ăn sẽ đóng cửa vào thứ Hai." },
      { s: "tuan", text: "Why will it be closed?",
        vi: "Vì sao nhà ăn sẽ đóng cửa ạ?" },
      { s: "lan", text: "The kitchen will be cleaned, and some equipment will be checked.",
        vi: "Bếp sẽ được dọn dẹp, và một số thiết bị sẽ được kiểm tra." },
      { s: "tuan", text: "What will staff eat for lunch?",
        vi: "Vậy nhân viên sẽ ăn trưa thế nào ạ?" },
      { s: "lan", text: "Lunch boxes will be delivered to each floor at eleven forty-five. Staff must order in advance, by three o'clock today.",
        vi: "Cơm hộp sẽ được giao lên từng tầng lúc mười một giờ bốn mươi lăm. Nhân viên phải đặt trước, chậm nhất ba giờ chiều hôm nay." },
      { s: "tuan", text: "Who will take the orders?",
        vi: "Ai sẽ nhận đơn đặt cơm ạ?" },
      { s: "lan", text: "Yen at reception will collect the lists.",
        vi: "Yen ở quầy lễ tân sẽ nhận danh sách." },
      { s: "tuan", text: "When will the canteen open again?",
        vi: "Khi nào nhà ăn mở cửa lại ạ?" },
      { s: "lan", text: "On Tuesday, as usual.",
        vi: "Thứ Ba, như thường lệ." },
      { s: "tuan", text: "Should I say sorry in the notice?",
        vi: "Em có nên xin lỗi trong thông báo không ạ?" },
      { s: "lan", text: "Yes. Add one short sentence: “We apologize for the inconvenience.” The notice will be sent by email and put on the intranet.",
        vi: "Có. Em thêm một câu ngắn: “We apologize for the inconvenience.” Thông báo sẽ được gửi qua email và đăng lên mạng nội bộ." },
      { s: "tuan", text: "OK. I'll send you the draft before lunch.",
        vi: "Vâng. Em sẽ gửi chị bản nháp trước giờ nghỉ trưa." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "Why will the canteen be closed on Monday?",
        options: ["The cook is sick.", "The kitchen will be cleaned.", "It is a public holiday.", "The roof will be repaired."],
        answer: 1, explanation: "Chị Lan nói: “The kitchen will be cleaned, and some equipment will be checked.” Không có thông tin về ngày lễ, đầu bếp ốm hay sửa mái nhà." },
      { id: "l2", type: "choice", prompt: "When will the lunch boxes be delivered?",
        options: ["At 11:00", "At 12:30", "At 11:45", "At 1:00"],
        answer: 2, explanation: "“Lunch boxes will be delivered to each floor at eleven forty-five.” Nhân viên phải đặt trước ba giờ chiều hôm nay." },
      { id: "l3", type: "choice", prompt: "Who will collect the lunch orders?",
        options: ["Sam in IT", "Mai on the third floor", "Mr. Hai", "Yen at reception"],
        answer: 3, explanation: "“Yen at reception will collect the lists.”" }
    ]
  },

  reading: {
    title: "Canteen closed on Monday",
    intro: "Thông báo Tuấn gửi toàn công ty sau khi chị Lan duyệt. Đọc và tìm ngày, giờ, nơi đặt cơm và người phụ trách.",
    email: {
      from: "Tuan Nguyen <tuan.nguyen@riverside-trading.example>",
      to: "All staff",
      date: "Friday, 20 November",
      subject: "Notice: Staff canteen closed on Monday, 23 November",
      greeting: "Dear all,",
      paragraphs: [
        "Please note that the staff canteen will be closed on Monday, 23 November, because the kitchen will be cleaned and some equipment will be checked.",
        "Lunch boxes will be delivered to each floor at 11:45 a.m. To order, please give your name and your choice to Yen Do at the reception by 3:00 p.m. today. The choices are:"
      ],
      list: [
        "chicken and rice",
        "vegetable noodles",
        "fish with rice"
      ],
      after: [
        "Empty boxes will be collected at 1:00 p.m. If you do not eat meat, please tell Yen when you order.",
        "The canteen will open again on Tuesday, 24 November. We apologize for the inconvenience."
      ],
      closing: "Best regards,",
      signature: ["Tuan Nguyen", "HR Assistant, Riverside Trading"]
    },
    glossary: [
      { term: "please note that", vi: "xin lưu ý rằng" },
      { term: "equipment", vi: "thiết bị, máy móc" },
      { term: "choice", vi: "lựa chọn (món)" },
      { term: "empty boxes", vi: "hộp đã ăn xong, hộp rỗng" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "Where should staff give their lunch order?",
        options: ["To Sam in IT", "To Yen Do at the reception", "In the canteen", "To Mr. Hai"],
        answer: 1, explanation: "“…please give your name and your choice to Yen Do at the reception by 3:00 p.m. today.” Nhà ăn đóng cửa nên không đặt ở đó." },
      { id: "r2", type: "choice", prompt: "When will the canteen open again?",
        options: ["Tuesday, 24 November", "Monday, 23 November", "Wednesday, 25 November", "Thursday, 26 November"],
        answer: 0, explanation: "“The canteen will open again on Tuesday, 24 November.” Thứ Hai 23/11 là ngày đóng cửa." },
      { id: "r3", type: "choice", prompt: "Which statement is TRUE?",
        options: ["Lunch boxes will be delivered at 1:00 p.m.", "Staff must eat in the canteen.", "Empty boxes will be collected at 1:00 p.m.", "Staff can order until Monday morning."],
        answer: 2, explanation: "“Empty boxes will be collected at 1:00 p.m.” Cơm hộp được giao lúc 11:45, và phải đặt trước 3:00 chiều thứ Sáu." }
    ]
  },

  grammar: {
    title: "Future passive: will be + V3",
    titleVi: "Bị động tương lai: will be + quá khứ phân từ",
    intro: "Trong thông báo, người đọc quan tâm đến việc gì sẽ xảy ra hơn là ai làm. Vì vậy tiếng Anh hay dùng bị động tương lai: will be + V3. Bốn mẫu dưới đây xuất hiện trong hội thoại và thông báo bạn vừa học.",
    patterns: [
      { form: "Chủ ngữ + will be + V3", use: "Nói việc sẽ được làm, hoặc sẽ xảy ra, trong tương lai.",
        examples: ["The canteen will be closed on Monday.", "The kitchen will be cleaned."] },
      { form: "Chủ ngữ + will not (won't) be + V3", use: "Nói việc sẽ không được làm.",
        examples: ["The notice won't be sent today.", "Visitors won't be allowed in the kitchen."] },
      { form: "Will + chủ ngữ + be + V3 …? / When will … be + V3?", use: "Hỏi về việc sẽ được làm và khi nào.",
        examples: ["Will the lunch boxes be delivered?", "When will the notice be sent?"] },
      { form: "will be + V3 + by + người / on + ngày", use: "Thêm người làm hoặc thời gian cho rõ.",
        examples: ["The computers will be updated by Sam.", "The notice will be sent on Friday."] }
    ],
    mistakes: [
      { wrong: "The canteen will closed on Monday.", right: "The canteen will be closed on Monday.", note: "Thiếu be. Bị động tương lai cần will be + V3." },
      { wrong: "Lunch will be deliver at noon.", right: "Lunch will be delivered at noon.", note: "Sau will be dùng quá khứ phân từ (delivered), không dùng động từ nguyên mẫu." },
      { wrong: "The notice will send tomorrow.", right: "The notice will be sent tomorrow.", note: "Thông báo “được gửi” nên dùng bị động: will be sent." },
      { wrong: "Will the lunch boxes delivered?", right: "Will the lunch boxes be delivered?", note: "Câu hỏi: Will + chủ ngữ + be + V3. Đừng bỏ be." }
    ],
    tip: "Trong thông báo, bắt đầu bằng “Please note that …” rồi dùng bị động giúp câu nghe lịch sự và khách quan. Một câu “We apologize for the inconvenience.” ở cuối là phong cách rất phổ biến."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "The IT team will do some ___ on the server tonight.",
      options: ["maintenance", "announcement", "notice", "inconvenience"],
      answer: 0, explanation: "Maintenance = bảo trì, đi với do. Announcement và notice là thông báo; inconvenience là sự bất tiện." },
    { id: "p2", type: "gap", prompt: "The training will be ___ until next week. The new date is Tuesday.",
      options: ["canceled", "postponed", "delivered", "apologized"],
      answer: 1, explanation: "Postponed = hoãn sang ngày khác, có ngày mới. Canceled = hủy hẳn, không có ngày mới." },
    { id: "p3", type: "gap", prompt: "We apologize for the ___.",
      options: ["deliver", "cancel", "inconvenience", "temporary"],
      answer: 2, explanation: "Sau for + the cần danh từ: the inconvenience. Deliver và cancel là động từ; temporary là tính từ." },
    { id: "p4", type: "gap", prompt: "Please order lunch boxes ___ so we can prepare enough food.",
      options: ["in front", "in short", "in case", "in advance"],
      answer: 3, explanation: "In advance = trước, báo trước. Các cụm còn lại không có nghĩa hợp với câu này." },
    { id: "p5", type: "gap", prompt: "The canteen ___ closed on Monday.",
      options: ["will be", "will", "is be", "will to be"],
      answer: 0, explanation: "Bị động tương lai: will be + V3 (closed)." },
    { id: "p6", type: "gap", prompt: "Lunch boxes will be ___ to each floor.",
      options: ["deliver", "delivering", "delivered", "delivers"],
      answer: 2, explanation: "Sau will be dùng quá khứ phân từ: delivered." },
    { id: "p7", type: "gap", prompt: "The notice ___ sent by email tomorrow.",
      options: ["will", "will be", "be", "will been"],
      answer: 1, explanation: "Bị động tương lai: will be sent. Không có dạng “will been”." },
    { id: "p8", type: "gap", prompt: "___ the lunch boxes be delivered to the third floor?",
      options: ["Do", "Are", "Did", "Will"],
      answer: 3, explanation: "Câu hỏi bị động tương lai: Will + chủ ngữ + be + V3?" },
    { id: "p9", type: "choice", prompt: "Which sentence is correct?",
      options: ["The room will be cleaning on Friday.", "The room will cleaned on Friday.", "The room will be cleaned on Friday.", "The room cleaned will be on Friday."],
      answer: 2, explanation: "Câu C đúng: will be + cleaned. A dùng cleaning (V-ing), B thiếu be, D sai trật tự từ." },
    { id: "p10", type: "choice", prompt: "Which sentence is the best way to start a notice?",
      options: ["Please note that the office will be closed on Monday.", "Hey guys, big news!!", "Listen!", "I think maybe the office closed."],
      answer: 0, explanation: "Please note that … là cách mở đầu thông báo lịch sự, rõ ràng. Các lựa chọn khác quá thân mật, như ra lệnh, hoặc không chắc chắn." }
  ],

  writing: {
    title: "A notice about Room 205",
    task: "Bạn là Tuấn. Hãy viết thông báo gửi toàn công ty (50–90 từ): thứ Ba 24/11 Sam sẽ cập nhật máy tính ở Room 205, nên phòng đóng cửa cả ngày. Buổi đào tạo máy tính hoãn sang thứ Năm 26/11. Thứ Tư phòng mở lại.",
    requirements: [
      "Mở đầu bằng lời chào (Dear all,).",
      "Dùng Please note that … will be closed để báo phòng đóng cửa, nêu Room 205 và ngày.",
      "Dùng will be + V3 khác (updated / postponed) để nêu lý do và việc hoãn đào tạo.",
      "Nói ngày giờ rõ ràng: Tuesday, 24 November và Thursday, 26 November.",
      "Có một câu xin lỗi (We apologize for the inconvenience).",
      "Kết thúc bằng Best regards và ký tên."
    ],
    minWords: 50,
    maxWords: 90,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Dear …)", pattern: "\\bdear\\b" },
      { label: "Có will be + V3 (closed / postponed / updated…)", pattern: "will be (closed|postponed|updated|cleaned|checked|moved|held)" },
      { label: "Nhắc tới Room 205", pattern: "\\b205\\b" },
      { label: "Nhắc tới ngày thứ Ba hoặc ngày 24", pattern: "tuesday|\\b24\\b" },
      { label: "Có câu xin lỗi", pattern: "apologi[sz]e|\\bsorry\\b" },
      { label: "Có lời kết (Best regards …)", pattern: "regards|sincerely|best wishes" }
    ],
    model: [
      "Dear all,",
      "Please note that Room 205 will be closed on Tuesday, 24 November, because the computers will be updated by Sam.",
      "The computer training will be postponed until Thursday, 26 November. The room will be open again on Wednesday.",
      "Please save your work in advance, and thank you for your understanding.",
      "We apologize for the inconvenience.",
      "Best regards,",
      "Tuan Nguyen"
    ]
  },

  review: {
    keyPhrases: [
      { en: "Please note that the canteen will be closed on Monday.", vi: "Xin lưu ý nhà ăn sẽ đóng cửa vào thứ Hai." },
      { en: "Lunch boxes will be delivered to each floor.", vi: "Cơm hộp sẽ được giao lên từng tầng." },
      { en: "The training will be postponed until Thursday.", vi: "Buổi đào tạo sẽ được hoãn đến thứ Năm." },
      { en: "Please order in advance.", vi: "Vui lòng đặt trước." },
      { en: "When will the canteen open again?", vi: "Khi nào nhà ăn mở cửa lại?" },
      { en: "We apologize for the inconvenience.", vi: "Chúng tôi xin lỗi vì sự bất tiện này." }
    ]
  }
});
