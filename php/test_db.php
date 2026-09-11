<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

include("db_connect.php");

if ($conn) {
    echo "Database Connected Successfully ✅<br>";
    echo "Host: " . DB_HOST . "<br>";
    echo "Port: " . (defined('DB_PORT') ? DB_PORT : 3306) . "<br>";
    echo "Database: " . DB_NAME . "<br>";
} else {
    echo "Database NOT connected ❌";
}
?>