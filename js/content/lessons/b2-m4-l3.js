/* =========================================================
   B2 · Module 4 (Business Communication and Negotiation) · Bài 3
   "The language of negotiation"
   Nối tiếp B2-M4-L1 (anh Son cần thêm người ca muộn, giảm làm thêm
   giờ). Son (Logistics Manager) thương lượng với chị Lan:
   - Son muốn 2 nhân viên Logistics mới ngay.
   - Lan chỉ duyệt được 1 nhân viên chính thức ngay + 1 nhân viên thời
     vụ (3 tháng) cho mùa cao điểm cuối quý, với điều kiện: Son cho
     nhân viên học làm nhiều việc (cross-train), giới hạn làm thêm giờ,
     và nếu lượng hàng không tăng thì không gia hạn thời vụ.
   - Làm thêm giờ: không quá 40 giờ/người/tháng (khớp B1-M3-L3).
   - Phụ cấp ca muộn: Son muốn 500.000 đồng/tháng; Lan đề xuất 300.000
     trong 3 tháng đầu, xét lại sau đó.
   - Thỏa thuận cuối: 1 người chính thức + 1 thời vụ; phụ cấp ca muộn
     300.000 đồng/tháng, xét lại sau 3 tháng; Ngoc duyệt ngân sách;
     Tuấn đăng tin trong tuần này.
   Bài viết: Tuấn xác nhận thỏa thuận với cô Nga Do (trung tâm ngoại
   ngữ, B1-M4): giảm 10% học phí nếu đặt ba khóa; mỗi buổi 2 giờ; hủy
   báo trước 5 ngày làm việc; thanh toán sau mỗi khóa.
   Thời gian nói áng chừng.
   ========================================================= */
window.EOH.registerLesson({
  id: "b2-m4-l3",
  reviewStatus: "approved", // Linh duyệt ngày 24/10/2026
  duration: "45–60 phút",
  scenario: "Anh Son Bui (Logistics Manager) muốn xin thêm hai nhân viên và phụ cấp ca muộn. Chị Lan (HR Manager) không thể đồng ý tất cả. Hai người thương lượng: mỗi bên nhượng bộ một phần, và chị Lan đưa ra các điều kiện. Sau đó anh Tuấn viết email xác nhận một thỏa thuận khác với cô Nga Do, giảng viên bên ngoài.",

  objectives: [
    "Hiểu và dùng 10 từ vựng thường gặp khi thương lượng.",
    "Nghe cuộc thương lượng, nhận ra đề nghị, nhượng bộ và điều kiện.",
    "Đọc email xác nhận thỏa thuận, tìm đúng các điều kiện.",
    "Đặt điều kiện: provided (that) / providing (that) / as long as / on condition that; unless (= if … not); nhượng bộ: I could…, but only if…",
    "Viết email xác nhận thỏa thuận với đối tác bên ngoài, nêu rõ các điều kiện."
  ],

  vocabulary: [
    { word: "negotiate", ipa: "/nɪˈɡoʊʃieɪt/", pos: "verb", meaning: "thương lượng, đàm phán",
      example: "We need to negotiate the terms with the trainer.", exampleVi: "Chúng ta cần thương lượng các điều khoản với giảng viên." },
    { word: "concession", ipa: "/kənˈseʃən/", pos: "noun", meaning: "sự nhượng bộ",
      example: "Each side made a small concession.", exampleVi: "Mỗi bên đã nhượng bộ một chút." },
    { word: "compromise", ipa: "/ˈkɑːmprəmaɪz/", pos: "noun", meaning: "sự thỏa hiệp, giải pháp ở giữa",
      example: "Let's find a compromise we can both accept.", exampleVi: "Hãy tìm một giải pháp ở giữa mà cả hai cùng chấp nhận." },
    { word: "counteroffer", ipa: "/ˈkaʊntərɔːfər/", pos: "noun", meaning: "lời đề nghị đáp lại",
      example: "Lan made a counteroffer of one permanent employee.", exampleVi: "Chị Lan đưa ra đề nghị đáp lại là một nhân viên chính thức." },
    { word: "condition", ipa: "/kənˈdɪʃən/", pos: "noun", meaning: "điều kiện",
      example: "I agree, on one condition.", exampleVi: "Tôi đồng ý, với một điều kiện." },
    { word: "temporary", ipa: "/ˈtempəreri/", pos: "adjective", meaning: "tạm thời, thời vụ",
      example: "We can offer a temporary worker for three months.", exampleVi: "Chúng tôi có thể cho một nhân viên thời vụ ba tháng." },
    { word: "cross-train", ipa: "/ˈkrɔːs treɪn/", pos: "verb", meaning: "đào tạo để làm được nhiều việc",
      example: "Please cross-train two staff to cover the late shift.", exampleVi: "Hãy đào tạo hai nhân viên để làm được cả ca muộn." },
    { word: "cap", ipa: "/kæp/", pos: "verb", meaning: "đặt mức trần, giới hạn",
      example: "We will cap overtime at forty hours a month.", exampleVi: "Chúng tôi sẽ giới hạn làm thêm ở bốn mươi giờ một tháng." },
    { word: "trade-off", ipa: "/ˈtreɪd ɔːf/", pos: "noun", meaning: "sự đánh đổi (được cái này mất cái kia)",
      example: "Every deal has a trade-off.", exampleVi: "Thỏa thuận nào cũng có sự đánh đổi." },
    { word: "deal", ipa: "/diːl/", pos: "noun", meaning: "thỏa thuận",
      example: "That sounds like a fair deal.", exampleVi: "Nghe như một thỏa thuận công bằng." }
  ],

  pronunciation: {
    groups: [
      {
        title: "Nhấn từ chỉ điều kiện",
        text: "Khi đặt điều kiện, nhấn mạnh từ điều kiện và đọc chậm lại. Âm tiết in hoa là âm đọc to và dài hơn.",
        items: [
          { word: "provided that", marked: "pro·VID·ed that" },
          { word: "as long as", marked: "as LONG as" },
          { word: "unless", marked: "un·LESS" },
          { word: "on condition that", marked: "on con·DI·tion that" }
        ]
      },
      {
        title: "Trọng âm từ",
        text: "Những từ hay gặp khi thương lượng.",
        items: [
          { word: "negotiate", marked: "ne·GO·ti·ate" },
          { word: "concession", marked: "con·CES·sion" },
          { word: "compromise", marked: "COM·pro·mise" },
          { word: "temporary", marked: "TEM·po·rar·y" }
        ]
      }
    ],
    sentences: [
      "I can approve one permanent employee, provided that you cross-train the team.",
      "We'll extend the temporary contract as long as the volume stays high.",
      "I won't agree unless we cap overtime."
    ]
  },

  listening: {
    title: "Negotiating staffing",
    setting: "Văn phòng chị Lan. Anh Son Bui (Logistics Manager) thương lượng với chị Lan (HR Manager) về thêm nhân viên và phụ cấp ca muộn.",
    speakers: { lan: "Lan (HR Manager)", son: "Son (Logistics Manager)" },
    lines: [
      { s: "son", text: "Lan, I'll be direct. Logistics needs two new employees right now. We can't keep going with the current team.",
        vi: "Chị Lan, anh nói thẳng nhé. Logistics cần hai nhân viên mới ngay bây giờ. Đội hiện tại không thể tiếp tục như vậy." },
      { s: "lan", text: "I understand, Son, and I want to help. But two permanent hires is not possible this quarter. The budget won't allow it.",
        vi: "Chị hiểu, anh Sơn, và chị muốn giúp. Nhưng hai nhân viên chính thức là không thể trong quý này. Ngân sách không cho phép." },
      { s: "son", text: "Then what can you offer?",
        vi: "Vậy chị đề nghị được gì?" },
      { s: "lan", text: "I could approve one permanent employee now, and one temporary worker for three months to cover the peak season.",
        vi: "Chị có thể duyệt một nhân viên chính thức ngay, và một nhân viên thời vụ ba tháng để lo mùa cao điểm." },
      { s: "son", text: "That's a start. But will the temporary contract be extended if we're still busy?",
        vi: "Đó là bước đầu. Nhưng hợp đồng thời vụ có được gia hạn nếu mình vẫn bận không?" },
      { s: "lan", text: "Yes, as long as the volume stays high. If it doesn't, we won't extend it. And I have two conditions for the permanent hire.",
        vi: "Có, miễn là lượng hàng vẫn cao. Nếu không thì mình không gia hạn. Và chị có hai điều kiện cho nhân viên chính thức." },
      { s: "son", text: "Go on.",
        vi: "Chị cứ nói." },
      { s: "lan", text: "First, I can approve it provided that you cross-train at least two people to cover the late shift. Second, overtime must be capped at forty hours per person per month.",
        vi: "Thứ nhất, chị có thể duyệt với điều kiện anh đào tạo ít nhất hai người để làm được ca muộn. Thứ hai, làm thêm giờ phải giới hạn bốn mươi giờ mỗi người mỗi tháng." },
      { s: "son", text: "The cross-training is fine. The cap is harder. We might need more than forty hours in the busiest weeks.",
        vi: "Đào tạo nhiều việc thì được. Giới hạn thì khó hơn. Có thể cần quá bốn mươi giờ trong những tuần bận nhất." },
      { s: "lan", text: "The law sets a maximum of forty hours a month, so I can't agree to more. Unless you want to break the rules, that's not negotiable.",
        vi: "Luật quy định tối đa bốn mươi giờ một tháng, nên chị không thể đồng ý hơn. Trừ khi anh muốn vi phạm quy định, điều này không thương lượng được." },
      { s: "son", text: "No, of course not. Okay, I'll accept the cap. What about the late shift allowance? I'd like five hundred thousand dong a month.",
        vi: "Dĩ nhiên là không. Được rồi, anh chấp nhận giới hạn. Còn phụ cấp ca muộn thì sao? Anh muốn năm trăm nghìn đồng một tháng." },
      { s: "lan", text: "That's more than I can approve. How about three hundred thousand for the first three months? We can review it afterwards.",
        vi: "Mức đó vượt quá khả năng chị duyệt. Ba trăm nghìn trong ba tháng đầu thì sao? Sau đó mình xem lại." },
      { s: "son", text: "Three months is short, but I can accept that, on condition that we review it honestly.",
        vi: "Ba tháng thì ngắn, nhưng anh chấp nhận, với điều kiện mình xem lại một cách thẳng thắn." },
      { s: "lan", text: "Deal. Ngoc needs to approve the budget, and Tuan will post the job this week.",
        vi: "Chốt. Chị Ngọc cần duyệt ngân sách, và Tuấn sẽ đăng tin trong tuần này." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "What does Lan offer instead of two permanent hires?",
        options: ["Three temporary workers", "One permanent employee and one temporary worker", "No new employees", "Two temporary workers"],
        answer: 1, explanation: "“I could approve one permanent employee now, and one temporary worker for three months.”" },
      { id: "l2", type: "choice", prompt: "When will the temporary contract be extended?",
        options: ["Never", "Automatically", "As long as the volume stays high", "If Son asks twice"],
        answer: 2, explanation: "“Yes, as long as the volume stays high. If it doesn't, we won't extend it.”" },
      { id: "l3", type: "choice", prompt: "What is the final deal about the late shift allowance?",
        options: ["500,000 dong for six months", "No allowance", "300,000 dong forever", "300,000 dong for three months, then a review"],
        answer: 3, explanation: "“How about three hundred thousand for the first three months? We can review it afterwards.” Anh Sơn chấp nhận với điều kiện xem lại thẳng thắn." }
    ]
  },

  reading: {
    title: "Confirming our agreement",
    intro: "Email anh Tuấn gửi cô Nga Do (giảng viên bên ngoài) để xác nhận các điều khoản đã thỏa thuận. Đọc và tìm các điều kiện.",
    email: {
      from: "Tuan Nguyen <tuan.nguyen@riverside-trading.example>",
      to: "Nga Do",
      date: "Thursday",
      subject: "Confirming our agreement: business English courses",
      greeting: "Dear Ms. Nga,",
      paragraphs: [
        "Thank you for your time on the phone this morning. I am writing to confirm the terms that we discussed for the next series of business English courses for our Sales team."
      ],
      list: [
        "Discount: you have kindly agreed to a 10% discount on the course fee, provided that we book three courses together.",
        "Session length: each session will last two hours, as long as there is a short break in the middle.",
        "Cancellation: we may cancel or move a session without charge, provided that we give you at least five working days' notice. Unless we give this notice, the full fee for that session is payable.",
        "Payment: we will pay after each course, within thirty days of receiving your invoice."
      ],
      after: [
        "If any of these points does not match your understanding, please let me know as soon as possible. Otherwise, I will send you the signed booking form next week."
      ],
      closing: "Kind regards,",
      signature: ["Tuan Nguyen", "HR Executive, Riverside Trading"]
    },
    glossary: [
      { term: "course fee", vi: "học phí khóa học" },
      { term: "without charge", vi: "không mất phí" },
      { term: "notice", vi: "thông báo trước" },
      { term: "payable", vi: "phải trả" },
      { term: "invoice", vi: "hóa đơn" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "Under what condition does Riverside get a 10% discount?",
        options: ["If they pay in advance", "If they book three courses together", "If sessions last three hours", "If they cancel nothing"],
        answer: 1, explanation: "“…a 10% discount on the course fee, provided that we book three courses together.”" },
      { id: "r2", type: "choice", prompt: "When must Riverside pay the full fee for a cancelled session?",
        options: ["Always", "Never", "If they do not give five working days' notice", "If they give five working days' notice"],
        answer: 2, explanation: "“Unless we give this notice, the full fee for that session is payable.” Unless = nếu không. Có báo trước năm ngày làm việc thì miễn phí." },
      { id: "r3", type: "choice", prompt: "What will Tuan do next week if Ms. Nga agrees?",
        options: ["Cancel the courses", "Pay the first invoice", "Send the signed booking form", "Ask for a bigger discount"],
        answer: 2, explanation: "“Otherwise, I will send you the signed booking form next week.”" }
    ]
  },

  grammar: {
    title: "Conditions: provided that, as long as, unless",
    titleVi: "Đặt điều kiện khi thương lượng",
    intro: "Khi thương lượng, ta ít khi nói “có” hay “không” đơn giản. Ta nói “có, nhưng với điều kiện…”. Bốn mẫu dưới đây có trong cuộc thương lượng và email bạn vừa học.",
    patterns: [
      { form: "provided (that) / providing (that) + câu", use: "Với điều kiện là. Trang trọng, dùng khi bên kia phải làm gì đó trước.",
        examples: ["I can approve it provided that you cross-train two people.", "You get a 10% discount, provided that we book three courses."] },
      { form: "as long as + câu", use: "Miễn là. Thân mật hơn provided that, cũng chỉ điều kiện.",
        examples: ["We'll extend the contract as long as the volume stays high.", "Sessions can last two hours as long as there is a break."] },
      { form: "on condition that + câu  ·  on one condition", use: "Với điều kiện là (rất trang trọng, thường trong văn bản).",
        examples: ["I accept, on condition that we review it honestly.", "I agree on one condition."] },
      { form: "unless + câu (= if … not)", use: "Trừ khi, nếu không. Không dùng not sau unless.",
        examples: ["Unless we give notice, the full fee is payable.", "Overtime must stay under forty hours unless the law changes."] }
    ],
    mistakes: [
      { wrong: "Unless you don't cross-train, I can't approve it.", right: "Unless you cross-train, I can't approve it.", note: "unless đã có nghĩa “nếu không”, không thêm don't." },
      { wrong: "I'll agree provided you will cross-train.", right: "I'll agree provided (that) you cross-train.", note: "Sau provided that dùng thì hiện tại, không dùng will." },
      { wrong: "As long you stay, I'll help.", right: "As long as you stay, I'll help.", note: "Cụm cố định: as long as." },
      { wrong: "I accept in condition that…", right: "I accept on condition that…", note: "Cụm cố định: on condition that." }
    ],
    tip: "Một thỏa thuận tốt luôn có “nhượng bộ có điều kiện”: “I could… but only if…”. Sau khi thương lượng xong, hãy viết email xác nhận từng điều kiện để tránh hiểu lầm."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "I can approve it ___ you cross-train two people.",
      options: ["unless", "provided that", "although", "while"],
      answer: 1, explanation: "Điều kiện cần thực hiện → provided that. unless có nghĩa ngược lại (trừ khi)." },
    { id: "p2", type: "gap", prompt: "We'll extend the contract ___ the volume stays high.",
      options: ["unless", "however", "as long as", "so that"],
      answer: 2, explanation: "as long as = miễn là. unless sẽ làm đảo nghĩa." },
    { id: "p3", type: "gap", prompt: "___ you give five working days' notice, we will charge the full fee.",
      options: ["Provided that", "As long as", "On condition that", "Unless"],
      answer: 3, explanation: "Nếu không báo trước thì tính đủ phí → Unless. Ba lựa chọn còn lại đều nghĩa là “nếu có”, trái nghĩa." },
    { id: "p4", type: "choice", prompt: "“I'll agree unless you break the rules.” What does it mean?",
      options: ["I'll agree only if you break the rules.", "I'll agree if you do not break the rules.", "I'll never agree.", "I'll agree even if you break the rules."],
      answer: 1, explanation: "unless = if … not. Đồng ý nếu bạn không phá quy định." },
    { id: "p5", type: "gap", prompt: "I accept, ___ condition that we review it in three months.",
      options: ["in", "at", "for", "on"],
      answer: 3, explanation: "Cụm cố định: on condition that." },
    { id: "p6", type: "choice", prompt: "Which sentence is correct?",
      options: ["Unless you don't help, we can't finish.", "Unless you help, we can't finish.", "Unless you won't help, we can't finish.", "Unless you not help, we can't finish."],
      answer: 1, explanation: "Sau unless dùng khẳng định: Unless you help. Unless đã mang nghĩa phủ định." },
    { id: "p7", type: "gap", prompt: "Each side made a small ___ to reach an agreement.",
      options: ["trade-off", "concession", "deal", "cap"],
      answer: 1, explanation: "concession = sự nhượng bộ. Mỗi bên nhượng bộ một chút." },
    { id: "p8", type: "gap", prompt: "We will ___ overtime at forty hours per person per month.",
      options: ["cap", "negotiate", "temporary", "cross-train"],
      answer: 0, explanation: "cap = đặt mức trần. Dùng cho giới hạn số giờ, số tiền." },
    { id: "p9", type: "gap", prompt: "Lan's ___ was one permanent employee and one temporary worker.",
      options: ["roster", "invoice", "counteroffer", "condition"],
      answer: 2, explanation: "counteroffer = đề nghị đáp lại sau khi bên kia đã đề nghị trước." },
    { id: "p10", type: "gap", prompt: "A ___ worker is hired for three months only.",
      options: ["permanent", "cross-trained", "capped", "temporary"],
      answer: 3, explanation: "temporary = tạm thời, thời vụ. permanent là chính thức, lâu dài." }
  ],

  writing: {
    title: "Confirm a negotiated agreement",
    task: "Bạn là anh Tuấn. Viết email (120–180 từ) gửi cô Hanh, đại diện một đơn vị tổ chức khám sức khỏe cho nhân viên, để xác nhận thỏa thuận: giá 450.000 đồng mỗi người, giảm còn 400.000 nếu có ít nhất 50 người đăng ký; khám tổ chức vào tháng Tư tại công ty; đổi lịch miễn phí nếu báo trước 7 ngày; trả tiền trong 30 ngày sau khi nhận hóa đơn. Dùng đủ các cấu trúc điều kiện.",
    requirements: [
      "Mở đầu bằng lời chào, cảm ơn và nói mục đích email.",
      "Dùng provided that / providing that.",
      "Dùng as long as.",
      "Dùng unless.",
      "Nêu các điều khoản bằng danh sách hoặc từng đoạn.",
      "Kết thúc email và ký tên."
    ],
    minWords: 120,
    maxWords: 180,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Dear … / Hi …)", pattern: "\\bdear\\b|\\bhi\\b" },
      { label: "Có provided that / providing that", pattern: "provid(ed|ing) (that )?" },
      { label: "Có as long as", pattern: "as long as" },
      { label: "Có unless", pattern: "\\bunless\\b" },
      { label: "Có số tiền hoặc số ngày", pattern: "\\d+" },
      { label: "Có lời kết (Best regards …)", pattern: "regards|sincerely|best wishes" }
    ],
    model: [
      "Dear Ms. Hanh,",
      "Thank you for your call this morning. I am writing to confirm the terms of the health check that we agreed on.",
      "Price: the standard price is 450,000 dong per person. We will pay 400,000 dong per person, provided that at least 50 employees register.",
      "Location and date: the checks will take place at our office in April, as long as the rooms are available. I will confirm the exact days with you soon.",
      "Rescheduling: we may change the date without charge, provided that we give you seven days' notice. Unless we do so, the normal fee will apply.",
      "Payment: we will pay within 30 days of receiving your invoice.",
      "If any of these points does not match your understanding, please let me know.",
      "Best regards,",
      "Tuan Nguyen"
    ]
  },

  review: {
    keyPhrases: [
      { en: "I can approve it provided that you cross-train two people.", vi: "Tôi có thể duyệt với điều kiện anh đào tạo hai người làm nhiều việc." },
      { en: "We'll extend the contract as long as the volume stays high.", vi: "Chúng tôi sẽ gia hạn hợp đồng miễn là lượng hàng vẫn cao." },
      { en: "Unless we give notice, the full fee is payable.", vi: "Nếu không báo trước, chúng tôi phải trả đủ phí." },
      { en: "I accept, on condition that we review it honestly.", vi: "Tôi chấp nhận, với điều kiện mình xem lại một cách thẳng thắn." },
      { en: "Let's find a compromise we can both accept.", vi: "Hãy tìm một giải pháp ở giữa mà cả hai cùng chấp nhận." },
      { en: "Deal. That sounds like a fair agreement.", vi: "Chốt. Nghe như một thỏa thuận công bằng." }
    ]
  }
});
