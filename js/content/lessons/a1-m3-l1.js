/* =========================================================
   A1 · Module 3 (Everyday Office English) · Bài 1
   "Office equipment and supplies"
   Khuôn rút gọn cho A1: 8 từ, 8 câu luyện tập, bài đọc và bài viết ngắn.
   Nối tiếp tuần 1 của Hoa: đây là tuần làm việc thứ ba, thứ Hai 19/10/2026.
   Peter (nhóm của David, phòng Kinh doanh) đã đi làm được một tuần.
   Công ty Riverside Trading và các nhân vật đều là hư cấu.
   ========================================================= */
window.EOH.registerLesson({
  id: "a1-m3-l1",
  reviewStatus: "draft", // "draft" = bản nháp, chưa duyệt
  duration: "20–25 phút",
  scenario: "Sáng thứ Hai, Peter từ tầng 3 xuống phòng Kế toán ở tầng 2 để hỏi chị Hoa xin giấy, bìa hồ sơ và một cái dập ghim. Hai người nói về đồ vật gần và xa, và nói có hay không có đồ dùng.",

  objectives: [
    "Gọi tên 8 thiết bị và văn phòng phẩm thông dụng: printer, stapler, folder, paper…",
    "Dùng this / that cho một vật (gần / xa) và these / those cho nhiều vật (gần / xa).",
    "Dùng some trong câu khẳng định và any trong câu phủ định, câu hỏi: I have some paper. / Do you have any pens?",
    "Phân biệt âm ngắn /ɪ/ và âm dài /iː/: this – these, sit – seat.",
    "Viết ghi chú ngắn để nhờ đồng nghiệp đưa đồ dùng văn phòng."
  ],

  vocabulary: [
    { word: "printer", ipa: "/ˈprɪntər/", pos: "noun", meaning: "máy in",
      example: "The printer is on the third floor.", exampleVi: "Máy in ở tầng ba." },
    { word: "stapler", ipa: "/ˈsteɪplər/", pos: "noun", meaning: "cái dập ghim",
      example: "Do you have a stapler?", exampleVi: "Bạn có cái dập ghim không?" },
    { word: "folder", ipa: "/ˈfoʊldər/", pos: "noun", meaning: "bìa hồ sơ, thư mục",
      example: "I need some folders for the invoices.", exampleVi: "Tôi cần vài bìa hồ sơ cho các hóa đơn." },
    { word: "paper", ipa: "/ˈpeɪpər/", pos: "noun", meaning: "giấy (không đếm được)",
      example: "We have some paper in this box.", exampleVi: "Chúng tôi có ít giấy trong cái hộp này." },
    { word: "pen", ipa: "/pen/", pos: "noun", meaning: "bút",
      example: "I don't have any pens.", exampleVi: "Tôi không có cây bút nào." },
    { word: "scanner", ipa: "/ˈskænər/", pos: "noun", meaning: "máy quét",
      example: "That scanner is old.", exampleVi: "Cái máy quét kia đã cũ." },
    { word: "scissors", ipa: "/ˈsɪzərz/", pos: "noun (plural)", meaning: "cái kéo (luôn ở dạng số nhiều)",
      example: "These scissors are new.", exampleVi: "Cái kéo này mới." },
    { word: "charger", ipa: "/ˈtʃɑːrdʒər/", pos: "noun", meaning: "cục sạc",
      example: "Is this your phone charger?", exampleVi: "Đây là cục sạc điện thoại của bạn phải không?" }
  ],

  pronunciation: {
    groups: [
      {
        title: "Âm ngắn /ɪ/",
        text: "Âm /ɪ/ ngắn và nhẹ, miệng thả lỏng, gần giống “i” rất ngắn trong tiếng Việt. Không kéo dài.",
        items: [
          { word: "this", marked: "/ðɪs/", note: "Một vật, gần." },
          { word: "sit", marked: "/sɪt/" },
          { word: "ship", marked: "/ʃɪp/" },
          { word: "live", marked: "/lɪv/" }
        ]
      },
      {
        title: "Âm dài /iː/",
        text: "Âm /iː/ dài, môi kéo sang hai bên như đang mỉm cười, giữ âm lâu hơn. Phân biệt rõ cặp this và these.",
        items: [
          { word: "these", marked: "/ðiːz/", note: "Nhiều vật, gần. Kéo dài âm." },
          { word: "seat", marked: "/siːt/" },
          { word: "sheep", marked: "/ʃiːp/" },
          { word: "leave", marked: "/liːv/" }
        ]
      }
    ],
    sentences: [
      "This is a new printer.",
      "These are my pens.",
      "Please sit in this seat."
    ]
  },

  listening: {
    title: "Can I have some paper?",
    setting: "Thứ Hai 19/10, 9 giờ sáng, phòng Kế toán ở tầng 2. Peter từ tầng 3 xuống xin đồ dùng.",
    speakers: { peter: "Peter (Sales)", hoa: "Hoa (Accountant)" },
    lines: [
      { s: "peter", text: "Good morning, Hoa. Do you have any paper? The printer on the third floor is empty.",
        vi: "Chào buổi sáng, Hoa. Chị có giấy không? Máy in ở tầng ba hết giấy rồi." },
      { s: "hoa", text: "Good morning, Peter. Yes, I have some paper in this box. Take it.",
        vi: "Chào buổi sáng, Peter. Có, tôi có ít giấy trong cái hộp này. Anh cứ lấy đi." },
      { s: "peter", text: "Thank you! Is that your printer by the window?",
        vi: "Cảm ơn chị! Kia là máy in của chị, cạnh cửa sổ, phải không?" },
      { s: "hoa", text: "Yes, it is. It is new. But that scanner next to it is old.",
        vi: "Đúng vậy. Nó mới. Nhưng cái máy quét bên cạnh thì cũ rồi." },
      { s: "peter", text: "I need some folders for my invoices. Do you have any?",
        vi: "Tôi cần vài bìa hồ sơ cho các hóa đơn. Chị có cái nào không?" },
      { s: "hoa", text: "These folders are new. Please take some. Those folders on the shelf are old.",
        vi: "Những bìa này mới. Anh cứ lấy vài cái. Những bìa trên kệ kia thì cũ." },
      { s: "peter", text: "Great. And do you have a stapler? I don't have any staplers on my desk.",
        vi: "Tuyệt. Chị có cái dập ghim không? Trên bàn tôi không có cái nào." },
      { s: "hoa", text: "Sorry, I don't have one. But Minh has some staplers on that desk.",
        vi: "Xin lỗi, tôi không có. Nhưng anh Minh có mấy cái dập ghim trên bàn kia." },
      { s: "peter", text: "Thanks, Hoa. Reception has some new pens too, I think.",
        vi: "Cảm ơn Hoa. Tôi nghĩ ở quầy lễ tân cũng có bút mới." },
      { s: "hoa", text: "Yes! Lan's email says so. I need some pens too.",
        vi: "Đúng rồi! Email của chị Lan nói vậy. Tôi cũng cần vài cây bút." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "What does Peter ask for first?",
        options: ["A stapler", "Paper", "Pens", "A scanner"],
        answer: 1, explanation: "Peter hỏi đầu tiên: “Do you have any paper? The printer on the third floor is empty.” – anh xin giấy vì máy in ở tầng ba hết giấy." },
      { id: "l2", type: "choice", prompt: "Which folders are old?",
        options: ["Minh's folders", "The folders in Peter's box", "These folders", "Those folders on the shelf"],
        answer: 3, explanation: "Hoa nói: “These folders are new… Those folders on the shelf are old.” – những bìa trên kệ (ở xa) là bìa cũ. “These folders” (ở gần) là bìa mới." },
      { id: "l3", type: "choice", prompt: "Who has some staplers?",
        options: ["Minh", "Hoa", "Peter", "Lan"],
        answer: 0, explanation: "Hoa nói: “I don't have one. But Minh has some staplers on that desk.” – anh Minh có mấy cái dập ghim. Hoa và Peter đều không có." }
    ]
  },

  reading: {
    title: "New office supplies",
    intro: "Sáng thứ Hai, chị Lan gửi email cho mọi người về văn phòng phẩm mới. Đọc và tìm xem lấy ở đâu, có những gì.",
    email: {
      from: "Lan Pham <lan.pham@riverside-trading.example>",
      to: "All staff",
      date: "Monday, 19 October",
      subject: "New office supplies",
      greeting: "Hi everyone,",
      paragraphs: [
        "The new office supplies are here. We have some pens, folders and paper at Reception on the 5th floor. We don't have any staplers this week."
      ],
      list: [
        "Pens: yes",
        "Folders: yes",
        "Paper: yes",
        "Staplers: not this week"
      ],
      after: [
        "Do you need anything else? Please call me on extension 214."
      ],
      closing: "Thank you,",
      signature: ["Lan Pham", "HR Department"]
    },
    glossary: [
      { term: "office supplies", vi: "văn phòng phẩm" },
      { term: "Reception", vi: "quầy lễ tân" },
      { term: "this week", vi: "tuần này" },
      { term: "anything else", vi: "còn gì khác nữa" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "Where are the new supplies?",
        options: ["In the Accounting room, 2nd floor", "In the canteen", "At Reception, 5th floor", "In Room 301"],
        answer: 2, explanation: "“We have some pens, folders and paper at Reception on the 5th floor.” – đồ dùng mới ở quầy lễ tân, tầng 5." },
      { id: "r2", type: "choice", prompt: "Which thing is NOT at Reception this week?",
        options: ["Staplers", "Pens", "Folders", "Paper"],
        answer: 0, explanation: "“We don't have any staplers this week.” – tuần này không có cái dập ghim nào. Bút, bìa hồ sơ và giấy đều có." },
      { id: "r3", type: "choice", prompt: "What should staff do if they need something else?",
        options: ["Send an email to David", "Call Lan on extension 214", "Ask Sam in IT Support", "Go to the canteen"],
        answer: 1, explanation: "“Do you need anything else? Please call me on extension 214.” – cần gì khác thì gọi chị Lan, máy lẻ 214." }
    ]
  },

  grammar: {
    title: "this / that / these / those and some / any",
    titleVi: "This, that, these, those và some, any",
    intro: "Khi chỉ vào đồ vật, ta chọn từ theo hai điều: một hay nhiều vật, và gần hay xa người nói. This / these cho vật ở gần. That / those cho vật ở xa. Some và any nói về số lượng không rõ ràng.",
    patterns: [
      { form: "This / That + danh từ số ít + is …", use: "Một vật. This = gần, that = xa.",
        examples: ["This stapler is new.", "That printer is old."] },
      { form: "These / Those + danh từ số nhiều + are …", use: "Nhiều vật. These = gần, those = xa. Nhớ dùng are.",
        examples: ["These folders are new.", "Those pens are on the shelf."] },
      { form: "I have some + danh từ số nhiều / không đếm được", use: "Câu khẳng định dùng some (một ít, vài).",
        examples: ["I have some paper.", "Minh has some staplers."] },
      { form: "Do you have any …? / I don't have any …", use: "Câu hỏi và câu phủ định dùng any.",
        examples: ["Do you have any pens?", "I don't have any folders."] }
    ],
    mistakes: [
      { wrong: "This are my folders.", right: "These are my folders.", note: "Nhiều vật thì dùng these (và are)." },
      { wrong: "That folders are old.", right: "Those folders are old.", note: "Danh từ số nhiều ở xa dùng those." },
      { wrong: "I don't have some pens.", right: "I don't have any pens.", note: "Câu phủ định dùng any, không dùng some." },
      { wrong: "I have any paper.", right: "I have some paper.", note: "Câu khẳng định dùng some." }
    ],
    tip: "Scissors luôn là số nhiều, nên nói “These scissors are new”, không nói “This scissors is new”. Khi nhờ người khác, có thể nói “Do you have any…?” rất tự nhiên."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "___ stapler here in my hand is new.",
      options: ["This", "These", "Those", "That"],
      answer: 0, explanation: "“stapler” là số ít và ở ngay trong tay (gần), nên dùng This. “That” dùng cho vật ở xa; These và Those dùng cho số nhiều." },
    { id: "p2", type: "gap", prompt: "Look at ___ folders on the shelf over there.",
      options: ["this", "these", "that", "those"],
      answer: 3, explanation: "“folders” là số nhiều và ở xa (on the shelf over there), nên dùng those. “these” dùng cho vật ở gần." },
    { id: "p3", type: "gap", prompt: "I don't have ___ pens.",
      options: ["some", "any", "a", "an"],
      answer: 1, explanation: "Câu phủ định (don't have) dùng any: I don't have any pens. “a / an” không đi với danh từ số nhiều “pens”." },
    { id: "p4", type: "gap", prompt: "I have ___ new pens in my bag.",
      options: ["any", "a", "some", "an"],
      answer: 2, explanation: "Câu khẳng định dùng some: I have some new pens. “a / an” không dùng với “pens” số nhiều, và any không dùng trong câu khẳng định." },
    { id: "p5", type: "choice", prompt: "Which sentence is correct?",
      options: ["I have any scissors.", "Those scissors are on the desk.", "This scissors is new.", "That scissors are old."],
      answer: 1, explanation: "Scissors là số nhiều, nên đi với are, those, these: Those scissors are on the desk. “This scissors is” sai; “I have any” sai vì câu khẳng định dùng some." },
    { id: "p6", type: "choice", prompt: "Which word do you use for ONE thing that is far from you?",
      options: ["that", "this", "these", "those"],
      answer: 0, explanation: "Một vật ở xa: that. This cũng cho một vật nhưng ở gần. These và those là cho nhiều vật." },
    { id: "p7", type: "choice", prompt: "Which word has the LONG sound /iː/?",
      options: ["sit", "ship", "this", "seat"],
      answer: 3, explanation: "seat đọc /siːt/ – âm dài /iː/. Ba từ còn lại đều có âm ngắn /ɪ/: sit /sɪt/, ship /ʃɪp/, this /ðɪs/." },
    { id: "p8", type: "choice", prompt: "Which word has the SHORT sound /ɪ/?",
      options: ["sheep", "leave", "live", "these"],
      answer: 2, explanation: "live đọc /lɪv/ – âm ngắn /ɪ/. sheep /ʃiːp/, leave /liːv/ và these /ðiːz/ đều có âm dài /iː/." }
  ],

  writing: {
    title: "A short note to Lan",
    task: "Bạn là Hoa. Bàn làm việc của bạn thiếu vài thứ. Hãy viết ghi chú ngắn cho chị Lan để xin đồ dùng văn phòng (25–50 từ).",
    requirements: [
      "Chào chị Lan.",
      "Nói bạn cần some office supplies.",
      "Hỏi một câu: Do you have any …?",
      "Dùng ít nhất một từ: this, that, these hoặc those.",
      "Dùng any trong câu phủ định, rồi cảm ơn và ký tên."
    ],
    minWords: 25,
    maxWords: 50,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Hi / Hello / Dear)", pattern: "\\b(hi|hello|dear)\\b" },
      { label: "Có từ some", pattern: "\\bsome\\b" },
      { label: "Có câu hỏi Do you have any…?", pattern: "do you have any[^?]*\\?" },
      { label: "Có this / that / these / those", pattern: "\\b(this|that|these|those)\\b" },
      { label: "Có câu phủ định với any (don't have any)", pattern: "(don't|do not) have any" },
      { label: "Có lời cảm ơn (Thanks / Thank you)", pattern: "thanks|thank you" }
    ],
    model: [
      "Hi Lan,",
      "I need some office supplies. Do you have any folders? These folders on my desk are old. I don't have any pens, and that stapler is broken. Thanks!",
      "Hoa"
    ]
  },

  review: {
    keyPhrases: [
      { en: "Do you have any paper?", vi: "Bạn có giấy không?" },
      { en: "I have some paper in this box.", vi: "Tôi có ít giấy trong cái hộp này." },
      { en: "These folders are new. Those folders are old.", vi: "Những bìa này mới. Những bìa kia cũ." },
      { en: "I don't have any staplers.", vi: "Tôi không có cái dập ghim nào." },
      { en: "Is that your printer?", vi: "Kia là máy in của bạn phải không?" },
      { en: "That scanner is old.", vi: "Cái máy quét kia đã cũ." }
    ]
  }
});
