# ==============================================================================
#                      PROJECT DOCUMENTATION REPORT (4 PAGES)
# ==============================================================================

<!-- ============================== PAGE 1 ============================== -->
# VIDYAVARDHINI'S COLLEGE
### DEPARTMENT OF COMPUTER SCIENCE
**Subject:** Field Project (Academic Year 2025 – 2026)  
**Degree:** Bachelor of Science in Computer Science (B.Sc. CS)  

---

## PROJECT TITLE:
# CAREER KUCH HATKE
### *An Interactive Unconventional Career Guidance Web Platform with Admin Panel*

**Submitted by:** Sneha Prajapati  
**Class:** Second Year B.Sc. Computer Science (FY Completed)  
**Live Application URL:** https://career-kuch-hatke.infinityfreeapp.com  
**Source Code Repository:** https://github.com/snehaprajapati-dev/career-kuch-hatke  

---

### 1. Abstract & Executive Summary
In the Indian educational system, over 80% of secondary and higher-secondary students are steered toward a small cluster of conventional careers—predominantly Engineering, Medicine, Civil Services, or Banking. This narrow focus frequently leads to career misalignment, intense academic anxiety, and high dropout rates, while emerging high-growth industries face severe talent shortages.

**Career Kuch Hatke** is an interactive, mobile-responsive web platform created to solve this guidance crisis. It presents **35+ verified unconventional career options** across Creative, Tech, Science, Business, and Unique domains. The platform provides students with concrete, realistic 2026 Indian salary packages (starting to senior levels), recognized institutes, study budgets, an aptitude assessment quiz, a persistent bookmarking system, and a tailored **"Talk to Your Parents"** script generator with direct WhatsApp integration. Developed using **HTML5, CSS3, JavaScript, PHP, and MySQL**, the application features a complete administrative backend and is deployed live via automated GitHub Actions CI/CD.

---

### 2. Problem Statement & Motivation
1. **Information Asymmetry:** Authentic career roadmaps for non-traditional fields (e.g., Ethical Hacking, Food Styling, Drone Piloting, UI/UX Design, Fragrance Chemistry) are scattered across fragmented overseas websites that do not reflect Indian academic prerequisites or recruiter standards.
2. **The "Parental Resistance" Hurdle:** Indian students frequently encounter skepticism from family members who worry about job security and entry packages in non-traditional fields.
3. **Lack of Guided Self-Assessment:** Students rarely have access to accessible, beginner-friendly tools that assess problem-solving style and map individual traits to viable modern professions.

---

### 3. Project Objectives & Scope
- **Curated Knowledge Base:** Deliver deep, verified roadmaps for 35+ non-traditional professions with transparent salary ranges, safety cushion degrees, and realistic study budgets.
- **Client-Side Responsiveness:** Provide zero-latency keyword search with synonym matching, category filtering, and saved bookmarks using pure JavaScript without heavy external libraries.
- **Parental Alignment Mechanism:** Equip students with ready-made 30-second conversational pitches containing verifiable industry data to share with parents via WhatsApp.
- **Full-Stack Form Handling:** Enable student inquiries and user career suggestions through server-side validation, sanitized database insertion, and a secure PHP Admin Panel.
- **Professional Deployment:** Maintain automated deployment pipelines using GitHub Actions to sync local XAMPP developments directly to InfinityFree live Linux hosting.

<!-- ============================ END OF PAGE 1 ============================ -->

<div style="page-break-after: always;"></div>

<!-- ============================== PAGE 2 ============================== -->
## 4. System Architecture & Technology Stack

```text
+-------------------------------------------------------------------------------+
|                             CLIENT-SIDE (BROWSER)                             |
|  HTML5 (Semantic Pages) | CSS3 (Grid, Flexbox, Dark/Light) | JavaScript (ES6) |
|  - Smart Synonym Search  - Aptitude Quiz Engine   - LocalStorage Bookmarks    |
+-------------------------------------------------------------------------------+
                                      |
                       HTTP / HTTPS (GET & POST)
                                      |
+-------------------------------------------------------------------------------+
|                      SERVER-SIDE (APACHE & PHP 8.x)                           |
|  - Form Processors (contact-process.php, suggestion-process.php)              |
|  - Admin Module (login.php, dashboard.php, export.php, delete.php)            |
|  - Security Layer: Input sanitization, XSS protection, Session Auth           |
+-------------------------------------------------------------------------------+
                                      |
                                  SQL Queries
                                      |
+-------------------------------------------------------------------------------+
|                         DATABASE LAYER (MySQL)                                |
|  - Table: contacts (id, name, email, message, submitted_at)                   |
|  - Table: career_suggestions (id, name, email, career_title, description, at) |
+-------------------------------------------------------------------------------+
```

### Technology Specification Table:
| Layer | Technology | Key Responsibility in Project |
| :--- | :--- | :--- |
| **Markup & Semantics** | **HTML5** | Semantic structure (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`). |
| **Styling & Layout** | **CSS3** | CSS Grid, Flexbox, Media Queries, Dark/Light Theme with CSS variables. |
| **Client Scripting** | **JavaScript ES6+** | DOM manipulation, synonym search dictionary, quiz logic, `localStorage`. |
| **Backend Language** | **PHP 8.2** | Server-side form processing, admin session handling, CSV export. |
| **Database** | **MySQL** | Relational data persistence for student messages and user suggestions. |
| **Local Environment** | **XAMPP** | Apache web server and MySQL database running on `localhost:8080`. |
| **Hosting & CI/CD** | **InfinityFree & Git** | Production server with automated FTPS push via GitHub Actions. |

---

## 5. Webpage Modules & Functionality Breakdown

The platform features **6 core user-facing pages** and a dedicated **Administrative Backend Module**:

1. **Home Page (`index.html`):**
   - Hero banner with immediate calls-to-action ("Explore Careers" & "Take Career Quiz").
   - Comparative **"Rat Race vs. Hatke Career"** matrix highlighting earning potential and job satisfaction.
   - Domain spotlights showcasing Creative, Tech, Science, Business, and Unique career paths.
   - Anti-flash theme switcher supporting persistent Dark and Light visual modes.

2. **Explore Careers (`explore.html`):**
   - Interactive grid containing 35 standardized career cards with equalized vertical heights.
   - **Category Filter Pills:** Instant client-side filtering by domain (Creative, Tech, Science, Business, Unique).
   - **Saved Bookmarks Tab (`🔖 Bookmarked`):** Displays student's saved careers with dynamic badge counter and friendly empty state.
   - **Smart Search Bar:** Instant keyword search with synonym matching and clear button (`✕`).

3. **Dynamic Career Roadmap (`career-detail.html`):**
   - Single-page dynamic template driven by URL parameters (e.g., `?career=ui-ux-designer`).
   - 10 comprehensive roadmap modules: Quick Facts, What They Actually Do, Career Ladder, Top Indian Colleges, Degree Safety Cushion, and 30-Second Parent Pitch script.
   - Action Toolbar: `📂 Expand All`, `🖨️ Save Roadmap (PDF)`, `📤 Share Career`, and `🔖 Bookmark Career`.

4. **Career Aptitude Quiz (`quiz.html`):**
   - Interactive assessment evaluating problem-solving style, personality preferences, and creative vs. analytical inclinations.
   - Custom client-side scoring engine that calculates domain match percentages and outputs personalized career suggestions.

5. **About Us & Data Transparency (`about.html`):**
   - Explains project origin, student developer background, and verified 2026 data research methodology (AmbitionBox, Glassdoor India, UGC/AICTE reports).

6. **Contact & Career Suggestion Form (`contact.html`):**
   - Feedback and career suggestion submission interface with real-time client validation and asynchronous POST handling.

7. **Administrative Management Portal (`admin/`):**
   - **`login.php` & `logout.php`:** Session-based admin authentication preventing unauthorized URL access.
   - **`dashboard.php`:** Overview metric counters for total feedback messages and user-submitted careers.
   - **`contacts.php` & `suggestions.php`:** Tabular review screens with timestamps and status indicators.
   - **`delete.php` & `export.php`:** Record removal and one-click data export into Microsoft Excel-compatible CSV files.

<!-- ============================ END OF PAGE 2 ============================ -->

<div style="page-break-after: always;"></div>

<!-- ============================== PAGE 3 ============================== -->
## 6. Key Technical Implementations & Algorithms

### A. Smart Synonym Search & Live DOM Filtering (`js/script.js`)
To match how students actually search (e.g., searching *"coding"* rather than *"Ethical Hacker"*, or *"camera"* rather than *"Wildlife Photographer"*), a specialized synonym map evaluates input queries:
```javascript
const searchKeywordsMap = {
  "ethical-hacker": ["coding", "security", "hacking", "cyber", "python", "linux"],
  "food-stylist": ["food", "cooking", "styling", "photography", "chef", "baking"],
  "ui-ux-designer": ["design", "figma", "app", "website", "coding", "interface"]
};
```
Whenever a student types, JavaScript checks career names, tags, and synonym arrays. Unmatched cards receive `.is-hidden` with `display: none !important;`, leaving matching cards in an adaptive CSS Grid without requiring any server round-trips.

### B. Client-Side Bookmark Persistence (`localStorage`)
The bookmarking engine allows students to save careers across visits without requiring an account:
- **Storage Strategy:** Career IDs are stored as a JSON array in `localStorage.getItem("ckh_bookmarks")`.
- **Synchronization:** Tapping `🔖` on any card toggles the ID, updates the active gold gradient styling, alerts the user via a floating animated toast notification (*"Career saved to bookmarks! 🔖"*), and increments the `#bookmarkCount` badge across all pages.
- **Empty State Handling:** When viewing the `🔖 Bookmarked` filter with zero saved items, the grid gracefully displays a tailored prompt with a **"View All Careers"** reset button.

### C. Parent Pitch Generator & WhatsApp URI Encoding
To assist students in communicating with hesitant parents, `career-detail.js` dynamically compiles a 30-second conversational script incorporating verified Indian salary figures, safety degrees, and reputable institutes:
```javascript
const shareUrl = "https://career-kuch-hatke.infinityfreeapp.com/career-detail.html?career=" + careerId;
const pitchText = `Namaste Mummy/Papa, I was exploring verified career paths on Career Kuch Hatke:\n\n` +
                  `🎯 Career: *${career.name}*\n💰 Salary Range: ${career.quickFacts.salary}\n` +
                  `🏛️ Top Institutes: ${career.indianColleges.join(", ")}\n` +
                  `Check complete roadmap: ${shareUrl}`;
window.open("https://api.whatsapp.com/send?text=" + encodeURIComponent(pitchText), "_blank");
```

### D. Server-Side PHP Validation & Input Sanitization
To safeguard against Cross-Site Scripting (XSS) and malicious injections, all incoming POST payloads undergo strict server-side cleaning before SQL execution:
```php
$name    = htmlspecialchars(strip_tags(trim($_POST['name'])), ENT_QUOTES, 'UTF-8');
$email   = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
$message = htmlspecialchars(strip_tags(trim($_POST['message'])), ENT_QUOTES, 'UTF-8');

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die(json_encode(["status" => "error", "message" => "Invalid email address."]));
}
```

### E. Anti-Flash Theme Persistence Architecture
To prevent the jarring white flash ("flash of unstyled content") that typically occurs when refreshing a dark-mode website, a compact script executes synchronously in the `<head>` prior to CSS stylesheet rendering:
```javascript
(function() {
  var theme = localStorage.getItem("ckh_theme");
  if (theme === "dark") document.documentElement.setAttribute("data-theme", "dark");
})();
```

<!-- ============================ END OF PAGE 3 ============================ -->

<div style="page-break-after: always;"></div>

<!-- ============================== PAGE 4 ============================== -->
## 7. Database Design & Entity Relationship

The MySQL relational database comprises two optimized tables for communication and crowd-sourced career insights:

```text
Table: contacts                              Table: career_suggestions
+------------------+------------------+     +------------------+------------------+
| Field            | Type             |     | Field            | Type             |
+------------------+------------------+     +------------------+------------------+
| id (PK)          | INT AUTO_INC     |     | id (PK)          | INT AUTO_INC     |
| name             | VARCHAR(100)     |     | name             | VARCHAR(100)     |
| email            | VARCHAR(150)     |     | email            | VARCHAR(150)     |
| subject          | VARCHAR(200)     |     | career_title     | VARCHAR(150)     |
| message          | TEXT             |     | description      | TEXT             |
| status           | ENUM(new,read)   |     | category         | VARCHAR(50)      |
| submitted_at     | TIMESTAMP DEFAULT|     | submitted_at     | TIMESTAMP DEFAULT|
+------------------+------------------+     +------------------+------------------+
```

---

## 8. Testing, Verification & Quality Assurance Matrix

| Quality Metric | Test Case & Verification Procedure | Result & Status |
| :--- | :--- | :--- |
| **Cross-Browser Verification** | Validated across Chrome 120+, Firefox 122+, MS Edge, and mobile Safari. | **Passed:** Full visual parity, zero layout breakage. |
| **Mobile Responsiveness** | Simulated on 360px (Android), 390px (iPhone 14), 768px (iPad), and 1440px. | **Passed:** Flexible 1-column cards, centered footer, touch-friendly tap targets. |
| **JavaScript Integrity** | Syntax verified using Node.js runtime compiler (`node -c`). | **Passed:** Zero runtime console exceptions. |
| **Asset Cache Busting** | Appended explicit version strings (`?v=6.0`) across all CSS/JS tags. | **Passed:** Browsers instantly fetch updated files without stale caching. |

---

## 9. Live Deployment Pipeline & CI/CD Workflow

1. **Local Development:** Code authored and tested on Apache web server via XAMPP (`http://localhost:8080/`).
2. **Version Control:** Changes staged, committed with detailed semantic messages, and pushed to GitHub repository (`origin/main`).
3. **Automated CI/CD Workflow (`.github/workflows/deploy.yml`):**
   - GitHub Actions runner detects push events to the `main` branch.
   - Securely accesses encrypted repository secrets (`FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`).
   - Executes FTPS file transfer to publish updated code directly into InfinityFree's `htdocs/` directory within seconds.

---

## 10. Limitations & Future Scope

- **Current Limitations:**
  - Career data is currently served via structured JavaScript client arrays (`career-data.js`) rather than a full headless CMS.
  - Bookmarks are device-specific because they rely on browser `localStorage` instead of persistent user accounts.
- **Future Enhancements:**
  1. **User Authentication & Cloud Bookmarks:** Implement student accounts with password hashing (`password_hash`) to sync saved careers across phone and laptop.
  2. **1-on-1 Mentorship Booking:** Direct calendar integration for students to schedule video calls with working professionals.
  3. **AI Career Counselor:** Integration with LLM APIs for natural language doubt-clearing regarding college cutoffs and portfolio reviews.

---

## 11. Learning Outcomes & Conclusion

Developing **Career Kuch Hatke** has provided hands-on engineering experience across the entire web lifecycle:
- Structuring semantic, accessible HTML5 documents and responsive CSS Grid/Flexbox layouts.
- Mastering asynchronous JavaScript DOM manipulation, event listeners, and browser storage APIs.
- Designing secure server-side PHP endpoints with sanitized database transactions and administrative dashboarding.
- Managing real-world deployment challenges, including cache invalidation and automated CI/CD pipelines.

By solving a tangible, widespread dilemma in the Indian student community, this Field Project demonstrates both technical competency and meaningful social utility.

---

### 12. References & Data Citations
1. **Glassdoor India & AmbitionBox:** 2025–2026 Indian compensation figures for emerging tech and creative professions.
2. **University Grants Commission (UGC) & AICTE:** National institutional rankings, accredited programs, and degree prerequisites.
3. **Mozilla Developer Network (MDN Web Docs):** HTML5 Semantics, CSS Flexible Box, and Web Storage API references.

<!-- ============================ END OF PAGE 4 ============================ -->
