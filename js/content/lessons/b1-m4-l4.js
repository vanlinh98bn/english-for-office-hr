/* =========================================================
   B1 · Module 4 (Training and Employee Relations) · Bài 4
   "Team conflicts"
   Nối tiếp B1-M4-L3: Hoa (kế toán) nhờ chị Lan tư vấn vì mâu thuẫn với
   Minh: Minh sửa bảng tính cuối tháng mà không báo, số liệu bị lệch và
   hai người cãi nhau trước cả phòng. Chị Lan khuyên nói chuyện trực
   tiếp, lắng nghe, đề nghị quy tắc chung cho tệp dùng chung, và có thể
   hòa giải. Sau đó chị gửi Hoa email tóm tắt. Thời gian nói áng chừng.
   ========================================================= */
window.EOH.registerLesson({
  id: "b1-m4-l4",
  reviewStatus: "approved", // Linh duyệt ngày 23/10/2026
  duration: "40–50 phút",
  scenario: "Hoa (kế toán) đang căng thẳng với đồng nghiệp Minh: anh sửa bảng tính cuối tháng mà không báo, số liệu bị lệch và hai người cãi nhau trước cả phòng. Hoa đến xin chị Lan (Senior HR Officer) lời khuyên. Chị Lan lắng nghe, đưa ra gợi ý, rồi gửi Hoa email tóm tắt.",

  objectives: [
    "Hiểu và dùng 10 từ vựng thường gặp khi nói về mâu thuẫn trong nhóm.",
    "Nghe cuộc trao đổi xin lời khuyên, ghi lại nguyên nhân mâu thuẫn và lời khuyên của chị Lan.",
    "Đọc email tóm tắt lời khuyên, tìm đúng các bước nên làm.",
    "Dùng should / shouldn't, ought to, Why don't you…? để khuyên, và I see your point, but… để không đồng ý lịch sự.",
    "Viết email khuyên đồng nghiệp đang có mâu thuẫn trong nhóm."
  ],

  vocabulary: [
    { word: "conflict", ipa: "/ˈkɑːnflɪkt/", pos: "noun", meaning: "mâu thuẫn, xung đột",
      example: "A conflict in the team can affect everyone.", exampleVi: "Một mâu thuẫn trong nhóm có thể ảnh hưởng đến mọi người." },
    { word: "misunderstanding", ipa: "/ˌmɪsʌndərˈstændɪŋ/", pos: "noun", meaning: "sự hiểu lầm",
      example: "Emails can create more misunderstanding.", exampleVi: "Email có thể gây thêm hiểu lầm." },
    { word: "tension", ipa: "/ˈtenʃən/", pos: "noun", meaning: "sự căng thẳng (giữa người với người)",
      example: "There is tension between the two colleagues.", exampleVi: "Có sự căng thẳng giữa hai đồng nghiệp." },
    { word: "mediate", ipa: "/ˈmiːdieɪt/", pos: "verb", meaning: "hòa giải (giữa hai bên)",
      example: "If you can't agree, I can mediate.", exampleVi: "Nếu hai người không thống nhất được, tôi có thể hòa giải." },
    { word: "compromise", ipa: "/ˈkɑːmprəmaɪz/", pos: "noun / verb", meaning: "sự thỏa hiệp; thỏa hiệp",
      example: "That's a good compromise for both sides.", exampleVi: "Đó là một sự thỏa hiệp tốt cho cả hai bên." },
    { word: "fair", ipa: "/fer/", pos: "adjective", meaning: "công bằng",
      example: "Keep your email short and fair.", exampleVi: "Hãy viết email ngắn gọn và công bằng." },
    { word: "calm", ipa: "/kɑːm/", pos: "adjective", meaning: "bình tĩnh",
      example: "Stay calm when you talk to him.", exampleVi: "Hãy bình tĩnh khi nói chuyện với anh ấy." },
    { word: "defensive", ipa: "/dɪˈfensɪv/", pos: "adjective", meaning: "có thái độ phòng thủ, dễ phản ứng gay gắt",
      example: "I'm afraid he will be defensive.", exampleVi: "Tôi sợ anh ấy sẽ phản ứng phòng thủ." },
    { word: "perspective", ipa: "/pərˈspektɪv/", pos: "noun", meaning: "góc nhìn, quan điểm",
      example: "Try to understand his perspective.", exampleVi: "Hãy cố hiểu góc nhìn của anh ấy." },
    { word: "agreement", ipa: "/əˈɡriːmənt/", pos: "noun", meaning: "sự thống nhất, thỏa thuận",
      example: "Make an agreement about shared files.", exampleVi: "Hãy thống nhất một thỏa thuận về các tệp dùng chung." }
  ],

  pronunciation: {
    groups: [
      {
        title: "Trọng âm của từ",
        text: "Những từ dưới đây hay gặp khi nói về mâu thuẫn. Âm tiết in hoa là âm đọc to và dài hơn.",
        items: [
          { word: "conflict (noun)", marked: "CON·flict", note: "Danh từ nhấn âm đầu; động từ conflict nhấn âm sau." },
          { word: "misunderstanding", marked: "mis·un·der·STAND·ing" },
          { word: "compromise", marked: "COM·pro·mise" },
          { word: "defensive", marked: "de·FEN·sive" },
          { word: "perspective", marked: "per·SPEC·tive" },
          { word: "agreement", marked: "a·GREE·ment" }
        ]
      },
      {
        title: "should và ought to đọc nhẹ",
        text: "Trong lời khuyên, should đọc nhẹ /ʃəd/ còn ought to đọc /ˈɔːt tə/. Nhấn động từ chính phía sau để lời khuyên nghe mềm mại.",
        items: [
          { word: "you should talk", marked: "you /ʃəd/ TALK" },
          { word: "you ought to listen", marked: "you /ɔːt tə/ LIS·ten" }
        ]
      }
    ],
    sentences: [
      "You should talk to him face to face.",
      "Why don't you start with something positive?",
      "I see your point, but I think we should talk first."
    ]
  },

  listening: {
    title: "Asking HR for advice",
    setting: "Phòng Nhân sự, buổi chiều. Hoa đến xin chị Lan lời khuyên về mâu thuẫn với Minh.",
    speakers: { hoa: "Hoa (Accountant)", lan: "Lan (Senior HR Officer)" },
    lines: [
      { s: "hoa", text: "Lan, do you have a few minutes? I'd like some advice about a problem with Minh.",
        vi: "Chị Lan, chị có vài phút không? Em muốn xin lời khuyên về một vấn đề với anh Minh." },
      { s: "lan", text: "Of course. What happened?",
        vi: "Dĩ nhiên rồi. Chuyện gì xảy ra vậy?" },
      { s: "hoa", text: "He changed the month-end spreadsheet without telling me, and then the numbers didn't match. We argued in front of the team.",
        vi: "Anh ấy sửa bảng tính cuối tháng mà không báo em, rồi số liệu bị lệch. Hai bên cãi nhau trước cả nhóm." },
      { s: "lan", text: "That sounds stressful. Have you talked to him since then?",
        vi: "Nghe căng thẳng quá. Từ đó đến giờ em đã nói chuyện với anh ấy chưa?" },
      { s: "hoa", text: "No. I'm still upset. Maybe I should send him a long email explaining everything.",
        vi: "Chưa ạ. Em vẫn còn buồn. Có lẽ em nên gửi anh ấy một email dài giải thích mọi chuyện." },
      { s: "lan", text: "I don't think that's a good idea. You should talk to him face to face. Emails can create more misunderstanding.",
        vi: "Chị không nghĩ đó là ý hay. Em nên nói chuyện trực tiếp với anh ấy. Email có thể gây thêm hiểu lầm." },
      { s: "hoa", text: "But I'm afraid he'll be defensive.",
        vi: "Nhưng em sợ anh ấy sẽ phản ứng phòng thủ." },
      { s: "lan", text: "Why don't you start by saying what you appreciate about working with him? And you ought to listen to his side too.",
        vi: "Sao em không bắt đầu bằng việc nói điều em trân trọng khi làm việc với anh ấy? Và em cũng nên lắng nghe phía anh ấy." },
      { s: "hoa", text: "I see your point. Perhaps I should ask him why he made the change.",
        vi: "Em hiểu ý chị. Có lẽ em nên hỏi anh ấy vì sao anh ấy sửa." },
      { s: "lan", text: "Exactly. And why don't you agree on a rule for shared files, like “always tell the others before you change anything”?",
        vi: "Đúng vậy. Và sao hai người không thống nhất một quy tắc cho các tệp dùng chung, chẳng hạn “luôn báo cho những người khác trước khi sửa bất cứ điều gì”?" },
      { s: "hoa", text: "That's a good compromise. Should I ask Ms. Ngoc to join us?",
        vi: "Đó là một thỏa hiệp tốt. Em có nên mời chị Ngọc cùng tham gia không?" },
      { s: "lan", text: "I don't think you need to yet. If you can't agree, I can mediate.",
        vi: "Chị nghĩ em chưa cần vội. Nếu hai người không thống nhất được, chị có thể hòa giải." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "What caused the problem between Hoa and Minh?",
        options: ["Minh changed a spreadsheet without telling Hoa", "Hoa was late for work", "Minh forgot a meeting", "Hoa did not finish a report"],
        answer: 0, explanation: "Hoa nói: “He changed the month-end spreadsheet without telling me, and then the numbers didn't match.”" },
      { id: "l2", type: "choice", prompt: "What does Lan advise Hoa to do first?",
        options: ["Send a long email", "Ask Ms. Ngoc to decide", "Talk to Minh face to face", "Ignore the problem"],
        answer: 2, explanation: "Chị Lan nói: “You should talk to him face to face. Emails can create more misunderstanding.”" },
      { id: "l3", type: "choice", prompt: "What rule does Lan suggest for shared files?",
        options: ["Nobody can change them", "Always tell the others before you change anything", "Only Hoa can change them", "Change them only at night"],
        answer: 1, explanation: "“Agree on a rule for shared files, like ‘always tell the others before you change anything’.”" }
    ]
  },

  reading: {
    title: "A summary of our conversation",
    intro: "Email chị Lan gửi Hoa sau cuộc trao đổi. Đọc và tìm các bước chị khuyên Hoa làm.",
    email: {
      from: "Lan Pham <lan.pham@riverside-trading.example>",
      to: "Hoa Tran",
      date: "Tuesday",
      subject: "Our conversation – next steps",
      greeting: "Dear Hoa,",
      paragraphs: [
        "Thank you for talking to me today. I know the situation with Minh is stressful, and I appreciate that you asked for advice. Here is a short summary of what we discussed:"
      ],
      list: [
        "You should talk to Minh in person this week. A long email might create more misunderstanding.",
        "Why don't you start by saying what you appreciate about working with him?",
        "You ought to listen to his perspective and ask why he changed the spreadsheet.",
        "Why don't you agree on a rule for shared files, for example telling the others before anyone makes a change?"
      ],
      after: [
        "I see your point that it feels easier to write an email when you are upset, but a calm conversation is usually more effective. If you cannot reach an agreement, please let me know and I can mediate.",
        "Please tell me how it goes."
      ],
      closing: "Best regards,",
      signature: ["Lan Pham", "Senior HR Officer, Riverside Trading"]
    },
    glossary: [
      { term: "in person", vi: "trực tiếp, gặp mặt" },
      { term: "appreciate", vi: "trân trọng, đánh giá cao" },
      { term: "effective", vi: "hiệu quả" },
      { term: "reach an agreement", vi: "đạt được thỏa thuận" },
      { term: "how it goes", vi: "mọi việc diễn ra thế nào" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "Why is Lan writing to Hoa?",
        options: ["To summarize her advice and the next steps", "To warn Hoa about her behavior", "To invite Hoa to a meeting with Ms. Ngoc", "To announce Minh's transfer"],
        answer: 0, explanation: "“Here is a short summary of what we discussed.” Đây là email tóm tắt lời khuyên, không phải cảnh cáo hay thông báo chuyển phòng." },
      { id: "r2", type: "choice", prompt: "What does Lan think about writing a long email?",
        options: ["It is the best solution", "It might create more misunderstanding", "It is required by HR", "It is not allowed"],
        answer: 1, explanation: "“A long email might create more misunderstanding.”" },
      { id: "r3", type: "choice", prompt: "What can Lan do if Hoa and Minh cannot reach an agreement?",
        options: ["Move Hoa to another team", "Give a warning to both", "Mediate", "Cancel the month-end report"],
        answer: 2, explanation: "“If you cannot reach an agreement, please let me know and I can mediate.”" }
    ]
  },

  grammar: {
    title: "Giving advice and disagreeing politely",
    titleVi: "should, ought to, Why don't you…? và không đồng ý lịch sự",
    intro: "Khi có mâu thuẫn trong nhóm, bạn cần cho lời khuyên mà không nghe như ra lệnh, và không đồng ý mà không gây thêm căng thẳng. Bốn mẫu dưới đây có trong cuộc trao đổi và email bạn vừa học.",
    patterns: [
      { form: "should / shouldn't + động từ nguyên mẫu", use: "Lời khuyên thông thường. Không thêm to và không thêm -s sau should.",
        examples: ["You should talk to him face to face.", "You shouldn't send a long email."] },
      { form: "ought to + động từ nguyên mẫu", use: "Lời khuyên, nghĩa giống should nhưng hơi trang trọng hơn. Phủ định: ought not to (ít dùng).",
        examples: ["You ought to listen to his side too.", "We ought to agree on a rule."] },
      { form: "Why don't you + động từ?   ·   Why not + động từ?", use: "Gợi ý nhẹ nhàng dưới dạng câu hỏi. Rất lịch sự và dễ nghe.",
        examples: ["Why don't you start with something positive?", "Why not talk to him this week?"] },
      { form: "I see your point, but …   ·   I agree to some extent, but …   ·   I'm afraid I don't agree.", use: "Không đồng ý lịch sự: ghi nhận ý kiến của người kia trước, rồi nêu ý của bạn.",
        examples: ["I see your point, but I think we should talk first.", "I agree to some extent, but an email might create misunderstanding."] }
    ],
    mistakes: [
      { wrong: "You should to talk to him.", right: "You should talk to him.", note: "Sau should dùng động từ nguyên mẫu, không có to." },
      { wrong: "You ought talk to him.", right: "You ought to talk to him.", note: "ought luôn đi với to." },
      { wrong: "Why you don't talk to him?", right: "Why don't you talk to him?", note: "Câu hỏi: Why don't + chủ ngữ + động từ." },
      { wrong: "I am not agree with you.", right: "I don't agree with you.", note: "agree là động từ thường, phủ định bằng don't." }
    ],
    tip: "Khi khuyên người đang bực bội, hãy bắt đầu bằng sự thông cảm, rồi dùng Why don't you…? hoặc should để gợi ý. Khi không đồng ý, ghi nhận ý của người kia trước (I see your point), rồi nói ý của bạn. Điều này giúp người nghe không cảm thấy bị chỉ trích."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "You ___ talk to him face to face.",
      options: ["should to", "should", "shoulds", "are should"],
      answer: 1, explanation: "should + động từ nguyên mẫu: should talk." },
    { id: "p2", type: "gap", prompt: "You ought ___ listen to his side too.",
      options: ["to", "for", "that", "of"],
      answer: 0, explanation: "ought to + động từ nguyên mẫu." },
    { id: "p3", type: "gap", prompt: "Hoa will talk to Minh tomorrow. Lan says: “Why ___ you start by saying something positive?”",
      options: ["not", "didn't", "don't", "aren't"],
      answer: 2, explanation: "Mẫu gợi ý: Why don't you + động từ?" },
    { id: "p4", type: "gap", prompt: "You ___ send an angry email. It will make things worse.",
      options: ["ought", "must to", "should", "shouldn't"],
      answer: 3, explanation: "Khuyên đừng làm: shouldn't send. “ought” thiếu to, “must to” sai, “should” mang nghĩa ngược lại." },
    { id: "p5", type: "choice", prompt: "Which sentence is correct?",
      options: ["Why don't you talk to him?", "Why you don't talk to him?", "Why not you talk to him?", "Why you not talk to him?"],
      answer: 0, explanation: "Câu hỏi gợi ý đúng: Why don't you + động từ? Các câu còn lại sai trật tự." },
    { id: "p6", type: "gap", prompt: "The two sides did not agree. They did not reach an ___.",
      options: ["agreement", "compromise", "conflict", "perspective"],
      answer: 0, explanation: "Reach an agreement = đạt được thỏa thuận. Trước chỗ trống có “an” nên chỉ từ bắt đầu bằng nguyên âm (agreement) mới đúng; compromise, conflict, perspective đi với “a”." },
    { id: "p7", type: "gap", prompt: "A disagreement between people is a ___.",
      options: ["agreement", "compromise", "conflict", "perspective"],
      answer: 2, explanation: "Conflict = mâu thuẫn, xung đột." },
    { id: "p8", type: "gap", prompt: "Each side accepts a little less to reach an agreement. This is a ___.",
      options: ["conflict", "compromise", "tension", "complaint"],
      answer: 1, explanation: "Compromise = thỏa hiệp, mỗi bên nhường một chút." },
    { id: "p9", type: "choice", prompt: "Which phrase politely disagrees?",
      options: ["You're wrong.", "I see your point, but I think we should talk first.", "That's stupid.", "I don't care."],
      answer: 1, explanation: "Ghi nhận ý người kia (I see your point) rồi nêu ý của mình là cách không đồng ý lịch sự." },
    { id: "p10", type: "choice", prompt: "Which phrase shows agreement?",
      options: ["That's a good compromise.", "I'm afraid I disagree.", "I'm not sure about that.", "That's not fair."],
      answer: 0, explanation: "“That's a good compromise” thể hiện sự đồng ý. Ba câu còn lại thể hiện không đồng ý hoặc chưa chắc." }
  ],

  writing: {
    title: "Give advice to a colleague",
    task: "Bạn là chị Lan. Đồng nghiệp tên Ha vừa nói cô đang bực vì có bất đồng với một đồng nghiệp trong nhóm về hạn nộp báo cáo. Viết email gửi Ha (80–120 từ): thể hiện sự thông cảm, ghi nhận quan điểm của cô (I see your point…), đưa lời khuyên bằng should, ought to và Why don't you…?, và nói bạn có thể hòa giải nếu cần.",
    requirements: [
      "Mở đầu bằng lời chào phù hợp.",
      "Có câu với should hoặc shouldn't.",
      "Có câu với ought to.",
      "Có câu với Why don't you…?",
      "Có câu không đồng ý lịch sự hoặc ghi nhận ý kiến (I see your point…).",
      "Kết thúc email và ký tên."
    ],
    minWords: 80,
    maxWords: 120,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Dear … / Hi …)", pattern: "\\bdear\\b|\\bhi\\b" },
      { label: "Có should / shouldn't", pattern: "\\bshould(n't|n’t)?\\b" },
      { label: "Có ought to", pattern: "\\bought to\\b" },
      { label: "Có Why don't you / Why not", pattern: "why (don't|don’t) you|why not" },
      { label: "Có I see your point / I agree to some extent", pattern: "i see your point|agree to some extent|i understand your" },
      { label: "Có lời kết (Best regards …)", pattern: "regards|sincerely|best wishes" }
    ],
    model: [
      "Dear Ha,",
      "I am sorry to hear about the disagreement with your teammate. That sounds stressful.",
      "I see your point that the deadline was unfair, but I think you should talk to him in person. You ought to listen to his side too, because there may be a misunderstanding. Why don't you invite him for a coffee this week? You shouldn't send a long email while you are still upset.",
      "If you can't agree, I can help you find a compromise. Please tell me how it goes.",
      "Best regards,",
      "Lan"
    ]
  },

  review: {
    keyPhrases: [
      { en: "You should talk to him face to face.", vi: "Bạn nên nói chuyện trực tiếp với anh ấy." },
      { en: "You ought to listen to his side too.", vi: "Bạn cũng nên lắng nghe phía anh ấy." },
      { en: "Why don't you start with something positive?", vi: "Sao bạn không bắt đầu bằng điều tích cực?" },
      { en: "I see your point, but I think we should talk first.", vi: "Tôi hiểu ý bạn, nhưng tôi nghĩ chúng ta nên nói chuyện trước." },
      { en: "That's a good compromise.", vi: "Đó là một thỏa hiệp tốt." },
      { en: "If you can't agree, I can mediate.", vi: "Nếu hai người không thống nhất được, tôi có thể hòa giải." }
    ]
  }
});
