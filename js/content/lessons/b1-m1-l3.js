/* =========================================================
   B1 · Module 1 (Recruitment and Interviewing) · Bài 3
   "Interview questions"
   Nối tiếp B1-M1-L2: David chọn 4 người để phỏng vấn (Thao, Quang,
   Huy, Dung). Thứ Hai 22/2/2027 (sau Tết) Lan, Tuấn và David soạn
   câu hỏi; thứ Ba 23/2 Tuấn gửi thư mời Thao. Phỏng vấn ở Room 301:
   thứ Năm 25/2 (Thao 9:30, Quang 11:00), thứ Sáu 26/2 (Huy 9:30, Dung 11:00).
   ========================================================= */
window.EOH.registerLesson({
  id: "b1-m1-l3",
  reviewStatus: "approved", // Linh duyệt ngày 23/10/2026
  duration: "40–50 phút",
  scenario: "Sau kỳ nghỉ Tết, David chọn bốn ứng viên để phỏng vấn vị trí Sales Executive. Sáng thứ Hai 22/2/2027, chị Lan, Tuấn và David họp ở Room 301 để chuẩn bị câu hỏi phỏng vấn. Hôm sau, Tuấn gửi thư mời phỏng vấn cho ứng viên đầu tiên.",

  objectives: [
    "Hiểu và dùng 10 từ vựng thường gặp khi chuẩn bị và tiến hành phỏng vấn.",
    "Nghe cuộc họp chuẩn bị phỏng vấn, ghi lại lịch phỏng vấn và loại câu hỏi nên dùng.",
    "Đọc thư mời phỏng vấn, tìm đúng thời gian, địa điểm, giấy tờ cần mang và việc cần trả lời.",
    "Đặt câu hỏi gián tiếp lịch sự (Could you tell me why you…? / I'd like to know if you…).",
    "Viết email mời phỏng vấn có ít nhất ba câu hỏi gián tiếp."
  ],

  vocabulary: [
    { word: "interview panel", ipa: "/ˈɪntərvjuː ˈpænəl/", pos: "noun", meaning: "hội đồng phỏng vấn (nhóm người cùng phỏng vấn)",
      example: "The interview panel is David and Lan.", exampleVi: "Hội đồng phỏng vấn gồm David và chị Lan." },
    { word: "ice-breaker", ipa: "/ˈaɪs ˌbreɪkər/", pos: "noun", meaning: "câu mở đầu nhẹ nhàng để ứng viên bớt căng thẳng",
      example: "“Did you find the office easily?” is a good ice-breaker.", exampleVi: "“Bạn có tìm văn phòng dễ không?” là một câu mở đầu tốt." },
    { word: "open question", ipa: "/ˈoʊpən ˈkwestʃən/", pos: "noun", meaning: "câu hỏi mở (cần trả lời dài, không chỉ có / không)",
      example: "An open question gives the candidate more space to talk.", exampleVi: "Câu hỏi mở cho ứng viên nhiều chỗ để nói hơn." },
    { word: "follow-up question", ipa: "/ˈfɑːloʊ ʌp ˈkwestʃən/", pos: "noun", meaning: "câu hỏi nối tiếp (hỏi thêm sau câu trả lời)",
      example: "After her answer, David asked a follow-up question.", exampleVi: "Sau câu trả lời của chị ấy, David hỏi thêm một câu nối tiếp." },
    { word: "motivation", ipa: "/ˌmoʊtəˈveɪʃən/", pos: "noun", meaning: "động lực, lý do muốn làm công việc này",
      example: "We want to understand the candidate's motivation.", exampleVi: "Chúng tôi muốn hiểu động lực của ứng viên." },
    { word: "achievement", ipa: "/əˈtʃiːvmənt/", pos: "noun", meaning: "thành tích, điều đã đạt được",
      example: "What is your biggest achievement at work?", exampleVi: "Thành tích lớn nhất của bạn trong công việc là gì?" },
    { word: "reason for leaving", ipa: "/ˈriːzən fɔːr ˈliːvɪŋ/", pos: "noun phrase", meaning: "lý do rời công ty hiện tại",
      example: "Tuan wrote her reason for leaving in his notes.", exampleVi: "Tuấn ghi lý do rời công ty của chị ấy vào ghi chú." },
    { word: "salary expectation", ipa: "/ˈsæləri ˌekspekˈteɪʃən/", pos: "noun", meaning: "mức lương mong muốn",
      example: "Could you tell me what your salary expectation is?", exampleVi: "Bạn có thể cho tôi biết mức lương mong muốn của bạn không?" },
    { word: "challenge", ipa: "/ˈtʃælɪndʒ/", pos: "noun", meaning: "thử thách, tình huống khó",
      example: "Could you describe a challenge you had with a client?", exampleVi: "Bạn có thể kể về một tình huống khó với khách hàng không?" },
    { word: "handle", ipa: "/ˈhændəl/", pos: "verb", meaning: "xử lý, giải quyết (tình huống, khách hàng)",
      example: "I'd like to know how you handle a difficult client.", exampleVi: "Tôi muốn biết bạn xử lý một khách hàng khó như thế nào." }
  ],

  pronunciation: {
    groups: [
      {
        title: "Trọng âm của từ",
        text: "Những từ dưới đây hay gặp trong buổi phỏng vấn. Âm tiết in hoa là âm đọc to và dài hơn.",
        items: [
          { word: "interview", marked: "IN·ter·view", note: "Danh từ: nhấn âm tiết đầu." },
          { word: "motivation", marked: "mo·ti·VA·tion", note: "Từ tận cùng bằng -tion: nhấn âm tiết ngay trước -tion." },
          { word: "achievement", marked: "a·CHIEVE·ment" },
          { word: "salary", marked: "SAL·a·ry" },
          { word: "challenge", marked: "CHAL·lenge" },
          { word: "expectation", marked: "ex·pec·TA·tion" }
        ]
      },
      {
        title: "Could you … đọc liền",
        text: "Trong câu hỏi lịch sự, “could you” thường đọc liền thành /ˈkʊdʒə/ và nhẹ. Từ quan trọng (tell, why, what…) được nhấn.",
        items: [
          { word: "Could you tell me", marked: "/KUD·jə/ TELL me", note: "Đọc “could you” như “cu-gio”, nhấn từ tell." },
          { word: "Do you know", marked: "/dʒə/ KNOW", note: "“Do you” thường nghe như “giờ”." }
        ]
      }
    ],
    sentences: [
      "Could you tell me why you want this job?",
      "I'd like to know how you handle a difficult client.",
      "Do you know when you could start?"
    ]
  },

  listening: {
    title: "Planning the interviews",
    setting: "Thứ Hai 22/2/2027, 10:00, Room 301. Chị Lan, Tuấn và David Brown chuẩn bị phỏng vấn bốn ứng viên.",
    speakers: { lan: "Lan (Senior HR Officer)", tuan: "Tuan (HR Assistant)", david: "David (Sales Manager)" },
    lines: [
      { s: "lan", text: "Thanks for joining us, David. Tuan and I would like to plan the interviews.",
        vi: "Cảm ơn anh đã tham gia, David. Tuấn và tôi muốn lên kế hoạch cho các buổi phỏng vấn." },
      { s: "david", text: "Good. Which candidates are we seeing?",
        vi: "Tốt. Chúng ta sẽ gặp những ứng viên nào?" },
      { s: "lan", text: "You chose four. On Thursday, Thao is at nine-thirty and Quang is at eleven. On Friday, Huy is at nine-thirty and Dung is at eleven. It's in Room three-oh-one.",
        vi: "Anh chọn bốn người. Thứ Năm, Thảo lúc chín giờ rưỡi và Quang lúc mười một giờ. Thứ Sáu, Huy lúc chín giờ rưỡi và Dũng lúc mười một giờ. Ở Room ba không một." },
      { s: "tuan", text: "I'll take notes. Should we start with an ice-breaker?",
        vi: "Em sẽ ghi chú. Chúng ta nên bắt đầu bằng một câu mở đầu nhẹ nhàng không ạ?" },
      { s: "lan", text: "Yes, something simple, like “Did you find the office easily?” Then we ask about their experience.",
        vi: "Có, một câu đơn giản như “Bạn có tìm văn phòng dễ không?” Sau đó chúng ta hỏi về kinh nghiệm của họ." },
      { s: "david", text: "I prefer open questions. Not “Do you like sales?” but “Could you tell me why you want this job?”",
        vi: "Tôi thích câu hỏi mở hơn. Không phải “Bạn có thích bán hàng không?” mà là “Bạn có thể cho tôi biết vì sao bạn muốn công việc này không?”" },
      { s: "tuan", text: "And for their current job? “Could you tell me why you want to leave your current company?”",
        vi: "Còn về công việc hiện tại thì sao ạ? “Bạn có thể cho tôi biết vì sao bạn muốn rời công ty hiện tại không?”" },
      { s: "lan", text: "Good. Then follow-up questions, for example, “Could you tell me how you handled a difficult client?”",
        vi: "Tốt. Sau đó là các câu hỏi nối tiếp, ví dụ “Bạn có thể cho tôi biết bạn đã xử lý một khách hàng khó như thế nào không?”" },
      { s: "david", text: "And I'd like to know what salary they expect. That's important for the offer.",
        vi: "Và tôi muốn biết họ mong muốn mức lương bao nhiêu. Điều đó quan trọng cho thư mời nhận việc." },
      { s: "lan", text: "One more thing. We must not ask about age, marriage or children. Only questions about the job.",
        vi: "Còn một điều nữa. Chúng ta không được hỏi về tuổi, hôn nhân hay con cái. Chỉ hỏi những câu liên quan đến công việc." },
      { s: "tuan", text: "Understood. I'll prepare a question sheet for the three of us.",
        vi: "Em hiểu rồi ạ. Em sẽ soạn một phiếu câu hỏi cho ba chúng ta." },
      { s: "lan", text: "Perfect. Please send it to us by Wednesday.",
        vi: "Tuyệt. Em gửi cho chúng tôi trước thứ Tư nhé." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "When is Quang's interview?",
        options: ["Thursday at 9:30", "Friday at 11:00", "Thursday at 11:00", "Friday at 9:30"],
        answer: 2, explanation: "Chị Lan nói: “On Thursday, Thao is at nine-thirty and Quang is at eleven.” Thứ Sáu là lịch của Huy (9:30) và Dung (11:00)." },
      { id: "l2", type: "choice", prompt: "What kind of questions does David prefer?",
        options: ["Yes / no questions like “Do you like sales?”", "Only questions about salary", "Open questions like “Could you tell me why you want this job?”", "He does not want to ask any questions"],
        answer: 2, explanation: "David nói: “I prefer open questions. Not ‘Do you like sales?’ but ‘Could you tell me why you want this job?’”" },
      { id: "l3", type: "choice", prompt: "What must the panel NOT ask about?",
        options: ["Experience in sales", "Why the candidate wants the job", "Salary expectation", "Age, marriage or children"],
        answer: 3, explanation: "Chị Lan nhắc: “We must not ask about age, marriage or children.” Ba mục còn lại đều là câu hỏi liên quan đến công việc nên được phép hỏi." }
    ]
  },

  reading: {
    title: "An interview invitation",
    intro: "Email Tuấn gửi chị Thảo Ngô vào thứ Ba 23/2/2027. Đọc và tìm thời gian, địa điểm, giấy tờ cần mang và những việc Tuấn cần chị trả lời.",
    email: {
      from: "Tuan Nguyen <tuan.nguyen@riverside-trading.example>",
      to: "Thao Ngo",
      date: "Tuesday, 23 February",
      subject: "Interview invitation – Sales Executive",
      greeting: "Dear Ms. Ngo,",
      paragraphs: [
        "Thank you for your application for the position of Sales Executive at Riverside Trading. We are pleased to invite you to an interview.",
        "The interview will take place on Thursday, 25 February, at 9:30 a.m. in Room 301 on the third floor. It will take about 45 minutes. The panel will be David Brown, our Sales Manager, and Lan Pham, our Senior HR Officer. Please bring:"
      ],
      list: [
        "your ID card",
        "copies of your degree and certificates",
        "the names and phone numbers of two referees"
      ],
      after: [
        "Could you let me know whether you can attend? I would also like to know if you need any help with parking, and could you tell me how much notice you need to give your current employer?",
        "Please reply by Wednesday, 24 February. I look forward to hearing from you."
      ],
      closing: "Best regards,",
      signature: ["Tuan Nguyen", "HR Assistant, Riverside Trading"]
    },
    glossary: [
      { term: "take place", vi: "diễn ra" },
      { term: "panel", vi: "hội đồng (nhóm người phỏng vấn)" },
      { term: "referee", vi: "người giới thiệu (người có thể xác nhận về bạn)" },
      { term: "notice", vi: "thời gian báo trước khi nghỉ việc" },
      { term: "I look forward to hearing from you", vi: "tôi mong nhận được phản hồi của bạn" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "Why is Tuan writing to Thao?",
        options: ["To offer her the job", "To tell her she has not been selected", "To invite her to an interview", "To ask her for a salary figure"],
        answer: 2, explanation: "“We are pleased to invite you to an interview.” Đây là thư mời phỏng vấn, chưa phải thư mời nhận việc." },
      { id: "r2", type: "choice", prompt: "What does Tuan ask Thao to do by Wednesday, 24 February?",
        options: ["Reply and say whether she can attend", "Bring her ID card to the office", "Call David Brown", "Send copies of her certificates by email"],
        answer: 0, explanation: "“Could you let me know whether you can attend? … Please reply by Wednesday, 24 February.” Giấy tờ thì chị mang đến vào ngày phỏng vấn (thứ Năm 25/2)." },
      { id: "r3", type: "choice", prompt: "Which statement is TRUE?",
        options: ["The interview is on Friday.", "The interview takes about 45 minutes.", "Tuan will interview Thao alone.", "Thao must bring two copies of her CV."],
        answer: 1, explanation: "“It will take about 45 minutes.” Phỏng vấn vào thứ Năm; hội đồng gồm David và chị Lan; thư không yêu cầu mang bản sao CV." }
    ]
  },

  grammar: {
    title: "Indirect questions",
    titleVi: "Câu hỏi gián tiếp (lịch sự)",
    intro: "Trong phỏng vấn và email, câu hỏi gián tiếp nghe lịch sự hơn câu hỏi trực tiếp. Bốn mẫu câu dưới đây có trong cuộc họp và thư mời bạn vừa học.",
    patterns: [
      { form: "Could you tell me / Do you know + từ để hỏi + chủ ngữ + động từ", use: "Sau từ để hỏi (why, what, when, where, how…) trật tự là câu khẳng định: không dùng do / does / did và không đảo chủ ngữ.",
        examples: ["Could you tell me why you want this job?", "Do you know when the interview starts?"] },
      { form: "Could you tell me / I'd like to know + if / whether + chủ ngữ + động từ", use: "Câu hỏi có / không (Do you…? Can you…?) đổi thành if hoặc whether khi hỏi gián tiếp.",
        examples: ["Could you tell me if you have a driving license?", "I would like to know whether you can start in April."] },
      { form: "Câu hỏi trực tiếp  →  gián tiếp: bỏ do / does / did", use: "Ở hiện tại đơn, ngôi thứ ba thêm -s trở lại: what she does. Ở quá khứ đơn, dùng động từ quá khứ: why you left.",
        examples: ["What does she do?  →  Could you tell me what she does?", "Why did you leave?  →  Could you tell me why you left?"] },
      { form: "I was wondering if you could… / I'd like to ask…", use: "Mẫu rất lịch sự khi nhờ hoặc hỏi người chưa quen, thường dùng trong email.",
        examples: ["I was wondering if you could send us your CV.", "I would also like to know if you need parking."] }
    ],
    mistakes: [
      { wrong: "Could you tell me why do you want this job?", right: "Could you tell me why you want this job?", note: "Hỏi gián tiếp không dùng do / does / did sau từ để hỏi." },
      { wrong: "Could you tell me do you have a driving license?", right: "Could you tell me if you have a driving license?", note: "Câu hỏi có / không phải có if hoặc whether." },
      { wrong: "Could you tell me where is Room 301?", right: "Could you tell me where Room 301 is?", note: "Chủ ngữ (Room 301) đứng trước động từ (is), không đảo." },
      { wrong: "Could you tell me why you did leave your last job?", right: "Could you tell me why you left your last job?", note: "Không dùng did; dùng thẳng dạng quá khứ của động từ." }
    ],
    tip: "Câu hỏi trực tiếp (Why do you want this job?) vẫn đúng, nhưng dễ nghe như bị tra hỏi, nhất là qua email. Dùng câu gián tiếp khi hỏi về việc nhạy cảm như lương, lý do rời công ty hay thời điểm có thể đi làm. Lưu ý: chỉ hỏi những điều liên quan đến công việc; không hỏi về tuổi, hôn nhân hay con cái."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "Could you tell me why ___ this job?",
      options: ["do you want", "you want", "want you", "are you want"],
      answer: 1, explanation: "Hỏi gián tiếp: từ để hỏi + chủ ngữ + động từ (why you want). Không dùng “do you want” và không đảo chủ ngữ." },
    { id: "p2", type: "gap", prompt: "I'd like to know ___ you have a driving license.",
      options: ["that", "what", "if", "do"],
      answer: 2, explanation: "Câu hỏi có / không (Do you have…?) đổi thành if hoặc whether khi hỏi gián tiếp." },
    { id: "p3", type: "choice", prompt: "Which sentence is correct?",
      options: ["Could you tell me where is Room 301?", "Could you tell me where does Room 301 be?", "Could you tell me Room 301 where is?", "Could you tell me where Room 301 is?"],
      answer: 3, explanation: "Sau where, chủ ngữ Room 301 đứng trước động từ is. Các câu còn lại đảo trật tự hoặc dùng do / does không cần thiết." },
    { id: "p4", type: "gap", prompt: "Direct: “What time does the interview start?” — Indirect: Do you know what time the interview ___?",
      options: ["start", "does start", "starts", "is start"],
      answer: 2, explanation: "Bỏ does, động từ trở về dạng có -s vì chủ ngữ the interview là ngôi thứ ba số ít: the interview starts." },
    { id: "p5", type: "gap", prompt: "Direct: “Why did you leave your last job?” — Indirect: Could you tell me why you ___ your last job?",
      options: ["left", "leave", "did leave", "leaving"],
      answer: 0, explanation: "Bỏ did và dùng động từ ở quá khứ đơn: why you left. “leave” sai thì; “did leave” vẫn còn did." },
    { id: "p6", type: "gap", prompt: "“Could you describe your last job?” needs a long answer, so it is an ___ question.",
      options: ["open", "closed", "short", "direct"],
      answer: 0, explanation: "Câu hỏi cần trả lời dài, không chỉ có / không, gọi là open question (câu hỏi mở). Closed question chỉ cần trả lời ngắn như yes / no." },
    { id: "p7", type: "gap", prompt: "After Thao answers, David asks a ___ question: “Could you give me an example?”",
      options: ["closed", "salary", "ice-breaker", "follow-up"],
      answer: 3, explanation: "Câu hỏi hỏi thêm sau câu trả lời là follow-up question. Ice-breaker là câu mở đầu, hỏi ở đầu buổi phỏng vấn." },
    { id: "p8", type: "choice", context: "A candidate says: “I want to leave because I'd like more responsibility.”", prompt: "Which question did the panel ask?",
      options: ["Could you tell me what your salary expectation is?", "Do you know where Room 301 is?", "Could you tell me why you want to leave your current company?", "Could you tell me if you have a driving license?"],
      answer: 2, explanation: "Câu trả lời giải thích lý do rời công ty hiện tại, nên câu hỏi phù hợp là về lý do rời công ty (reason for leaving)." },
    { id: "p9", type: "gap", prompt: "I was wondering ___ you could send us your CV.",
      options: ["that", "if", "what", "do"],
      answer: 1, explanation: "I was wondering if you could… là mẫu lịch sự. Sau wondering, dùng if (không dùng that / what / do)." },
    { id: "p10", type: "choice", prompt: "Which question is NOT appropriate in a job interview?",
      options: ["Could you tell me about your last job?", "Could you tell me how old your children are?", "Could you tell me why you want this job?", "Could you tell me when you could start?"],
      answer: 1, explanation: "Câu hỏi về con cái không liên quan đến công việc và không nên hỏi. Ba câu còn lại hỏi về công việc, động lực và thời gian bắt đầu." }
  ],

  writing: {
    title: "Invite a candidate to an interview",
    task: "Bạn là Tuấn. Viết email gửi anh Dung Pham (80–120 từ) mời anh đến phỏng vấn vị trí Sales Executive: thứ Sáu 26/2, 11:00, Room 301, khoảng 45 phút. Nhờ anh mang chứng minh thư và bản sao chứng chỉ. Hỏi anh bằng câu hỏi gián tiếp: anh có thể đến không, anh có cần chỗ đậu xe không, và anh phải báo trước bao lâu cho công ty hiện tại.",
    requirements: [
      "Mở đầu bằng lời chào phù hợp (Dear Mr. Pham,).",
      "Nêu ngày, giờ và nơi phỏng vấn.",
      "Có ít nhất một câu bắt đầu bằng Could you tell me / I would like to know + từ để hỏi (how, when…).",
      "Có ít nhất một câu hỏi gián tiếp dùng if hoặc whether.",
      "Nhắc anh mang giấy tờ cần thiết.",
      "Kết thúc email và ký tên."
    ],
    minWords: 80,
    maxWords: 120,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Dear … / Hi …)", pattern: "\\bdear\\b|\\bhi\\b" },
      { label: "Nêu ngày giờ phỏng vấn (Friday / 26 February)", pattern: "\\bfriday\\b|26 february|february 26" },
      { label: "Có mẫu hỏi gián tiếp (Could you tell me / I would like to know)", pattern: "\\b(could you tell me|i would (also )?like to know|i'd like to know|do you know|i was wondering)\\b" },
      { label: "Có từ để hỏi sau mẫu đó (how / when / where / why / what)", pattern: "(tell me|know|wondering) (how|when|where|why|what)\\b" },
      { label: "Có câu hỏi gián tiếp với if / whether", pattern: "\\b(if|whether)\\b" },
      { label: "Có lời kết (Best regards …)", pattern: "regards|sincerely|best wishes" }
    ],
    model: [
      "Dear Mr. Pham,",
      "Thank you for your application. We would like to invite you to an interview on Friday, 26 February, at 11:00 a.m. in Room 301. The interview will take about 45 minutes.",
      "Could you tell me whether you can attend? I would also like to know if you need parking, and could you tell me how much notice you need to give your current employer? Please bring your ID card and copies of your certificates.",
      "I look forward to hearing from you.",
      "Best regards,",
      "Tuan Nguyen"
    ]
  },

  review: {
    keyPhrases: [
      { en: "Could you tell me why you want this job?", vi: "Bạn có thể cho tôi biết vì sao bạn muốn công việc này không?" },
      { en: "I'd like to know how you handle a difficult client.", vi: "Tôi muốn biết bạn xử lý một khách hàng khó như thế nào." },
      { en: "Could you tell me if you have a driving license?", vi: "Bạn có thể cho tôi biết bạn có bằng lái xe không?" },
      { en: "Do you know when you could start?", vi: "Bạn có biết khi nào bạn có thể bắt đầu đi làm không?" },
      { en: "We must not ask about age, marriage or children.", vi: "Chúng ta không được hỏi về tuổi, hôn nhân hay con cái." },
      { en: "I look forward to hearing from you.", vi: "Tôi mong nhận được phản hồi của anh/chị." }
    ]
  }
});
