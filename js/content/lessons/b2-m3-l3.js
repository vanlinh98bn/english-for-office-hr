/* =========================================================
   B2 · Module 3 (Compensation, Benefits and HR Analytics) · Bài 3
   "Reading HR dashboards"
   Nối tiếp B2-M3-L2. Khanh Vu (HR Assistant) làm bảng số liệu nhân sự
   hằng tháng (dữ liệu từ ứng dụng chấm công mới, B1-M4-L5) cho cuộc họp
   ban quản lý. Khanh giải thích cho chị Lan ở văn phòng phòng Nhân sự.
   Số liệu (khoảng hai tháng trước cuối năm):
   - Tổng số nhân viên 64; Kinh doanh + Logistics 34 người (53%, just
     over half); Kế toán khoảng 1/10 (6 người).
   - Nữ 47% (just under half); tuổi trung bình 31,6 (roughly 32);
     thâm niên trung bình 3,4 năm (around three and a half); gần 1/3
     nhân viên vào làm trong 2 năm gần đây (phần lớn ở Kinh doanh).
   - Tỷ lệ vắng mặt 2,1% (just over 2%), mục tiêu dưới 3%.
   - Làm thêm giờ quý trước: hơn 400 giờ (well over 400), khoảng 70%
     ở Kế toán và Logistics.
   - Phép năm mới dùng khoảng một nửa.
   - Nhóm Kinh doanh (chỉ trong bài viết): 16 người, nữ 41%, tuổi TB
     28,7, vắng mặt 3,4%, làm thêm ~96 giờ, phép đã dùng 38%.
   Thời gian nói áng chừng.
   ========================================================= */
window.EOH.registerLesson({
  id: "b2-m3-l3",
  reviewStatus: "approved", // Linh duyệt ngày 24/10/2026
  duration: "45–60 phút",
  scenario: "Khanh (HR Assistant) vừa làm xong bảng số liệu nhân sự hằng tháng (HR dashboard) cho cuộc họp ban quản lý. Khanh giải thích các con số cho chị Lan (HR Manager). Chị Lan nhắc Khanh làm tròn số và nói áng chừng cho dễ hiểu. Sau đó Khanh gửi email tóm tắt các con số chính.",

  objectives: [
    "Hiểu và dùng 10 từ vựng thường gặp trên bảng số liệu nhân sự.",
    "Nghe cuộc trao đổi về bảng số liệu, nắm được các con số chính và điểm cần chú ý.",
    "Đọc email tóm tắt số liệu nhân sự, hiểu các cách nói số áng chừng.",
    "Nói số liệu áng chừng: roughly / approximately / around; just over / just under; well over / well under; nearly / almost; tỷ lệ (just under half, about a third, one in ten).",
    "Viết email tóm tắt số liệu nhân sự cho một quản lý, làm tròn số cho dễ đọc."
  ],

  vocabulary: [
    { word: "dashboard", ipa: "/ˈdæʃbɔːrd/", pos: "noun", meaning: "bảng số liệu tổng hợp (trên máy tính)",
      example: "Khanh updates the HR dashboard every month.", exampleVi: "Khanh cập nhật bảng số liệu nhân sự mỗi tháng." },
    { word: "headcount", ipa: "/ˈhedkaʊnt/", pos: "noun", meaning: "tổng số nhân viên",
      example: "Our headcount is now 64.", exampleVi: "Tổng số nhân viên hiện nay là 64." },
    { word: "workforce", ipa: "/ˈwɜːrkfɔːrs/", pos: "noun", meaning: "lực lượng lao động, toàn bộ nhân viên",
      example: "Women make up just under half of our workforce.", exampleVi: "Nữ chiếm gần một nửa số nhân viên của chúng ta." },
    { word: "absence rate", ipa: "/ˈæbsəns reɪt/", pos: "noun", meaning: "tỷ lệ vắng mặt",
      example: "The absence rate is just over 2%.", exampleVi: "Tỷ lệ vắng mặt là hơn 2% một chút." },
    { word: "length of service", ipa: "/ˌleŋθ əv ˈsɜːrvɪs/", pos: "noun", meaning: "thâm niên, thời gian làm việc tại công ty",
      example: "The average length of service is around three and a half years.", exampleVi: "Thâm niên trung bình khoảng ba năm rưỡi." },
    { word: "gender balance", ipa: "/ˈdʒendər ˌbæləns/", pos: "noun", meaning: "tỷ lệ cân bằng nam – nữ",
      example: "Our gender balance is quite good.", exampleVi: "Tỷ lệ nam – nữ của chúng ta khá cân bằng." },
    { word: "proportion", ipa: "/prəˈpɔːrʃən/", pos: "noun", meaning: "tỷ lệ, phần (trong tổng số)",
      example: "A large proportion of overtime is in two teams.", exampleVi: "Phần lớn số giờ làm thêm thuộc về hai nhóm." },
    { word: "round", ipa: "/raʊnd/", pos: "verb", meaning: "làm tròn (số)",
      example: "Please round the figures in the presentation.", exampleVi: "Hãy làm tròn các con số trong bài trình bày." },
    { word: "decimal", ipa: "/ˈdesɪməl/", pos: "noun", meaning: "số thập phân, phần lẻ sau dấu chấm",
      example: "The managers don't need exact decimals.", exampleVi: "Các quản lý không cần số lẻ chính xác." },
    { word: "appendix", ipa: "/əˈpendɪks/", pos: "noun", meaning: "phụ lục",
      example: "Keep the exact numbers in the appendix.", exampleVi: "Giữ các con số chính xác trong phụ lục." }
  ],

  pronunciation: {
    groups: [
      {
        title: "Nhấn từ áng chừng và con số",
        text: "Khi nói số liệu, nhấn vào từ áng chừng và con số. Âm tiết in hoa là âm đọc to và dài hơn.",
        items: [
          { word: "just over half", marked: "just O·ver HALF" },
          { word: "roughly thirty-two", marked: "ROUGH·ly thir·ty-TWO" },
          { word: "well under three percent", marked: "WELL un·der THREE per·CENT" },
          { word: "approximately", marked: "ap·PROX·i·mate·ly" }
        ]
      },
      {
        title: "Đọc số thập phân",
        text: "Dấu chấm thập phân đọc là point, mỗi chữ số sau dấu chấm đọc riêng.",
        items: [
          { word: "31.6", marked: "THIR·ty-one POINT SIX" },
          { word: "2.1%", marked: "TWO POINT ONE per·CENT" }
        ]
      }
    ],
    sentences: [
      "Just over half of our staff work in Sales and Logistics.",
      "The average age is thirty-one point six, so roughly thirty-two.",
      "We had well over four hundred hours of overtime last quarter."
    ]
  },

  listening: {
    title: "Walking through the HR dashboard",
    setting: "Văn phòng phòng Nhân sự. Khanh (HR Assistant) giải thích bảng số liệu nhân sự cho chị Lan (HR Manager) trước cuộc họp ban quản lý.",
    speakers: { lan: "Lan (HR Manager)", khanh: "Khanh (HR Assistant)" },
    lines: [
      { s: "lan", text: "Khanh, the management meeting is next week. Can you walk me through the new dashboard?",
        vi: "Khanh, tuần sau họp ban quản lý. Em giải thích bảng số liệu mới cho chị nhé?" },
      { s: "khanh", text: "Sure. At the moment our headcount is sixty-four. Just over half of our staff work in Sales and Logistics.",
        vi: "Vâng ạ. Hiện nay tổng số nhân viên là sáu mươi tư. Hơn một nửa một chút làm ở Kinh doanh và Logistics." },
      { s: "lan", text: "And the gender balance?",
        vi: "Còn tỷ lệ nam – nữ?" },
      { s: "khanh", text: "Women make up forty-seven percent, so just under half.",
        vi: "Nữ chiếm bốn mươi bảy phần trăm, tức là gần một nửa." },
      { s: "lan", text: "Good. The managers won't want exact decimals. How would you describe the average age?",
        vi: "Tốt. Các quản lý không cần số lẻ chính xác. Em sẽ nói tuổi trung bình thế nào?" },
      { s: "khanh", text: "It's thirty-one point six, so I'd say roughly thirty-two.",
        vi: "Là ba mươi mốt phẩy sáu, nên em sẽ nói khoảng ba mươi hai." },
      { s: "lan", text: "Perfect. What about absence?",
        vi: "Rất tốt. Còn vắng mặt?" },
      { s: "khanh", text: "The absence rate is two point one percent. That's just over two percent and well under our target of three percent.",
        vi: "Tỷ lệ vắng mặt là hai phẩy một phần trăm. Tức là hơn hai phần trăm một chút và thấp hơn nhiều so với mục tiêu ba phần trăm." },
      { s: "lan", text: "That's good news. And overtime?",
        vi: "Tin tốt đấy. Còn làm thêm giờ?" },
      { s: "khanh", text: "Overtime is high. We had well over four hundred hours last quarter, and approximately seventy percent of them were in Accounting and Logistics.",
        vi: "Làm thêm giờ cao ạ. Quý trước có hơn bốn trăm giờ khá nhiều, và khoảng bảy mươi phần trăm là ở Kế toán và Logistics." },
      { s: "lan", text: "So roughly seven in ten overtime hours come from two teams. That's worth highlighting.",
        vi: "Vậy cứ mười giờ làm thêm thì khoảng bảy giờ là của hai nhóm. Điều đó cần nêu rõ." },
      { s: "khanh", text: "There's one more thing. Staff have used only about half of their annual leave so far.",
        vi: "Còn một điều nữa. Đến giờ nhân viên mới dùng khoảng một nửa số ngày phép năm." },
      { s: "lan", text: "With only two months left in the year? We need to remind people again.",
        vi: "Trong khi năm chỉ còn hai tháng? Mình cần nhắc mọi người lần nữa." },
      { s: "khanh", text: "I'll add a note to the dashboard. Should I round all the figures?",
        vi: "Em sẽ thêm ghi chú vào bảng số liệu. Em có nên làm tròn hết các con số không ạ?" },
      { s: "lan", text: "Yes, round them in the presentation, but keep the exact numbers in the appendix.",
        vi: "Có, làm tròn trong bài trình bày, nhưng giữ số chính xác trong phụ lục." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "What proportion of staff work in Sales and Logistics?",
        options: ["About a third", "Just under half", "Just over half", "The vast majority"],
        answer: 2, explanation: "Khanh nói: “Just over half of our staff work in Sales and Logistics.” “Just under half” là cách Khanh nói về tỷ lệ nữ (47%)." },
      { id: "l2", type: "choice", prompt: "How does Khanh describe the average age?",
        options: ["Just under thirty", "Roughly thirty-two", "Exactly thirty-one", "Well over forty"],
        answer: 1, explanation: "“It's thirty-one point six, so I'd say roughly thirty-two.”" },
      { id: "l3", type: "choice", prompt: "Which teams account for about 70% of overtime?",
        options: ["Sales and HR", "IT Support and Sales", "HR and Logistics", "Accounting and Logistics"],
        answer: 3, explanation: "“…approximately seventy percent of them were in Accounting and Logistics.”" }
    ]
  },

  reading: {
    title: "Monthly HR dashboard: key figures",
    intro: "Email Khanh gửi chị Lan trước cuộc họp ban quản lý. Đọc và chú ý cách Khanh nói số liệu áng chừng.",
    email: {
      from: "Khanh Vu <khanh.vu@riverside-trading.example>",
      to: "Lan Pham",
      date: "Friday",
      subject: "Monthly HR dashboard: key figures",
      greeting: "Dear Lan,",
      paragraphs: [
        "Please find below the key figures from this month's HR dashboard for the management meeting. As you suggested, I have rounded the figures. The exact numbers are in the appendix of the attached file."
      ],
      list: [
        "Headcount: 64 employees. Just over half work in Sales and Logistics, and roughly one in ten works in Accounting.",
        "Diversity: women make up just under half of our workforce. The average age is roughly 32.",
        "Length of service: the average is around three and a half years. However, nearly a third of employees have joined in the past two years, mostly in Sales.",
        "Absence: the absence rate is just over 2%, well under our target of 3%.",
        "Overtime: well over 400 hours last quarter. Approximately 70% of these hours were in Accounting and Logistics.",
        "Annual leave: employees have used only about half of their leave so far this year."
      ],
      after: [
        "In my view, the two points to highlight are overtime and annual leave. Both suggest that some teams are under pressure, which matches the results of our wellbeing survey.",
        "Let me know if you would like me to add a chart for each department before the meeting."
      ],
      closing: "Best regards,",
      signature: ["Khanh Vu", "HR Assistant, Riverside Trading"]
    },
    glossary: [
      { term: "key figures", vi: "các con số chính" },
      { term: "diversity", vi: "sự đa dạng (giới tính, độ tuổi…)" },
      { term: "target", vi: "mục tiêu, chỉ tiêu" },
      { term: "under pressure", vi: "chịu áp lực" },
      { term: "match", vi: "khớp với" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "How does Khanh describe the absence rate?",
        options: ["Well over the target", "Just over 2%, well under the target", "Nearly 3%", "Exactly the same as the target"],
        answer: 1, explanation: "“…the absence rate is just over 2%, well under our target of 3%.”" },
      { id: "r2", type: "choice", prompt: "Roughly what proportion of employees joined in the past two years?",
        options: ["Nearly a third", "Just over half", "The vast majority", "One in ten"],
        answer: 0, explanation: "“…nearly a third of employees have joined in the past two years, mostly in Sales.” “One in ten” là tỷ lệ làm ở Kế toán." },
      { id: "r3", type: "choice", prompt: "Why does Khanh want to highlight overtime and annual leave?",
        options: ["They are the best results.", "The General Director asked for them.", "They suggest that some teams are under pressure.", "They cost the most money."],
        answer: 2, explanation: "“Both suggest that some teams are under pressure, which matches the results of our wellbeing survey.”" }
    ]
  },

  grammar: {
    title: "Approximate numbers: roughly, just over, well under",
    titleVi: "Nói số liệu áng chừng",
    intro: "Khi trình bày số liệu cho quản lý, ta thường không đọc số lẻ chính xác mà làm tròn và nói áng chừng. Mỗi cách nói cho biết số thật cao hơn hay thấp hơn số tròn, và chênh nhiều hay ít. Bốn mẫu dưới đây có trong cuộc trao đổi và email bạn vừa học.",
    patterns: [
      { form: "roughly / approximately / around / about + số", use: "Khoảng, xấp xỉ. Không cho biết số thật cao hơn hay thấp hơn.",
        examples: ["The average age is roughly 32. (31.6)", "Approximately 70% of these hours were in Accounting and Logistics."] },
      { form: "just over / just under + số", use: "Cao hơn / thấp hơn số tròn một chút.",
        examples: ["The absence rate is just over 2%. (2.1%)", "Women make up just under half of our workforce. (47%)"] },
      { form: "well over / well under + số", use: "Cao hơn / thấp hơn số tròn khá nhiều.",
        examples: ["We had well over 400 hours of overtime.", "2% is well under our target of 3%."] },
      { form: "nearly / almost + số hoặc tỷ lệ (a third, half, one in ten…)", use: "Gần đạt, còn thấp hơn một chút. Dùng tỷ lệ cho dễ hình dung.",
        examples: ["Nearly a third of employees joined in the past two years.", "Roughly one in ten works in Accounting."] }
    ],
    mistakes: [
      { wrong: "The half of our staff work in Sales.", right: "Half of our staff work in Sales.", note: "Không dùng the trước half trong câu này." },
      { wrong: "Training hours are 12.3, so nearly 12.", right: "Training hours are 12.3, so just over 12.", note: "nearly = chưa tới. Số thật lớn hơn 12 thì dùng just over." },
      { wrong: "47% is just over half.", right: "47% is just under half.", note: "47% thấp hơn 50% → just under." },
      { wrong: "Roughly one of ten works in Accounting.", right: "Roughly one in ten works in Accounting.", note: "Nói tỷ lệ dùng one in ten, one in five." }
    ],
    tip: "Quy tắc nhỏ khi trình bày: nói số áng chừng trên trang chiếu và trong lời nói, nhưng luôn giữ số chính xác trong phụ lục. Nếu ai hỏi lại, bạn có ngay con số đúng."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "The average age is 31.6, so it is ___ 32.",
      options: ["roughly", "well over", "just over", "exactly"],
      answer: 0, explanation: "31,6 xấp xỉ 32 → roughly 32. 31,6 thấp hơn 32 nên “just over” và “well over” sai; “exactly” cũng sai." },
    { id: "p2", type: "gap", prompt: "47 percent is just ___ half.",
      options: ["over", "under", "above", "more"],
      answer: 1, explanation: "47% thấp hơn 50% một chút → just under half." },
    { id: "p3", type: "gap", prompt: "53 percent of staff work in Sales and Logistics. That's just ___ half.",
      options: ["under", "below", "over", "nearly"],
      answer: 2, explanation: "53% cao hơn 50% một chút → just over half." },
    { id: "p4", type: "choice", prompt: "We had 460 hours of overtime. Which description is best?",
      options: ["Just under 400 hours", "Nearly 400 hours", "Well over 400 hours", "Well under 400 hours"],
      answer: 2, explanation: "460 cao hơn 400 khá nhiều → well over 400. “Nearly 400” nghĩa là chưa tới 400." },
    { id: "p5", type: "gap", prompt: "The absence rate is 2.1%, ___ under our target of 3%.",
      options: ["well", "only", "nearly", "almost"],
      answer: 0, explanation: "2,1% thấp hơn 3% khá nhiều → well under. “just under 3%” (không có trong các lựa chọn) chỉ dùng khi gần 2,9%; only / nearly / almost không đi với under trong câu này." },
    { id: "p6", type: "gap", prompt: "Training hours per employee are 11.8, so ___ 12 hours.",
      options: ["well over", "just over", "nearly", "well under"],
      answer: 2, explanation: "11,8 gần tới 12 nhưng chưa đủ → nearly 12." },
    { id: "p7", type: "choice", prompt: "“Roughly one in ten employees works in Accounting.” We have 64 employees. About how many work in Accounting?",
      options: ["About 1", "About 16", "About 32", "About 6"],
      answer: 3, explanation: "Một phần mười của 64 là khoảng 6 người." },
    { id: "p8", type: "choice", prompt: "Which sentence is correct?",
      options: ["The half of our staff work in Sales.", "Half of our staff work in Sales.", "Half our of staff work in Sales.", "The halves of staff work in Sales."],
      answer: 1, explanation: "Nói “một nửa số nhân viên”: Half of our staff, không có the." },
    { id: "p9", type: "gap", prompt: "Our ___ is now 64 employees.",
      options: ["appendix", "headcount", "decimal", "proportion"],
      answer: 1, explanation: "headcount = tổng số nhân viên." },
    { id: "p10", type: "gap", prompt: "Please ___ the figures to whole numbers in the presentation.",
      options: ["count", "raise", "highlight", "round"],
      answer: 3, explanation: "round the figures to whole numbers = làm tròn thành số nguyên." }
  ],

  writing: {
    title: "Summarize dashboard figures for a manager",
    task: "Bạn là Khanh. Viết email gửi anh David (120–180 từ) tóm tắt số liệu của nhóm Kinh doanh trên bảng số liệu tháng này. Làm tròn và nói áng chừng. Số liệu: 16 người (công ty có 64 người); nữ 41%; tuổi trung bình 28,7; tỷ lệ vắng mặt 3,4% (mục tiêu dưới 3%); làm thêm quý trước 96 giờ; phép năm đã dùng 38%. Nhờ anh David nhắc nhân viên lên kế hoạch nghỉ phép.",
    requirements: [
      "Mở đầu bằng lời chào và mục đích email.",
      "Dùng roughly / approximately / around / about.",
      "Dùng just over / just under.",
      "Dùng nearly / almost hoặc well over / well under.",
      "Dùng một tỷ lệ (a quarter, a third, half, one in …).",
      "Kết thúc email và ký tên."
    ],
    minWords: 120,
    maxWords: 180,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Dear … / Hi …)", pattern: "\\bdear\\b|\\bhi\\b" },
      { label: "Có roughly / approximately / around / about", pattern: "\\broughly\\b|\\bapproximately\\b|\\baround\\b|\\babout\\b" },
      { label: "Có just over / just under", pattern: "just (over|under)" },
      { label: "Có nearly / almost / well over / well under", pattern: "\\bnearly\\b|\\balmost\\b|well (over|under)" },
      { label: "Có tỷ lệ (a quarter / a third / half / one in …)", pattern: "a quarter|a third|\\bhalf\\b|one in \\w+" },
      { label: "Có lời kết (Best regards …)", pattern: "regards|sincerely|best wishes" }
    ],
    model: [
      "Hi David,",
      "Here are the key figures for the Sales team from this month's HR dashboard.",
      "The team now has 16 people, roughly a quarter of the company. Women make up just over 40% of the team, and the average age is nearly 29, which is younger than the company average.",
      "The absence rate is 3.4%, a little above our target of 3%. This is not serious, but we will keep an eye on it.",
      "Overtime was approximately 100 hours last quarter, well under the figures for Accounting and Logistics.",
      "However, your team has used just under 40% of their annual leave so far this year. Could you please encourage them to plan their days off before the end of the year?",
      "The exact numbers are in the attached file.",
      "Best regards,",
      "Khanh"
    ]
  },

  review: {
    keyPhrases: [
      { en: "Just over half of our staff work in Sales and Logistics.", vi: "Hơn một nửa nhân viên một chút làm ở Kinh doanh và Logistics." },
      { en: "Women make up just under half of our workforce.", vi: "Nữ chiếm gần một nửa số nhân viên." },
      { en: "The average age is roughly 32.", vi: "Tuổi trung bình khoảng 32." },
      { en: "The absence rate is well under our target.", vi: "Tỷ lệ vắng mặt thấp hơn nhiều so với mục tiêu." },
      { en: "Roughly seven in ten overtime hours come from two teams.", vi: "Cứ mười giờ làm thêm thì khoảng bảy giờ thuộc về hai nhóm." },
      { en: "Keep the exact numbers in the appendix.", vi: "Giữ các con số chính xác trong phụ lục." }
    ]
  }
});
