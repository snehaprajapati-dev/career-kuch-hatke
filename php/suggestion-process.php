<?php
// reCAPTCHA verification
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $recaptcha_secret = "6LerTgItAAAAADya6lD7V7wAv1Ohv7inijN-ELtc";
    $recaptcha_response = isset($_POST['g-recaptcha-response']) ? $_POST['g-recaptcha-response'] : '';
    
    if (empty($recaptcha_response)) {
        header("Location: ../contact.html?error=captcha&form=suggestion");
        exit();
    }
    
    $verify = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret={$recaptcha_secret}&response={$recaptcha_response}");
    $captcha_result = json_decode($verify);
    
    if (!$captcha_result->success) {
        header("Location: ../contact.html?error=captcha&form=suggestion");
        exit();
    }
}

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