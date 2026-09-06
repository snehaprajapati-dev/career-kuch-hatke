<?php
// reCAPTCHA verification
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    require_once('config.php');
    $secret = RECAPTCHA_SECRET;
    $recaptcha_response = isset($_POST['g-recaptcha-response']) ? $_POST['g-recaptcha-response'] : '';
    
    if (empty($recaptcha_response)) {
        header("Location: ../contact.html?error=captcha&form=contact");
        exit();
    }
    
    $verify = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret={$recaptcha_secret}&response={$recaptcha_response}");
    $captcha_result = json_decode($verify);
    
    if (!$captcha_result->success) {
        header("Location: ../contact.html?error=captcha&form=contact");
        exit();
    }
}

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