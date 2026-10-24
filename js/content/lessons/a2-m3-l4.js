/* =========================================================
   BÀI MẪU — A2 · Module 3 (Recruitment and Onboarding) · Bài 4
   "Welcoming a new employee"

   File này cũng là MẪU CẤU TRÚC cho mọi bài học sau này:
     objectives, vocabulary, pronunciation, listening, reading,
     grammar, practice, writing, review.
   Phần nào chưa có thì bỏ đi; màn hình bài học tự ẩn phần đó.
   Câu hỏi: answer = vị trí đáp án đúng (0 = A, 1 = B …).
   Công ty Riverside Trading và các nhân vật đều là hư cấu.
   ========================================================= */
window.EOH.registerLesson({
  id: "a2-m3-l4",
  reviewStatus: "draft", // "draft" = bản nháp, chưa duyệt
  duration: "35–45 phút",
  scenario: "Tuấn (Tuan Nguyen) vừa được tuyển vào vị trí trợ lý nhân sự (HR Assistant) tại công ty Riverside Trading. Chị Lan (Lan Pham), chuyên viên nhân sự, gửi email chào mừng và đón Tuấn vào sáng thứ Hai.",

  objectives: [
    "Hiểu và dùng 10 từ vựng thường gặp trong ngày đầu đi làm (onboarding).",
    "Nghe hiểu hướng dẫn của nhân viên nhân sự dành cho người mới.",
    "Đọc email chào mừng và tìm đúng thông tin: giờ, địa điểm, giấy tờ cần mang.",
    "Hướng dẫn và nhờ việc một cách lịch sự với Please, You need to, Could you.",
    "Viết email ngắn trả lời, xác nhận lịch ngày đầu đi làm."
  ],

  vocabulary: [
    { word: "onboarding", ipa: "/ˈɑːnˌbɔːrdɪŋ/", pos: "noun", meaning: "quá trình hội nhập của nhân viên mới",
      example: "Your onboarding starts on Monday.", exampleVi: "Quá trình hội nhập của bạn bắt đầu vào thứ Hai." },
    { word: "orientation", ipa: "/ˌɔːriənˈteɪʃən/", pos: "noun", meaning: "buổi định hướng, giới thiệu cho người mới",
      example: "The orientation takes about two hours.", exampleVi: "Buổi định hướng kéo dài khoảng hai tiếng." },
    { word: "paperwork", ipa: "/ˈpeɪpərwɜːrk/", pos: "noun", meaning: "giấy tờ, thủ tục",
      example: "First, we need to finish some paperwork.", exampleVi: "Trước tiên, chúng ta cần hoàn thành một số giấy tờ." },
    { word: "employment contract", ipa: "/ɪmˈplɔɪmənt ˈkɑːntrækt/", pos: "noun", meaning: "hợp đồng lao động",
      example: "Please sign two copies of your employment contract.", exampleVi: "Bạn vui lòng ký hai bản hợp đồng lao động." },
    { word: "probation period", ipa: "/proʊˈbeɪʃən ˈpɪriəd/", pos: "noun", meaning: "thời gian thử việc",
      example: "Your probation period is sixty days.", exampleVi: "Thời gian thử việc của bạn là sáu mươi ngày." },
    { word: "line manager", ipa: "/ˈlaɪn ˌmænɪdʒər/", pos: "noun", meaning: "quản lý trực tiếp",
      example: "Your line manager is Mr. Hai.", exampleVi: "Quản lý trực tiếp của bạn là anh Hải." },
    { word: "ID badge", ipa: "/ˌaɪ ˈdiː bædʒ/", pos: "noun", meaning: "thẻ nhân viên",
      example: "Please wear your ID badge in the building.", exampleVi: "Vui lòng đeo thẻ nhân viên khi ở trong tòa nhà." },
    { word: "workstation", ipa: "/ˈwɜːrkˌsteɪʃən/", pos: "noun", meaning: "chỗ ngồi làm việc (bàn, máy tính)",
      example: "Mr. Hai will show you your workstation.", exampleVi: "Anh Hải sẽ chỉ chỗ làm việc cho bạn." },
    { word: "employee handbook", ipa: "/ɪmˈplɔɪiː ˈhændbʊk/", pos: "noun", meaning: "sổ tay nhân viên (nội quy, chính sách)",
      example: "Please read the employee handbook this week.", exampleVi: "Bạn vui lòng đọc sổ tay nhân viên trong tuần này." },
    { word: "colleague", ipa: "/ˈkɑːliːɡ/", pos: "noun", meaning: "đồng nghiệp",
      example: "I'll introduce you to your colleagues.", exampleVi: "Tôi sẽ giới thiệu bạn với các đồng nghiệp." }
  ],

  pronunciation: {
    groups: [
      {
        title: "Trọng âm của từ",
        text: "Với từ tận cùng bằng -tion, trọng âm thường rơi vào âm tiết ngay trước -tion. Âm tiết in hoa là âm đọc to và dài hơn.",
        items: [
          { word: "orientation", marked: "o·ri·en·TA·tion" },
          { word: "probation", marked: "pro·BA·tion" },
          { word: "workstation", marked: "WORK·sta·tion", note: "Từ ghép: trọng âm ở phần đầu." },
          { word: "colleague", marked: "COL·league", note: "Chỉ có 2 âm tiết, không đọc thành 3." },
          { word: "employee", marked: "em·ploy·EE", note: "Cách đọc em·PLOY·ee cũng đúng." }
        ]
      },
      {
        title: "Âm cuối",
        text: "Người Việt hay bỏ âm cuối của từ tiếng Anh. Đọc rõ âm cuối giúp người nghe phân biệt badge, bag và back.",
        items: [
          { word: "badge", marked: "bad/dʒ/", note: "Kết thúc bằng âm /dʒ/ như trong “job”." },
          { word: "contract", marked: "contra/kt/", note: "Hai âm /k/ và /t/ đi liền nhau." },
          { word: "handbook", marked: "handboo/k/" }
        ]
      }
    ],
    sentences: [
      "Please wear your ID badge in the building.",
      "Please sign two copies of your employment contract.",
      "Your probation period is sixty days."
    ]
  },

  listening: {
    title: "First morning at Riverside Trading",
    setting: "Sáng thứ Hai, tại quầy lễ tân tầng 5. Chị Lan (phòng Nhân sự) đón Tuấn.",
    speakers: { lan: "Lan (HR Officer)", tuan: "Tuan (new employee)" },
    lines: [
      { s: "lan", text: "Good morning! You must be Tuan. I'm Lan from the HR department. Welcome to Riverside Trading.",
        vi: "Chào buổi sáng! Chắc em là Tuấn. Chị là Lan ở phòng Nhân sự. Chào mừng em đến với Riverside Trading." },
      { s: "tuan", text: "Good morning, Ms. Lan. Nice to meet you.",
        vi: "Em chào chị Lan. Rất vui được gặp chị." },
      { s: "lan", text: "Nice to meet you too. First, we need to finish some paperwork. Please sign these two copies of your employment contract.",
        vi: "Chị cũng rất vui được gặp em. Trước tiên, mình cần làm một số giấy tờ. Em ký vào hai bản hợp đồng lao động này nhé." },
      { s: "tuan", text: "Sure. Do I keep one copy?",
        vi: "Vâng. Em giữ một bản phải không ạ?" },
      { s: "lan", text: "Yes, one copy is for you. And here is your ID badge. Please wear it in the building at all times.",
        vi: "Đúng rồi, một bản là của em. Còn đây là thẻ nhân viên. Em luôn đeo thẻ khi ở trong tòa nhà nhé." },
      { s: "tuan", text: "OK. What time does the orientation start?",
        vi: "Vâng. Buổi định hướng bắt đầu lúc mấy giờ ạ?" },
      { s: "lan", text: "At ten o'clock, in Meeting Room 2. It takes about two hours. After lunch, your line manager, Mr. Hai, will show you your workstation.",
        vi: "Lúc mười giờ, ở phòng họp số 2. Buổi này kéo dài khoảng hai tiếng. Sau bữa trưa, anh Hải – quản lý trực tiếp của em – sẽ chỉ chỗ làm việc cho em." },
      { s: "tuan", text: "Great. How long is the probation period?",
        vi: "Dạ. Thời gian thử việc là bao lâu ạ?" },
      { s: "lan", text: "Sixty days. Mr. Hai will meet you every two weeks to check your progress. And please read the employee handbook this week. You can find it on the company intranet.",
        vi: "Sáu mươi ngày. Cứ hai tuần anh Hải sẽ gặp em một lần để xem tiến độ công việc. Và em nhớ đọc sổ tay nhân viên trong tuần này nhé. Em tìm trên mạng nội bộ của công ty." },
      { s: "tuan", text: "Thank you. That's very clear.",
        vi: "Em cảm ơn chị. Chị nói rất rõ ạ." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "What does Tuan do first?",
        options: ["He meets Mr. Hai.", "He signs his employment contract.", "He reads the employee handbook.", "He goes to Meeting Room 2."],
        answer: 1, explanation: "Chị Lan nói: “First, we need to finish some paperwork. Please sign these two copies of your employment contract.” Việc đầu tiên là ký hợp đồng." },
      { id: "l2", type: "choice", prompt: "When does the orientation start?",
        options: ["At 8:30", "After lunch", "At ten o'clock", "At two o'clock"],
        answer: 2, explanation: "“At ten o'clock, in Meeting Room 2.” Sau bữa trưa là lúc anh Hải chỉ chỗ làm việc, không phải buổi định hướng." },
      { id: "l3", type: "choice", prompt: "How often will Mr. Hai check Tuan's progress?",
        options: ["Every two weeks", "Every week", "Every month", "Every two months"],
        answer: 0, explanation: "“Every two weeks” = hai tuần một lần. “Sixty days” là thời gian thử việc (luật cho phép thử việc tối đa 60 ngày với công việc cần trình độ cao đẳng trở lên)." }
    ]
  },

  reading: {
    title: "A welcome email",
    intro: "Email chị Lan gửi cho Tuấn vào thứ Năm, trước ngày đầu đi làm. Đọc và tìm thông tin Tuấn cần chuẩn bị.",
    email: {
      from: "Lan Pham <lan.pham@riverside-trading.example>",
      to: "Tuan Nguyen",
      date: "Thursday, 29 October",
      subject: "Welcome to Riverside Trading – your first day",
      greeting: "Dear Tuan,",
      paragraphs: [
        "We are happy to welcome you to Riverside Trading as our new HR Assistant. Your first day is Monday, 2 November.",
        "Please arrive at the reception on the 5th floor at 8:30 a.m. You need to bring:"
      ],
      list: [
        "your national ID card",
        "your bank account details, so we can set up your salary payments",
        "two passport photos"
      ],
      after: [
        "Your onboarding will start with a short orientation session at 10:00. In the afternoon, your line manager, Mr. Hai, will introduce you to the team.",
        "Our dress code is business casual. Lunch on your first day is free in the staff canteen.",
        "If you have any questions, please reply to this email or call me on extension 214."
      ],
      closing: "Best regards,",
      signature: ["Lan Pham", "HR Officer, Riverside Trading"]
    },
    glossary: [
      { term: "business casual", vi: "trang phục công sở lịch sự, không bắt buộc com-lê" },
      { term: "staff canteen", vi: "nhà ăn của nhân viên" },
      { term: "extension", vi: "số máy lẻ nội bộ" },
      { term: "set up salary payments", vi: "thiết lập việc trả lương" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "Where should Tuan go when he arrives?",
        options: ["Meeting Room 2", "The staff canteen", "Mr. Hai's office", "The reception on the 5th floor"],
        answer: 3, explanation: "“Please arrive at the reception on the 5th floor at 8:30 a.m.”" },
      { id: "r2", type: "choice", prompt: "Why does the company need his bank account details?",
        options: ["So the company can pay his salary", "To make his ID badge", "To book the orientation room", "To pay for his lunch"],
        answer: 0, explanation: "“…so we can set up your salary payments” – để công ty trả lương vào tài khoản." },
      { id: "r3", type: "choice", prompt: "Which statement is TRUE?",
        options: ["Tuan pays for lunch on his first day.", "The orientation is in the afternoon.", "The dress code is business casual.", "Tuan should call Mr. Hai if he has questions."],
        answer: 2, explanation: "“Our dress code is business casual.” Bữa trưa ngày đầu miễn phí, buổi định hướng lúc 10:00, và có câu hỏi thì liên hệ chị Lan." }
    ]
  },

  grammar: {
    title: "Giving instructions politely",
    titleVi: "Hướng dẫn và nhờ việc một cách lịch sự",
    intro: "Khi hướng dẫn nhân viên mới, bộ phận nhân sự cần nói rõ việc phải làm nhưng vẫn lịch sự. Bốn mẫu câu dưới đây xuất hiện trong đoạn hội thoại và email bạn vừa học.",
    patterns: [
      { form: "Please + động từ", use: "Hướng dẫn, nhờ làm việc gì. Rất phổ biến trong email và khi nói trực tiếp.",
        examples: ["Please sign both copies.", "Please wear your ID badge."] },
      { form: "Please don't + động từ", use: "Nhắc điều không nên làm, vẫn giữ giọng lịch sự.",
        examples: ["Please don't share your password.", "Please don't park in front of the gate."] },
      { form: "You need to / You don't need to + động từ", use: "Nói điều cần thiết hoặc không cần thiết.",
        examples: ["You need to bring two passport photos.", "You don't need to bring a laptop."] },
      { form: "Could you + động từ …?", use: "Lời nhờ lịch sự nhất trong bốn mẫu. Dùng khi nhờ người khác làm việc gì cho mình.",
        examples: ["Could you send me your bank details?", "Could you arrive ten minutes early?"] }
    ],
    mistakes: [
      { wrong: "Please to sign the contract.", right: "Please sign the contract.", note: "Sau Please không thêm “to”." },
      { wrong: "You need bring two photos.", right: "You need to bring two photos.", note: "need đi với “to” + động từ." },
      { wrong: "Could you to send me the form?", right: "Could you send me the form?", note: "Sau Could you dùng động từ nguyên mẫu, không có “to”." },
      { wrong: "Please not share your password.", right: "Please don't share your password.", note: "Câu phủ định dùng don't." }
    ],
    tip: "“You must…” nghe khá mạnh, như một mệnh lệnh. Chỉ nên dùng cho quy định bắt buộc (an toàn, bảo mật). Trong email chào đón, hãy ưu tiên Please và Could you."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "During your ___, your manager checks if you can do the job well.",
      options: ["orientation", "probation period", "paperwork", "workstation"],
      answer: 1, explanation: "Probation period = thời gian thử việc, giai đoạn công ty đánh giá người mới. Orientation chỉ là buổi giới thiệu ngắn." },
    { id: "p2", type: "gap", prompt: "Your ___ is the person you report to every day.",
      options: ["colleague", "receptionist", "line manager", "HR officer"],
      answer: 2, explanation: "Line manager = quản lý trực tiếp, người bạn báo cáo công việc hằng ngày." },
    { id: "p3", type: "gap", prompt: "Please ___ your ID badge in the building.",
      options: ["wearing", "to wear", "wears", "wear"],
      answer: 3, explanation: "Sau Please dùng động từ nguyên mẫu, không có “to”: Please wear…" },
    { id: "p4", type: "gap", prompt: "You need ___ two passport photos.",
      options: ["to bring", "bring", "bringing", "brought"],
      answer: 0, explanation: "need + to + động từ: You need to bring…" },
    { id: "p5", type: "gap", prompt: "Could you ___ me a copy of your bank details?",
      options: ["to send", "send", "sending", "sent"],
      answer: 1, explanation: "Could you + động từ nguyên mẫu, không có “to”: Could you send…?" },
    { id: "p6", type: "choice", prompt: "Which sentence is the most polite in an email to a new employee?",
      options: ["Complete the form.", "You must complete the form now.", "Could you complete the form before Friday?", "Form before Friday."],
      answer: 2, explanation: "Could you…? là cách nhờ lịch sự. “You must…” nghe như mệnh lệnh, chỉ nên dùng cho quy định bắt buộc." },
    { id: "p7", type: "gap", prompt: "Please ___ share your password with anyone.",
      options: ["not", "don't", "no", "doesn't"],
      answer: 1, explanation: "Câu nhắc nhở phủ định: Please don't + động từ." },
    { id: "p8", type: "choice", prompt: "Where is the main stress in “orientation”?",
      options: ["O·ri·en·ta·tion", "o·RI·en·ta·tion", "o·ri·EN·ta·tion", "o·ri·en·TA·tion"],
      answer: 3, explanation: "Từ tận cùng bằng -tion có trọng âm ở âm tiết ngay trước -tion: o·ri·en·TA·tion." },
    { id: "p9", type: "choice", context: "A new employee asks: “Where can I find the company rules?”", prompt: "What is the best reply?",
      options: ["Your probation period is sixty days.", "They're in the employee handbook on the intranet.", "Please wear your badge.", "Nice to meet you too."],
      answer: 1, explanation: "Nội quy công ty nằm trong employee handbook (sổ tay nhân viên)." },
    { id: "p10", type: "gap", prompt: "The orientation ___ about two hours.",
      options: ["take", "taking", "takes", "is take"],
      answer: 2, explanation: "Chủ ngữ số ít (the orientation), thì hiện tại đơn → động từ thêm -s: takes." }
  ],

  writing: {
    title: "Reply to the welcome email",
    task: "Bạn là Tuấn. Hãy viết email trả lời chị Lan (50–90 từ).",
    requirements: [
      "Mở đầu bằng lời chào phù hợp.",
      "Cảm ơn chị Lan vì email chào mừng.",
      "Xác nhận bạn sẽ đến lúc 8:30 sáng thứ Hai.",
      "Cho biết bạn sẽ mang đủ giấy tờ được yêu cầu.",
      "Hỏi một câu lịch sự (ví dụ: chỗ gửi xe máy), dùng Could you…?",
      "Kết thúc email và ký tên."
    ],
    minWords: 50,
    maxWords: 90,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Dear …)", pattern: "\\bdear\\b" },
      { label: "Có lời cảm ơn", pattern: "\\bthank" },
      { label: "Nhắc tới giờ 8:30", pattern: "8[:.]30|eight[- ]thirty" },
      { label: "Nhắc tới giấy tờ cần mang", pattern: "\\bbring\\b|document|photo|\\bID\\b|bank" },
      { label: "Có câu hỏi lịch sự (Could you …?)", pattern: "could you|can you|would you" },
      { label: "Có lời kết (Best regards …)", pattern: "regards|sincerely|best wishes" }
    ],
    model: [
      "Dear Ms. Lan,",
      "Thank you for your welcome email. I am very happy to join Riverside Trading.",
      "I will arrive at the reception on the 5th floor at 8:30 a.m. on Monday. I will bring my ID card, my bank account details and two passport photos.",
      "Could you tell me if there is motorbike parking near the office?",
      "Best regards,",
      "Tuan Nguyen"
    ]
  },

  review: {
    keyPhrases: [
      { en: "Welcome to Riverside Trading.", vi: "Chào mừng bạn đến với Riverside Trading." },
      { en: "First, we need to finish some paperwork.", vi: "Trước tiên, chúng ta cần hoàn thành một số giấy tờ." },
      { en: "Please wear your ID badge at all times.", vi: "Vui lòng luôn đeo thẻ nhân viên." },
      { en: "Your probation period is sixty days.", vi: "Thời gian thử việc của bạn là sáu mươi ngày." },
      { en: "Could you send me your bank details?", vi: "Bạn có thể gửi cho tôi thông tin tài khoản ngân hàng không?" },
      { en: "If you have any questions, please reply to this email.", vi: "Nếu có câu hỏi, bạn vui lòng trả lời email này." }
    ]
  }
});
