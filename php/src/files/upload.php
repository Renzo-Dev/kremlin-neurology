<?php
//require_once __DIR__ . '/../auth/check_session.php';
require_once __DIR__ . '/../utils/cors.php';

// Путь к директории хранения и JSON-каталогу
$libraryDir = __DIR__ . '/../library/';
$catalogFile = __DIR__ . '/catalog.json';

// --- Проверка наличия файла ---
if (!isset($_FILES['file']) || $_FILES['file']['error'] !== UPLOAD_ERR_OK) {
    http_response_code(400);
    echo json_encode(array(
        'success' => false,
        'message' => 'Файл не был загружен или произошла ошибка.'
    ));
    exit();
}

// --- Получение и проверка полей title и authors ---
$title = isset($_POST['title']) ? trim($_POST['title']) : '';
$authors = isset($_POST['authors']) ? trim($_POST['authors']) : '';

if ($title === '' || $authors === '') {
    http_response_code(400);
    echo json_encode(array(
        'success' => false,
        'message' => 'Поля title и authors обязательны.'
    ));
    exit();
}

// --- Безопасное имя файла ---
$originalName = basename($_FILES['file']['name']);
$targetPath = $libraryDir . $originalName;

// --- Чтение из текущего каталога ---
$catalog = array();
if (file_exists($catalogFile)) {
    $json = file_get_contents($catalogFile);
    $decoded = json_decode($json, true);
    if (is_array($decoded)) {
        $catalog = $decoded;
    }
}


// --- Проверяем уникальность имени файла ---
foreach ($catalog as $entry) {
    if (isset($entry['filename']) && $entry['filename'] === $originalName) {
        http_response_code(400);
        echo json_encode(array(
            'success' => false,
            'message' => 'File with current name already exists.'
        ));
        exit();
    }
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

// --- Добавление записи в catalog.json ---

$catalog[] = array(
    'filename' => $originalName,
    'title' => $title,
    'authors' => $authors
);

// --- Сохранение обновленного каталога ---
file_put_contents($catalogFile, json_encode($catalog));

// --- Ответ об успехе ---

echo json_encode(array(
    'success' => true,
    'message' => 'Successfully uploaded the file.',
    'filename' => $originalName,
    'title' => $title,
    'authors' => $authors
));
