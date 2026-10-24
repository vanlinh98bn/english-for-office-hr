/* =========================================================
   A1 · Module 3 (Everyday Office English) · Bài 3
   "Telephone basics"
   Khuôn rút gọn cho A1: 8 từ, 8 câu luyện tập, bài đọc và bài viết ngắn.
   Nối tiếp bài 2: thứ Tư 21/10/2026, 9:40 sáng. Hoa gọi sang phòng Kinh doanh (tầng 3).
   Máy lẻ của Hoa là 215 (đã dùng ở A1-M1); máy lẻ của Sam Lee là 330 (đã dùng).
   Công ty Riverside Trading và các nhân vật đều là hư cấu.
   ========================================================= */
window.EOH.registerLesson({
  id: "a1-m3-l3",
  reviewStatus: "draft", // "draft" = bản nháp, chưa duyệt
  duration: "20–25 phút",
  scenario: "Sáng thứ Tư, chị Hoa gọi điện sang phòng Kinh doanh ở tầng 3 để hỏi về một hóa đơn. Chị Mai nghe máy, nói anh David đang họp, rồi chuyển máy cho Peter.",

  objectives: [
    "Mở đầu và kết thúc cuộc gọi: This is… / Can I speak to…, please? / Hold on, please.",
    "Nói ai đó đang làm gì ngay lúc này bằng hiện tại tiếp diễn: He's in a meeting. / She's talking to a customer.",
    "Hỏi và trả lời: Is he working? – Yes, he is. / No, he isn't.",
    "Viết đúng đuôi -ing: talk – talking, sit – sitting, write – writing.",
    "Viết ghi chú ngắn nói người khác đang làm gì và xin được nói chuyện."
  ],

  vocabulary: [
    { word: "customer", ipa: "/ˈkʌstəmər/", pos: "noun", meaning: "khách hàng",
      example: "He is talking to a customer.", exampleVi: "Anh ấy đang nói chuyện với một khách hàng." },
    { word: "speak", ipa: "/spiːk/", pos: "verb", meaning: "nói, nói chuyện",
      example: "Can I speak to David, please?", exampleVi: "Tôi nói chuyện với David được không?" },
    { word: "hold on", ipa: "/ˌhoʊld ˈɑːn/", pos: "phrase", meaning: "chờ một chút (khi gọi điện)",
      example: "Hold on, please.", exampleVi: "Vui lòng chờ một chút." },
    { word: "busy", ipa: "/ˈbɪzi/", pos: "adjective", meaning: "bận",
      example: "She is busy now.", exampleVi: "Bây giờ cô ấy đang bận." },
    { word: "line", ipa: "/laɪn/", pos: "noun", meaning: "đường dây điện thoại",
      example: "The line is busy.", exampleVi: "Đường dây đang bận." },
    { word: "call back", ipa: "/ˌkɔːl ˈbæk/", pos: "phrasal verb", meaning: "gọi lại",
      example: "Can I call you back?", exampleVi: "Tôi gọi lại cho bạn được không?" },
    { word: "wrong number", ipa: "/ˌrɔːŋ ˈnʌmbər/", pos: "phrase", meaning: "nhầm số",
      example: "Sorry, wrong number.", exampleVi: "Xin lỗi, nhầm số." },
    { word: "hang up", ipa: "/ˌhæŋ ˈʌp/", pos: "phrasal verb", meaning: "cúp máy, gác máy",
      example: "Please don't hang up.", exampleVi: "Xin đừng cúp máy." }
  ],

  pronunciation: {
    groups: [
      {
        title: "Đuôi -ing /ɪŋ/",
        text: "Đuôi -ing đọc nhẹ và nhanh là /ɪŋ/. Không đọc thành “in-g” hai âm riêng. Âm /ŋ/ ở cuối phát ra từ mũi, giống “ng” trong tiếng Việt, nhưng không có âm “g” rõ.",
        items: [
          { word: "working", marked: "/ˈwɝːkɪŋ/", note: "Nhấn âm đầu: WORK-ing." },
          { word: "talking", marked: "/ˈtɔːkɪŋ/" },
          { word: "waiting", marked: "/ˈweɪtɪŋ/" },
          { word: "calling", marked: "/ˈkɔːlɪŋ/" }
        ]
      },
      {
        title: "Chính tả đuôi -ing",
        text: "Một số từ đổi dạng khi thêm -ing. Âm đọc cũng thay đổi theo chính tả.",
        items: [
          { word: "sit – sitting", marked: "/ˈsɪtɪŋ/", note: "Gấp đôi chữ t: sit → sitting." },
          { word: "write – writing", marked: "/ˈraɪtɪŋ/", note: "Bỏ chữ e: write → writing." },
          { word: "make – making", marked: "/ˈmeɪkɪŋ/", note: "Bỏ chữ e: make → making." },
          { word: "look – looking", marked: "/ˈlʊkɪŋ/", note: "Giữ nguyên: look → looking." }
        ]
      }
    ],
    sentences: [
      "He's talking to a customer.",
      "I'm looking for the invoice.",
      "She's sitting at her desk."
    ]
  },

  listening: {
    title: "Can I speak to David?",
    setting: "Thứ Tư 21/10, 9 giờ 40 sáng. Hoa ở phòng Kế toán (tầng 2) gọi sang phòng Kinh doanh (tầng 3).",
    speakers: { mai: "Mai (David's assistant)", hoa: "Hoa (Accountant)", peter: "Peter (Sales)" },
    lines: [
      { s: "mai", text: "Good morning, Sales team. This is Mai.",
        vi: "Chào buổi sáng, nhóm Kinh doanh. Mai nghe đây." },
      { s: "hoa", text: "Hello, Mai. This is Hoa from Accounting. Can I speak to David, please?",
        vi: "Chào Mai. Hoa ở phòng Kế toán đây. Cho tôi nói chuyện với David được không?" },
      { s: "mai", text: "I'm sorry, Hoa. He's in a meeting. He's talking to a customer now.",
        vi: "Xin lỗi Hoa. Anh ấy đang họp. Bây giờ anh ấy đang nói chuyện với một khách hàng." },
      { s: "hoa", text: "I see. Is Peter there?",
        vi: "Tôi hiểu rồi. Peter có đó không?" },
      { s: "mai", text: "Yes, he is. He's working at his desk. Hold on, please.",
        vi: "Có. Anh ấy đang làm việc ở bàn. Chị chờ một chút nhé." },
      { s: "peter", text: "Hello, this is Peter.",
        vi: "Xin chào, Peter nghe đây." },
      { s: "hoa", text: "Hi Peter, it's Hoa. I'm checking an invoice for your team. Do you have the invoice number?",
        vi: "Chào Peter, Hoa đây. Tôi đang kiểm tra một hóa đơn của nhóm anh. Anh có số hóa đơn không?" },
      { s: "peter", text: "Sorry, I'm looking for it now. Can I call you back in five minutes?",
        vi: "Xin lỗi, bây giờ tôi đang tìm nó. Năm phút nữa tôi gọi lại cho chị được không?" },
      { s: "hoa", text: "Yes, of course. I'm sitting at my desk. My extension is two-one-five.",
        vi: "Được chứ. Tôi đang ngồi ở bàn. Máy lẻ của tôi là hai-một-năm." },
      { s: "peter", text: "Two-one-five. Thank you, Hoa. Talk to you soon.",
        vi: "Hai-một-năm. Cảm ơn Hoa. Nói chuyện với chị sớm nhé." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "Why can't Hoa speak to David?",
        options: ["He is in a meeting.", "He is at lunch.", "He is on holiday.", "He is talking to Peter."],
        answer: 0, explanation: "Mai nói: “He's in a meeting. He's talking to a customer now.” – David đang họp và nói chuyện với khách hàng, không phải với Peter." },
      { id: "l2", type: "choice", prompt: "What is Peter doing when Hoa calls?",
        options: ["Talking to a customer", "Sitting in a meeting", "Looking for an invoice", "Working at his desk"],
        answer: 3, explanation: "Mai nói: “He's working at his desk.” – Peter đang làm việc ở bàn. “Talking to a customer” là việc của David. Peter chỉ tìm hóa đơn sau khi nhấc máy." },
      { id: "l3", type: "choice", prompt: "What is Hoa's extension?",
        options: ["Two-one-four", "Two-one-five", "Three-three-oh", "Two-one-six"],
        answer: 1, explanation: "Hoa nói: “My extension is two-one-five.” – máy lẻ 215. Máy lẻ 214 là của chị Lan, 330 là của Sam." }
    ]
  },

  reading: {
    title: "New phone list",
    intro: "Sáng thứ Tư, Sam Lee ở bộ phận IT gửi email cho mọi người về danh sách điện thoại mới và cách nghe máy. Đọc và tìm cách trả lời điện thoại.",
    email: {
      from: "Sam Lee <sam.lee@riverside-trading.example>",
      to: "All staff",
      date: "Wednesday, 21 October",
      subject: "New phone list",
      greeting: "Hi everyone,",
      paragraphs: [
        "The new phone list is on the intranet. Please answer the phone like this:"
      ],
      list: [
        "Say your department and your name.",
        "Say: “Good morning, Accounting. This is Hoa.”",
        "Ask: “Can I help you?”"
      ],
      after: [
        "Do you have a problem with your phone? Please email me, or call me from another phone on extension 330."
      ],
      closing: "Thank you,",
      signature: ["Sam Lee", "IT Support"]
    },
    glossary: [
      { term: "phone list", vi: "danh sách số điện thoại" },
      { term: "intranet", vi: "mạng nội bộ" },
      { term: "answer the phone", vi: "nghe điện thoại" },
      { term: "problem", vi: "sự cố, vấn đề" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "Where is the new phone list?",
        options: ["On the intranet", "At Reception", "In an attachment", "In Room 205"],
        answer: 0, explanation: "“The new phone list is on the intranet.” – danh sách điện thoại mới ở mạng nội bộ." },
      { id: "r2", type: "choice", prompt: "What should you say first when you answer the phone?",
        options: ["Your phone number", "Your department and your name", "Your job title", "Your email address"],
        answer: 1, explanation: "“Say your department and your name.” – nói phòng ban và tên, ví dụ “Good morning, Accounting. This is Hoa.”" },
      { id: "r3", type: "choice", prompt: "Who should you contact about a phone problem?",
        options: ["Lan on extension 214", "Mai on extension 215", "Sam on extension 330", "David on the third floor"],
        answer: 2, explanation: "“Please email me, or call me from another phone on extension 330.” – người viết thư là Sam Lee. Máy lẻ 214 là của Lan, 215 là của Hoa." }
    ]
  },

  grammar: {
    title: "Present continuous for “now” and phone phrases",
    titleVi: "Hiện tại tiếp diễn cho việc đang diễn ra và câu nói khi gọi điện",
    intro: "Khi nói điện thoại, ta hay nói ai đó đang làm gì ngay lúc này. Dùng am / is / are + động từ-ing. Ở A1 chỉ dùng cho việc đang diễn ra ngay bây giờ.",
    patterns: [
      { form: "He / She / I + 's / 'm / is / am + V-ing", use: "Việc đang diễn ra bây giờ. Có thể rút gọn: he's, she's, I'm.",
        examples: ["He's talking to a customer.", "I'm looking for the invoice."] },
      { form: "He's / She's in a meeting.", use: "Nói ai đó đang bận họp, không cần động từ -ing.",
        examples: ["He's in a meeting.", "She's on the phone."] },
      { form: "Is / Are + chủ ngữ + V-ing? – Yes, he is. / No, he isn't.", use: "Hỏi xem ai đó có đang làm gì không. Trả lời ngắn bằng is / isn't, không nhắc lại động từ.",
        examples: ["Is Peter working? – Yes, he is.", "Is she talking? – No, she isn't."] },
      { form: "This is + tên. / Can I speak to + tên, please?", use: "Tự giới thiệu và xin được nói chuyện khi gọi điện. Chờ máy: Hold on, please.",
        examples: ["This is Hoa from Accounting.", "Can I speak to David, please?"] }
    ],
    mistakes: [
      { wrong: "He talking to a customer.", right: "He is talking to a customer. / He's talking…", note: "Thiếu is. Hiện tại tiếp diễn luôn cần am / is / are." },
      { wrong: "She is talk to David.", right: "She is talking to David.", note: "Sau is cần động từ có đuôi -ing." },
      { wrong: "Is he working? – Yes, he works.", right: "Is he working? – Yes, he is.", note: "Trả lời ngắn dùng lại is, không dùng động từ khác." },
      { wrong: "Hello, I am Hoa. (khi gọi điện)", right: "Hello, this is Hoa.", note: "Khi gọi điện hoặc nghe máy, người nói tiếng Anh dùng This is + tên, không dùng I am." }
    ],
    tip: "Khi cần người khác chờ, nói “Hold on, please.” hoặc “One moment, please.” Nói chậm và rõ số máy lẻ, ví dụ two-one-five, để người nghe ghi đúng."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "Mai is ___ to a customer now.",
      options: ["talk", "talks", "talking", "talked"],
      answer: 2, explanation: "Hiện tại tiếp diễn: is + V-ing. Câu có “now” và Mai is, nên dùng talking." },
    { id: "p2", type: "gap", prompt: "I ___ for the invoice now.",
      options: ["looking", "am looking", "looks", "am look"],
      answer: 1, explanation: "Hiện tại tiếp diễn: I am + V-ing. Thiếu am (looking), thiếu -ing (am look) hoặc dùng looks (dạng của he / she) đều sai." },
    { id: "p3", type: "choice", prompt: "Which sentence is correct?",
      options: ["She is talking to David.", "She talking to David.", "She is talk to David.", "She are talking to David."],
      answer: 0, explanation: "She is + V-ing là đúng. “She talking” thiếu is, “is talk” thiếu -ing, và “She are” sai vì với she dùng is." },
    { id: "p4", type: "gap", prompt: "Can I ___ to David, please?",
      options: ["say", "tell", "speaking", "speak"],
      answer: 3, explanation: "Mẫu câu khi gọi điện là Can I speak to… sau Can I dùng động từ nguyên mẫu speak. “speaking” thừa -ing; “say” và “tell” không dùng mẫu này." },
    { id: "p5", type: "choice", context: "Caller: Can I speak to Peter, please?", prompt: "Peter is in a meeting. What do you say?",
      options: ["I'm sorry, he in a meeting.", "I'm sorry, he is in a meeting.", "I'm sorry, he are in a meeting.", "I'm sorry, he am in a meeting."],
      answer: 1, explanation: "Với he dùng is: he is in a meeting (he's in a meeting). Thiếu động từ hoặc dùng are / am đều sai." },
    { id: "p6", type: "gap", prompt: "Is Mai working now? – Yes, ___.",
      options: ["she is", "she does", "she working", "she works"],
      answer: 0, explanation: "Câu hỏi Is Mai working? thì trả lời ngắn Yes, she is. Không dùng does hay works, và không nhắc lại working." },
    { id: "p7", type: "choice", prompt: "What is the -ing form of “sit”?",
      options: ["siting", "sitting", "sitteng", "sitin"],
      answer: 1, explanation: "Động từ ngắn kết thúc bằng một nguyên âm và một phụ âm thì gấp đôi phụ âm cuối: sit → sitting." },
    { id: "p8", type: "choice", prompt: "What do you say to ask someone to wait on the phone?",
      options: ["Hang up, please.", "Go away, please.", "Speak now, please.", "Hold on, please."],
      answer: 3, explanation: "Hold on, please. nghĩa là chờ một chút. Hang up nghĩa là cúp máy, nên Hang up, please sai nghĩa." }
  ],

  writing: {
    title: "A short note to Lan",
    task: "Bạn là Hoa. Bạn gọi cho David nhưng anh đang họp. Hãy viết ghi chú ngắn cho chị Lan để nói chuyện gì đang xảy ra và xin được nói chuyện với David buổi chiều (25–50 từ).",
    requirements: [
      "Chào chị Lan.",
      "Nói bạn đang làm gì: I'm trying… hoặc I'm calling…",
      "Nói David đang ở họp: in a meeting.",
      "Nói David đang làm gì bằng hiện tại tiếp diễn (He's talking…).",
      "Hỏi Can I speak to David…? rồi cảm ơn."
    ],
    minWords: 25,
    maxWords: 50,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Hi / Hello / Dear)", pattern: "\\b(hi|hello|dear)\\b" },
      { label: "Có hiện tại tiếp diễn (am / is / are + V-ing hoặc 's / 'm / 're + V-ing)", pattern: "\\b(am|is|are)\\s+\\w+ing\\b|'(m|s|re)\\s+\\w+ing\\b" },
      { label: "Có cụm in a meeting", pattern: "in a meeting" },
      { label: "Có câu hỏi Can I speak to…?", pattern: "can i speak to[^?]*\\?" },
      { label: "Có lời cảm ơn (Thanks / Thank you)", pattern: "thanks|thank you" }
    ],
    model: [
      "Hi Lan,",
      "I'm trying to call David about the invoice, but he is in a meeting. He's talking to a customer now. Can I speak to David this afternoon? Thanks!",
      "Hoa"
    ]
  },

  review: {
    keyPhrases: [
      { en: "This is Hoa from Accounting.", vi: "Hoa ở phòng Kế toán đây." },
      { en: "Can I speak to David, please?", vi: "Cho tôi nói chuyện với David được không?" },
      { en: "He's in a meeting. He's talking to a customer.", vi: "Anh ấy đang họp. Anh ấy đang nói chuyện với khách hàng." },
      { en: "Hold on, please.", vi: "Vui lòng chờ một chút." },
      { en: "Is Peter working? – Yes, he is.", vi: "Peter đang làm việc phải không? – Đúng vậy." },
      { en: "Can I call you back in five minutes?", vi: "Năm phút nữa tôi gọi lại bạn được không?" }
    ]
  }
});
