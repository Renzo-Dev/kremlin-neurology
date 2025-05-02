<?php

// Разрешаем запросы с клиента
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');

// Прерываем обработку preflight-запроса
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// Запускаем сессию
session_start();

// Устанавливаем тип ответа
header('Content-Type: application/json');

// Константа с паролем
define('ACCESS_PASSWORD', '123123');

// Чтение JSON-данных
$input = json_decode(file_get_contents('php://input'), true);
if (isset($input['password'])) {
    $password = $input['password'];
} else {
    $password = null;
}

if ($password === null) {
    sendResponse(false, 'Password not provided.', 401);
}

if ($password === ACCESS_PASSWORD) {
    $_SESSION['authenticated'] = true;
    $_SESSION['expires_at'] = time() + 1800; // 1 час
    sendResponse(true, 'Logged in successfully.');
} else {
    destroySession(); // очистка сессии при неудачной попытке
    sendResponse(false, 'Wrong password.', 401);
}

// --- Утилиты ---

function sendResponse($success, $message, $code = 200)
{
    http_response_code($code);
    echo json_encode([
        'success' => $success,
        'message' => $message
    ]);
    exit;
}

function destroySession()
{
    $_SESSION = [];
    if (ini_get("session.use_cookies")) {
        $params = session_get_cookie_params();
        setcookie(session_name(), '', time() - 42000,
            $params['path'], $params['domain'],
            $params['secure'], $params['httponly']
        );
    }
    session_destroy();
}
