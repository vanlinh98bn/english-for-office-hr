/* =========================================================
   A1 · Module 2 (People and the Workplace) · Bài 5
   "Daily work routines"
   Khuôn rút gọn cho A1: 8 từ, 8 câu luyện tập, bài đọc và bài viết ngắn.
   Nối tiếp bài 4: thứ Sáu 16/10/2026, cuối tuần làm việc thứ hai của chị Hoa.
   Peter hỏi chị Hoa về thói quen làm việc của các đồng nghiệp rồi viết email cho chị Lan.
   Mới thêm: Mai thường gửi lịch làm việc hằng tuần vào sáng thứ Hai; Sam (IT Support)
   sửa máy tính và đôi khi lên tầng 3 giúp nhóm Kinh doanh.
   Nhắc lại sự kiện cũ: Minh thường xong việc lúc 5 giờ, cuối tháng làm đến 6 giờ chiều;
   nhóm David họp thứ Hai lúc 10:00.
   Công ty Riverside Trading và các nhân vật đều là hư cấu.
   ========================================================= */
window.EOH.registerLesson({
  id: "a1-m2-l5",
  reviewStatus: "draft", // "draft" = bản nháp, chưa duyệt
  duration: "20–25 phút",
  scenario: "Trưa thứ Sáu 16/10, ở nhà ăn nhân viên. Peter muốn biết thói quen làm việc của đồng nghiệp. Chị Hoa kể về mình, Minh, David, Mai và Sam. Chiều hôm đó Peter viết email cho chị Lan về tuần làm việc đầu tiên.",

  objectives: [
    "Chia động từ ngôi thứ ba số ít: he / she + V-s (starts, checks).",
    "Dùng -es sau s, sh, ch, x, o (finishes, fixes, goes) và dùng has thay cho have.",
    "Dùng trạng từ tần suất always, usually, sometimes đúng chỗ.",
    "Đọc đúng đuôi -s của động từ: /s/, /z/, /ɪz/.",
    "Viết tin nhắn ngắn kể thói quen làm việc của một đồng nghiệp."
  ],

  vocabulary: [
    { word: "routine", ipa: "/ruːˈtiːn/", pos: "noun", meaning: "thói quen, lịch làm việc hằng ngày",
      example: "My morning routine is simple.", exampleVi: "Thói quen buổi sáng của tôi đơn giản." },
    { word: "always", ipa: "/ˈɔːlweɪz/", pos: "adverb", meaning: "luôn luôn",
      example: "David always arrives at eight.", exampleVi: "David luôn đến lúc tám giờ." },
    { word: "usually", ipa: "/ˈjuːʒuəli/", pos: "adverb", meaning: "thường thường",
      example: "Minh usually finishes at five.", exampleVi: "Minh thường xong việc lúc năm giờ." },
    { word: "sometimes", ipa: "/ˈsʌmtaɪmz/", pos: "adverb", meaning: "thỉnh thoảng",
      example: "Sam sometimes helps our team.", exampleVi: "Thỉnh thoảng Sam giúp nhóm chúng tôi." },
    { word: "arrive", ipa: "/əˈraɪv/", pos: "verb", meaning: "đến nơi",
      example: "I arrive at eight.", exampleVi: "Tôi đến lúc tám giờ." },
    { word: "finish", ipa: "/ˈfɪnɪʃ/", pos: "verb", meaning: "kết thúc, xong",
      example: "We finish work at five.", exampleVi: "Chúng tôi tan làm lúc năm giờ." },
    { word: "check", ipa: "/tʃek/", pos: "verb", meaning: "kiểm tra, xem",
      example: "I check my emails first.", exampleVi: "Tôi xem email trước." },
    { word: "report", ipa: "/rɪˈpɔːrt/", pos: "noun", meaning: "báo cáo",
      example: "Hoa sends a report on Friday.", exampleVi: "Hoa gửi một báo cáo vào thứ Sáu." }
  ],

  pronunciation: {
    groups: [
      {
        title: "Đuôi -s của động từ ngôi thứ ba",
        text: "Chữ s ở cuối động từ he / she có ba cách đọc, giống đuôi số nhiều. Sau âm vô thanh (/t/, /k/, /p/) đọc /s/. Sau âm hữu thanh và nguyên âm đọc /z/. Sau /s/, /z/, /ʃ/, /tʃ/, /dʒ/ đọc /ɪz/.",
        items: [
          { word: "starts", marked: "/stɑːrts/", note: "Sau /t/: đọc /s/." },
          { word: "works", marked: "/wɜːrks/", note: "Sau /k/: đọc /s/." },
          { word: "arrives", marked: "/əˈraɪvz/", note: "Sau /v/: đọc /z/." },
          { word: "sends", marked: "/sendz/", note: "Sau /d/: đọc /z/." },
          { word: "finishes", marked: "/ˈfɪnɪʃɪz/", note: "Sau /ʃ/: thêm /ɪz/." },
          { word: "watches", marked: "/ˈwɑːtʃɪz/", note: "Sau /tʃ/: thêm /ɪz/." }
        ]
      },
      {
        title: "Trạng từ tần suất",
        text: "Ba trạng từ này thường nhấn ở âm tiết đầu.",
        items: [
          { word: "always", marked: "AL·ways", note: "/ˈɔːlweɪz/" },
          { word: "usually", marked: "U·su·al·ly", note: "Chữ s đọc /ʒ/: /ˈjuːʒuəli/." },
          { word: "sometimes", marked: "SOME·times", note: "/ˈsʌmtaɪmz/" }
        ]
      }
    ],
    sentences: [
      "David always arrives at eight.",
      "Minh usually finishes at five.",
      "Sam sometimes goes to the third floor."
    ]
  },

  listening: {
    title: "Our daily routines",
    setting: "Thứ Sáu 16/10, giờ nghỉ trưa ở nhà ăn nhân viên. Peter hỏi chị Hoa về thói quen làm việc.",
    speakers: { peter: "Peter (sales executive)", hoa: "Hoa (accountant)" },
    lines: [
      { s: "peter", text: "Hoa, I want to learn the office routines. What do you do every morning?",
        vi: "Hoa, tôi muốn biết thói quen làm việc ở văn phòng. Mỗi sáng chị làm gì?" },
      { s: "hoa", text: "I always arrive at eight. I usually check my emails first.",
        vi: "Tôi luôn đến lúc tám giờ. Tôi thường xem email trước." },
      { s: "peter", text: "And Minh?",
        vi: "Còn Minh?" },
      { s: "hoa", text: "He starts at eight too. He usually finishes at five, but at the end of the month he works until six.",
        vi: "Anh ấy cũng bắt đầu lúc tám giờ. Anh ấy thường xong việc lúc năm giờ, nhưng cuối tháng làm đến sáu giờ." },
      { s: "peter", text: "I see. David always arrives early. He sometimes has coffee with the team.",
        vi: "Tôi hiểu rồi. David luôn đến sớm. Thỉnh thoảng anh ấy uống cà phê với nhóm." },
      { s: "hoa", text: "Mai is early too. She usually sends the weekly schedule on Monday morning.",
        vi: "Mai cũng đến sớm. Cô ấy thường gửi lịch làm việc hằng tuần vào sáng thứ Hai." },
      { s: "peter", text: "What about Sam in IT Support?",
        vi: "Còn Sam ở bộ phận hỗ trợ công nghệ thông tin thì sao?" },
      { s: "hoa", text: "Sam fixes computers all day. He sometimes goes to the third floor to help your team.",
        vi: "Sam sửa máy tính cả ngày. Thỉnh thoảng anh ấy lên tầng ba giúp nhóm của anh." },
      { s: "peter", text: "Thanks. Now I know my colleagues' routines.",
        vi: "Cảm ơn. Bây giờ tôi biết thói quen làm việc của các đồng nghiệp." },
      { s: "hoa", text: "You're welcome, Peter. Have a good weekend!",
        vi: "Không có gì, Peter. Cuối tuần vui vẻ nhé!" }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "Hoa always arrives at:",
        options: ["seven", "eight", "nine", "ten"],
        answer: 1, explanation: "Hoa nói: “I always arrive at eight.” – chị luôn đến lúc tám giờ." },
      { id: "l2", type: "choice", prompt: "Who usually sends the weekly schedule on Monday morning?",
        options: ["Lan", "Sam", "Mai", "David"],
        answer: 2, explanation: "“She usually sends the weekly schedule on Monday morning.” nói về Mai. Chú ý sends có -s vì chủ ngữ là she." },
      { id: "l3", type: "choice", prompt: "At the end of the month, Minh works until:",
        options: ["five", "four", "seven", "six"],
        answer: 3, explanation: "“At the end of the month he works until six.” – cuối tháng anh làm đến sáu giờ. Bình thường anh xong lúc năm giờ." }
    ]
  },

  reading: {
    title: "My first week",
    intro: "Chiều thứ Sáu, Peter gửi chị Lan email về tuần đầu tiên. Đọc và tìm thói quen làm việc của từng người.",
    email: {
      from: "Peter <peter@riverside-trading.example>",
      to: "Lan Pham",
      date: "Friday, 16 October",
      subject: "My first week",
      greeting: "Hi Lan,",
      paragraphs: [
        "Thank you for your help this week. Here is a short note about my team."
      ],
      list: [
        "David always arrives at eight.",
        "Mai usually sends the weekly schedule on Monday.",
        "Sam sometimes fixes computers on our floor."
      ],
      after: [
        "I like my new job. We have a team meeting at ten on Monday."
      ],
      closing: "Have a good weekend!",
      signature: ["Peter", "Sales Team"]
    },
    glossary: [
      { term: "weekly schedule", vi: "lịch làm việc hằng tuần" },
      { term: "short note", vi: "ghi chú ngắn" },
      { term: "fix", vi: "sửa" },
      { term: "team meeting", vi: "họp nhóm" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "Who always arrives at eight?",
        options: ["Mai", "Sam", "Lan", "David"],
        answer: 3, explanation: "“David always arrives at eight.” – David luôn đến lúc tám giờ." },
      { id: "r2", type: "choice", prompt: "Who sometimes fixes computers?",
        options: ["Sam", "Mai", "David", "Peter"],
        answer: 0, explanation: "“Sam sometimes fixes computers on our floor.” – thỉnh thoảng Sam sửa máy tính. Sam làm ở IT Support." },
      { id: "r3", type: "choice", prompt: "When is Peter's team meeting?",
        options: ["On Friday", "On Tuesday at 9:30", "On Monday at ten", "On Thursday at two"],
        answer: 2, explanation: "“We have a team meeting at ten on Monday.” – nhóm họp lúc 10 giờ thứ Hai. Họp nhóm lúc 9:30 thứ Ba là nhóm Kế toán của Hoa." }
    ]
  },

  grammar: {
    title: "Present simple with he / she + frequency adverbs",
    titleVi: "Hiện tại đơn với he / she (-s, -es) và trạng từ tần suất",
    intro: "Với he, she, it, động từ hiện tại thêm -s (hoặc -es). Với I, you, we, they, động từ giữ nguyên. Trạng từ tần suất (always, usually, sometimes) cho biết làm việc đó thường xuyên đến mức nào.",
    patterns: [
      { form: "He / She + động từ + -s", use: "Thói quen của một người. Thêm -s cho hầu hết động từ.",
        examples: ["David arrives at eight.", "Mai sends the weekly schedule."] },
      { form: "He / She + động từ + -es (sau s, sh, ch, x, o)", use: "Thêm -es khi động từ kết thúc bằng s, sh, ch, x hoặc o.",
        examples: ["Minh finishes at five.", "Sam fixes computers. / Sam goes to the third floor."] },
      { form: "have → has", use: "Động từ have đổi thành has với he / she.",
        examples: ["She has a meeting on Friday.", "He has coffee with the team."] },
      { form: "Chủ ngữ + always / usually / sometimes + động từ", use: "Trạng từ đứng giữa chủ ngữ và động từ chính. Với to be thì đứng sau be.",
        examples: ["He always arrives early.", "He is always early."] }
    ],
    mistakes: [
      { wrong: "He arrive at eight.", right: "He arrives at eight.", note: "Với he / she cần thêm -s: arrives." },
      { wrong: "She finish at five.", right: "She finishes at five.", note: "Finish kết thúc bằng sh nên thêm -es." },
      { wrong: "He always is early.", right: "He is always early.", note: "Với to be, trạng từ đứng sau be: is always." },
      { wrong: "She have a meeting.", right: "She has a meeting.", note: "Have đổi thành has với he / she." }
    ],
    tip: "Câu hỏi và câu phủ định ở ngôi thứ ba (does, doesn't) bạn sẽ học ở Module 4. Bây giờ hãy luyện câu khẳng định thật chắc."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "Mai usually ___ the schedule on Monday.",
      options: ["send", "sends", "sending", "sendes"],
      answer: 1, explanation: "Chủ ngữ là Mai (she) nên động từ thêm -s: sends. “sendes” không tồn tại; send không có -s chỉ dùng với I / you / we / they." },
    { id: "p2", type: "gap", prompt: "Sam ___ computers every day.",
      options: ["fix", "fixs", "fixing", "fixes"],
      answer: 3, explanation: "Fix kết thúc bằng x nên thêm -es: fixes. “fixs” sai chính tả." },
    { id: "p3", type: "gap", prompt: "He always ___ at eight.",
      options: ["arrives", "arrive", "arriving", "are arrive"],
      answer: 0, explanation: "He + động từ -s: arrives. Trạng từ always đứng trước động từ chính." },
    { id: "p4", type: "choice", prompt: "Which sentence is correct?",
      options: ["He always is early.", "Always he early is.", "He is always early.", "He early always is."],
      answer: 2, explanation: "Với to be, trạng từ đứng sau be: He is always early." },
    { id: "p5", type: "gap", prompt: "She ___ a meeting on Friday.",
      options: ["has", "have", "haves", "having"],
      answer: 0, explanation: "Have đổi thành has với she: She has a meeting." },
    { id: "p6", type: "choice", prompt: "Which sentence is correct?",
      options: ["She finish at five.", "She finishs at five.", "She finishes at five.", "She finishing at five."],
      answer: 2, explanation: "Finish kết thúc bằng sh nên thêm -es: finishes." },
    { id: "p7", type: "choice", prompt: "Which word ends with the sound /ɪz/?",
      options: ["works", "watches", "starts", "sends"],
      answer: 1, explanation: "Watches /ˈwɑːtʃɪz/ kết thúc bằng /tʃ/ nên thêm /ɪz/. Works và starts đọc /s/, sends đọc /z/." },
    { id: "p8", type: "choice", prompt: "Which word means “only on a few days (not many)”?",
      options: ["always", "usually", "sometimes", "never"],
      answer: 2, explanation: "Sometimes là thỉnh thoảng. Always là mọi lần, usually là hầu hết các lần, never là không bao giờ." }
  ],

  writing: {
    title: "A colleague's routine",
    task: "Bạn là Hoa. Hãy viết tin nhắn cho bạn Anna, kể thói quen làm việc của đồng nghiệp Minh (25–50 từ).",
    requirements: [
      "Chào Anna.",
      "Dùng ít nhất hai trạng từ tần suất khác nhau: always, usually, sometimes.",
      "Dùng ít nhất một động từ có -s (he / she + V-s).",
      "Dùng một động từ có -es (finishes, goes, fixes…).",
      "Dùng has một lần.",
      "Kết thúc tin nhắn và ký tên."
    ],
    minWords: 25,
    maxWords: 50,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Hi / Hello / Dear)", pattern: "\\b(hi|hello|dear)\\b" },
      { label: "Có he / she + (trạng từ) + động từ có -s", pattern: "\\b(he|she) (always |usually |sometimes )?[a-z]+(s|es)\\b" },
      { label: "Có ít nhất hai trạng từ tần suất", pattern: "(always|usually|sometimes)[\\s\\S]*(always|usually|sometimes)" },
      { label: "Có động từ -es (finishes, goes, fixes, watches)", pattern: "\\b(finishes|goes|fixes|watches|teaches|washes|passes)\\b" },
      { label: "Có has", pattern: "\\bhas\\b" },
      { label: "Có lời kết (See you / Best wishes)", pattern: "see you|regards|wishes|thanks|bye" }
    ],
    model: [
      "Hi Anna,",
      "This is my colleague Minh. He always arrives at eight, and he usually finishes at five. He sometimes works late at the end of the month. He has lunch with me.",
      "See you soon!",
      "Hoa"
    ]
  },

  review: {
    keyPhrases: [
      { en: "He always arrives at eight.", vi: "Anh ấy luôn đến lúc tám giờ." },
      { en: "She usually sends the weekly schedule on Monday.", vi: "Cô ấy thường gửi lịch làm việc hằng tuần vào thứ Hai." },
      { en: "He sometimes goes to the third floor.", vi: "Thỉnh thoảng anh ấy lên tầng ba." },
      { en: "Sam fixes computers all day.", vi: "Sam sửa máy tính cả ngày." },
      { en: "She has a meeting on Friday.", vi: "Cô ấy có một cuộc họp vào thứ Sáu." },
      { en: "He is always early.", vi: "Anh ấy luôn đến sớm." }
    ]
  }
});
