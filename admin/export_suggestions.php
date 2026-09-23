<?php
session_start();

if (!isset($_SESSION['admin_logged_in'])) {
    header("Location: login.php");
    exit();
}

require_once(__DIR__ . "/../php/db_connect.php");

// Set headers for CSV download with UTF-8 encoding
header('Content-Type: text/csv; charset=UTF-8');
header('Content-Disposition: attachment; filename="career_suggestions_' . date('Y-m-d') . '.csv"');

// Open output stream
$output = fopen("php://output", "w");

// Write UTF-8 BOM so Excel opens the file cleanly without character corruption
fprintf($output, chr(0xEF) . chr(0xBB) . chr(0xBF));

// Add column headers
fputcsv($output, [
    'Career Name',
    'Reason / Description',
    'Suggester',
    'Status',
    'Date'
]);

// Fetch data
$query = "SELECT * FROM career_suggestions ORDER BY created_at DESC";
$result = mysqli_query($conn, $query);

// Add rows
while ($row = mysqli_fetch_assoc($result)) {
    $status = ucfirst($row['status']);
    $dateDisplay = !empty($row['created_at']) ? date("d M Y, h:i A", strtotime($row['created_at'])) : '';

    // Clean HTML entities if any were stored encoded (e.g. &amp; -> &)
    $careerName = html_entity_decode($row['career_name'], ENT_QUOTES, 'UTF-8');
    $careerReason = html_entity_decode($row['career_reason'], ENT_QUOTES, 'UTF-8');
    $suggesterName = html_entity_decode($row['suggester_name'], ENT_QUOTES, 'UTF-8');

    fputcsv($output, [
        $careerName,
        $careerReason,
        $suggesterName,
        $status,
        $dateDisplay
    ]);
}

fclose($output);
exit();
?>