/* =========================================================
   A1 · Module 4 (HR and Administrative Basics) · Bài 5
   "Reception and visitors"
   Khuôn rút gọn cho A1: 8 từ, 8 câu luyện tập, bài đọc và bài viết ngắn.
   Nối tiếp bài 4: thứ Sáu 30/10/2026, 9 giờ sáng, lễ tân tầng 5. Chị Hoa đón khách là ông Carter.
   Nhân vật mới: Yen Do (chị Yến), Receptionist (lễ tân) ở lễ tân tầng 5, máy lẻ 100.
   Khách mới: Mr. Carter, kiểm toán viên (auditor) từ công ty đối tác, chỉ xuất hiện trong bài này; họ tên và công ty đều là hư cấu.
   Sau khi đón khách, chị Hoa dẫn ông Carter xuống phòng Kế toán (tầng 2). Thứ Sáu là ngày cuối tháng nên Kế toán làm đến 6 giờ chiều (bài 2).
   Công ty Riverside Trading và các nhân vật đều là hư cấu.
   ========================================================= */
window.EOH.registerLesson({
  id: "a1-m4-l5",
  reviewStatus: "draft", // "draft" = bản nháp, chưa duyệt
  duration: "20–25 phút",
  scenario: "Sáng thứ Sáu, chị Hoa ra lễ tân tầng 5 đón ông Carter, một khách đến làm việc với phòng Kế toán. Chị hỏi thăm chuyến đi, mời ông ký tên vào sổ khách và mời ông ngồi chờ.",

  objectives: [
    "Hỏi thăm khách bằng Was…? / Were…? (Was your trip OK?) và trả lời ngắn: Yes, it was. / No, it wasn't.",
    "Dùng was / were đúng với chủ ngữ (the traffic was, the roads were).",
    "Mời khách bằng Please: Please sign in. / Please take a seat.",
    "Đọc was / were ở dạng yếu /wəz/ /wər/ trong câu.",
    "Viết email ngắn cảm ơn khách sau buổi làm việc."
  ],

  vocabulary: [
    { word: "visitor", ipa: "/ˈvɪzɪtər/", pos: "noun", meaning: "khách đến thăm",
      example: "A visitor is at reception.", exampleVi: "Có một khách đang ở lễ tân." },
    { word: "receptionist", ipa: "/rɪˈsepʃənɪst/", pos: "noun", meaning: "nhân viên lễ tân",
      example: "The receptionist has your card.", exampleVi: "Nhân viên lễ tân giữ thẻ của bạn." },
    { word: "trip", ipa: "/trɪp/", pos: "noun", meaning: "chuyến đi",
      example: "Was your trip OK?", exampleVi: "Chuyến đi của bạn ổn chứ?" },
    { word: "flight", ipa: "/flaɪt/", pos: "noun", meaning: "chuyến bay",
      example: "The flight was on time.", exampleVi: "Chuyến bay đúng giờ." },
    { word: "traffic", ipa: "/ˈtræfɪk/", pos: "noun", meaning: "giao thông, xe cộ",
      example: "The traffic was bad.", exampleVi: "Giao thông rất tệ." },
    { word: "sign in", ipa: "/ˌsaɪn ˈɪn/", pos: "phrasal verb", meaning: "ký tên khi đến (ghi tên vào sổ khách)",
      example: "Please sign in here.", exampleVi: "Vui lòng ký tên khi đến ở đây." },
    { word: "take a seat", ipa: "/ˌteɪk ə ˈsiːt/", pos: "phrase", meaning: "mời ngồi",
      example: "Please take a seat.", exampleVi: "Mời bạn ngồi." },
    { word: "on time", ipa: "/ɑːn ˈtaɪm/", pos: "phrase", meaning: "đúng giờ",
      example: "The meeting starts on time.", exampleVi: "Cuộc họp bắt đầu đúng giờ." }
  ],

  pronunciation: {
    groups: [
      {
        title: "Was và were dạng yếu",
        text: "Trong câu, was và were thường đọc nhẹ và nhanh. Dạng yếu: was /wəz/, were /wər/. Dạng mạnh chỉ dùng khi nhấn mạnh hoặc trả lời ngắn: Yes, it WAS.",
        items: [
          { word: "Was", marked: "/wəz/ (yếu) – /wʌz/ (mạnh)", note: "Trong “Was your trip OK?”: đọc yếu /wəz/." },
          { word: "Were", marked: "/wər/ (yếu) – /wɝː/ (mạnh)", note: "Trong “Were the roads busy?”: đọc yếu /wər/." },
          { word: "Yes, it was.", marked: "Yes, it WAS. /wʌz/", note: "Câu trả lời ngắn: đọc mạnh was." }
        ]
      },
      {
        title: "Âm /w/ đầu từ",
        text: "Âm /w/: tròn môi như đọc “u”, rồi mở ra. Đừng đọc thành /v/.",
        items: [
          { word: "welcome", marked: "/ˈwelkəm/" },
          { word: "week", marked: "/wiːk/" },
          { word: "wait", marked: "/weɪt/" }
        ]
      }
    ],
    sentences: [
      "Was your trip OK?",
      "The traffic was bad, but the flight was on time.",
      "Please take a seat."
    ]
  },

  listening: {
    title: "Welcome, Mr. Carter",
    setting: "Thứ Sáu, 9 giờ sáng, ở lễ tân tầng 5. Chị Hoa đón ông Carter, khách đến làm việc với phòng Kế toán.",
    speakers: { hoa: "Hoa (accountant)", carter: "Mr. Carter (visitor)" },
    lines: [
      { s: "hoa", text: "Good morning, Mr. Carter. Welcome to Riverside Trading. I'm Hoa Tran from Accounting.",
        vi: "Chào buổi sáng, ông Carter. Chào mừng ông đến Riverside Trading. Tôi là Hoa Trần ở phòng Kế toán." },
      { s: "carter", text: "Good morning, Ms. Tran. Nice to meet you.",
        vi: "Chào buổi sáng, cô Trần. Rất vui được gặp cô." },
      { s: "hoa", text: "Nice to meet you. Was your trip OK?",
        vi: "Rất vui được gặp ông. Chuyến đi của ông ổn chứ?" },
      { s: "carter", text: "Yes, it was. The flight was on time, but the traffic was bad this morning.",
        vi: "Vâng, ổn. Chuyến bay đúng giờ, nhưng sáng nay giao thông rất tệ." },
      { s: "hoa", text: "I'm sorry about that. Were the roads very busy?",
        vi: "Tôi rất tiếc. Đường có đông lắm không ạ?" },
      { s: "carter", text: "Yes, they were. But the taxi driver was very good.",
        vi: "Có, đông lắm. Nhưng tài xế taxi rất tốt." },
      { s: "hoa", text: "Please sign in here. The receptionist, Ms. Yen, has your visitor card.",
        vi: "Mời ông ký tên khi đến ở đây. Chị Yến, nhân viên lễ tân, đang giữ thẻ khách của ông." },
      { s: "carter", text: "Thank you. Is my name on the list?",
        vi: "Cảm ơn cô. Tên tôi có trong danh sách không?" },
      { s: "hoa", text: "Yes, it is. Now please take a seat. Would you like some coffee?",
        vi: "Có ạ. Bây giờ mời ông ngồi. Ông dùng cà phê nhé?" },
      { s: "carter", text: "Yes, please. Black coffee, thank you.",
        vi: "Vâng, cảm ơn cô. Cho tôi cà phê đen." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "How was Mr. Carter's flight?",
        options: ["It was late", "It was on time", "It was cancelled", "It was very long"],
        answer: 1, explanation: "Ông Carter nói: “The flight was on time.” – chuyến bay đúng giờ. Giao thông buổi sáng mới là vấn đề." },
      { id: "l2", type: "choice", prompt: "How was the traffic this morning?",
        options: ["Good", "Quiet", "Bad", "Fast"],
        answer: 2, explanation: "“The traffic was bad this morning.” và “Yes, they were [busy].” – giao thông xấu, đường đông." },
      { id: "l3", type: "choice", prompt: "What does Hoa ask Mr. Carter to do after he signs in?",
        options: ["Take a seat", "Go to Room 301", "Call Lan", "Wait outside"],
        answer: 0, explanation: "Hoa nói: “Now please take a seat.” – mời ông ngồi chờ. Hoa không nhắc đến phòng họp hay Lan." }
    ]
  },

  reading: {
    title: "Visitor today",
    intro: "Sáng thứ Sáu, chị Yến ở lễ tân gửi email cho chị Hoa về khách đến hôm nay. Đọc và tìm giờ, nơi gặp và ai giữ thẻ khách.",
    email: {
      from: "Yen Do <yen.do@riverside-trading.example>",
      to: "Hoa Tran",
      date: "Friday, 30 October",
      subject: "Visitor today",
      greeting: "Hi Hoa,",
      paragraphs: [
        "Your visitor is coming this morning. I have his visitor card at my desk."
      ],
      list: [
        "Visitor: Mr. Carter",
        "Time: 9:00 a.m.",
        "Place: reception, 5th floor"
      ],
      after: [
        "Please come to reception on time. Call me on extension 100."
      ],
      closing: "Thanks!",
      signature: ["Yen Do", "Receptionist"]
    },
    glossary: [
      { term: "reception", vi: "quầy lễ tân" },
      { term: "visitor card", vi: "thẻ khách" },
      { term: "desk", vi: "bàn làm việc" },
      { term: "extension", vi: "số máy lẻ" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "When does Mr. Carter arrive?",
        options: ["At 8:00 a.m.", "At 8:30 a.m.", "At 9:30 a.m.", "At 9:00 a.m."],
        answer: 3, explanation: "“Time: 9:00 a.m.” – khách đến lúc 9 giờ sáng. Họp nhóm 9 giờ 30 là vào thứ Ba." },
      { id: "r2", type: "choice", prompt: "Where does Hoa meet Mr. Carter?",
        options: ["Room 301", "At reception on the 5th floor", "In the canteen", "Room 205"],
        answer: 1, explanation: "“Place: reception, 5th floor” và “Please come to reception on time.” – gặp ở lễ tân tầng 5." },
      { id: "r3", type: "choice", prompt: "Who has the visitor card?",
        options: ["Yen, at reception", "Hoa", "Lan", "Mr. Carter"],
        answer: 0, explanation: "“I have his visitor card at my desk.” – chị Yến (người viết email) giữ thẻ khách tại bàn." }
    ]
  },

  grammar: {
    title: "was / were and Please + verb",
    titleVi: "Was / were để hỏi thăm và Please + động từ để mời",
    intro: "Was và were là quá khứ của am / is / are. Ta dùng khi hỏi thăm về điều vừa xảy ra, ví dụ chuyến đi hôm nay hoặc giao thông sáng nay. Khi đón khách, hãy dùng Please + động từ để mời lịch sự.",
    patterns: [
      { form: "I / he / she / it + was (wasn't)", use: "Nói về một việc ở quá khứ với ngôi số ít.",
        examples: ["The flight was on time.", "The traffic wasn't good."] },
      { form: "You / we / they + were (weren't)", use: "Nói về nhiều người hoặc nhiều vật ở quá khứ.",
        examples: ["The roads were busy.", "The visitors weren't late."] },
      { form: "Was / Were + chủ ngữ…? – Yes, it was. / No, they weren't.", use: "Hỏi thăm bằng câu hỏi Yes / No. Trả lời ngắn dùng lại was / were.",
        examples: ["Was your trip OK?", "Were the roads busy? – Yes, they were."] },
      { form: "Please + động từ", use: "Mời hoặc nhờ khách lịch sự.",
        examples: ["Please sign in here.", "Please take a seat."] }
    ],
    mistakes: [
      { wrong: "The traffic were bad.", right: "The traffic was bad.", note: "Traffic là số ít (it), nên dùng was." },
      { wrong: "Was the roads busy?", right: "Were the roads busy?", note: "The roads là số nhiều (they), nên dùng Were." },
      { wrong: "Was your trip OK? – Yes, it were.", right: "Was your trip OK? – Yes, it was.", note: "Trả lời ngắn dùng was với it." },
      { wrong: "Please to take a seat.", right: "Please take a seat.", note: "Sau Please dùng động từ nguyên mẫu, không có to." }
    ],
    tip: "Với khách nước ngoài, bắt đầu bằng một câu hỏi thăm nhẹ: “Was your trip OK?” Sau đó mời khách ký tên và ngồi chờ. Cách này thân thiện và chuyên nghiệp."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "The traffic ___ bad this morning.",
      options: ["were", "was", "be", "being"],
      answer: 1, explanation: "Traffic là số ít (it), nên dùng was: The traffic was bad. “were” dùng với số nhiều." },
    { id: "p2", type: "gap", prompt: "The roads ___ very busy.",
      options: ["was", "is", "were", "be"],
      answer: 2, explanation: "The roads là số nhiều (they), nên dùng were: The roads were busy." },
    { id: "p3", type: "gap", prompt: "___ your trip OK? – Yes, it was.",
      options: ["Was", "Were", "Do", "Did"],
      answer: 0, explanation: "Your trip là số ít (it), nên hỏi Was your trip OK? Đáp lại: Yes, it was." },
    { id: "p4", type: "gap", prompt: "___ the flights late? – No, they weren't.",
      options: ["Was", "Were", "Does", "Has"],
      answer: 1, explanation: "The flights là số nhiều (they), nên hỏi Were…? Đáp lại: No, they weren't." },
    { id: "p5", type: "choice", prompt: "Which sentence is correct?",
      options: ["The visitors was late.", "The visitors is late.", "The visitors be late.", "The visitors were late."],
      answer: 3, explanation: "The visitors là số nhiều, nên dùng were: The visitors were late. “was” chỉ dùng với số ít." },
    { id: "p6", type: "choice", context: "A: Was the flight OK?", prompt: "What is the correct short answer?",
      options: ["Yes, it was.", "Yes, it were.", "Yes, he was.", "Yes, they was."],
      answer: 0, explanation: "The flight là it, nên trả lời Yes, it was. “it were”, “he was”, “they was” đều sai chủ ngữ hoặc động từ." },
    { id: "p7", type: "choice", prompt: "Which sentence invites a visitor to sit down?",
      options: ["Please sit it.", "Please take coffee.", "Please take a seat.", "Please make a seat."],
      answer: 2, explanation: "Please take a seat. là câu mời ngồi chuẩn. Các câu khác không tự nhiên hoặc sai nghĩa." },
    { id: "p8", type: "choice", prompt: "How do we usually say “was” in “Was your trip OK?”",
      options: ["/wʌz/ strong and long", "/wɑːz/", "/wɔːz/", "/wəz/ short and weak"],
      answer: 3, explanation: "Trong câu hỏi, was thường đọc yếu /wəz/. Chỉ khi trả lời ngắn (Yes, it WAS) mới đọc mạnh." }
  ],

  writing: {
    title: "Thank you for your visit",
    task: "Chiều thứ Sáu, ông Carter đã rời văn phòng. Bạn là Hoa, hãy viết email ngắn (25–50 từ) cảm ơn ông: nói buổi làm việc tốt, hỏi thăm đường về bằng was / were và mời ông gọi bạn nếu cần.",
    requirements: [
      "Chào ông Carter (Dear Mr. Carter,).",
      "Cảm ơn ông đã đến (Thank you for your visit).",
      "Dùng was hoặc were nói về buổi làm việc hôm nay.",
      "Hỏi thăm ông bằng Was / Were…? (ví dụ Was the traffic OK?).",
      "Mời ông gọi bạn bằng Please… và ký tên."
    ],
    minWords: 25,
    maxWords: 50,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Hi / Hello / Dear)", pattern: "\\b(hi|hello|dear)\\b" },
      { label: "Có lời cảm ơn (thank)", pattern: "thank" },
      { label: "Có was hoặc were", pattern: "\\b(was|were)\\b" },
      { label: "Có câu hỏi Was / Were …?", pattern: "\\b(was|were) [^.?!]*\\?" },
      { label: "Có câu mời bắt đầu bằng Please", pattern: "\\bplease\\b" },
      { label: "Có lời kết (Best wishes / Regards / See you)", pattern: "wishes|regards|see you" }
    ],
    model: [
      "Dear Mr. Carter,",
      "Thank you for your visit today. The meeting was very good. Was the traffic OK on your way back? Please call me on extension 215.",
      "Best wishes,",
      "Hoa Tran"
    ]
  },

  review: {
    keyPhrases: [
      { en: "Was your trip OK? – Yes, it was.", vi: "Chuyến đi của ông ổn chứ? – Vâng, ổn." },
      { en: "The traffic was bad this morning.", vi: "Sáng nay giao thông rất tệ." },
      { en: "Were the roads busy? – Yes, they were.", vi: "Đường có đông không? – Có." },
      { en: "Please sign in here.", vi: "Mời ông ký tên khi đến ở đây." },
      { en: "Please take a seat.", vi: "Mời ông ngồi." },
      { en: "Would you like some coffee?", vi: "Ông dùng cà phê nhé?" }
    ]
  }
});
