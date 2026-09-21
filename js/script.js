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

/* ============================================
   TOAST NOTIFICATION UTILITY
   ============================================ */
window.showToast = function (message) {
  var toast = document.getElementById("ckh-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "ckh-toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.className = "ckh-toast show";
  clearTimeout(window.ckhToastTimer);
  window.ckhToastTimer = setTimeout(function () {
    toast.className = "ckh-toast";
  }, 2400);
};

/* ============================================
   CAREER BOOKMARKS (Saved Careers via localStorage)
   ============================================ */
window.ckhBookmarks = {
  get: function () {
    try {
      return JSON.parse(localStorage.getItem("ckh_bookmarks") || "[]");
    } catch (e) {
      return [];
    }
  },
  set: function (arr) {
    try {
      localStorage.setItem("ckh_bookmarks", JSON.stringify(arr));
    } catch (e) {}
  },
  has: function (slug) {
    return this.get().includes(slug);
  },
  toggle: function (slug) {
    var list = this.get();
    var added = false;
    if (list.includes(slug)) {
      list = list.filter(function (s) {
        return s !== slug;
      });
      added = false;
    } else {
      list.push(slug);
      added = true;
    }
    this.set(list);
    this.updateUI();
    return added;
  },
  updateUI: function () {
    var list = this.get();
    var countEl = document.getElementById("bookmarkCount");
    if (countEl) countEl.textContent = list.length;

    document.querySelectorAll(".bookmark-card-btn").forEach(function (btn) {
      var slug = btn.getAttribute("data-slug");
      if (list.includes(slug)) {
        btn.classList.add("active");
        btn.setAttribute("aria-label", "Remove from bookmarks");
        btn.setAttribute("title", "Remove from bookmarks");
        btn.innerHTML = "🔖";
      } else {
        btn.classList.remove("active");
        btn.setAttribute("aria-label", "Save to bookmarks");
        btn.setAttribute("title", "Save to bookmarks");
        btn.innerHTML = "🔖";
      }
    });

    var detailBtn = document.getElementById("bookmarkDetailBtn");
    if (detailBtn) {
      var urlParams = new URLSearchParams(window.location.search);
      var currentSlug = urlParams.get("career");
      if (currentSlug && list.includes(currentSlug)) {
        detailBtn.classList.add("active");
        detailBtn.innerHTML = "🔖 Saved to Bookmarks";
      } else {
        detailBtn.classList.remove("active");
        detailBtn.innerHTML = "🔖 Bookmark Career";
      }
    }
  },
};
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

    // Initialize data-slug and bookmark buttons on each card
    careerCards.forEach((card) => {
      const btn = card.querySelector("a.card-btn");
      let slug = "";
      if (btn) {
        const href = btn.getAttribute("href") || "";
        const match = href.match(/career=([a-z0-9\-]+)/);
        if (match) slug = match[1];
      }
      if (slug) card.setAttribute("data-slug", slug);

      const header = card.querySelector(".card-header");
      if (header && slug && !header.querySelector(".bookmark-card-btn")) {
        const bookmarkBtn = document.createElement("button");
        bookmarkBtn.className = "bookmark-card-btn";
        bookmarkBtn.type = "button";
        bookmarkBtn.setAttribute("data-slug", slug);
        bookmarkBtn.setAttribute("aria-label", "Save to bookmarks");
        bookmarkBtn.setAttribute("title", "Save to bookmarks");
        bookmarkBtn.innerHTML = "🔖";

        bookmarkBtn.addEventListener("click", function (e) {
          e.preventDefault();
          e.stopPropagation();
          const isSaved = window.ckhBookmarks.toggle(slug);
          if (isSaved) {
            window.showToast("Career saved to bookmarks! 🔖");
          } else {
            window.showToast("Career removed from bookmarks");
          }

          // If currently viewing the bookmarked filter, refresh the filter immediately
          const activeFilter = document.querySelector(".filter-btn.active");
          if (
            activeFilter &&
            activeFilter.getAttribute("data-filter") === "bookmarked"
          ) {
            applyActiveFilter("bookmarked");
          }
        });

        header.appendChild(bookmarkBtn);
      }
    });

    // Update bookmark UI (active states and counters)
    window.ckhBookmarks.updateUI();

    function applyActiveFilter(filterValue) {
      if (searchInput) searchInput.value = "";
      if (filtersSection) filtersSection.classList.remove("is-searching");
      let visibleCount = 0;
      const bookmarks = window.ckhBookmarks.get();

      careerCards.forEach((card) => {
        const cardCategory = card.getAttribute("data-category");
        const cardSlug = card.getAttribute("data-slug");

        let isMatch = false;
        if (filterValue === "all") {
          isMatch = true;
        } else if (filterValue === "bookmarked") {
          isMatch = bookmarks.includes(cardSlug);
        } else {
          isMatch = cardCategory === filterValue;
        }

        if (isMatch) {
          card.style.display = "";
          visibleCount++;
        } else {
          card.style.display = "none";
        }
      });

      if (countSpan) countSpan.textContent = visibleCount;

      const noResultsMsg = document.getElementById("no-results-msg");
      const noResultsIcon = document.querySelector(".no-results-icon");
      const noResultsHeading = document.querySelector("#no-careers-found h3");
      const suggestBtn = document.getElementById("suggestCareerBtn");

      if (noResults) {
        if (visibleCount === 0) {
          noResults.style.display = "block";
          if (filterValue === "bookmarked") {
            if (noResultsIcon) noResultsIcon.textContent = "🔖";
            if (noResultsHeading)
              noResultsHeading.textContent = "No Bookmarked Careers Yet";
            if (noResultsMsg) {
              noResultsMsg.innerHTML =
                "You haven't bookmarked any careers yet! Tap the 🔖 bookmark icon on any career card to save it here for quick access.";
            }
            if (suggestBtn) suggestBtn.style.display = "none";
          } else {
            if (noResultsIcon) noResultsIcon.textContent = "🔍";
            if (noResultsHeading)
              noResultsHeading.textContent = "No Hatke Careers Found";
            if (noResultsMsg) {
              noResultsMsg.textContent =
                "We couldn't find any career matching that filter. Try browsing another category!";
            }
            if (suggestBtn) suggestBtn.style.display = "";
          }
        } else {
          noResults.style.display = "none";
          if (suggestBtn) suggestBtn.style.display = "";
        }
      }

      const backToTop = document.querySelector(".back-to-top");
      if (backToTop) {
        backToTop.style.display = visibleCount === 0 ? "none" : "";
      }
    }

    filterButtons.forEach((button) => {
      button.addEventListener("click", function () {
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        this.classList.add("active");
        const filterValue = this.getAttribute("data-filter");
        applyActiveFilter(filterValue);

        // Smoothly center the clicked button in the scrollable bar if on mobile
        if (typeof this.scrollIntoView === "function") {
          this.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
          });
        }
      });
    });


    if (searchInput && countSpan) {
      const clearBtn = document.getElementById("clearSearch");

      const searchKeywordsMap = {
        "food-stylist": [
          "food",
          "cooking",
          "styling",
          "photography",
          "chef",
          "culinary",
          "kitchen",
          "dishes",
          "restaurant",
          "baking",
        ],
        "ui-ux-designer": [
          "ui",
          "ux",
          "design",
          "figma",
          "app",
          "website",
          "web",
          "coding",
          "interface",
          "graphic",
          "product design",
          "wireframe",
        ],
        "voice-over-artist": [
          "voice",
          "dubbing",
          "audio",
          "mic",
          "speaking",
          "acting",
          "radio",
          "singing",
          "narration",
          "cartoon",
          "anime",
        ],
        "ethical-fashion-designer": [
          "fashion",
          "clothing",
          "clothes",
          "sustainable",
          "textile",
          "fabric",
          "dress",
          "style",
          "eco",
          "garment",
        ],
        animator: [
          "animation",
          "animator",
          "cartoons",
          "drawing",
          "3d",
          "2d",
          "anime",
          "vfx",
          "blender",
          "cgi",
          "motion",
          "art",
        ],
        "game-sound-designer": [
          "gaming",
          "game",
          "sound",
          "audio",
          "music",
          "sfx",
          "foley",
          "bgm",
          "effects",
          "audio engineer",
        ],
        "toy-designer": [
          "toy",
          "toys",
          "games",
          "kids",
          "play",
          "board games",
          "3d printing",
          "crafts",
          "lego",
          "children",
        ],
        "drone-pilot": [
          "drone",
          "flying",
          "camera",
          "aerial",
          "aviation",
          "uav",
          "photography",
          "surveillance",
          "pilot",
          "videography",
        ],
        "ethical-hacker": [
          "hacker",
          "hacking",
          "cyber",
          "security",
          "coding",
          "programming",
          "bug bounty",
          "penetration",
          "cybersecurity",
          "kali",
          "linux",
          "computers",
        ],
        "ai-prompt-engineer": [
          "ai",
          "prompt",
          "chatgpt",
          "midjourney",
          "llm",
          "artificial intelligence",
          "coding",
          "automation",
          "tech",
          "machine learning",
        ],
        "data-storyteller": [
          "data",
          "storyteller",
          "statistics",
          "analytics",
          "charts",
          "graphs",
          "excel",
          "visualization",
          "bi",
          "numbers",
          "insights",
        ],
        "game-developer": [
          "game",
          "games",
          "gaming",
          "coding",
          "unity",
          "unreal",
          "c++",
          "c#",
          "steam",
          "programming",
          "playstation",
          "developer",
        ],
        "vr-world-creator": [
          "vr",
          "virtual reality",
          "metaverse",
          "ar",
          "augmented reality",
          "3d",
          "gaming",
          "oculus",
          "unity",
          "blender",
        ],
        "cyber-crime-investigator": [
          "cyber",
          "crime",
          "investigator",
          "forensics",
          "police",
          "detective",
          "fraud",
          "security",
          "law",
          "hacking",
        ],
        "restoration-architect": [
          "architecture",
          "architect",
          "monuments",
          "heritage",
          "buildings",
          "history",
          "civil",
          "conservation",
          "construction",
        ],
        "wildlife-photographer": [
          "wildlife",
          "photographer",
          "photography",
          "camera",
          "animals",
          "nature",
          "forest",
          "jungle",
          "birds",
          "travel",
          "nat geo",
        ],
        "forensic-scientist": [
          "forensic",
          "forensics",
          "crime",
          "science",
          "dna",
          "investigation",
          "police",
          "lab",
          "detective",
          "cid",
          "biology",
          "chemistry",
        ],
        oceanographer: [
          "ocean",
          "oceanographer",
          "marine",
          "sea",
          "underwater",
          "scuba",
          "fish",
          "marine biology",
          "water",
          "deep sea",
        ],
        "food-scientist": [
          "food",
          "scientist",
          "science",
          "nutrition",
          "fssai",
          "diet",
          "preservation",
          "chemistry",
          "culinary",
          "lab",
        ],
        "food-flavor-creator": [
          "flavor",
          "flavour",
          "flavorist",
          "food",
          "taste",
          "chemistry",
          "perfume",
          "aroma",
          "seasoning",
          "science",
        ],
        "space-mission-scientist": [
          "space",
          "isro",
          "nasa",
          "astronomy",
          "physics",
          "rocket",
          "satellite",
          "cosmos",
          "science",
          "astrophysics",
          "mars",
        ],
        "sports-agent": [
          "sports",
          "cricket",
          "ipl",
          "athlete",
          "management",
          "contract",
          "business",
          "negotiation",
          "football",
          "fitness",
        ],
        "fragrance-designer": [
          "fragrance",
          "perfume",
          "scent",
          "aroma",
          "smell",
          "chemistry",
          "cosmetics",
          "luxury",
          "beauty",
          "perfumer",
        ],
        "event-manager": [
          "event",
          "events",
          "wedding",
          "planner",
          "planning",
          "party",
          "concert",
          "hospitality",
          "management",
          "festival",
        ],
        "social-media-manager": [
          "social media",
          "instagram",
          "youtube",
          "reels",
          "marketing",
          "influencer",
          "content",
          "viral",
          "digital marketing",
        ],
        "ethical-investment-advisor": [
          "investment",
          "money",
          "finance",
          "stocks",
          "shares",
          "advisor",
          "esg",
          "wealth",
          "banking",
          "mutual funds",
          "green",
        ],
        "meme-marketer": [
          "meme",
          "memes",
          "social media",
          "marketing",
          "comedy",
          "humour",
          "viral",
          "trending",
          "content",
          "reels",
          "gen z",
        ],
        "esports-manager": [
          "esports",
          "gaming",
          "tournament",
          "bgmi",
          "valorant",
          "gamers",
          "pubg",
          "streaming",
          "team",
          "competitive",
        ],
        "podcast-producer": [
          "podcast",
          "podcasting",
          "audio",
          "spotify",
          "interview",
          "sound",
          "radio",
          "broadcasting",
          "recording",
          "voice",
        ],
        "museum-curator": [
          "museum",
          "curator",
          "history",
          "art",
          "heritage",
          "culture",
          "exhibition",
          "archaeology",
          "antique",
          "historical",
        ],
        "sign-language-interpreter": [
          "sign language",
          "deaf",
          "interpreter",
          "accessibility",
          "ngo",
          "translation",
          "inclusive",
          "communication",
          "hearing",
        ],
        "pet-therapist": [
          "pet",
          "pets",
          "dog",
          "dogs",
          "cat",
          "animals",
          "therapy",
          "training",
          "veterinary",
          "animal behavior",
          "puppy",
        ],
        "adventure-sports-instructor": [
          "adventure",
          "sports",
          "trekking",
          "mountaineering",
          "scuba",
          "rafting",
          "outdoor",
          "travel",
          "fitness",
          "instructor",
        ],
        "tea-taster": [
          "tea",
          "chai",
          "tea taster",
          "sommelier",
          "beverage",
          "tasting",
          "plantations",
          "aroma",
          "assam",
          "darjeeling",
        ],
        "heritage-art-restorer": [
          "art",
          "painting",
          "restorer",
          "heritage",
          "museum",
          "canvas",
          "conservation",
          "fine arts",
          "monuments",
          "culture",
        ],
      };

      const performSearch = function () {
        const rawValue = searchInput.value.trim();
        const searchTerm = rawValue.toLowerCase();

        // Toggle clear button
        if (clearBtn) {
          clearBtn.style.display = rawValue.length > 0 ? "flex" : "none";
        }

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

          // Extract career slug from card's "Know More" button href
          const btn = card.querySelector("a.card-btn");
          let slug = "";
          if (btn) {
            const href = btn.getAttribute("href") || "";
            const match = href.match(/career=([a-z0-9\-]+)/);
            if (match) slug = match[1];
          }

          const keywords = searchKeywordsMap[slug] || [];
          const keywordMatch = keywords.some(
            (k) => k.includes(searchTerm) || searchTerm.includes(k),
          );

          if (
            careerName.includes(searchTerm) ||
            tagline.includes(searchTerm) ||
            category.includes(searchTerm) ||
            keywordMatch
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

      // Clear button click listener
      if (clearBtn) {
        clearBtn.addEventListener("click", function () {
          searchInput.value = "";
          performSearch();
          searchInput.focus();
        });
      }
    }

    window.resetCareerSearch = function () {
      if (searchInput) searchInput.value = "";
      const clearBtn = document.getElementById("clearSearch");
      if (clearBtn) clearBtn.style.display = "none";
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
