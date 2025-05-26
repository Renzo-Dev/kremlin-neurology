<?php

namespace App\Services;

use Exception;

class FileService
{
    public function __construct()
    {
    }

    // Метод для проверки существования файла в storage
    public static function fileExists($fileName)
    {
        return file_exists(self::getFilePath($fileName)); // Возвращаем true, если файл существует, иначе false
    }

    private static function getPathStorage()
    {
        return __DIR__ . '/../data/files/'; // Путь к папке с файлами
    }

    // Метод для получения полного пути к файлу
    public static function getFilePath($fileName)
    {
        return self::getPathStorage() . $fileName; // Возвращаем полный путь к файлу
    }

    public static function saveFile($file, $title, $authors)
    {
        // Проверяем, существует ли папка для хранения файлов, если нет - создаем
        if (!is_dir(self::getPathStorage())) {
            mkdir(self::getPathStorage(), 0777, true); // Создаем папку с правами доступа 0777
        }

        // Получаем имя файла и его расширение
        $fileName = basename($file['name']);
        $filePath = self::getFilePath($fileName);

        // Перемещаем загруженный файл в папку для хранения
        if (move_uploaded_file($file['tmp_name'], $filePath)) {
            // Если файл успешно сохранен, возвращаем информацию о файле
            return array(
                'title' => $title,
                'authors' => $authors,
                'fileName' => $fileName,
            );
        } else {
            throw new Exception('Failed to save file'); // Если не удалось сохранить файл, выбрасываем исключение
        }
    }

    // Метод для удаления файла
    public static function deleteFile($fileName)
    {
        $filePath = self::getFilePath($fileName); // Получаем полный путь к файлу

        if (self::fileExists($fileName)) {
            if (unlink($filePath)) { // Удаляем файл
                return true; // Возвращаем true, если файл успешно удален
            } else {
                throw new Exception('Failed to delete file', 501); // Если не удалось удалить файл, выбрасываем исключение
            }
        }
        return true; // Если файл не существует, возвращаем true (ничего не удаляем)
    }

    public static function downloadFile($fileName)
    {
        // получаем путь к файлу
//        $filePath = __DIR__ . '/../../uploads/' . $fileName;
        $filePath = self::getFilePath($fileName); // используем метод для получения пути к файлу
        // проверяем, что файл существует
        if (!file_exists($filePath)) {
            // если файл не существует, возвращаем ошибку
            throw new Exception('File not found', 404);
        }
        // если файл существует, устанавливаем заголовки для скачивания
        header('Content-Description: File Transfer');
        header('Content-Type: application/octet-stream');
        header('Content-Disposition: attachment; fileName="' . $fileName . '"');
        header('Expires: 0');
        header('Cache-Control: must-revalidate');
        header('Pragma: public');
        header('Content-Length: ' . filesize($filePath));

        if (readfile($filePath) === false) {
            // если чтение файла не удалось, возвращаем ошибку
            throw new Exception('Error reading file', 500);
        }
        // если файл успешно прочитан, завершаем выполнение скрипта
        exit;
    }
}