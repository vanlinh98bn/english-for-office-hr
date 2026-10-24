/* =========================================================
   C1 · Module 1 (Strategic HR Management) · Bài 1
   "Workforce planning"
   Bắt đầu cấp C1. Năm mới sau B2: công ty quyết định mở trung tâm
   phân phối thứ hai ở Hải Phòng, hoạt động vào cuối năm. Nhân vật mới:
   Grace Le, HR Director (Giám đốc Nhân sự), vừa vào làm, từng làm cho
   một tập đoàn logistics trong khu vực; chị Lan Pham (HR Manager) báo
   cáo cho Grace. Anh Son Bui (Logistics Manager) sẽ phụ trách trung tâm
   mới.
   Số liệu kế hoạch (làm tròn): hiện khoảng 70 nhân viên; cần thêm khoảng
   20 người cho trung tâm mới; mất khoảng 12% mỗi năm → cần thay thế
   khoảng 8–9 người mỗi năm; tổng khoảng 40 lượt tuyển trong hai năm,
   khoảng 20 người mỗi năm. Thời gian tuyển trung bình 32 ngày (B2-M1-L5),
   nhưng vị trí quản lý kho cần 3–4 tháng.
   Mốc (nói áng chừng): giữa năm đã tuyển xong quản lý trung tâm; từ
   tháng Chín nhóm đầu tiên đang được đào tạo; cuối năm khoảng 20 người
   đang làm việc ở trung tâm mới.
   Ngữ pháp: tương lai hoàn thành (will have + V3), tương lai tiếp diễn
   (will be + V-ing), by / by the time / this time next year.
   Thời gian nói áng chừng.
   ========================================================= */
window.EOH.registerLesson({
  id: "c1-m1-l1",
  reviewStatus: "draft",
  duration: "45–60 phút",
  scenario: "Công ty quyết định mở trung tâm phân phối thứ hai ở Hải Phòng và muốn hoạt động vào cuối năm. Giám đốc Nhân sự mới, chị Grace Le, họp với chị Lan (HR Manager) và anh Son Bui (Logistics Manager) để lập kế hoạch nguồn nhân lực: cần tuyển bao nhiêu người, vào lúc nào, và đâu là điểm nghẽn. Sau đó chị Grace gửi bản kế hoạch cho Tổng Giám đốc.",

  objectives: [
    "Hiểu và dùng 10 từ vựng thường gặp khi hoạch định nguồn nhân lực.",
    "Nghe cuộc họp lập kế hoạch nhân lực, theo dõi các mốc thời gian và con số.",
    "Đọc email kế hoạch gửi lãnh đạo, tìm số người cần tuyển, mốc thời gian và rủi ro.",
    "Dùng tương lai hoàn thành (will have + V3) để nói việc đã xong vào một mốc, và tương lai tiếp diễn (will be + V-ing) để nói việc đang diễn ra vào một thời điểm tương lai; kèm by, by the time, this time next year.",
    "Viết bản tóm tắt kế hoạch nhân lực cho lãnh đạo, có mốc thời gian rõ ràng và biện pháp dự phòng."
  ],

  vocabulary: [
    { word: "workforce planning", ipa: "/ˈwɜːrkfɔːrs ˌplænɪŋ/", pos: "noun", meaning: "hoạch định nguồn nhân lực",
      example: "Workforce planning starts with the business strategy.", exampleVi: "Hoạch định nguồn nhân lực bắt đầu từ chiến lược kinh doanh." },
    { word: "attrition", ipa: "/əˈtrɪʃən/", pos: "noun", meaning: "tỷ lệ hao hụt nhân sự (người nghỉ mà không thay ngay)",
      example: "Natural attrition is about twelve percent a year.", exampleVi: "Mức hao hụt tự nhiên khoảng mười hai phần trăm mỗi năm." },
    { word: "forecast", ipa: "/ˈfɔːrkæst/", pos: "noun", meaning: "dự báo",
      example: "The forecast shows we need forty hires in two years.", exampleVi: "Dự báo cho thấy cần bốn mươi lượt tuyển trong hai năm." },
    { word: "skills gap", ipa: "/ˈskɪlz ɡæp/", pos: "noun", meaning: "khoảng thiếu hụt kỹ năng",
      example: "There is a skills gap in warehouse management.", exampleVi: "Có khoảng thiếu hụt kỹ năng ở mảng quản lý kho." },
    { word: "talent pipeline", ipa: "/ˈtælənt ˌpaɪplaɪn/", pos: "noun", meaning: "nguồn ứng viên tiềm năng được chuẩn bị sẵn",
      example: "We should build a talent pipeline before we need the people.", exampleVi: "Chúng ta nên xây nguồn ứng viên trước khi cần người." },
    { word: "ramp up", ipa: "/ˈræmp ʌp/", pos: "phrasal verb", meaning: "tăng dần quy mô, tăng tốc",
      example: "The hub will ramp up gradually over six months.", exampleVi: "Trung tâm sẽ tăng dần quy mô trong sáu tháng." },
    { word: "lead time", ipa: "/ˈliːd taɪm/", pos: "noun", meaning: "thời gian chuẩn bị từ lúc bắt đầu đến lúc xong",
      example: "Senior roles have a lead time of three to four months.", exampleVi: "Các vị trí cấp cao cần ba đến bốn tháng chuẩn bị." },
    { word: "phased", ipa: "/feɪzd/", pos: "adjective", meaning: "chia thành từng giai đoạn",
      example: "We recommend a phased recruitment plan.", exampleVi: "Chúng tôi đề xuất kế hoạch tuyển dụng chia theo giai đoạn." },
    { word: "contingency", ipa: "/kənˈtɪndʒənsi/", pos: "noun", meaning: "phương án dự phòng",
      example: "We need a contingency plan in case hiring is slow.", exampleVi: "Chúng ta cần phương án dự phòng phòng khi tuyển chậm." },
    { word: "bottleneck", ipa: "/ˈbɑːtlnek/", pos: "noun", meaning: "điểm nghẽn",
      example: "Management hiring is the biggest bottleneck.", exampleVi: "Tuyển quản lý là điểm nghẽn lớn nhất." }
  ],

  pronunciation: {
    groups: [
      {
        title: "will have đọc nối: /wɪl əv/",
        text: "Trong tương lai hoàn thành, will have thường đọc liền /wɪləv/ và đọc rất nhẹ. Nhấn vào động từ chính (V3) và mốc thời gian. Âm tiết in hoa là âm đọc to và dài hơn.",
        items: [
          { word: "we'll have recruited", marked: "we'll‿əv re·CRUIT·ed" },
          { word: "will have opened", marked: "wil‿əv O·pened" },
          { word: "by the end of the year", marked: "by the END of the YEAR" }
        ]
      },
      {
        title: "Trọng âm từ",
        text: "Những từ hay gặp khi hoạch định.",
        items: [
          { word: "attrition", marked: "at·TRI·tion" },
          { word: "forecast", marked: "FORE·cast" },
          { word: "contingency", marked: "con·TIN·gen·cy" },
          { word: "bottleneck", marked: "BOT·tle·neck" }
        ]
      }
    ],
    sentences: [
      "By the end of the year, we will have recruited about twenty people.",
      "This time next year, the new hub will be operating at full capacity.",
      "By the time the hub opens, the first group will have finished training."
    ]
  },

  listening: {
    title: "Planning for the second hub",
    setting: "Room 301. Chị Grace Le (HR Director), chị Lan (HR Manager) và anh Son (Logistics Manager) lập kế hoạch nhân lực cho trung tâm phân phối thứ hai ở Hải Phòng.",
    speakers: { grace: "Grace (HR Director)", lan: "Lan (HR Manager)", son: "Son (Logistics Manager)" },
    lines: [
      { s: "grace", text: "Thank you both for making time. As you know, the board wants the Hai Phong hub open by the end of the year. Today I'd like to turn that into a workforce plan.",
        vi: "Cảm ơn hai bạn đã dành thời gian. Như các bạn biết, ban lãnh đạo muốn trung tâm Hải Phòng mở cửa vào cuối năm. Hôm nay tôi muốn biến điều đó thành một kế hoạch nhân lực." },
      { s: "lan", text: "We have about seventy employees now. Our forecast says we'll need around twenty more for the new hub.",
        vi: "Hiện nay chúng ta có khoảng bảy mươi nhân viên. Dự báo của chúng tôi cho thấy cần thêm khoảng hai mươi người cho trung tâm mới." },
      { s: "grace", text: "And we mustn't forget attrition. If we lose twelve percent a year, we'll need to replace eight or nine people as well.",
        vi: "Và đừng quên hao hụt nhân sự. Nếu mỗi năm mất mười hai phần trăm, chúng ta cũng phải thay khoảng tám hay chín người." },
      { s: "lan", text: "So, over two years, we're looking at around forty hires in total, roughly twenty a year.",
        vi: "Vậy trong hai năm, chúng ta cần khoảng bốn mươi lượt tuyển tổng cộng, chừng hai mươi người mỗi năm." },
      { s: "son", text: "That's a lot for a team of three in HR. How quickly can you recruit?",
        vi: "Đó là rất nhiều cho một nhóm ba người ở phòng Nhân sự. Các bạn tuyển nhanh đến mức nào?" },
      { s: "lan", text: "Our average time to hire is thirty-two days for standard roles. But a senior warehouse manager takes three or four months.",
        vi: "Thời gian tuyển trung bình của chúng tôi là ba mươi hai ngày cho vị trí thông thường. Nhưng một quản lý kho cấp cao mất ba đến bốn tháng." },
      { s: "grace", text: "Then that's our bottleneck. If we start now, we'll have recruited the hub manager by the middle of the year.",
        vi: "Vậy đó là điểm nghẽn của chúng ta. Nếu bắt đầu ngay bây giờ, chúng ta sẽ tuyển xong quản lý trung tâm vào khoảng giữa năm." },
      { s: "son", text: "I'd like the manager to be working with me by the summer. By the time the hub opens, he or she will have spent at least three months learning our systems.",
        vi: "Anh muốn người quản lý đó làm việc cùng anh từ mùa hè. Đến khi trung tâm mở cửa, người đó đã dành ít nhất ba tháng học hệ thống của mình." },
      { s: "grace", text: "Agreed. What about the rest of the team?",
        vi: "Đồng ý. Còn phần còn lại của đội thì sao?" },
      { s: "lan", text: "We suggest a phased plan. From September, the first group of ten will be training in our current warehouse, so they'll already know our procedures.",
        vi: "Chúng tôi đề xuất kế hoạch theo giai đoạn. Từ tháng Chín, nhóm đầu tiên mười người sẽ được đào tạo ở kho hiện tại, nên họ sẽ biết sẵn quy trình của mình." },
      { s: "son", text: "Good. By the time the hub opens, they'll have finished the training, and we can ramp up the volume slowly.",
        vi: "Tốt. Đến khi trung tâm mở cửa, họ đã học xong, và mình có thể tăng dần lượng hàng." },
      { s: "grace", text: "What if the recruitment is slower than expected? We need a contingency.",
        vi: "Nếu tuyển chậm hơn dự kiến thì sao? Chúng ta cần phương án dự phòng." },
      { s: "lan", text: "We could use temporary staff for the first three months, and build a talent pipeline from local vocational schools.",
        vi: "Chúng ta có thể dùng nhân viên thời vụ trong ba tháng đầu, và xây nguồn ứng viên từ các trường nghề địa phương." },
      { s: "grace", text: "Excellent. This time next year, around twenty people will be working at the new hub. Let's put that into a plan for the General Director.",
        vi: "Rất tốt. Vào thời điểm này năm sau, khoảng hai mươi người sẽ đang làm việc ở trung tâm mới. Mình đưa điều đó vào bản kế hoạch gửi Tổng Giám đốc nhé." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "Why is the senior warehouse manager the 'bottleneck'?",
        options: ["The salary is very high.", "The role takes three to four months to fill.", "Nobody wants the job.", "Son does not need a manager."],
        answer: 1, explanation: "Chị Lan nói vị trí này mất ba đến bốn tháng, nên chị Grace gọi đó là điểm nghẽn. Lương không được nhắc đến." },
      { id: "l2", type: "choice", prompt: "What will the first group of ten be doing from September?",
        options: ["Working at the new hub", "Interviewing candidates", "Training in the current warehouse", "Visiting customers in Hai Phong"],
        answer: 2, explanation: "“From September, the first group of ten will be training in our current warehouse.” Họ chưa làm ở trung tâm mới vì trung tâm chưa mở." },
      { id: "l3", type: "choice", prompt: "What contingency plan does Lan suggest?",
        options: ["Delaying the opening of the hub", "Cutting the number of staff", "Using temporary staff and building a talent pipeline", "Asking Son to recruit alone"],
        answer: 2, explanation: "“We could use temporary staff for the first three months, and build a talent pipeline from local vocational schools.”" }
    ]
  },

  reading: {
    title: "Workforce plan: Hai Phong hub",
    intro: "Email chị Grace gửi Tổng Giám đốc tóm tắt kế hoạch nhân lực. Đọc và tìm số người cần tuyển, các mốc thời gian và rủi ro chính.",
    email: {
      from: "Grace Le <grace.le@riverside-trading.example>",
      to: "General Director; cc: Lan Pham",
      date: "Monday",
      subject: "Workforce plan: Hai Phong hub",
      greeting: "Dear Mr. Director,",
      paragraphs: [
        "Following our discussion with Logistics, I am writing to summarize the workforce plan for the Hai Phong hub. We currently employ about 70 people. The new hub will require approximately 20 additional staff, and natural attrition of around 12% means that we must also replace eight or nine employees each year. In total, we expect to make about 40 hires over the next two years.",
        "The plan is phased, as follows. By the middle of the year, we will have recruited the hub manager. This is our main bottleneck, as senior roles typically take three to four months to fill, so recruitment will begin immediately. From September, the first group of ten operators will be training at our current warehouse, which means that they will already be familiar with our procedures by the time the hub opens. By the end of the year, around 20 people will be working at the new site, and we will be ramping up volumes gradually over the following six months."
      ],
      list: [
        "Risk: if senior recruitment takes longer than planned, the opening date may be affected.",
        "Contingency: temporary staff for the first three months, and a talent pipeline built with local vocational schools.",
        "Resources: HR will be running at full capacity, so we propose to add one part-time recruiter from the second quarter."
      ],
      after: [
        "I would be grateful for your approval of the plan in principle, so that we can start the search for the hub manager this week. A detailed budget will follow shortly."
      ],
      closing: "With kind regards,",
      signature: ["Grace Le", "HR Director, Riverside Trading"]
    },
    glossary: [
      { term: "in principle", vi: "về nguyên tắc" },
      { term: "operator", vi: "nhân viên vận hành" },
      { term: "be familiar with", vi: "quen thuộc với" },
      { term: "run at full capacity", vi: "làm việc hết công suất" },
      { term: "search", vi: "việc tìm kiếm (ứng viên)" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "Approximately how many hires does the plan expect over two years?",
        options: ["20", "30", "50", "40"],
        answer: 3, explanation: "“In total, we expect to make about 40 hires over the next two years.” 20 là số nhân viên thêm cho trung tâm mới." },
      { id: "r2", type: "choice", prompt: "What does Grace mean by “by the time the hub opens” the first group will “already be familiar with our procedures”?",
        options: ["They will be trained before the hub opens.", "They will start training after the hub opens.", "They will not need any training.", "They will train at the new hub."],
        answer: 0, explanation: "Nhóm đầu tiên học ở kho hiện tại từ tháng Chín, nên đã quen quy trình trước khi trung tâm mở." },
      { id: "r3", type: "choice", prompt: "What does Grace ask the General Director to do?",
        options: ["Approve the final budget", "Approve the plan in principle", "Interview the hub manager", "Reduce the number of hires"],
        answer: 1, explanation: "“I would be grateful for your approval of the plan in principle.” Ngân sách chi tiết sẽ được gửi sau." }
    ]
  },

  grammar: {
    title: "Future perfect and future continuous",
    titleVi: "Tương lai hoàn thành và tương lai tiếp diễn",
    intro: "Khi hoạch định, ta nhìn về một mốc trong tương lai và nói: đến lúc đó việc gì đã xong (tương lai hoàn thành), hoặc đến lúc đó việc gì đang diễn ra (tương lai tiếp diễn). Bốn mẫu dưới đây có trong cuộc họp và email bạn vừa học.",
    patterns: [
      { form: "will have + V3  +  by / by the time / by the end of…", use: "Việc đã hoàn thành trước hoặc vào một mốc tương lai.",
        examples: ["By the middle of the year, we will have recruited the hub manager.", "By the time the hub opens, they'll have finished the training."] },
      { form: "will be + V-ing  +  at / this time next year / from…", use: "Việc đang diễn ra tại một thời điểm hoặc trong một giai đoạn tương lai.",
        examples: ["This time next year, around twenty people will be working at the new hub.", "From September, the first group will be training in our warehouse."] },
      { form: "by the time + hiện tại đơn, + will have + V3", use: "Sau by the time dùng hiện tại đơn, không dùng will.",
        examples: ["By the time the hub opens, the manager will have spent three months learning our systems.", "By the time we start, they will have finished."] },
      { form: "will have been + V-ing (nhấn thời gian kéo dài)", use: "Nhấn việc đã kéo dài bao lâu tính đến một mốc tương lai.",
        examples: ["By the end of the year, we will have been recruiting for ten months.", "By June, Lan will have been working on the plan for six months."] }
    ],
    mistakes: [
      { wrong: "By the time the hub will open, we will have hired the manager.", right: "By the time the hub opens, we will have hired the manager.", note: "Sau by the time dùng hiện tại đơn." },
      { wrong: "By June, we will have recruit the manager.", right: "By June, we will have recruited the manager.", note: "Sau will have phải dùng V3 (recruited). Lưu ý: By June, we will recruit... vẫn đúng ngữ pháp, nhưng will have + V3 nhấn việc đã xong trước mốc June." },
      { wrong: "This time next year, the hub will have operating.", right: "This time next year, the hub will be operating.", note: "Việc đang diễn ra → will be + V-ing, không phải will have + V-ing." },
      { wrong: "They will have finished by the time next year.", right: "They will have finished by this time next year.", note: "Cụm cố định: by this time next year." }
    ],
    tip: "Khi viết kế hoạch cho lãnh đạo, dùng một mốc thời gian cho mỗi câu: “By June, … will have been completed. From September, … will be taking place.” Cách viết này cho người đọc thấy rõ điều gì xong trước, điều gì diễn ra sau."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "By the end of June, we ___ the hub manager (việc đã hoàn tất trước cuối tháng Sáu).",
      options: ["will recruit", "recruit", "will have recruited", "will be recruiting"],
      answer: 2, explanation: "Việc đã xong trước mốc cuối tháng Sáu → will have recruited. will recruit chỉ nói việc sẽ làm, không nhấn đã xong." },
    { id: "p2", type: "gap", prompt: "This time next year, about twenty people ___ at the new hub (đang trong ca làm việc ở thời điểm đó).",
      options: ["will work", "will be working", "will have worked", "worked"],
      answer: 1, explanation: "Việc đang diễn ra vào thời điểm này năm sau → will be working." },
    { id: "p3", type: "gap", prompt: "By the time the hub ___, the first group will have finished training.",
      options: ["will open", "opened", "will be opening", "opens"],
      answer: 3, explanation: "Sau by the time dùng hiện tại đơn: By the time the hub opens." },
    { id: "p4", type: "choice", prompt: "Which sentence means the training will be COMPLETE before September 30?",
      options: ["The group will have completed the training by September 30.", "The group will be completing the training by September 30.", "The group completes the training on September 30.", "The group will complete the training after September 30."],
      answer: 0, explanation: "will have + V3 + by → xong trước mốc. will be completing chỉ việc đang diễn ra." },
    { id: "p5", type: "gap", prompt: "From September, ten operators ___ in our current warehouse.",
      options: ["will have trained", "will be training", "have trained", "trained"],
      answer: 1, explanation: "Giai đoạn diễn ra từ tháng Chín → will be training." },
    { id: "p6", type: "choice", prompt: "Which sentence is correct?",
      options: ["By the time the hub will open, we will have recruited 20 staff.", "By the time the hub opens, we will have recruit 20 staff.", "By the time the hub opens, we will have recruited 20 staff.", "By the time the hub opened, we will have recruited 20 staff."],
      answer: 2, explanation: "By the time + hiện tại đơn, + will have + V3." },
    { id: "p7", type: "gap", prompt: "Senior roles have a long ___ time of three to four months.",
      options: ["lead", "contingency", "phased", "forecast"],
      answer: 0, explanation: "lead time = thời gian chuẩn bị từ lúc bắt đầu đến lúc xong." },
    { id: "p8", type: "gap", prompt: "Hiring the hub manager is our main ___ because it takes so long.",
      options: ["pipeline", "bottleneck", "attrition", "skills gap"],
      answer: 1, explanation: "bottleneck = điểm nghẽn, nơi làm chậm cả kế hoạch." },
    { id: "p9", type: "gap", prompt: "If recruitment is slow, we will need a ___ plan.",
      options: ["attrition", "contingency", "forecast", "ramp"],
      answer: 1, explanation: "contingency plan = phương án dự phòng." },
    { id: "p10", type: "gap", prompt: "The hub will ___ up gradually over six months.",
      options: ["ramp", "phase", "bottle", "lead"],
      answer: 0, explanation: "ramp up = tăng dần quy mô, tăng tốc." }
  ],

  writing: {
    title: "Summarize a workforce plan",
    task: "Bạn là chị Lan. Viết email (150–220 từ) gửi chị Grace tóm tắt kế hoạch tuyển dụng quý tới cho phòng Kế toán chuẩn bị cho trung tâm Hải Phòng: tuyển thêm 2 kế toán (một kế toán tổng hợp, một kế toán công nợ); đăng tin trong tháng này; phỏng vấn xong vào đầu quý; người đầu tiên dự kiến nhận việc vào giữa quý; người thứ hai sau đó khoảng một tháng; trong thời gian chờ, Hoa và Minh sẽ làm thêm giờ trong giới hạn cho phép. Có phương án dự phòng nếu tuyển chậm.",
    requirements: [
      "Mở đầu bằng lời chào và mục đích email.",
      "Dùng will have + V3 với một mốc thời gian (by…).",
      "Dùng will be + V-ing.",
      "Dùng by the time + hiện tại đơn, will have + V3.",
      "Nêu một rủi ro và phương án dự phòng.",
      "Kết thúc email và ký tên."
    ],
    minWords: 150,
    maxWords: 220,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Dear … / Hi …)", pattern: "\\bdear\\b|\\bhi\\b" },
      { label: "Có will have + V3 (+ by)", pattern: "will have \\w+(ed|en|ne|ne)\\b|will have (been|done|made|had|hired|run)" },
      { label: "Có will be + V-ing", pattern: "will be \\w+ing\\b" },
      { label: "Có by the time", pattern: "by the time" },
      { label: "Có phương án dự phòng (contingency / if … too slow)", pattern: "contingency|backup|in case|if recruitment" },
      { label: "Có lời kết (Best regards …)", pattern: "regards|sincerely|best wishes" }
    ],
    model: [
      "Dear Grace,",
      "I am writing to summarize the recruitment plan for the Accounting team, which will support the Hai Phong hub.",
      "We plan to hire two accountants: one general accountant and one accounts payable specialist. We will post both advertisements this month, and by the beginning of next quarter we will have completed the interviews.",
      "The first accountant is expected to start in the middle of the quarter, and the second about a month later. By the time the hub opens, both of them will have finished their induction and will be working independently.",
      "In the meantime, Hoa and Minh will be covering the extra work. Overtime will remain within the legal limit of 40 hours per person per month, so we do not expect any compliance issues.",
      "The main risk is that the search for the general accountant may take longer than planned. As a contingency, we could ask a temporary accountant from an agency to help for the first three months.",
      "Please let me know if you would like any changes to the plan.",
      "Best regards,",
      "Lan"
    ]
  },

  review: {
    keyPhrases: [
      { en: "By the middle of the year, we will have recruited the hub manager.", vi: "Đến giữa năm, chúng ta sẽ tuyển xong quản lý trung tâm." },
      { en: "This time next year, twenty people will be working at the new hub.", vi: "Vào thời điểm này năm sau, hai mươi người sẽ đang làm việc ở trung tâm mới." },
      { en: "By the time the hub opens, they'll have finished the training.", vi: "Đến khi trung tâm mở cửa, họ đã học xong." },
      { en: "Senior roles have a lead time of three to four months.", vi: "Các vị trí cấp cao cần ba đến bốn tháng chuẩn bị." },
      { en: "We need a contingency plan in case recruitment is slow.", vi: "Chúng ta cần phương án dự phòng phòng khi tuyển chậm." },
      { en: "We recommend a phased approach.", vi: "Chúng tôi đề xuất cách làm theo từng giai đoạn." }
    ]
  }
});
