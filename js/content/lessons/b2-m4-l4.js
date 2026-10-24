/* =========================================================
   B2 · Module 4 (Business Communication and Negotiation) · Bài 4
   "Handling difficult conversations"
   Nối tiếp B2-M2-L4 (Khoa Pham, Sales Executive mới) và B2-M4-L3.
   Chị Lan nói chuyện riêng với Khoa Pham (không phải kỷ luật):
   - Báo cáo tuần của Khoa nộp muộn 4 lần trong 6 tuần (hạn: trưa thứ
     Sáu); có hai báo giá sai ở số liệu.
   - Khoa cho rằng chỉ tiêu quá cao và mình phải thăm nhiều khách; có vẻ
     phòng thủ lúc đầu, rồi cởi mở.
   - Thỏa thuận: Khoa nộp báo cáo trước trưa thứ Sáu; dùng mẫu báo giá
     có kiểm tra cơ sở dữ liệu; Lan sẽ nói với David xem lại chỉ tiêu sau
     một tháng; gặp lại sau 4 tuần.
   Bài viết: anh Tuấn gửi email sau buổi nói chuyện với Khanh về ba lỗi
   trong hồ sơ nghỉ phép trong hai tháng (Khanh quá tải): danh sách
   kiểm tra, Tuấn kiểm tra lại tháng đầu, đào tạo thêm buổi hồ sơ nghỉ
   phép.
   Thời gian nói áng chừng.
   ========================================================= */
window.EOH.registerLesson({
  id: "b2-m4-l4",
  reviewStatus: "approved", // Linh duyệt ngày 24/10/2026
  duration: "45–60 phút",
  scenario: "Chị Lan (HR Manager) cần nói chuyện riêng với Khoa Pham (Sales Executive): báo cáo tuần nộp muộn nhiều lần và có hai báo giá sai số liệu. Khoa hơi phòng thủ lúc đầu. Chị Lan lắng nghe, nêu vấn đề rõ ràng, thừa nhận khó khăn của Khoa và cùng anh đưa ra kế hoạch. Sau đó chị gửi email tóm tắt, giọng văn hỗ trợ.",

  objectives: [
    "Hiểu và dùng 10 từ vựng thường gặp khi nói chuyện khó.",
    "Nghe một cuộc nói chuyện khó và nhận ra cách mở đầu, nêu vấn đề, thừa nhận, đưa ra kế hoạch.",
    "Đọc email tóm tắt cuộc nói chuyện, nhận ra giọng văn hỗ trợ nhưng rõ ràng.",
    "Dùng câu chẻ để nhấn mạnh vấn đề: What concerns me is… / The thing I'd like to discuss is… / It's the … that…; và I understand that…, however…",
    "Viết email tóm tắt sau cuộc nói chuyện khó, giọng văn hỗ trợ và rõ ràng."
  ],

  vocabulary: [
    { word: "constructive", ipa: "/kənˈstrʌktɪv/", pos: "adjective", meaning: "mang tính xây dựng",
      example: "I'd like this to be a constructive conversation.", exampleVi: "Tôi muốn đây là một cuộc nói chuyện mang tính xây dựng." },
    { word: "defensive", ipa: "/dɪˈfensɪv/", pos: "adjective", meaning: "phòng thủ, hay tự bào chữa",
      example: "He sounded a little defensive at first.", exampleVi: "Lúc đầu anh ấy nghe hơi phòng thủ." },
    { word: "acknowledge", ipa: "/əkˈnɑːlɪdʒ/", pos: "verb", meaning: "thừa nhận (điều khó khăn, ý kiến của ai)",
      example: "I acknowledge that the target is challenging.", exampleVi: "Tôi thừa nhận chỉ tiêu này khá thử thách." },
    { word: "underlying", ipa: "/ˌʌndərˈlaɪɪŋ/", pos: "adjective", meaning: "ở bên dưới, thật sự (nguyên nhân)",
      example: "Let's talk about the underlying problem.", exampleVi: "Hãy nói về vấn đề thật sự ở bên dưới." },
    { word: "pattern", ipa: "/ˈpætərn/", pos: "noun", meaning: "kiểu lặp lại, xu hướng lặp",
      example: "There is a pattern of late reports.", exampleVi: "Có một kiểu lặp lại là báo cáo nộp muộn." },
    { word: "bring up", ipa: "/ˌbrɪŋ ˈʌp/", pos: "phrasal verb", meaning: "nêu ra, đề cập (một vấn đề)",
      example: "I don't want to bring up old issues.", exampleVi: "Tôi không muốn nêu lại những chuyện cũ." },
    { word: "firm", ipa: "/fɜːrm/", pos: "adjective", meaning: "cứng rắn, dứt khoát (nhưng không thô lỗ)",
      example: "Be kind, but firm about the deadline.", exampleVi: "Hãy tử tế nhưng dứt khoát về hạn nộp." },
    { word: "supportive", ipa: "/səˈpɔːrtɪv/", pos: "adjective", meaning: "hỗ trợ, ủng hộ",
      example: "A manager should be supportive, not critical.", exampleVi: "Quản lý nên hỗ trợ, không nên chỉ chỉ trích." },
    { word: "empathize", ipa: "/ˈempəθaɪz/", pos: "verb", meaning: "đồng cảm, hiểu cảm xúc của người khác",
      example: "I empathize with how busy you have been.", exampleVi: "Tôi hiểu anh đã bận như thế nào." },
    { word: "follow-up", ipa: "/ˈfɑːloʊ ʌp/", pos: "noun", meaning: "việc tiếp theo, email hoặc cuộc họp sau đó",
      example: "I'll send a follow-up email after our talk.", exampleVi: "Tôi sẽ gửi email tiếp theo sau cuộc nói chuyện của chúng ta." }
  ],

  pronunciation: {
    groups: [
      {
        title: "Nhấn từ khóa trong câu chẻ",
        text: "Trong câu chẻ, nhấn mạnh phần được nhấn (sau is). Ngừng nhẹ trước phần đó. Âm tiết in hoa là âm đọc to và dài hơn.",
        items: [
          { word: "What concerns me is…", marked: "What con·CERNS me is | the PAT·tern…" },
          { word: "The thing I'd like to discuss is…", marked: "The THING I'd like to dis·CUSS is | the RE·ports…" },
          { word: "It's the late reports that…", marked: "It's the LATE re·PORTS | that…" }
        ]
      },
      {
        title: "Giọng nhẹ nhàng khi thừa nhận",
        text: "Câu thừa nhận đọc chậm, giọng xuống nhẹ, rồi ngừng trước however.",
        items: [
          { word: "I understand that…, however…", marked: "I un·der·STAND that… | how·EV·er…" },
          { word: "I can see that…", marked: "I can SEE that…" }
        ]
      }
    ],
    sentences: [
      "What concerns me is the pattern of late reports.",
      "I understand that the target feels high; however, we need accurate quotes.",
      "It's the checking step that I'd like to improve."
    ]
  },

  listening: {
    title: "A difficult conversation",
    setting: "Văn phòng chị Lan. Chị Lan nói chuyện riêng với Khoa Pham về báo cáo nộp muộn và báo giá sai số liệu.",
    speakers: { lan: "Lan (HR Manager)", khoa: "Khoa (Sales Executive)" },
    lines: [
      { s: "lan", text: "Thanks for coming, Khoa. This isn't a formal warning. I'd just like us to have a constructive conversation.",
        vi: "Cảm ơn em đã đến, Khoa. Đây không phải cảnh cáo chính thức. Chị chỉ muốn mình có một cuộc nói chuyện mang tính xây dựng." },
      { s: "khoa", text: "Okay. Is this about the reports?",
        vi: "Dạ. Có phải về các báo cáo không ạ?" },
      { s: "lan", text: "Partly. What concerns me is the pattern. Your weekly report was late four times in the last six weeks.",
        vi: "Một phần. Điều chị lo là kiểu lặp lại. Báo cáo tuần của em nộp muộn bốn lần trong sáu tuần qua." },
      { s: "khoa", text: "Well, it's not like I'm doing nothing. I have thirty customers to visit, and the target is very high. The report is the last thing I have time for.",
        vi: "Dạ, đâu phải em không làm gì. Em có ba mươi khách hàng phải thăm, chỉ tiêu thì rất cao. Báo cáo là thứ cuối cùng em có thời gian làm." },
      { s: "lan", text: "I understand that you're under pressure, and I acknowledge that the target is challenging. However, the reports help David plan the week for the whole team.",
        vi: "Chị hiểu là em đang chịu áp lực, và chị thừa nhận chỉ tiêu khá thử thách. Tuy nhiên, các báo cáo giúp David lên kế hoạch tuần cho cả nhóm." },
      { s: "khoa", text: "I see. I didn't realize they were that important.",
        vi: "Dạ em hiểu. Em không nhận ra chúng quan trọng đến vậy." },
      { s: "lan", text: "The other thing I'd like to discuss is the two quotes with wrong figures. Do you remember what happened?",
        vi: "Điều khác chị muốn bàn là hai báo giá sai số liệu. Em còn nhớ chuyện gì đã xảy ra không?" },
      { s: "khoa", text: "I used an old price list because I was in a hurry. I should have checked the database. I'm sorry.",
        vi: "Em dùng bảng giá cũ vì vội. Lẽ ra em nên kiểm tra cơ sở dữ liệu. Em xin lỗi ạ." },
      { s: "lan", text: "Thank you for being honest. That helps a lot. I can see that it's the lack of time that causes the mistakes, not carelessness.",
        vi: "Cảm ơn em đã thẳng thắn. Điều đó giúp rất nhiều. Chị thấy chính việc thiếu thời gian gây ra các lỗi, không phải do cẩu thả." },
      { s: "khoa", text: "Yes, exactly. What I really need is a simple way to prepare reports faster.",
        vi: "Vâng, đúng vậy. Điều em thực sự cần là một cách đơn giản để làm báo cáo nhanh hơn." },
      { s: "lan", text: "Let's find one. How about a short template for the report, and a quote form that checks the database automatically?",
        vi: "Mình cùng tìm cách. Một mẫu báo cáo ngắn, và một mẫu báo giá tự kiểm tra cơ sở dữ liệu thì sao?" },
      { s: "khoa", text: "That would save me time. Thank you.",
        vi: "Vậy thì em tiết kiệm được nhiều thời gian. Cảm ơn chị." },
      { s: "lan", text: "In return, I'd like you to send the report before noon on Fridays. And I'll speak to David about reviewing the target after a month.",
        vi: "Đổi lại, chị muốn em gửi báo cáo trước trưa thứ Sáu. Và chị sẽ nói với David về việc xem lại chỉ tiêu sau một tháng." },
      { s: "khoa", text: "That's fair. I'll do my best.",
        vi: "Công bằng ạ. Em sẽ cố gắng hết sức." },
      { s: "lan", text: "Good. I'll send you a short email with what we agreed, and we'll meet again in four weeks.",
        vi: "Tốt. Chị sẽ gửi em một email ngắn về những gì đã thống nhất, và bốn tuần nữa mình gặp lại." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "How does Lan open the conversation?",
        options: ["She gives Khoa a formal warning.", "She says it is not a formal warning and she wants a constructive conversation.", "She asks Khoa to leave.", "She asks David to speak first."],
        answer: 1, explanation: "“This isn't a formal warning. I'd just like us to have a constructive conversation.” Mở đầu như vậy giúp người nghe bớt phòng thủ." },
      { id: "l2", type: "choice", prompt: "What caused the wrong quotes?",
        options: ["Khoa wanted to cause problems.", "The database was broken.", "Khoa used an old price list because he was in a hurry.", "David gave him wrong figures."],
        answer: 2, explanation: "“I used an old price list because I was in a hurry. I should have checked the database.”" },
      { id: "l3", type: "choice", prompt: "What will Lan do?",
        options: ["Reduce Khoa's salary", "Move Khoa to another team", "Ask Khoa to do all reports on Monday", "Talk to David about reviewing the target after a month"],
        answer: 3, explanation: "“I'll speak to David about reviewing the target after a month.” Chị không thay đổi lương hay nhóm của Khoa." }
    ]
  },

  reading: {
    title: "Following up on our conversation",
    intro: "Email chị Lan gửi Khoa sau cuộc nói chuyện. Đọc và nhận ra giọng văn hỗ trợ nhưng rõ ràng.",
    email: {
      from: "Lan Pham <lan.pham@riverside-trading.example>",
      to: "Khoa Pham",
      date: "Wednesday",
      subject: "Following up on our conversation",
      greeting: "Dear Khoa,",
      paragraphs: [
        "Thank you for speaking so openly with me today. I know these conversations are not easy, and I appreciate your honesty. I would like to summarize what we agreed so that we are both clear."
      ],
      list: [
        "Weekly reports: I understand that your schedule is very busy. However, the reports help the whole team, so please send them before 12:00 on Fridays. I will send you a short template.",
        "Quotes: from now on, please use the new quote form, which checks the database automatically. What matters most is that every figure is accurate before a quote goes to a customer.",
        "Support: I will speak to David about the sales target, and we will review it together after a month."
      ],
      after: [
        "Please remember that this was an informal conversation and nothing has been recorded in your file. If there is anything else that makes your work difficult, please tell me. I would much rather hear about problems early.",
        "Let's meet again in four weeks to see how things are going."
      ],
      closing: "Kind regards,",
      signature: ["Lan Pham", "HR Manager, Riverside Trading"]
    },
    glossary: [
      { term: "openly", vi: "thẳng thắn, cởi mở" },
      { term: "appreciate", vi: "trân trọng, cảm kích" },
      { term: "from now on", vi: "từ bây giờ" },
      { term: "recorded in your file", vi: "được ghi vào hồ sơ" },
      { term: "I would much rather…", vi: "tôi thích … hơn nhiều" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "What does Lan ask Khoa to do about the weekly report?",
        options: ["Send it before 12:00 on Fridays", "Stop writing it", "Send it on Monday morning", "Send it to David only"],
        answer: 0, explanation: "“…please send them before 12:00 on Fridays.”" },
      { id: "r2", type: "choice", prompt: "Which sentence best describes the tone of the email?",
        options: ["Angry and threatening", "Supportive but clear", "Very informal and unclear", "Cold and formal"],
        answer: 1, explanation: "Email cảm ơn, trân trọng sự thẳng thắn, nhưng vẫn nêu rõ việc cần làm và thời hạn." },
      { id: "r3", type: "choice", prompt: "Is the conversation recorded in Khoa's file?",
        options: ["Yes, as a formal warning", "Yes, as a reminder", "Only if it happens again", "No, it was an informal conversation"],
        answer: 3, explanation: "“…this was an informal conversation and nothing has been recorded in your file.”" }
    ]
  },

  grammar: {
    title: "Cleft sentences and softeners: What concerns me is…",
    titleVi: "Câu chẻ và cách nói nhẹ khi nêu vấn đề khó",
    intro: "Khi nói chuyện khó, ta cần nêu đúng vấn đề mà không làm người nghe bị tổn thương. Câu chẻ giúp tập trung vào điều quan trọng nhất. Ta cũng thừa nhận cảm xúc của họ trước khi nói “tuy nhiên”. Bốn mẫu dưới đây có trong cuộc nói chuyện và email bạn vừa học.",
    patterns: [
      { form: "What + chủ ngữ + động từ + is + điều cần nhấn", use: "Câu chẻ bắt đầu bằng What: tập trung vào vấn đề hoặc mong muốn.",
        examples: ["What concerns me is the pattern of late reports.", "What I really need is a simple way to prepare reports faster."] },
      { form: "The thing / The main issue + (that) + câu + is + điều cần nhấn", use: "Dạng dài hơn của câu chẻ, dùng khi nêu từng vấn đề một.",
        examples: ["The other thing I'd like to discuss is the two quotes with wrong figures.", "The main issue is the checking step."] },
      { form: "It is / It's + phần nhấn + that + câu", use: "Câu chẻ bắt đầu bằng It: nhấn vào một danh từ hoặc nguyên nhân.",
        examples: ["It's the lack of time that causes the mistakes, not carelessness.", "It's the checking step that I'd like to improve."] },
      { form: "I understand that… / I can see that… / I acknowledge that…, however, …", use: "Thừa nhận cảm xúc hoặc khó khăn trước, rồi mới nêu vấn đề.",
        examples: ["I understand that you're under pressure; however, the reports help the whole team.", "I acknowledge that the target is challenging."] }
    ],
    mistakes: [
      { wrong: "What concerns me the pattern of late reports.", right: "What concerns me is the pattern of late reports.", note: "Câu chẻ cần động từ is nối vế What với phần nhấn." },
      { wrong: "It's the lack of time what causes the mistakes.", right: "It's the lack of time that causes the mistakes.", note: "Sau phần nhấn trong câu chẻ với It dùng that, không dùng what." },
      { wrong: "I understand that, but you are wrong.", right: "I understand that; however, we need accurate quotes.", note: "Tránh but you are wrong. Nêu mục tiêu chung sau however." },
      { wrong: "You always send late reports.", right: "What concerns me is that the reports have been late four times recently.", note: "Tránh always. Nêu sự việc cụ thể, có số liệu, thay vì kết luận về con người." }
    ],
    tip: "Ba bước nói chuyện khó: (1) mở đầu nói rõ mục đích, (2) nêu sự việc cụ thể bằng câu chẻ, (3) thừa nhận khó khăn rồi cùng đưa ra kế hoạch. Nói về hành vi cụ thể (the reports) thay vì về con người (you are careless)."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "What concerns me ___ the pattern of late reports.",
      options: ["are", "is", "do", "has"],
      answer: 1, explanation: "Câu chẻ What concerns me + is + phần nhấn." },
    { id: "p2", type: "gap", prompt: "It's the lack of time ___ causes the mistakes.",
      options: ["that", "what", "who", "when"],
      answer: 0, explanation: "Câu chẻ với It: It's + phần nhấn + that + câu." },
    { id: "p3", type: "gap", prompt: "I understand that you're under pressure; ___, we need accurate quotes.",
      options: ["moreover", "furthermore", "however", "therefore"],
      answer: 2, explanation: "Sau khi thừa nhận khó khăn, ta nêu điều trái ngược bằng however." },
    { id: "p4", type: "choice", prompt: "Which sentence is the best way to start a difficult conversation?",
      options: ["You are always late.", "I'd like us to have a constructive conversation.", "You have a big problem.", "Everyone is talking about you."],
      answer: 1, explanation: "Câu B nói rõ mục đích và giọng xây dựng. Các câu còn lại buộc tội hoặc gây phòng thủ." },
    { id: "p5", type: "gap", prompt: "___ I really need is a simple way to prepare reports faster.",
      options: ["That", "What", "It", "Which"],
      answer: 1, explanation: "What I really need is… = điều tôi thực sự cần là…" },
    { id: "p6", type: "choice", prompt: "Which sentence focuses on behavior, not on the person?",
      options: ["You are careless.", "You never listen.", "The report was late four times in six weeks.", "You don't care about the team."],
      answer: 2, explanation: "Câu C nêu sự việc cụ thể, có số liệu. Các câu còn lại đánh giá con người." },
    { id: "p7", type: "gap", prompt: "He sounded a little ___ at first, but then he relaxed.",
      options: ["constructive", "supportive", "underlying", "defensive"],
      answer: 3, explanation: "defensive = phòng thủ, hay tự bào chữa." },
    { id: "p8", type: "gap", prompt: "I'd like to ___ up one more issue before we finish.",
      options: ["bring", "let", "put", "give"],
      answer: 0, explanation: "bring up an issue = nêu ra một vấn đề." },
    { id: "p9", type: "gap", prompt: "I'll send a ___ email after our talk to summarize what we agreed.",
      options: ["follow-up", "defensive", "firm", "temporary"],
      answer: 0, explanation: "follow-up email = email tiếp theo sau cuộc nói chuyện." },
    { id: "p10", type: "gap", prompt: "Please be kind, but ___ about the deadline.",
      options: ["defensive", "supportive", "firm", "underlying"],
      answer: 2, explanation: "firm = dứt khoát, rõ ràng nhưng không thô lỗ." }
  ],

  writing: {
    title: "Write a follow-up after a difficult conversation",
    task: "Bạn là anh Tuấn. Viết email (120–180 từ) gửi Khanh sau cuộc nói chuyện về ba lỗi trong hồ sơ nghỉ phép trong hai tháng. Khanh đang quá tải vì vừa phải làm bảng chấm công vừa làm hồ sơ nghỉ phép. Thỏa thuận: Khanh dùng danh sách kiểm tra mới; Tuấn kiểm tra lại hồ sơ nghỉ phép trong tháng đầu; Khanh tham gia một buổi đào tạo về hồ sơ nghỉ phép; hai người gặp lại sau bốn tuần. Giọng văn hỗ trợ và rõ ràng.",
    requirements: [
      "Mở đầu bằng lời chào và cảm ơn.",
      "Dùng một câu chẻ (What … is… / It's … that…).",
      "Dùng I understand that… / I can see that… + however.",
      "Nêu các việc đã thống nhất.",
      "Nói về buổi gặp tiếp theo.",
      "Kết thúc email và ký tên."
    ],
    minWords: 120,
    maxWords: 180,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Dear … / Hi …)", pattern: "\\bdear\\b|\\bhi\\b" },
      { label: "Có câu chẻ (What … is / It's … that)", pattern: "what \\w+( \\w+){0,4} (is|are)\\b|it('|’)s (the|a|your) [\\w ]+ that\\b" },
      { label: "Có I understand that / I can see that", pattern: "i understand that|i can see that|i acknowledge that" },
      { label: "Có however", pattern: "\\bhowever\\b" },
      { label: "Nói về buổi gặp tiếp theo (meet again / next week / four weeks)", pattern: "meet again|four weeks|in a month" },
      { label: "Có lời kết (Best regards …)", pattern: "regards|sincerely|best wishes" }
    ],
    model: [
      "Hi Khanh,",
      "Thank you for talking to me so honestly today. I know this was not an easy conversation, and I really appreciate your openness.",
      "As we discussed, there were three errors in the leave records over the last two months. What matters most is that the records are accurate, because staff and payroll depend on them.",
      "I understand that you have been very busy with timesheets and leave records at the same time; however, we need a way to avoid more mistakes. It's the checking step that we need to improve.",
      "We agreed that you will use the new checklist, that I will double-check the leave records for the first month, and that you will join a short training session on leave records.",
      "Let's meet again in four weeks to see how things are going.",
      "Best regards,",
      "Tuan"
    ]
  },

  review: {
    keyPhrases: [
      { en: "I'd like us to have a constructive conversation.", vi: "Tôi muốn mình có một cuộc nói chuyện mang tính xây dựng." },
      { en: "What concerns me is the pattern of late reports.", vi: "Điều tôi lo là kiểu lặp lại của các báo cáo nộp muộn." },
      { en: "It's the lack of time that causes the mistakes.", vi: "Chính việc thiếu thời gian gây ra các lỗi." },
      { en: "I understand that you're under pressure; however, …", vi: "Tôi hiểu là anh đang chịu áp lực; tuy nhiên, …" },
      { en: "What I really need is a simple way to work faster.", vi: "Điều tôi thực sự cần là một cách đơn giản để làm nhanh hơn." },
      { en: "Let's meet again in four weeks.", vi: "Bốn tuần nữa mình gặp lại nhé." }
    ]
  }
});
