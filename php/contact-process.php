<?php
// reCAPTCHA verification
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    require_once('config.php');
    $secret = RECAPTCHA_SECRET;
    $recaptcha_response = isset($_POST['g-recaptcha-response']) ? trim($_POST['g-recaptcha-response']) : '';
    
    if (empty($recaptcha_response)) {
        header("Location: ../contact.html?error=captcha&form=contact");
        exit();
    }
    
    $post_data = http_build_query([
        'secret'   => $secret,
        'response' => $recaptcha_response,
        'remoteip' => isset($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : ''
    ]);

    $verify = false;
    if (function_exists('curl_init')) {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, "https://www.google.com/recaptcha/api/siteverify");
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $post_data);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_TIMEOUT, 10);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
        $verify = curl_exec($ch);
        curl_close($ch);
    }

    if (!$verify) {
        $opts = [
            'http' => [
                'method'  => 'POST',
                'header'  => "Content-Type: application/x-www-form-urlencoded\r\n",
                'content' => $post_data,
                'timeout' => 10
            ]
        ];
        $verify = @file_get_contents("https://www.google.com/recaptcha/api/siteverify", false, stream_context_create($opts));
    }

    $captcha_result = json_decode($verify);
    
    if (!isset($captcha_result->success) || !$captcha_result->success) {
        header("Location: ../contact.html?error=captcha&form=contact");
        exit();
    }
}

include("db_connect.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = htmlspecialchars(trim($_POST["name"]));
    $email = htmlspecialchars(trim($_POST["email"]));
    $telephone = isset($_POST["telephone"]) ? htmlspecialchars(trim($_POST["telephone"])) : '';
    $subject = htmlspecialchars(trim($_POST["subject"]));
    $i_am = htmlspecialchars(trim($_POST["i_am"]));
    $message = htmlspecialchars(trim($_POST["message"]));

    $stmt = $conn->prepare("INSERT INTO contact_messages (name, email, telephone, subject, user_type, message, status) VALUES (?, ?, ?, ?, ?, ?, 'unread')");
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