<?php
session_start();

// If already logged in, go to dashboard
if (isset($_SESSION['admin_logged_in'])) {
    header("Location: dashboard.php");
    exit();
}

// Change this password to something strong
$hashed_password = "$2y$10$D9BJ.kiKLGbs5e6oDRMyRebi81HJBDP1ubaVe61ONFggB3q6ONZGa"; 

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
<html>
<head>
    <title>Admin Login - Career Kuch Hatke</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f4f4f4;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .login-box {
            background: white;
            padding: 40px;
            border-radius: 10px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.1);
            width: 300px;
            text-align: center;
        }
        input {
            width: 100%;
            padding: 10px;
            margin-top: 15px;
        }
        button {
            width: 100%;
            padding: 10px;
            margin-top: 15px;
            background: #6a1b9a;
            color: white;
            border: none;
            cursor: pointer;
        }
        button:hover {
            background: #4a148c;
        }
        .error {
            color: red;
            margin-top: 10px;
        }
    </style>
</head>
<body>

<div class="login-box">
    <h2>Admin Login</h2>
    <form method="POST">
        <input type="password" name="password" placeholder="Enter Password" required>
        <button type="submit">Login</button>
    </form>
    <?php if ($error): ?>
        <div class="error"><?php echo $error; ?></div>
    <?php endif; ?>
</div>

</body>
</html>