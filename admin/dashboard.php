<?php
session_start();

if (!isset($_SESSION['admin_logged_in'])) {
    header("Location: login.php");
    exit();
}

require_once("../php/db_connect.php");

// Get counts
$contactCount = mysqli_fetch_assoc(mysqli_query($conn, "SELECT COUNT(*) as total FROM contact_messages"))['total'];
$suggestionCount = mysqli_fetch_assoc(mysqli_query($conn, "SELECT COUNT(*) as total FROM career_suggestions"))['total'];

// Get latest contact
$latestContact = mysqli_fetch_assoc(mysqli_query($conn, "SELECT name, created_at FROM contact_messages ORDER BY created_at DESC LIMIT 1"));

// Get latest suggestion
$latestSuggestion = mysqli_fetch_assoc(mysqli_query($conn, "SELECT career_name, created_at FROM career_suggestions ORDER BY created_at DESC LIMIT 1"));
?>

<!DOCTYPE html>
<html>
<head>
    <title>Admin Dashboard - Career Kuch Hatke</title>
    <link rel="stylesheet" href="../css/style.css">
    <style>
        body {
            background: var(--bg-light);
            font-family: 'Montserrat Alternates', sans-serif;
        }
        .admin-container {
            max-width: 1000px;
            margin: 60px auto;
            background: var(--bg-white);
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        }
        h1 {
            color: var(--primary);
            margin-bottom: 30px;
        }
        .stats {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-bottom: 40px;
        }
        .stat-box {
            background: var(--bg-light);
            padding: 25px;
            border-radius: 15px;
            text-align: center;
            border: 3px solid var(--accent);
        }
        .stat-number {
            font-size: 2rem;
            font-weight: bold;
            color: var(--primary);
        }
        .admin-links a {
            display: block;
            margin-bottom: 15px;
            padding: 15px;
            background: var(--accent);
            color: var(--text-dark);
            text-decoration: none;
            border-radius: 10px;
            font-weight: 600;
            transition: 0.3s;
        }
        .admin-links a:hover {
            background: var(--primary);
            color: white;
        }
        .logout {
            margin-top: 30px;
            display: inline-block;
            color: red;
            text-decoration: none;
            font-weight: bold;
        }
        .latest {
            margin-top: 20px;
            font-size: 0.9rem;
            color: var(--text-gray);
        }
    </style>
</head>
<body>

<div class="admin-container">
    <h1>Admin Dashboard</h1>

    <div class="stats">
        <div class="stat-box">
            <div class="stat-number"><?php echo $contactCount; ?></div>
            <div>📩 Total Contact Messages</div>
            <?php if ($latestContact): ?>
                <div class="latest">Latest: <?php echo $latestContact['name']; ?> (<?php echo $latestContact['created_at']; ?>)</div>
            <?php endif; ?>
        </div>

        <div class="stat-box">
            <div class="stat-number"><?php echo $suggestionCount; ?></div>
            <div>💡 Total Career Suggestions</div>
            <?php if ($latestSuggestion): ?>
                <div class="latest">Latest: <?php echo $latestSuggestion['career_name']; ?> (<?php echo $latestSuggestion['created_at']; ?>)</div>
            <?php endif; ?>
        </div>
    </div>

    <div class="admin-links">
        <a href="contacts.php">📩 View Contact Messages</a>
        <a href="suggestions.php">💡 View Career Suggestions</a>
    </div>

    <a class="logout" href="logout.php">Logout</a>
</div>

</body>
</html>