<?php
session_start();

if (isset($_SESSION['admin_logged_in'])) {
    header("Location: dashboard.php");
    exit();
}

$hashed_password = "$2y$10$.cEo7MYgE05CcvvC3gVYdueIbeh4B.Rnj9pD4B/CEd5sRwECJPJ0y";
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
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/admin.css">
</head>
<body class="login-page">

<div class="login-box">
    <h2>🔐 Admin Login</h2>
    <p class="login-subtitle">Career Kuch Hatke</p>

    <form method="POST">
        <div class="password-wrapper">
            <input type="password" name="password" id="passwordInput" placeholder="Enter Password" required autocomplete="current-password">
            <button type="button" class="toggle-password" id="toggleBtn" aria-label="Show/hide password">👁️</button>
        </div>
        <button type="submit" class="login-btn">Login →</button>
    </form>

    <?php if ($error): ?>
        <div class="error"><?php echo $error; ?></div>
    <?php endif; ?>
</div>

<script>
(function(){
    var input = document.getElementById('passwordInput');
    var btn   = document.getElementById('toggleBtn');
    btn.addEventListener('click', function(){
        if(input.type === 'password'){
            input.type = 'text';
            btn.textContent = '🙈';
        } else {
            input.type = 'password';
            btn.textContent = '👁️';
        }
    });
})();
</script>

</body>
</html>