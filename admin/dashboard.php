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
$unreadCount = mysqli_fetch_assoc(mysqli_query($conn, "SELECT COUNT(*) as total FROM contact_messages WHERE status='unread'"))['total'];
$unreadSuggestionCount = mysqli_fetch_assoc(
    mysqli_query($conn, "SELECT COUNT(*) as total FROM career_suggestions WHERE status='unread'")
)['total'];

// Get latest contact
$latestContact = mysqli_fetch_assoc(mysqli_query($conn, "SELECT name, created_at FROM contact_messages ORDER BY created_at DESC LIMIT 1"));

// Get latest suggestion
$latestSuggestion = mysqli_fetch_assoc(mysqli_query($conn, "SELECT career_name, created_at FROM career_suggestions ORDER BY created_at DESC LIMIT 1"));
?>

<!DOCTYPE html>
<html>
<head>
    <title>Admin Dashboard - Career Kuch Hatke</title>
    <link rel="stylesheet" href="../css/admin.css">
    <link rel="stylesheet" href="../css/style.css">

</head>
<body>
    <?php include("admin-nav.php"); ?>

<div class="admin-container">
    <h1>Admin Dashboard</h1>

    <div class="stats">
        <div class="stat-box">
    <div class="stat-number"><?php echo $contactCount; ?></div>
    <div>📩 Total Contact Messages</div>
    <div >
        🔴 Unread: <?php echo $unreadCount; ?>
    </div>
            <?php if ($latestContact): ?>
                <div class="latest">Latest: <?php echo $latestContact['name']; ?> (<?php echo $latestContact['created_at']; ?>)</div>
            <?php endif; ?>
        </div>

        <div class="stat-box">
    <div class="stat-number"><?php echo $suggestionCount; ?></div>
    <div>💡 Total Career Suggestions</div>
    <div>
        🔴 Unread: <?php echo $unreadSuggestionCount; ?>
    </div>
            <?php if ($latestSuggestion): ?>
                <div class="latest">Latest: <?php echo $latestSuggestion['career_name']; ?> (<?php echo $latestSuggestion['created_at']; ?>)</div>
            <?php endif; ?>
        </div>
    </div>

    
<div>

    <a href="contacts.php">
        📩 View Contact Messages
    </a>

    <a href="suggestions.php" >
        💡 View Career Suggestions
    </a>

</div>
    <a class="logout" href="logout.php">Logout</a>
</div>

</body>
</html>