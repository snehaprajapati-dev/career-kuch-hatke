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
    $whereParts[] = "(name LIKE '%$search%' OR email LIKE '%$search%' OR subject LIKE '%$search%' OR message LIKE '%$search%' OR user_type LIKE '%$search%' OR telephone LIKE '%$search%')";
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
$countResult = mysqli_fetch_assoc(mysqli_query($conn, "SELECT COUNT(*) as total FROM contact_messages $whereClause"));
$totalRecords = $countResult['total'];
$totalPages = ceil($totalRecords / $limit);
$result = mysqli_query($conn, "SELECT * FROM contact_messages $whereClause ORDER BY created_at DESC LIMIT $limit OFFSET $offset");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Messages - Admin</title>
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
            <span class="ckh-icon-circle tech admin-header-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </span>
            <span>Contact Messages</span>
        </h1>
        <p>Manage and review all contact form submissions.</p>
    </div>

    <form method="GET" class="filter-bar">
        <input type="text" name="search" placeholder="Search by name, email, subject..." value="<?php echo htmlspecialchars($search); ?>">
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
        <a href="contacts.php" class="reset-link">Reset</a>
    </form>

    <div class="table-wrapper">
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Telephone</th>
                    <th>Subject</th>
                    <th>User Type</th>
                    <th>Message</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            <?php while ($row = mysqli_fetch_assoc($result)): ?>
                <tr>
                    <td><?php echo htmlspecialchars($row['name']); ?></td>
                    <td><?php echo htmlspecialchars($row['email']); ?></td>
                    <td><?php echo htmlspecialchars($row['telephone']); ?></td>
                    <td><?php echo htmlspecialchars($row['subject']); ?></td>
                    <td><?php echo htmlspecialchars($row['user_type']); ?></td>
                    <td><?php echo htmlspecialchars($row['message']); ?></td>
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
                                <a class="action-read" href="delete.php?type=mark_read&id=<?php echo $row['id']; ?>">
                                    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                                    <span>Mark Read</span>
                                </a>
                            <?php endif; ?>
                            <a class="action-delete" href="delete.php?type=contact&id=<?php echo $row['id']; ?>" onclick="return confirm('Delete this message?');">
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
        <a class="admin-btn" href="export.php">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            <span>Export to CSV</span>
        </a>
        <a class="admin-btn" href="delete.php?type=mark_all_read_contact" onclick="return confirm('Mark ALL contact messages as read?');">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 7 17l-5-5"/><path d="m22 10-7.5 7.5L13 16"/></svg>
            <span>Mark All as Read</span>
        </a>
    </div>

</div>
</body>
</html>