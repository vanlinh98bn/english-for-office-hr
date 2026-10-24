/* =========================================================
   B1 · Module 3 (Compensation, Benefits and Attendance) · Bài 2
   "Explaining benefits"
   Nối tiếp B1-M3-L1: Thao (Sales Executive, đã được xác nhận) hỏi Tuấn
   (HR Executive) về phúc lợi. Phép năm 12 ngày tính theo số tháng làm
   việc; khám sức khỏe định kỳ miễn phí cho người làm trên ba tháng
   (đặt qua mạng nội bộ); chi phí đi lại công tác được hoàn lại khi có
   hóa đơn, nộp trong ba mươi ngày, trả cùng kỳ lương ngày 25; phép
   chưa dùng được chuyển sang năm sau đến hết tháng Ba (quy định riêng
   của công ty). Thời gian nói áng chừng.
   ========================================================= */
window.EOH.registerLesson({
  id: "b1-m3-l2",
  reviewStatus: "approved", // Linh duyệt ngày 23/10/2026
  duration: "40–50 phút",
  scenario: "Chị Thảo hay đi công tác thăm khách ở Hải Phòng và Quảng Ninh. Chị hỏi Tuấn (HR Executive) về phúc lợi: phép năm, khám sức khỏe, cách xin hoàn chi phí đi lại và phép chưa dùng. Sau đó Tuấn gửi chị email tóm tắt các phúc lợi.",

  objectives: [
    "Hiểu và dùng 10 từ vựng thường gặp khi nói về phúc lợi nhân viên.",
    "Nghe cuộc trao đổi về phúc lợi, ghi lại quyền lợi, điều kiện và thủ tục xin hoàn chi phí.",
    "Đọc email tóm tắt phúc lợi, tìm đúng quyền lợi, đối tượng được hưởng và hạn nộp.",
    "Dùng be entitled to, be eligible for và bị động với động từ khuyết thiếu (can be claimed, must be attached).",
    "Viết email giải thích phúc lợi cho nhân viên mới bằng các mẫu câu này."
  ],

  vocabulary: [
    { word: "benefit", ipa: "/ˈbenɪfɪt/", pos: "noun", meaning: "phúc lợi, quyền lợi",
      example: "The company offers several benefits to employees.", exampleVi: "Công ty dành nhiều phúc lợi cho nhân viên." },
    { word: "be entitled to", ipa: "/bi ɪnˈtaɪtəld tuː/", pos: "phrase", meaning: "có quyền được hưởng (theo luật hoặc hợp đồng)",
      example: "Every employee is entitled to twelve days of annual leave.", exampleVi: "Mỗi nhân viên có quyền hưởng mười hai ngày phép năm." },
    { word: "be eligible for", ipa: "/bi ˈelɪdʒəbəl fɔːr/", pos: "phrase", meaning: "đủ điều kiện để được hưởng",
      example: "You are eligible for the health check after three months.", exampleVi: "Bạn đủ điều kiện khám sức khỏe sau ba tháng." },
    { word: "claim", ipa: "/kleɪm/", pos: "verb / noun", meaning: "đề nghị hoàn lại (chi phí); đơn đề nghị",
      example: "Travel costs can be claimed online.", exampleVi: "Chi phí đi lại có thể được đề nghị hoàn lại qua mạng." },
    { word: "reimburse", ipa: "/ˌriːɪmˈbɜːrs/", pos: "verb", meaning: "hoàn lại tiền đã chi",
      example: "The company will reimburse your travel costs.", exampleVi: "Công ty sẽ hoàn lại chi phí đi lại của bạn." },
    { word: "receipt", ipa: "/rɪˈsiːt/", pos: "noun", meaning: "hóa đơn, biên lai",
      example: "Receipts must be attached to every claim.", exampleVi: "Hóa đơn phải được đính kèm với mỗi đề nghị hoàn chi phí." },
    { word: "cover", ipa: "/ˈkʌvər/", pos: "verb", meaning: "chi trả, bao gồm (chi phí)",
      example: "Health insurance covers treatment at registered hospitals.", exampleVi: "Bảo hiểm y tế chi trả cho việc điều trị ở bệnh viện đăng ký." },
    { word: "health check", ipa: "/helθ tʃek/", pos: "noun", meaning: "khám sức khỏe",
      example: "The annual health check is free for employees.", exampleVi: "Khám sức khỏe hằng năm miễn phí cho nhân viên." },
    { word: "carry over", ipa: "/ˈkæri ˈoʊvər/", pos: "phrasal verb", meaning: "chuyển sang kỳ sau (ví dụ ngày phép)",
      example: "Unused leave can be carried over to the next year.", exampleVi: "Ngày phép chưa dùng có thể được chuyển sang năm sau." },
    { word: "expire", ipa: "/ɪkˈspaɪər/", pos: "verb", meaning: "hết hạn",
      example: "Your carried-over leave expires at the end of March.", exampleVi: "Ngày phép chuyển sang hết hạn vào cuối tháng Ba." }
  ],

  pronunciation: {
    groups: [
      {
        title: "Trọng âm của từ",
        text: "Những từ dưới đây hay gặp khi nói về phúc lợi. Âm tiết in hoa là âm đọc to và dài hơn.",
        items: [
          { word: "benefit", marked: "BEN·e·fit", note: "Nhấn âm tiết đầu." },
          { word: "entitled", marked: "en·TI·tled" },
          { word: "eligible", marked: "EL·i·gi·ble" },
          { word: "reimburse", marked: "re·im·BURSE", note: "Nhấn âm tiết cuối." },
          { word: "receipt", marked: "re·CEIPT", note: "Chữ p câm: /rɪˈsiːt/." },
          { word: "expire", marked: "ex·PIRE" }
        ]
      },
      {
        title: "can be và must be đọc liền",
        text: "Trong câu bị động, can be /kən bi/ và must be /məst bi/ thường đọc nhẹ và liền nhau; động từ ở dạng V3 phía sau được nhấn.",
        items: [
          { word: "can be claimed", marked: "/kən bi/ CLAIMED", note: "Travel costs can be claimed online." },
          { word: "must be attached", marked: "/məs bi/ at·TACHED", note: "Receipts must be attached." }
        ]
      }
    ],
    sentences: [
      "Every employee is entitled to twelve days of annual leave.",
      "Travel costs can be claimed online.",
      "Receipts must be attached to every claim."
    ]
  },

  listening: {
    title: "Questions about benefits",
    setting: "Phòng Nhân sự, buổi chiều. Chị Thảo hỏi Tuấn về các phúc lợi của mình.",
    speakers: { thao: "Thao (Sales Executive)", tuan: "Tuan (HR Executive)" },
    lines: [
      { s: "thao", text: "Tuan, do you have a minute? I have some questions about my benefits.",
        vi: "Tuấn, anh có rảnh một chút không? Tôi có vài câu hỏi về phúc lợi của mình." },
      { s: "tuan", text: "Of course. What would you like to know?",
        vi: "Tất nhiên rồi. Chị muốn biết điều gì?" },
      { s: "thao", text: "Am I entitled to annual leave?",
        vi: "Tôi có quyền hưởng phép năm không?" },
      { s: "tuan", text: "Yes. Every employee is entitled to twelve days of annual leave per year. Because you joined in April, your leave is calculated by the months you work.",
        vi: "Có. Mỗi nhân viên có quyền hưởng mười hai ngày phép năm mỗi năm. Vì chị vào làm từ tháng Tư, phép của chị được tính theo số tháng chị làm việc." },
      { s: "thao", text: "What about the annual health check? Am I eligible for it?",
        vi: "Còn khám sức khỏe hằng năm thì sao? Tôi có đủ điều kiện không?" },
      { s: "tuan", text: "Yes. Employees who have worked here for more than three months are eligible for the free health check. It can be booked on the intranet.",
        vi: "Có. Nhân viên làm việc ở đây hơn ba tháng đủ điều kiện khám sức khỏe miễn phí. Có thể đặt lịch trên mạng nội bộ." },
      { s: "thao", text: "And I visit clients a lot. Can my travel costs be claimed?",
        vi: "Và tôi đi thăm khách hàng nhiều. Chi phí đi lại của tôi có thể xin hoàn lại không?" },
      { s: "tuan", text: "Yes. Receipts must be attached, and the claim must be submitted within thirty days. It can be done online.",
        vi: "Có. Phải đính kèm hóa đơn và đề nghị phải được nộp trong vòng ba mươi ngày. Có thể làm qua mạng." },
      { s: "thao", text: "How long does it take to receive the money?",
        vi: "Mất bao lâu thì tôi nhận được tiền?" },
      { s: "tuan", text: "Approved claims are paid with the next salary, on the twenty-fifth.",
        vi: "Các đề nghị đã được duyệt sẽ được trả cùng kỳ lương sau, vào ngày hai mươi lăm." },
      { s: "thao", text: "One more question: what happens to my unused annual leave?",
        vi: "Thêm một câu hỏi: ngày phép chưa dùng của tôi sẽ ra sao?" },
      { s: "tuan", text: "It can be carried over to the next year until the end of March. After that, it expires.",
        vi: "Có thể chuyển sang năm sau đến hết tháng Ba. Sau đó thì hết hạn." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "How many days of annual leave is every employee entitled to per year?",
        options: ["Eight", "Twelve", "Fifteen", "Twenty"],
        answer: 1, explanation: "Tuấn nói: “Every employee is entitled to twelve days of annual leave per year.” Với chị Thảo, phép được tính theo số tháng làm việc." },
      { id: "l2", type: "choice", prompt: "What must be attached to a travel claim?",
        options: ["An insurance card", "A passport", "A manager's letter", "Receipts"],
        answer: 3, explanation: "“Receipts must be attached, and the claim must be submitted within thirty days.”" },
      { id: "l3", type: "choice", prompt: "Until when can unused leave be carried over?",
        options: ["The end of January", "The end of June", "The end of March", "The end of December"],
        answer: 2, explanation: "“It can be carried over to the next year until the end of March. After that, it expires.”" }
    ]
  },

  reading: {
    title: "Your benefits at a glance",
    intro: "Email Tuấn gửi chị Thảo tóm tắt phúc lợi. Đọc và tìm quyền lợi, điều kiện và hạn nộp.",
    email: {
      from: "Tuan Nguyen <tuan.nguyen@riverside-trading.example>",
      to: "Thao Ngo",
      date: "Thursday",
      subject: "Your benefits at a glance",
      greeting: "Dear Thao,",
      paragraphs: [
        "Thank you for your questions this afternoon. Here is a short summary of the benefits we discussed:"
      ],
      list: [
        "Annual leave: every employee is entitled to twelve days a year. Unused leave can be carried over until the end of March.",
        "Health check: employees who have worked here for more than three months are eligible for a free annual health check, which can be booked on the intranet.",
        "Travel costs: costs for client visits can be claimed online. Receipts must be attached, and the claim must be submitted within thirty days.",
        "Payment: approved claims are paid with the next salary."
      ],
      after: [
        "If you are not sure whether you are eligible for a benefit, please ask me before you book or spend any money.",
        "I hope this helps."
      ],
      closing: "Best regards,",
      signature: ["Tuan Nguyen", "HR Executive, Riverside Trading"]
    },
    glossary: [
      { term: "at a glance", vi: "tóm tắt nhanh, nhìn qua là hiểu" },
      { term: "unused leave", vi: "ngày phép chưa dùng" },
      { term: "client visits", vi: "các chuyến thăm khách hàng" },
      { term: "approved", vi: "đã được duyệt" },
      { term: "whether", vi: "liệu có … hay không" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "Why is Tuan writing to Thao?",
        options: ["To summarize her benefits", "To offer her a promotion", "To tell her about a salary increase", "To cancel her health check"],
        answer: 0, explanation: "“Here is a short summary of the benefits we discussed.” Thư không nói về thăng chức hay tăng lương." },
      { id: "r2", type: "choice", prompt: "Who is eligible for the free annual health check?",
        options: ["All new applicants", "Only managers", "Employees who have worked here for more than three months", "Employees who have worked here for one year"],
        answer: 2, explanation: "“Employees who have worked here for more than three months are eligible for a free annual health check.”" },
      { id: "r3", type: "choice", prompt: "Which statement is TRUE?",
        options: ["Claims must be submitted within sixty days.", "Receipts are not necessary.", "Approved claims are paid with the next salary.", "Unused leave expires at the end of December."],
        answer: 2, explanation: "“Approved claims are paid with the next salary.” Hạn nộp là ba mươi ngày, hóa đơn bắt buộc, và phép chưa dùng được chuyển đến hết tháng Ba." }
    ]
  },

  grammar: {
    title: "Entitled to, eligible for, and passive with can / must",
    titleVi: "be entitled to, be eligible for và bị động với can / must",
    intro: "Khi giải thích phúc lợi, bạn cần nói ai được hưởng gì, điều kiện nào, và thủ tục ra sao. Bốn mẫu dưới đây có trong cuộc trao đổi và email bạn vừa học.",
    patterns: [
      { form: "be entitled to + danh từ", use: "Có quyền được hưởng theo luật hoặc hợp đồng. Giới từ đi kèm luôn là to.",
        examples: ["Every employee is entitled to twelve days of annual leave.", "You are entitled to a copy of your labor contract."] },
      { form: "be eligible for + danh từ   ·   be eligible to + động từ", use: "Đủ điều kiện để được hưởng (ví dụ làm đủ thời gian). Đi với for + danh từ hoặc to + động từ.",
        examples: ["You are eligible for the annual health check after three months.", "Employees are eligible to apply for internal vacancies."] },
      { form: "can / must + be + V3 (bị động)", use: "Nói việc có thể hoặc bắt buộc được làm, mà người làm không quan trọng. Rất hay dùng cho thủ tục.",
        examples: ["Travel costs can be claimed online.", "Receipts must be attached to every claim."] },
      { form: "cannot be + V3   ·   Can … be + V3 ?", use: "Dạng phủ định và câu hỏi của bị động với can / must.",
        examples: ["Claims cannot be submitted after thirty days.", "Can my travel costs be claimed?"] }
    ],
    mistakes: [
      { wrong: "Every employee is entitled for twelve days of leave.", right: "Every employee is entitled to twelve days of leave.", note: "entitled luôn đi với to." },
      { wrong: "You are eligible to the health check.", right: "You are eligible for the health check.", note: "Trước danh từ dùng for; trước động từ dùng to + động từ." },
      { wrong: "Receipts must attach to the claim.", right: "Receipts must be attached to the claim.", note: "Receipts không tự đính kèm; dùng bị động: must be attached." },
      { wrong: "Travel costs can claimed online.", right: "Travel costs can be claimed online.", note: "Bị động với động từ khuyết thiếu cần be: can be + V3." }
    ],
    tip: "Khi giải thích phúc lợi, hãy nói rõ ba điều: ai được hưởng (entitled / eligible), làm thủ tục thế nào (can be … / must be …) và hạn chót. Cách trình bày này giúp nhân viên không bỏ lỡ quyền lợi vì không biết quy định."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "Every employee is entitled ___ twelve days of annual leave.",
      options: ["for", "to", "of", "in"],
      answer: 1, explanation: "Cụm cố định: be entitled to + danh từ." },
    { id: "p2", type: "gap", prompt: "Employees who have worked here for three months are eligible ___ the health check.",
      options: ["to", "of", "for", "at"],
      answer: 2, explanation: "be eligible for + danh từ (the health check). Dùng to chỉ khi sau đó là động từ." },
    { id: "p3", type: "gap", prompt: "Claims must ___ within thirty days.",
      options: ["submit", "be submit", "submitted", "be submitted"],
      answer: 3, explanation: "Bị động với must: must be + V3 → must be submitted." },
    { id: "p4", type: "gap", prompt: "Receipts must be ___ to every claim.",
      options: ["attach", "attaching", "attached", "attaches"],
      answer: 2, explanation: "Sau must be dùng dạng V3: attached." },
    { id: "p5", type: "gap", prompt: "Unused leave ___ carried over until the end of March.",
      options: ["can to be", "can be", "can is", "can been"],
      answer: 1, explanation: "can + be + V3: can be carried over." },
    { id: "p6", type: "gap", prompt: "The company will ___ you for your travel costs.",
      options: ["expire", "claim", "cover", "reimburse"],
      answer: 3, explanation: "Reimburse = hoàn lại tiền đã chi cho ai. Cover dùng cho bảo hiểm hoặc chi phí, không dùng để trả lại tiền ai đã chi." },
    { id: "p7", type: "gap", prompt: "Keep the ___ because the claim needs proof of payment.",
      options: ["receipt", "benefit", "component", "deduction"],
      answer: 0, explanation: "Receipt = hóa đơn, bằng chứng đã thanh toán." },
    { id: "p8", type: "choice", prompt: "Which sentence is correct?",
      options: ["Claims must submitted within thirty days.", "Claims must be submitted within thirty days.", "Claims must be submit within thirty days.", "Claims must been submitted within thirty days."],
      answer: 1, explanation: "Bị động với must: must be + V3. Các câu còn lại thiếu be hoặc dùng sai dạng động từ." },
    { id: "p9", type: "choice", context: "Tuan says: “Your leave expires at the end of March.”", prompt: "What does “expire” mean?",
      options: ["It starts at that date.", "It increases after that date.", "It is no longer valid after that date.", "It is paid on that date."],
      answer: 2, explanation: "Expire = hết hạn, không còn giá trị sau thời điểm đó." },
    { id: "p10", type: "choice", prompt: "Which sentence uses “entitled” correctly?",
      options: ["She is entitled to twelve days of leave.", "She is entitled for twelve days of leave.", "She entitled to twelve days of leave.", "She is entitling to twelve days of leave."],
      answer: 0, explanation: "Cấu trúc đúng: be entitled to + danh từ. Các câu còn lại dùng sai giới từ hoặc thiếu động từ be." }
  ],

  writing: {
    title: "Explain benefits to a new employee",
    task: "Bạn là Tuấn. Nhân viên mới tên Nam hỏi về phúc lợi. Viết email gửi Nam (80–120 từ): mỗi nhân viên có quyền hưởng mười hai ngày phép năm; sau ba tháng được khám sức khỏe miễn phí đặt qua mạng nội bộ; chi phí đi lại công tác có thể đề nghị hoàn lại, phải đính kèm hóa đơn và nộp trong ba mươi ngày; khoản được duyệt trả cùng kỳ lương sau.",
    requirements: [
      "Mở đầu bằng lời chào phù hợp.",
      "Có câu với be entitled to.",
      "Có câu với be eligible for.",
      "Có ít nhất hai câu bị động với can / must + be + V3.",
      "Nhắc đến hóa đơn (receipts).",
      "Kết thúc email và ký tên."
    ],
    minWords: 80,
    maxWords: 120,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Dear … / Hi …)", pattern: "\\bdear\\b|\\bhi\\b" },
      { label: "Có entitled to", pattern: "entitled to" },
      { label: "Có eligible for", pattern: "eligible for" },
      { label: "Có can be / must be + V3", pattern: "\\b(can|must) be \\w+ed\\b" },
      { label: "Nhắc đến receipt", pattern: "\\breceipts?\\b" },
      { label: "Có lời kết (Best regards …)", pattern: "regards|sincerely|best wishes" }
    ],
    model: [
      "Dear Nam,",
      "Thank you for your question about benefits. Here is a short explanation.",
      "Every employee is entitled to twelve days of annual leave per year. After three months, you will also be eligible for the free annual health check, which can be booked online.",
      "If you travel for work, your travel costs can be claimed. Receipts must be attached to the claim, and the claim must be submitted within thirty days. Approved claims are paid with the next salary.",
      "Please ask me if you have any other questions.",
      "Best regards,",
      "Tuan Nguyen"
    ]
  },

  review: {
    keyPhrases: [
      { en: "Every employee is entitled to twelve days of annual leave.", vi: "Mỗi nhân viên có quyền hưởng mười hai ngày phép năm." },
      { en: "You are eligible for the free health check.", vi: "Bạn đủ điều kiện khám sức khỏe miễn phí." },
      { en: "Travel costs can be claimed online.", vi: "Chi phí đi lại có thể được đề nghị hoàn lại qua mạng." },
      { en: "Receipts must be attached to every claim.", vi: "Hóa đơn phải được đính kèm với mỗi đề nghị." },
      { en: "Unused leave can be carried over until the end of March.", vi: "Ngày phép chưa dùng có thể chuyển sang năm sau đến hết tháng Ba." },
      { en: "Approved claims are paid with the next salary.", vi: "Các đề nghị đã duyệt được trả cùng kỳ lương sau." }
    ]
  }
});
