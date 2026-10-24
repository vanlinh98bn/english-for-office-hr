/* =========================================================
   B2 · Module 1 (Advanced Recruitment) · Bài 3
   "Competency-based interviews (STAR)"
   Nối tiếp B2-M1-L2: tuần sau, phỏng vấn ứng viên Quynh Le cho vị trí
   nhân viên kinh doanh. Tuấn và David hỏi câu hỏi hành vi theo phương
   pháp STAR. Quynh kể về một khách hàng suýt bỏ đi (đã mua năm năm,
   đã nhận được lời chào tốt hơn từ đối thủ; trần giảm giá 3%; chị đến
   thăm trực tiếp, hứa giao hàng trong hai ngày; kết quả hợp đồng hai
   năm mới, đơn hàng tăng 20%). Tuấn gửi David email ghi chú. Thời gian
   nói áng chừng.
   ========================================================= */
window.EOH.registerLesson({
  id: "b2-m1-l3",
  reviewStatus: "approved", // Linh duyệt ngày 24/10/2026
  duration: "45–60 phút",
  scenario: "Tuấn và David phỏng vấn ứng viên Quynh Le cho vị trí nhân viên kinh doanh bằng câu hỏi hành vi theo phương pháp STAR (Situation – Task – Action – Result). Quynh kể một ví dụ thật về việc giữ một khách hàng đang định bỏ đi. Sau buổi phỏng vấn, Tuấn gửi David email ghi chú và chấm điểm theo cấu trúc STAR.",

  objectives: [
    "Hiểu và dùng 10 từ vựng thường gặp trong phỏng vấn dựa trên năng lực.",
    "Nghe một câu trả lời theo cấu trúc STAR, ghi lại tình huống, nhiệm vụ, hành động và kết quả.",
    "Đọc email ghi chú phỏng vấn, tìm đúng thông tin theo từng phần STAR và nhận xét của người phỏng vấn.",
    "Dùng quá khứ hoàn thành (had + V3) cùng quá khứ đơn và quá khứ tiếp diễn để kể một sự việc có trình tự.",
    "Viết một ví dụ theo cấu trúc STAR bằng các thì kể chuyện."
  ],

  vocabulary: [
    { word: "competency", ipa: "/ˈkɑːmpɪtənsi/", pos: "noun", meaning: "năng lực (kỹ năng và hành vi cần cho công việc)",
      example: "Client retention is one of the key competencies for this role.", exampleVi: "Giữ chân khách hàng là một trong những năng lực chính cho vị trí này." },
    { word: "behavioral question", ipa: "/bɪˈheɪvjərəl ˈkwestʃən/", pos: "noun", meaning: "câu hỏi hành vi (hỏi về việc thật đã làm)",
      example: "A behavioral question starts with “Tell us about a time when…”.", exampleVi: "Câu hỏi hành vi bắt đầu bằng “Hãy kể về một lần…”." },
    { word: "STAR method", ipa: "/stɑːr ˈmeθəd/", pos: "noun", meaning: "phương pháp STAR (Situation, Task, Action, Result)",
      example: "We use the STAR method to compare candidates fairly.", exampleVi: "Chúng tôi dùng phương pháp STAR để so sánh các ứng viên một cách công bằng." },
    { word: "probe", ipa: "/proʊb/", pos: "verb", meaning: "hỏi sâu thêm để làm rõ",
      example: "Let me probe a bit: what would you do differently?", exampleVi: "Để tôi hỏi sâu thêm: bạn sẽ làm khác đi điều gì?" },
    { word: "retain", ipa: "/rɪˈteɪn/", pos: "verb", meaning: "giữ lại (khách hàng, nhân viên)",
      example: "Her task was to retain the client.", exampleVi: "Nhiệm vụ của chị ấy là giữ chân khách hàng." },
    { word: "persuade", ipa: "/pərˈsweɪd/", pos: "verb", meaning: "thuyết phục",
      example: "She persuaded the client to stay.", exampleVi: "Chị ấy đã thuyết phục khách hàng ở lại." },
    { word: "under pressure", ipa: "/ˈʌndər ˈpreʃər/", pos: "phrase", meaning: "chịu áp lực",
      example: "Tell us about a time when you worked under pressure.", exampleVi: "Hãy kể về một lần bạn làm việc dưới áp lực." },
    { word: "take the initiative", ipa: "/teɪk ðə ɪˈnɪʃətɪv/", pos: "phrase", meaning: "chủ động làm trước",
      example: "She took the initiative and visited the client in person.", exampleVi: "Chị ấy chủ động đến thăm khách hàng trực tiếp." },
    { word: "measurable", ipa: "/ˈmeʒərəbəl/", pos: "adjective", meaning: "đo lường được (bằng số liệu)",
      example: "The result was measurable: orders increased by twenty percent.", exampleVi: "Kết quả đo lường được: đơn hàng tăng hai mươi phần trăm." },
    { word: "track record", ipa: "/ˈtræk ˈrekərd/", pos: "noun", meaning: "thành tích đã đạt được trong quá khứ",
      example: "She has a strong track record in sales.", exampleVi: "Chị ấy có thành tích tốt trong bán hàng." }
  ],

  pronunciation: {
    groups: [
      {
        title: "Trọng âm của từ",
        text: "Những từ dưới đây hay gặp trong phỏng vấn. Âm tiết in hoa là âm đọc to và dài hơn.",
        items: [
          { word: "competency", marked: "COM·pe·ten·cy" },
          { word: "behavioral", marked: "be·HAV·ior·al" },
          { word: "persuade", marked: "per·SUADE" },
          { word: "retain", marked: "re·TAIN" },
          { word: "initiative", marked: "i·NI·tia·tive" },
          { word: "measurable", marked: "MEAS·ur·a·ble" }
        ]
      },
      {
        title: "had rút gọn thành 'd",
        text: "Trong lời nói, had thường rút gọn thành 'd /d/ và đọc rất nhẹ: the client'd already received an offer. Hãy nghe động từ V3 phía sau để nhận ra quá khứ hoàn thành.",
        items: [
          { word: "he had already left", marked: "he'd al·READ·y LEFT" },
          { word: "they had been buying", marked: "they'd been BUY·ing" }
        ]
      }
    ],
    sentences: [
      "The client had already received a better offer when I took over.",
      "By the time I arrived, they had started to lose trust.",
      "Nobody had visited them for a year, so I visited in person."
    ]
  },

  listening: {
    title: "Tell us about a time when…",
    setting: "Room 301, buổi sáng. Tuấn và David phỏng vấn ứng viên Quynh Le cho vị trí nhân viên kinh doanh, bằng câu hỏi hành vi.",
    speakers: { tuan: "Tuan (HR Executive)", david: "David (Sales Manager)", quynh: "Quynh (candidate)" },
    lines: [
      { s: "tuan", text: "Thank you for coming, Quynh. Today we'll ask some behavioral questions. We'd like you to give real examples.",
        vi: "Cảm ơn chị đã đến, Quỳnh. Hôm nay chúng tôi sẽ hỏi một số câu hỏi hành vi. Chúng tôi muốn chị đưa ra những ví dụ thật." },
      { s: "quynh", text: "Of course.",
        vi: "Vâng, tất nhiên." },
      { s: "david", text: "Let's start with this: tell us about a time when you nearly lost an important client.",
        vi: "Chúng ta bắt đầu với câu này: hãy kể về một lần chị suýt mất một khách hàng quan trọng." },
      { s: "quynh", text: "Sure. Last year, I was working for a packaging company. The client had been buying from us for five years, but when I took over the account, they had already received a better offer from a competitor.",
        vi: "Vâng. Năm ngoái tôi làm cho một công ty bao bì. Khách hàng đã mua hàng của chúng tôi được năm năm, nhưng khi tôi tiếp nhận tài khoản này thì họ đã nhận được lời chào tốt hơn từ một đối thủ." },
      { s: "tuan", text: "What was your responsibility in that situation?",
        vi: "Trách nhiệm của chị trong tình huống đó là gì?" },
      { s: "quynh", text: "My task was to keep the client without lowering our price. My manager had told me that we couldn't reduce it by more than three percent.",
        vi: "Nhiệm vụ của tôi là giữ khách hàng mà không hạ giá. Quản lý của tôi đã nói rằng chúng tôi không được giảm quá ba phần trăm." },
      { s: "david", text: "And what did you do?",
        vi: "Và chị đã làm gì?" },
      { s: "quynh", text: "First, I visited the client in person, because nobody had visited them for a year. I asked what they really needed, and I found out that late deliveries had caused most of the problems. Then I worked with our logistics team to guarantee delivery within two days.",
        vi: "Trước hết, tôi đến thăm khách hàng trực tiếp vì một năm nay chưa ai đến thăm họ. Tôi hỏi họ thật sự cần gì, và phát hiện việc giao hàng trễ là nguyên nhân của phần lớn vấn đề. Sau đó tôi làm việc với nhóm logistics để đảm bảo giao hàng trong hai ngày." },
      { s: "david", text: "What was the result?",
        vi: "Kết quả là gì?" },
      { s: "quynh", text: "The client stayed. We signed a new two-year contract, and their orders increased by twenty percent.",
        vi: "Khách hàng ở lại. Chúng tôi ký hợp đồng hai năm mới, và đơn hàng của họ tăng hai mươi phần trăm." },
      { s: "tuan", text: "Great. Let me probe a bit. What would you do differently?",
        vi: "Rất tốt. Để tôi hỏi sâu thêm. Chị sẽ làm gì khác đi?" },
      { s: "quynh", text: "I'd visit key clients more regularly, so I'd notice problems earlier. By the time I arrived, they had already started to lose trust.",
        vi: "Tôi sẽ thăm các khách hàng chính đều đặn hơn để phát hiện vấn đề sớm hơn. Khi tôi đến, họ đã bắt đầu mất lòng tin rồi." },
      { s: "david", text: "Thank you. That's a very clear example. You structured it well.",
        vi: "Cảm ơn chị. Đó là một ví dụ rất rõ ràng. Chị trình bày có cấu trúc tốt." },
      { s: "tuan", text: "We use the STAR method: Situation, Task, Action, Result. It helps us compare candidates fairly.",
        vi: "Chúng tôi dùng phương pháp STAR: Tình huống, Nhiệm vụ, Hành động, Kết quả. Nó giúp chúng tôi so sánh các ứng viên một cách công bằng." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "What had happened before Quynh took over the account?",
        options: ["The client had stopped buying", "The client had received a better offer from a competitor", "The client had complained to the manager", "The client had moved abroad"],
        answer: 1, explanation: "Quỳnh nói: “…when I took over the account, they had already received a better offer from a competitor.”" },
      { id: "l2", type: "choice", prompt: "What did Quynh do first?",
        options: ["She lowered the price", "She called her manager", "She visited the client in person", "She changed the product"],
        answer: 2, explanation: "“First, I visited the client in person, because nobody had visited them for a year.”" },
      { id: "l3", type: "choice", prompt: "What was the result?",
        options: ["A new two-year contract and twenty percent more orders", "The client left", "The price was reduced by three percent", "Nothing changed"],
        answer: 0, explanation: "“We signed a new two-year contract, and their orders increased by twenty percent.”" }
    ]
  },

  reading: {
    title: "Interview notes using STAR",
    intro: "Email Tuấn gửi David sau buổi phỏng vấn, ghi chú theo cấu trúc STAR. Đọc và tìm thông tin cho từng phần cùng nhận xét của Tuấn.",
    email: {
      from: "Tuan Nguyen <tuan.nguyen@riverside-trading.example>",
      to: "David Brown",
      date: "Thursday",
      subject: "Interview notes – Quynh Le (STAR)",
      greeting: "Dear David,",
      paragraphs: [
        "Here are my notes on Quynh Le's interview. I used the STAR method to record and score her answer to the question about an important client. This was her strongest example."
      ],
      list: [
        "Situation: When she took over the account, the client had been buying for five years, but it had already received a better offer from a competitor.",
        "Task: To keep the client without lowering the price by more than three percent.",
        "Action: She visited the client in person, found out that late deliveries had caused most of the problems, and worked with Logistics to guarantee delivery within two days.",
        "Result: The client signed a new two-year contract, and its orders increased by twenty percent."
      ],
      after: [
        "In my opinion, the example was clear and measurable. She also took the initiative: nobody had visited the client for a year before she did. I would score her 4 out of 5 for the competency “client retention”.",
        "When I probed, she said she would visit key clients more regularly to notice problems earlier. I think this shows good self-awareness. My only concern is that she has not worked with foreign clients before, so we should test her English in the second interview.",
        "Could you add your own scores before Friday so that we can compare them?"
      ],
      closing: "Best regards,",
      signature: ["Tuan Nguyen", "HR Executive, Riverside Trading"]
    },
    glossary: [
      { term: "take over an account", vi: "tiếp nhận quản lý một khách hàng" },
      { term: "guarantee", vi: "đảm bảo, cam kết" },
      { term: "self-awareness", vi: "sự tự nhận thức" },
      { term: "concern", vi: "điều lo ngại" },
      { term: "score", vi: "chấm điểm" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "What was Quynh's task, according to Tuan's notes?",
        options: ["To find new clients", "To keep the client without lowering the price by more than three percent", "To reduce delivery time", "To train the logistics team"],
        answer: 1, explanation: "“Task: To keep the client without lowering the price by more than three percent.”" },
      { id: "r2", type: "choice", prompt: "How does Tuan score Quynh for “client retention”?",
        options: ["2 out of 5", "3 out of 5", "5 out of 5", "4 out of 5"],
        answer: 3, explanation: "“I would score her 4 out of 5 for the competency ‘client retention’.”" },
      { id: "r3", type: "choice", prompt: "What is Tuan's concern?",
        options: ["She has not worked with foreign clients before", "She was late for the interview", "She asked for a high salary", "She has no sales experience"],
        answer: 0, explanation: "“My only concern is that she has not worked with foreign clients before, so we should test her English.”" }
    ]
  },

  grammar: {
    title: "Past perfect and narrative tenses",
    titleVi: "Quá khứ hoàn thành và các thì kể chuyện",
    intro: "Khi kể một ví dụ theo STAR, bạn kể nhiều việc ở quá khứ, việc xảy ra trước, việc đang diễn ra và việc xảy ra sau. Bốn mẫu dưới đây có trong buổi phỏng vấn và email bạn vừa học.",
    patterns: [
      { form: "Quá khứ đơn: việc chính theo thứ tự", use: "Dùng cho chuỗi hành động đã xảy ra, cái nọ sau cái kia.",
        examples: ["I visited the client, asked what they needed and worked with Logistics.", "The client stayed, and we signed a new contract."] },
      { form: "Quá khứ tiếp diễn: bối cảnh, việc đang diễn ra", use: "Nói bối cảnh hoặc việc đang diễn ra thì có việc khác xảy ra.",
        examples: ["I was working for a packaging company.", "I was preparing the proposal when the client called."] },
      { form: "Quá khứ hoàn thành: had + V3  (việc xảy ra trước một mốc / việc quá khứ khác)", use: "Nói việc đã xảy ra trước một việc quá khứ khác. Hay đi với already, by the time, before, when.",
        examples: ["The client had already received a better offer when I took over.", "Nobody had visited them for a year."] },
      { form: "had been + V-ing  (việc đã kéo dài đến một mốc quá khứ)", use: "Nhấn mạnh việc kéo dài trước một mốc quá khứ, hay đi với for / since.",
        examples: ["The client had been buying from us for five years.", "She had been working there since 2020."] }
    ],
    mistakes: [
      { wrong: "When I took over, the client has already received an offer.", right: "When I took over, the client had already received an offer.", note: "Việc xảy ra trước việc quá khứ khác cần quá khứ hoàn thành: had already received, không dùng has already received." },
      { wrong: "The client has been buying for five years when I took over.", right: "The client had been buying for five years when I took over.", note: "Mốc ở quá khứ (when I took over) nên dùng had been, không dùng has been." },
      { wrong: "I had visited the client, and then I had asked what they needed.", right: "I visited the client, and then I asked what they needed.", note: "Chuỗi việc theo thứ tự dùng quá khứ đơn. Chỉ dùng had + V3 cho việc xảy ra TRƯỚC." },
      { wrong: "Nobody has visited them for a year before I arrived.", right: "Nobody had visited them for a year before I arrived.", note: "Việc diễn ra trước thời điểm I arrived (quá khứ) dùng had visited, không dùng has visited." }
    ],
    tip: "Khi trả lời theo STAR, hãy dùng quá khứ tiếp diễn và quá khứ hoàn thành cho phần Situation (bối cảnh, việc đã xảy ra trước), và quá khứ đơn cho Task, Action, Result. Câu trả lời có trình tự thì rõ ràng, người phỏng vấn dễ chấm điểm và so sánh giữa các ứng viên."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "When I took over the account, the client ___ already received a better offer.",
      options: ["has", "had", "was", "did"],
      answer: 1, explanation: "Việc xảy ra trước một mốc quá khứ (when I took over) → quá khứ hoàn thành: had already received." },
    { id: "p2", type: "gap", prompt: "By the time I arrived, they ___ already started to lose trust.",
      options: ["have", "has", "had", "were"],
      answer: 2, explanation: "By the time + quá khứ đơn → mệnh đề chính dùng quá khứ hoàn thành: had already started." },
    { id: "p3", type: "gap", prompt: "The client ___ buying from us for five years when I took over.",
      options: ["has been", "was being", "have been", "had been"],
      answer: 3, explanation: "Việc kéo dài đến một mốc quá khứ → quá khứ hoàn thành tiếp diễn: had been buying." },
    { id: "p4", type: "choice", prompt: "Which sentence is correct?",
      options: ["When I arrived, the client already left.", "When I arrived, the client had already left.", "When I arrived, the client has already left.", "When I arrived, the client had already leave."],
      answer: 1, explanation: "Khách rời đi trước khi tôi đến → had already left." },
    { id: "p5", type: "gap", prompt: "I visited the client ___ I had checked the delivery records.",
      options: ["after", "until", "unless", "because"],
      answer: 0, explanation: "After I had checked: kiểm tra trước, rồi mới đến thăm." },
    { id: "p6", type: "gap", prompt: "A skill or behavior needed to do a job well is a ___.",
      options: ["budget", "pace", "competency", "scale"],
      answer: 2, explanation: "Competency = năng lực cần thiết để làm tốt công việc." },
    { id: "p7", type: "gap", prompt: "A question that asks about real past behavior is a ___ question.",
      options: ["closed", "salary", "hypothetical", "behavioral"],
      answer: 3, explanation: "Behavioral question = câu hỏi hành vi, hỏi về việc người đó đã thật sự làm." },
    { id: "p8", type: "gap", prompt: "In the STAR method, “R” stands for ___.",
      options: ["Reason", "Result", "Rate", "Role"],
      answer: 1, explanation: "STAR = Situation, Task, Action, Result." },
    { id: "p9", type: "choice", prompt: "Which sentence shows the “Action” part of a STAR answer?",
      options: ["I was working for a packaging company.", "My task was to keep the client.", "I visited the client and asked what they needed.", "The client signed a new contract."],
      answer: 2, explanation: "Action = điều bạn đã làm. Câu A là Situation, B là Task, D là Result." },
    { id: "p10", type: "choice", prompt: "Which sentence uses the past perfect correctly to show the earlier event?",
      options: ["The client had left before I called.", "The client left before I have called.", "The client has left before I called.", "The client was leaving before I had call."],
      answer: 0, explanation: "Việc khách rời đi xảy ra trước (had left), việc gọi sau (called)." }
  ],

  writing: {
    title: "Write a STAR example",
    task: "Bạn là Quynh. Sau buổi phỏng vấn, Tuấn đề nghị bạn gửi thêm một ví dụ theo cấu trúc STAR về một lần làm việc dưới áp lực. Viết email gửi Tuấn (120–180 từ), chia rõ bốn phần Situation, Task, Action, Result. Dùng quá khứ hoàn thành ít nhất hai lần ở phần Situation hoặc Action, và nêu kết quả đo lường được.",
    requirements: [
      "Mở đầu bằng lời chào và lời cảm ơn.",
      "Có đủ bốn phần: Situation, Task, Action, Result.",
      "Có ít nhất hai câu dùng quá khứ hoàn thành (had + V3).",
      "Có từ chỉ trình tự (by the time / before / after).",
      "Có kết quả đo lường được (số liệu, phần trăm).",
      "Kết thúc email và ký tên."
    ],
    minWords: 120,
    maxWords: 180,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Dear … / Hi …)", pattern: "\\bdear\\b|\\bhi\\b" },
      { label: "Có đủ Situation / Task / Action / Result", pattern: "situation:[\\s\\S]*task:[\\s\\S]*action:[\\s\\S]*result:" },
      { label: "Có quá khứ hoàn thành (had + V3)", pattern: "\\bhad (already |not |never )?(\\w+ed|been|made|done|lost|received|told|found|taken|seen|given|written|gone|known)\\b" },
      { label: "Có từ chỉ trình tự (by the time / before / after)", pattern: "\\b(by the time|before|after)\\b" },
      { label: "Có số liệu (percent / số)", pattern: "\\b(percent|per cent)\\b|%|\\b\\d+\\b|\\b(two|three|four|five|ten|fifteen|twenty)\\b" },
      { label: "Có lời kết (Best regards …)", pattern: "regards|sincerely|best wishes" }
    ],
    model: [
      "Dear Tuan,",
      "Thank you for the interview. As you suggested, here is another example of working under pressure.",
      "Situation: Last year, my team was preparing a major proposal for a new client. By the time I joined the project, the team had already lost two weeks because the requirements had changed three times.",
      "Task: My responsibility was to finish the price quotation and the presentation within five days.",
      "Action: First, I made a list of the open questions, and I called the client to confirm them. After I had received the answers, I divided the work among four colleagues and checked the figures myself every evening.",
      "Result: We sent the proposal one day early, and the client signed the contract two weeks later. The contract was worth about fifteen percent of our annual sales.",
      "Thank you for your time.",
      "Best regards,",
      "Quynh Le"
    ]
  },

  review: {
    keyPhrases: [
      { en: "Tell us about a time when you nearly lost an important client.", vi: "Hãy kể về một lần bạn suýt mất một khách hàng quan trọng." },
      { en: "The client had already received a better offer when I took over.", vi: "Khi tôi tiếp nhận, khách hàng đã nhận được một lời chào tốt hơn." },
      { en: "Nobody had visited them for a year.", vi: "Một năm nay chưa ai đến thăm họ." },
      { en: "We use the STAR method to compare candidates fairly.", vi: "Chúng tôi dùng phương pháp STAR để so sánh ứng viên một cách công bằng." },
      { en: "Let me probe a bit. What would you do differently?", vi: "Để tôi hỏi sâu thêm. Bạn sẽ làm khác đi điều gì?" },
      { en: "The result was measurable: orders increased by twenty percent.", vi: "Kết quả đo lường được: đơn hàng tăng hai mươi phần trăm." }
    ]
  }
});
