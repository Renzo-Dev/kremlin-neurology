<?php

if (strpos($_SERVER['REQUEST_URI'], '/api') !== false) {
    // Подключаем CORS заголовки для всех API запросов
    require_once __DIR__ . '/utils/cors.php';
    
    require_once __DIR__ . '/routes/routes.php';
    exit();
}