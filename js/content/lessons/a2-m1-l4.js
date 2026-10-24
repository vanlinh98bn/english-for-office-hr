/* =========================================================
   A2 · Module 1 (Office Communication) · Bài 4
   "Asking for and offering help"
   Nối tiếp: thứ Năm 12/11/2026. Máy in bị kẹt giấy trước buổi hướng dẫn mạng nội bộ
   (thứ Sáu 13/11, 14:00, Room 205).
   Ngữ pháp: Shall I…? / Do you want me to…?
   Phát âm: ngữ điệu lời đề nghị và trọng âm từ vựng văn phòng
   Công ty Riverside Trading và các nhân vật đều là hư cấu.
   ========================================================= */
window.EOH.registerLesson({
  id: "a2-m1-l4",
  reviewStatus: "draft", // "draft" = bản nháp, chưa duyệt
  duration: "35–45 phút",
  scenario: "Sáng thứ Năm 12/11, chị Lan cần in ba mươi bản tài liệu cho buổi hướng dẫn dùng mạng nội bộ vào chiều mai, nhưng máy in bị kẹt giấy. Tuấn nhờ Sam (IT Support) giúp và đề nghị giúp chị Lan những việc còn lại. Buổi chiều chị Lan gửi email nhờ Tuấn hỗ trợ buổi hướng dẫn.",

  objectives: [
    "Hiểu và dùng 10 từ vựng về việc in ấn, chuẩn bị tài liệu và nhờ giúp đỡ.",
    "Nghe hiểu cuộc trao đổi khi máy in hỏng: ai nhờ ai, ai đề nghị làm gì.",
    "Đọc email nhờ hỗ trợ và tìm đúng thông tin: giờ, việc cần giúp, lý do mời người khác.",
    "Đề nghị giúp đỡ bằng Shall I…? và Do you want me to…?, nhờ giúp bằng Could you give me a hand…?",
    "Viết email trả lời, nhận lời hỗ trợ, đề nghị thêm việc và nhờ một việc nhỏ."
  ],

  vocabulary: [
    { word: "handout", ipa: "/ˈhændaʊt/", pos: "noun", meaning: "tài liệu phát cho người tham dự",
      example: "I need thirty handouts for the workshop.", exampleVi: "Tôi cần ba mươi bản tài liệu cho buổi hướng dẫn." },
    { word: "photocopy", ipa: "/ˈfoʊtoʊˌkɑːpi/", pos: "verb / noun", meaning: "photo, sao chụp",
      example: "Could you photocopy this form?", exampleVi: "Bạn photo giúp mình mẫu đơn này được không?" },
    { word: "staple", ipa: "/ˈsteɪpəl/", pos: "verb", meaning: "bấm ghim các tờ giấy",
      example: "Shall I staple the handouts?", exampleVi: "Để mình bấm ghim các tài liệu nhé?" },
    { word: "paper jam", ipa: "/ˈpeɪpər dʒæm/", pos: "noun", meaning: "kẹt giấy trong máy in",
      example: "The printer shows a paper jam.", exampleVi: "Máy in báo kẹt giấy." },
    { word: "refill", ipa: "/ˌriːˈfɪl/", pos: "verb", meaning: "thêm đầy lại (giấy, mực)",
      example: "Do you want me to refill the paper tray?", exampleVi: "Bạn có muốn mình thêm giấy vào khay không?" },
    { word: "binder", ipa: "/ˈbaɪndər/", pos: "noun", meaning: "bìa còng, bìa đựng hồ sơ",
      example: "The new forms are in the blue binder.", exampleVi: "Các mẫu đơn mới nằm trong bìa còng màu xanh." },
    { word: "carry", ipa: "/ˈkæri/", pos: "verb", meaning: "mang, xách",
      example: "Do you want me to carry the box?", exampleVi: "Bạn có muốn mình xách hộp này không?" },
    { word: "lend", ipa: "/lend/", pos: "verb", meaning: "cho mượn",
      example: "Could you lend me a pen?", exampleVi: "Bạn cho mình mượn cây bút được không?" },
    { word: "spare", ipa: "/sper/", pos: "adjective", meaning: "dự phòng, còn dư",
      example: "I have a spare laptop for the workshop.", exampleVi: "Tôi có một laptop dự phòng cho buổi hướng dẫn." },
    { word: "give someone a hand", ipa: "/ɡɪv ˈsʌmwʌn ə ˈhænd/", pos: "idiom", meaning: "giúp ai một tay",
      example: "Could you give me a hand with these boxes?", exampleVi: "Bạn giúp mình một tay với mấy cái hộp này được không?" }
  ],

  pronunciation: {
    groups: [
      {
        title: "Ngữ điệu lời đề nghị",
        text: "Khi đề nghị giúp, hãy lên giọng ở cuối câu. Giọng lên làm lời đề nghị nghe thân thiện, không giống mệnh lệnh.",
        items: [
          { word: "Shall I help you?", marked: "Shall I HELP you? ↗", note: "Lên giọng ở cuối câu." },
          { word: "Shall I carry it?", marked: "Shall I CAR·ry it? ↗", note: "Nhấn động từ chính." },
          { word: "Do you want me to staple them?", marked: "Do you want me to STA·ple them? ↗", note: "want me to đọc nhanh, nhẹ." }
        ]
      },
      {
        title: "Trọng âm của từ",
        text: "Âm tiết in hoa là âm đọc to và dài hơn. Nhiều danh từ ghép ở văn phòng có trọng âm ở phần đầu.",
        items: [
          { word: "photocopy", marked: "PHO·to·cop·y" },
          { word: "handout", marked: "HAND·out", note: "Từ ghép: trọng âm ở phần đầu." },
          { word: "binder", marked: "BIND·er" },
          { word: "carry", marked: "CAR·ry" }
        ]
      }
    ],
    sentences: [
      "Shall I call Sam from IT Support?",
      "Do you want me to carry the box?",
      "Could you give me a hand with the handouts?"
    ]
  },

  listening: {
    title: "The printer is stuck",
    setting: "Sáng thứ Năm 12/11, ở máy in tầng 5. Chị Lan cần in tài liệu cho buổi hướng dẫn ngày mai. Tuấn gọi Sam từ IT Support đến giúp.",
    speakers: { lan: "Lan (HR Officer)", tuan: "Tuan (HR Assistant)", sam: "Sam (IT Support)" },
    lines: [
      { s: "lan", text: "Tuan, do you have a minute? I need thirty handouts for tomorrow's workshop, but the printer shows a paper jam.",
        vi: "Tuấn, em rảnh một phút không? Chị cần ba mươi bản tài liệu cho buổi hướng dẫn ngày mai, nhưng máy in báo kẹt giấy." },
      { s: "tuan", text: "Shall I call Sam from IT Support?",
        vi: "Để em gọi Sam bên IT Support nhé?" },
      { s: "lan", text: "Yes, please. His extension is three-three-oh.",
        vi: "Ừ, nhờ em. Máy lẻ của anh ấy là ba ba không." },
      { s: "tuan", text: "Hi Sam, it's Tuan from HR. The printer on the fifth floor has a paper jam. Could you give us a hand?",
        vi: "Chào anh Sam, Tuấn bên phòng Nhân sự đây. Máy in ở tầng năm bị kẹt giấy. Anh giúp bọn em một tay được không?" },
      { s: "sam", text: "Sure, I'm coming now. Do you want me to clear the jam, or shall I print the handouts on my printer?",
        vi: "Được, anh đến ngay. Em muốn anh gỡ giấy kẹt, hay để anh in tài liệu bằng máy in của anh?" },
      { s: "tuan", text: "Please clear the jam first. Thanks, Sam.",
        vi: "Anh gỡ giấy kẹt trước nhé. Cảm ơn anh Sam." },
      { s: "sam", text: "All done! The printer is working again. Do you want me to refill the paper tray, too?",
        vi: "Xong rồi! Máy in chạy lại rồi. Anh thêm giấy vào khay luôn nhé?" },
      { s: "lan", text: "Yes, please. Thanks, Sam. Now I need to staple thirty handouts. That takes a long time.",
        vi: "Ừ, nhờ anh. Cảm ơn anh Sam. Giờ chị phải bấm ghim ba mươi bản tài liệu. Việc này mất nhiều thời gian." },
      { s: "tuan", text: "Shall I staple them? And do you want me to carry the box to Room two-oh-five?",
        vi: "Để em bấm ghim nhé? Và chị có muốn em xách hộp tài liệu đến Room 205 không?" },
      { s: "lan", text: "That would be great. Thank you, Tuan. You're a big help.",
        vi: "Vậy thì tốt quá. Cảm ơn em, Tuấn. Em giúp chị nhiều lắm." },
      { s: "sam", text: "Call me if there is another problem. Goodbye!",
        vi: "Có vấn đề gì nữa thì gọi anh nhé. Tạm biệt!" }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "What is wrong with the printer?",
        options: ["It has no toner.", "It is too old.", "It has a paper jam.", "It is in Room 205."],
        answer: 2, explanation: "Chị Lan nói: “The printer shows a paper jam.” Máy in bị kẹt giấy." },
      { id: "l2", type: "choice", prompt: "What does Tuan ask Sam to do first?",
        options: ["Clear the paper jam", "Print the handouts on his printer", "Refill the paper tray", "Staple the handouts"],
        answer: 0, explanation: "Sam hỏi nên gỡ giấy kẹt hay in bằng máy của anh ấy. Tuấn trả lời: “Please clear the jam first.” Thêm giấy là việc Sam đề nghị sau đó." },
      { id: "l3", type: "choice", prompt: "What does Tuan offer to do for Lan at the end?",
        options: ["Call Peter for her", "Book Room three-oh-one", "Photocopy the handbook", "Staple the handouts and carry the box"],
        answer: 3, explanation: "“Shall I staple them? And do you want me to carry the box to Room two-oh-five?” Tuấn đề nghị bấm ghim và xách hộp." }
    ]
  },

  reading: {
    title: "A request for help",
    intro: "Email chị Lan gửi cho Tuấn chiều thứ Năm, nhờ Tuấn hỗ trợ buổi hướng dẫn ngày mai. Đọc và tìm thông tin cần thiết.",
    email: {
      from: "Lan Pham <lan.pham@riverside-trading.example>",
      to: "Tuan Nguyen",
      date: "Thursday, 12 November",
      subject: "Tomorrow's workshop – can you give me a hand?",
      greeting: "Dear Tuan,",
      paragraphs: [
        "Thank you for your help this morning. The printer is working again, and the thirty handouts are ready in the box. You were a big help!",
        "Tomorrow, the workshop about the company intranet starts at 14:00 in Room 205. Could you arrive at 13:30? I need a hand with the sign-in sheet. Shall I ask Sam to join us, too? He can help if a computer doesn't work."
      ],
      list: [],
      after: [
        "Please reply to this email if the plan is OK for you, or tell me if you prefer a different time."
      ],
      closing: "Best regards,",
      signature: ["Lan Pham", "HR Officer, Riverside Trading"]
    },
    glossary: [
      { term: "intranet", vi: "mạng nội bộ của công ty" },
      { term: "sign-in sheet", vi: "bảng ký tên điểm danh người tham dự" },
      { term: "give me a hand", vi: "giúp tôi một tay" },
      { term: "join us", vi: "tham gia cùng chúng tôi" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "What time should Tuan arrive tomorrow?",
        options: ["13:30", "14:00", "13:00", "12:30"],
        answer: 0, explanation: "“Could you arrive at 13:30?” Buổi hướng dẫn bắt đầu lúc 14:00, nhưng Tuấn cần đến sớm hơn." },
      { id: "r2", type: "choice", prompt: "What does Lan need help with?",
        options: ["Printing the handouts", "Carrying the box", "Booking Room 205", "The sign-in sheet"],
        answer: 3, explanation: "“I need a hand with the sign-in sheet.” Tài liệu đã in xong và đã nằm trong hộp." },
      { id: "r3", type: "choice", prompt: "Why does Lan want to ask Sam to join them?",
        options: ["To clear a paper jam", "To help if a computer doesn't work", "To sign the sheet", "To teach the intranet"],
        answer: 1, explanation: "“He can help if a computer doesn't work.” Sam làm ở IT Support nên sẽ xử lý khi máy tính gặp sự cố." }
    ]
  },

  grammar: {
    title: "Offering and asking for help",
    titleVi: "Đề nghị giúp đỡ và nhờ giúp đỡ",
    intro: "Trong công việc, ta thường chủ động đề nghị giúp đồng nghiệp hoặc nhờ họ giúp mình. Có hai mẫu đề nghị chính là Shall I…? và Do you want me to…?. Cả hai đều đi với động từ nguyên mẫu.",
    patterns: [
      { form: "Shall I + động từ …?", use: "Đề nghị tự mình làm việc gì đó cho người khác. Lịch sự, thường gặp ở văn phòng.",
        examples: ["Shall I call Sam?", "Shall I staple the handouts?"] },
      { form: "Do you want me to + động từ …?", use: "Cũng là lời đề nghị giúp. Giọng thân mật, tự nhiên, rất hay dùng khi nói.",
        examples: ["Do you want me to carry the box?", "Do you want me to refill the tray?"] },
      { form: "Could you give me / us a hand with …?", use: "Nhờ người khác giúp mình. Có thể đổi thành Could you help me with…?",
        examples: ["Could you give us a hand?", "Could you help me with the sign-in sheet?"] },
      { form: "Yes, please. / That would be great. / No, thanks. I can manage.", use: "Nhận hoặc từ chối lời đề nghị một cách lịch sự.",
        examples: ["Yes, please. That would be great.", "No, thanks. I can manage."] }
    ],
    mistakes: [
      { wrong: "Shall I to call Sam?", right: "Shall I call Sam?", note: "Sau Shall I không dùng “to”." },
      { wrong: "Do you want I carry the box?", right: "Do you want me to carry the box?", note: "Cần dạng “me” và “to” trước động từ." },
      { wrong: "Shall you help me?", right: "Could you help me?", note: "Shall I chỉ dùng khi chính mình đề nghị làm. Khi nhờ người khác, dùng Could you." },
      { wrong: "Do you want me help you?", right: "Do you want me to help you?", note: "Thiếu “to” trước động từ." }
    ],
    tip: "Khi người khác đề nghị giúp mà bạn đồng ý, đừng chỉ nói “Yes.” Hãy nói “Yes, please. Thank you!” hoặc “That would be great.” Nếu không cần, nói “No, thanks. I can manage.” Trong tiếng Anh Mỹ, Do you want me to… được dùng nhiều hơn Shall I…."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "The printer stopped working because of a ___.",
      options: ["handout", "paper jam", "binder", "refill"],
      answer: 1, explanation: "Paper jam = kẹt giấy, nguyên nhân phổ biến khiến máy in ngừng. Handout là tài liệu, binder là bìa còng." },
    { id: "p2", type: "gap", prompt: "Please ___ the pages together so they don't get lost.",
      options: ["lend", "carry", "staple", "refill"],
      answer: 2, explanation: "Staple = bấm ghim, giữ các tờ giấy lại với nhau." },
    { id: "p3", type: "gap", prompt: "I have a ___ laptop, so you can use it today.",
      options: ["spare", "tiring", "urgent", "double-booked"],
      answer: 0, explanation: "Spare = dự phòng, còn dư. Các từ còn lại không đi với danh từ laptop theo nghĩa này." },
    { id: "p4", type: "gap", prompt: "Could you ___ me a pen? I forgot mine.",
      options: ["carry", "staple", "refill", "lend"],
      answer: 3, explanation: "Lend me a pen = cho mình mượn cây bút. Carry là mang, staple là bấm ghim, refill là thêm đầy lại." },
    { id: "p5", type: "gap", prompt: "A: The box is heavy. B: ___ I carry it for you?",
      options: ["Are", "Does", "Shall", "Is"],
      answer: 2, explanation: "Đề nghị giúp việc bằng Shall I + động từ. “Are I”, “Does I”, “Is I” đều sai ngữ pháp." },
    { id: "p6", type: "gap", prompt: "Do you want me ___ the box to Room 205?",
      options: ["carry", "carrying", "to carry", "carries"],
      answer: 2, explanation: "Do you want me + to + động từ: Do you want me to carry…?" },
    { id: "p7", type: "gap", prompt: "Shall I ___ Sam from IT Support?",
      options: ["call", "to call", "calling", "calls"],
      answer: 0, explanation: "Sau Shall I dùng động từ nguyên mẫu, không có “to”: Shall I call…?" },
    { id: "p8", type: "choice", context: "Lan says: “Shall I print the handouts?” You want her to do it.", prompt: "What is the best reply?",
      options: ["No, I'm not.", "That would be great. Thank you!", "Yes, I shall not.", "I am a printer."],
      answer: 1, explanation: "Nhận lời đề nghị lịch sự: That would be great. Thank you! hoặc Yes, please." },
    { id: "p9", type: "choice", prompt: "Which sentence is NOT correct?",
      options: ["Shall I help you?", "Could you give me a hand?", "Do you want me to help you?", "Shall I to help you?"],
      answer: 3, explanation: "“Shall I to help you?” sai vì sau Shall I không dùng “to”. Câu đúng: Shall I help you?" },
    { id: "p10", type: "choice", context: "Your colleague is carrying a heavy box.", prompt: "Which sentence offers help correctly?",
      options: ["Do you want me to carry it?", "Do you want I carry it?", "Shall you carry it?", "Could I carry you?"],
      answer: 0, explanation: "Do you want me to carry it? là câu đúng. “Do you want I carry” sai dạng; “Shall you” không dùng để đề nghị; “Could I carry you” nghĩa là bế bạn." }
  ],

  writing: {
    title: "Reply to Lan's request",
    task: "Bạn là Tuấn. Hãy trả lời email của chị Lan (50–90 từ).",
    requirements: [
      "Mở đầu bằng lời chào (Dear …).",
      "Cảm ơn chị Lan và xác nhận bạn sẽ đến lúc 13:30.",
      "Đồng ý để chị Lan mời Sam tham gia.",
      "Đề nghị giúp thêm một việc, dùng Shall I…? hoặc Do you want me to…?",
      "Nhờ chị Lan một việc nhỏ, dùng Could you…?",
      "Kết thúc email và ký tên."
    ],
    minWords: 50,
    maxWords: 90,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Dear …)", pattern: "\\bdear\\b" },
      { label: "Có lời cảm ơn", pattern: "\\bthank" },
      { label: "Nhắc tới giờ 13:30", pattern: "13[:.]30|1[:.]30|half past one" },
      { label: "Có lời đề nghị giúp (Shall I … / Do you want me to …)", pattern: "shall i|do you want me to" },
      { label: "Có lời nhờ (Could you …?)", pattern: "could you|can you" },
      { label: "Có lời kết (Best regards …)", pattern: "regards|sincerely|best wishes" }
    ],
    model: [
      "Dear Lan,",
      "Thank you for your email. I will arrive at 13:30 tomorrow. Yes, please ask Sam to join us.",
      "Shall I make five extra copies of the handouts? Do you want me to bring a spare laptop, too? Could you send me the list of staff names for the sign-in sheet?",
      "Best regards,",
      "Tuan Nguyen"
    ]
  },

  review: {
    keyPhrases: [
      { en: "Shall I call Sam?", vi: "Để mình gọi Sam nhé?" },
      { en: "Do you want me to carry the box?", vi: "Bạn có muốn mình xách hộp không?" },
      { en: "Could you give me a hand?", vi: "Bạn giúp mình một tay được không?" },
      { en: "That would be great. Thank you!", vi: "Vậy thì tốt quá. Cảm ơn bạn!" },
      { en: "No, thanks. I can manage.", vi: "Không cần đâu, cảm ơn. Mình tự làm được." },
      { en: "You're a big help.", vi: "Bạn giúp mình nhiều lắm." }
    ]
  }
});
