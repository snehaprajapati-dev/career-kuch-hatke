/* ============================================
   CAREER DETAIL PAGE - DYNAMIC CONTENT LOADER
   ============================================ */

// Wait for page to fully load
document.addEventListener('DOMContentLoaded', function() {
  
  // Get career ID from URL parameter
  // Example: career-detail.html?career=ui-ux-designer
  const urlParams = new URLSearchParams(window.location.search);
  const careerId = urlParams.get('career');
  
  // If no career ID in URL, show error
  if (!careerId) {
    showError("No career specified. Please select a career from the Explore page.");
    return;
  }
  
  // Get career data from careerDatabase
  const career = careerDatabase[careerId];
  
  // If career not found, show error
  if (!career) {
    showError("Career not found. Please go back and try again.");
    return;
  }
  
  // Fill the page with career data
  fillCareerDetails(career, careerId);
});

/* ============================================
   FILL PAGE WITH CAREER DATA
   ============================================ */
function fillCareerDetails(career, careerId) {
  
  // Update page title
  document.title = `${career.name} - Career Kuch Hatke`;
  
  // Fill breadcrumb
  document.getElementById('breadcrumb-career').textContent = career.name;
  
  // Fill hero section
  document.getElementById('hero-category').textContent = career.emoji + ' ' + career.categoryName;
  document.getElementById('hero-category').className = `category-badge ${career.category}`;
  document.getElementById('career-name').textContent = career.name;
  document.getElementById('career-tagline').textContent = career.tagline;
  
  // Fill quick facts
  document.getElementById('quick-salary').textContent = career.quickFacts.salary;
  document.getElementById('quick-remote').textContent = career.quickFacts.remote;
  document.getElementById('quick-degree').textContent = career.quickFacts.degree;
  
  // Section 1: What Do They Do?
  document.getElementById('what-they-do').innerHTML = `<p>${career.whatTheyDo}</p>`;
  
  // Section 2: Salary Range
  fillSalarySection(career.salary);
  
  // Section 3: How to Get In?
  fillRoadmapSection(career.roadmap);
  
  // Section 4: Skills Needed
  fillSkillsSection(career.skills);
  
  // Section 5: Where Can You Work?
  fillWorkPlacesSection(career.workPlaces);
  
  // Section 6: Real Person Example
  fillRealPersonSection(career.realPerson);
  
  // Section 7: Free Resources
  fillResourcesSection(career.resources);
  
  // Section 8: Is This For You?
  fillForYouSection(career.forYou);
  
  // Fill sidebar with related careers
  fillRelatedCareers(career.category, careerId);
}

/* ============================================
   SECTION 2: SALARY RANGE
   ============================================ */
function fillSalarySection(salary) {
  const salaryGrid = document.getElementById('salary-range');
  
  let html = '';
  
  // Entry Level
  html += `
    <div class="salary-box">
      <span class="salary-label">${salary.entry.label}</span>
      <span class="salary-amount">${salary.entry.amount}</span>
    </div>
  `;
  
  // Mid Level
  html += `
    <div class="salary-box">
      <span class="salary-label">${salary.mid.label}</span>
      <span class="salary-amount">${salary.mid.amount}</span>
    </div>
  `;
  
  // Senior Level
  html += `
    <div class="salary-box">
      <span class="salary-label">${salary.senior.label}</span>
      <span class="salary-amount">${salary.senior.amount}</span>
    </div>
  `;
  
  // Freelance
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
  const roadmapDiv = document.getElementById('roadmap');
  
  let html = '';
  
  roadmap.forEach(item => {
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
  const skillsList = document.getElementById('skills-list');
  
  let html = '';
  
  skills.forEach(skill => {
    html += `<div class="skill-item">${skill}</div>`;
  });
  
  skillsList.innerHTML = html;
}

/* ============================================
   SECTION 5: WHERE CAN YOU WORK?
   ============================================ */
function fillWorkPlacesSection(workPlaces) {
  const workPlacesDiv = document.getElementById('work-places');
  
  let html = '<div class="work-list">';
  
  workPlaces.forEach(place => {
    html += `<div class="work-item">${place}</div>`;
  });
  
  html += '</div>';
  
  workPlacesDiv.innerHTML = html;
}

/* ============================================
   SECTION 6: REAL PERSON EXAMPLE
   ============================================ */
function fillRealPersonSection(realPerson) {
  const realPersonDiv = document.getElementById('real-person');
  
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
  const resourcesDiv = document.getElementById('resources');
  
  let html = '<div class="resources-list">';
  
  // YouTube
  if (resources.youtube) {
    html += `
      <div class="resource-category">
        <strong>📺 YouTube:</strong>
        ${resources.youtube}
      </div>
    `;
  }
  
  // Courses
  if (resources.courses) {
    html += `
      <div class="resource-category">
        <strong>🎓 Free Courses:</strong>
        ${resources.courses}
      </div>
    `;
  }
  
  // Practice
  if (resources.practice) {
    html += `
      <div class="resource-category">
        <strong>💪 Practice:</strong>
        ${resources.practice}
      </div>
    `;
  }
  
  // Books
  if (resources.books) {
    html += `
      <div class="resource-category">
        <strong>📚 Books:</strong>
        ${resources.books}
      </div>
    `;
  }
  
  // Portfolio
  if (resources.portfolio) {
    html += `
      <div class="resource-category">
        <strong>🎨 Portfolio:</strong>
        ${resources.portfolio}
      </div>
    `;
  }
  
  html += '</div>';
  
  resourcesDiv.innerHTML = html;
}

/* ============================================
   SECTION 8: IS THIS FOR YOU?
   ============================================ */
function fillForYouSection(forYou) {
  const forYouDiv = document.getElementById('for-you');
  
  let html = '<div class="for-you-list">';
  
  // Yes items
  forYou.yes.forEach(item => {
    html += `<div class="for-you-item yes">${item}</div>`;
  });
  
  // No items
  forYou.no.forEach(item => {
    html += `<div class="for-you-item no">${item}</div>`;
  });
  
  html += '</div>';
  
  forYouDiv.innerHTML = html;
}

/* ============================================
   SIDEBAR: RELATED CAREERS
   ============================================ */
function fillRelatedCareers(currentCategory, currentCareerId) {
  const relatedDiv = document.getElementById('related-careers');
  
  let relatedCareers = [];
  
  // Find 3 careers from the same category (excluding current one)
  for (let id in careerDatabase) {
    if (id !== currentCareerId && careerDatabase[id].category === currentCategory) {
      relatedCareers.push({
        id: id,
        name: careerDatabase[id].name,
        emoji: careerDatabase[id].emoji
      });
    }
    
    // Stop at 3
    if (relatedCareers.length === 3) break;
  }
  
  // If less than 3 from same category, add from other categories
  if (relatedCareers.length < 3) {
    for (let id in careerDatabase) {
      if (id !== currentCareerId && !relatedCareers.find(c => c.id === id)) {
        relatedCareers.push({
          id: id,
          name: careerDatabase[id].name,
          emoji: careerDatabase[id].emoji
        });
      }
      
      if (relatedCareers.length === 3) break;
    }
  }
  
  // Build HTML
  let html = '';
  
  relatedCareers.forEach(career => {
    html += `
      <a href="career-detail.html?career=${career.id}" class="related-career-link">
        <strong>${career.emoji} ${career.name}</strong>
        <small>Click to explore </small>
      </a>
    `;
  });
  
  // If no related careers found
  if (html === '') {
    html = '<p style="color: var(--text-gray);">More careers coming soon!</p>';
  }
  
  relatedDiv.innerHTML = html;
}

/* ============================================
   ERROR HANDLING
   ============================================ */
function showError(message) {
  const container = document.querySelector('.career-details .container');
  
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
  const careerName = document.getElementById('career-name').textContent;
  const url = window.location.href;
  
  // Check if browser supports Web Share API (mobile)
  if (navigator.share) {
    navigator.share({
      title: `${careerName} - Career Kuch Hatke`,
      text: `Check out this unconventional career: ${careerName}`,
      url: url
    })
    .then(() => console.log('Shared successfully'))
    .catch((error) => console.log('Error sharing:', error));
  } else {
    // Fallback: Copy link to clipboard
    navigator.clipboard.writeText(url)
      .then(() => {
        alert('Link copied to clipboard! Share it with your friends.');
      })
      .catch(() => {
        alert(`Share this link:\n${url}`);
      });
  }
}