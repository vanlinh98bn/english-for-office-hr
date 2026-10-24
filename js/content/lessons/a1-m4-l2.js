/* =========================================================
   A1 · Module 4 (HR and Administrative Basics) · Bài 2
   "Working hours and breaks"
   Khuôn rút gọn cho A1: 8 từ, 8 câu luyện tập, bài đọc và bài viết ngắn.
   Nối tiếp bài 1: thứ Ba 27/10/2026, sau buổi họp nhóm 9:30 ở Room 301, chị Hoa hỏi chị Lan về giờ làm việc.
   Thứ Sáu 30/10 là ngày làm việc cuối tháng nên bộ phận Kế toán làm đến 6 giờ chiều (theo anh Minh ở bài A1-M1-L4).
   Anna (bạn nước ngoài của chị Hoa) chỉ xuất hiện trong bài viết.
   Công ty Riverside Trading và các nhân vật đều là hư cấu.
   ========================================================= */
window.EOH.registerLesson({
  id: "a1-m4-l2",
  reviewStatus: "draft", // "draft" = bản nháp, chưa duyệt
  duration: "20–25 phút",
  scenario: "Sáng thứ Ba, sau buổi họp nhóm, chị Hoa hỏi chị Lan về giờ làm việc và giờ nghỉ. Chị hỏi văn phòng có mở cửa thứ Bảy không, nghỉ trưa lúc nào, và anh Minh có làm muộn không.",

  objectives: [
    "Hỏi bằng Does + he / she / it + động từ, ví dụ Does the office open on Saturday?",
    "Trả lời ngắn: Yes, it does. / No, it doesn't.",
    "Nói giờ làm việc và giờ nghỉ bằng from … to … và until.",
    "Nhấn đúng từ mang nghĩa trong câu và đọc yếu những từ nhỏ như does, the.",
    "Viết tin nhắn ngắn kể giờ làm việc của mình cho bạn."
  ],

  vocabulary: [
    { word: "working hours", ipa: "/ˈwɝːkɪŋ ˌaʊərz/", pos: "noun", meaning: "giờ làm việc",
      example: "Our working hours are 8:00 to 5:00.", exampleVi: "Giờ làm việc của chúng tôi là 8 giờ đến 5 giờ." },
    { word: "break", ipa: "/breɪk/", pos: "noun", meaning: "giờ nghỉ, giải lao",
      example: "I have a short break at ten.", exampleVi: "Tôi có giờ nghỉ ngắn lúc mười giờ." },
    { word: "lunch break", ipa: "/ˈlʌntʃ breɪk/", pos: "noun", meaning: "giờ nghỉ trưa",
      example: "Our lunch break starts at 11:30.", exampleVi: "Giờ nghỉ trưa của chúng tôi bắt đầu lúc 11 giờ 30." },
    { word: "open", ipa: "/ˈoʊpən/", pos: "verb", meaning: "mở cửa",
      example: "The office opens at eight.", exampleVi: "Văn phòng mở cửa lúc tám giờ." },
    { word: "close", ipa: "/kloʊz/", pos: "verb", meaning: "đóng cửa",
      example: "The office closes at five.", exampleVi: "Văn phòng đóng cửa lúc năm giờ." },
    { word: "until", ipa: "/ənˈtɪl/", pos: "preposition", meaning: "cho đến khi",
      example: "He works until six.", exampleVi: "Anh ấy làm việc đến sáu giờ." },
    { word: "late", ipa: "/leɪt/", pos: "adverb / adjective", meaning: "muộn, trễ",
      example: "Minh works late at month end.", exampleVi: "Anh Minh làm việc muộn vào cuối tháng." },
    { word: "month end", ipa: "/ˈmʌnθ end/", pos: "noun", meaning: "cuối tháng",
      example: "At month end we close the accounts.", exampleVi: "Vào cuối tháng chúng tôi khóa sổ." }
  ],

  pronunciation: {
    groups: [
      {
        title: "Trọng âm câu",
        text: "Trong câu, ta nhấn những từ mang nghĩa (động từ, danh từ, số, giờ). Những từ nhỏ (does, the, on, at) đọc nhẹ và nhanh.",
        items: [
          { word: "Does the office open on Saturday?", marked: "Does the OF·fice O·pen on SAT·ur·day?", note: "Nhấn office, open, Saturday." },
          { word: "He works until six.", marked: "He WORKS un·til SIX.", note: "Nhấn works và six." },
          { word: "We have lunch at one.", marked: "We have LUNCH at ONE.", note: "Nhấn lunch và one." }
        ]
      },
      {
        title: "Does và doesn't",
        text: "Does thường đọc yếu trong câu hỏi. Doesn't có hai âm tiết và phải nghe rõ để không nhầm với does.",
        items: [
          { word: "Does", marked: "/dʌz/", note: "Trong câu: đọc nhanh /dəz/." },
          { word: "doesn't", marked: "/ˈdʌzənt/", note: "Hai âm tiết: DUZ-ent." },
          { word: "No, it doesn't.", marked: "No, it DOES·n't.", note: "Câu trả lời phủ định nhấn doesn't." }
        ]
      }
    ],
    sentences: [
      "Does the office open on Saturday?",
      "No, it doesn't.",
      "He works until six at month end."
    ]
  },

  listening: {
    title: "Working hours at Riverside Trading",
    setting: "Thứ Ba, sau buổi họp nhóm. Chị Hoa hỏi chị Lan về giờ làm việc ở công ty.",
    speakers: { lan: "Lan (HR Officer)", hoa: "Hoa (accountant)" },
    lines: [
      { s: "hoa", text: "Lan, I have a question about working hours. Does the office open on Saturday?",
        vi: "Chị Lan ơi, tôi có một câu hỏi về giờ làm việc. Văn phòng có mở cửa thứ Bảy không?" },
      { s: "lan", text: "No, it doesn't. We work from Monday to Friday, from eight o'clock until five o'clock.",
        vi: "Không. Chúng ta làm từ thứ Hai đến thứ Sáu, từ tám giờ đến năm giờ." },
      { s: "hoa", text: "And when is the lunch break?",
        vi: "Còn giờ nghỉ trưa là khi nào?" },
      { s: "lan", text: "From eleven-thirty to one o'clock.",
        vi: "Từ mười một giờ rưỡi đến một giờ." },
      { s: "hoa", text: "Does Minh work until five too?",
        vi: "Anh Minh cũng làm đến năm giờ phải không?" },
      { s: "lan", text: "Not at the end of the month. He works until six. This Friday is the last working day of October, so you work until six too.",
        vi: "Không phải vào cuối tháng. Anh ấy làm đến sáu giờ. Thứ Sáu này là ngày làm việc cuối cùng của tháng Mười, nên chị cũng làm đến sáu giờ." },
      { s: "hoa", text: "I see. Does the whole office stay until six?",
        vi: "Tôi hiểu rồi. Cả văn phòng ở lại đến sáu giờ à?" },
      { s: "lan", text: "No, it doesn't. Only the Accounting team.",
        vi: "Không. Chỉ có nhóm Kế toán." },
      { s: "hoa", text: "OK, thank you, Lan.",
        vi: "Vâng, cảm ơn chị Lan." },
      { s: "lan", text: "You're welcome!",
        vi: "Không có gì!" }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "Which days does the office open?",
        options: ["Monday to Saturday", "Every day", "Monday to Friday", "Tuesday to Saturday"],
        answer: 2, explanation: "Lan nói: “We work from Monday to Friday.” – văn phòng mở từ thứ Hai đến thứ Sáu. Văn phòng không mở thứ Bảy (“No, it doesn't”)." },
      { id: "l2", type: "choice", prompt: "When is the lunch break?",
        options: ["From eleven to twelve", "From eleven-thirty to one", "From twelve to one", "From twelve-thirty to two"],
        answer: 1, explanation: "“From eleven-thirty to one o'clock.” – nghỉ trưa từ 11 giờ 30 đến 1 giờ chiều." },
      { id: "l3", type: "choice", prompt: "How long does the Accounting team work this Friday?",
        options: ["Until four", "Until five", "Until seven", "Until six"],
        answer: 3, explanation: "“This Friday is the last working day of October, so you work until six too.” – thứ Sáu này làm đến sáu giờ. Ngày thường mới làm đến năm giờ." }
    ]
  },

  reading: {
    title: "Working hours reminder",
    intro: "Chiều thứ Ba, chị Lan gửi cho chị Hoa email nhắc về giờ làm việc. Đọc và tìm giờ nghỉ trưa và ngày công ty không mở cửa.",
    email: {
      from: "Lan Pham <lan.pham@riverside-trading.example>",
      to: "Hoa Tran",
      date: "Tuesday, 27 October",
      subject: "Working hours reminder",
      greeting: "Hi Hoa,",
      paragraphs: [
        "Here are our working hours."
      ],
      list: [
        "Monday to Friday: 8:00 a.m. to 5:00 p.m.",
        "Lunch break: 11:30 a.m. to 1:00 p.m.",
        "The office does not open on Saturday or Sunday."
      ],
      after: [
        "At the end of the month, the Accounting team works until 6:00 p.m."
      ],
      closing: "Thanks!",
      signature: ["Lan Pham", "HR Department"]
    },
    glossary: [
      { term: "reminder", vi: "lời nhắc" },
      { term: "lunch break", vi: "giờ nghỉ trưa" },
      { term: "at the end of the month", vi: "vào cuối tháng" },
      { term: "does not", vi: "không (dạng đầy đủ của doesn't)" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "When does the lunch break start?",
        options: ["At 11:00 a.m.", "At 12:00 p.m.", "At 11:30 a.m.", "At 1:00 p.m."],
        answer: 2, explanation: "“Lunch break: 11:30 a.m. to 1:00 p.m.” – nghỉ trưa bắt đầu lúc 11 giờ 30. 1 giờ chiều là lúc kết thúc." },
      { id: "r2", type: "choice", prompt: "Does the office open on Sunday?",
        options: ["Yes, it does.", "No, it doesn't.", "Only in the morning.", "Only at month end."],
        answer: 1, explanation: "“The office does not open on Saturday or Sunday.” – không mở cửa thứ Bảy và Chủ nhật. “does not” = “doesn't”." },
      { id: "r3", type: "choice", prompt: "Who works until 6:00 p.m. at the end of the month?",
        options: ["The Accounting team", "The Sales team", "The HR team", "Everyone"],
        answer: 0, explanation: "“At the end of the month, the Accounting team works until 6:00 p.m.” – chỉ nhóm Kế toán làm đến 6 giờ chiều." }
    ]
  },

  grammar: {
    title: "Does / Doesn't and from … to / until",
    titleVi: "Does / Doesn't và from … to / until",
    intro: "Với he, she, it (và tên người, tên nơi), ta hỏi bằng Does và phủ định bằng doesn't. Sau does và doesn't, động từ giữ nguyên, không thêm -s. Giờ làm việc nói bằng from … to … hoặc until.",
    patterns: [
      { form: "Does + he / she / it + động từ…?", use: "Hỏi về một người hoặc một nơi. Động từ giữ nguyên.",
        examples: ["Does the office open on Saturday?", "Does Minh work late?"] },
      { form: "Yes, he / she / it does. – No, he / she / it doesn't.", use: "Trả lời ngắn, không nhắc lại động từ chính.",
        examples: ["Yes, he does.", "No, it doesn't."] },
      { form: "He / she / it + doesn't + động từ", use: "Câu phủ định. Động từ sau doesn't không có -s.",
        examples: ["The office doesn't open on Sunday.", "She doesn't work on Saturday."] },
      { form: "from … to … / until …", use: "From … to … nói khoảng thời gian bắt đầu và kết thúc. Until nói làm việc cho đến lúc nào.",
        examples: ["We work from eight to five.", "He works until six."] }
    ],
    mistakes: [
      { wrong: "Does he works until six?", right: "Does he work until six?", note: "Sau Does, động từ giữ nguyên: work." },
      { wrong: "She doesn't works on Saturday.", right: "She doesn't work on Saturday.", note: "Sau doesn't không thêm -s." },
      { wrong: "Does the office open? – Yes, it opens.", right: "Does the office open? – Yes, it does.", note: "Trả lời ngắn dùng does, không nhắc lại động từ." },
      { wrong: "Do the office open on Saturday?", right: "Does the office open on Saturday?", note: "The office là ngôi thứ ba số ít (it), nên dùng Does." }
    ],
    tip: "Khi nghe câu hỏi Does…?, hãy chú ý câu trả lời ngắn. Nghe rõ “doesn't” (hai âm tiết) để biết câu trả lời là Có hay Không."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "___ the office open on Sunday? – No, it doesn't.",
      options: ["Do", "Does", "Is", "Are"],
      answer: 1, explanation: "Với the office (it) dùng Does: Does the office open…? “Do” dùng với I / you / we / they." },
    { id: "p2", type: "gap", prompt: "She ___ work on Saturday.",
      options: ["don't", "isn't", "not", "doesn't"],
      answer: 3, explanation: "Phủ định với she dùng doesn't: She doesn't work. “don't” dùng với I / you / we / they." },
    { id: "p3", type: "gap", prompt: "We work ___ eight o'clock to five o'clock.",
      options: ["at", "in", "from", "on"],
      answer: 2, explanation: "Khoảng thời gian dùng from … to …: from eight o'clock to five o'clock." },
    { id: "p4", type: "choice", prompt: "Which question is correct?",
      options: ["Does he works until six?", "Do he work until six?", "Does he work until six?", "Does he working until six?"],
      answer: 2, explanation: "Does + he + động từ nguyên mẫu: Does he work until six? Không dùng works sau Does." },
    { id: "p5", type: "choice", context: "A: Does Minh work on Saturday? (The office is closed on Saturday.)", prompt: "What is the best answer?",
      options: ["Yes, he works.", "No, he doesn't.", "No, he isn't.", "Yes, he do."],
      answer: 1, explanation: "Trả lời ngắn: No, he doesn't. “Yes, he works” không phải câu trả lời ngắn đúng, “isn't” và “do” sai với Does." },
    { id: "p6", type: "gap", prompt: "The lunch break is from 11:30 ___ 1:00 p.m.",
      options: ["to", "at", "by", "on"],
      answer: 0, explanation: "From … to …: from 11:30 to 1:00 p.m. Các giới từ at, by, on không đi với from trong cấu trúc này." },
    { id: "p7", type: "choice", prompt: "Which word is NOT usually stressed in “The office closes at five”?",
      options: ["office", "closes", "five", "at"],
      answer: 3, explanation: "At là từ nhỏ, đọc nhẹ. Các từ mang nghĩa (office, closes, five) được nhấn." },
    { id: "p8", type: "choice", context: "A: Does Lan work in the Accounting team? (Lan works in HR.)", prompt: "What is the best answer?",
      options: ["No, she doesn't. She works in HR.", "Yes, she does.", "No, she don't.", "Yes, she work."],
      answer: 0, explanation: "Chị Lan làm ở phòng Nhân sự, nên trả lời No, she doesn't. “don't” và “work” sai ngữ pháp với she." }
  ],

  writing: {
    title: "My working hours",
    task: "Bạn của bạn, Anna, hỏi về giờ làm việc của bạn. Bạn là Hoa, hãy viết tin nhắn trả lời (25–50 từ): nói các ngày, giờ làm, giờ nghỉ trưa, và công ty không mở cửa ngày nào.",
    requirements: [
      "Chào Anna.",
      "Nói ngày và giờ làm việc bằng from … to ….",
      "Nói giờ nghỉ trưa (lunch break).",
      "Nói ngày văn phòng không mở cửa bằng doesn't.",
      "Hỏi Anna một câu có until và kết thúc tin nhắn."
    ],
    minWords: 25,
    maxWords: 50,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Hi / Hello / Dear)", pattern: "\\b(hi|hello|dear)\\b" },
      { label: "Có from … to …", pattern: "\\bfrom\\b[^.?!]*\\bto\\b" },
      { label: "Có nhắc lunch", pattern: "\\blunch\\b" },
      { label: "Có doesn't / does not", pattern: "\\b(doesn't|does not)\\b" },
      { label: "Có từ until", pattern: "\\buntil\\b" },
      { label: "Có lời kết (Best wishes / Regards / See you)", pattern: "wishes|regards|see you|thanks" }
    ],
    model: [
      "Hi Anna,",
      "I work from Monday to Friday. The office doesn't open on Saturday. I work from 8:00 to 5:00. My lunch break is from 11:30 to 1:00. Do you work until six?",
      "Best wishes,",
      "Hoa"
    ]
  },

  review: {
    keyPhrases: [
      { en: "Does the office open on Saturday? – No, it doesn't.", vi: "Văn phòng có mở cửa thứ Bảy không? – Không." },
      { en: "We work from Monday to Friday.", vi: "Chúng tôi làm từ thứ Hai đến thứ Sáu." },
      { en: "We work from eight to five.", vi: "Chúng tôi làm từ tám giờ đến năm giờ." },
      { en: "The lunch break is from eleven-thirty to one.", vi: "Giờ nghỉ trưa từ mười một giờ rưỡi đến một giờ." },
      { en: "Does Minh work late? – Yes, he does.", vi: "Anh Minh có làm muộn không? – Có." },
      { en: "He works until six at month end.", vi: "Anh ấy làm đến sáu giờ vào cuối tháng." }
    ]
  }
});
