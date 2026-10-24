/* =========================================================
   B2 · Module 4 (Business Communication and Negotiation) · Bài 2
   "Writing persuasive emails"
   Nối tiếp B2-M4-L1 và B2-M3-L1 (IT Support thấp hơn thị trường, Sam
   là người duy nhất). Chị Lan muốn xin Tổng Giám đốc duyệt một trợ lý
   IT bán thời gian (20 giờ/tuần, khoảng 12 triệu đồng/tháng). Chị Lan,
   anh Tuấn và Sam họp ngắn để chuẩn bị bằng chứng:
   - Sam xử lý khoảng 40 yêu cầu hỗ trợ mỗi tháng; thời gian chờ trung
     bình 2 ngày; hai lần phải làm cuối tuần vì sự cố; chưa nghỉ phép
     dài ngày vì không có người thay.
   - Năm ngoái thuê dịch vụ IT bên ngoài khi khẩn cấp, tổng khoảng 60
     triệu đồng.
   - Ngân sách cho trợ lý bán thời gian khoảng 144 triệu đồng/năm.
   - Lợi ích: thời gian chờ còn khoảng 1 ngày; Sam có thể nghỉ phép; giảm
     rủi ro mất Sam; giảm chi phí thuê ngoài.
   Cách viết: vấn đề → bằng chứng → đề xuất → lợi ích → lời đề nghị mềm.
   Thời gian nói áng chừng.
   ========================================================= */
window.EOH.registerLesson({
  id: "b2-m4-l2",
  reviewStatus: "approved", // Linh duyệt ngày 24/10/2026
  duration: "45–60 phút",
  scenario: "Chị Lan (HR Manager) muốn xin Tổng Giám đốc duyệt một trợ lý IT bán thời gian để hỗ trợ Sam. Chị họp ngắn với anh Tuấn và Sam để chọn bằng chứng, rồi viết một email thuyết phục: nêu vấn đề, đưa số liệu, đề xuất, nói lợi ích và đề nghị bằng giọng lịch sự, mềm mỏng.",

  objectives: [
    "Hiểu và dùng 10 từ vựng thường gặp khi viết email thuyết phục.",
    "Nghe cuộc họp chuẩn bị email, nhận ra bằng chứng nào mạnh, lời đề nghị nào lịch sự.",
    "Đọc một email thuyết phục hoàn chỉnh và nhận ra từng phần: vấn đề, bằng chứng, đề xuất, lợi ích, lời đề nghị.",
    "Làm mềm lời đề nghị: Would it be possible to…? / I was wondering if… / We would be grateful if… / It might be worth…; dùng would, might, could thay cho will, must.",
    "Viết một email thuyết phục ngắn, có số liệu và lời đề nghị mềm mỏng."
  ],

  vocabulary: [
    { word: "persuasive", ipa: "/pərˈsweɪsɪv/", pos: "adjective", meaning: "có sức thuyết phục",
      example: "A persuasive email uses facts, not only opinions.", exampleVi: "Một email thuyết phục dùng sự kiện, không chỉ ý kiến." },
    { word: "proposal", ipa: "/prəˈpoʊzəl/", pos: "noun", meaning: "đề xuất",
      example: "I would like to put forward a short proposal.", exampleVi: "Tôi xin đưa ra một đề xuất ngắn." },
    { word: "evidence", ipa: "/ˈevɪdəns/", pos: "noun", meaning: "bằng chứng, số liệu chứng minh",
      example: "We need strong evidence before we ask for budget.", exampleVi: "Chúng ta cần bằng chứng mạnh trước khi xin ngân sách." },
    { word: "ticket", ipa: "/ˈtɪkɪt/", pos: "noun", meaning: "yêu cầu hỗ trợ (trong hệ thống IT)",
      example: "Sam handles about forty tickets a month.", exampleVi: "Sam xử lý khoảng bốn mươi yêu cầu hỗ trợ mỗi tháng." },
    { word: "response time", ipa: "/rɪˈspɑːns taɪm/", pos: "noun", meaning: "thời gian phản hồi",
      example: "The average response time is two days.", exampleVi: "Thời gian phản hồi trung bình là hai ngày." },
    { word: "outsource", ipa: "/ˈaʊtsɔːrs/", pos: "verb", meaning: "thuê ngoài",
      example: "We had to outsource urgent repairs last year.", exampleVi: "Năm ngoái chúng ta phải thuê ngoài các việc sửa chữa khẩn cấp." },
    { word: "part-time", ipa: "/ˌpɑːrt ˈtaɪm/", pos: "adjective", meaning: "bán thời gian",
      example: "We are asking for a part-time IT assistant.", exampleVi: "Chúng tôi xin một trợ lý IT bán thời gian." },
    { word: "cost-effective", ipa: "/ˌkɔːst ɪˈfektɪv/", pos: "adjective", meaning: "hiệu quả so với chi phí, đáng tiền",
      example: "This option is more cost-effective than outsourcing.", exampleVi: "Phương án này hiệu quả hơn so với thuê ngoài." },
    { word: "approve", ipa: "/əˈpruːv/", pos: "verb", meaning: "phê duyệt",
      example: "We would be grateful if you could approve the request.", exampleVi: "Chúng tôi sẽ rất biết ơn nếu anh phê duyệt đề nghị này." },
    { word: "tone", ipa: "/toʊn/", pos: "noun", meaning: "giọng văn (lịch sự, mềm mỏng, cứng rắn…)",
      example: "The tone of the email should be polite and confident.", exampleVi: "Giọng văn của email nên lịch sự và tự tin." }
  ],

  pronunciation: {
    groups: [
      {
        title: "would đọc nhẹ, nhấn động từ chính",
        text: "Trong câu đề nghị lịch sự, would và could đọc rất nhẹ. Nhấn vào động từ chính và giọng lên nhẹ cuối câu. Âm tiết in hoa là âm đọc to và dài hơn.",
        items: [
          { word: "Would it be possible to…?", marked: "wəd it be POS·si·ble to…?" },
          { word: "I was wondering if you could…", marked: "I wəz WON·der·ing if you kəd…" },
          { word: "We would be grateful if…", marked: "We wəd be GRATE·ful if…" }
        ]
      },
      {
        title: "Trọng âm từ",
        text: "Những từ hay gặp trong email thuyết phục.",
        items: [
          { word: "persuasive", marked: "per·SUA·sive" },
          { word: "proposal", marked: "pro·PO·sal" },
          { word: "evidence", marked: "EV·i·dence" },
          { word: "cost-effective", marked: "cost-ef·FEC·tive" }
        ]
      }
    ],
    sentences: [
      "Would it be possible to hire a part-time IT assistant?",
      "I was wondering if you could approve the request this month.",
      "It might be worth considering a more cost-effective option."
    ]
  },

  listening: {
    title: "Planning a persuasive email",
    setting: "Phòng Nhân sự. Chị Lan, anh Tuấn và Sam (IT Support) chuẩn bị email xin Tổng Giám đốc duyệt trợ lý IT bán thời gian.",
    speakers: { lan: "Lan (HR Manager)", tuan: "Tuan (HR Executive)", sam: "Sam (IT Support)" },
    lines: [
      { s: "lan", text: "Sam, thanks for joining us. I'd like to ask the General Director to approve a part-time IT assistant, and I need good evidence.",
        vi: "Sam, cảm ơn em đã tham gia. Chị muốn xin Tổng Giám đốc duyệt một trợ lý IT bán thời gian, và chị cần bằng chứng tốt." },
      { s: "sam", text: "Well, I handle about forty tickets a month, and the average response time is two days. Sometimes people wait much longer.",
        vi: "Dạ, em xử lý khoảng bốn mươi yêu cầu hỗ trợ mỗi tháng, và thời gian phản hồi trung bình là hai ngày. Có lúc mọi người phải chờ lâu hơn nhiều." },
      { s: "tuan", text: "Also, you had to work two weekends last year because of system problems, didn't you?",
        vi: "Ngoài ra, năm ngoái em phải làm hai cuối tuần vì sự cố hệ thống, đúng không?" },
      { s: "sam", text: "Yes. And I haven't taken more than two days off in a row, because nobody can cover for me.",
        vi: "Đúng ạ. Và em chưa nghỉ quá hai ngày liền, vì không ai làm thay em được." },
      { s: "lan", text: "That's a real risk for the company. What about outsourcing? Did we spend anything last year?",
        vi: "Đó là rủi ro thật sự cho công ty. Còn thuê ngoài thì sao? Năm ngoái mình có tốn khoản nào không?" },
      { s: "tuan", text: "About sixty million dong for urgent outside support. A part-time assistant for twenty hours a week would cost about one hundred forty-four million a year.",
        vi: "Khoảng sáu mươi triệu đồng cho hỗ trợ khẩn cấp bên ngoài. Một trợ lý bán thời gian hai mươi giờ một tuần sẽ tốn khoảng một trăm bốn mươi bốn triệu đồng một năm." },
      { s: "lan", text: "So it's more expensive than what we spent, but it would solve the problem properly. I'll say that the assistant would cut the response time to about one day.",
        vi: "Vậy là đắt hơn khoản mình đã chi, nhưng sẽ giải quyết vấn đề triệt để. Chị sẽ viết rằng trợ lý sẽ rút thời gian phản hồi còn khoảng một ngày." },
      { s: "sam", text: "And I could finally take a proper holiday.",
        vi: "Và cuối cùng em có thể nghỉ phép đàng hoàng." },
      { s: "lan", text: "That's a good point, but I'd put it differently. We'll say that it reduces the risk of losing a key employee. Now, about the tone.",
        vi: "Ý đó hay, nhưng chị sẽ diễn đạt khác. Mình sẽ viết rằng việc này giảm rủi ro mất một nhân viên chủ chốt. Còn giọng văn thì sao." },
      { s: "tuan", text: "We shouldn't sound too demanding. Instead of saying 'Please approve this', we could say 'Would it be possible to approve this by the end of the month?'",
        vi: "Mình không nên nghe có vẻ đòi hỏi quá. Thay vì viết ‘Xin duyệt việc này’, mình viết ‘Liệu có thể duyệt việc này trước cuối tháng không ạ?’" },
      { s: "lan", text: "Exactly. And I'd like to end with 'We would be grateful if you could let us know your decision.' Polite, but clear about what we want.",
        vi: "Đúng vậy. Và chị muốn kết thúc bằng ‘Chúng tôi sẽ rất biết ơn nếu anh cho biết quyết định’. Lịch sự nhưng rõ ràng về điều mình muốn." },
      { s: "sam", text: "Should I add a list of the most common problems?",
        vi: "Em có nên thêm danh sách các sự cố thường gặp nhất không?" },
      { s: "lan", text: "Yes, please. Keep it short, just the top three.",
        vi: "Có, em thêm nhé. Ngắn thôi, chỉ ba sự cố hàng đầu." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "What is the average response time for IT tickets now?",
        options: ["One day", "Two days", "Two weeks", "Forty days"],
        answer: 1, explanation: "Sam nói: “…the average response time is two days.” Một ngày là thời gian dự kiến sau khi có trợ lý." },
      { id: "l2", type: "choice", prompt: "Why does Lan change Sam's point about taking a holiday?",
        options: ["She thinks holidays are not important.", "She prefers to say it reduces the risk of losing a key employee.", "She wants to hide it from the General Director.", "She thinks Sam is joking."],
        answer: 1, explanation: "Chị Lan nói: “I'd put it differently. We'll say that it reduces the risk of losing a key employee.” Lý do cho công ty mạnh hơn lý do cho cá nhân." },
      { id: "l3", type: "choice", prompt: "What tone does Lan want for the email?",
        options: ["Polite but clear about what they want", "Very informal", "Angry", "Very short and direct"],
        answer: 0, explanation: "“Polite, but clear about what we want.”" }
    ]
  },

  reading: {
    title: "Request for a part-time IT assistant",
    intro: "Email chị Lan gửi Tổng Giám đốc. Đọc và tìm từng phần: vấn đề, bằng chứng, đề xuất, lợi ích và lời đề nghị.",
    email: {
      from: "Lan Pham <lan.pham@riverside-trading.example>",
      to: "General Director; cc: Ngoc Dang",
      date: "Monday",
      subject: "Request for a part-time IT assistant",
      greeting: "Dear Director,",
      paragraphs: [
        "I am writing to put forward a proposal that I believe would benefit the whole company. At present, all of our IT support is provided by one person, and I am concerned that this is becoming a risk."
      ],
      list: [
        "Workload: our IT Support specialist handles about 40 tickets a month, and the average response time is two days.",
        "Cover: he has worked two weekends because of system failures and has been unable to take more than two days' leave in a row.",
        "Cost: last year we spent about 60 million dong on urgent outside support."
      ],
      after: [
        "We would therefore like to propose a part-time IT assistant, working 20 hours a week, at a cost of about 144 million dong a year. We believe this would reduce the response time to around one day and would reduce the risk of losing a key employee. It might also be worth considering that outside support is less cost-effective in the long term.",
        "Would it be possible to approve this request by the end of the month, so that we can start recruiting? We would be grateful if you could let us know your decision, and I would be very happy to discuss the details with you in person."
      ],
      closing: "With kind regards,",
      signature: ["Lan Pham", "HR Manager, Riverside Trading"]
    },
    glossary: [
      { term: "put forward", vi: "đưa ra (đề xuất)" },
      { term: "at present", vi: "hiện nay" },
      { term: "system failure", vi: "sự cố hệ thống" },
      { term: "in the long term", vi: "về lâu dài" },
      { term: "in person", vi: "trực tiếp, gặp mặt" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "What is the main problem described in the email?",
        options: ["The IT budget is too high.", "All IT support is provided by one person.", "The computers are too old.", "Sam does not work hard enough."],
        answer: 1, explanation: "“…all of our IT support is provided by one person, and I am concerned that this is becoming a risk.” Email nói về rủi ro, không phê bình Sam." },
      { id: "r2", type: "choice", prompt: "How many hours a week would the assistant work?",
        options: ["10", "40", "20", "144"],
        answer: 2, explanation: "“…working 20 hours a week, at a cost of about 144 million dong a year.” 40 là số yêu cầu hỗ trợ mỗi tháng; 144 là chi phí." },
      { id: "r3", type: "choice", prompt: "Which sentence from the email is a soft request?",
        options: ["Please approve this immediately.", "You must approve this request.", "I demand an answer today.", "Would it be possible to approve this request by the end of the month?"],
        answer: 3, explanation: "Would it be possible to…? là cách đề nghị mềm. Các câu còn lại là mệnh lệnh." }
    ]
  },

  grammar: {
    title: "Softening requests: would, might, I was wondering if",
    titleVi: "Làm mềm lời đề nghị trong email",
    intro: "Khi xin cấp trên một điều gì, nói thẳng “Please approve this” nghe như ra lệnh. Ta làm mềm bằng would, could, might và các cụm lịch sự. Bốn mẫu dưới đây có trong email của chị Lan.",
    patterns: [
      { form: "Would it be possible to + V…? / I was wondering if you could + V…", use: "Đề nghị rất lịch sự với người cấp trên hoặc người ngoài công ty.",
        examples: ["Would it be possible to approve this request by the end of the month?", "I was wondering if you could let us know your decision."] },
      { form: "We would be grateful if you could + V / We would appreciate it if you could + V", use: "Đề nghị trang trọng, thể hiện sự biết ơn trước.",
        examples: ["We would be grateful if you could let us know your decision.", "We would appreciate it if you could review the figures."] },
      { form: "It might be worth + V-ing / It would be helpful if…", use: "Gợi ý nhẹ, không ép buộc.",
        examples: ["It might be worth considering that outside support is less cost-effective.", "It would be helpful if we could start recruiting soon."] },
      { form: "would / could thay cho will / can để nói về lợi ích", use: "Nói về kết quả mong đợi (chưa chắc chắn) thay vì khẳng định chắc chắn.",
        examples: ["We believe this would reduce the response time to one day.", "It could also reduce the risk of losing a key employee."] }
    ],
    mistakes: [
      { wrong: "I was wondering if you could to approve this.", right: "I was wondering if you could approve this.", note: "Sau could dùng động từ nguyên mẫu không to. (Dùng can cũng được nhưng nghe kém lịch sự hơn could.)" },
      { wrong: "We would be grateful if you will let us know.", right: "We would be grateful if you could let us know.", note: "Sau if trong câu lịch sự dùng could, không dùng will." },
      { wrong: "Would it be possible approving this?", right: "Would it be possible to approve this?", note: "Would it be possible + to + động từ nguyên mẫu." },
      { wrong: "It might be worth to consider this option.", right: "It might be worth considering this option.", note: "worth + V-ing, không dùng to." }
    ],
    tip: "Email thuyết phục tốt có năm phần: vấn đề, bằng chứng (con số), đề xuất, lợi ích, rồi lời đề nghị mềm mỏng. Làm mềm giọng văn không có nghĩa là mơ hồ: câu cuối vẫn phải nói rõ bạn muốn gì và trước khi nào."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "Would it be possible ___ this request by the end of the month?",
      options: ["approving", "approve", "approved", "to approve"],
      answer: 3, explanation: "Would it be possible + to + động từ nguyên mẫu: to approve." },
    { id: "p2", type: "gap", prompt: "I was wondering if you ___ let us know your decision.",
      options: ["would to", "will", "could", "must"],
      answer: 2, explanation: "I was wondering if you could… là cách nói lịch sự. will nghe thẳng hơn, must là ra lệnh, would to sai cấu trúc." },
    { id: "p3", type: "gap", prompt: "We would be grateful if you could ___ the figures.",
      options: ["review", "reviewing", "reviewed", "to review"],
      answer: 0, explanation: "could + động từ nguyên mẫu không to: could review." },
    { id: "p4", type: "choice", prompt: "Which sentence is the most polite request to a senior manager?",
      options: ["Approve this today.", "You should approve this.", "I need you to approve this.", "Would it be possible to approve this by Friday?"],
      answer: 3, explanation: "Would it be possible to…? là cách mềm nhất. Các câu còn lại nghe như ra lệnh hoặc yêu sách." },
    { id: "p5", type: "gap", prompt: "It might be worth ___ a part-time assistant instead of outsourcing.",
      options: ["to consider", "considering", "consider", "considered"],
      answer: 1, explanation: "worth + V-ing: worth considering." },
    { id: "p6", type: "choice", prompt: "Which sentence about benefits sounds most appropriate in a proposal?",
      options: ["This will definitely fix every problem.", "This would reduce the response time to about one day.", "This is certain to save money.", "This must work."],
      answer: 1, explanation: "would + động từ nói về kết quả mong đợi, vừa chắc chắn vừa khiêm tốn. definitely / certain / must quá tuyệt đối." },
    { id: "p7", type: "gap", prompt: "The email should have a polite but confident ___.",
      options: ["tone", "ticket", "deadline", "evidence"],
      answer: 0, explanation: "tone = giọng văn." },
    { id: "p8", type: "gap", prompt: "A part-time assistant is more ___ than paying for outside support every time.",
      options: ["persuasive", "cost-effective", "outsourced", "approved"],
      answer: 1, explanation: "cost-effective = hiệu quả so với chi phí." },
    { id: "p9", type: "gap", prompt: "Sam handles about forty support ___ a month.",
      options: ["tickets", "proposals", "agendas", "minutes"],
      answer: 0, explanation: "ticket = yêu cầu hỗ trợ trong hệ thống IT." },
    { id: "p10", type: "gap", prompt: "We need strong ___ before we ask for budget.",
      options: ["tone", "evidence", "ticket", "item"],
      answer: 1, explanation: "evidence = bằng chứng, số liệu. Cần bằng chứng để thuyết phục." }
  ],

  writing: {
    title: "Write a persuasive email",
    task: "Bạn là anh Tuấn. Viết email (120–180 từ) gửi chị Lan, xin chị đồng ý cho phòng Nhân sự mua phần mềm quản lý hồ sơ nhân sự (khoảng 60 triệu đồng một năm). Vấn đề: hồ sơ giấy và bảng tính mất nhiều thời gian (mỗi tháng khoảng 20 giờ tìm và cập nhật dữ liệu); đôi khi dữ liệu không khớp nhau. Lợi ích: tiết kiệm khoảng 15 giờ mỗi tháng, ít sai sót hơn. Đề nghị mềm mỏng.",
    requirements: [
      "Mở đầu bằng lời chào và mục đích email.",
      "Nêu vấn đề kèm số liệu.",
      "Nêu đề xuất và lợi ích bằng would hoặc could.",
      "Dùng Would it be possible to… hoặc I was wondering if you could…",
      "Dùng We would be grateful if… hoặc It might be worth…",
      "Kết thúc email và ký tên."
    ],
    minWords: 120,
    maxWords: 180,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Dear … / Hi …)", pattern: "\\bdear\\b|\\bhi\\b" },
      { label: "Có số liệu (20 hours / 15 hours / 60 million)", pattern: "\\d+ (hours|million)" },
      { label: "Có would / could nói về lợi ích", pattern: "\\b(would|could)\\b" },
      { label: "Có Would it be possible to… / I was wondering if…", pattern: "would it be possible to|i was wondering if" },
      { label: "Có We would be grateful if… / It might be worth…", pattern: "would be grateful if|would appreciate it if|might be worth" },
      { label: "Có lời kết (Best regards …)", pattern: "regards|sincerely|best wishes" }
    ],
    model: [
      "Dear Lan,",
      "I would like to put forward a proposal to buy HR record software for our department.",
      "At present, we use paper files and spreadsheets. Each month, we spend about 20 hours finding and updating information, and sometimes the data in different files does not match. This could lead to mistakes in payroll or leave records.",
      "Software costing about 60 million dong a year would save around 15 hours a month and would reduce errors. It might also be worth considering that it would make audits easier.",
      "Would it be possible to discuss this at our next meeting? We would be grateful if you could let me know what you think.",
      "I can prepare a comparison of three options if that would be helpful.",
      "Best regards,",
      "Tuan"
    ]
  },

  review: {
    keyPhrases: [
      { en: "I am writing to put forward a proposal.", vi: "Tôi viết thư này để đưa ra một đề xuất." },
      { en: "Would it be possible to approve this by the end of the month?", vi: "Liệu có thể duyệt việc này trước cuối tháng không ạ?" },
      { en: "I was wondering if you could let us know your decision.", vi: "Tôi tự hỏi liệu anh có thể cho chúng tôi biết quyết định không." },
      { en: "We would be grateful if you could review the figures.", vi: "Chúng tôi sẽ rất biết ơn nếu anh xem lại các số liệu." },
      { en: "This would reduce the response time to around one day.", vi: "Việc này sẽ rút thời gian phản hồi còn khoảng một ngày." },
      { en: "It might be worth considering a more cost-effective option.", vi: "Có lẽ nên cân nhắc một phương án hiệu quả hơn về chi phí." }
    ]
  }
});
