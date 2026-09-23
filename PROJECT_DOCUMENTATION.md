# ==============================================================================
# STANDARD PROJECT DOCUMENTATION REPORT (10 PAGES + CERTIFICATE)
# ==============================================================================

<!-- ======================= CERTIFICATE (PAGE 0) ======================= -->

# VIDYAVARDHINI’S
### ANNASAHEB VARTAK COLLEGE OF ARTS,
### KEDARNATH MALHOTRA COLLEGE OF COMMERCE,
### E. S. ANDRADES COLLEGE OF SCIENCE
#### DEPARTMENT OF COMPUTER SCIENCE
*(Affiliated to the University of Mumbai) • Vasai Road (West), Dist. Palghar*

## CERTIFICATE

**Class:** S.Y. B.Sc. CS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **Academic Year:** 2026 – 2027  

This is to certify that the project work entitled **CAREER KUCH HATKE** entered in this report is the bonafide work of Kumari **Sneha Mahendra Prajapati** of class **S.Y. B.Sc. CS**, Division **—**, Institutional Roll No. **89**, University Exam No. `________________`, who has satisfactorily completed the required Field Project work in the college laboratory as prescribed by the University of Mumbai for Semester III during the academic year 2026 – 2027.

| Head of the Department | External Examiner | Internal Examiner / Subject Teacher |
| :---: | :---: | :---: |

**Date:** `    /    / 2026` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **Department of:** Computer Science  

<div style="page-break-after: always;"></div>

<!-- ============================== PAGE 1 ============================== -->

# VIDYAVARDHINI’S
### ANNASAHEB VARTAK COLLEGE OF ARTS, KEDARNATH MALHOTRA COLLEGE OF COMMERCE, E. S. ANDRADES COLLEGE OF SCIENCE
#### DEPARTMENT OF COMPUTER SCIENCE

## PROJECT INDEX / TABLE OF CONTENTS
**Project Title:** CAREER KUCH HATKE &bull; **Candidate:** Sneha Prajapati (Roll No. 89)

| Sr. No. | Topic / Chapter Title | Page No. | Teacher's Signature |
| :---: | :--- | :---: | :---: |
| **1.0** | **Introduction & Problem Statement**<br>*Background, societal need, problem statement, objectives & scope* | **Page 2** | |
| **2.0** | **About the Website & Core Modules**<br>*Platform purpose, target audience, and detailed breakdown of all 7 modules* | **Page 3** | |
| **3.0** | **System Architecture & Technologies Used**<br>*Client-server block diagram, technology stack, and hardware/software specifications* | **Page 4** | |
| **4.0** | **Implementation of CSS: Why and How**<br>*Responsive design rationale, CSS grid/flexbox, custom variables, and dark/light themes* | **Page 5** | |
| **5.0** | **Implementation of PHP & Database: Why and How**<br>*Backend data persistence, input sanitization, XSS security, and MySQL schema* | **Page 6** | |
| **6.0** | **Web Hosting & CI/CD Deployment Process**<br>*Local XAMPP setup, Git version control, InfinityFree hosting, and GitHub Actions* | **Page 7** | |
| **7.0** | **System Testing & Quality Assurance Matrix**<br>*Cross-browser testing, mobile viewports, JS runtime checks, and cache invalidation* | **Page 8** | |
| **8.0** | **Website Interface Screenshots (3 Core Modules)**<br>*Home page portal, dynamic career roadmap detail, and contact/suggestion form* | **Page 9** | |
| **9.0** | **Limitations, Future Scope, Conclusion & References**<br>*Current constraints, future roadmap, concluding summary, and authoritative citations* | **Page 10** | |

**Student Declaration:** I hereby declare that this project documentation report of 10 pages represents authentic academic work completed by me for the B.Sc. Computer Science Field Project curriculum (Academic Year 2026–2027).  
**Candidate Signature:** Sneha Prajapati (Roll No. 89)

<!-- Running Footer: Department of Computer Science • S.Y. B.Sc. CS • Roll No. 89 • Page 1 of 10 -->
<div style="page-break-after: always;"></div>

<!-- ============================== PAGE 2 ============================== -->

### 1.0 Introduction & Problem Statement

#### 1.1 Project Title & Executive Summary
- **Project Title:** CAREER KUCH HATKE — An Interactive Unconventional Career Guidance Web Platform with Administrative Management Portal.
- **Live Hosted URL:** https://career-kuch-hatke.infinityfreeapp.com
- **Source Code Repository:** https://github.com/snehaprajapati-dev/career-kuch-hatke

In the Indian educational system, over eighty percent of secondary and undergraduate students are funneled toward an extremely narrow cluster of traditional vocations—predominantly Engineering, Medicine, Civil Services, or Banking. This restrictive focus results in intense academic fatigue, high college dropout rates, and widespread career dissatisfaction, while sunrise creative and technology sectors face an acute shortage of skilled talent.

**Career Kuch Hatke** is an interactive web platform engineered to eliminate this guidance deficit. It curates **35+ verified unconventional career pathways** across Creative, Tech, Science, Business, and Unique disciplines. The platform equips students with transparent 2026 Indian salary packages, safety-cushion degree alternatives, accredited institutional roadmaps, an algorithmic aptitude quiz, a client-side bookmarking system, and a specialized **"Talk to Your Parents"** conversational pitch generator with one-tap WhatsApp integration.

#### 1.2 Problem Statement & Motivation
1. **Information Asymmetry:** Reliable academic prerequisites, study budgets, and authentic Indian entry-level compensation figures for emerging professions (e.g., Ethical Hacker, UI/UX Designer, Drone Pilot, Food Stylist, Flavor Chemist) are scattered across fragmented foreign publications that fail to reflect Indian recruiting standards.
2. **The "Parental Resistance" Hurdle:** Indian students frequently encounter skepticism from family members who prioritize financial stability, predictable progression, and recognized degrees.
3. **Absence of Accessible Assessment Tools:** Secondary and college students lack beginner-friendly assessment tools that evaluate their natural problem-solving inclinations and match them to modern industry specializations.

#### 1.3 Project Objectives & Scope
- **Curated Knowledge Base:** Compile comprehensive, verified roadmaps for 35+ non-traditional vocations with realistic salary brackets, degree cushions, and institutional timelines.
- **Zero-Latency Client Interactivity:** Implement client-side real-time keyword search with synonym mapping, category domain filtering, and saved bookmarks using pure JavaScript without heavy external libraries.
- **Parental Alignment Facilitation:** Formulate customized 30-second conversational pitches containing verifiable industry packages that students can share with parents via WhatsApp.
- **Full-Stack Form Processing:** Handle student feedback and community career suggestions through server-side PHP validation, sanitized database insertion, and an administrative review dashboard.
- **Automated Production Deployment:** Establish continuous integration and deployment (CI/CD via GitHub Actions) to synchronize local developments directly with production Linux hosting.

<!-- Running Footer: Department of Computer Science • S.Y. B.Sc. CS • Roll No. 89 • Page 2 of 10 -->
<div style="page-break-after: always;"></div>

<!-- ============================== PAGE 3 ============================== -->

### 2.0 About the Website & Core Modules

#### 2.1 Platform Purpose & Target Audience
**Career Kuch Hatke** is conceptualized as an end-to-end guidance companion for Indian students in grades 10–12, undergraduates, and career switchers. Unlike generic educational directories, the website delivers actionable intelligence: not just "what the job is", but "how much it pays in India", "what safety degree keeps parents happy", "which colleges teach it", and "how to pitch it to Indian parents".

#### 2.2 Detailed Breakdown of Core Webpage Modules
The platform architecture comprises six distinct user-facing modules and a protected administrative back-office:

1. **Module 1 — Home Portal (`index.html`):** Introduces the platform mission, provides immediate calls-to-action ("Explore Careers" and "Take Quiz"), features an analytical "Rat Race vs. Hatke Career" problem-solution dilemma matrix, highlights featured professions, and includes an anti-flash dark/light theme switcher.
2. **Module 2 — Career Exploration Grid (`explore.html`):** Houses 35 standardized equal-height career cards. Features real-time Category Filter Pills (Creative, Tech, Science, Business, Unique), an instant keyword search bar with clear button and synonym evaluation, and a dedicated **"Bookmarked"** filter tab with friendly empty state.
3. **Module 3 — Dynamic Career Roadmap Engine (`career-detail.html`):** A parameterized single-page template driven by URL queries (e.g., `?career=ai-prompt-engineer`). Dynamically renders 10 structured sections: Quick Facts, Actual Duties, Career Trajectory, Accredited Indian Colleges, Degree Safety Net, and "Talk to Your Parents" pitch generator with action toolbar.
4. **Module 4 — Career Aptitude Assessment Quiz (`quiz.html`):** Interactive 5-step self-assessment evaluating analytical traits, creativity, and working preferences through a client-side weighted scoring algorithm yielding match percentages.
5. **Module 5 — About Us & Research Transparency (`about.html`):** Documents developer background (Sneha Prajapati, Roll No. 89), foundational research motivation, statistical realities of career selection pressures in India, and verified citation sources.
6. **Module 6 — Contact & Suggestion Portal (`contact.html`):** Dual-purpose communication portal allowing students to submit general inquiries and propose new emerging vocational paths for addition with client and server-side validation.
7. **Module 7 — Administrative Management Portal (`admin/`):** Restricted back-office consisting of session-authenticated login (`login.php`), metrics dashboard (`dashboard.php`), submission review tables (`contacts.php`, `suggestions.php`), item deletion (`delete.php`), and CSV export for Excel analysis (`export.php`).

<!-- Running Footer: Department of Computer Science • S.Y. B.Sc. CS • Roll No. 89 • Page 3 of 10 -->
<div style="page-break-after: always;"></div>

<!-- ============================== PAGE 4 ============================== -->

### 3.0 System Architecture & Technologies Used

#### 3.1 System Architecture & Data Flow Diagram
```text
+-------------------------------------------------------------------------------+
|                             CLIENT-SIDE LAYER (BROWSER)                       |
|   HTML5 (Semantic Web) | CSS3 (Grid & Flexbox Layouts) | JavaScript (ES6+)    |
|   - Real-Time Keyword & Synonym Search     - Aptitude Assessment Quiz Engine   |
|   - Multi-Category Domain Filtering        - LocalStorage Bookmarks Engine     |
+-------------------------------------------------------------------------------+
                                      |
                           HTTP / HTTPS GET & POST
                                      |
+-------------------------------------------------------------------------------+
|                      APPLICATION SERVER (APACHE / PHP 8.2)                    |
|   - Request Routing & Form Handlers (contact-process.php, suggestion.php)     |
|   - Administrative Back-Office (login.php, dashboard.php, export.php)         |
|   - Security Layer: Input Sanitization, XSS Neutralization, Session Auth      |
+-------------------------------------------------------------------------------+
                                      |
                            SQL Query Execution
                                      |
+-------------------------------------------------------------------------------+
|                         DATABASE LAYER (MySQL 8.x)                            |
|   - Table: contacts (id, name, email, message, submitted_at)                  |
|   - Table: career_suggestions (id, name, email, career_title, description)    |
+-------------------------------------------------------------------------------+
```

#### 3.2 Technology Specifications Table
| Layer | Technology | Role & Implementation Purpose |
| :--- | :--- | :--- |
| **Frontend Markup** | **HTML5 Semantic** | Structured semantic elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) for accessibility and clean DOM tree traversal. |
| **Styling & Theme** | **CSS3 (Grid & Flexbox)** | Custom CSS variables, mobile-first responsive media queries, and anti-flash dark/light mode theme persistence. |
| **Client Scripting** | **Vanilla JavaScript (ES6+)** | DOM event listeners, keyword synonym dictionary, quiz scoring engine, and Web Storage API (`localStorage`) bookmarking. |
| **Backend Processing** | **PHP 8.2 (Procedural)** | Asynchronous POST parsing, data sanitization (`htmlspecialchars`, `filter_var`), and session-based administrator authentication. |
| **Database Layer** | **MySQL Relational DB** | Normalized relational storage for student inquiries and community career submissions. |
| **Hosting & CI/CD** | **InfinityFree & GitHub Actions** | Cloud Linux hosting with automated FTPS deployment pipeline triggered on git push to the main branch. |

#### 3.3 Hardware & Software Environment Requirements
- **Development Hardware:** Standard x86-64 PC with Intel/AMD Multi-Core Processor, 8GB RAM, 100MB free disk storage.
- **Operating System & Tooling:** Windows 11, Visual Studio Code, XAMPP v8.2.12 (Apache 2.4, MariaDB 10.4, PHP 8.2).
- **Client Requirements:** Any modern standards-compliant web browser (Google Chrome 100+, Firefox 100+, Edge, Safari iOS).

<!-- Running Footer: Department of Computer Science • S.Y. B.Sc. CS • Roll No. 89 • Page 4 of 10 -->
<div style="page-break-after: always;"></div>

<!-- ============================== PAGE 5 ============================== -->

### 4.0 Implementation of CSS: Why and How

#### 4.1 Why CSS was Implemented
Modern web applications demand an intuitive, visually engaging, and responsive interface that adapts seamlessly across smartphones, tablets, laptops, and desktop displays. Pure HTML produces unstyled, linear documents inadequate for structured career guidance. CSS3 was implemented to achieve:
- **Responsive Multi-Column Grids:** Displaying 35 career options requires dynamic multi-column layouts on desktop that gracefully collapse into a single touch-friendly column on mobile devices.
- **Equalized Card Heights:** In exploration grids, varying text length across careers causes uneven card heights. CSS Flexbox was implemented to ensure cards maintain identical vertical height across rows.
- **Accessible Color Contrast & Theme Support:** Implementation of Dark and Light modes reduces eye strain during prolonged reading and respects user operating system preferences.
- **Visual Affordance & Micro-Interactions:** Subtle hover states, smooth transitions, and glowing bookmark pills provide instant tactile feedback without cognitive overload.

#### 4.2 How CSS was Structured and Implemented
The styling architecture follows modular separation across distinct CSS files:
- **Global Design Tokens (`css/style.css`):** Defined using CSS Custom Properties (Variables) on the `:root` selector (e.g., `--bg-primary`, `--text-primary`, `--accent-purple`, `--card-border`) allowing instantaneous theme switching by toggling a single `data-theme="dark"` attribute on the root HTML element.
- **Modular Component Styles:** Dedicated stylesheets isolate component boundaries: `explore.css` manages filters and card grids; `career-detail.css` styles roadmap accordions and the parent pitch box; `quiz.css` handles progress indicators.
- **Strict Card Filtering Rule:** To resolve card filtering conflicts where flex cards remained visible, a strict utility class was implemented: `.career-card.is-hidden { display: none !important; }`.

```css
/* Equal Height Flexbox Card Architecture (css/explore.css) */
.career-card {
  display: flex !important;
  flex-direction: column;
  height: 100%;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.career-card-content {
  flex-grow: 1; /* Automatically expands to equalize card heights across rows */
}
.career-card.is-hidden {
  display: none !important; /* Overrides flex display when card is filtered out */
}
```

<!-- Running Footer: Department of Computer Science • S.Y. B.Sc. CS • Roll No. 89 • Page 5 of 10 -->
<div style="page-break-after: always;"></div>

<!-- ============================== PAGE 6 ============================== -->

### 5.0 Implementation of PHP & Database: Why and How

#### 5.1 Why PHP and MySQL were Implemented
Client-side technologies (HTML, CSS, JavaScript) execute entirely within the user's browser and cannot securely persist data across sessions or protect confidential back-office records. PHP and MySQL were implemented for:
- **Server-Side Form Processing:** Student inquiries and career suggestions submitted on `contact.html` must be received, parsed, validated, and stored permanently on the server.
- **Defense Against Malicious Injections:** Client-side validation can be bypassed by disabling JavaScript. Server-side PHP sanitizes all inputs against Cross-Site Scripting (XSS) and SQL injection.
- **Administrative Access Control:** An administrative portal requires protected session authentication (`session_start()`) so only authorized faculty can view incoming messages.

#### 5.2 How PHP and MySQL were Implemented
PHP 8.2 handles POST requests asynchronously, returning structured JSON payloads to the client without page reload. The MySQL database comprises two normalized tables:

| Table Name | Field Identifier | Data Type | Constraints & Purpose |
| :--- | :--- | :--- | :--- |
| **contacts**<br><small>Student inquiries</small> | `id`<br>`name`, `email`<br>`message`<br>`submitted_at` | `INT(11)`<br>`VARCHAR(100)`, `VARCHAR(150)`<br>`TEXT`<br>`TIMESTAMP` | `PRIMARY KEY, AUTO_INCREMENT`<br>`NOT NULL, Validated email format`<br>`Sanitized inquiry text body`<br>`DEFAULT CURRENT_TIMESTAMP` |
| **career_suggestions**<br><small>Community suggestions</small> | `id`<br>`career_title`, `category`<br>`description` | `INT(11)`<br>`VARCHAR(150)`, `VARCHAR(50)`<br>`TEXT` | `PRIMARY KEY, AUTO_INCREMENT`<br>`Proposed career title and primary domain`<br>`Student explanation of vocational viability` |

```php
// Server-Side Sanitization & Validation Handler (php/contact-process.php)
$name    = htmlspecialchars(strip_tags(trim($_POST['name'])), ENT_QUOTES, 'UTF-8');
$email   = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
$message = htmlspecialchars(strip_tags(trim($_POST['message'])), ENT_QUOTES, 'UTF-8');

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die(json_encode(["status" => "error", "message" => "Please enter a valid email address."]));
}
$stmt = $conn->prepare("INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $name, $email, $message);
$stmt->execute();
```

<!-- Running Footer: Department of Computer Science • S.Y. B.Sc. CS • Roll No. 89 • Page 6 of 10 -->
<div style="page-break-after: always;"></div>

<!-- ============================== PAGE 7 ============================== -->

### 6.0 Web Hosting & CI/CD Deployment Process

#### 6.1 Local Development Environment (XAMPP)
The platform was developed and rigorously debugged locally using the **XAMPP** stack on Windows:
- **Apache Web Server:** Configured on port `8080` (`http://localhost:8080/`) to serve static assets and proxy PHP requests.
- **MariaDB / MySQL:** Running on port `3306` with phpMyAdmin used for database provisioning, indexing, and schema validation.
- **Local Testing:** Ensured zero runtime console errors, verified database insertion, and checked asynchronous fetch promises locally before cloud staging.

#### 6.2 Cloud Web Hosting Infrastructure (InfinityFree)
To ensure round-the-clock accessibility for college evaluators and students, the application was deployed to **InfinityFree** cloud hosting:
- **Production Server:** Linux-based Apache web server with native PHP 8.2 runtime and remote MySQL database storage.
- **Live Production URL:** `https://career-kuch-hatke.infinityfreeapp.com`.
- **Web Server Configuration (`.htaccess`):** Configured URL rewriting, gzip compression, and MIME types for web fonts and JSON data.

#### 6.3 Automated CI/CD Pipeline (GitHub Actions)
Manual FTP file transfers are prone to human omission and file corruption. To ensure modern professional deployment, an automated **Continuous Integration and Continuous Deployment (CI/CD)** pipeline was established:
- **Version Control:** Source code is tracked using Git and pushed to GitHub: `snehaprajapati-dev/career-kuch-hatke`.
- **Workflow Automation (`.github/workflows/deploy.yml`):** Configured a GitHub Actions runner that automatically listens for push events to the `main` branch.
- **Encrypted Secret Authentication:** Securely injects encrypted repository secrets (`FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`) into an FTPS deployment action, publishing updated files to production servers within seconds.

```yaml
# GitHub Actions CI/CD Pipeline (.github/workflows/deploy.yml)
name: Deploy to InfinityFree
on:
  push:
    branches: [ main ]
jobs:
  web-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Source Code
        uses: actions/checkout@v3
      - name: Automated FTPS Sync
        uses: SamKirkland/FTP-Deploy-Action@v4.3.4
        with:
          server: ${{ secrets.FTP_SERVER }}
          username: ${{ secrets.FTP_USERNAME }}
          password: ${{ secrets.FTP_PASSWORD }}
          server-dir: htdocs/
```

<!-- Running Footer: Department of Computer Science • S.Y. B.Sc. CS • Roll No. 89 • Page 7 of 10 -->
<div style="page-break-after: always;"></div>

<!-- ============================== PAGE 8 ============================== -->

### 7.0 System Testing & Quality Assurance

#### 7.1 Quality Assurance & Verification Matrix
Comprehensive quality assurance protocols were executed across development and production staging:

| Testing Domain | Verification Procedure | Outcome & Status |
| :--- | :--- | :--- |
| **Cross-Browser Compatibility** | Audited on Google Chrome 120+, Mozilla Firefox 122+, Microsoft Edge, and Apple Safari iOS. | **Passed:** Consistent layout rendering, flex alignments, and CSS variable inheritance. |
| **Mobile Responsiveness** | Simulated viewports from 360px (mobile) to 768px (tablet) and 1440px (desktop monitor). | **Passed:** Equalized card heights, centered footer columns, touch tap targets. |
| **Syntax & Runtime Integrity** | Validated via Node.js compiler (`node -c script.js`) and browser dev tools. | **Passed:** Zero syntax errors, uncaught promise rejections, or console exceptions. |
| **Input Validation & Security** | Tested SQL injection and XSS payloads (`<script>`) in feedback and suggestion inputs. | **Passed:** Inputs strictly escaped and sanitized; invalid emails rejected. |
| **Cache Invalidation Strategy** | Appended explicit cache-busting query version parameters (`?v=6.0`) to script/style tags. | **Passed:** Instant updates on client devices without stale browser caching. |

#### 7.2 Algorithmic Verification: Search & Bookmarking Engines
- **Synonym Mapping Test:** Searching conversational keywords (e.g., *"coding"*, *"camera"*, *"food"*) correctly retrieves *"Ethical Hacker"*, *"Wildlife Photographer"*, and *"Food Stylist"* via the pre-indexed keyword map.
- **Bookmark Persistence Test:** Saving bookmarks, refreshing the browser, and switching between categories verified that `localStorage` array serialization correctly maintains saved states.
- **Empty State Test:** Selecting the "Bookmarked" filter with zero saved careers correctly presents a helpful prompt with a working "View All Careers" reset button.

<!-- Running Footer: Department of Computer Science • S.Y. B.Sc. CS • Roll No. 89 • Page 8 of 10 -->
<div style="page-break-after: always;"></div>

<!-- ============================== PAGE 9 ============================== -->

### 8.0 Website User Interface Screenshots (3 Core Modules)

The following screenshots showcase the primary responsive user interfaces implemented across the **Career Kuch Hatke** web platform (captured live from production deployment):

#### Figure 8.1: Home Page Interface (`index.html`)
Showcases the hero banner, interactive "Rat Race vs. Hatke Career" problem-solution comparative dilemma matrix, and 5 domain category spotlights.
![Figure 8.1: Home Page Interface](images/screenshot-home.png)

#### Figure 8.2: Dynamic Career Roadmap Detail (`career-detail.html`)
Illustrates AI Prompt Engineer roadmap, salary packages, and WhatsApp parent pitch tool.
![Figure 8.2: Career Detail Roadmap](images/screenshot-roadmap.png)

#### Figure 8.3: Contact & Suggestion Form (`contact.html`)
Displays user feedback form with client regex validation and server-side sanitized submission.
![Figure 8.3: Contact & Suggestion Form](images/screenshot-contact.png)

<!-- Running Footer: Department of Computer Science • S.Y. B.Sc. CS • Roll No. 89 • Page 9 of 10 -->
<div style="page-break-after: always;"></div>

<!-- ============================== PAGE 10 ============================== -->

### 9.0 Limitations, Future Scope, Conclusion & References

#### 9.1 Current System Limitations
- **Client-Side Content Storage:** Career information currently resides in structured client-side JavaScript objects rather than a headless database CMS.
- **Device-Specific Bookmarks:** Bookmarks rely on browser `localStorage` and do not synchronize automatically across separate devices.

#### 9.2 Future Scope & Planned Enhancements
1. **Cloud-Synchronized Student Accounts:** User authentication with hashed passwords (`password_hash`) to persist bookmarks and quiz results across devices.
2. **Direct Mentorship Scheduling:** Integrated calendar booking allowing students to schedule 1-on-1 counseling video calls with practicing domain professionals.
3. **AI Career Chatbot:** LLM integration to answer student queries regarding college entrance cutoffs, portfolio requirements, and job outlooks.

#### 9.3 Academic Conclusion
The **Career Kuch Hatke** project successfully fulfills all academic specifications stipulated for the B.Sc. Computer Science Field Project curriculum (Academic Year 2026–2027). It demonstrates a complete, production-grade synthesis of semantic HTML5, responsive CSS3 Grid and Flexbox, asynchronous JavaScript event handling, persistent browser storage, and secure PHP 8.2 / MySQL backend administration. By addressing an authentic, widespread dilemma in the Indian student community, the project delivers high social utility paired with technical competency.

#### 9.4 Academic References & Authoritative Citations
1. **Glassdoor India & AmbitionBox:** 2025–2026 Indian Industry Compensation & Salary Benchmark Reports for emerging tech and creative vocations.
2. **University Grants Commission (UGC) & AICTE:** National institutional accreditation directories, degree prerequisites, and recognized higher education programs.
3. **Mozilla Developer Network (MDN Web Docs):** HTML5 Semantics, CSS Flexible Box, CSS Grid, and Web Storage API documentation.
4. **The PHP Group:** Official PHP 8.2 Documentation — Filter Functions, Data Sanitization, Prepared Statements, and Session Security Standards.
5. **MySQL Documentation:** MySQL 8.0 Reference Manual — Relational Schema Design, Foreign Keys, and InnoDB Storage Engine.

<!-- Running Footer: Department of Computer Science • S.Y. B.Sc. CS • Roll No. 89 • Page 10 of 10 -->
