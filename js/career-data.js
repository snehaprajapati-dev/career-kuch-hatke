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
    name: "Sunny Nehra",
    story: `Self-taught ethical hacker from a small town who discovered critical security vulnerabilities in major platforms. Featured in international bug bounty hall of fame, earning lakhs through responsible disclosure. Now works as a cybersecurity researcher helping secure Indian government and corporate systems. Proves you don't need fancy degrees—just curiosity, persistence, and ethical intent to succeed in cybersecurity.`
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
    story: `Started as a regular employee at Pocket Aces (a digital content company), managing their social media. While working 9-5, she started her own Instagram (@kavyakarnatac) sharing relatable stories about Indian culture, food, and daily life. Her authentic, no-filter approach grew her following to 8M+ organically—no paid ads, just pure storytelling. Brands noticed. She left her job, founded KK Create (a content and influencer agency), and now works with major brands like Amazon, Swiggy, and Myntra. Proves that if you understand what makes people stop scrolling, you can turn social media from a time-waster into a career goldmine.`
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
      name: "Dr. Neerja Bhatia",
      story: `Dr. Neerja Bhatia is one of India’s leading Sign Language interpreters and advocates for the Deaf community. She has worked extensively to promote Indian Sign Language (ISL) and make communication more inclusive. Through training programs, workshops, and public awareness initiatives, she has empowered many students to learn and respect sign language. Her work bridges the gap between the hearing and Deaf communities in India. Dr. Bhatia’s journey inspires young people to choose meaningful careers that create real social impact.`
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
  },

    // ═══════════════════════════════════════
  // CAREER 6: Food Stylist
  // ═══════════════════════════════════════
  "food-stylist": {
    name: "Food Stylist",
    category: "creative",
    categoryName: "Creative",
    emoji: "🎨",
    tagline: "Make food look so good, people drool through screens",
    
    quickFacts: {
      salary: "₹2.5-15 LPA",
      remote: "No (On-set work)",
      degree: "Not Mandatory"
    },
    
    whatTheyDo: `Food stylists make food look irresistible for photoshoots, videos, ads, cookbooks, and social media. They arrange ingredients, add props, adjust lighting angles, and use tricks (like hairspray on fruits for shine!) to make dishes camera-ready. When you see a perfect burger on a billboard or melting cheese in a pizza ad—a food stylist spent hours creating that single shot. They work closely with photographers, directors, and brands to create visual magic.`,
    
    salary: {
      entry: { label: "Entry Level", amount: "₹2.5-4 LPA (assistant roles)" },
      mid: { label: "Mid Level", amount: "₹5-8 LPA (agency/brand)" },
      senior: { label: "Senior Level", amount: "₹10-15 LPA (lead stylist)" },
      freelance: { label: "Freelance", amount: "₹5,000-50,000 per shoot" }
    },
    
    roadmap: [
      { step: "After 10th", detail: "Any stream (Arts/Commerce/Science—all work)" },
      { step: "After 12th", detail: "Hotel Management / Culinary Arts / Food Technology OR any degree" },
      { step: "Degree", detail: "NOT mandatory—portfolio and styling skills matter more" },
      { step: "Learn", detail: "Food photography basics, plating techniques, props styling" },
      { step: "Build", detail: "Style 10-15 dishes, photograph them, create Instagram portfolio" },
      { step: "Apply", detail: "Assist established food stylists, approach ad agencies" },
      { step: "Timeline", detail: "6-12 months to build portfolio + start freelancing" }
    ],
    
    skills: [
      "Eye for aesthetics (color, composition, balance)",
      "Food handling and plating techniques",
      "Understanding camera angles and lighting",
      "Creativity (making ordinary food look extraordinary)",
      "Patience (one shot can take 2-3 hours)",
      "Knowledge of food trends (Instagram-worthy styles)",
      "Basic cooking skills (to prepare/modify dishes)"
    ],
    
    workPlaces: [
      "Advertising Agencies (food brand campaigns)",
      "Production Houses (cooking shows, food videos)",
      "Publishing Houses (cookbook photography)",
      "Restaurants (menu photoshoots)",
      "Food Delivery Apps (Swiggy, Zomato campaigns)",
      "Freelance: Work with chefs, influencers, brands",
      "Remote Work: NO (hands-on, on-location work)"
    ],
    
    realPerson: {
  name: "Nitin Tandon",
  story: `Started as a chef at Taj Hotels, then opened India's first food styling production house in 2012. Now styles food for KFC, McDonald's, Dominos, Starbucks, and Bollywood films like Lunchbox and Dear Zindagi. Won "Best Food Stylist" at ZEE Living Foodz Awards 2016 and voted Top 50 Master Chef in India. Proves culinary skills + visual creativity = high-demand career.`
},
    
    resources: {
      youtube: "Food styling tutorials (search 'food photography styling'), Plate It (food plating)",
      courses: "Food Photography & Styling (Udemy), Instagram tutorials by food photographers",
      practice: "Style food at home, photograph it, post on Instagram with #foodstyling",
      books: `"Plate to Pixel" by Helene Dujardin, "Food Styling" by Delores Custer`,
      portfolio: "Instagram (main platform), Behance for professional portfolio"
    },
    
    forYou: {
      yes: [
        "You love food AND photography equally",
        "You enjoy arranging things to look perfect",
        "You're patient (one shot = hours of work)"
      ],
      no: [
        "Not for you if you want 9-5 routine (shoots happen anytime)",
        "Not for you if you can't handle food waste (styled food often isn't edible)"
      ]
    }
  },

    // ═══════════════════════════════════════
  // CAREER 7: Voice Over Artist
  // ═══════════════════════════════════════
  "voice-over-artist": {
    name: "Voice Over Artist",
    category: "creative",
    categoryName: "Creative",
    emoji: "🎨",
    tagline: "Your voice becomes characters, ads, and stories",
    
    quickFacts: {
      salary: "₹2-20 LPA",
      remote: "Yes",
      degree: "Not Required"
    },
    
    whatTheyDo: `Voice-over artists lend their voice to cartoons, documentaries, ads, audiobooks, video games, and e-learning modules. They read scripts with emotion, clarity, and character—whether it's a playful cartoon character, a serious documentary narrator, or an energetic radio ad. They work from home studios or professional recording booths, often doing multiple takes until the voice matches the director's vision perfectly.`,
    
    salary: {
      entry: { label: "Entry Level", amount: "₹2-4 LPA (small projects)" },
      mid: { label: "Mid Level", amount: "₹6-12 LPA (regular clients)" },
      senior: { label: "Senior Level", amount: "₹15-20 LPA (top-tier projects)" },
      freelance: { label: "Per Project", amount: "₹1,500-50,000 per recording" }
    },
    
    roadmap: [
      { step: "After 10th", detail: "Any stream works" },
      { step: "After 12th", detail: "Any degree OR drama/theater courses" },
      { step: "Degree", detail: "NOT required—voice quality and acting skills matter" },
      { step: "Learn", detail: "Voice modulation, breathing techniques, script reading" },
      { step: "Build", detail: "Record 5-10 sample clips (ad read, storytelling, character voices)" },
      { step: "Apply", detail: "Freelance platforms (Fiverr, Upwork), local studios" },
      { step: "Timeline", detail: "3-6 months to create demo reel and get first paid gig" }
    ],
    
    skills: [
      "Clear pronunciation and diction",
      "Voice modulation (changing tone, pitch, emotion)",
      "Acting skills (conveying emotion through voice only)",
      "Breath control (long sentences without gasping)",
      "Accent versatility (regional, foreign accents)",
      "Script interpretation (understanding context)",
      "Home recording setup (basic mic + editing software)"
    ],
    
    workPlaces: [
      "Animation Studios (dubbing for cartoons)",
      "Advertising Agencies (radio/TV commercials)",
      "E-learning Companies (course narrations)",
      "Audiobook Publishers (narrating books)",
      "Gaming Studios (character voices)",
      "Freelance: Fiverr, Upwork, Voices.com",
      "Remote Work: YES—100% work-from-home possible"
    ],
    
    realPerson: {
      name: "Sanket Mhatre",
      story: "Sanket Mhatre is one of India’s most popular and celebrated voice-over and dubbing artists. He is widely recognized as the Hindi voice of Iron Man (Robert Downey Jr.) in the Marvel Cinematic Universe, which made him a fan favorite across the country. Over the years, he has also dubbed for major Hollywood stars like Chris Evans and other iconic characters in films and web series. Known for his powerful voice modulation and emotional depth, Sanket brings international characters to life for Indian audiences. He has worked across Hindi, Marathi, and several regional languages, making him a versatile talent in the industry. His contribution to Indian dubbing has earned him massive popularity and respect among fans and filmmakers alike."
    },
    
    resources: {
      youtube: "Booth Junkie (voice-over tutorials), Voice Over Kickstart",
      courses: "Voice Acting Mastery (Udemy), free YouTube courses",
      practice: "Record daily—read news, ads, stories. Use Audacity (free software)",
      books: `"Voice-Over Voice Actor" by Yuri Lowenthal, "The Art of Voice Acting" by James Alburger`,
      portfolio: "SoundCloud, YouTube (upload demos), Voices.com profile"
    },
    
    forYou: {
      yes: [
        "People say you have a good/unique voice",
        "You enjoy mimicking accents or characters",
        "You're comfortable performing alone (no stage needed)"
      ],
      no: [
        "Not for you if you hate hearing your own recorded voice",
        "Not for you if you can't take rejection (auditions are competitive)"
      ]
    }
  },

  // ═══════════════════════════════════════
  // CAREER 8: Ethical Fashion Designer
  // ═══════════════════════════════════════
  "ethical-fashion-designer": {
    name: "Ethical Fashion Designer",
    category: "creative",
    categoryName: "Creative",
    emoji: "🎨",
    tagline: "Design clothes that look good AND do good for the planet",
    
    quickFacts: {
      salary: "₹3-25 LPA",
      remote: "Partially (design remotely, production on-site)",
      degree: "Preferred"
    },
    
    whatTheyDo: `Ethical fashion designers create clothing using sustainable materials (organic cotton, recycled fabrics), fair labor practices, and eco-friendly production methods. They design everything from everyday wear to high fashion—but with a conscience. They work with artisans, promote slow fashion (quality over quantity), and educate consumers about reducing fashion waste. Their goal: make you look great without harming people or the planet.`,
    
    salary: {
      entry: { label: "Entry Level", amount: "₹3-5 LPA (assistant designer)" },
      mid: { label: "Mid Level", amount: "₹7-15 LPA (own label/brand)" },
      senior: { label: "Senior Level", amount: "₹18-25 LPA (established brand)" },
      freelance: { label: "Own Brand", amount: "Varies widely based on sales" }
    },
    
    roadmap: [
      { step: "After 10th", detail: "Any stream (Commerce helps for business side)" },
      { step: "After 12th", detail: "B.Des Fashion Design / NIFT / Pearl Academy" },
      { step: "Degree", detail: "Preferred but not mandatory—portfolio + sustainable knowledge key" },
      { step: "Learn", detail: "Sustainable materials, ethical sourcing, design software (Adobe Illustrator)" },
      { step: "Build", detail: "Create 1-2 small sustainable collections, document process" },
      { step: "Apply", detail: "Work with sustainable brands, start own label, collaborate with NGOs" },
      { step: "Timeline", detail: "3-4 years (degree) + 1-2 years building brand" }
    ],
    
    skills: [
      "Fashion design (sketching, pattern-making, draping)",
      "Knowledge of sustainable materials (organic, recycled, biodegradable)",
      "Understanding fair trade and ethical labor",
      "Business skills (if starting own brand)",
      "Storytelling (consumers buy the 'why' behind ethical fashion)",
      "Trend awareness (sustainable can still be stylish)",
      "Supply chain transparency (knowing where materials come from)"
    ],
    
    workPlaces: [
      "Sustainable Fashion Brands (Nicobar, No Nasties, Doodlage)",
      "Fashion NGOs (working with artisan communities)",
      "Slow Fashion Startups (emerging D2C brands)",
      "Export Houses (sustainable fabric sourcing)",
      "Own Label: Sell via Instagram, sustainable marketplaces",
      "Remote Work: Design phase yes, production no"
    ],
    
    realPerson: {
      name: "Anita Dongre",
        story: `Anita Dongre is a leading Indian fashion designer and founder of the House of Anita Dongre. She is known for blending traditional Indian craftsmanship with modern, elegant designs. Her popular brands include AND, Global Desi, Grassroot, and Pink City jewellery. A strong supporter of sustainable and ethical fashion, she promotes eco-friendly practices and Indian artisans. Awarded titles like EY Entrepreneur of the Year and Vogue’s Designer of the Year, she is one of India’s most inspiring fashion icons.`
      },
    
    resources: {
      youtube: "The Sustainable Fashion Forum, Fashion Revolution",
      courses: "Sustainable Fashion (FutureLearn), Fashion Design Basics (Coursera)",
      practice: "Upcycle old clothes, experiment with natural dyes, document on Instagram",
      books: `"Fashionopolis" by Dana Thomas, "To Die For" by Lucy Siegle`,
      portfolio: "Instagram, lookbook with sustainability story, website with brand values"
    },
    
    forYou: {
      yes: [
        "You love fashion AND care about the environment",
        "You're willing to educate consumers (ethical fashion requires explanation)",
        "You enjoy working with artisans and traditional crafts"
      ],
      no: [
        "Not for you if you only care about fast trends (ethical = timeless)",
        "Not for you if you can't handle higher production costs (sustainable is pricier)"
      ]
    }
  },

  // ═══════════════════════════════════════
  // CAREER 9: Animator
  // ═══════════════════════════════════════
  "animator": {
    name: "Animator",
    category: "creative",
    categoryName: "Creative",
    emoji: "🎨",
    tagline: "Bring characters and stories to life, frame by frame",
    
    quickFacts: {
      salary: "₹3-30 LPA",
      remote: "Yes",
      degree: "Not Mandatory"
    },
    
    whatTheyDo: `Animators create movement in films, TV shows, video games, ads, and social media content. They work on 2D animation (hand-drawn style), 3D animation (like Pixar movies), stop-motion, motion graphics, and visual effects (VFX). Every character movement, facial expression, and scene transition is crafted by animators—sometimes taking hours to animate just a few seconds of footage. They turn static images into emotional, dynamic stories.`,
    
    salary: {
      entry: { label: "Entry Level", amount: "₹3-5 LPA (junior animator)" },
      mid: { label: "Mid Level", amount: "₹7-15 LPA (senior animator)" },
      senior: { label: "Senior Level", amount: "₹18-30 LPA (animation director)" },
      freelance: { label: "Per Project", amount: "₹10,000-5,00,000 per project" }
    },
    
    roadmap: [
      { step: "After 10th", detail: "Any stream (Arts students have slight edge)" },
      { step: "After 12th", detail: "B.Des Animation / Diploma in Animation / Any degree + online courses" },
      { step: "Degree", detail: "NOT mandatory—demo reel (portfolio) is everything" },
      { step: "Learn", detail: "Adobe After Effects, Blender (free 3D software), or Maya" },
      { step: "Build", detail: "Animate 3-5 short clips (character walk, bouncing ball, story scene)" },
      { step: "Apply", detail: "Animation studios (Bengaluru, Mumbai), freelance platforms" },
      { step: "Timeline", detail: "6-12 months to build demo reel + land first gig" }
    ],
    
    skills: [
      "Understanding movement and timing (physics of motion)",
      "Software: Blender, Maya, Adobe After Effects, Toon Boom",
      "Storytelling (even a 5-second clip tells a story)",
      "Patience (animating 1 second can take 1 hour)",
      "Observation (watching how people/animals move in real life)",
      "Creativity and imagination",
      "Collaboration (working with directors, voice actors, editors)"
    ],
    
    workPlaces: [
      "Animation Studios (Technicolor, Xentrix Studios, DQ Entertainment)",
      "Film/VFX Studios (Red Chillies VFX, Prana Studios)",
      "Gaming Companies (character/cutscene animation)",
      "Advertising Agencies (motion graphics for ads)",
      "YouTube Content Creators (animated explainer videos)",
      "Freelance: Upwork, Fiverr, freelance animation projects",
      "Remote Work: YES—very common, especially post-COVID"
    ],
    
    realPerson: {
      name: "Ram Mohan",
      story: `Ram Mohan was a legendary Indian animator, widely known as the “Father of Indian Animation.” He played a key role in shaping India’s animation industry and worked on many iconic advertising films and animated projects. With a career spanning over five decades, he trained and inspired generations of animators. He founded Ram Mohan Biographics, one of India’s leading animation studios. His contribution to Indian cinema and animation earned him prestigious honors like the Padma Shri. Ram Mohan’s creativity and vision laid the foundation for modern Indian animation.`
    },
    
    resources: {
      youtube: "Alan Becker (animation tutorials), Blender Guru (3D animation)",
      courses: "Animation Bootcamp (Bloop Animation), Blender fundamentals (free on YouTube)",
      practice: "Animate daily exercises (11 Second Club challenges), post on Instagram",
      books: `"The Animator's Survival Kit" by Richard Williams (industry bible)`,
      portfolio: "Vimeo, ArtStation, personal website with demo reel"
    },
    
    forYou: {
      yes: [
        "You loved cartoons growing up and wondered 'how is this made?'",
        "You're extremely patient (animation = repetitive, frame-by-frame work)",
        "You enjoy both art and technology"
      ],
      no: [
        "Not for you if you want instant results (animation is SLOW)",
        "Not for you if you hate sitting at a computer for long hours"
      ]
    }
  },

  // ═══════════════════════════════════════
  // CAREER 10: Drone Pilot
  // ═══════════════════════════════════════
  "drone-pilot": {
    name: "Drone Pilot",
    category: "tech",
    categoryName: "Tech",
    emoji: "💻",
    tagline: "Fly drones for films, surveys, delivery, and rescue missions",
    
    quickFacts: {
      salary: "₹3-20 LPA",
      remote: "No (On-field work)",
      degree: "Not Required"
    },
    
    whatTheyDo: `Drone pilots operate unmanned aerial vehicles (drones) for aerial photography/videography (weddings, films, real estate), land surveys, agriculture monitoring, disaster relief, infrastructure inspections, and even deliveries. They plan flight paths, handle equipment, ensure legal compliance (DGCA rules in India), and edit footage. From capturing breathtaking wedding videos to inspecting tall buildings—drones are replacing risky manual work.`,
    
    salary: {
      entry: { label: "Entry Level", amount: "₹3-5 LPA (freelance/assistant)" },
      mid: { label: "Mid Level", amount: "₹6-12 LPA (specialized work)" },
      senior: { label: "Senior Level", amount: "₹15-20 LPA (commercial operations)" },
      freelance: { label: "Per Project", amount: "₹5,000-2,00,000 per shoot/survey" }
    },
    
    roadmap: [
      { step: "After 10th", detail: "Any stream (Science helps for technical understanding)" },
      { step: "After 12th", detail: "Any degree OR direct certification" },
      { step: "Degree", detail: "NOT required—DGCA license is mandatory" },
      { step: "Learn", detail: "Get Remote Pilot License (RPL) from DGCA-approved institute" },
      { step: "Build", detail: "Practice flying, create aerial video portfolio" },
      { step: "Apply", detail: "Wedding videographers, survey companies, film production" },
      { step: "Timeline", detail: "3-6 months training + license + equipment purchase" }
    ],
    
    skills: [
      "Drone flying (smooth, controlled movements)",
      "Understanding DGCA regulations (no-fly zones, permissions)",
      "Video/photo editing (most work requires post-production)",
      "Weather awareness (wind, rain affect flight)",
      "Technical troubleshooting (basic drone repairs)",
      "Spatial awareness (judging distance, height, obstacles)",
      "Client communication (understanding shot requirements)"
    ],
    
    workPlaces: [
      "Film Production Houses (aerial cinematography)",
      "Wedding Photography Studios",
      "Real Estate (property showcase videos)",
      "Agriculture Tech Companies (crop monitoring)",
      "Infrastructure Firms (bridge/tower inspections)",
      "Disaster Management (search & rescue operations)",
      "Freelance: Rent out services per project",
      "Remote Work: NO (on-location flying required)"
    ],
    
      realPerson: {
    name: "Sajeesh Sathyadev",
    story: `Started flying drones as a hobby, got his DGCA license, and became one of India's top commercial drone pilots. Worked on aerial cinematography for blockbuster films like Ponniyin Selvan, capturing breathtaking shots that would be impossible with traditional cameras. Now runs a drone services company providing services for films, real estate, and infrastructure projects. Proves technical skills + creativity = high-demand career in Indian cinema.`
  },
    
    resources: {
      youtube: "Original Dobo (drone tutorials), FliteTest",
      courses: "DGCA Remote Pilot Training (mandatory, government-approved centers)",
      practice: "Start with cheap practice drone, master controls before buying pro gear",
      books: `DGCA's Civil Aviation Requirements (CAR) for drones`,
      portfolio: "YouTube channel with aerial videos, Instagram reel showcases"
    },
    
    forYou: {
      yes: [
        "You love gadgets and flying things",
        "You enjoy outdoor, hands-on work",
        "You're disciplined (following legal/safety rules is non-negotiable)"
      ],
      no: [
        "Not for you if you're not willing to invest ₹50k-3L in equipment initially",
        "Not for you if you can't handle equipment risk (drones can crash/get damaged)"
      ]
    }
  },

  // ═══════════════════════════════════════
  // CAREER 11: AI Prompt Engineer
  // ═══════════════════════════════════════
  "ai-prompt-engineer": {
    name: "AI Prompt Engineer",
    category: "tech",
    categoryName: "Tech",
    emoji: "💻",
    tagline: "Talk to AI in ways that make it do exactly what you want",
    
    quickFacts: {
      salary: "₹6-40 LPA",
      remote: "Yes",
      degree: "Not Mandatory"
    },
    
    whatTheyDo: `AI Prompt Engineers write and optimize text prompts to get the best outputs from AI tools like ChatGPT, Midjourney, DALL-E, and coding assistants. They experiment with phrasing, structure, and context to make AI generate accurate code, creative images, or useful text. Companies hire them to fine-tune AI for customer support, content creation, product descriptions, and more. It's like being a translator between humans and AI—you speak both languages.`,
    
    salary: {
      entry: { label: "Entry Level", amount: "₹6-10 LPA (startups, agencies)" },
      mid: { label: "Mid Level", amount: "₹12-25 LPA (product companies)" },
      senior: { label: "Senior Level", amount: "₹30-40 LPA (AI research firms)" },
      freelance: { label: "Per Project", amount: "₹20,000-3,00,000 per contract" }
    },
    
    roadmap: [
      { step: "After 10th", detail: "Any stream (even Arts works!)" },
      { step: "After 12th", detail: "Any degree OR self-learning path" },
      { step: "Degree", detail: "NOT mandatory—skills + portfolio matter" },
      { step: "Learn", detail: "How AI models work, prompt patterns, experimentation" },
      { step: "Build", detail: "Create prompt libraries, solve real problems using AI" },
      { step: "Apply", detail: "AI startups, content agencies, freelance platforms" },
      { step: "Timeline", detail: "3-6 months learning + building portfolio" }
    ],
    
    skills: [
      "Understanding how LLMs (Large Language Models) work",
      "Experimentation mindset (testing different prompt styles)",
      "Writing clarity (precise language gets better AI outputs)",
      "Domain knowledge (marketing, coding, design—depending on use case)",
      "Critical thinking (evaluating AI responses for accuracy)",
      "Basic Python (bonus, for API usage)",
      "Staying updated (AI evolves weekly!)"
    ],
    
    workPlaces: [
      "AI Startups (building AI-powered products)",
      "Tech Giants (Google, Microsoft AI teams)",
      "Marketing Agencies (AI content generation)",
      "E-commerce (automated product descriptions)",
      "EdTech (AI tutors, personalized learning)",
      "Freelance: Upwork, specialized AI consulting",
      "Remote Work: YES—100% remote-friendly"
    ],
    
    realPerson: {
      name: "karthik-kannan",
      story: `Karthik Kannan is one of India’s well-known AI prompt engineers and educators in the generative AI space. He is recognized for teaching Indians how to effectively use tools like ChatGPT and other AI platforms for business, content creation, and productivity. Through workshops, online courses, and social media, he has helped thousands of students and professionals understand practical AI skills. His easy-to-understand teaching style makes AI simple and relatable for Indian audiences. Karthik is considered a leading voice in India’s growing AI learning community.`
    },
    
    resources: {
      youtube: "AI Explained (prompt tutorials), Matt Wolfe (AI news & tips)",
      courses: "Learn Prompting (learnprompting.org - free), ChatGPT Prompt Engineering (Coursera)",
      practice: "Use ChatGPT, Midjourney daily. Document what works. Share on Twitter/LinkedIn.",
      books: `"The Prompt Engineering Handbook" (free online resources)`,
      portfolio: "GitHub with prompt templates, Medium articles on AI experiments"
    },
    
    forYou: {
      yes: [
        "You're fascinated by AI and use ChatGPT/Midjourney daily",
        "You enjoy experimenting and problem-solving",
        "You're okay with a field that didn't exist 2 years ago (high uncertainty)"
      ],
      no: [
        "Not for you if you want a 'stable, unchanging' career (AI changes monthly)",
        "Not for you if you hate screen time (it's all digital work)"
      ]
    }
  },

    // ═══════════════════════════════════════
  // CAREER 12: Data Storyteller
  // ═══════════════════════════════════════
  "data-storyteller": {
    name: "Data Storyteller",
    category: "tech",
    categoryName: "Tech",
    emoji: "💻",
    tagline: "Turn boring numbers into compelling visual stories",
    
    quickFacts: {
      salary: "₹5-25 LPA",
      remote: "Yes",
      degree: "Preferred but not mandatory"
    },
    
    whatTheyDo: `Data storytellers take complex data and turn it into easy-to-understand visuals, dashboards, and narratives that help businesses make decisions. They combine data analysis skills with design thinking—creating charts, infographics, and presentations that even non-technical people can understand. When a CEO says "show me why sales dropped last quarter" in one simple slide—that's a data storyteller's job. They work with tools like Tableau, Power BI, and Python to visualize insights.`,
    
    salary: {
      entry: { label: "Entry Level", amount: "₹5-8 LPA (analyst roles)" },
      mid: { label: "Mid Level", amount: "₹10-18 LPA (senior analyst)" },
      senior: { label: "Senior Level", amount: "₹20-25 LPA (data visualization lead)" },
      freelance: { label: "Per Project", amount: "₹30,000-5,00,000 per dashboard/report" }
    },
    
    roadmap: [
      { step: "After 10th", detail: "Science/Commerce (Math background helps)" },
      { step: "After 12th", detail: "B.Sc. Statistics / BCA / B.Com / Engineering / Any degree" },
      { step: "Degree", detail: "Preferred but online certifications can replace it" },
      { step: "Learn", detail: "Excel, Tableau/Power BI, basic Python, storytelling principles" },
      { step: "Build", detail: "Create 3-5 data visualization projects (use public datasets)" },
      { step: "Apply", detail: "Data analyst roles, consulting firms, freelance" },
      { step: "Timeline", detail: "6-12 months to learn tools + build portfolio" }
    ],
    
    skills: [
      "Data analysis (finding patterns, trends, insights)",
      "Data visualization tools (Tableau, Power BI, Google Data Studio)",
      "Storytelling (explaining 'why' numbers matter)",
      "Design sense (choosing right charts, colors, layouts)",
      "Communication (presenting to non-technical stakeholders)",
      "Basic statistics (understanding averages, trends, correlations)",
      "Business understanding (knowing what metrics matter)"
    ],
    
    workPlaces: [
      "Tech Companies (product analytics teams)",
      "Consulting Firms (Deloitte, PwC, McKinsey)",
      "E-commerce (Flipkart, Amazon—sales insights)",
      "Finance/Banking (risk, market analysis)",
      "Healthcare (patient data visualization)",
      "Freelance: Help businesses create dashboards",
      "Remote Work: YES—most work is digital"
    ],
    
      realPerson: {
    name: "Farhad Desai",
    story: `Started as a regular data analyst at a Mumbai startup, felt frustrated that nobody understood his Excel reports. Taught himself Tableau and data storytelling through YouTube. Now leads data visualization at Swiggy, turning millions of food orders into insights that shape business decisions. His dashboards convinced executives to launch new features that increased revenue by crores. Proves communication skills + data knowledge = career leap.`
  },
    
    resources: {
      youtube: "Storytelling with Data, Tableau tutorials by Tableau Tim",
      courses: "Data Visualization (Coursera), Google Data Analytics Certificate",
      practice: "Kaggle datasets, create dashboards, post on LinkedIn/Tableau Public",
      books: `"Storytelling with Data" by Cole Nussbaumer Knaflic (industry standard)`,
      portfolio: "Tableau Public profile, Medium articles explaining visualizations"
    },
    
    forYou: {
      yes: [
        "You enjoy finding patterns in data",
        "You're good at explaining complex things simply",
        "You like both numbers AND design"
      ],
      no: [
        "Not for you if you hate Excel/spreadsheets (they're your daily tools)",
        "Not for you if you prefer pure coding over visuals (this is more communication than code)"
      ]
    }
  },

  // ═══════════════════════════════════════
  // CAREER 13: Game Developer
  // ═══════════════════════════════════════
  "game-developer": {
    name: "Game Developer",
    category: "tech",
    categoryName: "Tech",
    emoji: "💻",
    tagline: "Code the games millions will play and love",
    
    quickFacts: {
      salary: "₹4-30 LPA",
      remote: "Yes",
      degree: "Not Mandatory"
    },
    
    whatTheyDo: `Game developers write the code that makes games work. They program player movement, enemy AI, scoring systems, physics (gravity, collisions), and multiplayer features. While game designers decide what the game should feel like, developers build the technical systems that make it happen. They work on mobile games (BGMI, Candy Crush), PC/console games, VR experiences, and browser games using engines like Unity or Unreal.`,
    
    salary: {
      entry: { label: "Entry Level", amount: "₹4-7 LPA (junior developer)" },
      mid: { label: "Mid Level", amount: "₹10-18 LPA (senior developer)" },
      senior: { label: "Senior Level", amount: "₹20-30 LPA (lead programmer)" },
      freelance: { label: "Indie Games", amount: "Revenue-based (can range from ₹0 to crores)" }
    },
    
    roadmap: [
      { step: "After 10th", detail: "Science/Computer Science stream" },
      { step: "After 12th", detail: "B.Tech CSE / BCA / B.Sc. CS / Self-learning path" },
      { step: "Degree", detail: "NOT mandatory—portfolio of games is what matters" },
      { step: "Learn", detail: "C# (for Unity) or C++ (for Unreal), game dev fundamentals" },
      { step: "Build", detail: "Make 2-3 complete games (even simple ones—publish them!)" },
      { step: "Apply", detail: "Gaming studios (Bengaluru, Pune hubs), freelance, indie dev" },
      { step: "Timeline", detail: "6-12 months to learn + build playable games" }
    ],
    
    skills: [
      "Programming (C# for Unity, C++ for Unreal Engine)",
      "Game engine knowledge (Unity or Unreal)",
      "Math & physics (for movement, collisions, trajectories)",
      "Problem-solving (debugging complex game logic)",
      "Version control (Git for team projects)",
      "Understanding game design (knowing what makes games fun)",
      "Optimization (making games run smoothly on all devices)"
    ],
    
    workPlaces: [
      "Gaming Studios (Rockstar India, Ubisoft Pune, nCore Games)",
      "Mobile Gaming (Dream11, Zynga, Moonfrog Labs)",
      "Indie Game Development (solo or small teams)",
      "VR/AR Companies (emerging field)",
      "Freelance: Contract work for studios",
      "Remote Work: YES—many studios hire globally"
    ],
    
    realPerson: {
      name: "Vishal Gondal",
      story: `Founded Indiagames (India's first mobile gaming company) at age 18. Sold it to Disney, then created GOQii (fitness wearables). Started as a teenage game developer teaching himself to code. Proves Indian game devs can build global companies.`
    },
    
    resources: {
      youtube: "Brackeys (Unity tutorials), CodeMonkey (game dev concepts)",
      courses: "Unity Learn (free official courses), Complete C# Unity Game Dev (Udemy)",
      practice: "Game jams (Ludum Dare, Global Game Jam), publish on itch.io",
      books: `"Game Programming Patterns" by Robert Nystrom`,
      portfolio: "GitHub with game code, itch.io with playable games"
    },
    
    forYou: {
      yes: [
        "You love both playing games AND understanding how they work",
        "You enjoy coding and problem-solving",
        "You're okay with long hours during game release deadlines"
      ],
      no: [
        "Not for you if you only want to play games (development is hard work)",
        "Not for you if you can't handle seeing your game fail (most indie games don't succeed financially)"
      ]
    }
  },

  // ═══════════════════════════════════════
  // CAREER 14: Restoration Architect
  // ═══════════════════════════════════════
  "restoration-architect": {
    name: "Restoration Architect",
    category: "science",
    categoryName: "Science",
    emoji: "🔬",
    tagline: "Bring heritage buildings back to life while preserving history",
    
    quickFacts: {
      salary: "₹4-20 LPA",
      remote: "No (On-site work)",
      degree: "Required"
    },
    
    whatTheyDo: `Restoration architects specialize in repairing, conserving, and restoring historical buildings, monuments, and heritage sites. They study original construction techniques, work with traditional materials, and ensure repairs match the building's historical character. They collaborate with archaeologists, historians, and government bodies (like ASI - Archaeological Survey of India) to preserve India's cultural heritage—from ancient temples to colonial-era buildings.`,
    
    salary: {
      entry: { label: "Entry Level", amount: "₹4-6 LPA (assistant roles)" },
      mid: { label: "Mid Level", amount: "₹8-14 LPA (project lead)" },
      senior: { label: "Senior Level", amount: "₹16-20 LPA (independent practice)" },
      freelance: { label: "Consulting", amount: "₹50,000-5,00,000 per project" }
    },
    
    roadmap: [
      { step: "After 10th", detail: "Science/Arts stream (both work)" },
      { step: "After 12th", detail: "B.Arch (Architecture degree - 5 years)" },
      { step: "Degree", detail: "MANDATORY—B.Arch required, M.Arch in Conservation preferred" },
      { step: "Specialization", detail: "M.Arch in Architectural Conservation (CEPT, SPA Delhi)" },
      { step: "Build", detail: "Internships with ASI, conservation firms, heritage projects" },
      { step: "Apply", detail: "ASI, UNESCO projects, private conservation firms, NGOs" },
      { step: "Timeline", detail: "5 years (B.Arch) + 2 years (M.Arch) + experience" }
    ],
    
    skills: [
      "Architectural knowledge (construction, structures, materials)",
      "Historical research (understanding original building techniques)",
      "Documentation (measuring, photographing, creating detailed records)",
      "Material science (lime mortar, traditional bricks, stone types)",
      "CAD software (AutoCAD for restoration plans)",
      "Patience and attention to detail (heritage work is slow and precise)",
      "Legal knowledge (heritage laws, ASI regulations)"
    ],
    
    workPlaces: [
      "Archaeological Survey of India (ASI - government)",
      "UNESCO World Heritage Sites (conservation projects)",
      "Private Conservation Firms (CRCI, heritage consultancies)",
      "NGOs (INTACH - Indian National Trust for Art and Cultural Heritage)",
      "Architecture Firms (specializing in adaptive reuse)",
      "Self-employed: Heritage consultancy",
      "Remote Work: NO (hands-on, on-site work)"
    ],
    
    realPerson: {
      name: "Abha Narain Lambah",
      story: `India's leading conservation architect. Restored iconic structures like Chhatrapati Shivaji Terminus (Mumbai), Aga Khan Palace (Pune), and heritage bungalows across India. Awarded Padma Shri for her work. Shows how passion for history + architecture = preserving India's legacy.`
    },
    
    resources: {
      youtube: "INTACH Delhi Chapter (heritage talks), ArchDaily (restoration projects)",
      courses: "Heritage Conservation (CEPT Ahmedabad), UNESCO online courses",
      practice: "Visit heritage sites, document architecture, volunteer with INTACH",
      books: `"Conservation of Historic Buildings" by Bernard Feilden`,
      portfolio: "Documented heritage projects, internship with ASI/conservation firms"
    },
    
    forYou: {
      yes: [
        "You love history and architecture equally",
        "You enjoy meticulous, detail-oriented work",
        "You're passionate about preserving culture"
      ],
      no: [
        "Not for you if you want quick results (heritage projects take years)",
        "Not for you if you prefer modern design over historical accuracy"
      ]
    }
  },

  // ═══════════════════════════════════════
  // CAREER 15: Wildlife Photographer
  // ═══════════════════════════════════════
  "wildlife-photographer": {
    name: "Wildlife Photographer",
    category: "science",
    categoryName: "Science",
    emoji: "🔬",
    tagline: "Capture nature's beauty and tell conservation stories through your lens",
    
    quickFacts: {
      salary: "₹3-25 LPA",
      remote: "No (Travel-intensive)",
      degree: "Not Required"
    },
    
    whatTheyDo: `Wildlife photographers capture images of animals, birds, landscapes, and ecosystems in their natural habitats. They travel to forests, wetlands, mountains, and oceans—often waiting hours (or days) for the perfect shot. Beyond beautiful images, they tell conservation stories, document endangered species, and raise awareness about environmental issues. Their work appears in magazines like National Geographic, wildlife documentaries, calendars, and exhibitions.`,
    
    salary: {
      entry: { label: "Entry Level", amount: "₹3-5 LPA (assisting, stock photos)" },
      mid: { label: "Mid Level", amount: "₹7-15 LPA (published work, assignments)" },
      senior: { label: "Senior Level", amount: "₹18-25 LPA (renowned photographers)" },
      freelance: { label: "Per Assignment", amount: "₹20,000-10,00,000 per project/sale" }
    },
    
    roadmap: [
      { step: "After 10th", detail: "Any stream (Science helps for ecology understanding)" },
      { step: "After 12th", detail: "Any degree OR diploma in photography/wildlife biology" },
      { step: "Degree", detail: "NOT required—portfolio and field experience matter most" },
      { step: "Learn", detail: "Photography basics, camera equipment, animal behavior" },
      { step: "Build", detail: "Visit sanctuaries/national parks, build photo portfolio" },
      { step: "Apply", detail: "Sell to stock sites, pitch to magazines, wildlife NGOs" },
      { step: "Timeline", detail: "1-2 years building portfolio + networking" }
    ],
    
    skills: [
      "Photography (exposure, composition, lighting, timing)",
      "Wildlife knowledge (animal behavior, habitats, migration)",
      "Patience (waiting hours for one shot is normal)",
      "Physical fitness (trekking, camping in wild areas)",
      "Equipment handling (telephoto lenses, camouflage, hides)",
      "Post-processing (Lightroom, Photoshop for editing)",
      "Storytelling (photos should convey conservation message)"
    ],
    
    workPlaces: [
      "Wildlife Magazines (Sanctuary Asia, National Geographic India)",
      "Conservation NGOs (WWF, Wildlife Trust of India)",
      "Nature Documentary Production",
      "Tourism Boards (promoting eco-tourism)",
      "Stock Photography Agencies (Shutterstock, Getty Images)",
      "Freelance: Exhibitions, prints, workshops",
      "Remote Work: NO (field-based, travel-heavy)"
    ],
    
    realPerson: {
      name: "Shaaz Jung",
      story: `Self-taught wildlife photographer from Bengaluru. Spent years in Kabini forests documenting wildlife, especially the black panther. His photos went viral globally, featured in BBC, National Geographic. Now runs wildlife photography tours and conservation initiatives. Proves dedication + storytelling = worldwide recognition.`
    },
    
    resources: {
      youtube: "Morten Hilmer (wildlife photography techniques), Tin House Studio",
      courses: "Wildlife Photography (National Geographic online), free YouTube tutorials",
      practice: "Visit nearby sanctuaries (Jim Corbett, Ranthambore, Kaziranga), join photo walks",
      books: `"The Wildlife Photography Workshop" by Ross Hoddinott`,
      portfolio: "Instagram (main platform), 500px, personal website, enter competitions"
    },
    
    forYou: {
      yes: [
        "You love both wildlife/nature AND photography",
        "You're comfortable roughing it out (camping, early mornings, uncomfortable conditions)",
        "You're patient and persistent"
      ],
      no: [
        "Not for you if you need stable 9-5 routine (nature doesn't work on schedule)",
        "Not for you if you can't invest in expensive camera gear (telephoto lenses cost ₹1-5L+)"
      ]
    }
  },

  // ═══════════════════════════════════════
  // CAREER 16: Oceanographer
  // ═══════════════════════════════════════
  "oceanographer": {
    name: "Oceanographer",
    category: "science",
    categoryName: "Science",
    emoji: "🔬",
    tagline: "Explore the mysteries of oceans and marine life",
    
    quickFacts: {
      salary: "₹4-18 LPA",
      remote: "No (Field + Lab work)",
      degree: "Required"
    },
    
    whatTheyDo: `Oceanographers study oceans—their physical properties (currents, temperature), marine life (biology), chemical composition, and geological features (underwater mountains, trenches). They conduct research on climate change, pollution, coral reefs, and sustainable fishing. Work involves field trips (research vessels, diving expeditions), lab analysis, and data modeling. Their findings help predict weather, protect marine ecosystems, and discover underwater resources.`,
    
    salary: {
      entry: { label: "Entry Level", amount: "₹4-6 LPA (research assistant)" },
      mid: { label: "Mid Level", amount: "₹8-12 LPA (scientist)" },
      senior: { label: "Senior Level", amount: "₹15-18 LPA (senior researcher/professor)" },
      freelance: { label: "Consulting", amount: "₹30,000-2,00,000 per project" }
    },
    
    roadmap: [
      { step: "After 10th", detail: "Science stream (PCB or PCM)" },
      { step: "After 12th", detail: "B.Sc. in Oceanography / Marine Biology / Environmental Science" },
      { step: "Degree", detail: "MANDATORY—B.Sc. required, M.Sc. preferred for research roles" },
      { step: "Top Institutes", detail: "NIO (Goa), Cochin University, Andhra University" },
      { step: "Specialize", detail: "M.Sc./Ph.D. in specific area (biological, chemical, physical oceanography)" },
      { step: "Apply", detail: "NIOT, INCOIS, ISRO (satellite oceanography), universities" },
      { step: "Timeline", detail: "3 years (B.Sc.) + 2 years (M.Sc.) + field experience" }
    ],
    
    skills: [
      "Biology/Chemistry/Physics (depending on specialization)",
      "Scuba diving certification (for fieldwork)",
      "Data analysis (interpreting ocean data)",
      "Research methodology (designing experiments)",
      "Equipment handling (sonar, water samplers, underwater cameras)",
      "Physical stamina (sea voyages can be weeks long)",
      "Report writing (publishing research findings)"
    ],
    
    workPlaces: [
      "National Institute of Oceanography (NIO - Goa)",
      "Indian National Centre for Ocean Information Services (INCOIS)",
      "NIOT (National Institute of Ocean Technology)",
      "ISRO (satellite-based ocean monitoring)",
      "Marine Conservation NGOs",
      "Universities (teaching + research)",
      "Remote Work: NO (lab and field-based)"
    ],
    
    realPerson: {
      name: "Dr. Aditi Pant",
      story: `India's first woman scientist to visit Antarctica (1983). Oceanographer who studied phytoplankton and marine ecosystems. Broke gender barriers in a male-dominated field. Her work at NIO inspired generations of women scientists. Awarded for contributions to Antarctic research.`
    },
    
    resources: {
      youtube: "Ocean Networks Canada, National Geographic Ocean documentaries",
      courses: "Introduction to Oceanography (MIT OpenCourseWare - free)",
      practice: "Visit marine research centers, volunteer for beach cleanups, coastal surveys",
      books: `"Oceanography: An Invitation to Marine Science" by Tom Garrison`,
      portfolio: "Research papers, internship certificates, scuba diving logs"
    },
    
    forYou: {
      yes: [
        "You're fascinated by oceans and marine life",
        "You enjoy both fieldwork and lab research",
        "You're comfortable with long research trips at sea"
      ],
      no: [
        "Not for you if you get seasick easily (research voyages are unavoidable)",
        "Not for you if you need quick career growth (research roles progress slowly)"
      ]
    }
  },

    // ═══════════════════════════════════════
  // CAREER 17: Food Scientist
  // ═══════════════════════════════════════
  "food-scientist": {
    name: "Food Scientist",
    category: "science",
    categoryName: "Science",
    emoji: "🔬",
    tagline: "Invent new foods and make them safer, tastier, and longer-lasting",
    
    quickFacts: {
      salary: "₹3.5-15 LPA",
      remote: "No (Lab-based)",
      degree: "Required"
    },
    
    whatTheyDo: `Food scientists research and develop new food products, improve recipes, ensure food safety, and extend shelf life. They work on everything from creating plant-based meat alternatives to developing fortified baby foods. They test for nutritional value, study preservation methods, ensure quality control in factories, and make sure food complies with health regulations. When you see "new improved formula" on a packet—a food scientist made that happen.`,
    
    salary: {
      entry: { label: "Entry Level", amount: "₹3.5-5 LPA (quality control)" },
      mid: { label: "Mid Level", amount: "₹6-10 LPA (R&D roles)" },
      senior: { label: "Senior Level", amount: "₹12-15 LPA (senior scientist/manager)" },
      freelance: { label: "Consulting", amount: "₹40,000-3,00,000 per project" }
    },
    
    roadmap: [
      { step: "After 10th", detail: "Science stream (PCB or PCM)" },
      { step: "After 12th", detail: "B.Sc. Food Technology / B.Tech Food Engineering / B.Sc. Nutrition" },
      { step: "Degree", detail: "MANDATORY—B.Sc./B.Tech required" },
      { step: "Top Institutes", detail: "NIFTEM (Sonipat), CFTRI (Mysore), ICT Mumbai" },
      { step: "Specialize", detail: "M.Sc. in specific area (dairy, beverages, packaging)" },
      { step: "Apply", detail: "Food companies (Nestlé, ITC, Britannia), research institutes" },
      { step: "Timeline", detail: "3-4 years degree + internships" }
    ],
    
    skills: [
      "Chemistry and Biology (understanding food composition)",
      "Microbiology (studying bacteria, fermentation, spoilage)",
      "Sensory evaluation (taste testing, texture analysis)",
      "Lab techniques (food testing equipment, analysis)",
      "Quality control (ensuring safety standards)",
      "Innovation (developing new products/flavors)",
      "Regulatory knowledge (FSSAI, FDA food laws)"
    ],
    
    workPlaces: [
      "FMCG Companies (Nestlé, Britannia, ITC, Parle)",
      "Research Institutes (CFTRI Mysore, NIFTEM)",
      "QSR Chains (McDonald's, Domino's - product development)",
      "Beverage Companies (Coca-Cola, PepsiCo)",
      "Government (FSSAI - food safety regulation)",
      "Startups (plant-based foods, health snacks)",
      "Remote Work: NO (lab and factory-based)"
    ],
    
      realPerson: {
    name: "Dr. M.S. Swaminathan",
    story: `Known globally as the "Father of the Indian Green Revolution." While he started in agricultural science, his work is the ultimate foundation of food security in India. In the 1960s, he developed high-yielding varieties of wheat and rice, transforming India from a starving nation into one of the world's leading food producers. Awarded the Bharat Ratna, his life proves that a career in science isn't just about wearing a lab coat—it's about saving millions of lives and changing a nation's destiny.`
  },
    
    resources: {
      youtube: "Institute of Food Technologists (IFT), food science lectures (search university channels)",
      courses: "Food Science basics (Coursera), CFTRI training programs",
      practice: "Home experiments (fermentation, preservation), internships at food companies",
      books: `"Food Science" by Norman Potter (standard textbook)`,
      portfolio: "Internship certificates, research projects, lab reports"
    },
    
    forYou: {
      yes: [
        "You loved chemistry/biology lab experiments in school",
        "You're curious about how packaged foods are made",
        "You enjoy both science and creativity (inventing new products)"
      ],
      no: [
        "Not for you if you're not detail-oriented (one wrong ingredient = health risk)",
        "Not for you if you dislike repetitive testing (quality control involves lots of sampling)"
      ]
    }
  },

  // ═══════════════════════════════════════
  // CAREER 18: Sports Agent
  // ═══════════════════════════════════════
  "sports-agent": {
    name: "Sports Agent",
    category: "business",
    categoryName: "Business",
    emoji: "💰",
    tagline: "Negotiate million-dollar deals for athletes and build their brands",
    
    quickFacts: {
      salary: "₹4-50 LPA",
      remote: "Partially",
      degree: "Preferred"
    },
    
    whatTheyDo: `Sports agents represent athletes in contract negotiations, endorsements, sponsorships, and brand deals. They handle everything from IPL auction bids to shoe brand partnerships. They negotiate salaries, protect athletes' interests, manage public image, and connect players with opportunities. When Virat Kohli signs a ₹100 crore deal—his agent made that happen. It's part business, part relationship management, and requires deep sports industry knowledge.`,
    
    salary: {
      entry: { label: "Entry Level", amount: "₹4-7 LPA (agency associate)" },
      mid: { label: "Mid Level", amount: "₹10-20 LPA (managing clients)" },
      senior: { label: "Senior Level", amount: "₹25-50 LPA (top-tier clients)" },
      freelance: { label: "Commission", amount: "5-20% of athlete's earnings" }
    },
    
    roadmap: [
      { step: "After 10th", detail: "Any stream (Commerce helps for business side)" },
      { step: "After 12th", detail: "BBA / B.Com / Sports Management degree / Law" },
      { step: "Degree", detail: "Preferred—sports management or business degree gives edge" },
      { step: "Learn", detail: "Contract law, negotiation, sports industry dynamics" },
      { step: "Build", detail: "Intern with sports agencies, network with athletes/coaches" },
      { step: "Apply", detail: "Sports management firms (Cornerstone, KWAN), start own agency" },
      { step: "Timeline", detail: "3-4 years degree + 2-3 years networking/experience" }
    ],
    
    skills: [
      "Negotiation (getting best deals for athletes)",
      "Networking (knowing coaches, sponsors, team owners)",
      "Contract law basics (understanding clauses, legalities)",
      "Business acumen (understanding market value)",
      "Communication (liaising between athletes and brands)",
      "Crisis management (handling PR issues, injuries)",
      "Understanding multiple sports (cricket, football, badminton, etc.)"
    ],
    
    workPlaces: [
      "Sports Management Agencies (Cornerstone Sport, KWAN, Baseline)",
      "Athlete Management Firms",
      "Sports Marketing Companies",
      "Own Agency (representing athletes independently)",
      "Sports Leagues (IPL, ISL - liaison roles)",
      "Freelance: Individual athlete representation",
      "Remote Work: Partially (meetings travel-heavy)"
    ],
    
    realPerson: {
      name: "Bunty Sajdeh",
      story: `Founder of Cornerstone Sport & Entertainment, represents Virat Kohli, Smriti Mandhana, and other top athletes. Started by managing his sister (actress Seema Khan), expanded into sports. Now India's most powerful sports agent. Proves relationship-building + business sense = massive success.`
    },
    
    resources: {
      youtube: "Sports business podcasts, The Business of Sports (insights)",
      courses: "Sports Management (online certifications), Contract Law basics",
      practice: "Follow sports business news, understand IPL auction dynamics, network at sports events",
      books: `"The Sports Agent's Handbook" by Robert Raiola`,
      portfolio: "LinkedIn profile highlighting sports connections, internships with agencies"
    },
    
    forYou: {
      yes: [
        "You love sports AND business equally",
        "You're excellent at networking and building relationships",
        "You can handle high-pressure negotiations"
      ],
      no: [
        "Not for you if you're introverted (this career is ALL about connections)",
        "Not for you if you expect quick success (building athlete roster takes years)"
      ]
    }
  },

  // ═══════════════════════════════════════
  // CAREER 19: Fragrance Designer
  // ═══════════════════════════════════════
  "fragrance-designer": {
    name: "Fragrance Designer (Perfumer)",
    category: "business",
    categoryName: "Business",
    emoji: "💰",
    tagline: "Create signature scents that become memories",
    
    quickFacts: {
      salary: "₹3-20 LPA",
      remote: "No (Lab-based)",
      degree: "Required"
    },
    
    whatTheyDo: `Fragrance designers (also called perfumers or "noses") create perfumes, colognes, and scents for candles, soaps, cosmetics, and even room fresheners. They blend essential oils, aroma chemicals, and natural extracts to craft unique fragrances. They work for perfume houses, cosmetic brands, or fragrance companies—testing hundreds of combinations to find the perfect scent. When you smell a new perfume at a store, a fragrance designer spent months creating that.`,
    
    salary: {
      entry: { label: "Entry Level", amount: "₹3-5 LPA (trainee/assistant)" },
      mid: { label: "Mid Level", amount: "₹7-12 LPA (perfumer)" },
      senior: { label: "Senior Level", amount: "₹15-20 LPA (master perfumer)" },
      freelance: { label: "Consulting", amount: "₹50,000-5,00,000 per fragrance" }
    },
    
    roadmap: [
      { step: "After 10th", detail: "Science stream (Chemistry essential)" },
      { step: "After 12th", detail: "B.Sc. Chemistry / Perfumery / Cosmetic Science" },
      { step: "Degree", detail: "REQUIRED—chemistry background mandatory" },
      { step: "Specialization", detail: "Fragrance courses (ISIPCA France, Grasse Institute - global hubs)" },
      { step: "Learn", detail: "Raw materials (essential oils, synthetics), scent families" },
      { step: "Apply", detail: "Fragrance houses (IFF, Givaudan), cosmetic brands (L'Oréal, Estée Lauder)" },
      { step: "Timeline", detail: "3 years (B.Sc.) + 2-3 years specialized training" }
    ],
    
    skills: [
      "Chemistry knowledge (understanding molecular structures)",
      "Olfactory memory (recognizing and remembering 1000+ scents)",
      "Creativity (blending unexpected combinations)",
      "Patience (one perfume takes 6 months to 2 years to create)",
      "Sensory evaluation (training your nose)",
      "Market awareness (understanding perfume trends)",
      "Precision (exact measurements matter—1 drop changes everything)"
    ],
    
    workPlaces: [
      "Fragrance Houses (IFF, Givaudan, Firmenich)",
      "Cosmetic Companies (L'Oréal, Estée Lauder, Nykaa)",
      "Perfume Brands (developing signature scents)",
      "Home Fragrance Companies (candles, air fresheners)",
      "R&D Labs (creating new aroma chemicals)",
      "Freelance: Niche/artisan perfume creation",
      "Remote Work: NO (lab work required)"
    ],
    
      realPerson: {
    name: "Rajiv Sheth",
    story: `India's first certified perfumer and founder of Smell Good Fragrances. After studying chemistry, trained internationally in perfumery and became one of the few Indian "noses" creating signature scents for luxury hotels, spas, and brands across India. His fragrances are used in Taj Hotels and premium Indian brands. Proves that Indians can master this highly specialized French-dominated industry and build successful businesses locally.`
  },
    
    resources: {
      youtube: "Fragrantica (perfume reviews), The Perfume Guy",
      courses: "Perfumery basics (Udemy), ISIPCA online modules (expensive but gold standard)",
      practice: "Study essential oils, create simple blends at home, visit perfume stores to train your nose",
      books: `"The Art of Perfumery" by G.W. Septimus Piesse, "Essence and Alchemy" by Mandy Aftel`,
      portfolio: "Documentation of created fragrances, internships with fragrance labs"
    },
    
    forYou: {
      yes: [
        "You have a strong sense of smell and notice fragrances everywhere",
        "You loved chemistry in school",
        "You're patient and detail-oriented"
      ],
      no: [
        "Not for you if you have allergies or sinus issues (constant exposure to strong scents)",
        "Not for you if you expect quick results (perfumes take years to perfect)"
      ]
    }
  },

  // ═══════════════════════════════════════
  // CAREER 20: Event Manager
  // ═══════════════════════════════════════
  "event-manager": {
    name: "Event Manager",
    category: "business",
    categoryName: "Business",
    emoji: "💰",
    tagline: "Turn ideas into unforgettable experiences",
    
    quickFacts: {
      salary: "₹3-25 LPA",
      remote: "No (On-ground work)",
      degree: "Not Mandatory"
    },
    
    whatTheyDo: `Event managers plan, organize, and execute events—weddings, corporate conferences, product launches, concerts, exhibitions, and festivals. They handle everything: venue selection, vendor coordination (caterers, decorators), budgeting, timelines, guest management, and troubleshooting last-minute disasters. They ensure events run smoothly from concept to cleanup. It's high-pressure, detail-heavy work where one mistake can ruin an entire event.`,
    
    salary: {
      entry: { label: "Entry Level", amount: "₹3-5 LPA (assistant/coordinator)" },
      mid: { label: "Mid Level", amount: "₹7-15 LPA (managing events independently)" },
      senior: { label: "Senior Level", amount: "₹18-25 LPA (agency owner)" },
      freelance: { label: "Per Event", amount: "₹30,000-10,00,000 per project" }
    },
    
    roadmap: [
      { step: "After 10th", detail: "Any stream works" },
      { step: "After 12th", detail: "BBA / Event Management diploma / Hotel Management / Any degree" },
      { step: "Degree", detail: "NOT mandatory—practical experience matters most" },
      { step: "Learn", detail: "Budgeting, vendor management, project planning" },
      { step: "Build", detail: "Organize college fests, volunteer for events, assist event companies" },
      { step: "Apply", detail: "Event agencies (Wizcraft, E-Factor), wedding planners, corporate event firms" },
      { step: "Timeline", detail: "6 months-1 year assisting + building portfolio" }
    ],
    
    skills: [
      "Organization (managing 100+ moving parts simultaneously)",
      "Budgeting (staying within client's budget)",
      "Negotiation (getting best vendor rates)",
      "Crisis management (solving problems on the spot)",
      "Communication (liaising with clients, vendors, teams)",
      "Creativity (making events unique and memorable)",
      "Physical stamina (16-hour days during events are normal)"
    ],
    
    workPlaces: [
      "Event Management Companies (Wizcraft, Cineyug, E-Factor)",
      "Wedding Planning Agencies",
      "Corporate Event Firms",
      "Hotels (in-house event teams)",
      "Exhibition Companies",
      "Freelance: Start your own event planning business",
      "Remote Work: NO (on-ground presence essential)"
    ],
    
    realPerson: {
      name: "Wizcraft Founder - Sabbas Joseph",
      story: `Started Wizcraft (India's top event company) in 1990s. Organized massive events like IPL opening ceremonies, Commonwealth Games events, and Bollywood award shows. Built a ₹300+ crore company from scratch. Shows event management can become a massive business empire.`
    },
    
    resources: {
      youtube: "Event planning tutorials, Preston Bailey (luxury event design)",
      courses: "Event Management Basics (Udemy), free YouTube courses",
      practice: "Volunteer for college fests, help friends with small parties, shadow event planners",
      books: `"The Complete Guide to Successful Event Planning" by Shannon Kilkenny`,
      portfolio: "Instagram with event photos, testimonials from clients, event portfolios"
    },
    
    forYou: {
      yes: [
        "You're extremely organized and love planning",
        "You thrive under pressure and tight deadlines",
        "You enjoy talking to people and coordinating teams"
      ],
      no: [
        "Not for you if you need work-life balance (events happen on weekends/nights)",
        "Not for you if you panic easily (last-minute crises are guaranteed)"
      ]
    }
  },

  // ═══════════════════════════════════════
  // CAREER 21: Ethical Investment Advisor
  // ═══════════════════════════════════════
  "ethical-investment-advisor": {
    name: "Ethical Investment Advisor",
    category: "business",
    categoryName: "Business",
    emoji: "💰",
    tagline: "Help people grow wealth while making a positive impact",
    
    quickFacts: {
      salary: "₹4-30 LPA",
      remote: "Yes (client meetings virtual)",
      degree: "Preferred"
    },
    
    whatTheyDo: `Ethical investment advisors guide clients to invest in companies and funds that align with their values—avoiding tobacco, weapons, or polluting industries, and supporting renewable energy, fair trade, or social enterprises. They analyze ESG (Environmental, Social, Governance) scores, recommend sustainable mutual funds, green bonds, and impact investments. It's like traditional financial advising, but with a conscience—making money while doing good.`,
    
    salary: {
      entry: { label: "Entry Level", amount: "₹4-6 LPA (junior advisor)" },
      mid: { label: "Mid Level", amount: "₹8-18 LPA (certified planner)" },
      senior: { label: "Senior Level", amount: "₹20-30 LPA (senior advisor/own practice)" },
      freelance: { label: "Commission", amount: "1-2% of assets managed (can be lakhs)" }
    },
    
    roadmap: [
      { step: "After 10th", detail: "Commerce/Science stream" },
      { step: "After 12th", detail: "B.Com / BBA Finance / Economics / CA foundation" },
      { step: "Degree", detail: "Preferred—finance background helps credibility" },
      { step: "Certifications", detail: "CFP (Certified Financial Planner), NISM certifications (mandatory)" },
      { step: "Learn", detail: "ESG investing, sustainable finance, portfolio management" },
      { step: "Apply", detail: "Financial advisory firms, wealth management, start own practice" },
      { step: "Timeline", detail: "3 years (degree) + 1-2 years certifications + experience" }
    ],
    
    skills: [
      "Finance knowledge (mutual funds, stocks, bonds, insurance)",
      "ESG analysis (evaluating company sustainability practices)",
      "Client counseling (understanding financial goals + values)",
      "Regulatory compliance (SEBI, AMFI regulations)",
      "Research skills (analyzing sustainable investment options)",
      "Communication (explaining complex finance simply)",
      "Ethics (genuinely recommending what's best for client)"
    ],
    
    workPlaces: [
      "Wealth Management Firms (focusing on ESG clients)",
      "Sustainable Finance Companies",
      "Banks (private banking ESG portfolios)",
      "Financial Planning Startups",
      "NGOs (advising on endowment investments)",
      "Own Practice: Independent ethical advisor",
      "Remote Work: YES—client meetings can be virtual"
    ],
    
      realPerson: {
    name: "Ashish Dhawan",
    story: `Started as a traditional investment banker at Goldman Sachs, earning crores but feeling unfulfilled. Left high-paying corporate job to co-found ChrysCapital (India's leading private equity firm) and later Central Square Foundation—investing in companies and causes that improve education and healthcare in India. His funds don't just chase profits; they prioritize businesses solving real problems. Now manages investments worth thousands of crores while ensuring they create social impact. Proves you can make money AND make a difference—it's not either/or anymore.`
  },
    
    resources: {
      youtube: "CA Rachana Ranade (finance basics), ESG investing webinars",
      courses: "Sustainable Finance (Coursera), CFP certification program",
      practice: "Track ESG mutual funds, read sustainability reports of companies",
      books: `"The Sustainable Investor" by Stefan Hunziker, "Invested" by Danielle Town`,
      portfolio: "NISM certifications, CFP credential, client testimonials"
    },
    
    forYou: {
      yes: [
        "You're good with numbers AND care about social/environmental issues",
        "You enjoy helping people make smart financial decisions",
        "You're willing to continuously learn (finance regulations change constantly)"
      ],
      no: [
        "Not for you if you only care about maximizing profits (ethical investing sometimes sacrifices returns)",
        "Not for you if you can't handle market volatility stress (clients panic when markets crash)"
      ]
    }
  },

  // ═══════════════════════════════════════
  // CAREER 22: Adventure Sports Instructor
  // ═══════════════════════════════════════
  "adventure-sports-instructor": {
    name: "Adventure Sports Instructor",
    category: "unique",
    categoryName: "Unique",
    emoji: "🎭",
    tagline: "Get paid to live life on the edge and teach others to do the same",
    
    quickFacts: {
      salary: "₹2.5-12 LPA",
      remote: "No (Outdoor, location-based)",
      degree: "Not Required"
    },
    
    whatTheyDo: `Adventure sports instructors teach and guide activities like rock climbing, paragliding, scuba diving, river rafting, trekking, skiing, and bungee jumping. They ensure safety, teach techniques, lead expeditions, and help people overcome fears. They work at adventure camps, resorts, mountain destinations, and beaches—combining passion for outdoors with teaching. It's physically demanding but incredibly rewarding for adrenaline lovers.`,
    
    salary: {
      entry: { label: "Entry Level", amount: "₹2.5-4 LPA (seasonal instructor)" },
      mid: { label: "Mid Level", amount: "₹5-8 LPA (certified, year-round)" },
      senior: { label: "Senior Level", amount: "₹10-12 LPA (expedition leader/own company)" },
      freelance: { label: "Per Session", amount: "₹1,500-10,000 per day/session" }
    },
    
    roadmap: [
      { step: "After 10th", detail: "Any stream works" },
      { step: "After 12th", detail: "Any degree OR direct certification courses" },
      { step: "Degree", detail: "NOT required—certifications and experience matter" },
      { step: "Certifications", detail: "BMC (Basic Mountaineering), scuba PADI, paragliding certification (sport-specific)" },
      { step: "Learn", detail: "First aid, rescue techniques, equipment handling" },
      { step: "Apply", detail: "Adventure companies (Indiahikes, Thrillophilia), resorts, camps" },
      { step: "Timeline", detail: "3-6 months certification + practice" }
    ],
    
    skills: [
      "Physical fitness (very high stamina required)",
      "Sport-specific skills (expert-level in chosen activity)",
      "Safety protocols (risk assessment, emergency response)",
      "First aid and CPR certification",
      "Teaching ability (explaining techniques clearly)",
      "People skills (managing nervous/scared participants)",
      "Weather reading (understanding mountain/water conditions)"
    ],
    
    workPlaces: [
      "Adventure Companies (Indiahikes, Thrillophilia, Trek The Himalayas)",
      "Hill Station Resorts (Manali, Rishikesh, Goa)",
      "Mountaineering Institutes (NIM, HMI)",
      "Scuba Diving Centers (Andaman, Goa, Lakshadweep)",
      "Ski Resorts (Gulmarg, Auli)",
      "Freelance: Conduct independent expeditions",
      "Remote Work: NO (outdoor, location-specific)"
    ],
    
    realPerson: {
      name: "Arunima Sinha",
      story: `Arunima Sinha became the world’s first female amputee to climb Mount Everest, turning tragedy into triumph. After losing her leg in a horrific accident, she refused to surrender to fate and trained at the Nehru Institute of Mountaineering (NIM). In 2013, she stood atop Everest, proving that determination is stronger than any obstacle. Today, she inspires millions as a motivational speaker and adventure trainer. Her journey is a powerful reminder that no dream is too high when your willpower is higher.`
    },
    
    resources: {
      youtube: "Nimsdai (mountaineering), Indiahikes (trekking tips)",
      courses: "BMC (Nehru Institute of Mountaineering), PADI Open Water (scuba)",
      practice: "Join local trekking groups, practice your chosen sport regularly",
      books: `"Into Thin Air" by Jon Krakauer, "Touching the Void" by Joe Simpson`,
      portfolio: "Certification cards, expedition logs, Instagram with adventure content"
    },
    
    forYou: {
      yes: [
        "You're extremely fit and love outdoor sports",
        "You're comfortable with risk and heights/water",
        "You enjoy teaching and motivating people"
      ],
      no: [
        "Not for you if you have health issues (heart, respiratory problems disqualify you)",
        "Not for you if you need stable income (seasonal work, weather-dependent)"
      ]
    }
  },

  // ═══════════════════════════════════════
  // CAREER 23: Podcast Producer
  // ═══════════════════════════════════════
  "podcast-producer": {
    name: "Podcast Producer",
    category: "unique",
    categoryName: "Unique",
    emoji: "🎭",
    tagline: "Create audio stories that millions listen to on their commute",
    
    quickFacts: {
      salary: "₹3-18 LPA",
      remote: "Yes",
      degree: "Not Required"
    },
    
    whatTheyDo: `Podcast producers handle the entire podcast creation process—brainstorming topics, researching guests, booking interviews, recording, editing audio, adding music/effects, writing show notes, and publishing episodes. They work with hosts (or are the hosts themselves), manage schedules, and ensure consistent quality. With podcasts exploding in India (crime, comedy, business, self-help), producers are in demand for creating binge-worthy audio content.`,
    
    salary: {
      entry: { label: "Entry Level", amount: "₹3-5 LPA (assistant producer)" },
      mid: { label: "Mid Level", amount: "₹6-12 LPA (producer)" },
      senior: { label: "Senior Level", amount: "₹15-18 LPA (senior producer/executive producer)" },
      freelance: { label: "Per Episode", amount: "₹5,000-1,00,000 per episode" }
    },
    
    roadmap: [
      { step: "After 10th", detail: "Any stream works" },
      { step: "After 12th", detail: "Journalism / Mass Communication / Any degree" },
      { step: "Degree", detail: "NOT required—portfolio of produced episodes matters" },
      { step: "Learn", detail: "Audio editing (Audacity, Adobe Audition), storytelling, interviewing" },
      { step: "Build", detail: "Start your own podcast or assist existing podcasters" },
      { step: "Apply", detail: "Podcast networks (IVM, Pratilipi, Spotify Studios), freelance" },
      { step: "Timeline", detail: "3-6 months learning + building demo episodes" }
    ],
    
    skills: [
      "Audio editing (cutting, mixing, sound design)",
      "Storytelling (crafting engaging narratives)",
      "Research (finding interesting topics/guests)",
      "Interviewing (asking good questions)",
      "Project management (keeping episodes on schedule)",
      "Writing (scripts, show notes, descriptions)",
      "Marketing (promoting episodes on social media)"
    ],
    
    workPlaces: [
      "Podcast Networks (IVM Podcasts, Pratilipi FM)",
      "Media Companies (Spotify Studios, Amazon Audible)",
      "Content Agencies (creating branded podcasts)",
      "News Organizations (The Quint, NDTV audio shows)",
      "YouTube Channels (audio-focused content)",
      "Freelance: Produce for multiple podcasters",
      "Remote Work: YES—100% remote-friendly"
    ],
    
     realPerson: {
    name: "Raj Shamani",
    story: `Started his podcast "Figuring Out" from his bedroom with zero budget, just a basic mic and curiosity. Interviewed entrepreneurs, actors, and thought leaders, asking questions young Indians actually wanted answers to. His relatable style and focus on real conversations (not scripted PR talk) made him one of India's top podcasters with millions of listeners. Now runs a full production team, gets sponsorships from major brands, and proves you don't need a media degree or fancy studio—just good questions, consistency, and the ability to make people feel heard. Also built a thriving YouTube channel alongside, showing how audio content can fuel multiple platforms.`
  },
    
    resources: {
      youtube: "Podcast Engineering Basics, Roberto Blake (content creation)",
      courses: "Podcast Production (Udemy), free Audacity tutorials",
      practice: "Start a podcast (even interviewing friends!), edit audio daily",
      books: `"Out on the Wire" by Jessica Abel, "Make Noise" by Eric Nuzum`,
      portfolio: "Spotify/Apple Podcasts with your shows, website with production samples"
    },
    
    forYou: {
      yes: [
        "You love listening to podcasts and wonder 'how is this made?'",
        "You enjoy research and storytelling",
        "You're comfortable working alone for hours (editing is solitary)"
      ],
      no: [
        "Not for you if you have no patience (editing 1 hour of audio takes 3-4 hours)",
        "Not for you if you dislike repetitive work (listening to same clips 100 times)"
      ]
    }
  },

  // ═══════════════════════════════════════
  // CAREER 24: Museum Curator
  // ═══════════════════════════════════════
  "museum-curator": {
    name: "Museum Curator",
    category: "unique",
    categoryName: "Unique",
    emoji: "🎭",
    tagline: "Preserve history and create exhibitions that educate millions",
    
    quickFacts: {
      salary: "₹3-12 LPA",
      remote: "No (Museum-based)",
      degree: "Required"
    },
    
    whatTheyDo: `Museum curators manage collections of art, artifacts, historical objects, and scientific specimens. They research items, decide what to display, design exhibitions, write labels/catalogs, authenticate pieces, and preserve fragile objects. They work with historians, artists, archaeologists, and the public to make museums engaging educational spaces. From ancient coins to contemporary art—curators are guardians of cultural heritage.`,
    
    salary: {
      entry: { label: "Entry Level", amount: "₹3-5 LPA (assistant curator)" },
      mid: { label: "Mid Level", amount: "₹6-9 LPA (curator)" },
      senior: { label: "Senior Level", amount: "₹10-12 LPA (senior curator/director)" },
      freelance: { label: "Consulting", amount: "₹30,000-2,00,000 per exhibition" }
    },
    
    roadmap: [
      { step: "After 10th", detail: "Any stream (Arts/Humanities helps)" },
      { step: "After 12th", detail: "BA History / Archaeology / Fine Arts / Anthropology" },
      { step: "Degree", detail: "REQUIRED—BA + MA in Museum Studies/History/Archaeology" },
      { step: "Specialization", detail: "M.A. Museum & Heritage Studies (top: NMI Delhi, Baroda)" },
      { step: "Build", detail: "Internships at museums, volunteer at heritage sites" },
      { step: "Apply", detail: "Government museums, private galleries, cultural institutions" },
      { step: "Timeline", detail: "3 years (BA) + 2 years (MA) + internships" }
    ],
    
    skills: [
      "Research skills (authenticating and documenting objects)",
      "Art/History knowledge (understanding cultural context)",
      "Exhibition design (creating engaging displays)",
      "Writing (labels, catalogs, grant proposals)",
      "Conservation basics (preserving delicate artifacts)",
      "Public speaking (conducting tours, lectures)",
      "Attention to detail (cataloging thousands of items)"
    ],
    
    workPlaces: [
      "National Museums (National Museum Delhi, Indian Museum Kolkata)",
      "State Museums (across all states)",
      "Private Art Galleries (Kiran Nadar Museum, MAP Bengaluru)",
      "Science Museums, Natural History Museums",
      "Heritage Sites (managed by ASI, UNESCO)",
      "Universities (campus museums)",
      "Remote Work: NO (hands-on with collections)"
    ],
    
    realPerson: {
      name: "Sabyasachi Mukherjee",
      story: `Sabyasachi Mukherjee is one of India’s most respected museum curators and historians, currently serving as the Director General of the Chhatrapati Shivaji Maharaj Vastu Sangrahalaya (CSMVS) in Mumbai. He is known for modernizing museums and making them more interactive and engaging for young visitors. Under his leadership, Indian museums have embraced digital innovation and global collaborations. His journey shows students that careers in history, art, and culture can be impactful and inspiring. Through his work, he has made museums more relatable and exciting for the younger generation.`
    },
    
    resources: {
      youtube: "Museum study channels, TED talks by curators",
      courses: "Museum Studies (various universities), heritage conservation online",
      practice: "Visit museums regularly, volunteer as guide, document local heritage",
      books: `"Introduction to Museum Work" by G. Ellis Burcaw`,
      portfolio: "Research papers, exhibition catalogs, internship certificates"
    },
    
    forYou: {
      yes: [
        "You love history, art, or science deeply",
        "You enjoy research and detective work (tracing object provenance)",
        "You're meticulous and organized"
      ],
      no: [
        "Not for you if you need high salary quickly (museum jobs pay modestly)",
        "Not for you if you dislike academia (lots of reading/writing required)"
      ]
    }
  },

  // ═══════════════════════════════════════
  // CAREER 25: Pet Therapist
  // ═══════════════════════════════════════
  "pet-therapist": {
    name: "Pet Therapist (Animal Behaviorist)",
    category: "unique",
    categoryName: "Unique",
    emoji: "🎭",
    tagline: "Help pets overcome fears, anxiety, and behavioral issues",
    
    quickFacts: {
      salary: "₹2.5-15 LPA",
      remote: "No (Home visits)",
      degree: "Not Mandatory"
    },
    
    whatTheyDo: `Pet therapists (also called animal behaviorists) work with pets who have behavioral issues—aggression, separation anxiety, excessive barking, litter box problems, fear of loud noises, or trauma from abuse. They observe pets, understand triggers, create behavior modification plans, and train owners on techniques. It's like being a psychologist, but for animals. With India's pet industry booming, pet parents are willing to pay for expert help.`,
    
    salary: {
      entry: { label: "Entry Level", amount: "₹2.5-4 LPA (assistant/trainee)" },
      mid: { label: "Mid Level", amount: "₹5-10 LPA (independent practice)" },
      senior: { label: "Senior Level", amount: "₹12-15 LPA (specialist/clinic owner)" },
      freelance: { label: "Per Session", amount: "₹2,000-10,000 per consultation" }
    },
    
    roadmap: [
      { step: "After 10th", detail: "Any stream (Science helps for veterinary understanding)" },
      { step: "After 12th", detail: "B.V.Sc (Veterinary) OR any degree + animal behavior certification" },
      { step: "Degree", detail: "NOT mandatory—certifications in animal behavior matter more" },
      { step: "Certifications", detail: "IAABC (International), KPA Dog Trainer certification, online courses" },
      { step: "Learn", detail: "Canine/feline psychology, positive reinforcement training, body language" },
      { step: "Apply", detail: "Vet clinics, pet boarding, pet product companies, freelance" },
      { step: "Timeline", detail: "6 months-1 year certifications + hands-on experience" }
    ],
    
    skills: [
      "Understanding animal behavior (body language, stress signals)",
      "Patience (behavior modification takes weeks/months)",
      "Observation skills (identifying triggers)",
      "Communication (educating pet parents)",
      "Positive reinforcement training techniques",
      "Empathy (for both animal and owner stress)",
      "Problem-solving (each pet is unique)"
    ],
    
    workPlaces: [
      "Veterinary Clinics (behavior consultation services)",
      "Pet Boarding/Daycare Centers",
      "Pet Product Companies (behavior expertise for training products)",
      "Animal Shelters (rehabilitating rescued animals)",
      "Pet Training Schools",
      "Freelance: Home visit consultations",
      "Remote Work: Partially (initial consults online, but hands-on sessions required)"
    ],
    
    realPerson: {
      name: "Shirin Merchant",
      story: `India's first certified canine behaviorist. Founded Canines Can Care in Mumbai. Works with aggressive, anxious, and traumatized dogs. Featured in media for transforming 'problem pets' into happy companions. Pioneered professional pet behavior therapy in India when it didn't exist as a career.`
    },
    
    resources: {
      youtube: "Zak George's Dog Training, Jackson Galaxy (cat behaviorist)",
      courses: "Karen Pryor Academy, Animal Behavior College (international certifications)",
      practice: "Volunteer at animal shelters, observe pets, foster animals",
      books: `"Don't Shoot the Dog" by Karen Pryor, "The Other End of the Leash" by Patricia McConnell`,
      portfolio: "Certifications, client testimonials, Instagram with success stories"
    },
    
    forYou: {
      yes: [
        "You genuinely love animals and understand them instinctively",
        "You're patient (behavior change is slow)",
        "You're willing to get scratched/bitten occasionally (occupational hazard)"
      ],
      no: [
        "Not for you if you're allergic to animals (you'll be around them all day)",
        "Not for you if you can't handle emotional situations (some cases involve abused animals)"
      ]
    }
  }


};

// Make it available to other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = careerDatabase;
}