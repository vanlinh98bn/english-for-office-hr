/* =========================================================
   B2 · Module 1 (Advanced Recruitment) · Bài 5
   "Recruitment metrics"
   Nối tiếp B2-M1-L4: giữa năm, sau khi Quynh và các nhân viên kinh doanh
   mới đã vào làm, Tuấn (HR Executive) trình bày số liệu tuyển dụng sáu
   tháng đầu năm cho chị Lan (HR Manager) và anh David. Số liệu:
   - Số hồ sơ mỗi tháng: tháng Một khoảng 30; tăng mạnh sau khi ra trang
     tuyển dụng mới vào tháng Ba; cao nhất 90 vào tháng Tư; giảm nhẹ rồi
     ổn định ở khoảng 85.
   - Thời gian tuyển (time-to-hire): giảm đều từ 45 ngày (năm ngoái) xuống 32 ngày.
   - Tỷ lệ nhận lời mời: năm ngoái 70% (7/10), năm nay 6/7 ≈ 86%; đủ sáu
     nhân viên kinh doanh như kế hoạch.
   - Chi phí cho mỗi người tuyển được: năm ngoái trung bình 10 triệu đồng;
     tăng nhẹ lên 11 triệu vào tháng Hai (dùng công ty tuyển dụng), rồi giảm
     đáng kể xuống 7 triệu vào tháng Sáu (nhờ giới thiệu nội bộ).
   Tuấn gửi email tóm tắt cho chị Lan để chị báo cáo Ban giám đốc.
   Thời gian nói áng chừng.
   ========================================================= */
window.EOH.registerLesson({
  id: "b2-m1-l5",
  reviewStatus: "approved", // Linh duyệt ngày 24/10/2026
  duration: "45–60 phút",
  scenario: "Giữa năm, sáu nhân viên kinh doanh mới (trong đó có Quynh) đã vào làm. Anh Tuấn (HR Executive) trình bày số liệu tuyển dụng sáu tháng đầu năm cho chị Lan (HR Manager) và anh David: số hồ sơ, thời gian tuyển, tỷ lệ nhận lời mời và chi phí cho mỗi người. Sau buổi họp, anh Tuấn gửi email tóm tắt để chị Lan báo cáo Ban giám đốc.",

  objectives: [
    "Hiểu và dùng 10 từ vựng thường gặp khi nói về chỉ số tuyển dụng.",
    "Nghe bài trình bày số liệu, ghi lại xu hướng tăng, giảm và nguyên nhân.",
    "Đọc email báo cáo, tìm đúng con số, mốc thời gian và đề xuất.",
    "Mô tả xu hướng bằng động từ + trạng từ (rose sharply, fell slightly), danh từ + tính từ (a sharp rise in) và giới từ from / to / by / at.",
    "Viết email tóm tắt số liệu tuyển dụng ngắn gọn, rõ ràng, có đề xuất."
  ],

  vocabulary: [
    { word: "metric", ipa: "/ˈmetrɪk/", pos: "noun", meaning: "chỉ số (dùng để đo kết quả công việc)",
      example: "Time-to-hire is our most important metric.", exampleVi: "Thời gian tuyển là chỉ số quan trọng nhất của chúng tôi." },
    { word: "trend", ipa: "/trend/", pos: "noun", meaning: "xu hướng",
      example: "The overall trend is positive.", exampleVi: "Xu hướng chung là tích cực." },
    { word: "time-to-hire", ipa: "/ˌtaɪm tə ˈhaɪər/", pos: "noun", meaning: "thời gian tuyển (từ lúc đăng tin đến lúc ứng viên nhận lời)",
      example: "Our time-to-hire fell to thirty-two days.", exampleVi: "Thời gian tuyển của chúng ta giảm xuống ba mươi hai ngày." },
    { word: "cost per hire", ipa: "/ˌkɔːst pər ˈhaɪər/", pos: "noun", meaning: "chi phí cho mỗi người tuyển được",
      example: "Cost per hire dropped thanks to referrals.", exampleVi: "Chi phí cho mỗi người tuyển được giảm nhờ giới thiệu nội bộ." },
    { word: "acceptance rate", ipa: "/əkˈseptəns reɪt/", pos: "noun", meaning: "tỷ lệ nhận lời (mời nhận việc)",
      example: "The offer acceptance rate rose to eighty-six percent.", exampleVi: "Tỷ lệ nhận lời mời nhận việc tăng lên tám mươi sáu phần trăm." },
    { word: "sharply", ipa: "/ˈʃɑːrpli/", pos: "adverb", meaning: "mạnh, đột ngột (tăng hoặc giảm)",
      example: "Applications rose sharply in March.", exampleVi: "Số hồ sơ tăng mạnh vào tháng Ba." },
    { word: "steadily", ipa: "/ˈstedəli/", pos: "adverb", meaning: "đều đặn, từ từ và liên tục",
      example: "Time-to-hire fell steadily all year.", exampleVi: "Thời gian tuyển giảm đều suốt cả năm." },
    { word: "peak", ipa: "/piːk/", pos: "verb", meaning: "đạt mức cao nhất",
      example: "Applications peaked at ninety in April.", exampleVi: "Số hồ sơ đạt mức cao nhất là chín mươi vào tháng Tư." },
    { word: "level off", ipa: "/ˈlevəl ɔːf/", pos: "phrasal verb", meaning: "chững lại, ổn định (sau khi tăng hoặc giảm)",
      example: "The number leveled off at around eighty-five.", exampleVi: "Con số chững lại ở khoảng tám mươi lăm." },
    { word: "fluctuate", ipa: "/ˈflʌktʃueɪt/", pos: "verb", meaning: "dao động, lên xuống thất thường",
      example: "Cost per hire fluctuated during the first half of the year.", exampleVi: "Chi phí cho mỗi người tuyển được dao động trong nửa đầu năm." }
  ],

  pronunciation: {
    groups: [
      {
        title: "Trọng âm danh từ và động từ",
        text: "Một số từ vừa là danh từ vừa là động từ. Danh từ nhấn âm đầu, động từ nhấn âm sau. Âm tiết in hoa là âm đọc to và dài hơn.",
        items: [
          { word: "an increase (danh từ)", marked: "IN·crease" },
          { word: "to increase (động từ)", marked: "in·CREASE" },
          { word: "a decrease (danh từ)", marked: "DE·crease" },
          { word: "to decrease (động từ)", marked: "de·CREASE" }
        ]
      },
      {
        title: "Trọng âm của từ",
        text: "Những từ dưới đây hay gặp khi mô tả số liệu.",
        items: [
          { word: "metric", marked: "MET·ric" },
          { word: "steadily", marked: "STEAD·i·ly" },
          { word: "fluctuate", marked: "FLUC·tu·ate" },
          { word: "significantly", marked: "sig·NIF·i·cant·ly" }
        ]
      }
    ],
    sentences: [
      "There was a sharp increase in applications in March.",
      "Applications increased sharply after the new careers page.",
      "Time-to-hire fell steadily from forty-five to thirty-two days."
    ]
  },

  listening: {
    title: "Half-year recruitment review",
    setting: "Room 301, cuộc họp giữa năm. Anh Tuấn (HR Executive) trình bày số liệu tuyển dụng cho chị Lan (HR Manager) và anh David (Sales Manager).",
    speakers: { tuan: "Tuan (HR Executive)", lan: "Lan (HR Manager)", david: "David (Sales Manager)" },
    lines: [
      { s: "lan", text: "Tuan, could you take us through the recruitment figures for the first half of the year?",
        vi: "Tuấn, em trình bày giúp số liệu tuyển dụng nửa đầu năm nhé?" },
      { s: "tuan", text: "Of course. Let's start with applications. In January we received about thirty a month. After we launched the new careers page in March, the number rose sharply.",
        vi: "Vâng. Bắt đầu với số hồ sơ. Tháng Một mình nhận khoảng ba mươi hồ sơ mỗi tháng. Sau khi ra mắt trang tuyển dụng mới vào tháng Ba, con số tăng mạnh." },
      { s: "david", text: "How high did it go?",
        vi: "Tăng lên bao nhiêu?" },
      { s: "tuan", text: "It peaked at ninety in April. Then it fell slightly and leveled off at around eighty-five.",
        vi: "Cao nhất là chín mươi vào tháng Tư. Sau đó giảm nhẹ và ổn định ở khoảng tám mươi lăm." },
      { s: "lan", text: "That's a big improvement. What about time-to-hire?",
        vi: "Đó là tiến bộ lớn. Còn thời gian tuyển thì sao?" },
      { s: "tuan", text: "It fell steadily. Last year the average was forty-five days. Now it's thirty-two days, so we've reduced it by thirteen days.",
        vi: "Giảm đều. Năm ngoái trung bình là bốn mươi lăm ngày. Giờ là ba mươi hai ngày, tức là đã giảm được mười ba ngày." },
      { s: "david", text: "And the acceptance rate? Last year three candidates turned us down.",
        vi: "Còn tỷ lệ nhận lời? Năm ngoái có ba ứng viên từ chối mình." },
      { s: "tuan", text: "That's improved significantly. Last year seven out of ten candidates accepted our offers, which is seventy percent. This year six out of seven accepted, so it rose to about eighty-six percent.",
        vi: "Chỉ số này cải thiện đáng kể. Năm ngoái bảy trên mười ứng viên nhận lời, tức bảy mươi phần trăm. Năm nay sáu trên bảy người nhận lời, nên tăng lên khoảng tám mươi sáu phần trăm." },
      { s: "david", text: "So we've hired all six sales staff we planned. Excellent.",
        vi: "Vậy là mình đã tuyển đủ sáu nhân viên kinh doanh như kế hoạch. Tuyệt." },
      { s: "lan", text: "What about cost per hire?",
        vi: "Còn chi phí cho mỗi người tuyển được?" },
      { s: "tuan", text: "It fluctuated. It rose slightly to eleven million dong in February, because we used an agency for two roles. After that, it dropped significantly, and in June it was seven million.",
        vi: "Chỉ số này dao động. Tháng Hai tăng nhẹ lên mười một triệu đồng vì mình dùng công ty tuyển dụng cho hai vị trí. Sau đó giảm đáng kể, đến tháng Sáu là bảy triệu." },
      { s: "lan", text: "Why such a big fall?",
        vi: "Sao giảm nhiều vậy?" },
      { s: "tuan", text: "Mainly because of referrals. Staff referred more good candidates, so we didn't need the agency.",
        vi: "Chủ yếu nhờ giới thiệu nội bộ. Nhân viên giới thiệu nhiều ứng viên tốt hơn, nên mình không cần công ty tuyển dụng nữa." },
      { s: "lan", text: "Great work. Could you put these figures in an email? I'd like to include them in my report to the directors.",
        vi: "Làm tốt lắm. Em gửi các số liệu này qua email nhé? Chị muốn đưa vào báo cáo gửi Ban giám đốc." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "What happened to applications after the new careers page was launched?",
        options: ["They fell slightly", "They rose sharply and peaked at ninety in April", "They stayed at thirty a month", "They fluctuated every week"],
        answer: 1, explanation: "Tuấn nói: “the number rose sharply… It peaked at ninety in April.”" },
      { id: "l2", type: "choice", prompt: "By how many days did time-to-hire fall?",
        options: ["Thirty-two", "Forty-five", "Seven", "Thirteen"],
        answer: 3, explanation: "Từ bốn mươi lăm xuống ba mươi hai ngày: “we've reduced it by thirteen days.” Giới từ by chỉ mức chênh lệch." },
      { id: "l3", type: "choice", prompt: "Why did cost per hire drop after February?",
        options: ["Because staff referred more good candidates", "Because they stopped hiring", "Because salaries were lower", "Because they used more agencies"],
        answer: 0, explanation: "“Mainly because of referrals… so we didn't need the agency.”" }
    ]
  },

  reading: {
    title: "Recruitment metrics summary",
    intro: "Email anh Tuấn gửi chị Lan sau cuộc họp. Đọc và tìm con số, xu hướng và đề xuất.",
    email: {
      from: "Tuan Nguyen <tuan.nguyen@riverside-trading.example>",
      to: "Lan Pham",
      date: "Tuesday",
      subject: "Recruitment metrics – first half of the year",
      greeting: "Dear Lan,",
      paragraphs: [
        "As requested, here is a summary of our recruitment metrics for the first six months of the year. Overall, the trend is very positive, and we have hired all six sales staff that we planned.",
        "The key figures are as follows:"
      ],
      list: [
        "Applications: about thirty a month in January. There was a sharp rise after the new careers page was launched in March. Applications peaked at ninety in April, then fell slightly and leveled off at around eighty-five.",
        "Time-to-hire: a steady fall from forty-five days last year to thirty-two days, a reduction of thirteen days.",
        "Offer acceptance rate: a significant increase from seventy percent last year to about eighty-six percent (six out of seven candidates).",
        "Cost per hire: fluctuated. It rose slightly to eleven million dong in February because we used an agency, then dropped to seven million in June, compared with an average of ten million last year."
      ],
      after: [
        "The main reasons for these improvements are the new careers page and the growing number of employee referrals. However, the slight fall in applications after April shows that we need to keep the careers page up to date.",
        "I would suggest that we continue the referral bonus and add two new employee stories to the careers page next quarter. Please let me know if you need a chart for your report to the directors."
      ],
      closing: "Best regards,",
      signature: ["Tuan Nguyen", "HR Executive, Riverside Trading"]
    },
    glossary: [
      { term: "as requested", vi: "theo yêu cầu" },
      { term: "as follows", vi: "như sau" },
      { term: "reduction", vi: "sự giảm, mức giảm" },
      { term: "compared with", vi: "so với" },
      { term: "up to date", vi: "cập nhật, mới" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "What was the average cost per hire last year?",
        options: ["Seven million dong", "Eleven million dong", "Ten million dong", "Thirty million dong"],
        answer: 2, explanation: "“…compared with an average of ten million last year.” Mười một triệu là con số tháng Hai, bảy triệu là tháng Sáu." },
      { id: "r2", type: "choice", prompt: "Why does Tuan say the careers page needs to stay up to date?",
        options: ["Because applications fell slightly after April", "Because the agency asked for it", "Because time-to-hire increased", "Because David does not like it"],
        answer: 0, explanation: "“…the slight fall in applications after April shows that we need to keep the careers page up to date.”" },
      { id: "r3", type: "choice", prompt: "What does Tuan suggest?",
        options: ["Using more agencies", "Stopping the referral bonus", "Hiring six more sales staff", "Continuing the referral bonus and adding two employee stories to the careers page"],
        answer: 3, explanation: "“I would suggest that we continue the referral bonus and add two new employee stories to the careers page next quarter.”" }
    ]
  },

  grammar: {
    title: "Describing trends",
    titleVi: "Mô tả xu hướng",
    intro: "Khi báo cáo số liệu, bạn cần nói số liệu tăng hay giảm, mạnh hay nhẹ, và từ mức nào đến mức nào. Bốn mẫu dưới đây có trong bài trình bày và email bạn vừa học.",
    patterns: [
      { form: "động từ + trạng từ: rise / increase / fall / drop / decrease + sharply / significantly / steadily / slightly", use: "Nói số liệu thay đổi thế nào. Trạng từ đứng sau động từ. Tăng: rise, increase, grow. Giảm: fall, drop, decrease, decline.",
        examples: ["Applications rose sharply in March.", "Time-to-hire fell steadily."] },
      { form: "a / an + tính từ + danh từ + in: a sharp rise in / a steady fall in / a slight increase in", use: "Cùng ý nhưng dùng danh từ, thường gặp trong văn viết, báo cáo. Tính từ đứng trước danh từ (sharp, không phải sharply).",
        examples: ["There was a sharp rise in applications.", "We saw a steady fall in time-to-hire."] },
      { form: "from … to … · by … · at …", use: "from … to: mức đầu và mức cuối. by: mức chênh lệch. peak at / level off at: mức đạt được.",
        examples: ["It fell from forty-five to thirty-two days.", "We reduced it by thirteen days.", "Applications peaked at ninety."] },
      { form: "peak · level off · remain stable · fluctuate", use: "Những động từ không nói tăng hay giảm: đạt đỉnh, chững lại, giữ nguyên, dao động.",
        examples: ["The number leveled off at around eighty-five.", "Cost per hire fluctuated."] }
    ],
    mistakes: [
      { wrong: "Applications rose sharp in March.", right: "Applications rose sharply in March.", note: "Sau động từ dùng trạng từ (sharply). Tính từ sharp đi với danh từ: a sharp rise." },
      { wrong: "There was a sharply rise in applications.", right: "There was a sharp rise in applications.", note: "Trước danh từ (rise) dùng tính từ (sharp), không dùng trạng từ." },
      { wrong: "Time-to-hire fell with thirteen days.", right: "Time-to-hire fell by thirteen days.", note: "Mức chênh lệch dùng by, không dùng with." },
      { wrong: "The acceptance rate was risen to 86%.", right: "The acceptance rate rose to 86%.", note: "rise là nội động từ, không dùng bị động. Nếu có tân ngữ, dùng raise / increase: We increased the rate." }
    ],
    tip: "Khi báo cáo số liệu, hãy nêu xu hướng chung trước (Overall, the trend is positive), sau đó mới nêu con số cụ thể, và kết bằng nguyên nhân (because of / thanks to) hoặc đề xuất. Người đọc bận rộn nắm được ý chính ngay trong câu đầu."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "Applications rose ___ after the new careers page was launched.",
      options: ["sharp", "sharply", "sharpness", "more sharp"],
      answer: 1, explanation: "Sau động từ (rose) dùng trạng từ: sharply." },
    { id: "p2", type: "gap", prompt: "There was a ___ fall in time-to-hire.",
      options: ["steady", "steadily", "stead", "steadiness"],
      answer: 0, explanation: "Trước danh từ (fall) dùng tính từ: a steady fall." },
    { id: "p3", type: "gap", prompt: "Time-to-hire fell from forty-five days ___ thirty-two days.",
      options: ["at", "by", "to", "on"],
      answer: 2, explanation: "from … to …: mức đầu và mức cuối." },
    { id: "p4", type: "gap", prompt: "We reduced time-to-hire ___ thirteen days.",
      options: ["with", "at", "for", "by"],
      answer: 3, explanation: "Mức chênh lệch dùng by: reduced it by thirteen days." },
    { id: "p5", type: "gap", prompt: "Applications ___ at ninety in April, then fell slightly.",
      options: ["peaked", "fluctuated", "leveled", "remained"],
      answer: 0, explanation: "peak at = đạt mức cao nhất. Con số giảm sau đó, nên tháng Tư là đỉnh." },
    { id: "p6", type: "gap", prompt: "After April, the number fell slightly and ___ off at around eighty-five.",
      options: ["dropped", "leveled", "peaked", "turned"],
      answer: 1, explanation: "level off = chững lại, ổn định." },
    { id: "p7", type: "gap", prompt: "Cost per hire went up and down several times. It ___.",
      options: ["leveled off", "remained stable", "fluctuated", "peaked"],
      answer: 2, explanation: "Lên xuống nhiều lần = fluctuate (dao động)." },
    { id: "p8", type: "choice", prompt: "Which sentence is correct?",
      options: ["The acceptance rate was risen to 86%.", "The acceptance rate rose with 86%.", "There was a significantly increase in the acceptance rate.", "There was a significant increase in the acceptance rate."],
      answer: 3, explanation: "Trước danh từ increase dùng tính từ significant. rise không dùng bị động; mức cuối dùng to, không dùng with." },
    { id: "p9", type: "gap", prompt: "The number of days from posting a job to an accepted offer is called ___.",
      options: ["time-to-hire", "cost per hire", "acceptance rate", "talent pool"],
      answer: 0, explanation: "Time-to-hire = thời gian tuyển." },
    { id: "p10", type: "choice", prompt: "Which sentence is the best opening for a short metrics report?",
      options: ["Applications were thirty in January.", "Overall, the trend is very positive.", "Cost per hire fluctuated.", "I don't know the figures yet."],
      answer: 1, explanation: "Nên nêu xu hướng chung trước, rồi mới đến con số cụ thể." }
  ],

  writing: {
    title: "Write a recruitment metrics summary",
    task: "Bạn là anh Tuấn. Viết email gửi chị Lan (120–180 từ) tóm tắt số liệu tuyển dụng nửa đầu năm: số hồ sơ (tăng mạnh sau tháng Ba, cao nhất 90 vào tháng Tư, rồi chững lại khoảng 85), thời gian tuyển (giảm đều từ 45 xuống 32 ngày), tỷ lệ nhận lời (tăng từ 70% lên khoảng 86%), chi phí cho mỗi người (dao động, tháng Sáu còn 7 triệu đồng). Nêu một nguyên nhân và một đề xuất.",
    requirements: [
      "Mở đầu bằng lời chào và câu nêu mục đích email.",
      "Nêu xu hướng chung trước khi đưa con số.",
      "Dùng ít nhất hai động từ chỉ xu hướng kèm trạng từ (rose sharply, fell steadily…).",
      "Dùng đúng from … to … hoặc by.",
      "Nêu nguyên nhân (because / thanks to) và một đề xuất.",
      "Kết thúc email và ký tên."
    ],
    minWords: 120,
    maxWords: 180,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Dear … / Hi …)", pattern: "\\bdear\\b|\\bhi\\b" },
      { label: "Có động từ chỉ xu hướng (rose / fell / increased / dropped / peaked / leveled off…)", pattern: "\\b(rose|fell|increased|decreased|dropped|declined|peaked|levell?ed off|fluctuated)\\b" },
      { label: "Có trạng từ mức độ (sharply / steadily / slightly / significantly / gradually)", pattern: "sharply|steadily|slightly|significantly|gradually" },
      { label: "Có from … to … hoặc by + con số", pattern: "from [^.]* to |\\bby (\\d|thirteen|ten|five)" },
      { label: "Có nguyên nhân (because / thanks to / due to)", pattern: "because|thanks to|due to" },
      { label: "Có lời kết (Best regards …)", pattern: "regards|sincerely|best wishes" }
    ],
    model: [
      "Dear Lan,",
      "Please find below a short summary of our recruitment metrics for the first half of the year. Overall, the trend is very positive.",
      "Applications rose sharply after we launched the new careers page in March. They peaked at ninety in April, then fell slightly and leveled off at around eighty-five a month.",
      "Our time-to-hire fell steadily from forty-five days last year to thirty-two days. The offer acceptance rate also increased significantly, from seventy percent to about eighty-six percent.",
      "Cost per hire fluctuated. It rose slightly in February because we used an agency, but it dropped to seven million dong by June thanks to more employee referrals.",
      "I would suggest that we continue the referral bonus and keep the careers page up to date.",
      "Best regards,",
      "Tuan"
    ]
  },

  review: {
    keyPhrases: [
      { en: "Overall, the trend is very positive.", vi: "Nhìn chung, xu hướng rất tích cực." },
      { en: "Applications rose sharply after the new careers page was launched.", vi: "Số hồ sơ tăng mạnh sau khi ra mắt trang tuyển dụng mới." },
      { en: "Applications peaked at ninety in April, then leveled off.", vi: "Số hồ sơ đạt cao nhất là chín mươi vào tháng Tư, rồi chững lại." },
      { en: "Time-to-hire fell steadily from forty-five to thirty-two days.", vi: "Thời gian tuyển giảm đều từ bốn mươi lăm xuống ba mươi hai ngày." },
      { en: "There was a significant increase in the acceptance rate.", vi: "Tỷ lệ nhận lời tăng đáng kể." },
      { en: "Cost per hire dropped thanks to employee referrals.", vi: "Chi phí cho mỗi người tuyển được giảm nhờ giới thiệu nội bộ." }
    ]
  }
});
