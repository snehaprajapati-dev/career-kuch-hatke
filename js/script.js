// Global reCAPTCHA widget IDs
window.contactRecaptchaWidget = undefined;
window.suggestionRecaptchaWidget = undefined;
<<<<<<< HEAD

=======
// ============================================
// Wait for page to load before running code
// ============================================
>>>>>>> 7601500ab365b1aff109818bfca788b3934e5e0c
document.addEventListener("DOMContentLoaded", function() {

/* ============================================
   THEME TOGGLE
   ============================================ */
var toggleBtn = document.getElementById('themeToggle');
var html = document.documentElement;

function applyTheme(theme) {
    if (theme === 'dark') {
        html.setAttribute('data-theme', 'dark');
        if (toggleBtn) toggleBtn.textContent = '☀️';
    } else {
        html.removeAttribute('data-theme');
        if (toggleBtn) toggleBtn.textContent = '🌙';
    }
}

applyTheme(localStorage.getItem('ckh_theme') || 'light');

if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
        var next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        localStorage.setItem('ckh_theme', next);
        applyTheme(next);
    });
}

/* ============================================
   HAMBURGER MENU
   ============================================ */
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const body = document.body;

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        body.classList.toggle('menu-open');
    });

    const navLinks = document.querySelectorAll('.nav-menu li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            body.classList.remove('menu-open');
        });
    });

    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });
}

/* ============================================
   NAVBAR ACTIVE LINK
   ============================================ */
const currentPage = window.location.pathname.split("/").pop() || "index.html";
const navLinksActive = document.querySelectorAll(".nav-menu a");
navLinksActive.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});

/* ============================================
   CAREER FILTER & SEARCH - Explore Page
   ============================================ */
if (document.querySelector('.filter-btn')) {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const careerCards = document.querySelectorAll('.career-card');
    const searchInput = document.getElementById('career-search');
    const countSpan = document.getElementById('count');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const filterValue = this.getAttribute('data-filter');
            let visibleCount = 0;
            careerCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                if (filterValue === 'all' || cardCategory === filterValue) {
                    card.style.display = 'block';
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            });
            if (countSpan) countSpan.textContent = visibleCount;
        });
    });

    if (searchInput && countSpan) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            let visibleCount = 0;
            careerCards.forEach(card => {
                const careerName = card.querySelector('h3').textContent.toLowerCase();
                if (careerName.includes(searchTerm)) {
                    card.style.display = 'block';
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            });
            countSpan.textContent = visibleCount;
        });
    }

    const urlParamsExplore = new URLSearchParams(window.location.search);
    const category = urlParamsExplore.get('category');
    if (category) {
        const targetButton = document.querySelector(`.filter-btn[data-filter="${category}"]`);
        if (targetButton) targetButton.click();
    }
}

/* ============================================
   QUIZ LOGIC
   ============================================ */
if (document.querySelector('.question')) {
    const questions = document.querySelectorAll(".question");
    const nextBtn = document.getElementById("next-btn");
    const prevBtn = document.getElementById("prev-btn");
    const progressFill = document.getElementById("progress");
    const currentText = document.getElementById("current");
    const resultSection = document.getElementById("result");
    const resultContent = document.getElementById("result-content");

    let currentQuestion = 0;
    const totalQuestions = questions.length;
    let scores = { creative: 0, tech: 0, science: 0, business: 0, unique: 0 };

    function showQuestion(index) {
        questions.forEach((q, i) => { q.style.display = i === index ? "block" : "none"; });
        if (currentText) currentText.textContent = index + 1;
        if (progressFill) progressFill.style.width = ((index + 1) / totalQuestions) * 100 + "%";
        if (prevBtn) prevBtn.style.display = index === 0 ? "none" : "inline-block";
        if (nextBtn) nextBtn.textContent = index === totalQuestions - 1 ? "See Result →" : "Next →";
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            const selected = questions[currentQuestion].querySelector("input:checked");
            if (!selected) { alert("Please select an option before continuing 😊"); return; }
            if (currentQuestion < totalQuestions - 1) { currentQuestion++; showQuestion(currentQuestion); }
            else { calculateResult(); }
        });
    }
    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            if (currentQuestion > 0) { currentQuestion--; showQuestion(currentQuestion); }
        });
    }

    function calculateResult() {
        scores = { creative: 0, tech: 0, science: 0, business: 0, unique: 0 };
        document.querySelectorAll("input[type='radio']:checked").forEach(answer => {
            const category = answer.dataset.category;
            scores[category]++;
        });
        let topCategory = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
        showResult(topCategory);
    }

    function resetQuiz() {
        document.querySelectorAll("input[type='radio']").forEach(input => { input.checked = false; });
        currentQuestion = 0;
        showQuestion(currentQuestion);
        if (resultSection) resultSection.style.display = "none";
        const quizSection = document.getElementById("quiz-section");
        if (quizSection) quizSection.style.display = "block";
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    window.resetQuiz = resetQuiz;

    function showResult(category) {
        const quizSection = document.getElementById("quiz-section");
        if (quizSection) quizSection.style.display = "none";
        if (resultSection) resultSection.style.display = "block";
        window.scrollTo({ top: 0, behavior: "smooth" });

        const resultMap = {
            creative: { title: "You are a Creative Mind 🎨", desc: "You thrive on imagination, aesthetics, and expression.", link: "creative" },
            tech:     { title: "You are a Tech Explorer 💻",  desc: "You love solving problems using technology.", link: "tech" },
            science:  { title: "You are a Curious Scientist 🔬", desc: "You love discovering how the world works.", link: "science" },
            business: { title: "You are a Business Strategist 💰", desc: "You think about growth, money, and smart decisions.", link: "business" },
            unique:   { title: "You are a Bold Adventurer 🎭", desc: "You love freedom, adventure, and unconventional paths.", link: "unique" }
        };

        const r = resultMap[category] || resultMap['unique'];
        if (resultContent) {
            resultContent.innerHTML = `
                <h3>${r.title}</h3>
                <p>${r.desc}</p>
                <div class="career-suggestions">
                    <a href="explore.html?category=${r.link}">Explore ${r.link.charAt(0).toUpperCase() + r.link.slice(1)} Careers →</a>
                </div>
                <button class="retake-btn" onclick="resetQuiz()">Retake Quiz</button>
            `;
        }
    }
    showQuestion(currentQuestion);
}

function startQuiz() {
    const intro = document.getElementById("quiz-intro");
    const quizSection = document.getElementById("quiz-section");
    const result = document.getElementById("result");
    if (intro) intro.style.display = "none";
    if (quizSection) quizSection.style.display = "block";
    if (result) result.style.display = "none";
    window.scrollTo({ top: 0, behavior: "smooth" });
}
window.startQuiz = startQuiz;

/* ============================================
   RECAPTCHA RENDERING
   ============================================ */
<<<<<<< HEAD

window.onRecaptchaLoad = function() {
    console.log('reCAPTCHA API loaded and ready');
};

function renderContactRecaptcha() {
    if (typeof grecaptcha === 'undefined' || typeof grecaptcha.render !== 'function') {
        console.log('grecaptcha not ready');
        return;
    }
    var container = document.getElementById('recaptcha-contact');
    if (!container) return;

    // Already rendered — just reset it
    if (window.contactRecaptchaWidget !== undefined && window.contactRecaptchaWidget !== null) {
        try {
            grecaptcha.reset(window.contactRecaptchaWidget);
            console.log('Contact reCAPTCHA reset, ID:', window.contactRecaptchaWidget);
        } catch(e) {
            // If reset fails, force re-render
            window.contactRecaptchaWidget = undefined;
            container.innerHTML = '';
            window.contactRecaptchaWidget = grecaptcha.render('recaptcha-contact', {
                'sitekey': '6LerTgItAAAAAAGoMXY2M-csxr4o20ElcBXv4PDq'
            });
        }
        return;
    }

    // First render
    try {
        window.contactRecaptchaWidget = grecaptcha.render('recaptcha-contact', {
            'sitekey': '6LerTgItAAAAAAGoMXY2M-csxr4o20ElcBXv4PDq'
        });
        console.log('Contact reCAPTCHA rendered, ID:', window.contactRecaptchaWidget);
    } catch(e) {
        console.error('Error rendering contact reCAPTCHA:', e);
    }
}

function renderSuggestionRecaptcha() {
    if (typeof grecaptcha === 'undefined' || typeof grecaptcha.render !== 'function') {
        console.log('grecaptcha not ready');
        return;
    }
    var container = document.getElementById('recaptcha-suggestion');
    if (!container) return;

    // Already rendered — just reset it
    if (window.suggestionRecaptchaWidget !== undefined && window.suggestionRecaptchaWidget !== null) {
        try {
            grecaptcha.reset(window.suggestionRecaptchaWidget);
            console.log('Suggestion reCAPTCHA reset, ID:', window.suggestionRecaptchaWidget);
        } catch(e) {
            // If reset fails, force re-render
            window.suggestionRecaptchaWidget = undefined;
            container.innerHTML = '';
            window.suggestionRecaptchaWidget = grecaptcha.render('recaptcha-suggestion', {
                'sitekey': '6LerTgItAAAAAAGoMXY2M-csxr4o20ElcBXv4PDq'
            });
        }
        return;
    }

    // First render
    try {
        window.suggestionRecaptchaWidget = grecaptcha.render('recaptcha-suggestion', {
            'sitekey': '6LerTgItAAAAAAGoMXY2M-csxr4o20ElcBXv4PDq'
        });
        console.log('Suggestion reCAPTCHA rendered, ID:', window.suggestionRecaptchaWidget);
    } catch(e) {
        console.error('Error rendering suggestion reCAPTCHA:', e);
    }
}

/* ============================================
   CONTACT PAGE - FORM TOGGLE
   ============================================ */

=======
    
    /* ============================================
   RECAPTCHA EXPLICIT RENDERING
   ============================================ */
var contactRecaptchaWidget;
var suggestionRecaptchaWidget;

window.onRecaptchaLoad = function() {
    // Don't render yet - wait until form is visible
    console.log('reCAPTCHA API loaded');
};

function renderContactRecaptcha() {
    if (typeof grecaptcha === 'undefined') {
        console.error('reCAPTCHA not loaded');
        return;
    }
    
    var container = document.getElementById('recaptcha-contact');
    if (!container) return;
    
    // Check if already rendered
    if (contactRecaptchaWidget !== undefined) {
        grecaptcha.reset(contactRecaptchaWidget);
        return;
    }
    
    contactRecaptchaWidget = grecaptcha.render('recaptcha-contact', {
        'sitekey': '6LerTgItAAAAAAGoMXY2M-csxr4o20ElcBXv4PDq'
    });
}

function renderSuggestionRecaptcha() {
    if (typeof grecaptcha === 'undefined') {
        console.error('reCAPTCHA not loaded');
        return;
    }
    
    var container = document.getElementById('recaptcha-suggestion');
    if (!container) return;
    
    // Check if already rendered
    if (suggestionRecaptchaWidget !== undefined) {
        grecaptcha.reset(suggestionRecaptchaWidget);
        return;
    }
    
    suggestionRecaptchaWidget = grecaptcha.render('recaptcha-suggestion', {
        'sitekey': '6LerTgItAAAAAAGoMXY2M-csxr4o20ElcBXv4PDq'
    });
}
    
>>>>>>> 7601500ab365b1aff109818bfca788b3934e5e0c
function showForm(formType) {
    const optionsSection   = document.querySelector('.contact-options-section');
    const contactSection   = document.getElementById('contact-form-section');
    const suggestionSection = document.getElementById('suggestion-form-section');

    if (optionsSection) optionsSection.style.display = 'none';

    if (formType === 'contact') {
        if (contactSection)    contactSection.style.display = 'block';
        if (suggestionSection) suggestionSection.style.display = 'none';
<<<<<<< HEAD
        setTimeout(function() {
            renderContactRecaptcha();
            if (window.initContactValidation) window.initContactValidation();
        }, 200);

    } else if (formType === 'suggestion') {
        if (suggestionSection) suggestionSection.style.display = 'block';
        if (contactSection)    contactSection.style.display = 'none';
        setTimeout(function() {
            renderSuggestionRecaptcha();
            if (window.initSuggestionValidation) window.initSuggestionValidation();
=======
        
        // ✅ RENDER RECAPTCHA AFTER FORM IS VISIBLE
        setTimeout(function() {
            renderContactRecaptcha();
            if (window.initContactValidation) {
                window.initContactValidation();
            }
        }, 200);
        
    } else if (formType === 'suggestion') {
        if (suggestionSection) suggestionSection.style.display = 'block';
        if (contactSection) contactSection.style.display = 'none';
        
        // ✅ RENDER RECAPTCHA AFTER FORM IS VISIBLE
        setTimeout(function() {
            renderSuggestionRecaptcha();
            if (window.initSuggestionValidation) {
                window.initSuggestionValidation();
            }
>>>>>>> 7601500ab365b1aff109818bfca788b3934e5e0c
        }, 200);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function hideForm() {
    const optionsSection   = document.querySelector('.contact-options-section');
    const contactSection   = document.getElementById('contact-form-section');
    const suggestionSection = document.getElementById('suggestion-form-section');

    if (contactSection)    contactSection.style.display = 'none';
    if (suggestionSection) suggestionSection.style.display = 'none';
    if (optionsSection)    optionsSection.style.display = 'block';

    // Reset BOTH reCAPTCHAs so switching forms always works cleanly
    if (typeof grecaptcha !== 'undefined') {
        if (window.contactRecaptchaWidget !== undefined && window.contactRecaptchaWidget !== null) {
            try { grecaptcha.reset(window.contactRecaptchaWidget); } catch(e) {}
        }
        if (window.suggestionRecaptchaWidget !== undefined && window.suggestionRecaptchaWidget !== null) {
            try { grecaptcha.reset(window.suggestionRecaptchaWidget); } catch(e) {}
        }
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function resetToOptions() {
    const contactForm    = document.querySelector('.contact-form');
    const suggestionForm = document.querySelector('.suggestion-form');

    if (contactForm)    contactForm.reset();
    if (suggestionForm) suggestionForm.reset();

    const cs = document.getElementById('contact-success');
    const ss = document.getElementById('suggestion-success');
    if (cs) cs.style.display = 'none';
    if (ss) ss.style.display = 'none';

    if (contactForm)    contactForm.style.display = 'block';
    if (suggestionForm) suggestionForm.style.display = 'block';

    hideForm();
}

window.showForm       = showForm;
window.hideForm       = hideForm;
window.resetToOptions = resetToOptions;

/* ============================================
   SUCCESS / ERROR HANDLING AFTER PHP REDIRECT
   ============================================ */
const urlParams = new URLSearchParams(window.location.search);
const success   = urlParams.get('success');
const error     = urlParams.get('error');
const formParam = urlParams.get('form');

// When showing contact success
if (success === 'contact') {
<<<<<<< HEAD
    showForm('contact');
    const contactForm    = document.querySelector('.contact-form');
=======
    showForm('contact');  // This will now re-init validation
    const contactForm = document.querySelector('.contact-form');
>>>>>>> 7601500ab365b1aff109818bfca788b3934e5e0c
    const contactSuccess = document.getElementById('contact-success');
    if (contactForm)    contactForm.style.display = 'none';
    if (contactSuccess) contactSuccess.style.display = 'block';
}

// When showing suggestion success
if (success === 'suggestion') {
<<<<<<< HEAD
    showForm('suggestion');
    const suggestionForm    = document.querySelector('.suggestion-form');
=======
    showForm('suggestion');  // This will now re-init validation
    const suggestionForm = document.querySelector('.suggestion-form');
>>>>>>> 7601500ab365b1aff109818bfca788b3934e5e0c
    const suggestionSuccess = document.getElementById('suggestion-success');
    if (suggestionForm)    suggestionForm.style.display = 'none';
    if (suggestionSuccess) suggestionSuccess.style.display = 'block';
}
/* ============================================
   HANDLE ERROR MESSAGES (reCAPTCHA)
   ============================================ */
const error = urlParams.get('error');
const formType = urlParams.get('form');

if (error === 'captcha') {
<<<<<<< HEAD
    const optionsSection = document.querySelector('.contact-options-section');
    if (optionsSection) optionsSection.style.display = 'none';

    var targetFormId = formParam === 'suggestion' ? 'suggestion-form-section' : 'contact-form-section';
    var targetFormClass = formParam === 'suggestion' ? '.suggestion-form' : '.contact-form';

    var targetSection = document.getElementById(targetFormId);
    var targetForm    = document.querySelector(targetFormClass);

    if (targetSection) targetSection.style.display = 'block';

    if (formParam === 'suggestion') {
        setTimeout(function() { renderSuggestionRecaptcha(); }, 200);
    } else {
        setTimeout(function() { renderContactRecaptcha(); }, 200);
    }

    if (targetForm) {
        var errorBox = document.createElement('div');
        errorBox.style.cssText = 'background:#ffe6e6;border:2px solid #c74b50;border-radius:8px;padding:15px;margin-bottom:20px;text-align:center;';
        errorBox.innerHTML = '<strong style="color:#c74b50;">⚠️ Please complete the "I\'m not a robot" verification before submitting.</strong>';
        targetForm.insertBefore(errorBox, targetForm.firstChild);
        setTimeout(function() { errorBox.remove(); window.history.replaceState({}, document.title, 'contact.html'); }, 6000);
    }

    if (targetSection) {
        setTimeout(function() { targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 100);
    }
}

}); // End DOMContentLoaded
=======
    // Hide options section
    const optionsSection = document.querySelector('.contact-options-section');
    if (optionsSection) optionsSection.style.display = 'none';
    
    if (formType === 'contact') {
        // Show contact form
        const contactSection = document.getElementById('contact-form-section');
        if (contactSection) contactSection.style.display = 'block';
        
        // Create error box
        const contactForm = document.querySelector('.contact-form');
        if (contactForm) {
            const errorBox = document.createElement('div');
            errorBox.style.cssText = 'background:#ffe6e6; border:2px solid #c74b50; border-radius:8px; padding:15px; margin-bottom:20px; text-align:center; animation: shake 0.5s;';
            errorBox.innerHTML = '<strong style="color:#c74b50; font-size:1rem;">⚠️ Please complete the "I\'m not a robot" verification before submitting.</strong>';
            contactForm.insertBefore(errorBox, contactForm.firstChild);
            
            // Scroll to form
            setTimeout(function() {
                contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
            
            // Remove after 6 seconds
            setTimeout(function() {
                errorBox.remove();
                window.history.replaceState({}, document.title, 'contact.html');
            }, 6000);
        }
    } else if (formType === 'suggestion') {
        // Show suggestion form
        const suggestionSection = document.getElementById('suggestion-form-section');
        if (suggestionSection) suggestionSection.style.display = 'block';
        
        // Create error box
        const suggestionForm = document.querySelector('.suggestion-form');
        if (suggestionForm) {
            const errorBox = document.createElement('div');
            errorBox.style.cssText = 'background:#ffe6e6; border:2px solid #c74b50; border-radius:8px; padding:15px; margin-bottom:20px; text-align:center; animation: shake 0.5s;';
            errorBox.innerHTML = '<strong style="color:#c74b50; font-size:1rem;">⚠️ Please complete the "I\'m not a robot" verification before submitting.</strong>';
            suggestionForm.insertBefore(errorBox, suggestionForm.firstChild);
            
            // Scroll to form
            setTimeout(function() {
                suggestionSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
            
            // Remove after 6 seconds
            setTimeout(function() {
                errorBox.remove();
                window.history.replaceState({}, document.title, 'contact.html');
            }, 6000);
        }
    }
}

}); // Closes DOMContentLoaded - THIS IS THE ONLY CLOSING BRACKET
>>>>>>> 7601500ab365b1aff109818bfca788b3934e5e0c
