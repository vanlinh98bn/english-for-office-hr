/* =========================================================
   A1 · Module 3 (Everyday Office English) · Bài 4
   "Short notes and messages"
   Khuôn rút gọn cho A1: 8 từ, 8 câu luyện tập, bài đọc và bài viết ngắn.
   Nối tiếp bài 3: thứ Năm 22/10/2026. Peter gọi anh Minh về một hóa đơn;
   chị Lan muốn gặp Hoa và Minh lúc 2 giờ chiều; David muốn gặp hai người lúc 3 giờ chiều.
   Công ty Riverside Trading và các nhân vật đều là hư cấu.
   ========================================================= */
window.EOH.registerLesson({
  id: "a1-m3-l4",
  reviewStatus: "draft", // "draft" = bản nháp, chưa duyệt
  duration: "20–25 phút",
  scenario: "Sáng thứ Năm, chị Hoa nhận lời nhắn cho anh Minh: Peter hỏi về một hóa đơn. Chị Hoa viết ghi chú cho anh Minh. Anh Minh nhờ chị Hoa báo lại cho chị Lan.",

  objectives: [
    "Dùng đại từ tân ngữ me / him / her / us / them: Please call him back.",
    "Nhớ vị trí đúng: call him back (đại từ đứng giữa), không nói call back him.",
    "Viết ghi chú ngắn và rõ: ai gọi, cần gì, làm gì tiếp theo.",
    "Dùng các từ message, note, tell, leave, give, urgent, later, reply.",
    "Phát âm rõ âm cuối của từ: note, back, call, him, them."
  ],

  vocabulary: [
    { word: "message", ipa: "/ˈmesɪdʒ/", pos: "noun", meaning: "lời nhắn, tin nhắn",
      example: "I have a message for you.", exampleVi: "Tôi có một lời nhắn cho bạn." },
    { word: "note", ipa: "/noʊt/", pos: "noun", meaning: "ghi chú",
      example: "I'm writing a note for Minh.", exampleVi: "Tôi đang viết một ghi chú cho anh Minh." },
    { word: "tell", ipa: "/tel/", pos: "verb", meaning: "nói cho (ai) biết",
      example: "Please tell her we are free.", exampleVi: "Vui lòng nói với chị ấy là chúng ta rảnh." },
    { word: "leave", ipa: "/liːv/", pos: "verb", meaning: "để lại (lời nhắn)",
      example: "Can I leave a message?", exampleVi: "Tôi để lại lời nhắn được không?" },
    { word: "give", ipa: "/ɡɪv/", pos: "verb", meaning: "đưa, cho",
      example: "Please give him the note.", exampleVi: "Vui lòng đưa anh ấy tờ ghi chú." },
    { word: "urgent", ipa: "/ˈɝːdʒənt/", pos: "adjective", meaning: "gấp, khẩn",
      example: "This message is urgent.", exampleVi: "Lời nhắn này gấp." },
    { word: "later", ipa: "/ˈleɪtər/", pos: "adverb", meaning: "sau, lát nữa",
      example: "Please call me later.", exampleVi: "Vui lòng gọi tôi sau nhé." },
    { word: "reply", ipa: "/rɪˈplaɪ/", pos: "verb / noun", meaning: "trả lời; câu trả lời",
      example: "Please reply to me today.", exampleVi: "Vui lòng trả lời tôi trong hôm nay." }
  ],

  pronunciation: {
    groups: [
      {
        title: "Âm cuối /t/, /k/, /l/",
        text: "Người Việt hay bỏ âm cuối khi nói tiếng Anh. Hãy giữ rõ âm cuối, nhất là /t/ và /k/: đặt lưỡi hoặc môi đúng chỗ, rồi dừng lại.",
        items: [
          { word: "note", marked: "/noʊt/", note: "Kết thúc bằng /t/." },
          { word: "back", marked: "/bæk/", note: "Kết thúc bằng /k/." },
          { word: "call", marked: "/kɔːl/", note: "Đầu lưỡi chạm lợi trên để kết thúc /l/." },
          { word: "tell", marked: "/tel/" }
        ]
      },
      {
        title: "Âm cuối của đại từ",
        text: "Đại từ tân ngữ thường đọc nhẹ, nhưng âm cuối vẫn phải nghe rõ.",
        items: [
          { word: "him", marked: "/hɪm/", note: "Khép môi ở cuối." },
          { word: "them", marked: "/ðem/", note: "Khép môi ở cuối." },
          { word: "us", marked: "/ʌs/", note: "Kéo dài âm /s/ nhẹ." },
          { word: "her", marked: "/hɝː/" }
        ]
      }
    ],
    sentences: [
      "Please call him back.",
      "Please give her the note.",
      "Please tell them we are free."
    ]
  },

  listening: {
    title: "A message for Minh",
    setting: "Thứ Năm 22/10, 8 giờ 45 sáng, phòng Kế toán ở tầng 2. Hoa nói với Minh về lời nhắn của Peter.",
    speakers: { hoa: "Hoa (Accountant)", minh: "Minh (Accountant)" },
    lines: [
      { s: "hoa", text: "Good morning, Minh. I have a message for you. Peter wants to talk to you.",
        vi: "Chào buổi sáng, anh Minh. Tôi có một lời nhắn cho anh. Peter muốn nói chuyện với anh." },
      { s: "minh", text: "Good morning, Hoa. What does he want?",
        vi: "Chào buổi sáng, Hoa. Anh ấy cần gì?" },
      { s: "hoa", text: "He has a question about an invoice. Please call him back before ten o'clock.",
        vi: "Anh ấy có một câu hỏi về một hóa đơn. Anh gọi lại cho anh ấy trước mười giờ nhé." },
      { s: "minh", text: "OK. Is he at his desk now?",
        vi: "Được. Bây giờ anh ấy có ở bàn không?" },
      { s: "hoa", text: "Yes, he is. I'm writing the note for you now. Here it is.",
        vi: "Có. Tôi đang viết ghi chú cho anh. Đây ạ." },
      { s: "minh", text: "Thanks. Also, Lan wants to see us. Can you tell her we are free at two o'clock?",
        vi: "Cảm ơn. Ngoài ra chị Lan muốn gặp chúng ta. Chị báo chị ấy là chúng ta rảnh lúc hai giờ được không?" },
      { s: "hoa", text: "Sure. I'm writing a short message to her now.",
        vi: "Được. Bây giờ tôi đang viết một tin nhắn ngắn cho chị ấy." },
      { s: "minh", text: "I'm busy with a report this morning. If David calls, please take a message for me.",
        vi: "Sáng nay tôi bận làm một báo cáo. Nếu David gọi, chị ghi lại lời nhắn giúp tôi nhé." },
      { s: "hoa", text: "No problem. I'm happy to help.",
        vi: "Không sao. Tôi sẵn lòng giúp." },
      { s: "minh", text: "Thanks, Hoa. You are very kind.",
        vi: "Cảm ơn Hoa. Chị thật tốt bụng." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "Why does Peter want to talk to Minh?",
        options: ["He has a question about an invoice.", "He needs some paper.", "He wants some tea.", "He wants to book a room."],
        answer: 0, explanation: "Hoa nói: “He has a question about an invoice.” – Peter có câu hỏi về một hóa đơn. Giấy và trà là chuyện của hai bài trước." },
      { id: "l2", type: "choice", prompt: "When should Minh call Peter?",
        options: ["After lunch", "Before ten o'clock", "At two o'clock", "Before nine o'clock"],
        answer: 1, explanation: "“Please call him back before ten o'clock.” – gọi lại trước mười giờ. Hai giờ chiều là giờ chị Lan muốn gặp hai người." },
      { id: "l3", type: "choice", prompt: "Who wants to see Hoa and Minh?",
        options: ["David", "Peter", "Mai", "Lan"],
        answer: 3, explanation: "Minh nói: “Lan wants to see us.” – chị Lan muốn gặp hai người (us = Minh và Hoa)." }
    ]
  },

  reading: {
    title: "Message from David",
    intro: "Chiều thứ Năm, chị Mai gửi email cho chị Hoa. Anh David nhờ chuyển một lời nhắn. Đọc và tìm giờ, địa điểm.",
    email: {
      from: "Mai Le <mai.le@riverside-trading.example>",
      to: "Hoa Tran",
      date: "Thursday, 22 October",
      subject: "Message from David",
      greeting: "Hi Hoa,",
      paragraphs: [
        "David has a message for you and Minh. He wants to see you both about the Sales invoices."
      ],
      list: [
        "Time: 3:00 p.m. today",
        "Place: David's office, 3rd floor"
      ],
      after: [
        "Please tell Minh. If there is a problem, please call me."
      ],
      closing: "Thank you,",
      signature: ["Mai Le", "Assistant to David Brown"]
    },
    glossary: [
      { term: "both", vi: "cả hai" },
      { term: "Sales invoices", vi: "hóa đơn của nhóm Kinh doanh" },
      { term: "today", vi: "hôm nay" },
      { term: "problem", vi: "vấn đề, trục trặc" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "What time does David want to see Hoa and Minh?",
        options: ["10:00 a.m.", "2:00 p.m.", "3:00 p.m.", "5:00 p.m."],
        answer: 2, explanation: "“Time: 3:00 p.m. today” – 3 giờ chiều hôm nay. 2 giờ chiều là giờ chị Lan muốn gặp." },
      { id: "r2", type: "choice", prompt: "Where is the meeting?",
        options: ["David's office, 3rd floor", "Room 301", "Reception, 5th floor", "The staff canteen"],
        answer: 0, explanation: "“Place: David's office, 3rd floor” – văn phòng anh David ở tầng 3." },
      { id: "r3", type: "choice", prompt: "What should Hoa do after she reads the email?",
        options: ["Call David", "Send the invoices", "Book Room 301", "Tell Minh"],
        answer: 3, explanation: "“Please tell Minh.” – chị Hoa cần báo cho anh Minh. Chỉ khi có vấn đề mới cần gọi chị Mai." }
    ]
  },

  grammar: {
    title: "Object pronouns: me, him, her, us, them",
    titleVi: "Đại từ tân ngữ: me, him, her, us, them",
    intro: "Khi người hoặc nhóm người đã được nhắc đến, ta không lặp lại tên mà dùng đại từ. Sau động từ (call, tell, give, see) ta dùng đại từ tân ngữ, không dùng đại từ chủ ngữ.",
    patterns: [
      { form: "I → me · he → him · she → her · we → us · they → them", use: "Bảng đại từ tân ngữ. You và it giữ nguyên.",
        examples: ["Peter wants to talk to me.", "Lan wants to see us."] },
      { form: "Please + động từ + him / her / them", use: "Nhờ làm gì với một người đã biết.",
        examples: ["Please tell her we are free.", "Please don't call them now."] },
      { form: "call + him / her / them + back", use: "Gọi lại cho ai. Đại từ đứng giữa call và back.",
        examples: ["Please call him back.", "Can you call her back?"] },
      { form: "give + him / her / them + the note", use: "Đưa cho ai cái gì. Đại từ đứng ngay sau give.",
        examples: ["Please give me the note.", "I give them the message."] }
    ],
    mistakes: [
      { wrong: "Please call he back.", right: "Please call him back.", note: "Sau động từ dùng him, không dùng he." },
      { wrong: "Please give I the note.", right: "Please give me the note.", note: "Sau động từ dùng me, không dùng I." },
      { wrong: "Please tell they to come.", right: "Please tell them to come.", note: "Sau tell dùng them, không dùng they." },
      { wrong: "Please call back him.", right: "Please call him back.", note: "Với đại từ, đặt đại từ giữa call và back." }
    ],
    tip: "Ghi chú tốt phải ngắn: ai gọi, cần gì, bạn phải làm gì, và giờ. Ví dụ: “Minh, Peter called. Please call him back before ten.” Không cần viết dài."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "Peter is at his desk. Please call ___ back.",
      options: ["he", "him", "his", "them"],
      answer: 1, explanation: "Peter là một người nam, và sau động từ call dùng đại từ tân ngữ him. “he” là đại từ chủ ngữ; “them” dành cho nhiều người." },
    { id: "p2", type: "gap", prompt: "Lan wants to see Minh and me. Please tell ___ we are free.",
      options: ["she", "hers", "her", "herself"],
      answer: 2, explanation: "Lan là chị (nữ), sau động từ tell dùng đại từ tân ngữ her. “she” là đại từ chủ ngữ." },
    { id: "p3", type: "gap", prompt: "Minh and Hoa are busy. Please don't call ___ now.",
      options: ["them", "they", "their", "he"],
      answer: 0, explanation: "Nhiều người (Minh and Hoa) dùng them sau động từ call. “they” là đại từ chủ ngữ, “their” là tính từ sở hữu." },
    { id: "p4", type: "gap", prompt: "David is here. He wants to see ___.",
      options: ["I", "my", "mine", "me"],
      answer: 3, explanation: "Người nói là người được David muốn gặp, nên dùng đại từ tân ngữ me. “I” là đại từ chủ ngữ." },
    { id: "p5", type: "choice", prompt: "Which sentence is correct?",
      options: ["Please call back him.", "Please call he back.", "Please call him back.", "Please call his back."],
      answer: 2, explanation: "Đúng: call him back. Đại từ đứng giữa call và back. “call he” sai vì dùng đại từ chủ ngữ, “his” là tính từ sở hữu." },
    { id: "p6", type: "gap", prompt: "The message is for Mai. Please give ___ the message.",
      options: ["her", "him", "them", "us"],
      answer: 0, explanation: "Mai là chị (nữ), nên dùng her. “him” dành cho nam, “them” cho nhiều người, “us” là chúng tôi." },
    { id: "p7", type: "choice", prompt: "Which word ends with a clear /t/ sound?",
      options: ["call", "note", "tell", "him"],
      answer: 1, explanation: "note đọc /noʊt/ và kết thúc bằng /t/. call và tell kết thúc bằng /l/, him kết thúc bằng /m/." },
    { id: "p8", type: "choice", prompt: "Which note is correct?",
      options: ["Minh, Lan wants see us at two. – Hoa", "Minh, Lan want to see we at two. – Hoa", "Minh, Lan wants to see our at two. – Hoa", "Minh, Lan wants to see us at two. – Hoa"],
      answer: 3, explanation: "Đúng: Lan wants to see us. Lan là ngôi thứ ba nên dùng wants, và sau see là đại từ tân ngữ us. “see we” và “see our” sai đại từ; “wants see” thiếu to." }
  ],

  writing: {
    title: "A note for Minh",
    task: "Bạn là Hoa. Anh Minh đã ra ngoài. Hãy viết ghi chú để trên bàn anh: Peter gọi vì một hóa đơn, anh cần gọi lại trước 10 giờ, và David muốn gặp hai người lúc 3 giờ chiều (25–50 từ).",
    requirements: [
      "Chào Minh.",
      "Nói Peter gọi và có câu hỏi về hóa đơn.",
      "Nhờ Minh gọi lại: Please call him back…",
      "Dùng ít nhất một đại từ tân ngữ: him, her, them, us hoặc me.",
      "Nói David muốn gặp hai người lúc 3 giờ chiều, rồi cảm ơn."
    ],
    minWords: 25,
    maxWords: 50,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Hi / Hello / Dear)", pattern: "\\b(hi|hello|dear)\\b" },
      { label: "Có nhắc đến Peter", pattern: "\\bpeter\\b" },
      { label: "Có Please call…", pattern: "please call" },
      { label: "Có đại từ tân ngữ (him / her / them / us / me)", pattern: "\\b(him|her|them|us|me)\\b" },
      { label: "Có lời cảm ơn (Thanks / Thank you)", pattern: "thanks|thank you" }
    ],
    model: [
      "Hi Minh,",
      "Peter wants to talk to you. He has a question about an invoice. Please call him back before ten o'clock. David wants to see us at three o'clock today. Thanks!",
      "Hoa"
    ]
  },

  review: {
    keyPhrases: [
      { en: "I have a message for you.", vi: "Tôi có một lời nhắn cho bạn." },
      { en: "Please call him back before ten o'clock.", vi: "Vui lòng gọi lại cho anh ấy trước mười giờ." },
      { en: "Can you tell her we are free at two o'clock?", vi: "Bạn nói với chị ấy là chúng ta rảnh lúc hai giờ được không?" },
      { en: "Lan wants to see us.", vi: "Chị Lan muốn gặp chúng ta." },
      { en: "Please give me the note.", vi: "Vui lòng đưa tôi tờ ghi chú." },
      { en: "If David calls, please take a message for me.", vi: "Nếu David gọi, vui lòng ghi lời nhắn cho tôi." }
    ]
  }
});
