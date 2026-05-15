<?php
/*
 * admin-nav.php
 * Persistent Admin Navbar — Career Kuch Hatke
 * Include on every admin page: <?php include("admin-nav.php"); ?>
 *
 * Features:
 *  - Matches main site visual style
 *  - Back to Site link (only visible in admin, not on main site)
 *  - Dark / Light theme toggle (persisted via localStorage)
 *  - Mobile hamburger menu
 *
 * NOTE: Add these two lines inside your admin page <head> tags:
 *   <link rel="stylesheet" href="../css/style.css">
 *   <link rel="stylesheet" href="../css/admin.css">
 * The Google Fonts + theme initialisation script is included here.
 */

// Determine current page for active link highlighting
$currentPage = basename($_SERVER['PHP_SELF']);
?>

<!-- =============================================
     FONTS & THEME INIT (injected before navbar)
     Fonts must load before first paint.
     Theme script must run before body renders
     to prevent flash of wrong theme.
     ============================================= -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@400;600;700;800&family=Tenor+Sans&display=swap" rel="stylesheet">

<script>
    /* Run immediately — before body renders — to avoid flash */
    (function () {
        var saved = localStorage.getItem('ckh_theme');
        if (saved === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
    })();
</script>

<!-- =============================================
     ADMIN NAVBAR
     ============================================= -->
<nav class="admin-navbar">
    <div class="container">

        <!-- Brand -->
        <a href="dashboard.php" class="admin-brand">
            🔐 Career Kuch Hatke
            <span class="brand-badge">Admin</span>
        </a>

        <!-- Desktop nav links -->
        <ul class="admin-nav-links" id="adminNavLinks">

            <li>
                <a href="dashboard.php"
                   class="<?php echo ($currentPage === 'dashboard.php') ? 'active' : ''; ?>">
                    📊 Dashboard
                </a>
            </li>

            <li>
                <a href="contacts.php"
                   class="<?php echo ($currentPage === 'contacts.php') ? 'active' : ''; ?>">
                    📩 Contacts
                </a>
            </li>

            <li>
                <a href="suggestions.php"
                   class="<?php echo ($currentPage === 'suggestions.php') ? 'active' : ''; ?>">
                    💡 Suggestions
                </a>
            </li>

            <!-- Back to main site — only visible here, never on main site -->
            <li>
                <a href="../index.php" class="back-to-site">
                    ← Back to Site
                </a>
            </li>

            <li>
                <a href="logout.php" class="logout-link">
                    Logout
                </a>
            </li>

        </ul>

        <!-- Theme toggle + hamburger -->
        <div style="display:flex; align-items:center; gap:0.75rem;">

            <!-- 🌙 / ☀️ Theme toggle -->
            <button class="theme-toggle" id="themeToggle" title="Toggle dark/light mode" aria-label="Toggle theme">
                🌙
            </button>

            <!-- Hamburger (mobile only) -->
            <button class="admin-hamburger" id="adminHamburger" aria-label="Open menu" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
            </button>

        </div>

    </div>
</nav>

<!-- =============================================
     THEME TOGGLE + HAMBURGER SCRIPT
     ============================================= -->
<script>
(function () {

    /* ---- Theme toggle ---- */
    var toggleBtn   = document.getElementById('themeToggle');
    var html        = document.documentElement;

    function applyTheme(theme) {
        if (theme === 'dark') {
            html.setAttribute('data-theme', 'dark');
            toggleBtn.textContent = '☀️';
            toggleBtn.title = 'Switch to light mode';
        } else {
            html.removeAttribute('data-theme');
            toggleBtn.textContent = '🌙';
            toggleBtn.title = 'Switch to dark mode';
        }
    }

    /* Init icon to match already-applied theme */
    var current = localStorage.getItem('ckh_theme') || 'light';
    applyTheme(current);

    toggleBtn.addEventListener('click', function () {
        var next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        localStorage.setItem('ckh_theme', next);
        applyTheme(next);
    });

    /* ---- Hamburger ---- */
    var hamburger  = document.getElementById('adminHamburger');
    var navLinks   = document.getElementById('adminNavLinks');

    hamburger.addEventListener('click', function () {
        var open = navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', open);
        document.body.style.overflow = open ? 'hidden' : '';
    });

    /* Close menu when a link is clicked */
    navLinks.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
            hamburger.setAttribute('aria-expanded', false);
            document.body.style.overflow = '';
        });
    });

})();
</script>