/* =========================================================
   A2 · Module 1 (Office Communication) · Bài 3
   "Phone calls: taking messages"
   Nối tiếp: thứ Tư 11/11/2026. Chị Lan đang học, Tuấn nghe điện thoại thay chị.
   Ngữ pháp: will cho lời hứa và đề nghị (I'll tell her)
   Phát âm: dạng rút gọn 'll và cách đọc số máy lẻ
   Công ty Riverside Trading và các nhân vật đều là hư cấu.
   ========================================================= */
window.EOH.registerLesson({
  id: "a2-m1-l3",
  reviewStatus: "draft", // "draft" = bản nháp, chưa duyệt
  duration: "35–45 phút",
  scenario: "Chiều thứ Tư 11/11, chị Lan đang dự buổi đào tạo đến 3 giờ chiều. Tuấn (HR Assistant) nghe điện thoại thay chị. Anh Peter ở phòng Kinh doanh gọi nhờ chị Lan làm thư xác nhận cho ngân hàng. Tuấn ghi lời nhắn và gửi email cho chị Lan.",

  objectives: [
    "Hiểu và dùng 10 từ vựng khi nhận điện thoại và ghi lời nhắn.",
    "Nghe hiểu cuộc gọi: ai gọi, cần gì, trước khi nào, liên lạc bằng cách nào.",
    "Đọc email lời nhắn và tìm đúng thông tin: tên người gọi, số máy lẻ, hạn chót.",
    "Hứa và đề nghị giúp bằng will / 'll (I'll tell her, I'll ask her to call you back).",
    "Viết email lời nhắn ngắn cho đồng nghiệp vắng mặt."
  ],

  vocabulary: [
    { word: "take a message", ipa: "/teɪk ə ˈmesɪdʒ/", pos: "phrase", meaning: "ghi lại lời nhắn cho người vắng mặt",
      example: "Can I take a message?", exampleVi: "Tôi ghi lại lời nhắn giúp bạn nhé?" },
    { word: "leave a message", ipa: "/liːv ə ˈmesɪdʒ/", pos: "phrase", meaning: "để lại lời nhắn",
      example: "Can I leave a message for Lan?", exampleVi: "Tôi để lại lời nhắn cho chị Lan được không?" },
    { word: "call back", ipa: "/ˈkɔːl bæk/", pos: "phrasal verb", meaning: "gọi lại",
      example: "I'll ask her to call you back.", exampleVi: "Tôi sẽ nhờ chị ấy gọi lại cho bạn." },
    { word: "pass on", ipa: "/ˈpæs ɑːn/", pos: "phrasal verb", meaning: "chuyển lời, chuyển tiếp",
      example: "I'll pass on your message to Lan.", exampleVi: "Tôi sẽ chuyển lời nhắn của bạn cho chị Lan." },
    { word: "voicemail", ipa: "/ˈvɔɪsmeɪl/", pos: "noun", meaning: "hộp thư thoại",
      example: "Her phone is off, so I left a voicemail.", exampleVi: "Điện thoại của chị ấy tắt máy nên tôi để lại tin nhắn thoại." },
    { word: "urgent", ipa: "/ˈɜːrdʒənt/", pos: "adjective", meaning: "gấp, khẩn cấp",
      example: "This is urgent. I need the answer today.", exampleVi: "Việc này gấp. Tôi cần câu trả lời trong hôm nay." },
    { word: "draft", ipa: "/dræft/", pos: "noun / verb", meaning: "bản nháp; soạn bản nháp",
      example: "I'll prepare a draft of the letter today.", exampleVi: "Hôm nay tôi sẽ soạn bản nháp của thư." },
    { word: "confirmation letter", ipa: "/ˌkɑːnfərˈmeɪʃən ˈletər/", pos: "noun", meaning: "thư xác nhận (ví dụ xác nhận đang làm việc tại công ty)",
      example: "Peter needs a confirmation letter for his bank.", exampleVi: "Peter cần một thư xác nhận gửi ngân hàng." },
    { word: "reach", ipa: "/riːtʃ/", pos: "verb", meaning: "liên lạc được với ai",
      example: "I can't reach him by phone.", exampleVi: "Tôi không liên lạc được với anh ấy qua điện thoại." },
    { word: "hang up", ipa: "/ˈhæŋ ʌp/", pos: "phrasal verb", meaning: "cúp máy, gác máy",
      example: "Please don't hang up. I'll check now.", exampleVi: "Bạn đừng cúp máy. Tôi kiểm tra ngay." }
  ],

  pronunciation: {
    groups: [
      {
        title: "Dạng rút gọn 'll (will)",
        text: "Khi hứa hoặc đề nghị giúp, người bản xứ gần như luôn nói I'll, she'll, we'll. Âm /l/ ngắn, không nhấn.",
        items: [
          { word: "I'll", marked: "I'll", note: "/aɪl/ – I'll tell her." },
          { word: "she'll", marked: "she'll", note: "/ʃiːl/ – She'll call you back." },
          { word: "he'll", marked: "he'll", note: "/hiːl/ – He'll be here at four." },
          { word: "we'll", marked: "we'll", note: "/wiːl/ – We'll send it today." }
        ]
      },
      {
        title: "Đọc số máy lẻ",
        text: "Số máy lẻ đọc từng chữ số. Số 0 đọc là “oh”. Chữ số cuối đọc cao và rõ để người nghe ghi lại dễ.",
        items: [
          { word: "three-one-eight", marked: "three · one · EIGHT", note: "Máy lẻ ba một tám." },
          { word: "two-one-four", marked: "two · one · FOUR", note: "Máy lẻ của chị Lan." },
          { word: "three-three-oh", marked: "three · three · OH", note: "Máy lẻ của Sam. Số 0 đọc là “oh”." }
        ]
      }
    ],
    sentences: [
      "I'll tell her you called.",
      "I'll ask her to call you back.",
      "My extension is three-one-eight."
    ]
  },

  listening: {
    title: "A message for Lan",
    setting: "Chiều thứ Tư 11/11, văn phòng Nhân sự. Peter (phòng Kinh doanh) gọi cho chị Lan, Tuấn nghe máy.",
    speakers: { tuan: "Tuan (HR Assistant)", peter: "Peter (Sales)" },
    lines: [
      { s: "tuan", text: "Good afternoon, HR department. Tuan speaking. How can I help you?",
        vi: "Chào buổi chiều, phòng Nhân sự. Tuấn nghe đây. Tôi giúp gì được cho bạn?" },
      { s: "peter", text: "Hi Tuan, it's Peter Clark from Sales. Is Lan there?",
        vi: "Chào Tuấn, Peter Clark bên phòng Kinh doanh đây. Lan có ở đó không?" },
      { s: "tuan", text: "I'm sorry, she's in a training session until three o'clock. Can I take a message?",
        vi: "Xin lỗi, chị ấy đang trong buổi đào tạo đến ba giờ. Tôi ghi lại lời nhắn cho anh nhé?" },
      { s: "peter", text: "Yes, please. I need a confirmation letter from HR. My bank wants a letter that says I work here.",
        vi: "Vâng, nhờ bạn. Mình cần một thư xác nhận từ phòng Nhân sự. Ngân hàng muốn có thư ghi rằng mình đang làm việc ở đây." },
      { s: "tuan", text: "OK. I'll tell her. When do you need the letter?",
        vi: "Dạ. Em sẽ nói với chị ấy. Khi nào anh cần thư ạ?" },
      { s: "peter", text: "By Friday, please. The bank is closed on the weekend.",
        vi: "Trước thứ Sáu nhé. Ngân hàng nghỉ cuối tuần." },
      { s: "tuan", text: "No problem. What's your extension, so she can call you back?",
        vi: "Dạ không sao. Số máy lẻ của anh là gì, để chị ấy gọi lại ạ?" },
      { s: "peter", text: "My extension is three-one-eight.",
        vi: "Máy lẻ của mình là ba một tám." },
      { s: "tuan", text: "So that's three-one-eight. I'll ask her to call you back this afternoon.",
        vi: "Vậy là ba một tám. Em sẽ nhờ chị ấy gọi lại cho anh chiều nay." },
      { s: "peter", text: "Thanks. But I'll be at a customer's office after four, so please tell her to email me instead.",
        vi: "Cảm ơn bạn. Nhưng sau bốn giờ mình sẽ ở văn phòng của khách hàng, nên bạn nhờ chị ấy gửi email cho mình nhé." },
      { s: "tuan", text: "Sure. I'll tell her to email you. And I'll prepare a draft of the letter today, so she only needs to check it.",
        vi: "Dạ được. Em sẽ nhắn chị ấy gửi email cho anh. Và hôm nay em sẽ soạn bản nháp thư, để chị ấy chỉ cần kiểm tra lại." },
      { s: "peter", text: "That's very kind, Tuan. Thank you. Goodbye!",
        vi: "Bạn tốt quá, Tuấn. Cảm ơn bạn. Tạm biệt!" }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "Why can't Lan take the call?",
        options: ["She is on vacation.", "She is in a training session.", "She is having lunch.", "She is visiting a customer."],
        answer: 1, explanation: "Tuấn nói: “She's in a training session until three o'clock.” Chị Lan đang dự buổi đào tạo." },
      { id: "l2", type: "choice", prompt: "What does Peter need from HR?",
        options: ["A new ID badge", "A day off on Friday", "A confirmation letter for his bank", "A copy of the employee handbook"],
        answer: 2, explanation: "“I need a confirmation letter from HR. My bank wants a letter that says I work here.”" },
      { id: "l3", type: "choice", prompt: "How should Lan contact Peter after four o'clock?",
        options: ["By phone", "By visiting his desk", "By sending a message to Mr. Hai", "By email"],
        answer: 3, explanation: "Peter nói: “After four, I'll be at a customer's office, so please tell her to email me instead.” Sau bốn giờ anh ấy không ở bàn nên không gọi điện được." }
    ]
  },

  reading: {
    title: "A phone message by email",
    intro: "Email Tuấn gửi chị Lan lúc ba giờ chiều thứ Tư, ngay sau cuộc gọi của Peter. Đọc và tìm thông tin chính của lời nhắn.",
    email: {
      from: "Tuan Nguyen <tuan.nguyen@riverside-trading.example>",
      to: "Lan Pham",
      date: "Wednesday, 11 November",
      subject: "Message for you: Peter Clark",
      greeting: "Dear Lan,",
      paragraphs: [
        "Peter Clark from Sales called at 2:15 p.m. while you were in the training session. Here is his message:"
      ],
      list: [
        "He needs a confirmation letter for his bank.",
        "He needs the letter by Friday.",
        "His extension is 318."
      ],
      after: [
        "After 4:00 p.m., Peter will be at a customer's office, so please email him instead of calling.",
        "I'll prepare a draft of the letter this afternoon, so you only need to check it. I'll also ask Mr. Hai to sign it when you are ready. Please tell me if you want to change anything."
      ],
      closing: "Best regards,",
      signature: ["Tuan Nguyen", "HR Assistant, Riverside Trading"]
    },
    glossary: [
      { term: "while", vi: "trong lúc" },
      { term: "training session", vi: "buổi đào tạo" },
      { term: "instead of", vi: "thay vì" },
      { term: "sign", vi: "ký tên" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "Who called while Lan was in the training session?",
        options: ["Hoa", "Peter Clark", "David Brown", "Sam"],
        answer: 1, explanation: "“Peter Clark from Sales called at 2:15 p.m.” Peter làm ở phòng Kinh doanh." },
      { id: "r2", type: "choice", prompt: "When does Peter need the letter?",
        options: ["By Wednesday", "By Thursday", "By Friday", "By Monday"],
        answer: 2, explanation: "“He needs the letter by Friday.”" },
      { id: "r3", type: "choice", prompt: "What will Tuan do this afternoon?",
        options: ["Call the bank", "Sign the letter", "Send Peter's CV", "Prepare a draft of the letter"],
        answer: 3, explanation: "“I'll prepare a draft of the letter this afternoon.” Tuấn chỉ soạn bản nháp; anh Hải mới là người ký." }
    ]
  },

  grammar: {
    title: "Promises and offers with will",
    titleVi: "Will cho lời hứa và đề nghị giúp",
    intro: "Khi nhận điện thoại hộ đồng nghiệp, ta thường hứa sẽ chuyển lời hoặc đề nghị giúp một việc. Dùng will (nói tắt là 'll) + động từ nguyên mẫu. Will dùng cho mọi chủ ngữ và động từ sau will không thêm -s hay to.",
    patterns: [
      { form: "I'll + động từ", use: "Hứa hoặc quyết định giúp ngay lúc nói.",
        examples: ["I'll tell her you called.", "I'll take a message."] },
      { form: "I'll ask / tell + him / her + to + động từ", use: "Hứa nhắn lại để người khác làm việc.",
        examples: ["I'll ask her to call you back.", "I'll tell him to email you."] },
      { form: "She'll / He'll / We'll + động từ", use: "Nói người khác sẽ làm gì khi chắc chắn.",
        examples: ["She'll call you back this afternoon.", "We'll send the letter on Friday."] },
      { form: "won't + động từ (phủ định) và Will you …? (nhờ)", use: "Nói điều sẽ không xảy ra, hoặc nhờ ai đó làm việc.",
        examples: ["She won't be back until three.", "Will you tell her I called?"] }
    ],
    mistakes: [
      { wrong: "I will to tell her.", right: "I will tell her.", note: "Sau will không dùng “to”." },
      { wrong: "She will calls you back.", right: "She will call you back.", note: "Sau will dùng động từ nguyên mẫu, không thêm -s." },
      { wrong: "I'll telling her tomorrow.", right: "I'll tell her tomorrow.", note: "Sau 'll không thêm -ing." },
      { wrong: "I'm will call you back.", right: "I'll call you back.", note: "Không dùng am cùng will. I'll = I will." }
    ],
    tip: "Trên điện thoại, hãy lặp lại thông tin quan trọng để chắc chắn: “So that's three-one-eight.” Sau đó hứa rõ việc bạn sẽ làm: “I'll ask her to call you back this afternoon.” Người gọi sẽ yên tâm hơn."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "Lan isn't at her desk. Can I ___ a message?",
      options: ["pass", "take", "reach", "hang"],
      answer: 1, explanation: "Người nghe máy hỏi “Can I take a message?”. Người gọi mới nói “Can I leave a message?”." },
    { id: "p2", type: "gap", prompt: "I'll ___ your message to Lan this afternoon.",
      options: ["voicemail", "hang up", "reach", "pass on"],
      answer: 3, explanation: "Pass on = chuyển lời. Câu hoàn chỉnh: I'll pass on your message to Lan." },
    { id: "p3", type: "gap", prompt: "This is ___: I need the answer before noon today.",
      options: ["urgent", "a slot", "tiring", "a hobby"],
      answer: 0, explanation: "Urgent = gấp. Cần câu trả lời trước trưa nên việc này gấp." },
    { id: "p4", type: "gap", prompt: "A: Lan is out. B: OK, I ___ back later.",
      options: ["will calls", "will call", "will to call", "am will call"],
      answer: 1, explanation: "will + động từ nguyên mẫu không thêm -s hay to: will call." },
    { id: "p5", type: "gap", prompt: "Don't worry. I ___ her your message.",
      options: ["'ll tell", "telling", "tells", "am tell"],
      answer: 0, explanation: "Lời hứa: I'll + động từ = I'll tell her. “Tells” và “telling” không có will." },
    { id: "p6", type: "gap", prompt: "I'll ask her ___ you back.",
      options: ["calls", "call", "to call", "calling"],
      answer: 2, explanation: "ask + người + to + động từ: ask her to call you back." },
    { id: "p7", type: "gap", prompt: "She ___ be back until three o'clock.",
      options: ["won't", "doesn't", "isn't", "will to"],
      answer: 0, explanation: "Phủ định của will là won't: She won't be back… “Doesn't be” và “isn't be” sai." },
    { id: "p8", type: "choice", context: "A caller asks for Lan, but she is in a training session.", prompt: "What is the best thing to say?",
      options: ["How was your weekend?", "Please hang up now.", "I'm a supplier.", "Can I take a message?"],
      answer: 3, explanation: "Khi người được gọi vắng mặt, ta hỏi: Can I take a message? Các câu còn lại không phù hợp." },
    { id: "p9", type: "choice", prompt: "Which sentence is correct?",
      options: ["I'll to tell her.", "She'll calls you.", "I'll tell her you called.", "I'm will call you."],
      answer: 2, explanation: "Chỉ có “I'll tell her you called.” đúng. Các câu khác sai: thêm to, thêm -s hoặc dùng am cùng will." },
    { id: "p10", type: "choice", prompt: "Peter's extension is 318. How does Tuan say it?",
      options: ["thirty-one-eight", "three-one-eight", "three-hundred-eighteen", "thirteen-eight"],
      answer: 1, explanation: "Số máy lẻ đọc từng chữ số: three-one-eight." }
  ],

  writing: {
    title: "Leave a message for Lan",
    task: "Bạn là Tuấn. Anh David Brown (Sales Manager) gọi cho chị Lan lúc 2:30 chiều khi chị đang học. Anh cần một bản mẫu đơn xin nghỉ phép (leave request form) cho nhóm trước thứ Năm. Viết email lời nhắn cho chị Lan (50–90 từ).",
    requirements: [
      "Mở đầu bằng lời chào (Dear …).",
      "Nói ai đã gọi (David Brown) và lúc mấy giờ.",
      "Nói anh ấy cần mẫu đơn nghỉ phép (form) và hạn chót là thứ Năm.",
      "Hứa một việc bạn sẽ làm, dùng I'll.",
      "Cảm ơn.",
      "Kết thúc email và ký tên."
    ],
    minWords: 50,
    maxWords: 90,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Dear …)", pattern: "\\bdear\\b" },
      { label: "Nhắc tới David", pattern: "david" },
      { label: "Nhắc tới mẫu đơn (form)", pattern: "\\bform\\b" },
      { label: "Nhắc tới hạn chót thứ Năm", pattern: "thursday" },
      { label: "Có lời hứa với will / I'll", pattern: "\\bi'?ll\\b|\\bi will\\b" },
      { label: "Có lời kết (Best regards …)", pattern: "regards|sincerely|best wishes" }
    ],
    model: [
      "Dear Lan,",
      "David Brown called at 2:30 p.m. while you were in the training session. He needs a copy of the leave request form for his team by Thursday.",
      "I'll tell him that you'll send it by email today. I'll also put a printed copy on his desk tomorrow morning, if you want.",
      "Thank you.",
      "Best regards,",
      "Tuan Nguyen"
    ]
  },

  review: {
    keyPhrases: [
      { en: "Can I take a message?", vi: "Tôi ghi lại lời nhắn cho bạn nhé?" },
      { en: "I'll tell her you called.", vi: "Tôi sẽ nói với chị ấy là bạn đã gọi." },
      { en: "I'll ask her to call you back.", vi: "Tôi sẽ nhờ chị ấy gọi lại cho bạn." },
      { en: "What's your extension?", vi: "Số máy lẻ của bạn là gì?" },
      { en: "She'll be back at three o'clock.", vi: "Chị ấy sẽ quay lại lúc ba giờ." },
      { en: "Can I leave a message for her?", vi: "Tôi để lại lời nhắn cho chị ấy được không?" }
    ]
  }
});
