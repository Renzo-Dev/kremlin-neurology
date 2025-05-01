<?php
session_start();
header('Content-type: application/json');

if (!isset($_SESSION['authenticated']) || $_SESSION['authenticated'] !== true) {
    http_response_code(402);
    echo json_encode([
        'authenticated' => false,
        'error' => 'Access denied: You are not authenticated.'
    ]);
    exit();
}

if (time() > $_SESSION['expires_at']) {
    session_destroy();
    http_response_code(403);
    echo json_encode([
        'authenticated' => false,
        'error' => 'Access denied: Session expired.'
    ]);
}

echo json_encode([
    'authenticated' => true,
    'message' => 'Access granted.'
]);