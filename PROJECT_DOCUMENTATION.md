# PROJECT DOCUMENTATION REPORT

**Subject:** Field Project (Semester II / III)  
**Academic Year:** 2025 – 2026  
**Course:** Bachelor of Science in Computer Science (B.Sc. CS)  
**Institution:** Vidyavardhini's College  

---

### **Project Title:**  
# CAREER KUCH HATKE
### *An Interactive Unconventional Career Guidance Web Platform with Admin Management*

**Submitted by:** Sneha Prajapati  
**Class:** Second Year B.Sc. Computer Science  
**Live Platform:** https://career-kuch-hatke.infinityfreeapp.com  
**Source Code Repository:** https://github.com/snehaprajapati-dev/career-kuch-hatke  

---

## 1. Abstract & Introduction

In the Indian academic ecosystem, students face immense pressure to pursue a limited set of traditional careers (Engineering, Medicine, Government Civil Services, or Banking). Consequently, thousands of high-potential students struggle with career dissatisfaction, unaware of emerging and lucrative offbeat paths.

**Career Kuch Hatke** is an interactive, mobile-responsive web application engineered to bridge this critical information divide. It curates **35+ verified unconventional career paths** spanning Creative, Tech, Science, Business, and Unique disciplines. Beyond theoretical career descriptions, the platform equips students with real-world Indian salary benchmarks, degree safety nets, accredited educational roadmaps, an interactive career quiz, a client-side bookmarking system, and a **"Talk to Your Parents"** pitch generator with integrated WhatsApp sharing. A robust PHP/MySQL backend powers student inquiries, user career suggestions, and a secure administrative dashboard.

---

## 2. Problem Statement & Motivation

1. **Information Asymmetry:** Reliable data regarding offbeat careers (such as Ethical Hacking, Food Styling, Drone Piloting, UI/UX Design, or Space Science) is fragmented across disparate blogs and overseas portals that do not reflect Indian market realities.
2. **The "Parental Resistance" Hurdle:** Indian students frequently encounter hesitation from parents who question the financial viability and job security of non-traditional fields.
3. **Lack of Self-Discovery Tools:** Students lack accessible, engaging self-assessment tools to map their natural problem-solving inclinations to modern industry careers.

---

## 3. Project Objectives & Scope

- **Comprehensive Knowledge Base:** Curate structured data for 35+ non-traditional Indian careers with 2026 industry salary estimates (starting to senior levels).
- **Client-Side Interactivity:** Deliver high-speed search, dynamic category filtering, saved bookmarks, and an algorithmic aptitude assessment using vanilla JavaScript without heavy third-party framework overhead.
- **Parental Alignment Mechanism:** Generate customized 30-second scripts with verifiable salary figures and safety cushion degrees that students can share with parents via WhatsApp with a single tap.
- **Full-Stack Form Processing:** Implement server-side data validation, sanitized database insertion, and administrative inquiry management using PHP and MySQL.
- **Professional Deployment:** Maintain automated deployment pipelines (CI/CD via GitHub Actions) and live hosting on an Apache Linux web server.

---

## 4. System Architecture & Technology Stack

- **Frontend Presentation:** HTML5 Semantic elements (`<nav>`, `<main>`, `<section>`, `<footer>`), CSS3 (Flexbox, CSS Grid, custom design variables, responsive media queries, dark/light theme persistence with anti-flash script).
- **Client-Side Logic:** Vanilla JavaScript ES6+ (DOM manipulation, synonym search dictionary, interactive scoring quiz algorithm, localStorage state for bookmarks and theme).
- **Server-Side Backend:** PHP 8.x (Form submission handling, input sanitization using `htmlspecialchars` and filter validation, session-based admin authentication).
- **Database Management:** MySQL (Relational tables for contact inquiries and career suggestions with timestamps).
- **Local Environment:** XAMPP (Apache web server and MySQL running on `localhost:8080`).
- **Production & CI/CD:** Git, GitHub, and automated FTPS deployment via GitHub Actions to InfinityFree Linux hosting.

---

## 5. Webpage Modules & Functionality

The application consists of **6 primary user-facing pages** and a dedicated **Admin Management Module**:

### 1. Home Page (`index.html`)
- Engaging Hero banner with call-to-action buttons.
- Comparative **"Rat Race vs. Hatke Career"** problem-solution grid.
- Dynamic category highlights and featured career cards.
- Dark/Light mode theme toggle with persistent user preferences.

### 2. Explore Careers (`explore.html`)
- Displays all 35 career cards formatted with standardized equal-height flexbox containers.
- **Category Filter Pills:** Real-time client-side switching (All, Creative, Tech, Science, Business, Unique).
- **Bookmark Filter Pill (`🔖 Bookmarked`):** Displays saved careers with dynamic badge counter and tailored empty state.
- **Smart Synonym Search Bar:** Searches by job titles and common student keywords (e.g., "coding", "camera", "food", "gaming").

### 3. Dynamic Career Roadmap (`career-detail.html`)
- Universal dynamic template driven by URL query parameters (e.g., `?career=ui-ux-designer`).
- 10 structured sections: Quick Facts (Salary, Degree, Budget, Work Mode), Day-in-the-Life Responsibilities, Growth Ladder, Indian Colleges, Degree Safety Net, and "Talk to Your Parents" dialogue script.
- **Action Toolbar:** `📂 Expand All`, `🖨️ Save Roadmap (PDF)`, `📤 Share Career`, and `🔖 Bookmark Career`.

### 4. Career Aptitude Quiz (`quiz.html`)
- Multi-question assessment analyzing work-style preferences and problem-solving habits.
- Client-side weighting algorithm matching user responses to career domains.
- Displays domain match percentages and recommended career cards.

### 5. About Us (`about.html`)
- Mission statement, student developer biography, academic disclaimer, and research sources (Glassdoor India, AmbitionBox, UGC/AICTE reports).

### 6. Contact & Career Suggestions (`contact.html`)
- Dual-purpose inquiry form for feedback and new career suggestions.
- Client-side JavaScript validation preventing empty submissions.
- Asynchronous POST submission to backend PHP endpoints.

### 7. Administrative Management Module (`admin/`)
- `admin/login.php`: Secure authentication handling admin credentials and starting PHP sessions.
- `admin/dashboard.php`: Metrics dashboard summarizing total inquiries and career suggestions.
- `admin/contacts.php` & `admin/suggestions.php`: Tabular view of submissions with timestamps and status.
- `admin/delete.php`: Administrative record cleanup.
- `admin/export.php`: One-click data export to Excel-compatible CSV format.

---

## 6. Key Technical Innovations & Algorithms

### A. Smart Synonym Search & DOM Filtering (`js/script.js`)
Rather than relying solely on literal career titles, a curated synonym map links colloquial queries to specific slugs:
- Query *"coding"* → Ethical Hacker, UI/UX Designer, Game Developer, Prompt Engineer
- Query *"camera"* → Wildlife Photographer, Food Stylist, Drone Pilot
- Query *"food"* → Food Stylist, Food Scientist, Flavor Chemist, Tea Taster

### B. Client-Side Bookmark Persistence (`localStorage`)
Bookmarks are handled asynchronously without requiring login barriers:
- State is serialized as a JSON string under the key `'ckh_bookmarks'`.
- Tapping `🔖` on any card toggles the slug in the array, synchronizes the UI with a golden gradient glow, displays a floating toast notification (*"Career saved to bookmarks! 🔖"*), and increments the `#bookmarkCount` indicator.

### C. Parent Pitch & WhatsApp URL Encoding
To overcome parental skepticism, the system formats a persuasive 30-second conversational script and encodes it via `encodeURIComponent()` to trigger the WhatsApp API:
- Always passes the public live InfinityFree URL (`https://career-kuch-hatke.infinityfreeapp.com/...`) even during local testing so WhatsApp generates rich clickable previews.

### D. Server-Side PHP Security & Sanitization
All incoming form data is scrubbed before database persistence:
- Strips tags, trims whitespace, and converts special characters via `htmlspecialchars()` to eliminate Cross-Site Scripting (XSS).
- Sanitizes email fields using `filter_var(..., FILTER_SANITIZE_EMAIL)`.

---

## 7. Testing & Quality Assurance

| Test Domain | Methodology | Result |
| :--- | :--- | :--- |
| **Cross-Browser Verification** | Tested on Google Chrome, Mozilla Firefox, Microsoft Edge, and Apple Safari. | 100% functional UI parity across all engines. |
| **Responsive Viewports** | Tested on mobile (360px–480px), tablet (768px), and wide monitors (1440px+). | Grid columns adapt cleanly; card heights are equalized; touch targets exceed 44px. |
| **JavaScript Syntax** | Validated using Node.js execution engine (`node -c`). | Zero compilation errors or unhandled promises. |
| **Cache Busting Strategy** | Version query parameters (`?v=6.0`) appended to CSS and JS assets. | Mobile devices immediately fetch fresh styles without stale cache interference. |

---

## 8. Limitations & Future Enhancements

- **Current Limitations:** Career details and roadmaps are currently stored in structured JavaScript objects (`career-data.js`) rather than a dynamic CMS database.
- **Future Roadmap:**
  1. **User Authentication:** Student login accounts to synchronize bookmarks across multiple devices.
  2. **Direct Counselor Scheduling:** Booking 1-on-1 video guidance sessions with verified domain professionals.
  3. **AI Chatbot Counselor:** Natural language question-answering assistant trained on UGC career guidelines.

---

## 9. Conclusion

The **Career Kuch Hatke** project fulfills all curriculum parameters of the Field Project. It demonstrates a practical synthesis of semantic HTML5 architecture, responsive CSS3 design, dynamic JavaScript event handling, client-side data persistence, and secure PHP/MySQL backend engineering. By tackling a pervasive social issue in Indian education, the website delivers a polished, production-ready resource for students exploring unconventional career paths.
