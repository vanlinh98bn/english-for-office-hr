/* =========================================================
   A2 · Module 2 (Emails and Documents) · Bài 4
   "Attachments and file names"
   Thứ Năm 19/11/2026. Tuấn gửi thư xác nhận việc làm cho Peter;
   chị Lan chỉ cách đặt tên tệp và kiểm tra tệp đính kèm.
   Điểm ngữ pháp: hiện tại hoàn thành với just / already / yet.
   Công ty Riverside Trading và các nhân vật đều là hư cấu.
   ========================================================= */
window.EOH.registerLesson({
  id: "a2-m2-l4",
  reviewStatus: "draft", // "draft" = bản nháp, chưa duyệt
  duration: "35–45 phút",
  scenario: "Thứ Năm 19/11, Tuấn chuẩn bị gửi thư xác nhận việc làm cho Peter. Chị Lan kiểm tra: Tuấn đã làm những gì rồi, chưa làm gì, tên tệp có rõ ràng không, và tệp có nhẹ để gửi qua email không. Sau đó chị Lan gửi email nhắc cả công ty cách đặt tên tệp.",

  objectives: [
    "Hiểu và dùng 10 từ vựng về tệp và tệp đính kèm (attachment, file name, scan, rename…).",
    "Nghe hiểu cuộc trao đổi về việc đã làm và chưa làm, cách đặt tên tệp.",
    "Đọc email quy tắc đặt tên tệp và tìm đúng thông tin: quy tắc, ví dụ, việc đã làm.",
    "Dùng thì hiện tại hoàn thành với just, already, yet để nói về việc đã xong hoặc chưa xong.",
    "Viết email ngắn báo anh Hải việc đã làm và việc chưa làm với tệp đính kèm."
  ],

  vocabulary: [
    { word: "attachment", ipa: "/əˈtætʃmənt/", pos: "noun", meaning: "tệp đính kèm",
      example: "Please open the attachment.", exampleVi: "Vui lòng mở tệp đính kèm." },
    { word: "file name", ipa: "/ˈfaɪl neɪm/", pos: "noun", meaning: "tên tệp",
      example: "The file name should be short and clear.", exampleVi: "Tên tệp nên ngắn và rõ ràng." },
    { word: "PDF", ipa: "/ˌpiː diː ˈɛf/", pos: "noun", meaning: "tệp PDF (định dạng tài liệu khó sửa)",
      example: "Please send the letter as a PDF.", exampleVi: "Vui lòng gửi thư dưới dạng PDF." },
    { word: "scan", ipa: "/skæn/", pos: "verb", meaning: "quét giấy tờ thành tệp",
      example: "I'll scan the signed page.", exampleVi: "Tôi sẽ quét trang đã ký." },
    { word: "rename", ipa: "/riːˈneɪm/", pos: "verb", meaning: "đổi tên",
      example: "Please rename the file.", exampleVi: "Vui lòng đổi tên tệp." },
    { word: "folder", ipa: "/ˈfoʊldər/", pos: "noun", meaning: "thư mục",
      example: "Save a copy in the HR folder.", exampleVi: "Hãy lưu một bản vào thư mục Nhân sự." },
    { word: "version", ipa: "/ˈvɜːrʒən/", pos: "noun", meaning: "phiên bản",
      example: "This is the newest version.", exampleVi: "Đây là phiên bản mới nhất." },
    { word: "download", ipa: "/ˌdaʊnˈloʊd/", pos: "verb", meaning: "tải xuống",
      example: "You can download the form from the intranet.", exampleVi: "Bạn có thể tải biểu mẫu từ mạng nội bộ." },
    { word: "file size", ipa: "/ˈfaɪl saɪz/", pos: "noun", meaning: "dung lượng tệp",
      example: "The file size is too big for email.", exampleVi: "Dung lượng tệp quá lớn để gửi email." },
    { word: "forward", ipa: "/ˈfɔːrwərd/", pos: "verb", meaning: "chuyển tiếp (email)",
      example: "I'll forward this email to Lan.", exampleVi: "Tôi sẽ chuyển tiếp email này cho chị Lan." }
  ],

  pronunciation: {
    groups: [
      {
        title: "just, already, yet và dạng rút gọn I've",
        text: "Trong hiện tại hoàn thành, have thường được rút gọn: I've /aɪv/, she's /ʃiːz/, haven't /ˈhævənt/. Từ just, already, yet là từ có nghĩa quan trọng nên được đọc rõ hơn.",
        items: [
          { word: "just", marked: "/dʒʌst/", note: "Âm cuối /st/ phải đọc rõ." },
          { word: "already", marked: "al·READ·y", note: "Đọc /ɔːlˈrɛdi/, nhấn âm thứ hai." },
          { word: "yet", marked: "/jɛt/", note: "Bắt đầu bằng /j/ như “yes”." },
          { word: "I've", marked: "/aɪv/", note: "Một âm tiết, kết thúc bằng /v/." }
        ]
      },
      {
        title: "Trọng âm của từ",
        text: "Âm tiết in hoa là âm đọc to và dài hơn.",
        items: [
          { word: "attachment", marked: "at·TACH·ment" },
          { word: "folder", marked: "FOLD·er" },
          { word: "version", marked: "VER·sion" },
          { word: "rename", marked: "re·NAME" },
          { word: "download", marked: "down·LOAD", note: "Là động từ nên nhấn âm thứ hai." }
        ]
      }
    ],
    sentences: [
      "I've just sent the file.",
      "She has already renamed the folder.",
      "Have you downloaded the attachment yet?"
    ]
  },

  listening: {
    title: "Is the letter ready?",
    setting: "Sáng thứ Năm, văn phòng Nhân sự. Chị Lan hỏi Tuấn về thư gửi cho Peter.",
    speakers: { lan: "Lan (HR Officer)", tuan: "Tuan (HR Assistant)" },
    lines: [
      { s: "lan", text: "Tuan, have you sent Peter's letter yet?",
        vi: "Tuấn, em đã gửi thư cho Peter chưa?" },
      { s: "tuan", text: "Not yet. I've just scanned the signed page, but I haven't attached it to the email.",
        vi: "Dạ chưa. Em vừa quét trang đã ký, nhưng em chưa đính kèm vào email." },
      { s: "lan", text: "What is the file name?",
        vi: "Tên tệp là gì?" },
      { s: "tuan", text: "It's called “letter new”.",
        vi: "Tên là “letter new” ạ." },
      { s: "lan", text: "That isn't clear. Peter will get many files. Use his name and the type of document, and add the date at the end. Please don't use spaces.",
        vi: "Tên đó không rõ. Peter sẽ nhận nhiều tệp. Em dùng tên của anh ấy và loại giấy tờ, rồi thêm ngày ở cuối. Đừng dùng dấu cách nhé." },
      { s: "tuan", text: "OK, I'll rename it. Is a PDF better than a Word file?",
        vi: "Vâng, em sẽ đổi tên. PDF có tốt hơn tệp Word không ạ?" },
      { s: "lan", text: "Yes. Send a PDF, because nobody can change it. And check the file size. If a file is bigger than ten megabytes, many email systems don't accept it.",
        vi: "Có. Em gửi PDF, vì không ai sửa được. Và em kiểm tra dung lượng tệp. Nếu tệp lớn hơn mười megabyte, nhiều hệ thống email không nhận." },
      { s: "tuan", text: "I've already checked. It's only two megabytes.",
        vi: "Em kiểm tra rồi ạ. Tệp chỉ có hai megabyte." },
      { s: "lan", text: "Good. Have you saved a copy in the staff records folder?",
        vi: "Tốt. Em đã lưu một bản vào thư mục hồ sơ nhân viên chưa?" },
      { s: "tuan", text: "Not yet. I'll do it after I send the email.",
        vi: "Dạ chưa. Em sẽ làm sau khi gửi email." },
      { s: "lan", text: "Please mention the attachment in your email, so the reader doesn't miss it.",
        vi: "Em nhớ nhắc đến tệp đính kèm trong email, để người đọc không bỏ sót." },
      { s: "tuan", text: "I will. Thanks, Lan.",
        vi: "Em sẽ làm. Cảm ơn chị Lan." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "What has Tuan just done?",
        options: ["He has sent the letter to Peter.", "He has scanned the signed page.", "He has saved a copy in the folder.", "He has renamed the file."],
        answer: 1, explanation: "Tuấn nói: “I've just scanned the signed page.” Em chưa gửi thư, chưa lưu bản vào thư mục, và chưa đổi tên tệp (tên vẫn là “letter new”)." },
      { id: "l2", type: "choice", prompt: "Why does Lan like PDF files?",
        options: ["They are smaller than Word files.", "Nobody can change them.", "They have shorter names.", "They are easier to write."],
        answer: 1, explanation: "Chị Lan nói: “Send a PDF, because nobody can change it.” Chị không nói gì về việc PDF nhỏ hơn." },
      { id: "l3", type: "choice", prompt: "What will Tuan do after he sends the email?",
        options: ["Call Peter", "Check the file size", "Save a copy in the staff records folder", "Scan the page again"],
        answer: 2, explanation: "“Have you saved a copy in the staff records folder?” – “Not yet. I'll do it after I send the email.” Tuấn đã kiểm tra dung lượng rồi (“I've already checked”)." }
    ]
  },

  reading: {
    title: "File name rules",
    intro: "Email chị Lan gửi cho cả công ty. Đọc và tìm các quy tắc đặt tên tệp.",
    email: {
      from: "Lan Pham <lan.pham@riverside-trading.example>",
      to: "All staff",
      date: "Thursday, 19 November",
      subject: "Simple rules for file names and attachments",
      greeting: "Dear all,",
      paragraphs: [
        "Many files in our shared folders have unclear names, such as new-final-2. This makes them difficult to find, so please follow these simple rules for every attachment:"
      ],
      list: [
        "Use short names without spaces, for example Hoa-Tran-Bank-Form-2026-11-19.pdf.",
        "Write the date at the end of the name.",
        "Send PDF files when nobody needs to change them.",
        "Keep the file size under 10 MB."
      ],
      after: [
        "Some people have already started to use these rules, and I thank you. I have just updated the old files in the HR folder, but I haven't finished the other folders yet.",
        "Please also mention each attachment in your email, so the reader can find it quickly."
      ],
      closing: "Best regards,",
      signature: ["Lan Pham", "HR Officer, Riverside Trading"]
    },
    glossary: [
      { term: "shared folder", vi: "thư mục dùng chung" },
      { term: "unclear", vi: "không rõ ràng" },
      { term: "follow the rules", vi: "làm theo quy tắc" },
      { term: "under 10 MB", vi: "dưới 10 megabyte" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "Why did Lan write this email?",
        options: ["Many files have unclear names.", "The shared folders are full.", "Some people lost their attachments.", "The intranet is closed."],
        answer: 0, explanation: "“Many files in our shared folders have unclear names… This makes them difficult to find.”" },
      { id: "r2", type: "choice", prompt: "Where should staff write the date in a file name?",
        options: ["At the beginning", "In the middle", "At the end", "They should not write it."],
        answer: 2, explanation: "“Write the date at the end of the name.”" },
      { id: "r3", type: "choice", prompt: "Which statement is TRUE?",
        options: ["All staff have already followed the rules.", "Lan wants only Word files.", "Lan has finished updating all folders.", "Lan has updated the old files in the HR folder."],
        answer: 3, explanation: "“I have just updated the old files in the HR folder, but I haven't finished the other folders yet.” Chị Lan nói “some people” đã làm theo, không phải tất cả." }
    ]
  },

  grammar: {
    title: "Present perfect with just, already, yet",
    titleVi: "Hiện tại hoàn thành với just, already, yet",
    intro: "Khi nói về việc đã làm xong hoặc chưa làm xong tính đến hôm nay, tiếng Anh dùng have / has + động từ ở dạng quá khứ phân từ (V3). Ba từ just, already, yet cho biết việc xảy ra mới đây, đã xong sớm, hay chưa xong.",
    patterns: [
      { form: "have / has + V3", use: "Việc đã xong và có kết quả ở hiện tại. Dạng rút gọn: I've, she's.",
        examples: ["I have sent the file.", "She has renamed the folder."] },
      { form: "have / has + just + V3", use: "Việc vừa xảy ra, rất mới.",
        examples: ["I've just scanned the page.", "Lan has just sent the email."] },
      { form: "have / has + already + V3", use: "Việc đã xong rồi, thường sớm hơn dự kiến. Dùng trong câu khẳng định.",
        examples: ["I've already checked the file size.", "He has already saved a copy."] },
      { form: "haven't / hasn't + V3 + yet; Have you + V3 + yet?", use: "yet dùng trong câu phủ định và câu hỏi, đứng cuối câu: việc chưa xong hoặc hỏi đã xong chưa.",
        examples: ["I haven't attached it yet.", "Have you sent the letter yet?"] }
    ],
    mistakes: [
      { wrong: "I have send the file.", right: "I have sent the file.", note: "Sau have dùng quá khứ phân từ: send → sent." },
      { wrong: "She have just renamed the file.", right: "She has just renamed the file.", note: "Chủ ngữ she / he / it đi với has." },
      { wrong: "I have sent the file yesterday.", right: "I sent the file yesterday.", note: "Khi có thời điểm đã qua rõ ràng (yesterday, last week) thì dùng quá khứ đơn." },
      { wrong: "I haven't sent it already.", right: "I haven't sent it yet.", note: "Câu phủ định dùng yet, không dùng already." }
    ],
    tip: "Quá khứ phân từ bất quy tắc hay gặp: send – sent, write – written, make – made, do – done, see – seen, go – gone. Động từ có quy tắc như save, rename, attach chỉ thêm -d hoặc -ed."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "Please ___ the paper form so we can save it on the computer.",
      options: ["scan", "forward", "download", "rename"],
      answer: 0, explanation: "Scan = quét giấy tờ thành tệp. Forward dùng cho email, download là tải từ mạng về, rename là đổi tên." },
    { id: "p2", type: "gap", prompt: "I will ___ this email to Lan so she can read it too.",
      options: ["rename", "forward", "scan", "download"],
      answer: 1, explanation: "Forward = chuyển tiếp email cho người khác." },
    { id: "p3", type: "gap", prompt: "Is this the final ___ or the old one?",
      options: ["folder", "size", "version", "invitation"],
      answer: 2, explanation: "Version = phiên bản: bản cuối hay bản cũ. Folder là thư mục, size là dung lượng." },
    { id: "p4", type: "gap", prompt: "I can't send the PDF because the file ___ is too big.",
      options: ["name", "version", "folder", "size"],
      answer: 3, explanation: "File size = dung lượng tệp, có thể quá lớn để gửi email. Tên tệp hay thư mục không “quá lớn” theo nghĩa này." },
    { id: "p5", type: "gap", prompt: "I've ___ sent the report. Please check your inbox.",
      options: ["just", "yet", "since", "ago"],
      answer: 0, explanation: "Just = vừa mới: I've just sent… Yet không dùng trong câu khẳng định; since và ago không đi với mẫu này." },
    { id: "p6", type: "gap", prompt: "I haven't opened the attachment ___.",
      options: ["already", "just", "ago", "yet"],
      answer: 3, explanation: "Câu phủ định ở hiện tại hoàn thành dùng yet, đứng cuối câu: haven't … yet." },
    { id: "p7", type: "gap", prompt: "She ___ already renamed the files.",
      options: ["have", "did", "has", "is"],
      answer: 2, explanation: "Chủ ngữ she dùng has: She has already renamed… Did đi với động từ nguyên mẫu, không đi với renamed." },
    { id: "p8", type: "gap", prompt: "We ___ the list yesterday.",
      options: ["have sent", "sent", "has sent", "send"],
      answer: 1, explanation: "Có thời điểm đã qua rõ ràng (yesterday) nên dùng quá khứ đơn: sent." },
    { id: "p9", type: "choice", prompt: "Which file name is the best?",
      options: ["Hoa-Tran-Leave-Form-2026-11-19.pdf", "final final new!!.pdf", "scan0001.pdf", "my file (2) copy.pdf"],
      answer: 0, explanation: "Tên tốt: có tên người, loại giấy tờ, ngày, không có dấu cách. Các tên còn lại không nói nội dung tệp hoặc có ký tự lạ." },
    { id: "p10", type: "choice", prompt: "Which sentence is correct?",
      options: ["I've just wrote the email.", "She haven't sent it yet.", "Have you send it yet?", "I've already sent the email."],
      answer: 3, explanation: "Câu D đúng. A sai vì cần written; B sai vì chủ ngữ she cần hasn't; C sai vì cần sent (V3)." }
  ],

  writing: {
    title: "A progress email to Mr. Hai",
    task: "Bạn là Tuấn. Hãy viết email ngắn gửi anh Hải (50–90 từ), báo việc bạn đã làm và chưa làm với thư của Peter.",
    requirements: [
      "Mở đầu bằng lời chào phù hợp (Dear Mr. Hai,).",
      "Dùng just để nói việc bạn vừa làm xong.",
      "Dùng already để nói việc bạn đã làm xong rồi.",
      "Dùng haven't … yet để nói việc chưa làm.",
      "Báo có tệp đính kèm (attached / PDF).",
      "Kết thúc bằng Best regards và ký tên."
    ],
    minWords: 50,
    maxWords: 90,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Dear …)", pattern: "\\bdear\\b" },
      { label: "Có dùng just", pattern: "\\bjust\\b" },
      { label: "Có dùng already", pattern: "\\balready\\b" },
      { label: "Có dùng yet", pattern: "\\byet\\b" },
      { label: "Nhắc tới tệp đính kèm", pattern: "attach|\\bpdf\\b|file" },
      { label: "Có lời kết (Best regards …)", pattern: "regards|sincerely|best wishes" }
    ],
    model: [
      "Dear Mr. Hai,",
      "I am writing about Peter's employment letter. I have already scanned the signed letter, and I have just renamed the file.",
      "Please find attached the PDF. I haven't saved a copy in the staff records folder yet, but I will do it today.",
      "Could you please check the file name?",
      "Best regards,",
      "Tuan Nguyen"
    ]
  },

  review: {
    keyPhrases: [
      { en: "Have you sent the letter yet?", vi: "Bạn đã gửi thư chưa?" },
      { en: "I've just scanned the signed page.", vi: "Tôi vừa quét trang đã ký." },
      { en: "I've already checked the file size.", vi: "Tôi đã kiểm tra dung lượng tệp rồi." },
      { en: "I haven't attached it yet.", vi: "Tôi chưa đính kèm nó." },
      { en: "Please write the date at the end of the file name.", vi: "Hãy ghi ngày ở cuối tên tệp." },
      { en: "Please mention the attachment in your email.", vi: "Hãy nhắc đến tệp đính kèm trong email." }
    ]
  }
});
