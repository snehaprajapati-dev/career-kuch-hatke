<?php
$currentPage = basename($_SERVER['PHP_SELF']);
?>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@400;600;700;800&family=Tenor+Sans&display=swap" rel="stylesheet">
<link rel="shortcut icon" type="image/x-icon" href="../favicon.ico?v=4.0">
<link rel="icon" type="image/x-icon" href="../favicon.ico?v=4.0">
<link rel="icon" type="image/png" sizes="32x32" href="../images/logo-navbar-light.png?v=3.5">
<link rel="apple-touch-icon" href="../images/logo-navbar-light.png?v=3.5">

<script>
(function(){
    var s = localStorage.getItem('ckh_theme');
    if(s==='dark') document.documentElement.setAttribute('data-theme','dark');
    else if(s==='light') document.documentElement.removeAttribute('data-theme');
})();
</script>

<link rel="stylesheet" href="../css/logo-fix.css?v=3.5">

<nav class="admin-navbar">
    <div class="admin-navbar-inner">

        <a href="dashboard.php" class="admin-brand">
            <img src="../images/logo-navbar-light.png" alt="Career Kuch Hatke Logo" class="logo-img logo-img-light">
            <img src="../images/logo-navbar-dark.png" alt="Career Kuch Hatke Logo" class="logo-img logo-img-dark">
            Career Kuch Hatke
            <span class="brand-badge">Admin</span>
        </a>

        <ul class="admin-nav-links" id="adminNavLinks">
            <li>
                <a href="dashboard.php" class="<?php echo ($currentPage==='dashboard.php') ?'active':''; ?>">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="5"/><rect x="14" y="12" width="7" height="9"/><rect x="3" y="16" width="7" height="5"/></svg>
                    <span>Dashboard</span>
                </a>
            </li>
            <li>
                <a href="contacts.php" class="<?php echo ($currentPage==='contacts.php') ?'active':''; ?>">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    <span>Contacts</span>
                </a>
            </li>
            <li>
                <a href="suggestions.php" class="<?php echo ($currentPage==='suggestions.php') ?'active':''; ?>">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
                    <span>Suggestions</span>
                </a>
            </li>
            <li class="admin-nav-mobile-item">
                <a href="../index.html" class="mobile-nav-back">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>
                    <span>Back to Site</span>
                </a>
            </li>
            <li class="admin-nav-mobile-item logout-item">
                <a href="logout.php" class="mobile-nav-logout">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                    <span>Logout</span>
                </a>
            </li>
        </ul>

        <div class="admin-navbar-right">
            <a href="../index.html" class="admin-nav-back">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>
                <span>Back to Site</span>
            </a>
            <a href="logout.php" class="admin-nav-logout">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                <span>Logout</span>
            </a>
            <button class="theme-toggle" id="themeToggle" aria-label="Toggle theme">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.354 15.354A9 9 0 0 1 8.646 3.646 9.003 9.003 0 0 0 12 21a9.003 9.003 0 0 0 8.354-5.646z" fill="currentColor" fill-opacity="0.22"/><path d="M19 3v4M17 5h4M14 2v2M13 3h2"/></svg>
            </button>
            <button class="admin-hamburger" id="adminHamburger" aria-label="Open menu" aria-expanded="false">
                <span></span><span></span><span></span>
            </button>
        </div>

    </div>
</nav>

<script>
(function(){
    var btn  = document.getElementById('themeToggle');
    var html = document.documentElement;

    var sunSvg  = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4.5" fill="currentColor" fill-opacity="0.25"/><line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="6.34" y2="6.34"/><line x1="17.66" y1="17.66" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="6.34" y2="17.66"/><line x1="17.66" y1="6.34" x2="19.07" y2="4.93"/></svg>';
    var moonSvg = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.354 15.354A9 9 0 0 1 8.646 3.646 9.003 9.003 0 0 0 12 21a9.003 9.003 0 0 0 8.354-5.646z" fill="currentColor" fill-opacity="0.22"/><path d="M19 3v4M17 5h4M14 2v2M13 3h2"/></svg>';

    function applyTheme(t){
        if(t==='dark'){
            html.setAttribute('data-theme','dark');
            if(btn) btn.innerHTML = sunSvg;
        } else {
            html.removeAttribute('data-theme');
            if(btn) btn.innerHTML = moonSvg;
        }
    }
    var currentTheme = localStorage.getItem('ckh_theme') || (html.getAttribute('data-theme')==='dark' ? 'dark' : 'light');
    applyTheme(currentTheme);
    if(btn){
        btn.addEventListener('click',function(){
            var next = html.getAttribute('data-theme')==='dark'?'light':'dark';
            localStorage.setItem('ckh_theme',next);
            applyTheme(next);
        });
    }

    var burger = document.getElementById('adminHamburger');
    var nav    = document.getElementById('adminNavLinks');
    if(burger && nav){
        burger.addEventListener('click',function(){
            var open = nav.classList.toggle('active');
            burger.classList.toggle('active');
            burger.setAttribute('aria-expanded', String(open));
            document.body.classList.toggle('menu-open', open);
        });
        nav.querySelectorAll('a').forEach(function(a){
            a.addEventListener('click',function(){
                nav.classList.remove('active');
                burger.classList.remove('active');
                burger.setAttribute('aria-expanded','false');
                document.body.classList.remove('menu-open');
            });
        });
    }
})();
</script>