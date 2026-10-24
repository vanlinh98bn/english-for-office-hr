/* =========================================================
   A2 · Module 1 (Office Communication) · Bài 2
   "Making and changing appointments"
   Nối tiếp: thứ Ba 10/11/2026. Tuấn đổi lịch gặp (check-in) với anh Hải.
   Ngữ pháp: hiện tại tiếp diễn chỉ lịch đã hẹn (I'm meeting the supplier on Monday)
   Phát âm: dạng rút gọn I'm / we're và trọng âm từ
   Công ty Riverside Trading và các nhân vật đều là hư cấu.
   ========================================================= */
window.EOH.registerLesson({
  id: "a2-m1-l2",
  reviewStatus: "draft", // "draft" = bản nháp, chưa duyệt
  duration: "35–45 phút",
  scenario: "Thứ Ba 10/11, Tuấn (HR Assistant) thấy buổi gặp định kỳ với anh Hải vào thứ Hai 16/11 lúc 10:00 bị trùng giờ với một cuộc gặp nhà cung cấp. Tuấn trao đổi với anh Hải để đổi lịch, rồi gửi email xác nhận giờ mới.",

  objectives: [
    "Hiểu và dùng 10 từ vựng về đặt lịch, đổi lịch và xác nhận lịch hẹn.",
    "Nghe hiểu cuộc trao đổi đổi giờ hẹn và nắm giờ mới.",
    "Đọc email xác nhận lịch hẹn mới và tìm đúng thông tin: ngày, giờ, phòng, người tham gia.",
    "Nói về lịch đã sắp xếp bằng hiện tại tiếp diễn (I'm meeting…, We're having…) và đề nghị giờ khác (How about…?).",
    "Viết email xin đổi lịch hẹn một cách lịch sự và đề nghị giờ mới."
  ],

  vocabulary: [
    { word: "reschedule", ipa: "/ˌriːˈskedʒuːl/", pos: "verb", meaning: "đổi sang thời gian khác",
      example: "Can we reschedule our appointment?", exampleVi: "Chúng ta đổi lịch hẹn được không?" },
    { word: "postpone", ipa: "/poʊstˈpoʊn/", pos: "verb", meaning: "hoãn lại sang lúc sau",
      example: "We postponed the interview until next week.", exampleVi: "Chúng tôi hoãn buổi phỏng vấn sang tuần sau." },
    { word: "clash", ipa: "/klæʃ/", pos: "noun / verb", meaning: "trùng giờ, xung đột lịch",
      example: "There is a clash between the two appointments.", exampleVi: "Hai cuộc hẹn bị trùng giờ." },
    { word: "double-booked", ipa: "/ˌdʌbəl ˈbʊkt/", pos: "adjective", meaning: "bị xếp hai việc cùng một lúc",
      example: "I'm sorry, I'm double-booked at ten o'clock.", exampleVi: "Xin lỗi, tôi bị xếp hai việc cùng lúc lúc mười giờ." },
    { word: "confirm", ipa: "/kənˈfɜːrm/", pos: "verb", meaning: "xác nhận",
      example: "Please confirm the time by email.", exampleVi: "Vui lòng xác nhận giờ hẹn qua email." },
    { word: "invitation", ipa: "/ˌɪnvɪˈteɪʃən/", pos: "noun", meaning: "thư mời, lời mời (trong lịch)",
      example: "I'm sending you a calendar invitation.", exampleVi: "Tôi đang gửi cho bạn thư mời trong lịch." },
    { word: "convenient", ipa: "/kənˈviːniənt/", pos: "adjective", meaning: "thuận tiện, phù hợp",
      example: "Is Tuesday at eleven convenient for you?", exampleVi: "Thứ Ba lúc mười một giờ có thuận tiện cho bạn không?" },
    { word: "slot", ipa: "/slɑːt/", pos: "noun", meaning: "khoảng thời gian còn trống trong lịch",
      example: "There is a free slot at three o'clock.", exampleVi: "Có một khoảng trống lúc ba giờ." },
    { word: "supplier", ipa: "/səˈplaɪər/", pos: "noun", meaning: "nhà cung cấp",
      example: "I'm meeting the stationery supplier on Monday.", exampleVi: "Tôi gặp nhà cung cấp văn phòng phẩm vào thứ Hai." },
    { word: "reminder", ipa: "/rɪˈmaɪndər/", pos: "noun", meaning: "lời nhắc, tin nhắc lịch",
      example: "I'm sending a reminder on Monday afternoon.", exampleVi: "Tôi gửi tin nhắc vào chiều thứ Hai." }
  ],

  pronunciation: {
    groups: [
      {
        title: "Dạng rút gọn khi nói về lịch",
        text: "Khi nói về lịch đã hẹn, người bản xứ gần như luôn rút gọn: I am → I'm, we are → we're. Nói đầy đủ nghe nặng và chậm.",
        items: [
          { word: "I'm", marked: "I'm", note: "/aɪm/ – I'm meeting Lan." },
          { word: "we're", marked: "we're", note: "/wɪr/ – We're having lunch." },
          { word: "you're", marked: "you're", note: "/jʊr/ – You're meeting the supplier." },
          { word: "he's", marked: "he's", note: "/hiːz/ – He's visiting the warehouse." }
        ]
      },
      {
        title: "Trọng âm của từ",
        text: "Âm tiết in hoa là âm đọc to và dài hơn. Nói đúng trọng âm giúp người nghe hiểu ngay.",
        items: [
          { word: "appointment", marked: "ap·POINT·ment" },
          { word: "convenient", marked: "con·VE·nient" },
          { word: "reschedule", marked: "re·SCHED·ule" },
          { word: "confirm", marked: "con·FIRM" }
        ]
      }
    ],
    sentences: [
      "I'm meeting the supplier on Monday.",
      "Can we reschedule our appointment?",
      "Is Tuesday at eleven convenient for you?"
    ]
  },

  listening: {
    title: "Changing the check-in",
    setting: "Chiều thứ Ba 10/11. Tuấn đến bàn anh Hải để đổi giờ buổi gặp định kỳ.",
    speakers: { tuan: "Tuan (HR Assistant)", hai: "Mr. Hai (line manager)" },
    lines: [
      { s: "tuan", text: "Excuse me, Mr. Hai. Do you have a minute?",
        vi: "Xin lỗi anh Hải. Anh có rảnh một phút không ạ?" },
      { s: "hai", text: "Sure, Tuan. What's up?",
        vi: "Được chứ, Tuấn. Có chuyện gì vậy?" },
      { s: "tuan", text: "Our check-in is next Monday, the sixteenth, at ten o'clock. But I see you're meeting the stationery supplier then.",
        vi: "Buổi gặp định kỳ của mình là thứ Hai tuần sau, ngày mười sáu, lúc mười giờ. Nhưng em thấy anh đang hẹn gặp nhà cung cấp văn phòng phẩm lúc đó." },
      { s: "hai", text: "You're right! We have a clash. I'm meeting the supplier at ten. Can we reschedule?",
        vi: "Em nói đúng! Bị trùng giờ rồi. Anh gặp nhà cung cấp lúc mười giờ. Mình đổi lịch được không?" },
      { s: "tuan", text: "Of course. How about Monday at two o'clock?",
        vi: "Dạ được. Thứ Hai lúc hai giờ chiều thì sao ạ?" },
      { s: "hai", text: "Hmm, at two I'm visiting the warehouse with the Logistics team. How about Tuesday?",
        vi: "Ừm, lúc hai giờ anh đi thăm kho cùng nhóm Logistics. Thứ Ba thì sao?" },
      { s: "tuan", text: "On Tuesday at nine-thirty, we have the team meeting in Room three-oh-one. Is eleven o'clock convenient?",
        vi: "Thứ Ba lúc chín giờ rưỡi, mình có họp nhóm ở Room 301. Mười một giờ có thuận tiện không ạ?" },
      { s: "hai", text: "Tuesday at eleven is fine. I'm not doing anything then.",
        vi: "Thứ Ba mười một giờ được. Lúc đó anh không làm gì khác." },
      { s: "tuan", text: "Great. I'm booking Room three-oh-one now, and I'm sending you a new invitation this afternoon.",
        vi: "Tuyệt ạ. Em đang đặt Room 301 và chiều nay em sẽ gửi anh thư mời mới." },
      { s: "hai", text: "Thanks. Please send Lan a copy too. She's joining us for the first ten minutes.",
        vi: "Cảm ơn em. Em gửi cho Lan một bản nữa nhé. Chị ấy tham gia mười phút đầu với mình." },
      { s: "tuan", text: "No problem. I'm also sending a reminder on Monday afternoon.",
        vi: "Dạ không sao. Em cũng sẽ gửi tin nhắc vào chiều thứ Hai ạ." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "Why can't Mr. Hai meet Tuan on Monday at ten?",
        options: ["He is meeting a supplier.", "He is on vacation.", "He is having lunch with Lan.", "He is interviewing a candidate."],
        answer: 0, explanation: "Anh Hải nói: “I'm meeting the supplier at ten.” Vì vậy hai buổi bị trùng giờ." },
      { id: "l2", type: "choice", prompt: "Why is Monday at two o'clock a problem?",
        options: ["He is leaving the office.", "He is meeting a supplier.", "He is in the team meeting.", "He is visiting the warehouse."],
        answer: 3, explanation: "“At two I'm visiting the warehouse with the Logistics team.” Gặp nhà cung cấp là lúc mười giờ; họp nhóm là thứ Ba." },
      { id: "l3", type: "choice", prompt: "What is the new time for the check-in?",
        options: ["Monday at two", "Tuesday at eleven", "Tuesday at nine-thirty", "Wednesday at ten"],
        answer: 1, explanation: "“Tuesday at eleven is fine.” Chín giờ rưỡi thứ Ba là giờ họp nhóm nên không dùng được." }
    ]
  },

  reading: {
    title: "Confirming the new appointment",
    intro: "Email Tuấn gửi anh Hải vào chiều thứ Ba, sau khi hai người đã thống nhất giờ mới. Đọc và tìm thông tin về lịch hẹn.",
    email: {
      from: "Tuan Nguyen <tuan.nguyen@riverside-trading.example>",
      to: "Mr. Hai",
      date: "Tuesday, 10 November",
      subject: "New time for our check-in",
      greeting: "Dear Mr. Hai,",
      paragraphs: [
        "Thank you for your help today. I am writing to confirm our new appointment. We are not meeting on Monday, 16 November, because you are meeting the supplier that morning.",
        "Our new time is Tuesday, 17 November, at 11:00 in Room 301. I am booking the room today, and I am sending a calendar invitation this afternoon. Lan is joining us for the first ten minutes."
      ],
      list: [],
      after: [
        "If this time is not convenient, please tell me before Friday. I am also sending you a reminder on Monday afternoon."
      ],
      closing: "Best regards,",
      signature: ["Tuan Nguyen", "HR Assistant, Riverside Trading"]
    },
    glossary: [
      { term: "check-in", vi: "buổi gặp định kỳ để trao đổi tiến độ" },
      { term: "I am writing to confirm", vi: "tôi viết email này để xác nhận" },
      { term: "calendar invitation", vi: "thư mời trong lịch điện tử" },
      { term: "stationery", vi: "văn phòng phẩm (giấy, bút…)" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "Why is the check-in not on Monday?",
        options: ["Room 301 is closed.", "Mr. Hai is on vacation.", "Tuan is attending training.", "Mr. Hai is meeting the supplier."],
        answer: 3, explanation: "“We are not meeting on Monday, 16 November, because you are meeting the supplier that morning.”" },
      { id: "r2", type: "choice", prompt: "Where is the new appointment?",
        options: ["In Room 205", "In Room 301", "In Meeting Room 2", "In the staff canteen"],
        answer: 1, explanation: "“Our new time is Tuesday, 17 November, at 11:00 in Room 301.”" },
      { id: "r3", type: "choice", prompt: "Who is joining for the first ten minutes?",
        options: ["Sam", "Peter", "Lan", "Hoa"],
        answer: 2, explanation: "“Lan is joining us for the first ten minutes.”" }
    ]
  },

  grammar: {
    title: "Present continuous for arrangements",
    titleVi: "Hiện tại tiếp diễn để nói về lịch đã hẹn",
    intro: "Ngoài việc đang diễn ra, hiện tại tiếp diễn (am / is / are + V-ing) còn dùng cho lịch đã sắp xếp trong tương lai gần. Lúc đó câu luôn có thời gian cụ thể (on Monday, at two o'clock, this afternoon). Đây là cách nói tự nhiên nhất khi đặt và đổi lịch hẹn.",
    patterns: [
      { form: "I'm / He's / We're + V-ing + thời gian", use: "Nói về việc đã hẹn, đã có trong lịch.",
        examples: ["I'm meeting the supplier on Monday.", "We're having the check-in on Tuesday at eleven."] },
      { form: "I'm not / He isn't + V-ing", use: "Nói lúc nào mình không bận hoặc không làm việc gì.",
        examples: ["I'm not doing anything on Tuesday.", "He isn't visiting the warehouse on Friday."] },
      { form: "Are you + V-ing + thời gian …?", use: "Hỏi người khác có lịch gì chưa.",
        examples: ["Are you doing anything on Tuesday?", "Is Lan joining us at eleven?"] },
      { form: "How about…? / Can we move it to…? / Is … convenient?", use: "Đề nghị đổi sang giờ khác một cách lịch sự.",
        examples: ["How about Tuesday at eleven?", "Can we move it to Thursday morning?"] }
    ],
    mistakes: [
      { wrong: "I meeting the supplier on Monday.", right: "I'm meeting the supplier on Monday.", note: "Thiếu am. Cần am / is / are trước V-ing." },
      { wrong: "We are meet at ten tomorrow.", right: "We are meeting at ten tomorrow.", note: "Sau am / is / are phải là V-ing, không dùng động từ nguyên mẫu." },
      { wrong: "Are you meet Lan on Friday?", right: "Are you meeting Lan on Friday?", note: "Câu hỏi: Are + chủ ngữ + V-ing." },
      { wrong: "Can we moving it to Tuesday?", right: "Can we move it to Tuesday?", note: "Sau Can we dùng động từ nguyên mẫu, không thêm -ing." }
    ],
    tip: "Khi bạn nói “I'm meeting the supplier on Monday”, người nghe hiểu rằng lịch này đã chắc chắn. Vì vậy nên nêu rõ giờ hoặc ngày để người kia biết ngay có bị trùng lịch hay không."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "The two appointments are at the same time. We have a ___.",
      options: ["slot", "clash", "reminder", "supplier"],
      answer: 1, explanation: "Clash = hai việc trùng giờ. Slot là khoảng trống trong lịch, reminder là lời nhắc, supplier là nhà cung cấp." },
    { id: "p2", type: "gap", prompt: "Please ___ that you are coming by replying to this email.",
      options: ["postpone", "clash", "relax", "confirm"],
      answer: 3, explanation: "Confirm = xác nhận. Bạn trả lời email để xác nhận sẽ đến. Postpone là hoãn, nghĩa ngược lại." },
    { id: "p3", type: "gap", prompt: "I'm sorry, I'm ___ on Monday at ten. I have two appointments.",
      options: ["double-booked", "convenient", "postponed", "reminded"],
      answer: 0, explanation: "Double-booked = bị xếp hai việc cùng lúc. Dùng được để từ chối một lịch mới." },
    { id: "p4", type: "gap", prompt: "I ___ the supplier on Monday at ten.",
      options: ["am meet", "meeting", "am meeting", "meets"],
      answer: 2, explanation: "Lịch đã hẹn: am + V-ing = am meeting. “Meeting” thiếu am; “meets” sai với chủ ngữ I." },
    { id: "p5", type: "gap", prompt: "Lan ___ with Sam on Thursday at three.",
      options: ["are meeting", "is meeting", "meeting", "meet"],
      answer: 1, explanation: "Chủ ngữ Lan là số ít nên dùng is + V-ing: is meeting." },
    { id: "p6", type: "gap", prompt: "A: Are you ___ anything on Tuesday? B: No, I'm free.",
      options: ["do", "does", "doing", "did"],
      answer: 2, explanation: "Câu hỏi hiện tại tiếp diễn: Are you + V-ing = Are you doing…?" },
    { id: "p7", type: "choice", context: "Mr. Hai says: “I can't do Monday at ten. I'm meeting a supplier.”", prompt: "What is the best reply?",
      options: ["Yes, I do.", "It's nice to meet you.", "I have a reminder.", "How about Tuesday at eleven?"],
      answer: 3, explanation: "Khi giờ cũ không được, ta đề nghị giờ khác bằng How about…? Các câu còn lại không trả lời vấn đề đổi lịch." },
    { id: "p8", type: "choice", prompt: "Which sentence is NOT correct?",
      options: ["I'm sending the invitation now.", "She's meeting the supplier on Monday.", "We meeting at ten tomorrow.", "Are you doing anything on Friday?"],
      answer: 2, explanation: "“We meeting” thiếu are. Câu đúng: We are meeting at ten tomorrow." },
    { id: "p9", type: "choice", prompt: "Where is the main stress in “appointment”?",
      options: ["AP·point·ment", "ap·POINT·ment", "ap·point·MENT"],
      answer: 1, explanation: "Từ appointment có trọng âm ở âm tiết thứ hai: ap·POINT·ment." },
    { id: "p10", type: "gap", prompt: "Is Tuesday at eleven ___ for you?",
      options: ["convenient", "clash", "reschedule", "reminder"],
      answer: 0, explanation: "Is … convenient for you? = Thời gian đó có phù hợp với bạn không? Đây là câu hỏi lịch sự khi đề nghị giờ mới." }
  ],

  writing: {
    title: "Ask to change an appointment",
    task: "Bạn là Tuấn. Bạn có hẹn với Sam (IT Support) vào thứ Sáu lúc 10:00 nhưng không đến được. Viết email cho Sam để xin đổi lịch (50–90 từ).",
    requirements: [
      "Mở đầu bằng lời chào (Dear …).",
      "Nói bạn có hẹn với Sam vào thứ Sáu lúc 10:00.",
      "Giải thích ngắn gọn vì sao không đến được, dùng hiện tại tiếp diễn (I'm helping Lan…).",
      "Đề nghị giờ mới: thứ Hai lúc 15:00.",
      "Hỏi giờ mới có thuận tiện không (convenient).",
      "Cảm ơn, kết thúc email và ký tên."
    ],
    minWords: 50,
    maxWords: 90,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Dear …)", pattern: "\\bdear\\b" },
      { label: "Nhắc tới thứ Sáu (lịch cũ)", pattern: "friday" },
      { label: "Có hiện tại tiếp diễn (I'm … -ing)", pattern: "\\bi'?m \\w+ing\\b|\\bi am \\w+ing\\b" },
      { label: "Đề nghị giờ mới vào thứ Hai", pattern: "monday" },
      { label: "Hỏi thuận tiện không (convenient)", pattern: "convenient" },
      { label: "Có lời kết (Best regards …)", pattern: "regards|sincerely|best wishes" }
    ],
    model: [
      "Dear Sam,",
      "I am writing about our appointment on Friday at 10:00. I'm sorry, but I can't come because I'm helping Lan to prepare a workshop that morning.",
      "Can we reschedule? How about Monday at 15:00? Is that time convenient for you?",
      "Thank you for your help, and I am sorry for the change.",
      "Best regards,",
      "Tuan Nguyen"
    ]
  },

  review: {
    keyPhrases: [
      { en: "Can we reschedule our appointment?", vi: "Chúng ta đổi lịch hẹn được không?" },
      { en: "I'm meeting the supplier on Monday.", vi: "Tôi hẹn gặp nhà cung cấp vào thứ Hai." },
      { en: "How about Tuesday at eleven?", vi: "Thứ Ba lúc mười một giờ thì sao?" },
      { en: "Is that time convenient for you?", vi: "Giờ đó có thuận tiện cho bạn không?" },
      { en: "I'm sending you a new invitation.", vi: "Tôi đang gửi cho bạn thư mời mới." },
      { en: "I'm sorry, I'm double-booked.", vi: "Xin lỗi, tôi bị xếp hai việc cùng lúc." }
    ]
  }
});
