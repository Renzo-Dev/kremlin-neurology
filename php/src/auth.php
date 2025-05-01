<?php
session_start();
header('Content-Type: application/json');

// Задаем пароль
define('ACCESS_PASSWORD', '123123');

// Проверяем отправленный пароль
if (isset($_GET['password'])) {
    $password = $_GET['password'];

    if ($password == ACCESS_PASSWORD) {
        $_SESSION['authenticated'] = true;
        $_SESSION['expires_at'] = time() + 3600; // 1h
        echo json_encode([
            'success' => true,
            'message' => 'Logged in successfully.',
        ]);
        exit();
    } else {
        changeAuthState();
        http_response_code(401);
        echo json_encode([
            'success' => false,
            'message' => 'Wrong password.',
        ]);
        exit();
    }
} else {
    changeAuthState();

    http_response_code(401);
    echo json_encode([
        'success' => false,
        'message' => 'Password not provided.',
    ]);
    exit();
}

function changeAuthState()
{
    if (isset($_SESSION, $_SESSION['authenticated'])) {
        $_SESSION['authenticated'] = !$_SESSION['authenticated'];
    }
}