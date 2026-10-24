/* =========================================================
   A1 · Module 1 (English Foundations) · Bài 3
   "Spelling names and email addresses"
   Khuôn rút gọn cho A1: 8 từ, 8 câu luyện tập, bài đọc và bài viết ngắn.
   Nối tiếp bài 2: buổi hướng dẫn máy tính thứ Tư 7/10, 2 giờ chiều, phòng 205.
   Tên miền riverside-trading.example là tên miền dành riêng cho ví dụ, không có thật.
   Công ty Riverside Trading và các nhân vật đều là hư cấu.
   ========================================================= */
window.EOH.registerLesson({
  id: "a1-m1-l3",
  reviewStatus: "draft", // "draft" = bản nháp, chưa duyệt
  duration: "20–25 phút",
  scenario: "Chiều thứ Tư, chị Hoa đến phòng 205 dự buổi hướng dẫn máy tính. Anh Sam Lee ở bộ phận Hỗ trợ kỹ thuật (IT Support) tạo tài khoản email cho chị và cần chị đánh vần họ tên.",

  objectives: [
    "Đọc đúng tên các chữ cái tiếng Anh, nhất là các chữ dễ nhầm (A, E, I, G, J, H, R, W).",
    "Đánh vần họ tên của mình và nghe – viết lại tên người khác.",
    "Đọc và nghe địa chỉ email: at (@), dot (.), hyphen (-).",
    "Hỏi lại lịch sự khi chưa nghe rõ: Sorry, can you say that again?",
    "Viết email ngắn cho bộ phận kỹ thuật, có đánh vần họ của mình."
  ],

  vocabulary: [
    { word: "spell", ipa: "/spel/", pos: "verb", meaning: "đánh vần",
      example: "Can you spell your surname, please?", exampleVi: "Bạn đánh vần họ của bạn giúp tôi được không?" },
    { word: "first name", ipa: "/ˈfɜːrst ˌneɪm/", pos: "noun", meaning: "tên (tên gọi, không phải họ)",
      example: "My first name is Hoa.", exampleVi: "Tên tôi là Hoa." },
    { word: "surname", ipa: "/ˈsɜːrneɪm/", pos: "noun", meaning: "họ (còn gọi là last name, family name)",
      example: "My surname is Tran.", exampleVi: "Họ của tôi là Trần." },
    { word: "email address", ipa: "/ˈiːmeɪl ˌædres/", pos: "noun", meaning: "địa chỉ email",
      example: "What's your email address?", exampleVi: "Địa chỉ email của bạn là gì?" },
    { word: "account", ipa: "/əˈkaʊnt/", pos: "noun", meaning: "tài khoản",
      example: "Your email account is ready.", exampleVi: "Tài khoản email của bạn đã sẵn sàng." },
    { word: "username", ipa: "/ˈjuːzərneɪm/", pos: "noun", meaning: "tên đăng nhập",
      example: "Your username is hoa.tran.", exampleVi: "Tên đăng nhập của bạn là hoa.tran." },
    { word: "password", ipa: "/ˈpæswɜːrd/", pos: "noun", meaning: "mật khẩu",
      example: "Please change your password today.", exampleVi: "Vui lòng đổi mật khẩu trong hôm nay." },
    { word: "capital letter", ipa: "/ˌkæpɪtl ˈletər/", pos: "noun", meaning: "chữ in hoa",
      example: "The password needs one capital letter.", exampleVi: "Mật khẩu cần có một chữ in hoa." }
  ],

  pronunciation: {
    groups: [
      {
        title: "Chữ cái dễ nhầm",
        text: "Tên chữ cái tiếng Anh khác cách đọc chữ cái tiếng Việt. Đây là những chữ người Việt hay đọc nhầm khi đánh vần.",
        items: [
          { word: "A", marked: "/eɪ/", note: "Gần giống “ây”, không đọc “a”." },
          { word: "E", marked: "/iː/", note: "Gần giống “i” kéo dài, không đọc “e”." },
          { word: "I", marked: "/aɪ/", note: "Gần giống “ai”." },
          { word: "G", marked: "/dʒiː/", note: "Dễ nhầm với J." },
          { word: "J", marked: "/dʒeɪ/", note: "Dễ nhầm với G." },
          { word: "H", marked: "/eɪtʃ/", note: "Không đọc “hát”." },
          { word: "R", marked: "/ɑːr/", note: "Không đọc “e-rờ”." },
          { word: "W", marked: "/ˈdʌbəljuː/", note: "Ba âm tiết: double-u." }
        ]
      },
      {
        title: "Ký hiệu trong địa chỉ email",
        text: "Khi đọc địa chỉ email, mỗi ký hiệu có tên riêng.",
        items: [
          { word: "at", marked: "@", note: "a còng" },
          { word: "dot", marked: ".", note: "dấu chấm" },
          { word: "hyphen", marked: "-", note: "gạch ngang (cũng có người nói “dash”)" },
          { word: "underscore", marked: "_", note: "gạch dưới" }
        ]
      }
    ],
    sentences: [
      "Can you spell that, please?",
      "My surname is Tran. T, R, A, N.",
      "Sorry, can you say that again?"
    ]
  },

  listening: {
    title: "A new email account",
    setting: "Thứ Tư, 2 giờ chiều, phòng 205. Anh Sam (IT Support) tạo tài khoản email cho chị Hoa.",
    speakers: { sam: "Sam (IT Support)", hoa: "Hoa (new accountant)" },
    lines: [
      { s: "sam", text: "Hi, I'm Sam from IT Support. Let's make your email account. What's your first name?",
        vi: "Chào chị, tôi là Sam ở bộ phận Hỗ trợ kỹ thuật. Mình tạo tài khoản email cho chị nhé. Tên của chị là gì?" },
      { s: "hoa", text: "Hoa. H, O, A.",
        vi: "Hoa. H, O, A." },
      { s: "sam", text: "And your surname?",
        vi: "Còn họ của chị?" },
      { s: "hoa", text: "Tran. T, R, A, N.",
        vi: "Trần. T, R, A, N." },
      { s: "sam", text: "Thanks. So your email address is hoa dot tran at riverside hyphen trading dot example.",
        vi: "Cảm ơn chị. Vậy địa chỉ email của chị là hoa.tran@riverside-trading.example." },
      { s: "hoa", text: "Sorry, can you say that again, please?",
        vi: "Xin lỗi, anh nói lại giúp tôi được không?" },
      { s: "sam", text: "Sure. Hoa dot tran at riverside hyphen trading dot example.",
        vi: "Được chứ. hoa.tran@riverside-trading.example." },
      { s: "sam", text: "Now please choose a password. It needs at least eight letters or numbers, and one capital letter.",
        vi: "Bây giờ chị chọn mật khẩu nhé. Mật khẩu cần ít nhất tám chữ cái hoặc chữ số, và một chữ in hoa." },
      { s: "hoa", text: "OK. And what's your extension, Sam?",
        vi: "Vâng. Còn số máy lẻ của anh là bao nhiêu, anh Sam?" },
      { s: "sam", text: "It's three-three-zero. Call me if you have a problem.",
        vi: "Là 330. Có vấn đề gì thì chị gọi tôi nhé." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "How do you spell Hoa's surname?",
        options: ["T-A-R-N", "T-R-A-M", "T-R-A-N", "D-R-A-N"],
        answer: 2, explanation: "Hoa đánh vần: “T, R, A, N”. Chú ý phân biệt N và M, T và D khi nghe." },
      { id: "l2", type: "choice", prompt: "What is Hoa's email address?",
        options: ["tran.hoa@riverside-trading.example", "hoa.tran@riverside-trading.example", "hoa.tran@riverside.trading.example", "hoatran@riverside-trading.example"],
        answer: 1, explanation: "“hoa dot tran at riverside hyphen trading dot example”: tên trước, dấu chấm, rồi họ; giữa riverside và trading là gạch ngang (hyphen), không phải dấu chấm." },
      { id: "l3", type: "choice", prompt: "What does the password need?",
        options: ["Only numbers", "Hoa's date of birth", "Two capital letters", "At least eight letters or numbers and one capital letter"],
        answer: 3, explanation: "Sam nói: “at least eight letters or numbers, and one capital letter” – ít nhất 8 ký tự và một chữ in hoa." }
    ]
  },

  reading: {
    title: "Your new email account",
    intro: "Sau buổi hướng dẫn, anh Sam gửi email cho chị Hoa. Đọc và tìm thông tin đăng nhập.",
    email: {
      from: "Sam Lee <it.support@riverside-trading.example>",
      to: "Hoa Tran",
      date: "Wednesday, 7 October",
      subject: "Your new email account",
      greeting: "Hi Hoa,",
      paragraphs: [
        "Your email account is ready."
      ],
      list: [
        "Email address: hoa.tran@riverside-trading.example",
        "Username: hoa.tran",
        "First password: Welcome#2026 (please change it today)"
      ],
      after: [
        "Please do not give your password to anyone. IT Support will never ask for your password.",
        "Problems? Call IT Support on extension 330."
      ],
      closing: "Best regards,",
      signature: ["Sam Lee", "IT Support"]
    },
    glossary: [
      { term: "ready", vi: "sẵn sàng" },
      { term: "first password", vi: "mật khẩu đầu tiên (tạm thời)" },
      { term: "anyone", vi: "bất kỳ ai" },
      { term: "never", vi: "không bao giờ" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "What is Hoa's username?",
        options: ["hoatran", "tran.hoa", "hoa.tran", "Hoa Tran"],
        answer: 2, explanation: "“Username: hoa.tran” – tên, dấu chấm, họ, viết thường." },
      { id: "r2", type: "choice", prompt: "When should Hoa change her password?",
        options: ["Next week", "Today", "On Friday", "Never"],
        answer: 1, explanation: "“First password: Welcome#2026 (please change it today)” – đổi ngay trong hôm nay." },
      { id: "r3", type: "choice", prompt: "Which sentence is TRUE?",
        options: ["IT Support will ask for her password.", "Hoa can give her password to Lan.", "The IT Support extension is 330.", "The email is from Lan."],
        answer: 2, explanation: "“Call IT Support on extension 330.” Email do Sam gửi, và IT Support không bao giờ hỏi mật khẩu; không đưa mật khẩu cho bất kỳ ai." }
    ]
  },

  grammar: {
    title: "Asking for names and spelling",
    titleVi: "Hỏi tên, hỏi cách đánh vần và xin nhắc lại",
    intro: "Khi ghi thông tin của khách hoặc đồng nghiệp, bạn cần hỏi tên, hỏi cách đánh vần và nhờ nhắc lại nếu chưa nghe rõ. Bốn mẫu câu dưới đây dùng rất nhiều ở lễ tân, phòng Nhân sự và khi nghe điện thoại.",
    patterns: [
      { form: "What's your + danh từ?", use: "Hỏi thông tin: tên, họ, email, số điện thoại.",
        examples: ["What's your surname?", "What's your email address?"] },
      { form: "How do you spell + …?", use: "Hỏi cách đánh vần.",
        examples: ["How do you spell your first name?", "How do you spell that?"] },
      { form: "Can you + động từ …, please?", use: "Nhờ người khác làm gì một cách lịch sự.",
        examples: ["Can you spell that, please?", "Can you repeat that, please?"] },
      { form: "Sorry? / Sorry, can you say that again?", use: "Xin nhắc lại khi chưa nghe rõ. Nói “Sorry?” với giọng lên cao ở cuối.",
        examples: ["Sorry, can you say that again?", "Sorry? T, R…?"] }
    ],
    mistakes: [
      { wrong: "How to spell your name?", right: "How do you spell your name?", note: "Câu hỏi cần “do you”." },
      { wrong: "What is your mail?", right: "What's your email address?", note: "Nói đầy đủ “email address”; “mail” thường là thư giấy." },
      { wrong: "My first name Hoa.", right: "My first name is Hoa.", note: "Không bỏ “is” (động từ to be, bài 1)." },
      { wrong: "Can you spell, please?", right: "Can you spell it, please?", note: "Cần nói rõ đánh vần cái gì: it / that / your name." }
    ],
    tip: "Tên người Việt trong tiếng Anh: thường viết không dấu và để tên trước, họ sau: Trần Thị Hoa → Hoa Tran (hoặc Hoa Thi Tran). Trên biểu mẫu: First name = Hoa, Surname / Last name = Tran. Khi đánh vần, hai chữ giống nhau đứng liền có thể nói “double”: Phillip = P, H, I, double L, I, P."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "Can you ___ your surname, please?",
      options: ["spell", "spelling", "spells", "to spell"],
      answer: 0, explanation: "Can you + động từ nguyên mẫu, không có “to”: Can you spell…?" },
    { id: "p2", type: "choice", prompt: "Which is the surname in “Hoa Tran”?",
      options: ["Hoa", "Tran", "Hoa Tran", "H-O-A"],
      answer: 1, explanation: "Trong tiếng Anh, tên đứng trước, họ đứng sau: Hoa là first name, Tran là surname." },
    { id: "p3", type: "choice", prompt: "How do you say “@” in an email address?",
      options: ["dot", "hyphen", "underscore", "at"],
      answer: 3, explanation: "@ đọc là “at”. Dot là dấu chấm, hyphen là gạch ngang, underscore là gạch dưới." },
    { id: "p4", type: "choice", context: "Sam says: “hoa dot tran at riverside hyphen trading dot example”.", prompt: "Which email address is it?",
      options: ["hoa_tran@riverside.trading.example", "hoatran@riverside-trading.example", "hoa.tran@riverside-trading.example", "hoa.tran@riversidetrading.example"],
      answer: 2, explanation: "dot = “.”, at = “@”, hyphen = “-”: hoa.tran@riverside-trading.example." },
    { id: "p5", type: "gap", prompt: "___ do you spell your first name?",
      options: ["What", "How", "Where", "Who"],
      answer: 1, explanation: "Hỏi cách đánh vần: How do you spell …?" },
    { id: "p6", type: "choice", context: "A visitor says his name, but you don't hear it clearly.", prompt: "What do you say?",
      options: ["Sorry, can you say that again?", "Nice to meet you too.", "Yes, I am.", "It's eight o'clock."],
      answer: 0, explanation: "Khi chưa nghe rõ, xin nhắc lại: Sorry, can you say that again?" },
    { id: "p7", type: "choice", prompt: "Which letter do we say as /dʒeɪ/?",
      options: ["G", "J", "Y", "H"],
      answer: 1, explanation: "J đọc là /dʒeɪ/. G đọc là /dʒiː/ – hai chữ này rất dễ nhầm." },
    { id: "p8", type: "gap", prompt: "Please never give your ___ to anyone.",
      options: ["surname", "email address", "password", "first name"],
      answer: 2, explanation: "Mật khẩu (password) là thông tin bí mật, không đưa cho ai. Họ, tên và email là thông tin bình thường, có thể nói khi cần." }
  ],

  writing: {
    title: "Ask IT Support for help",
    task: "Bạn là Hoa. Hãy viết email ngắn cho anh Sam (IT Support) để nhờ đổi mật khẩu (25–50 từ).",
    requirements: [
      "Chào anh Sam.",
      "Nói họ tên của bạn và đánh vần họ.",
      "Nói phòng ban và số máy lẻ của bạn.",
      "Nhờ đổi mật khẩu bằng Can you … please?",
      "Kết thúc email và ký tên."
    ],
    minWords: 25,
    maxWords: 50,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Hi / Hello / Dear)", pattern: "\\b(hi|hello|dear)\\b" },
      { label: "Có giới thiệu tên (My name is / I'm)", pattern: "my name is|\\bI'm\\b|\\bI am\\b" },
      { label: "Có đánh vần (ví dụ T-R-A-N)", pattern: "\\b[a-z]\\s*[-,]\\s*[a-z]\\s*[-,]\\s*[a-z]\\b" },
      { label: "Có phòng ban hoặc số máy lẻ", pattern: "department|extension|\\bext\\b" },
      { label: "Có nhờ lịch sự (Can you … please)", pattern: "can you|could you" },
      { label: "Có lời kết (Thank you / Best regards)", pattern: "thank|regards" }
    ],
    model: [
      "Hi Sam,",
      "My name is Hoa Tran, T-R-A-N. I'm in the Accounting Department, extension 215.",
      "Can you help me change my password, please?",
      "Thank you,",
      "Hoa"
    ]
  },

  review: {
    keyPhrases: [
      { en: "What's your surname? – It's Tran.", vi: "Họ của bạn là gì? – Là Trần." },
      { en: "How do you spell that? – T, R, A, N.", vi: "Đánh vần thế nào? – T, R, A, N." },
      { en: "Can you spell your first name, please?", vi: "Bạn đánh vần tên giúp tôi được không?" },
      { en: "Sorry, can you say that again?", vi: "Xin lỗi, bạn nói lại giúp tôi được không?" },
      { en: "My email address is hoa dot tran at riverside hyphen trading dot example.", vi: "Địa chỉ email của tôi là hoa.tran@riverside-trading.example." },
      { en: "Please don't give your password to anyone.", vi: "Đừng đưa mật khẩu của bạn cho bất kỳ ai." }
    ]
  }
});
