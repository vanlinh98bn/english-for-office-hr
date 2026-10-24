/* =========================================================
   A1 · Module 4 (HR and Administrative Basics) · Bài 3
   "Asking for a day off"
   Khuôn rút gọn cho A1: 8 từ, 8 câu luyện tập, bài đọc và bài viết ngắn.
   Nối tiếp bài 2: thứ Tư 28/10/2026, ở phòng Kế toán (tầng 2), chị Hoa xin nghỉ thứ Hai 9/11/2026.
   Nhân vật mới: Ngoc Dang (chị Ngọc), Chief Accountant (kế toán trưởng), quản lý trực tiếp của chị Hoa, phòng Kế toán tầng 2.
   Lý do nghỉ: sinh nhật mẹ chị Hoa, cả nhà ăn trưa ở Hải Phòng (thứ Hai 9/11/2026, không trùng sự kiện nào khác).
   Công ty Riverside Trading và các nhân vật đều là hư cấu.
   ========================================================= */
window.EOH.registerLesson({
  id: "a1-m4-l3",
  reviewStatus: "draft", // "draft" = bản nháp, chưa duyệt
  duration: "20–25 phút",
  scenario: "Chiều thứ Tư, chị Hoa muốn xin nghỉ một ngày vào thứ Hai 9/11 để dự sinh nhật mẹ ở Hải Phòng. Chị hỏi chị Ngọc, kế toán trưởng, bằng câu lịch sự và nêu lý do. Sau đó chị gửi email xin nghỉ.",

  objectives: [
    "Xin phép bằng Can I…? và Could I…? (lịch sự hơn).",
    "Nêu lý do bằng because + một câu đầy đủ (because I have…).",
    "Trả lời lời xin phép: Sure. / Of course. / Sorry, you can't.",
    "Đọc đúng âm Could (chữ l câm) và lên giọng khi xin phép.",
    "Viết email ngắn xin nghỉ một ngày và nêu lý do."
  ],

  vocabulary: [
    { word: "day off", ipa: "/ˌdeɪ ˈɔːf/", pos: "noun", meaning: "ngày nghỉ (xin nghỉ một ngày)",
      example: "Can I take a day off on Monday?", exampleVi: "Tôi xin nghỉ một ngày vào thứ Hai được không?" },
    { word: "take", ipa: "/teɪk/", pos: "verb", meaning: "lấy, nghỉ (take a day off)",
      example: "I take a day off every month.", exampleVi: "Tháng nào tôi cũng nghỉ một ngày." },
    { word: "reason", ipa: "/ˈriːzən/", pos: "noun", meaning: "lý do",
      example: "What is the reason?", exampleVi: "Lý do là gì?" },
    { word: "because", ipa: "/bɪˈkɔːz/", pos: "conjunction", meaning: "bởi vì",
      example: "I'm late because the traffic is bad.", exampleVi: "Tôi đến muộn vì đường tắc." },
    { word: "sick", ipa: "/sɪk/", pos: "adjective", meaning: "ốm, bệnh",
      example: "My son is sick today.", exampleVi: "Hôm nay con trai tôi bị ốm." },
    { word: "family", ipa: "/ˈfæməli/", pos: "noun", meaning: "gia đình",
      example: "I have a family lunch on Sunday.", exampleVi: "Tôi có bữa trưa gia đình vào Chủ nhật." },
    { word: "birthday", ipa: "/ˈbɝːθdeɪ/", pos: "noun", meaning: "sinh nhật",
      example: "Her birthday is in November.", exampleVi: "Sinh nhật của cô ấy vào tháng Mười Một." },
    { word: "leave early", ipa: "/ˌliːv ˈɝːli/", pos: "phrase", meaning: "về sớm",
      example: "Could I leave early today?", exampleVi: "Hôm nay tôi về sớm được không?" }
  ],

  pronunciation: {
    groups: [
      {
        title: "Can và Could",
        text: "Could có chữ l không đọc. Can trong câu thường đọc yếu, nhưng Can I… vẫn phải nghe rõ ở đầu câu hỏi.",
        items: [
          { word: "Could", marked: "/kʊd/", note: "Chữ l không đọc: giống “cút” ngắn." },
          { word: "Can", marked: "/kæn/", note: "Trong câu: yếu /kən/." },
          { word: "because", marked: "/bɪˈkɔːz/", note: "Nhấn âm thứ hai: be-CAUSE." },
          { word: "birthday", marked: "/ˈbɝːθdeɪ/", note: "Nhấn âm thứ nhất: BIRTH-day." }
        ]
      },
      {
        title: "Ngữ điệu khi xin phép",
        text: "Câu xin phép là câu hỏi Yes / No: lên giọng ở cuối. Lên giọng nhẹ nghe lịch sự. Khi nêu lý do (because…), xuống giọng ở cuối câu.",
        items: [
          { word: "Can I take a day off? ↗", marked: "Can I take a day OFF? ↗", note: "Xin phép: lên giọng." },
          { word: "Could I leave early? ↗", marked: "Could I leave EAR·ly? ↗", note: "Xin phép lịch sự: lên giọng nhẹ." },
          { word: "Because my mother has a birthday. ↘", marked: "Be·CAUSE my MOTH·er has a BIRTH·day. ↘", note: "Lý do: xuống giọng." }
        ]
      }
    ],
    sentences: [
      "Can I take a day off on Monday?",
      "Could I leave early today?",
      "I need a day off because my mother has a birthday."
    ]
  },

  listening: {
    title: "Can I take a day off?",
    setting: "Thứ Tư, ở phòng Kế toán, tầng 2. Chị Hoa xin chị Ngọc, kế toán trưởng, nghỉ một ngày.",
    speakers: { ngoc: "Ngoc (Chief Accountant)", hoa: "Hoa (accountant)" },
    lines: [
      { s: "hoa", text: "Excuse me, Ms. Ngoc. Can I ask you something?",
        vi: "Xin lỗi chị Ngọc. Tôi hỏi chị một việc được không?" },
      { s: "ngoc", text: "Of course, Hoa. What is it?",
        vi: "Được chứ, Hoa. Việc gì vậy?" },
      { s: "hoa", text: "Could I take a day off on Monday, November ninth?",
        vi: "Tôi xin nghỉ một ngày vào thứ Hai, ngày chín tháng Mười Một, được không ạ?" },
      { s: "ngoc", text: "Monday the ninth? Let me check. What is the reason?",
        vi: "Thứ Hai ngày chín à? Để chị xem. Lý do là gì?" },
      { s: "hoa", text: "Because my mother has a birthday. We have a family lunch in Hai Phong.",
        vi: "Vì mẹ tôi có sinh nhật. Cả nhà ăn trưa ở Hải Phòng." },
      { s: "ngoc", text: "That's nice. Can you finish the month-end reports first?",
        vi: "Vậy thì tốt quá. Chị có hoàn thành báo cáo cuối tháng trước được không?" },
      { s: "hoa", text: "Yes, I can. I'll finish them on Friday.",
        vi: "Dạ được. Tôi hoàn thành vào thứ Sáu." },
      { s: "ngoc", text: "OK, then it's fine. Please send me an email, and please copy Lan in HR.",
        vi: "Vậy thì được. Chị gửi cho tôi một email, và nhớ gửi bản sao cho Lan ở phòng Nhân sự." },
      { s: "hoa", text: "Sure. Can I send it today?",
        vi: "Vâng. Hôm nay tôi gửi được không ạ?" },
      { s: "ngoc", text: "Yes. Thank you for asking early.",
        vi: "Được. Cảm ơn chị đã hỏi sớm." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "Which day does Hoa want off?",
        options: ["Tuesday, November tenth", "Friday, October thirtieth", "Wednesday, November eleventh", "Monday, November ninth"],
        answer: 3, explanation: "Hoa nói: “Could I take a day off on Monday, November ninth?” – xin nghỉ thứ Hai, ngày 9 tháng 11. Thứ Sáu 30 tháng 10 là ngày chị phải hoàn thành báo cáo." },
      { id: "l2", type: "choice", prompt: "Why does Hoa need a day off?",
        options: ["Because she is sick", "Because she has a doctor's visit", "Because her mother has a birthday", "Because she has a new apartment"],
        answer: 2, explanation: "Hoa nói: “Because my mother has a birthday.” – mẹ chị có sinh nhật và cả nhà ăn trưa ở Hải Phòng. Chị không bị ốm." },
      { id: "l3", type: "choice", prompt: "Who should Hoa copy on the email?",
        options: ["Minh", "Lan", "David", "Mai"],
        answer: 1, explanation: "Chị Ngọc nói: “Please copy Lan in HR.” – gửi bản sao cho Lan ở phòng Nhân sự." }
    ]
  },

  reading: {
    title: "Day off request",
    intro: "Sau khi nói chuyện với chị Ngọc, chị Hoa gửi email xin nghỉ chính thức. Đọc và tìm ngày nghỉ, lý do và việc chị Hoa sẽ làm trước đó.",
    email: {
      from: "Hoa Tran <hoa.tran@riverside-trading.example>",
      to: "Ngoc Dang; copy: Lan Pham",
      date: "Wednesday, 28 October",
      subject: "Day off request",
      greeting: "Dear Ms. Ngoc,",
      paragraphs: [
        "Could I take a day off on Monday, 9 November? I need to go to Hai Phong because my mother has a birthday.",
        "I can finish the month-end reports on Friday."
      ],
      list: [],
      after: [
        "Is it OK?"
      ],
      closing: "Thank you very much.",
      signature: ["Hoa Tran", "Accounting Department"]
    },
    glossary: [
      { term: "request", vi: "yêu cầu, đề nghị" },
      { term: "month-end reports", vi: "báo cáo cuối tháng" },
      { term: "copy", vi: "gửi bản sao (cc)" },
      { term: "Is it OK?", vi: "Như vậy có được không?" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "Which day does Hoa ask for?",
        options: ["Friday, 30 October", "Monday, 9 November", "Monday, 2 November", "Tuesday, 10 November"],
        answer: 1, explanation: "“Could I take a day off on Monday, 9 November?” – xin nghỉ thứ Hai ngày 9 tháng 11. Ngày 30/10 là ngày chị hoàn thành báo cáo." },
      { id: "r2", type: "choice", prompt: "Why does Hoa need the day off?",
        options: ["Because her mother has a birthday", "Because she is sick", "Because she has an exam", "Because the office is closed"],
        answer: 0, explanation: "“I need to go to Hai Phong because my mother has a birthday.” – chị đi Hải Phòng vì mẹ có sinh nhật." },
      { id: "r3", type: "choice", prompt: "What does Hoa say about the month-end reports?",
        options: ["She can't finish them", "She doesn't have any", "Ms. Ngoc must finish them", "She can finish them on Friday"],
        answer: 3, explanation: "“I can finish the month-end reports on Friday.” – chị làm xong báo cáo cuối tháng vào thứ Sáu, trước ngày nghỉ." }
    ]
  },

  grammar: {
    title: "Can I / Could I…? and because",
    titleVi: "Can I / Could I…? để xin phép và because để nêu lý do",
    intro: "Khi xin nghỉ hoặc xin phép, dùng Can I… hoặc Could I… + động từ nguyên mẫu. Could I lịch sự hơn Can I. Sau đó nêu lý do bằng because + một câu đầy đủ (có chủ ngữ và động từ).",
    patterns: [
      { form: "Can I + động từ…?", use: "Xin phép thông thường, với đồng nghiệp quen.",
        examples: ["Can I take a day off?", "Can I send it today?"] },
      { form: "Could I + động từ…?", use: "Xin phép lịch sự hơn, dùng với quản lý hoặc người mới quen.",
        examples: ["Could I take Monday off?", "Could I leave early today?"] },
      { form: "… because + chủ ngữ + động từ", use: "Nêu lý do. Sau because phải có một câu đầy đủ.",
        examples: ["I need a day off because I'm sick.", "…because my mother has a birthday."] },
      { form: "Trả lời: Sure. / Of course. / Sorry, you can't.", use: "Đồng ý hoặc từ chối lịch sự.",
        examples: ["Of course, no problem.", "Sorry, you can't. We have a meeting."] }
    ],
    mistakes: [
      { wrong: "Can I to take a day off?", right: "Can I take a day off?", note: "Sau Can I dùng động từ nguyên mẫu, không có to." },
      { wrong: "Could I taking Monday off?", right: "Could I take Monday off?", note: "Sau Could I dùng động từ nguyên mẫu, không thêm -ing." },
      { wrong: "I need a day off because sick.", right: "I need a day off because I'm sick.", note: "Sau because phải có chủ ngữ và động từ: I'm sick." },
      { wrong: "Could I take a day off because of my mother has a birthday?", right: "Could I take a day off because my mother has a birthday?", note: "Because + câu đầy đủ. Không dùng because of trước một câu." }
    ],
    tip: "Với quản lý, hãy dùng Could I… và nói lý do ngắn. Hỏi sớm và nói rõ ngày nghỉ sẽ giúp được chấp thuận dễ hơn."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "Can I ___ a day off?",
      options: ["taking", "to take", "take", "takes"],
      answer: 2, explanation: "Sau Can I dùng động từ nguyên mẫu không có to: Can I take…? Không dùng taking, to take hay takes." },
    { id: "p2", type: "gap", prompt: "I need a day off ___ I have a doctor's appointment.",
      options: ["because", "but", "or", "than"],
      answer: 0, explanation: "Because nêu lý do: I need a day off because I have a doctor's appointment. “but” và “or” không đúng nghĩa." },
    { id: "p3", type: "choice", prompt: "Which request is the most polite?",
      options: ["Give me a day off.", "I want a day off.", "Could I take a day off, please?", "Day off, OK?"],
      answer: 2, explanation: "Could I… please? là cách xin phép lịch sự nhất. Các câu còn lại là mệnh lệnh hoặc quá cộc." },
    { id: "p4", type: "choice", prompt: "Which sentence is correct?",
      options: ["Could I to leave early?", "Could I leave early?", "Could I leaving early?", "Could I leaves early?"],
      answer: 1, explanation: "Could I + động từ nguyên mẫu: Could I leave early? Không dùng to, -ing hay -s." },
    { id: "p5", type: "gap", prompt: "I'm late ___ the traffic is bad.",
      options: ["so", "but", "because of", "because"],
      answer: 3, explanation: "Because + câu đầy đủ (the traffic is bad). “because of” cần danh từ: because of the traffic. “so” và “but” sai nghĩa." },
    { id: "p6", type: "choice", context: "A: Can I leave early today?", prompt: "Which answer says YES politely?",
      options: ["Sure, no problem.", "Sorry, you can't.", "No, you don't.", "Not today."],
      answer: 0, explanation: "Sure, no problem. là đồng ý lịch sự. “Sorry, you can't” và “Not today” là từ chối." },
    { id: "p7", type: "choice", prompt: "Which sentence gives a reason?",
      options: ["I need a day off on Friday.", "I need a day off because my sister has a wedding.", "Can I take Friday off?", "Could I leave early?"],
      answer: 1, explanation: "Because + câu đầy đủ cho biết lý do: because my sister has a wedding. Các câu còn lại chỉ xin phép hoặc nêu ngày." },
    { id: "p8", type: "choice", prompt: "How does your voice go at the end of “Can I take a day off?”",
      options: ["Down", "Flat", "It stops suddenly", "Up"],
      answer: 3, explanation: "Câu xin phép là câu hỏi Yes / No nên lên giọng ở cuối. Câu nêu lý do (because…) thì xuống giọng." }
  ],

  writing: {
    title: "Asking for a day off",
    task: "Bạn là Hoa. Hãy viết email ngắn (25–50 từ) cho chị Ngọc xin nghỉ một ngày: nêu ngày và lý do bằng because.",
    requirements: [
      "Chào chị Ngọc (Dear Ms. Ngoc,).",
      "Xin nghỉ bằng Could I… hoặc Can I… (take a day off on …).",
      "Nêu ngày nghỉ (một ngày trong tuần và ngày tháng).",
      "Nêu lý do bằng because + câu đầy đủ.",
      "Cảm ơn và ký tên."
    ],
    minWords: 25,
    maxWords: 50,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Hi / Hello / Dear)", pattern: "\\b(hi|hello|dear)\\b" },
      { label: "Có Could I… hoặc Can I…", pattern: "\\b(could|can) i\\b" },
      { label: "Có cụm day off", pattern: "\\bday off\\b" },
      { label: "Có ngày trong tuần (Monday…Friday)", pattern: "\\b(monday|tuesday|wednesday|thursday|friday)\\b" },
      { label: "Có từ because", pattern: "\\bbecause\\b" },
      { label: "Có lời cảm ơn (Thank you / Thanks)", pattern: "thank" }
    ],
    model: [
      "Dear Ms. Ngoc,",
      "Could I take a day off on Friday, 13 November? I need the day because my sister has a wedding in Hai Phong. I can finish my work on Thursday.",
      "Thank you very much.",
      "Hoa Tran"
    ]
  },

  review: {
    keyPhrases: [
      { en: "Can I ask you something?", vi: "Tôi hỏi chị một việc được không?" },
      { en: "Could I take a day off on Monday?", vi: "Tôi xin nghỉ một ngày vào thứ Hai được không?" },
      { en: "I need a day off because my mother has a birthday.", vi: "Tôi cần nghỉ một ngày vì mẹ tôi có sinh nhật." },
      { en: "Could I leave early today?", vi: "Hôm nay tôi về sớm được không?" },
      { en: "Sure. / Of course, no problem.", vi: "Được chứ. / Dĩ nhiên rồi, không sao." },
      { en: "Sorry, you can't.", vi: "Xin lỗi, bạn không thể." }
    ]
  }
});
