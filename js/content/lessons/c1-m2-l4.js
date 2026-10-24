/* =========================================================
   C1 · Module 2 (Employment Compliance and Risk Communication) · Bài 4
   "Data privacy in HR"
   Nối tiếp C1-M2-L3. Sự cố dữ liệu: Khanh Vu (HR Assistant) vô tình
   gửi một bảng tính danh sách 70 nhân viên (họ tên, số căn cước, số tài
   khoản ngân hàng) tới địa chỉ email sai bên ngoài (một trung tâm ngoại
   ngữ có tên gần giống bộ phận Kế toán). Nhận ra sau 20 phút.
   Xử lý (công ty quy định; cần cố vấn pháp lý xác nhận thời hạn báo cáo
   hiện hành, thường nhắc tới khoảng 72 giờ):
   - Ngăn chặn: gọi và email yêu cầu người nhận xóa và xác nhận bằng văn
     bản; Sam khóa liên kết, kiểm tra nhật ký.
   - Đánh giá rủi ro: dữ liệu nhạy cảm (số căn cước, tài khoản); người
     nhận bên ngoài là một trung tâm ngoại ngữ đã quen biết, đã xác nhận
     xóa; chưa có dấu hiệu bị lạm dụng.
   - Báo cáo cơ quan có thẩm quyền theo quy định (anh Khai Mai xác nhận
     thời hạn); thông báo cho nhân viên bị ảnh hưởng.
   - Phòng ngừa: mã hóa và đặt mật khẩu tệp; chỉ gửi theo nguyên tắc cần
     biết; dùng danh sách địa chỉ đã duyệt; đào tạo; chị Grace nói chuyện
     với Khanh một cách xây dựng (không trừng phạt).
   Ngữ pháp: động từ khuyết thiếu trong quy định (must, shall, may,
   should, need not) + nói giảm (It would be advisable to…, You may wish
   to…).
   Thời gian nói áng chừng.
   ========================================================= */
window.EOH.registerLesson({
  id: "c1-m2-l4",
  reviewStatus: "draft",
  duration: "45–60 phút",
  scenario: "Khanh (HR Assistant) vô tình gửi bảng tính có thông tin cá nhân của 70 nhân viên tới một địa chỉ email bên ngoài. Chị Grace, chị Lan và Khanh xử lý sự cố: ngăn chặn, đánh giá rủi ro, báo cáo và phòng ngừa. Sau đó chị Lan gửi hướng dẫn mới về xử lý dữ liệu cho phòng Nhân sự.",

  objectives: [
    "Hiểu và dùng 10 từ vựng thường gặp về bảo mật dữ liệu nhân sự.",
    "Nghe cuộc họp xử lý sự cố dữ liệu, nắm được các bước ngăn chặn, đánh giá và báo cáo.",
    "Đọc hướng dẫn xử lý dữ liệu, phân biệt nghĩa vụ bắt buộc, khuyến nghị và điều được phép.",
    "Dùng động từ khuyết thiếu trong quy định: must / shall (bắt buộc), must not (cấm), should (khuyến nghị), may (được phép), need not (không bắt buộc); và cách nói giảm: It would be advisable to…, You may wish to…",
    "Viết hướng dẫn xử lý dữ liệu ngắn, phân biệt rõ nghĩa vụ, khuyến nghị và quyền."
  ],

  vocabulary: [
    { word: "personal data", ipa: "/ˌpɜːrsənəl ˈdeɪtə/", pos: "noun", meaning: "dữ liệu cá nhân",
      example: "Employee records contain a lot of personal data.", exampleVi: "Hồ sơ nhân viên chứa rất nhiều dữ liệu cá nhân." },
    { word: "data breach", ipa: "/ˈdeɪtə briːtʃ/", pos: "noun", meaning: "sự cố lộ dữ liệu",
      example: "A data breach must be reported promptly.", exampleVi: "Sự cố lộ dữ liệu phải được báo cáo kịp thời." },
    { word: "data subject", ipa: "/ˈdeɪtə ˌsʌbdʒekt/", pos: "noun", meaning: "chủ thể dữ liệu (người mà dữ liệu nói về)",
      example: "Each data subject must be informed of the breach.", exampleVi: "Mỗi chủ thể dữ liệu phải được thông báo về sự cố." },
    { word: "containment", ipa: "/kənˈteɪnmənt/", pos: "noun", meaning: "việc ngăn chặn (sự cố lan rộng)",
      example: "Containment is the first step after a breach.", exampleVi: "Ngăn chặn là bước đầu tiên sau sự cố." },
    { word: "disclose", ipa: "/dɪsˈkloʊz/", pos: "verb", meaning: "tiết lộ, công bố",
      example: "Staff must not disclose personal data to third parties.", exampleVi: "Nhân viên không được tiết lộ dữ liệu cá nhân cho bên thứ ba." },
    { word: "need-to-know basis", ipa: "/ˌniːd tə ˈnoʊ ˌbeɪsɪs/", pos: "noun", meaning: "nguyên tắc chỉ cung cấp cho người thật sự cần biết",
      example: "Salary data is shared on a need-to-know basis.", exampleVi: "Dữ liệu lương chỉ chia sẻ cho người thật sự cần biết." },
    { word: "encrypt", ipa: "/ɪnˈkrɪpt/", pos: "verb", meaning: "mã hóa",
      example: "Files containing personal data should be encrypted.", exampleVi: "Các tệp có dữ liệu cá nhân nên được mã hóa." },
    { word: "retention period", ipa: "/rɪˈtenʃən ˌpɪriəd/", pos: "noun", meaning: "thời gian lưu giữ dữ liệu",
      example: "Each record has a defined retention period.", exampleVi: "Mỗi loại hồ sơ có một thời gian lưu giữ quy định." },
    { word: "anonymize", ipa: "/əˈnɑːnɪmaɪz/", pos: "verb", meaning: "ẩn danh hóa (xóa thông tin nhận dạng)",
      example: "You may anonymize the data before sharing it for analysis.", exampleVi: "Bạn có thể ẩn danh hóa dữ liệu trước khi chia sẻ để phân tích." },
    { word: "safeguard", ipa: "/ˈseɪfɡɑːrd/", pos: "noun", meaning: "biện pháp bảo vệ",
      example: "We need stronger safeguards for payroll files.", exampleVi: "Chúng ta cần các biện pháp bảo vệ mạnh hơn cho tệp bảng lương." }
  ],

  pronunciation: {
    groups: [
      {
        title: "must / should / may trong quy định",
        text: "Nhấn từ khuyết thiếu để phân biệt mức độ bắt buộc. Âm tiết in hoa là âm đọc to và dài hơn.",
        items: [
          { word: "You MUST encrypt the file.", marked: "You MUST en·CRYPT the FILE." },
          { word: "You SHOULD check the address.", marked: "You SHOULD CHECK the ad·DRESS." },
          { word: "You MAY share it internally.", marked: "You MAY SHARE it in·TER·nal·ly." },
          { word: "You need NOT reply.", marked: "You need NOT re·PLY." }
        ]
      },
      {
        title: "Trọng âm từ",
        text: "Những từ hay gặp về bảo mật dữ liệu.",
        items: [
          { word: "encrypt", marked: "en·CRYPT" },
          { word: "anonymize", marked: "a·NON·y·mize" },
          { word: "disclose", marked: "dis·CLOSE" },
          { word: "safeguard", marked: "SAFE·guard" }
        ]
      }
    ],
    sentences: [
      "Files containing personal data must be encrypted before they are sent.",
      "You should always check the recipient's address before pressing send.",
      "It would be advisable to inform the affected employees as soon as possible."
    ]
  },

  listening: {
    title: "Handling a data breach",
    setting: "Phòng họp nhỏ. Chị Grace, chị Lan và Khanh xử lý sự cố gửi nhầm bảng tính có dữ liệu cá nhân tới địa chỉ email bên ngoài.",
    speakers: { grace: "Grace (HR Director)", lan: "Lan (HR Manager)", khanh: "Khanh (HR Assistant)" },
    lines: [
      { s: "khanh", text: "I'm very sorry. I sent the payroll spreadsheet to the wrong address. It went to a language center instead of our Accounting team. I noticed after twenty minutes.",
        vi: "Em rất xin lỗi. Em đã gửi bảng tính lương tới địa chỉ sai. Nó đến một trung tâm ngoại ngữ thay vì phòng Kế toán. Em nhận ra sau hai mươi phút." },
      { s: "grace", text: "Thank you for telling us immediately, Khanh. That was the right thing to do. What exactly did the file contain?",
        vi: "Cảm ơn em đã báo ngay, Khanh. Đó là việc làm đúng. Chính xác tệp chứa gì?" },
      { s: "khanh", text: "Names, ID numbers and bank account numbers for seventy employees.",
        vi: "Họ tên, số căn cước và số tài khoản ngân hàng của bảy mươi nhân viên." },
      { s: "grace", text: "That's sensitive personal data, so this counts as a data breach. First, containment. Lan, please call the recipient now and ask them to delete the email.",
        vi: "Đó là dữ liệu cá nhân nhạy cảm, nên đây được tính là sự cố lộ dữ liệu. Trước hết là ngăn chặn. Lan, em gọi cho người nhận ngay và đề nghị họ xóa email." },
      { s: "lan", text: "I've already done that. They've confirmed they deleted it, and they've agreed to confirm in writing. I'll also ask Sam to check the mail logs.",
        vi: "Em đã làm rồi. Họ xác nhận đã xóa, và đồng ý xác nhận bằng văn bản. Em cũng nhờ Sam kiểm tra nhật ký thư." },
      { s: "grace", text: "Good. Second, risk assessment. The recipient is an organization we know, and there's no sign of misuse. But we mustn't assume that nothing will happen.",
        vi: "Tốt. Thứ hai, đánh giá rủi ro. Người nhận là một tổ chức mình biết, và chưa có dấu hiệu bị lạm dụng. Nhưng mình không được cho rằng sẽ không có chuyện gì." },
      { s: "lan", text: "What about reporting? I believe the regulations require us to notify the authorities within a fixed time.",
        vi: "Còn việc báo cáo? Em tin là quy định yêu cầu mình báo cho cơ quan có thẩm quyền trong một thời hạn cố định." },
      { s: "grace", text: "Yes, I understand it's seventy-two hours, but we must ask Mr. Khai to confirm the exact rule. It would be advisable to call him today.",
        vi: "Vâng, chị hiểu là bảy mươi hai giờ, nhưng mình phải nhờ anh Khải xác nhận quy định chính xác. Nên gọi cho anh ấy hôm nay." },
      { s: "lan", text: "And the employees? Do we need to tell them?",
        vi: "Còn các nhân viên? Mình có cần báo cho họ không?" },
      { s: "grace", text: "Yes. Each data subject should be informed, in clear language, about what happened and what we've done. They may also wish to contact their banks, so we should tell them that.",
        vi: "Có. Mỗi chủ thể dữ liệu nên được thông báo, bằng ngôn ngữ rõ ràng, về điều đã xảy ra và điều mình đã làm. Họ cũng có thể muốn liên hệ ngân hàng, nên mình cần nói điều đó." },
      { s: "khanh", text: "What should I do differently in future?",
        vi: "Sau này em nên làm khác đi thế nào?" },
      { s: "grace", text: "A few things. Files with personal data must be encrypted and password-protected, and the password must be sent separately. You should use the approved address list rather than typing addresses by hand.",
        vi: "Vài điều. Tệp có dữ liệu cá nhân phải được mã hóa và đặt mật khẩu, và mật khẩu phải gửi riêng. Em nên dùng danh sách địa chỉ đã duyệt thay vì tự gõ địa chỉ." },
      { s: "lan", text: "And only people with a genuine need should receive such files, on a need-to-know basis. Khanh, you need not worry about disciplinary action. We'll treat this as a learning point.",
        vi: "Và chỉ những người thật sự cần mới được nhận các tệp như vậy, theo nguyên tắc cần biết. Khanh, em không cần lo bị kỷ luật. Mình coi đây là một bài học." },
      { s: "grace", text: "Exactly. I'll ask Lan to turn these rules into a short guide for the whole HR team.",
        vi: "Đúng vậy. Chị sẽ nhờ Lan biến những quy tắc này thành một hướng dẫn ngắn cho cả phòng Nhân sự." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "What is the first step after the breach?",
        options: ["Telling the press", "Containment: asking the recipient to delete the email", "Dismissing Khanh", "Changing all passwords"],
        answer: 1, explanation: "“First, containment. Lan, please call the recipient now and ask them to delete the email.”" },
      { id: "l2", type: "choice", prompt: "What does Grace say about reporting to the authorities?",
        options: ["It is not necessary.", "It should be done next year.", "They must ask Mr. Khai to confirm the exact rule, probably within seventy-two hours.", "Khanh must do it alone."],
        answer: 2, explanation: "“I understand it's seventy-two hours, but we must ask Mr. Khai to confirm the exact rule.”" },
      { id: "l3", type: "choice", prompt: "What does Lan tell Khanh about disciplinary action?",
        options: ["He will be dismissed.", "He will be demoted.", "He will lose a month's pay.", "He need not worry; it is treated as a learning point."],
        answer: 3, explanation: "“Khanh, you need not worry about disciplinary action. We'll treat this as a learning point.”" }
    ]
  },

  reading: {
    title: "New guidelines: handling personal data",
    intro: "Email chị Lan gửi phòng Nhân sự sau sự cố. Đọc và phân biệt điều bắt buộc, khuyến nghị và điều được phép.",
    email: {
      from: "Lan Pham <lan.pham@riverside-trading.example>",
      to: "HR Team",
      date: "Monday",
      subject: "New guidelines: handling personal data",
      greeting: "Dear colleagues,",
      paragraphs: [
        "Following last week's data incident, we have prepared the guidelines below. They apply to all personal data held by HR, including employee names, identity numbers, bank details and health information. The incident has been handled and no misuse has been reported, but we all have a duty to prevent a repeat."
      ],
      list: [
        "Encryption: files containing personal data must be encrypted and password-protected before they are sent. The password must be sent by a separate channel, and must not be included in the same email.",
        "Recipients: personal data shall only be shared on a need-to-know basis. You should always select recipients from the approved address list. Typing addresses manually is not recommended.",
        "Checking: you should check the recipient list and the attachment before pressing send. It would be advisable to wait for ten seconds and read the message once more.",
        "Retention: records shall be kept only for the retention period set out in the policy. Once the period has ended, they must be deleted or anonymized.",
        "Analysis: you may anonymize data before sharing it for statistics, in which case you need not apply the encryption rule."
      ],
      after: [
        "If you notice that data has been sent to a wrong person, you must report it to me immediately, even if you are not sure about the severity. You may wish to call rather than email, as speed is essential. No one will be disciplined for reporting a mistake in good faith.",
        "A short training session will be held next week, and attendance is compulsory."
      ],
      closing: "Best regards,",
      signature: ["Lan Pham", "HR Manager, Riverside Trading"]
    },
    glossary: [
      { term: "identity number", vi: "số căn cước, số định danh" },
      { term: "manually", vi: "bằng tay" },
      { term: "in good faith", vi: "với thiện chí" },
      { term: "compulsory", vi: "bắt buộc" },
      { term: "severity", vi: "mức độ nghiêm trọng" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "Which action is mandatory?",
        options: ["Waiting ten seconds before sending", "Encrypting and password-protecting files with personal data", "Calling instead of emailing", "Anonymizing all data"],
        answer: 1, explanation: "“…files containing personal data must be encrypted and password-protected.” Chờ mười giây chỉ là khuyến nghị (would be advisable)." },
      { id: "r2", type: "choice", prompt: "When do you NOT need to apply the encryption rule?",
        options: ["When data is sent to Accounting", "When the file is small", "When the data has been anonymized for statistics", "When the manager is in a hurry"],
        answer: 2, explanation: "“…you may anonymize data before sharing it for statistics, in which case you need not apply the encryption rule.”" },
      { id: "r3", type: "choice", prompt: "What must an employee do if data is sent to the wrong person?",
        options: ["Wait to see if anything happens", "Report it to Lan immediately", "Delete all records", "Tell the recipient to keep it"],
        answer: 1, explanation: "“…you must report it to me immediately.” Không ai bị kỷ luật vì báo cáo sai sót với thiện chí." }
    ]
  },

  grammar: {
    title: "Modal verbs in rules and guidelines",
    titleVi: "Động từ khuyết thiếu trong quy định và hướng dẫn",
    intro: "Trong quy định, mỗi động từ khuyết thiếu cho biết mức độ bắt buộc khác nhau. Dùng sai có thể biến lời khuyên thành mệnh lệnh hoặc ngược lại. Bốn mẫu dưới đây có trong cuộc họp và hướng dẫn bạn vừa học.",
    patterns: [
      { form: "must / shall + V  ·  must not / shall not + V", use: "Bắt buộc hoặc cấm. Không có ngoại lệ trừ khi quy định nói khác.",
        examples: ["Files containing personal data must be encrypted.", "The password must not be included in the same email."] },
      { form: "should / ought to + V  ·  should not + V", use: "Khuyến nghị mạnh, nên làm nhưng không phải luật.",
        examples: ["You should check the recipient list before pressing send.", "You should not type addresses manually."] },
      { form: "may + V  ·  need not + V (= don't have to)", use: "May: được phép. Need not: không bắt buộc. Khác với must not (cấm).",
        examples: ["You may anonymize data before sharing it for statistics.", "You need not apply the encryption rule to anonymized data."] },
      { form: "It would be advisable to + V  ·  You may wish to + V  ·  You might want to + V", use: "Nói giảm khi khuyên. Dùng khi muốn gợi ý nhẹ nhàng, nhất là với đồng nghiệp hoặc cấp trên.",
        examples: ["It would be advisable to wait ten seconds and read the message again.", "You may wish to call rather than email."] }
    ],
    mistakes: [
      { wrong: "You must not to share the password by email.", right: "You must not share the password by email.", note: "Sau must not là động từ nguyên mẫu không to." },
      { wrong: "You don't must encrypt anonymized data.", right: "You need not encrypt anonymized data. / You don't have to encrypt anonymized data.", note: "Phủ định của nghĩa vụ là need not hoặc don't have to; must not là cấm." },
      { wrong: "Staff may not to disclose personal data to third parties.", right: "Staff must not disclose personal data to third parties.", note: "Sau may not / must not là động từ nguyên mẫu không to. Ngoài ra may not có thể hiểu là “không được phép” hoặc “có thể không”, nên must not rõ hơn cho lệnh cấm." },
      { wrong: "It would be advisable that to wait.", right: "It would be advisable to wait.", note: "It would be advisable + to + V." }
    ],
    tip: "Trong hướng dẫn, mỗi động từ khuyết thiếu là một quyết định: must là luật, should là khuyên, may là cho phép. Đừng dùng must cho mọi thứ vì nhân viên sẽ không phân biệt được điều nào thật sự quan trọng."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "Files containing personal data ___ be encrypted before they are sent (quy định bắt buộc).",
      options: ["may", "must", "might", "need not"],
      answer: 1, explanation: "Bắt buộc → must be encrypted." },
    { id: "p2", type: "gap", prompt: "You ___ check the recipient list before pressing send, but this is not a legal rule.",
      options: ["must", "shall", "should", "need not"],
      answer: 2, explanation: "Khuyến nghị, không phải luật → should." },
    { id: "p3", type: "gap", prompt: "You ___ anonymize the data before sharing it for statistics (được phép làm, không cấm).",
      options: ["must not", "may", "shall not", "ought not"],
      answer: 1, explanation: "Được phép → may anonymize." },
    { id: "p4", type: "choice", prompt: "Which sentence means that something is NOT required?",
      options: ["You must not encrypt anonymized data.", "You need not encrypt anonymized data.", "You should not encrypt anonymized data.", "You may not encrypt anonymized data."],
      answer: 1, explanation: "need not = không bắt buộc. must not là cấm; should not là không nên." },
    { id: "p5", type: "gap", prompt: "Staff ___ not disclose personal data to third parties (lệnh cấm).",
      options: ["must", "might", "need", "should to"],
      answer: 0, explanation: "must not disclose = cấm tiết lộ." },
    { id: "p6", type: "choice", prompt: "Which sentence is the most tactful way to advise a colleague?",
      options: ["Do it this way.", "You must call me.", "You may wish to call rather than email.", "Call now or you will be in trouble."],
      answer: 2, explanation: "You may wish to… là cách nói giảm lịch sự. Các câu còn lại là mệnh lệnh hoặc đe dọa." },
    { id: "p7", type: "gap", prompt: "Containment is the first step after a data ___.",
      options: ["safeguard", "retention", "breach", "subject"],
      answer: 2, explanation: "data breach = sự cố lộ dữ liệu." },
    { id: "p8", type: "gap", prompt: "Salary data is shared on a need-to-___ basis.",
      options: ["use", "know", "have", "send"],
      answer: 1, explanation: "need-to-know basis = nguyên tắc cần biết." },
    { id: "p9", type: "gap", prompt: "Once the retention ___ has ended, records must be deleted or anonymized.",
      options: ["subject", "safeguard", "containment", "period"],
      answer: 3, explanation: "retention period = thời gian lưu giữ." },
    { id: "p10", type: "gap", prompt: "It would be ___ to wait ten seconds and read the message once more.",
      options: ["advisable", "compulsory", "forbidden", "anonymous"],
      answer: 0, explanation: "It would be advisable to… = nên… (nói giảm)." }
  ],

  writing: {
    title: "Write data handling guidelines",
    task: "Bạn là chị Lan. Viết email (150–220 từ) gửi phòng Nhân sự hướng dẫn mới về chia sẻ hồ sơ nhân viên với các bên ngoài (công ty bảo hiểm, đơn vị đào tạo). Bắt buộc: chỉ gửi dữ liệu cần thiết cho mục đích đó; không gửi số căn cước nếu không cần; mọi tệp phải mã hóa. Khuyến nghị: kiểm tra lại với chị Lan khi gửi lần đầu cho một bên mới. Được phép: ẩn danh hóa dữ liệu khi gửi cho bên thống kê, và khi đó không bắt buộc mã hóa. Dùng must, should, may, need not và một câu nói giảm.",
    requirements: [
      "Mở đầu bằng lời chào và mục đích.",
      "Dùng must hoặc must not cho điều bắt buộc.",
      "Dùng should cho khuyến nghị.",
      "Dùng may và need not.",
      "Dùng It would be advisable to… hoặc You may wish to…",
      "Kết thúc email và ký tên."
    ],
    minWords: 150,
    maxWords: 220,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Dear … / Hi …)", pattern: "\\bdear\\b|\\bhi\\b" },
      { label: "Có must / must not", pattern: "\\bmust( not)?\\b" },
      { label: "Có should", pattern: "\\bshould\\b" },
      { label: "Có may và need not", pattern: "\\bmay\\b[\\s\\S]*need not|need not[\\s\\S]*\\bmay\\b" },
      { label: "Có It would be advisable to / You may wish to / You might want to", pattern: "would be advisable|may wish to|might want to" },
      { label: "Có lời kết (Best regards …)", pattern: "regards|sincerely|best wishes" }
    ],
    model: [
      "Dear colleagues,",
      "I am writing to set out our new rules for sharing employee records with external parties such as insurers and training providers.",
      "Mandatory rules. You must send only the data that is necessary for the stated purpose. You must not include identity numbers unless the recipient truly needs them. All files containing personal data must be encrypted and password-protected, and the password must be sent separately.",
      "Recommendations. You should check with me the first time you send data to a new organization. It would be advisable to confirm the recipient's address by phone before you send anything.",
      "Permissions. You may anonymize the data when you send it to a party that only needs statistics. In that case, you need not apply the encryption rule, although you may still wish to do so for large files.",
      "If you are unsure about any of these points, please ask me before you send the data.",
      "Best regards,",
      "Lan"
    ]
  },

  review: {
    keyPhrases: [
      { en: "Files containing personal data must be encrypted.", vi: "Các tệp có dữ liệu cá nhân phải được mã hóa." },
      { en: "You should always check the recipient's address.", vi: "Bạn nên luôn kiểm tra địa chỉ người nhận." },
      { en: "You may anonymize the data before sharing it.", vi: "Bạn có thể ẩn danh hóa dữ liệu trước khi chia sẻ." },
      { en: "You need not apply the rule to anonymized data.", vi: "Bạn không bắt buộc áp dụng quy tắc cho dữ liệu đã ẩn danh." },
      { en: "It would be advisable to inform the affected employees.", vi: "Nên thông báo cho các nhân viên bị ảnh hưởng." },
      { en: "Data is shared on a need-to-know basis.", vi: "Dữ liệu chỉ chia sẻ theo nguyên tắc cần biết." }
    ]
  }
});
