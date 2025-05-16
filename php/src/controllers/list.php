<?php
//require_once __DIR__ . '/../auth/check_session.php';
require_once __DIR__ . '/../utils/cors.php';
require_once __DIR__ . '/../utils/file.php';
require_once __DIR__ . '/../utils/catalog.php';

// Получаем JSON-каталог
$catalog = getCatalogFromFile();

// Инициализируем ассоциативный массив
$newCatalog = array();

// Группировка публикаций по первой букве фамилии автора
foreach ($catalog as $file) {
    // Проверяем, существует ли поле authors
    $fileLetter = mb_strtoupper(mb_substr($file['authors'], 0, 1, 'UTF-8'), 'UTF-8');
    // Проверяем, существует ли буква в массиве $letters
    if (!isset($newCatalog[$fileLetter])) {
        $newCatalog[$fileLetter] = array();
    }
    // Добавляем файл в соответствующий массив
    $file['type'] = getFileType($file['filename']);
    $newCatalog[$fileLetter][] = $file;
}

// Сортируем массив по ключам
ksort($newCatalog);

// Отправляем JSON-каталог в ответе
echo json_encode($newCatalog);