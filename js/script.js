
// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const body = document.body;

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    body.classList.toggle('menu-open');  // ← Locks body scroll
  });
  
  // Close menu when clicking a link
  const navLinks = document.querySelectorAll('.nav-menu li a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
      body.classList.remove('menu-open');  // ← Unlocks body scroll
    });
  });
  
  // Close menu when clicking outside (optional but helpful)
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
      body.classList.remove('menu-open');
    }
  });
}