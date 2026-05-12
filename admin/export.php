<?php
session_start();

if (!isset($_SESSION['admin_logged_in'])) {
    header("Location: login.php");
    exit();
}

require_once("../php/db_connect.php");

// Set headers to download file
header('Content-Type: text/csv');
header('Content-Disposition: attachment; filename="contact_messages.csv"');

// Open output stream
$output = fopen("php://output", "w");

// Add CSV column headers
fputcsv($output, [
    'Name',
    'Email',
    'Telephone',
    'Subject',
    'User Type',
    'Message',
    'Status',
    'Date'
]);

// Fetch data
$query = "SELECT * FROM contact_messages ORDER BY created_at DESC";
$result = mysqli_query($conn, $query);

// Add rows to CSV
while ($row = mysqli_fetch_assoc($result)) {
    fputcsv($output, [
        $row['name'],
        $row['email'],
        $row['telephone'],
        $row['subject'],
        $row['user_type'],
        $row['message'],
        $row['status'],
        $row['created_at']
    ]);
}

fclose($output);
exit();
?>