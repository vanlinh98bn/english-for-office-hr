/* =========================================================
   A1 · Module 4 (HR and Administrative Basics) · Bài 1
   "Personal information and forms"
   Khuôn rút gọn cho A1: 8 từ, 8 câu luyện tập, bài đọc và bài viết ngắn.
   Tuần làm việc thứ tư của chị Hoa: thứ Hai 26/10/2026, 9 giờ sáng, bàn làm việc của chị Lan.
   Nhân vật mới trong bài: bà Thu Tran (mẹ của chị Hoa, người liên hệ khẩn cấp, ở Hải Phòng).
   Địa chỉ mới của chị Hoa (12 Lang Street) là địa chỉ hư cấu.
   Công ty Riverside Trading và các nhân vật đều là hư cấu.
   ========================================================= */
window.EOH.registerLesson({
  id: "a1-m4-l1",
  reviewStatus: "draft", // "draft" = bản nháp, chưa duyệt
  duration: "20–25 phút",
  scenario: "Sáng thứ Hai, chị Lan mời chị Hoa đến bàn làm việc để hoàn thành hồ sơ nhân viên. Chị Lan hỏi về giấy tờ tùy thân, quốc tịch, địa chỉ, người liên hệ khẩn cấp và tài khoản ngân hàng để trả lương.",

  objectives: [
    "Dùng have / has để nói về giấy tờ và thông tin cá nhân (I have an ID card. / She has a phone.).",
    "Hỏi và trả lời ngắn: Do you have…? – Yes, I do. / No, I don't.",
    "Viết hoa đúng trong biểu mẫu: quốc tịch, tên người, tên đường, chữ I.",
    "Đọc đúng âm /h/ trong have, has, home và nhận ra chữ h câm trong hour.",
    "Viết tin nhắn ngắn gửi thông tin cá nhân cho phòng Nhân sự."
  ],

  vocabulary: [
    { word: "form", ipa: "/fɔːrm/", pos: "noun", meaning: "biểu mẫu, tờ khai",
      example: "Please fill in this form.", exampleVi: "Vui lòng điền vào biểu mẫu này." },
    { word: "nationality", ipa: "/ˌnæʃəˈnæləti/", pos: "noun", meaning: "quốc tịch",
      example: "My nationality is Vietnamese.", exampleVi: "Quốc tịch của tôi là Việt Nam." },
    { word: "address", ipa: "/ˈædres/", pos: "noun", meaning: "địa chỉ",
      example: "I have a new address.", exampleVi: "Tôi có địa chỉ mới." },
    { word: "emergency contact", ipa: "/ɪˈmɝːdʒənsi ˈkɑːntækt/", pos: "noun", meaning: "người liên hệ khẩn cấp",
      example: "My emergency contact is my mother.", exampleVi: "Người liên hệ khẩn cấp của tôi là mẹ tôi." },
    { word: "ID card", ipa: "/ˌaɪ ˈdiː kɑːrd/", pos: "noun", meaning: "thẻ căn cước, giấy tờ tùy thân",
      example: "Do you have your ID card?", exampleVi: "Bạn có mang thẻ căn cước không?" },
    { word: "bank account", ipa: "/ˈbæŋk əˌkaʊnt/", pos: "noun", meaning: "tài khoản ngân hàng",
      example: "I need your bank account number.", exampleVi: "Tôi cần số tài khoản ngân hàng của bạn." },
    { word: "fill in", ipa: "/ˌfɪl ˈɪn/", pos: "phrasal verb", meaning: "điền vào (biểu mẫu)",
      example: "I fill in the form at my desk.", exampleVi: "Tôi điền biểu mẫu ở bàn làm việc." },
    { word: "sign", ipa: "/saɪn/", pos: "verb", meaning: "ký tên",
      example: "Please sign here.", exampleVi: "Vui lòng ký tên ở đây." }
  ],

  pronunciation: {
    groups: [
      {
        title: "Âm /h/ ở đầu từ",
        text: "Âm /h/ là hơi thở nhẹ từ cổ họng, giống chữ “h” trong tiếng Việt “hà hơi”. Đừng đọc thành “kh”.",
        items: [
          { word: "have", marked: "/hæv/", note: "Mở miệng rộng như “e”, kết thúc bằng /v/." },
          { word: "has", marked: "/hæz/", note: "Cuối từ là /z/, không phải /s/." },
          { word: "home", marked: "/hoʊm/" },
          { word: "help", marked: "/help/" },
          { word: "hello", marked: "/həˈloʊ/", note: "Nhấn âm thứ hai: he-LLO." }
        ]
      },
      {
        title: "Chữ h câm",
        text: "Trong một số từ, chữ h không được đọc. Từ hour bắt đầu bằng nguyên âm nên dùng “an hour”.",
        items: [
          { word: "hour", marked: "/ˈaʊər/", note: "Không đọc chữ h: giống “ao-ơ”." },
          { word: "an hour", marked: "an /ˈaʊər/", note: "Nói “an hour”, không nói “a hour”." }
        ]
      }
    ],
    sentences: [
      "I have an ID card.",
      "She has a new address.",
      "Do you have an emergency contact?"
    ]
  },

  listening: {
    title: "Completing the employee form",
    setting: "Thứ Hai, 9 giờ sáng, bàn làm việc của chị Lan. Chị Lan và chị Hoa hoàn thành hồ sơ nhân viên.",
    speakers: { lan: "Lan (HR Officer)", hoa: "Hoa (accountant)" },
    lines: [
      { s: "lan", text: "Good morning, Hoa! Let's complete your employee form. Do you have your ID card?",
        vi: "Chào buổi sáng, Hoa! Chúng ta hoàn thành hồ sơ nhân viên của chị nhé. Chị có mang thẻ căn cước không?" },
      { s: "hoa", text: "Yes, I do. Here it is.",
        vi: "Có. Thẻ đây." },
      { s: "lan", text: "Thank you. What is your nationality?",
        vi: "Cảm ơn chị. Quốc tịch của chị là gì?" },
      { s: "hoa", text: "I'm Vietnamese.",
        vi: "Tôi là người Việt Nam." },
      { s: "lan", text: "Good. Do you have a new address?",
        vi: "Tốt. Chị có địa chỉ mới không?" },
      { s: "hoa", text: "Yes, I do. I have a new apartment near the office.",
        vi: "Có. Tôi có căn hộ mới gần văn phòng." },
      { s: "lan", text: "OK. Do you have an emergency contact? I need a name and a phone number.",
        vi: "Được. Chị có người liên hệ khẩn cấp không? Tôi cần tên và số điện thoại." },
      { s: "hoa", text: "Yes, my mother. She has a phone in Hai Phong. Her name is Thu Tran.",
        vi: "Có, là mẹ tôi. Mẹ có điện thoại ở Hải Phòng. Tên mẹ là Thu Trần." },
      { s: "lan", text: "Great. Please sign here. And do you have a bank account for payroll?",
        vi: "Tuyệt. Chị ký tên ở đây nhé. Và chị có tài khoản ngân hàng để nhận lương không?" },
      { s: "hoa", text: "Yes, I do. I have the account number here.",
        vi: "Có. Tôi có số tài khoản ở đây." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "What does Hoa show Lan first?",
        options: ["Her bank card", "Her ID card", "Her phone", "Her form"],
        answer: 1, explanation: "Lan hỏi “Do you have your ID card?” và Hoa trả lời “Yes, I do. Here it is.” – Hoa đưa thẻ căn cước." },
      { id: "l2", type: "choice", prompt: "Who is Hoa's emergency contact?",
        options: ["Her sister", "Her friend", "Her manager", "Her mother"],
        answer: 3, explanation: "Hoa nói: “Yes, my mother.” – người liên hệ khẩn cấp là mẹ của chị. Tên mẹ là Thu Tran." },
      { id: "l3", type: "choice", prompt: "What is Hoa's nationality?",
        options: ["Vietnamese", "Australian", "American", "Thai"],
        answer: 0, explanation: "Hoa nói: “I'm Vietnamese.” – chị là người Việt Nam. Chú ý: Vietnamese viết hoa chữ V." }
    ]
  },

  reading: {
    title: "Employee information form",
    intro: "Sáng thứ Hai, chị Lan gửi email nhắc chị Hoa chuẩn bị giấy tờ. Đọc và tìm giờ hẹn và những thứ cần mang.",
    email: {
      from: "Lan Pham <lan.pham@riverside-trading.example>",
      to: "Hoa Tran",
      date: "Monday, 26 October",
      subject: "Employee information form",
      greeting: "Hi Hoa,",
      paragraphs: [
        "Please come to my desk at 9:00 a.m. today. We'll complete your employee form. Please bring:"
      ],
      list: [
        "Your ID card",
        "Your address and nationality",
        "The name and phone number of your emergency contact"
      ],
      after: [
        "Do you have a bank account? Please bring the account number too."
      ],
      closing: "Thank you!",
      signature: ["Lan Pham", "HR Department"]
    },
    glossary: [
      { term: "bring", vi: "mang theo" },
      { term: "complete", vi: "hoàn thành" },
      { term: "phone number", vi: "số điện thoại" },
      { term: "account number", vi: "số tài khoản" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "What time is the meeting at Lan's desk?",
        options: ["At 8:00 a.m.", "At 8:30 a.m.", "At 9:00 a.m.", "At 9:30 a.m."],
        answer: 2, explanation: "“Please come to my desk at 9:00 a.m. today.” – hẹn lúc 9 giờ sáng. Họp nhóm 9 giờ 30 là vào thứ Ba." },
      { id: "r2", type: "choice", prompt: "What does Hoa need for the emergency contact?",
        options: ["Only a name", "A name and a phone number", "Only an address", "An email address"],
        answer: 1, explanation: "“The name and phone number of your emergency contact” – cần cả tên và số điện thoại, không chỉ tên." },
      { id: "r3", type: "choice", prompt: "What else should Hoa bring?",
        options: ["Her laptop", "Her photo", "Her passport", "Her bank account number"],
        answer: 3, explanation: "“Do you have a bank account? Please bring the account number too.” – mang thêm số tài khoản ngân hàng." }
    ]
  },

  grammar: {
    title: "have / has and Do you have…?",
    titleVi: "Have / has và câu hỏi Do you have…?",
    intro: "Have và has nghĩa là “có”. Ta dùng để nói về giấy tờ, thông tin, đồ vật. Trong biểu mẫu, cần viết hoa đúng: tên người, tên đường, quốc tịch và chữ I.",
    patterns: [
      { form: "I / you / we / they + have + danh từ", use: "Nói mình hoặc nhiều người có gì.",
        examples: ["I have an ID card.", "We have a new form."] },
      { form: "He / she / it + has + danh từ", use: "Với ngôi thứ ba số ít, have đổi thành has.",
        examples: ["She has a phone.", "Hoa has a new address."] },
      { form: "Do you have…? – Yes, I do. / No, I don't.", use: "Hỏi bạn có gì không. Trả lời ngắn dùng do / don't.",
        examples: ["Do you have a bank account?", "Yes, I do. / No, I don't."] },
      { form: "Viết hoa trong biểu mẫu", use: "Viết hoa tên người, tên đường, quốc tịch, tháng, thứ và chữ I.",
        examples: ["Nationality: Vietnamese", "Address: 12 Lang Street"] }
    ],
    mistakes: [
      { wrong: "She have a new phone.", right: "She has a new phone.", note: "Với she / he / it dùng has." },
      { wrong: "Do you has an ID card?", right: "Do you have an ID card?", note: "Sau Do you dùng have, không dùng has." },
      { wrong: "Nationality: vietnamese", right: "Nationality: Vietnamese", note: "Quốc tịch luôn viết hoa chữ cái đầu." },
      { wrong: "i have a new address.", right: "I have a new address.", note: "Chữ I luôn viết hoa; câu mở đầu cũng viết hoa." }
    ],
    tip: "Khi điền biểu mẫu, hãy viết tên đường và tên thành phố bằng chữ hoa đầu từ (Lang Street, Hai Phong). Đọc lại một lần trước khi ký tên."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "She ___ a new phone.",
      options: ["have", "has", "haves", "having"],
      answer: 1, explanation: "Với she dùng has: She has a new phone. “haves” không tồn tại." },
    { id: "p2", type: "gap", prompt: "Do you ___ an ID card?",
      options: ["has", "having", "have", "had"],
      answer: 2, explanation: "Sau Do you dùng động từ nguyên mẫu: Do you have…? “has” chỉ dùng sau he / she / it." },
    { id: "p3", type: "gap", prompt: "We ___ a meeting today.",
      options: ["has", "is", "are", "have"],
      answer: 3, explanation: "We đi với have: We have a meeting. “is” và “are” là động từ to be, không có nghĩa “có”." },
    { id: "p4", type: "choice", prompt: "Which line in a form is written correctly?",
      options: ["Nationality: vietnamese", "nationality: Vietnamese", "Nationality: Vietnamese", "nationality: vietnamese"],
      answer: 2, explanation: "Chữ đầu của dòng và quốc tịch đều viết hoa: Nationality: Vietnamese." },
    { id: "p5", type: "gap", prompt: "___ you have an emergency contact? – Yes, I do.",
      options: ["Does", "Do", "Are", "Is"],
      answer: 1, explanation: "Câu hỏi Yes / No với you dùng Do: Do you have…? “Does” dùng với he / she / it." },
    { id: "p6", type: "choice", context: "A: Do you have a bank account?", prompt: "What is the correct short answer?",
      options: ["Yes, I do.", "Yes, I does.", "Yes, I am.", "Yes, I has."],
      answer: 0, explanation: "Trả lời ngắn dùng lại do: Yes, I do. “does” chỉ dùng với he / she / it, “am” không hợp với câu hỏi do you." },
    { id: "p7", type: "choice", prompt: "What is an emergency contact?",
      options: ["A person to call if there is a problem", "A bank account", "A type of form", "A meeting room"],
      answer: 0, explanation: "Emergency contact là người công ty gọi khi có sự cố hoặc việc khẩn cấp, thường là người thân." },
    { id: "p8", type: "choice", prompt: "In which word is the letter h silent (not pronounced)?",
      options: ["have", "home", "hour", "hand"],
      answer: 2, explanation: "Hour đọc /ˈaʊər/, không đọc chữ h. Các từ còn lại (have, home, hand) đều đọc /h/." }
  ],

  writing: {
    title: "My information for HR",
    task: "Chị Lan nhờ bạn gửi thông tin cá nhân. Bạn là Hoa, hãy viết tin nhắn ngắn cho Lan (25–50 từ): nói quốc tịch, địa chỉ mới, người liên hệ khẩn cấp và nói bạn có thẻ căn cước.",
    requirements: [
      "Chào Lan.",
      "Nói quốc tịch của bạn (My nationality is…).",
      "Nói bạn có địa chỉ mới (I have a new address…).",
      "Nói người liên hệ khẩn cấp (My emergency contact is…).",
      "Nói bạn có thẻ căn cước (I have my ID card…) và kết thúc tin nhắn."
    ],
    minWords: 25,
    maxWords: 50,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Hi / Hello / Dear)", pattern: "\\b(hi|hello|dear)\\b" },
      { label: "Có nói quốc tịch (nationality / Vietnamese)", pattern: "nationality|vietnamese" },
      { label: "Có câu với I have", pattern: "\\bi have\\b" },
      { label: "Có nhắc address", pattern: "\\baddress\\b" },
      { label: "Có nhắc emergency contact", pattern: "emergency contact" },
      { label: "Có lời kết (Thanks / Regards / Best wishes)", pattern: "thanks|thank you|regards|wishes" }
    ],
    model: [
      "Hi Lan,",
      "Here is my information. My nationality is Vietnamese. I have a new address: 12 Lang Street. My emergency contact is my mother, Thu Tran. I have my ID card with me.",
      "Thanks,",
      "Hoa"
    ]
  },

  review: {
    keyPhrases: [
      { en: "Do you have your ID card? – Yes, I do.", vi: "Bạn có thẻ căn cước không? – Có." },
      { en: "My nationality is Vietnamese.", vi: "Quốc tịch của tôi là Việt Nam." },
      { en: "I have a new address.", vi: "Tôi có địa chỉ mới." },
      { en: "She has a phone in Hai Phong.", vi: "Cô ấy có điện thoại ở Hải Phòng." },
      { en: "My emergency contact is my mother.", vi: "Người liên hệ khẩn cấp của tôi là mẹ tôi." },
      { en: "Please sign here.", vi: "Vui lòng ký tên ở đây." }
    ]
  }
});
