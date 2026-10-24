/* =========================================================
   A2 · Module 3 (Recruitment and Onboarding) · Bài 3
   "Arranging an interview"
   Nối tiếp câu chuyện: thứ Hai 19/10/2026, chị Lan gọi Tuấn và gửi
   email xác nhận phỏng vấn vào thứ Năm 22/10, lúc 14:00.
   Công ty Riverside Trading và các nhân vật đều là hư cấu.
   ========================================================= */
window.EOH.registerLesson({
  id: "a2-m3-l3",
  reviewStatus: "draft", // "draft" = bản nháp, chưa duyệt
  duration: "35–45 phút",
  scenario: "Thứ Hai 19/10, chị Lan (Lan Pham) gọi điện cho Tuấn (Tuan Nguyen) để hẹn phỏng vấn vị trí trợ lý nhân sự vào thứ Năm 22/10. Sau cuộc gọi, chị gửi email xác nhận giờ, địa điểm và những việc Tuấn cần chuẩn bị.",

  objectives: [
    "Hiểu và dùng 10 từ vựng thường gặp khi sắp xếp phỏng vấn (candidate, available, reschedule…).",
    "Nghe hiểu cuộc gọi hẹn lịch phỏng vấn: ngày, giờ, địa điểm.",
    "Đọc email xác nhận phỏng vấn và tìm đúng thông tin cần chuẩn bị.",
    "Nói về kế hoạch với be going to, và hỏi lịch lịch sự với Are you available…? / Would … suit you?",
    "Viết email ngắn hẹn lịch phỏng vấn với ứng viên."
  ],

  vocabulary: [
    { word: "candidate", ipa: "/ˈkændɪdeɪt/", pos: "noun", meaning: "ứng viên",
      example: "We have three candidates for the job.", exampleVi: "Chúng tôi có ba ứng viên cho vị trí này." },
    { word: "interviewer", ipa: "/ˈɪntərvjuːər/", pos: "noun", meaning: "người phỏng vấn",
      example: "The interviewers are Mr. Hai and Ms. Lan.", exampleVi: "Người phỏng vấn là anh Hải và chị Lan." },
    { word: "available", ipa: "/əˈveɪləbəl/", pos: "adjective", meaning: "rảnh, có thể gặp được",
      example: "Are you available on Thursday?", exampleVi: "Thứ Năm bạn có rảnh không?" },
    { word: "convenient", ipa: "/kənˈviːniənt/", pos: "adjective", meaning: "thuận tiện",
      example: "Is that time convenient for you?", exampleVi: "Giờ đó có thuận tiện cho bạn không?" },
    { word: "suit", ipa: "/suːt/", pos: "verb", meaning: "phù hợp với (ai), tiện cho (ai)",
      example: "Would ten o'clock suit you?", exampleVi: "Mười giờ có tiện cho bạn không?" },
    { word: "reschedule", ipa: "/riːˈskedʒuːl/", pos: "verb", meaning: "dời lịch sang thời gian khác",
      example: "Can we reschedule the interview?", exampleVi: "Chúng ta dời lịch phỏng vấn được không?" },
    { word: "confirm", ipa: "/kənˈfɜːrm/", pos: "verb", meaning: "xác nhận",
      example: "Please reply to confirm.", exampleVi: "Vui lòng trả lời để xác nhận." },
    { word: "arrange", ipa: "/əˈreɪndʒ/", pos: "verb", meaning: "sắp xếp (lịch hẹn)",
      example: "I am going to arrange the interviews.", exampleVi: "Tôi sẽ sắp xếp các buổi phỏng vấn." },
    { word: "in person", ipa: "/ɪn ˈpɜːrsən/", pos: "phrase", meaning: "trực tiếp, gặp mặt",
      example: "The interview is in person, not online.", exampleVi: "Buổi phỏng vấn gặp trực tiếp, không phải trực tuyến." },
    { word: "directions", ipa: "/dəˈrekʃənz/", pos: "noun", meaning: "chỉ dẫn đường đi",
      example: "I will send you directions to the office.", exampleVi: "Tôi sẽ gửi bạn chỉ dẫn đường đến văn phòng." }
  ],

  pronunciation: {
    groups: [
      {
        title: "Trọng âm của từ",
        text: "Âm tiết in hoa là âm đọc to và dài hơn. Hãy đọc to từng từ và vỗ tay vào âm tiết nhấn.",
        items: [
          { word: "candidate", marked: "CAN·di·date" },
          { word: "available", marked: "a·VAIL·a·ble" },
          { word: "convenient", marked: "con·VEN·ient" },
          { word: "reschedule", marked: "re·SCHED·ule", note: "Đọc là /riːˈskedʒuːl/." },
          { word: "confirm", marked: "con·FIRM" }
        ]
      },
      {
        title: "Ngữ điệu câu hỏi lịch sự",
        text: "Câu hỏi Yes/No (trả lời Yes hoặc No) thường lên giọng ở cuối câu. Giọng nhẹ và lên cao nghe lịch sự hơn.",
        items: [
          { word: "Are you available?", marked: "Are you a·VAIL·a·ble? ↗", note: "Lên giọng ở cuối." },
          { word: "Would Thursday suit you?", marked: "Would THURS·day SUIT you? ↗" },
          { word: "Is that convenient?", marked: "Is that con·VEN·ient? ↗" }
        ]
      }
    ],
    sentences: [
      "Are you available on Thursday?",
      "Would two o'clock suit you?",
      "We are going to hold interviews this week."
    ]
  },

  listening: {
    title: "Arranging the interview by phone",
    setting: "Thứ Hai 19/10. Chị Lan gọi điện cho Tuấn để hẹn lịch phỏng vấn.",
    speakers: { lan: "Lan (HR Officer)", tuan: "Tuan (candidate)" },
    lines: [
      { s: "lan", text: "Hello, may I speak to Tuan Nguyen, please?",
        vi: "Xin chào, cho tôi nói chuyện với bạn Tuấn Nguyễn ạ." },
      { s: "tuan", text: "Speaking.",
        vi: "Tôi nghe đây ạ." },
      { s: "lan", text: "Hello Tuan, this is Lan Pham from Riverside Trading. We have shortlisted you for the HR Assistant job. We are going to hold interviews this week.",
        vi: "Chào Tuấn, chị là Lan Pham ở Riverside Trading. Bên chị đã chọn em vào danh sách phỏng vấn cho vị trí trợ lý nhân sự. Tuần này bên chị sẽ tổ chức phỏng vấn." },
      { s: "tuan", text: "That's great news. Thank you, Ms. Lan.",
        vi: "Đó là tin rất vui ạ. Em cảm ơn chị Lan." },
      { s: "lan", text: "Are you available on Thursday, October twenty-second?",
        vi: "Em có rảnh vào thứ Năm, ngày hai mươi hai tháng Mười không?" },
      { s: "tuan", text: "Yes, I'm available, but I'm going to be at work until noon. Would two o'clock suit you?",
        vi: "Dạ có, nhưng sáng hôm đó em đi làm đến trưa. Hai giờ chiều có tiện cho chị không ạ?" },
      { s: "lan", text: "Two o'clock is fine. Mr. Hai and I are going to interview you. It will take about forty-five minutes.",
        vi: "Hai giờ chiều được. Anh Hải và chị sẽ phỏng vấn em. Buổi này mất khoảng bốn mươi lăm phút." },
      { s: "tuan", text: "Where should I go?",
        vi: "Em đến chỗ nào ạ?" },
      { s: "lan", text: "Come to the reception on the fifth floor. Please arrive ten minutes early and bring your ID card.",
        vi: "Em đến quầy lễ tân ở tầng năm. Em đến sớm mười phút và nhớ mang thẻ căn cước nhé." },
      { s: "tuan", text: "OK. I'll be there. Thank you.",
        vi: "Dạ. Em sẽ có mặt. Em cảm ơn chị." },
      { s: "lan", text: "I'm going to send you a confirmation email today. Please reply to confirm.",
        vi: "Hôm nay chị sẽ gửi email xác nhận cho em. Em trả lời để xác nhận nhé." },
      { s: "tuan", text: "I will. See you on Thursday.",
        vi: "Dạ em sẽ trả lời. Hẹn gặp chị vào thứ Năm." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "Why does Lan call Tuan?",
        options: ["To ask him to start work", "To say he did not get the job", "To ask for his CV", "To arrange an interview with him"],
        answer: 3, explanation: "Chị Lan nói: “We have shortlisted you… We are going to hold interviews this week” rồi hỏi Tuấn có rảnh vào thứ Năm không. Mục đích là hẹn lịch phỏng vấn." },
      { id: "l2", type: "choice", prompt: "What time is the interview?",
        options: ["Ten thirty in the morning", "Two o'clock in the afternoon", "Noon", "Nine o'clock"],
        answer: 1, explanation: "Tuấn đề nghị: “Would two o'clock suit you?” và chị Lan đồng ý: “Two o'clock is fine.” Tuấn đi làm đến trưa nên không nhận giờ buổi sáng." },
      { id: "l3", type: "choice", prompt: "What is Lan going to send today?",
        options: ["A confirmation email", "A contract", "A job advertisement", "Directions to the canteen"],
        answer: 0, explanation: "“I'm going to send you a confirmation email today.” Hợp đồng và tin tuyển dụng không được nhắc đến trong cuộc gọi." }
    ]
  },

  reading: {
    title: "An interview confirmation email",
    intro: "Email chị Lan gửi Tuấn sau cuộc gọi ngày 19/10. Đọc và tìm ngày, giờ, địa điểm và việc cần chuẩn bị.",
    email: {
      from: "Lan Pham <lan.pham@riverside-trading.example>",
      to: "Tuan Nguyen",
      date: "Monday, 19 October",
      subject: "Interview confirmation – HR Assistant",
      greeting: "Dear Tuan,",
      paragraphs: [
        "Thank you for speaking with me today. I am writing to confirm your interview for the HR Assistant job.",
        "The details are:"
      ],
      list: [
        "Date: Thursday, 22 October",
        "Time: 2:00 p.m.",
        "Place: the reception on the 5th floor",
        "Interviewers: Mr. Hai and me"
      ],
      after: [
        "The interview is going to take about 45 minutes. First, we are going to ask about your experience. Then you will have time for your questions.",
        "Please arrive ten minutes early and bring your ID card. If the time no longer suits you, please call me on extension 214.",
        "Please reply to this email to confirm."
      ],
      closing: "Best regards,",
      signature: ["Lan Pham", "HR Officer, Riverside Trading"]
    },
    glossary: [
      { term: "interviewers", vi: "những người phỏng vấn" },
      { term: "no longer suits you", vi: "không còn phù hợp với bạn nữa" },
      { term: "extension", vi: "số máy lẻ nội bộ" },
      { term: "reply to confirm", vi: "trả lời để xác nhận" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "Who will interview Tuan?",
        options: ["Only Ms. Lan", "Mr. David and Ms. Lan", "Mr. Hai and Ms. Lan", "Mr. Hai and Sam"],
        answer: 2, explanation: "“Interviewers: Mr. Hai and me.” “Me” là chị Lan, người viết email." },
      { id: "r2", type: "choice", prompt: "What should Tuan do if the time no longer suits him?",
        options: ["Call Lan on extension 214", "Come on Friday", "Do nothing", "Email Mr. Hai"],
        answer: 0, explanation: "“If the time no longer suits you, please call me on extension 214.” Chị Lan là người cần được báo, không phải anh Hải." },
      { id: "r3", type: "choice", prompt: "Which statement is TRUE?",
        options: ["The interview is on Friday.", "Tuan should arrive at 2:10 p.m.", "The interview takes about two hours.", "Tuan should arrive ten minutes early."],
        answer: 3, explanation: "“Please arrive ten minutes early.” Phỏng vấn vào thứ Năm lúc 2:00 p.m. và kéo dài khoảng 45 phút, nên đến lúc 1:50 p.m. chứ không phải 2:10." }
    ]
  },

  grammar: {
    title: "Making plans and arranging times",
    titleVi: "Nói về kế hoạch và hẹn giờ",
    intro: "Khi sắp xếp phỏng vấn, ta nói về kế hoạch đã dự định và hỏi người khác có rảnh không. Bốn mẫu dưới đây có trong cuộc gọi và email bạn vừa học.",
    patterns: [
      { form: "be going to + động từ", use: "Nói về kế hoạch hoặc dự định đã có. Be đổi theo chủ ngữ: am / is / are.",
        examples: ["We are going to hold interviews this week.", "I'm going to send you an email."] },
      { form: "Are you going to…? / I'm not going to…", use: "Hỏi và nói phủ định về kế hoạch. Đưa be lên đầu để hỏi, thêm not để phủ định.",
        examples: ["Are you going to bring your CV?", "He isn't going to attend the first interview."] },
      { form: "Are you available + on / at / for…?", use: "Hỏi người khác có rảnh vào ngày giờ nào đó không. Ngày dùng on, giờ dùng at.",
        examples: ["Are you available on Thursday?", "Are you available at two o'clock?"] },
      { form: "Would + ngày / giờ + suit you?", use: "Đề nghị thời gian một cách lịch sự và hỏi xem có tiện không. Sau Would dùng suit, không thêm -s.",
        examples: ["Would Thursday suit you?", "Would ten thirty suit you?"] }
    ],
    mistakes: [
      { wrong: "We going to hold interviews.", right: "We are going to hold interviews.", note: "Phải có be (am / is / are) trước going to." },
      { wrong: "I'm going to sending an email.", right: "I'm going to send an email.", note: "Sau going to là động từ nguyên mẫu." },
      { wrong: "Are you available in Thursday?", right: "Are you available on Thursday?", note: "Ngày trong tuần dùng on." },
      { wrong: "Would Thursday suits you?", right: "Would Thursday suit you?", note: "Sau would dùng động từ nguyên mẫu, không thêm -s." }
    ],
    tip: "Nếu người kia không rảnh, hãy đề nghị lại lịch khác: “Would Friday morning suit you?” hoặc “Is another day more convenient?”"
  },

  practice: [
    { id: "p1", type: "gap", prompt: "We are going ___ interview three candidates on Thursday.",
      options: ["for", "at", "to", "in"],
      answer: 2, explanation: "Cấu trúc kế hoạch: be going to + động từ: going to interview." },
    { id: "p2", type: "gap", prompt: "Are you ___ on Friday afternoon?",
      options: ["available", "convenient", "confirmed", "directions"],
      answer: 0, explanation: "Available = rảnh. Ta nói người available, còn convenient dùng cho thời gian hoặc địa điểm (Is that time convenient?)." },
    { id: "p3", type: "gap", prompt: "Would Tuesday ___ you?",
      options: ["suits", "suited", "to suit", "suit"],
      answer: 3, explanation: "Sau would dùng động từ nguyên mẫu không có “to” và không thêm -s: Would Tuesday suit you?" },
    { id: "p4", type: "gap", prompt: "I am sick, so I am going to ___ the interview to Friday.",
      options: ["cancel", "reschedule", "confirm", "arrive"],
      answer: 1, explanation: "Reschedule … to Friday = dời sang thứ Sáu. Cancel là hủy hẳn, không đi với “to Friday”." },
    { id: "p5", type: "gap", prompt: "Are you available ___ Thursday?",
      options: ["in", "at", "on", "to"],
      answer: 2, explanation: "Ngày trong tuần dùng giới từ on: on Thursday." },
    { id: "p6", type: "choice", prompt: "Which sentence asks about a time politely?",
      options: ["Would nine o'clock suit you?", "Come at nine.", "You come at nine.", "Nine!"],
      answer: 0, explanation: "Would … suit you? là cách hỏi lịch sự. Các câu còn lại là mệnh lệnh hoặc quá cộc." },
    { id: "p7", type: "gap", prompt: "She ___ going to call the candidates today.",
      options: ["are", "do", "be", "is"],
      answer: 3, explanation: "Chủ ngữ She (ngôi thứ ba số ít) đi với is: She is going to call." },
    { id: "p8", type: "choice", prompt: "Which sentence is correct?",
      options: ["We going to hold interviews.", "We are going to hold interviews.", "We are going to holding interviews.", "We are go to hold interviews."],
      answer: 1, explanation: "Đúng là be + going to + động từ nguyên mẫu. Các câu còn lại thiếu be, thừa -ing hoặc sai going." },
    { id: "p9", type: "choice", context: "A candidate says: “Sorry, Thursday is difficult for me.”", prompt: "What is the best reply from the HR officer?",
      options: ["Please wear your ID badge.", "It takes forty-five minutes.", "Would Friday morning suit you?", "Nice to meet you."],
      answer: 2, explanation: "Khi ứng viên không rảnh, HR đề nghị thời gian khác: Would Friday morning suit you? Các câu còn lại không trả lời vấn đề lịch hẹn." },
    { id: "p10", type: "choice", prompt: "Where is the main stress in “available”?",
      options: ["A·vail·a·ble", "a·VAIL·a·ble", "a·vail·A·ble", "a·vail·a·BLE"],
      answer: 1, explanation: "Available có trọng âm ở âm tiết thứ hai: a·VAIL·a·ble." }
  ],

  writing: {
    title: "Arrange an interview by email",
    task: "Bạn là chị Lan. Hãy viết email gửi ứng viên Nam Hoang để hẹn lịch phỏng vấn vào thứ Sáu 23/10 (50–90 từ).",
    requirements: [
      "Mở đầu bằng lời chào (Dear Nam).",
      "Cho biết công ty sắp tổ chức phỏng vấn (going to).",
      "Hỏi Nam có rảnh vào ngày hôm đó không (Are you available…?).",
      "Đề nghị một giờ cụ thể (Would … suit you?).",
      "Nêu ngày hoặc giờ, và nhờ Nam trả lời để xác nhận.",
      "Kết thúc email và ký tên."
    ],
    minWords: 50,
    maxWords: 90,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Dear …)", pattern: "\\bdear\\b" },
      { label: "Dùng be going to", pattern: "going to" },
      { label: "Có câu hỏi Are you available / free", pattern: "are you available|are you free" },
      { label: "Có câu Would … suit you?", pattern: "\\bsuit\\b|convenient" },
      { label: "Nhắc tới ngày hoặc giờ", pattern: "friday|23 october|october 23|a\\.m\\.|p\\.m\\.|o'clock" },
      { label: "Có lời kết (Best regards …)", pattern: "regards|sincerely|best wishes" }
    ],
    model: [
      "Dear Nam,",
      "Thank you for your application. We are going to hold interviews this week. Are you available on Friday, 23 October? Would 10:00 a.m. suit you?",
      "The interview is going to take about 45 minutes. Please bring your ID card and arrive ten minutes early. Please reply to confirm. We are looking forward to meeting you.",
      "Best regards,",
      "Lan Pham"
    ]
  },

  review: {
    keyPhrases: [
      { en: "We are going to hold interviews this week.", vi: "Tuần này chúng tôi sẽ tổ chức phỏng vấn." },
      { en: "Are you available on Thursday?", vi: "Thứ Năm bạn có rảnh không?" },
      { en: "Would two o'clock suit you?", vi: "Hai giờ chiều có tiện cho bạn không?" },
      { en: "Please arrive ten minutes early.", vi: "Vui lòng đến sớm mười phút." },
      { en: "I am writing to confirm your interview.", vi: "Tôi viết email này để xác nhận buổi phỏng vấn của bạn." },
      { en: "Please reply to this email to confirm.", vi: "Vui lòng trả lời email này để xác nhận." }
    ]
  }
});
