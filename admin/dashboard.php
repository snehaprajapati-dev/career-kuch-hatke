<?php
session_start();
if (!isset($_SESSION['admin_logged_in'])) {
    header("Location: login.php");
    exit();
}
require_once(__DIR__ . "/../php/db_connect.php");

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
    <link rel="stylesheet" href="../css/style.css?v=8.0">
    <link rel="stylesheet" href="../css/admin.css?v=6.0">
</head>
<body>

<?php include("admin-nav.php"); ?>

<div class="admin-container">

    <div class="admin-page-header">
        <h1>
            <span class="ckh-icon-circle business admin-header-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="5"/><rect x="14" y="12" width="7" height="9"/><rect x="3" y="16" width="7" height="5"/></svg>
            </span>
            <span>Admin Dashboard</span>
        </h1>
        <p>Manage contacts, career suggestions, and admin activity.</p>
    </div>

    <div class="dashboard-welcome">
        <h2>Welcome Back, Admin</h2>
        <p>Here's what's happening on Career Kuch Hatke today.</p>
    </div>

    <div class="admin-stats">

        <div class="stat-box">
            <h3>
                <span class="ckh-icon-circle tech stat-icon-badge" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </span>
                <span>Contact Messages</span>
            </h3>
            <div class="stat-number"><?php echo $contactCount; ?></div>
            <p>Unread: <strong><?php echo $unreadCount; ?></strong></p>
            <div class="mini-stats">
                <span>Total Records</span>
                <strong><?php echo $contactCount; ?></strong>
            </div>
            <?php if ($latestContact): ?>
                <div class="latest">Latest: <?php echo htmlspecialchars($latestContact['name']); ?> &mdash; <?php echo $latestContact['created_at']; ?></div>
            <?php endif; ?>
            <a class="stat-box-link" href="contacts.php">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <span>View Contact Messages</span>
            </a>
        </div>

        <div class="stat-box">
            <h3>
                <span class="ckh-icon-circle creative stat-icon-badge" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
                </span>
                <span>Career Suggestions</span>
            </h3>
            <div class="stat-number"><?php echo $suggestionCount; ?></div>
            <p>Unread: <strong><?php echo $unreadSuggCount; ?></strong></p>
            <div class="mini-stats">
                <span>Total Records</span>
                <strong><?php echo $suggestionCount; ?></strong>
            </div>
            <?php if ($latestSuggestion): ?>
                <div class="latest">Latest: <?php echo htmlspecialchars($latestSuggestion['career_name']); ?> &mdash; <?php echo $latestSuggestion['created_at']; ?></div>
            <?php endif; ?>
            <a class="stat-box-link" href="suggestions.php">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
                <span>View Career Suggestions</span>
            </a>
        </div>

    </div>

</div>
</body>
</html>