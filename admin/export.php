<?php
session_start();

if (!isset($_SESSION['admin_logged_in'])) {
    header("Location: login.php");
    exit();
}

require_once(__DIR__ . "/../php/db_connect.php");

// Set headers to download file with UTF-8 encoding
header('Content-Type: text/csv; charset=UTF-8');
header('Content-Disposition: attachment; filename="contact_messages_' . date('Y-m-d') . '.csv"');

// Open output stream
$output = fopen("php://output", "w");

// Write UTF-8 BOM so Excel opens the file cleanly without character corruption
fprintf($output, chr(0xEF) . chr(0xBB) . chr(0xBF));

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
    // Format telephone as string formula so Excel treats it as text and avoids scientific notation (e.g. 8.8E+09)
    $phone = trim($row['telephone']);
    $phoneDisplay = ($phone !== '') ? '="' . $phone . '"' : '';

    // Format user type (e.g. career_counselor -> Career Counselor)
    $userType = ucwords(str_replace('_', ' ', $row['user_type']));

    // Format status
    $status = ucfirst($row['status']);

    // Format readable date
    $dateDisplay = !empty($row['created_at']) ? date("d M Y, h:i A", strtotime($row['created_at'])) : '';

    // Clean HTML entities if any were stored encoded (e.g. &amp; -> &)
    $name = html_entity_decode($row['name'], ENT_QUOTES, 'UTF-8');
    $email = html_entity_decode($row['email'], ENT_QUOTES, 'UTF-8');
    $subject = html_entity_decode($row['subject'], ENT_QUOTES, 'UTF-8');
    $message = html_entity_decode($row['message'], ENT_QUOTES, 'UTF-8');

    fputcsv($output, [
        $name,
        $email,
        $phoneDisplay,
        $subject,
        $userType,
        $message,
        $status,
        $dateDisplay
    ]);
}

fclose($output);
exit();
?>