/* =========================================================
   C1 · Module 4 (Advanced HR Projects and Professional Writing) · Bài 2
   "Stakeholder updates"
   Nối tiếp C1-M4-L1. Sau khoảng hai tháng, anh Tuấn báo cáo tiến độ dự
   án Cổng đón nhân viên mới cho các bên liên quan: chị Grace (người
   bảo trợ), chị Lan, Sam (IT), chị Ngoc Dang (Kế toán), anh Hung Cao
   (Logistics).
   Tiến độ:
   - Đã xong: giai đoạn thiết kế (hoàn tất cách đây khoảng bốn tuần);
     chọn nhà cung cấp (cách đây ba tuần); số hóa 6/10 biểu mẫu; mô-đun
     ký điện tử đã thử nghiệm; video chào mừng đã quay (chị Grace nói).
   - Chưa xong: 4 biểu mẫu còn lại; kết nối danh sách việc cho IT bị
     trễ khoảng hai tuần vì Sam bận đợt chạy chính thức hệ thống kho;
     đợt thử với 5 nhân viên mới chưa bắt đầu.
   - Ngân sách: đã chi 38/90 triệu đồng, đúng kế hoạch.
   - Tình trạng: vàng (amber) vì trễ phần kết nối IT; các phần khác xanh.
   - Cần hỗ trợ: Sam 2 ngày trong tháng này; anh Hung đồng ý để người
     hướng dẫn kho (buddy) thử nghiệm trên cổng.
   Ngữ pháp: hiện tại hoàn thành (have completed, has been delayed,
   haven't … yet, so far, already, just) so với quá khứ đơn có mốc thời
   gian (selected the vendor three weeks ago).
   Thời gian nói áng chừng.
   ========================================================= */
window.EOH.registerLesson({
  id: "c1-m4-l2",
  reviewStatus: "draft",
  duration: "45–60 phút",
  scenario: "Sau khoảng hai tháng, anh Tuấn báo cáo tiến độ dự án cổng đón nhân viên mới cho các bên liên quan: chị Grace, chị Lan, Sam, chị Ngoc và anh Hung. Anh nêu điều đã làm, điều chưa làm, vấn đề, ngân sách và hỗ trợ cần có. Sau đó anh gửi bản cập nhật bằng văn bản.",

  objectives: [
    "Hiểu và dùng 10 từ vựng thường gặp khi cập nhật tiến độ dự án.",
    "Nghe buổi cập nhật tiến độ, nhận ra điều đã xong, điều chưa xong và yêu cầu hỗ trợ.",
    "Đọc bản cập nhật bằng văn bản, nhận ra trạng thái xanh, vàng, đỏ và cách nêu tiến độ.",
    "Dùng hiện tại hoàn thành (have completed, has been delayed, haven't … yet, so far, already, just) cho kết quả đến nay, và quá khứ đơn cho việc có mốc thời gian (selected the vendor three weeks ago).",
    "Viết bản cập nhật tiến độ ngắn: tình trạng, đã xong, chưa xong, vấn đề, bước tiếp theo, hỗ trợ cần có."
  ],

  vocabulary: [
    { word: "status update", ipa: "/ˈsteɪtəs ˈʌpdeɪt/", pos: "noun", meaning: "bản cập nhật tình trạng, tiến độ",
      example: "Tuan sends a status update every two weeks.", exampleVi: "Tuấn gửi bản cập nhật tiến độ mỗi hai tuần." },
    { word: "progress", ipa: "/ˈprɑːɡres/", pos: "noun", meaning: "tiến độ, sự tiến triển",
      example: "We have made good progress so far.", exampleVi: "Đến nay chúng ta đã tiến triển tốt." },
    { word: "amber", ipa: "/ˈæmbər/", pos: "adjective", meaning: "màu vàng (cảnh báo: có vấn đề cần chú ý, chưa nghiêm trọng)",
      example: "The overall status is amber because of the IT delay.", exampleVi: "Tình trạng chung là vàng vì IT bị trễ." },
    { word: "slip", ipa: "/slɪp/", pos: "verb", meaning: "trễ (tiến độ), lùi lại",
      example: "The IT integration has slipped by two weeks.", exampleVi: "Phần kết nối IT đã trễ hai tuần." },
    { word: "on schedule", ipa: "/ɑːn ˈskedʒuːl/", pos: "phrase", meaning: "đúng lịch",
      example: "Most of the tasks are on schedule.", exampleVi: "Phần lớn công việc đúng lịch." },
    { word: "ahead of schedule", ipa: "/əˈhed əv ˈskedʒuːl/", pos: "phrase", meaning: "sớm hơn lịch",
      example: "The forms are ahead of schedule.", exampleVi: "Các biểu mẫu nhanh hơn lịch." },
    { word: "blocker", ipa: "/ˈblɑːkər/", pos: "noun", meaning: "vấn đề đang chặn công việc, cần gỡ gấp",
      example: "The main blocker is IT capacity.", exampleVi: "Vấn đề chặn chính là năng lực của IT." },
    { word: "action item", ipa: "/ˈækʃən ˌaɪtəm/", pos: "noun", meaning: "việc cần làm, giao cho một người cụ thể",
      example: "Each action item has an owner and a date.", exampleVi: "Mỗi việc cần làm có người phụ trách và ngày." },
    { word: "spend to date", ipa: "/ˈspend tə ˈdeɪt/", pos: "noun", meaning: "số tiền đã chi đến nay",
      example: "Spend to date is VND 38 million.", exampleVi: "Số tiền đã chi đến nay là 38 triệu đồng." },
    { word: "walk through", ipa: "/ˈwɔːk θruː/", pos: "phrasal verb", meaning: "trình bày lần lượt từng phần",
      example: "Let me walk you through the update.", exampleVi: "Để tôi trình bày lần lượt bản cập nhật." }
  ],

  pronunciation: {
    groups: [
      {
        title: "have / has đọc nhẹ, nhấn V3",
        text: "Trong hiện tại hoàn thành, have / has đọc rất nhẹ /əv, həz/, nhấn vào động từ chính (V3) và từ chỉ thời gian. Âm tiết in hoa là âm đọc to và dài hơn.",
        items: [
          { word: "We've completed the design.", marked: "We'v com·PLE·ted the de·SIGN." },
          { word: "It's been delayed.", marked: "It's been de·LAYED." },
          { word: "We haven't started the pilot yet.", marked: "We HAV·en't START·ed the PI·lot YET." }
        ]
      },
      {
        title: "Trọng âm từ",
        text: "Những từ hay gặp khi cập nhật dự án.",
        items: [
          { word: "progress (noun)", marked: "PRO·gress" },
          { word: "blocker", marked: "BLOCK·er" },
          { word: "schedule", marked: "SCHED·ule" }
        ]
      }
    ],
    sentences: [
      "We have already digitized six of the ten forms.",
      "We selected the vendor three weeks ago, and they delivered the first version last week.",
      "The IT integration has slipped by two weeks, but we haven't spent more than planned."
    ]
  },

  listening: {
    title: "A project status update",
    setting: "Room 301. Anh Tuấn báo cáo tiến độ dự án cổng đón nhân viên mới với chị Grace, chị Lan, Sam, chị Ngoc và anh Hung.",
    speakers: { tuan: "Tuan (HR Executive)", grace: "Grace (HR Director)", sam: "Sam (IT Support)", ngoc: "Ngoc (Chief Accountant)", hung: "Hung (Logistics Supervisor)", lan: "Lan (HR Manager)" },
    lines: [
      { s: "tuan", text: "Thank you all for coming. I'll walk you through the status of the onboarding portal. Overall, the status is amber: most things are on schedule, but there is one delay.",
        vi: "Cảm ơn mọi người đã đến. Tôi sẽ trình bày tình trạng cổng đón nhân viên mới. Nhìn chung, tình trạng là vàng: phần lớn đúng lịch, nhưng có một điểm bị trễ." },
      { s: "tuan", text: "First, what we've done. We completed the design phase four weeks ago, and we selected the vendor three weeks ago.",
        vi: "Trước hết, điều đã làm. Chúng tôi hoàn tất giai đoạn thiết kế cách đây bốn tuần, và chọn nhà cung cấp cách đây ba tuần." },
      { s: "grace", text: "And the build phase?",
        vi: "Còn giai đoạn xây dựng?" },
      { s: "tuan", text: "We've made good progress so far. We've already digitized six of the ten forms, and the e-signature module has just passed testing. We recorded the welcome video last week.",
        vi: "Chúng tôi đã tiến triển tốt đến nay. Đã số hóa sáu trong mười biểu mẫu, và mô-đun ký điện tử vừa qua kiểm thử. Chúng tôi quay video chào mừng tuần trước." },
      { s: "lan", text: "That's ahead of schedule for the forms, isn't it?",
        vi: "Phần biểu mẫu nhanh hơn lịch đúng không?" },
      { s: "tuan", text: "Slightly, yes. Now the problem. The IT checklist integration hasn't started yet. It's slipped by about two weeks.",
        vi: "Đúng, hơi nhanh hơn. Giờ đến vấn đề. Phần kết nối danh sách việc của IT chưa bắt đầu. Nó đã trễ khoảng hai tuần." },
      { s: "sam", text: "That's my fault, I'm afraid. I've been completely tied up with the warehouse system go-live. It only finished on Friday.",
        vi: "Đó là lỗi của tôi, tôi e vậy. Tôi bị vướng hoàn toàn với đợt chạy chính thức hệ thống kho. Nó chỉ xong vào thứ Sáu." },
      { s: "tuan", text: "It isn't a question of fault, Sam. It's a dependency we identified in the proposal. What I need is two days of your time this month.",
        vi: "Đây không phải vấn đề lỗi, Sam. Đó là sự phụ thuộc mà chúng ta đã nêu trong đề xuất. Điều tôi cần là hai ngày của anh trong tháng này." },
      { s: "sam", text: "I can give you Tuesday and Wednesday next week. The warehouse project has finished, so I'm free now.",
        vi: "Tôi có thể dành thứ Ba và thứ Tư tuần sau. Dự án kho đã xong, nên giờ tôi rảnh." },
      { s: "ngoc", text: "What about the budget, Tuan? Have we spent more than planned?",
        vi: "Còn ngân sách, Tuấn? Mình đã chi nhiều hơn dự kiến chưa?" },
      { s: "tuan", text: "No. We've spent thirty-eight million out of ninety so far, which is exactly as planned. The next payment to the vendor is due when the pilot starts.",
        vi: "Chưa. Đến nay chúng ta đã chi ba mươi tám trong chín mươi triệu, đúng như kế hoạch. Khoản thanh toán tiếp theo cho nhà cung cấp đến hạn khi đợt thử bắt đầu." },
      { s: "grace", text: "When do you expect to start the pilot?",
        vi: "Bao giờ em dự kiến bắt đầu đợt thử?" },
      { s: "tuan", text: "We haven't fixed a date yet. It depends on the IT integration. If Sam finishes next week, we can start the pilot in about three weeks, with the next five new hires.",
        vi: "Chúng tôi chưa chốt ngày. Việc này phụ thuộc vào kết nối IT. Nếu Sam xong tuần sau, mình có thể bắt đầu đợt thử sau khoảng ba tuần, với năm nhân viên mới tiếp theo." },
      { s: "hung", text: "May I add something? Our warehouse buddies would like to test the portal too. I've already asked two of them.",
        vi: "Tôi nói thêm được không? Các người hướng dẫn ở kho cũng muốn thử cổng. Tôi đã hỏi hai người rồi." },
      { s: "tuan", text: "That would be very helpful, Hung. Thank you. I'll send the written update and the action items by the end of the day.",
        vi: "Điều đó rất hữu ích, anh Hùng. Cảm ơn anh. Tôi sẽ gửi bản cập nhật bằng văn bản và các việc cần làm trước cuối ngày." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "Why is the overall status amber?",
        options: ["The budget is exceeded.", "The IT checklist integration has slipped by about two weeks.", "The forms are late.", "The vendor has left."],
        answer: 1, explanation: "“Overall, the status is amber… The IT checklist integration hasn't started yet. It's slipped by about two weeks.”" },
      { id: "l2", type: "choice", prompt: "What has Tuan already done?",
        options: ["Finished the pilot", "Digitized six of the ten forms and recorded the welcome video", "Spent the full budget", "Launched the portal"],
        answer: 1, explanation: "“We've already digitized six of the ten forms… We recorded the welcome video last week.”" },
      { id: "l3", type: "choice", prompt: "What does Tuan ask Sam for?",
        options: ["Two days of his time this month", "A new budget", "An apology", "A new vendor"],
        answer: 0, explanation: "“What I need is two days of your time this month.” Sam đồng ý thứ Ba và thứ Tư tuần sau." }
    ]
  },

  reading: {
    title: "Status update: digital onboarding portal",
    intro: "Bản cập nhật bằng văn bản anh Tuấn gửi các bên liên quan. Đọc và tìm điều đã xong, điều chưa xong, ngân sách và việc cần làm.",
    email: {
      from: "Tuan Nguyen <tuan.nguyen@riverside-trading.example>",
      to: "Grace Le; Lan Pham; Sam Lee; Ngoc Dang; Hung Cao",
      date: "Wednesday",
      subject: "Status update: digital onboarding portal (amber)",
      greeting: "Dear all,",
      paragraphs: [
        "Thank you for attending the meeting. Below is the written update, as promised.",
        "Overall status: amber. Most workstreams are on schedule, but the IT integration has slipped by about two weeks."
      ],
      list: [
        "Completed: the design phase was completed four weeks ago, and the vendor was selected three weeks ago. Six of the ten electronic forms have been digitized, and the e-signature module has passed testing. The welcome video was recorded last week.",
        "In progress: the remaining four forms are being built, and the buddy assignment function is being tested.",
        "Not yet started: the IT checklist integration, which has been delayed because IT was fully occupied with the warehouse system go-live. The pilot has not yet begun.",
        "Budget: VND 38 million has been spent so far out of VND 90 million, as planned.",
        "Issue: the IT integration is the main blocker, as the pilot cannot start without it."
      ],
      after: [
        "Action items: (1) Sam: two days for the IT integration, next Tuesday and Wednesday; (2) Tuan: complete the remaining four forms within two weeks; (3) Hung: nominate two warehouse buddies to test the portal; (4) Ngoc: confirm the payment date for the vendor's second invoice.",
        "If the IT integration is completed next week, the pilot is expected to start in about three weeks. I will send the next update in two weeks."
      ],
      closing: "Best regards,",
      signature: ["Tuan Nguyen", "HR Executive, Riverside Trading"]
    },
    glossary: [
      { term: "workstream", vi: "mảng công việc" },
      { term: "occupied with", vi: "bận với" },
      { term: "nominate", vi: "đề cử, chỉ định" },
      { term: "invoice", vi: "hóa đơn" },
      { term: "as promised", vi: "như đã hứa" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "Which tasks have been completed?",
        options: ["The pilot and the launch", "The design phase, vendor selection, six forms and the e-signature module", "Only the budget plan", "All ten forms"],
        answer: 1, explanation: "Mục Completed nêu thiết kế, chọn nhà cung cấp, sáu biểu mẫu và mô-đun ký điện tử." },
      { id: "r2", type: "choice", prompt: "What is the main blocker?",
        options: ["The budget", "The IT integration, because the pilot cannot start without it", "The vendor's contract", "The welcome video"],
        answer: 1, explanation: "“The IT integration is the main blocker, as the pilot cannot start without it.”" },
      { id: "r3", type: "choice", prompt: "What is Ngoc asked to do?",
        options: ["Build forms", "Nominate buddies", "Confirm the payment date for the vendor's second invoice", "Provide two days of IT time"],
        answer: 2, explanation: "“(4) Ngoc: confirm the payment date for the vendor's second invoice.”" }
    ]
  },

  grammar: {
    title: "Present perfect and past simple in progress reports",
    titleVi: "Hiện tại hoàn thành và quá khứ đơn khi báo cáo tiến độ",
    intro: "Khi báo cáo tiến độ, ta nói về kết quả đến nay (hiện tại hoàn thành) và về những việc có mốc thời gian rõ ràng (quá khứ đơn). Cả hai đều cần, nhưng dùng sai làm người nghe không rõ việc đã xong khi nào. Bốn mẫu dưới đây có trong buổi cập nhật và email bạn vừa học.",
    patterns: [
      { form: "have / has + V3 + already / just / so far / since… (kết quả đến nay)", use: "Nói điều đã xong và còn liên quan đến hiện tại. Không nêu thời điểm cụ thể.",
        examples: ["We've already digitized six of the ten forms.", "We've made good progress so far."] },
      { form: "quá khứ đơn + mốc thời gian (… ago / last week / in March)", use: "Nói việc đã xảy ra vào một thời điểm cụ thể trong quá khứ.",
        examples: ["We completed the design phase four weeks ago.", "We recorded the welcome video last week."] },
      { form: "haven't / hasn't + V3 + yet  ·  has / have not yet + V3", use: "Nói điều chưa xong tính đến lúc này.",
        examples: ["We haven't fixed a date for the pilot yet.", "The pilot has not yet begun."] },
      { form: "has / have been + V3 (bị động hiện tại hoàn thành)  ·  has slipped / has been delayed", use: "Nói điều đã xảy ra với việc, thường dùng cho vấn đề và tiến độ.",
        examples: ["The IT integration has been delayed.", "Six of the ten forms have been digitized."] }
    ],
    mistakes: [
      { wrong: "We have completed the design four weeks ago.", right: "We completed the design four weeks ago.", note: "Có mốc thời gian cụ thể (ago) → quá khứ đơn." },
      { wrong: "We didn't start the pilot already.", right: "We haven't started the pilot yet.", note: "Điều chưa xong đến nay → haven't + V3 + yet." },
      { wrong: "The IT integration has delayed by two weeks.", right: "The IT integration has been delayed by two weeks. / has slipped by two weeks.", note: "Cần bị động (has been delayed) hoặc dùng động từ slip." },
      { wrong: "We spend 38 million so far.", right: "We have spent 38 million so far.", note: "so far đi với hiện tại hoàn thành." }
    ],
    tip: "Bản cập nhật tốt có thứ tự: tình trạng chung (xanh, vàng, đỏ); điều đã xong; điều chưa xong; vấn đề và rủi ro; ngân sách; việc cần làm kèm tên người và ngày. Đừng giấu điều xấu; báo sớm vấn đề màu vàng để nó không biến thành màu đỏ."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "We ___ already digitized six of the ten forms.",
      options: ["have", "did", "are", "were"],
      answer: 0, explanation: "have already digitized = hiện tại hoàn thành (kết quả đến nay)." },
    { id: "p2", type: "gap", prompt: "We ___ the design phase four weeks ago.",
      options: ["have completed", "completed", "complete", "are completing"],
      answer: 1, explanation: "Có mốc thời gian cụ thể (four weeks ago) → quá khứ đơn: completed." },
    { id: "p3", type: "gap", prompt: "We haven't started the pilot ___.",
      options: ["already", "yet", "ago", "since"],
      answer: 1, explanation: "Câu phủ định hiện tại hoàn thành đi với yet." },
    { id: "p4", type: "choice", prompt: "Which sentence is correct?",
      options: ["We have selected the vendor three weeks ago.", "We are selecting the vendor three weeks ago.", "We select the vendor three weeks ago.", "We selected the vendor three weeks ago."],
      answer: 3, explanation: "three weeks ago → quá khứ đơn." },
    { id: "p5", type: "gap", prompt: "The IT integration has ___ delayed because Sam was busy.",
      options: ["be", "being", "been", "was"],
      answer: 2, explanation: "has been delayed = bị động hiện tại hoàn thành." },
    { id: "p6", type: "choice", prompt: "Which statement is the clearest status update?",
      options: ["Everything is fine.", "We are working.", "Maybe some problems.", "Status: amber. Six of ten forms digitized; IT integration slipped by two weeks."],
      answer: 3, explanation: "Câu D nêu tình trạng, kết quả bằng con số và vấn đề cụ thể." },
    { id: "p7", type: "gap", prompt: "The IT delay is the main ___ because the pilot cannot start without it.",
      options: ["blocker", "progress", "action item", "milestone"],
      answer: 0, explanation: "blocker = vấn đề chặn công việc." },
    { id: "p8", type: "gap", prompt: "Most tasks are on ___, but one has slipped.",
      options: ["line", "plan", "schedule", "way"],
      answer: 2, explanation: "on schedule = đúng lịch." },
    { id: "p9", type: "gap", prompt: "Each ___ item has an owner and a date.",
      options: ["spend", "action", "status", "amber"],
      answer: 1, explanation: "action item = việc cần làm có người phụ trách." },
    { id: "p10", type: "gap", prompt: "The forms are ___ of schedule; we expect to finish them early.",
      options: ["behind", "late", "ahead", "front"],
      answer: 2, explanation: "ahead of schedule = sớm hơn lịch." }
  ],

  writing: {
    title: "Write a status update",
    task: "Bạn là anh Tuấn. Viết bản cập nhật tiến độ (150–220 từ, dạng email) gửi chị Grace cho dự án Bộ công cụ cho quản lý. Tình trạng: xanh. Đã xong: sáu trong mười hướng dẫn đã được soạn; buổi giới thiệu thứ nhất được tổ chức tuần trước với 12 quản lý tham dự, phản hồi tốt. Chưa xong: bốn hướng dẫn còn lại; buổi giới thiệu thứ hai chưa tổ chức. Ngân sách: đã chi 15 triệu trong 40 triệu. Vấn đề: một số quản lý chưa trả lời phản hồi. Việc cần làm: Lan duyệt bốn hướng dẫn; Tuấn gửi nhắc quản lý. Dùng hiện tại hoàn thành và quá khứ đơn có mốc thời gian.",
    requirements: [
      "Mở đầu bằng lời chào và tình trạng chung.",
      "Dùng have / has + V3 + already / so far / just.",
      "Dùng quá khứ đơn với mốc thời gian (last week, two weeks ago…).",
      "Dùng haven't / hasn't … yet hoặc has not yet.",
      "Nêu ngân sách đã chi và việc cần làm có người phụ trách.",
      "Kết thúc email và ký tên."
    ],
    minWords: 150,
    maxWords: 220,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Dear … / Hi …)", pattern: "\\bdear\\b|\\bhi\\b" },
      { label: "Có have / has + V3 (already / so far / just)", pattern: "(have|has|'ve) (\\w+ )?(already|just)? ?\\w+(ed|en|ne)\\b|so far" },
      { label: "Có quá khứ đơn với mốc thời gian (ago / last week)", pattern: "last week|ago|last month" },
      { label: "Có haven't / hasn't … yet", pattern: "(haven't|hasn't|have not|has not)[^.]* yet|not yet" },
      { label: "Có ngân sách (budget / million)", pattern: "budget|million" },
      { label: "Có lời kết (Best regards …)", pattern: "regards|sincerely|best wishes" }
    ],
    model: [
      "Dear Grace,",
      "Here is the status update for the Manager Toolkit project. Overall status: green.",
      "Completed. Six of the ten guides have been drafted so far. We held the first introduction session last week, and 12 managers attended. The feedback has been very positive, and several managers have already started using the feedback template.",
      "Not yet completed. The remaining four guides have not yet been written, and we haven't organized the second introduction session yet.",
      "Budget. We have spent VND 15 million so far out of VND 40 million, which is in line with the plan.",
      "Issue. A few managers have not yet replied to my request for feedback on the first guides.",
      "Action items: Lan will review the four remaining guides by the end of next week, and I will send a reminder to the managers who have not replied. I will also book a room for the second session once the guides are ready.",
      "Best regards,",
      "Tuan"
    ]
  },

  review: {
    keyPhrases: [
      { en: "We've made good progress so far.", vi: "Đến nay chúng tôi đã tiến triển tốt." },
      { en: "We completed the design phase four weeks ago.", vi: "Chúng tôi hoàn tất giai đoạn thiết kế cách đây bốn tuần." },
      { en: "The pilot hasn't started yet.", vi: "Đợt thử chưa bắt đầu." },
      { en: "The IT integration has slipped by two weeks.", vi: "Phần kết nối IT đã trễ hai tuần." },
      { en: "We've spent 38 million out of 90 so far.", vi: "Đến nay chúng tôi đã chi 38 trong 90 triệu." },
      { en: "Each action item has an owner and a date.", vi: "Mỗi việc cần làm có người phụ trách và ngày." }
    ]
  }
});
