/* =========================================================
   A2 · Module 2 (Emails and Documents) · Bài 3
   "Confirming and replying"
   Thứ Tư 18/11/2026. Peter xin thư xác nhận việc làm để nộp ngân hàng.
   Tuấn hướng dẫn Peter và sẽ trả lời bằng email.
   Điểm ngữ pháp: I'm writing to + động từ… / I can confirm that… / Please find attached…
   Công ty Riverside Trading và các nhân vật đều là hư cấu.
   ========================================================= */
window.EOH.registerLesson({
  id: "a2-m2-l3",
  reviewStatus: "draft", // "draft" = bản nháp, chưa duyệt
  duration: "35–45 phút",
  scenario: "Thứ Tư 18/11, Peter Clark (nhóm Kinh doanh của David) cần thư xác nhận việc làm để nộp cho ngân hàng. Tuấn nói chuyện với Peter, đọc email yêu cầu của Peter, và sẽ trả lời xác nhận cùng thư đính kèm.",

  objectives: [
    "Hiểu và dùng 10 từ vựng thường gặp khi xác nhận và trả lời email (inquiry, confirm, proof…).",
    "Nghe hiểu cuộc trao đổi về thư xác nhận việc làm: lý do, cách yêu cầu, thời hạn.",
    "Đọc email yêu cầu và tìm đúng thông tin: nội dung thư, hạn chót, giấy tờ đính kèm.",
    "Dùng I'm writing to…, I can confirm that… và Please find attached… trong email trả lời.",
    "Viết email trả lời Peter, xác nhận thư đã sẵn sàng và gửi kèm thư."
  ],

  vocabulary: [
    { word: "inquiry", ipa: "/ɪnˈkwaɪri/", pos: "noun", meaning: "câu hỏi, yêu cầu hỏi thông tin",
      example: "Thank you for your inquiry about the job.", exampleVi: "Cảm ơn bạn đã hỏi về công việc này." },
    { word: "regarding", ipa: "/rɪˈɡɑːrdɪŋ/", pos: "preposition", meaning: "liên quan đến, về việc",
      example: "I'm writing regarding your leave request.", exampleVi: "Tôi viết email về đơn xin nghỉ của bạn." },
    { word: "confirm", ipa: "/kənˈfɜːrm/", pos: "verb", meaning: "xác nhận",
      example: "I can confirm that your start date is Monday.", exampleVi: "Tôi xin xác nhận ngày bắt đầu của bạn là thứ Hai." },
    { word: "confirmation", ipa: "/ˌkɑːnfərˈmeɪʃən/", pos: "noun", meaning: "sự xác nhận, thư xác nhận",
      example: "You will get a confirmation by email.", exampleVi: "Bạn sẽ nhận được xác nhận qua email." },
    { word: "reply", ipa: "/rɪˈplaɪ/", pos: "verb / noun", meaning: "trả lời",
      example: "Please reply to this email today.", exampleVi: "Vui lòng trả lời email này trong hôm nay." },
    { word: "proof", ipa: "/pruːf/", pos: "noun", meaning: "bằng chứng, giấy tờ chứng minh",
      example: "The bank needs proof of employment.", exampleVi: "Ngân hàng cần giấy tờ chứng minh việc làm." },
    { word: "issue", ipa: "/ˈɪʃuː/", pos: "verb", meaning: "cấp, ban hành (giấy tờ)",
      example: "We can issue the letter on Thursday.", exampleVi: "Chúng tôi có thể cấp thư vào thứ Năm." },
    { word: "as requested", ipa: "/æz rɪˈkwɛstɪd/", pos: "phrase", meaning: "theo yêu cầu của bạn",
      example: "As requested, I have changed the date.", exampleVi: "Theo yêu cầu của bạn, tôi đã đổi ngày." },
    { word: "promptly", ipa: "/ˈprɑːmptli/", pos: "adverb", meaning: "nhanh chóng, đúng lúc",
      example: "Please reply promptly.", exampleVi: "Vui lòng trả lời nhanh chóng." },
    { word: "valid", ipa: "/ˈvælɪd/", pos: "adjective", meaning: "có hiệu lực",
      example: "The letter is valid for thirty days.", exampleVi: "Thư có hiệu lực trong ba mươi ngày." }
  ],

  pronunciation: {
    groups: [
      {
        title: "Trọng âm của từ",
        text: "Với từ tận cùng bằng -tion, trọng âm rơi vào âm tiết ngay trước -tion. Nhiều động từ hai âm tiết nhấn âm thứ hai.",
        items: [
          { word: "confirm", marked: "con·FIRM" },
          { word: "confirmation", marked: "con·fir·MA·tion" },
          { word: "reply", marked: "re·PLY" },
          { word: "regarding", marked: "re·GARD·ing" },
          { word: "inquiry", marked: "in·QUI·ry", note: "Cách đọc IN·qui·ry cũng đúng." }
        ]
      },
      {
        title: "Đuôi -ed",
        text: "Đuôi -ed có ba cách đọc: /t/ sau âm vô thanh, /d/ sau âm hữu thanh, /ɪd/ sau t hoặc d.",
        items: [
          { word: "attached", marked: "attache/t/", note: "Đọc /əˈtætʃt/. Đuôi -ed đọc /t/ vì sau âm /tʃ/ vô thanh." },
          { word: "signed", marked: "signe/d/", note: "Đọc /saɪnd/. Đuôi -ed đọc /d/." },
          { word: "requested", marked: "reques/tɪd/", note: "Đọc /rɪˈkwɛstɪd/. Đọc thêm một âm tiết /ɪd/ vì từ kết thúc bằng t." },
          { word: "confirmed", marked: "confirme/d/", note: "Đọc /kənˈfɜːrmd/. Đuôi -ed đọc /d/." }
        ]
      }
    ],
    sentences: [
      "I am writing to confirm your request.",
      "I can confirm that the letter is ready.",
      "Please find attached the signed letter."
    ]
  },

  listening: {
    title: "A letter for the bank",
    setting: "Chiều thứ Tư, phòng Nhân sự. Peter đến hỏi Tuấn về thư xác nhận việc làm.",
    speakers: { peter: "Peter (Sales team)", tuan: "Tuan (HR Assistant)" },
    lines: [
      { s: "peter", text: "Hi Tuan. Do you have a minute? I need a letter that confirms I work here. The bank asks for it, because I want to rent an apartment.",
        vi: "Chào Tuấn. Bạn có rảnh một chút không? Mình cần một lá thư xác nhận mình làm việc ở đây. Ngân hàng yêu cầu, vì mình muốn thuê căn hộ." },
      { s: "tuan", text: "Sure. It's called an employment confirmation letter. It includes your job title and your start date. Do you need your salary too?",
        vi: "Được. Thư đó gọi là thư xác nhận việc làm. Thư có chức danh và ngày bắt đầu làm việc của bạn. Bạn có cần cả lương không?" },
      { s: "peter", text: "Yes, please. The bank wants the salary as proof of income.",
        vi: "Có, nhờ bạn. Ngân hàng cần mức lương làm bằng chứng thu nhập." },
      { s: "tuan", text: "OK. Please send me an email, so I have your request in writing.",
        vi: "Được. Bạn gửi email cho mình nhé, để mình có yêu cầu bằng văn bản." },
      { s: "peter", text: "What do I write?",
        vi: "Mình viết gì?" },
      { s: "tuan", text: "Start with “I'm writing to ask for an employment confirmation letter”. Then say what you need, and when.",
        vi: "Bạn mở đầu bằng “I'm writing to ask for an employment confirmation letter”. Rồi nói bạn cần gì, và cần khi nào." },
      { s: "peter", text: "And what will you write back?",
        vi: "Còn bạn sẽ trả lời thế nào?" },
      { s: "tuan", text: "I'll write “I can confirm that you work in the Sales team”. Then I'll write “Please find attached your letter”.",
        vi: "Mình sẽ viết “I can confirm that you work in the Sales team”. Rồi mình viết “Please find attached your letter”." },
      { s: "peter", text: "When can I get the letter?",
        vi: "Khi nào mình nhận được thư?" },
      { s: "tuan", text: "Lan signs it tomorrow morning, so I'll send it on Thursday morning.",
        vi: "Chị Lan ký thư vào sáng mai, nên mình sẽ gửi vào sáng thứ Năm." },
      { s: "peter", text: "Great. Thanks a lot, Tuan.",
        vi: "Tuyệt. Cảm ơn bạn nhiều, Tuấn." },
      { s: "tuan", text: "You're welcome. I'll reply promptly.",
        vi: "Không có gì. Mình sẽ trả lời nhanh." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "Why does Peter need the letter?",
        options: ["He wants to rent an apartment.", "He wants a day off.", "He changes his job.", "He needs a new ID badge."],
        answer: 0, explanation: "Peter nói: “The bank asks for it, because I want to rent an apartment.” Thư dùng làm bằng chứng việc làm và thu nhập cho ngân hàng." },
      { id: "l2", type: "choice", prompt: "What does Tuan ask Peter to do?",
        options: ["Call the bank", "Come back on Friday", "Sign the letter himself", "Send an email with his request"],
        answer: 3, explanation: "Tuấn nói: “Please send me an email, so I have your request in writing.” Chị Lan là người ký thư, không phải Peter." },
      { id: "l3", type: "choice", prompt: "When will Tuan send the letter?",
        options: ["Today", "Thursday morning", "Friday afternoon", "Monday morning"],
        answer: 1, explanation: "“Lan signs it tomorrow morning, so I'll send it on Thursday morning.” Hôm nay là thứ Tư nên “tomorrow” là thứ Năm." }
    ]
  },

  reading: {
    title: "Peter's email",
    intro: "Email Peter gửi Tuấn sau khi nói chuyện. Đọc và tìm những gì Peter cần trong thư và khi nào cần.",
    email: {
      from: "Peter Clark <peter.clark@riverside-trading.example>",
      to: "Tuan Nguyen",
      date: "Wednesday, 18 November",
      subject: "Employment confirmation letter for my bank",
      greeting: "Hi Tuan,",
      paragraphs: [
        "Thank you for your help today. I am writing to ask for an employment confirmation letter for my bank. Please include:"
      ],
      list: [
        "my job title",
        "my start date, 12 October",
        "my monthly salary"
      ],
      after: [
        "The bank needs the letter by Monday, 23 November, because I want to rent an apartment. Please find attached a copy of my ID card.",
        "Could you also tell me who will sign the letter? I would be grateful if you could reply to this email when the letter is ready. Please let me know if you need anything else."
      ],
      closing: "Many thanks,",
      signature: ["Peter Clark", "Sales team"]
    },
    glossary: [
      { term: "employment confirmation letter", vi: "thư xác nhận việc làm" },
      { term: "start date", vi: "ngày bắt đầu làm việc" },
      { term: "monthly salary", vi: "lương hằng tháng" },
      { term: "a copy of", vi: "một bản sao của" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "What does Peter want in the letter?",
        options: ["His address and phone number", "His job title, start date and monthly salary", "His age and nationality", "His leave days and bank number"],
        answer: 1, explanation: "Peter liệt kê: “my job title, my start date, my monthly salary”. Các thông tin còn lại không có trong email." },
      { id: "r2", type: "choice", prompt: "When does the bank need the letter?",
        options: ["By Thursday, 19 November", "By Friday, 20 November", "By Monday, 23 November", "By Tuesday, 24 November"],
        answer: 2, explanation: "“The bank needs the letter by Monday, 23 November.”" },
      { id: "r3", type: "choice", prompt: "What is attached to the email?",
        options: ["The signed letter", "A copy of Peter's ID card", "Peter's contract", "A bank form"],
        answer: 1, explanation: "“Please find attached a copy of my ID card.” Thư xác nhận việc làm thì Tuấn sẽ gửi cho Peter sau." }
    ]
  },

  grammar: {
    title: "Confirming and replying",
    titleVi: "Xác nhận và trả lời email",
    intro: "Một email trả lời tốt thường có bốn bước: cảm ơn, nêu mục đích, xác nhận thông tin, và báo có tệp đính kèm. Bốn mẫu câu dưới đây xuất hiện trong hội thoại và email bạn vừa học.",
    patterns: [
      { form: "Thank you for + danh từ (your email / your reply)", use: "Mở đầu email trả lời bằng lời cảm ơn.",
        examples: ["Thank you for your email.", "Thank you for your quick reply."] },
      { form: "I'm writing to + động từ", use: "Nêu mục đích email ngay từ đầu.",
        examples: ["I'm writing to ask for a letter.", "I'm writing to confirm your start date."] },
      { form: "I can confirm that + mệnh đề", use: "Xác nhận một thông tin chắc chắn, giọng chuyên nghiệp.",
        examples: ["I can confirm that you work in the Sales team.", "I can confirm that the letter is ready."] },
      { form: "Please find attached + danh từ", use: "Báo cho người nhận biết có tệp đính kèm theo email.",
        examples: ["Please find attached your letter.", "Please find attached a copy of the form."] }
    ],
    mistakes: [
      { wrong: "I'm writing for ask about the form.", right: "I'm writing to ask about the form.", note: "Mục đích dùng “to” + động từ, không dùng “for”." },
      { wrong: "Please find attach the letter.", right: "Please find attached the letter.", note: "Dùng attached (đã đính kèm), không dùng attach." },
      { wrong: "Thank you for reply.", right: "Thank you for your reply.", note: "Cần có your trước danh từ reply." },
      { wrong: "I can confirm you that the letter is ready.", right: "I can confirm that the letter is ready.", note: "confirm đi thẳng với that + mệnh đề, không thêm “you” sau confirm." }
    ],
    tip: "Please find attached nghe trang trọng, hợp với email công việc. Trong email thân mật bạn có thể viết đơn giản hơn: “I've attached the letter.”"
  },

  practice: [
    { id: "p1", type: "gap", prompt: "I'm writing ___ your question about the leave form.",
      options: ["regarding", "regarded", "regard", "regards"],
      answer: 0, explanation: "Regarding = liên quan đến, đứng trước danh từ: I'm writing regarding your question…" },
    { id: "p2", type: "gap", prompt: "The bank wants ___ that you work here.",
      options: ["valid", "proof", "promptly", "issue"],
      answer: 1, explanation: "Proof = giấy tờ chứng minh (danh từ), đứng sau wants. Valid là tính từ, promptly là trạng từ, issue là động từ." },
    { id: "p3", type: "gap", prompt: "We will ___ the letter on Thursday morning.",
      options: ["valid", "proof", "issue", "promptly"],
      answer: 2, explanation: "Issue = cấp (giấy tờ). Sau will cần một động từ nguyên mẫu; chỉ issue là động từ." },
    { id: "p4", type: "gap", prompt: "Please reply ___, because the bank is waiting.",
      options: ["valid", "proof", "inquiry", "promptly"],
      answer: 3, explanation: "Promptly = nhanh chóng, là trạng từ bổ nghĩa cho reply. Các từ còn lại không phải trạng từ." },
    { id: "p5", type: "gap", prompt: "I'm writing ___ ask about my salary.",
      options: ["to", "for", "of", "at"],
      answer: 0, explanation: "Mục đích viết email: I'm writing to + động từ." },
    { id: "p6", type: "gap", prompt: "I can ___ that your leave starts on Monday.",
      options: ["confirming", "confirm", "to confirm", "confirms"],
      answer: 1, explanation: "Sau can dùng động từ nguyên mẫu không có to: I can confirm that…" },
    { id: "p7", type: "gap", prompt: "Please find ___ the signed letter.",
      options: ["attach", "attaching", "attached", "attaches"],
      answer: 2, explanation: "Mẫu cố định: Please find attached + danh từ." },
    { id: "p8", type: "choice", prompt: "Which sentence is a good first line of a reply?",
      options: ["What?", "I am not sure.", "Your email is long.", "Thank you for your email."],
      answer: 3, explanation: "Lời cảm ơn là cách mở đầu lịch sự cho một email trả lời. Ba câu còn lại thô hoặc không có thông tin." },
    { id: "p9", type: "choice", context: "Peter asks: “Could you tell me who will sign the letter?”", prompt: "What is the best reply?",
      options: ["I can confirm that Lan Pham will sign it.", "I writing to confirm sign.", "Please find attach Lan.", "Yes, it is not."],
      answer: 0, explanation: "Câu A đúng ngữ pháp và trả lời trực tiếp câu hỏi. Ba câu còn lại sai ngữ pháp hoặc không trả lời câu hỏi." },
    { id: "p10", type: "choice", prompt: "Where is the main stress in “confirm”?",
      options: ["CON·firm", "con·FIRM", "Both syllables are equal."],
      answer: 1, explanation: "Động từ confirm /kənˈfɜːrm/ nhấn âm thứ hai: con·FIRM." }
  ],

  writing: {
    title: "Reply to Peter",
    task: "Bạn là Tuấn. Hãy viết email trả lời Peter (50–90 từ). Hãy tưởng tượng bây giờ là sáng thứ Năm và thư đã được ký.",
    requirements: [
      "Mở đầu bằng lời chào phù hợp (Dear Peter,).",
      "Cảm ơn Peter vì email của anh.",
      "Dùng I'm writing to… để nói bạn gửi thư xác nhận việc làm.",
      "Dùng I can confirm that… để xác nhận chị Lan đã ký thư.",
      "Dùng Please find attached… để báo thư được đính kèm.",
      "Kết thúc bằng Best regards và ký tên."
    ],
    minWords: 50,
    maxWords: 90,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Dear …)", pattern: "\\bdear\\b" },
      { label: "Có lời cảm ơn", pattern: "\\bthank" },
      { label: "Có I'm writing to / I am writing to", pattern: "writing to" },
      { label: "Có I can confirm that", pattern: "can confirm" },
      { label: "Có Please find attached", pattern: "find attached" },
      { label: "Có lời kết (Best regards …)", pattern: "regards|sincerely|best wishes" }
    ],
    model: [
      "Dear Peter,",
      "Thank you for your email. I am writing to send you your employment confirmation letter.",
      "I can confirm that Ms. Lan has signed it. Please find attached the signed letter. It includes your job title, your start date and your monthly salary.",
      "Please let me know if you need anything else.",
      "Best regards,",
      "Tuan Nguyen"
    ]
  },

  review: {
    keyPhrases: [
      { en: "Thank you for your email.", vi: "Cảm ơn email của bạn." },
      { en: "I'm writing to ask for a confirmation letter.", vi: "Tôi viết email để xin một thư xác nhận." },
      { en: "I can confirm that you work in the Sales team.", vi: "Tôi xin xác nhận bạn làm việc ở nhóm Kinh doanh." },
      { en: "Please find attached your letter.", vi: "Thư của bạn được đính kèm theo email này." },
      { en: "The bank needs proof of employment.", vi: "Ngân hàng cần giấy tờ chứng minh việc làm." },
      { en: "Please let me know if you need anything else.", vi: "Nếu cần gì thêm, bạn vui lòng cho tôi biết." }
    ]
  }
});
