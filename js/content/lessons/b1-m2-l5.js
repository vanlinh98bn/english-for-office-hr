/* =========================================================
   B1 · Module 2 (Employee Lifecycle) · Bài 5
   "Exit interviews"
   Nối tiếp B1-M2-L4: trong tuần cuối của Peter, chị Lan làm buổi
   phỏng vấn nghỉ việc (exit interview) với anh. Peter nói lý do ra đi,
   điều anh thích, điều công ty có thể cải thiện (cân bằng công việc –
   cuộc sống) và anh sẵn sàng giới thiệu công ty cho bạn bè. Sau đó chị
   Lan gửi David email tóm tắt bằng câu hỏi tường thuật. Thời gian áng chừng.
   ========================================================= */
window.EOH.registerLesson({
  id: "b1-m2-l5",
  reviewStatus: "approved", // Linh duyệt ngày 23/10/2026
  duration: "40–50 phút",
  scenario: "Trong tuần làm việc cuối cùng của Peter, chị Lan (Lan Pham) tổ chức buổi phỏng vấn nghỉ việc để hiểu vì sao anh ra đi và công ty có thể cải thiện điều gì. Peter trả lời thẳng thắn. Sau buổi gặp, chị Lan viết email tóm tắt gửi David, kể lại những câu chị đã hỏi và những gì Peter đã trả lời.",

  objectives: [
    "Hiểu và dùng 10 từ vựng thường gặp trong buổi phỏng vấn nghỉ việc.",
    "Nghe buổi phỏng vấn nghỉ việc, ghi lại lý do ra đi, điều Peter thích và điều có thể cải thiện.",
    "Đọc email tóm tắt buổi phỏng vấn, tìm đúng các câu hỏi đã được hỏi và câu trả lời.",
    "Kể lại câu hỏi của người khác bằng câu hỏi tường thuật (asked me why… / asked if…) và nói về thói quen trong quá khứ với used to.",
    "Viết email tóm tắt một buổi phỏng vấn nghỉ việc."
  ],

  vocabulary: [
    { word: "exit interview", ipa: "/ˈeksɪt ˈɪntərvjuː/", pos: "noun", meaning: "buổi phỏng vấn nghỉ việc (hỏi lý do và góp ý khi nhân viên rời công ty)",
      example: "Lan held an exit interview with Peter in his last week.", exampleVi: "Chị Lan tổ chức buổi phỏng vấn nghỉ việc với Peter trong tuần cuối của anh ấy." },
    { word: "work-life balance", ipa: "/ˌwɜːrk laɪf ˈbæləns/", pos: "noun", meaning: "cân bằng giữa công việc và cuộc sống riêng",
      example: "He said the work-life balance could be better.", exampleVi: "Anh ấy nói sự cân bằng công việc – cuộc sống có thể tốt hơn." },
    { word: "management style", ipa: "/ˈmænɪdʒmənt staɪl/", pos: "noun", meaning: "phong cách quản lý",
      example: "I like David's management style. He is clear and fair.", exampleVi: "Tôi thích phong cách quản lý của David. Anh ấy rõ ràng và công bằng." },
    { word: "confidential", ipa: "/ˌkɑːnfɪˈdenʃəl/", pos: "adjective", meaning: "bí mật, được giữ kín",
      example: "The exit interview is confidential.", exampleVi: "Buổi phỏng vấn nghỉ việc được giữ kín." },
    { word: "honest", ipa: "/ˈɑːnɪst/", pos: "adjective", meaning: "thẳng thắn, trung thực",
      example: "Please be honest. Your answers will help us improve.", exampleVi: "Xin hãy thẳng thắn. Câu trả lời của bạn sẽ giúp chúng tôi cải thiện." },
    { word: "opportunity", ipa: "/ˌɑːpərˈtuːnəti/", pos: "noun", meaning: "cơ hội",
      example: "He left because he found a better opportunity.", exampleVi: "Anh ấy nghỉ việc vì tìm được một cơ hội tốt hơn." },
    { word: "aspect", ipa: "/ˈæspekt/", pos: "noun", meaning: "khía cạnh",
      example: "Which aspect of the job did you enjoy most?", exampleVi: "Bạn thích khía cạnh nào của công việc nhất?" },
    { word: "career development", ipa: "/kəˈrɪr dɪˈveləpmənt/", pos: "noun", meaning: "phát triển nghề nghiệp",
      example: "Many people leave because they want more career development.", exampleVi: "Nhiều người nghỉ việc vì muốn phát triển nghề nghiệp nhiều hơn." },
    { word: "workplace culture", ipa: "/ˈwɜːrkpleɪs ˈkʌltʃər/", pos: "noun", meaning: "văn hóa nơi làm việc",
      example: "The workplace culture here is friendly.", exampleVi: "Văn hóa nơi làm việc ở đây rất thân thiện." },
    { word: "suggestion", ipa: "/səɡˈdʒestʃən/", pos: "noun", meaning: "lời gợi ý, đề xuất",
      example: "Do you have any suggestions for the company?", exampleVi: "Bạn có gợi ý nào cho công ty không?" }
  ],

  pronunciation: {
    groups: [
      {
        title: "Trọng âm của từ",
        text: "Những từ dưới đây hay gặp trong buổi phỏng vấn nghỉ việc. Âm tiết in hoa là âm đọc to và dài hơn.",
        items: [
          { word: "confidential", marked: "con·fi·DEN·tial", note: "Từ tận cùng bằng -tial: nhấn âm tiết ngay trước đó." },
          { word: "honest", marked: "HON·est", note: "Chữ h không đọc: /ˈɑːnɪst/." },
          { word: "aspect", marked: "AS·pect" },
          { word: "suggestion", marked: "sug·GES·tion" },
          { word: "development", marked: "de·VEL·op·ment" },
          { word: "balance", marked: "BAL·ance" }
        ]
      },
      {
        title: "used to đọc liền",
        text: "Trong used to, chữ d không đọc rõ: /juːst tə/ (nghe như “yus-tu”). Đọc nhẹ và liền, nhấn động từ chính phía sau.",
        items: [
          { word: "used to work", marked: "/juːst tə/ WORK", note: "I used to work in a bank." },
          { word: "didn't use to", marked: "didn't /juːs tə/", note: "Trong câu phủ định và nghi vấn, use to đọc /juːs tə/." }
        ]
      }
    ],
    sentences: [
      "She asked me why I was leaving.",
      "I used to work in a big bank in Toronto.",
      "She asked whether I would recommend the company."
    ]
  },

  listening: {
    title: "An honest exit interview",
    setting: "Tuần làm việc cuối cùng của Peter, phòng Nhân sự. Chị Lan phỏng vấn nghỉ việc với Peter.",
    speakers: { lan: "Lan (Senior HR Officer)", peter: "Peter (Sales Executive)" },
    lines: [
      { s: "lan", text: "Thanks for coming, Peter. This exit interview is confidential, and your answers will help us improve.",
        vi: "Cảm ơn anh đã đến, Peter. Buổi phỏng vấn nghỉ việc này được giữ kín và câu trả lời của anh sẽ giúp chúng tôi cải thiện." },
      { s: "peter", text: "Sure. I'll be honest.",
        vi: "Vâng. Tôi sẽ thẳng thắn." },
      { s: "lan", text: "Why did you decide to leave?",
        vi: "Vì sao anh quyết định nghỉ việc?" },
      { s: "peter", text: "Personal reasons. My parents are getting older, and my family wants me back in Canada.",
        vi: "Vì lý do cá nhân. Bố mẹ tôi đang già đi và gia đình muốn tôi trở về Canada." },
      { s: "lan", text: "Did you enjoy your job here?",
        vi: "Anh có thích công việc ở đây không?" },
      { s: "peter", text: "Very much. I used to work in a big bank in Toronto, and the team here is more friendly.",
        vi: "Rất thích. Trước đây tôi làm ở một ngân hàng lớn ở Toronto, và nhóm ở đây thân thiện hơn." },
      { s: "lan", text: "What did you like most about working here?",
        vi: "Anh thích nhất điều gì khi làm việc ở đây?" },
      { s: "peter", text: "My colleagues, and David's management style. He is clear and fair.",
        vi: "Các đồng nghiệp, và phong cách quản lý của David. Anh ấy rõ ràng và công bằng." },
      { s: "lan", text: "Is there anything we could improve?",
        vi: "Có điều gì chúng tôi có thể cải thiện không?" },
      { s: "peter", text: "The work-life balance. I used to finish at five in my last job, but here we sometimes stay late near the end of the month.",
        vi: "Sự cân bằng công việc – cuộc sống. Ở công việc trước tôi thường tan lúc năm giờ, nhưng ở đây thỉnh thoảng chúng tôi ở lại muộn vào gần cuối tháng." },
      { s: "lan", text: "Would you recommend Riverside Trading to a friend?",
        vi: "Anh có giới thiệu Riverside Trading cho bạn bè không?" },
      { s: "peter", text: "Yes, I would. Thank you for all your support, Lan.",
        vi: "Có, tôi sẽ giới thiệu. Cảm ơn chị vì mọi sự hỗ trợ, Lan." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "Why is Peter leaving?",
        options: ["He has a new job", "Personal reasons: his family wants him back in Canada", "He does not like David", "The salary is too low"],
        answer: 1, explanation: "Peter nói: “Personal reasons. My parents are getting older, and my family wants me back in Canada.”" },
      { id: "l2", type: "choice", prompt: "What did Peter like most about working at Riverside Trading?",
        options: ["The salary", "The office location", "His colleagues and David's management style", "The canteen"],
        answer: 2, explanation: "“My colleagues, and David's management style. He is clear and fair.”" },
      { id: "l3", type: "choice", prompt: "What could the company improve, according to Peter?",
        options: ["The canteen food", "The IT system", "The salary", "The work-life balance"],
        answer: 3, explanation: "“The work-life balance… here we sometimes stay late near the end of the month.”" }
    ]
  },

  reading: {
    title: "Exit interview summary",
    intro: "Email chị Lan gửi David sau buổi phỏng vấn nghỉ việc với Peter. Đọc và tìm các câu chị đã hỏi và câu trả lời của Peter.",
    email: {
      from: "Lan Pham <lan.pham@riverside-trading.example>",
      to: "David Brown",
      date: "Thursday",
      subject: "Exit interview – Peter Clark",
      greeting: "Dear David,",
      paragraphs: [
        "I had the exit interview with Peter yesterday. Here is a short summary. Please keep it confidential.",
        "I asked him why he was leaving. He said that his family wanted him back in Canada. I asked him if he enjoyed his job, and he said that he enjoyed it very much. He told me that he used to work in a big bank in Toronto, and the team here was more friendly. I also asked him what he liked most. He said that he liked his colleagues and your management style. Then I asked him if there was anything we could improve. He answered that:"
      ],
      list: [
        "the work-life balance could be better",
        "people sometimes stay late near the end of the month"
      ],
      after: [
        "Finally, I asked whether he would recommend the company to a friend. He said that he definitely would.",
        "Could we talk about the work-life balance at the next management meeting?"
      ],
      closing: "Best regards,",
      signature: ["Lan Pham", "Senior HR Officer, Riverside Trading"]
    },
    glossary: [
      { term: "keep it confidential", vi: "giữ kín" },
      { term: "answered that", vi: "trả lời rằng" },
      { term: "definitely", vi: "chắc chắn" },
      { term: "management meeting", vi: "cuộc họp quản lý" },
      { term: "near the end of the month", vi: "gần cuối tháng" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "What did Lan ask Peter first?",
        options: ["If he enjoyed his job", "Why he was leaving", "What he liked most", "Whether he would recommend the company"],
        answer: 1, explanation: "“I asked him why he was leaving.” Các câu hỏi khác được hỏi sau đó." },
      { id: "r2", type: "choice", prompt: "What does Peter think could be better?",
        options: ["The management style", "The team", "The work-life balance", "The training"],
        answer: 2, explanation: "“the work-life balance could be better; people sometimes stay late near the end of the month.”" },
      { id: "r3", type: "choice", prompt: "Which statement is TRUE?",
        options: ["Peter did not enjoy his job.", "Peter used to work in a big bank in Toronto.", "Peter would not recommend the company.", "Lan did not ask about management style."],
        answer: 1, explanation: "“He told me that he used to work in a big bank in Toronto.” Peter rất thích công việc, sẽ giới thiệu công ty, và chị Lan có hỏi về điều anh thích nhất (trong đó có phong cách quản lý)." }
    ]
  },

  grammar: {
    title: "Reported questions and used to",
    titleVi: "Câu hỏi tường thuật và used to",
    intro: "Để kể lại một câu hỏi, bạn dùng asked + từ để hỏi hoặc if / whether, và trật tự câu trở thành câu khẳng định. Dùng used to khi nói về thói quen hoặc tình trạng trong quá khứ nay không còn. Bốn mẫu dưới đây có trong cuộc phỏng vấn và email bạn vừa học.",
    patterns: [
      { form: "asked (me) + từ để hỏi + chủ ngữ + động từ (lùi thì)", use: "Kể lại câu hỏi có từ để hỏi (why, what, where, when, how). Không đảo trật tự, không dùng do / does / did, không có dấu hỏi.",
        examples: ["“Why are you leaving?” → She asked me why I was leaving.", "“What do you like most?” → She asked me what I liked most."] },
      { form: "asked (me) + if / whether + chủ ngữ + động từ (lùi thì)", use: "Kể lại câu hỏi có / không. Dùng if hoặc whether; không dùng that.",
        examples: ["“Did you enjoy your job?” → She asked me if I enjoyed my job.", "“Would you recommend us?” → She asked whether I would recommend the company."] },
      { form: "used to + động từ nguyên mẫu", use: "Nói thói quen hoặc tình trạng trong quá khứ nay không còn. Không đổi theo ngôi. Câu phủ định: didn't use to; câu hỏi: Did you use to…?",
        examples: ["I used to work in a big bank in Toronto.", "I used to finish at five in my last job."] },
      { form: "Đừng nhầm: be used to + V-ing", use: "be used to + V-ing nghĩa là “đã quen với”, khác hẳn used to + động từ nguyên mẫu (thói quen quá khứ).",
        examples: ["I used to live in Canada. (trước đây sống ở Canada)", "I am used to living in Vietnam. (đã quen với việc sống ở Việt Nam)"] }
    ],
    mistakes: [
      { wrong: "She asked me why did I leave.", right: "She asked me why I left.", note: "Câu hỏi tường thuật không đảo trật tự và không dùng did." },
      { wrong: "She asked me did I enjoy my job.", right: "She asked me if I enjoyed my job.", note: "Câu hỏi có / không cần if hoặc whether." },
      { wrong: "I used to working in a bank.", right: "I used to work in a bank.", note: "used to + động từ nguyên mẫu." },
      { wrong: "We use to finish at five.", right: "We used to finish at five.", note: "Nói về quá khứ nên dùng used to, có -d." }
    ],
    tip: "Trong email tóm tắt buổi phỏng vấn nghỉ việc, hãy dùng câu hỏi tường thuật để kể lại chính xác những gì đã hỏi và trả lời, sau đó đề xuất việc cần làm. Giữ nội dung bí mật và chỉ chia sẻ với người có trách nhiệm."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "“Why are you leaving?” → She asked me why I ___ leaving.",
      options: ["am", "was", "did", "were being"],
      answer: 1, explanation: "Hiện tại “are” (với you) lùi thành quá khứ, và chủ ngữ đổi thành I: why I was leaving." },
    { id: "p2", type: "gap", prompt: "“Did you enjoy your job?” → She asked me ___ I enjoyed my job.",
      options: ["that", "what", "if", "did"],
      answer: 2, explanation: "Câu hỏi có / không được kể lại bằng if hoặc whether: asked me if I enjoyed…" },
    { id: "p3", type: "gap", prompt: "She asked me why ___ my job.",
      options: ["did I leave", "did leave I", "do I leave", "I left"],
      answer: 3, explanation: "Câu hỏi tường thuật: từ để hỏi + chủ ngữ + động từ quá khứ: why I left. Không dùng did và không đảo trật tự." },
    { id: "p4", type: "gap", prompt: "I ___ finish at five in my last job, but now I finish at six.",
      options: ["use to", "used to", "am used to", "was used to"],
      answer: 1, explanation: "used to + động từ nguyên mẫu diễn tả thói quen quá khứ nay không còn. “am used to” phải đi với V-ing và nghĩa là “quen với”." },
    { id: "p5", type: "choice", prompt: "Which sentence is correct?",
      options: ["She asked me why did I leave.", "She asked me did I enjoy my job.", "She asked me if I had a good team.", "She asked me what do I like."],
      answer: 2, explanation: "Câu C dùng if và trật tự khẳng định. Câu A, B, D đều giữ trật tự câu hỏi hoặc thiếu if." },
    { id: "p6", type: "gap", prompt: "An ___ interview is a talk with an employee who is leaving the company.",
      options: ["exit", "entry", "panel", "ice"],
      answer: 0, explanation: "Exit interview = buổi phỏng vấn nghỉ việc. Entry, panel và ice không tạo thành cụm này." },
    { id: "p7", type: "gap", prompt: "Peter said he would ___ the company to a friend.",
      options: ["decline", "enclose", "recommend", "resign"],
      answer: 2, explanation: "Recommend = giới thiệu, khuyên ai nên chọn. Decline là từ chối, enclose là đính kèm, resign là xin thôi việc." },
    { id: "p8", type: "gap", prompt: "The balance between work and private life is called work-life ___.",
      options: ["benefit", "budget", "border", "balance"],
      answer: 3, explanation: "Cụm cố định: work-life balance = cân bằng giữa công việc và cuộc sống riêng." },
    { id: "p9", type: "choice", context: "Peter says: “I used to work in a bank.”", prompt: "What does this mean?",
      options: ["He works in a bank now.", "He worked in a bank in the past, but not now.", "He will work in a bank.", "He is used to the bank."],
      answer: 1, explanation: "used to + động từ nói về thói quen hoặc tình trạng trong quá khứ nay không còn: trước đây anh làm ở ngân hàng, bây giờ thì không." },
    { id: "p10", type: "gap", prompt: "Did you ___ work at night in your old job?",
      options: ["used to", "use to", "using to", "use"],
      answer: 1, explanation: "Trong câu hỏi với did, dùng use to (không có -d): Did you use to work…? Dạng used to chỉ dùng trong câu khẳng định." }
  ],

  writing: {
    title: "Summarize an exit interview",
    task: "Bạn là Tuấn. Bạn vừa làm buổi phỏng vấn nghỉ việc với chị Ha (kế toán). Ha trả lời: nghỉ việc vì có công việc tốt hơn gần nhà; rất thích công việc; trước đây làm ở một công ty nhỏ ở Hà Nội, đào tạo ở đây tốt hơn nhiều; sẽ giới thiệu công ty cho bạn bè. Viết email gửi chị Lan (80–120 từ) tóm tắt bằng câu hỏi tường thuật và câu có used to.",
    requirements: [
      "Mở đầu bằng lời chào phù hợp.",
      "Có ít nhất một câu với asked her + từ để hỏi (why…).",
      "Có ít nhất một câu với asked her if / whether.",
      "Có câu với used to.",
      "Có câu với said that hoặc told me that.",
      "Kết thúc email và ký tên."
    ],
    minWords: 80,
    maxWords: 120,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Dear … / Hi …)", pattern: "\\bdear\\b|\\bhi\\b" },
      { label: "Có asked + từ để hỏi (why / what / how…)", pattern: "asked (her |him |me )?(why|what|how|where|when)\\b" },
      { label: "Có asked + if / whether", pattern: "asked (her |him |me )?(if|whether)\\b" },
      { label: "Có used to", pattern: "\\bused to\\b" },
      { label: "Có said that / told me that", pattern: "\\b(said|told me) that\\b" },
      { label: "Có lời kết (Best regards …)", pattern: "regards|sincerely|best wishes" }
    ],
    model: [
      "Dear Lan,",
      "I had the exit interview with Ha yesterday. Here is a short summary.",
      "I asked her why she was leaving. She said that she had a better offer closer to her home. I asked her if she enjoyed her work, and she said that she enjoyed it very much. She told me that she used to work for a small company in Hanoi, and the training here was much better. Finally, I asked whether she would recommend Riverside Trading to her friends. She said that she definitely would.",
      "Please let me know if you need more details.",
      "Best regards,",
      "Tuan Nguyen"
    ]
  },

  review: {
    keyPhrases: [
      { en: "I asked him why he was leaving.", vi: "Tôi hỏi anh ấy vì sao anh ấy nghỉ việc." },
      { en: "She asked me if I enjoyed my job.", vi: "Chị ấy hỏi tôi có thích công việc không." },
      { en: "She asked whether I would recommend the company.", vi: "Chị ấy hỏi tôi có giới thiệu công ty không." },
      { en: "I used to work in a big bank in Toronto.", vi: "Trước đây tôi làm ở một ngân hàng lớn ở Toronto." },
      { en: "The work-life balance could be better.", vi: "Sự cân bằng công việc – cuộc sống có thể tốt hơn." },
      { en: "This exit interview is confidential.", vi: "Buổi phỏng vấn nghỉ việc này được giữ kín." }
    ]
  }
});
