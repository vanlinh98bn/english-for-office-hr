/* =========================================================
   B1 · Module 2 (Employee Lifecycle) · Bài 3
   "Promotions and transfers"
   Nối tiếp B1-M2-L2: vài tháng sau, Tuấn được thăng lên HR Executive;
   Mai Le (trợ lý của David) chuyển sang phòng Logistics. Tuấn kể lại cho
   Hoa nghe trong giờ ăn trưa ở nhà ăn những điều chị Lan và anh Hải nói.
   Trước đó chị Lan đã gửi David email báo Mai muốn chuyển phòng.
   Thời gian nói áng chừng (tháng sau, cuối tháng…).
   ========================================================= */
window.EOH.registerLesson({
  id: "b1-m2-l3",
  reviewStatus: "approved", // Linh duyệt ngày 23/10/2026
  duration: "40–50 phút",
  scenario: "Vài tháng sau, Tuấn làm tốt nên công ty thăng chức cho anh lên HR Executive. Cùng lúc, Mai Le, trợ lý của David, xin chuyển sang phòng Logistics. Trong giờ ăn trưa ở nhà ăn, Tuấn kể lại cho Hoa nghe những điều chị Lan, anh Hải và Mai đã nói với anh. Trước đó, chị Lan đã gửi David một email báo về đề nghị của Mai.",

  objectives: [
    "Hiểu và dùng 10 từ vựng thường gặp khi nói về thăng chức và chuyển bộ phận.",
    "Nghe cuộc trò chuyện kể lại lời người khác, ghi lại chức danh mới, nhiệm vụ mới và việc chuyển phòng.",
    "Đọc email báo cáo lại lời đề nghị của một nhân viên, tìm đúng lý do và thời điểm chuyển.",
    "Kể lại lời người khác bằng câu tường thuật: said (that), told + người + that, và đổi thì (will → would, can → could).",
    "Viết email kể lại cho đồng nghiệp những gì quản lý đã nói với bạn."
  ],

  vocabulary: [
    { word: "promote", ipa: "/prəˈmoʊt/", pos: "verb", meaning: "thăng chức",
      example: "The company is promoting Tuan to HR Executive.", exampleVi: "Công ty thăng chức cho Tuấn lên HR Executive." },
    { word: "transfer", ipa: "/trænsˈfɜːr/", pos: "verb / noun", meaning: "chuyển (sang bộ phận khác); sự chuyển bộ phận",
      example: "Mai is transferring to the Logistics department.", exampleVi: "Mai đang chuyển sang phòng Logistics." },
    { word: "role", ipa: "/roʊl/", pos: "noun", meaning: "vai trò, vị trí công việc",
      example: "Tuan will start the new role next month.", exampleVi: "Tuấn sẽ bắt đầu vai trò mới vào tháng sau." },
    { word: "take on", ipa: "/teɪk ɑːn/", pos: "phrasal verb", meaning: "đảm nhận (trách nhiệm, công việc mới)",
      example: "He will take on more responsibility in the new role.", exampleVi: "Anh ấy sẽ đảm nhận nhiều trách nhiệm hơn ở vai trò mới." },
    { word: "replace", ipa: "/rɪˈpleɪs/", pos: "verb", meaning: "thay thế",
      example: "A new assistant will replace Tuan in the HR office.", exampleVi: "Một trợ lý mới sẽ thay Tuấn ở phòng Nhân sự." },
    { word: "career path", ipa: "/kəˈrɪr pæθ/", pos: "noun", meaning: "lộ trình nghề nghiệp",
      example: "The company has a clear career path for HR staff.", exampleVi: "Công ty có lộ trình nghề nghiệp rõ ràng cho nhân viên Nhân sự." },
    { word: "internal vacancy", ipa: "/ɪnˈtɜːrnəl ˈveɪkənsi/", pos: "noun", meaning: "vị trí trống tuyển trong nội bộ công ty",
      example: "Employees can apply for an internal vacancy first.", exampleVi: "Nhân viên có thể ứng tuyển vị trí trống nội bộ trước." },
    { word: "congratulate", ipa: "/kənˈɡrætʃəleɪt/", pos: "verb", meaning: "chúc mừng",
      example: "Everyone congratulated Tuan on his promotion.", exampleVi: "Mọi người chúc mừng Tuấn được thăng chức." },
    { word: "announce", ipa: "/əˈnaʊns/", pos: "verb", meaning: "thông báo chính thức",
      example: "The company will announce the changes next week.", exampleVi: "Công ty sẽ thông báo chính thức các thay đổi vào tuần sau." },
    { word: "responsibilities", ipa: "/rɪˌspɑːnsəˈbɪlətiz/", pos: "noun", meaning: "các trách nhiệm (số nhiều)",
      example: "His main responsibilities include recruitment and training.", exampleVi: "Trách nhiệm chính của anh ấy gồm tuyển dụng và đào tạo." }
  ],

  pronunciation: {
    groups: [
      {
        title: "Trọng âm của từ",
        text: "Những từ dưới đây hay gặp khi nói về thăng chức và chuyển phòng. Âm tiết in hoa là âm đọc to và dài hơn.",
        items: [
          { word: "promote", marked: "pro·MOTE", note: "Động từ hai âm tiết: nhấn âm tiết sau." },
          { word: "transfer (verb)", marked: "trans·FER", note: "Động từ nhấn âm sau; danh từ transfer nhấn âm đầu: TRANS·fer." },
          { word: "replace", marked: "re·PLACE" },
          { word: "announce", marked: "an·NOUNCE" },
          { word: "congratulate", marked: "con·GRAT·u·late" },
          { word: "responsibilities", marked: "re·spon·si·BIL·i·ties", note: "Nhấn âm tiết thứ tư." }
        ]
      },
      {
        title: "said và that",
        text: "Trong câu tường thuật, said đọc rõ /sed/, còn that (liên từ) đọc rất nhẹ /ðət/. Nhấn vào từ nội dung, không nhấn that.",
        items: [
          { word: "said", marked: "/sed/", note: "Vần với bed, không vần với paid." },
          { word: "that", marked: "/ðət/", note: "She said /ðət/ I would start next month." }
        ]
      }
    ],
    sentences: [
      "She said that the company was promoting me.",
      "She told me that I would start the new role next month.",
      "Mai said that she wanted to try something new."
    ]
  },

  listening: {
    title: "Big news at lunch",
    setting: "Giờ ăn trưa ở nhà ăn, vài tháng sau khi chị Thảo được xác nhận làm chính thức. Tuấn kể cho Hoa nghe tin vui về việc thăng chức.",
    speakers: { hoa: "Hoa (Accountant)", tuan: "Tuan (HR)" },
    lines: [
      { s: "hoa", text: "Tuan, you look happy today! What happened?",
        vi: "Tuấn, hôm nay anh trông vui quá! Có chuyện gì thế?" },
      { s: "tuan", text: "Lan called me into her office this morning. She said that the company was promoting me to HR Executive.",
        vi: "Sáng nay chị Lan gọi tôi vào văn phòng. Chị ấy nói rằng công ty đang thăng chức cho tôi lên HR Executive." },
      { s: "hoa", text: "Congratulations! What else did she say?",
        vi: "Chúc mừng anh! Chị ấy còn nói gì nữa?" },
      { s: "tuan", text: "She said that I would start the new role next month. She told me that my main responsibilities would be recruitment and training.",
        vi: "Chị ấy nói tôi sẽ bắt đầu vai trò mới vào tháng sau. Chị ấy bảo tôi rằng trách nhiệm chính của tôi sẽ là tuyển dụng và đào tạo." },
      { s: "hoa", text: "Will your salary change?",
        vi: "Lương của anh có thay đổi không?" },
      { s: "tuan", text: "Mr. Hai said that HR would send me a new contract letter. He told me that the new salary was in the letter.",
        vi: "Anh Hải nói bên Nhân sự sẽ gửi cho tôi một thư hợp đồng mới. Anh ấy bảo tôi rằng mức lương mới nằm trong thư." },
      { s: "hoa", text: "And who will replace you as HR Assistant?",
        vi: "Vậy ai sẽ thay anh làm HR Assistant?" },
      { s: "tuan", text: "Lan said that they were hiring a new assistant. She also said that Mai Le was transferring to the Logistics department.",
        vi: "Chị Lan nói họ đang tuyển một trợ lý mới. Chị ấy cũng nói Mai Lê đang chuyển sang phòng Logistics." },
      { s: "hoa", text: "Mai? Really? Did she ask for the transfer?",
        vi: "Mai à? Thật sao? Cô ấy tự xin chuyển à?" },
      { s: "tuan", text: "Yes. Mai told me that she wanted to try something new. She said that she liked working with David, but she needed a change.",
        vi: "Ừ. Mai nói với tôi rằng cô ấy muốn thử điều mới. Cô ấy nói cô ấy thích làm việc với David nhưng cần một sự thay đổi." },
      { s: "hoa", text: "That's interesting. Did Lan say when Mai will move?",
        vi: "Thú vị đấy. Chị Lan có nói khi nào Mai chuyển không?" },
      { s: "tuan", text: "She said that Mai was moving at the end of this month.",
        vi: "Chị ấy nói Mai sẽ chuyển vào cuối tháng này." },
      { s: "hoa", text: "Well, congratulations again, Tuan. Lunch is on me today!",
        vi: "Vậy thì chúc mừng anh lần nữa, Tuấn. Hôm nay tôi mời anh ăn trưa!" }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "What did Lan say about Tuan?",
        options: ["The company was promoting him to HR Manager", "The company was promoting him to HR Executive", "He was leaving the company", "He was moving to Logistics"],
        answer: 1, explanation: "Tuấn nói: “She said that the company was promoting me to HR Executive.” Chức danh là HR Executive, không phải HR Manager." },
      { id: "l2", type: "choice", prompt: "What will Tuan's main responsibilities be in the new role?",
        options: ["Accounting and payroll", "Sales visits", "IT support", "Recruitment and training"],
        answer: 3, explanation: "“She told me that my main responsibilities would be recruitment and training.”" },
      { id: "l3", type: "choice", prompt: "Which department is Mai transferring to?",
        options: ["Logistics", "Accounting", "IT Support", "Sales"],
        answer: 0, explanation: "“Mai Le was transferring to the Logistics department.” Mai muốn thử điều mới nhưng vẫn thích làm việc với David." }
    ]
  },

  reading: {
    title: "Mai's request",
    intro: "Email chị Lan gửi David vài tuần trước đó, kể lại những gì Mai đã nói với chị. Đọc và tìm lý do cùng thời điểm Mai muốn chuyển.",
    email: {
      from: "Lan Pham <lan.pham@riverside-trading.example>",
      to: "David Brown",
      date: "Tuesday",
      subject: "Mai's request to transfer",
      greeting: "Dear David,",
      paragraphs: [
        "I spoke to Mai Le yesterday, and I would like to tell you what she said before we make any decision. Please keep this between us for now.",
        "Mai told me that she wanted to apply for an internal vacancy in the Logistics department. She said that she liked working with you and the sales team, but she needed a new challenge. She also said that:"
      ],
      list: [
        "she had learned a lot as your assistant",
        "she would like to move at the end of next month",
        "she could train her replacement for two weeks"
      ],
      after: [
        "I told her that I would discuss it with you first. I also said that the company would announce any change officially after the decision.",
        "Could we meet this week to talk about it? If you agree, I will start looking for a new assistant."
      ],
      closing: "Best regards,",
      signature: ["Lan Pham", "Senior HR Officer, Riverside Trading"]
    },
    glossary: [
      { term: "keep this between us", vi: "giữ kín chuyện này" },
      { term: "challenge", vi: "thử thách" },
      { term: "replacement", vi: "người thay thế" },
      { term: "officially", vi: "một cách chính thức" },
      { term: "make a decision", vi: "đưa ra quyết định" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "Why is Lan writing to David?",
        options: ["To tell him about Mai's request to transfer", "To announce Tuan's promotion", "To ask him to hire a new accountant", "To invite him to an interview"],
        answer: 0, explanation: "“I would like to tell you what she said before we make any decision.” Thư báo về đề nghị chuyển phòng của Mai." },
      { id: "r2", type: "choice", prompt: "When would Mai like to move?",
        options: ["Tomorrow", "At the end of this month", "At the end of next month", "After two weeks"],
        answer: 2, explanation: "“she would like to move at the end of next month”. Hai tuần là thời gian chị ấy có thể huấn luyện người thay." },
      { id: "r3", type: "choice", prompt: "Which statement is TRUE?",
        options: ["Mai wants to leave the company.", "Mai did not like working with the sales team.", "Mai could train her replacement for two weeks.", "The company has already announced the change."],
        answer: 2, explanation: "“she could train her replacement for two weeks.” Mai muốn chuyển sang phòng khác (không nghỉ việc), thích làm việc với nhóm Kinh doanh, và công ty sẽ thông báo sau khi có quyết định." }
    ]
  },

  grammar: {
    title: "Reported statements",
    titleVi: "Câu tường thuật: kể lại lời người khác",
    intro: "Khi kể lại điều ai đó đã nói, bạn dùng câu tường thuật. Thì của động từ thường lùi về quá khứ một bậc. Bốn mẫu dưới đây có trong cuộc trò chuyện và email bạn vừa học.",
    patterns: [
      { form: "said (that) + mệnh đề lùi thì   ·   told + người + (that) + mệnh đề lùi thì", use: "said không có người nghe theo sau. told luôn có người nghe (told me, told her). Chữ that có thể bỏ.",
        examples: ["She said that the company was promoting me.", "She told me that I would start next month."] },
      { form: "Lùi thì: am/is/are → was/were · will → would · can → could · hiện tại đơn → quá khứ đơn", use: "Lời nói gốc ở hiện tại hoặc tương lai thì khi kể lại lùi về quá khứ.",
        examples: ["“I want to try something new.” → Mai said that she wanted to try something new.", "“I will start next month.” → She said that she would start next month."] },
      { form: "Đổi từ chỉ thời gian: now → then · today → that day · tomorrow → the next day · this month → that month", use: "Khi kể lại vào lúc khác, các từ chỉ thời gian cũng đổi để khớp với lúc đó. Từ ngôi cũng đổi (I → she / he).",
        examples: ["“I will move tomorrow.” → She said that she would move the next day.", "“I like my job now.” → He said that he liked his job then."] },
      { form: "Lời nói gốc vẫn đúng: có thể giữ nguyên thì", use: "Nếu điều được nói vẫn đúng ngay lúc kể, có thể không lùi thì, nhưng lùi thì luôn đúng và an toàn.",
        examples: ["Lan said that Mai is moving at the end of this month. (vẫn đúng)", "Lan said that Mai was moving at the end of this month. (cũng đúng)"] }
    ],
    mistakes: [
      { wrong: "She said me that the company was promoting me.", right: "She told me that the company was promoting me.", note: "said không đi với người nghe. Dùng told me hoặc said (that)." },
      { wrong: "She told that she was moving.", right: "She said that she was moving.", note: "told cần có người nghe: told me / told him. Nếu không có, dùng said." },
      { wrong: "Last year she said that she will start next month.", right: "Last year she said that she would start the following month.", note: "Kể lại việc đã qua nên will → would, và next month → the following month." },
      { wrong: "He said that he likes his new role yesterday.", right: "He said that he liked his new role.", note: "Câu tường thuật lùi thì: likes → liked, và không thêm trạng từ thời gian dư." }
    ],
    tip: "Trong công việc, hãy kể lại chính xác những gì ai đó đã nói, nhất là các việc nhạy cảm như thăng chức, chuyển phòng hay lương. Tránh thêm ý kiến cá nhân. Nếu bạn không chắc, hãy hỏi lại người đó trước khi kể cho người khác nghe."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "Last week she said that she ___ start the new role the following month.",
      options: ["would", "starts", "start", "is"],
      answer: 0, explanation: "“I will start” → she said that she would start: will lùi thành would. Sau would dùng động từ nguyên mẫu." },
    { id: "p2", type: "gap", prompt: "Lan told ___ that I would start the new role.",
      options: ["to me", "me", "I", "for me"],
      answer: 1, explanation: "told luôn có người nghe theo sau, ở dạng tân ngữ: told me." },
    { id: "p3", type: "gap", prompt: "Mr. Hai ___ that the new salary was in the letter.",
      options: ["told", "said", "tell", "speak"],
      answer: 1, explanation: "said + that, không có người nghe. “told” cần có tân ngữ (told me)." },
    { id: "p4", type: "choice", prompt: "Which sentence is correct?",
      options: ["She said me that she was promoting me.", "She told that she was promoting me.", "She said that she was promoting me.", "She told me that she is promoting me yesterday."],
      answer: 2, explanation: "said + that + mệnh đề lùi thì là đúng. Câu A dùng said me, câu B thiếu người nghe sau told, câu D vừa không lùi thì vừa thêm “yesterday” gây mâu thuẫn." },
    { id: "p5", type: "gap", prompt: "Last year a candidate said, “I can start tomorrow.” → He said that he ___ start the next day.",
      options: ["can", "would be", "does", "could"],
      answer: 3, explanation: "Việc đã qua (Last year) nên can lùi thành could trong câu tường thuật: could start. “would be” và “does” đổi nghĩa." },
    { id: "p6", type: "gap", prompt: "Mai wants to ___ to the Logistics department.",
      options: ["transfer", "promote", "announce", "congratulate"],
      answer: 0, explanation: "Transfer = chuyển sang bộ phận khác. Promote là thăng chức, announce là thông báo, congratulate là chúc mừng." },
    { id: "p7", type: "gap", prompt: "The company will ___ Tuan to HR Executive because of his good work.",
      options: ["transfer", "replace", "promote", "announce"],
      answer: 2, explanation: "Promote = thăng chức lên vị trí cao hơn. Replace là thay thế người khác." },
    { id: "p8", type: "gap", prompt: "Mai is moving, so the company needs to ___ her as David's assistant.",
      options: ["replace", "promote", "enclose", "decline"],
      answer: 0, explanation: "Replace = thay thế (tìm người mới làm thay Mai). Promote là thăng chức." },
    { id: "p9", type: "choice", context: "Lan said: “We are hiring a new assistant.”", prompt: "Which is the correct reported sentence?",
      options: ["Lan said that they hire a new assistant.", "Lan said that they were hiring a new assistant.", "Lan said me that they were hiring a new assistant.", "Lan said that they will hiring a new assistant."],
      answer: 1, explanation: "Hiện tại tiếp diễn “are hiring” lùi thành quá khứ tiếp diễn “were hiring”. Các câu còn lại sai thì hoặc dùng said me." },
    { id: "p10", type: "choice", prompt: "In reported speech (past), “tomorrow” usually changes to:",
      options: ["today", "yesterday", "the next day", "now"],
      answer: 2, explanation: "Khi kể lại lời nói trong quá khứ, tomorrow đổi thành the next day (hoặc the following day)." }
  ],

  writing: {
    title: "Tell a colleague what your manager said",
    task: "Bạn là Tuấn. Anh Hải vừa nói với bạn: “I am very happy with your work. You will start the new role next month. Lan will train you for two weeks. You can ask me if you have any questions.” Viết email gửi Hoa (80–120 từ) kể lại những điều anh Hải đã nói bằng câu tường thuật, rồi rủ Hoa đi ăn trưa.",
    requirements: [
      "Mở đầu bằng lời chào phù hợp.",
      "Có ít nhất một câu với said that.",
      "Có ít nhất một câu với told me that.",
      "Có will → would và can → could (hoặc was / were) khi kể lại.",
      "Rủ Hoa ăn trưa hoặc hẹn gặp.",
      "Kết thúc email và ký tên."
    ],
    minWords: 80,
    maxWords: 120,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Dear … / Hi …)", pattern: "\\bdear\\b|\\bhi\\b" },
      { label: "Có said that", pattern: "\\bsaid that\\b" },
      { label: "Có told me that", pattern: "\\btold me that\\b" },
      { label: "Có would + động từ", pattern: "\\bwould \\w+" },
      { label: "Có was / were / could (lùi thì)", pattern: "\\b(was|were|could) \\w+" },
      { label: "Có lời kết (Best wishes …)", pattern: "regards|sincerely|best wishes|thanks" }
    ],
    model: [
      "Hi Hoa,",
      "I have some good news. Mr. Hai called me into his office this morning. He said that he was very happy with my work. He told me that I would start the new role next month. He also said that Lan would train me for two weeks. Finally, he told me that I could ask him if I had any questions.",
      "I am really excited about the new role! Thank you for always supporting me. Let's have lunch together this week and talk about it.",
      "Best wishes,",
      "Tuan"
    ]
  },

  review: {
    keyPhrases: [
      { en: "She said that the company was promoting me.", vi: "Chị ấy nói công ty đang thăng chức cho tôi." },
      { en: "She told me that I would start next month.", vi: "Chị ấy bảo tôi rằng tôi sẽ bắt đầu vào tháng sau." },
      { en: "Mai said that she wanted to try something new.", vi: "Mai nói cô ấy muốn thử điều mới." },
      { en: "Mai is transferring to the Logistics department.", vi: "Mai đang chuyển sang phòng Logistics." },
      { en: "A new assistant will replace Tuan.", vi: "Một trợ lý mới sẽ thay Tuấn." },
      { en: "Congratulations on your promotion!", vi: "Chúc mừng bạn được thăng chức!" }
    ]
  }
});
