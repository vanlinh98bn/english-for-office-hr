/* =========================================================
   B1 · Module 4 (Training and Employee Relations) · Bài 3
   "Handling complaints"
   Nối tiếp B1-M4-L2: Minh Vo (kế toán, tầng 2) phàn nàn máy lạnh ở tầng
   hai hỏng cả tuần, đã email bộ phận kỹ thuật hai lần mà chưa ai trả lời.
   Khanh Vu (HR Assistant) lắng nghe, xin lỗi, hứa xử lý trong ngày, tạm
   thời sắp xếp quạt, và sẽ báo lại cuối ngày; nếu thợ không đến được
   thì báo chị Lan. Thời gian nói áng chừng.
   ========================================================= */
window.EOH.registerLesson({
  id: "b1-m4-l3",
  reviewStatus: "approved", // Linh duyệt ngày 23/10/2026
  duration: "40–50 phút",
  scenario: "Máy lạnh ở tầng hai (phòng Kế toán) đã hỏng gần một tuần, đúng lúc cuối tháng bận rộn. Anh Minh đến gặp Khanh (HR Assistant) để phàn nàn vì đã gửi email cho bộ phận kỹ thuật hai lần mà chưa ai trả lời. Khanh lắng nghe, xin lỗi, hứa xử lý và hẹn báo lại, rồi gửi anh Minh email xác nhận.",

  objectives: [
    "Hiểu và dùng 10 từ vựng thường gặp khi tiếp nhận và giải quyết khiếu nại.",
    "Nghe cuộc trao đổi khi một nhân viên phàn nàn, ghi lại vấn đề, giải pháp tạm thời và hạn trả lời.",
    "Đọc email trả lời khiếu nại, tìm đúng việc đã làm, việc sẽ làm và thời hạn.",
    "Dùng câu thể hiện sự thông cảm (I understand how frustrating that must be), xin lỗi (I apologize for…) và hứa hành động (I'll look into it, I'll get back to you by…).",
    "Viết email trả lời một khiếu nại một cách lịch sự và rõ ràng."
  ],

  vocabulary: [
    { word: "complaint", ipa: "/kəmˈpleɪnt/", pos: "noun", meaning: "lời phàn nàn, khiếu nại",
      example: "Minh made a complaint about the air conditioning.", exampleVi: "Anh Minh phàn nàn về máy lạnh." },
    { word: "apologize", ipa: "/əˈpɑːlədʒaɪz/", pos: "verb", meaning: "xin lỗi",
      example: "I apologize for the delay.", exampleVi: "Tôi xin lỗi vì sự chậm trễ." },
    { word: "look into", ipa: "/lʊk ˈɪntuː/", pos: "phrasal verb", meaning: "xem xét, tìm hiểu để giải quyết",
      example: "I'll look into it today.", exampleVi: "Hôm nay tôi sẽ xem xét việc này." },
    { word: "resolve", ipa: "/rɪˈzɑːlv/", pos: "verb", meaning: "giải quyết (xong) vấn đề",
      example: "We want to resolve the problem quickly.", exampleVi: "Chúng tôi muốn giải quyết vấn đề nhanh chóng." },
    { word: "get back to", ipa: "/ɡet bæk tuː/", pos: "phrasal verb", meaning: "liên hệ lại, trả lời lại (ai)",
      example: "I'll get back to you by the end of the day.", exampleVi: "Tôi sẽ trả lời lại bạn trước cuối ngày." },
    { word: "in the meantime", ipa: "/ɪn ðə ˈmiːntaɪm/", pos: "phrase", meaning: "trong lúc chờ đợi",
      example: "In the meantime, I'll arrange some fans.", exampleVi: "Trong lúc chờ, tôi sẽ sắp xếp mấy cái quạt." },
    { word: "escalate", ipa: "/ˈeskəleɪt/", pos: "verb", meaning: "chuyển lên cấp cao hơn để xử lý",
      example: "If it is not fixed, I'll escalate it to Lan.", exampleVi: "Nếu chưa sửa được, tôi sẽ chuyển lên chị Lan." },
    { word: "acknowledge", ipa: "/əkˈnɑːlɪdʒ/", pos: "verb", meaning: "ghi nhận, công nhận (một vấn đề)",
      example: "First, acknowledge the problem and thank the person.", exampleVi: "Trước hết, hãy ghi nhận vấn đề và cảm ơn người đó." },
    { word: "frustrating", ipa: "/ˈfrʌstreɪtɪŋ/", pos: "adjective", meaning: "gây bực bội, nản lòng",
      example: "I understand how frustrating that must be.", exampleVi: "Tôi hiểu việc đó chắc chắn gây bực bội thế nào." },
    { word: "temporary solution", ipa: "/ˈtempəreri səˈluːʃən/", pos: "noun", meaning: "giải pháp tạm thời",
      example: "Fans are a temporary solution.", exampleVi: "Quạt là một giải pháp tạm thời." }
  ],

  pronunciation: {
    groups: [
      {
        title: "Trọng âm của từ",
        text: "Những từ dưới đây hay gặp khi xử lý khiếu nại. Âm tiết in hoa là âm đọc to và dài hơn.",
        items: [
          { word: "complaint", marked: "com·PLAINT" },
          { word: "apologize", marked: "a·POL·o·gize" },
          { word: "resolve", marked: "re·SOLVE" },
          { word: "escalate", marked: "ES·ca·late" },
          { word: "acknowledge", marked: "ack·NOWL·edge" },
          { word: "frustrating", marked: "FRUS·tra·ting" }
        ]
      },
      {
        title: "Giọng thông cảm",
        text: "Khi bày tỏ sự thông cảm, nói chậm hơn và hạ giọng ở cuối câu để nghe chân thành. Nhấn từ cảm xúc (sorry, frustrating).",
        items: [
          { word: "I'm so SORRY to hear that.", marked: "I'm so SOR·ry (giọng đi xuống)" },
          { word: "That must be very FRUS·tra·ting.", marked: "very FRUS·tra·ting (giọng đi xuống)" }
        ]
      }
    ],
    sentences: [
      "I'm sorry to hear that. I understand how frustrating it must be.",
      "I'll look into it today and get back to you by the end of the day.",
      "In the meantime, I'll arrange some fans."
    ]
  },

  listening: {
    title: "A complaint about the air conditioning",
    setting: "Phòng Nhân sự, buổi chiều. Anh Minh đến gặp Khanh để phàn nàn.",
    speakers: { minh: "Minh (Accountant)", khanh: "Khanh (HR Assistant)" },
    lines: [
      { s: "minh", text: "Khanh, do you have a minute? I'd like to make a complaint about the air conditioning on the second floor.",
        vi: "Khanh, em có rảnh chút không? Anh muốn phàn nàn về máy lạnh ở tầng hai." },
      { s: "khanh", text: "Of course, Minh. I'm sorry to hear that. What's happening?",
        vi: "Dạ được ạ, anh Minh. Em rất tiếc khi nghe điều đó. Có chuyện gì vậy anh?" },
      { s: "minh", text: "It's been broken for a week. It's very hot, and it's difficult to concentrate, especially at the end of the month.",
        vi: "Nó hỏng cả tuần rồi. Rất nóng, và khó tập trung, nhất là vào cuối tháng." },
      { s: "khanh", text: "I understand how frustrating that must be. Have you told anyone about it?",
        vi: "Em hiểu việc đó chắc chắn gây bực bội thế nào. Anh đã báo cho ai chưa ạ?" },
      { s: "minh", text: "I emailed the facilities team twice, but nobody replied.",
        vi: "Anh đã email cho bộ phận kỹ thuật hai lần nhưng chưa ai trả lời." },
      { s: "khanh", text: "I apologize for that. I'll look into it today.",
        vi: "Em xin lỗi anh về điều đó. Hôm nay em sẽ xem xét ngay." },
      { s: "minh", text: "Thank you. Also, some people are working in the meeting room because of the heat.",
        vi: "Cảm ơn em. Ngoài ra, một số người đang làm việc trong phòng họp vì nóng." },
      { s: "khanh", text: "That's a good temporary solution. In the meantime, I'll arrange some fans for your office.",
        vi: "Đó là giải pháp tạm thời tốt. Trong lúc chờ, em sẽ sắp xếp vài cái quạt cho phòng anh." },
      { s: "minh", text: "When can I expect an answer?",
        vi: "Khi nào anh có thể nhận được câu trả lời?" },
      { s: "khanh", text: "I'll get back to you by the end of the day. If the technician can't come tomorrow, I'll escalate it to Lan.",
        vi: "Em sẽ trả lời lại anh trước cuối ngày. Nếu thợ không đến được vào ngày mai, em sẽ báo lên chị Lan." },
      { s: "minh", text: "That sounds fair. Thanks for listening.",
        vi: "Nghe hợp lý. Cảm ơn em đã lắng nghe." },
      { s: "khanh", text: "Thank you for telling me. It helps us improve.",
        vi: "Cảm ơn anh đã nói với em. Điều đó giúp chúng ta cải thiện." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "What is Minh's complaint?",
        options: ["The air conditioning has been broken for a week", "The canteen is closed", "His salary is late", "The internet is slow"],
        answer: 0, explanation: "Anh Minh nói: “It's been broken for a week. It's very hot…” Anh muốn phàn nàn về máy lạnh ở tầng hai." },
      { id: "l2", type: "choice", prompt: "What will Khanh do in the meantime?",
        options: ["Close the office", "Send everyone home", "Call the police", "Arrange some fans"],
        answer: 3, explanation: "“In the meantime, I'll arrange some fans for your office.”" },
      { id: "l3", type: "choice", prompt: "When will Khanh get back to Minh?",
        options: ["Next week", "By the end of the day", "Tomorrow morning", "In an hour"],
        answer: 1, explanation: "“I'll get back to you by the end of the day.” Nếu thợ không đến được thì Khanh sẽ báo lên chị Lan." }
    ]
  },

  reading: {
    title: "Replying to a complaint",
    intro: "Email Khanh gửi anh Minh sau cuộc trao đổi. Đọc và tìm việc đã làm, việc sẽ làm và thời hạn.",
    email: {
      from: "Khanh Vu <khanh.vu@riverside-trading.example>",
      to: "Minh Vo",
      date: "Thursday",
      subject: "Air conditioning on the second floor",
      greeting: "Dear Minh,",
      paragraphs: [
        "Thank you for telling me about the air conditioning on the second floor. I'm sorry to hear that it has been broken for a week, and I understand how frustrating that must be, especially at the end of the month. I apologize that your two emails were not answered.",
        "Here is what I have done and what happens next:"
      ],
      list: [
        "I have contacted the facilities team and asked for a technician to come tomorrow morning.",
        "In the meantime, I have arranged four fans for the Accounting office.",
        "If the technician cannot come tomorrow, I will escalate the problem to Lan."
      ],
      after: [
        "I will get back to you by the end of the day tomorrow with an update. If anything changes before then, I will let you know immediately."
      ],
      closing: "Best regards,",
      signature: ["Khanh Vu", "HR Assistant, Riverside Trading"]
    },
    glossary: [
      { term: "contact", vi: "liên hệ" },
      { term: "technician", vi: "kỹ thuật viên, thợ" },
      { term: "update", vi: "thông tin cập nhật" },
      { term: "let you know", vi: "báo cho bạn biết" },
      { term: "immediately", vi: "ngay lập tức" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "Why is Khanh writing to Minh?",
        options: ["To reply to his complaint and explain the next steps", "To invite him to a meeting", "To ask him to repair the air conditioning", "To announce a new office"],
        answer: 0, explanation: "Thư xin lỗi, nêu việc đã làm và việc sẽ làm để giải quyết khiếu nại." },
      { id: "r2", type: "choice", prompt: "What has Khanh arranged for the Accounting office?",
        options: ["A new air conditioner", "Four fans", "A meeting room", "A day off"],
        answer: 1, explanation: "“I have arranged four fans for the Accounting office.”" },
      { id: "r3", type: "choice", prompt: "What will Khanh do if the technician cannot come tomorrow?",
        options: ["Cancel the repair", "Ask Minh to repair it", "Escalate the problem to Lan", "Close the second floor"],
        answer: 2, explanation: "“If the technician cannot come tomorrow, I will escalate the problem to Lan.”" }
    ]
  },

  grammar: {
    title: "Empathy language and promises",
    titleVi: "Ngôn ngữ thông cảm, xin lỗi và hứa hành động",
    intro: "Khi tiếp nhận khiếu nại, cách bạn nói quan trọng không kém việc bạn làm. Bốn nhóm câu dưới đây có trong cuộc trao đổi và email bạn vừa học.",
    patterns: [
      { form: "I'm sorry to hear that.   ·   I understand how + tính từ + that must be.   ·   That sounds + tính từ.", use: "Thể hiện sự thông cảm trước khi nói về giải pháp.",
        examples: ["I'm sorry to hear that.", "I understand how frustrating that must be."] },
      { form: "I apologize for + danh từ / V-ing", use: "Xin lỗi trang trọng. Sau for dùng danh từ hoặc V-ing, không dùng to + động từ.",
        examples: ["I apologize for the delay.", "I apologize for not replying earlier."] },
      { form: "I'll look into it.   ·   I'll get back to you by + thời gian.   ·   I'll let you know as soon as …", use: "Hứa hành động cụ thể, kèm thời hạn. Dùng will (’ll) vì đây là lời hứa tại lúc nói.",
        examples: ["I'll look into it today.", "I'll get back to you by the end of the day."] },
      { form: "In the meantime, … / If …, I'll escalate it.", use: "Nói giải pháp tạm thời và bước tiếp theo nếu vẫn chưa xong.",
        examples: ["In the meantime, I'll arrange some fans.", "If the technician can't come tomorrow, I'll escalate it to Lan."] }
    ],
    mistakes: [
      { wrong: "I look into it today.", right: "I'll look into it today.", note: "Lời hứa dùng will: I'll look into it." },
      { wrong: "I'm sorry for hear that.", right: "I'm sorry to hear that.", note: "Cụm cố định: sorry to hear that." },
      { wrong: "I apologize to the delay.", right: "I apologize for the delay.", note: "apologize for + lý do. To dùng cho người: apologize to you." },
      { wrong: "I'll back to you tomorrow.", right: "I'll get back to you tomorrow.", note: "Cụm động từ: get back to someone." }
    ],
    tip: "Cách xử lý một khiếu nại gồm bốn bước: lắng nghe và thông cảm, xin lỗi nếu có lỗi, hứa hành động cụ thể có thời hạn, rồi giữ lời hứa bằng cách báo lại đúng hẹn. Đừng hứa điều bạn không chắc làm được."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "I'm sorry ___ hear that you had a problem.",
      options: ["for", "to", "of", "with"],
      answer: 1, explanation: "Cụm cố định: I'm sorry to hear that." },
    { id: "p2", type: "gap", prompt: "I apologize ___ the delay.",
      options: ["for", "to", "at", "by"],
      answer: 0, explanation: "apologize for + lý do (the delay)." },
    { id: "p3", type: "gap", prompt: "I'll ___ into it today.",
      options: ["see", "watch", "look", "find"],
      answer: 2, explanation: "Cụm động từ: look into = xem xét để giải quyết." },
    { id: "p4", type: "gap", prompt: "I'll get ___ to you by the end of the day.",
      options: ["up", "out", "on", "back"],
      answer: 3, explanation: "get back to someone = liên hệ lại, trả lời lại." },
    { id: "p5", type: "choice", prompt: "Which sentence is the best response to a complaint?",
      options: ["That's not my problem.", "You are wrong.", "Please wait.", "I understand how frustrating that must be. I'll look into it."],
      answer: 3, explanation: "Câu tốt nhất thể hiện thông cảm và hứa hành động. Các câu còn lại thiếu lịch sự hoặc không giải quyết vấn đề." },
    { id: "p6", type: "gap", prompt: "A formal statement that you are not happy about something is a ___.",
      options: ["complaint", "outcome", "budget", "venue"],
      answer: 0, explanation: "Complaint = lời phàn nàn, khiếu nại." },
    { id: "p7", type: "gap", prompt: "___, we'll bring some fans while the technician is on the way.",
      options: ["Although", "Unless", "In the meantime", "Until"],
      answer: 2, explanation: "In the meantime = trong lúc chờ đợi. Các từ còn lại không đứng đầu câu với nghĩa này." },
    { id: "p8", type: "gap", prompt: "If the technician can't come, I'll ___ the problem to my manager.",
      options: ["resign", "escalate", "enroll", "expire"],
      answer: 1, explanation: "Escalate = chuyển vấn đề lên cấp cao hơn." },
    { id: "p9", type: "gap", prompt: "Fans are a ___ solution until the air conditioning is repaired.",
      options: ["permanent", "final", "expensive", "temporary"],
      answer: 3, explanation: "Temporary solution = giải pháp tạm thời, dùng trong lúc chờ sửa." },
    { id: "p10", type: "choice", prompt: "Which phrase shows empathy?",
      options: ["I understand how frustrating that must be.", "That is your mistake.", "I will not discuss it.", "See you tomorrow."],
      answer: 0, explanation: "“I understand how frustrating that must be” thể hiện sự thông cảm với cảm xúc của người khác." }
  ],

  writing: {
    title: "Reply to a complaint",
    task: "Bạn là Khanh. Anh Sam (IT Support) phàn nàn rằng máy chiếu ở Room 205 đã hỏng hai tuần, ảnh hưởng đến các buổi đào tạo máy tính. Viết email trả lời Sam (80–120 từ): thể hiện sự thông cảm và xin lỗi, hứa xem xét và hỏi nhà cung cấp ngày sửa, nói giải pháp tạm thời (dùng máy chiếu ở Room 301) và hẹn báo lại.",
    requirements: [
      "Mở đầu bằng lời chào và lời cảm ơn Sam đã báo.",
      "Có câu thể hiện sự thông cảm hoặc xin lỗi (I'm sorry to hear that / I apologize for…).",
      "Có câu hứa với I'll look into it / I will look into it.",
      "Có In the meantime và một giải pháp tạm thời.",
      "Có câu hẹn báo lại với get back to you.",
      "Kết thúc email và ký tên."
    ],
    minWords: 80,
    maxWords: 120,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Dear … / Hi …)", pattern: "\\bdear\\b|\\bhi\\b" },
      { label: "Có thông cảm / xin lỗi (sorry / apologize / understand)", pattern: "\\b(sorry|apologi[sz]e|understand)\\b" },
      { label: "Có look into it", pattern: "look into" },
      { label: "Có in the meantime", pattern: "in the meantime" },
      { label: "Có get back to you", pattern: "get back to you" },
      { label: "Có lời kết (Best regards …)", pattern: "regards|sincerely|best wishes" }
    ],
    model: [
      "Dear Sam,",
      "Thank you for telling me about the projector in Room 205. I am sorry to hear that it has been broken for two weeks, and I understand how frustrating that must be.",
      "I apologize for the inconvenience. I will look into it today and ask the supplier for a repair date. In the meantime, you can use the projector in Room 301. I will get back to you by tomorrow afternoon with an update.",
      "If you have any other problems, please let me know.",
      "Best regards,",
      "Khanh Vu"
    ]
  },

  review: {
    keyPhrases: [
      { en: "I'm sorry to hear that.", vi: "Tôi rất tiếc khi nghe điều đó." },
      { en: "I understand how frustrating that must be.", vi: "Tôi hiểu điều đó chắc chắn gây bực bội thế nào." },
      { en: "I apologize for the delay.", vi: "Tôi xin lỗi vì sự chậm trễ." },
      { en: "I'll look into it today.", vi: "Hôm nay tôi sẽ xem xét việc này." },
      { en: "I'll get back to you by the end of the day.", vi: "Tôi sẽ trả lời lại bạn trước cuối ngày." },
      { en: "In the meantime, I'll arrange some fans.", vi: "Trong lúc chờ, tôi sẽ sắp xếp mấy cái quạt." }
    ]
  }
});
