/* =========================================================
   A2 · Module 4 (HR Operations) · Bài 5
   "Health and safety at work" — An toàn và sức khỏe nơi làm việc
   Ngữ pháp: should / shouldn't + Make sure you…
   Câu chuyện: thứ Sáu 27/11/2026. Diễn tập thoát hiểm lúc 15:00; Tuấn thấy nước trên sàn.
   Công ty Riverside Trading và các nhân vật đều là hư cấu.
   ========================================================= */
window.EOH.registerLesson({
  id: "a2-m4-l5",
  reviewStatus: "draft", // "draft" = bản nháp, chưa duyệt
  duration: "35–45 phút",
  scenario: "Thứ Sáu 27/11, công ty có buổi diễn tập thoát hiểm lúc 15:00. Anh Hải và chị Lan dặn Tuấn việc cần làm, và Tuấn báo sàn ướt gần cầu thang nhà ăn. Chị Lan gửi email nhắc cả công ty những điều nên và không nên làm.",

  objectives: [
    "Hiểu và dùng 10 từ vựng về an toàn lao động (fire exit, hazard, incident report…).",
    "Nghe hiểu hướng dẫn trước buổi diễn tập thoát hiểm.",
    "Đọc email nhắc nhở an toàn và tìm đúng thông tin: giờ, điểm tập trung, việc nên làm.",
    "Cho lời khuyên bằng should / shouldn't và nhắc bằng Make sure you…",
    "Viết thông báo ngắn về nguy cơ trượt ngã cho cả nhóm."
  ],

  vocabulary: [
    { word: "fire exit", ipa: "/ˈfaɪr ˌeksɪt/", pos: "noun", meaning: "cửa thoát hiểm",
      example: "Never block the fire exit.", exampleVi: "Không bao giờ chặn cửa thoát hiểm." },
    { word: "fire extinguisher", ipa: "/ˈfaɪr ɪkˌstɪŋɡwɪʃər/", pos: "noun", meaning: "bình chữa cháy",
      example: "The fire extinguisher is next to the door.", exampleVi: "Bình chữa cháy ở cạnh cửa." },
    { word: "first aid kit", ipa: "/ˌfɜːrst ˈeɪd kɪt/", pos: "noun", meaning: "hộp sơ cứu",
      example: "The first aid kit is in the HR office.", exampleVi: "Hộp sơ cứu ở trong văn phòng Nhân sự." },
    { word: "assembly point", ipa: "/əˈsembli pɔɪnt/", pos: "noun", meaning: "điểm tập trung khi thoát hiểm",
      example: "Go to the assembly point outside.", exampleVi: "Hãy đến điểm tập trung bên ngoài." },
    { word: "evacuation drill", ipa: "/ɪˌvækjuˈeɪʃən drɪl/", pos: "noun", meaning: "buổi diễn tập thoát hiểm",
      example: "We have an evacuation drill today at three o'clock.", exampleVi: "Hôm nay lúc ba giờ chúng ta có buổi diễn tập thoát hiểm." },
    { word: "hazard", ipa: "/ˈhæzərd/", pos: "noun", meaning: "nguy cơ gây tai nạn",
      example: "A wet floor is a hazard.", exampleVi: "Sàn ướt là một nguy cơ." },
    { word: "spill", ipa: "/ˈspɪl/", pos: "noun", meaning: "chỗ đổ, vết nước hoặc chất lỏng bị đổ",
      example: "There is a spill near the stairs.", exampleVi: "Có chỗ nước bị đổ gần cầu thang." },
    { word: "injury", ipa: "/ˈɪndʒəri/", pos: "noun", meaning: "vết thương, chấn thương",
      example: "He has a small injury on his hand.", exampleVi: "Anh ấy bị một vết thương nhỏ ở tay." },
    { word: "incident report", ipa: "/ˈɪnsɪdənt rɪˈpɔːrt/", pos: "noun", meaning: "báo cáo sự cố",
      example: "Fill in an incident report after an accident.", exampleVi: "Hãy điền báo cáo sự cố sau một tai nạn." },
    { word: "slippery", ipa: "/ˈslɪpəri/", pos: "adjective", meaning: "trơn, dễ trượt",
      example: "The floor is slippery after the rain.", exampleVi: "Sàn nhà trơn sau cơn mưa." }
  ],

  pronunciation: {
    groups: [
      {
        title: "Should và shouldn't",
        text: "Trong should và shouldn't, chữ l không đọc. Should thường đọc nhẹ /ʃəd/ trong câu; shouldn't đọc rõ hơn để nghe được phủ định.",
        items: [
          { word: "should", marked: "/ʃʊd/ (yếu: /ʃəd/)", note: "Chữ l là âm câm." },
          { word: "shouldn't", marked: "/ˈʃʊdnt/", note: "Nhấn âm đầu, kết thúc /nt/." },
          { word: "shouldn't run", marked: "SHOULD·n't RUN", note: "Nhấn cả should và động từ chính." }
        ]
      },
      {
        title: "Trọng âm của từ dài",
        text: "Từ tận cùng bằng -tion có trọng âm ở âm tiết ngay trước -tion. Với từ ghép, trọng âm thường ở phần đầu.",
        items: [
          { word: "evacuation", marked: "e·vac·u·A·tion" },
          { word: "extinguisher", marked: "ex·TING·uish·er" },
          { word: "hazard", marked: "HAZ·ard" },
          { word: "injury", marked: "IN·ju·ry" },
          { word: "slippery", marked: "SLIP·per·y" }
        ]
      }
    ],
    sentences: [
      "You shouldn't use the elevator in a fire.",
      "Make sure you stay calm and walk to the assembly point.",
      "Should I take my laptop?"
    ]
  },

  listening: {
    title: "Before the evacuation drill",
    setting: "Sáng thứ Sáu, tại phòng Nhân sự. Anh Hải và chị Lan dặn Tuấn về buổi diễn tập thoát hiểm.",
    speakers: { hai: "Mr. Hai (line manager)", lan: "Lan (HR Officer)", tuan: "Tuan (HR Assistant)" },
    lines: [
      { s: "hai", text: "Tuan, we have an evacuation drill today at three o'clock. Lan wants you to help.",
        vi: "Tuấn, hôm nay lúc ba giờ chiều có buổi diễn tập thoát hiểm. Chị Lan muốn em giúp." },
      { s: "tuan", text: "Of course. What should I do?",
        vi: "Dạ được ạ. Em nên làm gì ạ?" },
      { s: "hai", text: "You should check that everyone leaves our office. Make sure you use the stairs. You shouldn't use the elevator in a fire.",
        vi: "Em nên kiểm tra mọi người đã ra khỏi văn phòng chưa. Em nhớ đi bằng cầu thang. Khi có cháy thì không nên dùng thang máy." },
      { s: "tuan", text: "Where is the assembly point?",
        vi: "Điểm tập trung ở đâu ạ?" },
      { s: "lan", text: "It is in the car park next to the staff canteen. Everyone should walk, not run.",
        vi: "Ở bãi đỗ xe cạnh nhà ăn nhân viên. Mọi người nên đi bộ, không chạy." },
      { s: "tuan", text: "Should I take my laptop?",
        vi: "Em có nên mang laptop không ạ?" },
      { s: "lan", text: "No, you shouldn't. Leave everything on your desk. Make sure you stay calm and follow the green fire exit signs.",
        vi: "Không, em không nên. Em để mọi thứ lại trên bàn. Em nhớ giữ bình tĩnh và đi theo biển xanh chỉ cửa thoát hiểm." },
      { s: "tuan", text: "What about the first aid kit?",
        vi: "Còn hộp sơ cứu thì sao ạ?" },
      { s: "lan", text: "It is in our office, next to the door. If someone gets an injury, you should tell me and fill in an incident report.",
        vi: "Nó ở trong văn phòng mình, cạnh cửa. Nếu ai bị thương, em nên báo chị và điền báo cáo sự cố." },
      { s: "tuan", text: "I have another thing. This morning I saw water on the floor near the canteen stairs.",
        vi: "Em còn một việc nữa. Sáng nay em thấy có nước trên sàn gần cầu thang nhà ăn." },
      { s: "hai", text: "Good that you told us. It is a hazard because the floor is slippery. You should put up a warning sign, and make sure you call the cleaner.",
        vi: "Em báo là tốt. Đó là một nguy cơ vì sàn trơn. Em nên đặt biển cảnh báo, và nhớ gọi nhân viên vệ sinh." },
      { s: "tuan", text: "I'll do it now.",
        vi: "Em làm ngay bây giờ ạ." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "What time is the evacuation drill?",
        options: ["One o'clock", "Two o'clock", "Three o'clock", "Four o'clock"],
        answer: 2, explanation: "Anh Hải nói: “We have an evacuation drill today at three o'clock.”" },
      { id: "l2", type: "choice", prompt: "Where is the assembly point?",
        options: ["In the car park next to the canteen", "In front of reception", "On the stairs", "In the HR office"],
        answer: 0, explanation: "Chị Lan nói: “It is in the car park next to the staff canteen.”" },
      { id: "l3", type: "choice", prompt: "What did Tuan see this morning?",
        options: ["A blocked fire exit", "Water on the floor near the canteen stairs", "A broken first aid kit", "Smoke in the elevator"],
        answer: 1, explanation: "“This morning I saw water on the floor near the canteen stairs.” Các lựa chọn khác không có trong hội thoại." }
    ]
  },

  reading: {
    title: "Fire drill today",
    intro: "Email chị Lan gửi cho cả công ty sáng thứ Sáu 27/11. Đọc và tìm các việc nên và không nên làm.",
    email: {
      from: "Lan Pham <lan.pham@riverside-trading.example>",
      to: "All staff",
      date: "Friday, 27 November",
      subject: "Fire drill today at 3:00 p.m.",
      greeting: "Dear all,",
      paragraphs: [
        "We have a fire drill today at 3:00 p.m. It takes about fifteen minutes. When you hear the alarm, you should leave the building at once. Please remember:"
      ],
      list: [
        "Make sure you use the stairs, not the elevator.",
        "You shouldn't take your laptop or bag.",
        "Go to the assembly point in the car park next to the staff canteen."
      ],
      after: [
        "The fire wardens will check every floor. If you see a hazard, for example a blocked fire exit, please report it to Tuan.",
        "Thank you for your help."
      ],
      closing: "Best regards,",
      signature: ["Lan Pham", "HR Officer, Riverside Trading"]
    },
    glossary: [
      { term: "alarm", vi: "chuông báo động" },
      { term: "at once", vi: "ngay lập tức" },
      { term: "fire warden", vi: "người phụ trách kiểm tra mọi người thoát ra khi có cháy" },
      { term: "blocked", vi: "bị chặn, bị cản" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "How long does the drill take?",
        options: ["Five minutes", "Ten minutes", "Thirty minutes", "About fifteen minutes"],
        answer: 3, explanation: "“It takes about fifteen minutes.”" },
      { id: "r2", type: "choice", prompt: "What should staff use to leave the building?",
        options: ["The elevator", "The back door only", "The stairs", "The fire extinguisher"],
        answer: 2, explanation: "“Make sure you use the stairs, not the elevator.”" },
      { id: "r3", type: "choice", prompt: "Who should staff tell about a hazard?",
        options: ["Tuan", "Sam", "Mr. Hai", "Peter"],
        answer: 0, explanation: "“If you see a hazard… please report it to Tuan.”" }
    ]
  },

  grammar: {
    title: "Should, shouldn't and Make sure you…",
    titleVi: "Lời khuyên và lời nhắc an toàn",
    intro: "Trong an toàn lao động, nhân sự thường cho lời khuyên và nhắc những việc quan trọng. Nên dùng should / shouldn't, và Make sure you… khi muốn nhấn mạnh việc cần kiểm tra hoặc đảm bảo.",
    patterns: [
      { form: "should + động từ", use: "Lời khuyên hoặc việc nên làm. Nhẹ hơn must.",
        examples: ["You should leave the building at once.", "Everyone should walk to the assembly point."] },
      { form: "shouldn't + động từ", use: "Việc không nên làm.",
        examples: ["You shouldn't use the elevator in a fire.", "You shouldn't take your laptop."] },
      { form: "Make sure (that) you + động từ", use: "Nhắc phải nhớ làm hoặc phải đảm bảo điều gì. Sau you dùng động từ nguyên mẫu.",
        examples: ["Make sure you use the stairs.", "Make sure you stay calm."] },
      { form: "Should I / What should I + động từ …?", use: "Hỏi xin lời khuyên về việc nên làm.",
        examples: ["Should I take my laptop?", "What should I do?"] }
    ],
    mistakes: [
      { wrong: "You should to leave the building.", right: "You should leave the building.", note: "Sau should dùng động từ nguyên mẫu, không có “to”." },
      { wrong: "He shoulds call the cleaner.", right: "He should call the cleaner.", note: "should không đổi dạng, không thêm -s." },
      { wrong: "You not should run.", right: "You shouldn't run.", note: "Phủ định là shouldn't hoặc should not." },
      { wrong: "Make sure you to close the door.", right: "Make sure you close the door.", note: "Sau Make sure you dùng động từ nguyên mẫu, không có “to”." }
    ],
    tip: "Should là lời khuyên, nhẹ hơn must. Nói “You must…” cho quy định bắt buộc (bạn đã học ở cấp A1). Với đồng nghiệp, “You should…” nghe lịch sự và thân thiện hơn."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "Water on the floor is a ___ because someone can fall.",
      options: ["fire exit", "hazard", "backup", "first aid kit"],
      answer: 1, explanation: "Hazard = nguy cơ gây tai nạn. Fire exit là cửa thoát hiểm, first aid kit là hộp sơ cứu." },
    { id: "p2", type: "gap", prompt: "If you cut your hand, use the ___.",
      options: ["assembly point", "evacuation drill", "fire extinguisher", "first aid kit"],
      answer: 3, explanation: "Hộp sơ cứu (first aid kit) dùng cho vết thương. Fire extinguisher là bình chữa cháy." },
    { id: "p3", type: "gap", prompt: "When someone has an accident, we write an ___.",
      options: ["incident report", "evacuation drill", "assembly point", "slippery"],
      answer: 0, explanation: "Incident report = báo cáo sự cố, viết sau tai nạn. Evacuation drill và assembly point không phải thứ để viết." },
    { id: "p4", type: "gap", prompt: "You ___ run during a fire drill. Walk quickly.",
      options: ["should", "must to", "shouldn't", "not should"],
      answer: 2, explanation: "Câu sau bảo đi nhanh nhưng không chạy, nên dùng shouldn't. “Must to” và “not should” sai ngữ pháp." },
    { id: "p5", type: "gap", prompt: "___ you stay calm during a fire drill.",
      options: ["Make you sure", "Make sure", "Be sure to", "Making sure"],
      answer: 1, explanation: "Cấu trúc: Make sure you + động từ. “Be sure to you stay” và “Make you sure” sai trật tự từ." },
    { id: "p6", type: "gap", prompt: "Hoa has a headache. She ___ rest for a few minutes.",
      options: ["should to", "shoulds", "not should", "should"],
      answer: 3, explanation: "should + động từ nguyên mẫu: She should rest. Không dùng “to” hay thêm -s." },
    { id: "p7", type: "gap", prompt: "The floor is ___ after the rain. Be careful.",
      options: ["slippery", "evacuation", "confidential", "overtime"],
      answer: 0, explanation: "Slippery = trơn, dễ trượt, hợp với “Be careful”. Ba từ còn lại không mô tả sàn nhà." },
    { id: "p8", type: "choice", prompt: "Which sentence is good advice during a fire?",
      options: ["You should use the elevator.", "You shouldn't wear your badge.", "You should leave your laptop and walk to the assembly point.", "You should ignore the alarm."],
      answer: 2, explanation: "Khi có cháy phải rời đi ngay, bỏ lại đồ đạc và đi bộ đến điểm tập trung. Các câu còn lại nguy hiểm hoặc vô lý." },
    { id: "p9", type: "choice", context: "Tuan asks: “Should I take my laptop?”", prompt: "What is the best reply?",
      options: ["Yes, I should open the window.", "No, you shouldn't. Leave it and walk to the assembly point.", "Yes, make sure you carry it in the elevator.", "No, you are authorized."],
      answer: 1, explanation: "Trả lời đúng ý câu hỏi, và đúng quy tắc an toàn: không mang laptop, đi bộ đến điểm tập trung." },
    { id: "p10", type: "choice", prompt: "Where is the main stress in “evacuation”?",
      options: ["E·vac·u·a·tion", "e·VAC·u·a·tion", "e·vac·U·a·tion", "e·vac·u·A·tion"],
      answer: 3, explanation: "Từ tận cùng -tion có trọng âm ở âm tiết ngay trước -tion: e·vac·u·A·tion." }
  ],

  writing: {
    title: "A safety message about a wet floor",
    task: "Bạn là Tuấn. Sáng nay bạn thấy nước trên sàn gần cầu thang nhà ăn. Hãy viết email ngắn cho cả nhóm nhắc cách tránh trượt ngã (50–90 từ).",
    requirements: [
      "Mở đầu bằng lời chào (Hello everyone,).",
      "Nói bạn thấy nước trên sàn gần cầu thang nhà ăn sáng nay.",
      "Dùng should để khuyên đi cẩn thận, và shouldn't để nói điều không nên làm (ví dụ chạy trên cầu thang).",
      "Dùng Make sure you… để nhờ mọi người báo cho bạn nếu thấy nguy cơ khác (hazard).",
      "Nói bạn đã đặt biển cảnh báo.",
      "Kết thúc email và ký tên."
    ],
    minWords: 50,
    maxWords: 90,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Hello / Dear / Hi …)", pattern: "\\bhello\\b|\\bdear\\b|\\bhi\\b" },
      { label: "Dùng should", pattern: "\\bshould\\b" },
      { label: "Dùng shouldn't / should not", pattern: "shouldn't|should not" },
      { label: "Dùng Make sure", pattern: "make sure" },
      { label: "Nhắc tới sàn, cầu thang hoặc nguy cơ", pattern: "floor|stairs|slippery|hazard|water" },
      { label: "Có lời kết (Best regards …)", pattern: "regards|sincerely|best wishes" }
    ],
    model: [
      "Hello everyone,",
      "This morning I saw water on the floor near the canteen stairs. The floor is slippery, so you should walk carefully. You shouldn't run on the stairs.",
      "I have put up a warning sign. Please also use the other stairs until the floor is dry. Make sure you tell me if you see another hazard. Thank you for your help.",
      "Best regards,",
      "Tuan Nguyen"
    ]
  },

  review: {
    keyPhrases: [
      { en: "You should leave the building at once.", vi: "Bạn nên rời khỏi tòa nhà ngay lập tức." },
      { en: "You shouldn't use the elevator in a fire.", vi: "Bạn không nên dùng thang máy khi có cháy." },
      { en: "Make sure you stay calm.", vi: "Hãy nhớ giữ bình tĩnh." },
      { en: "Go to the assembly point in the car park.", vi: "Hãy đến điểm tập trung ở bãi đỗ xe." },
      { en: "If you see a hazard, please report it.", vi: "Nếu bạn thấy nguy cơ, vui lòng báo cáo." },
      { en: "Fill in an incident report after an accident.", vi: "Hãy điền báo cáo sự cố sau một tai nạn." }
    ]
  }
});
