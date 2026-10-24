/* =========================================================
   B2 · Module 1 (Advanced Recruitment) · Bài 2
   "Sourcing channels"
   Nối tiếp B2-M1-L1: để tuyển sáu nhân viên kinh doanh, Tuấn phân tích
   bốn kênh tìm ứng viên. Số liệu: trang đăng tin tuyển dụng 120 hồ sơ,
   12 người đạt (10%), rẻ; giới thiệu nội bộ 15 hồ sơ, 6 người đạt (40%),
   trả thưởng cho người giới thiệu; công ty tuyển dụng thuê ngoài 20 người,
   10 đạt (50%), phí bằng một tháng lương cho mỗi người; hội chợ việc làm
   40 liên hệ, 4 đạt (10%), hợp vị trí mới ra trường. Thời gian nói áng chừng.
   ========================================================= */
window.EOH.registerLesson({
  id: "b2-m1-l2",
  reviewStatus: "approved", // Linh duyệt ngày 24/10/2026
  duration: "45–60 phút",
  scenario: "Công ty cần tuyển sáu nhân viên kinh doanh. Tuấn (HR Executive) đã phân tích bốn kênh tìm ứng viên: trang đăng tin tuyển dụng, giới thiệu nội bộ, công ty tuyển dụng thuê ngoài và hội chợ việc làm. Chị Lan (HR Manager), David và Tuấn họp để so sánh số liệu và chọn kênh phù hợp, rồi Tuấn gửi chị Lan email tóm tắt kèm đề xuất.",

  objectives: [
    "Hiểu và dùng 10 từ vựng thường gặp khi bàn về các kênh tìm ứng viên.",
    "Nghe cuộc họp so sánh các kênh, ghi lại số liệu, ưu và nhược điểm của từng kênh.",
    "Đọc email so sánh các kênh tuyển dụng, tìm đúng số liệu và đề xuất.",
    "Dùng while / whereas / on the other hand để so sánh hai điều trái ngược, và phân biệt với although.",
    "Viết email so sánh hai kênh tuyển dụng bằng các từ nối tương phản."
  ],

  vocabulary: [
    { word: "sourcing", ipa: "/ˈsɔːrsɪŋ/", pos: "noun", meaning: "việc tìm kiếm ứng viên tiềm năng",
      example: "Sourcing is the first step in the recruitment process.", exampleVi: "Tìm kiếm ứng viên là bước đầu của quy trình tuyển dụng." },
    { word: "channel", ipa: "/ˈtʃænəl/", pos: "noun", meaning: "kênh (cách tiếp cận ứng viên)",
      example: "Each sourcing channel has advantages and disadvantages.", exampleVi: "Mỗi kênh tìm ứng viên đều có ưu và nhược điểm." },
    { word: "job board", ipa: "/ˈdʒɑːb bɔːrd/", pos: "noun", meaning: "trang đăng tin tuyển dụng",
      example: "The job board brought many applications.", exampleVi: "Trang đăng tin tuyển dụng mang lại nhiều hồ sơ." },
    { word: "referral", ipa: "/rɪˈfɜːrəl/", pos: "noun", meaning: "sự giới thiệu (ứng viên bởi nhân viên hiện tại)",
      example: "Referrals give us better candidates.", exampleVi: "Giới thiệu nội bộ cho chúng ta ứng viên tốt hơn." },
    { word: "recruitment agency", ipa: "/rɪˈkruːtmənt ˈeɪdʒənsi/", pos: "noun", meaning: "công ty tuyển dụng thuê ngoài",
      example: "The recruitment agency charges one month's salary for each hire.", exampleVi: "Công ty tuyển dụng thuê ngoài thu phí bằng một tháng lương cho mỗi người được tuyển." },
    { word: "passive candidate", ipa: "/ˈpæsɪv ˈkændɪdət/", pos: "noun", meaning: "ứng viên không chủ động tìm việc nhưng có thể quan tâm",
      example: "Experienced salespeople are often passive candidates.", exampleVi: "Nhân viên kinh doanh giàu kinh nghiệm thường là ứng viên thụ động." },
    { word: "talent pool", ipa: "/ˈtælənt puːl/", pos: "noun", meaning: "nguồn ứng viên tiềm năng",
      example: "We want to build a bigger talent pool in the north.", exampleVi: "Chúng tôi muốn xây dựng nguồn ứng viên lớn hơn ở miền Bắc." },
    { word: "career fair", ipa: "/kəˈrɪr fer/", pos: "noun", meaning: "hội chợ việc làm",
      example: "Career fairs are good for junior roles.", exampleVi: "Hội chợ việc làm phù hợp với các vị trí mới vào nghề." },
    { word: "reach", ipa: "/riːtʃ/", pos: "verb", meaning: "tiếp cận (được)",
      example: "How can we reach experienced salespeople?", exampleVi: "Làm sao chúng ta tiếp cận được những nhân viên kinh doanh giàu kinh nghiệm?" },
    { word: "cost-effective", ipa: "/ˌkɔːst ɪˈfektɪv/", pos: "adjective", meaning: "hiệu quả so với chi phí",
      example: "Referrals are the most cost-effective channel.", exampleVi: "Giới thiệu nội bộ là kênh hiệu quả nhất so với chi phí." }
  ],

  pronunciation: {
    groups: [
      {
        title: "Trọng âm của từ",
        text: "Những từ dưới đây hay gặp khi bàn về kênh tuyển dụng. Âm tiết in hoa là âm đọc to và dài hơn.",
        items: [
          { word: "sourcing", marked: "SOUR·cing" },
          { word: "referral", marked: "re·FER·ral", note: "Nhấn âm tiết thứ hai (giống refer)." },
          { word: "agency", marked: "A·gen·cy" },
          { word: "passive", marked: "PAS·sive" },
          { word: "cost-effective", marked: "cost ef·FEC·tive", note: "Từ ghép: nhấn âm tiết của từ thứ hai." },
          { word: "channel", marked: "CHAN·nel" }
        ]
      },
      {
        title: "Ngữ điệu khi so sánh tương phản",
        text: "Khi dùng while / whereas / on the other hand, giọng lên ở vế đầu (còn tiếp) và xuống ở vế sau (kết thúc). Có ngắt nhẹ ở dấu phẩy.",
        items: [
          { word: "Job boards are CHEAP ↗,", marked: "while agencies are EX·pen·sive ↘" },
          { word: "On the OTH·er HAND ↗,", marked: "it is the most ex·PEN·sive ↘" }
        ]
      }
    ],
    sentences: [
      "Job boards give us quantity, whereas referrals give us quality.",
      "Job boards are cheap, while the agency charges one month's salary.",
      "The agency is fast. On the other hand, it is expensive."
    ]
  },

  listening: {
    title: "Which channel works best?",
    setting: "Room 301, buổi sáng. Chị Lan, Tuấn và David họp để so sánh các kênh tìm ứng viên cho sáu vị trí kinh doanh.",
    speakers: { lan: "Lan (HR Manager)", tuan: "Tuan (HR Executive)", david: "David (Sales Manager)" },
    lines: [
      { s: "lan", text: "Tuan, you've analyzed our sourcing channels for the six sales positions. What did you find?",
        vi: "Tuấn, em đã phân tích các kênh tìm ứng viên cho sáu vị trí kinh doanh. Em thấy gì?" },
      { s: "tuan", text: "Four channels. Job boards brought one hundred twenty applications, but only twelve were qualified.",
        vi: "Có bốn kênh. Các trang đăng tin mang lại một trăm hai mươi hồ sơ, nhưng chỉ mười hai người đạt yêu cầu." },
      { s: "david", text: "So only ten percent. That's low.",
        vi: "Vậy chỉ mười phần trăm. Thấp quá." },
      { s: "tuan", text: "Yes. Whereas job boards give us quantity, referrals give us quality. Fifteen referrals brought six qualified candidates, which is forty percent.",
        vi: "Vâng. Trong khi các trang đăng tin cho chúng ta số lượng thì giới thiệu nội bộ cho chúng ta chất lượng. Mười lăm người được giới thiệu cho ra sáu ứng viên đạt, tức bốn mươi phần trăm." },
      { s: "lan", text: "Impressive. And what about the cost?",
        vi: "Ấn tượng đấy. Còn chi phí thì sao?" },
      { s: "tuan", text: "Job boards are cheap, while the recruitment agency charges one month's salary for each hire.",
        vi: "Các trang đăng tin rẻ, trong khi công ty tuyển dụng thuê ngoài thu phí bằng một tháng lương cho mỗi người được tuyển." },
      { s: "david", text: "On the other hand, the agency found ten qualified people out of twenty, didn't it?",
        vi: "Mặt khác, công ty đó tìm được mười người đạt trong hai mươi người, đúng không?" },
      { s: "tuan", text: "That's right, fifty percent. But on the other hand, it's the most expensive channel.",
        vi: "Đúng ạ, năm mươi phần trăm. Nhưng mặt khác, đó là kênh đắt nhất." },
      { s: "lan", text: "What about career fairs? We could reach younger candidates.",
        vi: "Còn hội chợ việc làm thì sao? Chúng ta có thể tiếp cận ứng viên trẻ hơn." },
      { s: "tuan", text: "They gave us forty contacts and four qualified candidates. They're good for junior roles, whereas for experienced salespeople, referrals work better.",
        vi: "Chúng cho chúng ta bốn mươi liên hệ và bốn ứng viên đạt. Phù hợp với vị trí mới vào nghề, còn với nhân viên kinh doanh giàu kinh nghiệm thì giới thiệu nội bộ hiệu quả hơn." },
      { s: "david", text: "Experienced salespeople are often passive candidates. They're not looking for a job, so we need to reach them directly.",
        vi: "Nhân viên kinh doanh giàu kinh nghiệm thường là ứng viên thụ động. Họ không tìm việc, nên chúng ta cần tiếp cận họ trực tiếp." },
      { s: "lan", text: "Then let's combine channels: referrals and direct contact for experienced people, and job boards for volume.",
        vi: "Vậy chúng ta kết hợp các kênh: giới thiệu nội bộ và liên hệ trực tiếp cho người giàu kinh nghiệm, còn trang đăng tin để có số lượng." },
      { s: "tuan", text: "I'd also suggest we raise the employee referral bonus. While it costs money, it's still cheaper than an agency.",
        vi: "Em cũng đề xuất tăng thưởng giới thiệu cho nhân viên. Tuy tốn tiền nhưng vẫn rẻ hơn công ty tuyển dụng thuê ngoài." },
      { s: "lan", text: "Agreed. Please put the numbers in an email so we can decide this week.",
        vi: "Đồng ý. Em ghi các số liệu vào một email để chúng ta quyết định trong tuần này nhé." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "Why are job boards a weak channel for quality?",
        options: ["They are too expensive", "They give very few applications", "They give many applications but only ten percent are qualified", "They only reach junior people"],
        answer: 2, explanation: "Tuấn nói: “Job boards brought one hundred twenty applications, but only twelve were qualified.” David tính: “So only ten percent.”" },
      { id: "l2", type: "choice", prompt: "What is the main disadvantage of the recruitment agency?",
        options: ["It is the most expensive channel", "It finds too few candidates", "It is too slow", "It only finds junior people"],
        answer: 0, explanation: "“The recruitment agency charges one month's salary for each hire… it's the most expensive channel.” Tỷ lệ đạt của công ty này lại cao (50%)." },
      { id: "l3", type: "choice", prompt: "What does Tuan suggest about the employee referral bonus?",
        options: ["Cancel it", "Keep it the same", "Pay it only to managers", "Raise it, because it is still cheaper than an agency"],
        answer: 3, explanation: "“I'd also suggest we raise the employee referral bonus. While it costs money, it's still cheaper than an agency.”" }
    ]
  },

  reading: {
    title: "Comparing our sourcing channels",
    intro: "Email Tuấn gửi chị Lan sau cuộc họp. Đọc và tìm số liệu của từng kênh cùng đề xuất của Tuấn.",
    email: {
      from: "Tuan Nguyen <tuan.nguyen@riverside-trading.example>",
      to: "Lan Pham",
      date: "Wednesday",
      subject: "Sourcing channels – comparison and recommendation",
      greeting: "Dear Lan,",
      paragraphs: [
        "As agreed at our meeting, here is a summary of the four sourcing channels we used for the six Sales Executive positions. I have included the number of applications, the number of qualified candidates and the main advantage or disadvantage of each channel."
      ],
      list: [
        "Job boards: 120 applications, 12 qualified (10%). They are cheap and reach many people, whereas the quality is low.",
        "Employee referrals: 15 candidates, 6 qualified (40%). The quality is high, although the number of candidates is small and we pay a bonus.",
        "Recruitment agency: 20 candidates, 10 qualified (50%). The quality is the highest, while the fee is one month's salary for each hire.",
        "Career fairs: 40 contacts, 4 qualified (10%). They work well for junior roles. On the other hand, they take a lot of staff time."
      ],
      after: [
        "In short, job boards give us quantity, while referrals and the agency give us quality. For experienced salespeople, who are often passive candidates, referrals and direct contact seem more effective than advertising.",
        "I therefore recommend that we combine job boards for volume with referrals and direct contact for experienced candidates, and that we raise the referral bonus. This option is more cost-effective than using the agency for every position. I would keep the agency for one or two difficult positions only.",
        "Could you let me know if you would like me to prepare a budget comparison before Friday?"
      ],
      closing: "Best regards,",
      signature: ["Tuan Nguyen", "HR Executive, Riverside Trading"]
    },
    glossary: [
      { term: "as agreed", vi: "như đã thống nhất" },
      { term: "in short", vi: "tóm lại" },
      { term: "volume", vi: "số lượng (nhiều)" },
      { term: "direct contact", vi: "liên hệ trực tiếp" },
      { term: "budget comparison", vi: "bảng so sánh ngân sách" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "Which channel had the highest percentage of qualified candidates?",
        options: ["Job boards", "Employee referrals", "Career fairs", "Recruitment agency"],
        answer: 3, explanation: "“Recruitment agency: 20 candidates, 10 qualified (50%).” Giới thiệu nội bộ là 40%; trang đăng tin và hội chợ đều 10%." },
      { id: "r2", type: "choice", prompt: "What does Tuan recommend?",
        options: ["Use only the agency", "Use only job boards", "Stop referrals", "Combine job boards with referrals and direct contact, and raise the referral bonus"],
        answer: 3, explanation: "“I therefore recommend that we combine job boards for volume with referrals and direct contact… and that we raise the referral bonus.”" },
      { id: "r3", type: "choice", prompt: "Which statement is TRUE?",
        options: ["Career fairs work well for junior roles.", "Referrals give the highest number of candidates.", "The agency is the cheapest channel.", "Job boards give high quality."],
        answer: 0, explanation: "“Career fairs … work well for junior roles.” Trang đăng tin cho số lượng nhưng chất lượng thấp, và công ty thuê ngoài đắt nhất." }
    ]
  },

  grammar: {
    title: "While, whereas and on the other hand",
    titleVi: "while / whereas / on the other hand: so sánh tương phản",
    intro: "Khi so sánh các kênh tuyển dụng, bạn thường nói điều tốt của kênh này nhưng điều chưa tốt của kênh khác. Bốn mẫu dưới đây có trong cuộc họp và email bạn vừa học.",
    patterns: [
      { form: "A + while / whereas + B   (hoặc While / Whereas + B, A)", use: "Nối hai mệnh đề trái ngược trong cùng một câu. Có dấu phẩy ở giữa; whereas trang trọng hơn while.",
        examples: ["Job boards are cheap, while the agency is expensive.", "Whereas job boards give us quantity, referrals give us quality."] },
      { form: "A. On the other hand, B.", use: "Bắt đầu một câu mới để nêu mặt đối lập. Thường theo sau là dấu phẩy. Có thể mở đầu bằng On the one hand, …",
        examples: ["The agency is fast. On the other hand, it is expensive.", "On the one hand, referrals are cheap. On the other hand, there are few of them."] },
      { form: "although / even though + mệnh đề, mệnh đề", use: "Although nhấn nhượng bộ (dù … nhưng …). While có thể có nghĩa tương phản hoặc “trong khi” (thời gian); whereas chỉ dùng để tương phản.",
        examples: ["Although referrals take longer, they are more effective.", "While it costs money, it is cheaper than an agency."] },
      { form: "in contrast  /  by contrast  /  however", use: "Các từ nối khác cho câu mới có nghĩa tương phản.",
        examples: ["Job boards bring many applications. In contrast, referrals bring few.", "The agency is fast. However, it is expensive."] }
    ],
    mistakes: [
      { wrong: "While job boards are cheap. Referrals are better.", right: "While job boards are cheap, referrals are better.", note: "While nối hai mệnh đề trong một câu, dùng dấu phẩy chứ không dùng dấu chấm." },
      { wrong: "Job boards are cheap, on the other hand, the agency is expensive.", right: "Job boards are cheap. On the other hand, the agency is expensive.", note: "On the other hand bắt đầu một câu mới (hoặc sau dấu chấm phẩy), không nối bằng dấu phẩy." },
      { wrong: "Whereas the agency is fast, but it is expensive.", right: "The agency is fast, but it is expensive. (hoặc: Whereas the agency is fast, it is expensive.)", note: "Không dùng whereas và but cùng lúc trong một câu." },
      { wrong: "On the other side, the agency is expensive.", right: "On the other hand, the agency is expensive.", note: "Cụm cố định là on the other hand." }
    ],
    tip: "Khi so sánh hai phương án, hãy chọn một cấu trúc cho mỗi ý và đừng lạm dụng. Dùng while / whereas trong một câu để so sánh nhanh hai điều, dùng On the other hand ở đầu câu khi mặt đối lập cần được nhấn mạnh. Cuối cùng luôn đưa ra khuyến nghị cụ thể sau khi so sánh."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "Job boards are cheap, ___ the recruitment agency is expensive.",
      options: ["so", "because", "while", "unless"],
      answer: 2, explanation: "Hai ý trái ngược (rẻ / đắt) → while hoặc whereas. So và because không diễn đạt sự tương phản." },
    { id: "p2", type: "gap", prompt: "___ job boards give quantity, referrals give quality.",
      options: ["Whereas", "Because", "Unless", "So"],
      answer: 0, explanation: "Whereas đứng đầu câu để nối hai vế tương phản." },
    { id: "p3", type: "gap", prompt: "Job boards bring many applications. ___, only ten percent are qualified.",
      options: ["Because", "Whereas", "Unless", "On the other hand"],
      answer: 3, explanation: "Bắt đầu một câu mới có ý đối lập → On the other hand,. Whereas không đứng đầu một câu độc lập như vậy." },
    { id: "p4", type: "choice", prompt: "Which sentence is correct?",
      options: ["While job boards are cheap. Referrals are better.", "Job boards are cheap, on the other hand, agencies are expensive.", "Job boards are cheap, whereas agencies are expensive.", "Job boards are cheap whereas, agencies are expensive."],
      answer: 2, explanation: "Câu C dùng whereas đúng, có dấu phẩy ở giữa. Câu A là câu lỡ dở, câu B nối bằng dấu phẩy sai, câu D đặt dấu phẩy sai chỗ." },
    { id: "p5", type: "gap", prompt: "Referrals are effective, ___ they take longer to collect.",
      options: ["although", "because", "so", "unless"],
      answer: 0, explanation: "Although = dù, diễn tả sự nhượng bộ: hiệu quả dù mất thời gian hơn." },
    { id: "p6", type: "gap", prompt: "Someone who is not looking for a job but could be interested is a ___ candidate.",
      options: ["active", "passive", "justified", "mandatory"],
      answer: 1, explanation: "Passive candidate = ứng viên thụ động, không chủ động tìm việc." },
    { id: "p7", type: "gap", prompt: "A current employee recommends a friend for a job. This is a ___.",
      options: ["budget", "venue", "referral", "complaint"],
      answer: 2, explanation: "Referral = sự giới thiệu ứng viên bởi nhân viên hiện tại." },
    { id: "p8", type: "gap", prompt: "Each way of finding candidates, such as job boards or referrals, is a sourcing ___.",
      options: ["outcome", "roster", "pace", "channel"],
      answer: 3, explanation: "Channel = kênh. Outcome là kết quả, roster là bảng phân ca." },
    { id: "p9", type: "choice", prompt: "What does “cost-effective” mean?",
      options: ["Cheap but of poor quality", "Good results for a reasonable cost", "Very expensive but fast", "Free of charge"],
      answer: 1, explanation: "Cost-effective = hiệu quả so với chi phí bỏ ra (kết quả tốt với chi phí hợp lý)." },
    { id: "p10", type: "choice", context: "Tuan says: “The agency is fast. On the other hand, it is expensive.”", prompt: "What does “On the other hand” introduce here?",
      options: ["A contrast", "A reason", "An example", "A time"],
      answer: 0, explanation: "On the other hand dẫn một ý đối lập với ý trước (nhanh nhưng đắt)." }
  ],

  writing: {
    title: "Compare two sourcing channels",
    task: "Bạn là Tuấn. Viết email gửi chị Lan (120–180 từ) so sánh hai kênh: trang đăng tin tuyển dụng (120 hồ sơ, 10% đạt, rẻ) và giới thiệu nội bộ (15 ứng viên, 40% đạt, phải trả thưởng). Dùng while hoặc whereas, On the other hand và số liệu phần trăm, rồi đề xuất kết hợp hai kênh và tăng thưởng giới thiệu.",
    requirements: [
      "Mở đầu bằng lời chào phù hợp.",
      "Có ít nhất một câu dùng while hoặc whereas.",
      "Có câu bắt đầu bằng On the other hand.",
      "Dùng số liệu phần trăm để so sánh.",
      "Có đề xuất cụ thể (I recommend / I suggest).",
      "Kết thúc email và ký tên."
    ],
    minWords: 120,
    maxWords: 180,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Dear … / Hi …)", pattern: "\\bdear\\b|\\bhi\\b" },
      { label: "Có while hoặc whereas", pattern: "\\b(while|whereas)\\b" },
      { label: "Có On the other hand", pattern: "on the other hand" },
      { label: "Có số liệu phần trăm (percent / %)", pattern: "\\b(percent|per cent)\\b|%" },
      { label: "Có đề xuất (recommend / suggest / propose)", pattern: "\\b(recommend|suggest|propose)\\b" },
      { label: "Có lời kết (Best regards …)", pattern: "regards|sincerely|best wishes" }
    ],
    model: [
      "Dear Lan,",
      "Here is my comparison of the two main channels for the Sales Executive positions.",
      "Job boards brought one hundred twenty applications, whereas referrals brought only fifteen. However, only ten percent of the job board applicants were qualified, while forty percent of the referrals met our requirements. In other words, job boards give us quantity, but referrals give us quality. Referrals also help new employees settle in faster because they already know someone in the team.",
      "On the other hand, referrals take longer to collect, and we must pay a bonus to the employee who recommends the candidate. While this costs money, it is still cheaper than using a recruitment agency.",
      "Therefore, I recommend that we combine both channels and raise the referral bonus.",
      "Best regards,",
      "Tuan Nguyen"
    ]
  },

  review: {
    keyPhrases: [
      { en: "Job boards give us quantity, whereas referrals give us quality.", vi: "Trang đăng tin cho chúng ta số lượng, trong khi giới thiệu nội bộ cho chúng ta chất lượng." },
      { en: "Job boards are cheap, while the agency charges one month's salary.", vi: "Trang đăng tin rẻ, trong khi công ty thuê ngoài thu phí bằng một tháng lương." },
      { en: "The agency is fast. On the other hand, it is expensive.", vi: "Công ty thuê ngoài nhanh. Mặt khác, nó đắt." },
      { en: "Experienced salespeople are often passive candidates.", vi: "Nhân viên kinh doanh giàu kinh nghiệm thường là ứng viên thụ động." },
      { en: "Referrals are the most cost-effective channel.", vi: "Giới thiệu nội bộ là kênh hiệu quả nhất so với chi phí." },
      { en: "I recommend that we combine both channels.", vi: "Tôi đề xuất chúng ta kết hợp cả hai kênh." }
    ]
  }
});
