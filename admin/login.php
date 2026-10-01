<?php
session_start();

if (isset($_SESSION['admin_logged_in'])) {
    header("Location: dashboard.php");
    exit();
}

$hashed_password = '$2y$10$q2l5OfcZ2znXPlMDLTGLVe1ZIiLLyefL7lWypqk5cKlJS86z7DVpW'; // Password: sneha@admin19
$error = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $entered_password = $_POST['password'];
    if (password_verify($entered_password, $hashed_password)) {
        $_SESSION['admin_logged_in'] = true;
        header("Location: dashboard.php");
        exit();
    } else {
        $error = "Incorrect password!";
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Login - Career Kuch Hatke</title>
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
    })();
    </script>
    <link rel="stylesheet" href="../css/style.css?v=8.0">
    <link rel="stylesheet" href="../css/admin.css?v=6.0">
</head>
<body class="login-page">

<div class="login-box">
    <div class="login-emblem-wrap">
        <img src="../images/logo-navbar-light.png" alt="Career Kuch Hatke Logo" class="login-logo-img login-logo-img-light">
        <img src="../images/logo-navbar-dark.png" alt="Career Kuch Hatke Logo" class="login-logo-img login-logo-img-dark">
    </div>

    <h2>
        <span class="ckh-icon-circle tech login-lock-badge" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        </span>
        <span>Admin Login</span>
    </h2>
    <p class="login-subtitle">Career Kuch Hatke Administration</p>

    <form method="POST">
        <div class="password-wrapper">
            <input type="password" name="password" id="passwordInput" placeholder="Enter Password" required autocomplete="current-password">
            <button type="button" class="toggle-password" id="toggleBtn" aria-label="Show or hide password">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            </button>
        </div>
        <button type="submit" class="login-btn">
            <span>Login</span>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </button>
    </form>

    <?php if ($error): ?>
        <div class="error"><?php echo $error; ?></div>
    <?php endif; ?>
</div>

<script>
(function(){
    var input = document.getElementById('passwordInput');
    var btn   = document.getElementById('toggleBtn');
    var eyeSvg = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>';
    var eyeOffSvg = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>';

    if(btn && input){
        btn.addEventListener('click', function(){
            if(input.type === 'password'){
                input.type = 'text';
                btn.innerHTML = eyeOffSvg;
                btn.setAttribute('aria-label', 'Hide password');
            } else {
                input.type = 'password';
                btn.innerHTML = eyeSvg;
                btn.setAttribute('aria-label', 'Show password');
            }
        });
    }
})();
</script>

</body>
</html>