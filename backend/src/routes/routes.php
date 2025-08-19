<?php

require_once __DIR__ . '/../controllers/AuthController.php';
require_once __DIR__ . '/../controllers/CatalogController.php';
require_once __DIR__ . '/../controllers/FileController.php';
require_once __DIR__ . '/../services/AuthService.php';
require_once __DIR__ . '/../services/CatalogService.php';
require_once __DIR__ . '/../utils/cors.php';
require_once __DIR__ . '/../utils/respondHandler.php';
require_once __DIR__ . '/../middleware/MiddlewareManager.php';

$request = $_SERVER['REQUEST_URI']; // получаем текущий путь
$method = $_SERVER['REQUEST_METHOD']; // получаем метод запроса

// Инициализируем менеджер middleware
$middlewareManager = new MiddlewareManager();

try {
    // Запускаем middleware перед обработкой запроса
    $middlewareResult = $middlewareManager->run($request, $method);
    
    if ($middlewareResult !== true) {
        // Middleware вернул ошибку
        respondHandler::respond(array(
            'error' => $middlewareResult['error'],
            'message' => $middlewareResult['message'],
            'errors' => isset($middlewareResult['errors']) ? $middlewareResult['errors'] : null
        ), $middlewareResult['code']);
        exit();
    }

    // Создаем экземпляры сервисов и контроллеров
    $catalogService = new CatalogService();
    $catalogController = new CatalogController($catalogService);
    $fileController = new FileController($catalogService);

    switch (true) {
        case $request === '/api/auth' && $method === 'POST':
            AuthController::login();
            break;
        case $request === '/api/auth' && $method === 'GET':
            AuthController::auth();
            break;
        
        // Каталог - получение данных
        case $request === '/api/catalog' && $method === 'GET':
            $catalogController->getCatalog();
            break;
        case $request === '/api/catalog/public' && $method === 'GET':
            $catalogController->getPublicCatalog();
            break;
        case $request === '/api/catalog/private' && $method === 'GET':
            $catalogController->getPrivateCatalog();
            break;
        case $request === '/api/catalog/stats' && $method === 'GET':
            $catalogController->getCatalogStats();
            break;
        
        // Управление файлами (требует аутентификации)
        case $request === '/api/catalog' && $method === 'POST':
            $fileController->saveFile();
            break;
        case $request === '/api/catalog' && $method === 'DELETE':
            $fileController->deleteFile();
            break;
        
        // Скачивание файлов
        case $request === '/api/download' && $method === 'POST':
            $fileController->downloadFile(false);
            break;
        case $request === '/api/privateDownload' && $method === 'POST':
            $fileController->downloadFile(true);
            break;
        
        // Информация о файлах
        case $request === '/api/file/info' && $method === 'POST':
            $fileController->getFileInfo();
            break;
        
        // Статистика хранилища
        case $request === '/api/storage/stats' && $method === 'GET':
            $fileController->getStorageStats();
            break;
        
        default:
            respondHandler::respond(array(
                'error' => 'Route not found',
                'message' => 'Route not found'
            ), 404);
            break;
    }
} catch (Exception $e) {
    // Handle any exceptions that occur during the request processing
    respondHandler::respond(array(
        'error' => 'Internal Server Error',
        'message' => $e->getMessage()
    ), $e->getCode());
}

exit();