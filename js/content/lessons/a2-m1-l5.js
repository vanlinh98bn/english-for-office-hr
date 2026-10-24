/* =========================================================
   A2 · Module 1 (Office Communication) · Bài 5
   "Talking about past work events"
   Nối tiếp: thứ Sáu 13/11/2026. Buổi hướng dẫn mạng nội bộ (14:00, Room 205) đã xong;
   chị Lan hỏi Tuấn buổi đó diễn ra thế nào.
   Ngữ pháp: quá khứ đơn bất quy tắc; câu hỏi và phủ định với did / didn't
   Phát âm: dạng quá khứ bất quy tắc và Did you… nói nhanh
   Công ty Riverside Trading và các nhân vật đều là hư cấu.
   ========================================================= */
window.EOH.registerLesson({
  id: "a2-m1-l5",
  reviewStatus: "draft", // "draft" = bản nháp, chưa duyệt
  duration: "35–45 phút",
  scenario: "Chiều thứ Sáu 13/11, buổi hướng dẫn dùng mạng nội bộ vừa kết thúc. Chị Lan hỏi Tuấn (HR Assistant) buổi đó diễn ra thế nào. Sau đó Tuấn gửi email báo cáo ngắn cho anh Hải.",

  objectives: [
    "Hiểu và dùng 10 từ vựng khi báo cáo về một buổi họp hoặc buổi hướng dẫn đã diễn ra.",
    "Nghe hiểu cuộc trao đổi kể lại sự việc: bao nhiêu người đến, ai vắng, đã làm gì sau đó.",
    "Đọc email báo cáo ngắn và tìm đúng thông tin: số người, sự cố, việc chưa xong.",
    "Kể việc đã xảy ra bằng động từ bất quy tắc (went, made, took, wrote, sent) và hỏi đáp với Did…? / didn't.",
    "Viết email báo cáo ngắn về tuần làm việc, có một câu phủ định với didn't."
  ],

  vocabulary: [
    { word: "workshop", ipa: "/ˈwɜːrkʃɑːp/", pos: "noun", meaning: "buổi hướng dẫn thực hành, buổi làm việc nhóm có hướng dẫn",
      example: "The workshop started at two o'clock.", exampleVi: "Buổi hướng dẫn bắt đầu lúc hai giờ." },
    { word: "attendee", ipa: "/ˌætenˈdiː/", pos: "noun", meaning: "người tham dự",
      example: "Every attendee got a handout.", exampleVi: "Mỗi người tham dự đều nhận được một tài liệu." },
    { word: "turnout", ipa: "/ˈtɜːrnaʊt/", pos: "noun", meaning: "số người đến dự",
      example: "The turnout was good: thirty-two people came.", exampleVi: "Số người đến khá tốt: ba mươi hai người." },
    { word: "agenda", ipa: "/əˈdʒendə/", pos: "noun", meaning: "chương trình, danh sách nội dung cần làm",
      example: "The agenda has three topics.", exampleVi: "Chương trình có ba nội dung." },
    { word: "feedback", ipa: "/ˈfiːdbæk/", pos: "noun", meaning: "ý kiến phản hồi",
      example: "We asked everyone for feedback.", exampleVi: "Chúng tôi xin ý kiến phản hồi của mọi người." },
    { word: "take notes", ipa: "/teɪk noʊts/", pos: "phrase", meaning: "ghi chép",
      example: "I took notes during the questions.", exampleVi: "Tôi đã ghi chép trong phần hỏi đáp." },
    { word: "go smoothly", ipa: "/ɡoʊ ˈsmuːðli/", pos: "phrase", meaning: "diễn ra suôn sẻ",
      example: "The workshop went smoothly.", exampleVi: "Buổi hướng dẫn diễn ra suôn sẻ." },
    { word: "run out of", ipa: "/rʌn ˈaʊt əv/", pos: "phrasal verb", meaning: "hết, dùng hết",
      example: "We ran out of handouts.", exampleVi: "Chúng tôi hết tài liệu." },
    { word: "follow up", ipa: "/ˈfɑːloʊ ʌp/", pos: "phrasal verb", meaning: "tiếp tục xử lý sau đó",
      example: "I'll follow up with Sam on Monday.", exampleVi: "Tôi sẽ làm việc tiếp với Sam vào thứ Hai." },
    { word: "solve", ipa: "/sɑːlv/", pos: "verb", meaning: "giải quyết (vấn đề)",
      example: "Sam solved the problem quickly.", exampleVi: "Sam giải quyết vấn đề rất nhanh." }
  ],

  pronunciation: {
    groups: [
      {
        title: "Động từ bất quy tắc thường gặp",
        text: "Động từ bất quy tắc không thêm -ed. Dạng quá khứ thường đổi nguyên âm, nên phải học thuộc cách đọc.",
        items: [
          { word: "took", marked: "took", note: "/tʊk/ – ngắn như trong “book”." },
          { word: "wrote", marked: "wrote", note: "/roʊt/ – giống “note”." },
          { word: "went", marked: "went", note: "/went/ – khác hoàn toàn với go." },
          { word: "ran", marked: "ran", note: "/ræn/ – quá khứ của run." }
        ]
      },
      {
        title: "Did you và didn't khi nói nhanh",
        text: "Khi nói nhanh, Did you… thường nối thành âm /dɪdʒə/. Didn't có hai âm tiết, nhấn âm đầu, âm cuối /t/ rất nhẹ.",
        items: [
          { word: "Did you", marked: "Did_you → /ˈdɪdʒə/", note: "Nối /d/ và /j/ thành /dʒ/." },
          { word: "didn't", marked: "DID·n't", note: "/ˈdɪdnt/ – nhấn âm tiết đầu." },
          { word: "Did he come?", marked: "Did he COME?", note: "Nhấn động từ chính, did đọc nhẹ." }
        ]
      }
    ],
    sentences: [
      "Did you take notes during the workshop?",
      "Peter didn't come because he went to a customer's office.",
      "I wrote down the questions and sent them to Sam."
    ]
  },

  listening: {
    title: "How did the workshop go?",
    setting: "Chiều thứ Sáu 13/11, 16:30, tại bàn làm việc phòng Nhân sự. Chị Lan hỏi Tuấn về buổi hướng dẫn vừa xong.",
    speakers: { lan: "Lan (HR Officer)", tuan: "Tuan (HR Assistant)" },
    lines: [
      { s: "lan", text: "So, Tuan, how did the workshop go?",
        vi: "Vậy, Tuấn, buổi hướng dẫn diễn ra thế nào?" },
      { s: "tuan", text: "Quite smoothly, I think. Thirty-two people came, so we ran out of handouts. I made two more copies.",
        vi: "Em nghĩ khá suôn sẻ ạ. Ba mươi hai người đến nên mình hết tài liệu. Em photo thêm hai bản." },
      { s: "lan", text: "That's a good turnout! Did everyone find the intranet page?",
        vi: "Số người đến như vậy là tốt đấy! Mọi người đều tìm được trang mạng nội bộ chứ?" },
      { s: "tuan", text: "Most people did, but two people forgot their usernames. Sam solved the problem in five minutes.",
        vi: "Hầu hết đều tìm được, nhưng hai người quên tên đăng nhập. Anh Sam giải quyết trong năm phút." },
      { s: "lan", text: "Great. Did Peter come? I didn't see him.",
        vi: "Tốt. Peter có đến không? Chị không thấy anh ấy." },
      { s: "tuan", text: "No, he didn't. He went to a customer's office at one o'clock.",
        vi: "Dạ không. Anh ấy đã đến văn phòng của khách hàng lúc một giờ." },
      { s: "lan", text: "I see. Did you take notes during the questions?",
        vi: "Chị hiểu rồi. Em có ghi chép trong phần hỏi đáp không?" },
      { s: "tuan", text: "Yes, I did. I wrote down all the questions. People asked how to find the holiday calendar.",
        vi: "Dạ có. Em đã ghi lại tất cả câu hỏi. Mọi người hỏi cách tìm lịch nghỉ lễ." },
      { s: "lan", text: "Good idea. What did you do with your notes?",
        vi: "Ý hay đấy. Em đã làm gì với các ghi chép đó?" },
      { s: "tuan", text: "I sent them to Sam by email, because he is updating the intranet menu.",
        vi: "Em gửi cho anh Sam qua email, vì anh ấy đang cập nhật menu mạng nội bộ." },
      { s: "lan", text: "Perfect. Thank you for your help today. I didn't have time to say thank you earlier.",
        vi: "Tuyệt. Cảm ơn em đã giúp hôm nay. Lúc nãy chị chưa có thời gian nói lời cảm ơn." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "How many people came to the workshop?",
        options: ["Twenty-two", "Thirty", "Thirty-two", "Thirteen"],
        answer: 2, explanation: "Tuấn nói: “Thirty-two people came.” Chị Lan chuẩn bị ba mươi bản, vì vậy Tuấn photo thêm hai bản." },
      { id: "l2", type: "choice", prompt: "Why didn't Peter come?",
        options: ["He was sick.", "He forgot the time.", "He was on vacation.", "He went to a customer's office."],
        answer: 3, explanation: "“No, he didn't. He went to a customer's office at one o'clock.”" },
      { id: "l3", type: "choice", prompt: "What did Tuan do with his notes?",
        options: ["He sent them to Sam.", "He sent them to Mr. Hai.", "He gave them to Peter.", "He deleted them."],
        answer: 0, explanation: "“I sent them to Sam by email, because he is updating the intranet menu.”" }
    ]
  },

  reading: {
    title: "A short report to the manager",
    intro: "Email Tuấn gửi anh Hải chiều thứ Sáu, sau buổi hướng dẫn. Đọc và tìm thông tin chính của báo cáo.",
    email: {
      from: "Tuan Nguyen <tuan.nguyen@riverside-trading.example>",
      to: "Mr. Hai",
      date: "Friday, 13 November",
      subject: "Report: intranet workshop",
      greeting: "Dear Mr. Hai,",
      paragraphs: [
        "This afternoon Lan and I ran the intranet workshop in Room 205. Thirty-two people attended, so we made two more copies of the handouts.",
        "Most staff found the intranet page easily, but two people forgot their usernames. Sam solved the problem quickly. Peter didn't attend because he went to a customer's office.",
        "We didn't finish the last topic, the holiday calendar, because we ran out of time. I wrote down the questions and sent them to Sam."
      ],
      list: [],
      after: [
        "I will explain the next steps at our check-in on Tuesday at 11:00."
      ],
      closing: "Best regards,",
      signature: ["Tuan Nguyen", "HR Assistant, Riverside Trading"]
    },
    glossary: [
      { term: "run a workshop", vi: "tổ chức, điều hành một buổi hướng dẫn" },
      { term: "attend", vi: "tham dự" },
      { term: "username", vi: "tên đăng nhập" },
      { term: "next steps", vi: "những việc sẽ làm tiếp theo" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "How many people attended the workshop?",
        options: ["30", "32", "23", "13"],
        answer: 1, explanation: "“Thirty-two people attended.” Ba mươi hai người, không phải ba mươi (số tài liệu in ban đầu)." },
      { id: "r2", type: "choice", prompt: "Who solved the problem with the usernames?",
        options: ["Lan", "Peter", "Sam", "Mr. Hai"],
        answer: 2, explanation: "“Sam solved the problem quickly.”" },
      { id: "r3", type: "choice", prompt: "Why didn't they finish the last topic?",
        options: ["They ran out of time.", "The room was closed.", "Mr. Hai stopped the workshop.", "Sam was absent."],
        answer: 0, explanation: "“We didn't finish the last topic, the holiday calendar, because we ran out of time.” Sam có mặt và đã giúp xử lý sự cố." }
    ]
  },

  grammar: {
    title: "Irregular past verbs, did and didn't",
    titleVi: "Quá khứ đơn bất quy tắc; câu hỏi và phủ định với did / didn't",
    intro: "Nhiều động từ thông dụng không thêm -ed mà đổi dạng (go → went). Với câu phủ định và câu hỏi, ta mượn did / didn't và động từ trở về nguyên mẫu. Quy tắc này đúng cho cả động từ có quy tắc và bất quy tắc.",
    patterns: [
      { form: "Động từ bất quy tắc ở dạng quá khứ", use: "Kể việc đã xảy ra. Cần học thuộc từng động từ.",
        examples: ["go → went, make → made, take → took, write → wrote, send → sent", "Thirty-two people came, and we ran out of handouts."] },
      { form: "S + didn't + động từ nguyên mẫu", use: "Nói việc đã không xảy ra.",
        examples: ["Peter didn't come to the workshop.", "I didn't see him."] },
      { form: "Did + S + động từ nguyên mẫu …? – Yes, I did. / No, he didn't.", use: "Hỏi việc đã xảy ra chưa và trả lời ngắn.",
        examples: ["Did you take notes? – Yes, I did.", "Did Peter come? – No, he didn't."] },
      { form: "Từ để hỏi + did + S + động từ nguyên mẫu …?", use: "Hỏi thêm chi tiết về việc đã xảy ra.",
        examples: ["What did you do with your notes?", "When did the workshop start?"] }
    ],
    mistakes: [
      { wrong: "Peter didn't came.", right: "Peter didn't come.", note: "Sau didn't, động từ trở về nguyên mẫu (come), không để dạng quá khứ." },
      { wrong: "Did you took notes?", right: "Did you take notes?", note: "Sau Did, động từ cũng ở nguyên mẫu." },
      { wrong: "I goed to the customer's office.", right: "I went to the customer's office.", note: "go là động từ bất quy tắc: quá khứ là went." },
      { wrong: "What you did after the workshop?", right: "What did you do after the workshop?", note: "Câu hỏi: từ để hỏi + did + chủ ngữ + động từ nguyên mẫu." }
    ],
    tip: "Khi hỏi “Who came?” hay “How many people came?”, từ để hỏi là chủ ngữ nên không cần did. Dùng came ở dạng quá khứ như câu kể. Khi báo cáo, hãy kể theo thứ tự thời gian để người nghe dễ theo dõi."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "The number of people who come to an event is called the ___.",
      options: ["agenda", "reminder", "handout", "turnout"],
      answer: 3, explanation: "Turnout = số người đến dự. Agenda là chương trình, handout là tài liệu phát." },
    { id: "p2", type: "gap", prompt: "We ___ handouts, so I made more copies.",
      options: ["went out of", "came out of", "made out of", "ran out of"],
      answer: 3, explanation: "Run out of = hết, dùng hết. Quá khứ của run là ran: We ran out of handouts." },
    { id: "p3", type: "gap", prompt: "Yesterday Sam ___ the problem in five minutes.",
      options: ["solved", "solve", "solves", "solving"],
      answer: 0, explanation: "“Yesterday” là việc đã qua: solve + ed = solved." },
    { id: "p4", type: "gap", prompt: "I ___ the report to Mr. Hai yesterday.",
      options: ["send", "sending", "sent", "sended"],
      answer: 2, explanation: "send là động từ bất quy tắc: quá khứ là sent, không phải “sended”." },
    { id: "p5", type: "gap", prompt: "Last Friday Peter ___ come to the workshop.",
      options: ["didn't", "doesn't", "don't", "isn't"],
      answer: 0, explanation: "“Last Friday” là quá khứ nên phủ định bằng didn't + động từ nguyên mẫu: didn't come." },
    { id: "p6", type: "gap", prompt: "Did you ___ notes during the workshop?",
      options: ["took", "take", "taking", "takes"],
      answer: 1, explanation: "Sau Did, động từ ở nguyên mẫu: Did you take notes?" },
    { id: "p7", type: "choice", context: "Lan asks: “Did you take notes?” You took notes.", prompt: "Which short answer is correct?",
      options: ["Yes, I took.", "Yes, I did.", "Yes, I do.", "Yes, I was."],
      answer: 1, explanation: "Câu hỏi bắt đầu bằng Did nên trả lời ngắn cũng dùng did: Yes, I did." },
    { id: "p8", type: "choice", prompt: "Which sentence is correct?",
      options: ["Peter not come.", "Peter didn't came.", "Peter didn't come.", "Peter didn't comes."],
      answer: 2, explanation: "Sau didn't dùng động từ nguyên mẫu không thêm -s: Peter didn't come." },
    { id: "p9", type: "choice", prompt: "What is the simple past of “write”?",
      options: ["writed", "writes", "writing", "wrote"],
      answer: 3, explanation: "write là động từ bất quy tắc: write → wrote." },
    { id: "p10", type: "gap", prompt: "A: What ___ you do after the workshop? B: I wrote down the questions.",
      options: ["do", "does", "did", "are"],
      answer: 2, explanation: "Câu hỏi quá khứ: từ để hỏi + did + chủ ngữ + động từ nguyên mẫu: What did you do…?" }
  ],

  writing: {
    title: "A short report on my week",
    task: "Bạn là Tuấn. Viết email ngắn cho anh Hải báo cáo tuần làm việc thứ hai (50–90 từ). Hãy kể ít nhất hai việc đã làm ở hai ngày khác nhau và một việc bạn chưa làm xong.",
    requirements: [
      "Mở đầu bằng lời chào (Dear …).",
      "Nhắc tới ít nhất hai ngày trong tuần (ví dụ Wednesday, Thursday, Friday).",
      "Dùng ít nhất một động từ bất quy tắc ở quá khứ (took, went, wrote, sent, made, had…).",
      "Nói một việc bạn chưa làm xong, dùng didn't.",
      "Nhắc tới buổi hướng dẫn (workshop).",
      "Kết thúc email và ký tên."
    ],
    minWords: 50,
    maxWords: 90,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Dear …)", pattern: "\\bdear\\b" },
      { label: "Nhắc tới ít nhất hai ngày trong tuần", pattern: "(monday|tuesday|wednesday|thursday|friday)[\\s\\S]*(monday|tuesday|wednesday|thursday|friday)" },
      { label: "Có động từ bất quy tắc ở quá khứ", pattern: "\\b(went|came|made|took|wrote|sent|met|gave|had|saw|got|ran|forgot)\\b" },
      { label: "Có câu phủ định với didn't", pattern: "didn't|did not" },
      { label: "Nhắc tới buổi hướng dẫn (workshop)", pattern: "workshop" },
      { label: "Có lời kết (Best regards …)", pattern: "regards|sincerely|best wishes" }
    ],
    model: [
      "Dear Mr. Hai,",
      "This week was busy but good. On Wednesday I took a phone message for Lan, and on Thursday I helped her with the printer. On Friday we ran the workshop, and thirty-two people came.",
      "I didn't finish the holiday calendar topic because we ran out of time. I wrote down the questions and sent them to Sam.",
      "Thank you for your support.",
      "Best regards,",
      "Tuan Nguyen"
    ]
  },

  review: {
    keyPhrases: [
      { en: "How did the workshop go?", vi: "Buổi hướng dẫn diễn ra thế nào?" },
      { en: "It went smoothly.", vi: "Buổi đó diễn ra suôn sẻ." },
      { en: "We ran out of handouts.", vi: "Chúng tôi hết tài liệu." },
      { en: "Did everyone find the page?", vi: "Mọi người có tìm được trang đó không?" },
      { en: "No, he didn't. He went to a customer's office.", vi: "Dạ không. Anh ấy đã đến văn phòng khách hàng." },
      { en: "I wrote down the questions and sent them to Sam.", vi: "Tôi ghi lại các câu hỏi và gửi cho Sam." }
    ]
  }
});
