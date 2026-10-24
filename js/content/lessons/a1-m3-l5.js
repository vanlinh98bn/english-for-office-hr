/* =========================================================
   A1 · Module 3 (Everyday Office English) · Bài 5
   "Booking meeting rooms and appointments"
   Khuôn rút gọn cho A1: 8 từ, 8 câu luyện tập, bài đọc và bài viết ngắn.
   Nối tiếp bài 4: thứ Sáu 23/10/2026. Hoa đặt Room 301 cho thứ Hai 26/10 lúc 3 giờ chiều.
   (Mới: nhóm David họp thứ Hai 10:00 trong Room 301 - đã nói ở A1-M1 là họp thứ Hai 10:00.)
   Công ty Riverside Trading và các nhân vật đều là hư cấu.
   ========================================================= */
window.EOH.registerLesson({
  id: "a1-m3-l5",
  reviewStatus: "draft", // "draft" = bản nháp, chưa duyệt
  duration: "20–25 phút",
  scenario: "Sáng thứ Sáu, chị Hoa nhờ chị Mai đặt phòng họp cho thứ Hai tuần sau để gặp Peter về các hóa đơn. Phòng đã có người dùng lúc 10 giờ, Peter lại bận lúc 2 giờ, nên ba người tìm giờ khác.",

  objectives: [
    "Dùng can / can't để nói khả năng hoặc phòng còn trống: I can come. / I can't come at two.",
    "Hỏi và xin phép đặt phòng: Can I book a room? / Can we have it then?",
    "Đề nghị giờ khác bằng How about…? và rủ làm gì bằng Let's…",
    "Phân biệt cách đọc can (yếu /kən/) và can't (mạnh /kænt/).",
    "Viết tin nhắn ngắn để đặt phòng họp và đề nghị giờ."
  ],

  vocabulary: [
    { word: "book", ipa: "/bʊk/", pos: "verb", meaning: "đặt trước (phòng, lịch)",
      example: "Can I book a room?", exampleVi: "Tôi đặt một phòng được không?" },
    { word: "appointment", ipa: "/əˈpɔɪntmənt/", pos: "noun", meaning: "cuộc hẹn",
      example: "I have an appointment at three.", exampleVi: "Tôi có một cuộc hẹn lúc ba giờ." },
    { word: "calendar", ipa: "/ˈkæləndər/", pos: "noun", meaning: "lịch",
      example: "I'm writing it in the calendar.", exampleVi: "Tôi đang ghi nó vào lịch." },
    { word: "free", ipa: "/friː/", pos: "adjective", meaning: "rảnh, còn trống",
      example: "The room is free at three.", exampleVi: "Phòng còn trống lúc ba giờ." },
    { word: "screen", ipa: "/skriːn/", pos: "noun", meaning: "màn hình",
      example: "The room has a big screen.", exampleVi: "Phòng có một màn hình lớn." },
    { word: "cancel", ipa: "/ˈkænsəl/", pos: "verb", meaning: "hủy",
      example: "I can't come, so I need to cancel.", exampleVi: "Tôi không đến được nên tôi cần hủy." },
    { word: "laptop", ipa: "/ˈlæptɑːp/", pos: "noun", meaning: "máy tính xách tay",
      example: "Please bring your laptop.", exampleVi: "Vui lòng mang theo máy tính xách tay." },
    { word: "use", ipa: "/juːz/", pos: "verb", meaning: "dùng, sử dụng",
      example: "David's team is using the room.", exampleVi: "Nhóm David đang dùng phòng." }
  ],

  pronunciation: {
    groups: [
      {
        title: "can và can't",
        text: "Trong câu, can thường đọc yếu và ngắn /kən/. Còn can't đọc mạnh với âm /æ/ rõ và nhấn mạnh, đọc /kænt/. Nghe âm /æ/ rõ ràng và dài hơn thì đó là can't.",
        items: [
          { word: "I can come.", marked: "I kən COME.", note: "can yếu, nhấn động từ chính." },
          { word: "I can't come.", marked: "I CAN'T come.", note: "can't mạnh, nhấn vào can't." },
          { word: "can", marked: "/kæn/ hoặc /kən/", note: "Một mình: /kæn/. Trong câu: /kən/." },
          { word: "can't", marked: "/kænt/", note: "Luôn đọc rõ." }
        ]
      },
      {
        title: "Rủ và gợi ý",
        text: "Những cụm này dùng khi đề nghị giờ hoặc rủ làm gì. Đọc nối nhẹ.",
        items: [
          { word: "Let's", marked: "/lets/" },
          { word: "How about", marked: "/ˈhaʊ əˌbaʊt/" },
          { word: "free", marked: "/friː/" },
          { word: "o'clock", marked: "/əˈklɑːk/" }
        ]
      }
    ],
    sentences: [
      "I can come at three.",
      "I can't come at two.",
      "How about three o'clock?"
    ]
  },

  listening: {
    title: "Booking Room 301",
    setting: "Thứ Sáu 23/10, 9 giờ sáng, văn phòng David ở tầng 3. Hoa nói chuyện với chị Mai, rồi Peter đến.",
    speakers: { hoa: "Hoa (Accountant)", mai: "Mai (David's assistant)", peter: "Peter (Sales)" },
    lines: [
      { s: "hoa", text: "Good morning, Mai. Can I book a room for next week? I'd like to meet Peter about the Sales invoices.",
        vi: "Chào buổi sáng, Mai. Tôi đặt một phòng cho tuần sau được không? Tôi muốn gặp Peter về các hóa đơn của nhóm Kinh doanh." },
      { s: "mai", text: "Of course. Which day?",
        vi: "Được chứ. Ngày nào?" },
      { s: "hoa", text: "How about Monday at ten? We need Room three-oh-one for one hour.",
        vi: "Thứ Hai lúc mười giờ thì sao? Chúng tôi cần phòng ba-không-một trong một giờ." },
      { s: "mai", text: "Sorry, you can't have it at ten. David's team is using it.",
        vi: "Xin lỗi, chị không dùng được lúc mười giờ. Nhóm David đang dùng phòng." },
      { s: "hoa", text: "OK. Let's try two o'clock. Can we have it then?",
        vi: "Được. Ta thử hai giờ nhé. Lúc đó chúng tôi dùng được không?" },
      { s: "mai", text: "Yes, you can. It's free from two to three.",
        vi: "Được. Phòng trống từ hai đến ba giờ." },
      { s: "peter", text: "Hi Mai, hi Hoa. I can't come at two o'clock. I have a call with a customer.",
        vi: "Chào Mai, chào Hoa. Hai giờ tôi không đến được. Tôi có một cuộc gọi với khách hàng." },
      { s: "hoa", text: "How about three o'clock, Peter?",
        vi: "Ba giờ thì sao, Peter?" },
      { s: "mai", text: "Yes, it's free from three to four. I'm writing it in the calendar now.",
        vi: "Được, phòng trống từ ba đến bốn giờ. Bây giờ tôi đang ghi vào lịch." },
      { s: "peter", text: "That's good. I can come at three.",
        vi: "Tốt rồi. Ba giờ tôi đến được." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "Why can't Hoa have Room 301 at ten o'clock on Monday?",
        options: ["It is broken.", "David's team is using it.", "Peter is using it.", "It is closed on Monday."],
        answer: 1, explanation: "Mai nói: “you can't have it at ten. David's team is using it.” – nhóm David đang dùng phòng lúc mười giờ." },
      { id: "l2", type: "choice", prompt: "Why can't Peter come at two o'clock?",
        options: ["He is at lunch.", "He has a meeting with David.", "He has a call with a customer.", "He is on holiday."],
        answer: 2, explanation: "Peter nói: “I can't come at two o'clock. I have a call with a customer.” – hai giờ anh có cuộc gọi với khách hàng." },
      { id: "l3", type: "choice", prompt: "What time do they choose for the meeting?",
        options: ["Ten o'clock", "Two o'clock", "Four o'clock", "Three o'clock"],
        answer: 3, explanation: "Hoa đề nghị “How about three o'clock?”, Mai nói phòng trống từ ba đến bốn giờ và Peter đồng ý: “I can come at three.”" }
    ]
  },

  reading: {
    title: "Your room booking",
    intro: "Sáng thứ Sáu, chị Mai gửi email xác nhận phòng cho chị Hoa. Đọc và tìm ngày, giờ, phòng và việc cần chuẩn bị.",
    email: {
      from: "Mai Le <mai.le@riverside-trading.example>",
      to: "Hoa Tran",
      date: "Friday, 23 October",
      subject: "Your room booking",
      greeting: "Hi Hoa,",
      paragraphs: [
        "Your room is booked. Here is the information."
      ],
      list: [
        "Date: Monday, 26 October",
        "Time: 3:00 p.m. – 4:00 p.m.",
        "Place: Room 301",
        "Who: you and Peter"
      ],
      after: [
        "The room has a big screen, but it doesn't have computers. Please bring your laptop."
      ],
      closing: "Best wishes,",
      signature: ["Mai Le", "Assistant to David Brown"]
    },
    glossary: [
      { term: "booked", vi: "đã được đặt" },
      { term: "information", vi: "thông tin" },
      { term: "bring", vi: "mang theo" },
      { term: "doesn't have", vi: "không có" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "When is the meeting?",
        options: ["Friday, 23 October at 3:00 p.m.", "Monday, 26 October at 10:00 a.m.", "Monday, 26 October at 2:00 p.m.", "Monday, 26 October at 3:00 p.m."],
        answer: 3, explanation: "“Date: Monday, 26 October” và “Time: 3:00 p.m. – 4:00 p.m.” – họp thứ Hai 26/10 lúc 3 giờ chiều. 10 giờ và 2 giờ đã không dùng được." },
      { id: "r2", type: "choice", prompt: "Which room is booked?",
        options: ["Room 301", "Room 205", "Meeting Room 2", "David's office"],
        answer: 0, explanation: "“Place: Room 301” – phòng 301 (phòng họp nhóm)." },
      { id: "r3", type: "choice", prompt: "What should Hoa bring?",
        options: ["A printer", "A scanner", "Her laptop", "Some paper"],
        answer: 2, explanation: "“The room has a big screen, but it doesn't have computers. Please bring your laptop.” – phòng không có máy tính, nên cần mang máy tính xách tay." }
    ]
  },

  grammar: {
    title: "can / can't and Let's… / How about…?",
    titleVi: "Can, can't (khả năng, còn trống) và rủ, gợi ý",
    intro: "Can nói điều có thể làm hoặc phòng còn trống. Can't nói điều không thể làm. Let's và How about dùng để đề nghị làm gì hoặc đề nghị giờ khác.",
    patterns: [
      { form: "I / You / He / We + can + động từ", use: "Có thể làm, hoặc có thể dùng. Can không đổi theo ngôi và không thêm to.",
        examples: ["I can come at three.", "You can have the room at two."] },
      { form: "I / You / He / We + can't + động từ", use: "Không thể làm. Can't = cannot.",
        examples: ["I can't come at two o'clock.", "You can't have it at ten."] },
      { form: "Can + chủ ngữ + động từ…? – Yes, I can. / No, I can't.", use: "Hỏi xem có thể làm không và trả lời ngắn.",
        examples: ["Can we have it then? – Yes, you can.", "Can Peter come? – No, he can't."] },
      { form: "Let's + động từ / How about + giờ hoặc danh từ?", use: "Rủ làm gì hoặc đề nghị giờ khác.",
        examples: ["Let's try two o'clock.", "How about three o'clock?"] }
    ],
    mistakes: [
      { wrong: "He can to come at three.", right: "He can come at three.", note: "Sau can là động từ nguyên mẫu, không có to." },
      { wrong: "She cans come.", right: "She can come.", note: "Can không thêm -s ở ngôi thứ ba." },
      { wrong: "Let's to meet at two.", right: "Let's meet at two.", note: "Sau Let's là động từ nguyên mẫu, không có to." },
      { wrong: "I no can come at two.", right: "I can't come at two.", note: "Phủ định của can là can't, không phải no can." }
    ],
    tip: "Khi từ chối lịch hẹn, nói lý do và đề nghị giờ khác. Ví dụ: “I can't come at two. I have a call. How about three?” Như vậy nghe lịch sự và hữu ích."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "I ___ come at two o'clock. I have a call with a customer.",
      options: ["can", "can't", "cans", "am can"],
      answer: 1, explanation: "Có cuộc gọi với khách hàng nghĩa là không thể đến, nên dùng can't. “can” trái nghĩa với lý do, còn “cans” và “am can” sai ngữ pháp." },
    { id: "p2", type: "gap", prompt: "Room 301 is free on Monday. We ___ use it.",
      options: ["can", "can't", "don't can", "cans"],
      answer: 0, explanation: "Phòng còn trống nên có thể dùng: We can use it. “can't” trái nghĩa, “don't can” và “cans” sai ngữ pháp." },
    { id: "p3", type: "gap", prompt: "___ meet at three o'clock.",
      options: ["Let's to", "Lets", "Let me to", "Let's"],
      answer: 3, explanation: "Mẫu câu rủ là Let's + động từ nguyên mẫu: Let's meet at three. Không thêm to, và phải có dấu nháy ('s)." },
    { id: "p4", type: "gap", prompt: "How about ___ at three?",
      options: ["meet", "to meets", "meeting", "met"],
      answer: 2, explanation: "Sau How about dùng danh từ hoặc V-ing: How about meeting at three? Hoặc rút gọn: How about three o'clock?" },
    { id: "p5", type: "choice", prompt: "Which sentence is correct?",
      options: ["She can come.", "She can to come.", "She cans come.", "She can comes."],
      answer: 0, explanation: "Can + động từ nguyên mẫu, không đổi theo ngôi: She can come. Không thêm to, không thêm -s." },
    { id: "p6", type: "choice", context: "A: Can you come at three?", prompt: "B cannot come. What is the best answer?",
      options: ["No, I don't can.", "No, I not can.", "No, I can't to.", "No, I can't. I have a meeting."],
      answer: 3, explanation: "Từ chối đúng: No, I can't. Có thể thêm lý do. Các lựa chọn còn lại sai ngữ pháp." },
    { id: "p7", type: "choice", prompt: "In the sentence “I can come at three”, how do we usually say “can”?",
      options: ["Strong and long: /kæn/", "Weak and short: /kən/"],
      answer: 1, explanation: "Trong câu khẳng định, can đọc yếu và ngắn /kən/. Chỉ can't mới đọc mạnh và rõ /kænt/." },
    { id: "p8", type: "choice", prompt: "Which sentence suggests another time?",
      options: ["Who is free?", "What is your room?", "How about three o'clock?", "Where is the screen?"],
      answer: 2, explanation: "How about three o'clock? là câu gợi ý giờ khác. Who, What và Where hỏi người, vật, nơi chốn." }
  ],

  writing: {
    title: "Booking a room",
    task: "Bạn là Hoa. Hãy viết tin nhắn cho chị Mai để đặt phòng cho một buổi luyện máy tính. Đề nghị một giờ, nói một ngày bạn không dùng được, và rủ bắt đầu (25–50 từ).",
    requirements: [
      "Chào chị Mai.",
      "Hỏi Can I book Room 205 …?",
      "Đề nghị giờ bằng How about…?",
      "Nói một ngày bạn không dùng được: I can't…",
      "Rủ bắt đầu bằng Let's…, rồi cảm ơn và ký tên."
    ],
    minWords: 25,
    maxWords: 50,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Hi / Hello / Dear)", pattern: "\\b(hi|hello|dear)\\b" },
      { label: "Có câu hỏi Can I…?", pattern: "can i[^?]*\\?" },
      { label: "Có câu hỏi How about…?", pattern: "how about[^?]*\\?" },
      { label: "Có can't / cannot", pattern: "can't|cannot|can not" },
      { label: "Có Let's", pattern: "let's" },
      { label: "Có lời cảm ơn (Thanks / Thank you)", pattern: "thanks|thank you" }
    ],
    model: [
      "Hi Mai,",
      "Can I book Room 205 for next Wednesday? How about ten o'clock? I can't use the room on Tuesday. Let's start at ten and finish at eleven. Thanks!",
      "Hoa"
    ]
  },

  review: {
    keyPhrases: [
      { en: "Can I book a room for next week?", vi: "Tôi đặt một phòng cho tuần sau được không?" },
      { en: "I can come at three. / I can't come at two.", vi: "Ba giờ tôi đến được. / Hai giờ tôi không đến được." },
      { en: "How about three o'clock?", vi: "Ba giờ thì sao?" },
      { en: "Let's try two o'clock.", vi: "Ta thử hai giờ nhé." },
      { en: "The room is free from three to four.", vi: "Phòng trống từ ba đến bốn giờ." },
      { en: "Please bring your laptop.", vi: "Vui lòng mang theo máy tính xách tay." }
    ]
  }
});
