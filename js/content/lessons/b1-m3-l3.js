/* =========================================================
   B1 · Module 3 (Compensation, Benefits and Attendance) · Bài 3
   "Overtime and shift work"
   Nối tiếp B1-M3-L2: sắp đến kỳ khóa sổ cuối năm, phòng Kế toán (chị
   Ngoc Dang là Chief Accountant) có thể phải làm thêm giờ. Hoa hỏi Tuấn
   về quy định. Quy định: phải được quản lý duyệt trước; người lao động
   đồng ý mới làm thêm (trường hợp thường); trả ít nhất 150% ngày thường,
   200% ngày nghỉ hằng tuần, 300% ngày lễ (chưa tính lương ngày lễ);
   tối đa 40 giờ làm thêm mỗi tháng; điền mẫu yêu cầu làm thêm trên mạng
   nội bộ và gửi chị Ngoc. Thời gian nói áng chừng.
   ========================================================= */
window.EOH.registerLesson({
  id: "b1-m3-l3",
  reviewStatus: "approved", // Linh duyệt ngày 23/10/2026
  duration: "40–50 phút",
  scenario: "Cuối năm phòng Kế toán phải khóa sổ nên có thể làm thêm giờ. Chị Hoa (kế toán) hỏi Tuấn (HR Executive) về quy định làm thêm giờ: ai duyệt, có bắt buộc không, trả bao nhiêu và tối đa bao nhiêu giờ. Sau đó Tuấn gửi cả phòng Kế toán email tóm tắt các quy định.",

  objectives: [
    "Hiểu và dùng 10 từ vựng thường gặp về làm thêm giờ và ca làm việc.",
    "Nghe cuộc trao đổi về quy định làm thêm giờ, ghi lại ai duyệt, mức trả và giới hạn mỗi tháng.",
    "Đọc email quy định làm thêm giờ, phân biệt điều được phép, điều bắt buộc và điều không bắt buộc.",
    "Dùng be allowed to, have to, be required to (và phủ định) để nói về quy định.",
    "Viết email giải thích quy định làm thêm giờ cho cả nhóm."
  ],

  vocabulary: [
    { word: "overtime", ipa: "/ˈoʊvərtaɪm/", pos: "noun", meaning: "giờ làm thêm",
      example: "Overtime has to be approved in advance.", exampleVi: "Giờ làm thêm phải được duyệt trước." },
    { word: "shift", ipa: "/ʃɪft/", pos: "noun", meaning: "ca làm việc",
      example: "The Logistics team works in two shifts.", exampleVi: "Nhóm Logistics làm việc theo hai ca." },
    { word: "approval", ipa: "/əˈpruːvəl/", pos: "noun", meaning: "sự chấp thuận, sự duyệt",
      example: "You need your manager's approval before you work overtime.", exampleVi: "Bạn cần sự chấp thuận của quản lý trước khi làm thêm giờ." },
    { word: "overtime rate", ipa: "/ˈoʊvərtaɪm reɪt/", pos: "noun", meaning: "mức trả cho giờ làm thêm",
      example: "The overtime rate is higher than the normal rate.", exampleVi: "Mức trả giờ làm thêm cao hơn mức bình thường." },
    { word: "weekly day off", ipa: "/ˈwiːkli deɪ ɔːf/", pos: "noun", meaning: "ngày nghỉ hằng tuần",
      example: "Overtime on a weekly day off is paid at two hundred percent.", exampleVi: "Làm thêm vào ngày nghỉ hằng tuần được trả hai trăm phần trăm." },
    { word: "public holiday", ipa: "/ˈpʌblɪk ˈhɑːlɪdeɪ/", pos: "noun", meaning: "ngày lễ",
      example: "The office is closed on public holidays.", exampleVi: "Văn phòng đóng cửa vào các ngày lễ." },
    { word: "consent", ipa: "/kənˈsent/", pos: "noun", meaning: "sự đồng ý",
      example: "Employees must give their consent to work overtime.", exampleVi: "Người lao động phải đồng ý mới làm thêm giờ." },
    { word: "limit", ipa: "/ˈlɪmɪt/", pos: "noun", meaning: "giới hạn",
      example: "There is a limit of forty overtime hours per month.", exampleVi: "Có giới hạn bốn mươi giờ làm thêm mỗi tháng." },
    { word: "roster", ipa: "/ˈrɑːstər/", pos: "noun", meaning: "bảng phân ca, lịch trực",
      example: "The roster is published every Friday.", exampleVi: "Bảng phân ca được công bố vào mỗi thứ Sáu." },
    { word: "rotate", ipa: "/ˈroʊteɪt/", pos: "verb", meaning: "luân phiên, đổi vòng",
      example: "Shifts rotate every week.", exampleVi: "Các ca luân phiên mỗi tuần." }
  ],

  pronunciation: {
    groups: [
      {
        title: "Trọng âm của từ",
        text: "Những từ dưới đây hay gặp khi nói về làm thêm giờ. Âm tiết in hoa là âm đọc to và dài hơn.",
        items: [
          { word: "overtime", marked: "O·ver·time", note: "Danh từ ghép: nhấn âm tiết đầu." },
          { word: "approval", marked: "ap·PRO·val" },
          { word: "consent", marked: "con·SENT" },
          { word: "limit", marked: "LIM·it" },
          { word: "roster", marked: "ROS·ter" },
          { word: "rotate", marked: "RO·tate", note: "Nhấn âm tiết đầu." }
        ]
      },
      {
        title: "have to và has to",
        text: "Trong lời nói, have to thường đọc /ˈhæf tə/ và has to đọc /ˈhæs tə/ (v → f, z → s trước chữ t). Đọc liền, nhẹ ở to.",
        items: [
          { word: "have to", marked: "/HAF tə/", note: "You have to fill in the form." },
          { word: "has to", marked: "/HAS tə/", note: "She has to record the hours." }
        ]
      }
    ],
    sentences: [
      "You are not allowed to work overtime without approval.",
      "Employees are required to fill in the overtime form.",
      "You don't have to work overtime unless you agree."
    ]
  },

  listening: {
    title: "Overtime rules for the year-end closing",
    setting: "Phòng Nhân sự, buổi sáng, vài tuần trước kỳ khóa sổ cuối năm. Hoa hỏi Tuấn về quy định làm thêm giờ.",
    speakers: { hoa: "Hoa (Accountant)", tuan: "Tuan (HR Executive)" },
    lines: [
      { s: "hoa", text: "Tuan, the year-end closing is coming. Ms. Ngoc said that we might have to work overtime. How does it work?",
        vi: "Tuấn, sắp đến kỳ khóa sổ cuối năm. Chị Ngọc nói chúng tôi có thể phải làm thêm giờ. Quy định thế nào?" },
      { s: "tuan", text: "First, overtime has to be approved in advance by your manager. You're not allowed to work overtime without approval.",
        vi: "Trước hết, giờ làm thêm phải được quản lý duyệt trước. Chị không được phép làm thêm giờ khi chưa được duyệt." },
      { s: "hoa", text: "Am I required to work overtime if Ms. Ngoc asks me?",
        vi: "Nếu chị Ngọc yêu cầu, tôi có bắt buộc phải làm thêm không?" },
      { s: "tuan", text: "In normal cases, you're not required to work overtime unless you agree. The law says employees must give their consent.",
        vi: "Trong trường hợp bình thường, chị không bắt buộc làm thêm trừ khi chị đồng ý. Luật quy định người lao động phải đồng ý." },
      { s: "hoa", text: "How is it paid?",
        vi: "Làm thêm được trả thế nào?" },
      { s: "tuan", text: "At least one hundred fifty percent of the normal rate on a weekday, two hundred percent on your weekly day off, and three hundred percent on a public holiday, not including the holiday pay.",
        vi: "Ít nhất một trăm năm mươi phần trăm mức bình thường vào ngày thường, hai trăm phần trăm vào ngày nghỉ hằng tuần, và ba trăm phần trăm vào ngày lễ, chưa tính lương ngày lễ." },
      { s: "hoa", text: "Is there a limit?",
        vi: "Có giới hạn không?" },
      { s: "tuan", text: "Yes. You're allowed to work a maximum of forty overtime hours per month. You also have to record the hours on your timesheet.",
        vi: "Có. Chị được phép làm thêm tối đa bốn mươi giờ mỗi tháng. Chị cũng phải ghi số giờ vào bảng chấm công." },
      { s: "hoa", text: "Our office is closed on Saturdays. What if we come in on a Saturday?",
        vi: "Văn phòng chúng ta đóng cửa vào thứ Bảy. Nếu chúng tôi đến làm vào thứ Bảy thì sao?" },
      { s: "tuan", text: "Saturday is a weekly day off, so it's paid at two hundred percent. But remember, you need approval before you come in.",
        vi: "Thứ Bảy là ngày nghỉ hằng tuần nên được trả hai trăm phần trăm. Nhưng nhớ là chị cần được duyệt trước khi đến." },
      { s: "hoa", text: "Understood. Is there a form?",
        vi: "Tôi hiểu rồi. Có mẫu đơn không?" },
      { s: "tuan", text: "Yes, the overtime request form is on the intranet. You have to fill it in and send it to Ms. Ngoc for approval.",
        vi: "Có, mẫu yêu cầu làm thêm giờ ở trên mạng nội bộ. Chị phải điền và gửi cho chị Ngọc để duyệt." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "Who has to approve overtime in advance?",
        options: ["Your manager", "The accountant", "The receptionist", "Nobody"],
        answer: 0, explanation: "Tuấn nói: “overtime has to be approved in advance by your manager.”" },
      { id: "l2", type: "choice", prompt: "What is the overtime rate on a public holiday?",
        options: ["One hundred fifty percent", "Two hundred percent", "Three hundred percent", "One hundred percent"],
        answer: 2, explanation: "“three hundred percent on a public holiday, not including the holiday pay.” 150% là ngày thường và 200% là ngày nghỉ hằng tuần." },
      { id: "l3", type: "choice", prompt: "What is the maximum number of overtime hours per month?",
        options: ["Twenty", "Thirty", "Fifty", "Forty"],
        answer: 3, explanation: "“You're allowed to work a maximum of forty overtime hours per month.”" }
    ]
  },

  reading: {
    title: "Overtime rules – year-end closing",
    intro: "Email Tuấn gửi cả phòng Kế toán tóm tắt quy định làm thêm giờ. Đọc và phân biệt điều được phép, bắt buộc và không bắt buộc.",
    email: {
      from: "Tuan Nguyen <tuan.nguyen@riverside-trading.example>",
      to: "Accounting Team",
      date: "Wednesday",
      subject: "Overtime rules – year-end closing",
      greeting: "Dear all,",
      paragraphs: [
        "The year-end closing is coming, so some of you may need to work overtime. Please note the main rules:"
      ],
      list: [
        "Overtime has to be approved in advance by your manager. You are not allowed to work overtime without approval.",
        "You are not required to work overtime unless you agree.",
        "You are allowed to work a maximum of forty overtime hours per month.",
        "Overtime is paid at least 150% on a weekday, 200% on a weekly day off and 300% on a public holiday (not including holiday pay)."
      ],
      after: [
        "To request overtime, you have to fill in the form on the intranet and send it to Ms. Ngoc. You are also required to record your hours on the timesheet.",
        "If you have any questions, please contact me."
      ],
      closing: "Best regards,",
      signature: ["Tuan Nguyen", "HR Executive, Riverside Trading"]
    },
    glossary: [
      { term: "year-end closing", vi: "khóa sổ cuối năm" },
      { term: "please note", vi: "xin lưu ý" },
      { term: "in advance", vi: "trước, từ trước" },
      { term: "request", vi: "đề nghị, yêu cầu" },
      { term: "timesheet", vi: "bảng chấm công" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "Why is Tuan writing to the Accounting Team?",
        options: ["To explain the overtime rules for the year-end closing", "To announce a bonus", "To cancel the year-end closing", "To ask them to work on Saturdays"],
        answer: 0, explanation: "“Some of you may need to work overtime. Please note the main rules.” Thư không ra lệnh làm thêm mà chỉ nêu quy định." },
      { id: "r2", type: "choice", prompt: "How much is overtime paid on a weekly day off?",
        options: ["At least 150%", "At least 300%", "At least 200%", "At least 100%"],
        answer: 2, explanation: "“200% on a weekly day off.” Ngày thường là 150% và ngày lễ là 300%." },
      { id: "r3", type: "choice", prompt: "Which statement is TRUE?",
        options: ["Employees are required to work overtime.", "Employees have to fill in a form to request overtime.", "Overtime does not need approval.", "There is no monthly limit."],
        answer: 1, explanation: "“To request overtime, you have to fill in the form on the intranet.” Làm thêm không bắt buộc (trừ khi đồng ý), cần được duyệt trước và có giới hạn bốn mươi giờ mỗi tháng." }
    ]
  },

  grammar: {
    title: "Allowed to, have to, required to",
    titleVi: "be allowed to, have to, be required to",
    intro: "Quy định làm thêm giờ cần nói rõ điều được phép, điều bắt buộc và điều không bắt buộc. Bốn mẫu dưới đây có trong cuộc trao đổi và email bạn vừa học.",
    patterns: [
      { form: "be allowed to + động từ   ·   not be allowed to + động từ", use: "Được phép làm gì (quy định cho phép). Phủ định: bị cấm, không được phép.",
        examples: ["You are allowed to work a maximum of forty overtime hours.", "You are not allowed to work overtime without approval."] },
      { form: "have to / has to + động từ", use: "Bắt buộc phải làm, vì quy định hoặc hoàn cảnh. Thường dùng trong lời nói; ngôi thứ ba số ít dùng has to.",
        examples: ["You have to fill in the form.", "Overtime has to be approved in advance."] },
      { form: "be required to + động từ", use: "Bắt buộc phải làm, nói trang trọng, thường trong văn bản của công ty.",
        examples: ["Employees are required to record their hours on the timesheet.", "You are not required to work overtime unless you agree."] },
      { form: "don't have to / are not required to  ≠  are not allowed to", use: "Hai nhóm này khác nghĩa: don't have to và are not required to = không cần thiết (tùy chọn); are not allowed to = bị cấm.",
        examples: ["You don't have to work on Saturday. (không bắt buộc)", "You are not allowed to work on Saturday without approval. (bị cấm)"] }
    ],
    mistakes: [
      { wrong: "You don't have to work overtime without approval.", right: "You are not allowed to work overtime without approval.", note: "Muốn nói “bị cấm” phải dùng not allowed to. “don't have to” chỉ nghĩa là không cần phải." },
      { wrong: "She is allowed work overtime.", right: "She is allowed to work overtime.", note: "be allowed to + động từ nguyên mẫu; thiếu to." },
      { wrong: "He have to record the hours.", right: "He has to record the hours.", note: "Ngôi thứ ba số ít: has to." },
      { wrong: "Employees are required attending the meeting.", right: "Employees are required to attend the meeting.", note: "be required to + động từ nguyên mẫu, không dùng V-ing." }
    ],
    tip: "Khi viết quy định, hãy chọn đúng mức độ: are required to / have to (bắt buộc), are allowed to (được phép), are not allowed to (bị cấm), are not required to / don't have to (tùy chọn). Dùng sai mức độ có thể làm nhân viên hiểu sai quyền lợi và nghĩa vụ của mình."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "You ___ work overtime without approval.",
      options: ["don't have to", "aren't allowed to", "aren't required", "can't to"],
      answer: 1, explanation: "Không được duyệt thì bị cấm: aren't allowed to. “don't have to” chỉ nghĩa là không cần phải." },
    { id: "p2", type: "gap", prompt: "Overtime is not compulsory. You ___ work overtime if you don't want to.",
      options: ["aren't allowed to", "must", "don't have to", "can't"],
      answer: 2, explanation: "Không bắt buộc → don't have to. Các lựa chọn khác nghĩa là bị cấm hoặc bắt buộc." },
    { id: "p3", type: "gap", prompt: "The overtime form is compulsory: employees are ___ to fill it in before they work extra hours.",
      options: ["required", "allowed", "able", "used"],
      answer: 0, explanation: "be required to = bắt buộc phải (theo quy định). Các lựa chọn còn lại không hợp nghĩa." },
    { id: "p4", type: "gap", prompt: "She ___ to record the overtime hours on the timesheet.",
      options: ["have", "has", "is have", "having"],
      answer: 1, explanation: "Chủ ngữ she (ngôi thứ ba số ít) → has to." },
    { id: "p5", type: "gap", prompt: "He is allowed ___ work up to forty overtime hours per month.",
      options: ["work", "working", "to work", "for work"],
      answer: 2, explanation: "be allowed to + động từ nguyên mẫu: allowed to work." },
    { id: "p6", type: "choice", prompt: "Which sentence is correct?",
      options: ["Employees are required attending the meeting.", "Employees are required to attend the meeting.", "Employees required to attend the meeting.", "Employees are require to attend the meeting."],
      answer: 1, explanation: "Cấu trúc đúng: are required to + động từ nguyên mẫu. Các câu khác thiếu to, thiếu are hoặc sai dạng required." },
    { id: "p7", type: "gap", prompt: "Overtime pay on a public holiday is three hundred percent of the normal ___.",
      options: ["shift", "limit", "roster", "rate"],
      answer: 3, explanation: "Rate = mức trả. Shift là ca làm, roster là bảng phân ca, limit là giới hạn." },
    { id: "p8", type: "gap", prompt: "You can only work overtime when your manager gives ___.",
      options: ["rate", "limit", "approval", "roster"],
      answer: 2, explanation: "Cần có sự chấp thuận (approval) của quản lý." },
    { id: "p9", type: "choice", context: "Tuan says: “You're not required to work overtime unless you agree.”", prompt: "What does he mean?",
      options: ["You must work overtime.", "You can say no, but if you agree, you can work overtime.", "Overtime is forbidden.", "Overtime is always paid double."],
      answer: 1, explanation: "Not required to … unless you agree = bạn có thể từ chối; chỉ làm khi bạn đồng ý." },
    { id: "p10", type: "choice", prompt: "Which statement is about a rule that FORBIDS something?",
      options: ["You aren't allowed to work more than forty overtime hours.", "You don't have to work on Saturday.", "You are required to sign the form.", "You can choose your shift."],
      answer: 0, explanation: "“aren't allowed to” là bị cấm. “don't have to” = không cần; “are required to” = bắt buộc; “can choose” = được tự chọn." }
  ],

  writing: {
    title: "Explain the overtime rules to your team",
    task: "Bạn là Tuấn. Viết email gửi nhóm Kế toán (80–120 từ) nhắc các quy định làm thêm giờ cuối năm: chỉ được làm thêm sau khi quản lý duyệt, phải điền mẫu trên mạng nội bộ trước, không bắt buộc làm thêm trừ khi đồng ý, không được làm quá bốn mươi giờ làm thêm mỗi tháng.",
    requirements: [
      "Mở đầu bằng lời chào phù hợp (Dear team,).",
      "Có câu với be allowed to hoặc be not allowed to.",
      "Có câu với have to / has to.",
      "Có câu với be required to hoặc not required to.",
      "Nhắc đến giới hạn bốn mươi giờ mỗi tháng.",
      "Kết thúc email và ký tên."
    ],
    minWords: 80,
    maxWords: 120,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có lời chào (Dear … / Hi …)", pattern: "\\bdear\\b|\\bhi\\b" },
      { label: "Có allowed to / not allowed to", pattern: "allowed to" },
      { label: "Có have to / has to", pattern: "\\b(have|has) to\\b" },
      { label: "Có required to / not required to", pattern: "required to" },
      { label: "Nhắc đến overtime và forty / 40", pattern: "\\bovertime\\b.*\\b(forty|40)\\b|\\b(forty|40)\\b.*\\bovertime\\b" },
      { label: "Có lời kết (Best regards …)", pattern: "regards|sincerely|best wishes" }
    ],
    model: [
      "Dear team,",
      "Here are the main rules for overtime at the year-end.",
      "You are allowed to work overtime only after your manager approves it. You have to fill in the overtime request form on the intranet before you work extra hours. You are not required to work overtime unless you agree, and you are not allowed to work more than forty overtime hours in a month.",
      "Overtime is paid at a higher rate than normal hours. If you have any questions, please contact the HR office.",
      "Best regards,",
      "Tuan Nguyen"
    ]
  },

  review: {
    keyPhrases: [
      { en: "Overtime has to be approved in advance.", vi: "Giờ làm thêm phải được duyệt trước." },
      { en: "You are not allowed to work overtime without approval.", vi: "Bạn không được làm thêm giờ khi chưa được duyệt." },
      { en: "You are not required to work overtime unless you agree.", vi: "Bạn không bắt buộc làm thêm trừ khi bạn đồng ý." },
      { en: "You are allowed to work up to forty overtime hours per month.", vi: "Bạn được làm thêm tối đa bốn mươi giờ mỗi tháng." },
      { en: "You have to fill in the overtime request form.", vi: "Bạn phải điền mẫu yêu cầu làm thêm giờ." },
      { en: "Saturday is a weekly day off, so it's paid at two hundred percent.", vi: "Thứ Bảy là ngày nghỉ hằng tuần nên được trả hai trăm phần trăm." }
    ]
  }
});
