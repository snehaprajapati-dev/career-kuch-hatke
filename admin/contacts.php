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
$whereParts = [];

// Search filter
if (isset($_GET['search']) && $_GET['search'] !== "") {
    $search = mysqli_real_escape_string($conn, $_GET['search']);
    $whereParts[] = "(name LIKE '%$search%' 
        OR email LIKE '%$search%' 
        OR subject LIKE '%$search%' 
        OR message LIKE '%$search%' 
        OR user_type LIKE '%$search%'
        OR telephone LIKE '%$search%')";
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

// Get total records
$countQuery = "SELECT COUNT(*) as total FROM contact_messages $whereClause";
$countResult = mysqli_fetch_assoc(mysqli_query($conn, $countQuery));
$totalRecords = $countResult['total'];

$totalPages = ceil($totalRecords / $limit);

// Main paginated query
$query = "
    SELECT * FROM contact_messages 
    $whereClause
    ORDER BY created_at DESC 
    LIMIT $limit OFFSET $offset
";

$result = mysqli_query($conn, $query);
?>

<!DOCTYPE html>
<html>
<head>
    <title>Contact Messages - Admin</title>
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
    <?php include("admin-nav.php"); ?>

<div class="admin-container">
    <a class="back-link" href="dashboard.php">← Back to Dashboard</a>
    <h1>📩 Contact Messages</h1>

    <form method="GET" style="margin-bottom:20px;">

    <input type="text" name="search"
           placeholder="Search by name, email, subject..."
           value="<?php echo htmlspecialchars($search); ?>">

    <select name="status" style="padding:8px;">
        <option value="">All</option>
        <option value="unread" <?php if ($statusFilter == 'unread') echo 'selected'; ?>>Unread</option>
        <option value="read" <?php if ($statusFilter == 'read') echo 'selected'; ?>>Read</option>
    </select>

    <button type="submit">Filter</button>

    <a href="contacts.php">Reset</a>
        </form>
        
                    <a href="export.php"
   style="display:inline-block;
          margin-bottom:20px;
          padding:10px 15px;
          background:var(--primary);
          color:white;
          text-decoration:none;
          border-radius:8px;">
    📥 Export to CSV
</a>
    
    <a href="delete.php?type=mark_all_read_contact"
   onclick="return confirm('Mark ALL contact messages as read?');"
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
        <span style="color:red; font-weight:bold;">Unread</span>
    <?php else: ?>
        <span style="color:green; font-weight:bold;">Read</span>
    <?php endif; ?>
</td>
<td>
    <?php if ($row['status'] === 'unread'): ?>
        <a href="delete.php?type=mark_read&id=<?php echo $row['id']; ?>"
           style="margin-right:10px; color:blue;">
           Mark as Read
        </a>
    <?php endif; ?>

    <a href="delete.php?type=contact&id=<?php echo $row['id']; ?>"
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