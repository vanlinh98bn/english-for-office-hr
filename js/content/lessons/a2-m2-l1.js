/* =========================================================
   A2 · Module 2 (Emails and Documents) · Bài 1
   "Email structure and greetings"
   Thứ Hai 16/11/2026. Tuấn viết email đầu tiên gửi anh David và anh Minh,
   chị Lan góp ý về lời chào, dòng tiêu đề, lời kết.
   Điểm ngữ pháp: văn phong trang trọng / thân mật + and, but, so, because.
   Công ty Riverside Trading và các nhân vật đều là hư cấu.
   ========================================================= */
window.EOH.registerLesson({
  id: "a2-m2-l1",
  reviewStatus: "draft", // "draft" = bản nháp, chưa duyệt
  duration: "35–45 phút",
  scenario: "Thứ Hai 16/11, Tuấn (HR Assistant) viết email đầu tiên gửi anh David (Sales Manager) và anh Minh (phòng Kế toán). Chị Lan xem bản nháp và chỉ cho Tuấn cách chọn lời chào, dòng tiêu đề và lời kết cho đúng, rồi dùng and, but, so, because để nối ý.",

  objectives: [
    "Hiểu và dùng 10 từ vựng về cấu trúc một email (lời chào, dòng tiêu đề, lời kết…).",
    "Nghe hiểu lời góp ý về lời chào, dòng tiêu đề và lời kết của một email.",
    "Đọc email góp ý và tìm đúng thông tin: cách mở đầu, cách kết thúc, vì sao cần dòng tiêu đề rõ ràng.",
    "Phân biệt email trang trọng và thân mật, và nối ý bằng and, but, so, because.",
    "Viết email trang trọng ngắn gửi anh David về các biểu mẫu sức khỏe."
  ],

  vocabulary: [
    { word: "greeting", ipa: "/ˈɡriːtɪŋ/", pos: "noun", meaning: "lời chào ở đầu email",
      example: "“Dear Mr. Brown” is a formal greeting.", exampleVi: "“Dear Mr. Brown” là lời chào trang trọng." },
    { word: "subject line", ipa: "/ˈsʌbdʒɪkt laɪn/", pos: "noun", meaning: "dòng tiêu đề của email",
      example: "A good subject line is short and clear.", exampleVi: "Một dòng tiêu đề tốt thì ngắn và rõ." },
    { word: "recipient", ipa: "/rɪˈsɪpiənt/", pos: "noun", meaning: "người nhận",
      example: "Check the recipient before you send the email.", exampleVi: "Hãy kiểm tra người nhận trước khi gửi email." },
    { word: "sign-off", ipa: "/ˈsaɪn ˌɔːf/", pos: "noun", meaning: "lời kết ở cuối email",
      example: "“Best regards” is a polite sign-off.", exampleVi: "“Best regards” là lời kết lịch sự." },
    { word: "formal", ipa: "/ˈfɔːrməl/", pos: "adjective", meaning: "trang trọng",
      example: "Use a formal style with customers.", exampleVi: "Hãy dùng văn phong trang trọng với khách hàng." },
    { word: "informal", ipa: "/ɪnˈfɔːrməl/", pos: "adjective", meaning: "thân mật, không trang trọng",
      example: "An informal email is fine between friends.", exampleVi: "Email thân mật thì được giữa những người bạn." },
    { word: "draft", ipa: "/dræft/", pos: "noun", meaning: "bản nháp",
      example: "Please show me your draft first.", exampleVi: "Bạn cho tôi xem bản nháp trước nhé." },
    { word: "tone", ipa: "/toʊn/", pos: "noun", meaning: "giọng điệu của bài viết",
      example: "The tone of your email is very friendly.", exampleVi: "Giọng điệu email của bạn rất thân thiện." },
    { word: "proofread", ipa: "/ˈpruːfriːd/", pos: "verb", meaning: "đọc lại để sửa lỗi",
      example: "Please proofread your email before you send it.", exampleVi: "Hãy đọc lại email để sửa lỗi trước khi gửi." },
    { word: "abbreviation", ipa: "/əˌbriːviˈeɪʃən/", pos: "noun", meaning: "từ viết tắt",
      example: "Do not use abbreviations in a formal email.", exampleVi: "Đừng dùng từ viết tắt trong email trang trọng." }
  ],

  pronunciation: {
    groups: [
      {
        title: "Dạng yếu của and, but, because",
        text: "Trong câu nói nhanh, các từ nối and, but, because thường được đọc nhẹ và ngắn. Người nghe vẫn hiểu, và bạn nghe tự nhiên hơn.",
        items: [
          { word: "and", marked: "/ən/", note: "Đọc nhẹ: bread ’n’ butter. Khi đứng riêng thì đọc /ænd/." },
          { word: "but", marked: "/bət/", note: "Đọc nhẹ khi ở giữa câu." },
          { word: "because", marked: "/bɪˈkəz/", note: "Nhấn âm thứ hai. Trong câu nhanh có thể đọc /kəz/." },
          { word: "so", marked: "/soʊ/", note: "Giữ nguyên, đọc rõ." }
        ]
      },
      {
        title: "Trọng âm của từ",
        text: "Âm tiết in hoa là âm đọc to và dài hơn.",
        items: [
          { word: "formal", marked: "FOR·mal" },
          { word: "informal", marked: "in·FOR·mal" },
          { word: "recipient", marked: "re·CIP·i·ent" },
          { word: "proofread", marked: "PROOF·read", note: "Động từ ghép: trọng âm ở phần đầu." },
          { word: "abbreviation", marked: "ab·bre·vi·A·tion", note: "Trước đuôi -tion." }
        ]
      }
    ],
    sentences: [
      "Dear Mr. Brown, thank you for your email.",
      "I sent the form, but he didn't reply.",
      "I stayed home because I was sick."
    ]
  },

  listening: {
    title: "A draft email for David",
    setting: "Sáng thứ Hai, văn phòng Nhân sự. Tuấn nhờ chị Lan xem bản nháp email gửi anh David.",
    speakers: { tuan: "Tuan (HR Assistant)", lan: "Lan (HR Officer)" },
    lines: [
      { s: "tuan", text: "Lan, do you have a minute? I wrote a draft email to David, but I'm not sure about the greeting.",
        vi: "Chị Lan, chị có rảnh một phút không ạ? Em viết bản nháp email gửi anh David, nhưng em chưa chắc về lời chào." },
      { s: "lan", text: "Sure. Let me see. You wrote “Hey David”. That is a bit too informal, because this email is about a company form.",
        vi: "Được. Để chị xem. Em viết “Hey David”. Vậy hơi thân mật quá, vì email này nói về một biểu mẫu của công ty." },
      { s: "tuan", text: "I see. Should I write “Dear Mr. Brown”?",
        vi: "Em hiểu rồi. Em nên viết “Dear Mr. Brown” ạ?" },
      { s: "lan", text: "“Dear David” is fine, and it sounds friendly. We use “Dear Mr. Brown” for people outside the company.",
        vi: "“Dear David” là được, và nghe thân thiện. Chúng ta dùng “Dear Mr. Brown” cho người ngoài công ty." },
      { s: "tuan", text: "OK. I'm also writing to Minh. Is “Hi Minh” all right?",
        vi: "Vâng. Em cũng viết cho anh Minh. “Hi Minh” có được không ạ?" },
      { s: "lan", text: "Yes. Minh is in Accounting, and you talk to him every day, so “Hi Minh” is fine.",
        vi: "Được. Minh ở phòng Kế toán, và em nói chuyện với anh ấy mỗi ngày, nên “Hi Minh” là ổn." },
      { s: "tuan", text: "And my subject line? I wrote only “Hello”.",
        vi: "Còn dòng tiêu đề của em? Em chỉ viết “Hello”." },
      { s: "lan", text: "A subject line must be clear. Write “Please return your health form by Friday”. Then David knows the topic before he opens the email.",
        vi: "Dòng tiêu đề phải rõ ràng. Em viết “Please return your health form by Friday”. Khi đó anh David biết chủ đề trước khi mở email." },
      { s: "tuan", text: "That is much better. How do I end the email?",
        vi: "Vậy tốt hơn nhiều. Em kết thúc email thế nào ạ?" },
      { s: "lan", text: "Use “Best regards” for a formal email. For a friend, “Thanks” is fine. And please proofread before you send it.",
        vi: "Dùng “Best regards” cho email trang trọng. Với bạn bè thì “Thanks” là được. Và em nhớ đọc lại trước khi gửi." },
      { s: "tuan", text: "I will. Thank you, Lan.",
        vi: "Em sẽ làm vậy. Em cảm ơn chị Lan." },
      { s: "lan", text: "You're welcome. Send it before lunch.",
        vi: "Không có gì. Em gửi trước giờ nghỉ trưa nhé." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "What is the problem with Tuan's first greeting, “Hey David”?",
        options: ["It has the wrong name.", "It is too informal for this email.", "It is too long.", "It has no name."],
        answer: 1, explanation: "Chị Lan nói: “That is a bit too informal, because this email is about a company form.” Tên David vẫn đúng và có trong lời chào, nên lựa chọn A và D sai." },
      { id: "l2", type: "choice", prompt: "Why is “Hi Minh” all right?",
        options: ["Minh works outside the company.", "Minh is Tuan's line manager.", "Tuan talks to Minh every day.", "Minh is a customer."],
        answer: 2, explanation: "“Minh is in Accounting, and you talk to him every day, so ‘Hi Minh’ is fine.” Người ngoài công ty mới cần lời chào trang trọng như Dear Mr. …" },
      { id: "l3", type: "choice", prompt: "What does Lan say about the subject line?",
        options: ["It must be clear.", "It should be one word.", "It is not needed.", "It should be funny."],
        answer: 0, explanation: "“A subject line must be clear.” Một từ như “Hello” thì không rõ chủ đề, nên lời khuyên là viết cả câu ngắn nói rõ việc cần làm." }
    ]
  },

  reading: {
    title: "Lan's email tips",
    intro: "Email chị Lan gửi Tuấn sau khi xem bản nháp. Đọc và tìm các lời khuyên về cách viết email trang trọng.",
    email: {
      from: "Lan Pham <lan.pham@riverside-trading.example>",
      to: "Tuan Nguyen",
      date: "Monday, 16 November",
      subject: "Quick tips for formal emails",
      greeting: "Dear Tuan,",
      paragraphs: [
        "Thank you for your draft email. It is clear, but the greeting is too informal, so please change it.",
        "Here are three quick tips for formal emails:"
      ],
      list: [
        "Start with Dear and a name, for example Dear Mr. Brown.",
        "Write a clear subject line, because many people read the subject first.",
        "End with Best regards and your full name."
      ],
      after: [
        "For friendly emails to people in our team, you can write Hi and the first name, and you can end with Thanks.",
        "Please send me your next draft, and I will check it quickly."
      ],
      closing: "Best regards,",
      signature: ["Lan Pham", "HR Officer, Riverside Trading"]
    },
    glossary: [
      { term: "quick tip", vi: "lời khuyên nhanh" },
      { term: "full name", vi: "họ và tên đầy đủ" },
      { term: "friendly", vi: "thân thiện" },
      { term: "check", vi: "kiểm tra, xem lại" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "What should Tuan write at the end of a formal email?",
        options: ["Thanks and a nickname", "Best regards and his full name", "Hi and the first name", "Dear and a name"],
        answer: 1, explanation: "“End with Best regards and your full name.” Thanks dùng cho email thân mật; Dear và Hi dùng ở đầu email, không phải ở cuối." },
      { id: "r2", type: "choice", prompt: "Why should Tuan write a clear subject line?",
        options: ["Because many people read the subject first.", "Because the email will be shorter.", "Because the greeting is informal.", "Because Lan will check it first."],
        answer: 0, explanation: "“Write a clear subject line, because many people read the subject first.” Dòng tiêu đề rõ giúp người nhận hiểu chủ đề ngay." },
      { id: "r3", type: "choice", prompt: "Which statement is TRUE?",
        options: ["Tuan's draft was not clear.", "Tuan must use Dear in every email.", "Lan wants to see Tuan's next draft.", "Hi is wrong in all emails."],
        answer: 2, explanation: "“Please send me your next draft, and I will check it quickly.” Bản nháp của Tuấn vẫn rõ ràng (“It is clear”); với đồng nghiệp thân thì được dùng Hi." }
    ]
  },

  grammar: {
    title: "Formal and informal emails; and, but, so, because",
    titleVi: "Email trang trọng và thân mật; nối ý bằng and, but, so, because",
    intro: "Cùng một nội dung, bạn có thể viết trang trọng hoặc thân mật tùy người nhận. Sau đó dùng bốn từ nối đơn giản để ý trong email liền mạch hơn.",
    patterns: [
      { form: "Trang trọng: Dear + Mr. / Ms. + họ … Best regards,", use: "Dùng với khách hàng, người ngoài công ty, cấp trên hoặc khi viết lần đầu.",
        examples: ["Dear Mr. Brown, Thank you for your email.", "Best regards, Tuan Nguyen"] },
      { form: "Thân mật: Hi + tên … Thanks,", use: "Dùng với đồng nghiệp quen, người bạn nói chuyện mỗi ngày.",
        examples: ["Hi Minh, can you send me the list?", "Thanks, Tuan"] },
      { form: "and (thêm ý) / but (đối lập)", use: "and nối hai ý cùng hướng. but nối hai ý trái nhau.",
        examples: ["I sent the form, and I called Hoa.", "The form is short, but it is important."] },
      { form: "so (kết quả) / because (lý do)", use: "so đứng trước kết quả. because đứng trước lý do. Có thể đặt because ở đầu câu.",
        examples: ["I was sick, so I stayed home.", "I stayed home because I was sick."] }
    ],
    mistakes: [
      { wrong: "I can't open the file, so it is too big.", right: "I can't open the file because it is too big.", note: "“too big” là lý do, nên dùng because. so đứng trước kết quả." },
      { wrong: "I like the job, and the salary is low.", right: "I like the job, but the salary is low.", note: "Hai ý trái nhau thì dùng but." },
      { wrong: "Because I was sick, so I stayed home.", right: "Because I was sick, I stayed home.", note: "Không dùng because và so cùng lúc. Tiếng Việt “vì … nên …” khác tiếng Anh." },
      { wrong: "Dear Brown,", right: "Dear Mr. Brown, / Hi David,", note: "Không chào chỉ bằng họ trần. Trang trọng thì Dear Mr. + họ; thân mật thì Hi + tên. Tránh trộn Hi với Mr. + họ." }
    ],
    tip: "Trong email trang trọng, tránh từ viết tắt và dấu chấm than liên tiếp (!!!). Một câu cảm ơn ngắn ở cuối thường làm email lịch sự hơn."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "The first line of an email, such as “Dear Tuan,”, is the ___.",
      options: ["subject line", "greeting", "sign-off", "recipient"],
      answer: 1, explanation: "Greeting = lời chào ở đầu email. Sign-off là lời kết ở cuối; recipient là người nhận." },
    { id: "p2", type: "gap", prompt: "“Best regards” is a common ___ at the end of an email.",
      options: ["greeting", "recipient", "tone", "sign-off"],
      answer: 3, explanation: "Sign-off = lời kết ở cuối email. Greeting nằm ở đầu email." },
    { id: "p3", type: "gap", prompt: "“Hey David!” is too ___ for an email to a customer.",
      options: ["informal", "formal", "clear", "polite"],
      answer: 0, explanation: "Hey là cách chào thân mật, không hợp với khách hàng. Với khách dùng Dear Mr. / Ms. …" },
    { id: "p4", type: "gap", prompt: "I want to join the course, ___ I have a doctor's appointment that day.",
      options: ["and", "but", "so", "because"],
      answer: 1, explanation: "Hai ý trái nhau (muốn đi học nhưng có lịch khám) nên dùng but. “so” và “because” làm câu vô nghĩa, “and” không thể hiện sự đối lập." },
    { id: "p5", type: "gap", prompt: "___ the file is very large, I cannot send it by email.",
      options: ["So", "Because", "But", "And"],
      answer: 1, explanation: "“Because” đứng đầu mệnh đề chỉ lý do: Because the file is very large, … Không đặt So ở đầu mệnh đề lý do." },
    { id: "p6", type: "choice", prompt: "What is the best greeting for a first email to Mr. Carter, a visitor from another company?",
      options: ["Hey Mr. Carter!", "Hi Carter,", "Dear Mr. Carter,", "Yo Carter,"],
      answer: 2, explanation: "Với người ngoài công ty và lần đầu viết thì dùng Dear Mr. Carter,. Các lựa chọn còn lại quá thân mật." },
    { id: "p7", type: "choice", prompt: "Which sign-off is best for a formal email to a customer?",
      options: ["See ya!", "Cheers mate", "Later!", "Best regards,"],
      answer: 3, explanation: "Best regards là lời kết lịch sự, trang trọng. Ba lựa chọn kia chỉ dùng giữa bạn bè." },
    { id: "p8", type: "choice", context: "You want all staff to return their health forms by Friday.", prompt: "Which subject line is the best?",
      options: ["Hello", "Form", "Please return your health form by Friday", "Important!!!"],
      answer: 2, explanation: "Dòng tiêu đề tốt nói rõ việc cần làm và hạn chót. “Hello” và “Form” quá mơ hồ; “Important!!!” không cho biết nội dung." },
    { id: "p9", type: "choice", prompt: "Where is the main stress in “abbreviation”?",
      options: ["a·bbre·vi·A·tion", "a·BBRE·vi·a·tion", "a·bbre·VI·a·tion", "A·bbre·vi·a·tion"],
      answer: 0, explanation: "Từ tận cùng bằng -tion có trọng âm ở âm tiết ngay trước -tion: ab·bre·vi·A·tion." },
    { id: "p10", type: "choice", prompt: "Which sentence is correct?",
      options: ["I was tired, so I went home early.", "I was tired, because I went home early.", "Because I was tired, so I went home early.", "I was tired, but so I went home early."],
      answer: 0, explanation: "Mệt là lý do, về sớm là kết quả: …, so …. Câu B đảo ngược lý do và kết quả; câu C dùng because và so cùng lúc; câu D dùng sai but." }
  ],

  writing: {
    title: "A formal email to David",
    task: "Bạn là Tuấn. Hãy viết email trang trọng gửi anh David Brown (50–90 từ), nhờ anh nhắc nhóm trả biểu mẫu sức khỏe.",
    requirements: [
      "Mở đầu bằng lời chào trang trọng (Dear …).",
      "Nói rõ bạn viết về việc gì (the health forms).",
      "Dùng but để nói hầu hết mọi người đã trả nhưng một số người chưa.",
      "Dùng because để nêu lý do cần có biểu mẫu trước thứ Sáu.",
      "Dùng so để nói kết quả.",
      "Kết thúc bằng Best regards và ký tên."
    ],
    minWords: 50,
    maxWords: 90,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào trang trọng (Dear …)", pattern: "\\bdear\\b" },
      { label: "Nhắc tới biểu mẫu (form)", pattern: "\\bforms?\\b" },
      { label: "Có dùng but", pattern: "\\bbut\\b" },
      { label: "Có dùng because", pattern: "\\bbecause\\b" },
      { label: "Có dùng so", pattern: "\\bso\\b" },
      { label: "Có lời kết (Best regards …)", pattern: "regards|sincerely|best wishes" }
    ],
    model: [
      "Dear Mr. Brown,",
      "I am writing about the health forms for your team. Most people returned the form on time, but two people did not.",
      "Please remind them, because we need all the forms by Friday, so the clinic can plan the visits.",
      "I know you are busy, and I really appreciate your help.",
      "Best regards,",
      "Tuan Nguyen"
    ]
  },

  review: {
    keyPhrases: [
      { en: "Dear Mr. Brown, thank you for your email.", vi: "Kính gửi ông Brown, cảm ơn ông đã gửi email." },
      { en: "Hi Minh, can you send me the list?", vi: "Chào Minh, bạn gửi mình danh sách nhé?" },
      { en: "A subject line must be clear.", vi: "Dòng tiêu đề phải rõ ràng." },
      { en: "The form is short, but it is important.", vi: "Biểu mẫu ngắn nhưng quan trọng." },
      { en: "I stayed home because I was sick.", vi: "Tôi ở nhà vì tôi bị ốm." },
      { en: "Please proofread your email before you send it.", vi: "Hãy đọc lại email trước khi gửi." }
    ]
  }
});
