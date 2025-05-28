<?php

require_once __DIR__ . '/../controllers/AuthController.php';
require_once __DIR__ . '/../controllers/CatalogController.php';
require_once __DIR__ . '/../controllers/FileController.php';
require_once __DIR__ . '/../services/AuthService.php';
require_once __DIR__ . '/../utils/cors.php';


$request = $_SERVER['REQUEST_URI']; // получаем текущий путь
$method = $_SERVER['REQUEST_METHOD']; // получаем метод запроса

try {
    switch (true) {
        case $request === '/api/auth' && $method === 'POST':
            AuthController::login();
            break;
        case $request === '/api/auth' && $method === 'GET':
            AuthController::auth();
            break;
        case $request === '/api/catalog' && $method === 'GET':
            // middleware
            if (!AuthService::getAuthenticated()) {
                throw new Exception('Unauthorized access', 401);
            }
            CatalogController::getCatalog();
            break;
        case $request === '/api/download' && $method === 'POST':
            FileController::downloadFile();
            break;
        case $request === '/api/privateDownload' && $method === 'POST':
            if (!AuthService::getAuthenticated()) {
                throw new Exception('Unauthorized access', 401);
            }
            FileController::downloadFile(true);
            break;
        case $request === '/api/catalog' && $method === 'POST':
            if (!AuthService::getAdminAuthenticated()) {
                throw new Exception('Unauthorized access', 401);
            }
            CatalogController::saveFile();
            break;
        case $request === '/api/catalog' && $method === 'DELETE':
            if (!AuthService::getAdminAuthenticated()) {
                throw new Exception('Unauthorized access', 401);
            }
            CatalogController::deleteFile();
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