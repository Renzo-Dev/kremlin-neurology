<?php

require_once __DIR__ . "/../utils/cors.php";
require_once __DIR__ . "/../services/SessionService.php";
require_once __DIR__ . '/../services/CatalogService.php';
require_once __DIR__ . '/../services/LibraryService.php';

if (SessionService::isAuthenticated() === false) {
    SessionService::respond(false, 'Not authenticated', 401);
    exit();
}

// get для получения списка каталога (список)
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    // Получаем каталог JSON

    $catalogService = new CatalogService();
    $catalog = $catalogService->getCatalogList();
    header('Content-Type: application/json');
    echo $catalog;
    exit();
}


// post для загрузки файла и внесения данных
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Проверяем, был ли загружен файл
    if (!isset($_FILES['file']) || $_FILES['file']['error'] !== UPLOAD_ERR_OK) {
        http_response_code(400);
        echo json_encode(array(
            'success' => false,
            'message' => 'File not uploaded or error occurred'
        ));
        exit();
    }

    // Проверка наличия обязательных полей
    $title = isset($_POST['title']) ? trim($_POST['title']) : '';
    $authors = isset($_POST['authors']) ? trim($_POST['authors']) : '';

    // Проверка обязательных полей
    if ($title === '' || $authors === '') {
        http_response_code(400);
        echo json_encode(array(
            'success' => false,
            'message' => 'Поля title и authors обязательны.'
        ));
        exit();
    }

    $libraryService = new LibraryService();
    $libraryService->upload(basename($_FILES['file']['name']));
}

if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
    $libraryService = new LibraryService();
    $rawInput = file_get_contents("php://input");
    $data = json_decode($rawInput, true);
    $fileName = isset($data['fileName']) ? $data['fileName'] : null;

    if ($fileName === null || trim($fileName) === '') {
        http_response_code(400);
        echo json_encode(array(
            'success' => false,
            'message' => 'File name is required'
        ));
        exit();
    }
    $libraryService->delete($fileName);
    exit();
}