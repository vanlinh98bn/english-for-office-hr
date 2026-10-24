/* =========================================================
   B1 · Module 4 (Training and Employee Relations) · Bài 1
   "Planning training"
   Nối tiếp B1-M3: nửa cuối năm 2027, chị Lan, Tuấn và David lập kế hoạch
   đào tạo cho quý sau. Nhóm Kinh doanh cần tiếng Anh thương mại (8
   người, mỗi thứ Sáu một buổi 3 giờ, Room 301); phòng Kế toán dùng học
   trực tuyến để học Excel nâng cao. Giảng viên bên ngoài: cô Nga Do (trung
   tâm ngoại ngữ), đến văn phòng gặp trước. Thời gian nói áng chừng.
   ========================================================= */
window.EOH.registerLesson({
  id: "b1-m4-l1",
  reviewStatus: "approved", // Linh duyệt ngày 23/10/2026
  duration: "40–50 phút",
  scenario: "Nửa cuối năm, chị Lan, Tuấn (HR Executive) và David họp để chốt kế hoạch đào tạo cho quý sau. Nhóm Kinh doanh cần tiếng Anh thương mại vì sẽ gặp nhiều khách nước ngoài hơn; phòng Kế toán muốn học Excel nâng cao. Sau cuộc họp, Tuấn gửi email mời nhóm Kinh doanh ghi danh.",

  objectives: [
    "Hiểu và dùng 10 từ vựng thường gặp khi lập kế hoạch đào tạo.",
    "Nghe cuộc họp lập kế hoạch đào tạo, ghi lại nhu cầu, người tham gia, giảng viên và hình thức học.",
    "Đọc email mời ghi danh, tìm đúng thời gian, địa điểm và hạn đăng ký.",
    "Phân biệt và dùng ba cách nói tương lai: be going to (kế hoạch), will (quyết định tại chỗ, lời hứa), hiện tại tiếp diễn (việc đã sắp xếp).",
    "Viết email cho giảng viên, xác nhận kế hoạch và việc bạn sẽ làm."
  ],

  vocabulary: [
    { word: "training need", ipa: "/ˈtreɪnɪŋ niːd/", pos: "noun", meaning: "nhu cầu đào tạo",
      example: "I asked each team about their training needs.", exampleVi: "Tôi đã hỏi từng nhóm về nhu cầu đào tạo của họ." },
    { word: "budget", ipa: "/ˈbʌdʒɪt/", pos: "noun", meaning: "ngân sách",
      example: "I'll check the training budget with Ms. Ngoc.", exampleVi: "Tôi sẽ kiểm tra ngân sách đào tạo với chị Ngọc." },
    { word: "trainer", ipa: "/ˈtreɪnər/", pos: "noun", meaning: "giảng viên, người đào tạo",
      example: "The trainer is coming to our office tomorrow.", exampleVi: "Giảng viên sẽ đến văn phòng chúng ta vào ngày mai." },
    { word: "workshop", ipa: "/ˈwɜːrkʃɑːp/", pos: "noun", meaning: "buổi đào tạo thực hành",
      example: "We are going to run a workshop for the Sales team.", exampleVi: "Chúng tôi sẽ tổ chức một buổi đào tạo thực hành cho nhóm Kinh doanh." },
    { word: "session", ipa: "/ˈseʃən/", pos: "noun", meaning: "một buổi học, buổi họp",
      example: "Each session lasts three hours.", exampleVi: "Mỗi buổi học kéo dài ba giờ." },
    { word: "enroll", ipa: "/ɪnˈroʊl/", pos: "verb", meaning: "ghi danh, đăng ký tham gia",
      example: "Please enroll by this Friday.", exampleVi: "Vui lòng ghi danh trước thứ Sáu này." },
    { word: "participant", ipa: "/pɑːrˈtɪsɪpənt/", pos: "noun", meaning: "người tham gia",
      example: "There are eight participants in the workshop.", exampleVi: "Có tám người tham gia buổi đào tạo." },
    { word: "venue", ipa: "/ˈvenjuː/", pos: "noun", meaning: "địa điểm tổ chức",
      example: "Room 301 is the venue for the workshop.", exampleVi: "Room 301 là địa điểm tổ chức buổi đào tạo." },
    { word: "e-learning", ipa: "/ˈiː ˌlɜːrnɪŋ/", pos: "noun", meaning: "học trực tuyến",
      example: "Accounting is going to use e-learning for Excel.", exampleVi: "Phòng Kế toán sẽ dùng học trực tuyến để học Excel." },
    { word: "outcome", ipa: "/ˈaʊtkʌm/", pos: "noun", meaning: "kết quả (đạt được)",
      example: "What is the expected outcome of the training?", exampleVi: "Kết quả mong đợi của khóa đào tạo là gì?" }
  ],

  pronunciation: {
    groups: [
      {
        title: "Trọng âm của từ",
        text: "Những từ dưới đây hay gặp khi lập kế hoạch đào tạo. Âm tiết in hoa là âm đọc to và dài hơn.",
        items: [
          { word: "budget", marked: "BUD·get" },
          { word: "workshop", marked: "WORK·shop", note: "Danh từ ghép: nhấn từ đầu." },
          { word: "enroll", marked: "en·ROL" },
          { word: "participant", marked: "par·TIC·i·pant" },
          { word: "venue", marked: "VEN·ue", note: "/ˈvenjuː/." },
          { word: "outcome", marked: "OUT·come" }
        ]
      },
      {
        title: "going to đọc liền",
        text: "Trong lời nói, going to thường đọc liền thành /ˈɡʌnə/ (gonna) và rất nhẹ. Từ chính phía sau được nhấn. Trong văn viết vẫn dùng going to.",
        items: [
          { word: "going to run", marked: "/GUN·ə/ RUN", note: "We're going to run a workshop." },
          { word: "I'll", marked: "/aɪl/", note: "I'll check the budget." }
        ]
      }
    ],
    sentences: [
      "We are going to run a workshop for the Sales team.",
      "I'll check the budget with Ms. Ngoc.",
      "I'm meeting the trainer tomorrow afternoon."
    ]
  },

  listening: {
    title: "Planning the training for next quarter",
    setting: "Room 301, buổi sáng. Chị Lan, Tuấn và David họp để chốt kế hoạch đào tạo cho quý sau.",
    speakers: { lan: "Lan (Senior HR Officer)", tuan: "Tuan (HR Executive)", david: "David (Sales Manager)" },
    lines: [
      { s: "lan", text: "Thanks for coming. We need to finalize the training plan for next quarter. Tuan, what have you found?",
        vi: "Cảm ơn mọi người đã đến. Chúng ta cần chốt kế hoạch đào tạo cho quý sau. Tuấn, em tìm hiểu được gì?" },
      { s: "tuan", text: "I asked each team about their training needs. Sales wants business English, and Accounting wants advanced Excel.",
        vi: "Em đã hỏi từng nhóm về nhu cầu đào tạo. Nhóm Kinh doanh muốn tiếng Anh thương mại, còn phòng Kế toán muốn Excel nâng cao." },
      { s: "david", text: "Business English is a priority. My team is going to meet more foreign clients next quarter.",
        vi: "Tiếng Anh thương mại là ưu tiên. Nhóm tôi sẽ gặp nhiều khách nước ngoài hơn trong quý sau." },
      { s: "lan", text: "OK. We're going to run a workshop for Sales. How many participants are there?",
        vi: "Được. Chúng ta sẽ tổ chức một buổi đào tạo cho nhóm Kinh doanh. Có bao nhiêu người tham gia?" },
      { s: "tuan", text: "Eight. I think one session of three hours every Friday is enough. I'll check the budget with Ms. Ngoc.",
        vi: "Tám người ạ. Em nghĩ mỗi thứ Sáu một buổi ba giờ là đủ. Em sẽ kiểm tra ngân sách với chị Ngọc." },
      { s: "lan", text: "Good. Do we already have a trainer?",
        vi: "Tốt. Chúng ta đã có giảng viên chưa?" },
      { s: "tuan", text: "Yes. I'm meeting a trainer from a language center tomorrow afternoon. She's coming to our office at two o'clock.",
        vi: "Có rồi ạ. Ngày mai em gặp một giảng viên của trung tâm ngoại ngữ. Cô ấy sẽ đến văn phòng chúng ta lúc hai giờ chiều." },
      { s: "david", text: "Where will the workshop be? Room two-oh-five is for computers.",
        vi: "Buổi đào tạo sẽ ở đâu? Room hai không năm dành cho máy tính." },
      { s: "tuan", text: "I'll book Room three-oh-one. It's big enough for eight people.",
        vi: "Em sẽ đặt Room ba không một. Phòng đủ rộng cho tám người." },
      { s: "lan", text: "And for Accounting? Excel doesn't need a trainer. We could use e-learning.",
        vi: "Còn phòng Kế toán? Excel không cần giảng viên. Chúng ta có thể dùng học trực tuyến." },
      { s: "tuan", text: "That's a good idea. I'm going to send the enrollment link to Hoa and Minh next week.",
        vi: "Ý hay đó ạ. Tuần sau em sẽ gửi đường dẫn ghi danh cho Hoa và Minh." },
      { s: "lan", text: "Great. Let's meet again after you talk to the trainer.",
        vi: "Tuyệt. Chúng ta sẽ họp lại sau khi em nói chuyện với giảng viên." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "What training does the Sales team want?",
        options: ["Business English", "Advanced Excel", "Leadership", "First aid"],
        answer: 0, explanation: "Tuấn nói: “Sales wants business English, and Accounting wants advanced Excel.”" },
      { id: "l2", type: "choice", prompt: "When is Tuan meeting the trainer?",
        options: ["Next week", "On Friday", "Tomorrow afternoon", "Tomorrow morning"],
        answer: 2, explanation: "“I'm meeting a trainer from a language center tomorrow afternoon.” Tuần sau là lúc Tuấn gửi đường dẫn ghi danh cho Kế toán." },
      { id: "l3", type: "choice", prompt: "How will the Accounting team learn Excel?",
        options: ["With an external trainer", "By e-learning", "In Room 301", "From David"],
        answer: 1, explanation: "Chị Lan gợi ý: “We could use e-learning.” và Tuấn đồng ý sẽ gửi đường dẫn ghi danh." }
    ]
  },

  reading: {
    title: "An enrollment invitation",
    intro: "Email Tuấn gửi nhóm Kinh doanh sau cuộc họp. Đọc và tìm thời gian, địa điểm, số chỗ và hạn ghi danh.",
    email: {
      from: "Tuan Nguyen <tuan.nguyen@riverside-trading.example>",
      to: "Sales Team",
      date: "Wednesday",
      subject: "Business English workshop – enrollment",
      greeting: "Dear all,",
      paragraphs: [
        "Good news: we are going to run a business English workshop for the Sales team next quarter. Here are the details:"
      ],
      list: [
        "Trainer: Ms. Nga Do from a language center",
        "Sessions: three hours every Friday afternoon, starting next month, at 14:00",
        "Venue: Room 301",
        "Places: eight participants"
      ],
      after: [
        "The trainer is visiting our office next week to meet David, so we will adjust the content to your needs. If you want to join, please enroll by this Friday. I will confirm your place by email.",
        "We are also going to ask for your feedback after the first session."
      ],
      closing: "Best regards,",
      signature: ["Tuan Nguyen", "HR Executive, Riverside Trading"]
    },
    glossary: [
      { term: "good news", vi: "tin vui" },
      { term: "details", vi: "thông tin chi tiết" },
      { term: "adjust the content", vi: "điều chỉnh nội dung" },
      { term: "confirm a place", vi: "xác nhận chỗ" },
      { term: "ask for feedback", vi: "xin nhận xét, góp ý" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "Why is Tuan writing to the Sales team?",
        options: ["To invite them to enroll in a business English workshop", "To cancel a training course", "To announce a new trainer's salary", "To ask for their sales figures"],
        answer: 0, explanation: "“We are going to run a business English workshop for the Sales team… please enroll by this Friday.”" },
      { id: "r2", type: "choice", prompt: "How many participants can join the workshop?",
        options: ["Six", "Ten", "Eight", "Twelve"],
        answer: 2, explanation: "“Places: eight participants.”" },
      { id: "r3", type: "choice", prompt: "Which statement is TRUE?",
        options: ["The workshop is on Monday mornings.", "The trainer is visiting the office next week.", "The venue is Room 205.", "Tuan will not ask for feedback."],
        answer: 1, explanation: "“The trainer is visiting our office next week to meet David.” Buổi học vào chiều thứ Sáu ở Room 301, và Tuấn sẽ xin nhận xét sau buổi đầu." }
    ]
  },

  grammar: {
    title: "Three ways to talk about the future",
    titleVi: "going to, will và hiện tại tiếp diễn nói về tương lai",
    intro: "Khi lập kế hoạch, bạn cần chọn đúng cách nói tương lai: kế hoạch đã quyết, quyết định ngay lúc nói, hay việc đã sắp xếp xong. Bốn mẫu dưới đây có trong cuộc họp và email bạn vừa học.",
    patterns: [
      { form: "be going to + động từ", use: "Kế hoạch hoặc ý định đã có từ trước, hoặc dự đoán có bằng chứng rõ.",
        examples: ["We're going to run a workshop for Sales.", "My team is going to meet more foreign clients."] },
      { form: "will + động từ  (will = 'll)", use: "Quyết định ngay lúc nói, lời hứa, lời đề nghị giúp đỡ.",
        examples: ["I'll check the budget with Ms. Ngoc.", "I'll book Room 301. It's big enough."] },
      { form: "am / is / are + V-ing + thời gian", use: "Việc đã được sắp xếp (đã hẹn giờ, địa điểm). Thường có từ chỉ thời gian: tomorrow, next week.",
        examples: ["I'm meeting a trainer tomorrow afternoon.", "She's coming to our office at two o'clock."] },
      { form: "So sánh ba cách", use: "Cùng một việc có thể dùng cả ba, nhưng sắc thái khác: going to = đã tính trước; will = vừa quyết định; hiện tại tiếp diễn = đã hẹn xong.",
        examples: ["I'm going to send the link next week. (đã định)", "I'll send the link now. (vừa quyết định)"] }
    ],
    mistakes: [
      { wrong: "We are going run a workshop.", right: "We are going to run a workshop.", note: "going to cần có to trước động từ." },
      { wrong: "I'll to check the budget.", right: "I'll check the budget.", note: "Sau will dùng động từ nguyên mẫu, không có to." },
      { wrong: "She is come tomorrow.", right: "She is coming tomorrow.", note: "Việc đã sắp xếp dùng am / is / are + V-ing." },
      { wrong: "I will going to book Room 301.", right: "I'm going to book Room 301.", note: "Không ghép will với going to." }
    ],
    tip: "Trong email và cuộc họp lập kế hoạch, dùng đúng thì giúp người nghe biết việc nào đã chắc chắn (is meeting, is visiting) và việc nào còn là ý định (is going to). Dùng will khi bạn nhận một việc mới ngay lúc nói: “I'll send you the list.”"
  },

  practice: [
    { id: "p1", type: "gap", prompt: "We ___ run a workshop for the Sales team next month.",
      options: ["are going to", "will going to", "are going", "go to"],
      answer: 0, explanation: "Kế hoạch đã có: be going to + động từ. Không dùng “will going to”." },
    { id: "p2", type: "gap", prompt: "A: I can't find a free room. B: Don't worry, I ___ book Room 301.",
      options: ["going to", "will", "am going", "booking"],
      answer: 1, explanation: "Quyết định ngay lúc nói, đề nghị giúp → will. “going to” thiếu be, “am going” thiếu to." },
    { id: "p3", type: "gap", prompt: "The trainer ___ our office tomorrow at two o'clock. It's all arranged.",
      options: ["visit", "visited", "visiting", "is visiting"],
      answer: 3, explanation: "Việc đã sắp xếp có giờ giấc → hiện tại tiếp diễn: is visiting." },
    { id: "p4", type: "choice", prompt: "Which sentence is correct?",
      options: ["We going to run a workshop.", "We are going to run a workshop.", "We are going run a workshop.", "We will going to run a workshop."],
      answer: 1, explanation: "Cấu trúc đúng: be + going to + động từ nguyên mẫu. Các câu khác thiếu be, thiếu to hoặc ghép sai." },
    { id: "p5", type: "gap", prompt: "Everyone is very motivated. The workshop ___ be very useful.",
      options: ["goes to", "will going", "is going to", "going to"],
      answer: 2, explanation: "Dự đoán có bằng chứng (mọi người rất hăng hái) → is going to be." },
    { id: "p6", type: "gap", prompt: "A short training event with practical activities is a ___.",
      options: ["workshop", "budget", "venue", "outcome"],
      answer: 0, explanation: "Workshop = buổi đào tạo thực hành. Budget là ngân sách, venue là địa điểm." },
    { id: "p7", type: "gap", prompt: "To join the course, you need to ___ first.",
      options: ["expire", "resign", "reimburse", "enroll"],
      answer: 3, explanation: "enroll = ghi danh tham gia khóa học." },
    { id: "p8", type: "gap", prompt: "The money available for training is called the ___.",
      options: ["venue", "participant", "budget", "outcome"],
      answer: 2, explanation: "Budget = ngân sách. Participant là người tham gia." },
    { id: "p9", type: "gap", prompt: "The place where the training happens is the ___.",
      options: ["trainer", "venue", "outcome", "budget"],
      answer: 1, explanation: "Venue = địa điểm tổ chức. Trainer là người đào tạo." },
    { id: "p10", type: "choice", prompt: "Which sentence shows an arrangement that is already made?",
      options: ["I'm meeting the trainer tomorrow at two.", "I think I'll meet the trainer.", "Maybe I'll meet the trainer.", "I might meet the trainer."],
      answer: 0, explanation: "Việc đã hẹn giờ cụ thể dùng hiện tại tiếp diễn. Ba câu còn lại diễn tả dự đoán hoặc khả năng chưa chắc." }
  ],

  writing: {
    title: "Confirm the plan with the trainer",
    task: "Bạn là Tuấn. Viết email gửi cô Nga Do (80–120 từ): cảm ơn cô đã nhận dạy nhóm Kinh doanh; nói kế hoạch (workshop vào các chiều thứ Sáu từ tháng sau, tám người tham gia); nói ngày mai bạn gặp David để bàn nội dung và cô sẽ đến văn phòng vào thứ Hai lúc hai giờ; hứa gửi danh sách người tham gia và đặt Room 301.",
    requirements: [
      "Mở đầu bằng lời chào phù hợp.",
      "Có ít nhất một câu với be going to.",
      "Có ít nhất một câu với am / is / are + V-ing nói về việc đã sắp xếp.",
      "Có ít nhất một câu với will nói lời hứa.",
      "Nhắc đến workshop hoặc training.",
      "Kết thúc email và ký tên."
    ],
    minWords: 80,
    maxWords: 120,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Dear … / Hi …)", pattern: "\\bdear\\b|\\bhi\\b" },
      { label: "Có be going to", pattern: "\\b(am|is|are|'m|’m|'re|’re|'s|’s) going to\\b" },
      { label: "Có am / is / are + V-ing (việc đã sắp xếp)", pattern: "\\b(am|is|are|'m|’m) (meeting|visiting|coming|seeing|arriving)\\b" },
      { label: "Có will hoặc 'll", pattern: "\\bwill\\b|'ll\\b|’ll\\b" },
      { label: "Nhắc đến workshop / training", pattern: "\\b(workshop|training)\\b" },
      { label: "Có lời kết (Best regards …)", pattern: "regards|sincerely|best wishes" }
    ],
    model: [
      "Dear Ms. Do,",
      "Thank you for agreeing to train our Sales team. We are going to run the workshop every Friday afternoon, starting next month. Eight people are going to attend.",
      "I am meeting David tomorrow morning to discuss the content, and you are visiting our office on Monday at two o'clock. I will send you the list of participants and their training needs before your visit. I will also book Room 301 for the sessions.",
      "Please let me know if you need any equipment.",
      "Best regards,",
      "Tuan Nguyen"
    ]
  },

  review: {
    keyPhrases: [
      { en: "We're going to run a workshop for the Sales team.", vi: "Chúng tôi sẽ tổ chức một buổi đào tạo cho nhóm Kinh doanh." },
      { en: "I'll check the budget with Ms. Ngoc.", vi: "Tôi sẽ kiểm tra ngân sách với chị Ngọc." },
      { en: "I'm meeting a trainer tomorrow afternoon.", vi: "Ngày mai tôi gặp một giảng viên." },
      { en: "Please enroll by this Friday.", vi: "Vui lòng ghi danh trước thứ Sáu này." },
      { en: "Each session lasts three hours.", vi: "Mỗi buổi học kéo dài ba giờ." },
      { en: "We could use e-learning.", vi: "Chúng ta có thể dùng học trực tuyến." }
    ]
  }
});
