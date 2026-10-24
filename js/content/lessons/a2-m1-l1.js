/* =========================================================
   A2 · Module 1 (Office Communication) · Bài 1
   "Small talk with colleagues"
   Nối tiếp: thứ Hai 9/11/2026, tuần thứ hai của Tuấn tại công ty.
   Ngữ pháp: quá khứ đơn với động từ có quy tắc + How was your weekend?
   Phát âm: đuôi -ed /t/ /d/ /ɪd/
   Công ty Riverside Trading và các nhân vật đều là hư cấu.
   ========================================================= */
window.EOH.registerLesson({
  id: "a2-m1-l1",
  reviewStatus: "draft", // "draft" = bản nháp, chưa duyệt
  duration: "35–45 phút",
  scenario: "Sáng thứ Hai 9/11, Tuấn (HR Assistant) gặp chị Lan ở phòng pha trà (pantry) và hai người trò chuyện về cuối tuần. Anh Hải, quản lý của Tuấn, đến và nói chuyện cùng. Sau đó chị Lan gửi email mời Tuấn ăn trưa với cả nhóm.",

  objectives: [
    "Hiểu và dùng 10 từ vựng thường gặp khi trò chuyện xã giao với đồng nghiệp.",
    "Nghe hiểu cuộc trò chuyện ngắn về cuối tuần ở văn phòng.",
    "Đọc email mời ăn trưa và tìm đúng thông tin: ngày, giờ, địa điểm, việc cần làm.",
    "Hỏi và kể về cuối tuần bằng How was…? và quá khứ đơn với động từ có quy tắc (visited, watched, cooked).",
    "Viết email trả lời nhận lời mời, kể một việc đã làm vào cuối tuần."
  ],

  vocabulary: [
    { word: "small talk", ipa: "/ˈsmɔːl tɔːk/", pos: "noun", meaning: "chuyện trò xã giao, nói chuyện phiếm nhẹ nhàng",
      example: "Small talk helps new employees feel welcome.", exampleVi: "Trò chuyện xã giao giúp nhân viên mới cảm thấy được chào đón." },
    { word: "commute", ipa: "/kəˈmjuːt/", pos: "noun / verb", meaning: "quãng đường đi làm hằng ngày; đi làm bằng phương tiện",
      example: "My commute takes about forty minutes.", exampleVi: "Quãng đường đi làm của tôi mất khoảng bốn mươi phút." },
    { word: "rush hour", ipa: "/ˈrʌʃ ˌaʊər/", pos: "noun", meaning: "giờ cao điểm",
      example: "The roads are very busy at rush hour.", exampleVi: "Đường rất đông vào giờ cao điểm." },
    { word: "hometown", ipa: "/ˈhoʊmˌtaʊn/", pos: "noun", meaning: "quê, thành phố quê hương",
      example: "I visited my hometown last weekend.", exampleVi: "Cuối tuần trước tôi về thăm quê." },
    { word: "relax", ipa: "/rɪˈlæks/", pos: "verb", meaning: "thư giãn, nghỉ ngơi",
      example: "I relaxed at home on Sunday.", exampleVi: "Tôi thư giãn ở nhà vào Chủ nhật." },
    { word: "hobby", ipa: "/ˈhɑːbi/", pos: "noun", meaning: "sở thích",
      example: "Cooking is my favorite hobby.", exampleVi: "Nấu ăn là sở thích yêu thích của tôi." },
    { word: "pantry", ipa: "/ˈpæntri/", pos: "noun", meaning: "phòng pha trà, cà phê của văn phòng",
      example: "We often chat in the pantry before work.", exampleVi: "Chúng tôi hay trò chuyện ở phòng pha trà trước giờ làm." },
    { word: "chat", ipa: "/tʃæt/", pos: "verb / noun", meaning: "trò chuyện, nói chuyện thân mật",
      example: "I chatted with Lan this morning.", exampleVi: "Sáng nay tôi đã trò chuyện với chị Lan." },
    { word: "tiring", ipa: "/ˈtaɪrɪŋ/", pos: "adjective", meaning: "mệt, gây mệt mỏi",
      example: "The trip was long and tiring.", exampleVi: "Chuyến đi dài và mệt." },
    { word: "catch up", ipa: "/ˈkætʃ ʌp/", pos: "phrasal verb", meaning: "hỏi thăm, kể cho nhau nghe chuyện gần đây",
      example: "Let's catch up over coffee.", exampleVi: "Mình cùng uống cà phê và kể chuyện gần đây nhé." }
  ],

  pronunciation: {
    groups: [
      {
        title: "Đuôi -ed đọc là /t/ hoặc /d/",
        text: "Động từ quá khứ có quy tắc thêm -ed nhưng không đọc “ét”. Sau âm không rung như /k/, /p/, /tʃ/ thì đọc /t/. Sau âm rung như /l/, /n/, /eɪ/ thì đọc /d/.",
        items: [
          { word: "watched", marked: "watch/t/", note: "Sau /tʃ/ nên đọc /t/: /wɑːtʃt/." },
          { word: "helped", marked: "help/t/", note: "Sau /p/ nên đọc /t/." },
          { word: "played", marked: "play/d/", note: "Sau /eɪ/ nên đọc /d/: /pleɪd/." },
          { word: "cleaned", marked: "clean/d/", note: "Sau /n/ nên đọc /d/." }
        ]
      },
      {
        title: "Đuôi -ed đọc là /ɪd/",
        text: "Khi động từ kết thúc bằng /t/ hoặc /d/, đuôi -ed thành một âm tiết mới /ɪd/. Từ có thêm một âm tiết.",
        items: [
          { word: "visited", marked: "vis·i·t/ɪd/", note: "3 âm tiết: /ˈvɪzɪtɪd/." },
          { word: "painted", marked: "paint/ɪd/", note: "2 âm tiết: /ˈpeɪntɪd/." },
          { word: "needed", marked: "need/ɪd/", note: "2 âm tiết: /ˈniːdɪd/." },
          { word: "waited", marked: "wait/ɪd/", note: "2 âm tiết: /ˈweɪtɪd/." }
        ]
      }
    ],
    sentences: [
      "I visited my grandparents and cooked dinner.",
      "We watched a movie and relaxed at home.",
      "She walked in the park and played with her dog."
    ]
  },

  listening: {
    title: "Monday morning in the pantry",
    setting: "Sáng thứ Hai 9/11, ở phòng pha trà. Chị Lan và Tuấn trò chuyện, sau đó anh Hải đến.",
    speakers: { lan: "Lan (HR Officer)", tuan: "Tuan (HR Assistant)", hai: "Mr. Hai (line manager)" },
    lines: [
      { s: "lan", text: "Good morning, Tuan! How was your weekend?",
        vi: "Chào buổi sáng, Tuấn! Cuối tuần của em thế nào?" },
      { s: "tuan", text: "Good morning, Ms. Lan. It was nice, thank you. I visited my grandparents in Nam Dinh. It's my hometown.",
        vi: "Em chào chị Lan. Cuối tuần của em vui ạ. Em về thăm ông bà ở Nam Định. Đó là quê em." },
      { s: "lan", text: "Oh, Nam Dinh! How was the trip?",
        vi: "Ồ, Nam Định! Chuyến đi thế nào?" },
      { s: "tuan", text: "It was tiring. I traveled on Saturday morning and stayed until Sunday afternoon. On the way back, the bus stopped in a traffic jam, and I waited for one hour.",
        vi: "Mệt ạ. Em đi sáng thứ Bảy và ở lại đến chiều Chủ nhật. Lúc về, xe buýt bị kẹt xe và em đã đợi một tiếng." },
      { s: "lan", text: "Oh no! I stayed home this weekend. I cleaned the kitchen and watched a movie. On Sunday, I walked in the park.",
        vi: "Ôi! Chị thì ở nhà cuối tuần này. Chị dọn bếp và xem một bộ phim. Chủ nhật chị đi dạo trong công viên." },
      { s: "tuan", text: "That sounds relaxing. I need a weekend like that!",
        vi: "Nghe thư giãn quá. Em cũng cần một cuối tuần như vậy!" },
      { s: "hai", text: "Good morning, you two. You're chatting early today!",
        vi: "Chào hai em. Hôm nay hai em trò chuyện sớm nhỉ!" },
      { s: "lan", text: "Good morning, Mr. Hai. We're talking about the weekend. Tuan visited his hometown.",
        vi: "Chào anh Hải. Bọn em đang nói về cuối tuần. Tuấn về thăm quê." },
      { s: "tuan", text: "How was your weekend, Mr. Hai?",
        vi: "Cuối tuần của anh thế nào ạ, anh Hải?" },
      { s: "hai", text: "Busy! I played badminton with my son on Saturday. On Sunday, I painted his bedroom.",
        vi: "Bận lắm! Thứ Bảy anh chơi cầu lông với con trai. Chủ nhật anh sơn phòng ngủ cho con." },
      { s: "lan", text: "Let's catch up again at lunch. Now it's time to start work!",
        vi: "Trưa mình lại kể chuyện tiếp nhé. Giờ đến giờ làm việc rồi!" }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "Where is Tuan's hometown?",
        options: ["Hai Phong", "Nam Dinh", "Hue", "Da Nang"],
        answer: 1, explanation: "Tuấn nói: “I visited my grandparents in Nam Dinh. It's my hometown.” Quê của Tuấn là Nam Định." },
      { id: "l2", type: "choice", prompt: "How was Tuan's trip back?",
        options: ["It was tiring because of a traffic jam.", "It was quick and easy.", "It was relaxing.", "It was boring because the bus was empty."],
        answer: 0, explanation: "“It was tiring… the bus stopped in a traffic jam, and I waited for one hour.” Chuyến về mệt vì kẹt xe, không hề nhanh hay thư giãn." },
      { id: "l3", type: "choice", prompt: "What did Mr. Hai do on Sunday?",
        options: ["He played badminton.", "He walked in the park.", "He cleaned the kitchen.", "He painted his son's bedroom."],
        answer: 3, explanation: "“On Sunday, I painted his bedroom.” Chơi cầu lông là việc anh làm hôm thứ Bảy; đi dạo công viên và dọn bếp là việc của chị Lan." }
    ]
  },

  reading: {
    title: "An invitation to lunch",
    intro: "Email chị Lan gửi cho Tuấn vào chiều thứ Hai, sau buổi trò chuyện ở phòng pha trà. Đọc và tìm thông tin về bữa trưa của nhóm.",
    email: {
      from: "Lan Pham <lan.pham@riverside-trading.example>",
      to: "Tuan Nguyen",
      date: "Monday, 9 November",
      subject: "Team lunch on Friday",
      greeting: "Dear Tuan,",
      paragraphs: [
        "Thank you for chatting with me this morning. I enjoyed hearing about your weekend in Nam Dinh, and I laughed about the bus story! Small talk like this is a good way to get to know your colleagues.",
        "On Friday, the HR team is having lunch together in the staff canteen at 12:00. Mr. Hai invited everyone, and he asked me to invite you, too. Hoa and Minh from Accounting usually join us, so you can meet them again."
      ],
      list: [],
      after: [
        "Please tell me if there is any food you don't eat. See you on Friday!"
      ],
      closing: "Best regards,",
      signature: ["Lan Pham", "HR Officer, Riverside Trading"]
    },
    glossary: [
      { term: "laugh about", vi: "cười về chuyện gì đó" },
      { term: "join", vi: "tham gia cùng, ngồi ăn cùng" },
      { term: "staff canteen", vi: "nhà ăn của nhân viên" },
      { term: "invite", vi: "mời" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "When is the team lunch?",
        options: ["Monday at 12:00", "Wednesday at 12:00", "Thursday at 11:30", "Friday at 12:00"],
        answer: 3, explanation: "“On Friday, the HR team is having lunch together in the staff canteen at 12:00.” Bữa trưa là thứ Sáu, 12:00." },
      { id: "r2", type: "choice", prompt: "What did Lan enjoy this morning?",
        options: ["Hearing about Tuan's weekend", "Reading Tuan's contract", "Cooking in the pantry", "Playing badminton"],
        answer: 0, explanation: "“I enjoyed hearing about your weekend in Nam Dinh.” Chị Lan thích nghe Tuấn kể về cuối tuần ở Nam Định." },
      { id: "r3", type: "choice", prompt: "What does Lan ask Tuan to do?",
        options: ["Book a table for the team", "Bring food from home", "Tell her about food he doesn't eat", "Invite Hoa and Minh"],
        answer: 2, explanation: "“Please tell me if there is any food you don't eat.” Chị Lan chỉ nhờ Tuấn cho biết món không ăn được. Hoa và Minh thường tự tham gia." }
    ]
  },

  grammar: {
    title: "Talking about the past: regular verbs",
    titleVi: "Kể chuyện đã xảy ra: quá khứ đơn với động từ có quy tắc",
    intro: "Khi trò chuyện với đồng nghiệp, ta hay hỏi và kể về cuối tuần. Dùng quá khứ đơn để nói về việc đã xảy ra và đã kết thúc. Với động từ có quy tắc, ta thêm -ed. Dạng này giống nhau cho mọi chủ ngữ (I, she, they…).",
    patterns: [
      { form: "Động từ + -ed", use: "Kể việc đã làm. Thường đi với yesterday, last weekend, on Saturday, two days ago.",
        examples: ["I visited my grandparents last weekend.", "She watched a movie on Sunday."] },
      { form: "Động từ tận cùng -e → thêm -d; tận cùng phụ âm + y → bỏ y, thêm -ied", use: "Quy tắc chính tả khi thêm đuôi.",
        examples: ["live → lived, relax → relaxed", "study → studied, carry → carried"] },
      { form: "Động từ ngắn: phụ âm + nguyên âm + phụ âm → gấp đôi phụ âm cuối", use: "Chỉ dùng cho động từ một âm tiết như stop, plan, drop.",
        examples: ["The bus stopped for an hour.", "We planned the lunch together."] },
      { form: "How was your weekend? – It was + tính từ", use: "Hỏi thăm cuối tuần hoặc chuyến đi, và trả lời ngắn gọn.",
        examples: ["How was your weekend? – It was relaxing.", "How was the trip? – It was tiring."] }
    ],
    mistakes: [
      { wrong: "I visit my grandparents last weekend.", right: "I visited my grandparents last weekend.", note: "Có “last weekend” (việc đã qua) thì động từ phải ở quá khứ." },
      { wrong: "The bus stoped in a traffic jam.", right: "The bus stopped in a traffic jam.", note: "stop là động từ ngắn: gấp đôi p rồi thêm -ed." },
      { wrong: "She studyed for the test.", right: "She studied for the test.", note: "Phụ âm + y: bỏ y, thêm -ied." },
      { wrong: "How is your weekend?", right: "How was your weekend?", note: "Cuối tuần đã qua nên dùng was, không dùng is." }
    ],
    tip: "Trong small talk, đừng trả lời cụt như “Good.” Hãy thêm một việc bạn đã làm: “It was nice. I visited my hometown.” Câu thứ hai giúp cuộc trò chuyện tiếp tục và đồng nghiệp thấy bạn thân thiện."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "The bus was very slow at ___, so my commute took an hour.",
      options: ["rush hour", "a hobby", "the pantry", "small talk"],
      answer: 0, explanation: "Rush hour = giờ cao điểm, lúc đường đông nên đi chậm. Các lựa chọn còn lại không chỉ thời điểm." },
    { id: "p2", type: "gap", prompt: "Cooking and painting are my ___.",
      options: ["hometowns", "hobbies", "commutes", "pantries"],
      answer: 1, explanation: "Hobby = sở thích; số nhiều là hobbies (y → ies). Nấu ăn và vẽ là sở thích, không phải quê hay phòng pha trà." },
    { id: "p3", type: "gap", prompt: "Last weekend I ___ my grandparents in Nam Dinh.",
      options: ["visit", "visits", "visited", "visiting"],
      answer: 2, explanation: "“Last weekend” là việc đã qua nên dùng quá khứ: visited." },
    { id: "p4", type: "gap", prompt: "Last Sunday she ___ in the park for an hour.",
      options: ["walk", "walks", "walking", "walked"],
      answer: 3, explanation: "“Last Sunday” là quá khứ: walk + ed = walked. Walks chỉ thói quen hiện tại." },
    { id: "p5", type: "gap", prompt: "Yesterday the bus ___ in a traffic jam.",
      options: ["stoped", "stopped", "stops", "stopping"],
      answer: 1, explanation: "stop là động từ ngắn: gấp đôi p rồi thêm -ed = stopped. “Stoped” sai chính tả; “stops” là hiện tại." },
    { id: "p6", type: "gap", prompt: "He ___ for his English test last night.",
      options: ["studyed", "studys", "studied", "studing"],
      answer: 2, explanation: "Phụ âm + y: bỏ y, thêm -ied = studied." },
    { id: "p7", type: "choice", context: "A colleague asks: “How was your weekend?”", prompt: "Which is the best answer?",
      options: ["I am an HR Assistant.", "It is on Friday.", "I am fine, thank you.", "It was relaxing. I stayed home and cooked."],
      answer: 3, explanation: "How was your weekend? hỏi về cuối tuần đã qua, nên trả lời bằng It was + tính từ và kể việc đã làm. “I am fine” trả lời cho How are you?" },
    { id: "p8", type: "choice", prompt: "In which word is “-ed” pronounced /ɪd/?",
      options: ["watched", "played", "painted", "cleaned"],
      answer: 2, explanation: "Painted kết thúc bằng /t/ nên -ed đọc /ɪd/: /ˈpeɪntɪd/. Watched đọc /t/; played và cleaned đọc /d/." },
    { id: "p9", type: "choice", prompt: "In which word is “-ed” pronounced /t/?",
      options: ["painted", "watched", "played", "cleaned"],
      answer: 1, explanation: "Watched có âm /tʃ/ (không rung) trước -ed nên đọc /t/: /wɑːtʃt/. Painted đọc /ɪd/; played và cleaned đọc /d/." },
    { id: "p10", type: "gap", prompt: "A: ___ was your weekend? B: It was relaxing.",
      options: ["How", "Who", "Where", "When"],
      answer: 0, explanation: "Hỏi cảm nhận về cuối tuần: How was your weekend? Who, Where, When hỏi về người, nơi chốn, thời gian." }
  ],

  writing: {
    title: "Accept the lunch invitation",
    task: "Bạn là Tuấn. Hãy viết email trả lời chị Lan (50–90 từ).",
    requirements: [
      "Mở đầu bằng lời chào (Dear …).",
      "Cảm ơn chị Lan vì lời mời.",
      "Nhận lời ăn trưa vào thứ Sáu, 12:00.",
      "Kể một việc bạn đã làm cuối tuần qua, dùng động từ quá khứ có đuôi -ed.",
      "Hỏi chị Lan một câu bắt đầu bằng How was…?",
      "Kết thúc email và ký tên."
    ],
    minWords: 50,
    maxWords: 90,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Dear …)", pattern: "\\bdear\\b" },
      { label: "Có lời cảm ơn", pattern: "\\bthank" },
      { label: "Nhắc tới thứ Sáu và giờ 12:00", pattern: "friday.*(12[:.]00|twelve|noon)|(12[:.]00|twelve|noon).*friday" },
      { label: "Có động từ quá khứ có quy tắc (-ed)", pattern: "\\b[a-z]{3,}ed\\b" },
      { label: "Có câu hỏi How was …?", pattern: "how was" },
      { label: "Có lời kết (Best regards …)", pattern: "regards|sincerely|best wishes" }
    ],
    model: [
      "Dear Ms. Lan,",
      "Thank you for your email. I enjoyed our chat this morning, too. I would love to join the team lunch on Friday at 12:00. I eat everything, so there is no problem with the food.",
      "On Saturday, I walked around the market in Nam Dinh with my grandfather, and I cooked dinner for my family. How was your morning?",
      "Best regards,",
      "Tuan Nguyen"
    ]
  },

  review: {
    keyPhrases: [
      { en: "How was your weekend?", vi: "Cuối tuần của bạn thế nào?" },
      { en: "It was relaxing, thanks.", vi: "Cuối tuần thư giãn, cảm ơn bạn." },
      { en: "I visited my hometown.", vi: "Tôi về thăm quê." },
      { en: "I stayed home and cooked dinner.", vi: "Tôi ở nhà và nấu bữa tối." },
      { en: "The commute was tiring.", vi: "Quãng đường đi làm rất mệt." },
      { en: "Let's catch up over coffee.", vi: "Mình cùng uống cà phê và kể chuyện nhé." }
    ]
  }
});
