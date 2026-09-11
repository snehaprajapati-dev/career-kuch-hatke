<?php
// Example configuration template - copy to config.php and update values

$is_local = false;
$http_host = isset($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : '';
$server_name = isset($_SERVER['SERVER_NAME']) ? $_SERVER['SERVER_NAME'] : '';
$remote_addr = isset($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : '';

if (
    php_sapi_name() === 'cli' ||
    in_array($server_name, ['localhost', '127.0.0.1', '::1']) ||
    in_array($http_host, ['localhost', '127.0.0.1', '::1']) ||
    strpos($http_host, 'localhost:') === 0 ||
    in_array($remote_addr, ['127.0.0.1', '::1'])
) {
    $is_local = true;
}

if ($is_local) {
    define('DB_HOST', '127.0.0.1');
    define('DB_PORT', 3307);
    define('DB_USER', 'root');
    define('DB_PASS', '');
    define('DB_NAME', 'career_kuch_hatke');
} else {
    define('DB_HOST', 'your_db_host');
    define('DB_PORT', 3306);
    define('DB_USER', 'your_db_user');
    define('DB_PASS', 'your_db_password');
    define('DB_NAME', 'your_db_name');
}

define('RECAPTCHA_SECRET', 'your_recaptcha_secret_key');
define('RECAPTCHA_SITE', 'your_recaptcha_site_key');
?>
