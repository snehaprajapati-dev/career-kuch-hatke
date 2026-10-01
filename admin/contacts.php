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
    $whereParts[] = "(name LIKE '%$search%' OR email LIKE '%$search%' OR subject LIKE '%$search%' OR message LIKE '%$search%' OR user_type LIKE '%$search%' OR telephone LIKE '%$search%')";
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
$countResult = mysqli_fetch_assoc(mysqli_query($conn, "SELECT COUNT(*) as total FROM contact_messages $whereClause"));
$totalRecords = (int)($countResult['total'] ?? 0);
$totalPages = ceil($totalRecords / $limit);
$result = mysqli_query($conn, "SELECT * FROM contact_messages $whereClause $orderBy LIMIT $limit OFFSET $offset");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Messages - Admin</title>
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
            <?php if ($totalRecords > 0 && mysqli_num_rows($result) > 0): ?>
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
            <?php else: ?>
                <tr>
                    <td colspan="9" class="table-empty-cell">
                        <div class="table-empty-state">
                            <div class="empty-icon-wrap" aria-hidden="true">
                                <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                                </svg>
                            </div>
                            <h3>No Messages Found</h3>
                            <p>
                                <?php
                                if ($dateFilter === 'today') {
                                    echo "You have not received any contact messages today.";
                                } elseif ($dateFilter === 'week') {
                                    echo "No contact messages found from the past 7 days.";
                                } elseif ($dateFilter === 'month') {
                                    echo "No contact messages found from the past 30 days.";
                                } elseif ($dateFilter === '3months') {
                                    echo "No contact messages found from the past 3 months.";
                                } elseif ($dateFilter === 'older') {
                                    echo "No contact messages older than 3 months were found.";
                                } elseif (!empty($search)) {
                                    echo "No contact messages match your search for \"<strong>" . htmlspecialchars($search) . "</strong>\".";
                                } elseif ($statusFilter === 'unread') {
                                    echo "You have no unread contact messages. All caught up!";
                                } elseif ($statusFilter === 'read') {
                                    echo "No read contact messages found.";
                                } else {
                                    echo "No contact messages match your current filter criteria.";
                                }
                                ?>
                            </p>
                            <?php if (!empty($search) || !empty($dateFilter) || !empty($statusFilter) || $sort === 'oldest'): ?>
                                <a href="contacts.php" class="empty-reset-btn">
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
                <span class="pagination-info">Showing all <strong><?php echo $totalRecords; ?></strong> <?php echo $totalRecords === 1 ? 'message' : 'messages'; ?></span>
            </div>
        <?php endif; ?>
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