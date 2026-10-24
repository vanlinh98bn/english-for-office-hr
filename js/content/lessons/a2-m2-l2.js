/* =========================================================
   A2 · Module 2 (Emails and Documents) · Bài 2
   "Writing short requests"
   Thứ Ba 17/11/2026. Tuấn cần anh Hải duyệt đơn đặt văn phòng phẩm,
   mượn sạc laptop của Sam, và xin biên lai của Hoa.
   Điểm ngữ pháp: I'd like to… / Could you please…? / I would be grateful if…
   Công ty Riverside Trading và các nhân vật đều là hư cấu.
   ========================================================= */
window.EOH.registerLesson({
  id: "a2-m2-l2",
  reviewStatus: "draft", // "draft" = bản nháp, chưa duyệt
  duration: "35–45 phút",
  scenario: "Thứ Ba 17/11, phòng Nhân sự sắp hết bút và sổ. Tuấn cần anh Hải (Mr. Hai) duyệt đơn đặt văn phòng phẩm, mượn sạc laptop của Sam (IT) và xin biên lai từ Hoa (Kế toán). Anh Hải chỉ cho Tuấn cách viết lời đề nghị lịch sự cho từng người.",

  objectives: [
    "Hiểu và dùng 10 từ vựng thường gặp khi viết lời đề nghị (deadline, approval, urgent…).",
    "Nghe hiểu lời khuyên về cách đề nghị lịch sự với các người khác nhau.",
    "Đọc email đề nghị duyệt đơn đặt hàng và tìm đúng thông tin: lý do, hạn chót, nội dung đơn.",
    "Dùng I'd like to…, Could you please…? và I would be grateful if you could… để đề nghị lịch sự.",
    "Viết email ngắn gửi Sam để mượn đồ và nhờ kiểm tra máy tính."
  ],

  vocabulary: [
    { word: "request", ipa: "/rɪˈkwɛst/", pos: "noun", meaning: "lời đề nghị, yêu cầu",
      example: "I have a small request for you.", exampleVi: "Tôi có một đề nghị nhỏ với bạn." },
    { word: "polite", ipa: "/pəˈlaɪt/", pos: "adjective", meaning: "lịch sự",
      example: "A polite email gets a faster reply.", exampleVi: "Một email lịch sự thường được trả lời nhanh hơn." },
    { word: "grateful", ipa: "/ˈɡreɪtfəl/", pos: "adjective", meaning: "biết ơn",
      example: "I would be grateful for your help.", exampleVi: "Tôi sẽ rất biết ơn sự giúp đỡ của bạn." },
    { word: "favor", ipa: "/ˈfeɪvər/", pos: "noun", meaning: "việc nhờ giúp đỡ",
      example: "Could you do me a favor?", exampleVi: "Bạn giúp tôi một việc được không?" },
    { word: "urgent", ipa: "/ˈɜːrdʒənt/", pos: "adjective", meaning: "khẩn cấp, gấp",
      example: "This order is urgent.", exampleVi: "Đơn hàng này gấp." },
    { word: "deadline", ipa: "/ˈdɛdˌlaɪn/", pos: "noun", meaning: "hạn chót",
      example: "The deadline is Thursday at noon.", exampleVi: "Hạn chót là trưa thứ Năm." },
    { word: "reminder", ipa: "/rɪˈmaɪndər/", pos: "noun", meaning: "lời nhắc",
      example: "I'm sending a reminder about the form.", exampleVi: "Tôi gửi lời nhắc về biểu mẫu." },
    { word: "approval", ipa: "/əˈpruːvəl/", pos: "noun", meaning: "sự chấp thuận, sự duyệt",
      example: "I need your approval for this order.", exampleVi: "Tôi cần anh duyệt đơn hàng này." },
    { word: "borrow", ipa: "/ˈbɑːroʊ/", pos: "verb", meaning: "mượn",
      example: "Can I borrow your pen?", exampleVi: "Tôi mượn bút của bạn được không?" },
    { word: "assistance", ipa: "/əˈsɪstəns/", pos: "noun", meaning: "sự giúp đỡ (trang trọng)",
      example: "Thank you for your assistance.", exampleVi: "Cảm ơn sự giúp đỡ của bạn." }
  ],

  pronunciation: {
    groups: [
      {
        title: "Dạng rút gọn I'd và ngữ điệu lịch sự",
        text: "I'd là dạng rút gọn của I would, đọc là /aɪd/. Khi nhờ việc, giọng đi lên nhẹ ở cuối câu hỏi và nói chậm vừa phải sẽ nghe lịch sự hơn.",
        items: [
          { word: "I'd", marked: "/aɪd/", note: "Một âm tiết, giống từ “eyed”." },
          { word: "I'd like to", marked: "/aɪd ˈlaɪk tə/", note: "to đọc nhẹ /tə/." },
          { word: "Could you", marked: "/ˈkʊdʒə/", note: "Trong câu nhanh, could you nối thành “couldja”." },
          { word: "would", marked: "/wʊd/", note: "Chữ l không đọc." }
        ]
      },
      {
        title: "Trọng âm của từ",
        text: "Âm tiết in hoa là âm đọc to và dài hơn.",
        items: [
          { word: "grateful", marked: "GRATE·ful" },
          { word: "urgent", marked: "UR·gent" },
          { word: "approval", marked: "ap·PROV·al", note: "Âm tiết thứ hai đọc là /ˈpruː/." },
          { word: "request", marked: "re·QUEST", note: "Danh từ và động từ đều nhấn âm thứ hai." },
          { word: "deadline", marked: "DEAD·line", note: "Từ ghép: trọng âm ở phần đầu." }
        ]
      }
    ],
    sentences: [
      "I'd like to borrow a charger, please.",
      "Could you please send me the receipt?",
      "I would be grateful if you could approve the order."
    ]
  },

  listening: {
    title: "Three requests, three styles",
    setting: "Sáng thứ Ba, bàn của anh Hải ở phòng Nhân sự. Tuấn hỏi anh Hải cách viết ba email đề nghị.",
    speakers: { tuan: "Tuan (HR Assistant)", hai: "Mr. Hai (line manager)" },
    lines: [
      { s: "tuan", text: "Mr. Hai, I need your approval for the stationery order. It's a little urgent, because we have no pens left.",
        vi: "Anh Hải, em cần anh duyệt đơn đặt văn phòng phẩm. Hơi gấp, vì mình hết bút rồi." },
      { s: "hai", text: "OK. Send me an email, and I will approve it today.",
        vi: "Được. Em gửi email cho anh, anh sẽ duyệt trong hôm nay." },
      { s: "tuan", text: "Should I write “Please approve the order”?",
        vi: "Em có nên viết “Please approve the order” không ạ?" },
      { s: "hai", text: "That sounds like a command. Write “Could you please approve the order?” For a customer or a senior person, say “I would be grateful if you could approve it”.",
        vi: "Câu đó nghe như ra lệnh. Em viết “Could you please approve the order?” Với khách hàng hoặc người cấp cao thì nói “I would be grateful if you could approve it”." },
      { s: "tuan", text: "I understand. And for Sam in IT? I want to borrow a laptop charger. Can I write “I want a charger”?",
        vi: "Em hiểu rồi. Còn với Sam bên IT? Em muốn mượn một cái sạc laptop. Em viết “I want a charger” được không ạ?" },
      { s: "hai", text: "No, “I want” is too direct. Say “I'd like to borrow a charger, please”.",
        vi: "Không, “I want” quá thẳng. Em nói “I'd like to borrow a charger, please”." },
      { s: "tuan", text: "And Hoa in Accounting? I need the receipt for the order.",
        vi: "Còn Hoa bên Kế toán? Em cần biên lai của đơn hàng." },
      { s: "hai", text: "“Could you please send me the receipt?” is polite and short. It's good for a friendly request.",
        vi: "“Could you please send me the receipt?” vừa lịch sự vừa ngắn. Hợp với một lời nhờ thân thiện." },
      { s: "tuan", text: "Should I give a deadline?",
        vi: "Em có nên ghi hạn chót không ạ?" },
      { s: "hai", text: "Yes. Write “by Thursday”. A clear deadline helps people plan their work. But don't write it in every email, or it sounds rude.",
        vi: "Có. Em ghi “by Thursday”. Hạn chót rõ ràng giúp người ta lên kế hoạch. Nhưng đừng ghi trong mọi email, nếu không nghe sẽ thô." },
      { s: "tuan", text: "OK. I'll write the three emails now.",
        vi: "Vâng. Em sẽ viết ba email ngay bây giờ." },
      { s: "hai", text: "Good. And remember to say thank you.",
        vi: "Tốt. Và nhớ nói cảm ơn nhé." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "What does Tuan need from Mr. Hai?",
        options: ["A new laptop", "A day off", "A receipt", "Approval for the stationery order"],
        answer: 3, explanation: "Tuấn nói: “I need your approval for the stationery order.” Biên lai (receipt) là thứ Tuấn cần xin từ Hoa, không phải từ anh Hải." },
      { id: "l2", type: "choice", prompt: "Which sentence does Mr. Hai say is too direct?",
        options: ["I'd like to borrow a charger, please.", "I want a charger.", "Could you please send me the receipt?", "I would be grateful if you could approve it."],
        answer: 1, explanation: "Anh Hải nói: “No, ‘I want’ is too direct.” Ba câu còn lại là cách đề nghị lịch sự anh Hải gợi ý." },
      { id: "l3", type: "choice", prompt: "Why is a clear deadline useful?",
        options: ["It makes the email longer.", "It sounds rude.", "It helps people plan their work.", "It is needed in every email."],
        answer: 2, explanation: "“A clear deadline helps people plan their work.” Anh Hải cũng dặn đừng ghi hạn chót trong mọi email vì nghe thô." }
    ]
  },

  reading: {
    title: "A request for approval",
    intro: "Email Tuấn gửi anh Hải sau buổi nói chuyện. Đọc và tìm lý do, nội dung đơn hàng và hạn chót.",
    email: {
      from: "Tuan Nguyen <tuan.nguyen@riverside-trading.example>",
      to: "Mr. Hai",
      date: "Tuesday, 17 November",
      subject: "Stationery order – approval needed by Wednesday",
      greeting: "Dear Mr. Hai,",
      paragraphs: [
        "I am writing about the stationery order for the HR office. We have no pens or notebooks left, so the order is urgent.",
        "I would be grateful if you could approve the order. It includes:"
      ],
      list: [
        "30 blue pens",
        "10 notebooks",
        "two boxes of printer paper"
      ],
      after: [
        "The supplier needs our order by Thursday, so I would be grateful for your approval by Wednesday afternoon. I can bring the form to your desk if you prefer.",
        "Could you please tell me if you want to change anything?",
        "Thank you for your help."
      ],
      closing: "Best regards,",
      signature: ["Tuan Nguyen", "HR Assistant, Riverside Trading"]
    },
    glossary: [
      { term: "stationery", vi: "văn phòng phẩm (bút, sổ, giấy…)" },
      { term: "supplier", vi: "nhà cung cấp" },
      { term: "order form", vi: "phiếu đặt hàng" },
      { term: "if you prefer", vi: "nếu anh thích như vậy hơn" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "Why is the order urgent?",
        options: ["The supplier is closed.", "The HR office has no pens or notebooks left.", "Mr. Hai is on holiday.", "The printer is broken."],
        answer: 1, explanation: "“We have no pens or notebooks left, so the order is urgent.” Không có thông tin nào về nhà cung cấp đóng cửa, anh Hải đi nghỉ hay máy in hỏng." },
      { id: "r2", type: "choice", prompt: "When does Tuan want Mr. Hai's approval?",
        options: ["By Monday morning", "By Thursday evening", "By Friday", "By Wednesday afternoon"],
        answer: 3, explanation: "“…I would be grateful for your approval by Wednesday afternoon.” Thứ Năm là hạn nhà cung cấp cần đơn hàng, không phải hạn duyệt." },
      { id: "r3", type: "choice", prompt: "Which statement is TRUE?",
        options: ["The order includes laptops.", "Tuan offers to bring the form to Mr. Hai's desk.", "The supplier needs the order by Friday.", "Tuan wants to borrow a charger from Mr. Hai."],
        answer: 1, explanation: "“I can bring the form to your desk if you prefer.” Đơn gồm bút, sổ và giấy in; nhà cung cấp cần đơn trước thứ Năm; sạc laptop là việc xin Sam." }
    ]
  },

  grammar: {
    title: "Making polite requests",
    titleVi: "Đề nghị lịch sự: I'd like to…, Could you please…?, I would be grateful if…",
    intro: "Trong công việc, cùng một đề nghị có thể nói ở nhiều mức lịch sự. Chọn mẫu câu theo người nhận: bạn bè dùng Could you please, người cấp cao hoặc khách hàng dùng I would be grateful if you could.",
    patterns: [
      { form: "I'd like to + động từ", use: "Nói điều bạn muốn làm hoặc muốn xin, lịch sự hơn I want to.",
        examples: ["I'd like to borrow a laptop charger.", "I'd like to ask about the order."] },
      { form: "Could you (please) + động từ …?", use: "Nhờ người khác làm việc, lịch sự và phổ biến nhất.",
        examples: ["Could you please send me the receipt?", "Could you check the list by Friday?"] },
      { form: "I would be grateful if you could + động từ", use: "Rất trang trọng, dùng với cấp trên, khách hàng hoặc người chưa quen.",
        examples: ["I would be grateful if you could approve the order.", "I would be grateful if you could reply by Monday."] },
      { form: "by / before + ngày hoặc giờ", use: "Nêu hạn chót rõ ràng. by = muộn nhất là lúc đó. before = trước lúc đó.",
        examples: ["Could you reply by Thursday?", "Please send it before five o'clock."] }
    ],
    mistakes: [
      { wrong: "I would like borrow a charger.", right: "I would like to borrow a charger.", note: "like đi với “to” + động từ: I'd like to borrow…" },
      { wrong: "Could you please to send me the file?", right: "Could you please send me the file?", note: "Sau Could you (please) dùng động từ nguyên mẫu, không có “to”." },
      { wrong: "I would be grateful if you approve the order.", right: "I would be grateful if you could approve the order.", note: "Dùng could, không dùng thì hiện tại, để câu lịch sự và đúng mẫu." },
      { wrong: "I want a charger.", right: "I'd like to borrow a charger, please.", note: "I want nghe quá thẳng khi nhờ người khác. Dùng I'd like to hoặc Could you." }
    ],
    tip: "Thêm please và thank you để làm mềm lời nhờ. Nhưng đừng ghi “as soon as possible” trong mọi email, vì nghe như ép người nhận."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "The ___ for the report is Friday at five o'clock.",
      options: ["favor", "deadline", "approval", "reminder"],
      answer: 1, explanation: "Deadline = hạn chót, thời điểm phải làm xong việc." },
    { id: "p2", type: "gap", prompt: "Please answer today. It's ___: the system stops in ten minutes.",
      options: ["polite", "grateful", "urgent", "borrow"],
      answer: 2, explanation: "Urgent = khẩn cấp, gấp. Polite và grateful là tính từ nhưng không hợp nghĩa; borrow là động từ." },
    { id: "p3", type: "gap", prompt: "Could you do me a ___ and print this page?",
      options: ["favor", "request", "approval", "deadline"],
      answer: 0, explanation: "“do me a favor” = giúp tôi một việc, là cụm cố định. Không nói “do me a request”." },
    { id: "p4", type: "gap", prompt: "I'd like ___ a charger from Sam.",
      options: ["borrow", "to borrow", "borrowing", "for borrow"],
      answer: 1, explanation: "I'd like + to + động từ: I'd like to borrow…" },
    { id: "p5", type: "gap", prompt: "Could you please ___ me the receipt?",
      options: ["sending", "to send", "sends", "send"],
      answer: 3, explanation: "Could you (please) + động từ nguyên mẫu, không có “to”: Could you please send…?" },
    { id: "p6", type: "gap", prompt: "I would be grateful if you ___ approve the order today.",
      options: ["could", "to", "approving", "approves"],
      answer: 0, explanation: "Mẫu trang trọng: I would be grateful if you could + động từ nguyên mẫu." },
    { id: "p7", type: "choice", context: "You write to a customer who is new to the company.", prompt: "Which request is the most polite?",
      options: ["Send me the form.", "I want the form now.", "I would be grateful if you could send me the form.", "Give me the form, please."],
      answer: 2, explanation: "Với khách hàng, mẫu I would be grateful if you could… là trang trọng và lịch sự nhất. Ba câu còn lại nghe như ra lệnh hoặc quá thẳng." },
    { id: "p8", type: "choice", context: "You want to borrow a laptop from Sam in IT.", prompt: "What do you say?",
      options: ["I borrow your laptop.", "Give me laptop.", "You must lend me the laptop.", "I'd like to borrow a laptop, please."],
      answer: 3, explanation: "I'd like to + động từ là cách xin lịch sự. Các lựa chọn khác sai ngữ pháp hoặc nghe như ra lệnh." },
    { id: "p9", type: "choice", prompt: "Which sentence gives a clear deadline?",
      options: ["Please reply soon.", "Please reply by Thursday at noon.", "Please reply some day.", "Please reply when you like."],
      answer: 1, explanation: "“by Thursday at noon” là thời điểm cụ thể. soon, some day, when you like đều không rõ ràng." },
    { id: "p10", type: "choice", prompt: "Where is the main stress in “approval”?",
      options: ["AP·pro·val", "ap·PRO·val", "ap·pro·VAL"],
      answer: 1, explanation: "approval /əˈpruːvəl/ có trọng âm ở âm tiết thứ hai: ap·PRO·val." }
  ],

  writing: {
    title: "A request to Sam in IT",
    task: "Bạn là Tuấn. Hãy viết email ngắn gửi Sam (IT Support) (50–90 từ) để mượn sạc laptop và nhờ kiểm tra máy tính.",
    requirements: [
      "Mở đầu bằng lời chào phù hợp (Dear Sam,).",
      "Dùng I'd like to… để nói bạn muốn mượn sạc laptop và nêu lý do.",
      "Dùng Could you please…? để nhờ Sam mang sạc đến, kèm hạn chót với by.",
      "Dùng I would be grateful if you could… để nhờ Sam kiểm tra máy tính chạy chậm.",
      "Cảm ơn Sam.",
      "Kết thúc bằng Best regards và ký tên."
    ],
    minWords: 50,
    maxWords: 90,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Dear …)", pattern: "\\bdear\\b" },
      { label: "Có I'd like to / I would like to", pattern: "i['’]d like to|i would like to" },
      { label: "Có Could you …", pattern: "could you" },
      { label: "Có I would be grateful if you could", pattern: "would be grateful" },
      { label: "Có hạn chót với by", pattern: "\\bby\\b" },
      { label: "Có lời kết (Best regards …)", pattern: "regards|sincerely|best wishes" }
    ],
    model: [
      "Dear Sam,",
      "I'd like to borrow a laptop charger, because mine is broken. Could you please bring one to the HR office by Wednesday afternoon? It is a little urgent, so I will wait in the office.",
      "I would be grateful if you could also check my computer, because it is very slow.",
      "Thank you for your help.",
      "Best regards,",
      "Tuan Nguyen"
    ]
  },

  review: {
    keyPhrases: [
      { en: "I'd like to borrow a charger, please.", vi: "Tôi muốn mượn một cái sạc, nhờ bạn giúp." },
      { en: "Could you please send me the receipt?", vi: "Bạn vui lòng gửi cho tôi biên lai được không?" },
      { en: "I would be grateful if you could approve the order.", vi: "Tôi sẽ rất biết ơn nếu anh duyệt đơn hàng." },
      { en: "Could you reply by Thursday?", vi: "Bạn trả lời trước thứ Năm được không?" },
      { en: "We have no pens left, so the order is urgent.", vi: "Chúng tôi hết bút, nên đơn hàng này gấp." },
      { en: "Thank you for your assistance.", vi: "Cảm ơn sự giúp đỡ của bạn." }
    ]
  }
});
