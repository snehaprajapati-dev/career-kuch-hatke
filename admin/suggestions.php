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

// Combine conditions
$whereClause = "";
if (!empty($whereParts)) {
    $whereClause = "WHERE " . implode(" AND ", $whereParts);
}

// Count total records
$countQuery = "SELECT COUNT(*) as total FROM career_suggestions $whereClause";
$countResult = mysqli_fetch_assoc(mysqli_query($conn, $countQuery));
$totalRecords = $countResult['total'];
$totalPages = ceil($totalRecords / $limit);

// Main query
$query = "
    SELECT * FROM career_suggestions
    $whereClause
    ORDER BY created_at DESC
    LIMIT $limit OFFSET $offset
";

$result = mysqli_query($conn, $query);

// Count total records
$countQuery = "SELECT COUNT(*) as total FROM career_suggestions $whereClause";
$countResult = mysqli_fetch_assoc(mysqli_query($conn, $countQuery));
$totalRecords = $countResult['total'];

$totalPages = ceil($totalRecords / $limit);

// Main query
$query = "
    SELECT * FROM career_suggestions
    $whereClause
    ORDER BY created_at DESC
    LIMIT $limit OFFSET $offset
";

$result = mysqli_query($conn, $query);
?>

<!DOCTYPE html>
<html>
<head>
    <title>Career Suggestions - Admin</title>
    <link rel="stylesheet" href="../css/style.css">
    <style>
        body {
            background: var(--bg-light);
            font-family: 'Montserrat Alternates', sans-serif;
        }
        .admin-container {
            max-width: 1100px;
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
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            padding: 12px;
            border-bottom: 1px solid #ddd;
            text-align: left;
        }
        th {
            background: var(--accent);
            color: var(--text-dark);
        }
        tr:hover {
            background: #f9f9f9;
        }
        .back-link {
            display: inline-block;
            margin-bottom: 20px;
            text-decoration: none;
            font-weight: bold;
            color: var(--primary);
        }
    </style>
</head>
<body>
    <?php include("admin-nav.php"); ?>

<div class="admin-container">
    <a class="back-link" href="dashboard.php">← Back to Dashboard</a>
    <h1>💡 Career Suggestions</h1>
<form method="GET" style="margin-bottom:20px;">

    <input type="text" name="search"
           placeholder="Search by career, reason, suggester..."
           value="<?php echo htmlspecialchars($search); ?>">

    <select name="status" style="padding:8px;">
        <option value="">All</option>
        <option value="unread" <?php if ($statusFilter == 'unread') echo 'selected'; ?>>Unread</option>
        <option value="read" <?php if ($statusFilter == 'read') echo 'selected'; ?>>Read</option>
    </select>

    <button type="submit">Filter</button>

    <a href="suggestions.php">Reset</a>
</form>
    <a href="export_suggestions.php"
   style="display:inline-block;
          margin-bottom:20px;
          padding:10px 15px;
          background:var(--primary);
          color:white;
          text-decoration:none;
          border-radius:8px;">
    📥 Export Suggestions to CSV
</a>

    <a href="delete.php?type=mark_all_read_suggestion"
   onclick="return confirm('Mark ALL suggestions as read?');"
   style="display:inline-block;
          margin-left:10px;
          padding:10px 15px;
          background:green;
          color:white;
          text-decoration:none;
          border-radius:8px;">
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
<td><?php echo $row['status']; ?></td>

<td>
    <?php if ($row['status'] === 'unread'): ?>
        <span style="color:red; font-weight:bold;">Unread</span>
    <?php else: ?>
        <span style="color:green; font-weight:bold;">Read</span>
    <?php endif; ?>
</td>

<td>
    <?php if ($row['status'] === 'unread'): ?>
        <a href="delete.php?type=mark_read_suggestion&id=<?php echo $row['id']; ?>"
           style="margin-right:10px; color:blue;">
           Mark as Read
        </a>
    <?php endif; ?>

    <a href="delete.php?type=suggestion&id=<?php echo $row['id']; ?>"
       onclick="return confirm('Are you sure?');"
       style="color:red;">
       Delete
    </a>
</td>
        </tr>
        <?php endwhile; ?>

    </table>
    <div style="margin-top:20px; text-align:center;">
    <?php if ($page > 1): ?>
        <a href="?page=<?php echo $page - 1; ?>&search=<?php echo urlencode($search); ?>&status=<?php echo urlencode($statusFilter); ?>">
            ⬅ Previous
        </a>
    <?php endif; ?>

    <span style="margin:0 10px;">
        Page <?php echo $page; ?> of <?php echo $totalPages; ?>
    </span>

    <?php if ($page < $totalPages): ?>
        <a href="?page=<?php echo $page + 1; ?>&search=<?php echo urlencode($search); ?>&status=<?php echo urlencode($statusFilter); ?>">
            Next ➡
        </a>
    <?php endif; ?>
</div>

</div>

</body>
</html>