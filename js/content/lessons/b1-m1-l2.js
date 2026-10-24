/* =========================================================
   B1 · Module 1 (Recruitment and Interviewing) · Bài 2
   "Screening candidates"
   Nối tiếp B1-M1-L1: tin tuyển Sales Executive đăng thứ Hai 18/1/2027,
   hạn nộp hồ sơ thứ Sáu 29/1. Thứ Hai 1/2, Tuấn đã sàng lọc 42 hồ sơ
   và báo chị Lan; thứ Tư 3/2 Tuấn gửi David danh sách rút gọn 5 người.
   ========================================================= */
window.EOH.registerLesson({
  id: "b1-m1-l2",
  reviewStatus: "approved", // Linh duyệt ngày 23/10/2026
  duration: "40–50 phút",
  scenario: "Tin tuyển dụng vị trí Sales Executive đã đăng từ thứ Hai 18/1/2027 và hết hạn nhận hồ sơ vào thứ Sáu 29/1. Sáng thứ Hai 1/2, Tuấn (Tuan Nguyen) báo chị Lan (Lan Pham) kết quả sàng lọc 42 hồ sơ. Đến thứ Tư 3/2, Tuấn gửi David Brown danh sách rút gọn gồm năm người, kèm điểm mạnh và điểm yếu của từng người.",

  objectives: [
    "Hiểu và dùng 10 từ vựng thường gặp khi sàng lọc hồ sơ ứng viên.",
    "Nghe cuộc trao đổi về kết quả sàng lọc, ghi lại số hồ sơ và điểm mạnh của từng ứng viên.",
    "Đọc email gửi danh sách rút gọn, tìm đúng người nhiều kinh nghiệm nhất và hạn trả lời.",
    "So sánh ứng viên bằng so sánh nhất (the most experienced, the best) và as … as / not as … as.",
    "Viết email ngắn so sánh ba ứng viên và đề xuất người phù hợp nhất."
  ],

  vocabulary: [
    { word: "screen", ipa: "/skriːn/", pos: "verb", meaning: "sàng lọc (hồ sơ, ứng viên)",
      example: "Tuan screens all the applications first.", exampleVi: "Tuấn sàng lọc tất cả hồ sơ trước tiên." },
    { word: "rank", ipa: "/ræŋk/", pos: "verb", meaning: "xếp hạng, xếp thứ tự",
      example: "Tuan ranks the five candidates from strongest to weakest.", exampleVi: "Tuấn xếp hạng năm ứng viên từ mạnh nhất đến yếu nhất." },
    { word: "overqualified", ipa: "/ˌoʊvərˈkwɑːlɪfaɪd/", pos: "adjective", meaning: "quá trình độ so với vị trí",
      example: "A manager with ten years of experience may be overqualified for this job.", exampleVi: "Một quản lý có mười năm kinh nghiệm có thể quá trình độ cho công việc này." },
    { word: "closing date", ipa: "/ˈkloʊzɪŋ deɪt/", pos: "noun", meaning: "hạn chót nộp hồ sơ",
      example: "The closing date for applications was Friday.", exampleVi: "Hạn chót nộp hồ sơ là thứ Sáu." },
    { word: "qualified", ipa: "/ˈkwɑːlɪfaɪd/", pos: "adjective", meaning: "đủ trình độ, đủ điều kiện",
      example: "How many applicants are qualified for the job?", exampleVi: "Có bao nhiêu người nộp đơn đủ điều kiện cho công việc?" },
    { word: "background", ipa: "/ˈbækɡraʊnd/", pos: "noun", meaning: "nền tảng học vấn và kinh nghiệm",
      example: "He has a strong background in sales.", exampleVi: "Anh ấy có nền tảng vững về bán hàng." },
    { word: "suitable", ipa: "/ˈsuːtəbəl/", pos: "adjective", meaning: "phù hợp, thích hợp (cho vị trí)",
      example: "All five candidates are suitable for an interview.", exampleVi: "Cả năm ứng viên đều phù hợp để mời phỏng vấn." },
    { word: "strength", ipa: "/streŋkθ/", pos: "noun", meaning: "điểm mạnh",
      example: "His main strength is his knowledge of the market.", exampleVi: "Điểm mạnh chính của anh ấy là hiểu biết về thị trường." },
    { word: "weakness", ipa: "/ˈwiːknəs/", pos: "noun", meaning: "điểm yếu",
      example: "Her only weakness is that she has no driving license.", exampleVi: "Điểm yếu duy nhất của cô ấy là không có bằng lái xe." },
    { word: "meet the requirements", ipa: "/miːt ðə rɪˈkwaɪərmənts/", pos: "phrase", meaning: "đáp ứng các yêu cầu",
      example: "Only thirteen applicants meet the requirements.", exampleVi: "Chỉ có mười ba người nộp đơn đáp ứng yêu cầu." }
  ],

  pronunciation: {
    groups: [
      {
        title: "Trọng âm của từ",
        text: "Những từ dưới đây hay gặp khi nói về ứng viên. Âm tiết in hoa là âm đọc to và dài hơn.",
        items: [
          { word: "applicant", marked: "AP·pli·cant", note: "Nhấn âm tiết đầu." },
          { word: "experienced", marked: "ex·PE·ri·enced" },
          { word: "qualified", marked: "QUAL·i·fied" },
          { word: "relevant", marked: "REL·e·vant" },
          { word: "suitable", marked: "SUIT·a·ble" },
          { word: "weakness", marked: "WEAK·ness", note: "Từ tận cùng bằng -ness: nhấn âm tiết đầu." }
        ]
      },
      {
        title: "Dạng yếu của as … as",
        text: "Trong câu so sánh bằng, hai chữ “as” thường đọc nhẹ và ngắn: as → /əz/. Từ ở giữa (good, strong…) được nhấn.",
        items: [
          { word: "as good as", marked: "/əz/ GOOD /əz/", note: "Đọc nhẹ hai chữ as, nhấn chữ good." },
          { word: "not as strong as", marked: "not /əz/ STRONG /əz/" }
        ]
      }
    ],
    sentences: [
      "Thao has the best English of the five.",
      "Quang's English is not as strong as Thao's.",
      "Huy is the least experienced of the five."
    ]
  },

  listening: {
    title: "Forty-two applications",
    setting: "Thứ Hai 1/2/2027, buổi sáng, phòng Nhân sự. Tuấn báo chị Lan kết quả sàng lọc hồ sơ cho vị trí Sales Executive.",
    speakers: { lan: "Lan (Senior HR Officer)", tuan: "Tuan (HR Assistant)" },
    lines: [
      { s: "lan", text: "Good morning, Tuan. The closing date was Friday. How many applications did we receive?",
        vi: "Chào buổi sáng, Tuấn. Hạn nộp hồ sơ là thứ Sáu. Chúng ta nhận được bao nhiêu hồ sơ?" },
      { s: "tuan", text: "Forty-two, and I have screened all of them. It's the highest number of applications we've ever had for a sales job.",
        vi: "Bốn mươi hai ạ, và em đã sàng lọc hết rồi. Đây là số hồ sơ cao nhất từ trước đến nay của chúng ta cho một vị trí kinh doanh." },
      { s: "lan", text: "Forty-two! How many applicants are qualified for the job?",
        vi: "Bốn mươi hai! Có bao nhiêu người đủ điều kiện cho công việc?" },
      { s: "tuan", text: "Only thirteen meet the requirements. The others don't have two years of relevant sales experience, or their English is not good enough.",
        vi: "Chỉ có mười ba người đáp ứng yêu cầu ạ. Những người còn lại không có hai năm kinh nghiệm bán hàng liên quan, hoặc tiếng Anh chưa đủ tốt." },
      { s: "lan", text: "I see. And your shortlist?",
        vi: "Chị hiểu rồi. Còn danh sách rút gọn của em?" },
      { s: "tuan", text: "I have chosen five. I think Thao Ngo is the strongest. She has the most experience, five years in sales, and the best English of the five. But she doesn't have a driving license.",
        vi: "Em chọn năm người ạ. Em nghĩ Thảo Ngô là người mạnh nhất. Chị ấy có nhiều kinh nghiệm nhất, năm năm làm kinh doanh, và tiếng Anh tốt nhất trong năm người. Nhưng chị ấy không có bằng lái xe." },
      { s: "lan", text: "That's fine. A driving license is only desirable. What about the others?",
        vi: "Không sao. Bằng lái xe chỉ là điểm cộng thôi. Còn những người khác thì sao?" },
      { s: "tuan", text: "Quang Vu has three years of experience and knows the Hai Phong market very well. His English is not as strong as Thao's, though.",
        vi: "Quang Vũ có ba năm kinh nghiệm và rất hiểu thị trường Hải Phòng. Có điều tiếng Anh của anh ấy không mạnh bằng chị Thảo." },
      { s: "tuan", text: "And Huy Do is the least experienced of the five. He has exactly two years. But he has a driving license, and his CV is the clearest.",
        vi: "Còn Huy Đỗ là người ít kinh nghiệm nhất trong năm người. Anh ấy có đúng hai năm. Nhưng anh ấy có bằng lái xe, và CV của anh ấy rõ ràng nhất." },
      { s: "lan", text: "Good. Please send the shortlist to David by Wednesday. Write one line about each person's strengths and weaknesses.",
        vi: "Tốt. Em gửi danh sách rút gọn cho anh David trước thứ Tư nhé. Viết một dòng về điểm mạnh và điểm yếu của từng người." },
      { s: "tuan", text: "Should I put Thao first?",
        vi: "Em đặt chị Thảo lên đầu danh sách nhé ạ?" },
      { s: "lan", text: "Yes. Keep it short and fair. We'll plan the interviews after the Tet holiday.",
        vi: "Ừ. Viết ngắn gọn và công bằng nhé. Chúng ta sẽ lên lịch phỏng vấn sau kỳ nghỉ Tết." },
      { s: "tuan", text: "Understood. I'll send it on Wednesday morning.",
        vi: "Em hiểu rồi ạ. Em sẽ gửi vào sáng thứ Tư." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "How many applications did the company receive?",
        options: ["13", "5", "42", "30"],
        answer: 2, explanation: "Tuấn nói “Forty-two” – tức 42 hồ sơ. Con số 13 là số người đáp ứng yêu cầu, còn 5 là số người trong danh sách rút gọn." },
      { id: "l2", type: "choice", prompt: "Who has the best English of the five?",
        options: ["Thao Ngo", "Quang Vu", "Huy Do", "All five are the same"],
        answer: 0, explanation: "Tuấn nói về Thảo: “the best English of the five”. Tiếng Anh của Quang “is not as strong as Thao's”, còn Huy được khen vì CV rõ ràng, không phải vì tiếng Anh." },
      { id: "l3", type: "choice", prompt: "What does Lan ask Tuan to do?",
        options: ["Interview the five candidates on Wednesday", "Reject the other 37 applicants", "Post the job advertisement again", "Send the shortlist to David by Wednesday"],
        answer: 3, explanation: "Chị Lan nói: “Please send the shortlist to David by Wednesday.” Phỏng vấn sẽ lên lịch sau Tết, và chị không nhắc đến việc từ chối hay đăng lại tin." }
    ]
  },

  reading: {
    title: "The shortlist",
    intro: "Email Tuấn gửi David vào sáng thứ Tư 3/2/2027, kèm danh sách rút gọn năm ứng viên. Đọc và tìm người nhiều kinh nghiệm nhất, người ít kinh nghiệm nhất và hạn trả lời.",
    email: {
      from: "Tuan Nguyen <tuan.nguyen@riverside-trading.example>",
      to: "David Brown",
      date: "Wednesday, 3 February",
      subject: "Sales Executive – shortlist of five candidates",
      greeting: "Dear David,",
      paragraphs: [
        "Thank you for your comments on the job description. The advertisement closed on Friday, 29 January, and we received 42 applications.",
        "I have screened all of them. Thirteen applicants meet the essential requirements, and I have chosen five for the shortlist:"
      ],
      list: [
        "Thao Ngo – five years of sales experience and the best English of the five; no driving license",
        "Quang Vu – three years of experience; he knows the Hai Phong market very well, but his English is not as strong as Thao's",
        "Huy Do – two years of experience and a driving license; the least experienced of the five",
        "Bich Tran – four years of experience; her CV is the most detailed, but she cannot start before April",
        "Dung Pham – three years of experience and good English; he is as experienced as Quang"
      ],
      after: [
        "I think Thao is the strongest candidate, but all five are suitable for an interview. We will plan the interviews after the Tet holiday.",
        "Could you tell me which candidates you would like to meet? I would be grateful for your reply by Friday, 5 February."
      ],
      closing: "Best regards,",
      signature: ["Tuan Nguyen", "HR Assistant, Riverside Trading"]
    },
    glossary: [
      { term: "close (the advertisement closed)", vi: "hết hạn nhận hồ sơ" },
      { term: "all of them", vi: "tất cả (các hồ sơ đó)" },
      { term: "detailed", vi: "chi tiết, đầy đủ" },
      { term: "cannot start before April", vi: "không thể bắt đầu đi làm trước tháng Tư" },
      { term: "I would be grateful for", vi: "tôi rất mong nhận được (cách nói lịch sự)" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "Why is Tuan writing to David?",
        options: ["To send the shortlist and ask which candidates David wants to meet", "To invite five candidates to an interview", "To offer the job to Thao Ngo", "To ask David to change the job description"],
        answer: 0, explanation: "Tuấn gửi danh sách rút gọn và hỏi “which candidates you would like to meet”. Phỏng vấn chưa được xếp lịch (sẽ làm sau Tết) và chưa có thư mời nhận việc." },
      { id: "r2", type: "choice", prompt: "Which candidate is the least experienced?",
        options: ["Thao Ngo", "Bich Tran", "Huy Do", "Dung Pham"],
        answer: 2, explanation: "“Huy Do – two years of experience … the least experienced of the five.” Thảo có năm năm, Bích bốn năm, Dũng ba năm." },
      { id: "r3", type: "choice", prompt: "Which statement is TRUE?",
        options: ["Thao has a driving license.", "Forty-two applicants meet the requirements.", "The interviews take place this week.", "Quang's English is not as strong as Thao's."],
        answer: 3, explanation: "“…his English is not as strong as Thao's.” Thảo không có bằng lái xe, chỉ 13 người (không phải 42) đáp ứng yêu cầu, và phỏng vấn sẽ làm sau Tết." }
    ]
  },

  grammar: {
    title: "Comparing candidates",
    titleVi: "So sánh ứng viên: so sánh nhất và as … as",
    intro: "Khi sàng lọc hồ sơ, bạn phải nói ai nhiều kinh nghiệm nhất, ai tiếng Anh tốt nhất, và ai ngang nhau. Bốn mẫu câu dưới đây có trong cuộc trao đổi và email bạn vừa học.",
    patterns: [
      { form: "the + tính từ ngắn + -est  (the strongest, the clearest)", use: "So sánh nhất với tính từ ngắn: dùng the và thêm -est. Thường nói rõ nhóm so sánh bằng of the five / in the team.",
        examples: ["Thao is the strongest candidate.", "Huy's CV is the clearest of the five."] },
      { form: "the most / the least + tính từ dài   ·   the best / the worst", use: "Tính từ dài dùng the most (nhất) hoặc the least (ít nhất). Hai từ đặc biệt: good → the best, bad → the worst.",
        examples: ["She is the most experienced of the five.", "He is the least experienced, but he has the best attitude."] },
      { form: "as + tính từ + as   ·   not as + tính từ + as", use: "as … as: ngang nhau. not as … as: kém hơn. Giữa hai chữ as là tính từ ở dạng gốc, không thêm -er hay more.",
        examples: ["Dung is as experienced as Quang.", "Quang's English is not as strong as Thao's."] },
      { form: "one of the + so sánh nhất + danh từ số nhiều", use: "Nói một trong những người hoặc vật nổi bật nhất. Danh từ sau đó luôn ở dạng số nhiều.",
        examples: ["This is one of the strongest applications we have ever received.", "Thao is one of the most experienced applicants."] }
    ],
    mistakes: [
      { wrong: "Thao has the most good English.", right: "Thao has the best English.", note: "good là tính từ đặc biệt: good → better → the best. Không nói “the most good”." },
      { wrong: "Dung is as experienced than Quang.", right: "Dung is as experienced as Quang.", note: "Câu so sánh ngang bằng dùng as … as. “than” chỉ dùng cho so sánh hơn." },
      { wrong: "Huy is the least experienced in the five.", right: "Huy is the least experienced of the five.", note: "Nhóm người hoặc vật đếm được (the five, all the candidates) đi với of. Dùng in với nơi chốn hoặc tập thể: in the team, in the company." },
      { wrong: "Thao is one of the most experienced applicant.", right: "Thao is one of the most experienced applicants.", note: "Sau one of the + so sánh nhất, danh từ phải ở số nhiều." }
    ],
    tip: "Khi viết nhận xét về ứng viên, hãy so sánh bằng sự việc có thể kiểm chứng (số năm kinh nghiệm, bằng cấp, khả năng tiếng Anh), không dùng ý kiến cá nhân về tuổi, giới tính hay ngoại hình. Cách viết này giúp việc sàng lọc công bằng và dễ giải thích với người quản lý tuyển dụng."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "Thao has five years of experience. She is the ___ experienced of the five.",
      options: ["more", "most", "much", "mostly"],
      answer: 1, explanation: "So sánh nhất với tính từ dài: the most experienced. “more” dùng khi so sánh hơn giữa hai người (more experienced than)." },
    { id: "p2", type: "gap", prompt: "Quang's English is ___ strong as Thao's.",
      options: ["not as", "not more", "not much", "not same"],
      answer: 0, explanation: "Mẫu so sánh kém: not as + tính từ + as → not as strong as. Các lựa chọn còn lại không tạo thành câu so sánh đúng." },
    { id: "p3", type: "gap", prompt: "This is ___ CV I have read this week. It is clear and short.",
      options: ["better", "the most good", "best", "the best"],
      answer: 3, explanation: "So sánh nhất của good là the best. “best” thiếu the, “the most good” sai dạng, còn “better” là so sánh hơn." },
    { id: "p4", type: "gap", prompt: "Huy has the ___ experience of the five candidates.",
      options: ["fewest", "less", "least", "littlest"],
      answer: 2, explanation: "experience là danh từ không đếm được nên dùng the least experience. “fewest” chỉ đi với danh từ đếm được (the fewest years)." },
    { id: "p5", type: "choice", prompt: "Which sentence is correct?",
      options: ["Dung is as experienced than Quang.", "Dung is as experienced as Quang.", "Dung is more experienced as Quang.", "Dung is so experienced as Quang."],
      answer: 1, explanation: "Nói ngang nhau: as + tính từ + as. Câu A dùng “than”, câu C trộn more với as, câu D dùng “so … as” (chỉ dùng trong câu phủ định: not so … as)." },
    { id: "p6", type: "gap", prompt: "We received 42 applications, but only thirteen ___ meet the essential requirements.",
      options: ["clients", "duties", "applicants", "targets"],
      answer: 2, explanation: "Applicants = những người nộp đơn xin việc. Clients là khách hàng, duties là nhiệm vụ, targets là chỉ tiêu." },
    { id: "p7", type: "gap", prompt: "Tuan has ___ all the CVs to see who meets the requirements.",
      options: ["maintained", "screened", "reported", "described"],
      answer: 1, explanation: "Screen = sàng lọc hồ sơ để xem ai đáp ứng yêu cầu. Các động từ còn lại không có nghĩa này." },
    { id: "p8", type: "choice", context: "Lan asks: “Is Huy as experienced as Thao?”", prompt: "What is the best answer?",
      options: ["Yes, he has the most experience.", "No, he has more experience than Thao.", "Yes, he has five years like her.", "No, he is not as experienced as Thao."],
      answer: 3, explanation: "Huy có hai năm, Thảo có năm năm, nên Huy kém kinh nghiệm hơn: “not as experienced as Thao”. Câu A và C sai sự thật; câu B nói ngược." },
    { id: "p9", type: "gap", prompt: "This is one of the ___ applications we have ever received.",
      options: ["strong", "stronger", "strongest", "most strong"],
      answer: 2, explanation: "one of the + so sánh nhất + danh từ số nhiều: one of the strongest applications. Tính từ ngắn strong thêm -est, không dùng “most strong”." },
    { id: "p10", type: "choice", prompt: "In a normal sentence, how is the first “as” pronounced in “as good as”?",
      options: ["Weakly: /əz/", "Strongly: /eɪz/", "Like “ass”: /æs/", "Like “is”: /ɪz/"],
      answer: 0, explanation: "Trong câu so sánh ngang bằng, hai chữ as đọc yếu /əz/ và từ ở giữa (good) được nhấn." }
  ],

  writing: {
    title: "Compare three candidates",
    task: "Chị Lan nhờ Tuấn so sánh ba ứng viên trong danh sách rút gọn. Bạn là Tuấn. Viết email gửi chị Lan (80–120 từ). Thông tin: Hung – 4 năm kinh nghiệm bán hàng, tiếng Anh tốt, không có bằng lái xe. Trang – 3 năm kinh nghiệm, tiếng Anh tốt, có bằng lái xe. Van – 2 năm kinh nghiệm, tiếng Anh rất tốt, có bằng lái xe.",
    requirements: [
      "Mở đầu bằng lời chào phù hợp.",
      "Có ít nhất một câu so sánh nhất (the most experienced, the best English…).",
      "Có ít nhất một câu dùng as … as.",
      "Có ít nhất một câu dùng not as … as.",
      "Nêu ý kiến của bạn: ai là người phù hợp nhất (I think…).",
      "Kết thúc email và ký tên."
    ],
    minWords: 80,
    maxWords: 120,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Dear … / Hi …)", pattern: "\\bdear\\b|\\bhi\\b" },
      { label: "Có so sánh nhất (the most …, the best …, the …est)", pattern: "\\bthe (most|least|best|worst) \\w+|\\bthe \\w+est\\b" },
      { label: "Có as … as", pattern: "\\bas \\w+ as\\b" },
      { label: "Có not as … as", pattern: "\\bnot as \\w+ as\\b" },
      { label: "Có ý kiến của bạn (I think / I recommend…)", pattern: "\\b(i think|i recommend|i suggest|in my opinion)\\b" },
      { label: "Có lời kết (Best regards …)", pattern: "regards|sincerely|best wishes" }
    ],
    model: [
      "Dear Lan,",
      "Here is a short comparison of the three candidates for the Sales Executive position.",
      "Hung is the most experienced of the three because he has four years in sales, but he does not have a driving license. Trang has three years of experience, so she is not as experienced as Hung. However, her English is as good as his, and she has a driving license. Van is the least experienced, but he has the best English of the three.",
      "I think Trang is the most suitable candidate for the job. Could you please check my comparison?",
      "Best regards,",
      "Tuan Nguyen"
    ]
  },

  review: {
    keyPhrases: [
      { en: "Thao has the best English of the five.", vi: "Thảo có tiếng Anh tốt nhất trong năm người." },
      { en: "Quang's English is not as strong as Thao's.", vi: "Tiếng Anh của Quang không mạnh bằng của Thảo." },
      { en: "Huy is the least experienced of the five.", vi: "Huy là người ít kinh nghiệm nhất trong năm người." },
      { en: "Only thirteen applicants meet the requirements.", vi: "Chỉ có mười ba người nộp đơn đáp ứng yêu cầu." },
      { en: "I have made a shortlist of five.", vi: "Tôi đã lập danh sách rút gọn năm người." },
      { en: "Could you tell me which candidates you would like to meet?", vi: "Anh có thể cho tôi biết anh muốn gặp những ứng viên nào không?" }
    ]
  }
});

