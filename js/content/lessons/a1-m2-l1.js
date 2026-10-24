/* =========================================================
   A1 · Module 2 (People and the Workplace) · Bài 1
   "Jobs and job titles"
   Khuôn rút gọn cho A1: 8 từ, 8 câu luyện tập, bài đọc và bài viết ngắn.
   Tuần làm việc thứ hai của chị Hoa. Thứ Hai 12/10/2026: Peter (người nước ngoài,
   phòng Kinh doanh, nhóm của David) vào làm. Peter đến từ Canada (mới thêm).
   Bữa trưa chào đón ở nhà ăn nhân viên lúc 11:30 (mới thêm).
   Công ty Riverside Trading và các nhân vật đều là hư cấu.
   ========================================================= */
window.EOH.registerLesson({
  id: "a1-m2-l1",
  reviewStatus: "draft", // "draft" = bản nháp, chưa duyệt
  duration: "20–25 phút",
  scenario: "Sáng thứ Hai 12/10, Peter vào làm ở phòng Kinh doanh. Chị Hoa gặp anh và hai người hỏi nhau về nghề nghiệp. Chị Hoa giới thiệu các đồng nghiệp: kế toán, quản lý, lễ tân.",

  objectives: [
    "Nói nghề của mình bằng a / an: I'm an accountant. She is a receptionist.",
    "Hỏi và trả lời What do you do? / What do they do?",
    "Dùng danh từ số nhiều: managers, assistants, offices, secretaries.",
    "Đọc đúng đuôi -s của danh từ số nhiều: /s/, /z/, /ɪz/.",
    "Viết tin nhắn ngắn giới thiệu nghề của mình và của đồng nghiệp."
  ],

  vocabulary: [
    { word: "job title", ipa: "/ˈdʒɑːb ˌtaɪtəl/", pos: "noun", meaning: "chức danh",
      example: "My job title is accountant.", exampleVi: "Chức danh của tôi là kế toán." },
    { word: "manager", ipa: "/ˈmænɪdʒər/", pos: "noun", meaning: "quản lý, trưởng bộ phận",
      example: "David is a manager.", exampleVi: "David là một quản lý." },
    { word: "assistant", ipa: "/əˈsɪstənt/", pos: "noun", meaning: "trợ lý",
      example: "Mai is an assistant.", exampleVi: "Mai là một trợ lý." },
    { word: "officer", ipa: "/ˈɔːfɪsər/", pos: "noun", meaning: "nhân viên, chuyên viên",
      example: "Lan is an HR officer.", exampleVi: "Lan là chuyên viên nhân sự." },
    { word: "receptionist", ipa: "/rɪˈsepʃənɪst/", pos: "noun", meaning: "nhân viên lễ tân",
      example: "She is a receptionist.", exampleVi: "Cô ấy là nhân viên lễ tân." },
    { word: "executive", ipa: "/ɪɡˈzekjətɪv/", pos: "noun", meaning: "nhân viên (cấp chuyên viên)",
      example: "Peter is a sales executive.", exampleVi: "Peter là nhân viên kinh doanh." },
    { word: "driver", ipa: "/ˈdraɪvər/", pos: "noun", meaning: "tài xế",
      example: "The company has two drivers.", exampleVi: "Công ty có hai tài xế." },
    { word: "What do you do?", ipa: "/ˌwʌt də ju ˈduː/", pos: "phrase", meaning: "Bạn làm nghề gì?",
      example: "Hi, I'm Peter. What do you do?", exampleVi: "Chào, tôi là Peter. Bạn làm nghề gì?" }
  ],

  pronunciation: {
    groups: [
      {
        title: "Đuôi -s của danh từ số nhiều",
        text: "Chữ s ở cuối danh từ số nhiều có ba cách đọc. Sau âm vô thanh (như /t/, /k/, /p/) đọc /s/. Sau âm hữu thanh và nguyên âm đọc /z/. Sau âm /s/, /z/, /ʃ/, /tʃ/, /dʒ/ thêm một âm nữa: /ɪz/.",
        items: [
          { word: "assistants", marked: "/əˈsɪstənts/", note: "Sau /t/: đọc /s/." },
          { word: "receptionists", marked: "/rɪˈsepʃənɪsts/", note: "Sau /t/: đọc /s/." },
          { word: "jobs", marked: "/dʒɑːbz/", note: "Sau /b/: đọc /z/." },
          { word: "managers", marked: "/ˈmænɪdʒərz/", note: "Sau nguyên âm /ər/: đọc /z/." },
          { word: "drivers", marked: "/ˈdraɪvərz/", note: "Đọc /z/." }
        ]
      },
      {
        title: "Thêm âm /ɪz/",
        text: "Khi danh từ đã kết thúc bằng âm gió (/s/, /z/, /ʃ/, /tʃ/, /dʒ/), phải thêm một âm /ɪz/ để nghe được số nhiều.",
        items: [
          { word: "offices", marked: "/ˈɔːfɪsɪz/", note: "Nghe rõ ba âm tiết." },
          { word: "addresses", marked: "/ˈædresɪz/" },
          { word: "branches", marked: "/ˈbræntʃɪz/" }
        ]
      }
    ],
    sentences: [
      "We have two managers and three assistants.",
      "We have two receptionists in the office.",
      "These jobs are very good."
    ]
  },

  listening: {
    title: "What do you do?",
    setting: "Thứ Hai 12/10, buổi sáng. Chị Hoa gặp Peter, đồng nghiệp mới của phòng Kinh doanh.",
    speakers: { hoa: "Hoa (accountant)", peter: "Peter (sales executive)" },
    lines: [
      { s: "hoa", text: "Hi! Are you Peter? I'm Hoa from Accounting.",
        vi: "Chào anh! Anh là Peter phải không? Tôi là Hoa ở phòng Kế toán." },
      { s: "peter", text: "Yes, I'm Peter. Nice to meet you, Hoa. What do you do?",
        vi: "Vâng, tôi là Peter. Rất vui được gặp chị, Hoa. Chị làm nghề gì?" },
      { s: "hoa", text: "I'm an accountant. What do you do here?",
        vi: "Tôi là kế toán. Còn anh làm nghề gì ở đây?" },
      { s: "peter", text: "I'm a sales executive. I work in David's team.",
        vi: "Tôi là nhân viên kinh doanh. Tôi làm trong nhóm của David." },
      { s: "hoa", text: "Great! David is our Sales Manager.",
        vi: "Tuyệt! David là Giám đốc Kinh doanh của chúng ta." },
      { s: "peter", text: "Do you work with other accountants?",
        vi: "Chị có làm việc với các kế toán khác không?" },
      { s: "hoa", text: "Yes, I do. Minh is an accountant too.",
        vi: "Có. Minh cũng là kế toán." },
      { s: "peter", text: "And who is the woman at the front desk?",
        vi: "Còn người phụ nữ ở quầy lễ tân là ai?" },
      { s: "hoa", text: "She is a receptionist. Do you have lunch at the canteen?",
        vi: "Cô ấy là nhân viên lễ tân. Anh có ăn trưa ở nhà ăn không?" },
      { s: "peter", text: "Yes, I do. See you at eleven thirty!",
        vi: "Có. Hẹn gặp chị lúc mười một giờ ba mươi!" }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "What is Peter's job?",
        options: ["Accountant", "Sales executive", "Receptionist", "Driver"],
        answer: 1, explanation: "Peter nói: “I'm a sales executive.” – anh là nhân viên kinh doanh. Hoa mới là kế toán (accountant)." },
      { id: "l2", type: "choice", prompt: "What is Hoa's job?",
        options: ["Accountant", "Sales manager", "HR officer", "Assistant"],
        answer: 0, explanation: "Hoa nói: “I'm an accountant.” – chị là kế toán. David mới là Sales Manager." },
      { id: "l3", type: "choice", prompt: "Who is David?",
        options: ["A receptionist", "An accountant", "A sales manager", "A driver"],
        answer: 2, explanation: "“David is our Sales Manager.” – David là giám đốc kinh doanh. Minh mới là kế toán (accountant), còn người ở quầy lễ tân là receptionist." }
    ]
  },

  reading: {
    title: "New colleague today",
    intro: "Sáng thứ Hai, chị Lan gửi email báo có đồng nghiệp mới. Đọc và tìm nghề của Peter, giờ và nơi ăn trưa.",
    email: {
      from: "Lan Pham <lan.pham@riverside-trading.example>",
      to: "Hoa Tran",
      date: "Monday, 12 October",
      subject: "New colleague today",
      greeting: "Hi Hoa,",
      paragraphs: [
        "Peter starts work today. He is a sales executive in David's team. Peter is from Canada.",
        "Please join us for a welcome lunch and say hello."
      ],
      list: [
        "Lunch: 11:30 a.m.",
        "Place: staff canteen"
      ],
      after: [
        "Hoa, please sit with Peter. You are both new here."
      ],
      closing: "See you at lunch!",
      signature: ["Lan Pham", "HR Department"]
    },
    glossary: [
      { term: "starts work", vi: "bắt đầu đi làm" },
      { term: "sales executive", vi: "nhân viên kinh doanh" },
      { term: "welcome lunch", vi: "bữa trưa chào đón" },
      { term: "say hello", vi: "chào hỏi" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "What is Peter's job?",
        options: ["Accountant", "Sales manager", "Receptionist", "Sales executive"],
        answer: 3, explanation: "“He is a sales executive in David's team.” – Peter là nhân viên kinh doanh. David mới là quản lý nhóm." },
      { id: "r2", type: "choice", prompt: "Where is the welcome lunch?",
        options: ["At the front desk", "In the staff canteen", "In Room 301", "On the second floor"],
        answer: 1, explanation: "“Place: staff canteen” – bữa trưa ở nhà ăn nhân viên." },
      { id: "r3", type: "choice", prompt: "What should Hoa do at lunch?",
        options: ["Sit with Peter", "Call David", "Write to Lan", "Go to Room 205"],
        answer: 0, explanation: "“Hoa, please sit with Peter.” – chị Lan nhờ Hoa ngồi cùng Peter." }
    ]
  },

  grammar: {
    title: "a / an + job, plural nouns, What do you do?",
    titleVi: "a / an + nghề, danh từ số nhiều, What do you do?",
    intro: "Khi nói nghề của một người, ta dùng a hoặc an trước tên nghề. Khi nói nhiều người, ta dùng danh từ số nhiều (thêm -s hoặc -es) và không dùng a / an. Câu hỏi quen thuộc là What do you do?",
    patterns: [
      { form: "I'm / He is / She is + a + nghề (âm phụ âm); an + nghề (âm nguyên âm)", use: "Nói nghề của một người. Chỉ nhìn âm đầu, không nhìn chữ cái đầu.",
        examples: ["I'm a manager.", "She is an accountant."] },
      { form: "Danh từ + -s (hoặc -es)", use: "Nói số nhiều. Thêm -s thường; thêm -es sau s, x, ch, sh.",
        examples: ["two managers, three jobs", "one office → two offices"] },
      { form: "Danh từ tận cùng -y → -ies", use: "Khi trước y là phụ âm, đổi y thành -ies.",
        examples: ["one secretary → two secretaries", "one company → two companies"] },
      { form: "What do you do? – I'm a / an …  /  What do they do? – They are …s.", use: "Hỏi nghề nghiệp. Với nhiều người, tên nghề ở dạng số nhiều và không có a / an.",
        examples: ["What do you do? – I'm an accountant.", "What do they do? – They are drivers."] }
    ],
    mistakes: [
      { wrong: "I am accountant.", right: "I'm an accountant.", note: "Nói nghề của một người cần a / an. Accountant bắt đầu bằng nguyên âm nên dùng an." },
      { wrong: "She is a accountant.", right: "She is an accountant.", note: "Âm đầu của accountant là nguyên âm /ə/, nên dùng an." },
      { wrong: "We have two manager.", right: "We have two managers.", note: "Sau số từ lớn hơn một, danh từ phải ở dạng số nhiều." },
      { wrong: "What you do?", right: "What do you do?", note: "Cần do sau từ để hỏi What." }
    ],
    tip: "Trong tiếng Anh, chức danh thường không viết hoa khi nói về nghề chung (an accountant), nhưng viết hoa khi là chức danh chính thức đi cùng tên người (Sales Manager David Brown)."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "I'm ___ officer in the HR Department.",
      options: ["a", "an", "at", "of"],
      answer: 1, explanation: "“officer” bắt đầu bằng âm nguyên âm /ɔː/ nên dùng “an”: an officer. So sánh: a manager." },
    { id: "p2", type: "gap", prompt: "She is ___ receptionist.",
      options: ["an", "two", "a", "some"],
      answer: 2, explanation: "“receptionist” bắt đầu bằng âm phụ âm /r/ nên dùng “a”. “two” và “some” không dùng trước danh từ số ít." },
    { id: "p3", type: "gap", prompt: "We have two ___ in the Sales team.",
      options: ["managers", "manager", "an manager", "a manager"],
      answer: 0, explanation: "Có “two” nên danh từ phải ở số nhiều: two managers. “a manager” chỉ một người." },
    { id: "p4", type: "choice", context: "A: What do you do?", prompt: "What is the best answer?",
      options: ["I'm fine, thanks.", "I'm from Hai Phong.", "Yes, I do.", "I'm an accountant."],
      answer: 3, explanation: "What do you do? hỏi nghề nghiệp, nên trả lời bằng nghề: I'm an accountant. “I'm fine” trả lời How are you?, “I'm from…” trả lời Where are you from?" },
    { id: "p5", type: "choice", prompt: "Which word ends with the sound /ɪz/?",
      options: ["jobs", "offices", "assistants", "managers"],
      answer: 1, explanation: "offices /ˈɔːfɪsɪz/ kết thúc bằng âm /s/ nên phải thêm /ɪz/. Jobs và managers đọc /z/, assistants đọc /s/." },
    { id: "p6", type: "choice", prompt: "Which sentence is correct?",
      options: ["He is manager.", "He a manager is.", "He is a manager.", "He is an manager."],
      answer: 2, explanation: "Đúng: He is a manager. Manager bắt đầu bằng phụ âm /m/ nên dùng a, và phải có a / an trước nghề." },
    { id: "p7", type: "choice", prompt: "Choose the correct plural: one accountant, two ___.",
      options: ["accountants", "accountant", "accountantes", "an accountants"],
      answer: 0, explanation: "Thêm -s vào accountant: accountants. Không dùng -es vì accountant không kết thúc bằng s, x, ch, sh." },
    { id: "p8", type: "choice", prompt: "Who answers the phone at the front desk?",
      options: ["A driver", "A sales executive", "An accountant", "A receptionist"],
      answer: 3, explanation: "Người ngồi ở quầy lễ tân và trả lời điện thoại là receptionist. Driver là tài xế, accountant là kế toán." }
  ],

  writing: {
    title: "My job and my colleagues' jobs",
    task: "Bạn là Hoa. Hãy viết tin nhắn cho bạn Anna ở nước ngoài. Nói nghề của bạn, nghề của hai đồng nghiệp, và hỏi Anna làm nghề gì (25–50 từ).",
    requirements: [
      "Chào Anna.",
      "Nói nghề của bạn: I'm a / an …",
      "Nói nghề của ít nhất hai đồng nghiệp: … is a / an …",
      "Hỏi What do you do?",
      "Kết thúc tin nhắn và ký tên."
    ],
    minWords: 25,
    maxWords: 50,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Hi / Hello / Dear)", pattern: "\\b(hi|hello|dear)\\b" },
      { label: "Có câu I'm a / an + nghề", pattern: "\\bi'?m an? \\w+" },
      { label: "Có ít nhất 2 câu … is a / an + nghề", pattern: "(\\b(is|are) an? \\w+[\\s\\S]*){2}" },
      { label: "Có câu hỏi What do you do?", pattern: "what do you do\\s*\\?" },
      { label: "Có lời kết (See you / Best wishes)", pattern: "see you|regards|wishes|thanks|bye" }
    ],
    model: [
      "Hi Anna,",
      "I'm an accountant at Riverside Trading. Minh is an accountant too. David is a manager, and Peter is a sales executive. What do you do? Do you like your job?",
      "Best wishes,",
      "Hoa"
    ]
  },

  review: {
    keyPhrases: [
      { en: "What do you do? – I'm an accountant.", vi: "Bạn làm nghề gì? – Tôi là kế toán." },
      { en: "I'm a sales executive.", vi: "Tôi là nhân viên kinh doanh." },
      { en: "She is a receptionist.", vi: "Cô ấy là nhân viên lễ tân." },
      { en: "We have two managers.", vi: "Chúng tôi có hai quản lý." },
      { en: "What do they do? – They are drivers.", vi: "Họ làm nghề gì? – Họ là tài xế." },
      { en: "David is our Sales Manager.", vi: "David là Giám đốc Kinh doanh của chúng ta." }
    ]
  }
});
