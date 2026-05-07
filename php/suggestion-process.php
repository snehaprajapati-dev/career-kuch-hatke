<?php
include("db_connect.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $career_name = htmlspecialchars($_POST["career-name"]);
    $career_reason = htmlspecialchars($_POST["career-why"]);
    $suggester_name = htmlspecialchars($_POST["suggester-name"]);

    $stmt = $conn->prepare("INSERT INTO career_suggestions (career_name, career_reason, suggester_name) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $career_name, $career_reason, $suggester_name);

    if ($stmt->execute()) {
        header("Location: ../contact.html?success=suggestion");
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>