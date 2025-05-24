<?php

require_once __DIR__ . '/../utils/respondHandler.php';
require_once __DIR__ . '/../services/CatalogService.php';
require_once __DIR__ . '/../services/FileService.php';

class CatalogController
{
    public function __construct()
    {
    }

    static function getCatalog()
    {
        $catalog = CatalogService::loadCatalogFromFile();
        $catalog = CatalogService::groupCatalogByAuthorFirstLetter($catalog);
        echo json_encode($catalog);
        exit();
    }

    public static function saveFile()
    {
        try {
            // Проверяем, существует ли файл
            if (!isset($_FILES['file']) || $_FILES['file']['error'] !== UPLOAD_ERR_OK) {
                throw new Exception('File not found or upload error');
            }

            // Получаем title и authors
            $title = isset($_POST['title']) ? trim($_POST['title']) : '';
            $authors = isset($_POST['authors']) ? trim($_POST['authors']) : '';

            // Проверяем, что title и authors не пустые
            if (empty($title) || empty($authors)) {
                throw new Exception('Title or authors are empty');
            }

            // добавляем файл в каталог
            // если успешно добавили файл в каталог
            if (CatalogService::addItemToCatalog()) {
                // сохраняем файл в папку
                $fileInfo = FileService::saveFile($_FILES['file'], $title, $authors);
                // Возвращаем успешный ответ с информацией о файле
                respondHandler::respond(array(
                    'message' => 'File saved successfully',
                    'fileInfo' => $fileInfo
                ), 200);
            }

        } catch (Exception $e) {
            // Обработка исключения
            respondHandler::respond(array(
                'error' => 'Error saving file',
                'message' => $e->getMessage()
            ), 500);
        }
    }
}