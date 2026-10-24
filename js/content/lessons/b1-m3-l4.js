/* =========================================================
   B1 · Module 3 (Compensation, Benefits and Attendance) · Bài 4
   "Attendance issues"
   Nối tiếp B1-M3-L3: Khanh (HR Assistant) kiểm tra bảng chấm công và
   thấy chị Thảo thiếu bản ghi chấm công vào một ngày thứ Ba: chị đang
   lái xe đi Hải Phòng thì điện thoại hết pin nên không dùng được ứng dụng
   chấm công; đến văn phòng khách lúc chín giờ rưỡi. Thứ Sáu tuần trước
   chị đến muộn vì xe hỏng trên cầu, đã gọi David ngay. Thời gian nói áng chừng.
   ========================================================= */
window.EOH.registerLesson({
  id: "b1-m3-l4",
  reviewStatus: "approved", // Linh duyệt ngày 23/10/2026
  duration: "40–50 phút",
  scenario: "Khanh (HR Assistant) đang kiểm tra bảng chấm công cuối tháng thì thấy chị Thảo thiếu bản ghi chấm công vào một ngày thứ Ba, và một lần đến muộn vào thứ Sáu tuần trước. Khanh hỏi chị Thảo lý do, rồi gửi chị email xác nhận việc cần làm để điều chỉnh bản ghi.",

  objectives: [
    "Hiểu và dùng 10 từ vựng thường gặp về chấm công và các vấn đề đi làm.",
    "Nghe cuộc trao đổi về bản ghi chấm công còn thiếu, ghi lại lý do và việc cần làm tiếp.",
    "Đọc email xác nhận việc điều chỉnh chấm công, tìm đúng ngày, lý do và hạn xử lý.",
    "Dùng quá khứ tiếp diễn và quá khứ đơn (I was driving when my phone died).",
    "Viết email giải thích lý do đến muộn bằng quá khứ tiếp diễn và quá khứ đơn."
  ],

  vocabulary: [
    { word: "clock in", ipa: "/klɑːk ɪn/", pos: "phrasal verb", meaning: "chấm công khi đến (giờ vào làm)",
      example: "Employees use an app to clock in.", exampleVi: "Nhân viên dùng ứng dụng để chấm công khi đến." },
    { word: "clock out", ipa: "/klɑːk aʊt/", pos: "phrasal verb", meaning: "chấm công khi về",
      example: "Don't forget to clock out when you leave.", exampleVi: "Đừng quên chấm công khi ra về." },
    { word: "late arrival", ipa: "/leɪt əˈraɪvəl/", pos: "noun", meaning: "việc đến muộn",
      example: "One late arrival with a good reason is fine.", exampleVi: "Một lần đến muộn có lý do chính đáng thì không sao." },
    { word: "missing record", ipa: "/ˈmɪsɪŋ ˈrekərd/", pos: "noun", meaning: "bản ghi bị thiếu",
      example: "There is a missing record for Tuesday.", exampleVi: "Có một bản ghi bị thiếu vào ngày thứ Ba." },
    { word: "explanation", ipa: "/ˌekspləˈneɪʃən/", pos: "noun", meaning: "lời giải thích",
      example: "Please give a short explanation.", exampleVi: "Vui lòng đưa ra một lời giải thích ngắn." },
    { word: "correct", ipa: "/kəˈrekt/", pos: "verb", meaning: "sửa, điều chỉnh cho đúng",
      example: "HR can correct the record if the manager approves.", exampleVi: "Phòng Nhân sự có thể sửa bản ghi nếu quản lý duyệt." },
    { word: "absence", ipa: "/ˈæbsəns/", pos: "noun", meaning: "sự vắng mặt",
      example: "An absence needs a reason.", exampleVi: "Vắng mặt cần có lý do." },
    { word: "justified", ipa: "/ˈdʒʌstɪfaɪd/", pos: "adjective", meaning: "có lý do chính đáng",
      example: "A late arrival with a good explanation is justified.", exampleVi: "Việc đến muộn có lời giải thích tốt là có lý do chính đáng." },
    { word: "warning", ipa: "/ˈwɔːrnɪŋ/", pos: "noun", meaning: "cảnh cáo, nhắc nhở chính thức",
      example: "We don't need to give a warning this time.", exampleVi: "Lần này chúng tôi không cần cảnh cáo." },
    { word: "break down", ipa: "/breɪk daʊn/", pos: "phrasal verb", meaning: "bị hỏng (xe, máy)",
      example: "My car broke down on the bridge.", exampleVi: "Xe của tôi bị hỏng trên cầu." }
  ],

  pronunciation: {
    groups: [
      {
        title: "Trọng âm của từ",
        text: "Những từ dưới đây hay gặp khi nói về chấm công. Âm tiết in hoa là âm đọc to và dài hơn.",
        items: [
          { word: "explanation", marked: "ex·pla·NA·tion" },
          { word: "absence", marked: "AB·sence", note: "Nhấn âm tiết đầu." },
          { word: "justified", marked: "JUS·ti·fied" },
          { word: "correct (verb)", marked: "cor·RECT" },
          { word: "arrival", marked: "ar·RI·val" },
          { word: "warning", marked: "WARN·ing" }
        ]
      },
      {
        title: "was và were đọc yếu",
        text: "Trong quá khứ tiếp diễn, was /wəz/ và were /wər/ thường đọc yếu; động từ -ing phía sau được nhấn.",
        items: [
          { word: "I was driving", marked: "I /wəz/ DRI·ving" },
          { word: "we were waiting", marked: "we /wər/ WAIT·ing" }
        ]
      }
    ],
    sentences: [
      "I was driving to Hai Phong when my phone battery died.",
      "I was crossing the bridge when my car broke down.",
      "What were you doing at nine-thirty?"
    ]
  },

  listening: {
    title: "A missing clock-in record",
    setting: "Phòng Nhân sự, cuối tháng. Khanh kiểm tra bảng chấm công và hỏi chị Thảo về một bản ghi còn thiếu.",
    speakers: { khanh: "Khanh (HR Assistant)", thao: "Thao (Sales Executive)" },
    lines: [
      { s: "khanh", text: "Thao, I'm checking the attendance records. There is no clock-in record for you on Tuesday.",
        vi: "Thảo, em đang kiểm tra bảng chấm công. Không có bản ghi chấm công nào của chị vào thứ Ba." },
      { s: "thao", text: "Oh, I'm sorry. I was driving to Hai Phong when my phone battery died, so I couldn't use the clock-in app.",
        vi: "Ồ, xin lỗi em. Chị đang lái xe đi Hải Phòng thì điện thoại hết pin nên chị không dùng được ứng dụng chấm công." },
      { s: "khanh", text: "I see. What time did you arrive at the client's office?",
        vi: "Em hiểu rồi. Chị đến văn phòng khách hàng lúc mấy giờ?" },
      { s: "thao", text: "At nine-thirty. I was waiting in the reception area when David called me about a quotation.",
        vi: "Lúc chín giờ rưỡi. Chị đang đợi ở quầy lễ tân thì David gọi cho chị về một bảng báo giá." },
      { s: "khanh", text: "So you were working at that time. Did anyone see you there?",
        vi: "Vậy lúc đó chị đang làm việc. Có ai nhìn thấy chị ở đó không?" },
      { s: "thao", text: "Yes. The client's manager was talking to me at nine thirty-five, and I have his email.",
        vi: "Có. Quản lý của khách đang nói chuyện với chị lúc chín giờ ba mươi lăm, và chị có email của anh ấy." },
      { s: "khanh", text: "Good. Please send me the email as evidence. Your manager has to approve the correction.",
        vi: "Tốt. Chị gửi em email đó làm bằng chứng nhé. Quản lý của chị phải duyệt việc điều chỉnh." },
      { s: "thao", text: "No problem. Also, last Friday I was late because my car broke down. I was crossing the bridge when it stopped.",
        vi: "Không vấn đề gì. Ngoài ra, thứ Sáu tuần trước chị đến muộn vì xe bị hỏng. Chị đang qua cầu thì xe dừng." },
      { s: "khanh", text: "Did you inform David?",
        vi: "Chị có báo cho David không?" },
      { s: "thao", text: "Yes. I called him as soon as it happened.",
        vi: "Có. Chị gọi anh ấy ngay khi chuyện xảy ra." },
      { s: "khanh", text: "That's helpful. A late arrival with a good explanation is justified. We don't need to give a warning.",
        vi: "Như vậy rất tốt. Đến muộn có lời giải thích hợp lý là có lý do chính đáng. Chúng ta không cần cảnh cáo." },
      { s: "thao", text: "Thank you. I will charge my phone before I leave next time.",
        vi: "Cảm ơn em. Lần sau chị sẽ sạc điện thoại trước khi đi." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "Why was there no clock-in record on Tuesday?",
        options: ["Thao forgot to go to work", "Thao's phone battery died while she was driving", "The app was closed", "Thao was on leave"],
        answer: 1, explanation: "Chị Thảo nói: “I was driving to Hai Phong when my phone battery died, so I couldn't use the clock-in app.”" },
      { id: "l2", type: "choice", prompt: "What does Khanh ask Thao to send as evidence?",
        options: ["A photo of the car", "A letter from David", "A medical certificate", "The client's manager's email"],
        answer: 3, explanation: "Khanh nói: “Please send me the email as evidence.” – email của quản lý bên khách hàng." },
      { id: "l3", type: "choice", prompt: "Why was Thao late last Friday?",
        options: ["Her car broke down", "She was ill", "She was in a meeting", "She was shopping"],
        answer: 0, explanation: "“Last Friday I was late because my car broke down. I was crossing the bridge when it stopped.”" }
    ]
  },

  reading: {
    title: "Attendance correction",
    intro: "Email Khanh gửi chị Thảo sau buổi trao đổi. Đọc và tìm lý do của hai ngày, việc cần làm và kết quả.",
    email: {
      from: "Khanh Vu <khanh.vu@riverside-trading.example>",
      to: "Thao Ngo",
      date: "Friday",
      subject: "Attendance records – next steps",
      greeting: "Dear Thao,",
      paragraphs: [
        "Thank you for explaining the two attendance issues this morning. Here is a short summary.",
        "Tuesday – no clock-in record. You told me that you were driving to Hai Phong when your phone battery died, so you could not clock in. You arrived at the client's office at 9:30. The client's manager was talking to you at 9:35, and David called you while you were waiting in the reception area."
      ],
      list: [
        "Please send me the client's email as evidence.",
        "David will approve the correction. I will update the record as soon as I receive his approval.",
        "Last Friday – late arrival (40 minutes). You were crossing the bridge when your car broke down, and you called David immediately. This late arrival is justified, so there will be no warning."
      ],
      after: [
        "Please send the email by tomorrow, so I can close the attendance records for this month."
      ],
      closing: "Best regards,",
      signature: ["Khanh Vu", "HR Assistant, Riverside Trading"]
    },
    glossary: [
      { term: "next steps", vi: "các bước tiếp theo" },
      { term: "evidence", vi: "bằng chứng" },
      { term: "immediately", vi: "ngay lập tức" },
      { term: "update the record", vi: "cập nhật bản ghi" },
      { term: "close the records", vi: "chốt sổ ghi chép" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "What does Thao need to send to Khanh?",
        options: ["A medical certificate", "The client's email", "A new clock-in app", "A warning letter"],
        answer: 1, explanation: "“Please send me the client's email as evidence.”" },
      { id: "r2", type: "choice", prompt: "Who will approve the correction?",
        options: ["Lan", "Hoa", "David", "Peter"],
        answer: 2, explanation: "“David will approve the correction.” Khanh chỉ cập nhật bản ghi sau khi nhận được sự chấp thuận đó." },
      { id: "r3", type: "choice", prompt: "Which statement is TRUE?",
        options: ["Thao will receive a warning for the late arrival.", "Thao's car broke down while she was crossing the bridge.", "Thao arrived at the client's office at 10:30.", "Thao did not call David."],
        answer: 1, explanation: "“You were crossing the bridge when your car broke down.” Sẽ không có cảnh cáo, chị Thảo đến văn phòng khách lúc 9:30 và đã gọi David ngay." }
    ]
  },

  grammar: {
    title: "Past continuous and past simple",
    titleVi: "Quá khứ tiếp diễn và quá khứ đơn",
    intro: "Khi giải thích vì sao đi làm muộn hoặc thiếu chấm công, bạn kể việc đang diễn ra thì có việc khác xen vào. Bốn mẫu dưới đây có trong cuộc trao đổi và email bạn vừa học.",
    patterns: [
      { form: "was / were + V-ing  (hành động đang diễn ra trong quá khứ)", use: "Nói việc đang diễn ra tại một thời điểm hoặc trong một khoảng thời gian ở quá khứ.",
        examples: ["I was driving to Hai Phong.", "The client's manager was talking to me at nine thirty-five."] },
      { form: "was / were + V-ing + when + quá khứ đơn", use: "Việc đang diễn ra (quá khứ tiếp diễn) thì có việc ngắn xen vào (quá khứ đơn).",
        examples: ["I was driving when my phone battery died.", "I was crossing the bridge when my car broke down."] },
      { form: "while + quá khứ tiếp diễn, quá khứ đơn", use: "while đi với việc kéo dài (quá khứ tiếp diễn). Hai việc đồng thời cũng dùng được: while … was … -ing, … was … -ing.",
        examples: ["While I was waiting, David called me.", "While I was driving, my phone battery died."] },
      { form: "What were you doing …?   Was he …-ing …?", use: "Câu hỏi về việc đang diễn ra trong quá khứ. Trả lời ngắn: Yes, I was. / No, he wasn't.",
        examples: ["What were you doing at nine-thirty?", "Were you waiting in the reception area when he called?"] }
    ],
    mistakes: [
      { wrong: "I was drive to Hai Phong when my phone died.", right: "I was driving to Hai Phong when my phone died.", note: "Sau was / were dùng V-ing." },
      { wrong: "I was crossing the bridge when my car was breaking down.", right: "I was crossing the bridge when my car broke down.", note: "Việc xen vào ngắn, xảy ra một lần → quá khứ đơn." },
      { wrong: "I called David as soon as the car was stopping.", right: "I called David as soon as the car stopped.", note: "as soon as + quá khứ đơn; không dùng quá khứ tiếp diễn." },
      { wrong: "I waited in the reception area when David called me.", right: "I was waiting in the reception area when David called me.", note: "Câu sai vẫn đúng ngữ pháp nhưng không cho thấy việc đang diễn ra khi David gọi; việc đang diễn ra (đang đợi) dùng quá khứ tiếp diễn." }
    ],
    tip: "Khi giải thích với phòng Nhân sự, hãy kể ngắn gọn theo thứ tự: bạn đang làm gì (quá khứ tiếp diễn), chuyện gì xảy ra (quá khứ đơn), rồi bạn đã làm gì (quá khứ đơn). Kèm bằng chứng như email hoặc tin nhắn sẽ giúp bản ghi được điều chỉnh nhanh hơn."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "At that moment I ___ to Hai Phong when my phone battery died.",
      options: ["drove", "was driving", "am driving", "have driven"],
      answer: 1, explanation: "Việc đang diễn ra trong quá khứ thì có việc khác xen vào → was driving." },
    { id: "p2", type: "gap", prompt: "At that moment she ___ in the reception area when David called her.",
      options: ["waited", "waits", "was waiting", "has waited"],
      answer: 2, explanation: "Việc đang diễn ra khi David gọi → quá khứ tiếp diễn: was waiting." },
    { id: "p3", type: "gap", prompt: "Yesterday I called you at nine-thirty. What ___ you doing?",
      options: ["did", "are", "was", "were"],
      answer: 3, explanation: "Yesterday là quá khứ, nên dùng quá khứ tiếp diễn với you → were: What were you doing?" },
    { id: "p4", type: "gap", prompt: "I was crossing the bridge ___ my car broke down.",
      options: ["when", "while", "during", "because"],
      answer: 0, explanation: "when + quá khứ đơn (broke down) nói việc ngắn xen vào. while đi với việc kéo dài." },
    { id: "p5", type: "choice", prompt: "Which sentence is correct?",
      options: ["I was drive to work when it started to rain.", "I driving to work when it started to rain.", "I was driving to work when it started to rain.", "I driven to work when it started to rain."],
      answer: 2, explanation: "Cấu trúc đúng: was driving + when + quá khứ đơn." },
    { id: "p6", type: "gap", prompt: "Employees use an app to ___ when they arrive at work.",
      options: ["clock in", "hand in", "take on", "carry over"],
      answer: 0, explanation: "Clock in = chấm công khi đến. Hand in là nộp, take on là đảm nhận, carry over là chuyển sang kỳ sau." },
    { id: "p7", type: "gap", prompt: "An absence with a good reason is ___.",
      options: ["unused", "confidential", "justified", "enclosed"],
      answer: 2, explanation: "Justified = có lý do chính đáng." },
    { id: "p8", type: "gap", prompt: "A record that is not in the system is a ___ record.",
      options: ["closing", "missing", "relevant", "internal"],
      answer: 1, explanation: "Missing record = bản ghi bị thiếu." },
    { id: "p9", type: "choice", context: "He was late because his car broke down.", prompt: "What does “break down” mean here?",
      options: ["The car was very fast.", "The car was cleaned.", "The car was sold.", "The car stopped working."],
      answer: 3, explanation: "Break down = (máy móc, xe) bị hỏng, ngừng hoạt động." },
    { id: "p10", type: "gap", prompt: "She called her manager as soon as the car ___.",
      options: ["breaks down", "broke down", "was breaking down", "has broken down"],
      answer: 1, explanation: "Kể lại sự việc đã xảy ra → quá khứ đơn: broke down." }
  ],

  writing: {
    title: "Explain why you were late",
    task: "Bạn là Khanh. Sáng nay bạn đến muộn bốn mươi phút vì một chiếc xe tải hỏng trên cầu. Viết email gửi anh Hai (80–120 từ): xin lỗi, giải thích bạn đang làm gì thì chuyện xảy ra, nói bạn đã báo cho chị Lan, nói bạn đến lúc chín giờ bốn mươi và sẽ làm bù giờ.",
    requirements: [
      "Mở đầu bằng lời chào và lời xin lỗi.",
      "Có ít nhất một câu với was / were + V-ing + when + quá khứ đơn.",
      "Có ít nhất một câu với while.",
      "Nói bạn đã báo cho ai (called / told / informed).",
      "Cảm ơn người đọc.",
      "Kết thúc email và ký tên."
    ],
    minWords: 80,
    maxWords: 120,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Dear … / Hi …)", pattern: "\\bdear\\b|\\bhi\\b" },
      { label: "Có lời xin lỗi (sorry / apologize)", pattern: "\\b(sorry|apologi[sz]e)\\b" },
      { label: "Có was / were + V-ing", pattern: "\\b(was|were) \\w+ing\\b" },
      { label: "Có when hoặc while", pattern: "\\b(when|while)\\b" },
      { label: "Nói đã báo cho ai (called / informed / told)", pattern: "\\b(called|informed|told|phoned|emailed)\\b" },
      { label: "Có lời kết (Best regards …)", pattern: "regards|sincerely|best wishes" }
    ],
    model: [
      "Dear Mr. Hai,",
      "I am sorry that I arrived forty minutes late today. I was driving to the office when a truck broke down on the bridge. While I was waiting in the traffic jam, I called Lan to inform her, and she said it was fine.",
      "I was trying to find another road when the traffic started to move again. I arrived at nine-forty and worked until six to make up the time.",
      "Thank you for understanding. It will not happen again.",
      "Best regards,",
      "Khanh Vu"
    ]
  },

  review: {
    keyPhrases: [
      { en: "I was driving to Hai Phong when my phone battery died.", vi: "Tôi đang lái xe đi Hải Phòng thì điện thoại hết pin." },
      { en: "I was waiting in the reception area when David called me.", vi: "Tôi đang đợi ở quầy lễ tân thì David gọi cho tôi." },
      { en: "What were you doing at nine-thirty?", vi: "Lúc chín giờ rưỡi bạn đang làm gì?" },
      { en: "My car broke down on the bridge.", vi: "Xe của tôi bị hỏng trên cầu." },
      { en: "A late arrival with a good explanation is justified.", vi: "Việc đến muộn có lời giải thích tốt là có lý do chính đáng." },
      { en: "There is a missing record for Tuesday.", vi: "Có một bản ghi bị thiếu vào ngày thứ Ba." }
    ]
  }
});
