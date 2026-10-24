/* =========================================================
   B1 · Module 2 (Employee Lifecycle) · Bài 2
   "Performance check-ins"
   Nối tiếp B1-M2-L1: Thao đã được xác nhận làm chính thức (đầu tháng
   Sáu). Vài tuần sau, David họp một-một hằng tháng với Thao ở văn phòng
   tầng 3: khen việc thăm khách, góp ý về thời gian làm báo giá (mất ba
   ngày), gợi ý dùng mẫu báo giá của Mai và dành hai giờ sáng thứ Hai.
   Mục tiêu tháng sau của Thao: thăm năm khách hàng tiềm năng ở Quảng Ninh.
   ========================================================= */
window.EOH.registerLesson({
  id: "b1-m2-l2",
  reviewStatus: "approved", // Linh duyệt ngày 23/10/2026
  duration: "40–50 phút",
  scenario: "Chị Thảo đã được xác nhận làm chính thức. Vài tuần sau, David họp một-một với chị ở văn phòng tầng 3 để trao đổi kết quả công việc tháng này. David khen việc thăm khách, rồi nhẹ nhàng góp ý về thời gian làm báo giá và gợi ý cách làm nhanh hơn. Sau buổi họp, David gửi email tóm tắt.",

  objectives: [
    "Hiểu và dùng 10 từ vựng thường gặp trong buổi trao đổi kết quả công việc (check-in).",
    "Nghe buổi trao đổi, ghi lại điểm cần cải thiện, gợi ý của quản lý và mục tiêu tháng sau.",
    "Đọc email tóm tắt buổi trao đổi, tìm điểm tốt, điểm cần cải thiện và việc cần làm.",
    "Góp ý và gợi ý nhẹ nhàng bằng câu điều kiện loại 2 (If I were you, I would…; It would be better if you…) và I'd suggest + V-ing.",
    "Viết email góp ý nhẹ nhàng cho đồng nghiệp bằng các mẫu câu này."
  ],

  vocabulary: [
    { word: "check-in", ipa: "/ˈtʃek ɪn/", pos: "noun", meaning: "buổi trao đổi ngắn, định kỳ giữa quản lý và nhân viên",
      example: "David has a monthly check-in with each person in the team.", exampleVi: "David có buổi trao đổi hằng tháng với từng người trong nhóm." },
    { word: "constructive", ipa: "/kənˈstrʌktɪv/", pos: "adjective", meaning: "mang tính xây dựng",
      example: "Thank you for the constructive feedback.", exampleVi: "Cảm ơn anh về góp ý mang tính xây dựng." },
    { word: "area for improvement", ipa: "/ˈeriə fɔːr ɪmˈpruːvmənt/", pos: "noun phrase", meaning: "điểm cần cải thiện",
      example: "One area for improvement is the price quotations.", exampleVi: "Một điểm cần cải thiện là các bảng báo giá." },
    { word: "workload", ipa: "/ˈwɜːrkloʊd/", pos: "noun", meaning: "khối lượng công việc",
      example: "My workload is heavy at the moment.", exampleVi: "Khối lượng công việc của tôi hiện đang nặng." },
    { word: "prioritize", ipa: "/praɪˈɔːrətaɪz/", pos: "verb", meaning: "ưu tiên, sắp xếp việc quan trọng trước",
      example: "I would prioritize the biggest clients first.", exampleVi: "Tôi sẽ ưu tiên những khách hàng lớn nhất trước." },
    { word: "turnaround time", ipa: "/ˈtɜːrnəraʊnd taɪm/", pos: "noun", meaning: "thời gian hoàn thành một yêu cầu",
      example: "The turnaround time for quotations is three days.", exampleVi: "Thời gian làm báo giá là ba ngày." },
    { word: "set a goal", ipa: "/set ə ɡoʊl/", pos: "phrase", meaning: "đặt mục tiêu",
      example: "Could you set one goal for next month?", exampleVi: "Bạn có thể đặt một mục tiêu cho tháng sau không?" },
    { word: "follow up", ipa: "/ˈfɑːloʊ ʌp/", pos: "phrasal verb", meaning: "theo dõi tiếp, quay lại hỏi kết quả",
      example: "We will follow up at the next check-in.", exampleVi: "Chúng ta sẽ theo dõi tiếp ở buổi trao đổi lần sau." },
    { word: "suggest", ipa: "/səɡˈdʒest/", pos: "verb", meaning: "gợi ý",
      example: "I'd suggest blocking two hours on Monday.", exampleVi: "Tôi gợi ý dành hai giờ vào sáng thứ Hai." },
    { word: "supportive", ipa: "/səˈpɔːrtɪv/", pos: "adjective", meaning: "biết hỗ trợ, ủng hộ",
      example: "A supportive manager helps new employees learn faster.", exampleVi: "Một quản lý biết hỗ trợ giúp nhân viên mới học nhanh hơn." }
  ],

  pronunciation: {
    groups: [
      {
        title: "Trọng âm của từ",
        text: "Những từ dưới đây hay gặp trong buổi trao đổi kết quả công việc. Âm tiết in hoa là âm đọc to và dài hơn.",
        items: [
          { word: "constructive", marked: "con·STRUC·tive" },
          { word: "improvement", marked: "im·PROVE·ment" },
          { word: "prioritize", marked: "pri·OR·i·tize", note: "Nhấn âm tiết thứ hai, không phải âm đầu." },
          { word: "supportive", marked: "sup·POR·tive" },
          { word: "workload", marked: "WORK·load", note: "Danh từ ghép: nhấn từ đầu." },
          { word: "suggest", marked: "sug·GEST", note: "Có âm /ɡdʒ/ ở giữa: /səɡˈdʒest/." }
        ]
      },
      {
        title: "I'd và would đọc rút gọn",
        text: "Trong câu góp ý lịch sự, would thường rút gọn: I'd /aɪd/, it'd /ˈɪtəd/. Đọc nhẹ để câu nghe mềm mại; từ chính (suggest, better) được nhấn.",
        items: [
          { word: "I'd suggest", marked: "/aɪd/ sug·GEST" },
          { word: "If I were you", marked: "if I /wɜːr/ YOU", note: "were đọc yếu /wər/ trong câu." }
        ]
      }
    ],
    sentences: [
      "It would be better if you sent each quotation within one day.",
      "I'd suggest blocking two hours on Monday morning.",
      "If I were you, I would prioritize the biggest clients first."
    ]
  },

  listening: {
    title: "A monthly check-in",
    setting: "Vài tuần sau khi chị Thảo được xác nhận làm chính thức, văn phòng của David (tầng 3). David họp một-một hằng tháng với chị Thảo.",
    speakers: { david: "David (Sales Manager)", thao: "Thao (Sales Executive)" },
    lines: [
      { s: "david", text: "Thanks for coming, Thao. This is our monthly check-in. First, congratulations on a very good start.",
        vi: "Cảm ơn Thảo đã đến. Đây là buổi trao đổi hằng tháng của chúng ta. Trước hết, chúc mừng chị đã khởi đầu rất tốt." },
      { s: "thao", text: "Thank you. I'm enjoying the job, but my workload is heavy at the moment.",
        vi: "Cảm ơn anh. Em thích công việc này, nhưng khối lượng công việc hiện giờ khá nặng." },
      { s: "david", text: "I know. Your client visits are excellent. Two clients told me they love your follow-up calls. One area for improvement is the price quotations. They take three days.",
        vi: "Tôi biết. Các chuyến thăm khách của chị rất tốt. Hai khách hàng nói với tôi rằng họ thích những cuộc gọi hỏi thăm của chị. Một điểm cần cải thiện là bảng báo giá. Chúng mất ba ngày." },
      { s: "thao", text: "I know. If I had a template, I could finish them faster.",
        vi: "Em biết. Nếu em có một mẫu sẵn, em có thể làm xong nhanh hơn." },
      { s: "david", text: "That's a good idea. It would be better if you sent each quotation within one day. Mai has a template you could use.",
        vi: "Ý hay đấy. Sẽ tốt hơn nếu chị gửi mỗi bảng báo giá trong vòng một ngày. Mai có một mẫu chị có thể dùng." },
      { s: "thao", text: "Thank you. If I had more time on Mondays, I would prepare all the quotations for the week.",
        vi: "Cảm ơn anh. Nếu em có nhiều thời gian hơn vào thứ Hai, em sẽ chuẩn bị tất cả báo giá cho cả tuần." },
      { s: "david", text: "I'd suggest blocking two hours on Monday morning. And if I were you, I would prioritize the biggest clients first.",
        vi: "Tôi gợi ý chị dành hai giờ vào sáng thứ Hai. Và nếu là chị, tôi sẽ ưu tiên những khách hàng lớn nhất trước." },
      { s: "thao", text: "That sounds sensible. I'll try that.",
        vi: "Nghe hợp lý ạ. Em sẽ thử." },
      { s: "david", text: "What about your goals for next month? Could you set one goal for yourself?",
        vi: "Còn mục tiêu tháng sau thì sao? Chị có thể tự đặt một mục tiêu cho mình không?" },
      { s: "thao", text: "I'd like to visit five new potential clients in Quang Ninh.",
        vi: "Em muốn đến thăm năm khách hàng tiềm năng mới ở Quảng Ninh." },
      { s: "david", text: "Good. Let's follow up at the next check-in. And remember, if you need support, ask me or Peter.",
        vi: "Tốt. Chúng ta sẽ theo dõi tiếp ở buổi trao đổi lần sau. Và nhớ nhé, nếu cần hỗ trợ, cứ hỏi tôi hoặc Peter." },
      { s: "thao", text: "I will. Thanks for the constructive feedback.",
        vi: "Em sẽ làm vậy. Cảm ơn anh vì những góp ý mang tính xây dựng." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "What is the area for improvement?",
        options: ["Client visits", "Follow-up calls", "The price quotations take three days", "Reports are always late"],
        answer: 2, explanation: "David nói: “One area for improvement is the price quotations. They take three days.” Việc thăm khách và gọi hỏi thăm là điểm David khen." },
      { id: "l2", type: "choice", prompt: "What does David suggest?",
        options: ["Blocking two hours on Monday morning for quotations", "Visiting fewer clients", "Hiring a new assistant", "Asking Peter to write the quotations"],
        answer: 0, explanation: "“I'd suggest blocking two hours on Monday morning.” David còn gợi ý ưu tiên khách hàng lớn trước và dùng mẫu của Mai." },
      { id: "l3", type: "choice", prompt: "What goal does Thao set for next month?",
        options: ["Send all quotations in one day", "Learn a new template", "Work fewer hours", "Visit five new potential clients in Quang Ninh"],
        answer: 3, explanation: "Chị Thảo nói: “I'd like to visit five new potential clients in Quang Ninh.”" }
    ]
  },

  reading: {
    title: "A summary of the check-in",
    intro: "Email David gửi chị Thảo sau buổi trao đổi. Đọc và tìm điểm tốt, điểm cần cải thiện, gợi ý và mục tiêu.",
    email: {
      from: "David Brown <david.brown@riverside-trading.example>",
      to: "Thao Ngo",
      date: "Friday",
      subject: "Our check-in – summary",
      greeting: "Dear Thao,",
      paragraphs: [
        "Thank you for our check-in today. Here is a short summary.",
        "What is going well: your client visits are excellent, and two clients have said they like your follow-up calls. Your Friday reports are always on time.",
        "One area for improvement is the turnaround time for price quotations. At the moment it is about three days. It would be better if you sent each quotation within one day. To help with this:"
      ],
      list: [
        "I'd suggest blocking two hours on Monday morning for quotations.",
        "Mai has a template you could use. Please ask her for it.",
        "If I were you, I would prioritize the biggest clients first."
      ],
      after: [
        "Your goal for next month is to visit five new potential clients in Quang Ninh. We will follow up at our next check-in. If you need any support before then, please ask me or Peter."
      ],
      closing: "Best regards,",
      signature: ["David Brown", "Sales Manager, Riverside Trading"]
    },
    glossary: [
      { term: "going well", vi: "đang diễn ra tốt" },
      { term: "at the moment", vi: "hiện tại, lúc này" },
      { term: "block (time)", vi: "dành riêng thời gian trong lịch" },
      { term: "template", vi: "mẫu có sẵn" },
      { term: "potential clients", vi: "khách hàng tiềm năng" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "Why is David writing to Thao?",
        options: ["To summarize their monthly check-in", "To invite her to a probation review", "To tell her she is promoted", "To change her sales target"],
        answer: 0, explanation: "“Thank you for our check-in today. Here is a short summary.” Chị Thảo đã qua thử việc nên không còn đánh giá thử việc." },
      { id: "r2", type: "choice", prompt: "Who has a quotation template that Thao could use?",
        options: ["Peter", "Lan", "Mai", "Tuan"],
        answer: 2, explanation: "“Mai has a template you could use. Please ask her for it.”" },
      { id: "r3", type: "choice", prompt: "Which statement is TRUE?",
        options: ["Thao's Friday reports are often late.", "David suggests blocking two hours on Monday morning.", "The quotations take one day at the moment.", "Thao should visit clients in Hanoi."],
        answer: 1, explanation: "“I'd suggest blocking two hours on Monday morning for quotations.” Báo cáo thứ Sáu luôn đúng hạn, báo giá hiện mất ba ngày, và mục tiêu là khách hàng ở Quảng Ninh." }
    ]
  },

  grammar: {
    title: "Giving gentle feedback",
    titleVi: "Góp ý nhẹ nhàng: câu điều kiện loại 2 và I'd suggest",
    intro: "Khi góp ý cho đồng nghiệp hay nhân viên, nói thẳng “Bạn làm chậm” nghe nặng nề. Bốn mẫu câu dưới đây giúp góp ý mềm mại hơn; chúng có trong buổi trao đổi và email bạn vừa học.",
    patterns: [
      { form: "If + quá khứ đơn, would + động từ nguyên mẫu", use: "Nói điều không có thật hoặc ít có khả năng ở hiện tại, và kết quả của nó. Mệnh đề if dùng quá khứ đơn nhưng nghĩa là hiện tại.",
        examples: ["If I had a template, I could finish faster.", "If I had more time, I would prepare all the quotations."] },
      { form: "If I were you, I would + động từ", use: "Đưa lời khuyên lịch sự. Với I / he / she, người nói thường dùng were thay was trong mẫu này.",
        examples: ["If I were you, I would prioritize the biggest clients.", "If I were you, I would ask Mai for the template."] },
      { form: "It would be better if + chủ ngữ + quá khứ đơn", use: "Góp ý nhẹ: nói điều bạn mong muốn mà không phê bình trực tiếp.",
        examples: ["It would be better if you sent each quotation within one day.", "It would be better if we started earlier."] },
      { form: "I'd suggest + V-ing   /   I'd suggest (that) you + động từ", use: "Gợi ý cách làm. Sau suggest dùng V-ing hoặc that + chủ ngữ + động từ, không dùng to + động từ.",
        examples: ["I'd suggest blocking two hours on Monday morning.", "I'd suggest that you ask Peter first."] }
    ],
    mistakes: [
      { wrong: "If I would have a template, I could finish faster.", right: "If I had a template, I could finish faster.", note: "Mệnh đề if dùng quá khứ đơn, không dùng would." },
      { wrong: "If I am you, I would ask Mai.", right: "If I were you, I would ask Mai.", note: "Lời khuyên giả định: dùng were, không dùng am." },
      { wrong: "It would be better if you will send it within one day.", right: "It would be better if you sent it within one day.", note: "Sau it would be better if dùng quá khứ đơn, không dùng will." },
      { wrong: "I suggest to use the template.", right: "I suggest using the template.", note: "Sau suggest dùng V-ing, không dùng to + động từ." }
    ],
    tip: "Cách góp ý tốt: nói điểm tốt trước, nêu một điểm cần cải thiện bằng câu mềm (It would be better if…), rồi đưa gợi ý cụ thể (I'd suggest…). Tránh nói “You always…” hoặc “You never…”. Chỉ nói về việc làm, không nói về con người."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "If I ___ a template, I could finish the quotations faster.",
      options: ["have", "had", "will have", "would have"],
      answer: 1, explanation: "Câu điều kiện loại 2: If + quá khứ đơn (had), would / could + động từ. Không dùng would trong mệnh đề if." },
    { id: "p2", type: "gap", prompt: "It would be better if you ___ each quotation within one day.",
      options: ["send", "sending", "sent", "will send"],
      answer: 2, explanation: "Sau “it would be better if” dùng quá khứ đơn: sent. Không dùng will hoặc dạng nguyên mẫu." },
    { id: "p3", type: "gap", prompt: "If I ___ you, I would start with the biggest clients.",
      options: ["were", "am", "be", "would be"],
      answer: 0, explanation: "Mẫu lời khuyên cố định: If I were you, I would… Không dùng am hay be trong mẫu này." },
    { id: "p4", type: "gap", prompt: "I'd suggest ___ two hours on Monday morning for quotations.",
      options: ["to block", "blocking", "block", "blocked"],
      answer: 1, explanation: "Sau suggest dùng V-ing: I'd suggest blocking. Không dùng “suggest to + động từ”." },
    { id: "p5", type: "choice", prompt: "Which sentence is the most polite way to give feedback?",
      options: ["You are too slow with quotations.", "Send quotations faster.", "You must change this.", "It would be better if you sent quotations faster."],
      answer: 3, explanation: "“It would be better if…” nói điều mong muốn, không phê bình trực tiếp. Ba câu còn lại nghe như ra lệnh hoặc chê." },
    { id: "p6", type: "gap", prompt: "Your workload is heavy, so it is important to ___ the biggest clients first.",
      options: ["prioritize", "assess", "enclose", "decline"],
      answer: 0, explanation: "Prioritize = ưu tiên việc quan trọng trước. Assess là đánh giá, enclose là đính kèm, decline là từ chối." },
    { id: "p7", type: "gap", prompt: "A ___ comment helps you improve and is said kindly.",
      options: ["convincing", "reliable", "constructive", "potential"],
      answer: 2, explanation: "Constructive = mang tính xây dựng, giúp cải thiện. Convincing là thuyết phục, reliable là đáng tin cậy." },
    { id: "p8", type: "gap", prompt: "Two days is too long. The ___ time for quotations should be one day.",
      options: ["closing", "start", "notice", "turnaround"],
      answer: 3, explanation: "Turnaround time = thời gian hoàn thành một yêu cầu. Closing time là giờ đóng cửa, notice là thời gian báo trước." },
    { id: "p9", type: "choice", context: "Thao says: “If I had more time on Mondays, I would prepare all the quotations.”", prompt: "What does this sentence show?",
      options: ["She has a lot of time now.", "She does not have enough time on Mondays now.", "She will have more time tomorrow.", "She already prepares all quotations."],
      answer: 1, explanation: "Câu điều kiện loại 2 nói điều không có thật ở hiện tại: bây giờ chị ấy không có đủ thời gian vào thứ Hai." },
    { id: "p10", type: "gap", prompt: "If she ___ more support, she would finish faster.",
      options: ["gets", "will get", "got", "is getting"],
      answer: 2, explanation: "Câu điều kiện loại 2: If + quá khứ đơn (got), would + động từ. Hiện tại đơn và will dùng cho điều kiện loại 1." }
  ],

  writing: {
    title: "Give gentle feedback to a colleague",
    task: "Bạn là trưởng nhóm. Đồng nghiệp tên Ha làm việc rất tốt (báo cáo luôn rõ ràng, giúp đỡ cả nhóm) nhưng thường đến muộn vài phút trong buổi họp nhóm sáng thứ Hai. Viết email gửi Ha (80–120 từ): cảm ơn và khen điểm tốt, góp ý nhẹ nhàng, gợi ý cách khắc phục, và hỏi xem bạn có thể giúp gì.",
    requirements: [
      "Mở đầu bằng lời chào và lời khen hoặc cảm ơn.",
      "Có câu góp ý với It would be better if + quá khứ đơn.",
      "Có câu gợi ý với I'd suggest + V-ing.",
      "Có câu lời khuyên If I were you, I would…",
      "Hỏi xem bạn có thể giúp gì.",
      "Kết thúc email và ký tên."
    ],
    minWords: 80,
    maxWords: 120,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Dear … / Hi …)", pattern: "\\bdear\\b|\\bhi\\b" },
      { label: "Có lời cảm ơn hoặc khen (thank / appreciate / great…)", pattern: "\\b(thank|appreciate|great|excellent|good)\\b" },
      { label: "Có It would be better if", pattern: "it would be better if" },
      { label: "Có I'd suggest / I would suggest", pattern: "\\b(i'd|i’d|i would) suggest\\b" },
      { label: "Có If I were you", pattern: "if i were you" },
      { label: "Có lời kết (Best regards …)", pattern: "regards|sincerely|best wishes" }
    ],
    model: [
      "Dear Ha,",
      "Thank you for your hard work this month. Your reports are always clear, and the team really appreciates your help.",
      "There is one thing I would like to discuss. You often arrive a few minutes late for the Monday team meeting. It would be better if you arrived on time, because we start with important news. I'd suggest leaving home ten minutes earlier on Mondays. If I were you, I would also set an alarm on my phone for the meeting.",
      "Please tell me if there is anything I can do to help.",
      "Best regards,",
      "Minh"
    ]
  },

  review: {
    keyPhrases: [
      { en: "It would be better if you sent each quotation within one day.", vi: "Sẽ tốt hơn nếu chị gửi mỗi bảng báo giá trong vòng một ngày." },
      { en: "I'd suggest blocking two hours on Monday morning.", vi: "Tôi gợi ý dành hai giờ vào sáng thứ Hai." },
      { en: "If I were you, I would prioritize the biggest clients.", vi: "Nếu là chị, tôi sẽ ưu tiên những khách hàng lớn nhất." },
      { en: "If I had a template, I could finish faster.", vi: "Nếu có mẫu sẵn, tôi có thể làm nhanh hơn." },
      { en: "One area for improvement is the price quotations.", vi: "Một điểm cần cải thiện là các bảng báo giá." },
      { en: "Thanks for the constructive feedback.", vi: "Cảm ơn vì những góp ý mang tính xây dựng." }
    ]
  }
});
