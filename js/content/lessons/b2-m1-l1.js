/* =========================================================
   B2 · Module 1 (Advanced Recruitment) · Bài 1
   "Employer branding"
   Nối tiếp B1: sang năm sau, chị Lan là HR Manager. Công ty định tuyển
   sáu nhân viên kinh doanh; năm ngoái ba ứng viên từ chối lời mời (hai
   người ít biết về công ty, một người chọn đối thủ lớn hơn). Lan, Tuấn
   (HR Executive) và David họp để xây dựng thương hiệu nhà tuyển dụng:
   trang tuyển dụng trung thực, câu chuyện của Thảo, cam kết trả lời
   mọi ứng viên trong năm ngày làm việc. Thời gian nói áng chừng.
   ========================================================= */
window.EOH.registerLesson({
  id: "b2-m1-l1",
  reviewStatus: "approved", // Linh duyệt ngày 24/10/2026
  duration: "45–60 phút",
  scenario: "Sang năm sau, chị Lan đã là HR Manager. Công ty định tuyển sáu nhân viên kinh doanh mới, nhưng năm ngoái ba ứng viên đã từ chối lời mời: hai người ít biết về Riverside Trading và một người chọn đối thủ lớn hơn. Chị Lan, Tuấn (HR Executive) và David họp để xây dựng thương hiệu nhà tuyển dụng, rồi chị Lan gửi David bản kế hoạch.",

  objectives: [
    "Hiểu và dùng 10 từ vựng thường gặp khi xây dựng thương hiệu nhà tuyển dụng.",
    "Nghe cuộc họp bàn về uy tín công ty và trải nghiệm của ứng viên, ghi lại nguyên nhân và các giải pháp.",
    "Đọc email kế hoạch thương hiệu nhà tuyển dụng, tìm đúng thông điệp chính, bốn phần của kế hoạch và lưu ý quan trọng.",
    "Dùng not only … but also (kể cả dạng đảo ngữ Not only do we … but we also …) và các cụm thuyết phục như What sets us apart is….",
    "Viết email đề xuất ba thông điệp cho trang tuyển dụng một cách thuyết phục và trung thực."
  ],

  vocabulary: [
    { word: "employer brand", ipa: "/ɪmˈplɔɪər brænd/", pos: "noun", meaning: "thương hiệu nhà tuyển dụng (hình ảnh công ty trong mắt người tìm việc)",
      example: "We need a clearer employer brand to attract good salespeople.", exampleVi: "Chúng ta cần một thương hiệu nhà tuyển dụng rõ ràng hơn để thu hút nhân viên kinh doanh giỏi." },
    { word: "employee value proposition", ipa: "/ɪmˈplɔɪi ˈvæljuː ˌprɑːpəˈzɪʃən/", pos: "noun", meaning: "giá trị mà công ty hứa mang lại cho nhân viên",
      example: "Our employee value proposition is training and early responsibility.", exampleVi: "Giá trị chúng tôi mang lại cho nhân viên là đào tạo và trách nhiệm sớm." },
    { word: "reputation", ipa: "/ˌrepjuˈteɪʃən/", pos: "noun", meaning: "danh tiếng, uy tín",
      example: "A bad experience can damage our reputation quickly.", exampleVi: "Một trải nghiệm xấu có thể làm hại danh tiếng của chúng ta rất nhanh." },
    { word: "appeal", ipa: "/əˈpiːl/", pos: "verb / noun", meaning: "thu hút, hấp dẫn; sức hấp dẫn",
      example: "A strong training program will appeal to young professionals.", exampleVi: "Một chương trình đào tạo mạnh sẽ thu hút các bạn trẻ." },
    { word: "authentic", ipa: "/ɔːˈθentɪk/", pos: "adjective", meaning: "chân thực, đáng tin",
      example: "Real stories feel more authentic than slogans.", exampleVi: "Những câu chuyện thật chân thực hơn khẩu hiệu." },
    { word: "testimonial", ipa: "/ˌtestɪˈmoʊniəl/", pos: "noun", meaning: "lời chứng thực, câu chuyện từ nhân viên hoặc khách hàng thật",
      example: "Thao's story will be a testimonial on the careers page.", exampleVi: "Câu chuyện của Thảo sẽ là một lời chứng thực trên trang tuyển dụng." },
    { word: "stand out", ipa: "/stænd aʊt/", pos: "phrasal verb", meaning: "nổi bật, khác biệt so với người khác",
      example: "How can we stand out from larger competitors?", exampleVi: "Làm sao chúng ta có thể nổi bật so với các đối thủ lớn hơn?" },
    { word: "careers page", ipa: "/kəˈrɪrz peɪdʒ/", pos: "noun", meaning: "trang tuyển dụng trên website công ty",
      example: "The new careers page will describe each job honestly.", exampleVi: "Trang tuyển dụng mới sẽ mô tả từng công việc một cách trung thực." },
    { word: "differentiate", ipa: "/ˌdɪfəˈrenʃieɪt/", pos: "verb", meaning: "tạo sự khác biệt; phân biệt",
      example: "What differentiates us from our competitors?", exampleVi: "Điều gì làm chúng ta khác với đối thủ?" },
    { word: "candidate experience", ipa: "/ˈkændɪdət ɪkˈspɪriəns/", pos: "noun", meaning: "trải nghiệm của ứng viên trong cả quá trình tuyển dụng",
      example: "A slow reply is part of a poor candidate experience.", exampleVi: "Trả lời chậm là một phần của trải nghiệm kém cho ứng viên." }
  ],

  pronunciation: {
    groups: [
      {
        title: "Trọng âm của từ",
        text: "Những từ dưới đây hay gặp khi bàn về thương hiệu nhà tuyển dụng. Âm tiết in hoa là âm đọc to và dài hơn.",
        items: [
          { word: "reputation", marked: "rep·u·TA·tion", note: "Từ tận cùng bằng -tion: nhấn âm tiết ngay trước -tion." },
          { word: "authentic", marked: "au·THEN·tic" },
          { word: "testimonial", marked: "tes·ti·MO·ni·al" },
          { word: "differentiate", marked: "dif·fer·EN·ti·ate" },
          { word: "appeal", marked: "ap·PEAL", note: "Cả động từ và danh từ đều nhấn âm sau." },
          { word: "experience", marked: "ex·PE·ri·ence" }
        ]
      },
      {
        title: "Nhấn mạnh trong Not only … but also",
        text: "Trong cấu trúc này, hai cụm đối lập được nhấn: NOT ONLY (nhấn và lên giọng, có ngắt nhẹ) và BUT ALSO (nhấn lại). Giọng đi lên ở vế đầu, đi xuống ở vế sau.",
        items: [
          { word: "Not only do we offer training,", marked: "NOT ONLY do we offer TRAIN·ing ↗" },
          { word: "but we also give responsibility.", marked: "but we ALSO give re·spon·si·BIL·i·ty ↘" }
        ]
      }
    ],
    sentences: [
      "Not only do we offer regular training, but we also give young salespeople real responsibility.",
      "What sets us apart is a friendly team.",
      "Real stories feel more authentic than slogans."
    ]
  },

  listening: {
    title: "Why did candidates say no?",
    setting: "Room 301, đầu năm. Chị Lan (HR Manager), Tuấn và David họp bàn về việc xây dựng thương hiệu nhà tuyển dụng trước đợt tuyển sáu nhân viên kinh doanh.",
    speakers: { lan: "Lan (HR Manager)", tuan: "Tuan (HR Executive)", david: "David (Sales Manager)" },
    lines: [
      { s: "lan", text: "Thanks for coming. As you know, we plan to hire six new people for the sales team this year, and last year three candidates turned down our offers.",
        vi: "Cảm ơn mọi người đã đến. Như mọi người biết, năm nay chúng ta dự định tuyển sáu người mới cho nhóm Kinh doanh, và năm ngoái ba ứng viên đã từ chối lời mời của chúng ta." },
      { s: "tuan", text: "I called them to ask why. Two of them said they didn't know much about Riverside Trading, and the third chose a bigger competitor.",
        vi: "Em đã gọi hỏi lý do. Hai người nói họ không biết nhiều về Riverside Trading, còn người thứ ba chọn một đối thủ lớn hơn." },
      { s: "david", text: "So we have a reputation problem, not a salary problem?",
        vi: "Vậy là chúng ta có vấn đề về danh tiếng chứ không phải vấn đề về lương?" },
      { s: "lan", text: "Partly. Our salary is competitive, but candidates compare employers online. We need a clearer employer brand.",
        vi: "Một phần thôi. Lương của chúng ta cạnh tranh, nhưng ứng viên so sánh các nhà tuyển dụng trên mạng. Chúng ta cần một thương hiệu nhà tuyển dụng rõ ràng hơn." },
      { s: "tuan", text: "What sets us apart? I think it's our team culture and our training.",
        vi: "Điều gì làm chúng ta khác biệt? Em nghĩ đó là văn hóa nhóm và việc đào tạo." },
      { s: "lan", text: "Exactly. Not only do we offer regular training, but we also give young salespeople real responsibility from the first year.",
        vi: "Chính xác. Chúng ta không chỉ đào tạo đều đặn mà còn giao trách nhiệm thật cho người trẻ ngay từ năm đầu." },
      { s: "david", text: "That's true. Thao was managing about thirty clients within a few months.",
        vi: "Đúng vậy. Thảo đã quản lý khoảng ba mươi khách hàng chỉ sau vài tháng." },
      { s: "tuan", text: "We could use her story as a testimonial on the careers page. Real stories feel more authentic than slogans.",
        vi: "Chúng ta có thể dùng câu chuyện của chị ấy làm lời chứng thực trên trang tuyển dụng. Chuyện thật chân thực hơn khẩu hiệu." },
      { s: "lan", text: "Good idea. But we must be honest. If we promise too much, candidates will be disappointed, and they might leave quickly.",
        vi: "Ý hay. Nhưng chúng ta phải trung thực. Nếu hứa quá nhiều, ứng viên sẽ thất vọng và có thể nghỉ rất nhanh." },
      { s: "david", text: "I agree. What about the interview process? One candidate told me nobody replied to her for two weeks.",
        vi: "Tôi đồng ý. Còn quy trình phỏng vấn thì sao? Một ứng viên nói với tôi rằng hai tuần liền không ai trả lời cô ấy." },
      { s: "tuan", text: "That's the candidate experience. Not only does a slow reply hurt our image, but it also loses us good people.",
        vi: "Đó là trải nghiệm của ứng viên. Trả lời chậm không chỉ làm tổn hại hình ảnh mà còn khiến chúng ta mất người giỏi." },
      { s: "lan", text: "Then we'll set a rule: every applicant gets a reply within five working days.",
        vi: "Vậy chúng ta sẽ đặt một quy tắc: mọi ứng viên nhận được phản hồi trong vòng năm ngày làm việc." },
      { s: "david", text: "And on the careers page, let's say clearly what the job is like, including the travel to Hai Phong and Quang Ninh.",
        vi: "Và trên trang tuyển dụng, hãy nói rõ công việc như thế nào, kể cả việc đi lại đến Hải Phòng và Quảng Ninh." },
      { s: "lan", text: "Yes. Tuan, please draft the page, and I'll review it next week.",
        vi: "Ừ. Tuấn, em soạn bản nháp trang đó nhé, tuần sau chị sẽ xem lại." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "Why did the three candidates turn down the offers?",
        options: ["The salary was too low", "Two knew little about the company and one chose a bigger competitor", "They did not like the job description", "They were not interested in sales"],
        answer: 1, explanation: "Tuấn nói: “Two of them said they didn't know much about Riverside Trading, and the third chose a bigger competitor.” Lương không phải vấn đề chính." },
      { id: "l2", type: "choice", prompt: "What do they plan to use on the careers page?",
        options: ["A slogan", "Thao's real story as a testimonial", "A salary table", "A list of competitors"],
        answer: 1, explanation: "“We could use her story as a testimonial on the careers page. Real stories feel more authentic than slogans.”" },
      { id: "l3", type: "choice", prompt: "What new rule will they set for applicants?",
        options: ["Every applicant gets a reply within five working days", "Every applicant gets a phone call", "Applicants must apply twice", "Only experienced people can apply"],
        answer: 0, explanation: "Chị Lan nói: “every applicant gets a reply within five working days.”" }
    ]
  },

  reading: {
    title: "An employer branding plan",
    intro: "Email chị Lan gửi David sau cuộc họp. Đọc và tìm thông điệp chính, bốn phần của kế hoạch và điều chị Lan lưu ý.",
    email: {
      from: "Lan Pham <lan.pham@riverside-trading.example>",
      to: "David Brown",
      date: "Friday",
      subject: "Employer branding plan – next steps",
      greeting: "Dear David,",
      paragraphs: [
        "Following our meeting, I would like to share a short plan to improve our employer brand before we start hiring six new salespeople this year. Last year, three candidates declined our offers. Two said they knew very little about Riverside Trading, and one chose a larger competitor. Our salary is competitive, so the problem is not only pay but also visibility and reputation.",
        "Our main message will be this: Riverside Trading offers not only regular training but also real responsibility from the first year. What sets us apart is a friendly team in which young professionals are trusted with their own clients. The plan has four parts:"
      ],
      list: [
        "A new careers page that describes each job honestly, including the travel to Hai Phong and Quang Ninh.",
        "Short employee stories, starting with Thao Ngo, who was managing about thirty clients within a few months.",
        "A candidate promise: every applicant receives a reply within five working days.",
        "A short survey of new employees after three months, so that we learn what really attracted them."
      ],
      after: [
        "I would like to stress that we must stay authentic. If we promise more than we deliver, candidates will quickly lose trust, and our reputation will suffer. Tuan will draft the page this week, and I will review it before we publish anything.",
        "Could you please send me two or three details about your team that you are proud of? They will help us write a more convincing message."
      ],
      closing: "Best regards,",
      signature: ["Lan Pham", "HR Manager, Riverside Trading"]
    },
    glossary: [
      { term: "turn down / decline", vi: "từ chối" },
      { term: "visibility", vi: "độ nhận diện (mức độ được biết đến)" },
      { term: "trusted with", vi: "được giao phó, tin tưởng giao" },
      { term: "deliver", vi: "thực hiện đúng như đã hứa" },
      { term: "convincing", vi: "thuyết phục" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "According to Lan, what is the problem?",
        options: ["Only the salary", "Only the interview process", "Not only pay but also visibility and reputation", "The lack of candidates"],
        answer: 2, explanation: "“The problem is not only pay but also visibility and reputation.” Lương của công ty là cạnh tranh nên không phải nguyên nhân chính." },
      { id: "r2", type: "choice", prompt: "What is the candidate promise in the plan?",
        options: ["A job offer for everyone", "A reply to every applicant within five working days", "A higher salary for the first year", "An interview within one day"],
        answer: 1, explanation: "“A candidate promise: every applicant receives a reply within five working days.”" },
      { id: "r3", type: "choice", prompt: "Why does Lan stress that the company must stay authentic?",
        options: ["Because candidates may lose trust if the company promises more than it delivers", "Because the careers page must be short", "Because David asked for it", "Because competitors are cheaper"],
        answer: 0, explanation: "“If we promise more than we deliver, candidates will quickly lose trust, and our reputation will suffer.”" }
    ]
  },

  grammar: {
    title: "Not only … but also, and persuasive phrases",
    titleVi: "Not only … but also (kể cả đảo ngữ) và cụm thuyết phục",
    intro: "Khi quảng bá công ty, bạn cần nêu nhiều điểm mạnh một cách gọn và có sức thuyết phục. Cấu trúc not only … but also giúp nhấn mạnh cả hai ý. Bốn mẫu dưới đây có trong cuộc họp và email bạn vừa học.",
    patterns: [
      { form: "not only + A + but also + B  (A và B cùng loại: danh từ, động từ, tính từ…)", use: "Nhấn mạnh có cả hai điều. A và B phải cùng dạng ngữ pháp để câu cân đối.",
        examples: ["We offer not only regular training but also real responsibility.", "The job is not only interesting but also well paid."] },
      { form: "Not only + trợ động từ + chủ ngữ + động từ, but + chủ ngữ + also + động từ", use: "Dạng đảo ngữ, nhấn mạnh hơn, trang trọng hơn. Khi Not only đứng đầu câu, đảo trợ động từ lên trước chủ ngữ (do / does / did / is / are / can).",
        examples: ["Not only do we offer training, but we also give real responsibility.", "Not only does a slow reply hurt our image, but it also loses us good people."] },
      { form: "What sets us apart is …   ·   What makes us different is …", use: "Cụm thuyết phục để nêu điểm khác biệt của công ty. Sau is là danh từ hoặc mệnh đề.",
        examples: ["What sets us apart is a friendly team.", "What makes us different is the trust we give to young professionals."] },
      { form: "You will have the chance to …   ·   Join a team that …   ·   Imagine …", use: "Các cụm hướng tới ứng viên, tạo hình ảnh cụ thể và cảm xúc, nhưng phải trung thực.",
        examples: ["You will have the chance to manage your own clients.", "Join a team that trusts you from the first year."] }
    ],
    mistakes: [
      { wrong: "Not only we offer training, but we also give responsibility.", right: "Not only do we offer training, but we also give responsibility.", note: "Not only đứng đầu câu thì phải đảo: Not only + do + we + động từ." },
      { wrong: "We offer not only training but also to give responsibility.", right: "We offer not only training but also responsibility.", note: "Hai vế sau not only và but also phải cùng dạng (danh từ với danh từ)." },
      { wrong: "Not only does the company offer training, but also it gives responsibility.", right: "Not only does the company offer training, but it also gives responsibility.", note: "Sau but, chủ ngữ đứng trước also: but it also gives…" },
      { wrong: "What sets us apart it is our team.", right: "What sets us apart is our team.", note: "Mệnh đề what … là chủ ngữ của is; không thêm it." }
    ],
    tip: "Cụm thuyết phục chỉ hiệu quả khi trung thực. Hãy dùng not only … but also cho những điểm bạn chắc chắn có thật (đào tạo đều đặn, trách nhiệm sớm), kèm ví dụ cụ thể như câu chuyện của Thảo. Thông điệp cụ thể và có thật làm tăng uy tín nhà tuyển dụng, còn khẩu hiệu chung chung thì không."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "We offer not only regular training ___ also real responsibility.",
      options: ["and", "but", "or", "so"],
      answer: 1, explanation: "Cặp cố định: not only … but also …" },
    { id: "p2", type: "gap", prompt: "Not only ___ we offer training, but we also give real responsibility.",
      options: ["are", "have", "do", "did"],
      answer: 2, explanation: "Not only đứng đầu câu thì đảo trợ động từ: Not only do we offer… Hiện tại đơn dùng do." },
    { id: "p3", type: "gap", prompt: "Not only does a slow reply hurt our image, ___ it also loses us good people.",
      options: ["so", "but", "because", "and"],
      answer: 1, explanation: "Vế sau của cặp not only … but … also dùng but: but it also loses us good people." },
    { id: "p4", type: "choice", prompt: "Which sentence is correct?",
      options: ["Not only we offer training but also bonuses.", "Not only we do offer training, but we also offer bonuses.", "Not only offer we training, but also bonuses.", "Not only do we offer training, but we also offer bonuses."],
      answer: 3, explanation: "Dạng đảo ngữ đúng: Not only + do + we + động từ, but we also + động từ. Các câu còn lại sai trật tự." },
    { id: "p5", type: "gap", prompt: "What ___ us apart from competitors is our friendly team.",
      options: ["puts", "gets", "sets", "makes"],
      answer: 2, explanation: "Cụm cố định: set (someone) apart = làm cho (ai) khác biệt." },
    { id: "p6", type: "gap", prompt: "A statement from a real employee about their experience is a ___.",
      options: ["testimonial", "reputation", "slogan", "budget"],
      answer: 0, explanation: "Testimonial = lời chứng thực từ người thật. Slogan là khẩu hiệu của công ty." },
    { id: "p7", type: "gap", prompt: "The way a company is seen by the public is its ___.",
      options: ["venue", "outcome", "roster", "reputation"],
      answer: 3, explanation: "Reputation = danh tiếng, cách công ty được nhìn nhận." },
    { id: "p8", type: "gap", prompt: "Stories from real employees feel more ___ than slogans.",
      options: ["mandatory", "authentic", "temporary", "defensive"],
      answer: 1, explanation: "Authentic = chân thực, đáng tin." },
    { id: "p9", type: "choice", prompt: "Which sentence is the most persuasive and honest for a job advertisement?",
      options: ["Work here.", "Join a friendly team in which you will manage your own clients from the first year.", "We need people.", "Apply now or never."],
      answer: 1, explanation: "Câu B cụ thể, tạo hình ảnh và có thật (khớp với thông tin của công ty). Các câu còn lại chung chung hoặc gây áp lực." },
    { id: "p10", type: "gap", prompt: "We need a clear message to ___ out from larger competitors.",
      options: ["stand", "stay", "stop", "step"],
      answer: 0, explanation: "Cụm động từ: stand out = nổi bật, khác biệt." }
  ],

  writing: {
    title: "Propose three messages for the careers page",
    task: "Bạn là Tuấn. Chị Lan nhờ bạn đề xuất nội dung trang tuyển dụng. Viết email gửi David (120–180 từ) nêu ba thông điệp chính: (1) điểm khác biệt của nhóm (thân thiện, giao trách nhiệm sớm, ví dụ Thảo); (2) đào tạo đều đặn và lộ trình nghề nghiệp; (3) mô tả công việc trung thực, kể cả việc đi lại thường xuyên. Dùng not only … but also (ít nhất một câu đảo ngữ) và What sets us apart is….",
    requirements: [
      "Mở đầu bằng lời chào phù hợp.",
      "Có ít nhất một câu đảo ngữ Not only do / does / is … but … also ….",
      "Có ít nhất một câu với not only … but also … (không đảo).",
      "Có câu với What sets us apart is …",
      "Nhấn mạnh sự trung thực (honest / authentic).",
      "Kết thúc email và ký tên."
    ],
    minWords: 120,
    maxWords: 180,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Dear … / Hi …)", pattern: "\\bdear\\b|\\bhi\\b" },
      { label: "Có đảo ngữ Not only do / does / is / are …", pattern: "not only (do|does|did|is|are|can) " },
      { label: "Có but also / but … also", pattern: "\\bbut (\\w+ )?also\\b" },
      { label: "Có What sets us apart / What makes us different", pattern: "sets us apart|makes us different" },
      { label: "Nhấn mạnh sự trung thực (honest / authentic)", pattern: "\\b(honest|honestly|authentic)\\b" },
      { label: "Có lời kết (Best regards …)", pattern: "regards|sincerely|best wishes" }
    ],
    model: [
      "Dear David,",
      "Following our meeting, here are my ideas for the new careers page. I think we should focus on three messages.",
      "First, what sets us apart is our team. Not only is it friendly, but it also gives young professionals real responsibility. Thao is a good example: within a few months, she was managing about thirty clients, and she says she learned something new every week.",
      "Second, we offer not only regular training but also clear career paths. Employees who reach their targets can move to senior roles, and several colleagues have already been promoted.",
      "Third, we should be honest about the job. Candidates need to know that the position involves regular travel to Hai Phong and Quang Ninh. Not only does this show respect for candidates, but it also helps us find people who really want the job.",
      "Could you please check these ideas and send me any other stories that we could use?",
      "Best regards,",
      "Tuan Nguyen"
    ]
  },

  review: {
    keyPhrases: [
      { en: "Not only do we offer training, but we also give real responsibility.", vi: "Chúng tôi không chỉ đào tạo mà còn giao trách nhiệm thật." },
      { en: "What sets us apart is a friendly team.", vi: "Điều làm chúng tôi khác biệt là một đội ngũ thân thiện." },
      { en: "Real stories feel more authentic than slogans.", vi: "Chuyện thật chân thực hơn khẩu hiệu." },
      { en: "We need a clearer employer brand.", vi: "Chúng ta cần một thương hiệu nhà tuyển dụng rõ ràng hơn." },
      { en: "Every applicant receives a reply within five working days.", vi: "Mọi ứng viên nhận được phản hồi trong vòng năm ngày làm việc." },
      { en: "If we promise more than we deliver, candidates will lose trust.", vi: "Nếu hứa nhiều hơn khả năng thực hiện, ứng viên sẽ mất lòng tin." }
    ]
  }
});
