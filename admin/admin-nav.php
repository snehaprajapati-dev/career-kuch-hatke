<?php
$currentPage = basename($_SERVER['PHP_SELF']);
?>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@400;600;700;800&family=Tenor+Sans&display=swap" rel="stylesheet">
<link rel="shortcut icon" type="image/x-icon" href="../favicon.ico?v=3.5">
<link rel="icon" type="image/x-icon" href="../favicon.ico?v=3.5">
<link rel="icon" type="image/png" sizes="32x32" href="../images/logo-navbar-light.png?v=3.5">
<link rel="apple-touch-icon" href="../images/logo-navbar-light.png?v=3.5">

<script>
(function(){
    var s = localStorage.getItem('ckh_theme');
    if(s==='dark') document.documentElement.setAttribute('data-theme','dark');
    else document.documentElement.removeAttribute('data-theme');
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

        <ul class="admin-nav-links" id="adminNavLinks" >
            <li><a href="dashboard.php"   class="<?php echo ($currentPage==='dashboard.php')  ?'active':''; ?>"> Dashboard</a></li>
            <li><a href="contacts.php"    class="<?php echo ($currentPage==='contacts.php')   ?'active':''; ?>"> Contacts</a></li>
            <li><a href="suggestions.php" class="<?php echo ($currentPage==='suggestions.php')?'active':''; ?>"> Suggestions</a></li>
        </ul>

        <div class="admin-navbar-right">
            <a href="../index.html" class="admin-nav-back"> Back to Site</a>
            <a href="logout.php"    class="admin-nav-logout">Logout</a>
            <button class="theme-toggle" id="themeToggle" aria-label="Toggle theme">🌙</button>
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

    function applyTheme(t){
        if(t==='dark'){ html.setAttribute('data-theme','dark'); btn.textContent='☀️'; }
        else          { html.removeAttribute('data-theme');     btn.textContent='🌙'; }
    }
    applyTheme(localStorage.getItem('ckh_theme')||'light');
    btn.addEventListener('click',function(){
        var next = html.getAttribute('data-theme')==='dark'?'light':'dark';
        localStorage.setItem('ckh_theme',next);
        applyTheme(next);
    });

    var burger = document.getElementById('adminHamburger');
    var nav    = document.getElementById('adminNavLinks');
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
})();
</script>