/* =========================================================
   C1 · Module 1 (Strategic HR Management) · Bài 3
   "Talent management and succession"
   Nối tiếp C1-M1-L2. Chị Grace Le (HR Director) và chị Lan làm buổi
   đánh giá nhân tài (talent review) cho các vị trí then chốt:
   - Chief Accountant (chị Ngoc Dang): chị Ngoc nói với Grace rằng chị dự
     định nghỉ hưu sau khoảng ba năm. Người kế nhiệm tiềm năng: Hoa Tran
     (Senior Accountant, làm công ty đã lâu, rất giỏi chuyên môn, mới đi
     đào tạo quản lý cơ bản; sẵn sàng sau khoảng 2 năm). Rủi ro: Hoa có
     thể bị công ty khác săn đón (flight risk).
   - Logistics Manager (anh Son Bui): anh Son sẽ chuyển sang phụ trách
     trung tâm Hải Phòng. Người thay ở kho hiện tại: Hung Cao (Logistics
     Supervisor, nhân vật mới), sẵn sàng sau khoảng một năm; cần giao
     nhiệm vụ thử thách (stretch assignment) và chuyển giao kiến thức.
   - Sales Manager (anh David): dự kiến chưa cần kế nhiệm.
   Hành động: kế hoạch phát triển cho Hoa (khóa quản lý, tham gia lập
   ngân sách cùng chị Ngoc, một nhiệm vụ thử thách); stay interview với
   Hoa; Hung Cao dẫn dắt ca muộn và cùng anh Son quản lý một dự án nhỏ.
   Thông tin mang tính bảo mật.
   Ngữ pháp: đảo ngữ nhấn mạnh (Not only…, Rarely…, Never before…, Under
   no circumstances…, Only when…).
   Thời gian nói áng chừng.
   ========================================================= */
window.EOH.registerLesson({
  id: "c1-m1-l3",
  reviewStatus: "draft",
  duration: "45–60 phút",
  scenario: "Chị Grace Le (HR Director) và chị Lan làm buổi đánh giá nhân tài cho các vị trí then chốt. Chị Ngoc Dang (Kế toán trưởng) dự định nghỉ hưu sau khoảng ba năm, và anh Son sắp chuyển sang trung tâm Hải Phòng. Hai chị tìm người kế nhiệm, đánh giá mức sẵn sàng và rủi ro mất người, rồi lập kế hoạch phát triển. Sau đó chị Grace gửi tóm tắt bảo mật cho Tổng Giám đốc.",

  objectives: [
    "Hiểu và dùng 10 từ vựng thường gặp khi quản lý nhân tài và kế thừa.",
    "Nghe cuộc đánh giá nhân tài, nhận ra người kế nhiệm tiềm năng, mức sẵn sàng và rủi ro.",
    "Đọc email tóm tắt bảo mật về kế hoạch kế nhiệm.",
    "Dùng đảo ngữ để nhấn mạnh: Not only… but also…; Rarely / Never before / Seldom + trợ động từ + chủ ngữ; Under no circumstances should…; Only when / Only after… do / does…",
    "Viết email tóm tắt đánh giá nhân tài, nhấn mạnh điểm mạnh và rủi ro bằng đảo ngữ."
  ],

  vocabulary: [
    { word: "succession plan", ipa: "/səkˈseʃən plæn/", pos: "noun", meaning: "kế hoạch kế nhiệm",
      example: "Every critical role needs a succession plan.", exampleVi: "Mọi vị trí then chốt đều cần kế hoạch kế nhiệm." },
    { word: "talent review", ipa: "/ˈtælənt rɪˌvjuː/", pos: "noun", meaning: "buổi đánh giá nhân tài",
      example: "We hold a talent review once a year.", exampleVi: "Mỗi năm chúng tôi tổ chức một buổi đánh giá nhân tài." },
    { word: "high-potential", ipa: "/ˌhaɪ pəˈtenʃəl/", pos: "adjective", meaning: "có tiềm năng cao",
      example: "Hoa is a high-potential employee.", exampleVi: "Hoa là nhân viên có tiềm năng cao." },
    { word: "critical role", ipa: "/ˌkrɪtɪkəl ˈroʊl/", pos: "noun", meaning: "vị trí then chốt",
      example: "The Chief Accountant is a critical role.", exampleVi: "Kế toán trưởng là vị trí then chốt." },
    { word: "readiness", ipa: "/ˈredinəs/", pos: "noun", meaning: "mức sẵn sàng",
      example: "We assess each successor's readiness.", exampleVi: "Chúng tôi đánh giá mức sẵn sàng của từng người kế nhiệm." },
    { word: "bench strength", ipa: "/ˈbentʃ streŋθ/", pos: "noun", meaning: "lực lượng kế cận (số người có thể thay khi cần)",
      example: "Our bench strength in Logistics is weak.", exampleVi: "Lực lượng kế cận của chúng ta ở Logistics còn yếu." },
    { word: "flight risk", ipa: "/ˈflaɪt rɪsk/", pos: "noun", meaning: "người có nguy cơ rời công ty",
      example: "She may be a flight risk if we ignore her.", exampleVi: "Chị ấy có thể có nguy cơ rời đi nếu chúng ta bỏ qua." },
    { word: "poach", ipa: "/poʊtʃ/", pos: "verb", meaning: "săn người (lôi kéo nhân viên từ công ty khác)",
      example: "Competitors will try to poach our best people.", exampleVi: "Các đối thủ sẽ tìm cách săn những người giỏi nhất của chúng ta." },
    { word: "stretch assignment", ipa: "/ˈstretʃ əˌsaɪnmənt/", pos: "noun", meaning: "nhiệm vụ thử thách, vượt khả năng hiện tại một chút",
      example: "A stretch assignment will prepare him for the role.", exampleVi: "Một nhiệm vụ thử thách sẽ chuẩn bị cho anh ấy vào vị trí đó." },
    { word: "knowledge transfer", ipa: "/ˈnɑːlɪdʒ ˌtrænsfɜːr/", pos: "noun", meaning: "chuyển giao kiến thức",
      example: "Knowledge transfer must start before the handover.", exampleVi: "Việc chuyển giao kiến thức phải bắt đầu trước khi bàn giao." }
  ],

  pronunciation: {
    groups: [
      {
        title: "Ngữ điệu của đảo ngữ",
        text: "Trong câu đảo ngữ, nhấn từ phủ định đầu câu rồi ngừng nhẹ (|). Âm tiết in hoa là âm đọc to và dài hơn.",
        items: [
          { word: "Not only is she skilled…", marked: "NOT ON·ly | is she SKILLED…" },
          { word: "Rarely have we seen…", marked: "RARE·ly | have we SEEN…" },
          { word: "Under no circumstances should…", marked: "UN·der NO CIR·cum·stan·ces | should…" },
          { word: "Only then do we decide.", marked: "ON·ly THEN | do we de·CIDE." }
        ]
      },
      {
        title: "Trọng âm từ",
        text: "Những từ hay gặp khi nói về kế nhiệm.",
        items: [
          { word: "succession", marked: "suc·CES·sion" },
          { word: "readiness", marked: "READ·i·ness" },
          { word: "successor", marked: "suc·CES·sor" }
        ]
      }
    ],
    sentences: [
      "Not only is Hoa technically excellent, but she also works well with other teams.",
      "Rarely have we seen such strong potential in a junior manager.",
      "Under no circumstances should this information be shared outside HR."
    ]
  },

  listening: {
    title: "The talent review",
    setting: "Phòng họp nhỏ. Chị Grace Le (HR Director) và chị Lan (HR Manager) đánh giá nhân tài cho các vị trí then chốt.",
    speakers: { grace: "Grace (HR Director)", lan: "Lan (HR Manager)" },
    lines: [
      { s: "grace", text: "Lan, let's start with the Chief Accountant. Ngoc has told me she plans to retire in about three years.",
        vi: "Lan, mình bắt đầu với Kế toán trưởng. Chị Ngọc nói với chị là chị ấy dự định nghỉ hưu sau khoảng ba năm." },
      { s: "lan", text: "That's a critical role, and I'm afraid we have no ready successor today. Who do you have in mind?",
        vi: "Đó là vị trí then chốt, và em e rằng hiện nay chưa có người kế nhiệm sẵn sàng. Chị nghĩ đến ai?" },
      { s: "grace", text: "Hoa Tran. Not only is she technically excellent, but she also gets on very well with the sales team.",
        vi: "Hoa Tran. Không những chuyên môn của cô ấy xuất sắc, mà cô ấy còn rất hòa hợp với nhóm kinh doanh." },
      { s: "lan", text: "I agree. Rarely have I seen an accountant who explains numbers so clearly to non-financial colleagues.",
        vi: "Em đồng ý. Hiếm khi em thấy một kế toán giải thích số liệu rõ ràng cho đồng nghiệp ngoài ngành tài chính như vậy." },
      { s: "grace", text: "But she isn't ready yet. I'd estimate two years. She needs experience in budgeting and managing people.",
        vi: "Nhưng cô ấy chưa sẵn sàng. Chị ước tính hai năm. Cô ấy cần kinh nghiệm lập ngân sách và quản lý người." },
      { s: "lan", text: "We could give her a stretch assignment, for example, helping Ngoc prepare next year's budget.",
        vi: "Mình có thể giao cô ấy một nhiệm vụ thử thách, ví dụ giúp chị Ngọc lập ngân sách năm sau." },
      { s: "grace", text: "Good idea. We also have to think about risk. Never before has the market for senior accountants been so competitive. Hoa could easily be poached.",
        vi: "Ý hay. Mình cũng phải nghĩ đến rủi ro. Chưa bao giờ thị trường kế toán cấp cao cạnh tranh đến vậy. Hoa có thể dễ bị săn đón." },
      { s: "lan", text: "So she's a flight risk. I'll arrange a stay interview with her next month.",
        vi: "Vậy cô ấy là người có nguy cơ rời đi. Em sẽ sắp xếp một buổi trò chuyện giữ chân với cô ấy tháng sau." },
      { s: "grace", text: "Please do. And under no circumstances should she hear about the succession plan from anyone else. Only when she has heard it from us can we really talk about her future.",
        vi: "Em làm đi. Và trong mọi hoàn cảnh, cô ấy không được nghe về kế hoạch kế nhiệm từ ai khác. Chỉ khi cô ấy nghe điều đó từ mình thì mình mới thật sự bàn về tương lai của cô ấy." },
      { s: "lan", text: "Understood. Now, Logistics. Son is moving to the Hai Phong hub, so who will run the current warehouse?",
        vi: "Em hiểu. Giờ đến Logistics. Anh Sơn sẽ chuyển sang trung tâm Hải Phòng, vậy ai sẽ quản lý kho hiện tại?" },
      { s: "grace", text: "Hung Cao, the Logistics Supervisor. He's ready in about a year. Seldom do we find someone who combines operational skills with such a positive attitude.",
        vi: "Hùng Cao, Giám sát Logistics. Anh ấy sẵn sàng sau khoảng một năm. Hiếm khi mình tìm được người vừa có kỹ năng vận hành vừa có thái độ tích cực như vậy." },
      { s: "lan", text: "But our bench strength in Logistics is weak. If Hung moves up, there is nobody behind him.",
        vi: "Nhưng lực lượng kế cận ở Logistics còn yếu. Nếu Hùng lên thì không còn ai phía sau." },
      { s: "grace", text: "That's why knowledge transfer must start now. Son should work with Hung on a small project every month.",
        vi: "Vì vậy việc chuyển giao kiến thức phải bắt đầu ngay. Anh Sơn nên cùng Hùng làm một dự án nhỏ mỗi tháng." },
      { s: "lan", text: "I'll write up the plan and send you a confidential summary for the General Director.",
        vi: "Em sẽ viết kế hoạch và gửi chị bản tóm tắt bảo mật cho Tổng Giám đốc." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "Why isn't Hoa ready to become Chief Accountant yet?",
        options: ["She is not good at accounting.", "She needs experience in budgeting and managing people.", "She doesn't want the job.", "She is leaving the company."],
        answer: 1, explanation: "“She needs experience in budgeting and managing people.” Chị Grace khen chuyên môn của Hoa, nên A sai." },
      { id: "l2", type: "choice", prompt: "Why is Hoa described as a 'flight risk'?",
        options: ["She has been late to work.", "She has asked for a new job.", "The market for senior accountants is very competitive and she could be poached.", "She dislikes the sales team."],
        answer: 2, explanation: "“Never before has the market for senior accountants been so competitive. Hoa could easily be poached.”" },
      { id: "l3", type: "choice", prompt: "What does Grace say about who should tell Hoa about the succession plan?",
        options: ["Ngoc should tell her.", "The General Director should tell her.", "She will find out by herself.", "HR should tell her; she should not hear it from anyone else."],
        answer: 3, explanation: "“Under no circumstances should she hear about the succession plan from anyone else.” Phải là phòng Nhân sự nói với cô ấy trước." }
    ]
  },

  reading: {
    title: "Talent review: confidential summary",
    intro: "Email bảo mật chị Grace gửi Tổng Giám đốc. Đọc và tìm người kế nhiệm, mức sẵn sàng và các hành động.",
    email: {
      from: "Grace Le <grace.le@riverside-trading.example>",
      to: "General Director",
      date: "Wednesday",
      subject: "Talent review: confidential summary",
      greeting: "Dear Mr. Director,",
      paragraphs: [
        "Please find below a confidential summary of this year's talent review for our critical roles. I would be grateful if you could treat it as strictly confidential, as under no circumstances should the names below be discussed outside the HR and executive teams.",
        "Chief Accountant: Ngoc Dang has informed me that she intends to retire in about three years. Our strongest internal candidate is Hoa Tran, Senior Accountant. Not only does she have excellent technical knowledge, but she is also highly respected by colleagues in Sales. Her estimated readiness is two years. However, as senior accountants are in high demand, she is considered a potential flight risk.",
        "Logistics Manager: Son Bui will move to the Hai Phong hub. His proposed successor is Hung Cao, the Logistics Supervisor, whose estimated readiness is one year. Rarely have we seen such a combination of operational skills and positive attitude. However, our bench strength in Logistics is limited, so we will need to develop at least one more candidate.",
        "Sales Manager: no succession need has been identified for the moment."
      ],
      list: [
        "Hoa Tran: a stretch assignment in next year's budget process; a basic management program; a stay interview with HR next month.",
        "Hung Cao: leadership of the late shift; one joint project per month with Son Bui to ensure knowledge transfer.",
        "HR: to identify a second Logistics candidate and report back at the next review."
      ],
      after: [
        "Only when these individuals have been informed by HR will the plan be communicated more widely. I would welcome your comments."
      ],
      closing: "With kind regards,",
      signature: ["Grace Le", "HR Director, Riverside Trading"]
    },
    glossary: [
      { term: "strictly confidential", vi: "tuyệt đối bảo mật" },
      { term: "in high demand", vi: "đang rất được săn đón" },
      { term: "for the moment", vi: "hiện tại" },
      { term: "joint", vi: "chung, cùng nhau" },
      { term: "report back", vi: "báo cáo lại" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "What is Hoa Tran's estimated readiness for the Chief Accountant role?",
        options: ["One year", "Three years", "She is ready now", "Two years"],
        answer: 3, explanation: "“Her estimated readiness is two years.” Một năm là mức sẵn sàng của Hùng Cao." },
      { id: "r2", type: "choice", prompt: "Why does Grace say HR must develop one more Logistics candidate?",
        options: ["Hung Cao is going to leave.", "The bench strength in Logistics is limited.", "Son Bui doesn't like Hung.", "The hub needs more managers."],
        answer: 1, explanation: "“…our bench strength in Logistics is limited, so we will need to develop at least one more candidate.”" },
      { id: "r3", type: "choice", prompt: "When will the plan be communicated more widely?",
        options: ["Immediately", "After the budget is approved", "Only when the individuals have been informed by HR", "At the end of the year"],
        answer: 2, explanation: "“Only when these individuals have been informed by HR will the plan be communicated more widely.”" }
    ]
  },

  grammar: {
    title: "Inversion for emphasis",
    titleVi: "Đảo ngữ để nhấn mạnh",
    intro: "Để nhấn mạnh trong văn nói trang trọng và văn viết, ta đưa từ phủ định hoặc từ hạn chế lên đầu câu và đảo trợ động từ lên trước chủ ngữ. Bốn mẫu dưới đây có trong cuộc đánh giá và email bạn vừa học.",
    patterns: [
      { form: "Not only + trợ động từ + chủ ngữ + V, but … also …", use: "Nhấn hai điểm mạnh liền nhau.",
        examples: ["Not only is Hoa technically excellent, but she also gets on well with the sales team.", "Not only does she know the numbers, but she also explains them clearly."] },
      { form: "Rarely / Seldom / Never (before) + trợ động từ + chủ ngữ + V3", use: "Nhấn điều hiếm, chưa từng có.",
        examples: ["Rarely have I seen an accountant who explains numbers so clearly.", "Never before has the market been so competitive."] },
      { form: "Under no circumstances / On no account + should / must / can + chủ ngữ + V", use: "Cấm tuyệt đối. Rất trang trọng.",
        examples: ["Under no circumstances should she hear about the plan from anyone else.", "On no account must this summary be shared outside HR."] },
      { form: "Only when / Only after / Only if + mệnh đề, + trợ động từ + chủ ngữ + V", use: "Nhấn điều kiện duy nhất.",
        examples: ["Only when she has heard it from us can we talk about her future.", "Only after the stay interview will we finalize her development plan."] }
    ],
    mistakes: [
      { wrong: "Not only she is skilled, but she is also kind.", right: "Not only is she skilled, but she is also kind.", note: "Sau Not only phải đảo: is she." },
      { wrong: "Rarely we have seen such potential.", right: "Rarely have we seen such potential.", note: "Sau Rarely phải đảo trợ động từ lên trước chủ ngữ." },
      { wrong: "Under no circumstances she should share this.", right: "Under no circumstances should she share this.", note: "Đảo should lên trước chủ ngữ." },
      { wrong: "Only when she hears it from us, we can talk about her future.", right: "Only when she hears it from us can we talk about her future.", note: "Đảo ở vế chính, sau mệnh đề với Only when." }
    ],
    tip: "Đảo ngữ rất mạnh nên chỉ dùng một hai lần trong một văn bản. Dùng quá nhiều sẽ nghe khoa trương. Trong bản đánh giá nhân tài, dùng đảo ngữ để nhấn điểm mạnh nổi bật nhất và các quy tắc bảo mật."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "Not only ___ she technically excellent, but she also works well with others.",
      options: ["is", "does", "has", "was being"],
      answer: 0, explanation: "Đảo ngữ với be: Not only is she technically excellent." },
    { id: "p2", type: "gap", prompt: "Rarely ___ we seen such strong potential in a junior manager.",
      options: ["did", "are", "have", "do"],
      answer: 2, explanation: "Rarely have we seen = present perfect đảo ngữ." },
    { id: "p3", type: "gap", prompt: "Under no circumstances ___ this information be shared outside HR.",
      options: ["is", "should", "do", "will be"],
      answer: 1, explanation: "Under no circumstances + should + chủ ngữ + V." },
    { id: "p4", type: "choice", prompt: "Which sentence is correct?",
      options: ["Never before the market has been so competitive.", "Never before has been the market so competitive.", "Never before has the market been so competitive.", "Never before the market was so competitive."],
      answer: 2, explanation: "Never before + has + chủ ngữ + been. Đảo has lên trước the market." },
    { id: "p5", type: "gap", prompt: "Only when she has heard it from HR ___ talk about her future.",
      options: ["we can", "do we can", "can't we", "can we"],
      answer: 3, explanation: "Only when … + trợ động từ + chủ ngữ: can we talk. “we can” chưa đảo ngữ; “do we can” sai vì hai trợ động từ." },
    { id: "p6", type: "choice", prompt: "Which sentence emphasizes that something is very uncommon?",
      options: ["Seldom do we find someone with such a positive attitude.", "We often find someone with such a positive attitude.", "We find someone with such a positive attitude.", "We can find someone with such a positive attitude."],
      answer: 0, explanation: "Seldom do we find… nhấn điều hiếm khi xảy ra." },
    { id: "p7", type: "gap", prompt: "A ___ role, such as the Chief Accountant, needs a succession plan.",
      options: ["flight", "critical", "stretch", "poached"],
      answer: 1, explanation: "critical role = vị trí then chốt." },
    { id: "p8", type: "gap", prompt: "Competitors may try to ___ our best accountants.",
      options: ["poach", "stretch", "review", "transfer"],
      answer: 0, explanation: "poach = săn người từ công ty khác." },
    { id: "p9", type: "gap", prompt: "Our ___ strength in Logistics is weak: if Hung moves up, nobody is behind him.",
      options: ["knowledge", "bench", "flight", "talent"],
      answer: 1, explanation: "bench strength = lực lượng kế cận." },
    { id: "p10", type: "gap", prompt: "A ___ assignment helps a successor to grow before taking the role.",
      options: ["stretch", "flight", "critical", "readiness"],
      answer: 0, explanation: "stretch assignment = nhiệm vụ thử thách." }
  ],

  writing: {
    title: "Write a talent review summary",
    task: "Bạn là chị Lan. Viết email bảo mật (150–220 từ) gửi chị Grace về ứng viên kế nhiệm cho vị trí Trưởng nhóm Nhân sự mà bạn đang giữ trong vài năm tới. Ứng viên: anh Tuấn Nguyen (HR Executive): giỏi tuyển dụng và rất được đồng nghiệp tin cậy; sẵn sàng sau khoảng ba năm; cần kinh nghiệm xử lý quan hệ lao động và làm việc với ban điều hành; kế hoạch: tham gia các buổi họp ban điều hành, phụ trách một dự án quan hệ lao động. Có nguy cơ rời đi nếu không có cơ hội phát triển. Dùng đảo ngữ để nhấn điểm mạnh và quy tắc bảo mật.",
    requirements: [
      "Mở đầu bằng lời chào và nêu tính bảo mật.",
      "Dùng Not only + trợ động từ + chủ ngữ… but also…",
      "Dùng Rarely / Seldom / Never before + trợ động từ + chủ ngữ.",
      "Dùng Under no circumstances should… hoặc Only when… do / can…",
      "Nêu mức sẵn sàng và kế hoạch phát triển (stretch assignment).",
      "Kết thúc email và ký tên."
    ],
    minWords: 150,
    maxWords: 220,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Dear … / Hi …)", pattern: "\\bdear\\b|\\bhi\\b" },
      { label: "Có Not only + trợ động từ + chủ ngữ", pattern: "not only (is|are|does|do|did|has|have|had|can|will)\\b" },
      { label: "Có Rarely / Seldom / Never before + trợ động từ", pattern: "(rarely|seldom|never before) (is|are|does|do|did|has|have|had|can|will)\\b" },
      { label: "Có Under no circumstances / Only when / Only after", pattern: "under no circumstances|only when|only after|only if" },
      { label: "Có kế hoạch phát triển (stretch assignment / development)", pattern: "stretch assignment|development|readiness" },
      { label: "Có lời kết (Best regards …)", pattern: "regards|sincerely|best wishes" }
    ],
    model: [
      "Dear Grace,",
      "Please find below my confidential assessment of a possible successor for my own role. Under no circumstances should this email be forwarded outside the HR and executive teams.",
      "The strongest internal candidate is Tuan Nguyen, our HR Executive. Not only has he built an excellent recruitment process, but he is also trusted by colleagues across the company. Rarely have I seen a junior professional who combines such analytical skill with real empathy.",
      "However, Tuan is not ready yet. I estimate that his readiness is about three years. He needs more experience in employee relations and in presenting to senior managers.",
      "I propose a development plan with two actions: first, a stretch assignment leading a small employee relations project; second, regular attendance at executive committee meetings as an observer.",
      "There is also a risk that Tuan could leave if he does not see a clear path. Only when he has discussed his future with us can we expect real commitment from him.",
      "I would welcome your comments.",
      "Best regards,",
      "Lan"
    ]
  },

  review: {
    keyPhrases: [
      { en: "Not only is she technically excellent, but she also works well with others.", vi: "Không những chuyên môn xuất sắc, cô ấy còn làm việc tốt với người khác." },
      { en: "Rarely have I seen such clear communication.", vi: "Hiếm khi tôi thấy cách giao tiếp rõ ràng đến vậy." },
      { en: "Under no circumstances should this be shared outside HR.", vi: "Trong mọi hoàn cảnh, không được chia sẻ điều này ngoài phòng Nhân sự." },
      { en: "Only when she has heard it from us can we talk about her future.", vi: "Chỉ khi cô ấy nghe từ chúng ta thì mới bàn về tương lai của cô ấy." },
      { en: "A stretch assignment will prepare her for the role.", vi: "Một nhiệm vụ thử thách sẽ chuẩn bị cho cô ấy vào vị trí đó." },
      { en: "Our bench strength in Logistics is weak.", vi: "Lực lượng kế cận ở Logistics còn yếu." }
    ]
  }
});
