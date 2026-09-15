/* ============================================
   CAREER DETAIL PAGE - DYNAMIC CONTENT LOADER
   ============================================ */

document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const careerId = urlParams.get("career");

  if (!careerId) {
    showError(
      "No career specified. Please select a career from the Explore page.",
    );
    return;
  }

  const career = careerDatabase[careerId];

  if (!career) {
    showError("Career not found. Please go back and try again.");
    return;
  }

  fillCareerDetails(career, careerId);
});

/* ============================================
   FILL PAGE WITH CAREER DATA
   ============================================ */
function fillCareerDetails(career, careerId) {
  document.title = `${career.name} - Career Kuch Hatke`;

  document.getElementById("breadcrumb-career").textContent = career.name;

  document.getElementById("hero-category").textContent =
    career.emoji + " " + career.categoryName;
  document.getElementById("hero-category").className =
    `category-badge ${career.category}`;
  document.getElementById("career-name").textContent = career.name;
  document.getElementById("career-tagline").textContent = career.tagline;

  document.getElementById("quick-salary").textContent =
    career.quickFacts.salary;
  document.getElementById("quick-remote").textContent =
    career.quickFacts.remote;
  document.getElementById("quick-degree").textContent =
    career.quickFacts.degree;

  document.getElementById("what-they-do").innerHTML =
    `<p>${career.whatTheyDo}</p>`;

  fillSalarySection(career.salary);
  fillRoadmapSection(career.roadmap);
  fillSkillsSection(career.skills);
  fillWorkPlacesSection(career.workPlaces);
  fillRealPersonSection(career.realPerson);
  fillResourcesSection(career.resources);
  fillForYouSection(career.forYou);
  fillConvinceParentsSection(career, careerId);

  fillRelatedCareers(career.category, careerId);

  // Open Section 1 by default so students immediately see content
  const firstCard = document.querySelector(".detail-card");
  if (firstCard) {
    firstCard.classList.add("active");
  }

  const openParam = new URLSearchParams(window.location.search).get("open");
  if (openParam === "parent") {
    const parentCard = document.querySelector(".parent-talk-card");
    if (parentCard) parentCard.classList.add("active");
  } else if (openParam === "all") {
    document
      .querySelectorAll(".detail-card")
      .forEach((c) => c.classList.add("active"));
  }

  updateToggleAllBtn();
}

/* ============================================
   SECTION 2: SALARY RANGE
   ============================================ */
function fillSalarySection(salary) {
  const salaryGrid = document.getElementById("salary-range");

  let html = "";

  html += `
    <div class="salary-box">
      <span class="salary-label">${salary.entry.label}</span>
      <span class="salary-amount">${salary.entry.amount}</span>
    </div>
  `;

  html += `
    <div class="salary-box">
      <span class="salary-label">${salary.mid.label}</span>
      <span class="salary-amount">${salary.mid.amount}</span>
    </div>
  `;

  html += `
    <div class="salary-box">
      <span class="salary-label">${salary.senior.label}</span>
      <span class="salary-amount">${salary.senior.amount}</span>
    </div>
  `;

  html += `
    <div class="salary-box">
      <span class="salary-label">${salary.freelance.label}</span>
      <span class="salary-amount">${salary.freelance.amount}</span>
    </div>
  `;

  salaryGrid.innerHTML = html;
}

/* ============================================
   SECTION 3: HOW TO GET IN (ROADMAP)
   ============================================ */
function fillRoadmapSection(roadmap) {
  const roadmapDiv = document.getElementById("roadmap");

  let html = "";

  roadmap.forEach((item) => {
    html += `
      <div class="roadmap-step">
        <strong>${item.step}:</strong>
        <span>${item.detail}</span>
      </div>
    `;
  });

  roadmapDiv.innerHTML = html;
}

/* ============================================
   SECTION 4: SKILLS NEEDED
   ============================================ */
function fillSkillsSection(skills) {
  const skillsList = document.getElementById("skills-list");

  let html = "";

  skills.forEach((skill) => {
    html += `<div class="skill-item">${skill}</div>`;
  });

  skillsList.innerHTML = html;
}

/* ============================================
   SECTION 5: WHERE CAN YOU WORK?
   ============================================ */
function fillWorkPlacesSection(workPlaces) {
  const workPlacesDiv = document.getElementById("work-places");

  let html = '<div class="work-list">';

  workPlaces.forEach((place) => {
    html += `<div class="work-item">${place}</div>`;
  });

  html += "</div>";

  workPlacesDiv.innerHTML = html;
}

/* ============================================
   SECTION 6: REAL PERSON EXAMPLE
   ============================================ */
function fillRealPersonSection(realPerson) {
  const realPersonDiv = document.getElementById("real-person");

  const html = `
    <h3 style="color: var(--primary); margin-bottom: 1rem;">
      ${realPerson.name}
    </h3>
    <p>${realPerson.story}</p>
  `;

  realPersonDiv.innerHTML = html;
}

/* ============================================
   SECTION 7: FREE RESOURCES
   ============================================ */
function fillResourcesSection(resources) {
  const resourcesDiv = document.getElementById("resources");

  let html = '<div class="resources-list">';

  if (resources.youtube) {
    html += `
      <div class="resource-category">
        <strong>📺 YouTube:</strong>
        ${resources.youtube}
      </div>
    `;
  }

  if (resources.courses) {
    html += `
      <div class="resource-category">
        <strong>🎓 Free Courses:</strong>
        ${resources.courses}
      </div>
    `;
  }

  if (resources.practice) {
    html += `
      <div class="resource-category">
        <strong>💪 Practice:</strong>
        ${resources.practice}
      </div>
    `;
  }

  if (resources.books) {
    html += `
      <div class="resource-category">
        <strong>📚 Books:</strong>
        ${resources.books}
      </div>
    `;
  }

  if (resources.portfolio) {
    html += `
      <div class="resource-category">
        <strong>🎨 Portfolio:</strong>
        ${resources.portfolio}
      </div>
    `;
  }

  html += "</div>";

  resourcesDiv.innerHTML = html;
}

/* ============================================
   SECTION 8: IS THIS FOR YOU?
   ============================================ */
function fillForYouSection(forYou) {
  const forYouDiv = document.getElementById("for-you");

  let html = '<div class="for-you-list">';

  forYou.yes.forEach((item) => {
    html += `<div class="for-you-item yes">${item}</div>`;
  });

  forYou.no.forEach((item) => {
    html += `<div class="for-you-item no">${item}</div>`;
  });

  html += "</div>";

  forYouDiv.innerHTML = html;
}

/* ============================================
   SECTION 9: HOW TO TALK TO YOUR PARENTS
   ============================================ */
const parentPitches = {
  "food-stylist": {
    dilemma:
      "Beta, you want to cook food and take photos? What will relatives say? Who even hires for this?",
    financialAngle:
      "Commercial food styling in India pays ₹15,000 to ₹50,000 per shoot. Top stylists handle campaigns for Swiggy, Zomato, ITC, and McDonald's, netting ₹8-15+ LPA.",
    safetyAngle:
      "Can pursue a B.A., B.Sc., or Hotel Management degree while assisting an established stylist on weekends to build a portfolio.",
    script:
      "Mom, Dad, every food ad you see on TV, billboards, or Swiggy is styled by a professional food stylist. It's a high-paying commercial advertising profession. I'll complete my regular graduation first, and spend weekends assisting and building a portfolio. If I start landing paid commercial shoots before finishing college, you can see the results for yourselves!",
  },
  "ui-ux-designer": {
    dilemma: "Why design? Why not Software Engineer in TCS or Infosys?",
    financialAngle:
      "UI/UX Designers in Indian startups and MNCs start at ₹4-8 LPA and easily scale to ₹18-30 LPA—often out-earning traditional software test engineers.",
    safetyAngle:
      "Any standard degree (BCA, B.Des, B.Sc, or B.Tech) is accepted. Portfolio on Behance/Figma proves skill.",
    script:
      "Mom, Dad, you use PhonePe, Google Pay, and Swiggy every day. UI/UX designers design those apps so people of all ages can use them easily without getting confused. Google, Zomato, and Tata hire UI/UX designers with starting packages of ₹6-12 LPA. It gives me a prestigious tech career with great pay, but focused on creativity and user research rather than boring code.",
  },
  "voice-over-artist": {
    dilemma:
      "Voice artist? Just speaking into a microphone? That is a hobby, not a stable job!",
    financialAngle:
      "With Netflix dubbing in Hindi/Tamil, Audible audiobooks, and YouTube ads, voice artists earn ₹5,000 to ₹40,000 per project. Established artists earn ₹10-25+ LPA.",
    safetyAngle:
      "Can do any regular degree (B.Com/B.A./B.Sc.) and set up a basic home studio (mic + laptop) for under ₹15,000 to record in spare time.",
    script:
      "Mom, Dad, the Indian OTT and digital media industry is booming. Every Netflix movie dubbed in Hindi, every Audible book, and every brand ad hires professional voice artists. People in Mumbai earn lakhs every month from home studios. I will finish my regular college degree first while practicing voice modulation and recording demo reels in the evenings. You will see my real earnings before I graduate!",
  },
  "ethical-hacker": {
    dilemma: "Hacking? Is that illegal? Will the police come to our house?",
    financialAngle:
      "Cybersecurity engineers and ethical hackers earn ₹5-12 LPA as freshers, with senior roles crossing ₹25-40 LPA. Global bug bounties also pay thousands of dollars.",
    safetyAngle:
      "Completely legal and backed by government certifications (CEH, OSCP, CERT-In). Recognized by major Indian banks and defense agencies.",
    script:
      "Mom, Dad, ethical hackers are NOT criminals—they are cyber-police who protect banks like SBI and HDFC from digital theft and fraud. Every bank and IT company in India is urgently hiring ethical defenders. It is a 100% legal, highly respected engineering profession with starting salaries of ₹6-10 LPA and strong government backing.",
  },
  "drone-pilot": {
    dilemma:
      "Flying remote control toys? How will you support a family with that?",
    financialAngle:
      "DGCA-certified drone pilots earn ₹4-10 LPA, with specialized agricultural and infrastructure pilots charging ₹3,000 to ₹10,000 per survey day.",
    safetyAngle:
      "Government-licensed DGCA certification. Massive official projects like SVAMITVA, NHAI highway surveys, and smart city mapping.",
    script:
      "Mom, Dad, this isn't flying toys. The Indian government has mandated drone surveys for all highways, agriculture, and land mapping. Big companies like L&T, Tata, and Adani hire DGCA-certified drone pilots with starting pay of ₹4-8 LPA. It is a licensed technical career with official Ministry of Civil Aviation certification.",
  },
  "forensic-scientist": {
    dilemma:
      "Crime scenes and police cases? Why not medical school (MBBS) or civil services (UPSC)?",
    financialAngle:
      "Central and State Forensic Labs offer Gazetted Officer government scales (Level 7/10: ₹45k-₹90k/month) plus pension, housing, and job security.",
    safetyAngle:
      "Permanent government appointments through UPSC/State PSC exams, as well as private cyber forensic labs and insurance fraud agencies.",
    script:
      "Mom, Dad, forensic science is a prestigious branch of criminal investigation and law enforcement. Central Forensic Science Labs (CFSL) and CBI offer permanent government officer positions with full security, medical benefits, and respect. It is scientific, honorable, and solves crimes using biology and chemistry.",
  },
  "wildlife-photographer": {
    dilemma: "Running around in jungles? How will you pay rent in a city?",
    financialAngle:
      "Top wildlife documentarians license footage to Netflix, Discovery, and Nat Geo for lakhs, while also running premium photo expeditions charging ₹20k-₹50k per participant.",
    safetyAngle:
      "Complete a B.Sc. or B.A. degree while building a portfolio, licensing stock images online, and assisting naturalists.",
    script:
      "Mom, Dad, modern wildlife photography is commercial documentary filmmaking and eco-tourism. Platforms like Netflix and Nat Geo commission stories worth lakhs of rupees. I will complete my graduation first while building my equipment and portfolio, and learn the business of content licensing and photography workshops.",
  },
  "pet-therapist": {
    dilemma: "Taking care of dogs and cats? Who pays for that in India?",
    financialAngle:
      "Indian pet care is an explosive ₹4,000+ crore industry. Behavioral sessions in metros cost ₹1,500-₹4,000/hour, and veterinary clinics/resorts offer ₹4-10 LPA packages.",
    safetyAngle:
      "Can be paired with a degree in Zoology, Psychology, or Veterinary Science. Low startup cost, high community goodwill.",
    script:
      "Mom, Dad, in cities like Mumbai, Delhi, and Bengaluru, families treat pets like their children and spend thousands on their health and behavior. Certified pet behaviorists earn ₹40,000 to ₹1 Lakh a month working with clinics and luxury pet boarding centers. It's a compassionate, fast-growing healthcare field with virtually zero competition.",
  },
  animator: {
    dilemma: "Cartoons are for kids! What future is there in drawing all day?",
    financialAngle:
      "Indian VFX and 3D animation studios handle Hollywood movies, gaming (PlayStation/mobile), and ed-tech. Salaries range from ₹3.5-8 LPA at entry to ₹20+ LPA for leads.",
    safetyAngle:
      "B.Sc. in Animation, B.Des, or any degree combined with a strong 3D showreel (Blender, Maya, Unreal Engine).",
    script:
      "Mom, Dad, animation powers blockbuster movies like Baahubali and Marvel, big video games, and advertising. Indian animation studios in Mumbai and Bangalore export millions of dollars of work globally. Starting pay is ₹4-7 LPA and leads earn ₹15-25 LPA. It's a solid technical engineering and design industry.",
  },
  "social-media-manager": {
    dilemma: "Scrolling Instagram and Reels all day is just wasting time!",
    financialAngle:
      "Social media managers manage brand marketing budgets of ₹10-50 Lakhs for companies like Zomato, Nykaa, and Swiggy, commanding ₹4-12 LPA.",
    safetyAngle:
      "Any bachelor's degree (BMM, B.Com, BBA, B.Sc) pairs directly with digital marketing certifications from Google and Meta.",
    script:
      "Mom, Dad, every brand today gets 80% of its customers from social media. Social media managers aren't just scrolling; they analyze analytics, run high-budget ad campaigns, and drive sales for companies like Nykaa and Zomato. It is corporate digital marketing with salaries of ₹4-10 LPA.",
  },
};

function getParentAdvice(career, careerId) {
  if (parentPitches[careerId]) {
    return parentPitches[careerId];
  }

  const workplacesList = Array.isArray(career.workPlaces)
    ? career.workPlaces
        .slice(0, 2)
        .map((w) => w.split("(")[0].trim())
        .join(", ")
    : "leading national companies";
  const degree =
    career.quickFacts && career.quickFacts.degree
      ? career.quickFacts.degree
      : "Any recognized graduation degree";
  const entrySal =
    career.salary && career.salary.entry
      ? career.salary.entry.amount
      : "₹3-6 LPA";
  const seniorSal =
    career.salary && career.salary.senior
      ? career.salary.senior.amount
      : "₹15-25 LPA";

  return {
    dilemma: `Beta, "${career.name}" sounds unusual. Is it financially safe? Why not go for a traditional government or IT job?`,
    financialAngle: `Entry-level ${career.name}s start at ${entrySal}, scaling to ${seniorSal} with specialized industry experience.`,
    safetyAngle: `You can complete regular college studies (${degree}) while building practical skills and projects on the side.`,
    script: `Mom, Dad, I know you care about my security. Companies like ${workplacesList} actively hire ${career.name}s starting at ${entrySal}, and senior specialists earn ${seniorSal}. I will maintain my regular graduation degree as a safety net while mastering these skills. I won't make any sudden moves—I'll prove my progress and earnings to you first.`,
  };
}

function fillConvinceParentsSection(career, careerId) {
  const container = document.getElementById("convince-parents");
  if (!container) return;

  const advice = getParentAdvice(career, careerId);
  const workplacesText = Array.isArray(career.workPlaces)
    ? career.workPlaces
        .slice(0, 3)
        .map((w) => w.split("(")[0].trim())
        .join(", ")
    : "reputable industry leaders";

  const entrySalary =
    career.salary && career.salary.entry
      ? career.salary.entry.amount
      : "competitive market rates";
  const seniorSalary =
    career.salary && career.salary.senior
      ? career.salary.senior.amount
      : "lucrative industry figures";
  const degreeText =
    career.quickFacts && career.quickFacts.degree
      ? career.quickFacts.degree
      : "standard graduation";

  container.innerHTML = `
    <div class="parent-advice-box">
      <div class="parent-fear-banner">
        <span class="parent-fear-emoji">💭</span>
        <div class="parent-fear-text">
          <strong>The Typical Indian Parent Concern:</strong>
          <p>"${advice.dilemma}"</p>
        </div>
      </div>

      <p class="parent-reassurance">
        Indian parents worry because they want you to be financially secure. Don't fight with emotion—convince them with <strong>clear numbers, real companies, and a backup plan</strong>:
      </p>

      <div class="parent-talking-points">
        <div class="parent-point">
          <div class="point-header">
            <span class="point-icon">💰</span>
            <strong>1. Financial Stability & Proof</strong>
          </div>
          <p>${advice.financialAngle} Explain that entry packages start at <strong>${entrySalary}</strong> and scale up to <strong>${seniorSalary}</strong>.</p>
        </div>

        <div class="parent-point">
          <div class="point-header">
            <span class="point-icon">🏢</span>
            <strong>2. Recognized Employers & Real Jobs</strong>
          </div>
          <p>Show them that legitimate organizations like <strong>${workplacesText}</strong> hire full-time professionals with stability, EPF, and medical benefits.</p>
        </div>

        <div class="parent-point">
          <div class="point-header">
            <span class="point-icon">🎓</span>
            <strong>3. The Degree Safety Net (Peace of Mind)</strong>
          </div>
          <p>${advice.safetyAngle} Reassure them: <em>"My college degree (${degreeText}) remains my solid safety cushion while I build this specialized skill."</em></p>
        </div>

        <div class="parent-point script-point">
          <div class="point-header">
            <span class="point-icon">💬</span>
            <strong>4. Your 30-Second Script to Say to Mom & Dad</strong>
            <button class="btn-copy-script" onclick="copyParentScript()" title="Copy script to clipboard">
              📋 Copy Script
            </button>
          </div>
          <blockquote class="parent-script" id="parent-script-text">
            "${advice.script}"
          </blockquote>
        </div>
      </div>
    </div>
  `;
}

function copyParentScript() {
  const textEl = document.getElementById("parent-script-text");
  if (!textEl) return;
  const scriptText = textEl.textContent.trim().replace(/^"|"$/g, "");

  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(scriptText)
      .then(() => {
        const btn = document.querySelector(".btn-copy-script");
        if (btn) {
          btn.innerHTML = "✅ Copied!";
          setTimeout(() => {
            btn.innerHTML = "📋 Copy Script";
          }, 2500);
        }
      })
      .catch(() => {
        alert(scriptText);
      });
  } else {
    alert(scriptText);
  }
}

window.copyParentScript = copyParentScript;
window.fillConvinceParentsSection = fillConvinceParentsSection;

/* ============================================
   SIDEBAR: RELATED CAREERS
   ============================================ */
function fillRelatedCareers(currentCategory, currentCareerId) {
  const relatedDiv = document.getElementById("related-careers");

  let relatedCareers = [];

  for (let id in careerDatabase) {
    if (
      id !== currentCareerId &&
      careerDatabase[id].category === currentCategory
    ) {
      relatedCareers.push({
        id: id,
        name: careerDatabase[id].name,
        emoji: careerDatabase[id].emoji,
      });
    }

    if (relatedCareers.length === 3) break;
  }

  if (relatedCareers.length < 3) {
    for (let id in careerDatabase) {
      if (id !== currentCareerId && !relatedCareers.find((c) => c.id === id)) {
        relatedCareers.push({
          id: id,
          name: careerDatabase[id].name,
          emoji: careerDatabase[id].emoji,
        });
      }

      if (relatedCareers.length === 3) break;
    }
  }

  let html = "";

  relatedCareers.forEach((career) => {
    html += `
      <a href="career-detail.html?career=${career.id}" class="related-career-link">
        <strong>${career.emoji} ${career.name}</strong>
        <small>Click to explore </small>
      </a>
    `;
  });

  if (html === "") {
    html = '<p style="color: var(--text-gray);">More careers coming soon!</p>';
  }

  relatedDiv.innerHTML = html;
}

/* ============================================
   ERROR HANDLING
   ============================================ */
function showError(message) {
  const container = document.querySelector(".career-details .container");

  container.innerHTML = `
    <div style="
      text-align: center;
      padding: 5rem 2rem;
      background: var(--bg-white);
      border-radius: 20px;
      border: 3px solid var(--coral);
    ">
      <h1 style="color: var(--coral); font-size: 3rem; margin-bottom: 1rem;">
        ⚠️ Oops!
      </h1>
      <p style="font-size: 1.2rem; color: var(--text-gray); margin-bottom: 2rem;">
        ${message}
      </p>
      <a href="explore.html" class="btn btn-primary" style="
        display: inline-block;
        padding: 1rem 2rem;
        background: linear-gradient(135deg, var(--accent) 0%, #f0c050 100%);
        color: var(--text-dark);
        border-radius: 10px;
        text-decoration: none;
        font-weight: 700;
      ">
        ← Back to Explore Page
      </a>
    </div>
  `;
}

/* ============================================
   SHARE FUNCTION
   ============================================ */
function shareCareer() {
  const careerName = document.getElementById("career-name").textContent;
  const url = window.location.href;

  if (navigator.share) {
    navigator
      .share({
        title: `${careerName} - Career Kuch Hatke`,
        text: `Check out this unconventional career: ${careerName}`,
        url: url,
      })
      .then(() => console.log("Shared successfully"))
      .catch((error) => console.log("Error sharing:", error));
  } else {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        alert("Link copied to clipboard! Share it with your friends.");
      })
      .catch(() => {
        alert(`Share this link:\n${url}`);
      });
  }
}

/* ============================================
   ACCORDION FUNCTIONALITY - COLLAPSIBLE CARDS
   ============================================ */

document.addEventListener("click", function (e) {
  const header = e.target.closest(".card-header");
  if (!header) return;

  const card = header.parentElement;
  if (!card || !card.classList.contains("detail-card")) return;

  // Toggle current card independently without closing others
  card.classList.toggle("active");
  updateToggleAllBtn();
});

/* ============================================
   EXPAND / COLLAPSE ALL SECTIONS
   ============================================ */
function toggleAllSections() {
  const cards = document.querySelectorAll(".detail-card");
  const anyClosed = Array.from(cards).some(
    (c) => !c.classList.contains("active"),
  );

  cards.forEach((c) => {
    if (anyClosed) {
      c.classList.add("active");
    } else {
      c.classList.remove("active");
    }
  });

  updateToggleAllBtn();
}

function updateToggleAllBtn() {
  const btn = document.getElementById("toggleAllBtn");
  if (!btn) return;
  const cards = document.querySelectorAll(".detail-card");
  if (cards.length === 0) return;
  const anyClosed = Array.from(cards).some(
    (c) => !c.classList.contains("active"),
  );
  btn.innerHTML = anyClosed ? "📂 Expand All" : "📁 Collapse All";
}

/* ============================================
   SAVE / PRINT ROADMAP (PDF)
   ============================================ */
function printRoadmap() {
  // Expand all sections before printing so the student gets the full roadmap
  document
    .querySelectorAll(".detail-card")
    .forEach((c) => c.classList.add("active"));
  updateToggleAllBtn();
  window.print();
}

window.toggleAllSections = toggleAllSections;
window.updateToggleAllBtn = updateToggleAllBtn;
window.printRoadmap = printRoadmap;
