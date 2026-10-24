/* =========================================================
   B2 · Module 3 (Compensation, Benefits and HR Analytics) · Bài 2
   "Reviewing benefits"
   Nối tiếp B2-M3-L1. Hợp đồng bảo hiểm sức khỏe sắp hết hạn (đầu năm
   sau), phòng Nhân sự rà soát phúc lợi. Họp Room 301: chị Lan, anh
   Tuấn, Khanh.
   - Phí bảo hiểm sức khỏe năm sau tăng 12% do chi phí y tế tăng; thêm
     khoảng 40 triệu đồng/năm, đã đưa vào ngân sách năm sau; giữ công ty
     bảo hiểm cũ (đổi sẽ có thời gian chờ cho một số yêu cầu bồi thường).
   - Khám sức khỏe hằng năm: chỉ 55% người đủ điều kiện đặt lịch, vì tổ
     chức vào tháng Mười Hai (tháng bận nhất của Kế toán và Kinh doanh)
     → chuyển sang tháng Tư.
   - Chương trình giảm giá phòng tập: chỉ 6 người dùng → dừng cuối năm.
   - Khảo sát sức khỏe tinh thần (B2-M2-L5): nhiều người muốn bảo hiểm
     cho con và vợ / chồng → bảo hiểm gia đình: tiền tiết kiệm từ phòng
     tập trả 50%, nhân viên tham gia trả 50% qua bảng lương.
   Thời gian nói áng chừng.
   ========================================================= */
window.EOH.registerLesson({
  id: "b2-m3-l2",
  reviewStatus: "approved", // Linh duyệt ngày 24/10/2026
  duration: "45–60 phút",
  scenario: "Hợp đồng bảo hiểm sức khỏe của công ty sắp hết hạn. Chị Lan (HR Manager), anh Tuấn (HR Executive) và Khanh (HR Assistant) rà soát các chế độ phúc lợi: phí bảo hiểm tăng, lịch khám sức khỏe, chương trình phòng tập ít người dùng và mong muốn có bảo hiểm cho gia đình. Sau đó anh Tuấn gửi email đề xuất.",

  objectives: [
    "Hiểu và dùng 10 từ vựng thường gặp khi rà soát phúc lợi và bảo hiểm.",
    "Nghe cuộc họp rà soát phúc lợi, nắm được vấn đề, nguyên nhân và giải pháp.",
    "Đọc email đề xuất thay đổi phúc lợi, tìm lý do của từng thay đổi.",
    "Nói nguyên nhân – kết quả: due to / because of + danh từ; As a result, …; lead to / result in; be caused by / result from.",
    "Viết email thông báo thay đổi phúc lợi cho nhân viên, giải thích rõ lý do."
  ],

  vocabulary: [
    { word: "premium", ipa: "/ˈpriːmiəm/", pos: "noun", meaning: "phí bảo hiểm",
      example: "The premium will rise by 12% next year.", exampleVi: "Phí bảo hiểm năm sau sẽ tăng 12%." },
    { word: "insurer", ipa: "/ɪnˈʃʊrər/", pos: "noun", meaning: "công ty bảo hiểm",
      example: "We recommend staying with the same insurer.", exampleVi: "Chúng tôi đề xuất tiếp tục với công ty bảo hiểm cũ." },
    { word: "renew", ipa: "/rɪˈnuː/", pos: "verb", meaning: "gia hạn (hợp đồng)",
      example: "We need to renew the contract before it ends.", exampleVi: "Chúng ta cần gia hạn hợp đồng trước khi hết hạn." },
    { word: "coverage", ipa: "/ˈkʌvərɪdʒ/", pos: "noun", meaning: "phạm vi bảo hiểm, quyền lợi được bảo hiểm",
      example: "Many employees asked for family coverage.", exampleVi: "Nhiều nhân viên muốn có bảo hiểm cho gia đình." },
    { word: "dependent", ipa: "/dɪˈpendənt/", pos: "noun", meaning: "người phụ thuộc (con, vợ / chồng…)",
      example: "You can add your dependents to the family plan.", exampleVi: "Bạn có thể thêm người phụ thuộc vào gói gia đình." },
    { word: "savings", ipa: "/ˈseɪvɪŋz/", pos: "noun", meaning: "khoản tiết kiệm được",
      example: "The savings will pay for half of the family plan.", exampleVi: "Khoản tiết kiệm được sẽ trả một nửa gói gia đình." },
    { word: "waiting period", ipa: "/ˈweɪtɪŋ ˌpɪriəd/", pos: "noun", meaning: "thời gian chờ (trước khi được bảo hiểm chi trả)",
      example: "A new insurer would mean a waiting period for some claims.", exampleVi: "Đổi công ty bảo hiểm sẽ phải có thời gian chờ cho một số yêu cầu bồi thường." },
    { word: "usage", ipa: "/ˈjuːsɪdʒ/", pos: "noun", meaning: "mức độ sử dụng",
      example: "Usage of the gym discount was very low.", exampleVi: "Mức độ sử dụng ưu đãi phòng tập rất thấp." },
    { word: "value for money", ipa: "/ˌvæljuː fər ˈmʌni/", pos: "phrase", meaning: "đáng đồng tiền, xứng với chi phí",
      example: "The gym program was not good value for money.", exampleVi: "Chương trình phòng tập không đáng với chi phí bỏ ra." },
    { word: "satisfaction", ipa: "/ˌsætɪsˈfækʃən/", pos: "noun", meaning: "sự hài lòng",
      example: "Family coverage will lead to higher satisfaction.", exampleVi: "Bảo hiểm gia đình sẽ giúp nhân viên hài lòng hơn." }
  ],

  pronunciation: {
    groups: [
      {
        title: "Nối âm trong cụm chỉ nguyên nhân – kết quả",
        text: "Các cụm dưới đây đọc liền một hơi, từ nhỏ (a, of, to) đọc rất nhẹ. Âm tiết in hoa là âm đọc to và dài hơn.",
        items: [
          { word: "as a result", marked: "az‿ə re·SULT" },
          { word: "because of", marked: "be·CAUSE‿əv" },
          { word: "due to", marked: "DUE tə" },
          { word: "lead to", marked: "LEAD tə" }
        ]
      },
      {
        title: "Trọng âm từ",
        text: "Những từ hay gặp khi nói về bảo hiểm.",
        items: [
          { word: "premium", marked: "PRE·mi·um" },
          { word: "insurer", marked: "in·SUR·er" },
          { word: "coverage", marked: "COV·er·age" },
          { word: "satisfaction", marked: "sat·is·FAC·tion" }
        ]
      }
    ],
    sentences: [
      "The premium will rise by twelve percent, mainly due to rising medical costs.",
      "As a result, many people simply forgot.",
      "Better family coverage could lead to higher staff loyalty."
    ]
  },

  listening: {
    title: "Reviewing our benefits",
    setting: "Room 301. Chị Lan (HR Manager), anh Tuấn (HR Executive) và Khanh (HR Assistant) rà soát phúc lợi trước khi gia hạn hợp đồng bảo hiểm.",
    speakers: { lan: "Lan (HR Manager)", tuan: "Tuan (HR Executive)", khanh: "Khanh (HR Assistant)" },
    lines: [
      { s: "lan", text: "Our health insurance contract ends soon, so this is a good time to review all our benefits. Tuan, let's start with insurance.",
        vi: "Hợp đồng bảo hiểm sức khỏe sắp hết hạn, nên đây là lúc tốt để rà soát mọi phúc lợi. Tuấn, mình bắt đầu với bảo hiểm nhé." },
      { s: "tuan", text: "The insurer has told us the premium will rise by twelve percent next year, mainly due to rising medical costs.",
        vi: "Công ty bảo hiểm báo phí năm sau sẽ tăng mười hai phần trăm, chủ yếu do chi phí y tế tăng." },
      { s: "lan", text: "Twelve percent is a lot. Will that lead to a problem with the budget?",
        vi: "Mười hai phần trăm là nhiều đấy. Việc đó có gây vấn đề cho ngân sách không?" },
      { s: "tuan", text: "It will result in an extra cost of about forty million dong a year. We've already included that in next year's budget.",
        vi: "Nó sẽ làm tăng thêm khoảng bốn mươi triệu đồng mỗi năm. Mình đã đưa khoản đó vào ngân sách năm sau rồi." },
      { s: "lan", text: "Okay. What about the annual health check?",
        vi: "Được. Còn khám sức khỏe hằng năm thì sao?" },
      { s: "khanh", text: "Only fifty-five percent of eligible employees booked it this year. Most people said they were too busy because of the year-end closing.",
        vi: "Năm nay chỉ năm mươi lăm phần trăm nhân viên đủ điều kiện đặt lịch khám. Đa số nói họ quá bận vì chốt sổ cuối năm." },
      { s: "tuan", text: "It was in December, which is the busiest month for Accounting and Sales. As a result, many people simply forgot.",
        vi: "Đợt khám vào tháng Mười Hai, tháng bận nhất của Kế toán và Kinh doanh. Vì vậy, nhiều người quên mất." },
      { s: "lan", text: "Then let's move it to April. The low numbers were caused by the timing, not by a lack of interest.",
        vi: "Vậy mình chuyển sang tháng Tư. Số người thấp là do thời điểm, không phải do mọi người không quan tâm." },
      { s: "khanh", text: "There's also the gym discount. Only six people used it last year.",
        vi: "Còn ưu đãi phòng tập nữa. Năm ngoái chỉ có sáu người dùng." },
      { s: "lan", text: "So it isn't good value for money. What do people actually want?",
        vi: "Vậy là không đáng đồng tiền. Thật ra mọi người muốn gì?" },
      { s: "khanh", text: "In the wellbeing survey, many people asked for health insurance for their children and partners.",
        vi: "Trong khảo sát sức khỏe tinh thần, nhiều người muốn có bảo hiểm sức khỏe cho con và vợ hoặc chồng." },
      { s: "tuan", text: "If we stop the gym discount, the savings could pay for half of a family insurance plan.",
        vi: "Nếu mình dừng ưu đãi phòng tập, tiền tiết kiệm được có thể trả một nửa gói bảo hiểm gia đình." },
      { s: "lan", text: "I like that. Better family coverage could lead to higher staff loyalty. Please write it up as a proposal.",
        vi: "Chị thích ý đó. Bảo hiểm gia đình tốt hơn có thể giúp nhân viên gắn bó hơn. Em viết thành đề xuất nhé." },
      { s: "tuan", text: "Will do. I'll send it to you and Ngoc so she can check the costs.",
        vi: "Vâng ạ. Em sẽ gửi chị và chị Ngọc để chị Ngọc kiểm tra chi phí." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "Why will the insurance premium rise?",
        options: ["Because more staff joined the company", "Mainly due to rising medical costs", "Because of the gym discount", "Due to a new law"],
        answer: 1, explanation: "Tuấn nói: “…the premium will rise by twelve percent next year, mainly due to rising medical costs.”" },
      { id: "l2", type: "choice", prompt: "Why did only 55% of eligible employees book the health check?",
        options: ["It wasn't free.", "The clinic was too far away.", "It was in the busiest month of the year.", "They didn't know about it."],
        answer: 2, explanation: "“It was in December, which is the busiest month for Accounting and Sales.” Chị Lan kết luận: “The low numbers were caused by the timing.” Mọi người có biết nhưng quên vì bận." },
      { id: "l3", type: "choice", prompt: "What does Tuan suggest doing with the money from the gym discount?",
        options: ["Paying for half of a family insurance plan", "Giving everyone a bonus", "Opening a company gym", "Paying for yoga classes"],
        answer: 0, explanation: "“If we stop the gym discount, the savings could pay for half of a family insurance plan.”" }
    ]
  },

  reading: {
    title: "Benefits review: proposals for next year",
    intro: "Email anh Tuấn gửi chị Lan và chị Ngoc Dang. Đọc và tìm lý do của từng thay đổi phúc lợi.",
    email: {
      from: "Tuan Nguyen <tuan.nguyen@riverside-trading.example>",
      to: "Lan Pham; Ngoc Dang",
      date: "Tuesday",
      subject: "Benefits review: proposals for next year",
      greeting: "Dear Lan and Ngoc,",
      paragraphs: [
        "Following our meeting, here is a summary of the benefits review and our proposals for next year. The detailed cost figures are in the attached file."
      ],
      list: [
        "Health insurance: the premium will increase by 12% due to higher medical costs across the market. This will result in an extra cost of about 40 million dong a year, which is already in next year's budget. We recommend renewing the contract with the same insurer, as switching would mean a waiting period for some medical claims.",
        "Annual health check: only 55% of eligible employees attended this year. The low attendance was caused by the timing, as December is our busiest month. We propose moving the health check to April.",
        "Gym discount: only 6 employees used the program. As a result of this low usage, the cost per user was very high. We propose ending the program at the end of this year.",
        "Family health insurance: the savings from the gym program will pay for 50% of a family plan. Employees who add their dependents will pay the other 50% through payroll."
      ],
      after: [
        "Many employees asked for family coverage in the wellbeing survey, so we believe this change will lead to higher satisfaction and could help us keep experienced staff.",
        "Ngoc, could you please check the cost figures in the attached file? We would like to inform employees before the end of the month."
      ],
      closing: "Best regards,",
      signature: ["Tuan Nguyen", "HR Executive, Riverside Trading"]
    },
    glossary: [
      { term: "across the market", vi: "trên toàn thị trường" },
      { term: "switch", vi: "chuyển, đổi (sang công ty khác)" },
      { term: "medical claim", vi: "yêu cầu bồi thường chi phí y tế" },
      { term: "attendance", vi: "số người tham gia" },
      { term: "cost per user", vi: "chi phí tính trên mỗi người dùng" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "Why does Tuan recommend staying with the same insurer?",
        options: ["It is the cheapest insurer.", "Lan asked him to.", "The premium will not change.", "Switching would mean a waiting period for some claims."],
        answer: 3, explanation: "“…as switching would mean a waiting period for some medical claims.” Phí bảo hiểm vẫn tăng 12%, nên “will not change” sai." },
      { id: "r2", type: "choice", prompt: "What caused the low attendance at the health check?",
        options: ["The December timing", "The high cost", "A lack of interest", "The location of the clinic"],
        answer: 0, explanation: "“The low attendance was caused by the timing, as December is our busiest month.”" },
      { id: "r3", type: "choice", prompt: "How will family health insurance be paid for?",
        options: ["The company will pay 100%.", "Employees will pay everything.", "Savings from the gym program will pay 50%, and employees will pay 50%.", "The insurer will pay for it."],
        answer: 2, explanation: "“…the savings from the gym program will pay for 50% of a family plan. Employees who add their dependents will pay the other 50% through payroll.”" }
    ]
  },

  grammar: {
    title: "Cause and effect: due to, as a result, lead to",
    titleVi: "Nói nguyên nhân và kết quả",
    intro: "Khi rà soát phúc lợi, ta luôn phải giải thích vì sao có vấn đề và việc thay đổi sẽ đem lại gì. Bốn mẫu dưới đây giúp nói nguyên nhân – kết quả một cách trang trọng. Chú ý: sau mỗi cụm là danh từ hay cả một câu.",
    patterns: [
      { form: "due to / because of + danh từ", use: "Nêu nguyên nhân. Sau due to / because of là danh từ hoặc cụm danh từ, không phải một câu.",
        examples: ["The premium will rise mainly due to rising medical costs.", "They were too busy because of the year-end closing."] },
      { form: "As a result, + câu  ·  as a result of + danh từ", use: "Nêu kết quả của điều vừa nói. As a result đứng đầu câu, có dấu phẩy.",
        examples: ["It was in December. As a result, many people simply forgot.", "As a result of this low usage, the cost per user was very high."] },
      { form: "Nguyên nhân + lead to / result in + kết quả", use: "Đi từ nguyên nhân đến kết quả.",
        examples: ["Better family coverage could lead to higher staff loyalty.", "The increase will result in an extra cost of about 40 million dong."] },
      { form: "Kết quả + be caused by / result from + nguyên nhân", use: "Đi ngược từ kết quả về nguyên nhân.",
        examples: ["The low numbers were caused by the timing.", "The low usage resulted from poor communication."] }
    ],
    mistakes: [
      { wrong: "Attendance was low due to it was December.", right: "Attendance was low due to the December timing. / …because it was December.", note: "due to + danh từ. Muốn dùng cả câu thì dùng because." },
      { wrong: "As a result of, many people forgot.", right: "As a result, many people forgot.", note: "Trước một câu dùng As a result, (không có of)." },
      { wrong: "The change will lead to increase satisfaction.", right: "The change will lead to higher satisfaction.", note: "lead to + danh từ, không phải động từ nguyên mẫu." },
      { wrong: "The timing resulted from low attendance.", right: "The timing resulted in low attendance. / Low attendance resulted from the timing.", note: "result in → kết quả; result from → nguyên nhân. Đừng đảo ngược." }
    ],
    tip: "Trong email đề xuất, mỗi thay đổi nên có đủ ba ý: vấn đề – nguyên nhân – kết quả mong đợi. Ví dụ: “Attendance was low (vấn đề) due to the December timing (nguyên nhân). Moving it to April should lead to higher attendance (kết quả).”"
  },

  practice: [
    { id: "p1", type: "gap", prompt: "The premium will rise ___ higher medical costs.",
      options: ["because", "due to", "as a result", "so"],
      answer: 1, explanation: "Sau chỗ trống là cụm danh từ (higher medical costs) → due to. because cần cả một câu phía sau." },
    { id: "p2", type: "gap", prompt: "December is our busiest month. ___, many people missed the health check.",
      options: ["Due to", "Because of", "As a result", "Result in"],
      answer: 2, explanation: "Đầu câu, trước một câu hoàn chỉnh, nêu kết quả → As a result,. Due to / Because of cần danh từ theo sau." },
    { id: "p3", type: "gap", prompt: "Better family coverage could ___ higher staff loyalty.",
      options: ["lead to", "result from", "cause by", "due to"],
      answer: 0, explanation: "Nguyên nhân (family coverage) → kết quả (higher loyalty): lead to. result from đi ngược chiều; “cause by” thiếu be và sai dạng." },
    { id: "p4", type: "gap", prompt: "The low attendance was ___ by the timing.",
      options: ["result", "led", "due", "caused"],
      answer: 3, explanation: "be caused by + nguyên nhân: was caused by the timing." },
    { id: "p5", type: "choice", prompt: "Which sentence is correct?",
      options: ["Attendance was low due to it was December.", "Attendance was low due to the December timing.", "Attendance was low due the timing.", "Attendance was low result in the timing."],
      answer: 1, explanation: "due to + cụm danh từ: due to the December timing. Câu A có cả một câu sau due to nên sai." },
    { id: "p6", type: "gap", prompt: "Switching insurers would ___ a waiting period for some claims.",
      options: ["result from", "result in", "be caused by", "due to"],
      answer: 1, explanation: "Việc đổi công ty bảo hiểm (nguyên nhân) gây ra thời gian chờ (kết quả) → result in." },
    { id: "p7", type: "choice", prompt: "“The low usage resulted from poor communication.” What is the CAUSE?",
      options: ["The low usage", "Poor communication", "The gym", "The survey"],
      answer: 1, explanation: "result from + nguyên nhân. Vậy nguyên nhân là poor communication, kết quả là low usage." },
    { id: "p8", type: "gap", prompt: "Employees can add their ___, such as children and partners, to the family plan.",
      options: ["dependents", "insurers", "premiums", "savings"],
      answer: 0, explanation: "dependents = người phụ thuộc như con, vợ hoặc chồng." },
    { id: "p9", type: "gap", prompt: "Only 6 people used the gym discount, so it was not good ___ for money.",
      options: ["price", "cost", "value", "worth"],
      answer: 2, explanation: "Cụm cố định: value for money = đáng đồng tiền." },
    { id: "p10", type: "gap", prompt: "We need to ___ the insurance contract before it ends.",
      options: ["claim", "cover", "insure", "renew"],
      answer: 3, explanation: "renew a contract = gia hạn hợp đồng." }
  ],

  writing: {
    title: "Announce benefit changes",
    task: "Bạn là anh Tuấn. Viết email gửi toàn thể nhân viên (120–180 từ) thông báo thay đổi phúc lợi năm sau và giải thích lý do: khám sức khỏe chuyển từ tháng Mười Hai sang tháng Tư; dừng ưu đãi phòng tập vì ít người dùng; bắt đầu bảo hiểm sức khỏe gia đình (công ty trả 50%, nhân viên trả 50% qua bảng lương).",
    requirements: [
      "Mở đầu bằng lời chào và mục đích email.",
      "Dùng due to / because of + danh từ.",
      "Dùng As a result, + câu.",
      "Dùng lead to / result in.",
      "Dùng be caused by / result from.",
      "Kết thúc email và ký tên."
    ],
    minWords: 120,
    maxWords: 180,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Dear … / Hi …)", pattern: "\\bdear\\b|\\bhi\\b" },
      { label: "Có due to / because of", pattern: "due to|because of" },
      { label: "Có As a result", pattern: "as a result" },
      { label: "Có lead to / result in", pattern: "\\blead\\w* to\\b|\\bled to\\b|result\\w* in\\b" },
      { label: "Có be caused by / result from", pattern: "caused by|result\\w* from" },
      { label: "Có lời kết (Best regards …)", pattern: "regards|sincerely|best wishes" }
    ],
    model: [
      "Dear colleagues,",
      "I am writing to inform you about some changes to our benefits for next year.",
      "First, the annual health check will move from December to April. This year, attendance was low due to the busy year-end period, so we hope the new timing will suit everyone better.",
      "Second, the gym discount program will end in December. Very few people used it, and the low usage was mainly caused by the location of the gym. As a result, the program was not good value for money.",
      "Instead, we are introducing family health insurance. The company will pay 50% of the premium, and you will pay the other 50% through payroll. We believe this change will lead to better protection for you and your dependents.",
      "Details are on the intranet.",
      "Best regards,",
      "Tuan Nguyen"
    ]
  },

  review: {
    keyPhrases: [
      { en: "The premium will rise mainly due to rising medical costs.", vi: "Phí bảo hiểm sẽ tăng chủ yếu do chi phí y tế tăng." },
      { en: "As a result, many people simply forgot.", vi: "Vì vậy, nhiều người quên mất." },
      { en: "The low numbers were caused by the timing.", vi: "Số người thấp là do thời điểm tổ chức." },
      { en: "It will result in an extra cost of about 40 million dong.", vi: "Việc này sẽ làm tăng thêm khoảng 40 triệu đồng." },
      { en: "Better family coverage could lead to higher staff loyalty.", vi: "Bảo hiểm gia đình tốt hơn có thể giúp nhân viên gắn bó hơn." },
      { en: "We recommend renewing the contract with the same insurer.", vi: "Chúng tôi đề xuất gia hạn hợp đồng với công ty bảo hiểm cũ." }
    ]
  }
});
