/* =========================================================
   A2 · Module 4 (HR Operations) · Bài 2
   "Leave requests and approvals" — Đơn xin nghỉ phép và phê duyệt
   Ngữ pháp: câu điều kiện loại 0 cho quy định + Is it possible to…?
   Câu chuyện: thứ Ba 24/11/2026. Peter hỏi Tuấn về nghỉ phép năm.
   Công ty Riverside Trading và các nhân vật đều là hư cấu.
   ========================================================= */
window.EOH.registerLesson({
  id: "a2-m4-l2",
  reviewStatus: "draft", // "draft" = bản nháp, chưa duyệt
  duration: "35–45 phút",
  scenario: "Thứ Ba 24/11. Peter (phòng Kinh doanh) hỏi Tuấn xem có thể nghỉ hai ngày phép năm vào tuần sau không. Tuấn giải thích quy định nghỉ phép, rồi gửi email xác nhận khi anh David đã phê duyệt.",

  objectives: [
    "Hiểu và dùng 10 từ vựng về nghỉ phép (annual leave, sick leave, medical certificate…).",
    "Nghe hiểu cách xin nghỉ phép và quy định khi bị ốm.",
    "Đọc email xác nhận phê duyệt nghỉ phép và tìm đúng thông tin.",
    "Nói về quy định bằng câu If + hiện tại, hiện tại; hỏi lịch sự bằng Is it possible to…?",
    "Viết email xin nghỉ nửa ngày gửi quản lý."
  ],

  vocabulary: [
    { word: "annual leave", ipa: "/ˈænjuəl liːv/", pos: "noun", meaning: "nghỉ phép năm",
      example: "I'd like to take two days of annual leave.", exampleVi: "Tôi muốn nghỉ hai ngày phép năm." },
    { word: "sick leave", ipa: "/ˈsɪk liːv/", pos: "noun", meaning: "nghỉ ốm",
      example: "She is on sick leave today.", exampleVi: "Hôm nay chị ấy nghỉ ốm." },
    { word: "unpaid leave", ipa: "/ʌnˈpeɪd liːv/", pos: "noun", meaning: "nghỉ không lương",
      example: "If you have no annual leave left, you can ask for unpaid leave.", exampleVi: "Nếu hết phép năm, bạn có thể xin nghỉ không lương." },
    { word: "leave request", ipa: "/ˈliːv rɪˌkwest/", pos: "noun", meaning: "đơn xin nghỉ",
      example: "Please fill in a leave request form.", exampleVi: "Vui lòng điền đơn xin nghỉ." },
    { word: "leave balance", ipa: "/ˈliːv ˌbæləns/", pos: "noun", meaning: "số ngày phép còn lại",
      example: "Let me check your leave balance.", exampleVi: "Để tôi kiểm tra số ngày phép còn lại của bạn." },
    { word: "medical certificate", ipa: "/ˈmedɪkəl sərˈtɪfɪkət/", pos: "noun", meaning: "giấy chứng nhận của bác sĩ",
      example: "Please bring a medical certificate to HR.", exampleVi: "Vui lòng mang giấy chứng nhận của bác sĩ đến phòng Nhân sự." },
    { word: "approve", ipa: "/əˈpruːv/", pos: "verb", meaning: "phê duyệt, đồng ý",
      example: "Your manager must approve the request.", exampleVi: "Quản lý của bạn phải phê duyệt đơn." },
    { word: "handover", ipa: "/ˈhændˌoʊvər/", pos: "noun", meaning: "bản bàn giao công việc",
      example: "Please write a short handover for your team.", exampleVi: "Vui lòng viết bản bàn giao ngắn cho nhóm của bạn." },
    { word: "half-day", ipa: "/ˈhæf ˌdeɪ/", pos: "noun", meaning: "nửa ngày",
      example: "Is it possible to take a half-day on Friday?", exampleVi: "Tôi có thể nghỉ nửa ngày vào thứ Sáu không?" },
    { word: "advance notice", ipa: "/ədˈvæns ˈnoʊtɪs/", pos: "noun", meaning: "thông báo trước",
      example: "Please give your manager advance notice.", exampleVi: "Vui lòng thông báo trước cho quản lý của bạn." }
  ],

  pronunciation: {
    groups: [
      {
        title: "Trọng âm của từ",
        text: "Âm tiết in hoa là âm đọc to và dài hơn. Từ ghép như handover có trọng âm ở phần đầu; từ có đuôi -ate hoặc -ical thường có trọng âm ở âm tiết trước đó.",
        items: [
          { word: "approve", marked: "ap·PROVE" },
          { word: "annual", marked: "AN·nu·al" },
          { word: "medical", marked: "MED·i·cal" },
          { word: "certificate", marked: "cer·TIF·i·cate" },
          { word: "handover", marked: "HAND·o·ver", note: "Từ ghép: trọng âm ở phần đầu." }
        ]
      },
      {
        title: "Ngữ điệu câu điều kiện",
        text: "Trong câu If…, giọng thường lên nhẹ ở cuối mệnh đề If, rồi xuống ở cuối câu. Dừng ngắn ở dấu phẩy.",
        items: [
          { word: "If you are sick,", marked: "If you are SICK ↗", note: "Giọng lên nhẹ, dừng ngắn." },
          { word: "call your manager.", marked: "call your MAN·ager ↘", note: "Giọng xuống ở cuối câu." }
        ]
      }
    ],
    sentences: [
      "If you are sick, you call your manager.",
      "Is it possible to take a half-day on Friday?",
      "You bring a medical certificate if you want social insurance to pay your sick allowance."
    ]
  },

  listening: {
    title: "Asking about annual leave",
    setting: "Sáng thứ Ba, tại phòng Nhân sự. Peter đến hỏi Tuấn về nghỉ phép năm.",
    speakers: { peter: "Peter (Sales)", tuan: "Tuan (HR Assistant)" },
    lines: [
      { s: "peter", text: "Hi Tuan. Is it possible to take two days of annual leave next week?",
        vi: "Chào Tuấn. Tôi có thể nghỉ hai ngày phép năm vào tuần sau không?" },
      { s: "tuan", text: "Yes, it is. Which days do you want?",
        vi: "Được ạ. Anh muốn nghỉ những ngày nào?" },
      { s: "peter", text: "Monday the thirtieth of November and Tuesday the first of December.",
        vi: "Thứ Hai ngày ba mươi tháng Mười Một và thứ Ba ngày một tháng Mười Hai." },
      { s: "tuan", text: "OK. Please fill in a leave request form. If you want annual leave, you send the form to your manager before your leave starts.",
        vi: "Vâng. Anh điền đơn xin nghỉ giúp em. Nếu anh muốn nghỉ phép năm, anh gửi đơn cho quản lý trước ngày nghỉ." },
      { s: "peter", text: "That's fine. How many days do I have left?",
        vi: "Được rồi. Tôi còn bao nhiêu ngày phép?" },
      { s: "tuan", text: "Let me check your leave balance. You have worked here for two months, so you have two days of annual leave. You can take both.",
        vi: "Để em kiểm tra số ngày phép còn lại của anh. Anh đã làm được hai tháng nên có hai ngày phép năm. Anh nghỉ cả hai ngày được." },
      { s: "peter", text: "Great. What happens if I am sick?",
        vi: "Tốt quá. Nếu tôi bị ốm thì sao?" },
      { s: "tuan", text: "If you are sick, you call your manager before eight-thirty. And if you want social insurance to pay your sick allowance, you bring a medical certificate.",
        vi: "Nếu anh bị ốm, anh gọi cho quản lý trước tám giờ ba mươi. Và nếu anh muốn bảo hiểm xã hội trả tiền trợ cấp ốm đau, anh mang theo giấy của bác sĩ." },
      { s: "peter", text: "Do I need to do anything before I go?",
        vi: "Trước khi nghỉ tôi cần làm gì nữa không?" },
      { s: "tuan", text: "Yes. If you go on leave, you write a short handover for your team. I'll send you an email when David approves your request.",
        vi: "Có ạ. Khi anh nghỉ phép, anh viết một bản bàn giao ngắn cho nhóm. Em sẽ gửi email cho anh khi anh David phê duyệt đơn." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "How many days of annual leave does Peter want?",
        options: ["One", "Two", "Three", "Four"],
        answer: 1, explanation: "Peter hỏi: “Is it possible to take two days of annual leave next week?” Anh muốn nghỉ hai ngày: thứ Hai 30/11 và thứ Ba 1/12." },
      { id: "l2", type: "choice", prompt: "When must a sick employee call his manager?",
        options: ["Before eight-thirty", "After lunch", "Before five o'clock", "On the next day"],
        answer: 0, explanation: "“If you are sick, you call your manager before eight-thirty.” Phải gọi trước tám giờ ba mươi sáng." },
      { id: "l3", type: "choice", prompt: "What should Peter write for his team before he goes on leave?",
        options: ["A medical certificate", "A timesheet", "A short handover", "A new leave request"],
        answer: 2, explanation: "“If you go on leave, you write a short handover for your team.” Giấy của bác sĩ dùng để bảo hiểm xã hội trả trợ cấp ốm đau." }
    ]
  },

  reading: {
    title: "Your leave request is approved",
    intro: "Email Tuấn gửi cho Peter chiều thứ Ba 24/11, sau khi anh David phê duyệt. Đọc và tìm thông tin chính.",
    email: {
      from: "Tuan Nguyen <tuan.nguyen@riverside-trading.example>",
      to: "Peter Clark <peter.clark@riverside-trading.example>",
      date: "Tuesday, 24 November",
      subject: "Your leave request is approved",
      greeting: "Dear Peter,",
      paragraphs: [
        "David approved your request for annual leave on Monday, 30 November and Tuesday, 1 December. Your leave balance is now zero days. Please remember these rules:"
      ],
      list: [
        "If you are sick, you call David before 8:30 a.m.",
        "If you want social insurance to pay your sick allowance, you bring a medical certificate.",
        "If you go on leave, you send a short handover to your team."
      ],
      after: [
        "Please send your handover by Friday, 27 November. You come back to the office on Wednesday, 2 December.",
        "If you have any questions, please reply to this email."
      ],
      closing: "Best regards,",
      signature: ["Tuan Nguyen", "HR Assistant, Riverside Trading"]
    },
    glossary: [
      { term: "request", vi: "đơn đề nghị, yêu cầu" },
      { term: "be away", vi: "vắng mặt, không có mặt ở cơ quan" },
      { term: "come back", vi: "quay lại làm việc" },
      { term: "remember", vi: "nhớ, ghi nhớ" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "What did David approve?",
        options: ["Sick leave on Monday", "A half-day on Friday", "Unpaid leave for a week", "Annual leave on 30 November and 1 December"],
        answer: 3, explanation: "“David approved your request for annual leave on Monday, 30 November and Tuesday, 1 December.”" },
      { id: "r2", type: "choice", prompt: "What must Peter bring if he wants social insurance to pay his sick allowance?",
        options: ["A handover", "A medical certificate", "A leave request", "His ID badge"],
        answer: 1, explanation: "“If you want social insurance to pay your sick allowance, you bring a medical certificate.”" },
      { id: "r3", type: "choice", prompt: "Which statement is TRUE?",
        options: ["Peter has ten days of annual leave left.", "Peter must call HR if he is sick.", "Peter's leave balance is now zero.", "David will write the handover."],
        answer: 2, explanation: "“Your leave balance is now zero days.” Nếu ốm thì Peter gọi David (quản lý), không gọi phòng Nhân sự; bản bàn giao do Peter viết." }
    ]
  },

  grammar: {
    title: "Rules with If, and polite questions",
    titleVi: "Nói về quy định với If, và hỏi lịch sự",
    intro: "Quy định nghỉ phép luôn đúng mỗi khi tình huống xảy ra. Để nói về quy định, dùng If + hiện tại đơn, và mệnh đề chính cũng ở hiện tại đơn. Để hỏi xin phép lịch sự, dùng Is it possible to…?",
    patterns: [
      { form: "If + hiện tại đơn, hiện tại đơn", use: "Nói về quy định hoặc điều luôn đúng. Không dùng will trong mệnh đề If.",
        examples: ["If you are sick, you call your manager.", "If the manager approves the request, HR updates the leave balance."] },
      { form: "If + hiện tại đơn, câu mệnh lệnh", use: "Dặn dò, hướng dẫn việc phải làm trong một tình huống.",
        examples: ["If you need leave, send the form before your leave starts.", "If you are late, tell your manager."] },
      { form: "Mệnh đề chính + if + hiện tại đơn (không dấu phẩy)", use: "Đảo thứ tự hai mệnh đề; nghĩa không đổi, không cần dấu phẩy.",
        examples: ["You bring a medical certificate if you want social insurance to pay your sick allowance.", "You take unpaid leave if you have no annual leave left."] },
      { form: "Is it possible to + động từ …?", use: "Hỏi xin phép hoặc hỏi có thể làm gì một cách lịch sự. Có thể nói Is it possible for me to…?",
        examples: ["Is it possible to take a half-day on Friday?", "Is it possible for me to leave early today?"] }
    ],
    mistakes: [
      { wrong: "If you will be sick, you call your manager.", right: "If you are sick, you call your manager.", note: "Mệnh đề If của quy định dùng hiện tại đơn, không dùng will." },
      { wrong: "If the manager approve the request, HR updates the balance.", right: "If the manager approves the request, HR updates the balance.", note: "The manager là ngôi thứ ba số ít: approves." },
      { wrong: "Is it possible take a half-day?", right: "Is it possible to take a half-day?", note: "Sau Is it possible cần “to” + động từ." },
      { wrong: "Is it possible I leave early?", right: "Is it possible for me to leave early?", note: "Khi có người làm việc đó, dùng “for + người + to + động từ”." }
    ],
    tip: "Câu điều kiện loại 0 dùng cho quy định luôn đúng. Còn một việc cụ thể sẽ xảy ra trong tương lai (If it rains tomorrow, I will…) thì dùng will, bạn sẽ học ở cấp sau. Về luật: Bộ luật Lao động 2019 cho người làm đủ 12 tháng nghỉ phép năm 12 ngày (công việc bình thường); làm chưa đủ 12 tháng thì số ngày phép tính theo số tháng đã làm. Công ty xếp lịch nghỉ phép sau khi hỏi ý kiến người lao động và phải thông báo trước; số ngày phải nộp đơn trước là quy định riêng của từng công ty. Muốn bảo hiểm xã hội trả trợ cấp ốm đau thì cần giấy tờ y tế hợp lệ."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "A paper from a doctor that says you were ill is a ___.",
      options: ["medical certificate", "leave balance", "handover", "half-day"],
      answer: 0, explanation: "Medical certificate = giấy chứng nhận của bác sĩ. Leave balance là số ngày phép còn lại." },
    { id: "p2", type: "gap", prompt: "You used all your annual leave, but you still need a day off. You can ask for ___ leave.",
      options: ["sick", "annual", "medical", "unpaid"],
      answer: 3, explanation: "Đã hết phép năm mà vẫn cần nghỉ thì xin nghỉ không lương: unpaid leave. Sick leave chỉ dành cho khi bị ốm." },
    { id: "p3", type: "gap", prompt: "Your manager must ___ your leave request before you go.",
      options: ["handover", "advance", "approve", "balance"],
      answer: 2, explanation: "Approve = phê duyệt, là động từ. Handover, advance, balance không dùng như động từ trong câu này." },
    { id: "p4", type: "gap", prompt: "If you ___ sick, you call your manager before 8:30.",
      options: ["will be", "are", "being", "would be"],
      answer: 1, explanation: "Quy định: If + hiện tại đơn (are). Không dùng will hay would trong mệnh đề If." },
    { id: "p5", type: "gap", prompt: "If you ___ unpaid leave, you do not receive a salary for those days.",
      options: ["take", "takes", "taking", "will take"],
      answer: 0, explanation: "Chủ ngữ you nên dùng take (không có -s). Mệnh đề If của quy định không dùng will." },
    { id: "p6", type: "gap", prompt: "___ take a half-day on Friday?",
      options: ["Is possible to", "It is possible to", "Possible to", "Is it possible to"],
      answer: 3, explanation: "Câu hỏi lịch sự: Is it possible to + động từ…? Các lựa chọn khác sai trật tự từ hoặc thiếu “it”." },
    { id: "p7", type: "gap", prompt: "Is it possible ___ me to leave early today?",
      options: ["to", "of", "for", "that"],
      answer: 2, explanation: "Cấu trúc: Is it possible for + người + to + động từ…? Ví dụ: Is it possible for me to leave early?" },
    { id: "p8", type: "choice", prompt: "Which sentence is a rule (always true)?",
      options: ["If it rains tomorrow, I will take a taxi.", "If you are sick, you call your manager.", "If I had time, I would visit Hanoi.", "If Peter calls, I will tell him."],
      answer: 1, explanation: "Quy định dùng If + hiện tại, hiện tại: “If you are sick, you call your manager.” Các câu còn lại nói về việc cụ thể hoặc giả định." },
    { id: "p9", type: "choice", context: "Peter asks: “Is it possible to take Friday afternoon off?”", prompt: "What is the best reply from HR?",
      options: ["Yes. Fill in a leave request and send it to your manager.", "Yes, your probation period is sixty days.", "No, I have a medical certificate.", "Yes, I am sick today."],
      answer: 0, explanation: "Trả lời đúng và có ích: hướng dẫn điền đơn xin nghỉ và gửi cho quản lý. Các câu còn lại không liên quan đến câu hỏi." },
    { id: "p10", type: "choice", prompt: "Which word has the stress on the SECOND syllable?",
      options: ["annual", "handover", "medical", "approve"],
      answer: 3, explanation: "ap·PROVE có trọng âm ở âm tiết thứ hai. AN·nu·al, HAND·o·ver và MED·i·cal đều có trọng âm ở âm đầu." }
  ],

  writing: {
    title: "Ask your manager for a half-day",
    task: "Bạn là Tuấn. Bạn có hẹn bác sĩ chiều thứ Sáu 4/12. Hãy viết email xin anh Hải cho nghỉ nửa ngày phép năm (50–90 từ).",
    requirements: [
      "Mở đầu bằng lời chào (Dear Mr. Hai,).",
      "Nói lý do: bạn có hẹn bác sĩ vào thứ Sáu 4/12.",
      "Hỏi bằng Is it possible to…? xin nghỉ nửa ngày buổi chiều.",
      "Nói bạn sẽ hoàn thành việc trước khi nghỉ.",
      "Hỏi có cần điền đơn xin nghỉ không và cảm ơn anh.",
      "Kết thúc email và ký tên."
    ],
    minWords: 50,
    maxWords: 90,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Dear …)", pattern: "\\bdear\\b|\\bhello\\b|\\bhi\\b" },
      { label: "Có câu Is it possible to…?", pattern: "is it possible" },
      { label: "Nhắc tới thứ Sáu hoặc 4 tháng 12", pattern: "friday|4 december" },
      { label: "Nhắc tới nửa ngày hoặc buổi chiều", pattern: "half-day|half day|afternoon" },
      { label: "Có lời cảm ơn", pattern: "\\bthank" },
      { label: "Có lời kết (Best regards …)", pattern: "regards|sincerely|best wishes" }
    ],
    model: [
      "Dear Mr. Hai,",
      "I have a doctor's appointment on Friday, 4 December. Is it possible to take a half-day of annual leave in the afternoon?",
      "I will finish my work on the new employee files before I go. Please tell me if I need to fill in a leave request form. Thank you for your help.",
      "Best regards,",
      "Tuan Nguyen"
    ]
  },

  review: {
    keyPhrases: [
      { en: "Is it possible to take two days of annual leave?", vi: "Tôi có thể nghỉ hai ngày phép năm không?" },
      { en: "Please fill in a leave request form.", vi: "Vui lòng điền đơn xin nghỉ." },
      { en: "If you are sick, you call your manager.", vi: "Nếu bạn bị ốm, bạn gọi cho quản lý." },
      { en: "You bring a medical certificate if you want social insurance to pay your sick allowance.", vi: "Bạn mang giấy của bác sĩ nếu muốn bảo hiểm xã hội trả tiền trợ cấp ốm đau." },
      { en: "Your leave balance is now zero days.", vi: "Số ngày phép còn lại của bạn bây giờ là không." },
      { en: "Please write a short handover for your team.", vi: "Vui lòng viết bản bàn giao ngắn cho nhóm của bạn." }
    ]
  }
});
