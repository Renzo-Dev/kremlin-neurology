<?php

function getCatalogFromFile()
{
    $catalogFile = __DIR__ . '/../storage/catalog.json';
    $catalog = array();

    // Проверяем, существует ли файл и является ли он массивом
    if (file_exists($catalogFile)) {
        // Получаем содержимое файла и декодируем JSON
        $json = file_get_contents($catalogFile);
        $decoded = json_decode($json, true);

        // Проверяем, является ли декодированный результат массивом
        if (is_array($decoded)) {
            $catalog = $decoded;
        }
    }

    // Если файл не существует или не является массивом, возвращаем пустой массив
    return $catalog;
}

function isFileExistsInCatalog($catalog, $filename)
{
    foreach ($catalog as $entry) {
        if (isset($entry['filename']) && $entry['filename'] === $filename) {
            return true;
        }
    }
    return false;
}

function addToCatalog($catalog, $entry, $catalogFile)
{
    $catalog[] = $entry;
    return file_put_contents($catalogFile, json_encode($catalog, JSON_UNESCAPED_UNICODE));
}