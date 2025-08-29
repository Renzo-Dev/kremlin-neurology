<?php
// РАЗРАБОТКА: Упрощенные CORS настройки для разработки
// ПРОДАКШЕН: Замените этот файл на cors.prod.php или измените настройки

$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';

// Для отладки
error_log("CORS: Requested origin: " . $origin);

// РАЗРАБОТКА: Разрешаем все origins для удобства разработки
// ПРОДАКШЕН: Ограничьте только разрешенными доменами
if ($origin) {
    header("Access-Control-Allow-Origin: $origin");
} else {
    header("Access-Control-Allow-Origin: *");
}

// Устанавливаем все необходимые CORS заголовки
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Max-Age: 86400'); // 24 часа

// Обрабатываем preflight запросы
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("HTTP/1.1 204 No Content");
    exit;
}
