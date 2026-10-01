<?php
session_start();
if (!isset($_SESSION['admin_logged_in'])) { header("Location: login.php"); exit(); }
require_once(__DIR__ . "/../php/db_connect.php");

$limit = 5;
$page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
if ($page < 1) $page = 1;
$offset = ($page - 1) * $limit;

$search = ""; $statusFilter = ""; $dateFilter = ""; $sort = "newest";
$whereParts = [];

if (isset($_GET['search']) && $_GET['search'] !== "") {
    $search = mysqli_real_escape_string($conn, trim($_GET['search']));
    $whereParts[] = "(career_name LIKE '%$search%' OR career_reason LIKE '%$search%' OR suggester_name LIKE '%$search%')";
}
if (isset($_GET['status']) && $_GET['status'] !== "") {
    $statusFilter = mysqli_real_escape_string($conn, $_GET['status']);
    $whereParts[] = "status = '$statusFilter'";
}
if (isset($_GET['date']) && $_GET['date'] !== "") {
    $dateFilter = $_GET['date'];
    if ($dateFilter === "today") {
        $whereParts[] = "DATE(created_at) = CURDATE()";
    } elseif ($dateFilter === "week") {
        $whereParts[] = "created_at >= DATE_SUB(NOW(), INTERVAL 7 DAY)";
    } elseif ($dateFilter === "month") {
        $whereParts[] = "created_at >= DATE_SUB(NOW(), INTERVAL 30 DAY)";
    } elseif ($dateFilter === "3months") {
        $whereParts[] = "created_at >= DATE_SUB(NOW(), INTERVAL 90 DAY)";
    } elseif ($dateFilter === "older") {
        $whereParts[] = "created_at < DATE_SUB(NOW(), INTERVAL 90 DAY)";
    }
}

if (isset($_GET['sort']) && $_GET['sort'] === 'oldest') {
    $sort = "oldest";
    $orderBy = "ORDER BY created_at ASC";
} else {
    $sort = "newest";
    $orderBy = "ORDER BY created_at DESC";
}

$whereClause = !empty($whereParts) ? "WHERE " . implode(" AND ", $whereParts) : "";
$countResult = mysqli_fetch_assoc(mysqli_query($conn, "SELECT COUNT(*) as total FROM career_suggestions $whereClause"));
$totalRecords = (int)($countResult['total'] ?? 0);
$totalPages = ceil($totalRecords / $limit);
$result = mysqli_query($conn, "SELECT * FROM career_suggestions $whereClause $orderBy LIMIT $limit OFFSET $offset");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Career Suggestions - Admin</title>
    <script>(function(){ var s=localStorage.getItem('ckh_theme'); if(s==='dark') document.documentElement.setAttribute('data-theme','dark'); })();</script>
    <link rel="stylesheet" href="../css/style.css?v=8.0">
    <link rel="stylesheet" href="../css/admin.css?v=6.0">
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
            <option value="week"  <?php if($dateFilter=='week')  echo 'selected'; ?>>Past 7 Days</option>
            <option value="month" <?php if($dateFilter=='month') echo 'selected'; ?>>Past 30 Days</option>
            <option value="3months" <?php if($dateFilter=='3months') echo 'selected'; ?>>Past 3 Months</option>
            <option value="older" <?php if($dateFilter=='older') echo 'selected'; ?>>Older than 3 Months</option>
        </select>
        <select name="status">
            <option value="">All Status</option>
            <option value="unread" <?php if($statusFilter=='unread') echo 'selected'; ?>>Unread</option>
            <option value="read"   <?php if($statusFilter=='read')   echo 'selected'; ?>>Read</option>
        </select>
        <select name="sort">
            <option value="newest" <?php if($sort=='newest') echo 'selected'; ?>>Newest First</option>
            <option value="oldest" <?php if($sort=='oldest') echo 'selected'; ?>>Oldest First</option>
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
            <?php if ($totalRecords > 0 && mysqli_num_rows($result) > 0): ?>
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
            <?php else: ?>
                <tr>
                    <td colspan="6" class="table-empty-cell">
                        <div class="table-empty-state">
                            <div class="empty-icon-wrap" aria-hidden="true">
                                <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>
                                </svg>
                            </div>
                            <h3>No Suggestions Found</h3>
                            <p>
                                <?php
                                if ($dateFilter === 'today') {
                                    echo "You have not received any career suggestions today.";
                                } elseif ($dateFilter === 'week') {
                                    echo "No career suggestions found from the past 7 days.";
                                } elseif ($dateFilter === 'month') {
                                    echo "No career suggestions found from the past 30 days.";
                                } elseif ($dateFilter === '3months') {
                                    echo "No career suggestions found from the past 3 months.";
                                } elseif ($dateFilter === 'older') {
                                    echo "No career suggestions older than 3 months were found.";
                                } elseif (!empty($search)) {
                                    echo "No career suggestions match your search for \"<strong>" . htmlspecialchars($search) . "</strong>\".";
                                } elseif ($statusFilter === 'unread') {
                                    echo "You have no unread career suggestions. All caught up!";
                                } elseif ($statusFilter === 'read') {
                                    echo "No read career suggestions found.";
                                } else {
                                    echo "No career suggestions match your current filter criteria.";
                                }
                                ?>
                            </p>
                            <?php if (!empty($search) || !empty($dateFilter) || !empty($statusFilter) || $sort === 'oldest'): ?>
                                <a href="suggestions.php" class="empty-reset-btn">
                                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
                                    <span>Reset All Filters</span>
                                </a>
                            <?php endif; ?>
                        </div>
                    </td>
                </tr>
            <?php endif; ?>
            </tbody>
        </table>

        <?php if ($totalPages > 1): ?>
            <div class="pagination">
                <?php if ($page > 1): ?>
                    <a href="?page=<?php echo $page-1; ?>&search=<?php echo urlencode($search); ?>&status=<?php echo urlencode($statusFilter); ?>&date=<?php echo urlencode($dateFilter); ?>&sort=<?php echo urlencode($sort); ?>" class="pagination-btn pagination-prev">
                        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>
                        <span>Previous</span>
                    </a>
                <?php endif; ?>
                <span class="pagination-info">Page <strong><?php echo $page; ?></strong> of <strong><?php echo max(1, $totalPages); ?></strong></span>
                <?php if ($page < $totalPages): ?>
                    <a href="?page=<?php echo $page+1; ?>&search=<?php echo urlencode($search); ?>&status=<?php echo urlencode($statusFilter); ?>&date=<?php echo urlencode($dateFilter); ?>&sort=<?php echo urlencode($sort); ?>" class="pagination-btn pagination-next">
                        <span>Next</span>
                        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
                    </a>
                <?php endif; ?>
            </div>
        <?php elseif ($totalRecords > 0): ?>
            <div class="pagination">
                <span class="pagination-info">Showing all <strong><?php echo $totalRecords; ?></strong> <?php echo $totalRecords === 1 ? 'suggestion' : 'suggestions'; ?></span>
            </div>
        <?php endif; ?>
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