/* =========================================================
   B1 · Module 2 (Employee Lifecycle) · Bài 1
   "Probation and confirmation"
   Nối tiếp B1-M1: Thao Ngo (Sales Executive mới, báo cáo cho David) đã
   đi làm từ đầu tháng Tư. Gần giữa tháng Năm, chị Lan, David và Tuấn
   chuẩn bị buổi đánh giá thử việc (thử việc 60 ngày, hết vào đầu
   tháng Sáu). Người hướng dẫn của Thao là Peter. Thời gian nói áng chừng.
   ========================================================= */
window.EOH.registerLesson({
  id: "b1-m2-l1",
  reviewStatus: "approved", // Linh duyệt ngày 23/10/2026
  duration: "40–50 phút",
  scenario: "Thao Ngo đã làm Sales Executive được hơn một tháng và thời gian thử việc sẽ hết vào đầu tháng Sáu. Chị Lan, David và Tuấn họp để chuẩn bị buổi đánh giá thử việc. Sau đó Tuấn gửi email mời chị Thao tham dự buổi đánh giá vào tuần sau.",

  objectives: [
    "Hiểu và dùng 10 từ vựng thường gặp khi đánh giá thử việc và xác nhận nhân viên.",
    "Nghe cuộc họp chuẩn bị đánh giá thử việc, ghi lại tiêu chí và việc sẽ làm nếu đạt hoặc chưa đạt.",
    "Đọc email mời họp đánh giá thử việc, tìm đúng nội dung buổi họp và việc cần chuẩn bị.",
    "Dùng câu điều kiện loại 1 (If + hiện tại đơn, will + động từ) và unless để nói điều có thể xảy ra trong tương lai.",
    "Viết email trả lời lời mời họp đánh giá thử việc bằng câu điều kiện loại 1."
  ],

  vocabulary: [
    { word: "probation review", ipa: "/proʊˈbeɪʃən rɪˈvjuː/", pos: "noun", meaning: "buổi đánh giá cuối thời gian thử việc",
      example: "Thao's probation review is next week.", exampleVi: "Buổi đánh giá thử việc của chị Thảo diễn ra vào tuần sau." },
    { word: "confirm", ipa: "/kənˈfɜːrm/", pos: "verb", meaning: "xác nhận (nhân viên) làm chính thức",
      example: "If she reaches her target, we will confirm her.", exampleVi: "Nếu chị ấy đạt chỉ tiêu, chúng tôi sẽ xác nhận chị ấy làm chính thức." },
    { word: "labor contract", ipa: "/ˈleɪbər ˈkɑːntrækt/", pos: "noun", meaning: "hợp đồng lao động",
      example: "Lan will prepare the labor contract.", exampleVi: "Chị Lan sẽ chuẩn bị hợp đồng lao động." },
    { word: "on track", ipa: "/ɑːn træk/", pos: "adjective phrase", meaning: "đang đi đúng hướng, đúng tiến độ",
      example: "Thao is on track with her sales target.", exampleVi: "Chị Thảo đang đạt đúng tiến độ chỉ tiêu doanh số." },
    { word: "assess", ipa: "/əˈses/", pos: "verb", meaning: "đánh giá (năng lực, kết quả)",
      example: "David assesses her reports and her teamwork.", exampleVi: "David đánh giá các báo cáo và tinh thần làm việc nhóm của chị ấy." },
    { word: "recommend", ipa: "/ˌrekəˈmend/", pos: "verb", meaning: "đề xuất, giới thiệu",
      example: "I will recommend confirming her.", exampleVi: "Tôi sẽ đề xuất xác nhận chị ấy làm chính thức." },
    { word: "mentor", ipa: "/ˈmentɔːr/", pos: "noun", meaning: "người hướng dẫn, người kèm cặp nhân viên mới",
      example: "Peter is Thao's mentor.", exampleVi: "Peter là người hướng dẫn của chị Thảo." },
    { word: "milestone", ipa: "/ˈmaɪlstoʊn/", pos: "noun", meaning: "cột mốc quan trọng",
      example: "Her first big contract was an important milestone.", exampleVi: "Hợp đồng lớn đầu tiên của chị ấy là một cột mốc quan trọng." },
    { word: "progress", ipa: "/ˈprɑːɡres/", pos: "noun", meaning: "tiến bộ, tiến độ",
      example: "We want to talk about your progress so far.", exampleVi: "Chúng tôi muốn trao đổi về tiến bộ của bạn cho đến nay." },
    { word: "expectation", ipa: "/ˌekspekˈteɪʃən/", pos: "noun", meaning: "kỳ vọng, điều mong đợi",
      example: "The manager explains his expectations in the first week.", exampleVi: "Người quản lý giải thích những kỳ vọng của mình trong tuần đầu." }
  ],

  pronunciation: {
    groups: [
      {
        title: "Trọng âm của từ",
        text: "Những từ dưới đây hay gặp khi nói về thử việc. Âm tiết in hoa là âm đọc to và dài hơn.",
        items: [
          { word: "probation", marked: "pro·BA·tion", note: "Từ tận cùng bằng -tion: nhấn âm tiết ngay trước -tion." },
          { word: "confirm", marked: "con·FIRM", note: "Động từ hai âm tiết: nhấn âm tiết sau." },
          { word: "assess", marked: "as·SESS" },
          { word: "recommend", marked: "rec·om·MEND", note: "Nhấn âm tiết cuối." },
          { word: "mentor", marked: "MEN·tor", note: "Danh từ hai âm tiết: nhấn âm tiết đầu." },
          { word: "milestone", marked: "MILE·stone" }
        ]
      },
      {
        title: "Dạng rút gọn I'll / we'll / she'll",
        text: "Trong câu điều kiện, will thường rút gọn: I'll /aɪl/, we'll /wiːl/, she'll /ʃiːl/. Từ chính của câu vẫn được nhấn.",
        items: [
          { word: "I'll", marked: "/aɪl/", note: "If it goes well, I'll recommend her." },
          { word: "we'll", marked: "/wiːl/", note: "If she reaches it, we'll confirm her." }
        ]
      }
    ],
    sentences: [
      "If she reaches the target, I'll recommend confirming her.",
      "If the review goes well, Lan will prepare the contract.",
      "We will not decide unless we talk about the reasons first."
    ]
  },

  listening: {
    title: "Planning the probation review",
    setting: "Giữa tháng Năm, Room 301. Chị Lan, David và Tuấn chuẩn bị buổi đánh giá thử việc cho chị Thảo.",
    speakers: { lan: "Lan (Senior HR Officer)", tuan: "Tuan (HR Assistant)", david: "David (Sales Manager)" },
    lines: [
      { s: "lan", text: "Thanks for your time, David. Thao's probation ends in early June, so it's time to plan her probation review.",
        vi: "Cảm ơn anh đã dành thời gian, David. Thử việc của Thảo kết thúc vào đầu tháng Sáu, nên đã đến lúc lên kế hoạch cho buổi đánh giá." },
      { s: "david", text: "She's doing well. She's on track with her sales target for the first two months.",
        vi: "Chị ấy làm tốt. Chị ấy đang đúng tiến độ chỉ tiêu doanh số của hai tháng đầu." },
      { s: "lan", text: "Good. What are the key points for the review?",
        vi: "Tốt. Những điểm chính của buổi đánh giá là gì?" },
      { s: "david", text: "First, the sales target. If she reaches seventy percent of the target by the end of probation, I'll recommend confirming her.",
        vi: "Trước hết là chỉ tiêu doanh số. Nếu chị ấy đạt bảy mươi phần trăm chỉ tiêu vào cuối thời gian thử việc, tôi sẽ đề xuất xác nhận chị ấy." },
      { s: "tuan", text: "And what if she doesn't reach it?",
        vi: "Còn nếu chị ấy không đạt thì sao ạ?" },
      { s: "lan", text: "Then we'll talk about the reasons first. If there is a good reason, like a late start, we'll consider it. We don't decide only by the number.",
        vi: "Khi đó chúng ta sẽ bàn về lý do trước. Nếu có lý do chính đáng, như bắt đầu muộn, chúng ta sẽ cân nhắc. Chúng ta không quyết định chỉ dựa vào con số." },
      { s: "david", text: "Right. I also assess her reports and her teamwork. Her Friday reports are always on time.",
        vi: "Đúng. Tôi cũng đánh giá các báo cáo và tinh thần làm việc nhóm của chị ấy. Báo cáo thứ Sáu của chị ấy lúc nào cũng đúng hạn." },
      { s: "lan", text: "Who is her mentor?",
        vi: "Ai là người hướng dẫn của chị ấy?" },
      { s: "david", text: "Peter. If she has any questions, she asks him first, then me.",
        vi: "Peter. Nếu chị ấy có câu hỏi, chị ấy hỏi Peter trước, rồi mới hỏi tôi." },
      { s: "lan", text: "Good. If the review goes well, I'll prepare the labor contract, and Thao will sign it before the probation ends.",
        vi: "Tốt. Nếu buổi đánh giá suôn sẻ, tôi sẽ chuẩn bị hợp đồng lao động và Thảo sẽ ký trước khi hết thử việc." },
      { s: "tuan", text: "Shall I invite her to the review meeting?",
        vi: "Em mời chị ấy đến buổi họp đánh giá nhé ạ?" },
      { s: "lan", text: "Yes, please. Tell her it's an open and friendly meeting. If she has any questions, she can ask us then.",
        vi: "Ừ, nhờ em. Nói với chị ấy rằng đây là buổi họp cởi mở và thân thiện. Nếu chị ấy có câu hỏi thì có thể hỏi chúng ta lúc đó." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "How is Thao's progress with her sales target?",
        options: ["She is behind her target", "She is on track with her target", "She has not started yet", "She has already signed the contract"],
        answer: 1, explanation: "David nói: “She's on track with her sales target for the first two months.” On track = đang đúng tiến độ." },
      { id: "l2", type: "choice", prompt: "What will David do if Thao reaches seventy percent of the target?",
        options: ["Recommend confirming her", "Extend her probation", "End her contract", "Change her mentor"],
        answer: 0, explanation: "“If she reaches seventy percent of the target by the end of probation, I'll recommend confirming her.” Không ai nhắc đến việc kéo dài thử việc hay đổi người hướng dẫn." },
      { id: "l3", type: "choice", prompt: "Who is Thao's mentor?",
        options: ["Lan", "Tuan", "David", "Peter"],
        answer: 3, explanation: "Khi chị Lan hỏi “Who is her mentor?”, David trả lời: “Peter.” Chị Thảo hỏi Peter trước, rồi mới hỏi David." }
    ]
  },

  reading: {
    title: "An invitation to the review meeting",
    intro: "Email Tuấn gửi chị Thảo mời tham dự buổi đánh giá thử việc. Đọc và tìm nội dung buổi họp cùng những việc chị cần làm.",
    email: {
      from: "Tuan Nguyen <tuan.nguyen@riverside-trading.example>",
      to: "Thao Ngo",
      date: "Monday",
      subject: "Your probation review",
      greeting: "Dear Thao,",
      paragraphs: [
        "Your probation will end in early June. Lan and David would like to meet you for your probation review next Thursday at 10:00 in Room 301. The meeting will take about 30 minutes. It is an open and friendly meeting. We will talk about:"
      ],
      list: [
        "your progress against the sales target",
        "your Friday reports and your teamwork",
        "what you have learned so far and what support you need"
      ],
      after: [
        "If you reach your target, David will recommend confirming you, and Lan will prepare your labor contract. Please bring your sales figures and your own notes.",
        "Unless you tell me otherwise, I will book Room 301 for you. If you cannot attend, please let me know by tomorrow."
      ],
      closing: "Best regards,",
      signature: ["Tuan Nguyen", "HR Assistant, Riverside Trading"]
    },
    glossary: [
      { term: "against (the target)", vi: "so với (chỉ tiêu)" },
      { term: "so far", vi: "cho đến nay" },
      { term: "support", vi: "sự hỗ trợ" },
      { term: "sales figures", vi: "số liệu doanh số" },
      { term: "unless you tell me otherwise", vi: "trừ khi bạn báo khác" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "Why is Tuan writing to Thao?",
        options: ["To invite her to her probation review", "To offer her a new job", "To tell her she is confirmed", "To ask her to write a report"],
        answer: 0, explanation: "“Lan and David would like to meet you for your probation review.” Thư chưa nói là chị đã được xác nhận; điều đó còn tùy kết quả." },
      { id: "r2", type: "choice", prompt: "What will happen if Thao reaches her target?",
        options: ["Tuan will book a new room", "Peter will become her manager", "She will finish probation immediately", "David will recommend confirming her and Lan will prepare her contract"],
        answer: 3, explanation: "“If you reach your target, David will recommend confirming you, and Lan will prepare your labor contract.”" },
      { id: "r3", type: "choice", prompt: "Which statement is TRUE?",
        options: ["The meeting will take about two hours.", "The meeting will take about 30 minutes.", "The meeting is on Friday.", "Thao must bring her contract."],
        answer: 1, explanation: "“The meeting will take about 30 minutes.” Buổi họp vào thứ Năm tuần sau; chị Thảo mang số liệu doanh số và ghi chú, không phải hợp đồng." }
    ]
  },

  grammar: {
    title: "First conditional",
    titleVi: "Câu điều kiện loại 1: nói về điều có thể xảy ra",
    intro: "Khi nói về điều có thể xảy ra trong tương lai và kết quả của nó, dùng câu điều kiện loại 1. Bốn mẫu dưới đây có trong cuộc họp và email bạn vừa học.",
    patterns: [
      { form: "If + hiện tại đơn, will + động từ nguyên mẫu", use: "Điều kiện có thể xảy ra và kết quả tương lai. Mệnh đề if dùng hiện tại đơn, không dùng will.",
        examples: ["If she reaches the target, we will confirm her.", "If the review goes well, Lan will prepare the contract."] },
      { form: "Unless + hiện tại đơn, … (unless = if … not)", use: "Nói điều kiện phủ định: “trừ khi”. Sau unless không dùng thêm not.",
        examples: ["Unless you tell me otherwise, I will book Room 301.", "We won't confirm her unless she reaches the target."] },
      { form: "If + hiện tại đơn, can / may / might / please + động từ", use: "Mệnh đề chính có thể dùng can, may, might (khả năng) hoặc câu mệnh lệnh lịch sự.",
        examples: ["If you have any questions, you can ask us.", "If you cannot attend, please let me know."] },
      { form: "If hay when?", use: "If = có thể có, có thể không. When = chắc chắn sẽ xảy ra. Đừng nhầm hai từ này.",
        examples: ["If she passes probation, she will sign a contract. (chưa chắc)", "When the probation ends, she will start the new contract. (chắc chắn hết thử việc)"] }
    ],
    mistakes: [
      { wrong: "If she will reach the target, we will confirm her.", right: "If she reaches the target, we will confirm her.", note: "Mệnh đề if không dùng will; dùng hiện tại đơn." },
      { wrong: "If she reaches the target, we confirmed her.", right: "If she reaches the target, we will confirm her.", note: "Kết quả ở tương lai nên mệnh đề chính dùng will + động từ." },
      { wrong: "Unless you don't have questions, we will finish early.", right: "Unless you have questions, we will finish early.", note: "unless đã mang nghĩa phủ định (nếu không), không thêm don't." },
      { wrong: "If I will see her, I will tell her.", right: "If I see her, I will tell her.", note: "Chỉ mệnh đề chính dùng will." }
    ],
    tip: "Trong đánh giá thử việc, nên dùng câu điều kiện để nói rõ tiêu chí ngay từ đầu: “If you reach X, we will do Y.” Cách nói này rõ ràng và công bằng, và giúp nhân viên mới biết mình cần làm gì."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "If Thao ___ her target, David will recommend confirming her.",
      options: ["will reach", "reaches", "reached", "reaching"],
      answer: 1, explanation: "Mệnh đề if dùng hiện tại đơn: reaches (chủ ngữ ngôi thứ ba số ít thêm -es). Không dùng will trong mệnh đề if." },
    { id: "p2", type: "gap", prompt: "If the review goes well, Lan ___ the labor contract next week.",
      options: ["prepares", "prepared", "will prepare", "preparing"],
      answer: 2, explanation: "Kết quả ở tương lai nên mệnh đề chính dùng will + động từ nguyên mẫu: will prepare." },
    { id: "p3", type: "gap", prompt: "___ you have any questions, please ask Peter.",
      options: ["If", "Unless", "Until", "Although"],
      answer: 0, explanation: "Nếu bạn có câu hỏi thì hãy hỏi Peter → If. Unless nghĩa là “trừ khi”, làm câu vô nghĩa." },
    { id: "p4", type: "gap", prompt: "We will not confirm her ___ she reaches at least seventy percent of the target.",
      options: ["if", "when", "because", "unless"],
      answer: 3, explanation: "Unless = if … not: “Chúng tôi sẽ không xác nhận chị ấy trừ khi chị ấy đạt ít nhất 70%”. Dùng if sẽ đổi nghĩa thành “không xác nhận nếu chị ấy đạt”." },
    { id: "p5", type: "choice", prompt: "Which sentence is correct?",
      options: ["If she will reach the target, we will confirm her.", "If she reach the target, we will confirm her.", "If she reaches the target, we will confirm her.", "If she reaches the target, we confirmed her."],
      answer: 2, explanation: "Cấu trúc đúng: If + hiện tại đơn, will + động từ. Câu A dùng will trong mệnh đề if, câu B thiếu -es, câu D dùng quá khứ ở mệnh đề chính." },
    { id: "p6", type: "gap", prompt: "Thao is ___ with her sales target: she has reached half of it in the first month.",
      options: ["on track", "on file", "in time", "at risk"],
      answer: 0, explanation: "On track = đang đúng tiến độ. Đạt một nửa chỉ tiêu trong tháng đầu là đúng hướng, nên không phải at risk (có nguy cơ)." },
    { id: "p7", type: "gap", prompt: "At the end of probation, the manager will ___ the employee's performance.",
      options: ["accept", "enclose", "handle", "assess"],
      answer: 3, explanation: "Assess = đánh giá kết quả làm việc. Accept là chấp nhận, enclose là đính kèm, handle là xử lý." },
    { id: "p8", type: "gap", prompt: "Peter is Thao's ___. He helps her learn the job.",
      options: ["client", "mentor", "applicant", "panel"],
      answer: 1, explanation: "Mentor = người hướng dẫn nhân viên mới. Client là khách hàng, applicant là người nộp đơn." },
    { id: "p9", type: "choice", context: "Lan says: “If Thao doesn't reach the target, we'll talk about the reasons first.”", prompt: "What does Lan mean?",
      options: ["They will end the contract immediately.", "They will not decide only by the number.", "They will always confirm Thao.", "They do not care about the target."],
      answer: 1, explanation: "Chị Lan nói thêm: “We don't decide only by the number.” Họ sẽ bàn lý do trước khi quyết định." },
    { id: "p10", type: "choice", prompt: "Where is the main stress in “probation”?",
      options: ["PRO·ba·tion", "pro·ba·TION", "pro·BA·tion", "All syllables equally"],
      answer: 2, explanation: "Từ tận cùng bằng -tion: nhấn âm tiết ngay trước -tion → pro·BA·tion /proʊˈbeɪʃən/." }
  ],

  writing: {
    title: "Reply to the review invitation",
    task: "Bạn là Thao. Viết email trả lời Tuấn và David (80–120 từ) sau khi nhận lời mời họp đánh giá thử việc. Cảm ơn lời mời, nói bạn sẽ mang số liệu và báo cáo đến, nói điều bạn sẽ làm nếu đạt chỉ tiêu và nếu gặp khó khăn với khách hàng, và hỏi xem có cần chuẩn bị thêm gì không.",
    requirements: [
      "Mở đầu bằng lời chào phù hợp.",
      "Nhắc đến buổi đánh giá thử việc (probation review).",
      "Có ít nhất hai câu điều kiện loại 1 (If + hiện tại đơn, will + động từ).",
      "Có ít nhất một câu với unless.",
      "Hỏi xem cần chuẩn bị thêm gì.",
      "Kết thúc email và ký tên."
    ],
    minWords: 80,
    maxWords: 120,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Dear … / Hi …)", pattern: "\\bdear\\b|\\bhi\\b" },
      { label: "Nhắc đến buổi đánh giá (review / probation)", pattern: "\\b(review|probation)\\b" },
      { label: "Có câu điều kiện với if", pattern: "\\bif\\b" },
      { label: "Có will hoặc 'll", pattern: "\\bwill\\b|'ll\\b|’ll\\b" },
      { label: "Có unless", pattern: "\\bunless\\b" },
      { label: "Có lời kết (Best regards …)", pattern: "regards|sincerely|best wishes" }
    ],
    model: [
      "Dear David,",
      "Thank you for inviting me to my probation review. I would like to prepare well.",
      "If I reach my target this month, I will be very happy to sign the labor contract. If I have any problems with a client, I will ask Peter first. Unless you tell me otherwise, I will bring my sales figures and my Friday reports to the meeting.",
      "Could you tell me if there is anything else I should prepare? If you need more information before the meeting, I will send it tomorrow.",
      "Best regards,",
      "Thao Ngo"
    ]
  },

  review: {
    keyPhrases: [
      { en: "If she reaches the target, we will confirm her.", vi: "Nếu chị ấy đạt chỉ tiêu, chúng tôi sẽ xác nhận chị ấy." },
      { en: "If the review goes well, I'll prepare the labor contract.", vi: "Nếu buổi đánh giá suôn sẻ, tôi sẽ chuẩn bị hợp đồng lao động." },
      { en: "Unless you tell me otherwise, I will book Room 301.", vi: "Trừ khi bạn báo khác, tôi sẽ đặt Room 301." },
      { en: "She is on track with her sales target.", vi: "Chị ấy đang đúng tiến độ chỉ tiêu doanh số." },
      { en: "We don't decide only by the number.", vi: "Chúng tôi không quyết định chỉ dựa vào con số." },
      { en: "If you have any questions, you can ask us.", vi: "Nếu bạn có câu hỏi, bạn có thể hỏi chúng tôi." }
    ]
  }
});
