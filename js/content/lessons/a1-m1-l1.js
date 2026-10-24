/* =========================================================
   A1 · Module 1 (English Foundations) · Bài 1
   "Greetings and introductions at work"
   Khuôn rút gọn cho A1: 8 từ, 8 câu luyện tập, bài đọc và bài viết ngắn.
   Công ty Riverside Trading và các nhân vật đều là hư cấu.
   ========================================================= */
window.EOH.registerLesson({
  id: "a1-m1-l1",
  reviewStatus: "approved", // Linh duyệt ngày 23/10/2026
  duration: "20–25 phút",
  scenario: "Hôm nay là ngày đầu tiên chị Hoa (Hoa Tran) đi làm kế toán tại công ty Riverside Trading. Ở hành lang, chị gặp anh David Brown, trưởng phòng Kinh doanh người Úc.",

  objectives: [
    "Chào hỏi đồng nghiệp lần đầu gặp mặt bằng Good morning.",
    "Giới thiệu tên, công việc và phòng ban của mình.",
    "Đáp lại lời giới thiệu: Nice to meet you – Nice to meet you too.",
    "Dùng đúng I am / You are / He is / She is trong câu giới thiệu.",
    "Viết một tin nhắn ngắn tự giới thiệu với đồng nghiệp mới."
  ],

  vocabulary: [
    { word: "Good morning", ipa: "/ˌɡʊd ˈmɔːrnɪŋ/", pos: "phrase", meaning: "chào buổi sáng (dùng đến khoảng 12 giờ trưa)",
      example: "Good morning! I'm David Brown.", exampleVi: "Chào buổi sáng! Tôi là David Brown." },
    { word: "name", ipa: "/neɪm/", pos: "noun", meaning: "tên",
      example: "My name is Hoa Tran.", exampleVi: "Tên tôi là Hoa Trần." },
    { word: "Nice to meet you", ipa: "/ˌnaɪs tə ˈmiːt juː/", pos: "phrase", meaning: "rất vui được gặp bạn (khi gặp lần đầu)",
      example: "Nice to meet you, Hoa.", exampleVi: "Rất vui được gặp chị, Hoa." },
    { word: "new", ipa: "/nuː/", pos: "adjective", meaning: "mới",
      example: "Are you new here?", exampleVi: "Bạn là người mới ở đây à?" },
    { word: "colleague", ipa: "/ˈkɑːliːɡ/", pos: "noun", meaning: "đồng nghiệp",
      example: "Please welcome our new colleague.", exampleVi: "Mọi người hãy chào đón đồng nghiệp mới của chúng ta." },
    { word: "department", ipa: "/dɪˈpɑːrtmənt/", pos: "noun", meaning: "phòng, ban (trong công ty)",
      example: "I work in the Accounting Department.", exampleVi: "Tôi làm ở phòng Kế toán." },
    { word: "manager", ipa: "/ˈmænɪdʒər/", pos: "noun", meaning: "quản lý, trưởng phòng",
      example: "He's the sales manager.", exampleVi: "Anh ấy là trưởng phòng Kinh doanh." },
    { word: "accountant", ipa: "/əˈkaʊntənt/", pos: "noun", meaning: "kế toán viên",
      example: "I'm the new accountant.", exampleVi: "Tôi là kế toán mới." }
  ],

  pronunciation: {
    groups: [
      {
        title: "Trọng âm của từ",
        text: "Âm tiết in hoa là âm đọc to và dài hơn. Đọc sai trọng âm, người nghe rất khó nhận ra từ.",
        items: [
          { word: "department", marked: "de·PART·ment" },
          { word: "manager", marked: "MAN·a·ger" },
          { word: "accountant", marked: "ac·COUN·tant", note: "Âm đầu “a” đọc rất nhẹ, gần như /ə/." },
          { word: "colleague", marked: "COL·league", note: "Chỉ có 2 âm tiết, không đọc thành 3." },
          { word: "morning", marked: "MOR·ning" }
        ]
      }
    ],
    sentences: [
      "Nice to meet you.",
      "My name is Hoa Tran.",
      "I'm the new accountant."
    ]
  },

  listening: {
    title: "Hello in the corridor",
    setting: "8 giờ sáng, ở hành lang tầng 2. Anh David gặp chị Hoa lần đầu.",
    speakers: { david: "David (Sales Manager)", hoa: "Hoa (new accountant)" },
    lines: [
      { s: "david", text: "Good morning! I'm David Brown.",
        vi: "Chào buổi sáng! Tôi là David Brown." },
      { s: "hoa", text: "Good morning, Mr. Brown. My name is Hoa Tran.",
        vi: "Chào buổi sáng, anh Brown. Tên tôi là Hoa Trần." },
      { s: "david", text: "Nice to meet you, Hoa.",
        vi: "Rất vui được gặp chị, Hoa." },
      { s: "hoa", text: "Nice to meet you too.",
        vi: "Tôi cũng rất vui được gặp anh." },
      { s: "david", text: "Are you new here?",
        vi: "Chị là người mới à?" },
      { s: "hoa", text: "Yes, I am. I'm the new accountant.",
        vi: "Vâng. Tôi là kế toán mới." },
      { s: "david", text: "Welcome to Riverside Trading! I'm the sales manager. My office is on the third floor.",
        vi: "Chào mừng chị đến với Riverside Trading! Tôi là trưởng phòng Kinh doanh. Văn phòng của tôi ở tầng ba." },
      { s: "hoa", text: "Thank you. Have a nice day!",
        vi: "Cảm ơn anh. Chúc anh một ngày tốt lành!" }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "What is Hoa's job?",
        options: ["Sales manager", "Accountant", "Receptionist", "HR officer"],
        answer: 1, explanation: "Hoa nói: “I'm the new accountant.” – Tôi là kế toán mới. Sales manager là công việc của anh David." },
      { id: "l2", type: "choice", prompt: "Who is David Brown?",
        options: ["A new accountant", "The receptionist", "The sales manager", "The HR manager"],
        answer: 2, explanation: "David nói: “I'm the sales manager.” – Tôi là trưởng phòng Kinh doanh." },
      { id: "l3", type: "choice", prompt: "Where is David's office?",
        options: ["On the third floor", "On the first floor", "On the second floor", "Next to Hoa's desk"],
        answer: 0, explanation: "“My office is on the third floor.” Hai người gặp nhau ở tầng 2, nhưng văn phòng của David ở tầng 3." }
    ]
  },

  reading: {
    title: "A new colleague",
    intro: "Email phòng Nhân sự gửi cho toàn công ty để giới thiệu chị Hoa. Đọc và tìm thông tin về chị Hoa.",
    email: {
      from: "Lan Pham <lan.pham@riverside-trading.example>",
      to: "All staff",
      date: "Monday, 5 October",
      subject: "Please welcome Hoa Tran",
      greeting: "Hi everyone,",
      paragraphs: [
        "Please welcome our new colleague, Hoa Tran. Today is her first day."
      ],
      list: [
        "Job: Accountant",
        "Department: Accounting (2nd floor)",
        "Hometown: Hai Phong"
      ],
      after: [
        "Please say hello to Hoa and help her in her first week."
      ],
      closing: "Best regards,",
      signature: ["Lan Pham", "HR Department"]
    },
    glossary: [
      { term: "all staff", vi: "toàn thể nhân viên" },
      { term: "Please welcome …", vi: "Mọi người hãy chào đón …" },
      { term: "hometown", vi: "quê quán" },
      { term: "say hello to", vi: "chào hỏi (ai đó)" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "What is the email about?",
        options: ["A meeting", "A holiday", "A computer problem", "A new colleague"],
        answer: 3, explanation: "Tiêu đề “Please welcome Hoa Tran” và câu đầu “Please welcome our new colleague” – email giới thiệu đồng nghiệp mới." },
      { id: "r2", type: "choice", prompt: "Which department is Hoa in?",
        options: ["Sales", "HR", "Accounting", "IT"],
        answer: 2, explanation: "“Department: Accounting (2nd floor)” – chị Hoa làm ở phòng Kế toán. HR là phòng của chị Lan, người gửi email." },
      { id: "r3", type: "choice", prompt: "Where is Hoa from?",
        options: ["Ha Noi", "Hai Phong", "Da Nang", "Ho Chi Minh City"],
        answer: 1, explanation: "“Hometown: Hai Phong” – quê của chị Hoa ở Hải Phòng." }
    ]
  },

  grammar: {
    title: "The verb “to be”: I am, you are, he is, she is",
    titleVi: "Động từ “to be” (là, thì, ở) để giới thiệu bản thân và người khác",
    intro: "Khi giới thiệu tên, công việc, quê quán, tiếng Anh luôn cần động từ “to be”. Tiếng Việt có thể nói “Tôi kế toán”, nhưng tiếng Anh phải nói “I am an accountant”.",
    patterns: [
      { form: "I am (I'm) + tên / nghề", use: "Giới thiệu bản thân. Khi nói, thường rút gọn thành I'm.",
        examples: ["I'm Hoa Tran.", "I'm an accountant."] },
      { form: "He is (he's) / She is (she's)", use: "Giới thiệu người khác (một người).",
        examples: ["He's the sales manager.", "She's our new colleague."] },
      { form: "You are / We are / They are", use: "Nói về bạn, chúng tôi, họ (you're, we're, they're).",
        examples: ["You're new here.", "They're my colleagues."] },
      { form: "Are you …? / Is he …? → Yes, I am. / No, he isn't.", use: "Câu hỏi: đưa am / is / are lên đầu câu. Câu trả lời ngắn dùng lại động từ đó.",
        examples: ["Are you new here? – Yes, I am.", "Is he the manager? – No, he isn't."] }
    ],
    mistakes: [
      { wrong: "I accountant.", right: "I'm an accountant.", note: "Thiếu “am” và thiếu “an”. Trước nghề nghiệp cần a/an; dùng “an” trước âm nguyên âm (accountant, engineer)." },
      { wrong: "She are new.", right: "She is new.", note: "He / She / It đi với is." },
      { wrong: "Yes, I'm.", right: "Yes, I am.", note: "Câu trả lời ngắn không rút gọn ở cuối câu." },
      { wrong: "Nice meet you.", right: "Nice to meet you.", note: "Không bỏ “to”." }
    ],
    tip: "Cách gọi tên: người nói tiếng Anh dùng Mr. (nam) hoặc Ms. (nữ) + HỌ: Mr. Brown, Ms. Tran. Trong công ty Việt Nam, mọi người hay gọi “Ms. Hoa” theo tên – vẫn dùng được nội bộ, nhưng với khách nước ngoài nên dùng Mr./Ms. + họ, hoặc gọi tên riêng (David) nếu họ đề nghị."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "___ morning! I'm David.",
      options: ["Good", "Nice", "Hello", "Fine"],
      answer: 0, explanation: "Lời chào buổi sáng là “Good morning”. “Nice” dùng trong “Nice to meet you”, không đi với morning." },
    { id: "p2", type: "gap", prompt: "My ___ is Hoa Tran.",
      options: ["job", "name", "department", "office"],
      answer: 1, explanation: "Hoa Tran là tên người: My name is … = Tên tôi là …" },
    { id: "p3", type: "gap", prompt: "She ___ the new accountant.",
      options: ["am", "are", "is", "be"],
      answer: 2, explanation: "She (cô ấy) đi với is: She is (She's) …" },
    { id: "p4", type: "choice", context: "David says: “Nice to meet you, Hoa.”", prompt: "What does Hoa say?",
      options: ["Good night.", "I'm fine, thanks.", "Yes, I am.", "Nice to meet you too."],
      answer: 3, explanation: "Đáp lại “Nice to meet you” bằng “Nice to meet you too” (tôi cũng rất vui được gặp bạn). “I'm fine, thanks” là câu trả lời cho “How are you?”." },
    { id: "p5", type: "gap", prompt: "I'm ___ accountant.",
      options: ["a", "an", "on", "in"],
      answer: 1, explanation: "“accountant” bắt đầu bằng âm nguyên âm /ə/ nên dùng “an”: an accountant. So sánh: a manager." },
    { id: "p6", type: "gap", prompt: "Are you new here? – Yes, ___.",
      options: ["I'm", "I am", "you are", "I is"],
      answer: 1, explanation: "Câu trả lời ngắn: Yes, I am. Không viết “Yes, I'm.” (không rút gọn ở cuối câu)." },
    { id: "p7", type: "choice", prompt: "A person who works in the same company with you is a …",
      options: ["customer", "visitor", "colleague", "supplier"],
      answer: 2, explanation: "Colleague = đồng nghiệp. Customer = khách hàng, visitor = khách đến thăm, supplier = nhà cung cấp – đều là người ngoài công ty." },
    { id: "p8", type: "choice", prompt: "Where is the main stress in “department”?",
      options: ["DE·part·ment", "de·PART·ment", "de·part·MENT"],
      answer: 1, explanation: "Trọng âm rơi vào âm tiết thứ hai: de·PART·ment." }
  ],

  writing: {
    title: "Introduce yourself to the team",
    task: "Bạn là nhân viên mới. Hãy viết tin nhắn ngắn gửi nhóm chat của phòng để tự giới thiệu (25–50 từ).",
    requirements: [
      "Chào mọi người.",
      "Nói tên của bạn.",
      "Nói công việc của bạn.",
      "Nói bạn làm ở phòng nào.",
      "Kết thúc bằng Nice to meet you."
    ],
    minWords: 25,
    maxWords: 50,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Hello / Hi / Good morning)", pattern: "\\b(hello|hi|good morning|good afternoon|dear)\\b" },
      { label: "Có giới thiệu tên (My name is / I'm)", pattern: "my name is|\\bI'm\\b|\\bI am\\b" },
      { label: "Có nói công việc", pattern: "accountant|assistant|officer|manager|engineer|receptionist|secretary|specialist|staff|\\bjob\\b|\\bwork" },
      { label: "Có nói phòng ban", pattern: "department|\\bteam\\b" },
      { label: "Có lời kết (Nice to meet you)", pattern: "nice to meet|see you|thank" }
    ],
    model: [
      "Hello everyone,",
      "My name is Hoa Tran. I'm the new accountant. I work in the Accounting Department on the 2nd floor. I'm from Hai Phong.",
      "Nice to meet you all!",
      "Hoa"
    ]
  },

  review: {
    keyPhrases: [
      { en: "Good morning! I'm David Brown.", vi: "Chào buổi sáng! Tôi là David Brown." },
      { en: "My name is Hoa Tran.", vi: "Tên tôi là Hoa Trần." },
      { en: "Nice to meet you. – Nice to meet you too.", vi: "Rất vui được gặp bạn. – Tôi cũng rất vui được gặp bạn." },
      { en: "Are you new here? – Yes, I am.", vi: "Bạn là người mới à? – Vâng, đúng vậy." },
      { en: "I'm the new accountant.", vi: "Tôi là kế toán mới." },
      { en: "Welcome to Riverside Trading!", vi: "Chào mừng bạn đến với Riverside Trading!" }
    ]
  }
});
