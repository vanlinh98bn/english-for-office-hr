/* =========================================================
   A1 · Module 3 (Everyday Office English) · Bài 2
   "Simple requests and offers"
   Khuôn rút gọn cho A1: 8 từ, 8 câu luyện tập, bài đọc và bài viết ngắn.
   Nối tiếp bài 1: thứ Ba 20/10/2026, giờ nghỉ trưa (11:30 – 13:00), nhà ăn nhân viên.
   Peter Clark (họ do người soạn đặt thêm) là đồng nghiệp mới của nhóm David, Kinh doanh.
   Công ty Riverside Trading và các nhân vật đều là hư cấu.
   ========================================================= */
window.EOH.registerLesson({
  id: "a1-m3-l2",
  reviewStatus: "draft", // "draft" = bản nháp, chưa duyệt
  duration: "20–25 phút",
  scenario: "Thứ Ba, 11 giờ 40, nhà ăn nhân viên. Peter xin ngồi cùng bàn với chị Hoa. Chị Hoa mời anh uống trà. Hai người nhờ nhau giúp học tiếng Việt và tiếng Anh.",

  objectives: [
    "Xin phép lịch sự với Can I…?: Can I sit here?",
    "Nói điều mình muốn bằng I'd like…: I'd like green tea, please.",
    "Mời người khác bằng Would you like…?: Would you like some tea?",
    "Trả lời lời mời: Yes, please. / No, thank you. và dùng please đúng chỗ.",
    "Nói với ngữ điệu lịch sự: lên giọng nhẹ ở cuối lời mời, xuống giọng ở lời đáp."
  ],

  vocabulary: [
    { word: "request", ipa: "/rɪˈkwest/", pos: "noun", meaning: "lời nhờ, lời đề nghị xin giúp",
      example: "I have a small request.", exampleVi: "Tôi có một lời nhờ nhỏ." },
    { word: "offer", ipa: "/ˈɔːfər/", pos: "noun / verb", meaning: "lời mời, lời đề nghị giúp; đề nghị",
      example: "Thank you for your offer.", exampleVi: "Cảm ơn lời đề nghị của bạn." },
    { word: "tea", ipa: "/tiː/", pos: "noun", meaning: "trà",
      example: "I'd like green tea, please.", exampleVi: "Cho tôi trà xanh nhé." },
    { word: "sugar", ipa: "/ˈʃʊɡər/", pos: "noun", meaning: "đường",
      example: "No sugar, thank you.", exampleVi: "Không đường, cảm ơn." },
    { word: "sit", ipa: "/sɪt/", pos: "verb", meaning: "ngồi",
      example: "Can I sit here?", exampleVi: "Tôi ngồi đây được không?" },
    { word: "borrow", ipa: "/ˈbɑːroʊ/", pos: "verb", meaning: "mượn",
      example: "Can I borrow your pen?", exampleVi: "Tôi mượn bút của bạn được không?" },
    { word: "help", ipa: "/help/", pos: "noun / verb", meaning: "sự giúp đỡ; giúp",
      example: "Thank you for your help.", exampleVi: "Cảm ơn sự giúp đỡ của bạn." },
    { word: "open", ipa: "/ˈoʊpən/", pos: "verb", meaning: "mở",
      example: "Can I open the window?", exampleVi: "Tôi mở cửa sổ được không?" }
  ],

  pronunciation: {
    groups: [
      {
        title: "Ngữ điệu lịch sự",
        text: "Lời xin phép và lời mời (Can I…? Would you like…?) lên giọng nhẹ ở cuối. Lời đáp (Yes, please. Thank you.) xuống giọng. Giọng nhẹ và mỉm cười sẽ nghe lịch sự hơn.",
        items: [
          { word: "Can I sit here? ↗", marked: "Can I sit HERE? ↗", note: "Xin phép: lên giọng nhẹ." },
          { word: "Would you like some tea? ↗", marked: "Would you like some TEA? ↗", note: "Lời mời: lên giọng nhẹ." },
          { word: "Yes, please. ↘", marked: "Yes, PLEASE. ↘", note: "Lời đáp: xuống giọng." },
          { word: "No, thank you. ↘", marked: "No, THANK you. ↘", note: "Lời từ chối lịch sự: xuống giọng." }
        ]
      },
      {
        title: "Từ lịch sự",
        text: "Những từ nhỏ này làm câu nói lịch sự hơn. Đọc rõ và không nói vội.",
        items: [
          { word: "please", marked: "/pliːz/", note: "Âm dài /iː/." },
          { word: "sorry", marked: "/ˈsɑːri/" },
          { word: "excuse me", marked: "/ɪkˈskjuːz mi/" },
          { word: "I'd like", marked: "/aɪd ˈlaɪk/", note: "I'd là I would, đọc nhanh và nhẹ." }
        ]
      }
    ],
    sentences: [
      "Can I sit here, please?",
      "Would you like some tea?",
      "I'd like green tea, please."
    ]
  },

  listening: {
    title: "Tea in the canteen",
    setting: "Thứ Ba 20/10, 11 giờ 40, nhà ăn nhân viên. Peter gặp chị Hoa lúc nghỉ trưa.",
    speakers: { peter: "Peter (Sales)", hoa: "Hoa (Accountant)" },
    lines: [
      { s: "peter", text: "Hi Hoa. Can I sit here?",
        vi: "Chào Hoa. Tôi ngồi đây được không?" },
      { s: "hoa", text: "Of course, Peter! Would you like some tea? I have a pot of tea.",
        vi: "Dĩ nhiên rồi, Peter! Anh uống trà không? Tôi có một bình trà." },
      { s: "peter", text: "Yes, please. I'd like green tea.",
        vi: "Vâng, cảm ơn chị. Tôi muốn trà xanh." },
      { s: "hoa", text: "Here you are. Would you like some sugar?",
        vi: "Của anh đây. Anh có dùng đường không?" },
      { s: "peter", text: "No, thank you. Can I ask you a question?",
        vi: "Không, cảm ơn chị. Tôi hỏi chị một câu được không?" },
      { s: "hoa", text: "Sure.",
        vi: "Được chứ." },
      { s: "peter", text: "I'd like to learn some Vietnamese words. Can I ask you about them at lunch?",
        vi: "Tôi muốn học vài từ tiếng Việt. Tôi hỏi chị về các từ đó vào giờ ăn trưa được không?" },
      { s: "hoa", text: "Yes, of course. And I'd like to practice my English with you.",
        vi: "Được chứ. Và tôi cũng muốn luyện tiếng Anh với anh." },
      { s: "peter", text: "That's a good idea. Would you like to meet here on Thursday?",
        vi: "Ý hay đấy. Chị có muốn gặp ở đây vào thứ Năm không?" },
      { s: "hoa", text: "Yes, please. See you then.",
        vi: "Vâng, được ạ. Hẹn gặp anh lúc đó." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "What does Peter want to drink?",
        options: ["Coffee", "Water", "Green tea", "Black coffee"],
        answer: 2, explanation: "Peter nói: “Yes, please. I'd like green tea.” – anh muốn trà xanh." },
      { id: "l2", type: "choice", prompt: "What does Peter say about sugar?",
        options: ["He wants some", "He says no, thank you", "He asks Hoa for a lot", "He does not answer"],
        answer: 1, explanation: "Hoa hỏi “Would you like some sugar?” và Peter trả lời “No, thank you.” – anh không dùng đường." },
      { id: "l3", type: "choice", prompt: "When do Peter and Hoa want to meet again?",
        options: ["On Monday", "On Wednesday", "On Friday", "On Thursday"],
        answer: 3, explanation: "Peter hỏi: “Would you like to meet here on Thursday?” và Hoa đồng ý – hai người gặp lại thứ Năm." }
    ]
  },

  reading: {
    title: "Tea and practice",
    intro: "Tối thứ Ba, Peter gửi email cho chị Hoa để cảm ơn và đề nghị luyện tập cùng nhau. Đọc và tìm ngày, giờ, địa điểm.",
    email: {
      from: "Peter Clark <peter.clark@riverside-trading.example>",
      to: "Hoa Tran",
      date: "Tuesday, 20 October",
      subject: "Tea and practice",
      greeting: "Hi Hoa,",
      paragraphs: [
        "Thank you for the tea today! I'd like to practice Vietnamese with you. Would you like to practice English with me?"
      ],
      list: [
        "Days: Tuesday and Thursday",
        "Time: 11:45 a.m.",
        "Place: staff canteen"
      ],
      after: [
        "Can I send you some questions by email? Please tell me."
      ],
      closing: "Best wishes,",
      signature: ["Peter Clark", "Sales Team"]
    },
    glossary: [
      { term: "practice", vi: "luyện tập" },
      { term: "staff canteen", vi: "nhà ăn nhân viên" },
      { term: "Best wishes", vi: "lời chào kết thư thân thiện" },
      { term: "tell me", vi: "cho tôi biết" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "What does Peter want to practice with Hoa?",
        options: ["Vietnamese", "Sales", "Tea", "Accounting"],
        answer: 0, explanation: "“I'd like to practice Vietnamese with you.” – Peter muốn luyện tiếng Việt cùng Hoa. Hoa cũng được mời luyện tiếng Anh." },
      { id: "r2", type: "choice", prompt: "Where do they meet?",
        options: ["Room 301", "Reception", "The staff canteen", "David's office"],
        answer: 2, explanation: "“Place: staff canteen” – hai người gặp ở nhà ăn nhân viên." },
      { id: "r3", type: "choice", prompt: "What does Peter ask at the end of the email?",
        options: ["Can I borrow your pen?", "Would you like some tea?", "Can I sit here?", "Can I send you some questions by email?"],
        answer: 3, explanation: "Câu cuối: “Can I send you some questions by email? Please tell me.” – Peter xin phép gửi vài câu hỏi qua email. Hai câu hỏi còn lại là của cuộc nói chuyện ở nhà ăn." }
    ]
  },

  grammar: {
    title: "Can I…? / I'd like… / Would you like…?",
    titleVi: "Xin phép, nói điều mình muốn và mời người khác",
    intro: "Ba mẫu câu này giúp bạn xin phép, nói điều mình muốn và mời người khác một cách lịch sự. Thêm please hoặc thank you thì càng lịch sự hơn.",
    patterns: [
      { form: "Can I + động từ (nguyên mẫu)…?", use: "Xin phép làm gì, hoặc nhờ làm gì. Sau Can I là động từ không có to.",
        examples: ["Can I sit here?", "Can I borrow your pen, please?"] },
      { form: "I'd like + danh từ / to + động từ", use: "Nói điều mình muốn một cách lịch sự. I'd = I would.",
        examples: ["I'd like green tea, please.", "I'd like to learn some Vietnamese."] },
      { form: "Would you like + some + danh từ? / to + động từ?", use: "Mời người khác hoặc đề nghị giúp.",
        examples: ["Would you like some tea?", "Would you like to meet on Thursday?"] },
      { form: "Yes, please. / No, thank you. / Of course. / Sure.", use: "Trả lời lời mời hoặc lời nhờ. Với Would you like…? hãy dùng Yes, please. hoặc No, thank you.",
        examples: ["Would you like some sugar? – No, thank you.", "Can I sit here? – Of course."] }
    ],
    mistakes: [
      { wrong: "Can I to sit here?", right: "Can I sit here?", note: "Sau Can I dùng động từ nguyên mẫu, không có to." },
      { wrong: "Would you like drink tea?", right: "Would you like to drink tea? / Would you like some tea?", note: "Sau Would you like cần to + động từ, hoặc một danh từ." },
      { wrong: "Would you like some tea? – Yes, I'd like.", right: "Would you like some tea? – Yes, please.", note: "Đáp lời mời bằng Yes, please. hoặc No, thank you." },
      { wrong: "I'd like have a coffee.", right: "I'd like a coffee. / I'd like to have a coffee.", note: "Sau I'd like là danh từ, hoặc to + động từ." }
    ],
    tip: "Trong công việc, nên thêm please khi nhờ người khác, và nói thank you sau khi nhận. Nghe “Give me tea” rất thô, còn “I'd like some tea, please” nghe lịch sự."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "___ I sit here? – Of course.",
      options: ["Am", "Does", "Is", "Can"],
      answer: 3, explanation: "Xin phép làm gì thì dùng Can I + động từ: Can I sit here? “Am / Does / Is” không đi với I + sit theo cách này." },
    { id: "p2", type: "gap", prompt: "Would you like to ___ some tea?",
      options: ["drinking", "drinks", "drink", "to drink"],
      answer: 2, explanation: "Would you like to + động từ nguyên mẫu: Would you like to drink some tea? Đã có to rồi nên không thêm to nữa, và động từ không thêm -s hay -ing." },
    { id: "p3", type: "choice", prompt: "Which sentence is a polite request?",
      options: ["Give me the pen.", "Can I use your pen, please?", "You use my pen.", "I use your pen now."],
      answer: 1, explanation: "Can I use your pen, please? là lời xin phép lịch sự. “Give me the pen.” là mệnh lệnh, nghe thô." },
    { id: "p4", type: "choice", context: "A: Would you like some coffee?", prompt: "What is the best answer?",
      options: ["Yes, I do.", "Yes, please.", "Yes, I can.", "Yes, it is."],
      answer: 1, explanation: "Đáp lời mời Would you like…? bằng Yes, please. hoặc No, thank you. “Yes, I do / I can / it is” không hợp với câu mời." },
    { id: "p5", type: "gap", prompt: "I'd ___ a cup of green tea, please.",
      options: ["like", "want to", "liking", "likes"],
      answer: 0, explanation: "I'd like + danh từ: I'd like a cup of green tea. “I'd want to” không đi với danh từ, còn liking và likes không đúng sau I'd." },
    { id: "p6", type: "choice", prompt: "Which sentence is WRONG?",
      options: ["Can I sit here?", "Would you like some tea?", "Can I to open the window?", "I'd like a coffee, please."],
      answer: 2, explanation: "Sau Can I là động từ nguyên mẫu không có to: Can I open the window? Ba câu còn lại đều đúng." },
    { id: "p7", type: "choice", context: "A friend says: “Would you like some water?” You don't want water.", prompt: "What do you say?",
      options: ["No, thank you.", "No, please.", "Yes, thank you.", "Of course."],
      answer: 0, explanation: "Từ chối lịch sự: No, thank you. “No, please” không đúng, “Yes, thank you” nghĩa là bạn muốn, còn “Of course” không đáp được lời mời." },
    { id: "p8", type: "choice", prompt: "Does your voice go up or down at the end of “Would you like some tea?”",
      options: ["Down", "Up"],
      answer: 1, explanation: "Lời mời và lời xin phép lên giọng nhẹ ở cuối để nghe thân thiện. Lời đáp như “Yes, please.” thì xuống giọng." }
  ],

  writing: {
    title: "A reply to Peter",
    task: "Bạn là Hoa. Tối thứ Ba, bạn nhận email của Peter. Hãy viết tin nhắn trả lời lịch sự: mời Peter uống trà và xin phép hỏi anh vài điều về nhóm Kinh doanh (25–50 từ).",
    requirements: [
      "Chào Peter.",
      "Mời Peter bằng Would you like…?",
      "Nói bạn muốn làm gì bằng I'd like…",
      "Xin phép bằng Can I…?",
      "Hẹn gặp và ký tên."
    ],
    minWords: 25,
    maxWords: 50,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Hi / Hello / Dear)", pattern: "\\b(hi|hello|dear)\\b" },
      { label: "Có câu mời Would you like…?", pattern: "would you like[^?]*\\?" },
      { label: "Có câu xin phép Can I…?", pattern: "can i[^?]*\\?" },
      { label: "Có I'd like / I would like", pattern: "i'd like|i would like" },
      { label: "Có lời kết (See you / Thanks / Best wishes)", pattern: "see you|regards|wishes|thanks" }
    ],
    model: [
      "Hi Peter,",
      "Would you like some tea at lunch? I'd like to practice English with you. Can I ask you some questions about the Sales team? See you on Thursday in the canteen.",
      "Hoa"
    ]
  },

  review: {
    keyPhrases: [
      { en: "Can I sit here?", vi: "Tôi ngồi đây được không?" },
      { en: "Would you like some tea?", vi: "Bạn uống trà không?" },
      { en: "Yes, please. / No, thank you.", vi: "Vâng, cảm ơn. / Không, cảm ơn." },
      { en: "I'd like green tea, please.", vi: "Cho tôi trà xanh nhé." },
      { en: "Can I borrow your pen?", vi: "Tôi mượn bút của bạn được không?" },
      { en: "Would you like to meet on Thursday?", vi: "Bạn có muốn gặp vào thứ Năm không?" }
    ]
  }
});
