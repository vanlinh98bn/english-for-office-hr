/* =========================================================
   A1 · Module 2 (People and the Workplace) · Bài 2
   "Departments in a company"
   Khuôn rút gọn cho A1: 8 từ, 8 câu luyện tập, bài đọc và bài viết ngắn.
   Nối tiếp bài 1: thứ Ba 13/10/2026 (tuần làm việc thứ hai của chị Hoa).
   Sau buổi họp nhóm 9:30, Peter ghé phòng Kế toán (tầng 2) tìm hiểu các phòng ban.
   Mới thêm: công ty có 5 phòng ban (Kế toán, Kinh doanh, Nhân sự, IT Support, Logistics);
   Kế toán có 4 người; Kinh doanh có 7 người (6 người cũ cộng Peter); IT Support có 1 người (Sam).
   Công ty Riverside Trading và các nhân vật đều là hư cấu.
   ========================================================= */
window.EOH.registerLesson({
  id: "a1-m2-l2",
  reviewStatus: "draft", // "draft" = bản nháp, chưa duyệt
  duration: "20–25 phút",
  scenario: "Sáng thứ Ba 13/10, sau buổi họp nhóm, Peter ghé phòng Kế toán ở tầng hai. Anh hỏi chị Hoa công ty có mấy phòng ban và mỗi phòng có bao nhiêu người. Chị Lan cũng gửi cho Peter một email liệt kê các phòng ban.",

  objectives: [
    "Nói có gì ở đâu bằng There is (số ít) và There are (số nhiều).",
    "Hỏi và trả lời Is there…? / Are there…? với Yes, there is. / No, there isn't.",
    "Hỏi số lượng bằng How many … are there?",
    "Gọi tên năm phòng ban của công ty bằng tiếng Anh.",
    "Phát âm đúng âm /ð/ trong the, this, there, they."
  ],

  vocabulary: [
    { word: "department", ipa: "/dɪˈpɑːrtmənt/", pos: "noun", meaning: "phòng ban",
      example: "There are five departments here.", exampleVi: "Ở đây có năm phòng ban." },
    { word: "company", ipa: "/ˈkʌmpəni/", pos: "noun", meaning: "công ty",
      example: "Our company is Riverside Trading.", exampleVi: "Công ty của chúng tôi là Riverside Trading." },
    { word: "building", ipa: "/ˈbɪldɪŋ/", pos: "noun", meaning: "tòa nhà",
      example: "There is a canteen in the building.", exampleVi: "Trong tòa nhà có một nhà ăn." },
    { word: "floor", ipa: "/flɔːr/", pos: "noun", meaning: "tầng",
      example: "Accounting is on the second floor.", exampleVi: "Phòng Kế toán ở tầng hai." },
    { word: "Human Resources", ipa: "/ˌhjuːmən ˈriːsɔːrsɪz/", pos: "noun", meaning: "phòng Nhân sự",
      example: "Lan works in Human Resources.", exampleVi: "Lan làm ở phòng Nhân sự." },
    { word: "Logistics", ipa: "/ləˈdʒɪstɪks/", pos: "noun", meaning: "phòng Hậu cần, vận chuyển",
      example: "Logistics sends the orders.", exampleVi: "Phòng Hậu cần gửi các đơn hàng." },
    { word: "IT Support", ipa: "/ˌaɪ ˈtiː səˈpɔːrt/", pos: "noun", meaning: "bộ phận hỗ trợ công nghệ thông tin",
      example: "IT Support fixes computers.", exampleVi: "Bộ phận hỗ trợ công nghệ thông tin sửa máy tính." },
    { word: "How many … are there?", ipa: "/ˌhaʊ ˈmeni ɑːr ðer/", pos: "phrase", meaning: "Có bao nhiêu … ?",
      example: "How many floors are there?", exampleVi: "Có bao nhiêu tầng?" }
  ],

  pronunciation: {
    groups: [
      {
        title: "Âm /ð/ (the, this, there)",
        text: "Âm /ð/ không có trong tiếng Việt. Đặt đầu lưỡi giữa hai hàm răng và rung dây thanh (có tiếng). Không đọc thành “d” hay “z”.",
        items: [
          { word: "the", marked: "/ðə/", note: "Đầu lưỡi giữa răng, có rung." },
          { word: "this", marked: "/ðɪs/" },
          { word: "there", marked: "/ðer/" },
          { word: "they", marked: "/ðeɪ/", note: "Khác với “day” /deɪ/." },
          { word: "together", marked: "/təˈɡeðər/", note: "Âm /ð/ ở giữa từ." }
        ]
      },
      {
        title: "There is / There are",
        text: "Trong lời nói, There is thường rút gọn thành There's /ðerz/. There are đọc nhanh, are yếu: /ðer ər/.",
        items: [
          { word: "There's a canteen.", marked: "/ðerz ə ˈkæntiːn/" },
          { word: "There are four people.", marked: "/ðer ər fɔːr ˈpiːpəl/" },
          { word: "Is there an IT department?", marked: "/ɪz ðer ən ˌaɪ ˈtiː dɪˈpɑːrtmənt/" }
        ]
      }
    ],
    sentences: [
      "There are four people in Accounting.",
      "This is the second floor.",
      "They work together in the Sales team."
    ]
  },

  listening: {
    title: "How many departments are there?",
    setting: "Thứ Ba 13/10, khoảng 10 giờ sáng, tầng hai. Peter ghé phòng Kế toán và hỏi chị Hoa về các phòng ban.",
    speakers: { hoa: "Hoa (accountant)", peter: "Peter (sales executive)" },
    lines: [
      { s: "hoa", text: "Good morning, Peter. This is the Accounting department.",
        vi: "Chào buổi sáng, Peter. Đây là phòng Kế toán." },
      { s: "peter", text: "Hi Hoa. How many people are there in Accounting?",
        vi: "Chào Hoa. Phòng Kế toán có bao nhiêu người?" },
      { s: "hoa", text: "There are four of us: Minh, me and two more colleagues.",
        vi: "Có bốn người: Minh, tôi và hai đồng nghiệp nữa." },
      { s: "peter", text: "How many departments are there in the company?",
        vi: "Công ty có bao nhiêu phòng ban?" },
      { s: "hoa", text: "There are five: Accounting, Sales, Human Resources, IT Support and Logistics.",
        vi: "Có năm phòng: Kế toán, Kinh doanh, Nhân sự, Hỗ trợ công nghệ thông tin và Hậu cần." },
      { s: "peter", text: "Is there an IT department?",
        vi: "Có phòng công nghệ thông tin không?" },
      { s: "hoa", text: "Yes, there is. There is one person in IT Support. It's Sam.",
        vi: "Có. Bộ phận hỗ trợ công nghệ thông tin có một người. Đó là Sam." },
      { s: "peter", text: "And how many people are there in Sales?",
        vi: "Còn phòng Kinh doanh có bao nhiêu người?" },
      { s: "hoa", text: "There are seven now, with you!",
        vi: "Bây giờ có bảy người, tính cả anh!" },
      { s: "peter", text: "Ha! Thanks, Hoa. Now I know the departments.",
        vi: "Ha! Cảm ơn Hoa. Bây giờ tôi biết các phòng ban rồi." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "How many people are there in Accounting?",
        options: ["Two", "Three", "Four", "Five"],
        answer: 2, explanation: "Hoa nói: “There are four of us: Minh, me and two more colleagues.” – phòng Kế toán có bốn người." },
      { id: "l2", type: "choice", prompt: "How many departments are there in the company?",
        options: ["Five", "Four", "Six", "Seven"],
        answer: 0, explanation: "“There are five: Accounting, Sales, Human Resources, IT Support and Logistics.” – có năm phòng ban. “Seven” là số người ở phòng Kinh doanh." },
      { id: "l3", type: "choice", prompt: "How many people are there in IT Support?",
        options: ["Two", "One", "Three", "Four"],
        answer: 1, explanation: "“There is one person in IT Support. It's Sam.” – chỉ có một người, nên dùng There is (số ít)." }
    ]
  },

  reading: {
    title: "Our departments",
    intro: "Thứ Ba, chị Lan gửi Peter email giới thiệu các phòng ban. Đọc và tìm số phòng ban và số người.",
    email: {
      from: "Lan Pham <lan.pham@riverside-trading.example>",
      to: "Peter",
      date: "Tuesday, 13 October",
      subject: "Our departments",
      greeting: "Hi Peter,",
      paragraphs: [
        "There are five departments at Riverside Trading: Accounting, Sales, Human Resources, IT Support and Logistics."
      ],
      list: [
        "Accounting: four people",
        "Sales: seven people",
        "IT Support: one person"
      ],
      after: [
        "There is a staff canteen in the building. Call me on extension 214 if you have a question."
      ],
      closing: "Best wishes,",
      signature: ["Lan Pham", "HR Department"]
    },
    glossary: [
      { term: "department", vi: "phòng ban" },
      { term: "staff canteen", vi: "nhà ăn nhân viên" },
      { term: "extension", vi: "số máy lẻ" },
      { term: "question", vi: "câu hỏi" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "How many departments are there at Riverside Trading?",
        options: ["Three", "Four", "Five", "Six"],
        answer: 2, explanation: "“There are five departments at Riverside Trading.” – có năm phòng ban." },
      { id: "r2", type: "choice", prompt: "How many people are there in Sales?",
        options: ["Four", "Six", "One", "Seven"],
        answer: 3, explanation: "“Sales: seven people” – phòng Kinh doanh có bảy người. Bốn người là phòng Kế toán, một người là IT Support." },
      { id: "r3", type: "choice", prompt: "What is there in the building?",
        options: ["A staff canteen", "A gym", "A bank", "A shop"],
        answer: 0, explanation: "“There is a staff canteen in the building.” – trong tòa nhà có nhà ăn nhân viên. Email không nhắc đến phòng tập, ngân hàng hay cửa hàng." }
    ]
  },

  grammar: {
    title: "There is / There are",
    titleVi: "There is / There are và How many…?",
    intro: "There is / There are dùng để nói “có” một người, một vật ở một nơi. Số ít dùng There is, số nhiều dùng There are. Hỏi số lượng bằng How many … are there?",
    patterns: [
      { form: "There is + a / an / one + danh từ số ít", use: "Nói có một người hoặc một vật.",
        examples: ["There is a canteen in the building.", "There is one person in IT Support."] },
      { form: "There are + số lượng + danh từ số nhiều", use: "Nói có nhiều người hoặc nhiều vật.",
        examples: ["There are five departments.", "There are four people in Accounting."] },
      { form: "Is there…? / Are there…?  –  Yes, there is. / No, there isn't.", use: "Hỏi có hay không. Trả lời ngắn dùng lại there is / there are.",
        examples: ["Is there an IT department? – Yes, there is.", "Are there many people in Human Resources? – No, there aren't."] },
      { form: "How many + danh từ số nhiều + are there?", use: "Hỏi số lượng. Trả lời bằng There are… hoặc chỉ số lượng.",
        examples: ["How many departments are there? – There are five.", "How many people are there in Sales? – Seven."] }
    ],
    mistakes: [
      { wrong: "There is four people in Accounting.", right: "There are four people in Accounting.", note: "People là số nhiều, dùng There are." },
      { wrong: "There are a canteen in the building.", right: "There is a canteen in the building.", note: "A canteen là số ít, dùng There is." },
      { wrong: "How many department are there?", right: "How many departments are there?", note: "Sau How many dùng danh từ số nhiều." },
      { wrong: "Have a canteen in the building.", right: "There is a canteen in the building.", note: "Nói “có” một nơi chốn thì dùng There is / There are, không dùng Have." }
    ],
    tip: "Khi nói nhanh, người bản xứ rút gọn There is thành There's (There's a canteen). Nhưng There are thường không được rút gọn khi viết."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "___ is a staff canteen in the building.",
      options: ["There", "They", "Their", "These"],
      answer: 0, explanation: "Cấu trúc đúng là There is + danh từ số ít. They / Their / These không đi với is trong nghĩa “có”." },
    { id: "p2", type: "gap", prompt: "___ are four people in Accounting.",
      options: ["Is", "Be", "There", "It"],
      answer: 2, explanation: "Nói “có bốn người” dùng There are four people… “It are” và “Be are” sai ngữ pháp." },
    { id: "p3", type: "gap", prompt: "How many departments ___ there?",
      options: ["is", "are", "do", "does"],
      answer: 1, explanation: "Departments là số nhiều nên dùng are: How many departments are there? Không dùng do / does với there." },
    { id: "p4", type: "gap", prompt: "There ___ one person in IT Support.",
      options: ["are", "be", "have", "is"],
      answer: 3, explanation: "One person là số ít nên dùng There is. “have” không đi sau There." },
    { id: "p5", type: "choice", prompt: "Which sentence is correct?",
      options: ["There is six people in Sales.", "Have six people in Sales.", "There be six people in Sales.", "There are six people in Sales."],
      answer: 3, explanation: "Six people là số nhiều nên dùng There are. “There is six people” sai vì is là số ít." },
    { id: "p6", type: "gap", prompt: "Is there an IT department? – Yes, ___.",
      options: ["it is", "they are", "there is", "there are"],
      answer: 2, explanation: "Câu hỏi Is there…? trả lời ngắn Yes, there is. “there are” dùng cho số nhiều, “it is / they are” không đúng mẫu." },
    { id: "p7", type: "choice", prompt: "Which word begins with the sound /ð/?",
      options: ["think", "this", "three", "tall"],
      answer: 1, explanation: "This /ðɪs/ bắt đầu bằng /ð/ (có rung). Think và three bắt đầu bằng /θ/ (không rung), tall bắt đầu bằng /t/." },
    { id: "p8", type: "choice", context: "A: How many departments are there?", prompt: "What is the best answer?",
      options: ["Five.", "Yes, there are.", "In Accounting.", "On the second floor."],
      answer: 0, explanation: "How many hỏi số lượng nên trả lời bằng số: Five. “Yes, there are” trả lời Are there…?, “In Accounting” và “On the second floor” trả lời Where." }
  ],

  writing: {
    title: "My company",
    task: "Bạn là Hoa. Hãy viết tin nhắn cho bạn Anna, kể công ty của bạn có mấy phòng ban và hỏi công ty của Anna (25–50 từ).",
    requirements: [
      "Chào Anna.",
      "Dùng There are + số lượng + departments.",
      "Dùng There is một lần (ví dụ: There is one person in IT Support).",
      "Hỏi How many departments are there in your company?",
      "Kết thúc tin nhắn và ký tên."
    ],
    minWords: 25,
    maxWords: 50,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Hi / Hello / Dear)", pattern: "\\b(hi|hello|dear)\\b" },
      { label: "Có câu There are …", pattern: "there are \\w+" },
      { label: "Có câu There is …", pattern: "there is \\w+" },
      { label: "Có từ department / departments", pattern: "\\bdepartments?\\b" },
      { label: "Có câu hỏi How many…?", pattern: "how many[^?]*\\?" },
      { label: "Có lời kết (See you / Best wishes)", pattern: "see you|regards|wishes|thanks|bye" }
    ],
    model: [
      "Hi Anna,",
      "My company is Riverside Trading. There are five departments. There are four people in Accounting, and there is one person in IT Support. How many departments are there in your company?",
      "Best wishes,",
      "Hoa"
    ]
  },

  review: {
    keyPhrases: [
      { en: "There are five departments.", vi: "Có năm phòng ban." },
      { en: "There is a canteen in the building.", vi: "Trong tòa nhà có một nhà ăn." },
      { en: "How many people are there in Accounting?", vi: "Phòng Kế toán có bao nhiêu người?" },
      { en: "Is there an IT department? – Yes, there is.", vi: "Có phòng công nghệ thông tin không? – Có." },
      { en: "Are there many people in Human Resources? – No, there aren't.", vi: "Phòng Nhân sự có nhiều người không? – Không." },
      { en: "Accounting is on the second floor.", vi: "Phòng Kế toán ở tầng hai." }
    ]
  }
});
