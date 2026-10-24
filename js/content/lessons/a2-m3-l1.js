/* =========================================================
   A2 · Module 3 (Recruitment and Onboarding) · Bài 1
   "Reading a job advertisement"
   Nối tiếp câu chuyện: thứ Hai 12/10/2026, phòng Nhân sự đăng tin
   tuyển HR Assistant (anh Hải và chị Lan soạn). Hạn nộp: thứ Sáu 16/10.
   Công ty Riverside Trading và các nhân vật đều là hư cấu.
   ========================================================= */
window.EOH.registerLesson({
  id: "a2-m3-l1",
  reviewStatus: "draft", // "draft" = bản nháp, chưa duyệt
  duration: "35–45 phút",
  scenario: "Thứ Hai 12/10, phòng Nhân sự của Riverside Trading cần tuyển một trợ lý nhân sự (HR Assistant). Chị Lan (Lan Pham) soạn tin tuyển dụng cùng anh Hải (Mr. Hai), sau đó gửi bản cuối cho anh xem trước khi đăng.",

  objectives: [
    "Hiểu và dùng 10 từ vựng thường gặp trong tin tuyển dụng (vacancy, applicant, requirement…).",
    "Nghe hiểu cuộc trao đổi về yêu cầu công việc và hạn nộp hồ sơ.",
    "Đọc tin tuyển dụng trong email và tìm đúng yêu cầu, trách nhiệm, hạn nộp.",
    "Nói về yêu cầu tuyển dụng với be able to, experience in và should have.",
    "Viết tin tuyển dụng ngắn cho một vị trí."
  ],

  vocabulary: [
    { word: "vacancy", ipa: "/ˈveɪkənsi/", pos: "noun", meaning: "vị trí đang cần tuyển",
      example: "We have a vacancy for an HR Assistant.", exampleVi: "Chúng tôi có một vị trí trống cho trợ lý nhân sự." },
    { word: "requirement", ipa: "/rɪˈkwaɪərmənt/", pos: "noun", meaning: "yêu cầu (đối với ứng viên)",
      example: "A degree is a requirement for this job.", exampleVi: "Bằng đại học là một yêu cầu của công việc này." },
    { word: "applicant", ipa: "/ˈæplɪkənt/", pos: "noun", meaning: "người nộp hồ sơ xin việc",
      example: "Each applicant should send a CV.", exampleVi: "Mỗi người nộp hồ sơ nên gửi một bản CV." },
    { word: "qualification", ipa: "/ˌkwɑːlɪfɪˈkeɪʃən/", pos: "noun", meaning: "bằng cấp, trình độ chuyên môn",
      example: "What qualification does the job need?", exampleVi: "Công việc này cần bằng cấp gì?" },
    { word: "full-time", ipa: "/ˌfʊl ˈtaɪm/", pos: "adjective", meaning: "toàn thời gian",
      example: "This is a full-time job.", exampleVi: "Đây là công việc toàn thời gian." },
    { word: "deadline", ipa: "/ˈdedlaɪn/", pos: "noun", meaning: "hạn chót",
      example: "The deadline for applications is Friday.", exampleVi: "Hạn chót nộp hồ sơ là thứ Sáu." },
    { word: "responsibilities", ipa: "/rɪˌspɑːnsəˈbɪlətiz/", pos: "noun", meaning: "các nhiệm vụ, trách nhiệm trong công việc",
      example: "Her responsibilities include answering staff questions.", exampleVi: "Nhiệm vụ của cô ấy gồm trả lời câu hỏi của nhân viên." },
    { word: "benefits", ipa: "/ˈbenɪfɪts/", pos: "noun", meaning: "phúc lợi (bảo hiểm, thưởng…)",
      example: "The benefits include health insurance.", exampleVi: "Phúc lợi gồm bảo hiểm y tế." },
    { word: "fluent", ipa: "/ˈfluːənt/", pos: "adjective", meaning: "thành thạo, nói hoặc viết trôi chảy",
      example: "We need someone with fluent English.", exampleVi: "Chúng tôi cần người có tiếng Anh thành thạo." },
    { word: "apply (for)", ipa: "/əˈplaɪ/", pos: "verb", meaning: "nộp hồ sơ xin (việc)",
      example: "You can apply for the job by email.", exampleVi: "Bạn có thể nộp hồ sơ xin việc qua email." }
  ],

  pronunciation: {
    groups: [
      {
        title: "Trọng âm của từ",
        text: "Từ tận cùng bằng -tion, -ity, -ities thường có trọng âm ở âm tiết ngay trước đuôi đó. Âm tiết in hoa là âm đọc to và dài hơn.",
        items: [
          { word: "vacancy", marked: "VA·can·cy" },
          { word: "applicant", marked: "AP·pli·cant" },
          { word: "requirement", marked: "re·QUIRE·ment" },
          { word: "qualification", marked: "qual·i·fi·CA·tion" },
          { word: "responsibilities", marked: "re·spon·si·BIL·i·ties", note: "Từ dài, nhấn vào BIL." }
        ]
      },
      {
        title: "Âm /v/ và /w/",
        text: "Người Việt hay đọc /v/ thành /w/ hoặc ngược lại. Với /v/, răng trên chạm nhẹ môi dưới. Với /w/, tròn môi và không chạm răng.",
        items: [
          { word: "vacancy", marked: "/v/a·can·cy", note: "Răng trên chạm môi dưới." },
          { word: "very", marked: "/v/ery" },
          { word: "work", marked: "/w/ork", note: "Tròn môi, không chạm răng." },
          { word: "week", marked: "/w/eek" }
        ]
      }
    ],
    sentences: [
      "We have a vacancy for an HR Assistant.",
      "The applicant should be able to use Excel.",
      "The deadline for applications is Friday."
    ]
  },

  listening: {
    title: "Checking the job advertisement",
    setting: "Thứ Hai 12/10, trong phòng Nhân sự. Chị Lan và anh Hải đọc lại bản nháp tin tuyển dụng.",
    speakers: { lan: "Lan (HR Officer)", hai: "Mr. Hai (line manager)" },
    lines: [
      { s: "lan", text: "Mr. Hai, I have the draft of the job advertisement for the HR Assistant vacancy.",
        vi: "Anh Hải, em có bản nháp tin tuyển dụng cho vị trí trợ lý nhân sự." },
      { s: "hai", text: "Thanks, Lan. Let's check the requirements first. What qualification should the applicant have?",
        vi: "Cảm ơn Lan. Mình xem phần yêu cầu trước. Ứng viên nên có bằng cấp gì?" },
      { s: "lan", text: "A degree in business or a similar subject.",
        vi: "Bằng đại học ngành kinh doanh hoặc ngành tương tự ạ." },
      { s: "hai", text: "OK. And experience? A new graduate can apply, but experience in office work is a plus.",
        vi: "Được. Còn kinh nghiệm thì sao? Sinh viên mới ra trường vẫn nộp được, nhưng có kinh nghiệm làm văn phòng thì tốt hơn." },
      { s: "lan", text: "Good. Should the applicant be able to use Excel?",
        vi: "Vâng. Ứng viên có cần biết dùng Excel không anh?" },
      { s: "hai", text: "Yes. And he or she should be able to write emails in English.",
        vi: "Có. Và ứng viên nên viết được email bằng tiếng Anh." },
      { s: "lan", text: "Understood. Is the job full-time?",
        vi: "Em hiểu rồi. Đây là việc toàn thời gian đúng không anh?" },
      { s: "hai", text: "Yes, full-time, from Monday to Friday.",
        vi: "Đúng, toàn thời gian, từ thứ Hai đến thứ Sáu." },
      { s: "lan", text: "What is the deadline for applications?",
        vi: "Hạn nộp hồ sơ là khi nào ạ?" },
      { s: "hai", text: "Friday, October sixteenth. Please post the advertisement on our website today.",
        vi: "Thứ Sáu, ngày mười sáu tháng Mười. Em đăng tin lên trang web của công ty trong hôm nay nhé." },
      { s: "lan", text: "Will do. I will post it this afternoon.",
        vi: "Vâng. Chiều nay em sẽ đăng." }
    ],
    questions: [
      { id: "l1", type: "choice", prompt: "What qualification does the advertisement ask for?",
        options: ["Experience in sales", "A degree in business or a similar subject", "A certificate in Excel", "A master's degree"],
        answer: 1, explanation: "Anh Hải hỏi về bằng cấp, chị Lan trả lời: “A degree in business or a similar subject.” Không có yêu cầu bằng thạc sĩ hay chứng chỉ Excel." },
      { id: "l2", type: "choice", prompt: "Which sentence about experience is TRUE?",
        options: ["Applicants need five years of experience.", "Only experienced people can apply.", "Work experience is a plus, but a new graduate can apply.", "The advertisement does not mention experience."],
        answer: 2, explanation: "Anh Hải nói: “A new graduate can apply, but experience in office work is a plus.” Kinh nghiệm chỉ là điểm cộng, không bắt buộc, và tin có nhắc tới kinh nghiệm." },
      { id: "l3", type: "choice", prompt: "What is the deadline for applications?",
        options: ["Friday, October 16", "Monday, October 12", "Wednesday, October 14", "Friday, October 30"],
        answer: 0, explanation: "“Friday, October sixteenth.” Thứ Hai 12/10 là ngày đăng tin, không phải hạn nộp." }
    ]
  },

  reading: {
    title: "The final job advertisement",
    intro: "Chị Lan gửi anh Hải bản cuối của tin tuyển dụng trước khi đăng. Đọc và tìm yêu cầu, nhiệm vụ và hạn nộp hồ sơ.",
    email: {
      from: "Lan Pham <lan.pham@riverside-trading.example>",
      to: "Mr. Hai",
      date: "Monday, 12 October",
      subject: "Job advertisement – HR Assistant",
      greeting: "Dear Mr. Hai,",
      paragraphs: [
        "Here is the final version of our job advertisement. I will post it on our website and on a job board this afternoon.",
        "Vacancy: HR Assistant (full-time). The successful applicant should have:"
      ],
      list: [
        "a degree in business, management or a similar subject",
        "good computer skills – the applicant should be able to use Excel",
        "fluent English – able to write emails and answer calls",
        "experience in office work (preferred, but not required)"
      ],
      after: [
        "Responsibilities include keeping employee records, helping with recruitment and answering staff questions.",
        "The deadline for applications is Friday, 16 October. Applicants should send their CV to me by email.",
        "Please let me know if you want to change anything before 3:00 p.m."
      ],
      closing: "Best regards,",
      signature: ["Lan Pham", "HR Officer, Riverside Trading"]
    },
    glossary: [
      { term: "successful applicant", vi: "ứng viên được chọn" },
      { term: "job board", vi: "trang web đăng tin tuyển dụng" },
      { term: "keep employee records", vi: "lưu giữ hồ sơ nhân viên" },
      { term: "preferred", vi: "được ưu tiên (có thì tốt, không bắt buộc)" }
    ],
    questions: [
      { id: "r1", type: "choice", prompt: "What will Lan do this afternoon?",
        options: ["Interview applicants", "Change the deadline", "Send her CV to Mr. Hai", "Post the job advertisement"],
        answer: 3, explanation: "“I will post it on our website and on a job board this afternoon.” Chị Lan đăng tin, không phải phỏng vấn hay đổi hạn." },
      { id: "r2", type: "choice", prompt: "Is work experience required for this job?",
        options: ["Yes, at least one year is required.", "No, it is preferred but not required.", "Yes, but only in HR.", "The email does not say."],
        answer: 1, explanation: "“experience in office work (preferred, but not required)” – có thì tốt, nhưng không bắt buộc." },
      { id: "r3", type: "choice", prompt: "Which sentence is TRUE?",
        options: ["The job is part-time.", "Applicants should send their CV to Mr. Hai.", "The applicant should be able to use Excel.", "The deadline is 12 October."],
        answer: 2, explanation: "“the applicant should be able to use Excel.” Việc là toàn thời gian, CV gửi cho chị Lan (“to me”), hạn nộp là 16/10." }
    ]
  },

  grammar: {
    title: "Talking about job requirements",
    titleVi: "Nói về yêu cầu tuyển dụng",
    intro: "Tin tuyển dụng thường dùng vài mẫu câu cố định để nói ứng viên cần có gì và làm được gì. Bốn mẫu dưới đây đều có trong đoạn nghe và email bạn vừa học.",
    patterns: [
      { form: "should be able to + động từ", use: "Nói ứng viên cần có khả năng làm việc gì. Be able to nghĩa gần như can, nhưng nghe trang trọng hơn trong tin tuyển dụng.",
        examples: ["The applicant should be able to use Excel.", "You should be able to write emails in English."] },
      { form: "experience in + danh từ / V-ing", use: "Nói về kinh nghiệm trong một lĩnh vực hoặc một loại việc. Giới từ đi kèm là in.",
        examples: ["Experience in recruitment is a plus.", "We need someone with experience in writing reports."] },
      { form: "should have + danh từ", use: "Nói ứng viên nên có bằng cấp, kỹ năng hay kinh nghiệm gì. Ở đây have là “có”, không phải thì hoàn thành.",
        examples: ["The applicant should have a degree in business.", "He should have good computer skills."] },
      { form: "… is required / preferred / a plus", use: "Cho biết điều gì bắt buộc (required) hay chỉ được ưu tiên (preferred, a plus).",
        examples: ["A degree is required.", "Experience in sales is preferred."] }
    ],
    mistakes: [
      { wrong: "The applicant should able to use Excel.", right: "The applicant should be able to use Excel.", note: "Sau should cần be: should be able to." },
      { wrong: "She has experience on recruitment.", right: "She has experience in recruitment.", note: "Dùng giới từ in sau experience." },
      { wrong: "The applicant should has a degree.", right: "The applicant should have a degree.", note: "Sau should luôn dùng động từ nguyên mẫu: have, không phải has." },
      { wrong: "He should be able to using Excel.", right: "He should be able to use Excel.", note: "Sau be able to là động từ nguyên mẫu, không thêm -ing." }
    ],
    tip: "Trong tin tuyển dụng, “should” nghe nhẹ hơn “must”. Dùng “required” khi điều đó bắt buộc, và “preferred” hoặc “a plus” khi chỉ là điểm cộng."
  },

  practice: [
    { id: "p1", type: "gap", prompt: "We have a ___ for an HR Assistant.",
      options: ["vacancy", "deadline", "benefit", "qualification"],
      answer: 0, explanation: "Vacancy = vị trí đang cần tuyển: a vacancy for… Deadline là hạn chót, không đi với “for an HR Assistant”." },
    { id: "p2", type: "gap", prompt: "A person who sends a CV for a job is an ___.",
      options: ["employer", "interviewer", "owner", "applicant"],
      answer: 3, explanation: "Applicant = người nộp hồ sơ xin việc. Employer là người tuyển, interviewer là người phỏng vấn." },
    { id: "p3", type: "gap", prompt: "The applicant should ___ a degree in business.",
      options: ["has", "have", "to have", "having"],
      answer: 1, explanation: "Sau should dùng động từ nguyên mẫu không có “to”: should have." },
    { id: "p4", type: "gap", prompt: "She should be able ___ write reports in English.",
      options: ["of", "to", "in", "at"],
      answer: 1, explanation: "Cụm cố định là be able to + động từ: be able to write." },
    { id: "p5", type: "gap", prompt: "We need someone with experience ___ recruitment.",
      options: ["in", "on", "at", "about"],
      answer: 0, explanation: "Experience đi với giới từ in: experience in recruitment." },
    { id: "p6", type: "choice", context: "The advertisement says: “Fluent English is required.”", prompt: "What does it mean?",
      options: ["English is not important.", "English is a plus, but not necessary.", "You can learn English after you start.", "You must be able to speak English well."],
      answer: 3, explanation: "Required = bắt buộc, và fluent = thành thạo. Vậy ứng viên phải nói tiếng Anh tốt ngay từ đầu." },
    { id: "p7", type: "choice", prompt: "Which sentence is correct?",
      options: ["She should able to use Excel.", "She should be able to use Excel.", "She should be able use Excel.", "She should to be able to use Excel."],
      answer: 1, explanation: "Đúng là should be able to + động từ. Các câu còn lại thiếu be, thiếu to hoặc thừa to." },
    { id: "p8", type: "gap", prompt: "Please send your CV before the ___, Friday 16 October.",
      options: ["vacancy", "benefits", "deadline", "qualification"],
      answer: 2, explanation: "Deadline = hạn chót, ngày cuối cùng được nộp hồ sơ." },
    { id: "p9", type: "choice", context: "An advertisement says: “Experience in sales is a plus.”", prompt: "What does it mean?",
      options: ["It is good, but not necessary, to have sales experience.", "You must have sales experience.", "Only people in sales can apply.", "Sales experience is not important at all."],
      answer: 0, explanation: "A plus = điểm cộng. Có kinh nghiệm bán hàng thì tốt hơn, nhưng không bắt buộc. Nếu bắt buộc thì tin sẽ ghi “required”." },
    { id: "p10", type: "choice", prompt: "Where is the main stress in “qualification”?",
      options: ["QUAL·i·fi·ca·tion", "qual·i·FI·ca·tion", "qual·i·fi·CA·tion", "qual·i·fi·ca·TION"],
      answer: 2, explanation: "Từ tận cùng bằng -tion có trọng âm ở âm tiết ngay trước -tion: qual·i·fi·CA·tion." }
  ],

  writing: {
    title: "Write a short job advertisement",
    task: "Bạn là chị Lan. Hãy viết tin tuyển dụng ngắn cho vị trí Logistics Assistant (50–90 từ).",
    requirements: [
      "Nêu tên vị trí (vacancy hoặc looking for).",
      "Nói ứng viên nên có bằng cấp gì (should have).",
      "Nói ứng viên nên làm được gì (should be able to).",
      "Nói về kinh nghiệm (experience in).",
      "Ghi hạn nộp hồ sơ (deadline).",
      "Cho biết cách nộp hồ sơ (send your CV hoặc apply)."
    ],
    minWords: 50,
    maxWords: 90,
    // Kiểm tra tự động ĐƠN GIẢN: chỉ tìm từ khóa, không chấm ngữ pháp.
    checks: [
      { label: "Có tên vị trí (vacancy / looking for)", pattern: "vacancy|looking for|we need|we are hiring" },
      { label: "Dùng should have", pattern: "should have" },
      { label: "Dùng be able to", pattern: "able to" },
      { label: "Dùng experience in", pattern: "experience in" },
      { label: "Có hạn nộp (deadline)", pattern: "deadline" },
      { label: "Có cách nộp hồ sơ (send / apply / CV)", pattern: "\\bsend\\b|\\bapply\\b|\\bCV\\b" }
    ],
    model: [
      "Vacancy: Logistics Assistant",
      "Riverside Trading is looking for a full-time Logistics Assistant.",
      "The applicant should have a degree in business or a similar subject.",
      "The applicant should be able to use Excel and write emails in English.",
      "Experience in customer service is a plus.",
      "The deadline is Friday, 30 October.",
      "Please send your CV to Lan Pham."
    ]
  },

  review: {
    keyPhrases: [
      { en: "We have a vacancy for an HR Assistant.", vi: "Chúng tôi có một vị trí trống cho trợ lý nhân sự." },
      { en: "The applicant should have a degree in business.", vi: "Ứng viên nên có bằng đại học ngành kinh doanh." },
      { en: "The applicant should be able to use Excel.", vi: "Ứng viên nên biết dùng Excel." },
      { en: "Experience in office work is a plus.", vi: "Có kinh nghiệm làm văn phòng là một điểm cộng." },
      { en: "The deadline for applications is Friday.", vi: "Hạn nộp hồ sơ là thứ Sáu." },
      { en: "Please send your CV by email.", vi: "Vui lòng gửi CV qua email." }
    ]
  }
});
