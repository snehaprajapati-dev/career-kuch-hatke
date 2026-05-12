<?php
session_start();

if (!isset($_SESSION['admin_logged_in'])) {
    header("Location: login.php");
    exit();
}

require_once("../php/db_connect.php");

if (isset($_GET['type'])) {

    $type = $_GET['type'];

    // Mark all contacts as read
    if ($type === "mark_all_read_contact") {
        mysqli_query($conn, "UPDATE contact_messages SET status='read'");
        header("Location: contacts.php");
        exit();
    }

    // Mark all suggestions as read
    if ($type === "mark_all_read_suggestion") {
        mysqli_query($conn, "UPDATE career_suggestions SET status='read'");
        header("Location: suggestions.php");
        exit();
    }

    // Individual actions require ID
    if (isset($_GET['id'])) {

        $id = intval($_GET['id']);

        // Mark one contact as read
        if ($type === "mark_read") {
            mysqli_query($conn, "UPDATE contact_messages SET status='read' WHERE id=$id");
            header("Location: contacts.php");
            exit();
        }

        // Mark one suggestion as read
        if ($type === "mark_read_suggestion") {
            mysqli_query($conn, "UPDATE career_suggestions SET status='read' WHERE id=$id");
            header("Location: suggestions.php");
            exit();
        }

        // Delete contact
        if ($type === "contact") {
            mysqli_query($conn, "DELETE FROM contact_messages WHERE id=$id");
            header("Location: contacts.php");
            exit();
        }

        // Delete suggestion
        if ($type === "suggestion") {
            mysqli_query($conn, "DELETE FROM career_suggestions WHERE id=$id");
            header("Location: suggestions.php");
            exit();
        }
    }
}

header("Location: dashboard.php");
exit();
?>