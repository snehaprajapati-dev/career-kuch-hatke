<?php
session_start();

// Protect page
if (!isset($_SESSION['admin_logged_in'])) {
    header("Location: login.php");
    exit();
}

require_once("../php/db_connect.php");

// Fetch contact messages
$search = "";

if (isset($_GET['search'])) {
    $search = mysqli_real_escape_string($conn, $_GET['search']);
    $query = "
    SELECT * FROM contact_messages 
    WHERE name LIKE '%$search%' 
    OR email LIKE '%$search%' 
    OR subject LIKE '%$search%' 
    OR message LIKE '%$search%' 
    OR user_type LIKE '%$search%'
    OR telephone LIKE '%$search%'
    ORDER BY created_at DESC
";
} else {
    $query = "SELECT * FROM contact_messages ORDER BY created_at DESC";
}

$result = mysqli_query($conn, $query);
?>

<!DOCTYPE html>
<html>
<head>
    <title>Contact Messages - Admin</title>
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

<div class="admin-container">
    <a class="back-link" href="dashboard.php">← Back to Dashboard</a>
    <h1>📩 Contact Messages</h1>
<form method="GET" style="margin-bottom:20px;">
    <input type="text" name="search" 
           placeholder="Search by name, email, subject..." 
           value="<?php echo htmlspecialchars($search); ?>"
           style="padding:10px; width:70%; border-radius:8px; border:1px solid #ccc;">
    <button type="submit" 
            style="padding:10px 15px; background:var(--accent); border:none; border-radius:8px; cursor:pointer;">
        Search
    </button>
    <a href="contacts.php" style="margin-left:10px; font-weight:bold; text-decoration:none;">
        Reset
    </a>
</form>
    <table>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Telephone</th>
            <th>Subject</th>
            <th>User Type</th>
            <th>Message</th>
            <th>Date</th>
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
    <a href="delete.php?type=contact&id=<?php echo $row['id']; ?>" 
       onclick="return confirm('Are you sure you want to delete this message?');"
       style="color:red; font-weight:bold;">
       Delete
    </a>
</td>
        </tr>
        <?php endwhile; ?>

    </table>

</div>

</body>
</html>