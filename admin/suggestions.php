<?php
session_start();

if (!isset($_SESSION['admin_logged_in'])) {
    header("Location: login.php");
    exit();
}

require_once("../php/db_connect.php");

$limit = 5;
$page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
if ($page < 1) $page = 1;
$offset = ($page - 1) * $limit;

$search = "";
$statusFilter = "";
$dateFilter = "";
$whereParts = [];

if (isset($_GET['search']) && $_GET['search'] !== "") {
    $search = mysqli_real_escape_string($conn, $_GET['search']);
    $whereParts[] = "(career_name LIKE '%$search%' OR career_reason LIKE '%$search%' OR suggester_name LIKE '%$search%')";
}

if (isset($_GET['status']) && $_GET['status'] !== "") {
    $statusFilter = mysqli_real_escape_string($conn, $_GET['status']);
    $whereParts[] = "status = '$statusFilter'";
}

if (isset($_GET['date']) && $_GET['date'] !== "") {
    $dateFilter = $_GET['date'];
    if ($dateFilter === "today")
        $whereParts[] = "DATE(created_at) = CURDATE()";
    if ($dateFilter === "week")
        $whereParts[] = "YEARWEEK(created_at, 1) = YEARWEEK(CURDATE(), 1)";
    if ($dateFilter === "month")
        $whereParts[] = "MONTH(created_at) = MONTH(CURDATE()) AND YEAR(created_at) = YEAR(CURDATE())";
}

$whereClause = !empty($whereParts) ? "WHERE " . implode(" AND ", $whereParts) : "";

$countResult = mysqli_fetch_assoc(mysqli_query($conn, "SELECT COUNT(*) as total FROM career_suggestions $whereClause"));
$totalRecords = $countResult['total'];
$totalPages = ceil($totalRecords / $limit);

$result = mysqli_query($conn, "SELECT * FROM career_suggestions $whereClause ORDER BY created_at DESC LIMIT $limit OFFSET $offset");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Career Suggestions - Admin</title>
    <script>
    (function(){
        var s = localStorage.getItem('ckh_theme');
        if (s === 'dark') document.documentElement.setAttribute('data-theme','dark');
    })();
    </script>
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/admin.css">
</head>
<body>

<?php include("admin-nav.php"); ?>

<a class="back-link" href="dashboard.php">← Back to Dashboard</a>

<div class="admin-container">
    <h1>💡 Career Suggestions</h1>

    <form method="GET" class="filter-bar">
        <input type="text" name="search"
               placeholder="Search by career, reason, suggester..."
               value="<?php echo htmlspecialchars($search); ?>">

        <select name="date">
            <option value="">All Dates</option>
            <option value="today"  <?php if ($dateFilter == 'today')  echo 'selected'; ?>>Today</option>
            <option value="week"   <?php if ($dateFilter == 'week')   echo 'selected'; ?>>This Week</option>
            <option value="month"  <?php if ($dateFilter == 'month')  echo 'selected'; ?>>This Month</option>
        </select>

        <select name="status">
            <option value="">All</option>
            <option value="unread" <?php if ($statusFilter == 'unread') echo 'selected'; ?>>Unread</option>
            <option value="read"   <?php if ($statusFilter == 'read')   echo 'selected'; ?>>Read</option>
        </select>

        <button type="submit">Filter</button>
        <a href="suggestions.php" class="reset-link">Reset</a>
    </form>

    <div class="admin-actions">
        <a class="admin-btn" href="export_suggestions.php">📥 Export to CSV</a>
        <a class="admin-btn" href="delete.php?type=mark_all_read_suggestion"
           onclick="return confirm('Mark ALL suggestions as read?');">✅ Mark All as Read</a>
    </div>

    <div class="table-wrapper">
        <table>
            <thead>
                <tr>
                    <th>Career Name</th>
                    <th>Reason</th>
                    <th>Suggester</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            <?php while ($row = mysqli_fetch_assoc($result)): ?>
                <tr>
                    <td><?php echo htmlspecialchars($row['career_name']); ?></td>
                    <td><?php echo htmlspecialchars($row['career_reason']); ?></td>
                    <td><?php echo htmlspecialchars($row['suggester_name']); ?></td>
                    <td><?php echo $row['created_at']; ?></td>
                    <td>
                        <?php if ($row['status'] === 'unread'): ?>
                            <span class="status-badge status-unread">Unread</span>
                        <?php else: ?>
                            <span class="status-badge status-read">Read</span>
                        <?php endif; ?>
                    </td>
                    <td>
                        <?php if ($row['status'] === 'unread'): ?>
                            <a href="delete.php?type=mark_read_suggestion&id=<?php echo $row['id']; ?>">✓ Mark Read</a>
                        <?php endif; ?>
                        <a href="delete.php?type=suggestion&id=<?php echo $row['id']; ?>"
                           onclick="return confirm('Delete this suggestion?');">🗑 Delete</a>
                    </td>
                </tr>
            <?php endwhile; ?>
            </tbody>
        </table>

        <div class="pagination">
            <?php if ($page > 1): ?>
                <a href="?page=<?php echo $page-1; ?>&search=<?php echo urlencode($search); ?>&status=<?php echo urlencode($statusFilter); ?>&date=<?php echo urlencode($dateFilter); ?>">⬅ Previous</a>
            <?php endif; ?>
            <span>Page <?php echo $page; ?> of <?php echo max(1,$totalPages); ?></span>
            <?php if ($page < $totalPages): ?>
                <a href="?page=<?php echo $page+1; ?>&search=<?php echo urlencode($search); ?>&status=<?php echo urlencode($statusFilter); ?>&date=<?php echo urlencode($dateFilter); ?>">Next ➡</a>
            <?php endif; ?>
        </div>
    </div>
</div>
</body>
</html>