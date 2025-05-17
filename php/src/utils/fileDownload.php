<?php
// получаем путь к директории загрузки
$uploadDir = __DIR__ . '/../storage/library/';
//$uploadDir = realpath(__DIR__ . '/../../../library/') . '/';

// проверяем, указан ли файл для скачивания
if (!isset($_GET['fileName'])) {
    header('HTTP/1.1 400 Bad Request');
    echo "Ошибка: не указано имя файла.";
    exit();
}

// Получаем имя файла из параметра запроса
$fileName = basename($_GET['fileName']);
$filePath = $uploadDir . $fileName;

// Проверяем, существует ли файл
if (!file_exists($filePath)) {
    header('HTTP/1.1 404 Not Found');
    echo "Ошибка: файл не найден. " . $filePath;
    exit();
}

// Отправляем заголовки для скачивания файла
header('Content-Description: File Transfer');
header('Content-Type: application/octet-stream');
header('Content-Disposition: attachment; fileName="' . $fileName . '"');
header('Expires: 0');
header('Cache-Control: must-revalidate');
header('Pragma: public');
header('Content-Length: ' . filesize($filePath));

// Читаем и отправляем файл
if (readfile($filePath) === false) {
    header('HTTP/1.1 500 Internal Server Error');
    echo "Ошибка: не удалось прочитать файл.";
}
exit();
