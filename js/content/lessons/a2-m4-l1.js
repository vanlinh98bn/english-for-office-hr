/* =========================================================
   A2 · Module 4 (HR Operations) · Bài 1
   "Attendance and timekeeping" — Chấm công và giờ giấc
   Ngữ pháp: too many / too much / (not) enough
   Câu chuyện: thứ Hai 23/11/2026, hai ngày trước ngày trả lương (thứ Tư 25/11).
   Công ty Riverside Trading và các nhân vật đều là hư cấu.
   ========================================================= */
window.EOH.registerLesson({
  id: "a2-m4-l1",
  reviewStatus: "draft", // "draft" = bản nháp, chưa duyệt
  duration: "35–45 phút",
  scenario: "Thứ Hai 23/11, hai ngày trước ngày trả lương. Chị Lan dặn Tuấn kiểm tra bảng chấm công tháng Mười Một: có quá nhiều lần quên bấm giờ ra, và chưa đủ phiếu làm thêm giờ có chữ ký. Tuấn gửi email nhắc cả công ty.",

  objectives: [
    "Hiểu và dùng 10 từ vựng về chấm công và giờ làm việc (timesheet, clock in, overtime…).",
    "Nghe hiểu cuộc nói chuyện về việc kiểm tra bảng chấm công trước ngày trả lương.",
    "Đọc email nhắc nhở và tìm đúng thông tin: hạn chót, vấn đề, cách sửa.",
    "Dùng too many, too much và (not) enough để nói về số lượng quá nhiều hoặc chưa đủ.",
    "Viết email ngắn nhờ đồng nghiệp gửi phiếu điều chỉnh chấm công."
  ],

  vocabulary: [
    { word: "timesheet", ipa: "/ˈtaɪmˌʃiːt/", pos: "noun", meaning: "bảng chấm công",
      example: "Please check your timesheet before Tuesday.", exampleVi: "Vui lòng kiểm tra bảng chấm công trước thứ Ba." },
    { word: "clock in", ipa: "/ˈklɑːk ɪn/", pos: "verb", meaning: "bấm giờ vào làm",
      example: "I clock in at the scanner every morning.", exampleVi: "Sáng nào tôi cũng bấm giờ vào làm ở máy quét." },
    { word: "clock out", ipa: "/ˈklɑːk aʊt/", pos: "verb", meaning: "bấm giờ ra về",
      example: "Don't forget to clock out when you leave.", exampleVi: "Đừng quên bấm giờ ra khi bạn ra về." },
    { word: "fingerprint scanner", ipa: "/ˈfɪŋɡərˌprɪnt ˈskænər/", pos: "noun", meaning: "máy quét vân tay",
      example: "The fingerprint scanner is next to the door.", exampleVi: "Máy quét vân tay ở cạnh cửa ra vào." },
    { word: "attendance record", ipa: "/əˈtendəns ˈrekərd/", pos: "noun", meaning: "bảng ghi nhận ngày đi làm",
      example: "The attendance record shows every day you came to work.", exampleVi: "Bảng ghi nhận cho thấy mọi ngày bạn đã đi làm." },
    { word: "absence", ipa: "/ˈæbsəns/", pos: "noun", meaning: "sự vắng mặt",
      example: "Please tell HR about your absence on the same day.", exampleVi: "Vui lòng báo cho phòng Nhân sự về việc vắng mặt của bạn ngay trong ngày." },
    { word: "late arrival", ipa: "/ˈleɪt əˈraɪvəl/", pos: "noun", meaning: "lần đi làm muộn",
      example: "After the grace period, it is a late arrival.", exampleVi: "Sau thời gian châm chước, đó là một lần đi làm muộn." },
    { word: "overtime", ipa: "/ˈoʊvərˌtaɪm/", pos: "noun", meaning: "giờ làm thêm",
      example: "We only pay overtime with a signed form.", exampleVi: "Chúng tôi chỉ trả tiền làm thêm giờ khi có phiếu đã ký." },
    { word: "grace period", ipa: "/ˈɡreɪs ˌpɪriəd/", pos: "noun", meaning: "thời gian châm chước (được đến muộn mà không bị tính)",
      example: "The grace period is ten minutes.", exampleVi: "Thời gian châm chước là mười phút." },
    { word: "correction", ipa: "/kəˈrekʃən/", pos: "noun", meaning: "sự điều chỉnh, sửa lại",
      example: "Please send a correction form to HR.", exampleVi: "Vui lòng gửi phiếu điều chỉnh cho phòng Nhân sự." }
  ],

  pronunciation: {
    groups: [
      {
        title: "Trọng âm của từ",
        text: "Từ tận cùng bằng -tion hoặc -ance thường có trọng âm ở âm tiết ngay trước đuôi đó. Âm tiết in hoa là âm đọc to và dài hơn.",
        items: [
          { word: "attendance", marked: "at·TEN·dance" },
          { word: "correction", marked: "cor·REC·tion", note: "Quy tắc -tion: trọng âm ngay trước -tion." },
          { word: "absence", marked: "AB·sence", note: "Chỉ có 2 âm tiết, trọng âm ở âm đầu." },
          { word: "overtime", marked: "O·ver·time", note: "Từ ghép: trọng âm ở phần đầu." },
          { word: "timesheet", marked: "TIME·sheet" }
        ]
      },
      {
        title: "Âm /ʃ/ và /tʃ/",
        text: "Âm /ʃ/ (shift) là hơi gió, không có tiếng bật. Âm /tʃ/ (check) có tiếng bật ngắn ở đầu. Đừng đọc hai âm này giống nhau.",
        items: [
          { word: "shift", marked: "/ʃ/ift" },
          { word: "sheet", marked: "/ʃ/eet" },
          { word: "check", marked: "/tʃ/eck" },
          { word: "much", marked: "mu/tʃ/", note: "Kết thúc bằng âm /tʃ/." }
        ]
      }
    ],
    sentences: [
      "There are too many missing clock-outs.",
      "We don't have enough overtime forms.",
      "Please check your timesheet before Tuesday."
    ]
  },

  listening: {
    title: "Checking attendance before payday",
    setting: "Sáng thứ Hai, tại phòng Nhân sự. Chị Lan và Tuấn kiểm tra bảng chấm công tháng Mười Một.",
    speakers: { lan: "Lan (HR Officer)", tuan: "Tuan (HR Assistant)" },
    lines: [
      { s: "lan", text: "Good morning, Tuan. Today we check the attendance records for November. Payday is on Wednesday, so we must finish by Tuesday afternoon.",
        vi: "Chào buổi sáng Tuấn. Hôm nay mình kiểm tra bảng ghi nhận đi làm tháng Mười Một. Thứ Tư là ngày trả lương, nên mình phải xong trước chiều thứ Ba." },
      { s: "tuan", text: "OK. What do I check first?",
        vi: "Vâng. Em kiểm tra gì trước ạ?" },
      { s: "lan", text: "Open the report from the fingerprint scanner. Look for missing clock-outs. There are too many this month.",
        vi: "Em mở báo cáo từ máy quét vân tay. Tìm những lần thiếu giờ ra. Tháng này có quá nhiều." },
      { s: "tuan", text: "How many are there?",
        vi: "Có bao nhiêu lần ạ?" },
      { s: "lan", text: "Twelve. Some people forget to clock out when they leave. Please send each person a short message.",
        vi: "Mười hai lần. Có người quên bấm giờ ra khi về. Em nhắn cho từng người một tin ngắn nhé." },
      { s: "tuan", text: "What about late arrivals? Is there a grace period?",
        vi: "Còn đi làm muộn thì sao ạ? Có thời gian châm chước không ạ?" },
      { s: "lan", text: "Yes, ten minutes. After that, it is a late arrival. But on Monday mornings there is too much traffic near the port, so the Logistics team is often late.",
        vi: "Có, mười phút. Sau đó thì tính là đi làm muộn. Nhưng sáng thứ Hai đường gần cảng có quá nhiều xe, nên nhóm Logistics hay đến muộn." },
      { s: "tuan", text: "And overtime? Do I add it to the timesheet?",
        vi: "Còn làm thêm giờ thì sao ạ? Em có cộng vào bảng chấm công không ạ?" },
      { s: "lan", text: "Only if there is a signed form. Accounting has a lot of overtime this week, but we don't have enough signed forms. Please ask Ms. Ngoc Dang to sign them.",
        vi: "Chỉ khi có phiếu đã ký. Tuần này phòng Kế toán làm thêm nhiều, nhưng mình chưa có đủ phiếu đã ký. Em nhờ chị Ngọc Đặng ký nhé." },
      { s: "tuan", text: "I'll send the messages today and ask Ms. Ngoc for the forms.",
        vi: "Em sẽ nhắn tin hôm nay và xin chị Ngọc các phiếu ạ." },
      { s: "lan", text: "Thank you. Call me on extension two-one-four if you have a problem.",
        vi: "Cảm ơn em. Có vấn đề gì thì gọi chị theo máy lẻ hai-một-bốn nhé." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "How many missing clock-outs are there?",
        options: ["Two", "Ten", "Twelve", "Twenty"],
        answer: 2, explanation: "Chị Lan nói: “Twelve.” (mười hai). “Ten” là thời gian châm chước (mười phút), không phải số lần thiếu giờ ra." },
      { id: "l2", type: "choice", prompt: "How long is the grace period?",
        options: ["Five minutes", "Ten minutes", "Fifteen minutes", "Thirty minutes"],
        answer: 1, explanation: "“Yes, ten minutes. After that, it is a late arrival.” Sau mười phút mới tính là đi làm muộn." },
      { id: "l3", type: "choice", prompt: "What does Tuan need from Ms. Ngoc Dang?",
        options: ["A medical note", "A new timesheet", "The fingerprint report", "Signed overtime forms"],
        answer: 3, explanation: "“We don't have enough signed forms. Please ask Ms. Ngoc Dang to sign them.” Báo cáo vân tay là việc chị Lan bảo Tuấn tự mở, không phải xin chị Ngọc." }
    ]
  },

  reading: {
    title: "A reminder about timesheets",
    intro: "Email Tuấn gửi cho cả công ty vào thứ Hai 23/11. Đọc và tìm vấn đề cùng hạn chót.",
    email: {
      from: "Tuan Nguyen <tuan.nguyen@riverside-trading.example>",
      to: "All staff",
      date: "Monday, 23 November",
      subject: "Please check your timesheet by Tuesday",
      greeting: "Dear all,",
      paragraphs: [
        "Payday is this Wednesday, 25 November. Payroll closes on Tuesday at 5:00 p.m., so we need your timesheets before then.",
        "This week we found two problems:"
      ],
      list: [
        "There are too many missing clock-outs. Twelve people forgot to clock out last week.",
        "There are not enough signed forms for overtime. Without a signed form, we cannot pay overtime."
      ],
      after: [
        "Please check your timesheet on the intranet. If something is wrong, send me a correction form. Remember that the grace period for late arrivals is ten minutes.",
        "If you have any questions, please reply to this email."
      ],
      closing: "Best regards,",
      signature: ["Tuan Nguyen", "HR Assistant, Riverside Trading"]
    },
    glossary: [
      { term: "payroll", vi: "việc tính và trả lương" },
      { term: "close", vi: "đóng, chốt (không nhận thêm)" },
      { term: "signed form", vi: "phiếu đã có chữ ký" },
      { term: "forget to + động từ", vi: "quên làm việc gì" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "When does payroll close?",
        options: ["Tuesday at 5:00 p.m.", "Monday at 5:00 p.m.", "Wednesday at 5:00 p.m.", "Friday at 5:00 p.m."],
        answer: 0, explanation: "“Payroll closes on Tuesday at 5:00 p.m.” Thứ Tư (25/11) là ngày trả lương, không phải ngày chốt." },
      { id: "r2", type: "choice", prompt: "What is the first problem in the email?",
        options: ["Too many late arrivals", "Too much overtime", "Too many missing clock-outs", "Not enough staff"],
        answer: 2, explanation: "“There are too many missing clock-outs. Twelve people forgot to clock out last week.”" },
      { id: "r3", type: "choice", prompt: "Why can't the company pay overtime to some people?",
        options: ["The grace period is too short.", "They don't have a signed form.", "They clocked in too early.", "Payday is on Wednesday."],
        answer: 1, explanation: "“Without a signed form, we cannot pay overtime.” Không có phiếu đã ký thì không trả tiền làm thêm giờ." }
    ]
  },

  grammar: {
    title: "Too many, too much, (not) enough",
    titleVi: "Quá nhiều, quá nhiều (không đếm được), (không) đủ",
    intro: "Khi kiểm tra chấm công, nhân sự thường phải nói về số lượng: có quá nhiều lỗi, quá nhiều giờ làm thêm, hay chưa đủ phiếu. Bốn mẫu câu dưới đây xuất hiện trong hội thoại và email vừa học.",
    patterns: [
      { form: "too many + danh từ đếm được số nhiều", use: "Nhiều hơn mức cần thiết hoặc mức mong muốn, thường mang ý phàn nàn.",
        examples: ["There are too many mistakes in this timesheet.", "We have too many late arrivals on Monday."] },
      { form: "too much + danh từ không đếm được", use: "Nhiều quá mức, với danh từ không đếm được (traffic, overtime, time).",
        examples: ["There is too much traffic near the port.", "He has too much overtime this month."] },
      { form: "(not) enough + danh từ", use: "Đủ hoặc chưa đủ số lượng. enough đứng TRƯỚC danh từ.",
        examples: ["We don't have enough signed forms.", "Do you have enough time to check the report?"] },
      { form: "tính từ + enough", use: "Đủ (tốt, nhanh, rõ…). enough đứng SAU tính từ.",
        examples: ["The old scanner isn't fast enough.", "Is the report clear enough?"] }
    ],
    mistakes: [
      { wrong: "There are too much late arrivals.", right: "There are too many late arrivals.", note: "arrivals đếm được, số nhiều: dùng too many." },
      { wrong: "We have too many overtime.", right: "We have too much overtime.", note: "overtime không đếm được: dùng too much." },
      { wrong: "We don't have enough of time.", right: "We don't have enough time.", note: "Không thêm “of” giữa enough và danh từ." },
      { wrong: "The report is enough clear.", right: "The report is clear enough.", note: "Sau tính từ: tính từ + enough." }
    ],
    tip: "“Too” luôn mang ý quá mức, không tốt. Muốn nói nhiều theo nghĩa tích cực, dùng “a lot of”: We have a lot of good ideas."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "Please ___ at the fingerprint scanner when you arrive at work.",
      options: ["clock in", "clock out", "fill in", "log off"],
      answer: 0, explanation: "Khi đến nơi làm việc thì bấm giờ vào: clock in. Clock out là bấm giờ ra khi về." },
    { id: "p2", type: "choice", prompt: "Which word means “not being at work”?",
      options: ["overtime", "correction", "grace period", "absence"],
      answer: 3, explanation: "Absence = sự vắng mặt. Overtime là giờ làm thêm, correction là sự sửa lại, grace period là thời gian châm chước." },
    { id: "p3", type: "gap", prompt: "The timesheet has a mistake. Please fill in a ___ form.",
      options: ["late", "correction", "scanner", "grace"],
      answer: 1, explanation: "Correction form = phiếu điều chỉnh, dùng để sửa lỗi trong bảng chấm công." },
    { id: "p4", type: "gap", prompt: "There are ___ missing clock-outs this month.",
      options: ["too much", "so much", "too many", "very much"],
      answer: 2, explanation: "clock-outs đếm được, số nhiều: too many. much đi với danh từ không đếm được." },
    { id: "p5", type: "gap", prompt: "We have ___ overtime this month, so the cost is high.",
      options: ["too much", "too many", "too a lot", "too few"],
      answer: 0, explanation: "overtime không đếm được: too much overtime. Too many và too few chỉ đi với danh từ đếm được." },
    { id: "p6", type: "gap", prompt: "There aren't ___ forms for everyone. We need ten more.",
      options: ["too", "enough of", "many enough", "enough"],
      answer: 3, explanation: "enough đứng trước danh từ: enough forms. Không dùng “enough of forms” hay “many enough”." },
    { id: "p7", type: "gap", prompt: "The old scanner is not ___ to read every fingerprint.",
      options: ["enough fast", "fast enough", "enough quick", "quickly enough"],
      answer: 1, explanation: "Sau tính từ, enough đứng sau: fast enough. “Quickly” là trạng từ nên không đi với “is not”." },
    { id: "p8", type: "choice", prompt: "Which sentence is correct?",
      options: ["There is too many traffic on Monday.", "We don't have enough of time.", "There is too much traffic on Monday.", "The report is enough clear."],
      answer: 2, explanation: "traffic không đếm được: too much traffic. Câu A sai vì “many”, câu B thừa “of”, câu D sai vị trí enough." },
    { id: "p9", type: "choice", context: "You have only two overtime forms, but you need ten.", prompt: "What can you say?",
      options: ["We don't have enough forms.", "We have too many forms.", "We have too much forms.", "We have enough forms."],
      answer: 0, explanation: "Có hai phiếu mà cần mười: chưa đủ, nên nói “We don't have enough forms.” Các câu còn lại nói ngược nghĩa hoặc sai ngữ pháp." },
    { id: "p10", type: "choice", prompt: "Which word has the stress on the SECOND syllable?",
      options: ["overtime", "absence", "timesheet", "attendance"],
      answer: 3, explanation: "at·TEN·dance có trọng âm ở âm tiết thứ hai. O·ver·time, AB·sence và TIME·sheet đều có trọng âm ở âm đầu." }
  ],

  writing: {
    title: "Ask a colleague for a correction form",
    task: "Bạn là Tuấn. Hoa (phòng Kế toán) quên bấm giờ ra vào thứ Sáu 20/11. Hãy viết email ngắn nhờ chị gửi phiếu điều chỉnh (50–90 từ).",
    requirements: [
      "Mở đầu bằng lời chào (Dear Hoa,).",
      "Nói rõ chị quên bấm giờ ra (clock out) vào thứ Sáu 20/11.",
      "Nhờ chị gửi phiếu điều chỉnh (correction form) bằng một câu lịch sự.",
      "Nêu hạn: thứ Ba 24/11, vì bảng lương chốt lúc 5:00 chiều.",
      "Nói chị có thể báo cho bạn nếu máy quét có vấn đề.",
      "Kết thúc email và ký tên."
    ],
    minWords: 50,
    maxWords: 90,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Dear / Hi …)", pattern: "\\bdear\\b|\\bhi\\b|\\bhello\\b" },
      { label: "Nhắc tới việc bấm giờ (clock)", pattern: "\\bclock" },
      { label: "Nhắc tới hạn thứ Ba / 24 tháng 11", pattern: "tuesday|24 november" },
      { label: "Nhắc tới phiếu hoặc bảng chấm công", pattern: "correction|timesheet|\\bform\\b" },
      { label: "Có lời nhờ lịch sự (Could you / Please)", pattern: "could you|can you|\\bplease\\b" },
      { label: "Có lời kết (Best regards …)", pattern: "regards|sincerely|best wishes" }
    ],
    model: [
      "Dear Hoa,",
      "Thank you for your hard work this month. Our records show that you did not clock out on Friday, 20 November.",
      "Could you please send me a correction form by Tuesday, 24 November? Payroll closes on Tuesday at 5:00 p.m., so we need the form before then. If you have a problem with the scanner, please tell me.",
      "Best regards,",
      "Tuan Nguyen"
    ]
  },

  review: {
    keyPhrases: [
      { en: "Please check your timesheet before Tuesday.", vi: "Vui lòng kiểm tra bảng chấm công trước thứ Ba." },
      { en: "There are too many missing clock-outs.", vi: "Có quá nhiều lần thiếu giờ ra." },
      { en: "We don't have enough signed forms.", vi: "Chúng ta chưa có đủ phiếu đã ký." },
      { en: "The grace period is ten minutes.", vi: "Thời gian châm chước là mười phút." },
      { en: "Please send me a correction form.", vi: "Vui lòng gửi cho tôi phiếu điều chỉnh." },
      { en: "Don't forget to clock out when you leave.", vi: "Đừng quên bấm giờ ra khi bạn ra về." }
    ]
  }
});
