<?php

require_once __DIR__ . '/../controllers/AuthController.php';
require_once __DIR__ . '/../controllers/CatalogController.php';
require_once __DIR__ . '/../controllers/FileController.php';
require_once __DIR__ . '/../services/AuthService.php';
require_once __DIR__ . '/../services/CatalogService.php';
// require_once __DIR__ . '/../utils/cors.php'; // Отключаем, так как CORS обрабатывается в respondHandler
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
        // === CORS PREFLIGHT - обработка OPTIONS запросов ===
        case $method === 'OPTIONS':
            // Отправляем CORS заголовки для preflight запросов
            $origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '*';
            header("Access-Control-Allow-Origin: $origin");
            header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
            header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
            header('Access-Control-Allow-Credentials: true');
            header('Access-Control-Max-Age: 86400'); // 24 часа
            header('HTTP/1.1 200 OK');
            exit();
            break;
            
        case $request === '/api/auth' && $method === 'POST':
            AuthController::login();
            break;
        case $request === '/api/auth' && $method === 'GET':
            AuthController::auth();
            break;
        
        // === КАТАЛОГ - получение данных ===
        
        // Публичный каталог (без аутентификации)
        case $request === '/api/catalog/public' && $method === 'GET':
            $catalogController->getPublicCatalog();
            break;
            
        // Приватный каталог (требует аутентификации)
        case $request === '/api/catalog/private' && $method === 'GET':
            $catalogController->getPrivateCatalog();
            break;
            
        // Каталог с пагинацией
        case strpos($request, '/api/catalog/paginated') === 0 && $method === 'GET':
            $catalogController->getCatalogPaginated();
            break;
            
        // Каталог с полной фильтрацией, сортировкой и пагинацией
        case $request === '/api/catalog/filters' && $method === 'POST':
            $catalogController->getCatalogWithFilters();
            break;
            
        // Получение списка категорий из приватного каталога
        case $request === '/api/catalog/categories' && $method === 'GET':
            $catalogController->getCategories();
            break;
        
        // === УПРАВЛЕНИЕ ФАЙЛАМИ (только приватный каталог) ===
        
        // Добавление файла в приватный каталог (требует аутентификации)
        case strpos($request, '/api/catalog') === 0 && $method === 'POST':
            $fileController->saveFile();
            break;
            
        // Удаление файла из приватного каталога (требует аутентификации)
        case strpos($request, '/api/catalog') === 0 && $method === 'DELETE':
            $fileController->deleteFile();
            break;
            
        // Обновление файла в приватном каталоге (требует аутентификации)
        case strpos($request, '/api/catalog/update') === 0 && $method === 'PUT':
            $fileController->updateFile();
            break;
        
        // === СКАЧИВАНИЕ ФАЙЛОВ ===
        
        // Скачивание публичных файлов
        case $request === '/api/download' && $method === 'POST':
            $fileController->downloadFile(false);
            break;
            
        // Скачивание приватных файлов (требует аутентификации)
        case $request === '/api/privateDownload' && $method === 'POST':
            $fileController->downloadFile(true);
            break;
        
        // === ИНФОРМАЦИЯ О ФАЙЛАХ ===
        
        // Информация о файле
        case $request === '/api/file/info' && $method === 'POST':
            $fileController->getFileInfo();
            break;
        
        // === СТАТИСТИКА ХРАНИЛИЩА ===
        
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