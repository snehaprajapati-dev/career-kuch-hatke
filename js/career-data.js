/* ============================================
   CAREER DATA - All Career Information
   ============================================ */

const careerDatabase = {
  
  // ═══════════════════════════════════════
  // CAREER 1: UI/UX Designer
  // ═══════════════════════════════════════
  "ui-ux-designer": {
    name: "UI/UX Designer",
    category: "creative",
    categoryName: "Creative",
    emoji: "🎨",
    tagline: "Design experiences that users love",
    
    // Quick facts for hero section
    quickFacts: {
      salary: "₹3-30 LPA",
      remote: "Yes",
      degree: "Not Mandatory"
    },
    
    // Section 1: What Do They Do?
    whatTheyDo: `A UI/UX designer shapes how apps and websites FEEL to use. UX designers research what users need and create smooth journeys through a product. UI designers make those journeys visually beautiful using colors, buttons, and layouts. They constantly observe how people interact with digital products and use that insight to make every click, swipe, and scroll feel effortless.`,
    
    // Section 2: Salary Range
    salary: {
      entry: { label: "Entry Level", amount: "₹3-6 LPA" },
      mid: { label: "Mid Level", amount: "₹8-15 LPA" },
      senior: { label: "Senior Level", amount: "₹18-30 LPA" },
      freelance: { label: "Freelance", amount: "₹500-5,000/hour" }
    },
    
    // Section 3: How to Get In?
    roadmap: [
      { step: "After 10th", detail: "Any stream works (Science/Commerce/Arts)" },
      { step: "After 12th", detail: "B.Des / BCA / B.Sc. CS / Any degree" },
      { step: "Degree", detail: "NOT mandatory — portfolio matters more" },
      { step: "Learn", detail: "Figma, Adobe XD, user research basics" },
      { step: "Build", detail: "3-4 redesign projects for portfolio" },
      { step: "Apply", detail: "Internships on AngelList, Internshala" },
      { step: "Timeline", detail: "6-9 months to land first internship" }
    ],
    
    // Section 4: Skills Needed
    skills: [
      "Wireframing & Prototyping (Figma, Adobe XD)",
      "Visual Design (Color theory, typography)",
      "User Research (Surveys, interviews, testing)",
      "Problem Solving (Understanding user pain points)",
      "Communication (Explaining design decisions)",
      "Empathy (Thinking from user's perspective)",
      "Basic HTML/CSS (Bonus, not mandatory)"
    ],
    
    // Section 5: Where Can You Work?
    workPlaces: [
      "Tech Startups (Swiggy, Zomato, CRED)",
      "Product Companies (Google, Microsoft, Adobe)",
      "E-commerce (Flipkart, Meesho, Myntra)",
      "Design Agencies (Lollypop, Fractal Ink)",
      "Freelance (Work with global clients remotely)",
      "Remote Work: YES — very common in this field"
    ],
    
    // Section 6: Real Person Example
    realPerson: {
      name: "Saptarshi Prakash",
      story: `Self-taught UX designer who started from an engineering background. Now he's Senior Product Design Manager at Swiggy. He's delivered 50+ talks on UX and actively mentors aspiring designers on YouTube and social media. Proof that you don't need a design degree to succeed.`
    },
    
    // Section 7: Free Resources
    resources: {
      youtube: "Saptarshi Prakash, AJ&Smart, The Futur (design thinking)",
      courses: "Google UX Design (Coursera), Figma tutorials (YouTube)",
      practice: "Daily UI Challenge (daily-ui.com)",
      books: `"Don't Make Me Think" by Steve Krug, "The Design of Everyday Things"`,
      portfolio: "Behance, Dribbble (for inspiration)"
    },
    
    // Section 8: Is This For You?
    forYou: {
      yes: [
        "You love making things look AND work better",
        "You enjoy understanding why people do what they do",
        "You're okay with feedback and multiple revisions"
      ],
      no: [
        "Not for you if you can't handle constant changes",
        "Not for you if you think design is just making things pretty"
      ]
    }
  },

  // ═══════════════════════════════════════
  // CAREER 2: Ethical Hacker
  // ═══════════════════════════════════════
  "ethical-hacker": {
    name: "Ethical Hacker",
    category: "tech",
    categoryName: "Tech",
    emoji: "💻",
    tagline: "Find security weaknesses before the bad guys do",
    
    quickFacts: {
      salary: "₹4-50 LPA",
      remote: "Yes",
      degree: "Preferred but not mandatory"
    },
    
    whatTheyDo: `Companies hire ethical hackers to find security weaknesses BEFORE bad hackers do. They try to break into websites, apps, and networks using the same techniques criminals use, then report what they found so it can be fixed. Some work full-time for companies, others do "bug bounty" — getting paid per bug they find.`,
    
    salary: {
      entry: { label: "Entry Level", amount: "₹4-7 LPA" },
      mid: { label: "Mid Level", amount: "₹10-18 LPA" },
      senior: { label: "Senior Level", amount: "₹25-50 LPA" },
      freelance: { label: "Bug Bounty", amount: "₹5,000-10,00,000 per bug" }
    },
    
    roadmap: [
      { step: "After 10th", detail: "Take Science/Computer Science" },
      { step: "After 12th", detail: "BSc CS / BCA / BTech CSE" },
      { step: "Degree", detail: "CSE preferred but not mandatory" },
      { step: "Certifications", detail: "CEH (Certified Ethical Hacker), OSCP (Offensive Security)" },
      { step: "Start", detail: "Practice on HackTheBox, TryHackMe" },
      { step: "Apply", detail: "Join bug bounty platforms like HackerOne" }
    ],
    
    skills: [
      "Networking fundamentals (TCP/IP, DNS)",
      "Linux operating system",
      "Programming (Python, JavaScript)",
      "Web technologies (how websites work)",
      "Logical thinking and problem solving",
      "Patience (some bugs take weeks to find)"
    ],
    
    workPlaces: [
      "Cybersecurity firms (Quick Heal, K7)",
      "IT companies (TCS, Infosys security teams)",
      "Banks (every bank has security team)",
      "Government (CERT-In, NIC)",
      "Freelance bug bounty (work from anywhere)",
      "Remote work: YES, very common"
    ],
    
    realPerson: {
      name: "Ankit Fadia",
      story: `Started ethical hacking at age 14, wrote books, became India's most recognized cybersecurity expert, now trains companies and government on cybersecurity.`
    },
    
    resources: {
      youtube: "NetworkChuck, The Cyber Mentor",
      courses: "TryHackMe (free rooms)",
      practice: "HackerOne (bug bounty platform)",
      books: `"The Web Application Hacker's Handbook" (advanced but famous)`,
      portfolio: "GitHub with security projects"
    },
    
    forYou: {
      yes: [
        "You love solving puzzles and mysteries",
        "You enjoy understanding how things work",
        "You are curious about technology"
      ],
      no: [
        "Not for you if you want a routine 9-5",
        "Not for you if you hate continuous learning"
      ]
    }
  },

  // ═══════════════════════════════════════
  // CAREER 3: Forensic Scientist
  // ═══════════════════════════════════════
  "forensic-scientist": {
    name: "Forensic Scientist",
    category: "science",
    categoryName: "Science",
    emoji: "🔬",
    tagline: "Use science to solve crimes and deliver justice",
    
    quickFacts: {
      salary: "₹3-25 LPA",
      remote: "No (Lab-based)",
      degree: "Required"
    },
    
    whatTheyDo: `Forensic scientists are real-life crime solvers who use science instead of guns. They analyze evidence from crime scenes — fingerprints, blood, DNA, chemicals, digital data — to help police catch criminals and courts deliver justice. They work in labs, examine evidence under microscopes, run chemical tests, and testify in court to explain their findings. Every piece of evidence tells a story, and they're the ones who decode it.`,
    
    salary: {
      entry: { label: "Entry Level", amount: "₹3-5 LPA (Govt labs)" },
      mid: { label: "Mid Level", amount: "₹6-12 LPA (Senior scientist)" },
      senior: { label: "Senior Level", amount: "₹15-25 LPA (Director/Expert)" },
      freelance: { label: "Private Labs", amount: "₹8-20 LPA (Faster growth)" }
    },
    
    roadmap: [
      { step: "After 10th", detail: "Science stream (PCB or PCM — both work)" },
      { step: "After 12th", detail: "B.Sc. Forensic Science OR B.Sc. Chemistry/Biology + M.Sc. Forensic" },
      { step: "Top Colleges", detail: "LNJN National Institute (Delhi), Gujarat Forensic Sciences University" },
      { step: "Certifications", detail: "Digital Forensics (EC-Council) - optional but helps" },
      { step: "First Job", detail: "Through UPSC (govt labs), state PSCs, or private agencies" },
      { step: "Timeline", detail: "4-5 years education + competitive exam" }
    ],
    
    skills: [
      "Attention to Detail (one missed clue = case lost)",
      "Chemistry & Biology Basics (DNA, toxicology)",
      "Critical Thinking (connecting evidence logically)",
      "Lab Techniques (microscopy, chromatography)",
      "Report Writing (clear documentation for court)",
      "Patience (some cases take months to solve)",
      "Emotional Strength (dealing with crime scenes)"
    ],
    
    workPlaces: [
      "Government Forensic Labs (CBI, State Police)",
      "Central Forensic Science Laboratory (CFSL)",
      "Private Investigation Agencies",
      "Digital Forensics Firms (cyber crime focus)",
      "Academic/Research Institutions",
      "Court Expert Witness (after experience)",
      "Remote Work: NO (lab-based work)"
    ],
    
    realPerson: {
      name: "Dr. Rukmani Krishnamurthy",
      story: `India's FIRST female forensic scientist (1974), breaking into a male-dominated field. As Director of Maharashtra's Forensic Labs, she helped solve the 1993 Mumbai bomb blasts and 2008 Neeraj Grover murder case using cutting-edge forensics. She proved gender doesn't limit your impact in science.`
    },
    
    resources: {
      youtube: "Forensic 365 (case breakdowns), Real Crime (forensic analysis)",
      courses: `"Introduction to Forensic Science" (Coursera - Nanyang Tech), FutureLearn forensics modules`,
      practice: "Learn basic chemistry/biology deeply (NCERT 11th-12th is foundation)",
      books: `"Criminalistics" by Richard Saferstein, "The Forensic Casebook" by N.E. Genge`,
      portfolio: "Research papers, internship certificates"
    },
    
    forYou: {
      yes: [
        "You loved science experiments in school",
        "You enjoy solving puzzles and mysteries",
        "You can stay calm under pressure"
      ],
      no: [
        "Not for you if you can't handle seeing blood or disturbing crime scenes",
        "Not for you if you want quick results — forensic work requires extreme patience"
      ]
    }
  },

  // ═══════════════════════════════════════
  // CAREER 4: Social Media Manager
  // ═══════════════════════════════════════
  "social-media-manager": {
    name: "Social Media Manager",
    category: "business",
    categoryName: "Business",
    emoji: "💰",
    tagline: "Create viral content and grow brand communities",
    
    quickFacts: {
      salary: "₹2.5-20 LPA",
      remote: "Yes",
      degree: "Not Important"
    },
    
    whatTheyDo: `Social Media Managers are the people behind every brand's Instagram, Twitter, and LinkedIn. They plan what to post, when to post, write captions, reply to comments, run paid ads, and track what's working. When Zomato tweets something funny or Swiggy's Instagram makes you laugh — a Social Media Manager created that. It's part creativity, part strategy, and part staying online 24/7 to catch trends before they die.`,
    
    salary: {
      entry: { label: "Entry Level", amount: "₹2.5-4 LPA (agency/startup)" },
      mid: { label: "Mid Level", amount: "₹5-10 LPA (brand/in-house)" },
      senior: { label: "Senior Level", amount: "₹12-20 LPA (head of social)" },
      freelance: { label: "Freelance", amount: "₹20,000-1,00,000/month per client" }
    },
    
    roadmap: [
      { step: "After 10th", detail: "Any stream (even Arts/Commerce!)" },
      { step: "After 12th", detail: "BA/BSc in Marketing, Mass Comm, Journalism, OR any degree" },
      { step: "Degree", detail: "NOT important — portfolio is everything" },
      { step: "Learn", detail: "Content writing, Canva, Instagram/FB Ads" },
      { step: "Build", detail: "Manage 1-2 Instagram pages (friends' businesses, personal page)" },
      { step: "Certifications", detail: "Meta Blueprint (free), HubSpot Social Media (free)" },
      { step: "First Job", detail: "Internships on AngelList, Internshala (3-6 months → full-time)" },
      { step: "Timeline", detail: "4-6 months to get internship-ready" }
    ],
    
    skills: [
      "Content Writing (catchy captions that stop scrolling)",
      "Graphic Design Basics (Canva is enough to start)",
      "Understanding Trends (what's viral today?)",
      "Analytics Reading (which post worked and why?)",
      "Communication (replying to DMs and comments)",
      "Time Management (posting schedule is non-negotiable)",
      "Thick Skin (handling trolls and negative comments)"
    ],
    
    workPlaces: [
      "Startups (D2C brands like Mamaearth, Boat)",
      "Marketing Agencies (managing multiple brands)",
      "Corporate In-House (Zomato, Swiggy, Myntra)",
      "E-commerce Platforms (Amazon, Flipkart teams)",
      "Freelance: YES — VERY common, work with multiple small businesses",
      "Remote Work: YES — 90% of this job can be remote"
    ],
    
    realPerson: {
      name: "Kavya Karnatac",
      story: `Started creating content while working at Pocket Aces. Built a community of 8M+ followers organically by focusing on quality storytelling about Indian culture. Now runs her own content agency (KK Create) and proves you can turn social media skills into a full-fledged business.`
    },
    
    resources: {
      youtube: "Ishan Sharma (social media growth), Think School (content strategy)",
      courses: "Meta Blueprint (Facebook/Instagram), HubSpot Social Media, Google Digital Garage",
      practice: "Start your own theme page on Instagram (books, memes, college tips, anything)",
      books: `"Jab, Jab, Jab, Right Hook" by Gary Vee, "Crushing It!" by Gary Vaynerchuk`,
      portfolio: "Follow brands doing it well (Zomato, Duolingo, Netflix India)"
    },
    
    forYou: {
      yes: [
        "You already spend 3+ hours daily on social media",
        "You enjoy writing captions and making content",
        "You notice what's trending before others do"
      ],
      no: [
        "Not for you if you need strict 9-5 routine (notifications don't have office hours)",
        "Not for you if negative comments hurt you deeply (trolls come with the territory)"
      ]
    }
  },

  // ═══════════════════════════════════════
  // CAREER 5: Sign Language Interpreter
  // ═══════════════════════════════════════
  "sign-language-interpreter": {
    name: "Sign Language Interpreter",
    category: "unique",
    categoryName: "Unique",
    emoji: "🎭",
    tagline: "Be the voice for those who communicate without sound",
    
    quickFacts: {
      salary: "₹2-12 LPA",
      remote: "Possible (Video calls)",
      degree: "Diploma Required"
    },
    
    whatTheyDo: `Sign Language Interpreters are the voice for people who communicate without sound. They translate spoken language into Indian Sign Language (ISL) and vice versa — in real-time. They work in hospitals (during emergencies), courts (legal proceedings), schools (helping deaf students learn), TV news channels, and even weddings. Every conversation a deaf person has with the hearing world — an interpreter makes that possible.`,
    
    salary: {
      entry: { label: "Entry Level", amount: "₹2-3 LPA (NGO/schools)" },
      mid: { label: "Mid Level", amount: "₹4-7 LPA (govt/corporate)" },
      senior: { label: "Senior Level", amount: "₹8-12 LPA (legal/medical specialist)" },
      freelance: { label: "Freelance", amount: "₹800-2,500 per hour" }
    },
    
    roadmap: [
      { step: "After 10th", detail: "Any stream works" },
      { step: "After 12th", detail: "Any degree (Arts/Social Science preferred)" },
      { step: "Learn ISL", detail: "6-month to 1-year basic ISL course (ISLRTC or local NGOs)" },
      { step: "Certification", detail: "2-year Diploma in ISL Interpretation (DISLI) — RCI approved" },
      { step: "Top Institutes", detail: "ISLRTC (New Delhi), Ali Yavar Jung National Institute (Mumbai)" },
      { step: "Practice", detail: "Volunteer with deaf schools/NGOs" },
      { step: "First Job", detail: "Govt schools for deaf, NGOs, freelance assignments" },
      { step: "Timeline", detail: "2-3 years from learning to certification" }
    ],
    
    skills: [
      "Fluency in ISL (both expressive and receptive)",
      "Active Listening (understanding tone, emotion)",
      "Quick Thinking (real-time translation, no pauses)",
      "Cultural Sensitivity (understanding Deaf culture)",
      "Patience and Empathy (some conversations are tough)",
      "Physical Stamina (signing for hours is tiring)",
      "Neutrality (you translate, don't add opinions)"
    ],
    
    workPlaces: [
      "Schools for the Deaf (teaching support)",
      "Hospitals (emergency/patient communication)",
      "Courts (legal rights for deaf individuals)",
      "Government Offices (accessibility services)",
      "TV News Channels (live sign language broadcast)",
      "Corporate Events (inclusive conferences)",
      "Freelance: YES — weddings, appointments, meetings",
      "Remote Work: Possible via video calls"
    ],
    
    realPerson: {
      name: "Steffi Sebastian",
      story: `After 5 years as a professional ISL interpreter at DOOR International, Steffi now works freelance across Canada and the U.S. A career highlight? Interpreting for the U.S. Ambassador at the American Consulate in India. She's proof that this career can take you places — literally and figuratively — while making communication accessible for all.`
    },
    
    resources: {
      youtube: "Pragya Gupta (ISL basics), ISLRTC official channel",
      courses: "ISLRTC free beginners' course, Alison ISL fundamentals",
      practice: "ISL Dictionary (Android/iOS), ISL Connect (practice with deaf community)",
      books: `"Introduction to Indian Sign Language" by Ulrike Zeshan`,
      portfolio: "Join local deaf community events, volunteer at deaf schools. Official: ISLRTC (islrtc.nic.in)"
    },
    
    forYou: {
      yes: [
        "You believe communication is a basic human right",
        "You enjoy helping others in meaningful ways",
        "You can express emotions without speaking"
      ],
      no: [
        "Not for you if you lack patience (learning ISL takes time and constant practice)",
        "Not for you if you can't handle emotionally heavy situations (hospitals, courts can be tough)"
      ]
    }
  }

};

// Make it available to other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = careerDatabase;
}