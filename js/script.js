// Clean up InfinityFree security query param (?i=1, ?i=2) from the URL bar
(function cleanInfinityFreeParam() {
  try {
    if (window.location.search && window.location.search.includes("i=")) {
      var url = new URL(window.location.href);
      url.searchParams.delete("i");
      var cleanUrl = url.pathname + (url.search ? url.search : "") + url.hash;
      window.history.replaceState({}, document.title, cleanUrl);
    }
  } catch (e) {}
})();

// Global reCAPTCHA widget IDs
window.contactRecaptchaWidget = undefined;
window.suggestionRecaptchaWidget = undefined;
// ============================================
// Wait for page to load before running code
// ============================================
document.addEventListener("DOMContentLoaded", function () {
  /* ============================================
   THEME TOGGLE
   ============================================ */
  var toggleBtn = document.getElementById("themeToggle");
  var html = document.documentElement;

  function applyTheme(theme) {
    if (theme === "dark") {
      html.setAttribute("data-theme", "dark");
      if (toggleBtn) toggleBtn.textContent = "☀️";
    } else {
      html.removeAttribute("data-theme");
      if (toggleBtn) toggleBtn.textContent = "🌙";
    }
  }

  var params = new URLSearchParams(window.location.search);
  if (params.get("theme") === "dark") {
    localStorage.setItem("ckh_theme", "dark");
  } else if (params.get("theme") === "light") {
    localStorage.setItem("ckh_theme", "light");
  }

  applyTheme(localStorage.getItem("ckh_theme") || "light");

  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      var next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
      localStorage.setItem("ckh_theme", next);
      applyTheme(next);
    });
  }

  /* ============================================
   HAMBURGER MENU
   ============================================ */
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");
  const body = document.body;

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
      body.classList.toggle("menu-open");
    });

    const navLinks = document.querySelectorAll(".nav-menu li a");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        body.classList.remove("menu-open");
      });
    });

    document.addEventListener("click", (e) => {
      if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        body.classList.remove("menu-open");
      }
    });
  }

  /* ============================================
   NAVBAR ACTIVE LINK
   ============================================ */
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinksActive = document.querySelectorAll(".nav-menu a");
  navLinksActive.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  /* ============================================
   CAREER FILTER & SEARCH - Explore Page
   ============================================ */
  if (document.querySelector(".filter-btn")) {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const careerCards = document.querySelectorAll(".career-card");
    const searchInput = document.getElementById("career-search");
    const countSpan = document.getElementById("count");
    const noResults = document.getElementById("no-careers-found");
    const filtersSection = document.querySelector(".filters");

    filterButtons.forEach((button) => {
      button.addEventListener("click", function () {
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        this.classList.add("active");
        const filterValue = this.getAttribute("data-filter");
        if (searchInput) searchInput.value = "";
        if (filtersSection) filtersSection.classList.remove("is-searching");
        let visibleCount = 0;
        careerCards.forEach((card) => {
          const cardCategory = card.getAttribute("data-category");
          if (filterValue === "all" || cardCategory === filterValue) {
            card.style.display = "";
            visibleCount++;
          } else {
            card.style.display = "none";
          }
        });
        if (countSpan) countSpan.textContent = visibleCount;
        if (noResults)
          noResults.style.display = visibleCount === 0 ? "block" : "none";
        const backToTop = document.querySelector(".back-to-top");
        if (backToTop) {
          backToTop.style.display = visibleCount === 0 ? "none" : "";
        }
      });
    });

    if (searchInput && countSpan) {
      const performSearch = function () {
        const rawValue = searchInput.value.trim();
        const searchTerm = rawValue.toLowerCase();

        // On mobile, hide the category filter chips while actively typing to bring cards directly into view
        if (filtersSection) {
          if (rawValue.length > 0) {
            filtersSection.classList.add("is-searching");
          } else {
            filtersSection.classList.remove("is-searching");
          }
        }

        let visibleCount = 0;
        careerCards.forEach((card) => {
          const careerName = card.querySelector("h3")
            ? card.querySelector("h3").textContent.toLowerCase()
            : "";
          const tagline = card.querySelector(".tagline")
            ? card.querySelector(".tagline").textContent.toLowerCase()
            : "";
          const category = card.getAttribute("data-category")
            ? card.getAttribute("data-category").toLowerCase()
            : "";
          if (
            careerName.includes(searchTerm) ||
            tagline.includes(searchTerm) ||
            category.includes(searchTerm)
          ) {
            card.style.display = "";
            visibleCount++;
          } else {
            card.style.display = "none";
          }
        });
        countSpan.textContent = visibleCount;

        const backToTop = document.querySelector(".back-to-top");
        const suggestBtn = document.getElementById("suggestCareerBtn");
        const noResultsMsg = document.getElementById("no-results-msg");

        if (noResults) {
          noResults.style.display = visibleCount === 0 ? "block" : "none";
          if (visibleCount === 0) {
            noResults.style.display = "block";
            if (noResultsMsg) {
              if (rawValue) {
                const safeTerm = rawValue
                  .replace(/&/g, "&amp;")
                  .replace(/</g, "&lt;")
                  .replace(/>/g, "&gt;");
                noResultsMsg.innerHTML = `We couldn't find any career matching "<strong>${safeTerm}</strong>". Have a unique career in mind that we haven't covered yet? Tell us and we'll add it!`;
              } else {
                noResultsMsg.textContent =
                  "We couldn't find any career matching that keyword. Try searching for a different term or browse our categories!";
              }
            }
            if (suggestBtn) {
              suggestBtn.href = rawValue
                ? `contact.html?type=suggestion&career=${encodeURIComponent(rawValue)}`
                : `contact.html?type=suggestion`;
              const safeCareerText =
                rawValue.length > 18
                  ? rawValue.substring(0, 18) + "..."
                  : rawValue;
              suggestBtn.innerHTML = rawValue
                ? `<span>💡</span> Suggest "${safeCareerText.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")}"`
                : `<span>💡</span> Suggest a Career`;
            }
          } else {
            noResults.style.display = "none";
          }
        }

        // Hide back-to-top when no careers match or during empty search
        if (backToTop) {
          backToTop.style.display = visibleCount === 0 ? "none" : "";
        }
      };

      // Attach across multiple input events for robust mobile keyboard support (Gboard, Xiaomi, iOS)
      ["input", "keyup", "change", "search"].forEach((evt) => {
        searchInput.addEventListener(evt, performSearch);
      });
    }

    window.resetCareerSearch = function () {
      if (searchInput) searchInput.value = "";
      if (filtersSection) filtersSection.classList.remove("is-searching");
      filterButtons.forEach((btn) => {
        if (btn.getAttribute("data-filter") === "all") {
          btn.classList.add("active");
        } else {
          btn.classList.remove("active");
        }
      });
      careerCards.forEach((card) => {
        card.style.display = "";
      });
      if (countSpan) countSpan.textContent = careerCards.length;
      if (noResults) noResults.style.display = "none";
      const backToTop = document.querySelector(".back-to-top");
      if (backToTop) backToTop.style.display = "";
    };

    const urlParamsExplore = new URLSearchParams(window.location.search);
    const category = urlParamsExplore.get("category");
    if (category) {
      const targetButton = document.querySelector(
        `.filter-btn[data-filter="${category}"]`,
      );
      if (targetButton) targetButton.click();
    }

    const searchParam = urlParamsExplore.get("search");
    if (searchParam && searchInput) {
      searchInput.value = decodeURIComponent(searchParam);
      searchInput.dispatchEvent(new Event("input", { bubbles: true }));
    }
  }

  /* ============================================
   QUIZ LOGIC
   ============================================ */
  if (document.querySelector(".question")) {
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
      questions.forEach((q, i) => {
        q.style.display = i === index ? "block" : "none";
      });
      if (currentText) currentText.textContent = index + 1;
      if (progressFill)
        progressFill.style.width = ((index + 1) / totalQuestions) * 100 + "%";
      if (prevBtn)
        prevBtn.style.display = index === 0 ? "none" : "inline-block";
      if (nextBtn)
        nextBtn.textContent =
          index === totalQuestions - 1 ? "See Result →" : "Next →";
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        const selected =
          questions[currentQuestion].querySelector("input:checked");
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
      scores = { creative: 0, tech: 0, science: 0, business: 0, unique: 0 };
      document
        .querySelectorAll("input[type='radio']:checked")
        .forEach((answer) => {
          const category = answer.dataset.category;
          scores[category]++;
        });
      let topCategory = Object.keys(scores).reduce((a, b) =>
        scores[a] > scores[b] ? a : b,
      );
      showResult(topCategory);
    }

    function resetQuiz() {
      document.querySelectorAll("input[type='radio']").forEach((input) => {
        input.checked = false;
      });
      currentQuestion = 0;
      showQuestion(currentQuestion);
      if (resultSection) resultSection.style.display = "none";
      const quizSection = document.getElementById("quiz-section");
      if (quizSection) {
        quizSection.style.display = "block";
        setTimeout(() => {
          const navHeight =
            document.querySelector(".navbar")?.offsetHeight || 70;
          const targetY =
            quizSection.getBoundingClientRect().top +
            window.pageYOffset -
            navHeight -
            15;
          window.scrollTo({ top: Math.max(0, targetY), behavior: "smooth" });
        }, 50);
      }
    }
    window.resetQuiz = resetQuiz;
    window.showResult = showResult;

    function showResult(category) {
      const quizSection = document.getElementById("quiz-section");
      if (quizSection) quizSection.style.display = "none";
      if (resultSection) {
        resultSection.style.display = "block";
        setTimeout(() => {
          const navHeight =
            document.querySelector(".navbar")?.offsetHeight || 70;
          const targetY =
            resultSection.getBoundingClientRect().top +
            window.pageYOffset -
            navHeight -
            15;
          window.scrollTo({ top: Math.max(0, targetY), behavior: "smooth" });
        }, 50);
      }

      const resultMap = {
        creative: {
          title: "You are a Creative Mind 🎨",
          desc: "You thrive on imagination, aesthetics, and expression. You see possibilities where others see ordinary objects.",
          link: "creative",
          strengths: [
            "Visual Storytelling",
            "Aesthetic Sense",
            "Innovation",
            "Originality",
          ],
          careers: [
            {
              title: "UX/UI Designer",
              salary: "₹3-15 LPA",
              link: "ui-ux-designer",
            },
            {
              title: "Food Stylist",
              salary: "₹3-12 LPA",
              link: "food-stylist",
            },
            {
              title: "Voice Over Artist",
              salary: "₹2-20 LPA",
              link: "voice-over-artist",
            },
          ],
        },
        tech: {
          title: "You are a Tech Explorer 💻",
          desc: "You love solving problems using technology, code, and systems. You turn complex challenges into smart solutions.",
          link: "tech",
          strengths: [
            "Problem Solving",
            "Tech Savvy",
            "Logical Thinking",
            "Digital Creation",
          ],
          careers: [
            {
              title: "AI Prompt Engineer",
              salary: "₹4-18 LPA",
              link: "ai-prompt-engineer",
            },
            {
              title: "Ethical Hacker",
              salary: "₹3.5-15 LPA",
              link: "ethical-hacker",
            },
            {
              title: "Game Developer",
              salary: "₹3-15 LPA",
              link: "game-developer",
            },
          ],
        },
        science: {
          title: "You are a Curious Scientist 🔬",
          desc: "You love discovering how the world works, asking 'why', and finding patterns in nature and data.",
          link: "science",
          strengths: [
            "Analytical Mind",
            "Curiosity",
            "Research & Discovery",
            "Systems Thinking",
          ],
          careers: [
            {
              title: "Forensic Scientist",
              salary: "₹3-10 LPA",
              link: "forensic-scientist",
            },
            {
              title: "Oceanographer",
              salary: "₹4-16 LPA",
              link: "oceanographer",
            },
            {
              title: "Restoration Architect",
              salary: "₹4-18 LPA",
              link: "restoration-architect",
            },
          ],
        },
        business: {
          title: "You are a Business Strategist 💰",
          desc: "You think about growth, money, and smart decisions. You identify value, connect people, and build ventures.",
          link: "business",
          strengths: [
            "Growth Strategy",
            "Deal Making",
            "Market Vision",
            "Wealth Building",
          ],
          careers: [
            {
              title: "Ethical Investment Advisor",
              salary: "₹5-20 LPA",
              link: "ethical-investment-advisor",
            },
            {
              title: "Sports Agent",
              salary: "₹5-25 LPA",
              link: "sports-agent",
            },
            {
              title: "Social Media Manager",
              salary: "₹2.5-10 LPA",
              link: "social-media-manager",
            },
          ],
        },
        unique: {
          title: "You are a Bold Adventurer 🎭",
          desc: "You love freedom, adventure, and unconventional paths. You follow your passions rather than standard formulas.",
          link: "unique",
          strengths: [
            "Risk Taking",
            "Non-conformist",
            "Exploration",
            "Live Impact",
          ],
          careers: [
            {
              title: "Podcast Producer",
              salary: "₹3-12 LPA",
              link: "podcast-producer",
            },
            {
              title: "Pet Therapist",
              salary: "₹2-8 LPA",
              link: "pet-therapist",
            },
            {
              title: "Adventure Sports Instructor",
              salary: "₹2.5-10 LPA",
              link: "adventure-sports-instructor",
            },
          ],
        },
      };

      const r = resultMap[category] || resultMap["unique"];
      if (resultContent) {
        resultContent.innerHTML = `
                <div class="result-badge">🎉 100% Career Personality Match</div>
                <h3 class="result-title">${r.title}</h3>
                <p class="result-desc">${r.desc}</p>
                
                <div class="result-strengths">
                  ${r.strengths.map((s) => `<span class="strength-tag">${s}</span>`).join("")}
                </div>

                <div class="result-recommendations">
                  <h4>Top Hatke Careers Recommended For You:</h4>
                  <div class="recommendation-cards">
                    ${r.careers
                      .map(
                        (c) => `
                      <a href="career-detail.html?career=${c.link}" class="recom-card">
                        <div class="recom-title">${c.title}</div>
                        <div class="recom-salary">${c.salary}</div>
                        <span class="recom-arrow">View Career →</span>
                      </a>
                    `,
                      )
                      .join("")}
                  </div>
                </div>

                <div class="result-actions">
                  <a href="explore.html?category=${r.link}" class="result-primary-btn">Explore All ${r.link.charAt(0).toUpperCase() + r.link.slice(1)} Careers →</a>
                  <button class="retake-btn" onclick="resetQuiz()">🔄 Retake Quiz</button>
                </div>
            `;
      }
    }
    showQuestion(currentQuestion);

    const urlParamsQuiz = new URLSearchParams(window.location.search);
    const resultParam = urlParamsQuiz.get("result");
    if (resultParam) {
      const intro = document.getElementById("quiz-intro");
      if (intro) intro.style.display = "none";
      showResult(resultParam);
    }
  }

  function startQuiz() {
    const intro = document.getElementById("quiz-intro");
    const quizSection = document.getElementById("quiz-section");
    const result = document.getElementById("result");
    if (intro) intro.style.display = "none";
    if (result) result.style.display = "none";
    if (quizSection) {
      quizSection.style.display = "block";
      setTimeout(() => {
        const navHeight = document.querySelector(".navbar")?.offsetHeight || 70;
        const targetY =
          quizSection.getBoundingClientRect().top +
          window.pageYOffset -
          navHeight -
          15;
        window.scrollTo({ top: Math.max(0, targetY), behavior: "smooth" });
      }, 50);
    }
  }
  window.startQuiz = startQuiz;

  /* ============================================
   RECAPTCHA RENDERING
   ============================================ */
  const RECAPTCHA_SITE_KEY = "6LcK1astAAAAAIdOqDv1TNZiuCJtC4Rx8xABPKRn";

  const isLocalhost =
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1" ||
    window.location.hostname === "";

  window.onRecaptchaLoad = function () {
    console.log("reCAPTCHA API loaded and ready");
  };

  function renderContactRecaptcha() {
    var container = document.getElementById("recaptcha-contact");
    if (!container) return;

    // On localhost, bypass Google reCAPTCHA to prevent domain error
    if (isLocalhost) {
      container.innerHTML = `
        <div style="display:flex; align-items:center; gap:12px; padding:12px 16px; border:2px dashed var(--accent); border-radius:12px; background:rgba(221,168,63,0.1); margin:0.5rem 0;">
          <span style="font-size:1.4rem;">🛡️</span>
          <div>
            <div style="font-size:0.92rem; font-weight:700; color:var(--primary);">Localhost Development Mode</div>
            <div style="font-size:0.82rem; color:var(--text-gray);">reCAPTCHA domain check bypassed for local testing</div>
          </div>
          <input type="hidden" name="g-recaptcha-response" value="localhost-dev-bypass" />
        </div>
      `;
      var err = document.getElementById("recaptcha-error-contact");
      if (err) {
        err.textContent = "";
        err.style.display = "none";
      }
      return;
    }

    if (
      typeof grecaptcha === "undefined" ||
      typeof grecaptcha.render !== "function"
    ) {
      console.log("grecaptcha not ready");
      return;
    }

    // Already rendered — just reset it
    if (
      window.contactRecaptchaWidget !== undefined &&
      window.contactRecaptchaWidget !== null
    ) {
      try {
        grecaptcha.reset(window.contactRecaptchaWidget);
        console.log(
          "Contact reCAPTCHA reset, ID:",
          window.contactRecaptchaWidget,
        );
      } catch (e) {
        // If reset fails, force re-render
        window.contactRecaptchaWidget = undefined;
        container.innerHTML = "";
        window.contactRecaptchaWidget = grecaptcha.render("recaptcha-contact", {
          sitekey: RECAPTCHA_SITE_KEY,
        });
      }
      return;
    }

    // First render
    try {
      window.contactRecaptchaWidget = grecaptcha.render("recaptcha-contact", {
        sitekey: RECAPTCHA_SITE_KEY,
      });
      console.log(
        "Contact reCAPTCHA rendered, ID:",
        window.contactRecaptchaWidget,
      );
    } catch (e) {
      console.error("Error rendering contact reCAPTCHA:", e);
    }
  }

  function renderSuggestionRecaptcha() {
    var container = document.getElementById("recaptcha-suggestion");
    if (!container) return;

    // On localhost, bypass Google reCAPTCHA to prevent domain error
    if (isLocalhost) {
      container.innerHTML = `
        <div style="display:flex; align-items:center; gap:12px; padding:12px 16px; border:2px dashed var(--accent); border-radius:12px; background:rgba(221,168,63,0.1); margin:0.5rem 0;">
          <span style="font-size:1.4rem;">🛡️</span>
          <div>
            <div style="font-size:0.92rem; font-weight:700; color:var(--primary);">Localhost Development Mode</div>
            <div style="font-size:0.82rem; color:var(--text-gray);">reCAPTCHA domain check bypassed for local testing</div>
          </div>
          <input type="hidden" name="g-recaptcha-response" value="localhost-dev-bypass" />
        </div>
      `;
      var err = document.getElementById("recaptcha-error-suggestion");
      if (err) {
        err.textContent = "";
        err.style.display = "none";
      }
      return;
    }

    if (
      typeof grecaptcha === "undefined" ||
      typeof grecaptcha.render !== "function"
    ) {
      console.log("grecaptcha not ready");
      return;
    }

    // Already rendered — just reset it
    if (
      window.suggestionRecaptchaWidget !== undefined &&
      window.suggestionRecaptchaWidget !== null
    ) {
      try {
        grecaptcha.reset(window.suggestionRecaptchaWidget);
        console.log(
          "Suggestion reCAPTCHA reset, ID:",
          window.suggestionRecaptchaWidget,
        );
      } catch (e) {
        // If reset fails, force re-render
        window.suggestionRecaptchaWidget = undefined;
        container.innerHTML = "";
        window.suggestionRecaptchaWidget = grecaptcha.render(
          "recaptcha-suggestion",
          {
            sitekey: RECAPTCHA_SITE_KEY,
          },
        );
      }
      return;
    }

    // First render
    try {
      window.suggestionRecaptchaWidget = grecaptcha.render(
        "recaptcha-suggestion",
        {
          sitekey: RECAPTCHA_SITE_KEY,
        },
      );
      console.log(
        "Suggestion reCAPTCHA rendered, ID:",
        window.suggestionRecaptchaWidget,
      );
    } catch (e) {
      console.error("Error rendering suggestion reCAPTCHA:", e);
    }
  }

  /* ============================================
   CONTACT PAGE - FORM TOGGLE
   ============================================ */

  function showForm(formType) {
    const optionsSection = document.querySelector(".contact-options-section");
    const contactSection = document.getElementById("contact-form-section");
    const suggestionSection = document.getElementById(
      "suggestion-form-section",
    );

    if (optionsSection) optionsSection.style.display = "none";

    if (formType === "contact") {
      if (contactSection) contactSection.style.display = "block";
      if (suggestionSection) suggestionSection.style.display = "none";
      setTimeout(function () {
        renderContactRecaptcha();
        if (window.initContactValidation) window.initContactValidation();
      }, 200);
    } else if (formType === "suggestion") {
      if (suggestionSection) suggestionSection.style.display = "block";
      if (contactSection) contactSection.style.display = "none";
      setTimeout(function () {
        renderSuggestionRecaptcha();
        if (window.initSuggestionValidation) window.initSuggestionValidation();
      }, 200);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function hideForm() {
    const optionsSection = document.querySelector(".contact-options-section");
    const contactSection = document.getElementById("contact-form-section");
    const suggestionSection = document.getElementById(
      "suggestion-form-section",
    );

    if (contactSection) contactSection.style.display = "none";
    if (suggestionSection) suggestionSection.style.display = "none";
    if (optionsSection) optionsSection.style.display = "block";

    // Reset BOTH reCAPTCHAs so switching forms always works cleanly
    if (typeof grecaptcha !== "undefined") {
      if (
        window.contactRecaptchaWidget !== undefined &&
        window.contactRecaptchaWidget !== null
      ) {
        try {
          grecaptcha.reset(window.contactRecaptchaWidget);
        } catch (e) {}
      }
      if (
        window.suggestionRecaptchaWidget !== undefined &&
        window.suggestionRecaptchaWidget !== null
      ) {
        try {
          grecaptcha.reset(window.suggestionRecaptchaWidget);
        } catch (e) {}
      }
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function resetToOptions() {
    const contactForm = document.querySelector(".contact-form");
    const suggestionForm = document.querySelector(".suggestion-form");

    if (contactForm) contactForm.reset();
    if (suggestionForm) suggestionForm.reset();

    const cs = document.getElementById("contact-success");
    const ss = document.getElementById("suggestion-success");
    if (cs) cs.style.display = "none";
    if (ss) ss.style.display = "none";

    if (contactForm) contactForm.style.display = "block";
    if (suggestionForm) suggestionForm.style.display = "block";

    hideForm();
  }

  window.showForm = showForm;
  window.hideForm = hideForm;
  window.resetToOptions = resetToOptions;

  /* ============================================
   SUCCESS / ERROR HANDLING AFTER PHP REDIRECT
   ============================================ */
  const urlParams = new URLSearchParams(window.location.search);
  const success = urlParams.get("success");
  const error = urlParams.get("error");
  const formParam = urlParams.get("form");

  // When showing contact success
  if (success === "contact") {
    showForm("contact");
    const contactForm = document.querySelector(".contact-form");
    const contactSuccess = document.getElementById("contact-success");
    if (contactForm) contactForm.style.display = "none";
    if (contactSuccess) contactSuccess.style.display = "block";
  }

  // When showing suggestion success
  if (success === "suggestion") {
    showForm("suggestion");
    const suggestionForm = document.querySelector(".suggestion-form");
    const suggestionSuccess = document.getElementById("suggestion-success");
    if (suggestionForm) suggestionForm.style.display = "none";
    if (suggestionSuccess) suggestionSuccess.style.display = "block";
  }

  // When opening via deep link (e.g. from Explore empty state "Suggest a Career")
  const typeParam = urlParams.get("type");
  const careerParam = urlParams.get("career");
  if (typeParam === "suggestion") {
    showForm("suggestion");
    if (careerParam) {
      const careerInput = document.getElementById("career-name");
      if (careerInput) {
        careerInput.value = decodeURIComponent(careerParam);
        const whyInput = document.getElementById("career-why");
        if (whyInput) {
          setTimeout(() => whyInput.focus(), 250);
        }
      }
    }
  } else if (typeParam === "contact") {
    showForm("contact");
  }

  /* ============================================
   HANDLE ERROR MESSAGES (reCAPTCHA)
   ============================================ */
  if (error === "captcha") {
    const optionsSection = document.querySelector(".contact-options-section");
    if (optionsSection) optionsSection.style.display = "none";

    var targetFormId =
      formParam === "suggestion"
        ? "suggestion-form-section"
        : "contact-form-section";
    var targetFormClass =
      formParam === "suggestion" ? ".suggestion-form" : ".contact-form";

    var targetSection = document.getElementById(targetFormId);
    var targetForm = document.querySelector(targetFormClass);

    if (targetSection) targetSection.style.display = "block";

    if (formParam === "suggestion") {
      setTimeout(function () {
        renderSuggestionRecaptcha();
      }, 200);
    } else {
      setTimeout(function () {
        renderContactRecaptcha();
      }, 200);
    }

    if (targetForm) {
      var errorBox = document.createElement("div");
      errorBox.style.cssText =
        "background:#ffe6e6;border:2px solid #c74b50;border-radius:8px;padding:15px;margin-bottom:20px;text-align:center;animation:shake 0.5s;";
      errorBox.innerHTML =
        '<strong style="color:#c74b50;font-size:1rem;">⚠️ Please complete the "I\'m not a robot" verification before submitting.</strong>';
      targetForm.insertBefore(errorBox, targetForm.firstChild);
      setTimeout(function () {
        errorBox.remove();
        window.history.replaceState({}, document.title, "contact.html");
      }, 6000);
    }

    if (targetSection) {
      setTimeout(function () {
        targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }
}); // Closes DOMContentLoaded
