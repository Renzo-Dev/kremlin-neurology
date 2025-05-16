<?php
//require_once __DIR__ . '/../auth/check_session.php';
require_once __DIR__ . '/../utils/cors.php';
require_once __DIR__ . '/../utils/catalog.php';

// --- Настройки ---
$libraryDir = __DIR__ . '/../storage/library/'; // Папка для хранения загруженных файлов
$catalogFile = __DIR__ . '/../storage/catalog.json'; // Файл каталога

// --- Проверка наличия файла ---
if (!isset($_FILES['file']) || $_FILES['file']['error'] !== UPLOAD_ERR_OK) {
    http_response_code(400);
    echo json_encode(array(
        'success' => false,
        'message' => 'Файл не был загружен или произошла ошибка.'
    ));
    exit();
}

// --- Проверка наличия обязательных полей ---
$title = isset($_POST['title']) ? trim($_POST['title']) : '';
$authors = isset($_POST['authors']) ? trim($_POST['authors']) : '';

// --- Проверка обязательных полей ---
if ($title === '' || $authors === '') {
    http_response_code(400);
    echo json_encode(array(
        'success' => false,
        'message' => 'Поля title и authors обязательны.'
    ));
    exit();
}

// --- Обработка имени файла ---
$originalName = basename($_FILES['file']['name']);
$targetPath = $libraryDir . $originalName;

// --- Получение текущего каталога ---
$catalog = getCatalogFromFile();

// --- Проверяем уникальность имени файла ---
if (isFileExistsInCatalog($catalog, $originalName)) {
    http_response_code(400);
    echo json_encode(array(
        'success' => false,
        'message' => 'Файл с таким именем уже существует.'
    ));
    exit();
}

// --- Сохранение загруженного файла ---
if (!move_uploaded_file($_FILES['file']['tmp_name'], $targetPath)) {
    http_response_code(400);
    echo json_encode(array(
        'success' => false,
        'message' => 'Error uploading file.'
    ));
    exit();
}

// --- Добавление записи в catalog.json и сохранение ---
addToCatalog($catalog, array(
    'filename' => $originalName,
    'title' => $title,
    'authors' => $authors
), $catalogFile);

// --- Ответ об успехе ---
echo json_encode(array(
    'success' => true,
    'message' => 'Successfully uploaded the file.',
    'filename' => $originalName,
    'title' => $title,
    'authors' => $authors
));
