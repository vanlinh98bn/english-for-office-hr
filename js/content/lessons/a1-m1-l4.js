/* =========================================================
   A1 · Module 1 (English Foundations) · Bài 4
   "Days, months and work schedules"
   Khuôn rút gọn cho A1: 8 từ, 8 câu luyện tập, bài đọc và bài viết ngắn.
   Nối tiếp bài 3: thứ Năm 8/10, giờ nghỉ trưa ở nhà ăn nhân viên.
   Công ty Riverside Trading và các nhân vật đều là hư cấu.
   ========================================================= */
window.EOH.registerLesson({
  id: "a1-m1-l4",
  reviewStatus: "draft", // "draft" = bản nháp, chưa duyệt
  duration: "20–25 phút",
  scenario: "Trưa thứ Năm, chị Hoa ăn trưa ở nhà ăn nhân viên cùng anh Minh Vo, đồng nghiệp ở phòng Kế toán. Chị hỏi anh về lịch làm việc, ngày nghỉ và ngày trả lương.",

  objectives: [
    "Đọc đúng tên các thứ trong tuần và một số tên tháng dễ đọc sai (Wednesday, February).",
    "Nói lịch làm việc: We work from Monday to Friday.",
    "Dùng don't với I / you / we / they: We don't work on Saturday.",
    "Hỏi và trả lời: Do you work on Saturday? – No, I don't.",
    "Viết tin nhắn ngắn kể về lịch làm việc của mình."
  ],

  vocabulary: [
    { word: "schedule", ipa: "/ˈskedʒuːl/", pos: "noun", meaning: "lịch, thời gian biểu",
      example: "What's the work schedule?", exampleVi: "Lịch làm việc như thế nào?" },
    { word: "weekday", ipa: "/ˈwiːkdeɪ/", pos: "noun", meaning: "ngày trong tuần (từ thứ Hai đến thứ Sáu)",
      example: "On weekdays, we start at eight.", exampleVi: "Các ngày trong tuần, chúng tôi bắt đầu lúc 8 giờ." },
    { word: "weekend", ipa: "/ˈwiːkend/", pos: "noun", meaning: "cuối tuần (thứ Bảy và Chủ nhật)",
      example: "We don't work on weekends.", exampleVi: "Chúng tôi không làm việc vào cuối tuần." },
    { word: "holiday", ipa: "/ˈhɑːlədeɪ/", pos: "noun", meaning: "ngày nghỉ lễ; kỳ nghỉ",
      example: "The office is closed on public holidays.", exampleVi: "Văn phòng đóng cửa vào các ngày nghỉ lễ." },
    { word: "month", ipa: "/mʌnθ/", pos: "noun", meaning: "tháng",
      example: "We work late at the end of the month.", exampleVi: "Chúng tôi làm muộn vào cuối tháng." },
    { word: "closed", ipa: "/kloʊzd/", pos: "adjective", meaning: "đóng cửa, không làm việc",
      example: "The office is closed on Sunday.", exampleVi: "Văn phòng đóng cửa vào Chủ nhật." },
    { word: "every", ipa: "/ˈevri/", pos: "determiner", meaning: "mỗi, hằng (every day, every month)",
      example: "We have a meeting every Tuesday.", exampleVi: "Chúng tôi họp vào mỗi thứ Ba." },
    { word: "payday", ipa: "/ˈpeɪdeɪ/", pos: "noun", meaning: "ngày trả lương",
      example: "Payday is the 25th of every month.", exampleVi: "Ngày trả lương là ngày 25 hằng tháng." }
  ],

  pronunciation: {
    groups: [
      {
        title: "Tên thứ và tháng dễ đọc sai",
        text: "Một số tên thứ và tháng có chữ cái không được đọc ra. Người học hay đọc đủ mọi chữ nên nghe không tự nhiên.",
        items: [
          { word: "Wednesday", marked: "WENZ·day", note: "Chữ d đầu tiên không đọc." },
          { word: "February", marked: "FEB·yu·er·y", note: "Người Mỹ thường đọc FEB·yu·er·y; chữ r thứ nhất hay bị bỏ khi nói nhanh." },
          { word: "Tuesday", marked: "TUZ·day", note: "Âm đầu gần giống “tu-z”." },
          { word: "Saturday", marked: "SAT·ur·day", note: "Nhấn ở âm đầu." }
        ]
      },
      {
        title: "Âm /θ/ (th)",
        text: "Đặt đầu lưỡi nhẹ giữa hai hàm răng, thổi hơi ra. Không đọc thành “t” hoặc “s”.",
        items: [
          { word: "Thursday", marked: "THURZ·day", note: "/ˈθɜːrzdeɪ/" },
          { word: "month", marked: "MONTH", note: "/mʌnθ/ – âm /θ/ ở cuối từ." },
          { word: "three", marked: "THREE", note: "/θriː/" },
          { word: "thirty", marked: "THIR·ty", note: "/ˈθɜːrti/" }
        ]
      }
    ],
    sentences: [
      "We work from Monday to Friday.",
      "We don't work on Saturday.",
      "Payday is the 25th of every month."
    ]
  },

  listening: {
    title: "Lunch in the canteen",
    setting: "Thứ Năm, giờ nghỉ trưa, ở nhà ăn nhân viên. Chị Hoa hỏi anh Minh về lịch làm việc.",
    speakers: { minh: "Minh (accountant)", hoa: "Hoa (new accountant)" },
    lines: [
      { s: "minh", text: "Hi Hoa! How is your first week?",
        vi: "Chào Hoa! Tuần đầu tiên của em thế nào?" },
      { s: "hoa", text: "Good, thanks. Minh, what's the work schedule?",
        vi: "Dạ tốt ạ. Anh Minh, lịch làm việc như thế nào ạ?" },
      { s: "minh", text: "We work from Monday to Friday. On weekdays, we start at eight and finish at five.",
        vi: "Chúng ta làm việc từ thứ Hai đến thứ Sáu. Các ngày trong tuần, mình bắt đầu lúc 8 giờ và kết thúc lúc 5 giờ." },
      { s: "hoa", text: "Do you work on Saturday?",
        vi: "Anh có làm việc vào thứ Bảy không ạ?" },
      { s: "minh", text: "No, we don't. Saturday and Sunday are the weekend. The office is closed.",
        vi: "Không. Thứ Bảy và Chủ nhật là cuối tuần. Văn phòng đóng cửa." },
      { s: "hoa", text: "And holidays?",
        vi: "Còn các ngày lễ thì sao ạ?" },
      { s: "minh", text: "The office is closed on public holidays too. But at the end of every month, we work until six.",
        vi: "Ngày lễ văn phòng cũng đóng cửa. Nhưng cuối mỗi tháng, mình làm đến 6 giờ." },
      { s: "hoa", text: "I see. When is payday?",
        vi: "Em hiểu rồi. Ngày trả lương là khi nào ạ?" },
      { s: "minh", text: "Every month, on the twenty-fifth.",
        vi: "Mỗi tháng, vào ngày 25." },
      { s: "hoa", text: "Thanks, Minh!",
        vi: "Em cảm ơn anh Minh!" }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "Which days does the office open?",
        options: ["Monday to Saturday", "Monday to Friday", "Tuesday to Saturday", "Every day"],
        answer: 1, explanation: "Minh nói: “We work from Monday to Friday.” – từ thứ Hai đến thứ Sáu. Thứ Bảy và Chủ nhật là cuối tuần, văn phòng đóng cửa." },
      { id: "l2", type: "choice", prompt: "When is payday?",
        options: ["On the 5th of every month", "On the 15th of every month", "On the 25th of every month", "At the end of the week"],
        answer: 2, explanation: "“Every month, on the twenty-fifth.” – ngày 25 hằng tháng. Hãy nghe kỹ twenty-fifth (25) và fifteenth (15) – đây là hai số dễ nhầm." },
      { id: "l3", type: "choice", prompt: "How late does the team work at the end of the month?",
        options: ["Until six", "Until five", "Until seven", "Until eight"],
        answer: 0, explanation: "“At the end of every month, we work until six.” – cuối tháng làm đến 6 giờ. Ngày thường chỉ làm đến 5 giờ." }
    ]
  },

  reading: {
    title: "The company schedule",
    intro: "Chị Lan (phòng Nhân sự) gửi cho chị Hoa lịch làm việc chung của công ty. Đọc và tìm giờ làm việc, ngày nghỉ, ngày trả lương.",
    email: {
      from: "Lan Pham <lan.pham@riverside-trading.example>",
      to: "Hoa Tran",
      date: "Thursday, 8 October",
      subject: "Company schedule",
      greeting: "Hi Hoa,",
      paragraphs: [
        "Here is our company schedule."
      ],
      list: [
        "Work days: Monday to Friday",
        "Work hours: 8:00 a.m. to 5:00 p.m.",
        "Payday: the 25th of every month"
      ],
      after: [
        "The office is closed on weekends and public holidays.",
        "If the 25th is on a weekend, we pay on the Friday before."
      ],
      closing: "Best regards,",
      signature: ["Lan Pham", "HR Department"]
    },
    glossary: [
      { term: "public holiday", vi: "ngày nghỉ lễ của cả nước" },
      { term: "work hours", vi: "giờ làm việc" },
      { term: "pay", vi: "trả lương" },
      { term: "before", vi: "trước" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "What time does work finish?",
        options: ["4:00 p.m.", "5:00 p.m.", "6:00 p.m.", "8:00 a.m."],
        answer: 1, explanation: "“Work hours: 8:00 a.m. to 5:00 p.m.” – kết thúc lúc 5 giờ chiều. 8:00 a.m. là giờ bắt đầu." },
      { id: "r2", type: "choice", prompt: "When is the office closed?",
        options: ["On Friday", "On Monday", "At lunch", "On weekends and public holidays"],
        answer: 3, explanation: "“The office is closed on weekends and public holidays.” – đóng cửa vào cuối tuần và ngày lễ." },
      { id: "r3", type: "choice", prompt: "This month, the 25th is a Sunday. When is payday?",
        options: ["On Monday", "On the Friday before", "On Saturday", "On the 26th"],
        answer: 1, explanation: "“If the 25th is on a weekend, we pay on the Friday before.” – ngày 25 rơi vào cuối tuần thì trả lương vào thứ Sáu trước đó." }
    ]
  },

  grammar: {
    title: "Present simple with I, you, we, they",
    titleVi: "Hiện tại đơn với I / you / we / they: nói về lịch và thói quen",
    intro: "Dùng thì hiện tại đơn để nói về việc lặp lại hằng ngày, hằng tuần, như lịch làm việc. Với I, you, we, they, động từ giữ nguyên, không thêm -s.",
    patterns: [
      { form: "I / you / we / they + động từ", use: "Câu khẳng định: nói lịch, thói quen. Không thêm -s.",
        examples: ["We work from Monday to Friday.", "I start at eight."] },
      { form: "I / you / we / they + don't + động từ", use: "Câu phủ định: don't là do not nói gọn. Động từ phía sau giữ nguyên.",
        examples: ["We don't work on Saturday.", "I don't start at nine."] },
      { form: "Do + I / you / we / they + động từ…?", use: "Câu hỏi Yes / No. Trả lời ngắn: Yes, I do. / No, I don't.",
        examples: ["Do you work on Saturday?", "Yes, I do. / No, I don't."] },
      { form: "from … to … / every + thời gian", use: "Nói khoảng thời gian và việc lặp lại.",
        examples: ["We work from Monday to Friday.", "We have a meeting every Tuesday."] }
    ],
    mistakes: [
      { wrong: "We works from Monday to Friday.", right: "We work from Monday to Friday.", note: "Với we / I / you / they, động từ không thêm -s." },
      { wrong: "We no work on Sunday.", right: "We don't work on Sunday.", note: "Phủ định dùng don't, không dùng “no” trước động từ." },
      { wrong: "Do you works on Saturday?", right: "Do you work on Saturday?", note: "Sau Do, động từ ở dạng nguyên mẫu." },
      { wrong: "Do you work on Saturday? – Yes, I work.", right: "Do you work on Saturday? – Yes, I do.", note: "Trả lời ngắn dùng lại do / don't, không nhắc lại động từ." }
    ],
    tip: "Các thứ: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday. Các tháng: January, February, March, April, May, June, July, August, September, October, November, December. Trong tiếng Anh, tên thứ và tên tháng luôn viết hoa chữ cái đầu."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "We ___ from Monday to Friday.",
      options: ["works", "work", "working", "worked"],
      answer: 1, explanation: "Với we, động từ hiện tại đơn giữ nguyên: We work. Không thêm -s (works), không đổi sang -ing hay quá khứ." },
    { id: "p2", type: "gap", prompt: "We ___ work on Sunday.",
      options: ["doesn't", "isn't", "not", "don't"],
      answer: 3, explanation: "Phủ định với we: don't + động từ nguyên mẫu. Doesn't dùng với he / she / it (học ở bài sau)." },
    { id: "p3", type: "gap", prompt: "___ you work on Saturday? – No, I don't.",
      options: ["Do", "Does", "Are", "Is"],
      answer: 0, explanation: "Câu hỏi với you: Do you + động từ? Đáp lại: No, I don't. “Are you work” sai vì are không đi với động từ chính ở dạng nguyên mẫu." },
    { id: "p4", type: "choice", prompt: "What is the weekend?",
      options: ["Monday and Tuesday", "Friday and Saturday", "Saturday and Sunday", "Sunday and Monday"],
      answer: 2, explanation: "Weekend (cuối tuần) là thứ Bảy và Chủ nhật: Saturday and Sunday." },
    { id: "p5", type: "gap", prompt: "I work from Monday ___ Friday.",
      options: ["at", "to", "in", "on"],
      answer: 1, explanation: "Khoảng thời gian dùng from … to …: from Monday to Friday." },
    { id: "p6", type: "choice", prompt: "Which day comes after Wednesday?",
      options: ["Tuesday", "Friday", "Monday", "Thursday"],
      answer: 3, explanation: "Thứ tự: Monday, Tuesday, Wednesday, Thursday, Friday. Sau Wednesday là Thursday." },
    { id: "p7", type: "choice", context: "A colleague asks: “Do you work on Saturday?” You don't work on Saturday.", prompt: "What do you say?",
      options: ["No, I don't.", "No, I'm not.", "No, I doesn't.", "Yes, I do."],
      answer: 0, explanation: "Trả lời ngắn cho câu hỏi với Do you: No, I don't. “No, I'm not” dùng cho câu hỏi với Are you. Với I, không dùng doesn't." },
    { id: "p8", type: "choice", prompt: "Which word has the sound /θ/ (as in “Thursday”)?",
      options: ["Tuesday", "Wednesday", "month", "Monday"],
      answer: 2, explanation: "Month /mʌnθ/ kết thúc bằng âm /θ/. Tuesday, Wednesday và Monday không có âm này." }
  ],

  writing: {
    title: "My work schedule",
    task: "Bạn là Hoa. Viết tin nhắn ngắn cho một người bạn nước ngoài tên Anna để kể về lịch làm việc của bạn (25–50 từ).",
    requirements: [
      "Chào Anna.",
      "Nói bạn làm việc từ thứ mấy đến thứ mấy.",
      "Nói giờ bạn bắt đầu và kết thúc.",
      "Nói bạn không làm việc vào ngày nào (dùng don't).",
      "Nói ngày trả lương và kết thúc tin nhắn."
    ],
    minWords: 25,
    maxWords: 50,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Hi / Hello / Dear)", pattern: "\\b(hi|hello|dear)\\b" },
      { label: "Có “Monday to Friday” (hoặc các thứ khác)", pattern: "monday\\s+to\\s+friday|\\bfrom\\s+\\w+day\\s+to\\s+\\w+day" },
      { label: "Có giờ bắt đầu hoặc kết thúc (8 / eight / 5 / five)", pattern: "\\b(8|eight|5|five)\\b" },
      { label: "Có ngày nghỉ (Saturday / Sunday / weekend)", pattern: "saturday|sunday|weekend" },
      { label: "Có ngày trả lương (payday / 25th)", pattern: "payday|25th|twenty-fifth" },
      { label: "Có lời kết (Best wishes / Bye / See you)", pattern: "regards|wishes|\\bbye\\b|see you" }
    ],
    model: [
      "Hi Anna,",
      "I work in an accounting office. I work from Monday to Friday. I start at eight and finish at five. I don't work on Saturday or Sunday. Payday is the 25th of every month.",
      "Best wishes,",
      "Hoa"
    ]
  },

  review: {
    keyPhrases: [
      { en: "We work from Monday to Friday.", vi: "Chúng tôi làm việc từ thứ Hai đến thứ Sáu." },
      { en: "On weekdays, we start at eight and finish at five.", vi: "Các ngày trong tuần, chúng tôi bắt đầu lúc 8 giờ và kết thúc lúc 5 giờ." },
      { en: "Do you work on Saturday? – No, I don't.", vi: "Bạn có làm việc vào thứ Bảy không? – Không." },
      { en: "The office is closed on weekends and public holidays.", vi: "Văn phòng đóng cửa vào cuối tuần và các ngày nghỉ lễ." },
      { en: "At the end of every month, we work until six.", vi: "Cuối mỗi tháng, chúng tôi làm đến 6 giờ." },
      { en: "Payday is the 25th of every month.", vi: "Ngày trả lương là ngày 25 hằng tháng." }
    ]
  }
});
