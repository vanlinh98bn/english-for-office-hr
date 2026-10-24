/* =========================================================
   A1 · Module 4 (HR and Administrative Basics) · Bài 4
   "Company rules and signs"
   Khuôn rút gọn cho A1: 8 từ, 8 câu luyện tập, bài đọc và bài viết ngắn.
   Nối tiếp bài 3: thứ Năm 29/10/2026, chị Lan dẫn chị Hoa đi xem các biển báo ở tầng 5 và nhắc nội quy.
   Trang phục business casual (theo mục 3 hướng dẫn); văn phòng đóng cửa thứ Bảy (theo bài 2).
   Anna (bạn nước ngoài của chị Hoa) chỉ xuất hiện trong bài viết; Anna sẽ đến thăm văn phòng thứ Hai 2/11.
   Công ty Riverside Trading và các nhân vật đều là hư cấu.
   ========================================================= */
window.EOH.registerLesson({
  id: "a1-m4-l4",
  reviewStatus: "draft", // "draft" = bản nháp, chưa duyệt
  duration: "20–25 phút",
  scenario: "Chiều thứ Năm, chị Lan đi cùng chị Hoa quanh tầng 5 và giải thích các biển báo: khu vực chỉ dành cho nhân viên, lối thoát hiểm, cấm hút thuốc. Chị Hoa hỏi mình có phải mặc vest và có phải đi làm thứ Bảy không.",

  objectives: [
    "Nói điều bắt buộc bằng must + động từ (You must wear your ID card.).",
    "Nói điều bị cấm bằng mustn't + động từ (You mustn't smoke here.).",
    "Nói điều không cần làm bằng don't have to và phân biệt với mustn't.",
    "Đọc đúng mustn't /ˈmʌsənt/ (chữ t đầu không đọc) và các từ sign, exit.",
    "Viết tin nhắn ngắn nhắc nội quy cho khách."
  ],

  vocabulary: [
    { word: "rule", ipa: "/ruːl/", pos: "noun", meaning: "quy định, nội quy",
      example: "This is an important rule.", exampleVi: "Đây là một quy định quan trọng." },
    { word: "sign", ipa: "/saɪn/", pos: "noun", meaning: "biển báo",
      example: "Read the sign, please.", exampleVi: "Vui lòng đọc biển báo." },
    { word: "smoke", ipa: "/smoʊk/", pos: "verb", meaning: "hút thuốc",
      example: "You mustn't smoke here.", exampleVi: "Bạn không được hút thuốc ở đây." },
    { word: "fire exit", ipa: "/ˈfaɪər ˌeksɪt/", pos: "noun", meaning: "lối thoát hiểm",
      example: "The fire exit is next to the stairs.", exampleVi: "Lối thoát hiểm ở cạnh cầu thang bộ." },
    { word: "enter", ipa: "/ˈentər/", pos: "verb", meaning: "đi vào",
      example: "You must have a card to enter.", exampleVi: "Bạn phải có thẻ mới được vào." },
    { word: "wear", ipa: "/wer/", pos: "verb", meaning: "mặc, đeo",
      example: "Please wear your ID card.", exampleVi: "Vui lòng đeo thẻ căn cước." },
    { word: "block", ipa: "/blɑːk/", pos: "verb", meaning: "chặn, làm tắc",
      example: "Don't block the door.", exampleVi: "Đừng chặn cửa." },
    { word: "safe", ipa: "/seɪf/", pos: "adjective", meaning: "an toàn",
      example: "Our office is safe.", exampleVi: "Văn phòng của chúng tôi an toàn." }
  ],

  pronunciation: {
    groups: [
      {
        title: "must và mustn't",
        text: "Must đọc nhanh, nhẹ. Mustn't dài hơn và có hai âm tiết. Chữ t đầu trong mustn't không đọc.",
        items: [
          { word: "must", marked: "/mʌst/", note: "Một âm tiết, ngắn." },
          { word: "mustn't", marked: "/ˈmʌsənt/", note: "Hai âm tiết: MUS-ent. Chữ t đầu không đọc." },
          { word: "don't have to", marked: "/doʊnt ˈhæv tə/", note: "Have to đọc nối: “hæf-tə”." }
        ]
      },
      {
        title: "Từ hay gặp trên biển báo",
        text: "Ba từ này thường có trên biển báo. Chú ý cách đọc.",
        items: [
          { word: "sign", marked: "/saɪn/", note: "Chữ g không đọc." },
          { word: "wear", marked: "/wer/", note: "Giống where /wer/ ở bài hỏi." },
          { word: "exit", marked: "/ˈeksɪt/", note: "Nhấn âm đầu: EX-it." }
        ]
      }
    ],
    sentences: [
      "You must wear your ID card.",
      "You mustn't smoke in the building.",
      "You don't have to wear a suit."
    ]
  },

  listening: {
    title: "Signs on the fifth floor",
    setting: "Thứ Năm, tầng 5. Chị Lan chỉ cho chị Hoa các biển báo và giải thích nội quy.",
    speakers: { lan: "Lan (HR Officer)", hoa: "Hoa (accountant)" },
    lines: [
      { s: "hoa", text: "Lan, I see a lot of signs here. Can you help me?",
        vi: "Chị Lan, tôi thấy nhiều biển báo ở đây. Chị giúp tôi được không?" },
      { s: "lan", text: "Sure. This sign says “Staff only”. You must have an ID card to enter.",
        vi: "Được chứ. Biển này ghi “Chỉ dành cho nhân viên”. Chị phải có thẻ căn cước mới được vào." },
      { s: "hoa", text: "I see. What about the green sign?",
        vi: "Tôi hiểu rồi. Còn biển màu xanh lá thì sao?" },
      { s: "lan", text: "That is the fire exit. You mustn't block it. Please keep it clear.",
        vi: "Đó là lối thoát hiểm. Chị không được chặn lối đó. Hãy để trống lối đi." },
      { s: "hoa", text: "OK. And this one?",
        vi: "Vâng. Còn biển này?" },
      { s: "lan", text: "It says “No smoking”. You mustn't smoke in the building.",
        vi: "Biển ghi “Cấm hút thuốc”. Chị không được hút thuốc trong tòa nhà." },
      { s: "hoa", text: "Do I have to wear a suit?",
        vi: "Tôi có phải mặc vest không?" },
      { s: "lan", text: "No, you don't have to. Business casual is fine. But you must wear your ID card.",
        vi: "Không, chị không cần. Trang phục business casual là được. Nhưng chị phải đeo thẻ." },
      { s: "hoa", text: "Do I have to come on Saturday?",
        vi: "Tôi có phải đi làm thứ Bảy không?" },
      { s: "lan", text: "No, you don't have to. The office is closed on Saturday.",
        vi: "Không, chị không cần. Văn phòng đóng cửa vào thứ Bảy." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "What must Hoa have to enter the “Staff only” area?",
        options: ["A suit", "An ID card", "A phone", "A form"],
        answer: 1, explanation: "Lan nói: “You must have an ID card to enter.” – phải có thẻ căn cước mới được vào." },
      { id: "l2", type: "choice", prompt: "What mustn't Hoa do at the fire exit?",
        options: ["Walk near it", "Look at it", "Block it", "Open it"],
        answer: 2, explanation: "Lan nói: “You mustn't block it.” – không được chặn lối thoát hiểm. “Please keep it clear” = hãy để trống lối đi." },
      { id: "l3", type: "choice", prompt: "Does Hoa have to wear a suit?",
        options: ["Yes, every day", "Yes, on Friday", "Only for meetings", "No, she doesn't have to"],
        answer: 3, explanation: "Lan nói: “No, you don't have to. Business casual is fine.” – không cần mặc vest, trang phục business casual là được." }
    ]
  },

  reading: {
    title: "Office rules",
    intro: "Chiều thứ Năm, chị Lan gửi email tóm tắt ba nội quy quan trọng. Đọc và tìm điều bắt buộc, điều bị cấm và điều không cần làm.",
    email: {
      from: "Lan Pham <lan.pham@riverside-trading.example>",
      to: "Hoa Tran",
      date: "Thursday, 29 October",
      subject: "Office rules",
      greeting: "Hi Hoa,",
      paragraphs: [
        "Here are the office rules."
      ],
      list: [
        "You must wear your ID card.",
        "You mustn't smoke in the building.",
        "You must keep the fire exits clear."
      ],
      after: [
        "You don't have to wear a suit. Business casual is OK. Please ask me if you have questions."
      ],
      closing: "Thanks!",
      signature: ["Lan Pham", "HR Department"]
    },
    glossary: [
      { term: "keep clear", vi: "để trống, không để vật cản" },
      { term: "building", vi: "tòa nhà" },
      { term: "business casual", vi: "trang phục công sở thoải mái" },
      { term: "ask", vi: "hỏi" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "What must staff wear?",
        options: ["An ID card", "A suit", "A jacket", "A uniform"],
        answer: 0, explanation: "“You must wear your ID card.” – nhân viên phải đeo thẻ căn cước. Email nói rõ không cần mặc vest." },
      { id: "r2", type: "choice", prompt: "What mustn't staff do in the building?",
        options: ["Drink coffee", "Use a phone", "Smoke", "Eat lunch"],
        answer: 2, explanation: "“You mustn't smoke in the building.” – không được hút thuốc trong tòa nhà. Các việc còn lại email không cấm." },
      { id: "r3", type: "choice", prompt: "Which rule is about safety?",
        options: ["Wear your ID card", "Keep the fire exits clear", "Business casual is OK", "Ask HR questions"],
        answer: 1, explanation: "“You must keep the fire exits clear.” – lối thoát hiểm phải để trống, liên quan đến an toàn khi có cháy." }
    ]
  },

  grammar: {
    title: "must / mustn't / don't have to",
    titleVi: "Must (bắt buộc), mustn't (bị cấm) và don't have to (không cần)",
    intro: "Ba cấu trúc này hay xuất hiện trên biển báo và trong nội quy. Must là bắt buộc. Mustn't là bị cấm. Don't have to là không cần làm, nhưng làm cũng không sao. Sau cả ba, động từ giữ nguyên.",
    patterns: [
      { form: "must + động từ", use: "Quy định bắt buộc, phải làm.",
        examples: ["You must wear your ID card.", "You must keep the exit clear."] },
      { form: "mustn't + động từ", use: "Bị cấm, không được làm.",
        examples: ["You mustn't smoke here.", "You mustn't block the door."] },
      { form: "don't have to + động từ", use: "Không cần làm; không bắt buộc.",
        examples: ["You don't have to wear a suit.", "You don't have to come on Saturday."] },
      { form: "Do I have to…? – Yes, you do. / No, you don't.", use: "Hỏi mình có phải làm gì không. Trả lời ngắn bằng do / don't.",
        examples: ["Do I have to wear a suit?", "No, you don't."] }
    ],
    mistakes: [
      { wrong: "You must to wear your card.", right: "You must wear your card.", note: "Sau must không có to." },
      { wrong: "You mustn't to smoke here.", right: "You mustn't smoke here.", note: "Sau mustn't dùng động từ nguyên mẫu, không có to." },
      { wrong: "You don't must wear a suit.", right: "You don't have to wear a suit.", note: "Không nói don't must. Dùng don't have to." },
      { wrong: "You don't have to smoke here.", right: "You mustn't smoke here.", note: "Nếu biển ghi cấm hút thuốc, đừng nói don't have to (nghĩa là không cần hút). Muốn cấm thì dùng mustn't." }
    ],
    tip: "Hãy nhớ: mustn't = cấm tuyệt đối. Don't have to = tự do. Hiểu sai hai cấu trúc này có thể gây lỗi nghiêm trọng khi đọc nội quy."
  },

  practice: [
    { id: "p1", type: "gap", context: "Sign: NO SMOKING", prompt: "You ___ smoke in this building.",
      options: ["mustn't", "must", "don't have to", "can"],
      answer: 0, explanation: "Biển cấm hút thuốc, nên dùng mustn't: You mustn't smoke. “must” hoặc “can” trái nghĩa với biển." },
    { id: "p2", type: "gap", prompt: "You ___ wear your ID card. It is a rule.",
      options: ["mustn't", "don't have to", "must", "doesn't"],
      answer: 2, explanation: "Đó là quy định bắt buộc nên dùng must: You must wear your ID card." },
    { id: "p3", type: "gap", prompt: "You ___ wear a suit. Business casual is OK.",
      options: ["must", "mustn't", "has to", "don't have to"],
      answer: 3, explanation: "Không cần mặc vest, vì business casual là được: You don't have to wear a suit. “has to” sai với You." },
    { id: "p4", type: "choice", prompt: "Which sentence is correct?",
      options: ["You must to wear it.", "You must wearing it.", "You must wear it.", "You musts wear it."],
      answer: 2, explanation: "Must + động từ nguyên mẫu, không thêm to, -ing hay -s: You must wear it." },
    { id: "p5", type: "choice", prompt: "What does “You mustn't enter” mean?",
      options: ["Entering is not allowed.", "You can enter if you want.", "You don't need to enter.", "You must enter."],
      answer: 0, explanation: "Mustn't là bị cấm: không được vào. “don't need” và “can” là các nghĩa khác." },
    { id: "p6", type: "choice", prompt: "What does “You don't have to come on Saturday” mean?",
      options: ["Coming is not allowed.", "Coming is not necessary.", "Coming is a rule.", "Coming is dangerous."],
      answer: 1, explanation: "Don't have to là không cần, không bắt buộc. Không phải là bị cấm (đó là mustn't)." },
    { id: "p7", type: "gap", prompt: "A: Do I have to wear a suit? B: No, you ___.",
      options: ["mustn't", "don't", "aren't", "haven't"],
      answer: 1, explanation: "Câu hỏi Do I have to…? trả lời ngắn bằng do / don't: No, you don't. Không dùng mustn't để trả lời." },
    { id: "p8", type: "choice", prompt: "Which sentence means “It is a rule: do NOT do it”?",
      options: ["You don't have to open it.", "You can open it.", "You must open it.", "You mustn't open it."],
      answer: 3, explanation: "Mustn't = bị cấm: You mustn't open it. “must” là bắt buộc làm, “don't have to” là không cần, “can” là được phép." }
  ],

  writing: {
    title: "Rules for a visitor",
    task: "Bạn của bạn, Anna, sẽ đến thăm văn phòng vào thứ Hai tuần sau. Bạn là Hoa, hãy viết tin nhắn ngắn (25–50 từ) nhắc Anna ba điều: điều phải làm, điều không được làm, điều không cần làm.",
    requirements: [
      "Chào Anna.",
      "Nói một điều phải làm bằng must (ví dụ đeo thẻ khách).",
      "Nói một điều bị cấm bằng mustn't.",
      "Nói một điều không cần làm bằng don't have to.",
      "Kết thúc tin nhắn và ký tên."
    ],
    minWords: 25,
    maxWords: 50,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Hi / Hello / Dear)", pattern: "\\b(hi|hello|dear)\\b" },
      { label: "Có must", pattern: "\\bmust\\b" },
      { label: "Có mustn't", pattern: "\\bmustn't\\b" },
      { label: "Có don't have to", pattern: "\\bdon't have to\\b" },
      { label: "Có tên văn phòng hoặc thứ Hai (office / Monday)", pattern: "\\boffice\\b|\\bmonday\\b" },
      { label: "Có lời kết (See you / Best wishes / Thanks)", pattern: "see you|regards|wishes|thanks" }
    ],
    model: [
      "Hi Anna,",
      "Welcome to our office on Monday. You must wear a visitor card. You mustn't smoke in the building. You don't have to wear a suit.",
      "See you on Monday!",
      "Hoa"
    ]
  },

  review: {
    keyPhrases: [
      { en: "You must wear your ID card.", vi: "Bạn phải đeo thẻ căn cước." },
      { en: "You mustn't smoke in the building.", vi: "Bạn không được hút thuốc trong tòa nhà." },
      { en: "You mustn't block the fire exit.", vi: "Bạn không được chặn lối thoát hiểm." },
      { en: "You don't have to wear a suit.", vi: "Bạn không cần mặc vest." },
      { en: "Do I have to come on Saturday? – No, you don't.", vi: "Tôi có phải đi làm thứ Bảy không? – Không cần." },
      { en: "Staff only", vi: "Chỉ dành cho nhân viên" }
    ]
  }
});
