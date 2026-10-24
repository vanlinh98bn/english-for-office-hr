/* =========================================================
   A2 · Module 3 (Recruitment and Onboarding) · Bài 5
   "Onboarding checklists"
   Nối tiếp câu chuyện: thứ Ba 3/11/2026, ngày thứ hai của Tuấn. Anh Hải
   và chị Lan đưa danh sách việc cần làm trong tuần đầu. Anh Hải ký xác
   nhận danh sách vào chiều thứ Sáu 6/11.
   Công ty Riverside Trading và các nhân vật đều là hư cấu.
   ========================================================= */
window.EOH.registerLesson({
  id: "a2-m3-l5",
  reviewStatus: "draft", // "draft" = bản nháp, chưa duyệt
  duration: "35–45 phút",
  scenario: "Thứ Ba 3/11, ngày thứ hai của Tuấn (Tuan Nguyen) ở Riverside Trading. Anh Hải (Mr. Hai) đưa cho Tuấn danh sách việc cần làm trong tuần đầu, và chị Lan (Lan Pham) gửi email nhắc lại từng bước theo thứ tự.",

  objectives: [
    "Hiểu và dùng 10 từ vựng thường gặp trong danh sách việc cho nhân viên mới (checklist, buddy, mandatory…).",
    "Nghe hiểu hướng dẫn các bước cần làm trong tuần đầu tiên.",
    "Đọc email danh sách việc và tìm đúng thứ tự các bước, người phụ trách và ngày hoàn thành.",
    "Nói về trình tự với First, Then, After that, Finally và với Before / After + V-ing.",
    "Viết email ngắn gửi danh sách việc cho nhân viên mới."
  ],

  vocabulary: [
    { word: "checklist", ipa: "/ˈtʃeklɪst/", pos: "noun", meaning: "danh sách việc cần làm (để đánh dấu từng việc)",
      example: "Here is your checklist for this week.", exampleVi: "Đây là danh sách việc của bạn trong tuần này." },
    { word: "tick off", ipa: "/ˈtɪk ɔːf/", pos: "phrasal verb", meaning: "đánh dấu đã làm xong",
      example: "Please tick off each task when it is done.", exampleVi: "Hãy đánh dấu từng việc khi làm xong." },
    { word: "set up", ipa: "/ˈset ʌp/", pos: "phrasal verb", meaning: "cài đặt, tạo (tài khoản, thiết bị)",
      example: "Sam is going to set up your email account.", exampleVi: "Sam sẽ tạo tài khoản email cho bạn." },
    { word: "access", ipa: "/ˈækses/", pos: "noun", meaning: "quyền truy cập, quyền sử dụng",
      example: "You will get access to the HR system.", exampleVi: "Bạn sẽ có quyền truy cập vào hệ thống nhân sự." },
    { word: "buddy", ipa: "/ˈbʌdi/", pos: "noun", meaning: "người đồng hành, kèm cặp nhân viên mới",
      example: "Lan is your buddy for the first weeks.", exampleVi: "Chị Lan là người kèm cặp bạn trong những tuần đầu." },
    { word: "mandatory", ipa: "/ˈmændətɔːri/", pos: "adjective", meaning: "bắt buộc",
      example: "Safety training is mandatory for all new staff.", exampleVi: "Đào tạo an toàn là bắt buộc với mọi nhân viên mới." },
    { word: "shadow", ipa: "/ˈʃædoʊ/", pos: "verb", meaning: "đi theo quan sát một người làm việc để học",
      example: "You are going to shadow Lan for two days.", exampleVi: "Bạn sẽ đi theo học việc cùng chị Lan hai ngày." },
    { word: "sign off", ipa: "/ˈsaɪn ɔːf/", pos: "phrasal verb", meaning: "ký xác nhận hoàn thành",
      example: "Mr. Hai will sign off your checklist.", exampleVi: "Anh Hải sẽ ký xác nhận danh sách việc của bạn." },
    { word: "health insurance", ipa: "/ˈhelθ ɪnˌʃʊrəns/", pos: "noun", meaning: "bảo hiểm y tế",
      example: "Please fill in the health insurance form.", exampleVi: "Vui lòng điền mẫu đăng ký bảo hiểm y tế." },
    { word: "emergency exit", ipa: "/ɪˈmɜːrdʒənsi ˈeksɪt/", pos: "noun", meaning: "lối thoát hiểm",
      example: "Please find the nearest emergency exit.", exampleVi: "Hãy tìm lối thoát hiểm gần nhất." }
  ],

  pronunciation: {
    groups: [
      {
        title: "Trọng âm của từ",
        text: "Hầu hết các từ ghép và danh từ hai âm tiết có trọng âm ở âm tiết đầu. Âm tiết in hoa là âm đọc to và dài hơn.",
        items: [
          { word: "checklist", marked: "CHECK·list", note: "Từ ghép: trọng âm ở phần đầu." },
          { word: "access", marked: "AC·cess" },
          { word: "mandatory", marked: "MAN·da·to·ry", note: "Trọng âm ở âm tiết đầu." },
          { word: "emergency", marked: "e·MER·gen·cy", note: "Trọng âm ở âm tiết thứ hai." },
          { word: "insurance", marked: "in·SUR·ance" }
        ]
      },
      {
        title: "Ngắt nhịp khi nói trình tự",
        text: "Sau các từ chỉ trình tự, ta ngắt hơi nhẹ (dấu phẩy). Từ chỉ trình tự thường đọc rõ và hơi cao giọng.",
        items: [
          { word: "First,", marked: "FIRST, ask Sam.", note: "Ngắt hơi ngắn sau First." },
          { word: "Then,", marked: "THEN, do the training." },
          { word: "After that,", marked: "AF·ter THAT, read the rules." },
          { word: "Finally,", marked: "FI·nal·ly, sign the form." }
        ]
      }
    ],
    sentences: [
      "First, Sam is going to set up your email account.",
      "You are going to shadow her before working on your own.",
      "Finally, please fill in the health insurance form."
    ]
  },

  listening: {
    title: "Your checklist for this week",
    setting: "Thứ Ba 3/11, buổi sáng. Anh Hải đưa cho Tuấn danh sách việc cần làm trong tuần đầu.",
    speakers: { hai: "Mr. Hai (line manager)", tuan: "Tuan (new employee)" },
    lines: [
      { s: "hai", text: "Good morning, Tuan. How was your first day yesterday?",
        vi: "Chào buổi sáng Tuấn. Hôm qua ngày đầu của em thế nào?" },
      { s: "tuan", text: "It was good, thank you. Everyone was very friendly.",
        vi: "Dạ tốt ạ. Mọi người đều rất thân thiện." },
      { s: "hai", text: "Great. Here is your checklist for this week. First, Sam is going to set up your email account.",
        vi: "Tốt. Đây là danh sách việc của em trong tuần này. Trước tiên, Sam sẽ tạo tài khoản email cho em." },
      { s: "tuan", text: "OK. What do I do after that?",
        vi: "Dạ. Sau đó em làm gì ạ?" },
      { s: "hai", text: "Then you need to complete the safety training. It is mandatory for all new staff. After that, you will get access to the HR system.",
        vi: "Tiếp theo em cần hoàn thành khóa đào tạo an toàn. Khóa này bắt buộc với mọi nhân viên mới. Sau đó em sẽ có quyền vào hệ thống nhân sự." },
      { s: "tuan", text: "Who is going to show me the system?",
        vi: "Ai sẽ chỉ em dùng hệ thống ạ?" },
      { s: "hai", text: "Lan is your buddy. You are going to shadow her for two days before working on your own.",
        vi: "Chị Lan là người kèm cặp em. Em sẽ đi theo học việc cùng chị hai ngày trước khi tự làm một mình." },
      { s: "tuan", text: "That is helpful. What about insurance?",
        vi: "Vậy thì tốt quá. Còn bảo hiểm thì sao ạ?" },
      { s: "hai", text: "Finally, please fill in the health insurance form. Please give it to Lan before leaving on Friday.",
        vi: "Cuối cùng, em điền mẫu bảo hiểm y tế. Em đưa cho chị Lan trước khi về vào thứ Sáu nhé." },
      { s: "tuan", text: "Can I tick off the tasks myself?",
        vi: "Em tự đánh dấu các việc đã làm được không ạ?" },
      { s: "hai", text: "Yes. After finishing everything, please show me the checklist. I will sign it off on Friday afternoon.",
        vi: "Được. Sau khi làm xong hết, em đưa anh xem danh sách. Anh sẽ ký xác nhận vào chiều thứ Sáu." },
      { s: "tuan", text: "Will do. Thank you, Mr. Hai.",
        vi: "Dạ vâng. Em cảm ơn anh Hải." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "Who is going to set up Tuan's email account?",
        options: ["Lan", "Mr. Hai", "Sam", "Tuan"],
        answer: 2, explanation: "“First, Sam is going to set up your email account.” Chị Lan là người kèm cặp, không phải người tạo tài khoản." },
      { id: "l2", type: "choice", prompt: "What will Tuan do for two days before he works on his own?",
        options: ["Shadow Lan", "Read the handbook", "Do the safety training", "Visit the emergency exits"],
        answer: 0, explanation: "“You are going to shadow her for two days before working on your own.” “Her” là chị Lan." },
      { id: "l3", type: "choice", prompt: "What will Mr. Hai do on Friday afternoon?",
        options: ["Set up the HR system", "Sign off the checklist", "Give Tuan the insurance form", "Meet Sam"],
        answer: 1, explanation: "“I will sign it off on Friday afternoon.” It = the checklist. Tuấn đưa mẫu bảo hiểm cho chị Lan, không phải cho anh Hải." }
    ]
  },

  reading: {
    title: "Your checklist email",
    intro: "Email chị Lan gửi Tuấn sau buổi nói chuyện với anh Hải. Đọc và tìm thứ tự các bước cần làm.",
    email: {
      from: "Lan Pham <lan.pham@riverside-trading.example>",
      to: "Tuan Nguyen",
      date: "Tuesday, 3 November",
      subject: "Your checklist for this week",
      greeting: "Dear Tuan,",
      paragraphs: [
        "Here is your checklist for this week. Please do the tasks in this order, and tick off each one when it is done."
      ],
      list: [
        "First, ask Sam to set up your email account.",
        "Then, complete the online safety training on the intranet.",
        "After that, ask me for access to the HR system.",
        "Finally, fill in the health insurance form and give it to me."
      ],
      after: [
        "Before using the HR system on your own, please shadow me for two days. I am your buddy.",
        "Before you leave today, please find the nearest emergency exit.",
        "On Friday afternoon, Mr. Hai will sign off your checklist."
      ],
      closing: "Best regards,",
      signature: ["Lan Pham", "HR Officer, Riverside Trading"]
    },
    glossary: [
      { term: "tick off", vi: "đánh dấu đã làm xong" },
      { term: "safety training", vi: "đào tạo an toàn lao động" },
      { term: "shadow", vi: "đi theo quan sát để học việc" },
      { term: "buddy", vi: "người kèm cặp nhân viên mới" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "What should Tuan do first?",
        options: ["Fill in the insurance form", "Ask Sam to set up his email account", "Shadow Lan", "Ask for access to the HR system"],
        answer: 1, explanation: "“First, ask Sam to set up your email account.” Điền mẫu bảo hiểm là bước cuối (Finally)." },
      { id: "r2", type: "choice", prompt: "What should Tuan do before using the HR system on his own?",
        options: ["Shadow Lan for two days", "Meet Sam", "Sign off the checklist", "Find the canteen"],
        answer: 0, explanation: "“Before using the HR system on your own, please shadow me for two days.” “Me” là chị Lan." },
      { id: "r3", type: "choice", prompt: "Who will sign off the checklist?",
        options: ["Sam", "Lan", "Mr. Hai", "Tuan"],
        answer: 2, explanation: "“On Friday afternoon, Mr. Hai will sign off your checklist.” Tuấn chỉ tự đánh dấu (tick off) từng việc." }
    ]
  },

  grammar: {
    title: "Putting steps in order",
    titleVi: "Nói về trình tự các bước",
    intro: "Danh sách việc cho nhân viên mới cần sắp xếp rõ thứ tự. Ta dùng các từ chỉ trình tự và before / after để nói việc nào làm trước, việc nào làm sau.",
    patterns: [
      { form: "First, … / Then, …", use: "First để bắt đầu, Then để nói bước tiếp theo. Sau từ chỉ trình tự thường có dấu phẩy.",
        examples: ["First, ask Sam to set up your account.", "Then, complete the safety training."] },
      { form: "After that, …", use: "Nói bước đến sau bước vừa nhắc. Phải có that: After that.",
        examples: ["After that, you will get access to the system.", "After that, read the company rules."] },
      { form: "Finally, …", use: "Nói bước cuối cùng của danh sách.",
        examples: ["Finally, fill in the health insurance form.", "Finally, show me your checklist."] },
      { form: "Before / After + V-ing", use: "Nói việc làm trước hoặc sau một việc khác, khi cả hai việc cùng một người làm. Sau before và after dùng V-ing.",
        examples: ["Before starting work, read the rules.", "After finishing the training, show me your checklist."] }
    ],
    mistakes: [
      { wrong: "Before to sign the form, read it carefully.", right: "Before signing the form, read it carefully.", note: "Sau before dùng V-ing, không dùng to." },
      { wrong: "After finish the form, give it to Lan.", right: "After finishing the form, give it to Lan.", note: "Sau after dùng V-ing: finishing." },
      { wrong: "First I call Sam, after I read the handbook.", right: "First I call Sam. After that, I read the handbook.", note: "Dùng After that (hoặc Then) để nối bước tiếp theo; After một mình cần đi với V-ing hoặc mệnh đề." },
      { wrong: "Before you starting the system, ask Sam.", right: "Before starting the system, ask Sam.", note: "Sau before dùng V-ing (before starting) hoặc dùng mệnh đề đầy đủ (before you start), không trộn hai cách." }
    ],
    tip: "Không dùng “Finally” cho mọi bước. Danh sách ngắn chỉ cần First, Then và Finally. Danh sách dài thêm After that hoặc Next ở giữa."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "A ___ is a list of tasks that you tick off one by one.",
      options: ["buddy", "shadow", "access", "checklist"],
      answer: 3, explanation: "Checklist = danh sách việc cần làm để đánh dấu từng việc đã xong." },
    { id: "p2", type: "gap", prompt: "Lan is my ___. She helps me in my first weeks.",
      options: ["buddy", "checklist", "exit", "insurance"],
      answer: 0, explanation: "Buddy = người đồng hành, kèm cặp nhân viên mới." },
    { id: "p3", type: "gap", prompt: "Safety training is ___. All new staff must do it.",
      options: ["optional", "temporary", "private", "mandatory"],
      answer: 3, explanation: "Mandatory = bắt buộc. Optional là tùy chọn, trái nghĩa với “must do”." },
    { id: "p4", type: "gap", prompt: "First, ask Sam to ___ your email account.",
      options: ["tick off", "set up", "sign off", "shadow"],
      answer: 1, explanation: "Set up an account = tạo tài khoản. Tick off là đánh dấu, sign off là ký xác nhận, shadow là đi theo học việc." },
    { id: "p5", type: "gap", prompt: "___, I sign the form. This is the last task.",
      options: ["First", "Then", "Finally", "After"],
      answer: 2, explanation: "Đây là việc cuối cùng (the last task) nên dùng Finally." },
    { id: "p6", type: "gap", prompt: "Before ___ the form, please read it carefully.",
      options: ["to sign", "signed", "sign", "signing"],
      answer: 3, explanation: "Sau before dùng V-ing: Before signing the form." },
    { id: "p7", type: "gap", prompt: "After ___ the training, you will get access to the HR system.",
      options: ["finishing", "finish", "to finish", "finished"],
      answer: 0, explanation: "Sau after dùng V-ing: After finishing the training." },
    { id: "p8", type: "choice", prompt: "Which order is correct?",
      options: ["Finally, tick off the tasks. First, read the form. Then, sign it.", "Then, read the form. First, sign it. Finally, give it to Lan.", "First, read the form. Then, sign it. Finally, give it to Lan.", "First, give it to Lan. Then, sign it. Finally, read the form."],
      answer: 2, explanation: "Hợp lý nhất là đọc mẫu, ký, rồi đưa cho chị Lan. Các câu còn lại đặt First, Then, Finally sai thứ tự nên không hợp lý." },
    { id: "p9", type: "choice", prompt: "Which sentence is correct?",
      options: ["Before to start work, read the rules.", "Before starting work, read the rules.", "Before start work, read the rules.", "Before you starting work, read the rules."],
      answer: 1, explanation: "Before + V-ing: Before starting work. Các câu còn lại dùng to, dùng động từ nguyên mẫu hoặc trộn you với -ing." },
    { id: "p10", type: "choice", prompt: "Which word has the main stress on the second syllable?",
      options: ["checklist", "mandatory", "access", "emergency"],
      answer: 3, explanation: "e·MER·gen·cy có trọng âm ở âm tiết thứ hai. CHECK·list, MAN·da·to·ry, AC·cess đều nhấn ở âm tiết đầu." }
  ],

  writing: {
    title: "Write a checklist email",
    task: "Bạn là chị Lan. Hãy viết email gửi nhân viên mới tên Khanh, nêu các việc cần làm trong tuần đầu theo thứ tự (50–90 từ).",
    requirements: [
      "Mở đầu bằng lời chào và nói đây là danh sách việc tuần đầu.",
      "Dùng First để nêu việc đầu tiên.",
      "Dùng Then để nêu việc tiếp theo.",
      "Dùng After that để nêu việc kế tiếp.",
      "Dùng Finally để nêu việc cuối cùng.",
      "Dùng Before hoặc After + V-ing, rồi kết thúc email và ký tên."
    ],
    minWords: 50,
    maxWords: 90,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có First", pattern: "\\bfirst\\b" },
      { label: "Có Then", pattern: "\\bthen\\b" },
      { label: "Có After that", pattern: "after that" },
      { label: "Có Finally", pattern: "\\bfinally\\b" },
      { label: "Có Before / After + V-ing", pattern: "\\b(before|after)\\s+\\w+ing\\b" },
      { label: "Có lời kết (Best regards …)", pattern: "regards|sincerely|best wishes" }
    ],
    model: [
      "Dear Khanh,",
      "Here is your checklist for the first week. Please tick off each task.",
      "First, ask Sam to set up your email account. Then complete the safety training. After that, read the company rules. Before starting work on your own, shadow your buddy for two days. Finally, fill in the health insurance form.",
      "Please ask me if you have any questions.",
      "Best regards,",
      "Lan Pham"
    ]
  },

  review: {
    keyPhrases: [
      { en: "Here is your checklist for this week.", vi: "Đây là danh sách việc của bạn trong tuần này." },
      { en: "First, ask Sam to set up your email account.", vi: "Trước tiên, hãy nhờ Sam tạo tài khoản email cho bạn." },
      { en: "After that, you will get access to the HR system.", vi: "Sau đó bạn sẽ có quyền vào hệ thống nhân sự." },
      { en: "Before working on your own, please shadow Lan.", vi: "Trước khi tự làm một mình, bạn hãy đi theo học việc cùng chị Lan." },
      { en: "Finally, please fill in the health insurance form.", vi: "Cuối cùng, vui lòng điền mẫu bảo hiểm y tế." },
      { en: "Mr. Hai will sign off your checklist on Friday.", vi: "Anh Hải sẽ ký xác nhận danh sách của bạn vào thứ Sáu." }
    ]
  }
});
