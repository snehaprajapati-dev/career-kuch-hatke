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
<html>
<head>
    <title>Admin Login - Career Kuch Hatke</title>
    <link rel="stylesheet" href="../css/style.css">
    <style>
        body {
            background: var(--bg-light);
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            font-family: 'Montserrat Alternates', sans-serif;
        }

        .login-box {
            background: var(--bg-white);
            padding: 40px;
            border-radius: 20px;
            width: 350px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            text-align: center;
            border: 3px solid var(--accent);
        }

        .login-box h2 {
            color: var(--primary);
            margin-bottom: 25px;
        }

        .login-box input {
            width: 100%;
            padding: 12px;
            border-radius: 10px;
            border: 1px solid #ccc;
            margin-bottom: 20px;
        }

        .login-box button {
            width: 100%;
            padding: 12px;
            background: linear-gradient(135deg, var(--accent), var(--primary));
            color: white;
            border: none;
            border-radius: 10px;
            font-weight: 600;
            cursor: pointer;
            transition: 0.3s;
        }

        .login-box button:hover {
            transform: translateY(-2px);
        }

        .error {
            color: red;
            margin-top: 15px;
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