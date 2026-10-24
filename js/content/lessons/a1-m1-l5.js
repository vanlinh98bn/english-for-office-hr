/* =========================================================
   A1 · Module 1 (English Foundations) · Bài 5
   "Asking simple questions"
   Khuôn rút gọn cho A1: 8 từ, 8 câu luyện tập, bài đọc và bài viết ngắn.
   Nối tiếp bài 4: thứ Sáu 9/10, 4:15 chiều, buổi cà phê chào đón ở tầng 5.
   Công ty Riverside Trading và các nhân vật đều là hư cấu.
   ========================================================= */
window.EOH.registerLesson({
  id: "a1-m1-l5",
  reviewStatus: "draft", // "draft" = bản nháp, chưa duyệt
  duration: "20–25 phút",
  scenario: "Chiều thứ Sáu, ở buổi cà phê chào đón tại tầng 5, chị Hoa trò chuyện với anh David Brown. Chị đặt nhiều câu hỏi để làm quen: anh ở đâu, nhóm có mấy người, ai là trợ lý của anh.",

  objectives: [
    "Hỏi bằng các từ để hỏi: What, Where, When, Who, How many.",
    "Đặt câu hỏi Yes / No với Do you…? và trả lời ngắn: Yes, I do. / No, I don't.",
    "Nói đúng ngữ điệu: câu hỏi có từ để hỏi xuống giọng, câu hỏi Yes / No lên giọng.",
    "Làm quen đồng nghiệp bằng các câu hỏi lịch sự.",
    "Viết tin nhắn ngắn có ít nhất 3 câu hỏi cho đồng nghiệp mới."
  ],

  vocabulary: [
    { word: "question", ipa: "/ˈkwestʃən/", pos: "noun", meaning: "câu hỏi",
      example: "Can I ask you a question?", exampleVi: "Tôi hỏi bạn một câu được không?" },
    { word: "answer", ipa: "/ˈænsər/", pos: "noun / verb", meaning: "câu trả lời; trả lời",
      example: "Please answer the question.", exampleVi: "Vui lòng trả lời câu hỏi." },
    { word: "ask", ipa: "/æsk/", pos: "verb", meaning: "hỏi",
      example: "I ask a lot of questions.", exampleVi: "Tôi hỏi rất nhiều câu hỏi." },
    { word: "team", ipa: "/tiːm/", pos: "noun", meaning: "nhóm, đội",
      example: "My team has six people.", exampleVi: "Nhóm của tôi có sáu người." },
    { word: "people", ipa: "/ˈpiːpəl/", pos: "noun", meaning: "người, mọi người (số nhiều)",
      example: "Many people work here.", exampleVi: "Nhiều người làm việc ở đây." },
    { word: "live", ipa: "/lɪv/", pos: "verb", meaning: "sống, ở (nơi cư trú)",
      example: "I live in Viet Nam.", exampleVi: "Tôi sống ở Việt Nam." },
    { word: "coffee", ipa: "/ˈkɔːfi/", pos: "noun", meaning: "cà phê",
      example: "Do you like coffee?", exampleVi: "Bạn có thích cà phê không?" },
    { word: "How many", ipa: "/ˌhaʊ ˈmeni/", pos: "phrase", meaning: "bao nhiêu (hỏi số lượng đếm được)",
      example: "How many people work here?", exampleVi: "Có bao nhiêu người làm việc ở đây?" }
  ],

  pronunciation: {
    groups: [
      {
        title: "Từ để hỏi",
        text: "Những từ để hỏi thường bắt đầu bằng chữ w hoặc h. Hai chữ này đọc rất khác tiếng Việt.",
        items: [
          { word: "What", marked: "/wʌt/", note: "Môi tròn như đọc “u”, rồi mở ra." },
          { word: "Where", marked: "/wer/" },
          { word: "When", marked: "/wen/" },
          { word: "Who", marked: "/huː/", note: "Chữ w không đọc; đọc như “hu”." },
          { word: "How", marked: "/haʊ/", note: "Gần giống “hao”." }
        ]
      },
      {
        title: "Ngữ điệu câu hỏi",
        text: "Câu hỏi có từ để hỏi (What, Where, Who…): xuống giọng ở cuối. Câu hỏi Yes / No (Do you…?): lên giọng ở cuối.",
        items: [
          { word: "Where do you live? ↘", marked: "Where do you LIVE? ↘", note: "Từ để hỏi: xuống giọng." },
          { word: "Who is your assistant? ↘", marked: "Who is your as·SIS·tant? ↘", note: "Từ để hỏi: xuống giọng." },
          { word: "Do you like coffee? ↗", marked: "Do you like COF·fee? ↗", note: "Yes / No: lên giọng." }
        ]
      }
    ],
    sentences: [
      "Where are you from?",
      "How many people work in your team?",
      "Do you like your new team?"
    ]
  },

  listening: {
    title: "Questions at the welcome coffee",
    setting: "Thứ Sáu, 4 giờ 15 chiều, buổi cà phê chào đón ở tầng 5. Chị Hoa trò chuyện với anh David.",
    speakers: { david: "David (Sales Manager)", hoa: "Hoa (new accountant)" },
    lines: [
      { s: "david", text: "Hi Hoa! How is your first week?",
        vi: "Chào Hoa! Tuần đầu tiên của chị thế nào?" },
      { s: "hoa", text: "It's good, thank you. Can I ask you some questions?",
        vi: "Dạ tốt, cảm ơn anh. Tôi hỏi anh vài câu được không?" },
      { s: "david", text: "Sure! Please call me David.",
        vi: "Được chứ! Chị cứ gọi tôi là David." },
      { s: "hoa", text: "OK, David. Where are you from?",
        vi: "Vâng, David. Anh đến từ đâu?" },
      { s: "david", text: "I'm from Australia, but I live in Viet Nam now.",
        vi: "Tôi đến từ Úc, nhưng bây giờ tôi sống ở Việt Nam." },
      { s: "hoa", text: "How many people work in your team?",
        vi: "Có bao nhiêu người làm việc trong nhóm của anh?" },
      { s: "david", text: "Six people. We have a meeting every Monday at ten.",
        vi: "Sáu người. Chúng tôi họp vào mỗi thứ Hai lúc 10 giờ." },
      { s: "hoa", text: "Who is your assistant?",
        vi: "Ai là trợ lý của anh?" },
      { s: "david", text: "Mai Le. She works on the third floor with me. Do you like your new team?",
        vi: "Mai Lê. Cô ấy làm việc ở tầng ba cùng tôi. Chị có thích nhóm mới của mình không?" },
      { s: "hoa", text: "Yes, I do. Everyone is very kind.",
        vi: "Có ạ. Mọi người rất tốt bụng." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "Where is David from?",
        options: ["Viet Nam", "Australia", "America", "England"],
        answer: 1, explanation: "David nói: “I'm from Australia.” – anh đến từ Úc. “I live in Viet Nam now” chỉ nơi anh sống hiện nay." },
      { id: "l2", type: "choice", prompt: "How many people work in David's team?",
        options: ["Four", "Five", "Six", "Seven"],
        answer: 2, explanation: "“Six people.” – nhóm có sáu người. Chú ý six /sɪks/ và seven /ˈsevən/ khác nhau." },
      { id: "l3", type: "choice", prompt: "When does David's team have a meeting?",
        options: ["Every Monday at ten", "Every Tuesday at ten", "Every Friday at four", "Every day at eight"],
        answer: 0, explanation: "“We have a meeting every Monday at ten.” – họp mỗi thứ Hai lúc 10 giờ. Họp nhóm của Hoa mới là thứ Ba lúc 9 giờ 30." }
    ]
  },

  reading: {
    title: "Welcome coffee today",
    intro: "Sáng thứ Sáu, chị Lan gửi cho chị Hoa email mời dự buổi cà phê chào đón. Đọc và tìm giờ, địa điểm, những người sẽ đến.",
    email: {
      from: "Lan Pham <lan.pham@riverside-trading.example>",
      to: "Hoa Tran",
      date: "Friday, 9 October",
      subject: "Welcome coffee today",
      greeting: "Hi Hoa,",
      paragraphs: [
        "Please join us for a welcome coffee today."
      ],
      list: [
        "Time: 4:15 p.m.",
        "Place: 5th floor",
        "Who: the Accounting team, the Sales team and HR"
      ],
      after: [
        "Do you have any questions? Please call me on extension 214."
      ],
      closing: "See you there!",
      signature: ["Lan Pham", "HR Department"]
    },
    glossary: [
      { term: "join", vi: "tham gia" },
      { term: "welcome coffee", vi: "buổi cà phê chào đón" },
      { term: "place", vi: "địa điểm" },
      { term: "any questions", vi: "bất kỳ câu hỏi nào" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "When is the welcome coffee?",
        options: ["At 4:15 p.m.", "At 8:00 a.m.", "At 5:00 p.m.", "At 2:00 p.m."],
        answer: 0, explanation: "“Time: 4:15 p.m.” – buổi cà phê lúc 4 giờ 15 chiều." },
      { id: "r2", type: "choice", prompt: "Who is coming to the welcome coffee?",
        options: ["Only the HR team", "Accounting, Sales and HR", "Only the Sales team", "IT Support"],
        answer: 1, explanation: "“Who: the Accounting team, the Sales team and HR” – nhóm Kế toán, nhóm Kinh doanh và phòng Nhân sự." },
      { id: "r3", type: "choice", prompt: "What should Hoa do if she has a question?",
        options: ["Send a letter", "Ask David", "Call Lan on extension 214", "Wait until Monday"],
        answer: 2, explanation: "“Do you have any questions? Please call me on extension 214.” – có câu hỏi thì gọi chị Lan theo số máy lẻ 214." }
    ]
  },

  grammar: {
    title: "Question words and Do you…?",
    titleVi: "Từ để hỏi và câu hỏi Yes / No với Do you…?",
    intro: "Có hai loại câu hỏi đơn giản. Câu hỏi có từ để hỏi (What, Where, When, Who, How many) cần thông tin cụ thể. Câu hỏi Yes / No (Do you…?) chỉ cần trả lời có hoặc không.",
    patterns: [
      { form: "Where / When / What + do you + động từ?", use: "Hỏi nơi chốn, thời gian, sự việc. Từ để hỏi đứng đầu, rồi đến do you.",
        examples: ["Where do you live?", "When do you start work?"] },
      { form: "Who / Where + is / are …?", use: "Hỏi người hoặc nơi chốn với động từ to be (bài 1).",
        examples: ["Who is your assistant?", "Where are you from?"] },
      { form: "How many + danh từ số nhiều + (do you) + động từ?", use: "Hỏi số lượng. Danh từ ở dạng số nhiều (people, books).",
        examples: ["How many people work here?", "How many meetings do you have?"] },
      { form: "Do you + động từ…? – Yes, I do. / No, I don't.", use: "Câu hỏi Yes / No. Trả lời ngắn dùng lại do / don't.",
        examples: ["Do you like coffee?", "Yes, I do. / No, I don't."] }
    ],
    mistakes: [
      { wrong: "Where you live?", right: "Where do you live?", note: "Cần do you sau từ để hỏi." },
      { wrong: "Where you are from?", right: "Where are you from?", note: "Với to be, đảo are lên trước you." },
      { wrong: "How many person work here?", right: "How many people work here?", note: "Sau How many dùng danh từ số nhiều: people (không phải person)." },
      { wrong: "Do you like coffee? – Yes, I like.", right: "Do you like coffee? – Yes, I do.", note: "Trả lời ngắn không nhắc lại động từ chính." }
    ],
    tip: "Khi làm quen, hãy mở đầu bằng “Can I ask you a question?” cho lịch sự. Ở văn phòng nói tiếng Anh, bạn không nên hỏi tuổi hay lương của người mới quen."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "___ do you live? – In Ha Noi.",
      options: ["Who", "When", "How many", "Where"],
      answer: 3, explanation: "Trả lời “In Ha Noi” là nơi chốn, nên hỏi bằng Where: Where do you live?" },
    { id: "p2", type: "gap", prompt: "___ is your manager? – Mr. Hai.",
      options: ["Who", "Where", "When", "How many"],
      answer: 0, explanation: "Mr. Hai là một người, nên hỏi bằng Who: Who is your manager?" },
    { id: "p3", type: "gap", prompt: "___ people work in your team? – Eight.",
      options: ["Where", "Who", "How many", "When"],
      answer: 2, explanation: "Trả lời bằng số lượng (Eight), nên hỏi bằng How many: How many people work…?" },
    { id: "p4", type: "choice", prompt: "Which question is correct?",
      options: ["Where you are from?", "Where are you from?", "Where is you from?", "Where from you are?"],
      answer: 1, explanation: "Đúng thứ tự: Where + are + you + from? Với to be, are đứng trước you." },
    { id: "p5", type: "gap", prompt: "___ you like your new job? – Yes, I do.",
      options: ["Does", "Are", "Do", "Is"],
      answer: 2, explanation: "Câu hỏi Yes / No với you: Do you like…? Đáp lại: Yes, I do." },
    { id: "p6", type: "choice", context: "A: When does the meeting start?", prompt: "What is the best answer?",
      options: ["At ten o'clock.", "In the meeting room.", "Mr. Hai.", "Six people."],
      answer: 0, explanation: "When hỏi thời gian, nên trả lời bằng giờ: At ten o'clock. “In the meeting room” trả lời Where, “Mr. Hai” trả lời Who, “Six people” trả lời How many." },
    { id: "p7", type: "choice", prompt: "Which question word asks about a PERSON?",
      options: ["What", "Where", "When", "Who"],
      answer: 3, explanation: "Who hỏi về người. What hỏi sự việc, Where hỏi nơi chốn, When hỏi thời gian." },
    { id: "p8", type: "choice", prompt: "Does your voice go up or down at the end of “Do you like coffee?”",
      options: ["Down", "Up"],
      answer: 1, explanation: "Câu hỏi Yes / No lên giọng ở cuối. Câu hỏi có từ để hỏi (Where do you live?) xuống giọng ở cuối." }
  ],

  writing: {
    title: "Questions for a new colleague",
    task: "Một đồng nghiệp tên Peter sẽ vào làm thứ Hai tuần sau. Bạn là Hoa, hãy viết tin nhắn chào Peter và đặt ít nhất 3 câu hỏi để làm quen (25–50 từ).",
    requirements: [
      "Chào Peter và chào mừng bạn vào nhóm.",
      "Hỏi Peter đến từ đâu (Where…?).",
      "Hỏi một câu Yes / No bắt đầu bằng Do you…?",
      "Hỏi một câu bắt đầu bằng How many.",
      "Kết thúc tin nhắn và ký tên."
    ],
    minWords: 25,
    maxWords: 50,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Hi / Hello / Dear)", pattern: "\\b(hi|hello|dear)\\b" },
      { label: "Có câu hỏi Where…?", pattern: "where[^?]*\\?" },
      { label: "Có câu hỏi Do you…?", pattern: "do you[^?]*\\?" },
      { label: "Có câu hỏi How many…?", pattern: "how many[^?]*\\?" },
      { label: "Có ít nhất 3 dấu hỏi", pattern: "(\\?[^?]*){3}" },
      { label: "Có lời kết (See you / Best wishes)", pattern: "see you|regards|wishes|thanks" }
    ],
    model: [
      "Hi Peter,",
      "Welcome to the team! Where are you from? Where do you live? Do you like coffee? How many people work in your old company?",
      "See you on Monday!",
      "Hoa"
    ]
  },

  review: {
    keyPhrases: [
      { en: "Can I ask you a question?", vi: "Tôi hỏi bạn một câu được không?" },
      { en: "Where are you from? – I'm from Australia.", vi: "Bạn đến từ đâu? – Tôi đến từ Úc." },
      { en: "How many people work in your team?", vi: "Có bao nhiêu người làm việc trong nhóm của bạn?" },
      { en: "Who is your assistant?", vi: "Ai là trợ lý của bạn?" },
      { en: "When does your team have a meeting?", vi: "Nhóm của bạn họp khi nào?" },
      { en: "Do you like your new team? – Yes, I do.", vi: "Bạn có thích nhóm mới không? – Có." }
    ]
  }
});
