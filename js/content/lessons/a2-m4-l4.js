/* =========================================================
   A2 · Module 4 (HR Operations) · Bài 4
   "Keeping employee records" — Quản lý hồ sơ nhân viên
   Ngữ pháp: bị động hiện tại và quá khứ (is kept / was updated)
   Câu chuyện: thứ Năm 26/11/2026. Chị Lan chỉ Tuấn cách lưu hồ sơ nhân viên.
   Công ty Riverside Trading và các nhân vật đều là hư cấu.
   ========================================================= */
window.EOH.registerLesson({
  id: "a2-m4-l4",
  reviewStatus: "draft", // "draft" = bản nháp, chưa duyệt
  duration: "35–45 phút",
  scenario: "Thứ Năm 26/11. Chị Lan hướng dẫn Tuấn cách giữ hồ sơ nhân viên: hồ sơ giấy để ở tủ có khóa, hồ sơ điện tử nằm trong cơ sở dữ liệu nhân sự, và ai được xem. Sau đó chị gửi email tóm tắt các quy tắc cần nhớ.",

  objectives: [
    "Hiểu và dùng 10 từ vựng về hồ sơ nhân viên (personnel file, confidential, archive…).",
    "Nghe hiểu cách hồ sơ giấy và hồ sơ điện tử được lưu giữ.",
    "Đọc email quy tắc hồ sơ và tìm đúng thông tin: nơi lưu, thời hạn cập nhật, người được xem.",
    "Dùng câu bị động hiện tại (is kept) và quá khứ (was updated) để nói về hồ sơ.",
    "Viết email báo cáo ngắn về việc kiểm tra và cập nhật hồ sơ trong ngày."
  ],

  vocabulary: [
    { word: "personnel file", ipa: "/ˌpɜːrsəˈnel faɪl/", pos: "noun", meaning: "hồ sơ nhân sự của một nhân viên",
      example: "Every employee has a personnel file.", exampleVi: "Mỗi nhân viên đều có một hồ sơ nhân sự." },
    { word: "confidential", ipa: "/ˌkɑːnfɪˈdenʃəl/", pos: "adjective", meaning: "bí mật, không được tiết lộ",
      example: "Salary information is confidential.", exampleVi: "Thông tin về lương là bí mật." },
    { word: "filing cabinet", ipa: "/ˈfaɪlɪŋ ˌkæbɪnət/", pos: "noun", meaning: "tủ đựng hồ sơ",
      example: "The files are kept in a locked filing cabinet.", exampleVi: "Hồ sơ được cất trong tủ hồ sơ có khóa." },
    { word: "HR database", ipa: "/ˌeɪtʃ ˈɑːr ˈdeɪtəbeɪs/", pos: "noun", meaning: "cơ sở dữ liệu nhân sự trên máy tính",
      example: "Digital records are stored in the HR database.", exampleVi: "Hồ sơ điện tử được lưu trong cơ sở dữ liệu nhân sự." },
    { word: "authorized", ipa: "/ˈɔːθəˌraɪzd/", pos: "adjective", meaning: "được phép, có quyền",
      example: "Only authorized people can open the files.", exampleVi: "Chỉ những người có quyền mới được mở hồ sơ." },
    { word: "outdated", ipa: "/ˌaʊtˈdeɪtɪd/", pos: "adjective", meaning: "cũ, đã lỗi thời, không còn đúng",
      example: "My old phone number is outdated.", exampleVi: "Số điện thoại cũ của tôi không còn đúng nữa." },
    { word: "scan", ipa: "/ˈskæn/", pos: "verb", meaning: "quét (giấy tờ) thành tệp trên máy tính",
      example: "Please scan the contract and save the file.", exampleVi: "Vui lòng quét hợp đồng và lưu tệp lại." },
    { word: "archive", ipa: "/ˈɑːrkaɪv/", pos: "verb", meaning: "lưu trữ lâu dài",
      example: "Important documents are scanned and archived.", exampleVi: "Các tài liệu quan trọng được quét và lưu trữ." },
    { word: "shred", ipa: "/ˈʃred/", pos: "verb", meaning: "hủy bằng máy cắt giấy",
      example: "Old paper files are shredded.", exampleVi: "Hồ sơ giấy cũ được cắt nhỏ để hủy." },
    { word: "backup", ipa: "/ˈbækʌp/", pos: "noun", meaning: "bản sao lưu dự phòng",
      example: "A backup is made every night.", exampleVi: "Bản sao lưu được tạo mỗi đêm." }
  ],

  pronunciation: {
    groups: [
      {
        title: "Đuôi -ed của động từ bị động",
        text: "Đuôi -ed có ba cách đọc: /t/ sau âm vô thanh, /d/ sau âm hữu thanh, và /ɪd/ sau âm /t/ hoặc /d/. Hãy đọc đúng để người nghe phân biệt thì quá khứ.",
        items: [
          { word: "scanned", marked: "scanned /d/", note: "Sau âm /n/: đọc /d/." },
          { word: "archived", marked: "archived /d/" },
          { word: "updated", marked: "updated /ɪd/", note: "Sau âm /t/: thêm âm tiết /ɪd/." },
          { word: "shredded", marked: "shredded /ɪd/", note: "Sau âm /d/: thêm âm tiết /ɪd/." },
          { word: "checked", marked: "checked /t/", note: "Sau âm /k/: đọc /t/." }
        ]
      },
      {
        title: "Trọng âm của từ dài",
        text: "Từ tận cùng bằng -tial có trọng âm ở âm tiết ngay trước đuôi đó.",
        items: [
          { word: "confidential", marked: "con·fi·DEN·tial" },
          { word: "authorized", marked: "AU·tho·rized" },
          { word: "database", marked: "DA·ta·base", note: "Từ ghép: trọng âm ở phần đầu." }
        ]
      }
    ],
    sentences: [
      "Paper files are kept in a locked cabinet.",
      "Her new address was updated yesterday.",
      "Payroll records are kept for ten years."
    ]
  },

  listening: {
    title: "How we keep employee records",
    setting: "Thứ Năm, tại phòng Nhân sự. Chị Lan chỉ cho Tuấn cách giữ hồ sơ nhân viên.",
    speakers: { lan: "Lan (HR Officer)", tuan: "Tuan (HR Assistant)" },
    lines: [
      { s: "lan", text: "Tuan, today I will show you how we keep employee records. Every employee has a personnel file.",
        vi: "Tuấn, hôm nay chị chỉ em cách mình giữ hồ sơ nhân viên. Mỗi nhân viên đều có một hồ sơ nhân sự." },
      { s: "tuan", text: "What is in a personnel file?",
        vi: "Trong hồ sơ nhân sự có những gì ạ?" },
      { s: "lan", text: "The contract, a copy of the ID card, bank details, leave forms and training certificates. All of this information is confidential.",
        vi: "Hợp đồng, bản sao thẻ căn cước, thông tin ngân hàng, đơn nghỉ phép và chứng chỉ đào tạo. Tất cả thông tin này đều bí mật." },
      { s: "tuan", text: "Where are the files kept?",
        vi: "Hồ sơ được cất ở đâu ạ?" },
      { s: "lan", text: "Paper files are kept in the locked filing cabinet in our office. Digital records are stored in the HR database. Only authorized people can open them.",
        vi: "Hồ sơ giấy được cất trong tủ có khóa ở văn phòng mình. Hồ sơ điện tử được lưu trong cơ sở dữ liệu nhân sự. Chỉ những người có quyền mới được mở." },
      { s: "tuan", text: "I see. Hoa told me she has a new address. Is it updated in the system?",
        vi: "Em hiểu rồi. Chị Hoa nói chị ấy có địa chỉ mới. Địa chỉ đó đã được cập nhật trong hệ thống chưa ạ?" },
      { s: "lan", text: "Yes. It was updated yesterday, after she gave us a copy of her rental contract. Outdated information can cause problems, for example with tax forms.",
        vi: "Rồi. Nó đã được cập nhật hôm qua, sau khi chị ấy đưa mình bản sao hợp đồng thuê nhà. Thông tin cũ có thể gây rắc rối, ví dụ với các biểu mẫu thuế." },
      { s: "tuan", text: "What happens to the files of former employees?",
        vi: "Hồ sơ của người đã nghỉ việc thì sao ạ?" },
      { s: "lan", text: "Personnel files are kept for at least five years after the employee leaves. Payroll records are kept for ten years. After that, they are shredded. Important documents are scanned and archived first.",
        vi: "Hồ sơ nhân sự được giữ ít nhất năm năm sau khi nhân viên nghỉ việc. Bảng lương được giữ mười năm. Sau đó chúng bị hủy bằng máy cắt giấy. Các tài liệu quan trọng được quét và lưu trữ trước." },
      { s: "tuan", text: "And the database? Is it safe?",
        vi: "Còn cơ sở dữ liệu thì sao ạ? Có an toàn không ạ?" },
      { s: "lan", text: "Yes. A backup is made every night by Sam from IT Support.",
        vi: "Có. Mỗi đêm anh Sam ở bộ phận IT Support tạo một bản sao lưu." },
      { s: "tuan", text: "Thank you. I understand how important records are.",
        vi: "Em cảm ơn chị. Em hiểu hồ sơ quan trọng thế nào rồi ạ." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "Where are paper files kept?",
        options: ["In the HR database", "In a locked filing cabinet", "On the intranet", "In the staff canteen"],
        answer: 1, explanation: "“Paper files are kept in the locked filing cabinet in our office.” Hồ sơ điện tử mới nằm trong cơ sở dữ liệu nhân sự." },
      { id: "l2", type: "choice", prompt: "Why was Hoa's address updated yesterday?",
        options: ["She asked Mr. Hai.", "She changed her job.", "She joined the company.", "She gave HR a copy of her rental contract."],
        answer: 3, explanation: "“It was updated yesterday, after she gave us a copy of her rental contract.”" },
      { id: "l3", type: "choice", prompt: "How long are payroll records kept?",
        options: ["Two years", "Three years", "Five years", "Ten years"],
        answer: 3, explanation: "“Payroll records are kept for ten years.” Hồ sơ nhân sự của người đã nghỉ việc được giữ ít nhất năm năm; bảng lương giữ lâu hơn vì là chứng từ kế toán (Luật Kế toán: tối thiểu mười năm)." }
    ]
  },

  reading: {
    title: "Employee records: rules to remember",
    intro: "Email chị Lan gửi cho Tuấn chiều thứ Năm 26/11. Đọc và tìm các quy tắc về hồ sơ.",
    email: {
      from: "Lan Pham <lan.pham@riverside-trading.example>",
      to: "Tuan Nguyen <tuan.nguyen@riverside-trading.example>",
      date: "Thursday, 26 November",
      subject: "Employee records: rules to remember",
      greeting: "Dear Tuan,",
      paragraphs: [
        "Thank you for your help today. Here is a short summary of our rules for employee records:"
      ],
      list: [
        "Personnel files are kept in the locked filing cabinet. The key is kept by me and Mr. Hai.",
        "Changes in the HR database are made within two working days.",
        "Salary information is shown only to authorized people."
      ],
      after: [
        "This week, five personnel files were checked and three outdated phone numbers were corrected. Next week, you will scan the new contracts.",
        "Please ask me if you are not sure about any record."
      ],
      closing: "Best regards,",
      signature: ["Lan Pham", "HR Officer, Riverside Trading"]
    },
    glossary: [
      { term: "summary", vi: "bản tóm tắt" },
      { term: "key", vi: "chìa khóa" },
      { term: "within two working days", vi: "trong vòng hai ngày làm việc" },
      { term: "be sure about", vi: "chắc chắn về" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "Who keeps the key to the filing cabinet?",
        options: ["Lan and Mr. Hai", "Tuan and Sam", "Hoa and Minh", "Mr. Hai and David"],
        answer: 0, explanation: "“The key is kept by me and Mr. Hai.” “Me” ở đây là chị Lan, người viết email." },
      { id: "r2", type: "choice", prompt: "How quickly are changes made in the HR database?",
        options: ["On the same day", "Within one week", "Within two working days", "Every month"],
        answer: 2, explanation: "“Changes in the HR database are made within two working days.”" },
      { id: "r3", type: "choice", prompt: "Which statement is TRUE?",
        options: ["Five phone numbers were corrected.", "Salary information is shown to every employee.", "Tuan scanned the contracts this week.", "Five personnel files were checked this week."],
        answer: 3, explanation: "“Five personnel files were checked and three outdated phone numbers were corrected.” Việc quét hợp đồng mới là kế hoạch tuần sau." }
    ]
  },

  grammar: {
    title: "Present and past passive",
    titleVi: "Bị động hiện tại và quá khứ",
    intro: "Khi nói về hồ sơ, điều quan trọng là hồ sơ được làm gì, còn người làm thường không cần nói. Vì vậy nhân sự dùng nhiều câu bị động: hồ sơ được cất, được cập nhật, được hủy.",
    patterns: [
      { form: "am / is / are + quá khứ phân từ (V3)", use: "Bị động hiện tại: việc luôn xảy ra hoặc là quy trình.",
        examples: ["Paper files are kept in a locked cabinet.", "A backup is made every night."] },
      { form: "was / were + quá khứ phân từ (V3)", use: "Bị động quá khứ: việc đã xảy ra xong.",
        examples: ["Her new address was updated yesterday.", "Five files were checked this week."] },
      { form: "… + by + người làm", use: "Chỉ thêm by khi cần nói rõ ai làm.",
        examples: ["A backup is made by Sam.", "The key is kept by Ms. Lan."] },
      { form: "Phủ định và câu hỏi: is not / Are … ?", use: "Phủ định thêm not; câu hỏi đưa is / are / was / were lên trước.",
        examples: ["Salary information is not shown to everyone.", "Where are the files kept?"] }
    ],
    mistakes: [
      { wrong: "The files keep in a locked cabinet.", right: "The files are kept in a locked cabinet.", note: "Câu bị động cần am / is / are + V3." },
      { wrong: "Her address updated yesterday.", right: "Her address was updated yesterday.", note: "Bị động quá khứ cần was / were trước V3." },
      { wrong: "The old files was scanned.", right: "The old files were scanned.", note: "files là số nhiều: were scanned." },
      { wrong: "Payroll records are keeped for ten years.", right: "Payroll records are kept for ten years.", note: "keep là động từ bất quy tắc: keep – kept – kept." }
    ],
    tip: "Dùng bị động khi người làm không quan trọng hoặc đã rõ. Hồ sơ nhân sự dùng nhiều bị động vì điều quan trọng là hồ sơ được xử lý thế nào. Về thời hạn lưu: chứng từ kế toán như bảng lương phải lưu tối thiểu 10 năm (Luật Kế toán); hồ sơ nhân sự và hợp đồng lao động thường được giữ ít nhất 5 năm sau khi chấm dứt hợp đồng."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "Information that only authorized people can see is ___.",
      options: ["confidential", "outdated", "scanned", "archived"],
      answer: 0, explanation: "Confidential = bí mật, chỉ người có quyền mới được xem. Outdated nghĩa là cũ, không còn đúng." },
    { id: "p2", type: "gap", prompt: "My old phone number is no longer correct. The file has ___ information.",
      options: ["backup", "outdated", "authorized", "confidential"],
      answer: 1, explanation: "Outdated = cũ, không còn đúng nữa. Backup là danh từ (bản sao lưu) nên không đứng trước information như tính từ." },
    { id: "p3", type: "gap", prompt: "Please ___ the contract, then save the PDF file on the computer.",
      options: ["shred", "filing cabinet", "outdated", "scan"],
      answer: 3, explanation: "Scan = quét giấy tờ thành tệp PDF. Shred là hủy bằng máy cắt giấy, nên sẽ không còn gì để lưu." },
    { id: "p4", type: "gap", prompt: "Paper files are ___ in a locked cabinet.",
      options: ["keep", "keeping", "kept", "keeped"],
      answer: 2, explanation: "Bị động hiện tại: are + V3. Quá khứ phân từ của keep là kept (bất quy tắc), không phải keeped." },
    { id: "p5", type: "gap", prompt: "Her new address ___ updated yesterday.",
      options: ["was", "were", "is", "has"],
      answer: 0, explanation: "Address số ít và việc xảy ra hôm qua: was updated. “Is updated” là hiện tại; “has updated” không hợp với yesterday." },
    { id: "p6", type: "gap", prompt: "The backups ___ made every night.",
      options: ["is", "are", "was", "be"],
      answer: 1, explanation: "backups số nhiều, việc lặp lại mỗi đêm: are made. “Is” và “was” sai về số ít." },
    { id: "p7", type: "gap", prompt: "Yesterday, three new contracts ___ scanned.",
      options: ["is", "are", "were", "was"],
      answer: 2, explanation: "Contracts số nhiều và việc đã xảy ra hôm qua: were scanned." },
    { id: "p8", type: "choice", prompt: "Which sentence is correct?",
      options: ["The files are stored in the HR database.", "The files store in the HR database.", "The files is stored in the HR database.", "The files stored are in the HR database."],
      answer: 0, explanation: "Files số nhiều: are stored. B thiếu are, C dùng is sai với files, D sai trật tự từ." },
    { id: "p9", type: "choice", prompt: "Where is the main stress in “confidential”?",
      options: ["CON·fi·den·tial", "con·FI·den·tial", "con·fi·den·TIAL", "con·fi·DEN·tial"],
      answer: 3, explanation: "Từ tận cùng -tial có trọng âm ngay trước đuôi đó: con·fi·DEN·tial." },
    { id: "p10", type: "choice", context: "A colleague asks: “Who can see my personnel file?”", prompt: "What is the best reply?",
      options: ["Everyone in the company can see it.", "Only authorized people can see it.", "It was shredded yesterday.", "It is outdated."],
      answer: 1, explanation: "Hồ sơ nhân sự là thông tin bí mật; chỉ người có quyền (authorized) mới được xem." }
  ],

  writing: {
    title: "A short update to your line manager",
    task: "Bạn là Tuấn. Hãy viết email báo cáo ngắn cho anh Hải về việc đã làm với hồ sơ nhân viên hôm nay, thứ Năm 26/11 (50–90 từ). Dùng câu bị động.",
    requirements: [
      "Mở đầu bằng lời chào (Dear Mr. Hai,).",
      "Nói ba hồ sơ nhân sự đã được kiểm tra (dùng were checked).",
      "Nói hai số điện thoại cũ đã được sửa trong cơ sở dữ liệu nhân sự.",
      "Nói các bản hợp đồng cũ đã được quét và đang được cất trong tủ hồ sơ.",
      "Nhờ anh duyệt danh sách hồ sơ cần lưu trữ bằng Could you please…?",
      "Kết thúc email và ký tên."
    ],
    minWords: 50,
    maxWords: 90,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Dear …)", pattern: "\\bdear\\b|\\bhello\\b|\\bhi\\b" },
      { label: "Có câu bị động (was / were / is / are + V3)", pattern: "\\b(was|were|is|are)\\s+\\w+(ed|en|pt)\\b" },
      { label: "Nhắc tới hồ sơ (file / record)", pattern: "\\bfiles?\\b|\\brecords?\\b" },
      { label: "Nhắc tới cơ sở dữ liệu hoặc tủ hồ sơ", pattern: "database|cabinet" },
      { label: "Có lời nhờ lịch sự (Could you / Please)", pattern: "could you|can you|\\bplease\\b" },
      { label: "Có lời kết (Best regards …)", pattern: "regards|sincerely|best wishes" }
    ],
    model: [
      "Dear Mr. Hai,",
      "Here is my update for today. Three personnel files were checked this morning, and two outdated phone numbers were corrected in the HR database. The old contract copies were scanned and are kept in the filing cabinet.",
      "All the records are confidential, so I did not send any file by email. Could you please approve the archive list for former employees? Thank you.",
      "Best regards,",
      "Tuan Nguyen"
    ]
  },

  review: {
    keyPhrases: [
      { en: "Paper files are kept in a locked filing cabinet.", vi: "Hồ sơ giấy được cất trong tủ hồ sơ có khóa." },
      { en: "Only authorized people can open the files.", vi: "Chỉ những người có quyền mới được mở hồ sơ." },
      { en: "Her new address was updated yesterday.", vi: "Địa chỉ mới của chị ấy đã được cập nhật hôm qua." },
      { en: "Payroll records are kept for ten years.", vi: "Bảng lương được giữ mười năm." },
      { en: "A backup is made every night.", vi: "Bản sao lưu được tạo mỗi đêm." },
      { en: "All of this information is confidential.", vi: "Tất cả thông tin này đều bí mật." }
    ]
  }
});
