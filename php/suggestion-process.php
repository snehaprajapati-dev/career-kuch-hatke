<?php
// reCAPTCHA verification
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    require_once('config.php');
    $secret = RECAPTCHA_SECRET;
    $recaptcha_response = isset($_POST['g-recaptcha-response']) ? trim($_POST['g-recaptcha-response']) : '';
    
    if (empty($recaptcha_response)) {
        header("Location: ../contact.html?error=captcha&form=suggestion");
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
        header("Location: ../contact.html?error=captcha&form=suggestion");
        exit();
    }
}

include("db_connect.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $career_name = htmlspecialchars(trim($_POST["career-name"]));
    $career_reason = htmlspecialchars(trim($_POST["career-why"]));
    $suggester_name = isset($_POST["suggester-name"]) ? htmlspecialchars(trim($_POST["suggester-name"])) : '';

    $stmt = $conn->prepare("INSERT INTO career_suggestions (career_name, career_reason, suggester_name, status) VALUES (?, ?, ?, 'unread')");
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