<?php
include("db_connect.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $telephone = htmlspecialchars($_POST["telephone"]);
    $subject = htmlspecialchars($_POST["subject"]);
    $i_am = htmlspecialchars($_POST["i_am"]);
    $message = htmlspecialchars($_POST["message"]);

    $stmt = $conn->prepare("INSERT INTO contact_messages (name, email, telephone, subject, user_type, message) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssss", $name, $email, $telephone, $subject, $i_am, $message);

    if ($stmt->execute()) {
        header("Location: ../contact.html?success=contact");
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>