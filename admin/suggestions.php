<?php
session_start();

// Protect page
if (!isset($_SESSION['admin_logged_in'])) {
    header("Location: login.php");
    exit();
}

require_once("../php/db_connect.php");

// Fetch suggestions
$limit = 5;
$page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
if ($page < 1) $page = 1;

$offset = ($page - 1) * $limit;

$search = "";
$statusFilter = "";
$dateFilter = "";
$whereParts = [];

// Search filter
if (isset($_GET['search']) && $_GET['search'] !== "") {
    $search = mysqli_real_escape_string($conn, $_GET['search']);
    $whereParts[] = "(career_name LIKE '%$search%' 
        OR career_reason LIKE '%$search%' 
        OR suggester_name LIKE '%$search%')";
}

// Status filter
if (isset($_GET['status']) && $_GET['status'] !== "") {
    $statusFilter = mysqli_real_escape_string($conn, $_GET['status']);
    $whereParts[] = "status = '$statusFilter'";
}

// 📅 Date filter
if (isset($_GET['date']) && $_GET['date'] !== "") {
    $dateFilter = $_GET['date'];

    if ($dateFilter === "today") {
        $whereParts[] = "DATE(created_at) = CURDATE()";
    }

    if ($dateFilter === "week") {
        $whereParts[] = "YEARWEEK(created_at, 1) = YEARWEEK(CURDATE(), 1)";
    }

    if ($dateFilter === "month") {
        $whereParts[] = "MONTH(created_at) = MONTH(CURDATE()) 
                         AND YEAR(created_at) = YEAR(CURDATE())";
    }
}

// Combine conditions
$whereClause = "";
if (!empty($whereParts)) {
    $whereClause = "WHERE " . implode(" AND ", $whereParts);
}


// Main query
$query = "
    SELECT * FROM career_suggestions
    $whereClause
    ORDER BY created_at DESC
    LIMIT $limit OFFSET $offset
";

// Count total records
$countQuery = "SELECT COUNT(*) as total FROM career_suggestions $whereClause";
$countResult = mysqli_fetch_assoc(mysqli_query($conn, $countQuery));
$totalRecords = $countResult['total'];
$totalPages = ceil($totalRecords / $limit);
$result = mysqli_query($conn, $query);
?>

<!DOCTYPE html>
<html>
<head>
    <title>Career Suggestions - Admin</title>
<link rel="stylesheet" href="../css/style.css">
<link rel="stylesheet" href="../css/admin.css">
</head>
<body>
    <?php include("admin-nav.php"); ?>

<div class="admin-container">
    <a class="back-link" href="dashboard.php">← Back to Dashboard</a>
    <h1>💡 Career Suggestions</h1>
<form method="GET">

    <input type="text" name="search"
           placeholder="Search by career, reason, suggester..."
           value="<?php echo htmlspecialchars($search); ?>">
    
    <select name="date">
    <option value="">All Dates</option>

    <option value="today"
        <?php if ($dateFilter == 'today') echo 'selected'; ?>>
        Today
    </option>

    <option value="week"
        <?php if ($dateFilter == 'week') echo 'selected'; ?>>
        This Week
    </option>

    <option value="month"
        <?php if ($dateFilter == 'month') echo 'selected'; ?>>
        This Month
    </option>
</select>

    <select name="status">
        <option value="">All</option>
        <option value="unread" <?php if ($statusFilter == 'unread') echo 'selected'; ?>>Unread</option>
        <option value="read" <?php if ($statusFilter == 'read') echo 'selected'; ?>>Read</option>
    </select>

    <button type="submit">Filter</button>

    <a href="suggestions.php">Reset</a>
</form>
    <a href="export_suggestions.php">
    📥 Export Suggestions to CSV
</a>

    <a href="delete.php?type=mark_all_read_suggestion"
   onclick="return confirm('Mark ALL suggestions as read?');">
    ✅ Mark All as Read
</a>

    <table>
        <tr>
            <th>Career Name</th>
            <th>Reason</th>
            <th>Suggester</th>
            <th>Date</th>
<th>Status</th>
<th>Action</th>
        </tr>

        <?php while ($row = mysqli_fetch_assoc($result)): ?>
        <tr>
            <td><?php echo htmlspecialchars($row['career_name']); ?></td>
            <td><?php echo htmlspecialchars($row['career_reason']); ?></td>
            <td><?php echo htmlspecialchars($row['suggester_name']); ?></td>
            <td><?php echo $row['created_at']; ?></td>


<td>
    <?php if ($row['status'] === 'unread'): ?>
        <span>Unread</span>
    <?php else: ?>
        <span>Read</span>
    <?php endif; ?>
</td>

<td>
    <?php if ($row['status'] === 'unread'): ?>
        <a href="delete.php?type=mark_read_suggestion&id=<?php echo $row['id']; ?>">
           Mark as Read
        </a>
    <?php endif; ?>

    <a href="delete.php?type=suggestion&id=<?php echo $row['id']; ?>"
       onclick="return confirm('Are you sure?');">
       Delete
    </a>
</td>
        </tr>
        <?php endwhile; ?>

    </table>
    <div>
    <?php if ($page > 1): ?>
       <a href="?page=<?php echo $page - 1; ?>
&search=<?php echo urlencode($search); ?>
&status=<?php echo urlencode($statusFilter); ?>
&date=<?php echo urlencode($dateFilter); ?>">
            ⬅ Previous
        </a>
    <?php endif; ?>

    <span>
        Page <?php echo $page; ?> of <?php echo $totalPages; ?>
    </span>

    <?php if ($page < $totalPages): ?>
        <a href="?page=<?php echo $page + 1; ?>
&search=<?php echo urlencode($search); ?>
&status=<?php echo urlencode($statusFilter); ?>
&date=<?php echo urlencode($dateFilter); ?>">
            Next ➡
        </a>
    <?php endif; ?>
</div>

</div>

</body>
</html>