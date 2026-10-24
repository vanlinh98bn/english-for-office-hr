/* =========================================================
   A1 · Module 1 (English Foundations) · Bài 2
   "Numbers, dates and times"
   Khuôn rút gọn cho A1: 8 từ, 8 câu luyện tập, bài đọc và bài viết ngắn.
   Nối tiếp bài 1: vẫn là ngày đầu đi làm của chị Hoa (thứ Hai 5/10).
   Tên thứ và tên tháng chỉ dùng vài từ; học đầy đủ ở bài 4.
   Công ty Riverside Trading và các nhân vật đều là hư cấu.
   ========================================================= */
window.EOH.registerLesson({
  id: "a1-m1-l2",
  reviewStatus: "draft", // "draft" = bản nháp, chưa duyệt
  duration: "20–25 phút",
  scenario: "Sáng thứ Hai, chị Lan (phòng Nhân sự) hỏi chị Hoa vài thông tin để làm hồ sơ nhân viên: số điện thoại, ngày sinh. Chị Lan cũng cho Hoa biết số máy lẻ, giờ làm việc và lịch họp nhóm.",

  objectives: [
    "Đọc và nghe đúng số điện thoại, số máy lẻ, số phòng.",
    "Phân biệt số -teen và -ty (thirteen – thirty) khi nghe và nói.",
    "Nói giờ: eight o'clock, nine thirty, half past eleven.",
    "Nói ngày tháng và dùng đúng at / on / in với thời gian.",
    "Viết email ngắn xác nhận giờ họp và cho số điện thoại."
  ],

  vocabulary: [
    { word: "phone number", ipa: "/ˈfoʊn ˌnʌmbər/", pos: "noun", meaning: "số điện thoại",
      example: "What's your phone number?", exampleVi: "Số điện thoại của bạn là gì?" },
    { word: "extension", ipa: "/ɪkˈstenʃən/", pos: "noun", meaning: "số máy lẻ (điện thoại nội bộ)",
      example: "Your extension is two-one-five.", exampleVi: "Số máy lẻ của bạn là 215." },
    { word: "date of birth", ipa: "/ˌdeɪt əv ˈbɜːrθ/", pos: "noun", meaning: "ngày sinh",
      example: "What's your date of birth?", exampleVi: "Ngày sinh của bạn là ngày nào?" },
    { word: "o'clock", ipa: "/əˈklɑːk/", pos: "adverb", meaning: "giờ đúng (chỉ dùng với giờ chẵn)",
      example: "Work starts at eight o'clock.", exampleVi: "Giờ làm việc bắt đầu lúc 8 giờ." },
    { word: "half past", ipa: "/ˌhæf ˈpæst/", pos: "phrase", meaning: "… giờ rưỡi (qua 30 phút)",
      example: "Lunch is at half past eleven.", exampleVi: "Giờ ăn trưa là 11 giờ rưỡi." },
    { word: "a.m. / p.m.", ipa: "/ˌeɪ ˈem/ · /ˌpiː ˈem/", pos: "abbreviation", meaning: "giờ buổi sáng (trước 12 giờ trưa) / giờ chiều tối",
      example: "Work finishes at five p.m.", exampleVi: "Giờ làm việc kết thúc lúc 5 giờ chiều." },
    { word: "meeting", ipa: "/ˈmiːtɪŋ/", pos: "noun", meaning: "cuộc họp",
      example: "The team meeting is at nine thirty.", exampleVi: "Cuộc họp nhóm lúc 9 giờ 30." },
    { word: "on time", ipa: "/ˌɑːn ˈtaɪm/", pos: "phrase", meaning: "đúng giờ",
      example: "Please be on time.", exampleVi: "Vui lòng đến đúng giờ." }
  ],

  pronunciation: {
    groups: [
      {
        title: "Số -teen và số -ty",
        text: "Người nghe hay nhầm 13 và 30, 15 và 50. Số -teen nhấn ở cuối và kéo dài /tiːn/; số -ty nhấn ở đầu, đuôi /ti/ ngắn.",
        items: [
          { word: "thirteen", marked: "thir·TEEN", note: "13" },
          { word: "thirty", marked: "THIR·ty", note: "30" },
          { word: "fifteen", marked: "fif·TEEN", note: "15" },
          { word: "fifty", marked: "FIF·ty", note: "50" },
          { word: "eighteen", marked: "eigh·TEEN", note: "18" },
          { word: "eighty", marked: "EIGH·ty", note: "80" }
        ]
      }
    ],
    sentences: [
      "The meeting is in Room three-oh-one.",
      "My extension is two-one-five.",
      "Lunch is from half past eleven to one o'clock."
    ]
  },

  listening: {
    title: "Information for your employee record",
    setting: "Sáng thứ Hai, ở phòng Nhân sự. Chị Lan hỏi thông tin để làm hồ sơ cho chị Hoa.",
    speakers: { lan: "Lan (HR Officer)", hoa: "Hoa (new accountant)" },
    lines: [
      { s: "lan", text: "Hi Hoa. I need some information for your employee record. What's your phone number?",
        vi: "Chào Hoa. Chị cần vài thông tin để làm hồ sơ nhân viên cho em. Số điện thoại của em là gì?" },
      { s: "hoa", text: "It's oh-nine-one-two, three-four-five, six-seven-eight.",
        vi: "Dạ, là 0912 345 678." },
      { s: "lan", text: "Thank you. And what's your date of birth?",
        vi: "Cảm ơn em. Còn ngày sinh của em?" },
      { s: "hoa", text: "The twelfth of May, nineteen ninety-eight.",
        vi: "Ngày 12 tháng 5 năm 1998 ạ." },
      { s: "lan", text: "Great. Your extension is two-one-five.",
        vi: "Tốt rồi. Số máy lẻ của em là 215." },
      { s: "hoa", text: "Two-one-five. OK. What time does work start?",
        vi: "215. Vâng ạ. Mấy giờ thì bắt đầu làm việc ạ?" },
      { s: "lan", text: "At eight o'clock. Lunch is from half past eleven to one o'clock, and work finishes at five p.m.",
        vi: "Lúc 8 giờ. Nghỉ trưa từ 11 giờ rưỡi đến 1 giờ, và hết giờ làm lúc 5 giờ chiều." },
      { s: "hoa", text: "And when is the team meeting?",
        vi: "Còn họp nhóm vào lúc nào ạ?" },
      { s: "lan", text: "Every Tuesday at nine thirty, in Room three-oh-one.",
        vi: "Thứ Ba hằng tuần, lúc 9 giờ 30, ở phòng 301." },
      { s: "hoa", text: "Thank you, Lan.",
        vi: "Em cảm ơn chị Lan." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "What is Hoa's extension?",
        options: ["205", "215", "250", "512"],
        answer: 1, explanation: "Chị Lan nói “two-one-five” = 215. Số máy lẻ thường đọc từng chữ số." },
      { id: "l2", type: "choice", prompt: "What time does work start?",
        options: ["7:30 a.m.", "8:30 a.m.", "9:30 a.m.", "8:00 a.m."],
        answer: 3, explanation: "“At eight o'clock” = 8 giờ đúng. 9:30 là giờ họp nhóm, không phải giờ bắt đầu làm việc." },
      { id: "l3", type: "choice", prompt: "What is Hoa's date of birth?",
        options: ["12 May 1998", "20 May 1998", "12 March 1998", "2 May 1998"],
        answer: 0, explanation: "“The twelfth of May, nineteen ninety-eight” = ngày 12 tháng 5 năm 1998. Twelfth = thứ 12; twentieth mới là 20." }
    ]
  },

  reading: {
    title: "Important times this week",
    intro: "Chiều thứ Hai, chị Lan gửi cho chị Hoa lịch các buổi quan trọng trong tuần. Đọc và tìm giờ, ngày, địa điểm.",
    email: {
      from: "Lan Pham <lan.pham@riverside-trading.example>",
      to: "Hoa Tran",
      date: "Monday, 5 October",
      subject: "Your timetable this week",
      greeting: "Hi Hoa,",
      paragraphs: [
        "Here are some important times for you this week:"
      ],
      list: [
        "Tuesday 6 October, 9:30 a.m. – Team meeting, Room 301",
        "Wednesday 7 October, 2:00 p.m. – Computer training, Room 205",
        "Friday 9 October, 4:15 p.m. – Welcome coffee, 5th floor"
      ],
      after: [
        "Please be on time. If you are late, please call me on extension 214."
      ],
      closing: "Thanks,",
      signature: ["Lan"]
    },
    glossary: [
      { term: "timetable", vi: "lịch, thời gian biểu" },
      { term: "computer training", vi: "buổi hướng dẫn sử dụng máy tính" },
      { term: "welcome coffee", vi: "buổi cà phê chào đón nhân viên mới" },
      { term: "late", vi: "muộn, trễ" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "What time is the computer training?",
        options: ["9:30 a.m.", "4:15 p.m.", "2:00 p.m.", "8:00 a.m."],
        answer: 2, explanation: "“Wednesday 7 October, 2:00 p.m. – Computer training” – 2 giờ chiều thứ Tư." },
      { id: "r2", type: "choice", prompt: "Where is the team meeting?",
        options: ["Room 205", "Room 301", "On the 5th floor", "Room 214"],
        answer: 1, explanation: "“Team meeting, Room 301”. 214 là số máy lẻ của chị Lan, không phải số phòng." },
      { id: "r3", type: "choice", prompt: "What should Hoa do if she is late?",
        options: ["Send an email to David", "Go to Room 205", "Wait at reception", "Call Lan on extension 214"],
        answer: 3, explanation: "“If you are late, please call me on extension 214.” – nếu đến muộn thì gọi chị Lan theo số máy lẻ 214." }
    ]
  },

  grammar: {
    title: "Time words: at, on, in",
    titleVi: "Nói giờ và ngày: at, on, in",
    intro: "Tiếng Việt chỉ cần nói “lúc 9 giờ”, “vào thứ Ba”, “vào tháng 5”. Tiếng Anh dùng ba giới từ khác nhau: at cho giờ, on cho thứ và ngày, in cho tháng, năm và buổi.",
    patterns: [
      { form: "at + giờ", use: "Giờ cụ thể.",
        examples: ["Work starts at eight o'clock.", "The meeting is at nine thirty."] },
      { form: "on + thứ / ngày", use: "Thứ trong tuần hoặc một ngày cụ thể.",
        examples: ["The training is on Wednesday.", "My birthday is on the twelfth of May."] },
      { form: "in + tháng / năm / buổi", use: "Tháng, năm, hoặc buổi trong ngày (in the morning, in the afternoon).",
        examples: ["My birthday is in May.", "The training is in the afternoon."] },
      { form: "Cách nói giờ", use: "9:30 = nine thirty = half past nine. 8:15 = eight fifteen = quarter past eight. Giờ chẵn: eight o'clock.",
        examples: ["It's nine thirty.", "It's half past nine."] }
    ],
    mistakes: [
      { wrong: "The meeting is on 9 o'clock.", right: "The meeting is at 9 o'clock.", note: "Giờ dùng at." },
      { wrong: "My birthday is in 12 May.", right: "My birthday is on 12 May.", note: "Có ngày cụ thể thì dùng on; chỉ có tháng thì dùng in (in May)." },
      { wrong: "Work starts at the morning.", right: "Work starts in the morning.", note: "Buổi sáng, buổi chiều dùng in the morning / in the afternoon." },
      { wrong: "It's 9 hours 30.", right: "It's nine thirty.", note: "Không dịch từng chữ “9 giờ 30”; tiếng Anh không dùng “hours” khi nói giờ." }
    ],
    tip: "Viết ngày tháng: kiểu Anh 12/05 là 12 May, kiểu Mỹ 05/12 là May 12 – rất dễ nhầm. Trong email công việc nên viết tên tháng (12 May). Số 0 trong số điện thoại đọc là “oh” hoặc “zero”, và đọc từng chữ số."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "The meeting is ___ 9:30.",
      options: ["on", "in", "at", "to"],
      answer: 2, explanation: "Giờ cụ thể dùng at: at 9:30." },
    { id: "p2", type: "gap", prompt: "My birthday is ___ 12 May.",
      options: ["on", "in", "at", "of"],
      answer: 0, explanation: "Ngày cụ thể dùng on: on 12 May. Nếu chỉ có tháng thì dùng in: in May." },
    { id: "p3", type: "gap", prompt: "The computer training is ___ the afternoon.",
      options: ["at", "on", "by", "in"],
      answer: 3, explanation: "Buổi trong ngày dùng in: in the morning, in the afternoon." },
    { id: "p4", type: "choice", prompt: "How do you say 8:30?",
      options: ["eight thirteen", "half past eight", "half past nine", "eight three"],
      answer: 1, explanation: "8:30 = eight thirty = half past eight (8 giờ rưỡi). “Thirteen” là 13, không phải 30." },
    { id: "p5", type: "choice", prompt: "Which number is “fifty”?",
      options: ["15", "05", "50", "55"],
      answer: 2, explanation: "Fifty (FIF·ty) = 50. Fifteen (fif·TEEN) = 15." },
    { id: "p6", type: "choice", context: "Lan asks: “What's your date of birth?”", prompt: "What does Hoa say?",
      options: ["It's oh-nine-one-two, three-four-five, six-seven-eight.", "At eight o'clock.", "Room three-oh-one.", "The twelfth of May, nineteen ninety-eight."],
      answer: 3, explanation: "Date of birth = ngày sinh, nên trả lời bằng ngày tháng năm. Các lựa chọn khác là số điện thoại, giờ và số phòng." },
    { id: "p7", type: "gap", prompt: "Lunch is from 11:30 ___ 1:00.",
      options: ["to", "at", "on", "in"],
      answer: 0, explanation: "from … to … = từ … đến …: from 11:30 to 1:00." },
    { id: "p8", type: "choice", prompt: "Where is the stress in “thirteen”?",
      options: ["THIR·teen", "thir·TEEN"],
      answer: 1, explanation: "Số -teen nhấn ở cuối: thir·TEEN (13). Số -ty nhấn ở đầu: THIR·ty (30)." }
  ],

  writing: {
    title: "Confirm the meeting",
    task: "Bạn là Hoa. Hãy trả lời email của chị Lan (25–50 từ): xác nhận bạn sẽ đến họp nhóm và cho chị số điện thoại, số máy lẻ của bạn.",
    requirements: [
      "Chào chị Lan.",
      "Cảm ơn chị vì lịch làm việc.",
      "Xác nhận họp nhóm thứ Ba, 9:30, phòng 301.",
      "Cho biết số điện thoại và số máy lẻ của bạn.",
      "Kết thúc email và ký tên."
    ],
    minWords: 25,
    maxWords: 50,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Hi / Hello / Dear)", pattern: "\\b(hi|hello|dear)\\b" },
      { label: "Có lời cảm ơn", pattern: "\\bthank" },
      { label: "Nhắc tới giờ họp 9:30", pattern: "9[:.]30|nine thirty|half past nine" },
      { label: "Có số điện thoại", pattern: "phone|\\d{4}" },
      { label: "Có số máy lẻ", pattern: "extension|\\bext\\b" },
      { label: "Có lời kết (See you / Best regards …)", pattern: "see you|regards|best wishes|thanks" }
    ],
    model: [
      "Hi Lan,",
      "Thank you for the timetable. See you at the team meeting on Tuesday at 9:30 a.m. in Room 301.",
      "My phone number is 0912 345 678 and my extension is 215.",
      "Best regards,",
      "Hoa"
    ]
  },

  review: {
    keyPhrases: [
      { en: "What's your phone number? – It's oh-nine-one-two, three-four-five, six-seven-eight.", vi: "Số điện thoại của bạn là gì? – 0912 345 678." },
      { en: "What's your date of birth? – The twelfth of May, nineteen ninety-eight.", vi: "Ngày sinh của bạn? – Ngày 12 tháng 5 năm 1998." },
      { en: "What time does work start? – At eight o'clock.", vi: "Mấy giờ bắt đầu làm việc? – Lúc 8 giờ." },
      { en: "Lunch is from half past eleven to one o'clock.", vi: "Nghỉ trưa từ 11 giờ rưỡi đến 1 giờ." },
      { en: "The team meeting is on Tuesday at nine thirty.", vi: "Họp nhóm vào thứ Ba lúc 9 giờ 30." },
      { en: "Please be on time.", vi: "Vui lòng đến đúng giờ." }
    ]
  }
});
