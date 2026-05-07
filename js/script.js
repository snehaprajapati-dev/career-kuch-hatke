// ============================================
// Wait for page to load before running code
// ============================================
document.addEventListener("DOMContentLoaded", function() {

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
  const linkPage = link.getAttribute("href");

  if (linkPage === currentPage) {
    link.classList.add("active");
  }
});

/* ============================================
   CAREER FILTER & SEARCH - Explore Page
   ============================================ */
if (document.querySelector('.filter-btn')) {

  // ✅ Declare all variables ONCE at the top
  const filterButtons = document.querySelectorAll('.filter-btn');
  const careerCards = document.querySelectorAll('.career-card');
  const searchInput = document.getElementById('career-search');
  const countSpan = document.getElementById('count');

  // ══════════════════════════════════════════
  // FILTER BUTTONS
  // ══════════════════════════════════════════
  filterButtons.forEach(button => {
    
    button.addEventListener('click', function() {
      
      // Remove 'active' from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add 'active' to clicked button
      this.classList.add('active');
      
      // Get filter value
      const filterValue = this.getAttribute('data-filter');
      
      console.log('Filter clicked:', filterValue);
      
      // Count visible cards
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
      
      // Update counter
      countSpan.textContent = visibleCount;
      console.log('Showing', visibleCount, 'careers');
      
    });
    
  }); // ✅ Properly closes forEach

  // ══════════════════════════════════════════
  // SEARCH BOX
  // ══════════════════════════════════════════
  if (searchInput && countSpan) {
    
    searchInput.addEventListener('input', function() {
      
      const searchTerm = this.value.toLowerCase();
      let visibleCount = 0;
      
      console.log('Searching for:', searchTerm);
      
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
      console.log('Found', visibleCount, 'careers');
      
    });
    
  }

  // ══════════════════════════════════════════
  // CATEGORY FROM HOME PAGE
  // ══════════════════════════════════════════
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get('category');

  if (category) {
    const targetButton = document.querySelector(`.filter-btn[data-filter="${category}"]`);
    if (targetButton) {
      targetButton.click();
    }
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

  let scores = {
    creative: 0,
    tech: 0,
    science: 0,
    business: 0,
    unique: 0
  };

  function showQuestion(index) {
    questions.forEach((q, i) => {
      q.style.display = i === index ? "block" : "none";
    });

    currentText.textContent = index + 1;
    progressFill.style.width = ((index + 1) / totalQuestions) * 100 + "%";

    prevBtn.style.display = index === 0 ? "none" : "inline-block";

    if (index === totalQuestions - 1) {
      nextBtn.textContent = "See Result →";
    } else {
      nextBtn.textContent = "Next →";
    }
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      const selected = questions[currentQuestion].querySelector("input:checked");

      if (!selected) {
        alert("Please select an option before continuing 😊");
        return;
      }

      if (currentQuestion < totalQuestions - 1) {
        currentQuestion++;
        showQuestion(currentQuestion);
      } else {
        calculateResult();
      }
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion(currentQuestion);
      }
    });
  }

  function calculateResult() {
    scores = { creative:0, tech:0, science:0, business:0, unique:0 };

    const selectedAnswers = document.querySelectorAll("input[type='radio']:checked");
    selectedAnswers.forEach(answer => {
      const category = answer.dataset.category;
      scores[category]++;
    });

    let topCategory = Object.keys(scores).reduce((a, b) =>
      scores[a] > scores[b] ? a : b
    );

    showResult(topCategory);
  }

  function resetQuiz() {
    document.querySelectorAll("input[type='radio']").forEach(input => {
      input.checked = false;
    });

    currentQuestion = 0;
    showQuestion(currentQuestion);

  resultSection.style.display = "none";
document.getElementById("quiz-section").style.display = "block";

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Make resetQuiz available globally
  window.resetQuiz = resetQuiz;

  function showResult(category) {
    document.getElementById("quiz-section").style.display = "none";
    resultSection.style.display = "block";

    window.scrollTo({ top: 0, behavior: "smooth" });

    let resultHTML = "";

    if (category === "creative") {
      resultHTML = `
        <h3>You are a Creative Mind 🎨</h3>
        <p>You thrive on imagination, aesthetics, and expression.</p>
        <div class="career-suggestions">
          <a href="explore.html?category=creative">Explore Creative Careers →</a>
        </div>
        <button class="retake-btn" onclick="resetQuiz()">Retake Quiz</button>
      `;
    } else if (category === "tech") {
      resultHTML = `
        <h3>You are a Tech Explorer 💻</h3>
        <p>You love solving problems using technology.</p>
        <div class="career-suggestions">
          <a href="explore.html?category=tech">Explore Tech Careers →</a>
        </div>
        <button class="retake-btn" onclick="resetQuiz()">Retake Quiz</button>
      `;
    } else if (category === "science") {
      resultHTML = `
        <h3>You are a Curious Scientist 🔬</h3>
        <p>You love discovering how the world works.</p>
        <div class="career-suggestions">
          <a href="explore.html?category=science">Explore Science Careers →</a>
        </div>
        <button class="retake-btn" onclick="resetQuiz()">Retake Quiz</button>
      `;
    } else if (category === "business") {
      resultHTML = `
        <h3>You are a Business Strategist 💰</h3>
        <p>You think about growth, money, and smart decisions.</p>
        <div class="career-suggestions">
          <a href="explore.html?category=business">Explore Business Careers →</a>
        </div>
        <button class="retake-btn" onclick="resetQuiz()">Retake Quiz</button>
      `;
    } else if (category === "unique") {
      resultHTML = `
        <h3>You are a Bold Adventurer 🎭</h3>
        <p>You love freedom, adventure, and unconventional paths.</p>
        <div class="career-suggestions">
          <a href="explore.html?category=unique">Explore Unique Careers →</a>
        </div>
        <button class="retake-btn" onclick="resetQuiz()">Retake Quiz</button>
      `;
    }

    resultContent.innerHTML = resultHTML;
  }

  showQuestion(currentQuestion);
}

function startQuiz() {
  document.getElementById("quiz-intro").style.display = "none";
  document.getElementById("quiz-section").style.display = "block";
  document.getElementById("result").style.display = "none";

  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.startQuiz = startQuiz;

/* ============================================
   CONTACT PAGE - FORM TOGGLE & SUBMISSION
   ============================================ */

// Show specific form
function showForm(formType) {
  const optionsSection = document.querySelector('.contact-options-section');
  const contactSection = document.getElementById('contact-form-section');
  const suggestionSection = document.getElementById('suggestion-form-section');
  
  // Hide options
  optionsSection.style.display = 'none';
  
  // Show selected form
  if (formType === 'contact') {
    contactSection.style.display = 'block';
    suggestionSection.style.display = 'none';
  } else if (formType === 'suggestion') {
    suggestionSection.style.display = 'block';
    contactSection.style.display = 'none';
  }
  
  // Smooth scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Hide form and return to options
function hideForm() {
  const optionsSection = document.querySelector('.contact-options-section');
  const contactSection = document.getElementById('contact-form-section');
  const suggestionSection = document.getElementById('suggestion-form-section');
  
  contactSection.style.display = 'none';
  suggestionSection.style.display = 'none';
  optionsSection.style.display = 'block';
  
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Reset to options after success
function resetToOptions() {

  // Reset both forms completely
  const contactForm = document.querySelector('.contact-form');
  const suggestionForm = document.querySelector('.suggestion-form');

  if (contactForm) contactForm.reset();
  if (suggestionForm) suggestionForm.reset();

  // Hide success messages
  document.getElementById('contact-success').style.display = 'none';
  document.getElementById('suggestion-success').style.display = 'none';

  // Show forms again
  if (contactForm) contactForm.style.display = 'block';
  if (suggestionForm) suggestionForm.style.display = 'block';

  // Go back to options
  hideForm();
}

// Contact Form Submission
if (document.querySelector(".contact-form")) {
  const contactForm = document.querySelector(".contact-form");
  const contactSuccess = document.getElementById("contact-success");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    console.log('Contact form submitted!');

    // Hide form, show success
    contactForm.style.display = "none";
    contactSuccess.style.display = "block";

    // Scroll to success message
    contactSuccess.scrollIntoView({ behavior: "smooth" });

    // Optional: Confetti
    createConfetti();

    // Reset form
    setTimeout(() => {
      contactForm.reset();
    }, 100);
  });
}

// Suggestion Form Submission
if (document.querySelector(".suggestion-form")) {
  const suggestionForm = document.querySelector(".suggestion-form");
  const suggestionSuccess = document.getElementById("suggestion-success");

  suggestionForm.addEventListener("submit", function (e) {
    e.preventDefault();

    console.log('Suggestion form submitted!');

    // Hide form, show success
    suggestionForm.style.display = "none";
    suggestionSuccess.style.display = "block";

    // Scroll to success message
    suggestionSuccess.scrollIntoView({ behavior: "smooth" });

    // Optional: Confetti
    createConfetti();

    // Reset form
    setTimeout(() => {
      suggestionForm.reset();
    }, 100);
  });
}

window.showForm = showForm;
window.hideForm = hideForm;
window.resetToOptions = resetToOptions;

}); // ✅ Closes DOMContentLoaded