<?php

use App\Controllers\AuthController;
use App\Controllers\CatalogController;
use App\Controllers\FileController;
use App\Services\AuthService;
use App\Utils\respondHandler;

$request = $_SERVER['REQUEST_URI']; // получаем текущий путь
$method = $_SERVER['REQUEST_METHOD']; // получаем метод запроса

try {
    switch (true) {
        case $request === '/api/file' && $method === 'POST':
            //
            break;
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
        case $request === '/api/download' && $method === 'GET':
            FileController::downloadFile();
            break;
        case $request === '/api/privateDownload' && $method === 'GET':
            if (!AuthService::getAuthenticated()) {
                throw new Exception('Unauthorized access', 401);
            }
            FileController::downloadFile();
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