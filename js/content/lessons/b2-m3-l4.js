/* =========================================================
   B2 · Module 3 (Compensation, Benefits and HR Analytics) · Bài 4
   "Turnover and retention data"
   Nối tiếp B2-M3-L3. Đầu năm mới, Tuấn tính số liệu nghỉ việc năm
   trước. Họp Room 301: chị Lan, anh Tuấn, anh Son Bui (Logistics
   Manager).
   - 9 người nghỉ việc; số nhân viên trung bình 62 → tỷ lệ nghỉ việc
     khoảng 14,5% (năm trước nữa 10%).
   - 5/9 người nghỉ thuộc Logistics; 3 người trong số đó cùng sang một
     công ty kho vận mới gần khu công nghiệp. Lương Logistics
     Coordinator ngang thị trường (B2-M3-L1) → lương không thể là lý do
     duy nhất.
   - 2 người nhắc đến làm thêm giờ cuối tháng; Logistics thiếu người
     gần cả năm.
   - 4 người nghỉ trong 6 tháng đầu; tin tuyển dụng không nhắc đến làm
     theo ca.
   - Hành động: phỏng vấn giữ chân (stay interview) với nhóm Logistics
     trong quý này; người hướng dẫn (buddy) cho mỗi nhân viên mới trong
     3 tháng đầu (anh Son tự chọn); tin tuyển dụng ghi rõ làm theo ca.
   Thời gian nói áng chừng.
   ========================================================= */
window.EOH.registerLesson({
  id: "b2-m3-l4",
  reviewStatus: "approved", // Linh duyệt ngày 24/10/2026
  duration: "45–60 phút",
  scenario: "Đầu năm mới, anh Tuấn (HR Executive) tính tỷ lệ nghỉ việc của năm trước. Số người nghỉ tăng, nhất là ở bộ phận Logistics. Chị Lan (HR Manager), anh Tuấn và anh Son Bui (Logistics Manager) họp để đoán nguyên nhân và bàn cách giữ chân nhân viên. Sau đó anh Tuấn gửi email phân tích.",

  objectives: [
    "Hiểu và dùng 10 từ vựng thường gặp khi nói về nghỉ việc và giữ chân nhân viên.",
    "Nghe cuộc họp phân tích số liệu nghỉ việc, nắm được con số, nguyên nhân có thể và hành động.",
    "Đọc email phân tích nghỉ việc, phân biệt điều chắc chắn và điều chỉ là phỏng đoán.",
    "Phỏng đoán về quá khứ: must have + V3 (chắc chắn), may / might / could have + V3 (có thể), can't have + V3 (không thể), should have + V3 (lẽ ra nên).",
    "Viết email phân tích lý do nghỉ việc của một nhóm và đề xuất hành động."
  ],

  vocabulary: [
    { word: "turnover rate", ipa: "/ˈtɜːrnoʊvər reɪt/", pos: "noun", meaning: "tỷ lệ nghỉ việc",
      example: "Our turnover rate rose to about 14.5%.", exampleVi: "Tỷ lệ nghỉ việc của chúng ta tăng lên khoảng 14,5%." },
    { word: "retention", ipa: "/rɪˈtenʃən/", pos: "noun", meaning: "việc giữ chân nhân viên",
      example: "Retention is our top priority this year.", exampleVi: "Giữ chân nhân viên là ưu tiên hàng đầu năm nay." },
    { word: "leaver", ipa: "/ˈliːvər/", pos: "noun", meaning: "người nghỉ việc",
      example: "Five of the nine leavers were from Logistics.", exampleVi: "Năm trong chín người nghỉ việc là của Logistics." },
    { word: "stay interview", ipa: "/ˈsteɪ ˌɪntərvjuː/", pos: "noun", meaning: "buổi trò chuyện để hiểu vì sao nhân viên ở lại và điều gì khiến họ muốn đi",
      example: "We will hold stay interviews with the Logistics team.", exampleVi: "Chúng ta sẽ trò chuyện giữ chân với nhóm Logistics." },
    { word: "staff shortage", ipa: "/ˈstæf ˌʃɔːrtɪdʒ/", pos: "noun", meaning: "tình trạng thiếu người",
      example: "Staff shortages increased the pressure on the team.", exampleVi: "Thiếu người làm tăng áp lực lên cả nhóm." },
    { word: "shift work", ipa: "/ˈʃɪft wɜːrk/", pos: "noun", meaning: "làm việc theo ca",
      example: "The job ad didn't mention shift work.", exampleVi: "Tin tuyển dụng không nhắc đến làm theo ca." },
    { word: "new hire", ipa: "/ˌnuː ˈhaɪər/", pos: "noun", meaning: "nhân viên mới tuyển",
      example: "Every new hire will have a buddy.", exampleVi: "Mỗi nhân viên mới sẽ có một người hướng dẫn." },
    { word: "account for", ipa: "/əˈkaʊnt fɔːr/", pos: "phrasal verb", meaning: "chiếm (một phần trong tổng số)",
      example: "Logistics accounted for five of the nine leavers.", exampleVi: "Logistics chiếm năm trong chín người nghỉ việc." },
    { word: "terms", ipa: "/tɜːrmz/", pos: "noun", meaning: "điều kiện (lương, chế độ…) trong lời mời làm việc",
      example: "That company must have offered better terms.", exampleVi: "Công ty đó chắc chắn đã đưa ra điều kiện tốt hơn." },
    { word: "aggressively", ipa: "/əˈɡresɪvli/", pos: "adverb", meaning: "mạnh mẽ, ráo riết",
      example: "The new company has been hiring aggressively.", exampleVi: "Công ty mới đó đang tuyển người rất ráo riết." }
  ],

  pronunciation: {
    groups: [
      {
        title: "have đọc nhẹ /əv/",
        text: "Trong must have, might have, can't have, should have, từ have đọc rất nhẹ /əv/ và nối liền với từ phía trước. Nhấn vào động từ chính phía sau.",
        items: [
          { word: "must have offered", marked: "MUST‿əv OF·fered" },
          { word: "might have felt", marked: "MIGHT‿əv FELT" },
          { word: "can't have been", marked: "CAN'T‿əv BEEN" },
          { word: "should have described", marked: "SHOULD‿əv de·SCRIBED" }
        ]
      }
    ],
    sentences: [
      "They must have offered them more money.",
      "Pay can't have been the only reason.",
      "We should have described the shifts more clearly."
    ]
  },

  listening: {
    title: "Why did people leave?",
    setting: "Room 301. Chị Lan (HR Manager), anh Tuấn (HR Executive) và anh Son Bui (Logistics Manager) xem số liệu nghỉ việc năm trước.",
    speakers: { lan: "Lan (HR Manager)", tuan: "Tuan (HR Executive)", son: "Son (Logistics Manager)" },
    lines: [
      { s: "lan", text: "Thanks for joining us, Son. Tuan has finished the turnover figures for last year.",
        vi: "Cảm ơn anh Sơn đã đến. Tuấn đã làm xong số liệu nghỉ việc năm ngoái." },
      { s: "tuan", text: "Nine people left last year, so our turnover rate was about fourteen and a half percent. Five of them were from Logistics.",
        vi: "Năm ngoái có chín người nghỉ, nên tỷ lệ nghỉ việc khoảng mười bốn phẩy năm phần trăm. Năm người trong số đó thuộc Logistics." },
      { s: "son", text: "Five? That's more than half of all leavers. I knew we'd lost a few people, but not that many.",
        vi: "Năm người? Hơn một nửa số người nghỉ. Anh biết là mất vài người, nhưng không ngờ nhiều vậy." },
      { s: "tuan", text: "And three of those five joined the same new logistics company near the industrial park.",
        vi: "Và ba trong năm người đó cùng sang một công ty kho vận mới gần khu công nghiệp." },
      { s: "son", text: "They must have offered them more money. That company has been hiring aggressively.",
        vi: "Chắc chắn họ đã trả nhiều tiền hơn. Công ty đó đang tuyển người rất ráo riết." },
      { s: "tuan", text: "Maybe, but our pay for Logistics Coordinators is in line with the market. So pay can't have been the only reason.",
        vi: "Có thể, nhưng lương Logistics Coordinator của mình ngang thị trường. Nên lương không thể là lý do duy nhất." },
      { s: "lan", text: "What did the exit interviews say?",
        vi: "Phỏng vấn nghỉ việc nói gì?" },
      { s: "tuan", text: "Two people mentioned the overtime at the end of the month. They might have felt tired of working late so often.",
        vi: "Hai người nhắc đến làm thêm giờ cuối tháng. Có thể họ đã mệt vì phải ở lại muộn thường xuyên." },
      { s: "son", text: "That's fair. We were short of staff for most of the year, so the others had to cover.",
        vi: "Đúng vậy. Gần cả năm bọn anh thiếu người, nên những người còn lại phải làm bù." },
      { s: "lan", text: "Another worry is that four people left within their first six months.",
        vi: "Một điều đáng lo nữa là bốn người nghỉ ngay trong sáu tháng đầu." },
      { s: "tuan", text: "Yes. They may not have understood the job properly. Our job ad didn't mention shift work at all.",
        vi: "Vâng. Có thể họ đã không hiểu rõ công việc. Tin tuyển dụng của mình hoàn toàn không nhắc đến làm theo ca." },
      { s: "lan", text: "Then we should have described the shifts more clearly. That's on us, not on Logistics.",
        vi: "Vậy lẽ ra mình nên mô tả rõ hơn về ca làm việc. Lỗi đó là của phòng Nhân sự, không phải của Logistics." },
      { s: "son", text: "I could have given them more support, too. I was too busy to meet new staff regularly.",
        vi: "Anh cũng lẽ ra đã có thể hỗ trợ họ nhiều hơn. Anh quá bận nên không gặp nhân viên mới thường xuyên." },
      { s: "lan", text: "Let's fix it this year. Tuan, could you start stay interviews with the Logistics team? And let's give every new hire a buddy.",
        vi: "Năm nay mình sửa nhé. Tuấn, em bắt đầu các buổi trò chuyện giữ chân với nhóm Logistics được không? Và mỗi nhân viên mới sẽ có một người hướng dẫn." },
      { s: "son", text: "Good idea. I'll choose the buddies myself.",
        vi: "Ý hay. Anh sẽ tự chọn người hướng dẫn." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "How many of last year's leavers were from Logistics?",
        options: ["Three", "Four", "Nine", "Five"],
        answer: 3, explanation: "Tuấn nói: “Nine people left last year… Five of them were from Logistics.” Ba là số người sang cùng một công ty; bốn là số người nghỉ trong sáu tháng đầu." },
      { id: "l2", type: "choice", prompt: "Why does Tuan think pay can't have been the only reason?",
        options: ["Because nobody mentioned pay", "Because Logistics pay is in line with the market", "Because the new company pays less", "Because Son said so"],
        answer: 1, explanation: "“…our pay for Logistics Coordinators is in line with the market. So pay can't have been the only reason.”" },
      { id: "l3", type: "choice", prompt: "What does Lan admit?",
        options: ["HR should have described the shifts more clearly in the job ad.", "Logistics should have paid more.", "Son should have hired more staff.", "Tuan should have done more exit interviews."],
        answer: 0, explanation: "“Then we should have described the shifts more clearly. That's on us, not on Logistics.” “That's on us” = đó là lỗi của chúng tôi (phòng Nhân sự)." }
    ]
  },

  reading: {
    title: "Turnover analysis: last year",
    intro: "Email anh Tuấn gửi chị Lan và anh Son Bui. Đọc và phân biệt điều chắc chắn (số liệu) với điều chỉ là phỏng đoán (lý do).",
    email: {
      from: "Tuan Nguyen <tuan.nguyen@riverside-trading.example>",
      to: "Lan Pham; Son Bui",
      date: "Wednesday",
      subject: "Turnover analysis: last year",
      greeting: "Dear Lan and Son,",
      paragraphs: [
        "Please find below a summary of last year's turnover and some possible reasons. The full data is in the attached report.",
        "Nine employees left last year. With an average headcount of 62, this gives a turnover rate of about 14.5%, compared with 10% the year before. Logistics accounted for five of the nine leavers, and four people left within their first six months. The possible reasons are:"
      ],
      list: [
        "Competition: three Logistics leavers joined the same company. That company must have offered better terms, but since our pay is in line with the market, salary cannot have been the only factor.",
        "Workload: two leavers mentioned frequent overtime. Staff shortages in Logistics may have increased the pressure on the rest of the team.",
        "Expectations: our job advertisement did not mention shift work. New employees might not have known what the job involved, and we should have explained it clearly at the interview."
      ],
      after: [
        "Proposed actions: (1) stay interviews with all Logistics staff this quarter; (2) a buddy for every new hire in their first three months; (3) a clearer job advertisement that describes the shifts.",
        "I would welcome your comments before we present this at the management meeting."
      ],
      closing: "Best regards,",
      signature: ["Tuan Nguyen", "HR Executive, Riverside Trading"]
    },
    glossary: [
      { term: "average headcount", vi: "số nhân viên bình quân" },
      { term: "compared with", vi: "so với" },
      { term: "factor", vi: "yếu tố" },
      { term: "expectations", vi: "kỳ vọng, điều người ta nghĩ trước" },
      { term: "involve", vi: "bao gồm (công việc gì)" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "What was last year's turnover rate?",
        options: ["About 10%", "About 14.5%", "About 62%", "About 5%"],
        answer: 1, explanation: "“…this gives a turnover rate of about 14.5%, compared with 10% the year before.” 10% là của năm trước nữa." },
      { id: "r2", type: "choice", prompt: "Which sentence matches the email?",
        options: ["Salary was definitely the main reason.", "No one mentioned overtime.", "The job ad described the shifts clearly.", "Salary cannot have been the only factor."],
        answer: 3, explanation: "“…salary cannot have been the only factor.” Email chỉ nói lương không thể là yếu tố duy nhất, không nói chắc chắn là lý do chính." },
      { id: "r3", type: "choice", prompt: "Which action is NOT proposed?",
        options: ["Stay interviews with Logistics staff", "A buddy for every new hire", "A higher salary for all Logistics staff", "A clearer job advertisement"],
        answer: 2, explanation: "Ba hành động đề xuất là: stay interviews, buddy, tin tuyển dụng rõ hơn. Email không đề xuất tăng lương cho Logistics." }
    ]
  },

  grammar: {
    title: "Speculating about the past: must have, might have, can't have",
    titleVi: "Phỏng đoán về chuyện đã xảy ra",
    intro: "Khi phân tích vì sao nhân viên nghỉ việc, ta thường không biết chắc lý do. Ta dùng động từ khuyết thiếu + have + V3 để nói mức độ chắc chắn về chuyện đã qua. Bốn mẫu dưới đây có trong cuộc họp và email bạn vừa học.",
    patterns: [
      { form: "must have + V3", use: "Gần như chắc chắn đã xảy ra (có bằng chứng rõ).",
        examples: ["Three leavers joined the same company. It must have offered them better terms.", "Son must have been surprised by the figures."] },
      { form: "may / might / could have + V3  ·  may not / might not have + V3", use: "Có thể đã xảy ra (hoặc có thể đã không xảy ra). Chưa chắc.",
        examples: ["They might have felt tired of working late so often.", "They may not have understood the job properly."] },
      { form: "can't / cannot have + V3", use: "Chắc chắn không phải vậy (có bằng chứng ngược lại).",
        examples: ["Our pay is in line with the market, so pay can't have been the only reason.", "Onboarding can't have been the problem. Everyone rated it highly."] },
      { form: "should have + V3  ·  could have + V3 (tiếc nuối)", use: "Lẽ ra nên làm / lẽ ra có thể làm, nhưng đã không làm.",
        examples: ["We should have described the shifts more clearly.", "I could have given them more support."] }
    ],
    mistakes: [
      { wrong: "They must have offer more money.", right: "They must have offered more money.", note: "Sau have dùng V3 (quá khứ phân từ): offered." },
      { wrong: "Pay mustn't have been the reason.", right: "Pay can't have been the reason.", note: "Phỏng đoán phủ định chắc chắn dùng can't have, không dùng mustn't have." },
      { wrong: "We should described the shifts.", right: "We should have described the shifts.", note: "Nói về quá khứ cần have: should have + V3." },
      { wrong: "He might has left because of overtime.", right: "He might have left because of overtime.", note: "Sau động từ khuyết thiếu luôn là have, không bao giờ là has." }
    ],
    tip: "Trong báo cáo nhân sự, hãy tách rõ dữ kiện và phỏng đoán. Dữ kiện dùng thì quá khứ đơn (Nine employees left). Phỏng đoán dùng may / might have, và chỉ dùng must have khi có bằng chứng. Như vậy người đọc không hiểu nhầm phỏng đoán thành kết luận."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "Three leavers joined the same company. It ___ offered them better pay.",
      context: "Người nói gần như chắc chắn.",
      options: ["must have", "can't have", "should have", "must"],
      answer: 0, explanation: "Gần như chắc chắn về quá khứ → must have + V3. “must offered” sai vì thiếu have." },
    { id: "p2", type: "gap", prompt: "Our pay is in line with the market, so pay ___ been the only reason.",
      options: ["must have", "can't have", "should have", "might"],
      answer: 1, explanation: "Có bằng chứng ngược lại (lương ngang thị trường) → can't have been. “might been” sai vì thiếu have." },
    { id: "p3", type: "gap", prompt: "Two people mentioned overtime. It ___ played a part in their decision.",
      options: ["can't have", "must", "might have", "should have"],
      answer: 2, explanation: "Có thể, nhưng chưa chắc → might have played. should have = lẽ ra nên, sai nghĩa." },
    { id: "p4", type: "gap", prompt: "The job ad didn't mention shifts. We ___ described them more clearly.",
      options: ["must have", "can't have", "may have", "should have"],
      answer: 3, explanation: "Lẽ ra nên làm nhưng đã không làm → should have described." },
    { id: "p5", type: "choice", prompt: "“He might have left because of the overtime.” What does this mean?",
      options: ["We are sure overtime was the reason.", "Overtime was possibly the reason.", "Overtime was definitely not the reason.", "He should not have left."],
      answer: 1, explanation: "might have + V3 = có thể đã… (chưa chắc). Chắc chắn phải dùng must have." },
    { id: "p6", type: "choice", prompt: "Which sentence is correct?",
      options: ["They must have offer more money.", "They must had offered more money.", "They must have offered more money.", "They must to have offered more money."],
      answer: 2, explanation: "must + have + V3: must have offered." },
    { id: "p7", type: "gap", prompt: "New staff ___ not have understood the job properly.",
      options: ["may", "did", "must to", "should to"],
      answer: 0, explanation: "may not have + V3 = có thể đã không… “did not have understood” sai cấu trúc." },
    { id: "p8", type: "gap", prompt: "Logistics ___ five of the nine leavers.",
      options: ["resulted in", "rounded", "accounted for", "renewed"],
      answer: 2, explanation: "account for = chiếm (một phần trong tổng số)." },
    { id: "p9", type: "gap", prompt: "We will hold ___ interviews to find out why people stay with us.",
      options: ["exit", "stay", "job", "group"],
      answer: 1, explanation: "stay interview = trò chuyện với người đang làm để hiểu vì sao họ ở lại. exit interview là với người sắp nghỉ." },
    { id: "p10", type: "gap", prompt: "We were short of staff all year. The staff ___ put pressure on the team.",
      options: ["turnover", "retention", "leaver", "shortage"],
      answer: 3, explanation: "staff shortage = tình trạng thiếu người." }
  ],

  writing: {
    title: "Analyze leavers from a team",
    task: "Bạn là anh Tuấn. Viết email gửi chị Lan (120–180 từ) phân tích ba người nghỉ việc ở nhóm Kinh doanh năm ngoái: cả ba nghỉ trong năm đầu; hai người sang công ty đối thủ có hoa hồng cao hơn nhiều; một người chuyển vào Thành phố Hồ Chí Minh theo gia đình. Phỏng đoán thêm: chỉ tiêu doanh số lúc đầu có thể quá cao. Đề xuất hành động.",
    requirements: [
      "Mở đầu bằng lời chào và mục đích email.",
      "Dùng must have + V3.",
      "Dùng may / might / could have + V3.",
      "Dùng can't / cannot have + V3.",
      "Dùng should have + V3.",
      "Kết thúc email và ký tên."
    ],
    minWords: 120,
    maxWords: 180,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Dear … / Hi …)", pattern: "\\bdear\\b|\\bhi\\b" },
      { label: "Có must have + V3", pattern: "must have \\w+" },
      { label: "Có may / might / could have + V3", pattern: "(may|might|could)( not)? have \\w+" },
      { label: "Có can't / cannot have + V3", pattern: "(can't|can’t|cannot|couldn't|couldn’t) have \\w+" },
      { label: "Có should have + V3", pattern: "should have \\w+" },
      { label: "Có lời kết (Best regards …)", pattern: "regards|sincerely|best wishes" }
    ],
    model: [
      "Hi Lan,",
      "I have looked at the three leavers from the Sales team last year. Here are my thoughts.",
      "All three left within their first year. Two of them joined competitors, and both received much higher commission rates there. Those companies must have targeted our new staff on purpose.",
      "The third person moved to Ho Chi Minh City with her family, so her decision can't have been about the job itself.",
      "The new staff might have felt that their sales targets were too high at the beginning. In my opinion, we should have given them lower targets for the first three months.",
      "I suggest that David holds stay interviews with the newer members of his team, and that we review the targets for new hires.",
      "Let me know what you think.",
      "Best regards,",
      "Tuan"
    ]
  },

  review: {
    keyPhrases: [
      { en: "Logistics accounted for five of the nine leavers.", vi: "Logistics chiếm năm trong chín người nghỉ việc." },
      { en: "That company must have offered them better terms.", vi: "Công ty đó chắc chắn đã đưa ra điều kiện tốt hơn." },
      { en: "Pay can't have been the only reason.", vi: "Lương không thể là lý do duy nhất." },
      { en: "They might have felt tired of working late so often.", vi: "Có thể họ đã mệt vì phải ở lại muộn quá thường xuyên." },
      { en: "We should have described the shifts more clearly.", vi: "Lẽ ra chúng ta nên mô tả rõ hơn về ca làm việc." },
      { en: "Let's give every new hire a buddy.", vi: "Hãy để mỗi nhân viên mới có một người hướng dẫn." }
    ]
  }
});
