<?php

// --- CORS-заголовки ---
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');

// Preflight-запрос
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// --- Сессия ---
session_start();
header('Content-Type: application/json');

// --- Проверка аутентификации ---
if (empty($_SESSION['authenticated']) || $_SESSION['authenticated'] !== true) {
    sendResponse(false, 'Access denied: You are not authenticated.', 401);
}

// --- Проверка срока действия сессии ---
if (isset($_SESSION['expires_at']) && time() > $_SESSION['expires_at']) {
    destroySession();
    sendResponse(false, 'Access denied: Session expired.', 403);
}

// --- Всё ок ---
sendResponse(true, 'Access granted.');

// --- Утилиты ---

function sendResponse($authenticated, $message, $code = 200) {
    http_response_code($code);
    echo json_encode([
        'authenticated' => $authenticated,
        'message' => $message
    ]);
    exit;
}

function destroySession() {
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
