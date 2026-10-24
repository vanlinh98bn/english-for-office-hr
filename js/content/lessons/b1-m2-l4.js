/* =========================================================
   B1 · Module 2 (Employee Lifecycle) · Bài 4
   "Resignation and notice period"
   Nối tiếp B1-M2-L3: Peter Clark (Sales, người Canada, người hướng dẫn
   của Thao) quyết định về Canada vì gia đình. Anh nói chuyện với chị Lan
   rồi gửi email xin nghỉ việc chính thức. Thời gian báo trước trong hợp
   đồng của Peter là 30 ngày. Thời gian nói áng chừng.
   ========================================================= */
window.EOH.registerLesson({
  id: "b1-m2-l4",
  reviewStatus: "approved", // Linh duyệt ngày 23/10/2026
  duration: "40–50 phút",
  scenario: "Peter Clark, nhân viên Kinh doanh người Canada trong nhóm của David, quyết định về nước vì lý do gia đình. Anh gặp chị Lan để nói chuyện và hỏi về thời gian báo trước, việc bàn giao và các thủ tục khi nghỉ việc. Sau đó anh gửi chị Lan email xin nghỉ việc chính thức.",

  objectives: [
    "Hiểu và dùng 10 từ vựng thường gặp khi nghỉ việc và bàn giao.",
    "Nghe cuộc trao đổi về xin nghỉ việc, ghi lại thời gian báo trước, việc bàn giao và thủ tục cuối cùng.",
    "Đọc email xin nghỉ việc chính thức, tìm đúng lý do, thời gian báo trước và việc người viết sẽ làm.",
    "Dùng mệnh đề thời gian với when / as soon as / before / after / until + hiện tại đơn để nói về tương lai.",
    "Viết email xin nghỉ việc lịch sự có các mệnh đề thời gian."
  ],

  vocabulary: [
    { word: "resign", ipa: "/rɪˈzaɪn/", pos: "verb", meaning: "xin thôi việc, từ chức",
      example: "Peter has decided to resign from his position.", exampleVi: "Peter đã quyết định xin thôi việc ở vị trí của anh ấy." },
    { word: "resignation letter", ipa: "/ˌrezɪɡˈneɪʃən ˈletər/", pos: "noun", meaning: "đơn xin thôi việc",
      example: "As soon as you give us the resignation letter, the notice period starts.", exampleVi: "Ngay khi bạn đưa đơn xin thôi việc, thời gian báo trước bắt đầu." },
    { word: "handover", ipa: "/ˈhændoʊvər/", pos: "noun", meaning: "việc bàn giao công việc",
      example: "Peter will do the handover to Thao.", exampleVi: "Peter sẽ bàn giao công việc cho Thảo." },
    { word: "last working day", ipa: "/læst ˈwɜːrkɪŋ deɪ/", pos: "noun", meaning: "ngày làm việc cuối cùng",
      example: "His last working day is in thirty days.", exampleVi: "Ngày làm việc cuối cùng của anh ấy là sau ba mươi ngày." },
    { word: "hand in", ipa: "/hænd ɪn/", pos: "phrasal verb", meaning: "nộp, giao lại",
      example: "He must hand in his laptop and ID card.", exampleVi: "Anh ấy phải nộp lại máy tính xách tay và thẻ nhân viên." },
    { word: "notify", ipa: "/ˈnoʊtɪfaɪ/", pos: "verb", meaning: "thông báo (cho ai) một cách chính thức",
      example: "Please notify HR as soon as you decide.", exampleVi: "Hãy thông báo cho phòng Nhân sự ngay khi bạn quyết định." },
    { word: "unused leave", ipa: "/ʌnˈjuːzd liːv/", pos: "noun", meaning: "ngày phép chưa dùng",
      example: "The company pays for unused leave in the final payroll.", exampleVi: "Công ty trả tiền cho ngày phép chưa dùng trong kỳ lương cuối." },
    { word: "final payroll", ipa: "/ˈfaɪnəl ˈpeɪroʊl/", pos: "noun", meaning: "kỳ trả lương cuối cùng",
      example: "We will pay your unused leave in the final payroll.", exampleVi: "Chúng tôi sẽ trả ngày phép chưa dùng của bạn trong kỳ lương cuối." },
    { word: "company property", ipa: "/ˈkʌmpəni ˈprɑːpərti/", pos: "noun", meaning: "tài sản của công ty",
      example: "A laptop is company property.", exampleVi: "Máy tính xách tay là tài sản của công ty." },
    { word: "checklist", ipa: "/ˈtʃeklɪst/", pos: "noun", meaning: "danh sách việc cần kiểm tra, làm lần lượt",
      example: "HR will send you a handover checklist.", exampleVi: "Phòng Nhân sự sẽ gửi bạn danh sách kiểm tra bàn giao." }
  ],

  pronunciation: {
    groups: [
      {
        title: "Trọng âm của từ",
        text: "Những từ dưới đây hay gặp khi nghỉ việc. Âm tiết in hoa là âm đọc to và dài hơn.",
        items: [
          { word: "handover", marked: "HAND·o·ver", note: "Danh từ ghép: nhấn từ đầu." },
          { word: "notify", marked: "NO·ti·fy" },
          { word: "checklist", marked: "CHECK·list" },
          { word: "property", marked: "PROP·er·ty" },
          { word: "payroll", marked: "PAY·roll" },
          { word: "unused", marked: "un·USED", note: "/ʌnˈjuːzd/." }
        ]
      },
      {
        title: "Âm g câm trong resign",
        text: "Trong resign, chữ g không đọc: /rɪˈzaɪn/. Nhưng trong resignation, g được đọc: /ˌrezɪɡˈneɪʃən/. Cùng quy tắc với sign và design.",
        items: [
          { word: "resign", marked: "/rɪˈzaɪn/", note: "g câm." },
          { word: "resignation", marked: "/ˌrezɪɡˈneɪʃən/", note: "g được đọc." }
        ]
      }
    ],
    sentences: [
      "I'll finish my projects before I leave.",
      "As soon as you give us the letter, we'll start the notice period.",
      "After you complete the handover, we'll hold an exit interview."
    ]
  },

  listening: {
    title: "I've decided to resign",
    setting: "Phòng Nhân sự, buổi chiều. Peter xin gặp chị Lan để nói về quyết định nghỉ việc của mình.",
    speakers: { peter: "Peter (Sales Executive)", lan: "Lan (Senior HR Officer)" },
    lines: [
      { s: "peter", text: "Lan, do you have a few minutes? I'd like to talk about something personal.",
        vi: "Lan, chị có vài phút không? Tôi muốn nói về một việc riêng." },
      { s: "lan", text: "Of course, Peter. Please sit down.",
        vi: "Tất nhiên rồi, Peter. Mời anh ngồi." },
      { s: "peter", text: "I've decided to return to Canada. My family needs me. I'm sorry, but I'd like to resign.",
        vi: "Tôi đã quyết định về Canada. Gia đình cần tôi. Tôi xin lỗi, nhưng tôi muốn xin thôi việc." },
      { s: "lan", text: "I'm sorry to hear that, but I understand. How long is your notice period?",
        vi: "Tôi rất tiếc khi nghe điều đó, nhưng tôi hiểu. Thời gian báo trước của anh là bao lâu?" },
      { s: "peter", text: "Thirty days, in my contract. When does it start?",
        vi: "Ba mươi ngày, theo hợp đồng của tôi. Khi nào nó bắt đầu?" },
      { s: "lan", text: "As soon as you give us the resignation letter, we'll start the notice period. We'll also send you a handover checklist.",
        vi: "Ngay khi anh đưa chúng tôi đơn xin thôi việc, chúng tôi sẽ bắt đầu tính thời gian báo trước. Chúng tôi cũng sẽ gửi anh danh sách kiểm tra bàn giao." },
      { s: "peter", text: "Good. I'll finish my main projects before I leave. And I'll train Thao on my clients before I go.",
        vi: "Tốt. Tôi sẽ hoàn thành các dự án chính trước khi nghỉ. Và tôi sẽ hướng dẫn Thảo về các khách hàng của tôi trước khi đi." },
      { s: "lan", text: "That's very helpful. After you complete the handover, we'll hold an exit interview.",
        vi: "Như vậy rất hữu ích. Sau khi anh bàn giao xong, chúng tôi sẽ có buổi phỏng vấn nghỉ việc." },
      { s: "peter", text: "When is that?",
        vi: "Khi nào vậy ạ?" },
      { s: "lan", text: "In your last week. When you hand in your laptop, Sam will close your accounts.",
        vi: "Trong tuần cuối cùng của anh. Khi anh nộp lại máy tính, Sam sẽ đóng các tài khoản của anh." },
      { s: "peter", text: "What about my unused leave?",
        vi: "Còn ngày phép chưa dùng của tôi thì sao?" },
      { s: "lan", text: "We'll calculate it when we prepare your final payroll. As soon as the payroll is ready, we'll pay it to you.",
        vi: "Chúng tôi sẽ tính khi chuẩn bị kỳ lương cuối của anh. Ngay khi bảng lương xong, chúng tôi sẽ trả cho anh." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "Why is Peter resigning?",
        options: ["He has a better job in Hanoi", "He wants to return to Canada because his family needs him", "He does not like his team", "He wants to study"],
        answer: 1, explanation: "Peter nói: “I've decided to return to Canada. My family needs me.” Các lý do khác không được nhắc đến." },
      { id: "l2", type: "choice", prompt: "What will Peter do before he leaves?",
        options: ["Finish his projects and train Thao on his clients", "Move to Logistics", "Hire a new assistant", "Write the exit interview"],
        answer: 0, explanation: "“I'll finish my main projects before I leave. And I'll train Thao on my clients before I go.”" },
      { id: "l3", type: "choice", prompt: "When will the exit interview happen?",
        options: ["Before Peter resigns", "In his last week, after the handover", "After he leaves", "On his first day"],
        answer: 1, explanation: "Chị Lan nói: “After you complete the handover, we'll hold an exit interview… In your last week.”" }
    ]
  },

  reading: {
    title: "A resignation email",
    intro: "Email Peter gửi chị Lan sau cuộc nói chuyện. Đọc và tìm lý do, thời gian báo trước và những việc anh sẽ làm.",
    email: {
      from: "Peter Clark <peter.clark@riverside-trading.example>",
      to: "Lan Pham",
      date: "Wednesday",
      subject: "Resignation – Peter Clark",
      greeting: "Dear Lan,",
      paragraphs: [
        "Thank you for our conversation yesterday. As we discussed, I am writing to inform you that I have decided to resign from my position as Sales Executive. I will return to Canada for family reasons.",
        "According to my contract, my notice period is thirty days. My last working day will be thirty days after you receive this email. During this time:"
      ],
      list: [
        "Before I leave, I will finish my main projects and update my client list.",
        "When Thao is ready, I will introduce her to my clients.",
        "As soon as you send me the handover checklist, I will complete it."
      ],
      after: [
        "I will hand in my laptop and ID card on my last working day. I would be grateful if you could confirm how my unused leave will be paid.",
        "I would like to thank you and David for your support. I have enjoyed working at Riverside Trading."
      ],
      closing: "Best regards,",
      signature: ["Peter Clark", "Sales Executive, Riverside Trading"]
    },
    glossary: [
      { term: "as we discussed", vi: "như chúng ta đã trao đổi" },
      { term: "for family reasons", vi: "vì lý do gia đình" },
      { term: "according to my contract", vi: "theo hợp đồng của tôi" },
      { term: "introduce (someone) to", vi: "giới thiệu (ai) với" },
      { term: "I would be grateful if you could…", vi: "tôi sẽ rất biết ơn nếu bạn có thể…" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "Why is Peter writing to Lan?",
        options: ["To resign officially", "To ask for a promotion", "To apply for a transfer", "To invite her to a meeting"],
        answer: 0, explanation: "“I am writing to inform you that I have decided to resign from my position as Sales Executive.” Đây là email xin nghỉ việc chính thức." },
      { id: "r2", type: "choice", prompt: "How long is Peter's notice period?",
        options: ["Fifteen days", "Forty-five days", "Sixty days", "Thirty days"],
        answer: 3, explanation: "“According to my contract, my notice period is thirty days.”" },
      { id: "r3", type: "choice", prompt: "What will Peter do as soon as Lan sends the handover checklist?",
        options: ["Hand in his laptop", "Complete the checklist", "Visit his clients", "Start the exit interview"],
        answer: 1, explanation: "“As soon as you send me the handover checklist, I will complete it.” Anh nộp máy tính vào ngày làm việc cuối cùng." }
    ]
  },

  grammar: {
    title: "Time clauses about the future",
    titleVi: "Mệnh đề thời gian nói về tương lai",
    intro: "Khi nói về việc sẽ làm khi nghỉ việc, bạn hay dùng when, as soon as, before, after, until. Sau các từ này, động từ vẫn ở hiện tại đơn dù nghĩa là tương lai. Bốn mẫu dưới đây có trong cuộc trao đổi và email bạn vừa học.",
    patterns: [
      { form: "when / as soon as + hiện tại đơn, will + động từ", use: "Nói việc sẽ làm ngay khi một việc khác xảy ra. Mệnh đề thời gian dùng hiện tại đơn, không dùng will.",
        examples: ["As soon as you give us the letter, we will start the notice period.", "When you hand in your laptop, Sam will close your accounts."] },
      { form: "before + hiện tại đơn   ·   after + hiện tại đơn", use: "before = trước khi, after = sau khi. Mệnh đề chính dùng will hoặc câu mệnh lệnh.",
        examples: ["I will finish my projects before I leave.", "After you complete the handover, we will hold an exit interview."] },
      { form: "until + hiện tại đơn", use: "until = cho đến khi. Nói việc kéo dài đến thời điểm một việc khác xảy ra.",
        examples: ["Keep your ID card until you hand in your laptop.", "Please wait until I send you the checklist."] },
      { form: "Mệnh đề thời gian đứng đầu hoặc cuối câu", use: "Đứng đầu câu thì có dấu phẩy; đứng cuối câu thì không có dấu phẩy. Nghĩa không đổi.",
        examples: ["When I finish, I will tell you.", "I will tell you when I finish."] }
    ],
    mistakes: [
      { wrong: "I will finish my projects before I will leave.", right: "I will finish my projects before I leave.", note: "Sau before không dùng will; dùng hiện tại đơn." },
      { wrong: "As soon as you will give us the letter, we will start.", right: "As soon as you give us the letter, we will start.", note: "Mệnh đề thời gian dùng hiện tại đơn." },
      { wrong: "We will hold the exit interview after you will finish.", right: "We will hold the exit interview after you finish.", note: "Sau after dùng hiện tại đơn." },
      { wrong: "Please wait until I will send the letter.", right: "Please wait until I send the letter.", note: "Sau until dùng hiện tại đơn, không dùng will." }
    ],
    tip: "Trong email nghỉ việc và bàn giao, các mệnh đề thời gian giúp sắp xếp việc theo thứ tự rõ ràng (before I leave, when Thao is ready, as soon as you send…). Điều này giúp người đọc biết bạn đã có kế hoạch bàn giao tử tế."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "I will finish my projects before I ___.",
      options: ["will leave", "leave", "left", "am leaving"],
      answer: 1, explanation: "Sau before dùng hiện tại đơn dù nghĩa là tương lai: before I leave. Không dùng will." },
    { id: "p2", type: "gap", prompt: "Tomorrow, as soon as you give us the letter, we ___ the notice period.",
      options: ["start", "started", "will start", "are start"],
      answer: 2, explanation: "Mệnh đề chính dùng will + động từ: we will start. Mệnh đề as soon as dùng hiện tại đơn (give)." },
    { id: "p3", type: "gap", prompt: "I will finish the handover ___ I leave the company.",
      options: ["after", "since", "unless", "before"],
      answer: 3, explanation: "Bàn giao xong trước khi nghỉ việc: before I leave. After sẽ có nghĩa ngược lại; unless không hợp nghĩa." },
    { id: "p4", type: "gap", prompt: "We will hold the exit interview ___ you finish the handover.",
      options: ["after", "unless", "while", "though"],
      answer: 0, explanation: "Buổi phỏng vấn nghỉ việc diễn ra sau khi bàn giao xong: after you finish. Sau after dùng hiện tại đơn." },
    { id: "p5", type: "choice", prompt: "Which sentence is correct?",
      options: ["When he will resign, he will tell David.", "When he resigns, he will tell David.", "When he resigned, he will tell David.", "When he resigning, he will tell David."],
      answer: 1, explanation: "when + hiện tại đơn, will + động từ. Không dùng will trong mệnh đề when." },
    { id: "p6", type: "gap", prompt: "Peter wrote a ___ letter to Lan to leave his job.",
      options: ["rejection", "invitation", "resignation", "reference"],
      answer: 2, explanation: "Resignation letter = đơn xin thôi việc. Rejection letter là thư từ chối, invitation là thư mời." },
    { id: "p7", type: "gap", prompt: "Friday is his last working day. Before he goes, he must ___ his laptop and ID card.",
      options: ["hand in", "hand on", "give on", "take off"],
      answer: 0, explanation: "Hand in = nộp lại, giao lại. Các cụm còn lại không có nghĩa này trong câu." },
    { id: "p8", type: "gap", prompt: "Peter has two days of ___ leave, so the company will pay for them in his final payroll.",
      options: ["used", "unused", "unusual", "unknown"],
      answer: 1, explanation: "Unused leave = ngày phép chưa dùng. Unusual là bất thường, unknown là chưa biết." },
    { id: "p9", type: "choice", prompt: "Which of these is company property?",
      options: ["His laptop", "His salary", "His notice", "His resignation"],
      answer: 0, explanation: "Máy tính xách tay do công ty cấp là company property và phải nộp lại khi nghỉ việc." },
    { id: "p10", type: "choice", prompt: "Which sentence is NOT correct?",
      options: ["I'll call you as soon as I arrive.", "She'll leave after she finishes the report.", "He'll sign the form when he will come.", "We'll wait until you send the letter."],
      answer: 2, explanation: "Câu C sai vì dùng will trong mệnh đề when: phải là “when he comes”. Ba câu còn lại đúng." }
  ],

  writing: {
    title: "Write a resignation email",
    task: "Giả sử bạn là Ha, kế toán của Riverside Trading, và bạn quyết định nghỉ việc vì chuyển nhà sang Da Nang cùng gia đình. Viết email xin nghỉ việc gửi chị Lan (80–120 từ). Nói thời gian báo trước là ba mươi ngày, nói bạn sẽ bàn giao cho Hoa, nhắc nộp lại máy tính và thẻ nhân viên, và cảm ơn công ty.",
    requirements: [
      "Mở đầu bằng lời chào phù hợp.",
      "Nói rõ bạn xin nghỉ việc (resign).",
      "Nói thời gian báo trước (notice period).",
      "Có ít nhất hai mệnh đề thời gian đúng (before / when / as soon as / after / until + hiện tại đơn).",
      "Cảm ơn công ty.",
      "Kết thúc email và ký tên."
    ],
    minWords: 80,
    maxWords: 120,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Dear … / Hi …)", pattern: "\\bdear\\b|\\bhi\\b" },
      { label: "Nói xin nghỉ việc (resign)", pattern: "\\bresign" },
      { label: "Nói thời gian báo trước (notice)", pattern: "\\bnotice\\b" },
      { label: "Có mệnh đề thời gian đúng (before / when / as soon as … + chủ ngữ + hiện tại đơn)", pattern: "\\b(before|when|after|until|as soon as) (i|you|we|he|she|they) (?!will\\b)\\w+" },
      { label: "Có lời cảm ơn (thank)", pattern: "\\bthank" },
      { label: "Có lời kết (Best regards …)", pattern: "regards|sincerely|best wishes" }
    ],
    model: [
      "Dear Lan,",
      "I am writing to inform you that I have decided to resign from my position as accountant. I will move to Da Nang with my family.",
      "My notice period is thirty days. Before I leave, I will finish the monthly reports and train Hoa on my tasks. As soon as you send me the handover checklist, I will complete it. When I finish the handover, I will hand in my laptop and ID card.",
      "Thank you for your support during my time at Riverside Trading.",
      "Best regards,",
      "Ha Le"
    ]
  },

  review: {
    keyPhrases: [
      { en: "I'd like to resign.", vi: "Tôi muốn xin thôi việc." },
      { en: "How long is my notice period?", vi: "Thời gian báo trước của tôi là bao lâu?" },
      { en: "As soon as you give us the letter, we'll start the notice period.", vi: "Ngay khi anh đưa đơn, chúng tôi sẽ bắt đầu tính thời gian báo trước." },
      { en: "I'll finish my projects before I leave.", vi: "Tôi sẽ hoàn thành các dự án trước khi nghỉ." },
      { en: "After you complete the handover, we'll hold an exit interview.", vi: "Sau khi anh bàn giao xong, chúng tôi sẽ có buổi phỏng vấn nghỉ việc." },
      { en: "When you hand in your laptop, Sam will close your accounts.", vi: "Khi anh nộp lại máy tính, Sam sẽ đóng các tài khoản của anh." }
    ]
  }
});
