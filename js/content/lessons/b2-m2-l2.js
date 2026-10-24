/* =========================================================
   B2 · Module 2 (HR Policies and Employee Relations) · Bài 2
   "The code of conduct"
   Nối tiếp B2-M2-L1: công ty cập nhật Bộ quy tắc ứng xử. Anh Tuấn
   (HR Executive) phổ biến các điểm chính cho nhân viên kinh doanh mới ở
   Room 301; Quynh Le và Khoa Pham (nhân viên kinh doanh mới, nhóm David)
   đặt câu hỏi. Chị Lan (HR Manager) gửi email cho toàn công ty.
   Quy định chính:
   - Mọi nhân viên đọc và xác nhận trên mạng nội bộ trước cuối tháng.
   - Cấm nhận tiền mặt hoặc quà trị giá trên 500.000 đồng từ khách hàng,
     nhà cung cấp. Quà nhỏ (hộp bánh trung thu) được nhận nhưng phải ghi vào
     sổ quà tặng trên mạng nội bộ trong 3 ngày làm việc.
   - Phải khai báo quan hệ gia đình với khách hàng, nhà cung cấp, ứng viên
     (anh rể của Quynh làm cho một khách hàng ở Quảng Ninh).
   - Cấm chia sẻ bảng giá, hợp đồng, dữ liệu cá nhân ra ngoài, kể cả mạng xã hội.
   - Tôn trọng mọi người; không dung thứ quấy rối.
   - Báo cáo vi phạm: chị Lan hoặc ethics@riverside-trading.example; giữ bí mật.
   Thời gian nói áng chừng.
   ========================================================= */
window.EOH.registerLesson({
  id: "b2-m2-l2",
  reviewStatus: "approved", // Linh duyệt ngày 24/10/2026
  duration: "45–60 phút",
  scenario: "Công ty vừa cập nhật Bộ quy tắc ứng xử. Anh Tuấn (HR Executive) phổ biến các điểm chính cho nhân viên kinh doanh mới ở Room 301. Chị Quynh và anh Khoa hỏi về quà tặng của khách hàng, quan hệ gia đình và mạng xã hội. Sau đó chị Lan (HR Manager) gửi email tóm tắt cho toàn công ty.",

  objectives: [
    "Hiểu và dùng 10 từ vựng thường gặp trong bộ quy tắc ứng xử.",
    "Nghe buổi phổ biến quy tắc, nắm được điều bắt buộc và điều bị cấm.",
    "Đọc email thông báo, tìm đúng quy định về quà tặng, xung đột lợi ích và cách báo cáo vi phạm.",
    "Dùng đúng are required to / are expected to + động từ và are prohibited from + V-ing.",
    "Viết email nhắc nhân viên về quy định quà tặng bằng văn phong trang trọng, rõ ràng."
  ],

  vocabulary: [
    { word: "code of conduct", ipa: "/ˌkoʊd əv ˈkɑːndʌkt/", pos: "noun", meaning: "bộ quy tắc ứng xử",
      example: "All staff must read the updated code of conduct.", exampleVi: "Mọi nhân viên phải đọc bộ quy tắc ứng xử đã cập nhật." },
    { word: "prohibit", ipa: "/proʊˈhɪbɪt/", pos: "verb", meaning: "cấm (theo quy định)",
      example: "The code prohibits accepting cash from clients.", exampleVi: "Bộ quy tắc cấm nhận tiền mặt từ khách hàng." },
    { word: "worth", ipa: "/wɜːrθ/", pos: "adjective", meaning: "trị giá, có giá trị",
      example: "The gift was worth about two million dong.", exampleVi: "Món quà trị giá khoảng hai triệu đồng." },
    { word: "gift register", ipa: "/ˈɡɪft ˌredʒɪstər/", pos: "noun", meaning: "sổ ghi quà tặng (danh sách quà nhân viên đã nhận)",
      example: "Please record the mooncakes in the gift register.", exampleVi: "Hãy ghi hộp bánh trung thu vào sổ quà tặng." },
    { word: "declare", ipa: "/dɪˈkler/", pos: "verb", meaning: "khai báo, nói rõ (một cách chính thức)",
      example: "You must declare any family relationship with a supplier.", exampleVi: "Bạn phải khai báo mọi quan hệ gia đình với nhà cung cấp." },
    { word: "conflict of interest", ipa: "/ˌkɑːnflɪkt əv ˈɪntrəst/", pos: "noun", meaning: "xung đột lợi ích",
      example: "Working with a relative's company may cause a conflict of interest.", exampleVi: "Làm việc với công ty của người thân có thể gây xung đột lợi ích." },
    { word: "social media", ipa: "/ˌsoʊʃəl ˈmiːdiə/", pos: "noun", meaning: "mạng xã hội",
      example: "Do not post customer data on social media.", exampleVi: "Không đăng dữ liệu khách hàng lên mạng xã hội." },
    { word: "harassment", ipa: "/həˈræsmənt/", pos: "noun", meaning: "sự quấy rối",
      example: "Harassment of any kind will not be tolerated.", exampleVi: "Không dung thứ bất kỳ hình thức quấy rối nào." },
    { word: "breach", ipa: "/briːtʃ/", pos: "noun", meaning: "sự vi phạm (quy định, hợp đồng)",
      example: "Please report any breach of the code.", exampleVi: "Hãy báo cáo mọi vi phạm bộ quy tắc." },
    { word: "confidentially", ipa: "/ˌkɑːnfɪˈdenʃəli/", pos: "adverb", meaning: "một cách bí mật, kín đáo",
      example: "All reports will be treated confidentially.", exampleVi: "Mọi báo cáo sẽ được giữ bí mật." }
  ],

  pronunciation: {
    groups: [
      {
        title: "Trọng âm từ",
        text: "Những từ dưới đây hay gặp khi phổ biến quy tắc. Âm tiết in hoa là âm đọc to và dài hơn.",
        items: [
          { word: "prohibit", marked: "pro·HIB·it" },
          { word: "harassment", marked: "ha·RASS·ment" },
          { word: "conflict (danh từ)", marked: "CON·flict" },
          { word: "confidentially", marked: "con·fi·DEN·tial·ly" }
        ]
      },
      {
        title: "Nối âm",
        text: "Phụ âm cuối nối sang nguyên âm đầu của từ sau, nghe như một từ. Dấu ‿ là chỗ nối.",
        items: [
          { word: "conflict of interest", marked: "con·flict‿of‿IN·ter·est" },
          { word: "accepting a gift", marked: "ac·CEPT·ing‿a GIFT" },
          { word: "treat everyone", marked: "treat‿EV·ery·one" }
        ]
      }
    ],
    sentences: [
      "Employees are prohibited from accepting cash or expensive gifts.",
      "You're required to declare a possible conflict of interest.",
      "All reports will be treated confidentially."
    ]
  },

  listening: {
    title: "Code of conduct briefing",
    setting: "Room 301. Anh Tuấn (HR Executive) phổ biến Bộ quy tắc ứng xử cho nhân viên kinh doanh mới, trong đó có chị Quynh và anh Khoa.",
    speakers: { tuan: "Tuan (HR Executive)", quynh: "Quynh (Sales Executive)", khoa: "Khoa (Sales Executive)" },
    lines: [
      { s: "tuan", text: "Good morning, everyone. Today I'd like to go through the main points of our updated code of conduct. All staff are required to read it and confirm on the intranet by the end of the month.",
        vi: "Chào buổi sáng mọi người. Hôm nay tôi muốn điểm qua những ý chính của Bộ quy tắc ứng xử đã cập nhật. Mọi nhân viên phải đọc và xác nhận trên mạng nội bộ trước cuối tháng." },
      { s: "quynh", text: "Is there anything new for sales staff?",
        vi: "Có gì mới với nhân viên kinh doanh không anh?" },
      { s: "tuan", text: "Yes, the section on gifts. Employees are prohibited from accepting cash or gifts worth more than five hundred thousand dong from clients or suppliers.",
        vi: "Có, mục quà tặng. Nhân viên bị cấm nhận tiền mặt hoặc quà trị giá trên năm trăm nghìn đồng từ khách hàng hoặc nhà cung cấp." },
      { s: "khoa", text: "What about small gifts? At Mid-Autumn, a client gave me a box of mooncakes.",
        vi: "Còn quà nhỏ thì sao anh? Dịp Trung thu, một khách hàng tặng em một hộp bánh trung thu." },
      { s: "tuan", text: "Small gifts like that may be accepted, but you're required to record them in the gift register on the intranet.",
        vi: "Quà nhỏ như vậy thì được nhận, nhưng em phải ghi vào sổ quà tặng trên mạng nội bộ." },
      { s: "quynh", text: "And if a client offers something expensive, like a new phone?",
        vi: "Còn nếu khách hàng tặng thứ gì đắt tiền, như một chiếc điện thoại mới thì sao?" },
      { s: "tuan", text: "You're expected to refuse it politely and explain our policy. If that's difficult, tell your manager.",
        vi: "Chị cần từ chối lịch sự và giải thích quy định của công ty. Nếu khó nói, hãy báo quản lý của mình." },
      { s: "quynh", text: "I have another question. My brother-in-law works for one of our clients in Quang Ninh. Is that a problem?",
        vi: "Em có câu hỏi nữa. Anh rể em làm cho một khách hàng của mình ở Quảng Ninh. Như vậy có sao không ạ?" },
      { s: "tuan", text: "Not necessarily, but it's a possible conflict of interest. You're required to declare it to HR, and David may give that client to another colleague.",
        vi: "Không hẳn là có vấn đề, nhưng đó là một xung đột lợi ích có thể xảy ra. Chị phải khai báo với phòng Nhân sự, và anh David có thể giao khách hàng đó cho đồng nghiệp khác." },
      { s: "khoa", text: "What about social media? Can we post photos from client visits?",
        vi: "Còn mạng xã hội thì sao anh? Bọn em có được đăng ảnh đi thăm khách hàng không?" },
      { s: "tuan", text: "Photos of yourselves are fine, but you're prohibited from sharing price lists, contracts or customer data outside the company.",
        vi: "Ảnh của bản thân thì được, nhưng các bạn bị cấm chia sẻ bảng giá, hợp đồng hoặc dữ liệu khách hàng ra ngoài công ty." },
      { s: "quynh", text: "What should we do if we see a breach of the code?",
        vi: "Nếu thấy ai vi phạm quy tắc thì bọn em nên làm gì ạ?" },
      { s: "tuan", text: "You can talk to Lan, our HR Manager, or write to ethics at riverside-trading dot example. All reports are treated confidentially.",
        vi: "Các bạn có thể nói với chị Lan, Trưởng phòng Nhân sự, hoặc viết thư tới địa chỉ ethics@riverside-trading.example. Mọi báo cáo đều được giữ bí mật." },
      { s: "khoa", text: "That's very clear. Thanks, Tuan.",
        vi: "Rất rõ ràng ạ. Cảm ơn anh Tuấn." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "By when must all staff confirm that they have read the code?",
        options: ["By the end of the week", "By the end of the month", "Before their next client visit", "By the end of the year"],
        answer: 1, explanation: "Tuấn nói: “All staff are required to read it and confirm on the intranet by the end of the month.”" },
      { id: "l2", type: "choice", prompt: "What must Khoa do about the box of mooncakes?",
        options: ["Give it back to the client", "Share it with the team", "Pay for it", "Record it in the gift register on the intranet"],
        answer: 3, explanation: "“Small gifts like that may be accepted, but you're required to record them in the gift register on the intranet.” Quà nhỏ được nhận, không cần trả lại." },
      { id: "l3", type: "choice", prompt: "Why must Quynh declare her brother-in-law's job?",
        options: ["Because it is a possible conflict of interest", "Because he wants to work at Riverside", "Because he is a supplier", "Because David asked her to"],
        answer: 0, explanation: "“…it's a possible conflict of interest. You're required to declare it to HR.” Anh rể của Quynh làm cho một khách hàng, không phải nhà cung cấp." }
    ]
  },

  reading: {
    title: "Updated Code of Conduct",
    intro: "Email chị Lan gửi toàn công ty. Đọc và tìm điều bắt buộc, điều bị cấm và cách báo cáo vi phạm.",
    email: {
      from: "Lan Pham <lan.pham@riverside-trading.example>",
      to: "All staff",
      date: "Monday",
      subject: "Updated Code of Conduct – please read and confirm",
      greeting: "Dear colleagues,",
      paragraphs: [
        "Our Code of Conduct has been updated, and the new version is now available on the intranet. All employees are required to read it and confirm that they understand it by the end of this month. The main changes are summarized below."
      ],
      list: [
        "Gifts and hospitality: Employees are prohibited from accepting cash or gifts worth more than 500,000 dong from clients or suppliers. Smaller gifts may be accepted, but they must be recorded in the gift register within three working days.",
        "Conflicts of interest: Employees are required to declare any family relationship with a client, a supplier or a job candidate.",
        "Confidential information: Employees are prohibited from sharing price lists, contracts or personal data outside the company, including on social media.",
        "Respect at work: All employees are expected to treat colleagues, clients and suppliers with respect. Harassment of any kind will not be tolerated."
      ],
      after: [
        "If you have a concern about a possible breach, please contact me directly or write to ethics@riverside-trading.example. All reports will be treated confidentially, and no employee will be punished for raising a concern in good faith.",
        "Managers are asked to discuss these changes at their next team meeting. Tuan will also run short briefing sessions for new staff in Room 301."
      ],
      closing: "Kind regards,",
      signature: ["Lan Pham", "HR Manager, Riverside Trading"]
    },
    glossary: [
      { term: "hospitality", vi: "sự tiếp đãi (mời ăn uống, giải trí)" },
      { term: "summarized below", vi: "được tóm tắt dưới đây" },
      { term: "tolerate", vi: "chấp nhận, dung thứ" },
      { term: "raise a concern", vi: "nêu lên điều lo ngại" },
      { term: "in good faith", vi: "với thiện chí, một cách trung thực" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "How long do employees have to record a small gift?",
        options: ["Within 24 hours", "Within one month", "Within three working days", "There is no time limit"],
        answer: 2, explanation: "“…they must be recorded in the gift register within three working days.” “By the end of this month” là hạn đọc và xác nhận Bộ quy tắc." },
      { id: "r2", type: "choice", prompt: "Which relationship must be declared?",
        options: ["A friendship with a colleague", "A family relationship with a job candidate", "Membership of a sports club", "A previous job at a bank"],
        answer: 1, explanation: "“Employees are required to declare any family relationship with a client, a supplier or a job candidate.”" },
      { id: "r3", type: "choice", prompt: "What does Lan say about employees who raise a concern in good faith?",
        options: ["They will receive a bonus.", "They must sign a new contract.", "They must report it to their manager first.", "They will not be punished."],
        answer: 3, explanation: "“…no employee will be punished for raising a concern in good faith.” Có thể báo trực tiếp chị Lan hoặc gửi email, không bắt buộc qua quản lý." }
    ]
  },

  grammar: {
    title: "Rules: required to, expected to, prohibited from",
    titleVi: "Nêu quy định: required to, expected to, prohibited from",
    intro: "Bộ quy tắc ứng xử thường dùng cấu trúc bị động với chủ ngữ là nhân viên: Employees are required to… / are prohibited from… Bốn mẫu dưới đây có trong buổi phổ biến và email bạn vừa học.",
    patterns: [
      { form: "be prohibited from + V-ing", use: "Bị cấm làm gì. Sau from luôn dùng V-ing. Trang trọng hơn must not.",
        examples: ["Employees are prohibited from accepting cash from clients.", "You're prohibited from sharing price lists outside the company."] },
      { form: "be required to + động từ nguyên mẫu", use: "Bắt buộc phải làm gì (đã học ở B1, ở đây dùng trong văn bản quy tắc).",
        examples: ["All employees are required to read the code.", "You're required to declare it to HR."] },
      { form: "be expected to + động từ nguyên mẫu", use: "Công ty mong đợi, coi là chuẩn mực ứng xử. Nhẹ hơn required to nhưng vẫn là điều phải làm.",
        examples: ["You're expected to refuse it politely.", "All employees are expected to treat colleagues with respect."] },
      { form: "will not be tolerated · may be accepted · must be recorded", use: "Bị động với động từ khuyết thiếu, chủ ngữ là sự việc (quà, hành vi), không phải người.",
        examples: ["Harassment of any kind will not be tolerated.", "Smaller gifts may be accepted, but they must be recorded."] }
    ],
    mistakes: [
      { wrong: "Employees are prohibited to accept cash.", right: "Employees are prohibited from accepting cash.", note: "prohibited đi với from + V-ing, không đi với to." },
      { wrong: "Employees are prohibited from accept cash.", right: "Employees are prohibited from accepting cash.", note: "Sau giới từ from, động từ phải ở dạng V-ing." },
      { wrong: "You are required declaring it to HR.", right: "You are required to declare it to HR.", note: "required to + động từ nguyên mẫu." },
      { wrong: "Employees are expected treat clients with respect.", right: "Employees are expected to treat clients with respect.", note: "Không được bỏ to sau expected." }
    ],
    tip: "Một mẹo nhớ: from + V-ing (prohibited from, banned from, prevented from), còn to + động từ nguyên mẫu (required to, expected to, allowed to). Khi phổ biến quy tắc, hãy nêu quy định rồi cho một ví dụ thật, như hộp bánh trung thu, để người nghe dễ nhớ."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "Employees are prohibited ___ accepting cash from clients.",
      options: ["from", "to", "of", "for"],
      answer: 0, explanation: "be prohibited from + V-ing." },
    { id: "p2", type: "gap", prompt: "Employees are prohibited from ___ price lists outside the company.",
      options: ["share", "to share", "sharing", "shared"],
      answer: 2, explanation: "Sau giới từ from dùng V-ing: sharing." },
    { id: "p3", type: "gap", prompt: "All staff are required ___ the code and confirm on the intranet.",
      options: ["reading", "to read", "read", "for reading"],
      answer: 1, explanation: "be required to + động từ nguyên mẫu: required to read." },
    { id: "p4", type: "gap", prompt: "You are ___ to treat clients and colleagues with respect.",
      context: "Đây là chuẩn mực ứng xử công ty mong đợi.",
      options: ["prohibited", "banned", "forbidden", "expected"],
      answer: 3, explanation: "be expected to = được mong đợi phải làm. prohibited / banned / forbidden mang nghĩa cấm, ngược nghĩa." },
    { id: "p5", type: "gap", prompt: "A client gave Khoa a box of mooncakes. He must record it in the gift ___.",
      options: ["menu", "receipt", "register", "invoice"],
      answer: 2, explanation: "gift register = sổ ghi quà tặng trên mạng nội bộ." },
    { id: "p6", type: "gap", prompt: "Quynh's brother-in-law works for a client. This is a possible conflict of ___.",
      options: ["interest", "benefit", "profit", "concern"],
      answer: 0, explanation: "conflict of interest = xung đột lợi ích (cụm cố định)." },
    { id: "p7", type: "choice", prompt: "Which sentence is correct?",
      options: ["Employees are prohibited to accept expensive gifts.", "Employees are prohibited from accept expensive gifts.", "Employees prohibit from accepting expensive gifts.", "Employees are prohibited from accepting expensive gifts."],
      answer: 3, explanation: "Đúng: be prohibited from + V-ing. Câu 3 thiếu are nên thành chủ động, sai nghĩa." },
    { id: "p8", type: "gap", prompt: "Harassment of any kind will not be ___.",
      options: ["tolerating", "tolerated", "tolerate", "tolerance"],
      answer: 1, explanation: "Bị động: will not be + V3 → tolerated." },
    { id: "p9", type: "gap", prompt: "Employees are required to ___ any family relationship with a supplier.",
      options: ["declare", "refuse", "accept", "breach"],
      answer: 0, explanation: "declare = khai báo. Đây là quy định về xung đột lợi ích." },
    { id: "p10", type: "choice", prompt: "Which sentence has the same meaning as “You can't share customer data on social media”?",
      options: ["You are expected to share customer data on social media.", "You are required to share customer data on social media.", "You are prohibited from sharing customer data on social media.", "You are allowed to share customer data on social media."],
      answer: 2, explanation: "can't (không được) = be prohibited from + V-ing. Ba câu còn lại đều mang nghĩa phải làm hoặc được làm." }
  ],

  writing: {
    title: "Write a reminder about gifts",
    task: "Bạn là chị Lan. Sắp đến Tết, viết email gửi nhóm Kinh doanh (120–180 từ) nhắc quy định về quà tặng: cấm nhận tiền mặt hoặc quà trên 500.000 đồng; quà đắt cần từ chối lịch sự; quà nhỏ được nhận nhưng phải ghi vào sổ quà tặng trong 3 ngày làm việc; nếu không chắc thì hỏi anh David hoặc chị Lan.",
    requirements: [
      "Mở đầu bằng lời chào và lý do viết email.",
      "Dùng are prohibited from + V-ing.",
      "Dùng are required to + động từ.",
      "Dùng are expected to + động từ.",
      "Nhắc sổ quà tặng (gift register) và người cần hỏi khi không chắc.",
      "Kết thúc email và ký tên."
    ],
    minWords: 120,
    maxWords: 180,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Dear … / Hi …)", pattern: "\\bdear\\b|\\bhi\\b" },
      { label: "Có prohibited from + V-ing", pattern: "prohibited from \\w+ing\\b" },
      { label: "Có required to", pattern: "required to" },
      { label: "Có expected to", pattern: "expected to" },
      { label: "Có nhắc sổ quà tặng (gift register)", pattern: "gift register|register" },
      { label: "Có lời kết (Best regards …)", pattern: "regards|sincerely|best wishes" }
    ],
    model: [
      "Dear Sales team,",
      "As Tet is coming soon, many clients and suppliers may offer you gifts. I would like to remind you of the rules in our Code of Conduct.",
      "Employees are prohibited from accepting cash or gifts worth more than 500,000 dong. If a client offers you an expensive gift, you are expected to refuse it politely and explain our policy.",
      "Smaller gifts, such as a box of cakes or a basket of fruit, may be accepted. However, you are required to record them in the gift register on the intranet within three working days.",
      "If you are not sure whether a gift is acceptable, please ask David or contact me directly before you accept it.",
      "Thank you for your cooperation and for protecting our company's good name.",
      "Kind regards,",
      "Lan"
    ]
  },

  review: {
    keyPhrases: [
      { en: "Employees are prohibited from accepting cash from clients.", vi: "Nhân viên bị cấm nhận tiền mặt từ khách hàng." },
      { en: "Small gifts may be accepted, but they must be recorded.", vi: "Quà nhỏ được nhận, nhưng phải ghi lại." },
      { en: "You're required to declare a possible conflict of interest.", vi: "Bạn phải khai báo xung đột lợi ích có thể xảy ra." },
      { en: "You're expected to refuse it politely.", vi: "Bạn cần từ chối một cách lịch sự." },
      { en: "Harassment of any kind will not be tolerated.", vi: "Không dung thứ bất kỳ hình thức quấy rối nào." },
      { en: "All reports will be treated confidentially.", vi: "Mọi báo cáo sẽ được giữ bí mật." }
    ]
  }
});
