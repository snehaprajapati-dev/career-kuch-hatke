<?php
$currentPage = basename($_SERVER['PHP_SELF']);
?>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@400;600;700;800&family=Tenor+Sans&display=swap" rel="stylesheet">

<script>
(function () {
    var saved = localStorage.getItem('ckh_theme');
    if (saved === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }
})();
</script>

<nav class="admin-navbar">
    <div class="admin-navbar-inner">

        <a href="dashboard.php" class="admin-brand">
            🔐 Career Kuch Hatke
            <span class="brand-badge">Admin</span>
        </a>

        <ul class="admin-nav-links" id="adminNavLinks">
            <li>
                <a href="dashboard.php" class="<?php echo ($currentPage === 'dashboard.php') ? 'active' : ''; ?>">
                    📊 Dashboard
                </a>
            </li>
            <li>
                <a href="contacts.php" class="<?php echo ($currentPage === 'contacts.php') ? 'active' : ''; ?>">
                    📩 Contacts
                </a>
            </li>
            <li>
                <a href="suggestions.php" class="<?php echo ($currentPage === 'suggestions.php') ? 'active' : ''; ?>">
                    💡 Suggestions
                </a>
            </li>
            <li>
                <a href="../index.html" class="back-to-site">← Back to Site</a>
            </li>
            <li>
                <a href="logout.php" class="logout-link">Logout</a>
            </li>
        </ul>

        <div class="admin-navbar-right">
            <button class="theme-toggle" id="themeToggle" aria-label="Toggle theme">🌙</button>
            <button class="admin-hamburger" id="adminHamburger" aria-label="Open menu" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>

    </div>
</nav>

<script>
(function () {
    var toggleBtn = document.getElementById('themeToggle');
    var html = document.documentElement;

    function applyTheme(theme) {
        if (theme === 'dark') {
            html.setAttribute('data-theme', 'dark');
            toggleBtn.textContent = '☀️';
        } else {
            html.removeAttribute('data-theme');
            toggleBtn.textContent = '🌙';
        }
    }

    applyTheme(localStorage.getItem('ckh_theme') || 'light');

    toggleBtn.addEventListener('click', function () {
        var next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        localStorage.setItem('ckh_theme', next);
        applyTheme(next);
    });

    var hamburger = document.getElementById('adminHamburger');
    var navLinks  = document.getElementById('adminNavLinks');

    hamburger.addEventListener('click', function () {
        var open = navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', String(open));
        document.body.style.overflow = open ? 'hidden' : '';
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    });
})();
</script>