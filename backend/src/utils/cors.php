<?php
// Определяем origin для CORS
$allowedOrigins = [
    'http://localhost:5173',  // Vite dev server
    'http://localhost:3000',  // Альтернативный порт
    'http://127.0.0.1:5173', // IP адрес
    'http://127.0.0.1:3000'  // IP адрес альтернативный
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowedOrigins)) {
    header("Access-Control-Allow-Origin: $origin");
}

header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Max-Age: 86400'); // 24 часа

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("HTTP/1.1 204 No Content");
    exit;
}
