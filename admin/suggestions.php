<?php
session_start();

// Protect page
if (!isset($_SESSION['admin_logged_in'])) {
    header("Location: login.php");
    exit();
}

require_once("../php/db_connect.php");

// Fetch suggestions
$result = mysqli_query($conn, "SELECT * FROM career_suggestions ORDER BY created_at DESC");
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

<div class="admin-container">
    <a class="back-link" href="dashboard.php">← Back to Dashboard</a>
    <h1>💡 Career Suggestions</h1>

    <table>
        <tr>
            <th>Career Name</th>
            <th>Reason</th>
            <th>Suggester</th>
            <th>Date</th>
            <th>Action</th>
        </tr>

        <?php while ($row = mysqli_fetch_assoc($result)): ?>
        <tr>
            <td><?php echo htmlspecialchars($row['career_name']); ?></td>
            <td><?php echo htmlspecialchars($row['career_reason']); ?></td>
            <td><?php echo htmlspecialchars($row['suggester_name']); ?></td>
            <td><?php echo $row['created_at']; ?></td>
            <td>
    <a href="delete.php?type=suggestion&id=<?php echo $row['id']; ?>" 
       onclick="return confirm('Are you sure you want to delete this suggestion?');"
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