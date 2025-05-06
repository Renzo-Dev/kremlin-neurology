<?php

require_once __DIR__ . '/destroySession.php';

// --- CORS-заголовки ---
//header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');

// Preflight-запрос
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
//    http_response_code(204);
    header('HTTP/1.1 ' . 204);
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

function sendResponse($authenticated, $message, $code = 200)
{
    header('HTTP/1.1 ' . $code);
    echo json_encode(array(
        'authenticated' => $authenticated,
        'message' => $message
    ));
    exit;
}