<?php
session_start();

if (!isset($_SESSION['admin_logged_in'])) {
    header("Location: login.php");
    exit();
}

require_once("../php/db_connect.php");

// Set headers for CSV download
header('Content-Type: text/csv');
header('Content-Disposition: attachment; filename="career_suggestions.csv"');

// Open output stream
$output = fopen("php://output", "w");

// Add column headers
fputcsv($output, [
    'Career Name',
    'Reason',
    'Suggester',
    'Status',
    'Date'
]);

// Fetch data
$query = "SELECT * FROM career_suggestions ORDER BY created_at DESC";
$result = mysqli_query($conn, $query);

// Add rows
while ($row = mysqli_fetch_assoc($result)) {
    fputcsv($output, [
        $row['career_name'],
        $row['career_reason'],
        $row['suggester_name'],
        $row['status'],
        $row['created_at']
    ]);
}

fclose($output);
exit();
?>