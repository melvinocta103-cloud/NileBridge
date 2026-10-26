/**
 * NileBridge Institutional Digital Platform
 * Central Mock Database & Initial State Store
 */

const NileBridgeData = {
  // Institutional Information
  institution: {
    name: "NileBridge University",
    tagline: "Empowering Leaders, Transforming Africa",
    shortName: "NileBridge",
    motto: "Knowledge · Leadership · Innovation",
    established: 1998,
    phone: "+256 414 123 456",
    tollFree: "+256 800 100 200",
    email: "admissions@nilebridge.edu",
    infoEmail: "info@nilebridge.edu",
    address: "Plot 14-20 Riverfront Campus, Ggaba Road, Kampala, Uganda",
    campuses: [
      {
        id: "main",
        name: "Riverfront Main Campus",
        location: "Ggaba Road, Kampala",
        phone: "+256 414 123 456",
        features: ["Ultra-modern Science Complex", "Central Library", "Sports Complex", "Student Residences", "Tech Innovation Hub"]
      },
      {
        id: "city",
        name: "Kampala City Campus",
        location: "Lumumba Avenue, Central Business District",
        phone: "+256 414 123 457",
        features: ["School of Law & Executive Education", "Digital Moot Court", "Corporate Lecture Theatres", "Evening Study Lounges"]
      },
      {
        id: "tech",
        name: "Jinja Innovation & Tech Park",
        location: "Nile Crescent, Jinja",
        phone: "+256 414 123 458",
        features: ["Software Engineering Labs", "Robotics & AI Center", "Incubation Center", "Green Energy Research Labs"]
      }
    ]
  },

  // Faculties & Schools
  faculties: [
    {
      id: "fac-sci-tech",
      name: "Faculty of Science & Technology",
      slug: "science-technology",
      icon: "fa-laptop-code",
      shortDesc: "Leading research and education in Computing, Software Engineering, AI, and Applied Sciences.",
      fullDesc: "The Faculty of Science & Technology is dedicated to fostering technological innovation and high-impact research. Our cutting-edge curriculum bridges theoretical rigor and practical industry competencies.",
      dean: "Prof. Arthur K. Mugabe, Ph.D. (MIT)",
      programmesCount: 8,
      studentsCount: 3400,
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "fac-biz-mgmt",
      name: "Faculty of Business & Management",
      slug: "business-management",
      icon: "fa-chart-line",
      shortDesc: "Developing visionary business leaders, entrepreneurs, financial analysts, and corporate managers.",
      fullDesc: "Equipping next-generation leaders with agile business acumen, strategic leadership skills, and global financial expertise through case-based learning.",
      dean: "Dr. Florence N. Namatovu, DBA (Harvard)",
      programmesCount: 6,
      studentsCount: 4200,
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "fac-health-sci",
      name: "Faculty of Health Sciences",
      slug: "health-sciences",
      icon: "fa-heart-pulse",
      shortDesc: "Excellence in healthcare education, clinical nursing, public health, and biomedical diagnostics.",
      fullDesc: "Accredited health professional programmes with state-of-the-art simulation laboratories and direct hospital rotations.",
      dean: "Prof. Stella B. Kisakye, MBChB, MMed",
      programmesCount: 5,
      studentsCount: 2800,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "fac-law",
      name: "Faculty of Law",
      slug: "law",
      icon: "fa-scale-balanced",
      shortDesc: "Championing justice, international human rights, corporate governance, and legal excellence.",
      fullDesc: "A premier law school with championship moot court teams, renowned legal scholars, and strong bar examination success rates.",
      dean: "Hon. Justice Dr. Patrick Byamugisha, LL.D",
      programmesCount: 3,
      studentsCount: 1600,
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "fac-humanities",
      name: "Faculty of Humanities & Social Sciences",
      slug: "humanities-social-sciences",
      icon: "fa-earth-africa",
      shortDesc: "Exploring human culture, international relations, journalism, and public administration.",
      fullDesc: "Empowering thinkers and communicators to address complex socio-economic challenges across the African continent and the global stage.",
      dean: "Dr. Richard O. Okot, Ph.D. (Oxford)",
      programmesCount: 5,
      studentsCount: 2200,
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80"
    }
  ],

  // Programmes Catalogue
  programmes: [
    {
      id: "prog-bsc-cs",
      name: "BSc in Computer Science",
      code: "BCS-01",
      slug: "bsc-computer-science",
      facultyId: "fac-sci-tech",
      facultyName: "Faculty of Science & Technology",
      degreeLevel: "Undergraduate",
      duration: "3 Years (6 Semesters)",
      studyMode: "Full-Time / Weekend",
      campus: "Main Campus & Jinja Tech Park",
      feePerSemester: "$1,200",
      feeAmount: 1200,
      currency: "USD",
      featured: true,
      tag: "Most Popular",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
      shortDesc: "Master algorithms, software architecture, cloud computing, and AI engineering.",
      overview: "The Bachelor of Science in Computer Science at NileBridge University is designed to produce high-caliber software engineers and system architects. The curriculum combines core theoretical foundations with intensive practical software engineering projects, cloud technologies, cybersecurity, and artificial intelligence.",
      requirements: [
        "Uganda Advanced Certificate of Education (UACE) with at least two principal passes in Mathematics and Physics, or equivalent international high school credential (IB, A-Levels, SAT/AP).",
        "Credit pass in English Language and Mathematics at UCE (O-Level) or equivalent.",
        "Diploma in Computer Science, Information Technology, or Engineering from a recognized institution (for direct Year 2 entry)."
      ],
      careers: [
        "Software Engineer / Full Stack Developer",
        "Cloud Solutions Architect",
        "Machine Learning / Data Engineer",
        "Cybersecurity Specialist",
        "Systems Analyst & DevOps Engineer"
      ],
      curriculum: [
        { semester: "Year 1 - Semester 1", courses: ["Introduction to Programming (Python & C++)", "Discrete Mathematics for Computing", "Computer Architecture & Hardware", "Communication Skills & Academic Writing", "Digital Electronics"] },
        { semester: "Year 1 - Semester 2", courses: ["Object-Oriented Programming (Java)", "Data Structures & Algorithms", "Linear Algebra & Calculus", "Web Technologies & UI/UX Design", "Database Management Systems"] },
        { semester: "Year 2 - Semester 1", courses: ["Software Engineering Principles", "Operating Systems & Concurrency", "Computer Networks & Security", "Advanced Algorithms Analysis", "Mobile Application Development"] },
        { semester: "Year 2 - Semester 2", courses: ["Cloud Computing & Microservices", "Artificial Intelligence & Machine Learning", "Distributed Systems", "Software Quality Assurance & Testing", "Industry Internship I"] },
        { semester: "Year 3 - Semester 1", courses: ["Cybersecurity & Cryptography", "DevOps & CI/CD Pipelines", "Data Science & Big Data Analytics", "Computer Vision / NLP Elective", "Capstone Project I"] },
        { semester: "Year 3 - Semester 2", courses: ["Technology Entrepreneurship & Law", "Human-Computer Interaction", "Internet of Things (IoT)", "Industry Internship II", "Capstone Project II / Thesis"] }
      ]
    },
    {
      id: "prog-bba",
      name: "Bachelor of Business Administration (BBA)",
      code: "BBA-02",
      slug: "bachelor-business-administration",
      facultyId: "fac-biz-mgmt",
      facultyName: "Faculty of Business & Management",
      degreeLevel: "Undergraduate",
      duration: "3 Years (6 Semesters)",
      studyMode: "Full-Time / Evening / Weekend",
      campus: "Main Campus & City Campus",
      feePerSemester: "$950",
      feeAmount: 950,
      currency: "USD",
      featured: true,
      tag: "High Demand",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      shortDesc: "Develop strategic leadership, global finance, marketing, and entrepreneurial competencies.",
      overview: "NileBridge BBA equips students with comprehensive business acumen, managerial problem-solving capabilities, and strategic thinking necessary to lead top multinational corporations or launch scalable enterprises.",
      requirements: [
        "Two Principal passes at UACE in Economics, Entrepreneurship, Mathematics, or any arts/sciences subjects.",
        "Credit passes in English and Mathematics at O-Level.",
        "Recognized Business Diploma for mature entry."
      ],
      careers: [
        "Financial Analyst / Investment Banker",
        "Marketing & Brand Manager",
        "Business Operations Consultant",
        "Human Resource Director",
        "Startup Founder / Entrepreneur"
      ]
    },
    {
      id: "prog-llb",
      name: "Bachelor of Laws (LL.B)",
      code: "LLB-03",
      slug: "bachelor-of-laws",
      facultyId: "fac-law",
      facultyName: "Faculty of Law",
      degreeLevel: "Undergraduate",
      duration: "4 Years (8 Semesters)",
      studyMode: "Full-Time / Evening",
      campus: "Kampala City Campus",
      feePerSemester: "$1,400",
      feeAmount: 1400,
      currency: "USD",
      featured: true,
      tag: "Accredited",
      image: "https://images.unsplash.com/photo-1453733197781-70d2d2b30742?auto=format&fit=crop&w=800&q=80",
      shortDesc: "Rigorous legal training in Constitutional Law, Commercial Litigation, and International Jurisprudence.",
      overview: "The NileBridge Law programme is acclaimed for its distinguished faculty and state-of-the-art digital moot court. Students master legal analysis, trial advocacy, and jurisprudence.",
      requirements: [
        "Pass in the NileBridge Pre-Entry Law Examination.",
        "At least two principal passes at A-Level with distinction in Literature, History, Economics, or Divinity.",
        "Credit in English at O-Level is mandatory."
      ],
      careers: [
        "Advocate / Barrister / Legal Counsel",
        "Corporate Compliance Officer",
        "Judicial Officer / Magistrate",
        "International Human Rights Attorney",
        "Diplomat & Policy Advisor"
      ]
    },
    {
      id: "prog-bsc-nursing",
      name: "BSc in Nursing Science",
      code: "BNS-04",
      slug: "bsc-nursing-science",
      facultyId: "fac-health-sci",
      facultyName: "Faculty of Health Sciences",
      degreeLevel: "Undergraduate",
      duration: "4 Years (8 Semesters)",
      studyMode: "Full-Time",
      campus: "Main Campus & Teaching Hospitals",
      feePerSemester: "$1,350",
      feeAmount: 1350,
      currency: "USD",
      featured: true,
      tag: "Clinical Excellence",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
      shortDesc: "Comprehensive clinical training, patient care, advanced diagnostics, and public healthcare.",
      overview: "Accredited by the Uganda Nurses and Midwives Council. Prepares compassionate, scientifically grounded nursing leaders for hospital and community practice.",
      requirements: [
        "Principal passes in Biology and Chemistry at A-Level.",
        "Subsidiary pass in Physics or Mathematics."
      ],
      careers: [
        "Clinical Nurse Practitioner",
        "Hospital Department Head",
        "Public Health Specialist",
        "Clinical Research Coordinator"
      ]
    },
    {
      id: "prog-mba",
      name: "Master of Business Administration (MBA)",
      code: "MBA-05",
      slug: "master-business-administration",
      facultyId: "fac-biz-mgmt",
      facultyName: "Faculty of Business & Management",
      degreeLevel: "Postgraduate",
      duration: "2 Years (4 Semesters)",
      studyMode: "Evening / Weekend / Executive Modular",
      campus: "City Campus & Online",
      feePerSemester: "$1,800",
      feeAmount: 1800,
      currency: "USD",
      featured: true,
      tag: "Executive Track",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
      shortDesc: "Executive leadership, strategic turnaround management, fintech, and global supply chains.",
      overview: "Designed for mid-career professionals and executives seeking to sharpen their strategic leadership, finance, and digital transformation mastery.",
      requirements: [
        "Bachelor's degree with at least Lower Second Class honors from an accredited university.",
        "Minimum 2 years of relevant professional work experience.",
        "Satisfactory interview and recommendation letters."
      ],
      careers: [
        "Chief Executive Officer (CEO) / Managing Director",
        "Chief Financial Officer (CFO)",
        "Management Consultant",
        "Director of Strategy"
      ]
    },
    {
      id: "prog-beng-civil",
      name: "BEng in Civil & Environmental Engineering",
      code: "BCE-06",
      slug: "beng-civil-engineering",
      facultyId: "fac-sci-tech",
      facultyName: "Faculty of Science & Technology",
      degreeLevel: "Undergraduate",
      duration: "4 Years (8 Semesters)",
      studyMode: "Full-Time",
      campus: "Main Campus & Jinja Labs",
      feePerSemester: "$1,300",
      feeAmount: 1300,
      currency: "USD",
      featured: false,
      tag: "STEM",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
      shortDesc: "Structural design, transportation systems, hydraulic engineering, and sustainable infrastructure.",
      overview: "Equips future engineers with structural analysis, geotechnical engineering, water resources management, and green construction techniques.",
      requirements: ["Principal passes in Mathematics and Physics at A-Level."],
      careers: ["Structural Engineer", "Project Director", "Water Resources Engineer", "Highway Planner"]
    },
    {
      id: "prog-ba-comm",
      name: "BA in Mass Communication & Digital Media",
      code: "BMC-07",
      slug: "ba-mass-communication",
      facultyId: "fac-humanities",
      facultyName: "Faculty of Humanities & Social Sciences",
      degreeLevel: "Undergraduate",
      duration: "3 Years (6 Semesters)",
      studyMode: "Full-Time / Weekend",
      campus: "Main Campus",
      feePerSemester: "$850",
      feeAmount: 850,
      currency: "USD",
      featured: false,
      tag: "Creative Media",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      shortDesc: "Broadcast journalism, public relations, podcasting, multimedia storytelling, and digital content.",
      overview: "Develop persuasive storytelling, multiplatform journalism, public relations strategies, and high-impact investigative reporting.",
      requirements: ["Two principal passes at A-Level with credit in English Language."],
      careers: ["Broadcast Journalist", "PR & Corporate Communications Lead", "Digital Content Director", "Media Strategist"]
    },
    {
      id: "prog-mph",
      name: "Master of Public Health (MPH)",
      code: "MPH-08",
      slug: "master-public-health",
      facultyId: "fac-health-sci",
      facultyName: "Faculty of Health Sciences",
      degreeLevel: "Postgraduate",
      duration: "2 Years (4 Semesters)",
      studyMode: "Weekend / Blended Online",
      campus: "City Campus & Online",
      feePerSemester: "$1,600",
      feeAmount: 1600,
      currency: "USD",
      featured: false,
      tag: "Global Health",
      image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80",
      shortDesc: "Epidemiology, health policy, disease surveillance, global healthcare management, and biostatistics.",
      overview: "Trains health professionals to spearhead disease prevention, emergency outbreak response, and evidence-based public health interventions across Africa.",
      requirements: ["Bachelor's degree in Health Sciences, Biological Sciences, Social Sciences, or relevant discipline."],
      careers: ["Epidemiologist", "Health Policy Analyst", "NGO Health Program Director", "Biostatistician"]
    },
    {
      id: "prog-dip-it",
      name: "Diploma in Information Technology",
      code: "DIT-09",
      slug: "diploma-information-technology",
      facultyId: "fac-sci-tech",
      facultyName: "Faculty of Science & Technology",
      degreeLevel: "Diploma",
      duration: "2 Years (4 Semesters)",
      studyMode: "Full-Time / Evening",
      campus: "Main Campus & City Campus",
      feePerSemester: "$600",
      feeAmount: 600,
      currency: "USD",
      featured: false,
      tag: "Fast Track",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      shortDesc: "Hands-on networking, web development, hardware maintenance, and IT systems administration.",
      overview: "Practical skills accelerator providing immediate IT workforce readiness and direct pathway to Year 2 of BSc Computer Science.",
      requirements: ["One principal pass and two subsidiary passes at UACE, or relevant certificate."],
      careers: ["IT Support Specialist", "Network Administrator", "Junior Web Developer"]
    }
  ],

  // News & Institutional Articles
  news: [
    {
      id: "news-01",
      title: "NileBridge Unveils $2.5M State-of-the-Art Artificial Intelligence & Robotics Hub",
      slug: "ai-robotics-hub-launch",
      category: "Innovation & Tech",
      date: "Aug 14, 2026",
      readTime: "4 min read",
      author: "Office of Communications",
      featured: true,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
      excerpt: "NileBridge University has officially commissioned its cutting-edge AI and Robotics Laboratory in partnership with international technology consortia.",
      content: "The new facility at the Jinja Innovation Park features high-performance computing clusters, humanoid robotics testbeds, and dedicated incubation space for student startup ventures. Speaking at the grand opening ceremony, the Vice Chancellor highlighted the institution's relentless commitment to leading technological research and digital transformation across the East African region."
    },
    {
      id: "news-02",
      title: "Admissions Open for September 2026 Intake: Scholarships and Direct Entry Guidelines",
      slug: "september-2026-admissions-open",
      category: "Admissions",
      date: "Aug 02, 2026",
      readTime: "3 min read",
      author: "Admissions Directorate",
      featured: true,
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      excerpt: "Prospective undergraduate and postgraduate candidates are invited to apply for the prestigious September 2026 academic intake before deadlines.",
      content: "Applications are officially open across all five faculties. Over 150 merit-based and sports scholarships are available for outstanding applicants. The newly upgraded online portal allows candidates to submit applications in under 15 minutes and track review milestones in real time."
    },
    {
      id: "news-03",
      title: "Faculty of Law Wins All-Africa International Humanitarian Law Moot Court Championship",
      slug: "law-moot-court-victory-2026",
      category: "Academic Excellence",
      date: "Jul 28, 2026",
      readTime: "5 min read",
      author: "Faculty of Law",
      featured: false,
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
      excerpt: "The NileBridge Law delegation triumphed over 32 participating universities from across the continent in a grueling final courtroom simulation.",
      content: "Demonstrating unparalleled advocacy and mastery of international humanitarian treaties, NileBridge student advocates secured first place in Arusha, Tanzania, further cementing the institution's status as a legal powerhouse."
    },
    {
      id: "news-04",
      title: "Annual NileBridge Career & Tech Expo 2026 Connects 1,200 Graduates with Top Employers",
      slug: "annual-career-expo-2026",
      category: "Campus Life",
      date: "Jul 15, 2026",
      readTime: "3 min read",
      author: "Career Services Hub",
      featured: false,
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80",
      excerpt: "Over 80 regional and multinational corporate partners conducted on-campus interviews and networking sessions for final-year students.",
      content: "From banking giants to tech unicorns and healthcare networks, corporate recruiters lauded NileBridge graduates for their exceptional problem-solving abilities, ethical grounding, and workplace readiness."
    }
  ],

  // Upcoming Events
  events: [
    {
      id: "event-01",
      day: "28",
      month: "AUG",
      year: "2026",
      title: "Admissions Open Day & Campus Virtual Tour",
      time: "09:00 AM - 03:00 PM EAT",
      location: "Main Campus Auditorium & Zoom Live",
      category: "Admissions",
      desc: "Meet faculty deans, tour labs, explore scholarship opportunities, and receive on-the-spot application guidance."
    },
    {
      id: "event-02",
      day: "05",
      month: "SEP",
      year: "2026",
      title: "Freshers' Orientation & Matriculation Week",
      time: "08:30 AM - 05:00 PM EAT",
      location: "Riverfront Quadrangle & Campuses",
      category: "Academic",
      desc: "Official welcome, student club fairs, tech orientation, mentor introductions, and leadership induction."
    },
    {
      id: "event-03",
      day: "18",
      month: "SEP",
      year: "2026",
      title: "International Symposium on Green Energy & AI in Africa",
      time: "10:00 AM - 04:30 PM EAT",
      location: "Jinja Innovation Park",
      category: "Research",
      desc: "Keynote addresses from leading researchers, policymakers, and industry pioneers on renewable tech integration."
    }
  ],

  // Testimonials
  testimonials: [
    {
      name: "Eng. Ronald Ssemwogerere",
      role: "Lead Software Architect at Safaricom (BSc CS Alum '22)",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      quote: "NileBridge didn't just teach me coding; it gave me the architectural vision and leadership mindset to build resilient systems at enterprise scale."
    },
    {
      name: "Counsel Brenda Akello",
      role: "Senior Corporate Attorney & Partner (LL.B Alum '20)",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      quote: "The moot court competitions and demanding faculty prepared me to step into high-stakes litigation with absolute confidence from day one."
    },
    {
      name: "Dr. Kevin M. Omondi",
      role: "Public Health Director (MPH '23)",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      quote: "The blended learning flexibility allowed me to continue serving clinical patients while gaining cutting-edge epidemiological mastery."
    }
  ],

  // Key Statistics
  stats: [
    { number: "15,000+", label: "Alumni Worldwide" },
    { number: "98.4%", label: "Graduate Employment Rate" },
    { number: "45+", label: "Accredited Programmes" },
    { number: "3", label: "State-of-the-Art Campuses" }
  ],

  // FAQs
  faqs: [
    {
      category: "Admissions",
      question: "How do I apply for admission at NileBridge University?",
      answer: "You can apply 100% online through our Applicant Portal. Simply create an account, complete the 7-step application wizard, upload digital copies of your academic certificates and identification, and submit. You can track your real-time application status directly in your dashboard."
    },
    {
      category: "Admissions",
      question: "What are the key application deadlines for the 2026 Intakes?",
      answer: "NileBridge operates three annual academic intakes: January Intake (deadline Dec 15), May Intake (deadline April 20), and September Intake (deadline August 25). Early applications are encouraged for scholarship consideration."
    },
    {
      category: "Fees & Scholarships",
      question: "Are scholarships and financial aid opportunities available?",
      answer: "Yes! NileBridge awards over 150 scholarships annually, including Merit Excellence Scholarships (covering up to 50% tuition), Women in STEM Grants, Sports Leadership Bursaries, and East African Community Regional Grants."
    },
    {
      category: "Fees & Scholarships",
      question: "Can I pay tuition in flexible installments?",
      answer: "Yes. Tuition fees can be paid in full at registration (eligible for a 5% prompt payment discount) or structured across three flexible semester installments (40% at registration, 30% before mid-term exams, 30% before final examinations)."
    },
    {
      category: "International Students",
      question: "What support is provided for international students?",
      answer: "Our dedicated International Student Office provides comprehensive visa and study permit facilitation, airport reception, on-campus accommodation reservation, and peer orientation support."
    },
    {
      category: "Academics",
      question: "Are NileBridge degrees internationally recognized and accredited?",
      answer: "Yes. NileBridge is fully chartered and accredited by the National Council for Higher Education (NCHE), the Inter-University Council for East Africa (IUCEA), and recognized by international academic credential evaluation boards (WES, UK ENIC)."
    }
  ],

  // Pre-populated Applications (for localStorage initialization)
  initialApplications: [
    {
      id: "APP-2026-000123",
      applicantName: "Samuel Kintu",
      email: "samuel.kintu@example.com",
      phone: "+256 772 112 334",
      programmeId: "prog-bsc-cs",
      programmeName: "BSc in Computer Science",
      facultyName: "Faculty of Science & Technology",
      intake: "September 2026",
      campus: "Riverfront Main Campus",
      status: "UNDER_REVIEW",
      progress: 80,
      submittedDate: "2026-08-12",
      lastUpdated: "2026-08-18",
      documents: [
        { name: "High_School_Certificate.pdf", type: "Academic", status: "VERIFIED", uploadedAt: "2026-08-12" },
        { name: "Academic_Transcript.pdf", type: "Academic", status: "VERIFIED", uploadedAt: "2026-08-12" },
        { name: "Passport_Photo.jpg", type: "Identity", status: "VERIFIED", uploadedAt: "2026-08-12" },
        { name: "National_ID.pdf", type: "Identity", status: "PENDING", uploadedAt: "2026-08-12" }
      ],
      remarks: "Academic background meets all prerequisites. Final department faculty review in progress."
    },
    {
      id: "APP-2026-000124",
      applicantName: "Aisha Mohammed",
      email: "aisha.m@example.com",
      phone: "+254 712 889 900",
      programmeId: "prog-mba",
      programmeName: "Master of Business Administration (MBA)",
      facultyName: "Faculty of Business & Management",
      intake: "September 2026",
      campus: "Kampala City Campus",
      status: "APPROVED",
      progress: 100,
      submittedDate: "2026-08-05",
      lastUpdated: "2026-08-14",
      documents: [
        { name: "Undergraduate_Degree.pdf", type: "Academic", status: "VERIFIED", uploadedAt: "2026-08-05" },
        { name: "Official_Transcript.pdf", type: "Academic", status: "VERIFIED", uploadedAt: "2026-08-05" },
        { name: "CV_Resume.pdf", type: "Professional", status: "VERIFIED", uploadedAt: "2026-08-05" },
        { name: "Recommendation_Letters.pdf", type: "Reference", status: "VERIFIED", uploadedAt: "2026-08-05" }
      ],
      remarks: "Congratulations! Unconditional admission granted. Offer letter issued."
    },
    {
      id: "APP-2026-000125",
      applicantName: "David Ochieng",
      email: "david.ochieng@example.com",
      phone: "+256 701 445 566",
      programmeId: "prog-llb",
      programmeName: "Bachelor of Laws (LL.B)",
      facultyName: "Faculty of Law",
      intake: "September 2026",
      campus: "Kampala City Campus",
      status: "DOCUMENT_REVIEW",
      progress: 60,
      submittedDate: "2026-08-15",
      lastUpdated: "2026-08-19",
      documents: [
        { name: "UACE_Results_Slip.pdf", type: "Academic", status: "VERIFIED", uploadedAt: "2026-08-15" },
        { name: "UCE_Passlip.pdf", type: "Academic", status: "NEEDS_REUPLOAD", uploadedAt: "2026-08-15", error: "Document blurry. Please upload certified copy." },
        { name: "Passport_Photo.jpg", type: "Identity", status: "VERIFIED", uploadedAt: "2026-08-15" }
      ],
      remarks: "Awaiting clear resubmission of O-Level certified passlip before committee review."
    },
    {
      id: "APP-2026-000126",
      applicantName: "Grace Nakato",
      email: "grace.nakato@example.com",
      phone: "+256 755 778 899",
      programmeId: "prog-bsc-nursing",
      programmeName: "BSc in Nursing Science",
      facultyName: "Faculty of Health Sciences",
      intake: "September 2026",
      campus: "Riverfront Main Campus",
      status: "SUBMITTED",
      progress: 40,
      submittedDate: "2026-08-19",
      lastUpdated: "2026-08-19",
      documents: [
        { name: "A_Level_Certificate.pdf", type: "Academic", status: "PENDING", uploadedAt: "2026-08-19" },
        { name: "Passport_Photo.png", type: "Identity", status: "PENDING", uploadedAt: "2026-08-19" },
        { name: "Birth_Certificate.pdf", type: "Identity", status: "PENDING", uploadedAt: "2026-08-19" }
      ],
      remarks: "Application received. Queued for initial admissions registry screening."
    },
    {
      id: "APP-2026-000127",
      applicantName: "Emmanuel Mwangi",
      email: "e.mwangi@example.com",
      phone: "+254 720 334 455",
      programmeId: "prog-beng-civil",
      programmeName: "BEng in Civil & Environmental Engineering",
      facultyName: "Faculty of Science & Technology",
      intake: "September 2026",
      campus: "Riverfront Main Campus",
      status: "INCOMPLETE",
      progress: 25,
      submittedDate: null,
      lastUpdated: "2026-08-17",
      documents: [],
      remarks: "Draft application saved at Step 3 (Academic Background)."
    }
  ]
};

// Storage helper: initializes and gets persistent applications
function getNileBridgeStorage() {
  const storedApps = localStorage.getItem("nilebridge_applications");
  if (!storedApps) {
    localStorage.setItem("nilebridge_applications", JSON.stringify(NileBridgeData.initialApplications));
    return NileBridgeData.initialApplications;
  }
  try {
    return JSON.parse(storedApps);
  } catch (e) {
    return NileBridgeData.initialApplications;
  }
}

function saveNileBridgeApplications(apps) {
  localStorage.setItem("nilebridge_applications", JSON.stringify(apps));
}

// Global accessor
window.NileBridgeData = NileBridgeData;
window.getNileBridgeStorage = getNileBridgeStorage;
window.saveNileBridgeApplications = saveNileBridgeApplications;
