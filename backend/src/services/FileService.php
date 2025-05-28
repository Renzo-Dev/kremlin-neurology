<?php

class FileService
{
    public function __construct()
    {
    }

    private static function getPrivatePath()
    {
        return __DIR__ . '/../data/files/private/';
    }

    private static function getPublicPath()
    {
        return __DIR__ . '/../data/files/public/';
    }

    /*
     * Получить публичный путь к файлу
     * */
    public static function getPublicFile($fileName)
    {
        try {
            // Проверяем, существует ли папка для хранения файлов, если нет - создаем
            if (!is_dir(self::getPublicPath())) {
                mkdir(self::getPublicPath(), 0777, true); // Создаем папку с правами доступа 0777
            }

            self::loadFile(self::getPublicPath() . $fileName, $fileName);
        } catch (Exception $e) {
            // если файл не найден, возвращаем ошибку
            throw new Exception($e->getMessage(), $e->getCode());
        }
    }

    /*
     * Получить приватный путь к файлу
     * */
    public
    static function getPrivateFile($fileName)
    {
        try {
            // Проверяем, существует ли папка для хранения файлов, если нет - создаем
            if (!is_dir(self::getPrivatePath())) {
                mkdir(self::getPrivatePath(), 0777, true); // Создаем папку с правами доступа 0777
            }

            self::loadFile(self::getPrivatePath() . $fileName, $fileName);
        } catch (Exception $e) {
            // если файл не найден, возвращаем ошибку
            throw new Exception($e->getMessage(), $e->getCode());
        }
    }

    public static function loadFile($filePath, $fileName)
    {
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

    public static function saveFile($file, $title, $authors)
    {
        // Проверяем, существует ли папка для хранения файлов, если нет - создаем
        if (!is_dir(self::getPrivatePath())) {
            mkdir(self::getPrivatePath(), 0777, true); // Создаем папку с правами доступа 0777
        }

        // Получаем имя файла и его расширение
        $fileName = basename($file['name']);
        $filePath = self::getPrivatePath() . $fileName; // Формируем полный путь к файлу

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
        $filePath = self::getPrivatePath() . $fileName; // Получаем полный путь к файлу
        if (self::fileExists($filePath)) {
            if (unlink($filePath)) { // Удаляем файл
                return true; // Возвращаем true, если файл успешно удален
            } else {
                throw new Exception('Failed to delete file', 501); // Если не удалось удалить файл, выбрасываем исключение
            }
        }
        return true; // Если файл не существует, возвращаем true (ничего не удаляем)
    }

    public static function fileExists($filePath)
    {
        return file_exists($filePath); // Возвращаем true, если файл существует, иначе false
    }
}