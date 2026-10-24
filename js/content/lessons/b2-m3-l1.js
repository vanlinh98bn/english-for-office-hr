/* =========================================================
   B2 · Module 3 (Compensation, Benefits and HR Analytics) · Bài 1
   "Pay benchmarking"
   Nối tiếp B2-M2. Cuối năm, chuẩn bị xét tăng lương năm sau. Tuấn
   (HR Executive) so sánh lương với một báo cáo khảo sát lương thị
   trường (khoảng 200 công ty ở miền Bắc). Họp Room 301 với chị Lan
   (HR Manager) và chị Ngoc Dang (Chief Accountant).
   Kết quả: tổng thể thấp hơn thị trường 3%; IT Support thấp hơn 18%
   (Sam là người duy nhất làm IT Support); HR Assistant thấp hơn 10%;
   Sales Executive lương cơ bản thấp hơn 5% nhưng tổng thu nhập (có hoa
   hồng) cao hơn một chút; Accountant cao hơn 2%; Logistics Coordinator
   ngang thị trường. Ngân sách tăng lương năm sau = 6% tổng quỹ lương:
   tăng chung 4% + 2% điều chỉnh thêm cho IT Support và HR Assistant.
   Thời gian nói áng chừng.
   ========================================================= */
window.EOH.registerLesson({
  id: "b2-m3-l1",
  reviewStatus: "approved", // Linh duyệt ngày 24/10/2026
  duration: "45–60 phút",
  scenario: "Cuối năm, phòng Nhân sự chuẩn bị xét tăng lương cho năm sau. Anh Tuấn (HR Executive) so sánh mức lương của công ty với một báo cáo khảo sát lương thị trường. Anh trình bày kết quả với chị Lan (HR Manager) và chị Ngoc Dang (Kế toán trưởng), rồi gửi email tóm tắt kèm đề xuất.",

  objectives: [
    "Hiểu và dùng 10 từ vựng thường gặp khi so sánh lương với thị trường.",
    "Nghe cuộc họp so sánh lương, nắm được vị trí nào thấp hơn, cao hơn hay ngang thị trường.",
    "Đọc email tóm tắt kết quả so sánh lương và đề xuất dùng ngân sách tăng lương.",
    "Dùng từ chỉ mức độ trước so sánh hơn: slightly / a bit / marginally (chênh ít) và much / far / considerably / significantly (chênh nhiều); well below / in line with.",
    "Viết email báo cáo kết quả so sánh lương cho quản lý, nói rõ mức chênh lệch và đề xuất."
  ],

  vocabulary: [
    { word: "benchmarking", ipa: "/ˈbentʃmɑːrkɪŋ/", pos: "noun", meaning: "việc so sánh với một chuẩn (ví dụ: so sánh lương với thị trường)",
      example: "Salary benchmarking helps us stay competitive.", exampleVi: "So sánh lương với thị trường giúp chúng ta giữ được sức cạnh tranh." },
    { word: "salary survey", ipa: "/ˈsæləri ˌsɜːrveɪ/", pos: "noun", meaning: "báo cáo khảo sát lương",
      example: "The salary survey covers about 200 companies.", exampleVi: "Báo cáo khảo sát lương bao gồm khoảng 200 công ty." },
    { word: "market rate", ipa: "/ˈmɑːrkɪt reɪt/", pos: "noun", meaning: "mức lương phổ biến trên thị trường",
      example: "Sam's salary is well below the market rate.", exampleVi: "Lương của Sam thấp hơn nhiều so với mức thị trường." },
    { word: "competitive", ipa: "/kəmˈpetətɪv/", pos: "adjective", meaning: "có sức cạnh tranh, không thua nơi khác",
      example: "Our total pay for Sales is competitive.", exampleVi: "Tổng thu nhập của bộ phận Kinh doanh có sức cạnh tranh." },
    { word: "in line with", ipa: "/ɪn ˈlaɪn wɪð/", pos: "phrase", meaning: "ngang bằng, phù hợp với",
      example: "Logistics salaries are in line with the market.", exampleVi: "Lương bộ phận Logistics ngang với thị trường." },
    { word: "gap", ipa: "/ɡæp/", pos: "noun", meaning: "khoảng chênh lệch",
      example: "The gap is much larger for IT Support.", exampleVi: "Khoảng chênh lệch lớn hơn nhiều ở vị trí IT Support." },
    { word: "adjustment", ipa: "/əˈdʒʌstmənt/", pos: "noun", meaning: "sự điều chỉnh (lương)",
      example: "We will make an extra adjustment for two roles.", exampleVi: "Chúng ta sẽ điều chỉnh thêm cho hai vị trí." },
    { word: "generous", ipa: "/ˈdʒenərəs/", pos: "adjective", meaning: "hào phóng, cao (mức thưởng, hoa hồng)",
      example: "Our commission is far more generous than other companies'.", exampleVi: "Hoa hồng của chúng ta cao hơn nhiều so với các công ty khác." },
    { word: "job grade", ipa: "/ˈdʒɑːb ɡreɪd/", pos: "noun", meaning: "bậc công việc, ngạch lương",
      example: "The full table shows the pay for each job grade.", exampleVi: "Bảng đầy đủ cho thấy mức lương của từng bậc công việc." },
    { word: "overall", ipa: "/ˌoʊvərˈɔːl/", pos: "adverb", meaning: "nhìn chung, tổng thể",
      example: "Overall, our pay is slightly lower than the market.", exampleVi: "Nhìn chung, lương của chúng ta thấp hơn thị trường một chút." }
  ],

  pronunciation: {
    groups: [
      {
        title: "Nhấn từ chỉ mức độ",
        text: "Khi so sánh, người nói nhấn vào cả từ chỉ mức độ và tính từ so sánh. Âm tiết in hoa là âm đọc to và dài hơn.",
        items: [
          { word: "slightly higher", marked: "SLIGHT·ly HIGH·er" },
          { word: "considerably lower", marked: "con·SID·er·a·bly LOW·er" },
          { word: "significantly", marked: "sig·NIF·i·cant·ly" },
          { word: "competitive", marked: "com·PET·i·tive" }
        ]
      },
      {
        title: "than đọc nhẹ /ðən/",
        text: "Trong câu so sánh, than đọc rất nhẹ /ðən/ và nối liền với từ phía trước.",
        items: [
          { word: "lower than the market", marked: "LOW·er thən the MAR·ket" },
          { word: "higher than ours", marked: "HIGH·er thən OURS" }
        ]
      }
    ],
    sentences: [
      "Overall, our pay is slightly lower than the market.",
      "IT Support is considerably lower than the market rate.",
      "Our commission is far more generous than other companies'."
    ]
  },

  listening: {
    title: "Comparing our salaries with the market",
    setting: "Room 301. Anh Tuấn (HR Executive) trình bày kết quả so sánh lương với chị Lan (HR Manager) và chị Ngoc Dang (Kế toán trưởng).",
    speakers: { lan: "Lan (HR Manager)", tuan: "Tuan (HR Executive)", ngoc: "Ngoc (Chief Accountant)" },
    lines: [
      { s: "lan", text: "Thanks for coming, Ngoc. Tuan has compared our salaries with the new market survey. Tuan, can you take us through it?",
        vi: "Cảm ơn chị Ngọc đã đến. Tuấn đã so sánh lương của mình với báo cáo khảo sát thị trường mới. Tuấn, em trình bày nhé?" },
      { s: "tuan", text: "Sure. The survey covers about two hundred companies in the north. Overall, our pay is slightly lower than the market average, by three percent.",
        vi: "Vâng ạ. Khảo sát gồm khoảng hai trăm công ty ở miền Bắc. Nhìn chung, lương của mình thấp hơn mức trung bình thị trường một chút, ba phần trăm." },
      { s: "ngoc", text: "Which roles have the biggest gap?",
        vi: "Vị trí nào chênh lệch nhiều nhất?" },
      { s: "tuan", text: "IT Support is the biggest problem. Sam's salary is considerably lower than the market rate. It's eighteen percent lower.",
        vi: "IT Support là vấn đề lớn nhất. Lương của Sam thấp hơn đáng kể so với mức thị trường. Thấp hơn mười tám phần trăm." },
      { s: "lan", text: "That's a real risk. Sam is the only person in IT Support. If he leaves, we're in trouble.",
        vi: "Đó là rủi ro thật sự. Sam là người duy nhất làm IT Support. Nếu Sam nghỉ thì mình gặp rắc rối." },
      { s: "tuan", text: "HR Assistant pay is also much lower. It's about ten percent below the market.",
        vi: "Lương HR Assistant cũng thấp hơn nhiều. Thấp hơn thị trường khoảng mười phần trăm." },
      { s: "ngoc", text: "What about my team? I'd like to know before the year-end review.",
        vi: "Còn nhóm của chị thì sao? Chị muốn biết trước đợt xét cuối năm." },
      { s: "tuan", text: "Our accountants are paid slightly more than the market, about two percent. And Logistics Coordinators are in line with the market.",
        vi: "Kế toán của mình được trả cao hơn thị trường một chút, khoảng hai phần trăm. Còn Logistics Coordinator thì ngang thị trường." },
      { s: "lan", text: "And Sales?",
        vi: "Còn Kinh doanh?" },
      { s: "tuan", text: "The base pay for Sales Executives is a bit lower than the market, but our commission is far more generous. So their total pay is actually slightly higher.",
        vi: "Lương cơ bản của Sales Executive thấp hơn thị trường một chút, nhưng hoa hồng của mình cao hơn nhiều. Nên tổng thu nhập của họ thật ra cao hơn một chút." },
      { s: "ngoc", text: "Good. The budget for pay increases next year is six percent of total payroll. That's a little higher than this year.",
        vi: "Tốt. Ngân sách tăng lương năm sau là sáu phần trăm tổng quỹ lương. Cao hơn năm nay một chút." },
      { s: "lan", text: "Then I suggest a four percent increase for everyone, and extra adjustments for IT Support and HR Assistant.",
        vi: "Vậy chị đề xuất tăng bốn phần trăm cho tất cả mọi người, và điều chỉnh thêm cho IT Support và HR Assistant." },
      { s: "ngoc", text: "That sounds reasonable. Could you send me the figures by the end of next week?",
        vi: "Nghe hợp lý đấy. Em gửi chị số liệu trước cuối tuần sau được không?" },
      { s: "tuan", text: "Of course. I'll put everything in an email with the full table.",
        vi: "Dạ được ạ. Em sẽ gửi email kèm bảng đầy đủ." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "Which role is paid considerably lower than the market?",
        options: ["Accountant", "Logistics Coordinator", "IT Support", "Sales Executive"],
        answer: 2, explanation: "Tuấn nói: “Sam's salary is considerably lower than the market rate. It's eighteen percent lower.” Sam làm IT Support. Accountant cao hơn thị trường một chút, Logistics Coordinator ngang thị trường." },
      { id: "l2", type: "choice", prompt: "How does total pay for Sales Executives compare with the market?",
        options: ["It is considerably lower.", "It is slightly higher.", "It is exactly the same.", "It is much lower."],
        answer: 1, explanation: "“…our commission is far more generous. So their total pay is actually slightly higher.” Chỉ lương cơ bản mới thấp hơn thị trường một chút (a bit lower)." },
      { id: "l3", type: "choice", prompt: "What does Lan suggest?",
        options: ["A 4% increase for everyone plus extra adjustments for two roles", "A 6% increase for everyone", "No increase for Accounting", "Hiring a second IT Support person"],
        answer: 0, explanation: "“I suggest a four percent increase for everyone, and extra adjustments for IT Support and HR Assistant.” Con số 6% là tổng ngân sách chị Ngọc nêu, không phải mức tăng cho mỗi người." }
    ]
  },

  reading: {
    title: "Salary benchmarking results",
    intro: "Email anh Tuấn gửi chị Lan, đồng gửi chị Ngoc Dang. Đọc và tìm mức chênh lệch của từng vị trí và đề xuất dùng ngân sách.",
    email: {
      from: "Tuan Nguyen <tuan.nguyen@riverside-trading.example>",
      to: "Lan Pham; cc: Ngoc Dang",
      date: "Thursday",
      subject: "Salary benchmarking results",
      greeting: "Dear Lan,",
      paragraphs: [
        "As discussed at our meeting, I have compared our base salaries with the latest market survey, which covers about 200 companies in northern Vietnam. Overall, our pay is slightly lower than the market average, by 3%. However, the gap is much larger for some roles. Please see the summary below."
      ],
      list: [
        "IT Support: 18% below the market. This gap is considerably larger than for any other role and is our biggest risk, as Sam is our only IT Support specialist.",
        "HR Assistant: 10% below the market. Starting salaries at other companies are significantly higher than ours.",
        "Sales Executive: base pay is 5% below the market, but total pay including commission is slightly higher.",
        "Accountant: 2% above the market.",
        "Logistics Coordinator: in line with the market."
      ],
      after: [
        "With a budget of 6% of total payroll, I recommend a general increase of 4% for all staff. The remaining 2% would cover extra adjustments for IT Support and HR Assistant. This would bring both roles much closer to the market rate, although they would still be a little lower.",
        "I have attached the full table with the pay for each job grade. Please let me know if you would like me to model other options before the end of next week."
      ],
      closing: "Best regards,",
      signature: ["Tuan Nguyen", "HR Executive, Riverside Trading"]
    },
    glossary: [
      { term: "base salary", vi: "lương cơ bản" },
      { term: "specialist", vi: "chuyên viên" },
      { term: "starting salary", vi: "lương khởi điểm" },
      { term: "bring … closer to", vi: "đưa … lại gần hơn với" },
      { term: "model options", vi: "tính thử các phương án" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "According to the email, how does Riverside's overall pay compare with the market?",
        options: ["It is much higher.", "It is slightly lower.", "It is considerably lower.", "It is the same."],
        answer: 1, explanation: "“Overall, our pay is slightly lower than the market average, by 3%.” Chỉ một số vị trí mới chênh nhiều (much larger)." },
      { id: "r2", type: "choice", prompt: "Why is IT Support the biggest risk?",
        options: ["Sam has asked for a pay rise.", "The IT budget was cut.", "Sam is leaving next month.", "Sam is the only IT Support specialist."],
        answer: 3, explanation: "“…is our biggest risk, as Sam is our only IT Support specialist.” Email không nói Sam xin tăng lương hay sắp nghỉ." },
      { id: "r3", type: "choice", prompt: "What will the remaining 2% of the budget be used for?",
        options: ["A general increase for all staff", "Sales commission", "Extra adjustments for IT Support and HR Assistant", "Training"],
        answer: 2, explanation: "“The remaining 2% would cover extra adjustments for IT Support and HR Assistant.” Mức tăng chung cho mọi người là 4%." }
    ]
  },

  grammar: {
    title: "Modifying comparisons: slightly higher, considerably lower",
    titleVi: "Nói mức độ chênh lệch khi so sánh",
    intro: "Khi so sánh lương, chỉ nói “higher” hay “lower” là chưa đủ. Người đọc cần biết chênh ít hay chênh nhiều. Ta đặt một từ chỉ mức độ trước tính từ so sánh. Bốn mẫu dưới đây có trong cuộc họp và email bạn vừa học.",
    patterns: [
      { form: "Chênh ít: slightly / a bit / a little / marginally + so sánh hơn", use: "Khoảng chênh nhỏ, thường vài phần trăm.",
        examples: ["Overall, our pay is slightly lower than the market.", "The budget is a little higher than this year."] },
      { form: "Chênh nhiều: much / far / considerably / significantly + so sánh hơn", use: "Khoảng chênh lớn, đáng chú ý.",
        examples: ["Sam's salary is considerably lower than the market rate.", "The gap is much larger for some roles."] },
      { form: "Từ chỉ mức độ + more / less + tính từ dài", use: "Với tính từ dài (generous, competitive), đặt từ chỉ mức độ trước more / less.",
        examples: ["Our commission is far more generous than other companies'.", "Our offer is slightly less competitive for HR roles."] },
      { form: "well below / well above / in line with + the market", use: "So với một mức chuẩn: thấp hơn nhiều, cao hơn nhiều, hoặc ngang bằng.",
        examples: ["IT Support pay is well below the market.", "Logistics salaries are in line with the market."] }
    ],
    mistakes: [
      { wrong: "Our pay is very lower than the market.", right: "Our pay is much lower than the market.", note: "Không dùng very trước so sánh hơn. Dùng much / far / considerably." },
      { wrong: "Their offer is much more higher than ours.", right: "Their offer is much higher than ours.", note: "higher đã là so sánh hơn, không thêm more." },
      { wrong: "Our commission is far generous than theirs.", right: "Our commission is far more generous than theirs.", note: "Tính từ dài cần more: far more generous." },
      { wrong: "Logistics pay is in line the market.", right: "Logistics pay is in line with the market.", note: "Cụm cố định: in line with." }
    ],
    tip: "Trong báo cáo lương, nên ghi kèm con số phần trăm sau từ chỉ mức độ để người đọc không hiểu sai: “considerably lower (18%)”. Mỗi người hiểu “slightly” hay “much” một kiểu, con số giúp mọi người cùng hiểu."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "IT Support pay is ___ lower than the market rate. It is 18 percent lower.",
      options: ["slightly", "considerably", "a little", "marginally"],
      answer: 1, explanation: "18% là chênh lệch lớn → considerably lower. slightly / a little / marginally chỉ dùng cho chênh lệch nhỏ." },
    { id: "p2", type: "gap", prompt: "Our accountants earn ___ more than the market, only about 2 percent.",
      options: ["much", "far", "significantly", "slightly"],
      answer: 3, explanation: "“only about 2 percent” là chênh ít → slightly more. much / far / significantly dùng cho chênh nhiều." },
    { id: "p3", type: "gap", prompt: "The total pay for Sales Executives is slightly ___ than the market.",
      options: ["high", "highest", "higher", "more high"],
      answer: 2, explanation: "Sau slightly và trước than cần so sánh hơn: higher. “more high” sai vì high là tính từ ngắn." },
    { id: "p4", type: "choice", prompt: "Which sentence is correct?",
      options: ["Our offer is very higher than theirs.", "Our offer is much higher than theirs.", "Our offer is much more higher than theirs.", "Our offer is much high than theirs."],
      answer: 1, explanation: "much + so sánh hơn: much higher. Không dùng very trước so sánh hơn, không dùng more với higher." },
    { id: "p5", type: "gap", prompt: "Logistics Coordinator salaries are ___ the market, so no extra adjustment is needed.",
      options: ["in line with", "well below", "far lower", "considerably above"],
      answer: 0, explanation: "Không cần điều chỉnh thêm → lương ngang thị trường: in line with. “far lower” thiếu than và trái nghĩa với vế sau." },
    { id: "p6", type: "gap", prompt: "Our commission is far more ___ than other companies'.",
      options: ["generously", "generosity", "generous", "most generous"],
      answer: 2, explanation: "far more + tính từ: far more generous. generously là trạng từ, generosity là danh từ, “more most” sai." },
    { id: "p7", type: "choice", prompt: "“HR Assistant pay is well below the market.” What does this mean?",
      options: ["It is a little lower than the market.", "It is much lower than the market.", "It is higher than the market.", "It is the same as the market."],
      answer: 1, explanation: "well below = thấp hơn nhiều. “a little lower” là chênh ít, không đúng nghĩa của well." },
    { id: "p8", type: "gap", prompt: "We use a ___ to compare our salaries with other companies.",
      options: ["salary survey", "payslip", "job grade", "adjustment"],
      answer: 0, explanation: "salary survey = báo cáo khảo sát lương nhiều công ty. payslip là phiếu lương của một người, không dùng để so sánh với thị trường." },
    { id: "p9", type: "gap", prompt: "The budget for next year is a ___ higher than this year.",
      options: ["much", "far", "bit", "considerably"],
      answer: 2, explanation: "Cụm “a bit higher” = cao hơn một chút. Không nói “a much”, “a far”, “a considerably”." },
    { id: "p10", type: "choice", prompt: "Which sentence shows the BIGGEST difference?",
      options: ["Our pay is slightly lower than the market.", "Our pay is a little lower than the market.", "Our pay is marginally lower than the market.", "Our pay is significantly lower than the market."],
      answer: 3, explanation: "significantly = đáng kể, chênh nhiều. Ba câu còn lại đều chỉ chênh ít." }
  ],

  writing: {
    title: "Report benchmarking results",
    task: "Bạn là anh Tuấn. Viết email gửi chị Lan (120–180 từ) báo cáo kết quả so sánh lương của ba vị trí khác: Receptionist thấp hơn thị trường khoảng 12%; Sales Manager cao hơn khoảng 3%; Logistics Manager ngang thị trường. Đề xuất điều chỉnh thêm cho vị trí Receptionist.",
    requirements: [
      "Mở đầu bằng lời chào và mục đích email.",
      "Dùng một từ chỉ chênh ít: slightly / a bit / a little / marginally + so sánh hơn.",
      "Dùng một từ chỉ chênh nhiều: much / far / considerably / significantly + so sánh hơn.",
      "Dùng in line with / well below / well above.",
      "Đưa ra đề xuất (I recommend / I suggest).",
      "Kết thúc email và ký tên."
    ],
    minWords: 120,
    maxWords: 180,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Dear … / Hi …)", pattern: "\\bdear\\b|\\bhi\\b" },
      { label: "Có từ chỉ chênh ít + so sánh hơn", pattern: "(slightly|a bit|a little|marginally) (\\w+er|more|less)\\b" },
      { label: "Có từ chỉ chênh nhiều + so sánh hơn", pattern: "(much|far|considerably|significantly) (\\w+er|more|less)\\b" },
      { label: "Có in line with / well below / well above", pattern: "in line with|well below|well above" },
      { label: "Có đề xuất (recommend / suggest)", pattern: "recommend|suggest" },
      { label: "Có lời kết (Best regards …)", pattern: "regards|sincerely|best wishes" }
    ],
    model: [
      "Hi Lan,",
      "I have now compared the salaries for three more roles with the market survey. Here is a short summary.",
      "Receptionist: our base pay is considerably lower than the market rate, by about 12 percent. This is a concern because good receptionists can easily find better offers at other companies.",
      "Sales Manager: our pay is slightly higher than the market, by about 3 percent, so the role is competitive.",
      "Logistics Manager: our pay is in line with the market, and no adjustment is needed at the moment.",
      "Based on these results, I recommend a small extra adjustment for the Receptionist role next year. It would not cost much because we only have one receptionist.",
      "I have attached the updated table. Please let me know if you have any questions.",
      "Best regards,",
      "Tuan"
    ]
  },

  review: {
    keyPhrases: [
      { en: "Overall, our pay is slightly lower than the market.", vi: "Nhìn chung, lương của chúng ta thấp hơn thị trường một chút." },
      { en: "IT Support pay is considerably lower than the market rate.", vi: "Lương IT Support thấp hơn đáng kể so với mức thị trường." },
      { en: "The gap is much larger for some roles.", vi: "Khoảng chênh lệch lớn hơn nhiều ở một số vị trí." },
      { en: "Our commission is far more generous than other companies'.", vi: "Hoa hồng của chúng ta cao hơn nhiều so với các công ty khác." },
      { en: "Logistics salaries are in line with the market.", vi: "Lương bộ phận Logistics ngang với thị trường." },
      { en: "I recommend a general increase of 4% for all staff.", vi: "Tôi đề xuất tăng chung 4% cho toàn bộ nhân viên." }
    ]
  }
});
