<?php
session_start();

if (!isset($_SESSION['admin_logged_in'])) {
    header("Location: login.php");
    exit();
}

require_once("../php/db_connect.php");

// Get counts
$contactCount = mysqli_fetch_assoc(mysqli_query($conn, "SELECT COUNT(*) as total FROM contact_messages"))['total'];
$suggestionCount = mysqli_fetch_assoc(mysqli_query($conn, "SELECT COUNT(*) as total FROM career_suggestions"))['total'];

// Get latest contact
$latestContact = mysqli_fetch_assoc(mysqli_query($conn, "SELECT name, created_at FROM contact_messages ORDER BY created_at DESC LIMIT 1"));

// Get latest suggestion
$latestSuggestion = mysqli_fetch_assoc(mysqli_query($conn, "SELECT career_name, created_at FROM career_suggestions ORDER BY created_at DESC LIMIT 1"));
?>

<!DOCTYPE html>
<html>
<head>
    <title>Admin Dashboard - Career Kuch Hatke</title>
    <link rel="stylesheet" href="../css/style.css">
    <style>
        body {
            background: var(--bg-light);
            font-family: 'Montserrat Alternates', sans-serif;
        }
        .admin-container {
            max-width: 1000px;
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
        .stats {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-bottom: 40px;
        }
        .stat-box {
            background: var(--bg-light);
            padding: 25px;
            border-radius: 15px;
            text-align: center;
            border: 3px solid var(--accent);
        }
        .stat-number {
            font-size: 2rem;
            font-weight: bold;
            color: var(--primary);
        }
        .admin-links a {
            display: block;
            margin-bottom: 15px;
            padding: 15px;
            background: var(--accent);
            color: var(--text-dark);
            text-decoration: none;
            border-radius: 10px;
            font-weight: 600;
            transition: 0.3s;
        }
        .admin-links a:hover {
            background: var(--primary);
            color: white;
        }
        .logout {
            margin-top: 30px;
            display: inline-block;
            color: red;
            text-decoration: none;
            font-weight: bold;
        }
        .latest {
            margin-top: 20px;
            font-size: 0.9rem;
            color: var(--text-gray);
        }
    </style>
</head>
<body>

<div class="admin-container">
    <h1>Admin Dashboard</h1>

    <div class="stats">
        <div class="stat-box">
            <div class="stat-number"><?php echo $contactCount; ?></div>
            <div>📩 Total Contact Messages</div>
            <?php if ($latestContact): ?>
                <div class="latest">Latest: <?php echo $latestContact['name']; ?> (<?php echo $latestContact['created_at']; ?>)</div>
            <?php endif; ?>
        </div>

        <div class="stat-box">
            <div class="stat-number"><?php echo $suggestionCount; ?></div>
            <div>💡 Total Career Suggestions</div>
            <?php if ($latestSuggestion): ?>
                <div class="latest">Latest: <?php echo $latestSuggestion['career_name']; ?> (<?php echo $latestSuggestion['created_at']; ?>)</div>
            <?php endif; ?>
        </div>
    </div>

    <div class="admin-links">
        <a href="contacts.php">📩 View Contact Messages</a>
        <a href="suggestions.php">💡 View Career Suggestions</a>
    </div>

    <a class="logout" href="logout.php">Logout</a>
</div>

</body>
</html>..........contacts............<?php
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
</html>.........delete............<?php
session_start();

if (!isset($_SESSION['admin_logged_in'])) {
    header("Location: login.php");
    exit();
}

require_once("../php/db_connect.php");

if (isset($_GET['type']) && isset($_GET['id'])) {
    $type = $_GET['type'];
    $id = intval($_GET['id']);

    if ($type === "contact") {
        mysqli_query($conn, "DELETE FROM contact_messages WHERE id = $id");
        header("Location: contacts.php");
        exit();
    }

    if ($type === "suggestion") {
        mysqli_query($conn, "DELETE FROM career_suggestions WHERE id = $id");
        header("Location: suggestions.php");
        exit();
    }
}

header("Location: dashboard.php");
exit();
?>...........login.........<?php
session_start();

// If already logged in, go to dashboard
if (isset($_SESSION['admin_logged_in'])) {
    header("Location: dashboard.php");
    exit();
}

// Change this password to something strong
$hashed_password = "$2y$10$D9BJ.kiKLGbs5e6oDRMyRebi81HJBDP1ubaVe61ONFggB3q6ONZGa"; 

$error = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $entered_password = $_POST['password'];

    if (password_verify($entered_password, $hashed_password)) {
        $_SESSION['admin_logged_in'] = true;
        header("Location: dashboard.php");
        exit();
    } else {
        $error = "Incorrect password!";
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Admin Login - Career Kuch Hatke</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f4f4f4;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .login-box {
            background: white;
            padding: 40px;
            border-radius: 10px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.1);
            width: 300px;
            text-align: center;
        }
        input {
            width: 100%;
            padding: 10px;
            margin-top: 15px;
        }
        button {
            width: 100%;
            padding: 10px;
            margin-top: 15px;
            background: #6a1b9a;
            color: white;
            border: none;
            cursor: pointer;
        }
        button:hover {
            background: #4a148c;
        }
        .error {
            color: red;
            margin-top: 10px;
        }
    </style>
</head>
<body>

<div class="login-box">
    <h2>Admin Login</h2>
    <form method="POST">
        <input type="password" name="password" placeholder="Enter Password" required>
        <button type="submit">Login</button>
    </form>
    <?php if ($error): ?>
        <div class="error"><?php echo $error; ?></div>
    <?php endif; ?>
</div>

</body>
</html>...........logout..........<?php
session_start();

// Destroy all session data
session_unset();
session_destroy();

// Redirect to login page
header("Location: login.php");
exit();
?>........suggestion......<?php
session_start();

// Protect page
if (!isset($_SESSION['admin_logged_in'])) {
    header("Location: login.php");
    exit();
}

require_once("../php/db_connect.php");

// Fetch suggestions
$search = "";

if (isset($_GET['search'])) {
    $search = mysqli_real_escape_string($conn, $_GET['search']);
    $query = "
        SELECT * FROM career_suggestions 
        WHERE career_name LIKE '%$search%' 
        OR career_reason LIKE '%$search%' 
        OR suggester_name LIKE '%$search%' 
        ORDER BY created_at DESC
    ";
} else {
    $query = "SELECT * FROM career_suggestions ORDER BY created_at DESC";
}

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

<div class="admin-container">
    <a class="back-link" href="dashboard.php">← Back to Dashboard</a>
    <h1>💡 Career Suggestions</h1>
<form method="GET" style="margin-bottom:20px;">
    <input type="text" name="search" 
           placeholder="Search by career, reason, suggester..." 
           value="<?php echo htmlspecialchars($search); ?>"
           style="padding:10px; width:70%; border-radius:8px; border:1px solid #ccc;">
    <button type="submit" 
            style="padding:10px 15px; background:var(--accent); border:none; border-radius:8px; cursor:pointer;">
        Search
    </button>
    <a href="suggestions.php" style="margin-left:10px; font-weight:bold; text-decoration:none;">
        Reset
    </a>
</form>
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
</html>..........i have only this files in admin