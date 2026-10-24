/* =========================================================
   C1 · Module 1 (Strategic HR Management) · Bài 5
   "HR budgets and business cases"
   Nối tiếp C1-M1-L1–L4. Chị Grace Le (HR Director) trình đề xuất đầu
   tư "Chương trình Nhân tài và Giữ chân" lên Tổng Giám đốc và chị Ngoc
   Dang (Kế toán trưởng). Số liệu (làm tròn):
   - Chi phí năm đầu: 480 triệu đồng = nhà tuyển dụng bán thời gian 120;
     chương trình phát triển quản lý 150; công cụ khảo sát và stay
     interview 60; thương hiệu nhà tuyển dụng 90; dự phòng 60.
   - Lợi ích ước tính năm đầu: giảm nghỉ việc từ khoảng 12 người xuống 8
     (mỗi người nghỉ tốn khoảng 60 triệu: phí tuyển, đào tạo, mất năng
     suất) = 240 triệu; giảm phí công ty tuyển dụng khoảng 40 triệu; tránh
     chi phí chậm mở trung tâm ước tính 200 triệu → tổng khoảng 480
     triệu (hòa vốn khoảng năm đầu nếu các giả định đúng; có độ không
     chắc chắn).
   - Chị Ngoc lo các giả định lạc quan. Kết quả: Tổng Giám đốc duyệt giai
     đoạn một 300 triệu (nhà tuyển dụng bán thời gian, phát triển quản
     lý, khảo sát) và dành riêng (ring-fence) phần còn lại, sẽ quyết sau
     khi xem kết quả sau sáu tháng.
   Bài viết: chị Lan viết đề xuất mua phần mềm quản lý hồ sơ nhân sự:
   chi phí 60 triệu/năm, tiết kiệm khoảng 15 giờ/tháng, giảm sai sót; lợi
   ích khó đo; so sánh với bảng tính hiện nay.
   Ngữ pháp: nhượng bộ although / even though / despite / in spite of /
   whereas / albeit.
   Thời gian nói áng chừng.
   ========================================================= */
window.EOH.registerLesson({
  id: "c1-m1-l5",
  reviewStatus: "draft",
  duration: "45–60 phút",
  scenario: "Chị Grace Le (HR Director) trình đề xuất đầu tư vào chương trình nhân tài và giữ chân lên Tổng Giám đốc và chị Ngoc Dang (Kế toán trưởng). Chị Ngoc nghi ngại về các giả định, còn chị Grace giải thích cả lợi ích lẫn rủi ro. Cuối cùng Tổng Giám đốc duyệt một phần ngân sách. Sau đó chị Grace gửi email tóm tắt đề xuất.",

  objectives: [
    "Hiểu và dùng 10 từ vựng thường gặp khi lập ngân sách và đề xuất đầu tư.",
    "Nghe cuộc thảo luận ngân sách, nhận ra con số, giả định, lo ngại và quyết định.",
    "Đọc email tóm tắt đề xuất đầu tư, tìm chi phí, lợi ích và các điều kiện.",
    "Dùng cấu trúc nhượng bộ: although / even though + mệnh đề; despite / in spite of + danh từ hoặc V-ing; whereas / while để đối chiếu; albeit + tính từ / cụm từ.",
    "Viết đề xuất đầu tư ngắn, cân nhắc cả chi phí lẫn lợi ích, dùng cấu trúc nhượng bộ."
  ],

  vocabulary: [
    { word: "business case", ipa: "/ˈbɪznəs keɪs/", pos: "noun", meaning: "bản đề xuất đầu tư (lý do kinh doanh cho một khoản chi)",
      example: "The business case shows the costs and the benefits.", exampleVi: "Bản đề xuất đầu tư cho thấy chi phí và lợi ích." },
    { word: "upfront cost", ipa: "/ˌʌpfrʌnt ˈkɔːst/", pos: "noun", meaning: "chi phí phải bỏ ra ngay từ đầu",
      example: "The upfront cost is 480 million dong.", exampleVi: "Chi phí ban đầu là 480 triệu đồng." },
    { word: "return on investment", ipa: "/rɪˌtɜːrn ɑːn ɪnˈvestmənt/", pos: "noun", meaning: "lợi nhuận trên vốn đầu tư (ROI)",
      example: "The return on investment will be clear after two years.", exampleVi: "Hiệu quả đầu tư sẽ rõ sau hai năm." },
    { word: "payback period", ipa: "/ˈpeɪbæk ˌpɪriəd/", pos: "noun", meaning: "thời gian hoàn vốn",
      example: "The payback period is about twelve months.", exampleVi: "Thời gian hoàn vốn khoảng mười hai tháng." },
    { word: "assumption", ipa: "/əˈsʌmpʃən/", pos: "noun", meaning: "giả định",
      example: "The calculation rests on several assumptions.", exampleVi: "Phép tính dựa trên một số giả định." },
    { word: "break even", ipa: "/ˌbreɪk ˈiːvən/", pos: "phrasal verb", meaning: "hòa vốn",
      example: "We expect to break even within the first year.", exampleVi: "Chúng tôi dự kiến hòa vốn trong năm đầu." },
    { word: "tangible", ipa: "/ˈtændʒəbəl/", pos: "adjective", meaning: "hữu hình, đo đếm được",
      example: "The tangible savings are about 240 million dong.", exampleVi: "Khoản tiết kiệm đo đếm được khoảng 240 triệu đồng." },
    { word: "intangible", ipa: "/ɪnˈtændʒəbəl/", pos: "adjective", meaning: "vô hình, khó đo bằng tiền",
      example: "Employee morale is an intangible benefit.", exampleVi: "Tinh thần nhân viên là lợi ích vô hình." },
    { word: "ring-fence", ipa: "/ˈrɪŋ fens/", pos: "verb", meaning: "dành riêng một khoản ngân sách, không dùng vào việc khác",
      example: "We can ring-fence the remaining budget until the review.", exampleVi: "Chúng ta có thể dành riêng phần ngân sách còn lại đến khi xem xét." },
    { word: "sign off", ipa: "/ˈsaɪn ɔːf/", pos: "phrasal verb", meaning: "chính thức phê duyệt (bằng chữ ký)",
      example: "The Director will sign off the first phase today.", exampleVi: "Hôm nay Giám đốc sẽ phê duyệt giai đoạn một." }
  ],

  pronunciation: {
    groups: [
      {
        title: "Nhấn sau từ nhượng bộ",
        text: "Với although / despite / whereas, nhấn mạnh ý đối lập ở vế sau. Ngừng giữa hai vế. Âm tiết in hoa là âm đọc to và dài hơn.",
        items: [
          { word: "Although it's expensive, it pays back.", marked: "al·THOUGH it's ex·PEN·sive | it PAYS BACK." },
          { word: "Despite the cost, we recommend it.", marked: "de·SPITE the COST | we rec·om·MEND it." },
          { word: "Whereas last year…, this year…", marked: "where·AS LAST year | THIS year…" },
          { word: "a modest, albeit real, saving", marked: "a MOD·est | al·BE·it REAL | SAV·ing" }
        ]
      },
      {
        title: "Trọng âm từ",
        text: "Những từ hay gặp khi đề xuất đầu tư.",
        items: [
          { word: "assumption", marked: "as·SUMP·tion" },
          { word: "intangible", marked: "in·TAN·gi·ble" },
          { word: "investment", marked: "in·VEST·ment" }
        ]
      }
    ],
    sentences: [
      "Although the upfront cost is high, the program should break even within a year.",
      "Despite the uncertainty in our estimates, the risk of doing nothing is greater.",
      "Whereas the direct savings are measurable, the benefits for morale are intangible."
    ]
  },

  listening: {
    title: "Presenting the business case",
    setting: "Phòng họp ban điều hành. Chị Grace trình đề xuất đầu tư với Tổng Giám đốc và chị Ngoc Dang.",
    speakers: { grace: "Grace (HR Director)", ngoc: "Ngoc (Chief Accountant)", director: "General Director" },
    lines: [
      { s: "grace", text: "Thank you for your time. I'm here to ask for four hundred and eighty million dong for a talent and retention program in the first year.",
        vi: "Cảm ơn quý vị đã dành thời gian. Tôi xin đề xuất bốn trăm tám mươi triệu đồng cho chương trình nhân tài và giữ chân trong năm đầu." },
      { s: "director", text: "That's a lot of money for HR. Convince me.",
        vi: "Đó là một khoản lớn cho phòng Nhân sự. Hãy thuyết phục tôi." },
      { s: "grace", text: "Although the upfront cost is high, the return is clear. Turnover costs us about sixty million dong per leaver. If we reduce leavers from twelve to eight, we save two hundred and forty million.",
        vi: "Tuy chi phí ban đầu cao, nhưng hiệu quả rất rõ. Mỗi người nghỉ việc tốn của chúng ta khoảng sáu mươi triệu đồng. Nếu giảm số người nghỉ từ mười hai xuống tám, chúng ta tiết kiệm hai trăm bốn mươi triệu." },
      { s: "ngoc", text: "That depends on your assumptions. Even though turnover is falling in other companies, there's no guarantee it will fall here.",
        vi: "Điều đó phụ thuộc vào giả định của em. Dù tỷ lệ nghỉ việc đang giảm ở các công ty khác, không có gì bảo đảm sẽ giảm ở đây." },
      { s: "grace", text: "That's fair. The estimates are uncertain, but even a smaller fall gives a positive return, albeit a modest one.",
        vi: "Chị nói đúng. Các ước tính chưa chắc chắn, nhưng ngay cả mức giảm nhỏ hơn cũng cho lợi nhuận dương, tuy khiêm tốn." },
      { s: "ngoc", text: "What about the other benefits? Can you put a number on them?",
        vi: "Còn các lợi ích khác thì sao? Em có thể đưa ra con số không?" },
      { s: "grace", text: "Some of them, yes. We'd save about forty million in agency fees, and we'd avoid an estimated two hundred million in delay costs if the hub is fully staffed on time.",
        vi: "Một số thì được. Mình tiết kiệm khoảng bốn mươi triệu phí công ty tuyển dụng, và tránh được khoảng hai trăm triệu chi phí chậm trễ nếu trung tâm đủ người đúng hạn." },
      { s: "director", text: "So the total benefit is about the same as the cost.",
        vi: "Vậy tổng lợi ích gần bằng chi phí." },
      { s: "grace", text: "Yes. Whereas the tangible savings are around two hundred and eighty million, the avoided delay costs are harder to prove. We'd probably break even in the first year, and make a profit in the second.",
        vi: "Vâng. Trong khi khoản tiết kiệm hữu hình khoảng hai trăm tám mươi triệu, chi phí chậm trễ tránh được thì khó chứng minh hơn. Có lẽ hòa vốn trong năm đầu, và có lãi trong năm thứ hai." },
      { s: "ngoc", text: "There are also intangible benefits, aren't there? Morale, for example.",
        vi: "Cũng có lợi ích vô hình đúng không? Ví dụ tinh thần nhân viên." },
      { s: "grace", text: "Right. Despite being impossible to measure exactly, morale affects every part of the business.",
        vi: "Đúng. Dù không thể đo chính xác, tinh thần nhân viên ảnh hưởng đến mọi mặt của công ty." },
      { s: "director", text: "I like the idea, but I'm not comfortable approving the whole amount at once. Ngoc, what do you suggest?",
        vi: "Tôi thích ý tưởng, nhưng tôi không thoải mái khi duyệt toàn bộ cùng lúc. Chị Ngọc, chị đề xuất thế nào?" },
      { s: "ngoc", text: "Approve phase one now, about three hundred million, and ring-fence the rest until we see the results after six months.",
        vi: "Duyệt giai đoạn một ngay bây giờ, khoảng ba trăm triệu, và dành riêng phần còn lại cho đến khi thấy kết quả sau sáu tháng." },
      { s: "director", text: "Agreed. I'll sign off phase one today, and we'll review in six months.",
        vi: "Đồng ý. Tôi sẽ phê duyệt giai đoạn một hôm nay, và chúng ta sẽ xem xét lại sau sáu tháng." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "How much does each leaver cost the company, according to Grace?",
        options: ["About 12 million dong", "About 480 million dong", "About 60 million dong", "About 240 million dong"],
        answer: 2, explanation: "“Turnover costs us about sixty million dong per leaver.” 240 triệu là khoản tiết kiệm nếu giảm bốn người nghỉ; 480 triệu là tổng ngân sách." },
      { id: "l2", type: "choice", prompt: "What does Ngoc say about Grace's calculation?",
        options: ["It depends on assumptions, and turnover may not fall here.", "It is completely wrong.", "It ignores salaries.", "It is too small."],
        answer: 0, explanation: "“That depends on your assumptions… there's no guarantee it will fall here.”" },
      { id: "l3", type: "choice", prompt: "What does the General Director decide?",
        options: ["Reject the proposal", "Approve everything immediately", "Ask HR to wait for a year", "Sign off phase one and review in six months"],
        answer: 3, explanation: "“I'll sign off phase one today, and we'll review in six months.” Phần còn lại được dành riêng (ring-fence)." }
    ]
  },

  reading: {
    title: "Business case: talent and retention program",
    intro: "Email chị Grace gửi Tổng Giám đốc và chị Ngoc sau cuộc họp. Đọc và tìm chi phí, lợi ích và quyết định.",
    email: {
      from: "Grace Le <grace.le@riverside-trading.example>",
      to: "General Director; Ngoc Dang",
      date: "Tuesday",
      subject: "Business case: talent and retention program",
      greeting: "Dear Mr. Director and Ngoc,",
      paragraphs: [
        "Thank you for your time and your constructive questions this morning. As requested, I am summarizing the business case and the decision taken.",
        "The first-year cost of the program is 480 million dong. Although this is a significant upfront investment, we believe it is justified by the expected benefits. The tangible savings are estimated at about 280 million dong: 240 million from a reduction in leavers from about 12 to 8 (at roughly 60 million per leaver), and 40 million in lower agency fees. In addition, we estimate that around 200 million dong in delay costs would be avoided if the Hai Phong hub is fully staffed on time. Whereas the savings on turnover can be measured, the avoided delay costs are harder to prove."
      ],
      list: [
        "Costs: part-time recruiter (120 million), management development (150 million), survey and stay interview tools (60 million), employer branding (90 million), contingency (60 million).",
        "Assumptions: turnover falls from 14.5% to about 10%; hub staffing is completed on schedule. Despite the uncertainty in these estimates, even a smaller fall in turnover would produce a positive, albeit smaller, return.",
        "Intangible benefits: employee morale and the employer brand, which cannot be measured directly."
      ],
      after: [
        "Decision: phase one (about 300 million dong: recruiter, management development and survey tools) has been approved, and the remainder will be ring-fenced until the six-month review. I will report the turnover and time-to-hire results at that point."
      ],
      closing: "With kind regards,",
      signature: ["Grace Le", "HR Director, Riverside Trading"]
    },
    glossary: [
      { term: "justify", vi: "chứng minh là hợp lý" },
      { term: "delay costs", vi: "chi phí do chậm trễ" },
      { term: "on schedule", vi: "đúng tiến độ" },
      { term: "remainder", vi: "phần còn lại" },
      { term: "directly", vi: "trực tiếp" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "How are the tangible savings made up?",
        options: ["120 million from recruiting and 160 million from training", "240 million from fewer leavers and 40 million in lower agency fees", "200 million from avoided delays and 80 million from salaries", "480 million from the program itself"],
        answer: 1, explanation: "“The tangible savings are estimated at about 280 million dong: 240 million from a reduction in leavers… and 40 million in lower agency fees.” 200 triệu (tránh chậm trễ) là khoản riêng, khó chứng minh hơn." },
      { id: "r2", type: "choice", prompt: "What does “albeit smaller” suggest about the return?",
        options: ["It would be negative.", "It would be positive but smaller than expected.", "It would be much bigger.", "It would be zero."],
        answer: 1, explanation: "“…even a smaller fall in turnover would produce a positive, albeit smaller, return.” albeit = mặc dù, mang nghĩa nhượng bộ nhẹ." },
      { id: "r3", type: "choice", prompt: "What happens to the part of the budget that is not approved yet?",
        options: ["It is cancelled.", "It is ring-fenced until the six-month review.", "It is given to another department.", "It is paid immediately."],
        answer: 1, explanation: "“…the remainder will be ring-fenced until the six-month review.”" }
    ]
  },

  grammar: {
    title: "Concession: although, despite, whereas, albeit",
    titleVi: "Nhượng bộ và đối chiếu: although, despite, whereas, albeit",
    intro: "Khi đề xuất đầu tư, người nghe muốn thấy bạn nhìn cả hai mặt. Cấu trúc nhượng bộ cho phép nêu một khó khăn hoặc hạn chế, rồi vẫn giữ nguyên kết luận. Bốn mẫu dưới đây có trong cuộc họp và email bạn vừa học.",
    patterns: [
      { form: "Although / Even though / Though + chủ ngữ + động từ, + mệnh đề chính", use: "Mặc dù… (vế sau là điều bạn muốn nhấn mạnh). Không dùng but trong cùng câu.",
        examples: ["Although the upfront cost is high, the return is clear.", "Even though turnover is falling elsewhere, there is no guarantee it will fall here."] },
      { form: "Despite / In spite of + danh từ hoặc V-ing, + mệnh đề chính", use: "Mặc dù… Sau despite là danh từ hoặc V-ing, không phải một mệnh đề đầy đủ.",
        examples: ["Despite the uncertainty in these estimates, the risk of doing nothing is greater.", "Despite being impossible to measure exactly, morale affects the whole business."] },
      { form: "Whereas / While + mệnh đề, + mệnh đề đối lập", use: "Trong khi… (đối chiếu hai điều khác nhau).",
        examples: ["Whereas the savings on turnover can be measured, the avoided delay costs are harder to prove.", "While the cost is certain, the benefits are less so."] },
      { form: "albeit + tính từ / cụm từ ngắn", use: "Mặc dù (rất trang trọng, thường đi với một cụm ngắn).",
        examples: ["Even a smaller fall would give a positive return, albeit a modest one.", "The system is useful, albeit expensive."] }
    ],
    mistakes: [
      { wrong: "Although the cost is high, but the return is clear.", right: "Although the cost is high, the return is clear.", note: "Dùng although hoặc but, không dùng cả hai trong một câu." },
      { wrong: "Despite the cost is high, we recommend it.", right: "Despite the high cost, we recommend it. / Although the cost is high, we recommend it.", note: "Sau despite là danh từ, không phải mệnh đề có động từ." },
      { wrong: "Despite of the uncertainty, we recommend it.", right: "Despite the uncertainty, we recommend it. / In spite of the uncertainty, …", note: "Despite không đi với of. Có in spite of." },
      { wrong: "Whereas the cost is certain, but the benefits are not.", right: "Whereas the cost is certain, the benefits are not.", note: "Không dùng but sau whereas." }
    ],
    tip: "Trong đề xuất, đặt điều bạn muốn người đọc nhớ ở vế chính (sau dấu phẩy), và đặt hạn chế ở vế nhượng bộ. “Although the cost is high, the return is clear” nhấn vào lợi ích; viết ngược lại sẽ nhấn vào chi phí."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "___ the upfront cost is high, the return is clear.",
      options: ["Despite", "Although", "In spite", "Whereas of"],
      answer: 1, explanation: "Sau chỗ trống là một mệnh đề có động từ (the cost is high) → Although." },
    { id: "p2", type: "gap", prompt: "___ the uncertainty in these estimates, we recommend the program.",
      options: ["Although", "Even though", "Despite", "Whereas"],
      answer: 2, explanation: "Sau chỗ trống là danh từ (the uncertainty) → Despite." },
    { id: "p3", type: "gap", prompt: "___ the savings on turnover can be measured, the avoided delay costs are harder to prove.",
      options: ["Despite", "Whereas", "In spite of", "Albeit"],
      answer: 1, explanation: "Đối chiếu hai điều khác nhau, sau là một mệnh đề → Whereas." },
    { id: "p4", type: "choice", prompt: "Which sentence is correct?",
      options: ["Although the cost is high, but the return is clear.", "Despite the cost is high, the return is clear.", "Although the cost is high, the return is clear.", "Despite of the high cost, the return is clear."],
      answer: 2, explanation: "Although + mệnh đề, + mệnh đề chính. Không dùng thêm but; despite cần danh từ; despite không đi với of." },
    { id: "p5", type: "gap", prompt: "Even a smaller fall would give a positive return, ___ a modest one.",
      options: ["despite", "although a", "albeit", "whereas"],
      answer: 2, explanation: "albeit + cụm ngắn: albeit a modest one. despite không đi với cụm này sau dấu phẩy, although a (thiếu mệnh đề có động từ) và whereas (dùng để đối chiếu) đều không đúng." },
    { id: "p6", type: "gap", prompt: "In spite ___ the extra cost, the program is worth it.",
      options: ["to", "for", "of", "with"],
      answer: 2, explanation: "Cụm cố định: in spite of." },
    { id: "p7", type: "gap", prompt: "The business case shows the costs and the ___ of the investment.",
      options: ["assumption", "returns", "ring-fence", "sign off"],
      answer: 1, explanation: "returns = lợi ích thu được. Cặp costs và returns hợp nghĩa." },
    { id: "p8", type: "gap", prompt: "Employee morale is an ___ benefit because it is hard to measure.",
      options: ["upfront", "tangible", "phased", "intangible"],
      answer: 3, explanation: "intangible = vô hình, khó đo. tangible là hữu hình." },
    { id: "p9", type: "gap", prompt: "We expect to ___ even within the first year.",
      options: ["break", "sign", "ring", "pay"],
      answer: 0, explanation: "break even = hòa vốn." },
    { id: "p10", type: "gap", prompt: "The Director will ___ off the first phase today.",
      options: ["break", "sign", "ring", "pay"],
      answer: 1, explanation: "sign off = chính thức phê duyệt." }
  ],

  writing: {
    title: "Write a short business case",
    task: "Bạn là chị Lan. Viết đề xuất ngắn (150–220 từ) gửi chị Grace xin mua phần mềm quản lý hồ sơ nhân sự cho phòng Nhân sự. Chi phí 60 triệu đồng một năm. Tiết kiệm khoảng 15 giờ mỗi tháng và giảm sai sót dữ liệu; lợi ích về sai sót khó tính bằng tiền. Hạn chế: chi phí cố định hằng năm, nhân viên cần thời gian làm quen. Đề nghị thử một năm rồi xem lại. Dùng các cấu trúc nhượng bộ.",
    requirements: [
      "Mở đầu bằng lời chào và mục đích đề xuất.",
      "Dùng although / even though + mệnh đề.",
      "Dùng despite / in spite of + danh từ hoặc V-ing.",
      "Dùng whereas / while hoặc albeit.",
      "Nêu chi phí, lợi ích hữu hình và vô hình.",
      "Kết thúc email và ký tên."
    ],
    minWords: 150,
    maxWords: 220,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Dear … / Hi …)", pattern: "\\bdear\\b|\\bhi\\b" },
      { label: "Có although / even though / though", pattern: "although|even though|\\bthough\\b" },
      { label: "Có despite / in spite of", pattern: "despite|in spite of" },
      { label: "Có whereas / while / albeit", pattern: "whereas|\\bwhile\\b|albeit" },
      { label: "Có số tiền hoặc số giờ", pattern: "\\d+ (million|hours)" },
      { label: "Có lời kết (Best regards …)", pattern: "regards|sincerely|best wishes" }
    ],
    model: [
      "Dear Grace,",
      "I would like to propose the purchase of HR record software for our department, and I have summarized the business case below.",
      "Although the software costs 60 million dong a year, we believe it is a worthwhile investment. At present, our team spends about 15 hours a month searching for and updating information in spreadsheets. The software would save most of this time, so the staff could focus on recruitment and development.",
      "Whereas the time savings are easy to measure, the reduction in data errors is harder to put a number on. Even so, errors in leave and payroll records create real risks, albeit small ones, so we consider this an important intangible benefit.",
      "There are also limits. Despite the clear benefits, the annual fee is a fixed cost, and staff will need some time to learn the new system.",
      "I therefore recommend a one-year trial, followed by a review of the time savings and error rates.",
      "I would be grateful for your comments.",
      "Best regards,",
      "Lan"
    ]
  },

  review: {
    keyPhrases: [
      { en: "Although the upfront cost is high, the return is clear.", vi: "Tuy chi phí ban đầu cao, nhưng hiệu quả rất rõ." },
      { en: "Despite the uncertainty in these estimates, we recommend the program.", vi: "Dù các ước tính chưa chắc chắn, chúng tôi vẫn đề xuất chương trình." },
      { en: "Whereas the savings can be measured, the delay costs are harder to prove.", vi: "Trong khi khoản tiết kiệm đo được, chi phí chậm trễ khó chứng minh hơn." },
      { en: "Even a smaller fall would give a positive return, albeit a modest one.", vi: "Ngay cả mức giảm nhỏ hơn cũng cho lợi nhuận dương, tuy khiêm tốn." },
      { en: "We can ring-fence the remaining budget until the review.", vi: "Chúng ta có thể dành riêng phần ngân sách còn lại cho đến khi xem xét." },
      { en: "I'll sign off phase one today.", vi: "Hôm nay tôi sẽ phê duyệt giai đoạn một." }
    ]
  }
});
