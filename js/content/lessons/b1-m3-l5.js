/* =========================================================
   B1 · Module 3 (Compensation, Benefits and Attendance) · Bài 5
   "Payroll questions"
   Nối tiếp B1-M3-L4: sau kỳ trả lương (ngày 25), chị Thảo thấy phiếu
   lương thiếu hoa hồng của tháng trước. Chị gọi Hoa Tran (kế toán, phụ
   trách lương). Hoa kiểm tra và thấy báo cáo doanh số của David đến
   sau khi đã chốt bảng lương; hoa hồng sẽ được chuyển khoản trong kỳ
   lương sau. Thời gian nói áng chừng.
   ========================================================= */
window.EOH.registerLesson({
  id: "b1-m3-l5",
  reviewStatus: "approved", // Linh duyệt ngày 23/10/2026
  duration: "40–50 phút",
  scenario: "Ngay sau kỳ trả lương, chị Thảo mở phiếu lương và thấy thiếu khoản hoa hồng của tháng trước dù chị đã đạt chỉ tiêu. Chị gọi Hoa, kế toán phụ trách lương, để hỏi. Hoa hỏi lại để hiểu rõ vấn đề, kiểm tra số liệu và hứa sửa trong kỳ lương sau. Sau đó Hoa gửi chị email xác nhận.",

  objectives: [
    "Hiểu và dùng 10 từ vựng thường gặp khi hỏi và giải quyết vấn đề về lương.",
    "Nghe cuộc trao đổi về phiếu lương bị thiếu, ghi lại vấn đề, nguyên nhân và cách xử lý.",
    "Đọc email xác nhận cách sửa phiếu lương, tìm đúng nguyên nhân và việc cần làm.",
    "Dùng hiện tại hoàn thành tiếp diễn (I've been checking…) với for / since, và các câu làm rõ (Do you mean…? Could you clarify…?).",
    "Viết email hỏi về khoản lương còn thiếu bằng các mẫu câu này."
  ],

  vocabulary: [
    { word: "discrepancy", ipa: "/dɪˈskrepənsi/", pos: "noun", meaning: "sự chênh lệch, sai lệch giữa hai số liệu",
      example: "There is a discrepancy between the report and the payslip.", exampleVi: "Có sự chênh lệch giữa báo cáo và phiếu lương." },
    { word: "figure", ipa: "/ˈfɪɡjər/", pos: "noun", meaning: "con số, số liệu",
      example: "I have been checking the figures since this morning.", exampleVi: "Tôi đã kiểm tra các số liệu từ sáng nay." },
    { word: "adjust", ipa: "/əˈdʒʌst/", pos: "verb", meaning: "điều chỉnh",
      example: "We will adjust the amount in the next payroll.", exampleVi: "Chúng tôi sẽ điều chỉnh số tiền trong kỳ lương sau." },
    { word: "calculate", ipa: "/ˈkælkjəleɪt/", pos: "verb", meaning: "tính toán",
      example: "The accountant calculates the commission every month.", exampleVi: "Kế toán tính hoa hồng mỗi tháng." },
    { word: "bank transfer", ipa: "/bæŋk ˈtrænsfɜːr/", pos: "noun", meaning: "chuyển khoản ngân hàng",
      example: "Salaries are paid by bank transfer.", exampleVi: "Lương được trả bằng chuyển khoản ngân hàng." },
    { word: "underpaid", ipa: "/ˌʌndərˈpeɪd/", pos: "adjective", meaning: "bị trả thiếu tiền",
      example: "If an employee is underpaid, we correct it quickly.", exampleVi: "Nếu nhân viên bị trả thiếu, chúng tôi sửa nhanh chóng." },
    { word: "clarify", ipa: "/ˈklærəfaɪ/", pos: "verb", meaning: "làm rõ",
      example: "Could you clarify one thing?", exampleVi: "Bạn có thể làm rõ một điều không?" },
    { word: "double-check", ipa: "/ˌdʌbəl ˈtʃek/", pos: "verb", meaning: "kiểm tra lại một lần nữa",
      example: "I will double-check the figures before I send the correction.", exampleVi: "Tôi sẽ kiểm tra lại các số liệu trước khi gửi bản sửa." },
    { word: "pending", ipa: "/ˈpendɪŋ/", pos: "adjective", meaning: "đang chờ xử lý",
      example: "The correction is pending approval.", exampleVi: "Việc điều chỉnh đang chờ duyệt." },
    { word: "supporting document", ipa: "/səˈpɔːrtɪŋ ˈdɑːkjəmənt/", pos: "noun", meaning: "giấy tờ chứng minh kèm theo",
      example: "Please send the supporting documents with your request.", exampleVi: "Vui lòng gửi các giấy tờ chứng minh cùng yêu cầu của bạn." }
  ],

  pronunciation: {
    groups: [
      {
        title: "Trọng âm của từ",
        text: "Những từ dưới đây hay gặp khi hỏi về lương. Âm tiết in hoa là âm đọc to và dài hơn.",
        items: [
          { word: "discrepancy", marked: "dis·CREP·an·cy" },
          { word: "calculate", marked: "CAL·cu·late" },
          { word: "adjust", marked: "ad·JUST" },
          { word: "clarify", marked: "CLAR·i·fy" },
          { word: "pending", marked: "PEND·ing" },
          { word: "underpaid", marked: "un·der·PAID" }
        ]
      },
      {
        title: "I've been … đọc rút gọn",
        text: "Hiện tại hoàn thành tiếp diễn thường nói rút gọn: I've been /aɪv bɪn/, she's been /ʃiːz bɪn/. Động từ -ing được nhấn.",
        items: [
          { word: "I've been checking", marked: "/aɪv bɪn/ CHECK·ing" },
          { word: "she's been waiting", marked: "/ʃiːz bɪn/ WAIT·ing" }
        ]
      }
    ],
    sentences: [
      "I've been waiting for my commission since payday.",
      "Do you mean the commission for last month?",
      "Let me make sure I understand."
    ]
  },

  listening: {
    title: "My commission is missing",
    setting: "Văn phòng kế toán, ngay sau kỳ trả lương. Chị Thảo gọi Hoa hỏi về phiếu lương của mình.",
    speakers: { thao: "Thao (Sales Executive)", hoa: "Hoa (Accountant)" },
    lines: [
      { s: "thao", text: "Hi Hoa, do you have a minute? I have a question about my payslip.",
        vi: "Chào Hoa, em có rảnh một chút không? Chị có câu hỏi về phiếu lương của chị." },
      { s: "hoa", text: "Of course. What's the problem?",
        vi: "Dạ được. Có vấn đề gì vậy chị?" },
      { s: "thao", text: "My commission isn't on the payslip. I've been waiting for it since payday.",
        vi: "Hoa hồng của chị không có trong phiếu lương. Chị đã chờ khoản đó từ ngày trả lương." },
      { s: "hoa", text: "I'm sorry about that. Do you mean the commission for last month or for this month?",
        vi: "Em xin lỗi chị. Ý chị là hoa hồng của tháng trước hay tháng này ạ?" },
      { s: "thao", text: "Last month. I reached my target, and David sent the sales report.",
        vi: "Tháng trước. Chị đã đạt chỉ tiêu và David đã gửi báo cáo doanh số." },
      { s: "hoa", text: "Let me make sure I understand. You reached the target, and the report was sent, but the commission is not on the payslip. Is that right?",
        vi: "Để em chắc là em hiểu đúng. Chị đã đạt chỉ tiêu, báo cáo đã được gửi, nhưng hoa hồng không có trong phiếu lương. Đúng không ạ?" },
      { s: "thao", text: "Yes, exactly.",
        vi: "Đúng, chính xác." },
      { s: "hoa", text: "I've been checking the figures since this morning. I think the sales report arrived after we closed the payroll.",
        vi: "Em đã kiểm tra các số liệu từ sáng nay. Em nghĩ báo cáo doanh số đến sau khi chúng em chốt bảng lương." },
      { s: "thao", text: "So I've been underpaid?",
        vi: "Vậy là chị bị trả thiếu?" },
      { s: "hoa", text: "It looks like that. Could you clarify one thing? What was the date on David's email?",
        vi: "Có vẻ như vậy ạ. Chị có thể làm rõ một điều không? Email của David gửi ngày nào ạ?" },
      { s: "thao", text: "I'm not sure. I'll forward it to you.",
        vi: "Chị không chắc. Chị sẽ chuyển tiếp cho em." },
      { s: "hoa", text: "Thanks. I've been working on the correction already. You'll get the commission by bank transfer in the next payroll, or sooner if possible.",
        vi: "Cảm ơn chị. Em đang làm việc sửa rồi. Chị sẽ nhận hoa hồng bằng chuyển khoản trong kỳ lương sau, hoặc sớm hơn nếu có thể." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "What is wrong with Thao's payslip?",
        options: ["The base salary is too high", "Her commission is missing", "Her name is wrong", "Her bank account is wrong"],
        answer: 1, explanation: "Chị Thảo nói: “My commission isn't on the payslip.”" },
      { id: "l2", type: "choice", prompt: "Why is the commission missing?",
        options: ["Thao did not reach the target", "Hoa forgot to calculate it", "The sales report arrived after the payroll was closed", "David refused to pay it"],
        answer: 2, explanation: "Hoa nói: “I think the sales report arrived after we closed the payroll.”" },
      { id: "l3", type: "choice", prompt: "How will Thao receive the commission?",
        options: ["In cash today", "By bank transfer in the next payroll, or sooner if possible", "With the annual bonus", "She will not receive it"],
        answer: 1, explanation: "“You'll get the commission by bank transfer in the next payroll, or sooner if possible.”" }
    ]
  },

  reading: {
    title: "Confirming the correction",
    intro: "Email Hoa gửi chị Thảo sau cuộc gọi. Đọc và tìm nguyên nhân, cách sửa và việc chị Thảo cần làm.",
    email: {
      from: "Hoa Tran <hoa.tran@riverside-trading.example>",
      to: "Thao Ngo",
      date: "Tuesday",
      subject: "Your commission – correction",
      greeting: "Dear Thao,",
      paragraphs: [
        "Thank you for your call this morning. To confirm, I have been checking your commission for last month since yesterday. The sales report from David arrived after we closed the payroll, so the commission was not included in your payslip.",
        "Here is what I have done and what happens next:"
      ],
      list: [
        "I have calculated the commission again and double-checked the figures.",
        "The correction is pending approval from Ms. Ngoc, the Chief Accountant.",
        "The commission will be paid by bank transfer in the next payroll, or sooner if possible."
      ],
      after: [
        "Could you please forward David's email with the date? I need it as a supporting document. If you have been waiting for any other payment, please let me know and I will check it too.",
        "I am sorry for the inconvenience."
      ],
      closing: "Best regards,",
      signature: ["Hoa Tran", "Accountant, Riverside Trading"]
    },
    glossary: [
      { term: "to confirm", vi: "để xác nhận" },
      { term: "included", vi: "được tính vào" },
      { term: "what happens next", vi: "điều gì sẽ xảy ra tiếp theo" },
      { term: "inconvenience", vi: "sự bất tiện" },
      { term: "forward (an email)", vi: "chuyển tiếp (email)" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "Why was the commission not in Thao's payslip?",
        options: ["The report arrived after the payroll was closed", "Thao was absent", "The accountant lost the file", "The commission was cancelled"],
        answer: 0, explanation: "“The sales report from David arrived after we closed the payroll, so the commission was not included.”" },
      { id: "r2", type: "choice", prompt: "What does Hoa need from Thao?",
        options: ["A new bank account", "David's email with the date", "A letter from Lan", "A copy of her contract"],
        answer: 1, explanation: "“Could you please forward David's email with the date? I need it as a supporting document.”" },
      { id: "r3", type: "choice", prompt: "Which statement is TRUE?",
        options: ["The correction needs no approval.", "The commission will be paid in cash.", "The correction is pending approval from Ms. Ngoc.", "Thao has not been underpaid."],
        answer: 2, explanation: "“The correction is pending approval from Ms. Ngoc, the Chief Accountant.” Hoa hồng được chuyển khoản trong kỳ lương sau và chị Thảo đã bị trả thiếu." }
    ]
  },

  grammar: {
    title: "Present perfect continuous and clarifying",
    titleVi: "Hiện tại hoàn thành tiếp diễn và câu làm rõ",
    intro: "Khi hỏi về lương, bạn thường nói mình đã chờ bao lâu hoặc người kia đã kiểm tra từ khi nào, rồi hỏi lại để hiểu đúng. Bốn mẫu dưới đây có trong cuộc gọi và email bạn vừa học.",
    patterns: [
      { form: "have / has been + V-ing", use: "Việc bắt đầu trong quá khứ và còn tiếp diễn đến bây giờ, hoặc vừa kết thúc nhưng còn kết quả.",
        examples: ["I've been waiting for my commission.", "Hoa has been checking the figures."] },
      { form: "for + khoảng thời gian   ·   since + mốc thời gian", use: "for nói đã bao lâu (for two days). since nói từ khi nào (since payday, since this morning).",
        examples: ["I've been waiting since payday.", "She has been working on it for two hours."] },
      { form: "Do you mean …?   ·   So you're saying that …?", use: "Hỏi lại để chắc chắn bạn hiểu đúng ý người kia.",
        examples: ["Do you mean the commission for last month?", "So you're saying that the report arrived late?"] },
      { form: "Could you clarify …?   ·   Let me make sure I understand.", use: "Nhờ người kia làm rõ, hoặc tóm tắt lại để xác nhận.",
        examples: ["Could you clarify one thing?", "Let me make sure I understand. The report was sent, but the commission is missing."] }
    ],
    mistakes: [
      { wrong: "I am waiting for my commission since payday.", right: "I have been waiting for my commission since payday.", note: "Việc kéo dài từ quá khứ đến nay và có since → hiện tại hoàn thành tiếp diễn." },
      { wrong: "She has been wait for two hours.", right: "She has been waiting for two hours.", note: "have / has been + V-ing." },
      { wrong: "I have been checking it since two hours.", right: "I have been checking it for two hours.", note: "Khoảng thời gian (two hours) đi với for; mốc thời gian (this morning) đi với since." },
      { wrong: "Do you mean that you have been paid the commission last month?", right: "Do you mean the commission for last month?", note: "Câu hỏi làm rõ nên ngắn gọn và rõ ràng; tránh ghép thì sai." }
    ],
    tip: "Khi hỏi về lương, hãy nói rõ bạn đã chờ bao lâu (I've been waiting since…) và hỏi lại để chắc chắn bạn hiểu đúng (Do you mean…?). Điều này tránh hiểu nhầm giữa bạn và phòng Kế toán, nhất là với số tiền và ngày tháng."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "I ___ for my commission since payday.",
      options: ["wait", "have been waiting", "am waiting", "waited"],
      answer: 1, explanation: "Việc kéo dài từ quá khứ đến bây giờ, có since → have been waiting." },
    { id: "p2", type: "gap", prompt: "Hoa ___ the figures since this morning.",
      options: ["checks", "is checking", "has been checking", "checked"],
      answer: 2, explanation: "Với since + mốc thời gian dùng has been checking (hiện tại hoàn thành tiếp diễn)." },
    { id: "p3", type: "gap", prompt: "She has been working here ___ three years.",
      options: ["since", "from", "during", "for"],
      answer: 3, explanation: "Khoảng thời gian (three years) đi với for." },
    { id: "p4", type: "gap", prompt: "I have been working on the correction ___ this morning.",
      options: ["for", "since", "in", "at"],
      answer: 1, explanation: "Mốc thời gian (this morning) đi với since." },
    { id: "p5", type: "choice", prompt: "Which sentence is correct?",
      options: ["I am waiting for the correction since Monday.", "I have been wait for the correction since Monday.", "I have been waiting for the correction since Monday.", "I have waiting for the correction since Monday."],
      answer: 2, explanation: "Cấu trúc đúng: have been + V-ing + since + mốc thời gian." },
    { id: "p6", type: "gap", prompt: "A difference between two numbers that should be the same is a ___.",
      options: ["discrepancy", "deduction", "allowance", "commission"],
      answer: 0, explanation: "Discrepancy = sự chênh lệch giữa hai số liệu lẽ ra phải giống nhau." },
    { id: "p7", type: "gap", prompt: "The accountant will ___ the commission again to check the figure.",
      options: ["announce", "calculate", "decline", "resign"],
      answer: 1, explanation: "Calculate = tính toán lại." },
    { id: "p8", type: "gap", prompt: "If an employee receives less money than they should, they have been ___.",
      options: ["overpaid", "reimbursed", "promoted", "underpaid"],
      answer: 3, explanation: "Underpaid = bị trả thiếu tiền. Overpaid là bị trả thừa." },
    { id: "p9", type: "choice", prompt: "Which phrase asks someone to explain something more clearly?",
      options: ["Congratulations on that.", "I'll look into it.", "Could you clarify that?", "See you tomorrow."],
      answer: 2, explanation: "Clarify = làm rõ. “Could you clarify that?” nhờ người kia giải thích rõ hơn." },
    { id: "p10", type: "choice", context: "Hoa asks: “Do you mean the commission for last month?”", prompt: "Why does Hoa ask this?",
      options: ["To refuse the request", "To end the call", "To offer a bonus", "To make sure she understands the question"],
      answer: 3, explanation: "“Do you mean …?” dùng để hỏi lại, chắc chắn rằng mình hiểu đúng ý người nói." }
  ],

  writing: {
    title: "Ask about a missing payment",
    task: "Bạn là Thảo. Trong phiếu lương tháng này thiếu phụ cấp điện thoại của hai tháng. Viết email gửi Hoa (80–120 từ): nói bạn đã kiểm tra và chờ bao lâu, nhờ chị làm rõ và hỏi lại để xác nhận bạn hiểu đúng, rồi nhắc chị cho biết nếu cần giấy tờ.",
    requirements: [
      "Mở đầu bằng lời chào phù hợp.",
      "Có ít nhất một câu hiện tại hoàn thành tiếp diễn (have been + V-ing) với for hoặc since.",
      "Có câu nhờ làm rõ (Could you clarify…?).",
      "Có câu hỏi lại để xác nhận (Do you mean…? / Let me make sure I understand…).",
      "Nhắc đến phiếu lương hoặc lương (payslip / payroll).",
      "Kết thúc email và ký tên."
    ],
    minWords: 80,
    maxWords: 120,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Dear … / Hi …)", pattern: "\\bdear\\b|\\bhi\\b" },
      { label: "Có have / has been + V-ing", pattern: "\\b(have|has|'ve|’ve) been \\w+ing\\b" },
      { label: "Có for hoặc since", pattern: "\\b(for|since) \\w+" },
      { label: "Có câu làm rõ / hỏi lại (clarify / do you mean / make sure I understand)", pattern: "could you clarify|do you mean|let me make sure|so you're saying|so you’re saying" },
      { label: "Nhắc đến payslip / payroll / salary", pattern: "\\b(payslip|payroll|salary)\\b" },
      { label: "Có lời kết (Best regards …)", pattern: "regards|sincerely|best wishes" }
    ],
    model: [
      "Dear Hoa,",
      "I am writing about my payslip. I have been checking it since yesterday, and I think the phone allowance is missing. It has not been paid for two months, and I have been waiting for the correction.",
      "Could you clarify whether the allowance is included in the gross salary? Do you mean that it will be paid in the next payroll? Let me make sure I understand: the allowance was not added because the form was late, is that right?",
      "Please let me know if you need any documents from me.",
      "Best regards,",
      "Thao"
    ]
  },

  review: {
    keyPhrases: [
      { en: "I've been waiting for my commission since payday.", vi: "Tôi đã chờ khoản hoa hồng từ ngày trả lương." },
      { en: "I've been checking the figures since this morning.", vi: "Tôi đã kiểm tra các số liệu từ sáng nay." },
      { en: "Do you mean the commission for last month?", vi: "Ý bạn là hoa hồng của tháng trước phải không?" },
      { en: "Could you clarify one thing?", vi: "Bạn có thể làm rõ một điều không?" },
      { en: "Let me make sure I understand.", vi: "Để tôi chắc là tôi hiểu đúng." },
      { en: "You'll get it by bank transfer in the next payroll.", vi: "Bạn sẽ nhận bằng chuyển khoản trong kỳ lương sau." }
    ]
  }
});
