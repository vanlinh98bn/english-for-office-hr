/* =========================================================
   A2 · Module 3 (Recruitment and Onboarding) · Bài 2
   "CVs and application forms"
   Nối tiếp câu chuyện: Tuấn gửi hồ sơ thứ Ba 13/10/2026; thứ Tư 14/10
   chị Lan xem CV của Tuấn Nguyen và vài ứng viên khác cùng anh Hải.
   Công ty Riverside Trading và các nhân vật đều là hư cấu.
   ========================================================= */
window.EOH.registerLesson({
  id: "a2-m3-l2",
  reviewStatus: "draft", // "draft" = bản nháp, chưa duyệt
  duration: "35–45 phút",
  scenario: "Tin tuyển dụng đã đăng. Thứ Ba 13/10, Tuấn (Tuan Nguyen) gửi hồ sơ xin việc. Thứ Tư 14/10, chị Lan (Lan Pham) xem các CV nhận được cùng anh Hải (Mr. Hai) và chọn người vào vòng phỏng vấn.",

  objectives: [
    "Hiểu và dùng 10 từ vựng thường gặp về CV và đơn ứng tuyển (cover letter, reference, work history…).",
    "Nghe hiểu cuộc trao đổi nhận xét về hồ sơ ứng viên.",
    "Đọc email ứng tuyển và tìm đúng thông tin về học vấn, kinh nghiệm, giấy tờ đính kèm.",
    "Nói về kinh nghiệm bằng hiện tại hoàn thành và quá khứ đơn, với for và since.",
    "Viết đoạn email ứng tuyển ngắn giới thiệu kinh nghiệm của mình."
  ],

  vocabulary: [
    { word: "cover letter", ipa: "/ˈkʌvər ˌletər/", pos: "noun", meaning: "thư xin việc gửi kèm CV",
      example: "He sent a short cover letter with his CV.", exampleVi: "Anh ấy gửi một thư xin việc ngắn kèm CV." },
    { word: "application form", ipa: "/ˌæplɪˈkeɪʃən fɔːrm/", pos: "noun", meaning: "đơn ứng tuyển (mẫu điền sẵn)",
      example: "Please fill in the application form.", exampleVi: "Vui lòng điền đơn ứng tuyển." },
    { word: "work history", ipa: "/ˈwɜːrk ˌhɪstəri/", pos: "noun", meaning: "quá trình làm việc",
      example: "Her work history shows five years in sales.", exampleVi: "Quá trình làm việc của cô ấy cho thấy năm năm trong ngành bán hàng." },
    { word: "reference", ipa: "/ˈrefərəns/", pos: "noun", meaning: "người giới thiệu (người có thể xác nhận năng lực của bạn)",
      example: "Please give the names of two references.", exampleVi: "Vui lòng ghi tên hai người giới thiệu." },
    { word: "internship", ipa: "/ˈɪntɜːrnʃɪp/", pos: "noun", meaning: "thời gian thực tập",
      example: "I did an internship in an HR department.", exampleVi: "Tôi từng thực tập ở một phòng nhân sự." },
    { word: "graduate", ipa: "/ˈɡrædʒueɪt/", pos: "verb", meaning: "tốt nghiệp",
      example: "She graduated in June.", exampleVi: "Cô ấy tốt nghiệp vào tháng Sáu." },
    { word: "shortlist", ipa: "/ˈʃɔːrtlɪst/", pos: "verb", meaning: "chọn vào danh sách rút gọn (những người sẽ được phỏng vấn)",
      example: "We shortlisted three candidates.", exampleVi: "Chúng tôi chọn ba ứng viên vào danh sách phỏng vấn." },
    { word: "relevant", ipa: "/ˈreləvənt/", pos: "adjective", meaning: "liên quan, phù hợp với công việc",
      example: "He has relevant experience in HR.", exampleVi: "Anh ấy có kinh nghiệm phù hợp trong ngành nhân sự." },
    { word: "achievement", ipa: "/əˈtʃiːvmənt/", pos: "noun", meaning: "thành tích",
      example: "Write one achievement for each job.", exampleVi: "Hãy viết một thành tích cho mỗi công việc." },
    { word: "currently", ipa: "/ˈkɜːrəntli/", pos: "adverb", meaning: "hiện tại, hiện nay",
      example: "I am currently working as an intern.", exampleVi: "Hiện nay tôi đang làm thực tập sinh." }
  ],

  pronunciation: {
    groups: [
      {
        title: "Trọng âm của từ",
        text: "Nhiều từ trong CV có trọng âm ở âm tiết đầu. Riêng achievement có trọng âm ở âm tiết thứ hai. Âm tiết in hoa là âm đọc to và dài hơn.",
        items: [
          { word: "reference", marked: "REF·er·ence", note: "Có thể đọc 3 âm tiết (REF·er·ence) hoặc 2 âm tiết (REF·rence)." },
          { word: "internship", marked: "IN·tern·ship" },
          { word: "relevant", marked: "REL·e·vant" },
          { word: "currently", marked: "CUR·rent·ly" },
          { word: "achievement", marked: "a·CHIEVE·ment", note: "Trọng âm ở âm tiết thứ hai." }
        ]
      },
      {
        title: "Dạng rút gọn của have / has",
        text: "Khi nói nhanh, have và has thường được đọc nhẹ hoặc rút gọn. Hãy nghe và nhắc lại để nói tự nhiên hơn.",
        items: [
          { word: "I have worked", marked: "I've worked", note: "I've đọc là /aɪv/." },
          { word: "She has used", marked: "She's used", note: "She's đọc là /ʃiːz/." },
          { word: "We have not", marked: "We haven't", note: "Âm cuối /t/ nhẹ." },
          { word: "He has not", marked: "He hasn't" }
        ]
      }
    ],
    sentences: [
      "I graduated in June.",
      "I have worked here since July.",
      "He has used Excel for three years."
    ]
  },

  listening: {
    title: "Looking at the CVs",
    setting: "Thứ Tư 14/10, phòng Nhân sự. Chị Lan báo cáo với anh Hải sau khi xem các CV.",
    speakers: { lan: "Lan (HR Officer)", hai: "Mr. Hai (line manager)" },
    lines: [
      { s: "lan", text: "Mr. Hai, I have looked at six CVs for the HR Assistant job.",
        vi: "Anh Hải, em đã xem sáu bản CV cho vị trí trợ lý nhân sự." },
      { s: "hai", text: "Good. Are there any strong candidates?",
        vi: "Tốt. Có ứng viên nào nổi bật không?" },
      { s: "lan", text: "Yes. Tuan Nguyen looks good. He graduated in June, and he has worked as an HR intern since July.",
        vi: "Có ạ. Tuấn Nguyễn khá tốt. Bạn ấy tốt nghiệp vào tháng Sáu và làm thực tập sinh nhân sự từ tháng Bảy đến nay." },
      { s: "hai", text: "Has he used Excel before?",
        vi: "Bạn ấy đã dùng Excel chưa?" },
      { s: "lan", text: "Yes. His CV says he has used Excel for three years.",
        vi: "Rồi ạ. CV ghi bạn ấy dùng Excel được ba năm." },
      { s: "hai", text: "Did he send a cover letter?",
        vi: "Bạn ấy có gửi thư xin việc không?" },
      { s: "lan", text: "He did. It is a good one. He also gave two references.",
        vi: "Có ạ, và viết khá tốt. Bạn ấy cũng ghi hai người giới thiệu." },
      { s: "hai", text: "What about the other candidates?",
        vi: "Còn các ứng viên khác thì sao?" },
      { s: "lan", text: "Nam Hoang has worked in sales for five years, but he has not worked in HR. Thao Le has not sent the application form.",
        vi: "Nam Hoàng làm bán hàng được năm năm nhưng chưa làm nhân sự. Thảo Lê thì chưa gửi đơn ứng tuyển." },
      { s: "hai", text: "OK. Let's shortlist Tuan and Nam. Please arrange interviews for next week.",
        vi: "Được. Mình chọn Tuấn và Nam vào danh sách phỏng vấn. Em sắp xếp phỏng vấn trong tuần sau nhé." },
      { s: "lan", text: "Sure. I will call them on Monday.",
        vi: "Vâng. Thứ Hai em sẽ gọi cho hai bạn." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "Since when has Tuan worked as an HR intern?",
        options: ["For three years", "Since last year", "Since July", "Since June"],
        answer: 2, explanation: "“He graduated in June, and he has worked as an HR intern since July.” Tháng Sáu là lúc tốt nghiệp, tháng Bảy mới là lúc bắt đầu thực tập." },
      { id: "l2", type: "choice", prompt: "How long has Tuan used Excel?",
        options: ["For three years", "Since July", "For five years", "For three months"],
        answer: 0, explanation: "“His CV says he has used Excel for three years.” “Five years” là thời gian Nam làm bán hàng." },
      { id: "l3", type: "choice", prompt: "Who has not sent the application form?",
        options: ["Tuan Nguyen", "Nam Hoang", "Lan Pham", "Thao Le"],
        answer: 3, explanation: "“Thao Le has not sent the application form.” Tuấn và Nam đã được chọn vào danh sách phỏng vấn." }
    ]
  },

  reading: {
    title: "An application email",
    intro: "Email Tuấn gửi chị Lan ngày 13/10 để xin vào vị trí trợ lý nhân sự. Đọc và tìm học vấn, kinh nghiệm và giấy tờ đính kèm.",
    email: {
      from: "Tuan Nguyen",
      to: "Lan Pham",
      date: "Tuesday, 13 October",
      subject: "Application for HR Assistant",
      greeting: "Dear Ms. Lan,",
      paragraphs: [
        "I am writing to apply for the post of HR Assistant. I graduated in June with a degree in business management.",
        "Since July, I have worked as an HR intern in a small company. I have helped with recruitment and employee records. I have also used Excel for three years.",
        "I have attached:"
      ],
      list: [
        "my CV",
        "a short cover letter",
        "the completed application form"
      ],
      after: [
        "My two references are on the form. I am available for an interview at any time next week. Thank you for your time."
      ],
      closing: "Best regards,",
      signature: ["Tuan Nguyen"]
    },
    glossary: [
      { term: "apply for the post of…", vi: "xin ứng tuyển vào vị trí…" },
      { term: "employee records", vi: "hồ sơ nhân viên" },
      { term: "completed form", vi: "đơn đã điền xong" },
      { term: "available", vi: "rảnh, có thể sắp xếp thời gian" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "Why is Tuan writing to Lan?",
        options: ["To ask about his salary", "To apply for a job", "To change an interview time", "To say thank you after an interview"],
        answer: 1, explanation: "“I am writing to apply for the post of HR Assistant.” Tuấn đang ứng tuyển, chưa có phỏng vấn nên chưa thể cảm ơn sau phỏng vấn." },
      { id: "r2", type: "choice", prompt: "What does Tuan say about Excel?",
        options: ["He has never used it.", "He used it once in June.", "He will learn it next month.", "He has used it for three years."],
        answer: 3, explanation: "“I have also used Excel for three years.”" },
      { id: "r3", type: "choice", prompt: "Which statement is TRUE?",
        options: ["He graduated in July.", "He has worked in HR for three years.", "He has worked as an HR intern since July.", "He sent his CV but not the application form."],
        answer: 2, explanation: "“Since July, I have worked as an HR intern.” Tuấn tốt nghiệp vào tháng Sáu, Excel mới là ba năm, và anh có đính kèm cả đơn ứng tuyển." }
    ]
  },

  grammar: {
    title: "Talking about experience",
    titleVi: "Nói về kinh nghiệm làm việc",
    intro: "Trong CV, email ứng tuyển và buổi trao đổi về ứng viên, ta thường kể điều đã làm. Hiện tại hoàn thành nói về kinh nghiệm kéo dài đến bây giờ. Quá khứ đơn nói về việc đã kết thúc ở một thời điểm rõ ràng.",
    patterns: [
      { form: "have / has + V3 (hiện tại hoàn thành)", use: "Nói về kinh nghiệm hoặc việc làm kéo dài đến hiện tại, không nêu thời điểm cụ thể.",
        examples: ["I have worked in sales for five years.", "She has used Excel every day."] },
      { form: "Quá khứ đơn + mốc thời gian đã qua", use: "Nói việc đã xong tại một thời điểm rõ ràng (in June, last year, in 2022).",
        examples: ["I graduated in June.", "He joined the company last year."] },
      { form: "for + khoảng thời gian / since + mốc bắt đầu", use: "For cho biết bao lâu (for three years). Since cho biết từ khi nào (since July). Cả hai thường đi với hiện tại hoàn thành.",
        examples: ["I have worked here for two years.", "I have worked here since July."] },
      { form: "Have you…? / Yes, I have. / No, I haven't.", use: "Hỏi và trả lời ngắn về kinh nghiệm. Phủ định dùng have not / has not.",
        examples: ["Have you worked in HR?", "No, I haven't, but I have worked in sales."] }
    ],
    mistakes: [
      { wrong: "I have work here since July.", right: "I have worked here since July.", note: "Sau have dùng V3: worked, used, helped." },
      { wrong: "I have worked here for July.", right: "I have worked here since July.", note: "For + khoảng thời gian; since + mốc thời gian (July, 2022, Monday)." },
      { wrong: "I have graduated in June.", right: "I graduated in June.", note: "Có mốc thời gian đã qua (in June) thì dùng quá khứ đơn." },
      { wrong: "She has worked here since three years.", right: "She has worked here for three years.", note: "Three years là khoảng thời gian, nên dùng for, không dùng since." }
    ],
    tip: "Trong CV, hãy viết việc đã kết thúc bằng quá khứ đơn (worked, managed) và việc còn đang làm bằng hiện tại hoàn thành hoặc hiện tại (I have worked… / I currently work…)."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "You write a ___ to explain why you want the job, and you send it with your CV.",
      options: ["reference", "cover letter", "internship", "work history"],
      answer: 1, explanation: "Cover letter = thư xin việc gửi kèm CV. Reference là người giới thiệu, không phải loại thư bạn tự viết." },
    { id: "p2", type: "gap", prompt: "Please give the names of two ___ who know your work.",
      options: ["references", "internships", "achievements", "forms"],
      answer: 0, explanation: "References = những người có thể xác nhận năng lực của bạn. Các từ còn lại không chỉ người." },
    { id: "p3", type: "gap", prompt: "I ___ in June, and I started my internship in July.",
      options: ["have graduated", "graduate", "graduated", "was graduate"],
      answer: 2, explanation: "Có mốc thời gian đã qua (in June) nên dùng quá khứ đơn: graduated." },
    { id: "p4", type: "gap", prompt: "She has worked here ___ March.",
      options: ["for", "from", "in", "since"],
      answer: 3, explanation: "March là một mốc thời gian bắt đầu, nên dùng since: since March." },
    { id: "p5", type: "gap", prompt: "He has used Excel ___ three years.",
      options: ["for", "since", "from", "in"],
      answer: 0, explanation: "Three years là khoảng thời gian, nên dùng for: for three years." },
    { id: "p6", type: "gap", prompt: "___ you ever worked in a bank?",
      options: ["Did", "Have", "Are", "Do"],
      answer: 1, explanation: "Câu hỏi hiện tại hoàn thành: Have you ever worked…? Sau Did, Do, Are không thể dùng worked." },
    { id: "p7", type: "choice", prompt: "Which sentence is correct?",
      options: ["I have work here for two years.", "I have worked here since two years.", "I have worked here for two years.", "I worked here for two years now."],
      answer: 2, explanation: "Have + V3 (worked) và for + khoảng thời gian. Câu 1 thiếu -ed, câu 2 dùng sai since, câu 4 không đi với now." },
    { id: "p8", type: "gap", prompt: "I ___ not worked in HR before.",
      options: ["did", "was", "am", "have"],
      answer: 3, explanation: "Phủ định hiện tại hoàn thành: have not worked. Did not phải đi với động từ nguyên mẫu (did not work)." },
    { id: "p9", type: "choice", context: "A candidate says: “I have worked in sales for five years.”", prompt: "What does this mean?",
      options: ["I stopped working in sales five years ago.", "I started in sales five years ago and I still work in sales.", "I will work in sales for five years.", "I worked in sales only for five days."],
      answer: 1, explanation: "Have worked + for five years: bắt đầu cách đây năm năm và vẫn đang làm đến bây giờ." },
    { id: "p10", type: "choice", prompt: "Which word has the main stress on the second syllable?",
      options: ["internship", "reference", "achievement", "currently"],
      answer: 2, explanation: "a·CHIEVE·ment có trọng âm ở âm tiết thứ hai. Các từ còn lại có trọng âm ở âm tiết đầu: IN·tern·ship, REF·er·ence, CUR·rent·ly." }
  ],

  writing: {
    title: "Write a short application email",
    task: "Bạn là Nam Hoang. Hãy viết email ngắn gửi chị Lan để ứng tuyển vị trí HR Assistant và giới thiệu kinh nghiệm của bạn (50–90 từ).",
    requirements: [
      "Mở đầu bằng lời chào (Dear …).",
      "Nói bạn tốt nghiệp khi nào (quá khứ đơn).",
      "Nói về kinh nghiệm làm việc bằng have / has + V3.",
      "Dùng for hoặc since để nói thời gian.",
      "Nhắc tới giấy tờ đính kèm (attached).",
      "Kết thúc email và ký tên."
    ],
    minWords: 50,
    maxWords: 90,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Dear …)", pattern: "\\bdear\\b" },
      { label: "Có quá khứ đơn (graduated / studied / started)", pattern: "\\bgraduated\\b|\\bstudied\\b|\\bstarted\\b|\\bjoined\\b" },
      { label: "Có have / has + V3", pattern: "\\bha(ve|s)\\s+(\\w+ed|been|done|had|led|made|written|gone)\\b" },
      { label: "Dùng for hoặc since", pattern: "\\bsince\\b|\\bfor\\s+\\w+\\s+(years?|months?|weeks?)" },
      { label: "Nhắc tới giấy tờ đính kèm (attached)", pattern: "attach|enclose" },
      { label: "Có lời kết (Best regards …)", pattern: "regards|sincerely|best wishes" }
    ],
    model: [
      "Dear Ms. Lan,",
      "I am writing to apply for the post of HR Assistant. I graduated in June with a degree in management.",
      "I have worked in sales for five years, and I have used Excel every day since my first job. I am interested in HR because I have helped my team with training.",
      "Please find my CV attached.",
      "Best regards,",
      "Nam Hoang"
    ]
  },

  review: {
    keyPhrases: [
      { en: "I am writing to apply for the post of HR Assistant.", vi: "Tôi viết email này để ứng tuyển vị trí trợ lý nhân sự." },
      { en: "I graduated in June with a degree in business.", vi: "Tôi tốt nghiệp vào tháng Sáu với bằng ngành kinh doanh." },
      { en: "I have worked as an intern since July.", vi: "Tôi làm thực tập sinh từ tháng Bảy đến nay." },
      { en: "He has used Excel for three years.", vi: "Anh ấy đã dùng Excel được ba năm." },
      { en: "Please find my CV and cover letter attached.", vi: "Tôi gửi kèm CV và thư xin việc." },
      { en: "Let's shortlist two candidates.", vi: "Mình chọn hai ứng viên vào danh sách phỏng vấn." }
    ]
  }
});
