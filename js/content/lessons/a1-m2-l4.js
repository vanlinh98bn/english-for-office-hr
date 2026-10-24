/* =========================================================
   A1 · Module 2 (People and the Workplace) · Bài 4
   "Places in the office and directions"
   Khuôn rút gọn cho A1: 8 từ, 8 câu luyện tập, bài đọc và bài viết ngắn.
   Nối tiếp bài 3: thứ Năm 15/10/2026. Peter có cuộc gặp với David lúc 2 giờ chiều
   ở Room 301 (tầng 3). Mới thêm: Room 301 nằm giữa văn phòng David và cầu thang;
   nhà vệ sinh đối diện thang máy; khách Mr. Green (chỉ xuất hiện trong bài viết,
   đến Room 301 vào thứ Sáu 16/10).
   Công ty Riverside Trading và các nhân vật đều là hư cấu.
   ========================================================= */
window.EOH.registerLesson({
  id: "a1-m2-l4",
  reviewStatus: "draft", // "draft" = bản nháp, chưa duyệt
  duration: "20–25 phút",
  scenario: "Thứ Năm 15/10, gần hai giờ chiều. Peter có cuộc gặp với David ở Room 301 nhưng anh bị lạc trên tầng ba. Chị Mai chỉ đường cho anh. Buổi sáng chị Mai đã gửi cho Peter email chỉ đường.",

  objectives: [
    "Nói vị trí bằng next to, opposite và between … and ….",
    "Hỏi đường bằng Where is…? và trả lời It's… / It's on the left.",
    "Chỉ đường bằng Go straight. và Turn left. / Turn right.",
    "Nói được các nơi trong văn phòng: elevator, stairs, restroom.",
    "Nối âm phụ âm với nguyên âm: turn around, go ahead."
  ],

  vocabulary: [
    { word: "next to", ipa: "/ˈnekst tuː/", pos: "preposition", meaning: "bên cạnh",
      example: "The restroom is next to the stairs.", exampleVi: "Nhà vệ sinh ở bên cạnh cầu thang." },
    { word: "opposite", ipa: "/ˈɑːpəzɪt/", pos: "preposition", meaning: "đối diện",
      example: "It's opposite the elevator.", exampleVi: "Nó ở đối diện thang máy." },
    { word: "between", ipa: "/bɪˈtwiːn/", pos: "preposition", meaning: "ở giữa",
      example: "Room 301 is between the office and the stairs.", exampleVi: "Room 301 nằm giữa văn phòng và cầu thang." },
    { word: "elevator", ipa: "/ˈelɪˌveɪtər/", pos: "noun", meaning: "thang máy",
      example: "Take the elevator to the third floor.", exampleVi: "Đi thang máy lên tầng ba." },
    { word: "stairs", ipa: "/sterz/", pos: "noun", meaning: "cầu thang bộ",
      example: "The stairs are on the left.", exampleVi: "Cầu thang bộ ở bên trái." },
    { word: "restroom", ipa: "/ˈrestruːm/", pos: "noun", meaning: "nhà vệ sinh",
      example: "Where is the restroom?", exampleVi: "Nhà vệ sinh ở đâu?" },
    { word: "corner", ipa: "/ˈkɔːrnər/", pos: "noun", meaning: "góc, chỗ rẽ",
      example: "Turn left at the corner.", exampleVi: "Rẽ trái ở chỗ góc." },
    { word: "go straight", ipa: "/ˌɡoʊ ˈstreɪt/", pos: "phrase", meaning: "đi thẳng",
      example: "Go straight, then turn right.", exampleVi: "Đi thẳng, rồi rẽ phải." }
  ],

  pronunciation: {
    groups: [
      {
        title: "Nối âm: phụ âm + nguyên âm",
        text: "Khi một từ kết thúc bằng âm phụ âm và từ sau bắt đầu bằng nguyên âm, ta nối hai từ thành một dòng âm. Ký hiệu _ cho thấy chỗ nối.",
        items: [
          { word: "turn around", marked: "tur·nə·ROUND", note: "Âm /n/ nối với /ə/." },
          { word: "go ahead", marked: "goʊ_ə·HEAD", note: "Hai từ gần như một từ." },
          { word: "walk up", marked: "wɔː·kʌp", note: "Âm /k/ nối với /ʌ/." },
          { word: "stand up", marked: "stæn·dʌp", note: "Âm /d/ nối với /ʌ/." }
        ]
      },
      {
        title: "Nối âm trong câu chỉ đường",
        text: "Trong câu chỉ đường thật, bạn sẽ nghe nối âm liên tục. Hãy nghe và lặp lại cả cụm.",
        items: [
          { word: "Turn left at the corner.", marked: "Tur·n LEFT_at the COR·ner." },
          { word: "Go up the stairs.", marked: "Goʊ_UP the STAIRS." },
          { word: "It's opposite the elevator.", marked: "It's OP·po·site_the EL·e·va·tor." }
        ]
      }
    ],
    sentences: [
      "Turn left at the corner.",
      "It's opposite the elevator.",
      "Go straight and turn around."
    ]
  },

  listening: {
    title: "Where is Room 301?",
    setting: "Thứ Năm 15/10, gần hai giờ chiều, tầng ba. Peter bị lạc và hỏi chị Mai.",
    speakers: { peter: "Peter (sales executive)", mai: "Mai (David's assistant)" },
    lines: [
      { s: "peter", text: "Excuse me, Mai. I'm lost. Where is Room three-oh-one?",
        vi: "Xin lỗi chị Mai. Tôi bị lạc. Room ba-không-một ở đâu ạ?" },
      { s: "mai", text: "Hi Peter. It's near. Go straight, then turn left at the corner.",
        vi: "Chào Peter. Gần thôi. Đi thẳng, rồi rẽ trái ở chỗ góc." },
      { s: "peter", text: "OK. Straight, then left.",
        vi: "Vâng. Thẳng, rồi trái." },
      { s: "mai", text: "Room three-oh-one is between David's office and the stairs.",
        vi: "Room ba-không-một nằm giữa văn phòng David và cầu thang." },
      { s: "peter", text: "Between David's office and the stairs. Got it. And where is the restroom?",
        vi: "Giữa văn phòng David và cầu thang. Tôi hiểu rồi. Còn nhà vệ sinh ở đâu?" },
      { s: "mai", text: "It's opposite the elevator.",
        vi: "Nó ở đối diện thang máy." },
      { s: "peter", text: "Thank you, Mai!",
        vi: "Cảm ơn chị Mai!" },
      { s: "mai", text: "You're welcome. Your meeting with David starts at two.",
        vi: "Không có gì. Cuộc gặp của anh với David bắt đầu lúc hai giờ." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "Where is Room 301?",
        options: ["Next to the elevator", "Opposite the restroom", "Between David's office and the stairs", "Between the elevator and the restroom"],
        answer: 2, explanation: "Mai nói: “Room three-oh-one is between David's office and the stairs.” – Room 301 nằm giữa văn phòng David và cầu thang." },
      { id: "l2", type: "choice", prompt: "Which way does Peter turn at the corner?",
        options: ["Right", "Left", "Back", "Up"],
        answer: 1, explanation: "“Go straight, then turn left at the corner.” – đi thẳng rồi rẽ trái." },
      { id: "l3", type: "choice", prompt: "Where is the restroom?",
        options: ["Next to the stairs", "Between the stairs and the office", "Opposite David's office", "Opposite the elevator"],
        answer: 3, explanation: "“It's opposite the elevator.” – nhà vệ sinh ở đối diện thang máy. Room 301 mới nằm giữa văn phòng David và cầu thang." }
    ]
  },

  reading: {
    title: "Directions to Room 301",
    intro: "Sáng thứ Năm, chị Mai gửi Peter email chỉ đường đến Room 301. Đọc và tìm giờ họp, cách đi và nhà vệ sinh.",
    email: {
      from: "Mai Le <mai.le@riverside-trading.example>",
      to: "Peter",
      date: "Thursday, 15 October",
      subject: "Directions to Room 301",
      greeting: "Hi Peter,",
      paragraphs: [
        "Your meeting with David is at 2:00 p.m. in Room 301."
      ],
      list: [
        "Leave the elevator and go straight.",
        "Turn left at the corner.",
        "Room 301 is between David's office and the stairs."
      ],
      after: [
        "The restroom is opposite the elevator. Call me if you need help."
      ],
      closing: "See you later!",
      signature: ["Mai Le", "Assistant to David Brown"]
    },
    glossary: [
      { term: "leave", vi: "rời khỏi, ra khỏi" },
      { term: "turn left", vi: "rẽ trái" },
      { term: "stairs", vi: "cầu thang bộ" },
      { term: "need help", vi: "cần giúp đỡ" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "When is Peter's meeting with David?",
        options: ["At 2:00 p.m.", "At 9:00 a.m.", "At 10:00 a.m.", "At 4:15 p.m."],
        answer: 0, explanation: "“Your meeting with David is at 2:00 p.m. in Room 301.” – cuộc gặp lúc 2 giờ chiều." },
      { id: "r2", type: "choice", prompt: "What does Peter do at the corner?",
        options: ["Turn right", "Go back", "Turn left", "Take the stairs"],
        answer: 2, explanation: "“Turn left at the corner.” – rẽ trái ở chỗ góc." },
      { id: "r3", type: "choice", prompt: "Where is the restroom?",
        options: ["Next to Room 301", "Opposite the elevator", "Next to the stairs", "Opposite Room 301"],
        answer: 1, explanation: "“The restroom is opposite the elevator.” – nhà vệ sinh đối diện thang máy. Email không nói nhà vệ sinh gần Room 301 hay cầu thang." }
    ]
  },

  grammar: {
    title: "Prepositions of place and directions",
    titleVi: "Giới từ nơi chốn (next to, opposite, between) và câu chỉ đường",
    intro: "Giới từ nơi chốn cho biết một thứ ở đâu so với thứ khác. Câu chỉ đường dùng động từ nguyên mẫu để ra lệnh nhẹ: Go straight. Turn left.",
    patterns: [
      { form: "A is next to B.", use: "A ở bên cạnh B.",
        examples: ["The restroom is next to the stairs.", "My desk is next to the window."] },
      { form: "A is opposite B.", use: "A ở đối diện B. Không dùng “to” sau opposite.",
        examples: ["The restroom is opposite the elevator.", "My desk is opposite the window."] },
      { form: "A is between B and C.", use: "A ở giữa B và C. Cần cả hai nơi, nối bằng and.",
        examples: ["Room 301 is between David's office and the stairs."] },
      { form: "Go straight. / Turn left. / Turn right. / It's on the left.", use: "Chỉ đường. Where is…? hỏi vị trí.",
        examples: ["Go straight, then turn left at the corner.", "Where is the restroom? – It's on the right."] }
    ],
    mistakes: [
      { wrong: "It's between the elevator the stairs.", right: "It's between the elevator and the stairs.", note: "Between cần and giữa hai nơi." },
      { wrong: "Turn to left.", right: "Turn left.", note: "Nói “Turn left.” hoặc “Turn to the left.” (thiếu “the”)." },
      { wrong: "It's next the stairs.", right: "It's next to the stairs.", note: "Phải có to: next to." },
      { wrong: "Where the restroom is?", right: "Where is the restroom?", note: "Đảo is lên trước the restroom." }
    ],
    tip: "Khi chỉ đường, nói ngắn từng bước và nói chậm: Go straight. Turn left. Hãy dùng then để nối các bước."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "The restroom is ___ the elevator.",
      options: ["to", "opposite", "in", "for"],
      answer: 1, explanation: "“Opposite the elevator” nghĩa là đối diện thang máy. “to”, “in”, “for” không tạo thành câu chỉ vị trí đúng ở đây." },
    { id: "p2", type: "gap", prompt: "Room 301 is ___ David's office and the stairs.",
      options: ["next", "at", "in", "between"],
      answer: 3, explanation: "Có hai nơi nối bằng and (David's office and the stairs) nên dùng between. “next” cần có to: next to." },
    { id: "p3", type: "gap", prompt: "Go straight and ___ left at the corner.",
      options: ["turn", "turns", "turning", "to turn"],
      answer: 0, explanation: "Câu chỉ đường dùng động từ nguyên mẫu: Turn left. “turns”, “turning”, “to turn” không đúng mẫu ra lệnh." },
    { id: "p4", type: "choice", prompt: "Which sentence is correct?",
      options: ["It's next the stairs.", "It's to next the stairs.", "It's next to the stairs.", "It's next at the stairs."],
      answer: 2, explanation: "Đúng là next to. Các lựa chọn còn lại sai thứ tự hoặc sai giới từ." },
    { id: "p5", type: "choice", context: "Mai says: “Go straight and turn right.”", prompt: "Which way does Peter turn?",
      options: ["Left", "Straight on", "Back", "Right"],
      answer: 3, explanation: "Turn right nghĩa là rẽ phải." },
    { id: "p6", type: "gap", prompt: "Excuse me, where ___ the restroom?",
      options: ["is", "are", "do", "does"],
      answer: 0, explanation: "The restroom là số ít nên dùng is: Where is the restroom? “do / does” không dùng với to be." },
    { id: "p7", type: "choice", prompt: "Which phrase joins a consonant sound to a vowel sound?",
      options: ["turn left", "go straight", "turn around", "next to"],
      answer: 2, explanation: "Turn around: âm /n/ cuối “turn” nối với âm nguyên âm /ə/ của “around”. Turn left và next to là phụ âm đứng cạnh phụ âm." },
    { id: "p8", type: "choice", context: "A: Where is the restroom?", prompt: "What is the best answer?",
      options: ["Yes, it is.", "It's opposite the elevator.", "At eight o'clock.", "I'm an accountant."],
      answer: 1, explanation: "Where hỏi nơi chốn nên trả lời bằng vị trí: It's opposite the elevator. “At eight o'clock” trả lời When." }
  ],

  writing: {
    title: "Directions for a visitor",
    task: "Mr. Green, một khách hàng, sẽ đến họp ở Room 301 vào ngày mai. Bạn là Hoa, hãy viết tin nhắn chỉ đường từ thang máy đến Room 301 (25–50 từ).",
    requirements: [
      "Chào Mr. Green.",
      "Dùng Go straight.",
      "Dùng Turn left hoặc Turn right.",
      "Nói vị trí của Room 301 bằng between, next to hoặc opposite.",
      "Nhắc Room 301 trong tin nhắn.",
      "Kết thúc tin nhắn và ký tên."
    ],
    minWords: 25,
    maxWords: 50,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Hi / Hello / Dear)", pattern: "\\b(hi|hello|dear)\\b" },
      { label: "Có Go straight", pattern: "go straight" },
      { label: "Có Turn left hoặc Turn right", pattern: "turn (left|right)" },
      { label: "Có between, next to hoặc opposite", pattern: "between|next to|opposite" },
      { label: "Có Room 301", pattern: "room (301|three)" },
      { label: "Có lời kết (See you / Best wishes)", pattern: "see you|regards|wishes|thanks|bye" }
    ],
    model: [
      "Hi Mr. Green,",
      "Go straight from the elevator. Turn left at the corner. Room 301 is between David's office and the stairs. The restroom is opposite the elevator.",
      "See you tomorrow!",
      "Hoa"
    ]
  },

  review: {
    keyPhrases: [
      { en: "Where is Room 301?", vi: "Room 301 ở đâu?" },
      { en: "Go straight, then turn left at the corner.", vi: "Đi thẳng, rồi rẽ trái ở chỗ góc." },
      { en: "It's between David's office and the stairs.", vi: "Nó nằm giữa văn phòng David và cầu thang." },
      { en: "The restroom is opposite the elevator.", vi: "Nhà vệ sinh ở đối diện thang máy." },
      { en: "It's next to the stairs.", vi: "Nó ở bên cạnh cầu thang." },
      { en: "Turn right at the corner.", vi: "Rẽ phải ở chỗ góc." }
    ]
  }
});
