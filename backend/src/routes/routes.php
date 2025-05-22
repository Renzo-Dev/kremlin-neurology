<?php
$request = $_SERVER['REQUEST_URI']; // получаем текущий путь
$method = $_SERVER['REQUEST_METHOD']; // получаем метод запроса

// подключаем контроллеры

require_once __DIR__ . '/../controllers/AuthController.php';

switch (true) {
    case $request === '/api/login' && $method === 'POST':
        AuthController::login();
        break;
    case $request === '/api/auth' && $method === 'GET':
        // AuthController::auth();
        break;
}