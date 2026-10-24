/* =========================================================
   B2 · Module 3 (Compensation, Benefits and HR Analytics) · Bài 5
   "Presenting HR data"
   Nối tiếp B2-M3-L1–L4. Chị Lan trình bày báo cáo nhân sự năm ở cuộc
   họp ban quản lý (có Tổng Giám đốc, anh David, chị Ngoc Dang, anh Son
   Bui). Trước đó chị Lan góp ý bản nháp trang chiếu của anh Tuấn qua
   email (bài đọc).
   Nội dung trình bày (khớp các bài trước): lương nhìn chung thấp hơn thị
   trường một chút, IT Support thấp hơn đáng kể → đã điều chỉnh thêm cho
   IT Support và HR Assistant; khám sức khỏe chuyển sang tháng Tư; bảo
   hiểm gia đình bắt đầu từ tháng này; tổng số 64 người, hơn một nửa ở
   Kinh doanh và Logistics; khoảng 70% giờ làm thêm ở Kế toán và
   Logistics; tỷ lệ nghỉ việc khoảng 14,5%, Logistics chiếm 5/9.
   Ba ưu tiên: giữ lương cạnh tranh, giảm làm thêm giờ, hỗ trợ nhân viên
   mới tốt hơn. Bài trình bày tối đa 15 phút.
   Thời gian nói áng chừng.
   ========================================================= */
window.EOH.registerLesson({
  id: "b2-m3-l5",
  reviewStatus: "approved", // Linh duyệt ngày 24/10/2026
  duration: "45–60 phút",
  scenario: "Chị Lan (HR Manager) trình bày báo cáo nhân sự năm trước ban quản lý: lương, phúc lợi, số liệu nhân sự và nghỉ việc. Trước buổi họp, chị góp ý cho anh Tuấn về cách sắp xếp bài trình bày: mở đầu, chuyển ý, nói về biểu đồ và kết thúc.",

  objectives: [
    "Hiểu và dùng 10 từ vựng thường gặp khi trình bày số liệu.",
    "Nghe một bài trình bày ngắn, nhận ra các phần và câu chuyển ý.",
    "Đọc email góp ý về cách trình bày, nắm được lời khuyên cho từng phần.",
    "Dùng từ dẫn dắt khi thuyết trình: mở đầu (Today I'd like to…), chuyển ý (Let's move on to… / This brings me to…), nói về biểu đồ (As you can see… / If you look at…), kết thúc (To sum up… / I'd be happy to take any questions).",
    "Viết lời trình bày ngắn về số liệu nhân sự, có đủ mở đầu, chuyển ý và kết thúc."
  ],

  vocabulary: [
    { word: "signpost", ipa: "/ˈsaɪnpoʊst/", pos: "verb", meaning: "dẫn dắt, báo trước cho người nghe phần tiếp theo",
      example: "Good speakers signpost each part of their talk.", exampleVi: "Người nói giỏi luôn báo trước từng phần của bài trình bày." },
    { word: "outline", ipa: "/ˈaʊtlaɪn/", pos: "noun", meaning: "dàn ý, phần giới thiệu các mục chính",
      example: "Give a short outline of your talk at the start.", exampleVi: "Giới thiệu ngắn dàn ý bài trình bày ngay từ đầu." },
    { word: "slide", ipa: "/slaɪd/", pos: "noun", meaning: "trang chiếu",
      example: "If you look at the second slide, you'll see our headcount.", exampleVi: "Nếu nhìn trang chiếu thứ hai, quý vị sẽ thấy tổng số nhân viên." },
    { word: "breakdown", ipa: "/ˈbreɪkdaʊn/", pos: "noun", meaning: "bảng chia nhỏ số liệu (theo nhóm, theo tháng…)",
      example: "I can send you the breakdown by team.", exampleVi: "Tôi có thể gửi anh số liệu chia theo từng nhóm." },
    { word: "priority", ipa: "/praɪˈɔːrəti/", pos: "noun", meaning: "ưu tiên",
      example: "We have three priorities for this year.", exampleVi: "Năm nay chúng ta có ba ưu tiên." },
    { word: "rehearse", ipa: "/rɪˈhɜːrs/", pos: "verb", meaning: "tập trước (bài trình bày)",
      example: "Let's rehearse the presentation tomorrow afternoon.", exampleVi: "Chiều mai mình tập trước bài trình bày nhé." },
    { word: "aloud", ipa: "/əˈlaʊd/", pos: "adverb", meaning: "thành tiếng, đọc to lên",
      example: "Don't read every number aloud.", exampleVi: "Đừng đọc to từng con số." },
    { word: "key message", ipa: "/ˌkiː ˈmesɪdʒ/", pos: "noun", meaning: "thông điệp chính",
      example: "Each slide should have one key message.", exampleVi: "Mỗi trang chiếu nên có một thông điệp chính." },
    { word: "audience", ipa: "/ˈɔːdiəns/", pos: "noun", meaning: "người nghe, khán giả",
      example: "Think about your audience before you write the slides.", exampleVi: "Hãy nghĩ về người nghe trước khi làm trang chiếu." },
    { word: "share", ipa: "/ʃer/", pos: "noun", meaning: "phần, tỷ lệ (trong tổng số)",
      example: "Sales accounts for only a small share of overtime.", exampleVi: "Kinh doanh chỉ chiếm một phần nhỏ số giờ làm thêm." }
  ],

  pronunciation: {
    groups: [
      {
        title: "Ngắt nghỉ sau từ dẫn dắt",
        text: "Khi thuyết trình, ngừng một chút sau câu dẫn dắt (dấu |) để người nghe biết bạn sắp sang phần mới. Nhấn vào từ chỉ chủ đề.",
        items: [
          { word: "Let's start with pay.", marked: "Let's START with | PAY." },
          { word: "Moving on to benefits…", marked: "MOV·ing ON to | BEN·e·fits…" },
          { word: "This brings me to retention.", marked: "This BRINGS me to | re·TEN·tion." },
          { word: "To sum up…", marked: "To SUM UP | …" }
        ]
      }
    ],
    sentences: [
      "Today I'd like to share the key HR results from last year.",
      "As you can see from this chart, overtime is high in two teams.",
      "That brings me to the end of my presentation."
    ]
  },

  listening: {
    title: "The annual HR report",
    setting: "Phòng họp ban quản lý. Chị Lan (HR Manager) trình bày báo cáo nhân sự năm. Người nghe có Tổng Giám đốc, anh David, chị Ngoc Dang và anh Son Bui.",
    speakers: { lan: "Lan (HR Manager)", david: "David (Sales Manager)" },
    lines: [
      { s: "lan", text: "Good morning, everyone. Thank you for having me. Today I'd like to share the key HR results from last year and our priorities for this year.",
        vi: "Chào buổi sáng mọi người. Cảm ơn đã mời tôi. Hôm nay tôi xin chia sẻ các kết quả nhân sự chính của năm ngoái và các ưu tiên cho năm nay." },
      { s: "lan", text: "I'll divide my talk into three parts: pay and benefits, people data, and retention. Please feel free to ask questions at the end.",
        vi: "Tôi chia bài trình bày thành ba phần: lương và phúc lợi, số liệu nhân sự, và giữ chân nhân viên. Mọi người cứ thoải mái đặt câu hỏi ở cuối." },
      { s: "lan", text: "Let's start with pay. As you can see from this chart, our salaries are slightly lower than the market overall, but IT Support was considerably lower.",
        vi: "Chúng ta bắt đầu với lương. Như quý vị thấy trên biểu đồ này, nhìn chung lương của chúng ta thấp hơn thị trường một chút, nhưng IT Support thì thấp hơn đáng kể." },
      { s: "lan", text: "That's why we have given extra adjustments to IT Support and HR Assistant this year.",
        vi: "Vì vậy năm nay chúng tôi đã điều chỉnh thêm cho IT Support và HR Assistant." },
      { s: "lan", text: "Moving on to benefits, the health check will now take place in April, and family health insurance starts this month.",
        vi: "Chuyển sang phúc lợi, khám sức khỏe từ nay sẽ vào tháng Tư, và bảo hiểm sức khỏe gia đình bắt đầu từ tháng này." },
      { s: "lan", text: "This brings me to our people data. If you look at the next slide, you'll see that our headcount is sixty-four, and just over half of our staff work in Sales and Logistics.",
        vi: "Điều này đưa tôi đến phần số liệu nhân sự. Nếu nhìn trang chiếu tiếp theo, quý vị sẽ thấy tổng số nhân viên là sáu mươi tư, và hơn một nửa làm ở Kinh doanh và Logistics." },
      { s: "lan", text: "I'd like to highlight one figure in particular: overtime. Roughly seventy percent of all overtime hours were in Accounting and Logistics.",
        vi: "Tôi muốn nhấn mạnh đặc biệt một con số: làm thêm giờ. Khoảng bảy mươi phần trăm tổng số giờ làm thêm là ở Kế toán và Logistics." },
      { s: "lan", text: "Now let's turn to retention. Our turnover rate was about fourteen and a half percent, and Logistics accounted for five of the nine leavers.",
        vi: "Bây giờ chúng ta chuyển sang giữ chân nhân viên. Tỷ lệ nghỉ việc khoảng mười bốn phẩy năm phần trăm, và Logistics chiếm năm trong chín người nghỉ." },
      { s: "lan", text: "To sum up, we have three priorities: keep pay competitive, reduce overtime, and support new hires better.",
        vi: "Tóm lại, chúng ta có ba ưu tiên: giữ lương cạnh tranh, giảm làm thêm giờ, và hỗ trợ nhân viên mới tốt hơn." },
      { s: "lan", text: "That brings me to the end of my presentation. I'd be happy to take any questions.",
        vi: "Bài trình bày của tôi đến đây là hết. Tôi sẵn lòng trả lời các câu hỏi." },
      { s: "david", text: "Thanks, Lan. Going back to the overtime figure, does that include the Sales team?",
        vi: "Cảm ơn chị Lan. Quay lại con số làm thêm giờ, con số đó có tính nhóm Kinh doanh không?" },
      { s: "lan", text: "Good question. Yes, it does, but Sales accounts for only a small share. I can send you the breakdown by team after the meeting.",
        vi: "Câu hỏi hay. Có tính ạ, nhưng Kinh doanh chỉ chiếm một phần nhỏ. Tôi có thể gửi anh số liệu chia theo từng nhóm sau buổi họp." },
      { s: "david", text: "That would be great, thanks.",
        vi: "Vậy thì tốt quá, cảm ơn chị." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "How many parts does Lan divide her talk into?",
        options: ["Two", "Three", "Four", "Five"],
        answer: 1, explanation: "“I'll divide my talk into three parts: pay and benefits, people data, and retention.”" },
      { id: "l2", type: "choice", prompt: "Which phrase does Lan use to move on to retention?",
        options: ["To sum up", "Let's start with", "Now let's turn to", "That brings me to the end"],
        answer: 2, explanation: "“Now let's turn to retention.” To sum up dùng để tóm tắt ở cuối; Let's start with dùng cho phần đầu tiên." },
      { id: "l3", type: "choice", prompt: "What will Lan send David after the meeting?",
        options: ["The overtime breakdown by team", "The slides", "The insurance contract", "The salary survey"],
        answer: 0, explanation: "“I can send you the breakdown by team after the meeting.”" }
    ]
  },

  reading: {
    title: "Feedback on the presentation draft",
    intro: "Email chị Lan gửi anh Tuấn sau khi xem bản nháp trang chiếu cho cuộc họp ban quản lý. Đọc và tìm lời khuyên cho từng phần của bài trình bày.",
    email: {
      from: "Lan Pham <lan.pham@riverside-trading.example>",
      to: "Tuan Nguyen",
      date: "Wednesday",
      subject: "Feedback on the presentation draft",
      greeting: "Hi Tuan,",
      paragraphs: [
        "Thank you for the draft slides for next week's management meeting. The data is excellent, but the presentation needs a clearer structure so that the managers can follow it easily. Here are my suggestions:"
      ],
      list: [
        "Opening: start by saying what the presentation is about and how it is organized, for example: \"Today I'd like to share last year's HR results. I'll divide my talk into three parts.\"",
        "Transitions: use a clear phrase each time you change topic, such as \"Let's move on to…\" or \"This brings me to…\". At the moment, the slides jump from pay to turnover without any link.",
        "Charts: don't read every number aloud. Point to one key figure and say \"As you can see from this chart…\". Round the figures on the slides and keep the exact numbers in the appendix.",
        "Ending: summarize our three priorities, then invite questions with \"To sum up…\" and \"I'd be happy to take any questions.\""
      ],
      after: [
        "Please also keep the talk to fifteen minutes. The General Director prefers short presentations with one clear key message.",
        "Could we rehearse it together tomorrow afternoon in Room 301? I will give the presentation, but I'd like you to answer any detailed questions about the data."
      ],
      closing: "Thanks,",
      signature: ["Lan Pham", "HR Manager, Riverside Trading"]
    },
    glossary: [
      { term: "draft", vi: "bản nháp" },
      { term: "structure", vi: "cấu trúc, cách sắp xếp" },
      { term: "follow", vi: "theo kịp, hiểu được" },
      { term: "jump from … to …", vi: "nhảy từ … sang …" },
      { term: "invite questions", vi: "mời đặt câu hỏi" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "What is the main problem with Tuan's draft?",
        options: ["The data is wrong.", "The structure is not clear enough.", "It is too short.", "There are no charts."],
        answer: 1, explanation: "“The data is excellent, but the presentation needs a clearer structure…”" },
      { id: "r2", type: "choice", prompt: "What does Lan advise about charts?",
        options: ["Read every number aloud.", "Remove all charts.", "Point to one key figure and round the numbers.", "Put the exact numbers on every slide."],
        answer: 2, explanation: "“Point to one key figure… Round the figures on the slides and keep the exact numbers in the appendix.”" },
      { id: "r3", type: "choice", prompt: "How long should the talk be?",
        options: ["Fifteen minutes", "Thirty minutes", "One hour", "Five minutes"],
        answer: 0, explanation: "“Please also keep the talk to fifteen minutes.”" }
    ]
  },

  grammar: {
    title: "Signposting in presentations",
    titleVi: "Từ dẫn dắt khi thuyết trình",
    intro: "Người nghe không thể “lật lại trang” như khi đọc. Vì vậy người thuyết trình cần báo trước mình đang ở phần nào và sắp nói gì. Bốn nhóm câu dẫn dắt dưới đây có trong bài trình bày và email bạn vừa học.",
    patterns: [
      { form: "Mở đầu: Today I'd like to… / I'll divide my talk into… / Let's start with…", use: "Giới thiệu chủ đề và cách sắp xếp bài.",
        examples: ["Today I'd like to share the key HR results from last year.", "I'll divide my talk into three parts."] },
      { form: "Chuyển ý: Moving on to… / Let's move on to… / Now let's turn to… / This brings me to…", use: "Báo cho người nghe biết bạn đổi sang phần mới.",
        examples: ["Moving on to benefits, the health check will now take place in April.", "This brings me to our people data."] },
      { form: "Nói về hình ảnh: As you can see from… / If you look at… / I'd like to highlight…", use: "Hướng mắt người nghe vào một con số hay biểu đồ.",
        examples: ["As you can see from this chart, our salaries are slightly lower than the market.", "If you look at the next slide, you'll see our headcount."] },
      { form: "Kết thúc: To sum up… / That brings me to the end of… / I'd be happy to take any questions.", use: "Tóm tắt ý chính và mời đặt câu hỏi.",
        examples: ["To sum up, we have three priorities.", "That brings me to the end of my presentation."] }
    ],
    mistakes: [
      { wrong: "Let's move on retention.", right: "Let's move on to retention.", note: "move on to + chủ đề. Không bỏ to." },
      { wrong: "As you can see in this chart that overtime is high.", right: "As you can see from this chart, overtime is high.", note: "As you can see from…, rồi dấu phẩy và câu chính. Không thêm that." },
      { wrong: "This brings me for our people data.", right: "This brings me to our people data.", note: "Cụm cố định: bring me to." },
      { wrong: "For sum up, we have three priorities.", right: "To sum up, we have three priorities.", note: "Cụm cố định: To sum up." }
    ],
    tip: "Quy tắc ba bước của bài trình bày tốt: nói trước bạn sẽ nói gì (mở đầu), nói điều đó (từng phần, có chuyển ý), rồi nhắc lại điều vừa nói (tóm tắt). Người nghe nhớ lâu hơn khi ý chính được nghe hai lần."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "I'd like to ___ by looking at pay.",
      options: ["start", "starting", "started", "starts"],
      answer: 0, explanation: "would like to + động từ nguyên mẫu: I'd like to start." },
    { id: "p2", type: "choice", prompt: "Which phrase is best for moving to a new topic?",
      options: ["To sum up, …", "Let's move on to retention.", "I'd be happy to take any questions.", "Good morning, everyone."],
      answer: 1, explanation: "Let's move on to… dùng để chuyển sang phần mới. To sum up dùng để tóm tắt ở cuối." },
    { id: "p3", type: "gap", prompt: "As you can ___ from this chart, overtime is high in Logistics.",
      options: ["look", "watch", "see", "show"],
      answer: 2, explanation: "Cụm cố định: As you can see from this chart." },
    { id: "p4", type: "gap", prompt: "This ___ me to our people data.",
      options: ["brings", "makes", "goes", "turns"],
      answer: 0, explanation: "Cụm cố định: This brings me to… = điều này đưa tôi đến phần…" },
    { id: "p5", type: "choice", prompt: "Which phrase is best for ending a presentation?",
      options: ["Let's start with…", "Moving on to…", "If you look at…", "That brings me to the end of my presentation."],
      answer: 3, explanation: "That brings me to the end of my presentation = bài trình bày đến đây là hết." },
    { id: "p6", type: "gap", prompt: "If you ___ at the next slide, you'll see our headcount.",
      options: ["see", "look", "watch", "show"],
      answer: 1, explanation: "look at + vật: If you look at the next slide. see không đi với at." },
    { id: "p7", type: "gap", prompt: "___, we have three priorities: pay, overtime and new hires.",
      context: "Câu này ở phần kết, tóm tắt ý chính.",
      options: ["Moving on to", "Let's turn to", "To sum up", "Going back to"],
      answer: 2, explanation: "Tóm tắt ở cuối → To sum up,. Ba lựa chọn còn lại đều cần một danh từ chủ đề theo sau." },
    { id: "p8", type: "gap", prompt: "I can send you the ___ by team after the meeting.",
      options: ["breakdown", "audience", "outline", "priority"],
      answer: 0, explanation: "breakdown by team = số liệu chia theo từng nhóm." },
    { id: "p9", type: "gap", prompt: "Don't read every number ___. Point to one key figure instead.",
      options: ["along", "about", "aloud", "allowed"],
      answer: 2, explanation: "read aloud = đọc thành tiếng. allowed phát âm giống aloud nhưng nghĩa là “được phép”." },
    { id: "p10", type: "choice", prompt: "Someone asks a question at the end of your talk. What is a polite way to start your answer?",
      options: ["That's wrong.", "Next slide, please.", "Moving on to pay.", "Good question."],
      answer: 3, explanation: "Good question. = câu hỏi hay, cách mở đầu câu trả lời lịch sự, cho bạn thêm vài giây để nghĩ." }
  ],

  writing: {
    title: "Write a short presentation script",
    task: "Bạn là Khanh. Viết lời trình bày ngắn (120–180 từ) giới thiệu bảng số liệu nhân sự tháng này ở cuộc họp phòng Nhân sự. Ba phần: tổng số nhân viên (64, hơn một nửa ở Kinh doanh và Logistics); vắng mặt (hơn 2% một chút, thấp hơn nhiều so với mục tiêu); phép năm (mới dùng khoảng một nửa). Có mở đầu, chuyển ý, nói về biểu đồ, tóm tắt và mời đặt câu hỏi.",
    requirements: [
      "Chào người nghe (Good morning, everyone).",
      "Mở đầu: Today I'd like to… / I'll divide my talk into…",
      "Chuyển ý: Moving on to… / Let's move on to… / This brings me to…",
      "Nói về biểu đồ: As you can see… / If you look at…",
      "Tóm tắt: To sum up… / In summary…",
      "Mời đặt câu hỏi."
    ],
    minWords: 120,
    maxWords: 180,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Good morning / Good afternoon / Hello)", pattern: "good morning|good afternoon|\\bhello\\b" },
      { label: "Có câu mở đầu (Today I'd like… / I'll divide…)", pattern: "today i('|’)d like|today i('|’)m going to|i('|’)ll divide|let('|’)s start with" },
      { label: "Có câu chuyển ý", pattern: "moving on|move on to|brings me to|let('|’)s turn to" },
      { label: "Có câu nói về biểu đồ (As you can see / If you look at)", pattern: "as you can see|if you look at" },
      { label: "Có câu tóm tắt (To sum up / In summary)", pattern: "to sum up|in summary|to conclude" },
      { label: "Có mời đặt câu hỏi", pattern: "questions" }
    ],
    model: [
      "Good morning, everyone. Today I'd like to share the key figures from this month's HR dashboard. I'll divide my talk into three parts: headcount, absence and annual leave.",
      "Let's start with headcount. As you can see from this chart, we now have 64 employees, and just over half of them work in Sales and Logistics.",
      "Moving on to absence, the rate is just over 2%, which is well under our target. This is good news.",
      "This brings me to annual leave. If you look at the next slide, you'll see that staff have used only about half of their leave so far. We need to remind managers about this.",
      "To sum up, headcount is stable, absence is low, but leave usage is a concern.",
      "That brings me to the end of my talk. I'd be happy to take any questions."
    ]
  },

  review: {
    keyPhrases: [
      { en: "Today I'd like to share the key HR results from last year.", vi: "Hôm nay tôi xin chia sẻ các kết quả nhân sự chính của năm ngoái." },
      { en: "I'll divide my talk into three parts.", vi: "Tôi chia bài trình bày thành ba phần." },
      { en: "As you can see from this chart, …", vi: "Như quý vị thấy trên biểu đồ này, …" },
      { en: "This brings me to our people data.", vi: "Điều này đưa tôi đến phần số liệu nhân sự." },
      { en: "To sum up, we have three priorities.", vi: "Tóm lại, chúng ta có ba ưu tiên." },
      { en: "I'd be happy to take any questions.", vi: "Tôi sẵn lòng trả lời các câu hỏi." }
    ]
  }
});
