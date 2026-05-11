<?php
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
?>