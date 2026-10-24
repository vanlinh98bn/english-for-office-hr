/* =========================================================
   B1 · Module 1 (Recruitment and Interviewing) · Bài 4
   "Evaluating candidates"
   Nối tiếp B1-M1-L3: sau hai ngày phỏng vấn (25–26/2/2027), chiều
   thứ Sáu 26/2 lúc 14:00 ở Room 301, David, chị Lan và Tuấn họp đánh
   giá bốn ứng viên. Điểm trên thang 25: Thao 22, Dung 20, Quang 18,
   Huy 17. Chọn Thao, dự phòng Dung. Chị Lan gửi David email tóm tắt.
   ========================================================= */
window.EOH.registerLesson({
  id: "b1-m1-l4",
  reviewStatus: "approved", // Linh duyệt ngày 23/10/2026
  duration: "40–50 phút",
  scenario: "Hai ngày phỏng vấn đã xong (25–26/2/2027). Chiều thứ Sáu 26/2, lúc 14:00 ở Room 301, David, chị Lan và Tuấn họp để đánh giá bốn ứng viên bằng bảng điểm. Họ nói về điểm mạnh, điểm lo ngại, rồi chọn người phù hợp nhất. Sau cuộc họp, chị Lan gửi David email tóm tắt.",

  objectives: [
    "Hiểu và dùng 10 từ vựng thường gặp khi đánh giá ứng viên.",
    "Nghe cuộc họp đánh giá, ghi lại điểm số, ý kiến và người được chọn.",
    "Đọc email tóm tắt đánh giá, tìm đúng nhận xét về từng ứng viên.",
    "Đoán và kết luận bằng must / might / could / can't, và nêu ý kiến lịch sự (In my opinion…, I agree…).",
    "Viết email nêu ý kiến cá nhân về hai ứng viên bằng các động từ khuyết thiếu."
  ],

  vocabulary: [
    { word: "evaluate", ipa: "/ɪˈvæljueɪt/", pos: "verb", meaning: "đánh giá",
      example: "We evaluate each candidate with a scoring sheet.", exampleVi: "Chúng tôi đánh giá từng ứng viên bằng một phiếu chấm điểm." },
    { word: "score", ipa: "/skɔːr/", pos: "noun / verb", meaning: "điểm số; đạt điểm",
      example: "Thao scored twenty-two out of twenty-five.", exampleVi: "Thảo đạt hai mươi hai trên hai mươi lăm điểm." },
    { word: "impressive", ipa: "/ɪmˈpresɪv/", pos: "adjective", meaning: "gây ấn tượng mạnh",
      example: "Her sales record is very impressive.", exampleVi: "Thành tích bán hàng của chị ấy rất ấn tượng." },
    { word: "confident", ipa: "/ˈkɑːnfɪdənt/", pos: "adjective", meaning: "tự tin",
      example: "She was calm and confident during the interview.", exampleVi: "Chị ấy bình tĩnh và tự tin trong buổi phỏng vấn." },
    { word: "motivated", ipa: "/ˈmoʊtɪveɪtɪd/", pos: "adjective", meaning: "có động lực, hăng hái làm việc",
      example: "He seems very motivated to learn.", exampleVi: "Anh ấy có vẻ rất hăng hái học hỏi." },
    { word: "reliable", ipa: "/rɪˈlaɪəbəl/", pos: "adjective", meaning: "đáng tin cậy",
      example: "Dung seems honest and reliable.", exampleVi: "Dũng có vẻ trung thực và đáng tin cậy." },
    { word: "convincing", ipa: "/kənˈvɪnsɪŋ/", pos: "adjective", meaning: "thuyết phục",
      example: "Her answers were clear and convincing.", exampleVi: "Câu trả lời của chị ấy rõ ràng và thuyết phục." },
    { word: "potential", ipa: "/pəˈtenʃəl/", pos: "noun", meaning: "tiềm năng",
      example: "Dung has the potential to become a strong salesperson.", exampleVi: "Dũng có tiềm năng trở thành một nhân viên kinh doanh giỏi." },
    { word: "concern", ipa: "/kənˈsɜːrn/", pos: "noun", meaning: "điều lo ngại",
      example: "My main concern is his English.", exampleVi: "Điều tôi lo ngại nhất là tiếng Anh của anh ấy." },
    { word: "decision", ipa: "/dɪˈsɪʒən/", pos: "noun", meaning: "quyết định",
      example: "The hiring manager makes the final decision.", exampleVi: "Quản lý tuyển dụng đưa ra quyết định cuối cùng." }
  ],

  pronunciation: {
    groups: [
      {
        title: "Trọng âm của từ",
        text: "Những từ dưới đây hay gặp khi nhận xét ứng viên. Âm tiết in hoa là âm đọc to và dài hơn.",
        items: [
          { word: "impressive", marked: "im·PRES·sive" },
          { word: "confident", marked: "CON·fi·dent", note: "Nhấn âm tiết đầu." },
          { word: "motivated", marked: "MO·ti·va·ted" },
          { word: "reliable", marked: "re·LI·a·ble" },
          { word: "convincing", marked: "con·VIN·cing" },
          { word: "potential", marked: "po·TEN·tial", note: "Từ tận cùng bằng -tial: nhấn âm tiết ngay trước đó." }
        ]
      },
      {
        title: "can và can't",
        text: "Trong tiếng Anh Mỹ, can đọc yếu /kən/ còn can't đọc rõ /kænt/ với nguyên âm dài. Vì vậy hãy nghe nguyên âm để phân biệt, đừng chờ âm /t/.",
        items: [
          { word: "can", marked: "/kən/", note: "He can be ready. Đọc nhẹ, nhanh." },
          { word: "can't", marked: "/kænt/", note: "He can't be ready. Đọc rõ, nguyên âm dài." }
        ]
      }
    ],
    sentences: [
      "She must be very good at selling.",
      "He might be nervous because the interview was in English.",
      "He can't be ready for thirty clients yet."
    ]
  },

  listening: {
    title: "Who is our first choice?",
    setting: "Thứ Sáu 26/2/2027, 14:00, Room 301. David, chị Lan và Tuấn họp đánh giá bốn ứng viên sau hai ngày phỏng vấn.",
    speakers: { lan: "Lan (Senior HR Officer)", tuan: "Tuan (HR Assistant)", david: "David (Sales Manager)" },
    lines: [
      { s: "lan", text: "Thank you both. Let's evaluate the four candidates. Tuan, what are the scores?",
        vi: "Cảm ơn hai người. Chúng ta hãy đánh giá bốn ứng viên. Tuấn, điểm số thế nào?" },
      { s: "tuan", text: "Out of twenty-five: Thao twenty-two, Dung twenty, Quang eighteen, and Huy seventeen.",
        vi: "Trên hai mươi lăm điểm ạ: Thảo hai mươi hai, Dũng hai mươi, Quang mười tám, và Huy mười bảy." },
      { s: "david", text: "In my opinion, Thao was the most impressive. She must be very good at selling. Her answers were clear and convincing.",
        vi: "Theo ý tôi, Thảo gây ấn tượng nhất. Chị ấy chắc hẳn bán hàng rất giỏi. Câu trả lời của chị ấy rõ ràng và thuyết phục." },
      { s: "lan", text: "I agree. She seems confident and motivated. But she might ask for a higher salary than our range.",
        vi: "Tôi đồng ý. Chị ấy có vẻ tự tin và hăng hái. Nhưng chị ấy có thể sẽ đòi lương cao hơn khung lương của chúng ta." },
      { s: "tuan", text: "She said her expectation is a little above the range. She could accept a smaller increase if the benefits are good.",
        vi: "Chị ấy nói mức mong muốn cao hơn khung một chút. Chị ấy có thể chấp nhận mức tăng nhỏ hơn nếu phúc lợi tốt." },
      { s: "david", text: "What about Quang? I'm not sure about him. He looked nervous.",
        vi: "Còn Quang thì sao? Tôi chưa chắc về anh ấy. Anh ấy trông có vẻ căng thẳng." },
      { s: "lan", text: "He might be nervous because the interview was in English. But he knows the Hai Phong market very well.",
        vi: "Anh ấy có thể căng thẳng vì buổi phỏng vấn bằng tiếng Anh. Nhưng anh ấy rất hiểu thị trường Hải Phòng." },
      { s: "david", text: "That's true. But many clients are foreign. His English can't be good enough for long meetings.",
        vi: "Đúng vậy. Nhưng nhiều khách hàng là người nước ngoài. Tiếng Anh của anh ấy chắc chưa đủ tốt cho các cuộc họp dài." },
      { s: "tuan", text: "Huy is very friendly, but he has only two years of experience. He can't be ready for thirty clients yet.",
        vi: "Huy rất thân thiện, nhưng chỉ có hai năm kinh nghiệm. Anh ấy chắc chưa sẵn sàng chăm sóc ba mươi khách hàng." },
      { s: "lan", text: "And Dung? I think he is honest and reliable. A little shy, though. He could become a strong salesperson with some training.",
        vi: "Còn Dũng? Tôi nghĩ anh ấy trung thực và đáng tin cậy. Hơi nhút nhát một chút. Anh ấy có thể trở thành nhân viên kinh doanh giỏi nếu được đào tạo thêm." },
      { s: "david", text: "So Thao is our first choice and Dung is the reserve. Do you both agree?",
        vi: "Vậy Thảo là lựa chọn đầu tiên và Dũng là người dự phòng. Hai người có đồng ý không?" },
      { s: "lan", text: "Yes, I agree. I'll check the salary range and prepare the offer on Monday.",
        vi: "Vâng, tôi đồng ý. Tôi sẽ kiểm tra khung lương và chuẩn bị thư mời nhận việc vào thứ Hai." },
      { s: "david", text: "Good. Let's make the decision official on Monday.",
        vi: "Tốt. Chúng ta sẽ chính thức quyết định vào thứ Hai." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "Which candidate has the highest score?",
        options: ["Quang", "Huy", "Dung", "Thao"],
        answer: 3, explanation: "Tuấn đọc điểm: “Thao twenty-two, Dung twenty, Quang eighteen, and Huy seventeen.” Thảo cao nhất (22/25)." },
      { id: "l2", type: "choice", prompt: "Why does Lan think Quang looked nervous?",
        options: ["The interview was in English", "He had no experience", "He was late", "He did not know the market"],
        answer: 0, explanation: "Chị Lan nói: “He might be nervous because the interview was in English.” Chị còn khen anh ấy “knows the Hai Phong market very well”." },
      { id: "l3", type: "choice", prompt: "Who is the reserve candidate?",
        options: ["Huy", "Quang", "Dung", "Thao"],
        answer: 2, explanation: "David nói: “Thao is our first choice and Dung is the reserve.” Reserve là người dự phòng nếu người đầu từ chối." }
    ]
  },

  reading: {
    title: "Interview evaluation summary",
    intro: "Email chị Lan gửi David chiều thứ Sáu 26/2/2027 sau cuộc họp đánh giá. Đọc và tìm nhận xét về từng ứng viên.",
    email: {
      from: "Lan Pham <lan.pham@riverside-trading.example>",
      to: "David Brown",
      date: "Friday, 26 February",
      subject: "Interview evaluation – Sales Executive",
      greeting: "Dear David,",
      paragraphs: [
        "Thank you for joining the evaluation meeting today. Here is a short summary of our discussion. Scores are out of 25."
      ],
      list: [
        "Thao Ngo (22) – the most impressive candidate; confident and well prepared. Her salary expectation might be a little above our range.",
        "Dung Pham (20) – honest and reliable, a little shy. He could become a strong salesperson with some training.",
        "Quang Vu (18) – knows the Hai Phong market very well. His English might be a problem in long meetings with foreign clients.",
        "Huy Do (17) – friendly and has a driving license, but he can't be ready to manage about 30 clients yet."
      ],
      after: [
        "I think Thao is the best choice and Dung is a good reserve. On Monday I will check the salary range and prepare the offer.",
        "Could you confirm the decision by Monday morning?"
      ],
      closing: "Best regards,",
      signature: ["Lan Pham", "Senior HR Officer, Riverside Trading"]
    },
    glossary: [
      { term: "well prepared", vi: "chuẩn bị kỹ" },
      { term: "out of 25", vi: "trên thang 25 điểm" },
      { term: "a little above", vi: "cao hơn một chút" },
      { term: "reserve", vi: "người dự phòng" },
      { term: "confirm the decision", vi: "xác nhận quyết định" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "Why is Lan writing to David?",
        options: ["To send a summary of the evaluation meeting", "To invite Thao to an interview", "To offer the job to Dung", "To ask David to change the scores"],
        answer: 0, explanation: "“Here is a short summary of our discussion.” Chưa có thư mời nhận việc nào được gửi; chị Lan sẽ chuẩn bị thư vào thứ Hai." },
      { id: "r2", type: "choice", prompt: "Whose salary expectation might be above the range?",
        options: ["Dung Pham", "Quang Vu", "Huy Do", "Thao Ngo"],
        answer: 3, explanation: "“Thao Ngo … Her salary expectation might be a little above our range.” Email không nói gì về mức lương mong muốn của ba người còn lại." },
      { id: "r3", type: "choice", prompt: "Which statement is TRUE?",
        options: ["Quang has the second-highest score.", "Huy has a driving license.", "Dung is the most impressive candidate.", "Lan will prepare the offer today."],
        answer: 1, explanation: "“Huy Do … has a driving license.” Dung đứng thứ hai (20), Quang thứ ba (18); người ấn tượng nhất là Thảo; chị Lan sẽ chuẩn bị thư vào thứ Hai." }
    ]
  },

  grammar: {
    title: "Making guesses and giving opinions",
    titleVi: "must / might / could / can't (suy đoán) và nêu ý kiến",
    intro: "Khi đánh giá ứng viên, bạn thường không biết chắc mọi điều. Bạn chỉ có bằng chứng từ buổi phỏng vấn, nên cần các từ chỉ mức độ chắc chắn. Bốn mẫu câu dưới đây có trong cuộc họp và email bạn vừa học.",
    patterns: [
      { form: "must + động từ nguyên mẫu (be…)", use: "Gần như chắc chắn là đúng, vì có bằng chứng rõ. Không dùng must khi bạn không chắc.",
        examples: ["She has the best sales record, so she must be very good at selling.", "He speaks English every day, so he must know the vocabulary."] },
      { form: "might / could (/ may) + động từ nguyên mẫu", use: "Có thể đúng, nhưng chưa chắc. Dùng cho khả năng hoặc dự đoán. Không thêm to và không thêm -s.",
        examples: ["He might be nervous because the interview was in English.", "She could accept a smaller increase."] },
      { form: "can't + động từ nguyên mẫu (be…)", use: "Gần như chắc chắn là KHÔNG đúng. Để kết luận phủ định, dùng can't, không dùng mustn't.",
        examples: ["He has only two years of experience, so he can't be ready yet.", "She can't be late; she is always on time."] },
      { form: "In my opinion, … / I think … / I agree (with you) / I'm not sure about …", use: "Nêu ý kiến, đồng ý hoặc chưa chắc. Lịch sự hơn so với nói thẳng “He is bad”.",
        examples: ["In my opinion, Thao was the most impressive.", "I'm not sure about Quang, but I agree with you about Dung."] }
    ],
    mistakes: [
      { wrong: "She must to be very good at selling.", right: "She must be very good at selling.", note: "Sau must dùng động từ nguyên mẫu, không thêm to." },
      { wrong: "He mustn't be ready for thirty clients.", right: "He can't be ready for thirty clients.", note: "mustn't nghĩa là “không được phép”. Kết luận phủ định phải dùng can't." },
      { wrong: "She might asks for a higher salary.", right: "She might ask for a higher salary.", note: "Sau might dùng động từ nguyên mẫu, không thêm -s." },
      { wrong: "I am agree with you.", right: "I agree with you.", note: "agree là động từ, không dùng với am / is / are." }
    ],
    tip: "Khi đánh giá ứng viên, hãy tách sự việc (đã nghe, đã thấy) khỏi suy đoán (might, could). Ví dụ: “He looked nervous” là sự việc, còn “He might be nervous because of English” là suy đoán. Ghi rõ sự khác nhau giúp cuộc họp công bằng hơn và tránh kết luận vội."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "Thao's sales record is the best in her team. She ___ be very good at her job.",
      options: ["must", "can't", "might not", "mustn't"],
      answer: 0, explanation: "Có bằng chứng rõ (thành tích tốt nhất) nên kết luận chắc chắn: must be. “can't” và “mustn't” mang nghĩa phủ định, ngược với bằng chứng." },
    { id: "p2", type: "gap", prompt: "Huy has only two years of experience. He ___ be ready to manage thirty clients yet.",
      options: ["must", "can't", "might to", "should to"],
      answer: 1, explanation: "Ít kinh nghiệm nên gần như chắc chắn là chưa sẵn sàng: can't be. “must” có nghĩa ngược lại; “might to / should to” sai vì không có to." },
    { id: "p3", type: "gap", prompt: "I'm not sure, but Quang ___ be nervous because the interview was in English.",
      options: ["can't", "must", "might", "mustn't"],
      answer: 2, explanation: "“I'm not sure” → chỉ là khả năng, dùng might. must nghĩa là rất chắc chắn nên không hợp." },
    { id: "p4", type: "choice", prompt: "Which sentence is correct?",
      options: ["She must to be very good.", "She might to ask for more money.", "She could asks for more money.", "She might ask for more money."],
      answer: 3, explanation: "might + động từ nguyên mẫu: might ask. Các câu còn lại thêm to hoặc thêm -s sau động từ khuyết thiếu." },
    { id: "p5", type: "gap", prompt: "A ___ answer makes the panel believe you.",
      options: ["convince", "convincing", "convinced", "convinces"],
      answer: 1, explanation: "Cần một tính từ bổ nghĩa cho answer: convincing = thuyết phục. “convinced” miêu tả người bị thuyết phục, không miêu tả câu trả lời." },
    { id: "p6", type: "gap", prompt: "He is always on time and does what he promises. He is very ___.",
      options: ["potential", "nervous", "reliable", "motivated"],
      answer: 2, explanation: "Luôn đúng giờ và giữ lời hứa = reliable (đáng tin cậy). Các từ còn lại không mô tả điều này." },
    { id: "p7", type: "gap", prompt: "___ my opinion, Thao is the strongest candidate.",
      options: ["In", "On", "At", "For"],
      answer: 0, explanation: "Cụm cố định: in my opinion = theo ý tôi." },
    { id: "p8", type: "choice", context: "David says: “I think Thao is our first choice.”", prompt: "Which reply shows that Lan agrees?",
      options: ["I'm not sure about that.", "I can't agree.", "I disagree with you.", "I agree with you."],
      answer: 3, explanation: "Đồng ý = I agree with you. Ba câu còn lại đều thể hiện không đồng ý hoặc chưa chắc." },
    { id: "p9", type: "gap", prompt: "Each candidate gets a ___ out of twenty-five.",
      options: ["decision", "concern", "score", "potential"],
      answer: 2, explanation: "Điểm đánh giá ứng viên là score. Decision là quyết định, concern là điều lo ngại." },
    { id: "p10", type: "choice", prompt: "How do we usually pronounce “can't” in “He can't be ready”?",
      options: ["Weakly: /kən/", "Clearly: /kænt/", "Like “cat”: /kæt/", "Like “count”: /kaʊnt/"],
      answer: 1, explanation: "can't đọc rõ /kænt/ với nguyên âm dài; can (khẳng định) mới đọc yếu /kən/. Hãy nghe nguyên âm để phân biệt." }
  ],

  writing: {
    title: "Give your opinion about two candidates",
    task: "David hỏi ý kiến cá nhân của Tuấn về hai ứng viên. Bạn là Tuấn. Viết email gửi David (80–120 từ). Thông tin: Dung – 20/25 điểm, tiếng Anh tốt, trung thực, hơi nhút nhát. Quang – 18/25 điểm, rất hiểu thị trường Hải Phòng, tiếng Anh kém hơn, hay căng thẳng khi nói tiếng Anh.",
    requirements: [
      "Mở đầu bằng lời chào phù hợp.",
      "Nêu ý kiến của bạn (In my opinion… / I think…).",
      "Có ít nhất một câu với must be để kết luận gần như chắc chắn.",
      "Có ít nhất một câu với might hoặc could để nói khả năng.",
      "Có ít nhất một câu với can't be để kết luận phủ định.",
      "Kết thúc email và ký tên."
    ],
    minWords: 80,
    maxWords: 120,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Dear … / Hi …)", pattern: "\\bdear\\b|\\bhi\\b" },
      { label: "Có ý kiến (In my opinion / I think)", pattern: "\\b(in my opinion|i think|i believe)\\b" },
      { label: "Có must be", pattern: "\\bmust be\\b" },
      { label: "Có might hoặc could", pattern: "\\b(might|could)\\b" },
      { label: "Có can't be / cannot be", pattern: "\\bcan(’|')?t be\\b|\\bcannot be\\b" },
      { label: "Có lời kết (Best regards …)", pattern: "regards|sincerely|best wishes" }
    ],
    model: [
      "Dear David,",
      "You asked for my opinion about Quang and Dung.",
      "In my opinion, Dung is the better choice. He scored twenty out of twenty-five, and his English is good, so he must be able to talk to our foreign clients easily. He is a little shy, but he could become more confident with some training.",
      "Quang knows the Hai Phong market very well, but I think his English might be a problem in long meetings. He can't be our first choice because his score was lower.",
      "Please let me know what you think.",
      "Best regards,",
      "Tuan Nguyen"
    ]
  },

  review: {
    keyPhrases: [
      { en: "In my opinion, Thao was the most impressive.", vi: "Theo ý tôi, Thảo gây ấn tượng nhất." },
      { en: "She must be very good at selling.", vi: "Chị ấy chắc hẳn bán hàng rất giỏi." },
      { en: "He might be nervous because the interview was in English.", vi: "Anh ấy có thể căng thẳng vì buổi phỏng vấn bằng tiếng Anh." },
      { en: "He can't be ready for thirty clients yet.", vi: "Anh ấy chắc chắn chưa sẵn sàng cho ba mươi khách hàng." },
      { en: "I agree with you.", vi: "Tôi đồng ý với anh/chị." },
      { en: "I'm not sure about that.", vi: "Tôi chưa chắc về điều đó." }
    ]
  }
});
