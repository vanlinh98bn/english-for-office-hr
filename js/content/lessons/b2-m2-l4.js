/* =========================================================
   B2 · Module 2 (HR Policies and Employee Relations) · Bài 4
   "Grievance handling"
   Nối tiếp B2-M2-L2 (Quynh Le, Khoa Pham là nhân viên kinh doanh mới):
   Quynh gửi khiếu nại chính thức về hoa hồng của một công ty bao bì ở
   Hải Phòng. Quynh nói đây là khách của mình (đã thăm 3 lần, làm báo giá
   đầu tiên) và cho rằng Khoa liên hệ khách mà không báo, đứng tên đơn hàng
   nên nhận hoa hồng. Khoa phủ nhận cố ý lấy khách: khách gọi văn phòng khi
   Quynh đi vắng, Khoa nghe máy; Khoa thừa nhận gửi báo giá mà không kiểm
   tra cơ sở dữ liệu khách hàng. Dữ liệu ghi đủ 3 lần thăm của Quynh; khách
   xác nhận Quynh là người liên hệ đầu tiên.
   Kết quả: khiếu nại có cơ sở; hoa hồng chuyển cho Quynh ở kỳ lương sau;
   không kỷ luật Khoa (không có ý xấu); quy tắc mới: kiểm tra dữ liệu trước
   khi gửi báo giá (David nói ở buổi họp nhóm thứ Hai). Ai không đồng ý có
   thể kháng nghị lên Tổng Giám đốc trong 5 ngày làm việc.
   Thời gian nói áng chừng.
   ========================================================= */
window.EOH.registerLesson({
  id: "b2-m2-l4",
  reviewStatus: "approved", // Linh duyệt ngày 24/10/2026
  duration: "45–60 phút",
  scenario: "Chị Quynh gửi khiếu nại chính thức: hoa hồng của một khách hàng ở Hải Phòng lẽ ra là của chị nhưng lại trả cho anh Khoa. Chị Lan (HR Manager) đã gặp riêng từng người. Chị Lan và anh Tuấn (HR Executive) tóm tắt lời của hai bên, rồi chị Lan gửi email báo kết quả cho anh David.",

  objectives: [
    "Hiểu và dùng 10 từ vựng thường gặp khi giải quyết khiếu nại chính thức.",
    "Nghe cuộc trao đổi tóm tắt lời hai bên, phân biệt điều được khẳng định, bị phủ nhận và được thừa nhận.",
    "Đọc email báo cáo kết quả khiếu nại, tìm đúng bằng chứng, kết luận và đề xuất.",
    "Dùng đúng các động từ tường thuật claim / allege + that, deny / admit + V-ing hoặc + that.",
    "Viết thư thông báo kết quả khiếu nại khách quan, công bằng với cả hai bên."
  ],

  vocabulary: [
    { word: "grievance", ipa: "/ˈɡriːvəns/", pos: "noun", meaning: "khiếu nại chính thức (của người lao động)",
      example: "Quynh raised a formal grievance about her commission.", exampleVi: "Chị Quynh gửi khiếu nại chính thức về tiền hoa hồng." },
    { word: "claim", ipa: "/kleɪm/", pos: "verb", meaning: "khẳng định (một điều chưa được chứng minh)",
      example: "She claims that the client was hers.", exampleVi: "Chị ấy khẳng định khách hàng đó là của mình." },
    { word: "allege", ipa: "/əˈledʒ/", pos: "verb", meaning: "cáo buộc, cho rằng (ai đó làm sai, chưa có bằng chứng)",
      example: "She alleges that Khoa took her client.", exampleVi: "Chị ấy cho rằng anh Khoa đã lấy khách hàng của mình." },
    { word: "allegation", ipa: "/ˌæləˈɡeɪʃən/", pos: "noun", meaning: "lời cáo buộc",
      example: "That's a serious allegation.", exampleVi: "Đó là một lời cáo buộc nghiêm trọng." },
    { word: "deny", ipa: "/dɪˈnaɪ/", pos: "verb", meaning: "phủ nhận, chối",
      example: "He denies taking her client.", exampleVi: "Anh ấy phủ nhận việc lấy khách hàng của chị ấy." },
    { word: "admit", ipa: "/ədˈmɪt/", pos: "verb", meaning: "thừa nhận",
      example: "He admits sending the quotation without checking.", exampleVi: "Anh ấy thừa nhận đã gửi báo giá mà không kiểm tra." },
    { word: "deliberately", ipa: "/dɪˈlɪbərətli/", pos: "adverb", meaning: "cố ý",
      example: "I don't think he did it deliberately.", exampleVi: "Tôi không nghĩ anh ấy cố ý làm vậy." },
    { word: "in bad faith", ipa: "/ɪn ˌbæd ˈfeɪθ/", pos: "phrase", meaning: "với ý xấu, không trung thực",
      example: "There is no evidence that he acted in bad faith.", exampleVi: "Không có bằng chứng anh ấy hành động với ý xấu." },
    { word: "customer database", ipa: "/ˌkʌstəmər ˈdeɪtəbeɪs/", pos: "noun", meaning: "cơ sở dữ liệu khách hàng",
      example: "Always check the customer database before sending a quotation.", exampleVi: "Luôn kiểm tra cơ sở dữ liệu khách hàng trước khi gửi báo giá." },
    { word: "appeal", ipa: "/əˈpiːl/", pos: "verb", meaning: "kháng nghị, đề nghị cấp cao hơn xem xét lại",
      example: "Either employee may appeal to the General Director.", exampleVi: "Nhân viên nào cũng có thể đề nghị Tổng Giám đốc xem xét lại." }
  ],

  pronunciation: {
    groups: [
      {
        title: "Trọng âm từ",
        text: "Những từ dưới đây hay gặp khi giải quyết khiếu nại. Âm tiết in hoa là âm đọc to và dài hơn.",
        items: [
          { word: "grievance", marked: "GRIEV·ance" },
          { word: "allege", marked: "al·LEGE" },
          { word: "allegation", marked: "al·le·GA·tion" },
          { word: "deliberately", marked: "de·LIB·er·ate·ly" }
        ]
      },
      {
        title: "Đuôi -ed của động từ tường thuật",
        text: "Khi thuật lại ở quá khứ, đọc rõ âm cuối. claimed, alleged, denied đọc /d/; admitted đọc /ɪd/.",
        items: [
          { word: "claimed", marked: "CLAIMED /d/" },
          { word: "alleged", marked: "al·LEGED /d/" },
          { word: "denied", marked: "de·NIED /d/" },
          { word: "admitted", marked: "ad·MIT·ted /ɪd/" }
        ]
      }
    ],
    sentences: [
      "She claims that the client was hers.",
      "He denies taking her client, but he admits sending the quotation.",
      "Either employee may appeal to the General Director."
    ]
  },

  listening: {
    title: "Summarizing both sides",
    setting: "Văn phòng phòng Nhân sự. Chị Lan (HR Manager) đã gặp riêng chị Quynh và anh Khoa. Chị Lan cùng anh Tuấn (HR Executive) tóm tắt sự việc.",
    speakers: { lan: "Lan (HR Manager)", tuan: "Tuan (HR Executive)" },
    lines: [
      { s: "lan", text: "Tuan, I've now met both Quynh and Khoa about Quynh's grievance. Could you help me summarize the facts?",
        vi: "Tuấn, chị đã gặp cả Quynh và Khoa về khiếu nại của Quynh. Em giúp chị tóm tắt sự việc nhé?" },
      { s: "tuan", text: "Of course. What exactly is Quynh's complaint?",
        vi: "Vâng ạ. Chính xác thì Quynh khiếu nại điều gì ạ?" },
      { s: "lan", text: "She claims that the packaging company in Hai Phong was her client. She says she visited them three times and prepared the first quotation.",
        vi: "Quynh khẳng định công ty bao bì ở Hải Phòng là khách hàng của mình. Quynh nói đã đến thăm họ ba lần và làm báo giá đầu tiên." },
      { s: "tuan", text: "And what does she say about Khoa?",
        vi: "Còn Quynh nói gì về Khoa ạ?" },
      { s: "lan", text: "She alleges that Khoa contacted the client without telling her and submitted the order under his own name. So he received the commission.",
        vi: "Quynh cho rằng Khoa đã liên hệ khách hàng mà không báo cho mình, và đứng tên đơn hàng. Vì vậy Khoa nhận tiền hoa hồng." },
      { s: "tuan", text: "That's a serious allegation. How did Khoa respond?",
        vi: "Đó là lời cáo buộc nghiêm trọng. Khoa phản hồi thế nào ạ?" },
      { s: "lan", text: "He denies taking her client. He claims that the client called the office while Quynh was out, and he simply answered the phone.",
        vi: "Khoa phủ nhận việc lấy khách của Quynh. Khoa nói khách hàng gọi đến văn phòng lúc Quynh đi vắng, và Khoa chỉ nghe máy thôi." },
      { s: "tuan", text: "Did he know about Quynh's visits?",
        vi: "Khoa có biết Quynh đã đến thăm khách không ạ?" },
      { s: "lan", text: "He admits sending a new quotation without checking the customer database. But he denies knowing that Quynh had already visited them.",
        vi: "Khoa thừa nhận đã gửi báo giá mới mà không kiểm tra cơ sở dữ liệu khách hàng. Nhưng Khoa phủ nhận việc biết Quynh đã đến thăm họ trước đó." },
      { s: "tuan", text: "What does the database show?",
        vi: "Cơ sở dữ liệu cho thấy gì ạ?" },
      { s: "lan", text: "It shows all three of Quynh's visits, so the client was clearly hers. But I don't think Khoa acted in bad faith. He's new, and nobody told him to check.",
        vi: "Có ghi đủ ba lần Quynh đến thăm, nên rõ ràng đó là khách của Quynh. Nhưng chị không nghĩ Khoa có ý xấu. Khoa mới vào, và chưa ai dặn Khoa phải kiểm tra." },
      { s: "tuan", text: "So what do you recommend?",
        vi: "Vậy chị đề xuất thế nào ạ?" },
      { s: "lan", text: "The commission should be transferred to Quynh in the next payroll. No disciplinary action for Khoa. And all sales staff should check the database before they send a quotation.",
        vi: "Hoa hồng nên được chuyển cho Quynh ở kỳ lương sau. Không kỷ luật Khoa. Và mọi nhân viên kinh doanh nên kiểm tra cơ sở dữ liệu trước khi gửi báo giá." },
      { s: "tuan", text: "That sounds fair to both of them. Shall I draft your summary for David?",
        vi: "Như vậy là công bằng cho cả hai. Em soạn bản tóm tắt gửi anh David giúp chị nhé?" },
      { s: "lan", text: "Yes, please. I'll confirm the outcome to Quynh and Khoa in writing.",
        vi: "Ừ, em làm giúp chị. Chị sẽ xác nhận kết quả bằng văn bản cho Quynh và Khoa." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "What does Quynh claim?",
        options: ["That Khoa is her manager", "That she never visited the client", "That the packaging company in Hai Phong was her client", "That the client called her at home"],
        answer: 2, explanation: "“She claims that the packaging company in Hai Phong was her client.” Khách gọi đến văn phòng (không phải nhà Quynh) là lời của Khoa." },
      { id: "l2", type: "choice", prompt: "What does Khoa admit?",
        options: ["Sending a new quotation without checking the customer database", "Taking Quynh's client on purpose", "Knowing about Quynh's visits", "Refusing to answer the phone"],
        answer: 0, explanation: "“He admits sending a new quotation without checking the customer database.” Khoa phủ nhận (denies) việc cố ý lấy khách và việc biết Quynh đã đến thăm." },
      { id: "l3", type: "choice", prompt: "What does Lan recommend for Khoa?",
        options: ["A reprimand", "Dismissal", "A transfer to Logistics", "No disciplinary action"],
        answer: 3, explanation: "“No disciplinary action for Khoa.” Chị Lan cho rằng Khoa không có ý xấu (did not act in bad faith)." }
    ]
  },

  reading: {
    title: "Outcome of a grievance",
    intro: "Email chị Lan gửi anh David. Đọc và tìm lời của hai bên, bằng chứng, kết luận và đề xuất.",
    email: {
      from: "Lan Pham <lan.pham@riverside-trading.example>",
      to: "David Brown",
      date: "Thursday",
      subject: "Outcome of Quynh Le's grievance",
      greeting: "Dear David,",
      paragraphs: [
        "As you know, Quynh Le raised a formal grievance two weeks ago about the commission for the packaging company in Hai Phong. I have now met Quynh and Khoa separately, and Tuan has reviewed the customer database. Here is a summary of my findings:"
      ],
      list: [
        "Quynh claims that she found the client, visited them three times and prepared the first quotation. The customer database confirms all three visits.",
        "Quynh alleges that Khoa deliberately took her client. Khoa denies this. He states that the client called the office while Quynh was away, and he admits sending a new quotation without checking the database.",
        "The client has confirmed that Quynh was their first contact."
      ],
      after: [
        "Based on these findings, I have concluded that the grievance is justified. However, I found no evidence that Khoa acted in bad faith.",
        "I recommend that the commission should be transferred to Quynh in the next payroll and that no disciplinary action should be taken against Khoa. To prevent similar cases, all sales staff should check the database before sending a quotation. Could you explain this new rule at your Monday team meeting?",
        "I will confirm the outcome to both employees in writing this week. Either employee may appeal to the General Director within five working days if they are not satisfied."
      ],
      closing: "Best regards,",
      signature: ["Lan Pham", "HR Manager, Riverside Trading"]
    },
    glossary: [
      { term: "separately", vi: "riêng từng người" },
      { term: "findings", vi: "kết quả xác minh" },
      { term: "justified", vi: "có cơ sở, chính đáng" },
      { term: "take action against", vi: "xử lý ai đó" },
      { term: "satisfied", vi: "hài lòng, chấp nhận" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "What does the customer database show?",
        options: ["That Khoa visited the client first", "All three of Quynh's visits", "That the client had no contact with the company", "That the quotation was never sent"],
        answer: 1, explanation: "“The customer database confirms all three visits.”" },
      { id: "r2", type: "choice", prompt: "What does Lan conclude about Khoa?",
        options: ["He took the client deliberately.", "He should be dismissed.", "He must pay the client back.", "There is no evidence that he acted in bad faith."],
        answer: 3, explanation: "“However, I found no evidence that Khoa acted in bad faith.” Khiếu nại của Quynh có cơ sở, nhưng Khoa không cố ý." },
      { id: "r3", type: "choice", prompt: "What can the employees do if they are not satisfied with the outcome?",
        options: ["Appeal to the General Director within five working days", "Ask David to pay the commission himself", "Raise the issue at the Tuesday team meeting", "Ask the client to decide"],
        answer: 0, explanation: "“Either employee may appeal to the General Director within five working days if they are not satisfied.”" }
    ]
  },

  grammar: {
    title: "Reporting verbs: claim, allege, deny, admit",
    titleVi: "Động từ tường thuật: claim, allege, deny, admit",
    intro: "Khi giải quyết khiếu nại, người làm nhân sự phải thuật lại lời hai bên một cách khách quan. Thay vì chỉ dùng say, hãy chọn động từ cho biết người nói khẳng định, cáo buộc, phủ nhận hay thừa nhận. Bốn mẫu dưới đây có trong cuộc trao đổi và email bạn vừa học.",
    patterns: [
      { form: "claim (that) + mệnh đề", use: "Khẳng định điều gì đó là đúng, nhưng chưa có bằng chứng. Người nghe giữ thái độ trung lập.",
        examples: ["She claims that the client was hers.", "He claims that the client called the office."] },
      { form: "allege (that) + mệnh đề · danh từ: allegation", use: "Cáo buộc ai đó làm sai, chưa được chứng minh. Rất hay dùng trong khiếu nại, điều tra.",
        examples: ["She alleges that Khoa took her client.", "That's a serious allegation."] },
      { form: "deny + V-ing · deny (that) + mệnh đề · deny this", use: "Phủ nhận, nói điều đó không đúng.",
        examples: ["He denies taking her client.", "He denies knowing that Quynh had already visited them."] },
      { form: "admit + V-ing · admit (that) + mệnh đề", use: "Thừa nhận điều mình đã làm (thường là điều không tốt).",
        examples: ["He admits sending a new quotation without checking.", "He admits that he didn't check the database."] }
    ],
    mistakes: [
      { wrong: "He denied to take her client.", right: "He denied taking her client.", note: "deny + V-ing, không dùng deny to + động từ." },
      { wrong: "He admitted to send the quotation.", right: "He admitted sending the quotation.", note: "admit + V-ing (hoặc admit to + V-ing). Không dùng admit to + động từ nguyên mẫu." },
      { wrong: "She alleges Khoa of taking her client.", right: "She alleges that Khoa took her client.", note: "allege + that + mệnh đề. Cấu trúc “… of + V-ing” đi với accuse: She accuses Khoa of taking her client." },
      { wrong: "She claimed me that the client was hers.", right: "She claimed that the client was hers.", note: "claim không có tân ngữ chỉ người. Nếu muốn nói với ai, dùng told me that." }
    ],
    tip: "Trong báo cáo khiếu nại, dùng thì hiện tại (She claims… He denies…) để nêu lập trường hiện tại của mỗi bên; dùng thì quá khứ (She claimed… He admitted…) khi kể lại buổi gặp. Không viết lời cáo buộc như sự thật cho đến khi có bằng chứng."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "Khoa denies ___ Quynh's client.",
      options: ["take", "taking", "to take", "took"],
      answer: 1, explanation: "deny + V-ing: denies taking." },
    { id: "p2", type: "gap", prompt: "He admits ___ the quotation without checking the database.",
      options: ["send", "to send", "sending", "sent"],
      answer: 2, explanation: "admit + V-ing: admits sending." },
    { id: "p3", type: "gap", prompt: "Quynh ___ that Khoa deliberately took her client.",
      context: "Chị ấy cáo buộc Khoa làm sai, nhưng chưa có bằng chứng.",
      options: ["alleges", "denies", "admits", "accepts"],
      answer: 0, explanation: "Cáo buộc ai đó làm sai → allege that. denies / admits sai nghĩa; accepts that = chấp nhận." },
    { id: "p4", type: "gap", prompt: "Khoa ___ knowing that Quynh had already visited the client.",
      context: "Khoa nói điều đó không đúng.",
      options: ["admits", "claims", "alleges", "denies"],
      answer: 3, explanation: "Nói điều đó không đúng → deny + V-ing. claims / alleges không đi với V-ing; admits ngược nghĩa." },
    { id: "p5", type: "gap", prompt: "That's a serious ___. We need to check the facts.",
      options: ["allege", "allegation", "alleged", "alleging"],
      answer: 1, explanation: "Sau a serious cần danh từ: allegation (lời cáo buộc)." },
    { id: "p6", type: "gap", prompt: "Lan met Quynh and Khoa ___, not together.",
      options: ["deliberately", "confidential", "separately", "recently"],
      answer: 2, explanation: "separately = riêng từng người, đối lập với together." },
    { id: "p7", type: "choice", prompt: "Which sentence is correct?",
      options: ["He admitted sending the quotation without checking.", "He admitted to send the quotation without checking.", "He admitted send the quotation without checking.", "He admitted that sending the quotation without checking."],
      answer: 0, explanation: "admit + V-ing. Câu 4 sai vì sau that cần một mệnh đề đầy đủ (that he sent…)." },
    { id: "p8", type: "gap", prompt: "Quynh raised a formal ___ about the commission.",
      options: ["complain", "grieve", "complaining", "grievance"],
      answer: 3, explanation: "Sau a formal cần danh từ: grievance (khiếu nại chính thức). complain là động từ." },
    { id: "p9", type: "choice", prompt: "Khoa said: “I didn't know Quynh had visited the client.” Which report is correct?",
      options: ["Khoa admits knowing that Quynh had visited the client.", "Khoa alleges that Quynh visited the client.", "Khoa denies knowing that Quynh had visited the client.", "Khoa claims to visit the client."],
      answer: 2, explanation: "Khoa nói mình không biết → denies knowing. admits knowing là ngược nghĩa." },
    { id: "p10", type: "gap", prompt: "If either employee is not satisfied, they may ___ to the General Director.",
      options: ["deny", "appeal", "admit", "allege"],
      answer: 1, explanation: "appeal to = đề nghị cấp cao hơn xem xét lại quyết định." }
  ],

  writing: {
    title: "Write a grievance outcome letter",
    task: "Bạn là chị Lan. Viết email gửi chị Quynh (120–180 từ) thông báo kết quả khiếu nại: tóm tắt lời của Quynh và Khoa (dùng claim / allege / deny / admit); cơ sở dữ liệu ghi đủ 3 lần thăm và khách hàng xác nhận Quynh là người liên hệ đầu tiên; khiếu nại có cơ sở; hoa hồng chuyển cho Quynh ở kỳ lương sau; quy tắc mới kiểm tra dữ liệu trước khi gửi báo giá; quyền kháng nghị trong 5 ngày làm việc.",
    requirements: [
      "Mở đầu bằng lời chào và cảm ơn Quynh đã nêu khiếu nại.",
      "Dùng claim hoặc allege để thuật lại lời của Quynh.",
      "Dùng deny để thuật lại lời của Khoa.",
      "Dùng admit để thuật lại điều Khoa thừa nhận.",
      "Nêu kết quả và quyền kháng nghị (appeal).",
      "Kết thúc email và ký tên."
    ],
    minWords: 120,
    maxWords: 180,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Dear … / Hi …)", pattern: "\\bdear\\b|\\bhi\\b" },
      { label: "Có claim / allege", pattern: "claim|alleg" },
      { label: "Có deny / denied", pattern: "\\bden(y|ies|ied)\\b" },
      { label: "Có admit / admitted", pattern: "\\badmit" },
      { label: "Có quyền kháng nghị (appeal)", pattern: "appeal" },
      { label: "Có lời kết (Best regards …)", pattern: "regards|sincerely|best wishes" }
    ],
    model: [
      "Dear Quynh,",
      "Thank you for raising your grievance about the commission for the packaging company in Hai Phong. I am writing to confirm the outcome.",
      "In your grievance, you claimed that the client was yours and alleged that Khoa had taken the client without telling you. Khoa denied taking your client deliberately, but he admitted sending a quotation without checking the customer database.",
      "The database shows all three of your visits, and the client has confirmed that you were their first contact. Your grievance is therefore justified. The commission will be transferred to you in the next payroll.",
      "To prevent similar cases, all sales staff will be required to check the database before sending a quotation.",
      "If you are not satisfied with this outcome, you may appeal to the General Director within five working days.",
      "Kind regards,",
      "Lan Pham"
    ]
  },

  review: {
    keyPhrases: [
      { en: "She claims that the client was hers.", vi: "Chị ấy khẳng định khách hàng đó là của mình." },
      { en: "She alleges that he took her client.", vi: "Chị ấy cho rằng anh ấy đã lấy khách hàng của mình." },
      { en: "He denies taking her client.", vi: "Anh ấy phủ nhận việc lấy khách hàng của chị ấy." },
      { en: "He admits sending the quotation without checking.", vi: "Anh ấy thừa nhận đã gửi báo giá mà không kiểm tra." },
      { en: "There is no evidence that he acted in bad faith.", vi: "Không có bằng chứng anh ấy hành động với ý xấu." },
      { en: "Either employee may appeal within five working days.", vi: "Nhân viên nào cũng có thể kháng nghị trong năm ngày làm việc." }
    ]
  }
});
