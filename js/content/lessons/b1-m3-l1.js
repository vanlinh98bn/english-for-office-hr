/* =========================================================
   B1 · Module 3 (Compensation, Benefits and Attendance) · Bài 1
   "Salary structure"
   Nối tiếp B1-M2: Tuấn đã lên HR Executive. Khanh Vu là HR Assistant
   mới (thay vị trí cũ của Tuấn), đang học chuẩn bị phiếu lương. Tuấn giải
   thích cơ cấu lương; Hoa Tran (kế toán) trả lương vào ngày 25 hằng
   tháng. Thời gian nói áng chừng.
   ========================================================= */
window.EOH.registerLesson({
  id: "b1-m3-l1",
  reviewStatus: "approved", // Linh duyệt ngày 23/10/2026
  duration: "40–50 phút",
  scenario: "Khanh Vu là HR Assistant mới của phòng Nhân sự, thay vị trí cũ của Tuấn. Hôm nay Khanh học chuẩn bị phiếu lương nhưng chưa hiểu rõ cơ cấu lương. Tuấn (nay là HR Executive) giải thích từng khoản bằng lời, rồi gửi Khanh email tóm tắt.",

  objectives: [
    "Hiểu và dùng 10 từ vựng thường gặp về cơ cấu lương.",
    "Nghe cuộc trao đổi về các khoản lương, ghi lại ý nghĩa của từng khoản và ai nhận khoản nào.",
    "Đọc email tóm tắt cơ cấu lương, tìm đúng định nghĩa và người phụ trách trả lương.",
    "Dùng mệnh đề quan hệ who / which / that để định nghĩa người và vật.",
    "Viết email giải thích thuật ngữ lương cho đồng nghiệp bằng mệnh đề quan hệ."
  ],

  vocabulary: [
    { word: "base salary", ipa: "/beɪs ˈsæləri/", pos: "noun", meaning: "lương cơ bản (khoản cố định ghi trong hợp đồng)",
      example: "Base salary is the fixed amount in the labor contract.", exampleVi: "Lương cơ bản là khoản cố định trong hợp đồng lao động." },
    { word: "allowance", ipa: "/əˈlaʊəns/", pos: "noun", meaning: "phụ cấp",
      example: "The sales team has a phone allowance.", exampleVi: "Nhóm Kinh doanh có phụ cấp điện thoại." },
    { word: "commission", ipa: "/kəˈmɪʃən/", pos: "noun", meaning: "tiền hoa hồng (phần trăm trên doanh số)",
      example: "Commission is only for sales employees.", exampleVi: "Hoa hồng chỉ dành cho nhân viên kinh doanh." },
    { word: "bonus", ipa: "/ˈboʊnəs/", pos: "noun", meaning: "tiền thưởng",
      example: "The company gives a bonus for good results.", exampleVi: "Công ty thưởng cho kết quả tốt." },
    { word: "gross salary", ipa: "/ɡroʊs ˈsæləri/", pos: "noun", meaning: "lương gộp (trước khi trừ các khoản)",
      example: "Gross salary is the total amount before deductions.", exampleVi: "Lương gộp là tổng số tiền trước khi trừ các khoản." },
    { word: "net salary", ipa: "/net ˈsæləri/", pos: "noun", meaning: "lương thực nhận (sau khi trừ các khoản)",
      example: "Net salary is the amount the employee receives.", exampleVi: "Lương thực nhận là số tiền người lao động nhận được." },
    { word: "deduction", ipa: "/dɪˈdʌkʃən/", pos: "noun", meaning: "khoản trừ (vào lương)",
      example: "The main deductions are insurance and income tax.", exampleVi: "Các khoản trừ chính là bảo hiểm và thuế thu nhập." },
    { word: "personal income tax", ipa: "/ˈpɜːrsənəl ˈɪnkʌm tæks/", pos: "noun", meaning: "thuế thu nhập cá nhân",
      example: "Personal income tax is deducted from gross salary.", exampleVi: "Thuế thu nhập cá nhân được trừ từ lương gộp." },
    { word: "pay grade", ipa: "/peɪ ɡreɪd/", pos: "noun", meaning: "bậc lương",
      example: "Each job has a pay grade.", exampleVi: "Mỗi vị trí có một bậc lương." },
    { word: "component", ipa: "/kəmˈpoʊnənt/", pos: "noun", meaning: "thành phần, khoản (trong một tổng thể)",
      example: "Base salary is the main component of pay.", exampleVi: "Lương cơ bản là thành phần chính của thu nhập." }
  ],

  pronunciation: {
    groups: [
      {
        title: "Trọng âm của từ",
        text: "Những từ dưới đây hay gặp khi nói về lương. Âm tiết in hoa là âm đọc to và dài hơn.",
        items: [
          { word: "allowance", marked: "al·LOW·ance" },
          { word: "commission", marked: "com·MIS·sion", note: "Từ tận cùng bằng -sion: nhấn âm tiết ngay trước đó." },
          { word: "deduction", marked: "de·DUC·tion" },
          { word: "component", marked: "com·PO·nent" },
          { word: "personal", marked: "PER·son·al", note: "Nhấn âm tiết đầu." },
          { word: "structure", marked: "STRUC·ture" }
        ]
      },
      {
        title: "who, which, that đọc nhẹ",
        text: "Trong mệnh đề quan hệ, who /hu/, which /wɪtʃ/, that /ðət/ thường đọc nhẹ và nhanh; từ nội dung phía sau mới được nhấn.",
        items: [
          { word: "who pays", marked: "/hu/ PAYS", note: "Hoa is the accountant who pays the salaries." },
          { word: "that the employee receives", marked: "/ðət/ the em·PLOY·ee re·CEIVES" }
        ]
      }
    ],
    sentences: [
      "Base salary is the fixed amount that is written in the labor contract.",
      "Commission is a payment which only sales employees receive.",
      "Hoa is the accountant who pays the salaries."
    ]
  },

  listening: {
    title: "Understanding the salary structure",
    setting: "Phòng Nhân sự, buổi sáng. Khanh nhờ Tuấn giải thích cơ cấu lương trước khi chuẩn bị phiếu lương.",
    speakers: { khanh: "Khanh (HR Assistant)", tuan: "Tuan (HR Executive)" },
    lines: [
      { s: "khanh", text: "Tuan, I'm preparing payslips, but I don't understand the salary structure yet. Can you explain?",
        vi: "Tuấn, em đang chuẩn bị phiếu lương nhưng chưa hiểu cơ cấu lương. Anh giải thích giúp em được không?" },
      { s: "tuan", text: "Sure. Every employee has a base salary, which is the fixed amount in the labor contract.",
        vi: "Được. Mỗi nhân viên có lương cơ bản, là khoản cố định trong hợp đồng lao động." },
      { s: "khanh", text: "And what are allowances?",
        vi: "Còn phụ cấp là gì ạ?" },
      { s: "tuan", text: "Allowances are extra payments that cover specific costs. For example, the lunch allowance is for employees who eat at the office, and the sales team has a phone allowance.",
        vi: "Phụ cấp là các khoản trả thêm để bù những chi phí cụ thể. Ví dụ, phụ cấp ăn trưa dành cho nhân viên ăn ở văn phòng, và nhóm Kinh doanh có phụ cấp điện thoại." },
      { s: "khanh", text: "What about commission? Is that for everyone?",
        vi: "Còn hoa hồng thì sao? Ai cũng được nhận ạ?" },
      { s: "tuan", text: "No. Commission is only for the sales employees who reach their targets. It's a percentage of sales that the company pays every month.",
        vi: "Không. Hoa hồng chỉ dành cho nhân viên kinh doanh đạt chỉ tiêu. Đó là một tỷ lệ phần trăm trên doanh số mà công ty trả hằng tháng." },
      { s: "khanh", text: "And a bonus?",
        vi: "Còn tiền thưởng?" },
      { s: "tuan", text: "A bonus is a payment that the company gives for good results, for example at the end of the year.",
        vi: "Tiền thưởng là khoản công ty trao cho kết quả tốt, ví dụ vào cuối năm." },
      { s: "khanh", text: "So gross salary is all of these together?",
        vi: "Vậy lương gộp là tất cả những khoản này cộng lại ạ?" },
      { s: "tuan", text: "Yes. Gross salary is the total amount before deductions. Deductions are the money that we take out, mainly insurance and personal income tax.",
        vi: "Đúng. Lương gộp là tổng số tiền trước khi trừ các khoản. Các khoản trừ là tiền mà chúng ta lấy ra, chủ yếu là bảo hiểm và thuế thu nhập cá nhân." },
      { s: "khanh", text: "Then net salary is the amount that the employee receives.",
        vi: "Vậy lương thực nhận là số tiền mà người lao động nhận được." },
      { s: "tuan", text: "Exactly. Hoa is the accountant who pays the salaries on the twenty-fifth, so ask her if you have questions about payment.",
        vi: "Chính xác. Hoa là kế toán trả lương vào ngày hai mươi lăm, nên nếu em có câu hỏi về việc chi trả thì hỏi chị ấy." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "What is base salary?",
        options: ["The fixed amount in the labor contract", "A payment for good results", "The total amount after deductions", "A percentage of sales"],
        answer: 0, explanation: "Tuấn nói: “a base salary, which is the fixed amount in the labor contract.” Khoản thưởng là bonus, phần trăm trên doanh số là commission." },
      { id: "l2", type: "choice", prompt: "Who receives commission?",
        options: ["Every employee", "Only HR employees", "Only managers", "Sales employees who reach their targets"],
        answer: 3, explanation: "“Commission is only for the sales employees who reach their targets.”" },
      { id: "l3", type: "choice", prompt: "What is net salary?",
        options: ["The total amount before deductions", "The amount that the employee receives", "A payment for good results", "The tax that the company pays"],
        answer: 1, explanation: "Khanh nói và Tuấn xác nhận: “net salary is the amount that the employee receives.” Tổng trước khi trừ các khoản là lương gộp (gross)." }
    ]
  },

  reading: {
    title: "How our salary structure works",
    intro: "Email Tuấn gửi Khanh tóm tắt cơ cấu lương. Đọc và tìm định nghĩa của từng khoản cùng người chịu trách nhiệm trả lương.",
    email: {
      from: "Tuan Nguyen <tuan.nguyen@riverside-trading.example>",
      to: "Khanh Vu",
      date: "Monday",
      subject: "Salary structure – summary",
      greeting: "Dear Khanh,",
      paragraphs: [
        "Thank you for your questions this morning. Here is a short summary of how our salary structure works. Every employee's pay has these components:"
      ],
      list: [
        "Base salary: the fixed amount that is written in the labor contract",
        "Allowances: extra payments which cover specific costs, such as lunch or phone",
        "Commission: a payment that only sales employees receive when they reach their targets",
        "Bonus: a payment that the company gives for good results"
      ],
      after: [
        "Gross salary is the total of all these components. Net salary is what the employee receives after deductions, which are mainly insurance and personal income tax.",
        "Hoa Tran, who is our accountant, pays the salaries on the 25th of every month. She is the person who can answer your payroll questions. Please call me if anything is still unclear."
      ],
      closing: "Best regards,",
      signature: ["Tuan Nguyen", "HR Executive, Riverside Trading"]
    },
    glossary: [
      { term: "summary", vi: "bản tóm tắt" },
      { term: "cover (a cost)", vi: "bù đắp (một chi phí)" },
      { term: "total of", vi: "tổng của" },
      { term: "after deductions", vi: "sau khi trừ các khoản" },
      { term: "payroll", vi: "việc tính và trả lương" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "Why is Tuan writing to Khanh?",
        options: ["To summarize how the salary structure works", "To offer Khanh a promotion", "To ask Khanh to prepare payslips", "To announce a new bonus"],
        answer: 0, explanation: "“Here is a short summary of how our salary structure works.” Thư không nói về thăng chức hay thưởng mới." },
      { id: "r2", type: "choice", prompt: "Who pays the salaries?",
        options: ["Tuan Nguyen", "Lan Pham", "Hoa Tran", "David Brown"],
        answer: 2, explanation: "“Hoa Tran, who is our accountant, pays the salaries on the 25th of every month.”" },
      { id: "r3", type: "choice", prompt: "Which statement is TRUE?",
        options: ["Every employee receives commission.", "Allowances are payments for good results.", "Net salary is the total before deductions.", "Gross salary is the total of all the components."],
        answer: 3, explanation: "“Gross salary is the total of all these components.” Hoa hồng chỉ dành cho nhân viên kinh doanh, phụ cấp bù chi phí cụ thể, và lương thực nhận (net) là số tiền sau khi trừ các khoản." }
    ]
  },

  grammar: {
    title: "Relative clauses with who, which, that",
    titleVi: "Mệnh đề quan hệ who / which / that",
    intro: "Khi định nghĩa một khoản lương hoặc nói về một người, bạn dùng mệnh đề quan hệ. Bốn mẫu dưới đây có trong cuộc trao đổi và email bạn vừa học.",
    patterns: [
      { form: "người + who + động từ", use: "Dùng who cho người. Who đóng vai chủ ngữ của mệnh đề nên không thêm đại từ khác.",
        examples: ["Hoa is the accountant who pays the salaries.", "Commission is for the sales employees who reach their targets."] },
      { form: "vật + which / that + động từ", use: "Dùng which hoặc that cho vật. Trong định nghĩa, that rất tự nhiên; which thường dùng khi có dấu phẩy.",
        examples: ["Base salary is the fixed amount that is written in the labor contract.", "Allowances are extra payments which cover specific costs."] },
      { form: "that / which có thể bỏ khi là tân ngữ", use: "Nếu who / which / that là tân ngữ của mệnh đề thì có thể bỏ (nhưng chủ ngữ phải còn).",
        examples: ["Net salary is the amount (that) the employee receives.", "Deductions are the money (that) we take out."] },
      { form: ", which … / , who … (có dấu phẩy)", use: "Thông tin thêm, không có cũng hiểu câu. Có dấu phẩy ở cả hai phía, và không dùng that trong mẫu này.",
        examples: ["Every employee has a base salary, which is the fixed amount in the contract.", "Hoa Tran, who is our accountant, pays the salaries."] }
    ],
    mistakes: [
      { wrong: "The employee which receives the bonus is happy.", right: "The employee who receives the bonus is happy.", note: "Dùng who cho người, không dùng which." },
      { wrong: "The accountant who she pays the salaries is Hoa.", right: "The accountant who pays the salaries is Hoa.", note: "who đã là chủ ngữ của mệnh đề; không thêm she / he nữa." },
      { wrong: "Base salary, that is fixed, is in the contract.", right: "Base salary, which is fixed, is in the contract.", note: "Có dấu phẩy thì dùng which, không dùng that." },
      { wrong: "Net salary is the amount what the employee receives.", right: "Net salary is the amount that the employee receives.", note: "Không dùng what làm từ nối trong mệnh đề quan hệ; dùng that hoặc which." }
    ],
    tip: "Định nghĩa bằng mệnh đề quan hệ giúp giải thích thuật ngữ lương cho người mới rất rõ ràng: “Commission is a payment that sales employees receive…”. Khi viết phiếu lương hay hướng dẫn, luôn định nghĩa từng khoản bằng một câu đơn giản như vậy."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "Hoa is the accountant ___ pays the salaries.",
      options: ["which", "who", "whose", "what"],
      answer: 1, explanation: "Dùng who cho người (the accountant). Which dùng cho vật; whose chỉ sự sở hữu." },
    { id: "p2", type: "gap", prompt: "Base salary is the fixed amount ___ is written in the labor contract.",
      options: ["who", "where", "which", "whom"],
      answer: 2, explanation: "Amount là vật nên dùng which (hoặc that). Who dùng cho người." },
    { id: "p3", type: "gap", prompt: "The lunch allowance is for employees ___ eat at the office.",
      options: ["who", "which", "whose", "whom"],
      answer: 0, explanation: "Employees là người nên dùng who. “which eat” sai vì which dùng cho vật." },
    { id: "p4", type: "choice", prompt: "Which sentence is correct?",
      options: ["The employee which receives the bonus is happy.", "The employee who he receives the bonus is happy.", "The employee what receives the bonus is happy.", "The employee who receives the bonus is happy."],
      answer: 3, explanation: "who + động từ là đúng. Câu A dùng which cho người, câu B thêm đại từ he thừa, câu C dùng what sai." },
    { id: "p5", type: "gap", prompt: "Net salary is the amount ___ the employee receives.",
      options: ["who", "what", "that", "where"],
      answer: 2, explanation: "Amount là vật; trong định nghĩa dùng that (hoặc which, hoặc bỏ). Who dùng cho người, what không dùng làm từ nối." },
    { id: "p6", type: "gap", prompt: "Money that the company takes out of your pay, such as insurance and tax, is called a ___.",
      options: ["bonus", "deduction", "commission", "allowance"],
      answer: 1, explanation: "Deduction = khoản trừ vào lương. Bonus là tiền thưởng, commission là hoa hồng, allowance là phụ cấp." },
    { id: "p7", type: "gap", prompt: "A payment for good results at the end of the year is a ___.",
      options: ["deduction", "commission", "bonus", "component"],
      answer: 2, explanation: "Bonus = tiền thưởng cho kết quả tốt. Commission là phần trăm trên doanh số." },
    { id: "p8", type: "choice", prompt: "Which sentence is correct?",
      options: ["Hoa who is our accountant pays salaries.", "Hoa, who is our accountant, pays salaries.", "Hoa, that is our accountant, pays salaries.", "Hoa, which is our accountant, pays salaries."],
      answer: 1, explanation: "Thông tin thêm về một người có tên riêng: dùng dấu phẩy và who. Không dùng that sau dấu phẩy, và which dùng cho vật." },
    { id: "p9", type: "gap", prompt: "Commission is a payment ___ depends on how much you sell.",
      options: ["that", "who", "whose", "where"],
      answer: 0, explanation: "Payment là vật nên dùng that (hoặc which). Who dùng cho người, where cho nơi chốn." },
    { id: "p10", type: "choice", prompt: "Where is the main stress in “allowance”?",
      options: ["AL·low·ance", "al·low·ANCE", "All syllables equally", "al·LOW·ance"],
      answer: 3, explanation: "Trọng âm ở âm tiết thứ hai: al·LOW·ance /əˈlaʊəns/." }
  ],

  writing: {
    title: "Explain salary terms to a new colleague",
    task: "Bạn là Tuấn. Khanh hỏi bạn về ba thuật ngữ: commission, bonus và deduction. Viết email gửi Khanh (80–120 từ), giải thích từng thuật ngữ bằng một câu có who, which hoặc that. Nói thêm rằng Hoa là người trả lương và Khanh có thể hỏi Hoa.",
    requirements: [
      "Mở đầu bằng lời chào phù hợp.",
      "Giải thích ít nhất ba thuật ngữ lương.",
      "Có ít nhất một câu dùng who.",
      "Có ít nhất một câu dùng which.",
      "Có ít nhất một câu dùng that.",
      "Kết thúc email và ký tên."
    ],
    minWords: 80,
    maxWords: 120,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Dear … / Hi …)", pattern: "\\bdear\\b|\\bhi\\b" },
      { label: "Nhắc đến thuật ngữ lương (commission / bonus / deduction)", pattern: "\\b(commission|bonus|deductions?)\\b" },
      { label: "Có who", pattern: "\\bwho\\b" },
      { label: "Có which", pattern: "\\bwhich\\b" },
      { label: "Có that", pattern: "\\bthat\\b" },
      { label: "Có lời kết (Best regards …)", pattern: "regards|sincerely|best wishes" }
    ],
    model: [
      "Hi Khanh,",
      "Here are the three terms you asked about.",
      "Commission is a payment that sales employees receive when they reach their targets. A bonus is an extra payment which the company gives for good results. Deductions are the amounts that we take out of the gross salary.",
      "Hoa, who is our accountant, pays the salaries on the twenty-fifth of every month. She is the person who can answer your payroll questions. If anything is unclear, please ask me. I hope this helps you prepare the payslips.",
      "Best regards,",
      "Tuan"
    ]
  },

  review: {
    keyPhrases: [
      { en: "Base salary is the fixed amount in the labor contract.", vi: "Lương cơ bản là khoản cố định trong hợp đồng lao động." },
      { en: "Commission is only for sales employees who reach their targets.", vi: "Hoa hồng chỉ dành cho nhân viên kinh doanh đạt chỉ tiêu." },
      { en: "Gross salary is the total amount before deductions.", vi: "Lương gộp là tổng số tiền trước khi trừ các khoản." },
      { en: "Net salary is the amount that the employee receives.", vi: "Lương thực nhận là số tiền mà người lao động nhận được." },
      { en: "Hoa is the accountant who pays the salaries.", vi: "Hoa là kế toán trả lương." },
      { en: "A bonus is a payment that the company gives for good results.", vi: "Tiền thưởng là khoản công ty trao cho kết quả tốt." }
    ]
  }
});
