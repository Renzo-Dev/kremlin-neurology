<?php
//require_once __DIR__ . '/../auth/check_session.php';
require_once __DIR__ . '/../utils/cors.php';

$filename = isset($_POST['filename']) ? basename($_POST['filename']) : '';

if ($filename === '') {
    http_response_code(400);
    echo json_encode(array(
        'success' => false,
        'message' => 'Filename cannot be empty.'
    ));
    exit();
}

$dir = __DIR__ . '/../library/';
$catalogFile = $dir . 'catalog.json';
$path = $dir . $filename;

// Проверяем, существует ли файл
if (file_exists($path)) {
    // Удаляем файл
    unlink($path);
}

// Удаляем запись из каталога
if (file_exists($catalogFile)) {
    // читаем содержимое файла
    $catalog = json_decode(file_get_contents($catalogFile), true);
    $newCatalog = array();
    foreach ($catalog as $entry) {
        // если файл из каталога != текущему файлу, то добавляем его в новый
        if ($entry['filename'] !== $filename) {
            $newCatalog[] = $entry;
        }
    }
    // перезаписываем файл
    file_put_contents($catalogFile, json_encode($newCatalog));
}

echo json_encode(array(
    'success' => true,
    'message' => 'File successfully uploaded.'
));