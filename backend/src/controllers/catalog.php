<?php

require_once __DIR__ . '/../utils/cors.php';
require_once __DIR__ . '/../services/SessionService.php';
require_once __DIR__ . '/../services/CatalogService.php';
require_once __DIR__ . '/../services/LibraryService.php';

// Функция для отправки JSON-ответа
function jsonResponse($success, $message, $code = 200)
{
    header('Content-Type: application/json');
    http_response_code($code);
    echo json_encode(array(
        'success' => $success,
        'message' => $message
    ));
    exit;
}

// Проверка авторизации
if (!SessionService::isAuthenticated()) {
    SessionService::respond(false, 'Not authenticated', 401);
    exit;
}

// GET — получить список каталога
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $catalogService = new CatalogService();
    $catalog = $catalogService->getCatalogList();
    header('Content-Type: application/json');
    echo $catalog;
    exit;
}

// Проверка, является ли пользователь администратором
if (!SessionService::isAdmin()) {
    SessionService::respond(false, 'Forbidden', 403);
    exit;
}

// POST — загрузка файла
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!isset($_FILES['file']) || $_FILES['file']['error'] !== UPLOAD_ERR_OK) {
        jsonResponse(false, 'Файл не загружен или произошла ошибка', 400);
    }

    $title = isset($_POST['title']) ? trim($_POST['title']) : '';
    $authors = isset($_POST['authors']) ? trim($_POST['authors']) : '';

    if ($title === '' || $authors === '') {
        jsonResponse(false, 'Поля title и authors обязательны.', 400);
    }

    $libraryService = new LibraryService();
    $fileName = basename($_FILES['file']['name']);

    // Оборачиваем в try-catch на случай ошибок
    try {
        $libraryService->upload($fileName);
        jsonResponse(true, 'Файл успешно загружен');
    } catch (Exception $e) {
        jsonResponse(false, 'Ошибка при загрузке: ' . $e->getMessage(), 500);
    }
    exit;
}

// DELETE — удаление файла
if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $rawInput = file_get_contents('php://input');
    $data = json_decode($rawInput, true);
    $fileName = isset($data['fileName']) ? trim($data['fileName']) : '';

    if ($fileName === '') {
        jsonResponse(false, 'Имя файла обязательно', 400);
    }

    $libraryService = new LibraryService();

    try {
        $libraryService->delete($fileName);
        jsonResponse(true, 'Файл удалён');
    } catch (Exception $e) {
        jsonResponse(false, 'Ошибка при удалении: ' . $e->getMessage(), 500);
    }
    exit;
}

// Если метод не поддерживается
jsonResponse(false, 'Метод не поддерживается', 405);
