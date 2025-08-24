<?php
// Тестовый файл для проверки CORS
require_once __DIR__ . '/utils/cors.php';

header('Content-Type: application/json');

$response = [
    'success' => true,
    'message' => 'CORS работает корректно',
    'timestamp' => date('Y-m-d H:i:s'),
    'origin' => $_SERVER['HTTP_ORIGIN'] ?? 'не указан'
];

echo json_encode($response, JSON_UNESCAPED_UNICODE);
