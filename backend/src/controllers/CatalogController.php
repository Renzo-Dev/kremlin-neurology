<?php


namespace App\Controllers;
use App\Services\CatalogService;
use App\Services\FileService;
use App\Utils\respondHandler;
use Exception;


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

            // Проверяем, что title и authors не пустые
            if (empty($_POST['title']) || empty($_POST['authors'])) {
                throw new Exception('Title or authors are empty');
            }

            // добавляем файл в каталог
            // если успешно добавили файл в каталог
            if (CatalogService::addItemToCatalog()) {
                // сохраняем файл в папку
                $fileInfo = FileService::saveFile($_FILES['file'], $_POST['title'], $_POST['authors']);
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

    public static function deleteFile()
    {
        // получаем fileName который хотим удалить
        try {
            $rawInput = file_get_contents('php://input');
            $data = json_decode($rawInput, true);
            $fileName = isset($data['fileName']) ? trim($data['fileName']) : '';

            if ($fileName === '') {
                throw new Exception('File name are empty ', 500);
            }
            if (CatalogService::deleteFile($fileName)) {
                respondHandler::respond(array(
                    'message' => 'File deleted successfully',
                ), 200);
            }

        } catch (Exception $e) {
            respondHandler::respond(array(
                'error' => 'Error delete file',
                'message' => $e->getMessage()
            ), $e->getCode());
        }
        return true;
    }
}