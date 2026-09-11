<?php
require_once(__DIR__ . '/config.php');

$port = defined('DB_PORT') ? DB_PORT : 3306;

// Turn off exception reporting so we can handle connection gracefully with clear message
mysqli_report(MYSQLI_REPORT_OFF);

$conn = @mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME, $port);

// If local connection on 3307 failed, attempt fallback to default port 3306
if (!$conn && (DB_HOST === '127.0.0.1' || DB_HOST === 'localhost') && $port === 3307) {
    $conn = @mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME, 3306);
}

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

mysqli_set_charset($conn, "utf8mb4");
?>