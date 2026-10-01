<?php
session_start();
if (!isset($_SESSION['admin_logged_in'])) { header("Location: login.php"); exit(); }
require_once(__DIR__ . "/../php/db_connect.php");

$limit = 5;
$page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
if ($page < 1) $page = 1;
$offset = ($page - 1) * $limit;

$search = ""; $statusFilter = ""; $dateFilter = "";
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
    if ($dateFilter === "today") $whereParts[] = "DATE(created_at) = CURDATE()";
    if ($dateFilter === "week")  $whereParts[] = "YEARWEEK(created_at, 1) = YEARWEEK(CURDATE(), 1)";
    if ($dateFilter === "month") $whereParts[] = "MONTH(created_at) = MONTH(CURDATE()) AND YEAR(created_at) = YEAR(CURDATE())";
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
    <script>(function(){ var s=localStorage.getItem('ckh_theme'); if(s==='dark') document.documentElement.setAttribute('data-theme','dark'); })();</script>
    <link rel="stylesheet" href="../css/style.css?v=7.5">
    <link rel="stylesheet" href="../css/admin.css?v=5.0">
</head>
<body>

<?php include("admin-nav.php"); ?>

<a class="back-link" href="dashboard.php">
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>
    <span>Back to Dashboard</span>
</a>

<div class="admin-container">

    <div class="admin-page-header">
        <h1>
            <span class="ckh-icon-circle creative admin-header-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
            </span>
            <span>Career Suggestions</span>
        </h1>
        <p>View and manage career suggestions submitted by users.</p>
    </div>

    <form method="GET" class="filter-bar">
        <input type="text" name="search" placeholder="Search by career, reason, suggester..." value="<?php echo htmlspecialchars($search); ?>">
        <select name="date">
            <option value="">All Dates</option>
            <option value="today" <?php if($dateFilter=='today') echo 'selected'; ?>>Today</option>
            <option value="week"  <?php if($dateFilter=='week')  echo 'selected'; ?>>This Week</option>
            <option value="month" <?php if($dateFilter=='month') echo 'selected'; ?>>This Month</option>
        </select>
        <select name="status">
            <option value="">All Status</option>
            <option value="unread" <?php if($statusFilter=='unread') echo 'selected'; ?>>Unread</option>
            <option value="read"   <?php if($statusFilter=='read')   echo 'selected'; ?>>Read</option>
        </select>
        <button type="submit">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
            <span>Filter</span>
        </button>
        <a href="suggestions.php" class="reset-link">Reset</a>
    </form>

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
                        <div class="table-actions">
                            <?php if ($row['status'] === 'unread'): ?>
                                <a class="action-read" href="delete.php?type=mark_read_suggestion&id=<?php echo $row['id']; ?>">
                                    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span>Mark Read</span>
                                </a>
                            <?php endif; ?>
                            <a class="action-delete" href="delete.php?type=suggestion&id=<?php echo $row['id']; ?>" onclick="return confirm('Delete this suggestion?');">
                                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                                <span>Delete</span>
                            </a>
                        </div>
                    </td>
                </tr>
            <?php endwhile; ?>
            </tbody>
        </table>

        <div class="pagination">
            <?php if ($page > 1): ?>
                <a href="?page=<?php echo $page-1; ?>&search=<?php echo urlencode($search); ?>&status=<?php echo urlencode($statusFilter); ?>&date=<?php echo urlencode($dateFilter); ?>">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>
                    <span>Previous</span>
                </a>
            <?php endif; ?>
            <span>Page <?php echo $page; ?> of <?php echo max(1, $totalPages); ?></span>
            <?php if ($page < $totalPages): ?>
                <a href="?page=<?php echo $page+1; ?>&search=<?php echo urlencode($search); ?>&status=<?php echo urlencode($statusFilter); ?>&date=<?php echo urlencode($dateFilter); ?>">
                    <span>Next</span>
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
                </a>
            <?php endif; ?>
        </div>
    </div>

    <div class="admin-actions admin-actions--center">
        <a class="admin-btn" href="export_suggestions.php">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            <span>Export to CSV</span>
        </a>
        <a class="admin-btn" href="delete.php?type=mark_all_read_suggestion" onclick="return confirm('Mark ALL suggestions as read?');">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 7 17l-5-5"/><path d="m22 10-7.5 7.5L13 16"/></svg>
            <span>Mark All as Read</span>
        </a>
    </div>

</div>
</body>
</html>