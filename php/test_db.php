<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

include("db_connect.php");

if ($conn) {
    echo "Database Connected Successfully ✅";
} else {
    echo "Database NOT connected ❌";
}
?>