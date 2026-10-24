/* =========================================================
   A1 · Module 2 (People and the Workplace) · Bài 3
   "Describing colleagues"
   Khuôn rút gọn cho A1: 8 từ, 8 câu luyện tập, bài đọc và bài viết ngắn.
   Nối tiếp bài 2: thứ Tư 14/10/2026, bữa trưa ở nhà ăn nhân viên.
   Peter hỏi chị Hoa về các đồng nghiệp (Mai, Minh, David, Lan) và ghi chú lại;
   buổi chiều Peter gửi email ghi chú cho chị Hoa kiểm tra.
   Mới thêm: bàn của Mai ở tầng 3; bàn của Minh gần bàn của Hoa.
   Công ty Riverside Trading và các nhân vật đều là hư cấu.
   ========================================================= */
window.EOH.registerLesson({
  id: "a1-m2-l3",
  reviewStatus: "draft", // "draft" = bản nháp, chưa duyệt
  duration: "20–25 phút",
  scenario: "Trưa thứ Tư 14/10, ở nhà ăn nhân viên, Peter nhờ chị Hoa kể về các đồng nghiệp: Mai, Minh, David và Lan. Peter ghi chú lại rồi gửi email nhờ chị Hoa kiểm tra.",

  objectives: [
    "Dùng tính từ sở hữu my, your, his, her, our, their trước danh từ.",
    "Dùng 's để nói của ai: David's team, Mai's desk.",
    "Miêu tả tính cách đồng nghiệp bằng tính từ: friendly, helpful, quiet, funny, kind, busy.",
    "Nhấn mạnh tính từ khi nói để thể hiện ý kiến.",
    "Viết tin nhắn ngắn miêu tả hai đồng nghiệp."
  ],

  vocabulary: [
    { word: "friendly", ipa: "/ˈfrendli/", pos: "adjective", meaning: "thân thiện",
      example: "David is friendly.", exampleVi: "David thân thiện." },
    { word: "helpful", ipa: "/ˈhelpfəl/", pos: "adjective", meaning: "hay giúp đỡ",
      example: "Mai is very helpful.", exampleVi: "Mai rất hay giúp đỡ." },
    { word: "quiet", ipa: "/ˈkwaɪət/", pos: "adjective", meaning: "ít nói, yên lặng",
      example: "Minh is quiet.", exampleVi: "Minh ít nói." },
    { word: "funny", ipa: "/ˈfʌni/", pos: "adjective", meaning: "vui tính",
      example: "My manager is funny.", exampleVi: "Quản lý của tôi vui tính." },
    { word: "kind", ipa: "/kaɪnd/", pos: "adjective", meaning: "tốt bụng",
      example: "Lan is kind.", exampleVi: "Lan tốt bụng." },
    { word: "busy", ipa: "/ˈbɪzi/", pos: "adjective", meaning: "bận rộn",
      example: "Our team is busy today.", exampleVi: "Hôm nay nhóm chúng tôi bận." },
    { word: "desk", ipa: "/desk/", pos: "noun", meaning: "bàn làm việc",
      example: "Her desk is on the third floor.", exampleVi: "Bàn của cô ấy ở tầng ba." },
    { word: "notes", ipa: "/noʊts/", pos: "noun", meaning: "ghi chú",
      example: "Here are my notes.", exampleVi: "Đây là ghi chú của tôi." }
  ],

  pronunciation: {
    groups: [
      {
        title: "Tính từ miêu tả người",
        text: "Hầu hết tính từ này có hai âm tiết và nhấn âm tiết đầu.",
        items: [
          { word: "friendly", marked: "FRIEND·ly", note: "Chữ ie đọc /e/." },
          { word: "helpful", marked: "HELP·ful" },
          { word: "quiet", marked: "QUI·et", note: "Hai âm tiết: /ˈkwaɪ·ət/." },
          { word: "funny", marked: "FUN·ny" },
          { word: "busy", marked: "BU·sy", note: "Chữ u đọc /ɪ/: /ˈbɪzi/." }
        ]
      },
      {
        title: "Nhấn mạnh tính từ",
        text: "Khi nói ý kiến về một người, người nói nhấn tính từ (đọc to, rõ, dài hơn). Từ như my, his, her, is đọc nhẹ.",
        items: [
          { word: "Mai is very helpful.", marked: "Mai is very HELP·ful.", note: "Nhấn tính từ." },
          { word: "Minh is quiet but kind.", marked: "Minh is QUI·et but KIND.", note: "Nhấn hai tính từ." },
          { word: "Our team is friendly.", marked: "Our team is FRIEND·ly.", note: "Our, is đọc nhẹ." }
        ]
      }
    ],
    sentences: [
      "David is friendly and funny.",
      "Her desk is on the third floor.",
      "Their team is very busy."
    ]
  },

  listening: {
    title: "Tell me about our colleagues",
    setting: "Thứ Tư 14/10, giờ nghỉ trưa ở nhà ăn nhân viên. Peter nhờ chị Hoa kể về các đồng nghiệp.",
    speakers: { peter: "Peter (sales executive)", hoa: "Hoa (accountant)" },
    lines: [
      { s: "peter", text: "Hoa, tell me about our colleagues. Who is Mai?",
        vi: "Hoa, kể tôi nghe về các đồng nghiệp của chúng ta. Mai là ai?" },
      { s: "hoa", text: "Mai is David's assistant. She is very helpful. Her desk is on the third floor.",
        vi: "Mai là trợ lý của David. Cô ấy rất hay giúp đỡ. Bàn của cô ấy ở tầng ba." },
      { s: "peter", text: "And Minh? Is he your friend?",
        vi: "Còn Minh? Anh ấy là bạn của chị à?" },
      { s: "hoa", text: "Yes, he is. He is quiet, but he is very kind. His desk is near my desk.",
        vi: "Đúng. Anh ấy ít nói nhưng rất tốt bụng. Bàn của anh ấy gần bàn của tôi." },
      { s: "peter", text: "What about David?",
        vi: "Còn David thì sao?" },
      { s: "hoa", text: "David is friendly and funny. His team is busy, but the meeting is short.",
        vi: "David thân thiện và vui tính. Nhóm của anh ấy bận, nhưng cuộc họp ngắn." },
      { s: "peter", text: "And who is Lan?",
        vi: "Còn Lan là ai?" },
      { s: "hoa", text: "Lan is our HR Officer. She is kind too, and she helps all new people.",
        vi: "Lan là chuyên viên nhân sự của chúng ta. Chị ấy cũng tốt bụng và giúp mọi người mới." },
      { s: "peter", text: "Thanks, Hoa. My notes are ready.",
        vi: "Cảm ơn Hoa. Ghi chú của tôi xong rồi." },
      { s: "hoa", text: "Great! Please send your notes to my email.",
        vi: "Tuyệt! Anh gửi ghi chú đến email của tôi nhé." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "Who is Mai?",
        options: ["Peter's assistant", "David's assistant", "Lan's assistant", "Hoa's assistant"],
        answer: 1, explanation: "Hoa nói: “Mai is David's assistant.” – Mai là trợ lý của David. “David's” có 's nghĩa là của David." },
      { id: "l2", type: "choice", prompt: "How is Minh?",
        options: ["Loud and funny", "Busy and tall", "Friendly and funny", "Quiet but kind"],
        answer: 3, explanation: "“He is quiet, but he is very kind.” – Minh ít nói nhưng tốt bụng. Friendly và funny là David." },
      { id: "l3", type: "choice", prompt: "Where is Mai's desk?",
        options: ["On the second floor", "On the fifth floor", "On the third floor", "On the first floor"],
        answer: 2, explanation: "“Her desk is on the third floor.” – bàn của Mai ở tầng ba. Bàn của Minh mới gần bàn của Hoa (tầng hai)." }
    ]
  },

  reading: {
    title: "My notes about our colleagues",
    intro: "Chiều thứ Tư, Peter gửi chị Hoa email với ghi chú về các đồng nghiệp. Đọc và xem ai là người nào.",
    email: {
      from: "Peter <peter@riverside-trading.example>",
      to: "Hoa Tran",
      date: "Wednesday, 14 October",
      subject: "My notes about our colleagues",
      greeting: "Hi Hoa,",
      paragraphs: [
        "Thank you for lunch today. Here are my notes about our colleagues."
      ],
      list: [
        "Mai: David's assistant. She is very helpful.",
        "Minh: your colleague. He is quiet but kind.",
        "David: my manager. He is friendly and funny."
      ],
      after: [
        "Can you check my notes? Please tell me about Lan's job too."
      ],
      closing: "Thanks!",
      signature: ["Peter", "Sales Team"]
    },
    glossary: [
      { term: "notes", vi: "ghi chú" },
      { term: "colleague", vi: "đồng nghiệp" },
      { term: "check", vi: "kiểm tra, xem lại" },
      { term: "too", vi: "cũng" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "Who is very helpful?",
        options: ["Mai", "Minh", "David", "Lan"],
        answer: 0, explanation: "“Mai: David's assistant. She is very helpful.” – Mai rất hay giúp đỡ. Minh ít nói, David thân thiện và vui tính." },
      { id: "r2", type: "choice", prompt: "Who is Peter's manager?",
        options: ["Minh", "Lan", "David", "Mai"],
        answer: 2, explanation: "“David: my manager.” – David là quản lý của Peter. “my manager” nghĩa là quản lý của tôi." },
      { id: "r3", type: "choice", prompt: "What does Peter ask Hoa to do?",
        options: ["Send a list of names", "Check his notes and tell about Lan's job", "Call David", "Go to Room 205"],
        answer: 1, explanation: "“Can you check my notes? Please tell me about Lan's job too.” – Peter nhờ Hoa kiểm tra ghi chú và nói về công việc của Lan." }
    ]
  },

  grammar: {
    title: "Possessive adjectives and 's",
    titleVi: "Tính từ sở hữu (my, his, her, our, their) và 's",
    intro: "Để nói một vật hay người “của ai”, ta dùng tính từ sở hữu trước danh từ, hoặc thêm 's sau tên người. Tính từ sở hữu luôn đứng trước danh từ và không thay đổi theo danh từ.",
    patterns: [
      { form: "my / your + danh từ", use: "Của tôi, của bạn.",
        examples: ["My desk is near the window.", "Your notes are ready."] },
      { form: "his / her + danh từ", use: "Của anh ấy (his), của cô ấy (her). Chọn theo người sở hữu, không theo vật.",
        examples: ["Minh is quiet. His desk is near my desk.", "Mai is helpful. Her desk is on the third floor."] },
      { form: "our / their + danh từ", use: "Của chúng tôi (our), của họ (their).",
        examples: ["Our team is friendly.", "Peter and David work together. Their meeting is on Monday."] },
      { form: "Tên + 's + danh từ", use: "Của ai đó. Có thể dùng cùng tính từ miêu tả (be + tính từ).",
        examples: ["Mai is David's assistant.", "David is friendly. Lan's desk is on the second floor."] }
    ],
    mistakes: [
      { wrong: "Mai is David assistant.", right: "Mai is David's assistant.", note: "Thiếu 's. David's assistant nghĩa là trợ lý của David." },
      { wrong: "They are friendlys.", right: "They are friendly.", note: "Tính từ trong tiếng Anh không thêm -s." },
      { wrong: "Minh is quiet. Her desk is near my desk.", right: "Minh is quiet. His desk is near my desk.", note: "Minh là nam nên dùng his." },
      { wrong: "Us team is busy.", right: "Our team is busy.", note: "Trước danh từ dùng tính từ sở hữu our, không dùng us." }
    ],
    tip: "His là “của anh ấy”, her là “của cô ấy”. Chọn theo người sở hữu, không theo vật được sở hữu: Mai's desk → her desk."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "Mai is a helpful assistant. ___ desk is on the third floor.",
      options: ["His", "Her", "Our", "Their"],
      answer: 1, explanation: "Mai là nữ, nên dùng Her desk (bàn của cô ấy). His dành cho nam, Their cho nhiều người." },
    { id: "p2", type: "gap", prompt: "Minh is an accountant. ___ desk is near my desk.",
      options: ["Her", "Their", "His", "Its"],
      answer: 2, explanation: "Minh là nam, nên dùng His desk (bàn của anh ấy). Her dành cho nữ, Their cho nhiều người." },
    { id: "p3", type: "gap", prompt: "Peter and David work in one team. ___ team meeting is on Monday.",
      options: ["Their", "Them", "They", "He"],
      answer: 0, explanation: "Trước danh từ (team meeting) dùng tính từ sở hữu: Their team meeting. “They” và “Them” là đại từ, không đứng trước danh từ theo nghĩa “của họ”." },
    { id: "p4", type: "choice", prompt: "Which sentence is correct?",
      options: ["Mai is David assistant.", "Mai is assistant David's.", "Mai's is David assistant.", "Mai is David's assistant."],
      answer: 3, explanation: "“David's assistant” có 's nghĩa là trợ lý của David, rồi đứng sau “Mai is”." },
    { id: "p5", type: "gap", prompt: "We work in the Sales team. ___ manager is David.",
      options: ["We", "Us", "Our", "Ours"],
      answer: 2, explanation: "Trước danh từ manager dùng tính từ sở hữu: Our manager (quản lý của chúng tôi). “Ours” đứng một mình, không đi với danh từ." },
    { id: "p6", type: "choice", prompt: "Which sentence is correct?",
      options: ["They are friendlys.", "They are friendly.", "They friendly are.", "They is friendly."],
      answer: 1, explanation: "They are friendly. Tính từ không thêm -s, và động từ với They là are." },
    { id: "p7", type: "choice", prompt: "Which word describes a person who helps others a lot?",
      options: ["helpful", "quiet", "busy", "funny"],
      answer: 0, explanation: "Helpful nghĩa là hay giúp đỡ. Quiet là ít nói, busy là bận rộn, funny là vui tính." },
    { id: "p8", type: "choice", prompt: "Which kind of word do we usually stress to show our opinion of someone?",
      options: ["A verb like “is”", "A word like “a”", "A word like “the”", "An adjective like “friendly”"],
      answer: 3, explanation: "Khi nói ý kiến về một người, ta nhấn tính từ: She is very FRIENDLY. Các từ như is, a, the thường đọc nhẹ." }
  ],

  writing: {
    title: "Two colleagues",
    task: "Bạn là Hoa. Hãy viết tin nhắn cho bạn Anna, kể về hai đồng nghiệp của bạn: tên, công việc, tính cách và bàn làm việc (25–50 từ).",
    requirements: [
      "Chào Anna.",
      "Dùng 's một lần: Mai is David's assistant.",
      "Dùng his hoặc her (ví dụ: Her desk is…).",
      "Dùng our, their hoặc my.",
      "Dùng ít nhất một tính từ miêu tả người (helpful, quiet, kind…).",
      "Kết thúc tin nhắn và ký tên."
    ],
    minWords: 25,
    maxWords: 50,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Hi / Hello / Dear)", pattern: "\\b(hi|hello|dear)\\b" },
      { label: "Có 's chỉ sở hữu (David's assistant)", pattern: "\\b\\w+'s \\w+" },
      { label: "Có his hoặc her + danh từ", pattern: "\\b(his|her) \\w+" },
      { label: "Có our, their hoặc my + danh từ", pattern: "\\b(our|their|my) \\w+" },
      { label: "Có tính từ miêu tả người", pattern: "friendly|helpful|quiet|funny|kind|busy" },
      { label: "Có lời kết (See you / Best wishes)", pattern: "see you|regards|wishes|thanks|bye" }
    ],
    model: [
      "Hi Anna,",
      "I like my new team. Mai is David's assistant. She is very helpful, and her desk is on the third floor. Minh is quiet but kind. His desk is near my desk. Our team is friendly!",
      "Best wishes,",
      "Hoa"
    ]
  },

  review: {
    keyPhrases: [
      { en: "Mai is David's assistant.", vi: "Mai là trợ lý của David." },
      { en: "She is very helpful. Her desk is on the third floor.", vi: "Cô ấy rất hay giúp đỡ. Bàn của cô ấy ở tầng ba." },
      { en: "Minh is quiet but kind.", vi: "Minh ít nói nhưng tốt bụng." },
      { en: "His desk is near my desk.", vi: "Bàn của anh ấy gần bàn của tôi." },
      { en: "Our team is friendly.", vi: "Nhóm của chúng tôi thân thiện." },
      { en: "Can you check my notes?", vi: "Chị kiểm tra ghi chú của tôi giúp được không?" }
    ]
  }
});
