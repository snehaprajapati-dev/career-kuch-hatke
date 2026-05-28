<?php
session_start();
if (!isset($_SESSION['admin_logged_in'])) {
    header("Location: login.php");
    exit();
}
require_once("../php/db_connect.php");

$contactCount     = mysqli_fetch_assoc(mysqli_query($conn, "SELECT COUNT(*) as total FROM contact_messages"))['total'];
$suggestionCount  = mysqli_fetch_assoc(mysqli_query($conn, "SELECT COUNT(*) as total FROM career_suggestions"))['total'];
$unreadCount      = mysqli_fetch_assoc(mysqli_query($conn, "SELECT COUNT(*) as total FROM contact_messages WHERE status='unread'"))['total'];
$unreadSuggCount  = mysqli_fetch_assoc(mysqli_query($conn, "SELECT COUNT(*) as total FROM career_suggestions WHERE status='unread'"))['total'];
$latestContact    = mysqli_fetch_assoc(mysqli_query($conn, "SELECT name, created_at FROM contact_messages ORDER BY created_at DESC LIMIT 1"));
$latestSuggestion = mysqli_fetch_assoc(mysqli_query($conn, "SELECT career_name, created_at FROM career_suggestions ORDER BY created_at DESC LIMIT 1"));
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard - Career Kuch Hatke</title>
    <script>
    (function(){
        var s = localStorage.getItem('ckh_theme');
        if(s==='dark') document.documentElement.setAttribute('data-theme','dark');
    })();
    </script>
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/admin.css">
</head>
<body>

<?php include("admin-nav.php"); ?>

<div class="admin-container">

    <div class="admin-page-header">
        <h1>📊 Admin Dashboard</h1>
        <p>Manage contacts, career suggestions, and admin activity.</p>
    </div>

    <div class="dashboard-welcome">
        <h2>Welcome Back 👋</h2>
        <p>Here's what's happening on Career Kuch Hatke today.</p>
    </div>

    <div class="admin-stats">

        <div class="stat-box">
            <h3>📩 Contact Messages</h3>
            <div class="stat-number"><?php echo $contactCount; ?></div>
            <p>Unread: <strong><?php echo $unreadCount; ?></strong></p>
            <div class="mini-stats">
                <span>Total Records</span>
                <strong><?php echo $contactCount; ?></strong>
            </div>
            <?php if ($latestContact): ?>
                <div class="latest">Latest: <?php echo htmlspecialchars($latestContact['name']); ?> &mdash; <?php echo $latestContact['created_at']; ?></div>
            <?php endif; ?>
            <a class="stat-box-link" href="contacts.php">📩 View Contact Messages</a>
        </div>

        <div class="stat-box">
            <h3>💡 Career Suggestions</h3>
            <div class="stat-number"><?php echo $suggestionCount; ?></div>
            <p>Unread: <strong><?php echo $unreadSuggCount; ?></strong></p>
            <div class="mini-stats">
                <span>Total Records</span>
                <strong><?php echo $suggestionCount; ?></strong>
            </div>
            <?php if ($latestSuggestion): ?>
                <div class="latest">Latest: <?php echo htmlspecialchars($latestSuggestion['career_name']); ?> &mdash; <?php echo $latestSuggestion['created_at']; ?></div>
            <?php endif; ?>
            <a class="stat-box-link" href="suggestions.php">💡 View Career Suggestions</a>
        </div>

    </div>

</div>
</body>
</html>