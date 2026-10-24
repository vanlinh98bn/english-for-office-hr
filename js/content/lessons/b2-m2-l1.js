/* =========================================================
   B2 · Module 2 (HR Policies and Employee Relations) · Bài 1
   "Writing policy documents"
   Nối tiếp B2-M1: nửa cuối năm, Ban giám đốc đồng ý cho thử nghiệm
   chính sách làm việc tại nhà (remote work) trong sáu tháng, bắt đầu
   từ tháng sau. Anh Tuấn (HR Executive) soạn bản nháp; chị Lan
   (HR Manager) góp ý cách dùng shall / must / may và danh từ hóa.
   Nội dung chính sách:
   - Áp dụng cho nhân viên đã hết thử việc; vị trí cần có mặt tại văn
     phòng (ví dụ lễ tân) không thuộc phạm vi.
   - Làm tại nhà tối đa 1 ngày/tuần, cần quản lý trực tiếp duyệt.
   - Gửi đề nghị qua mạng nội bộ trước ít nhất 2 ngày làm việc.
   - Phải liên lạc được trong giờ cốt lõi 9:00–16:00.
   - Không làm tại nhà vào thứ Ba (họp nhóm hằng tuần).
   - Công ty cấp máy tính xách tay, Sam Lee cài truy cập an toàn (tối đa 20 máy).
   - Không dùng thiết bị cá nhân cho công việc; không in tài liệu mật ở nhà.
   - Quản lý có thể rút lại sự chấp thuận nếu kết quả công việc bị ảnh hưởng.
   Thời gian nói áng chừng.
   ========================================================= */
window.EOH.registerLesson({
  id: "b2-m2-l1",
  reviewStatus: "approved", // Linh duyệt ngày 24/10/2026
  duration: "45–60 phút",
  scenario: "Ban giám đốc đồng ý thử nghiệm chính sách làm việc tại nhà trong sáu tháng. Anh Tuấn (HR Executive) đã soạn bản nháp đầu tiên. Chị Lan (HR Manager) góp ý cách viết cho rõ ràng: dùng must, may, shall đúng chỗ và viết gọn bằng danh từ. Sau đó anh Tuấn gửi lại bản đã sửa.",

  objectives: [
    "Hiểu và dùng 10 từ vựng thường gặp trong văn bản chính sách nhân sự.",
    "Nghe cuộc trao đổi góp ý bản nháp chính sách, nắm được các quy định chính.",
    "Đọc bản chính sách đã sửa, tìm đúng phạm vi áp dụng, điều được phép và điều bị cấm.",
    "Dùng đúng must / must not, may / may not và shall trong văn phong chính sách; viết gọn bằng danh từ hóa (the use of, approval).",
    "Viết một mục ngắn của chính sách bằng văn phong trang trọng, rõ ràng."
  ],

  vocabulary: [
    { word: "remote work", ipa: "/rɪˌmoʊt ˈwɜːrk/", pos: "noun", meaning: "làm việc từ xa, làm việc tại nhà",
      example: "The directors have agreed to a trial of remote work.", exampleVi: "Ban giám đốc đã đồng ý thử nghiệm làm việc từ xa." },
    { word: "scope", ipa: "/skoʊp/", pos: "noun", meaning: "phạm vi (áp dụng)",
      example: "The first section explains the scope of the policy.", exampleVi: "Mục đầu tiên giải thích phạm vi áp dụng của chính sách." },
    { word: "wording", ipa: "/ˈwɜːrdɪŋ/", pos: "noun", meaning: "cách dùng từ, câu chữ",
      example: "Lan made a few comments on the wording.", exampleVi: "Chị Lan góp ý vài chỗ về câu chữ." },
    { word: "subject to", ipa: "/ˈsʌbdʒɪkt tə/", pos: "phrase", meaning: "tùy thuộc vào, phải có (điều kiện)",
      example: "Remote work is subject to line manager approval.", exampleVi: "Làm việc tại nhà phải được quản lý trực tiếp chấp thuận." },
    { word: "on-site", ipa: "/ˌɑːn ˈsaɪt/", pos: "adjective", meaning: "tại chỗ, tại văn phòng",
      example: "Reception is an on-site role.", exampleVi: "Lễ tân là vị trí phải làm tại văn phòng." },
    { word: "core hours", ipa: "/ˈkɔːr ˌaʊərz/", pos: "noun", meaning: "giờ cốt lõi (khung giờ bắt buộc phải liên lạc được)",
      example: "Core hours are from 9:00 to 16:00.", exampleVi: "Giờ cốt lõi là từ 9 giờ đến 16 giờ." },
    { word: "permitted", ipa: "/pərˈmɪtɪd/", pos: "adjective", meaning: "được phép",
      example: "Printing confidential documents at home is not permitted.", exampleVi: "Không được phép in tài liệu mật ở nhà." },
    { word: "withdraw", ipa: "/wɪðˈdrɔː/", pos: "verb", meaning: "rút lại, thu hồi",
      example: "A manager may withdraw approval at any time.", exampleVi: "Quản lý có thể rút lại sự chấp thuận bất cứ lúc nào." },
    { word: "comply with", ipa: "/kəmˈplaɪ wɪð/", pos: "verb", meaning: "tuân thủ, làm đúng theo",
      example: "All employees must comply with this policy.", exampleVi: "Mọi nhân viên phải tuân thủ chính sách này." },
    { word: "take effect", ipa: "/ˌteɪk ɪˈfekt/", pos: "phrase", meaning: "có hiệu lực",
      example: "The policy shall take effect next month.", exampleVi: "Chính sách sẽ có hiệu lực từ tháng sau." }
  ],

  pronunciation: {
    groups: [
      {
        title: "Trọng âm từ trong văn bản chính sách",
        text: "Những từ dài này rất hay gặp khi đọc hoặc trình bày chính sách. Âm tiết in hoa là âm đọc to và dài hơn.",
        items: [
          { word: "policy", marked: "POL·i·cy" },
          { word: "approval", marked: "ap·PROV·al" },
          { word: "confidential", marked: "con·fi·DEN·tial" },
          { word: "withdraw", marked: "with·DRAW" }
        ]
      },
      {
        title: "Dạng đọc nhẹ của must và shall",
        text: "Trong câu, must và shall thường đọc nhẹ và nhanh (/məst/, /ʃəl/). Trọng âm rơi vào động từ chính phía sau.",
        items: [
          { word: "must be available", marked: "must be a·VAIL·a·ble" },
          { word: "shall provide", marked: "shall pro·VIDE" },
          { word: "may work", marked: "may WORK" }
        ]
      }
    ],
    sentences: [
      "Employees must be available during core hours.",
      "The company shall provide a laptop with secure access.",
      "Approval may be withdrawn if performance is affected."
    ]
  },

  listening: {
    title: "Comments on the first draft",
    setting: "Văn phòng phòng Nhân sự. Chị Lan (HR Manager) góp ý bản nháp chính sách làm việc tại nhà của anh Tuấn (HR Executive).",
    speakers: { lan: "Lan (HR Manager)", tuan: "Tuan (HR Executive)" },
    lines: [
      { s: "lan", text: "Tuan, thanks for the first draft of the remote work policy. The directors have agreed to a six-month trial, starting next month.",
        vi: "Tuấn, cảm ơn em về bản nháp đầu tiên của chính sách làm việc tại nhà. Ban giám đốc đã đồng ý thử nghiệm sáu tháng, bắt đầu từ tháng sau." },
      { s: "tuan", text: "That's great news. Do you have any comments on the wording?",
        vi: "Tin tốt quá ạ. Chị có góp ý gì về câu chữ không ạ?" },
      { s: "lan", text: "A few. In a policy, we need to be very clear about who has to do what. I'd avoid the word 'should', because people often read it as optional.",
        vi: "Có vài chỗ. Trong chính sách, mình cần nói thật rõ ai phải làm gì. Chị sẽ tránh dùng từ 'should', vì mọi người hay hiểu là không bắt buộc." },
      { s: "tuan", text: "So which words do you suggest instead?",
        vi: "Vậy chị gợi ý dùng từ nào thay thế ạ?" },
      { s: "lan", text: "Use 'must' for things employees have to do, 'may' for things they're allowed to do, and 'shall' for the company's own commitments.",
        vi: "Dùng 'must' cho việc nhân viên bắt buộc phải làm, 'may' cho việc nhân viên được phép làm, và 'shall' cho cam kết của chính công ty." },
      { s: "tuan", text: "I see. So: 'Employees may work from home for up to one day per week, subject to line manager approval.'",
        vi: "Em hiểu rồi. Vậy là: 'Nhân viên được làm việc tại nhà tối đa một ngày mỗi tuần, nếu quản lý trực tiếp chấp thuận.'" },
      { s: "lan", text: "Exactly. And what does the scope section say?",
        vi: "Đúng vậy. Còn mục phạm vi áp dụng ghi gì?" },
      { s: "tuan", text: "The policy applies to all employees who have completed probation. Roles that require on-site presence, such as reception, are not included.",
        vi: "Chính sách áp dụng cho mọi nhân viên đã hết thử việc. Các vị trí cần có mặt tại văn phòng, ví dụ lễ tân, thì không thuộc phạm vi." },
      { s: "lan", text: "Good. What about requests and availability?",
        vi: "Tốt. Còn việc gửi đề nghị và liên lạc thì sao?" },
      { s: "tuan", text: "Requests must be submitted through the intranet at least two working days in advance. And employees must be available by phone and email during core hours, from nine a.m. to four p.m.",
        vi: "Đề nghị phải gửi qua mạng nội bộ trước ít nhất hai ngày làm việc. Và nhân viên phải liên lạc được qua điện thoại và email trong giờ cốt lõi, từ chín giờ sáng đến bốn giờ chiều." },
      { s: "lan", text: "One more thing. The equipment section is a bit long. Try using nouns. For example, 'The use of personal devices for company work is not permitted', instead of 'Employees can't use their own laptops or phones to do company work'.",
        vi: "Thêm một điều. Mục thiết bị hơi dài. Em thử dùng danh từ xem. Ví dụ 'Việc sử dụng thiết bị cá nhân cho công việc của công ty là không được phép', thay vì 'Nhân viên không được dùng máy tính hay điện thoại của mình để làm việc của công ty'." },
      { s: "tuan", text: "That sounds shorter and more formal. I'll also write: 'The company shall provide a laptop with secure access.' Sam Lee can set them up.",
        vi: "Nghe gọn và trang trọng hơn ạ. Em cũng sẽ viết: 'Công ty sẽ cấp máy tính xách tay có truy cập an toàn.' Anh Sam Lee có thể cài đặt." },
      { s: "lan", text: "Perfect. Please also add that approval may be withdrawn if performance is affected. Could you send me the revised version by the end of the week?",
        vi: "Tốt lắm. Em thêm ý là sự chấp thuận có thể bị rút lại nếu kết quả công việc bị ảnh hưởng. Cuối tuần em gửi chị bản đã sửa nhé?" },
      { s: "tuan", text: "Sure. I'll send it before Friday.",
        vi: "Vâng. Em sẽ gửi trước thứ Sáu ạ." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "Why does Lan want to avoid the word 'should' in the policy?",
        options: ["It is too formal", "People often read it as optional", "It is British English", "The directors don't like it"],
        answer: 1, explanation: "Chị Lan nói: “I'd avoid the word 'should', because people often read it as optional.” Chính sách cần rõ là bắt buộc hay không." },
      { id: "l2", type: "choice", prompt: "Who is NOT included in the remote work policy?",
        options: ["Employees who have completed probation", "Accountants", "Roles that require on-site presence, such as reception", "Sales staff"],
        answer: 2, explanation: "“Roles that require on-site presence, such as reception, are not included.” Kế toán và nhân viên kinh doanh đã hết thử việc vẫn thuộc phạm vi." },
      { id: "l3", type: "choice", prompt: "When must employees be available by phone and email?",
        options: ["During core hours, from 9 a.m. to 4 p.m.", "From 8 a.m. to 5 p.m.", "Only in the morning", "Only when their manager calls"],
        answer: 0, explanation: "“…employees must be available by phone and email during core hours, from nine a.m. to four p.m.”" }
    ]
  },

  reading: {
    title: "Revised draft – Remote Work Policy",
    intro: "Email anh Tuấn gửi chị Lan kèm bản chính sách đã sửa. Đọc và tìm điều bắt buộc, điều được phép và điều bị cấm.",
    email: {
      from: "Tuan Nguyen <tuan.nguyen@riverside-trading.example>",
      to: "Lan Pham",
      date: "Thursday",
      subject: "Revised draft – Remote Work Policy (trial)",
      greeting: "Dear Lan,",
      paragraphs: [
        "Thank you for your comments. Please find below the revised draft of the Remote Work Policy for the six-month trial. I have replaced \"should\" with \"must\", \"may\" or \"shall\", and I have shortened some sections by using nouns."
      ],
      list: [
        "Scope: This policy applies to all employees who have completed their probation. Roles that require on-site presence, such as reception, are excluded.",
        "Eligibility and approval: Employees may work from home for up to one day per week. Remote work is subject to line manager approval.",
        "Requests: Requests must be submitted through the intranet at least two working days in advance.",
        "Availability: Employees must be available by phone and email during core hours (9:00–16:00). Employees may not work from home on Tuesdays, when the weekly team meeting takes place.",
        "Equipment and security: The company shall provide a laptop with secure access. The use of personal devices for company work is not permitted. Confidential documents must not be printed at home.",
        "Withdrawal: Approval may be withdrawn if work performance is affected or if the employee fails to comply with this policy."
      ],
      after: [
        "The policy shall take effect on the first day of next month. Sam Lee has confirmed that he can set up secure access for up to twenty laptops before then.",
        "Could you let me know if any further changes are needed? Once you approve the draft, I will prepare a short announcement for all staff."
      ],
      closing: "Best regards,",
      signature: ["Tuan Nguyen", "HR Executive, Riverside Trading"]
    },
    glossary: [
      { term: "revised draft", vi: "bản nháp đã sửa" },
      { term: "be excluded", vi: "không thuộc phạm vi, bị loại ra" },
      { term: "secure access", vi: "truy cập an toàn (vào hệ thống công ty)" },
      { term: "fail to (do)", vi: "không làm (điều được yêu cầu)" },
      { term: "further changes", vi: "những thay đổi thêm" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "On which day can employees NOT work from home?",
        options: ["Monday", "Friday", "Tuesday", "Any day of the week"],
        answer: 2, explanation: "“Employees may not work from home on Tuesdays, when the weekly team meeting takes place.” Trong chính sách, may not = không được phép." },
      { id: "r2", type: "choice", prompt: "What does “The use of personal devices for company work is not permitted” mean?",
        options: ["Employees may use their own laptops at home.", "The company will pay for personal phones.", "Employees must bring their own laptops.", "Employees cannot use their own devices for company work."],
        answer: 3, explanation: "not permitted = không được phép. Câu này cấm dùng thiết bị cá nhân cho công việc; công ty sẽ cấp máy (“The company shall provide a laptop”)." },
      { id: "r3", type: "choice", prompt: "What will Tuan do after Lan approves the draft?",
        options: ["Prepare a short announcement for all staff", "Buy twenty new laptops", "Start working from home", "Send the policy to Sam Lee"],
        answer: 0, explanation: "“Once you approve the draft, I will prepare a short announcement for all staff.” Sam Lee chỉ cài truy cập an toàn cho máy." }
    ]
  },

  grammar: {
    title: "Policy language: must, may, shall and nominalization",
    titleVi: "Văn phong chính sách: must, may, shall và danh từ hóa",
    intro: "Văn bản chính sách phải rõ ràng: ai bắt buộc làm gì, ai được phép làm gì, công ty cam kết gì. Bốn mẫu dưới đây có trong cuộc trao đổi và bản chính sách bạn vừa học.",
    patterns: [
      { form: "must / must not + động từ nguyên mẫu", use: "Nghĩa vụ bắt buộc và điều bị cấm đối với nhân viên. Rõ ràng hơn should (should dễ bị hiểu là chỉ nên, không bắt buộc).",
        examples: ["Employees must be available during core hours.", "Confidential documents must not be printed at home."] },
      { form: "may / may not + động từ nguyên mẫu", use: "Trong chính sách, may = được phép, may not = không được phép (không phải nghĩa 'có lẽ').",
        examples: ["Employees may work from home for up to one day per week.", "Employees may not work from home on Tuesdays."] },
      { form: "shall + động từ nguyên mẫu", use: "Cam kết của công ty hoặc điều sẽ xảy ra theo văn bản. Dùng trong văn bản trang trọng, pháp lý; ít dùng khi nói chuyện hằng ngày.",
        examples: ["The company shall provide a laptop with secure access.", "This policy shall take effect next month."] },
      { form: "Danh từ hóa: use → the use of · approve → approval · attend → attendance · submit → submission", use: "Đổi động từ thành danh từ để câu gọn và trang trọng hơn. Thường đi với is required / is not permitted / is subject to.",
        examples: ["The use of personal devices is not permitted.", "Remote work is subject to line manager approval."] }
    ],
    mistakes: [
      { wrong: "Employees should submit requests two days in advance.", right: "Employees must submit requests two days in advance.", note: "Nếu là quy định bắt buộc, dùng must. should dễ bị hiểu là không bắt buộc." },
      { wrong: "Employees must to be available during core hours.", right: "Employees must be available during core hours.", note: "Sau must, may, shall dùng động từ nguyên mẫu không có to." },
      { wrong: "The company shall provides a laptop.", right: "The company shall provide a laptop.", note: "Sau shall không thêm -s cho động từ, kể cả với chủ ngữ số ít." },
      { wrong: "The using of personal devices is not permitted.", right: "The use of personal devices is not permitted.", note: "Dùng danh từ use (the use of), không dùng the using of." }
    ],
    tip: "Khi đọc chính sách bằng tiếng Anh, hãy gạch chân must, may, shall. Ba từ này cho biết ngay đâu là nghĩa vụ, đâu là quyền, đâu là cam kết của công ty. Khi tự viết, mỗi câu chỉ nên có một quy định."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "Requests ___ be submitted through the intranet at least two working days in advance.",
      context: "Đây là quy định bắt buộc đối với nhân viên.",
      options: ["might", "shall to", "must", "ought"],
      answer: 2, explanation: "Quy định bắt buộc → must be submitted. “shall to” và “ought be” sai cấu trúc (đúng là shall / ought to); might chỉ khả năng, không phải quy định." },
    { id: "p2", type: "gap", prompt: "Employees ___ work from home for up to one day per week, subject to line manager approval.",
      context: "Đây là điều nhân viên được phép làm.",
      options: ["may", "must", "shall", "have to"],
      answer: 0, explanation: "Được phép → may. must / have to là bắt buộc; shall dùng cho cam kết của công ty." },
    { id: "p3", type: "gap", prompt: "The company ___ provide each eligible employee with a laptop.",
      context: "Đây là cam kết của công ty, văn phong chính sách.",
      options: ["may", "shall", "is", "should to"],
      answer: 1, explanation: "Cam kết của công ty trong văn bản trang trọng → shall provide. may chỉ là được phép, không phải cam kết; “is provide” và “should to” sai ngữ pháp." },
    { id: "p4", type: "gap", prompt: "Employees ___ work from home on Tuesdays, when the weekly team meeting takes place.",
      context: "Đây là điều bị cấm.",
      options: ["may", "shall", "must", "may not"],
      answer: 3, explanation: "Không được phép → may not. may, shall, must đều không mang nghĩa cấm." },
    { id: "p5", type: "gap", prompt: "___ of personal devices for company work is not permitted.",
      options: ["The use", "The using", "Using of", "The used"],
      answer: 0, explanation: "Danh từ hóa: the use of. “The using of”, “Using of” và “The used” đều sai." },
    { id: "p6", type: "gap", prompt: "Remote work is subject to line manager ___.",
      options: ["approve", "approving", "approval", "approved"],
      answer: 2, explanation: "Sau subject to cần danh từ: approval (sự chấp thuận)." },
    { id: "p7", type: "choice", prompt: "Which sentence is the most suitable for a policy document?",
      options: ["Employees can't use their own laptops, OK?", "The use of personal laptops for company work is not permitted.", "Please don't really use your own laptop.", "We think personal laptops are maybe not good."],
      answer: 1, explanation: "Văn phong chính sách: rõ ràng, trang trọng, dùng danh từ hóa và not permitted. Các câu khác giống lời nói hằng ngày." },
    { id: "p8", type: "gap", prompt: "This policy shall take ___ on the first day of next month.",
      options: ["place", "part", "action", "effect"],
      answer: 3, explanation: "take effect = có hiệu lực. take place = diễn ra; take part = tham gia; take action = hành động." },
    { id: "p9", type: "gap", prompt: "Employees must be available during ___ hours, from 9:00 to 16:00.",
      options: ["core", "rush", "peak", "extra"],
      answer: 0, explanation: "core hours = giờ cốt lõi, khung giờ bắt buộc phải liên lạc được. rush hour là giờ cao điểm giao thông." },
    { id: "p10", type: "gap", prompt: "Approval may be ___ if work performance is affected.",
      options: ["withdrawing", "withdrew", "withdrawn", "withdraw"],
      answer: 2, explanation: "Bị động sau may be: may be + V3 → withdrawn (withdraw – withdrew – withdrawn)." }
  ],

  writing: {
    title: "Write a policy section",
    task: "Bạn là anh Tuấn. Chị Lan muốn thêm một mục mới vào chính sách làm việc tại nhà: “Data security” (an toàn dữ liệu). Viết email gửi chị Lan (120–180 từ) có nội dung mục này: công ty cấp máy tính và truy cập an toàn; không dùng thiết bị cá nhân; khóa màn hình khi rời máy; không in hoặc lưu tài liệu mật ở nhà; mất máy phải báo ngay cho anh Sam Lee (IT Support).",
    requirements: [
      "Mở đầu bằng lời chào và câu nêu mục đích email.",
      "Dùng must hoặc must not cho nghĩa vụ và điều bị cấm.",
      "Dùng may hoặc may not cho điều được phép hoặc không được phép.",
      "Dùng shall cho cam kết của công ty.",
      "Dùng ít nhất một cụm danh từ hóa (the use of, the loss of…).",
      "Kết thúc email và ký tên."
    ],
    minWords: 120,
    maxWords: 180,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Dear … / Hi …)", pattern: "\\bdear\\b|\\bhi\\b" },
      { label: "Có must / must not", pattern: "\\bmust\\b" },
      { label: "Có may / may not", pattern: "\\bmay\\b" },
      { label: "Có shall", pattern: "\\bshall\\b" },
      { label: "Có danh từ hóa (the use of / the loss of / the storage of …)", pattern: "\\bthe (use|loss|storage|protection|sharing|printing|approval|submission) of\\b" },
      { label: "Có lời kết (Best regards …)", pattern: "regards|sincerely|best wishes" }
    ],
    model: [
      "Dear Lan,",
      "As discussed, I have drafted a new section on data security for the Remote Work Policy. Please see the wording below.",
      "Section 7: Data security",
      "The company shall provide each eligible employee with a laptop and secure access to the company network. The use of personal devices for company work is not permitted.",
      "Employees must lock their screen whenever they leave their laptop. Confidential documents must not be printed or stored at home. Employees may use public Wi-Fi only when the secure connection is switched on.",
      "The loss of a company laptop must be reported to Sam Lee in IT Support immediately.",
      "Please let me know if you would like any changes to the wording.",
      "Best regards,",
      "Tuan"
    ]
  },

  review: {
    keyPhrases: [
      { en: "Employees may work from home for up to one day per week.", vi: "Nhân viên được làm việc tại nhà tối đa một ngày mỗi tuần." },
      { en: "Remote work is subject to line manager approval.", vi: "Làm việc tại nhà phải được quản lý trực tiếp chấp thuận." },
      { en: "Employees must be available during core hours.", vi: "Nhân viên phải liên lạc được trong giờ cốt lõi." },
      { en: "The company shall provide a laptop with secure access.", vi: "Công ty sẽ cấp máy tính xách tay có truy cập an toàn." },
      { en: "The use of personal devices for company work is not permitted.", vi: "Không được phép dùng thiết bị cá nhân cho công việc của công ty." },
      { en: "This policy shall take effect next month.", vi: "Chính sách này có hiệu lực từ tháng sau." }
    ]
  }
});
