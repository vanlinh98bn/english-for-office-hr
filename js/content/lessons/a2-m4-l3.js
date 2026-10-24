/* =========================================================
   A2 · Module 4 (HR Operations) · Bài 3
   "Payslips: basic terms" — Phiếu lương: các thuật ngữ cơ bản
   Ngữ pháp: so sánh hơn với số liệu (higher than, 5% more) và phần trăm
   Câu chuyện: thứ Tư 25/11/2026, ngày trả lương. Peter hỏi Tuấn về phiếu lương.
   Công ty Riverside Trading và các nhân vật đều là hư cấu.
   Tỷ lệ bảo hiểm nhân viên đóng: 8% + 1,5% + 1% = 10,5% tiền lương đóng bảo hiểm.
   ========================================================= */
window.EOH.registerLesson({
  id: "a2-m4-l3",
  reviewStatus: "draft", // "draft" = bản nháp, chưa duyệt
  duration: "35–45 phút",
  scenario: "Thứ Tư 25/11, ngày trả lương. Peter nhận phiếu lương tháng Mười Một và thắc mắc vì lương thực nhận thấp hơn lương gộp. Tuấn giải thích các khoản khấu trừ, rồi chị Lan gửi email báo phiếu lương đã có trên mạng nội bộ.",

  objectives: [
    "Hiểu và dùng 10 từ vựng trên phiếu lương (gross salary, net salary, deduction…).",
    "Nghe hiểu lời giải thích về các khoản khấu trừ và phụ cấp.",
    "Đọc email thông báo phiếu lương và tìm đúng con số, hạn báo lỗi.",
    "So sánh số liệu với higher than, lower than, five percent more và nói phần trăm.",
    "Viết email ngắn giải thích vì sao lương thực nhận thấp hơn lương gộp."
  ],

  vocabulary: [
    { word: "payslip", ipa: "/ˈpeɪˌslɪp/", pos: "noun", meaning: "phiếu lương",
      example: "Your payslip is on the intranet.", exampleVi: "Phiếu lương của bạn có trên mạng nội bộ." },
    { word: "gross salary", ipa: "/ˈɡroʊs ˈsæləri/", pos: "noun", meaning: "lương gộp (trước khi trừ các khoản)",
      example: "Your gross salary is the amount before deductions.", exampleVi: "Lương gộp là số tiền trước khi trừ các khoản." },
    { word: "net salary", ipa: "/ˈnet ˈsæləri/", pos: "noun", meaning: "lương thực nhận",
      example: "Your net salary goes into your bank account.", exampleVi: "Lương thực nhận được chuyển vào tài khoản ngân hàng của bạn." },
    { word: "deduction", ipa: "/dɪˈdʌkʃən/", pos: "noun", meaning: "khoản bị trừ",
      example: "Insurance is the biggest deduction.", exampleVi: "Bảo hiểm là khoản trừ lớn nhất." },
    { word: "social insurance", ipa: "/ˈsoʊʃəl ɪnˈʃʊrəns/", pos: "noun", meaning: "bảo hiểm xã hội",
      example: "Social insurance is eight percent of your insurance salary.", exampleVi: "Bảo hiểm xã hội bằng tám phần trăm tiền lương đóng bảo hiểm của bạn." },
    { word: "personal income tax", ipa: "/ˈpɜːrsənəl ˈɪnkʌm tæks/", pos: "noun", meaning: "thuế thu nhập cá nhân",
      example: "Personal income tax is higher when your income is higher.", exampleVi: "Thuế thu nhập cá nhân cao hơn khi thu nhập cao hơn." },
    { word: "allowance", ipa: "/əˈlaʊəns/", pos: "noun", meaning: "phụ cấp",
      example: "The transport allowance is on your payslip.", exampleVi: "Phụ cấp đi lại có trên phiếu lương của bạn." },
    { word: "bonus", ipa: "/ˈboʊnəs/", pos: "noun", meaning: "tiền thưởng",
      example: "The sales bonus is paid every quarter.", exampleVi: "Thưởng kinh doanh được trả mỗi quý." },
    { word: "basic salary", ipa: "/ˈbeɪsɪk ˈsæləri/", pos: "noun", meaning: "lương cơ bản",
      example: "Your bonus is calculated from your basic salary.", exampleVi: "Tiền thưởng của bạn được tính từ lương cơ bản." },
    { word: "pay period", ipa: "/ˈpeɪ ˌpɪriəd/", pos: "noun", meaning: "kỳ lương",
      example: "The pay period is one month.", exampleVi: "Kỳ lương là một tháng." }
  ],

  pronunciation: {
    groups: [
      {
        title: "Phân biệt -teen và -ty",
        text: "Số tận cùng -teen có trọng âm ở -teen (đọc dài). Số tận cùng -ty có trọng âm ở âm đầu. Nghe và đọc rõ để không nhầm 15% với 50%.",
        items: [
          { word: "fifteen", marked: "fif·TEEN" },
          { word: "fifty", marked: "FIF·ty" },
          { word: "thirteen", marked: "thir·TEEN" },
          { word: "thirty", marked: "THIR·ty" },
          { word: "percent", marked: "per·CENT", note: "Trọng âm ở âm tiết thứ hai." }
        ]
      },
      {
        title: "Âm cuối -er trong so sánh",
        text: "Đuôi -er trong higher, lower đọc là /ər/ (âm cong lưỡi kiểu Mỹ). Từ than đọc nhẹ /ðən/.",
        items: [
          { word: "higher", marked: "HIGH·er" },
          { word: "lower", marked: "LOW·er" },
          { word: "than", marked: "/ðən/", note: "Đọc nhẹ, không nhấn." }
        ]
      }
    ],
    sentences: [
      "Your gross salary is higher than your net salary.",
      "The allowance is five percent higher than last month.",
      "Social insurance is eight percent of your insurance salary."
    ]
  },

  listening: {
    title: "A question about a payslip",
    setting: "Thứ Tư, ngày trả lương, tại phòng Nhân sự. Peter hỏi Tuấn về phiếu lương của mình.",
    speakers: { peter: "Peter (Sales)", tuan: "Tuan (HR Assistant)" },
    lines: [
      { s: "peter", text: "Tuan, I just got my payslip and I'm confused. My net salary is lower than my gross salary. Why?",
        vi: "Tuấn ơi, tôi vừa nhận phiếu lương và tôi hơi rối. Lương thực nhận của tôi thấp hơn lương gộp. Tại sao vậy?" },
      { s: "tuan", text: "That's normal, Peter. Net salary is the money you receive in your bank account. Gross salary is the amount before deductions.",
        vi: "Bình thường mà anh Peter. Lương thực nhận là tiền anh nhận trong tài khoản ngân hàng. Lương gộp là số tiền trước khi trừ các khoản." },
      { s: "peter", text: "What deductions are there?",
        vi: "Có những khoản trừ nào vậy?" },
      { s: "tuan", text: "First, social insurance. You pay eight percent of your insurance salary. Then health insurance, one and a half percent, and unemployment insurance, one percent.",
        vi: "Trước hết là bảo hiểm xã hội. Anh đóng tám phần trăm tiền lương đóng bảo hiểm. Rồi bảo hiểm y tế, một phẩy năm phần trăm, và bảo hiểm thất nghiệp, một phần trăm." },
      { s: "peter", text: "So the total is ten and a half percent?",
        vi: "Vậy tổng cộng là mười phẩy năm phần trăm phải không?" },
      { s: "tuan", text: "Exactly. After that there is personal income tax. It is higher when your income is higher.",
        vi: "Chính xác. Sau đó là thuế thu nhập cá nhân. Thu nhập càng cao thì thuế càng cao." },
      { s: "peter", text: "I see. And this line, transport allowance? It's bigger than last month.",
        vi: "Tôi hiểu rồi. Còn dòng này, phụ cấp đi lại? Nó lớn hơn tháng trước." },
      { s: "tuan", text: "Yes. The company raised it by five percent, so it is five percent higher than last month.",
        vi: "Vâng. Công ty đã tăng thêm năm phần trăm, nên nó cao hơn tháng trước năm phần trăm." },
      { s: "peter", text: "Good. I don't see a bonus on my payslip, though.",
        vi: "Tốt. Nhưng tôi không thấy tiền thưởng trên phiếu lương." },
      { s: "tuan", text: "The sales bonus is paid every quarter, so it is not in this pay period. If you see a mistake, please tell me or Ms. Lan before Friday.",
        vi: "Thưởng kinh doanh được trả mỗi quý, nên không có trong kỳ lương này. Nếu anh thấy sai sót, anh báo em hoặc chị Lan trước thứ Sáu nhé." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "What is net salary?",
        options: ["The salary before deductions", "The tax on your salary", "The bonus every quarter", "The money you receive after deductions"],
        answer: 3, explanation: "“Net salary is the money you receive in your bank account.” Lương gộp (gross) mới là số tiền trước khi trừ các khoản." },
      { id: "l2", type: "choice", prompt: "What is the total of the three insurance deductions?",
        options: ["Eight percent", "Nine and a half percent", "Ten and a half percent", "Twelve percent"],
        answer: 2, explanation: "Tám cộng một phẩy năm cộng một bằng mười phẩy năm: “ten and a half percent”. Tám phần trăm chỉ là bảo hiểm xã hội." },
      { id: "l3", type: "choice", prompt: "How is the transport allowance this month?",
        options: ["Five percent higher than last month", "Five percent lower than last month", "Ten percent higher than last month", "The same as last month"],
        answer: 0, explanation: "“It is five percent higher than last month.” Công ty đã tăng phụ cấp thêm năm phần trăm." }
    ]
  },

  reading: {
    title: "Payslips are ready",
    intro: "Email chị Lan gửi cho cả công ty vào ngày trả lương, thứ Tư 25/11. Đọc và tìm các con số quan trọng.",
    email: {
      from: "Lan Pham <lan.pham@riverside-trading.example>",
      to: "All staff",
      date: "Wednesday, 25 November",
      subject: "November payslips are ready",
      greeting: "Dear all,",
      paragraphs: [
        "Today is payday. Your November payslips are now on the intranet. Please remember these points:"
      ],
      list: [
        "Insurance deductions are 10.5% of your insurance salary.",
        "The transport allowance is 5% higher than in October.",
        "Your net salary is lower than your gross salary because of the deductions and personal income tax."
      ],
      after: [
        "If you see a mistake, please tell Tuan or me before Friday, 27 November. We can correct it in the December pay period.",
        "Thank you for your hard work this month."
      ],
      closing: "Best regards,",
      signature: ["Lan Pham", "HR Officer, Riverside Trading"]
    },
    glossary: [
      { term: "remember these points", vi: "ghi nhớ những điểm sau" },
      { term: "mistake", vi: "sai sót, lỗi" },
      { term: "correct (verb)", vi: "sửa lại cho đúng" },
      { term: "hard work", vi: "sự làm việc chăm chỉ" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "Where can staff see their payslips?",
        options: ["In the HR office", "On the intranet", "In the staff canteen", "At the reception"],
        answer: 1, explanation: "“Your November payslips are now on the intranet.”" },
      { id: "r2", type: "choice", prompt: "How much are the insurance deductions?",
        options: ["8% of insurance salary", "5% of insurance salary", "10.5% of insurance salary", "15% of insurance salary"],
        answer: 2, explanation: "“Insurance deductions are 10.5% of your insurance salary.” 5% là mức tăng phụ cấp đi lại, không phải bảo hiểm." },
      { id: "r3", type: "choice", prompt: "What should an employee do if the payslip has a mistake?",
        options: ["Wait for the next pay period", "Call the bank", "Ask the line manager", "Tell Tuan or Lan before Friday, 27 November"],
        answer: 3, explanation: "“If you see a mistake, please tell Tuan or me before Friday, 27 November.”" }
    ]
  },

  grammar: {
    title: "Comparing numbers and percentages",
    titleVi: "So sánh số liệu và phần trăm",
    intro: "Phiếu lương toàn là con số. Để so sánh, bạn dùng tính từ thêm -er + than, hoặc nói rõ chênh lệch bao nhiêu phần trăm. Bốn mẫu câu dưới đây xuất hiện trong hội thoại và email.",
    patterns: [
      { form: "tính từ + -er + than", use: "So sánh hơn giữa hai con số hoặc hai vật (higher, lower, bigger, smaller).",
        examples: ["Your gross salary is higher than your net salary.", "This month's deduction is lower than last month's."] },
      { form: "số % + higher / lower / more / less (+ than …)", use: "Nói rõ chênh lệch bao nhiêu phần trăm. Không thêm -s vào percent.",
        examples: ["The allowance is five percent higher than last month.", "Her bonus is 10% more than his bonus."] },
      { form: "more / less + danh từ + than", use: "So sánh số lượng với danh từ. Dùng less với danh từ không đếm được, more cho cả hai loại.",
        examples: ["I have more deductions than Peter.", "She has less overtime than last month."] },
      { form: "số % + of + danh từ", use: "Nói một phần trăm của một khoản.",
        examples: ["Social insurance is 8% of your insurance salary.", "The bonus is 20% of the monthly salary."] }
    ],
    mistakes: [
      { wrong: "My net salary is more low than my gross salary.", right: "My net salary is lower than my gross salary.", note: "low là tính từ ngắn: thêm -er (lower), không dùng more." },
      { wrong: "The allowance is five percents higher.", right: "The allowance is five percent higher.", note: "Percent không thêm -s, dù số lớn hơn một." },
      { wrong: "Net salary is lower that gross salary.", right: "Net salary is lower than gross salary.", note: "So sánh hơn dùng than, không dùng that." },
      { wrong: "Deductions are ten percent from my salary.", right: "Deductions are ten percent of my salary.", note: "Phần trăm của một khoản dùng “of”, không dùng “from”." }
    ],
    tip: "Cách đọc số thập phân: 10.5% đọc là “ten point five percent” hoặc “ten and a half percent”. 1.5% đọc là “one point five percent” hoặc “one and a half percent”. Về luật: người lao động đóng 8% bảo hiểm xã hội + 1,5% bảo hiểm y tế + 1% bảo hiểm thất nghiệp = 10,5% trên tiền lương đóng bảo hiểm (insurance salary). Mức này gồm lương theo công việc hoặc chức danh, phụ cấp lương và các khoản bổ sung cố định ghi trong hợp đồng, nên không phải lúc nào cũng bằng lương cơ bản (basic salary)."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "The amount of money before deductions is the ___ salary.",
      options: ["net", "gross", "bonus", "allowance"],
      answer: 1, explanation: "Gross salary = lương gộp, trước khi trừ các khoản. Net salary là lương sau khi trừ." },
    { id: "p2", type: "gap", prompt: "Money that the company takes from your salary for tax or insurance is a ___.",
      options: ["deduction", "bonus", "allowance", "payslip"],
      answer: 0, explanation: "Deduction = khoản bị trừ. Bonus và allowance là khoản được cộng thêm; payslip là tờ phiếu ghi các khoản." },
    { id: "p3", type: "gap", prompt: "A ___ is extra money for very good results.",
      options: ["deduction", "allowance", "bonus", "pay period"],
      answer: 2, explanation: "Bonus = tiền thưởng cho kết quả tốt. Allowance là phụ cấp cho chi phí như đi lại, ăn trưa." },
    { id: "p4", type: "gap", prompt: "Your gross salary is ___ than your net salary.",
      options: ["more high", "the highest", "as high", "higher"],
      answer: 3, explanation: "So sánh hơn của high là higher + than. Không nói “more high”; “the highest” là so sánh nhất; “as high” cần “as … as”." },
    { id: "p5", type: "gap", prompt: "The new allowance is five percent ___ the old allowance.",
      options: ["more", "higher than", "high than", "higher as"],
      answer: 1, explanation: "five percent + higher than + danh từ. Câu “five percent more the old” thiếu than; “high than” thiếu -er; “higher as” sai từ nối." },
    { id: "p6", type: "gap", prompt: "Social insurance is 8% ___ the insurance salary.",
      options: ["of", "from", "than", "to"],
      answer: 0, explanation: "Phần trăm của một khoản: 8% of the insurance salary." },
    { id: "p7", type: "choice", prompt: "Which sentence is correct?",
      options: ["Net salary is more low than gross salary.", "The allowance is five percents higher.", "Net salary is lower than gross salary.", "Deductions are ten percent from my pay."],
      answer: 2, explanation: "Lower than là đúng. A sai vì “more low”, B sai vì “percents”, D sai vì “from” (phải là “of”)." },
    { id: "p8", type: "choice", prompt: "How do you read 10.5%?",
      options: ["ten fifty percent", "ten five percent", "ten and five percent", "ten point five percent"],
      answer: 3, explanation: "Dấu chấm thập phân đọc là “point”: ten point five percent. (Cũng có thể nói ten and a half percent.)" },
    { id: "p9", type: "choice", prompt: "Which number has the stress on the SECOND syllable?",
      options: ["fifteen", "fifty", "thirty", "forty"],
      answer: 0, explanation: "fif·TEEN có trọng âm ở âm thứ hai. FIF·ty, THIR·ty và FOR·ty đều có trọng âm ở âm đầu." },
    { id: "p10", type: "choice", context: "The Sales bonus is 20% of basic salary. The Logistics bonus is 15% of basic salary.", prompt: "Which statement is correct?",
      options: ["The Logistics bonus is higher.", "The Sales bonus is higher.", "The two bonuses are the same.", "We cannot compare them."],
      answer: 1, explanation: "Hai mươi phần trăm cao hơn mười lăm phần trăm, nên thưởng của nhóm Kinh doanh cao hơn." }
  ],

  writing: {
    title: "Explain gross and net salary",
    task: "Bạn là Tuấn. Mai Le hỏi vì sao lương thực nhận thấp hơn lương gộp. Hãy viết email trả lời ngắn (50–90 từ).",
    requirements: [
      "Mở đầu bằng lời chào (Dear Mai,) và cảm ơn câu hỏi.",
      "Nói lương gộp (gross) cao hơn lương thực nhận (net) vì có khoản bị trừ.",
      "Nêu phần trăm bảo hiểm: 8% bảo hiểm xã hội, tổng 2,5% bảo hiểm y tế và thất nghiệp.",
      "Nhắc tới thuế thu nhập cá nhân.",
      "Mời chị gọi lại nếu còn thắc mắc.",
      "Kết thúc email và ký tên."
    ],
    minWords: 50,
    maxWords: 90,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Dear …)", pattern: "\\bdear\\b|\\bhello\\b|\\bhi\\b" },
      { label: "Nhắc tới gross salary", pattern: "\\bgross\\b" },
      { label: "Nhắc tới net salary", pattern: "\\bnet\\b" },
      { label: "Có so sánh (higher than / lower than / more than)", pattern: "higher than|lower than|more than|less than" },
      { label: "Có phần trăm", pattern: "%|percent" },
      { label: "Có lời kết (Best regards …)", pattern: "regards|sincerely|best wishes" }
    ],
    model: [
      "Dear Mai,",
      "Thank you for your question about your payslip. Your gross salary is higher than your net salary because of deductions.",
      "Social insurance is 8% of your insurance salary, and health and unemployment insurance are 2.5% in total. After that, personal income tax is deducted. If you still have a question, please call me.",
      "Best regards,",
      "Tuan Nguyen"
    ]
  },

  review: {
    keyPhrases: [
      { en: "Your gross salary is higher than your net salary.", vi: "Lương gộp của bạn cao hơn lương thực nhận." },
      { en: "Net salary is the money you receive in your bank account.", vi: "Lương thực nhận là số tiền bạn nhận trong tài khoản ngân hàng." },
      { en: "Insurance deductions are 10.5% of your insurance salary.", vi: "Các khoản bảo hiểm bằng 10,5% tiền lương đóng bảo hiểm của bạn." },
      { en: "The allowance is five percent higher than last month.", vi: "Phụ cấp cao hơn tháng trước năm phần trăm." },
      { en: "The sales bonus is paid every quarter.", vi: "Thưởng kinh doanh được trả mỗi quý." },
      { en: "If you see a mistake, please tell me.", vi: "Nếu bạn thấy sai sót, vui lòng báo cho tôi." }
    ]
  }
});
