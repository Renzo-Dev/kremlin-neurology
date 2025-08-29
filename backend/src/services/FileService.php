<?php

/** Единый сервис для работы с файлами - скачивание, загрузка, управление */
class FileService
{
    private $privatePath;
    private $publicPath;
    private $allowedTypes;
    private $maxFileSize;

    public function __construct()
    {
        $this->privatePath = __DIR__ . '/../data/private/';
        $this->publicPath = __DIR__ . '/../data/public/';
        $this->allowedTypes = array('pdf', 'doc', 'docx', 'txt'); // Соответствует frontend
        $this->maxFileSize = 50 * 1024 * 1024; // 50MB (соответствует frontend)
        
        // Убираем автоматическое создание директорий
        // $this->ensureDirectoriesExist();
    }

    // === СКАЧИВАНИЕ ФАЙЛОВ ===

    /**
     * Получить публичный файл
     */
    public function getPublicFile($fileName)
    {
        try {
            $filePath = $this->publicPath . $fileName;
            $this->loadFile($filePath, $fileName);
        } catch (Exception $e) {
            throw new Exception($e->getMessage(), $e->getCode());
        }
    }

    /**
     * Получить приватный файл
     */
    public function getPrivateFile($fileName)
    {
        try {
            $filePath = $this->privatePath . $fileName;
            $this->loadFile($filePath, $fileName);
        } catch (Exception $e) {
            throw new Exception($e->getMessage(), $e->getCode());
        }
    }

    /**
     * Загружает и отправляет файл для скачивания
     */
    private function loadFile($filePath, $fileName)
    {
        try {
            if (!file_exists($filePath)) {
                throw new Exception('File not found', 404);
            }
            
            $fileSize = filesize($filePath);
            
            header('Content-Description: File Transfer');
            header('Content-Type: application/octet-stream');
            header('Content-Disposition: attachment; filename="' . $fileName . '"');
            header('Expires: 0');
            header('Cache-Control: must-revalidate');
            header('Pragma: public');
            header('Content-Length: ' . $fileSize);
            
            if (readfile($filePath) === false) {
                throw new Exception('Error reading file', 500);
            }
            
            exit;
            
        } catch (Exception $e) {
            throw $e;
        }
    }

    // === ЗАГРУЗКА И СОХРАНЕНИЕ ФАЙЛОВ ===

    /**
     * Сохраняет загруженный файл
     */
    public function saveUploadedFile($file, $title, $authors)
    {
        try {
            // Валидация файла
            $this->validateUploadedFile($file);
            
            // Создаем директории только при необходимости
            $this->ensureDirectoriesExist();
            
            // Используем оригинальное имя файла
            $fileName = $file['name'];
            
            // Проверяем, существует ли файл с таким именем
            $filePath = $this->privatePath . $fileName;
            $counter = 1;
            
            // Если файл существует, добавляем номер к имени
            while (file_exists($filePath)) {
                $nameWithoutExt = pathinfo($file['name'], PATHINFO_FILENAME);
                $extension = pathinfo($file['name'], PATHINFO_EXTENSION);
                $fileName = $nameWithoutExt . '_' . $counter . '.' . $extension;
                $filePath = $this->privatePath . $fileName;
                $counter++;
            }
            
            // Перемещаем файл
            if (!move_uploaded_file($file['tmp_name'], $filePath)) {
                throw new Exception('Failed to move uploaded file', 500);
            }
            
            // Проверяем реальный размер сохраненного файла
            $actualFileSize = filesize($filePath);
            
            // Получаем информацию о файле
            $fileInfo = array(
                'fileName' => $fileName,
                'originalName' => $file['name'],
                'filePath' => $filePath,
                'fileSize' => $actualFileSize, // Используем реальный размер
                'fileType' => $this->getFileExtension($file['name']),
                'title' => $title,
                'authors' => $authors,
                'uploadDate' => date('Y-m-d H:i:s'),
                'mimeType' => $file['type']
            );
            
            return $fileInfo;

        } catch (Exception $e) {
            throw new Exception('Error saving uploaded file: ' . $e->getMessage(), $e->getCode());
        }
    }

    // === УПРАВЛЕНИЕ ФАЙЛАМИ ===

    /**
     * Удаляет файл
     */
    public function deleteFile($fileName)
    {
        try {
            // Сначала пробуем удалить из приватной папки
            $privatePath = $this->privatePath . $fileName;
            if (file_exists($privatePath)) {
                if (unlink($privatePath)) {
                    return true;
                } else {
                    throw new Exception('Failed to delete private file', 501);
                }
            }

            // Если не найден в приватной, пробуем из публичной
            $publicPath = $this->publicPath . $fileName;
            if (file_exists($publicPath)) {
                if (unlink($publicPath)) {
                    return true;
                } else {
                    throw new Exception('Failed to delete public file', 501);
                }
            }

            return true; // Файл не найден нигде
        } catch (Exception $e) {
            throw new Exception('Error deleting file: ' . $e->getMessage(), $e->getCode());
        }
    }

    /**
     * Перемещает файл в публичную папку
     */
    public function moveToPublic($fileName)
    {
        $privatePath = $this->privatePath . $fileName;
        $publicPath = $this->publicPath . $fileName;

        if (!file_exists($privatePath)) {
            throw new Exception('Private file not found', 404);
        }

        if (file_exists($publicPath)) {
            throw new Exception('Public file already exists', 409);
        }

        if (rename($privatePath, $publicPath)) {
            return true;
        } else {
            throw new Exception('Failed to move file to public', 500);
        }
    }

    /**
     * Перемещает файл в приватную папку
     */
    public function moveToPrivate($fileName)
    {
        $publicPath = $this->publicPath . $fileName;
        $privatePath = $this->privatePath . $fileName;

        if (!file_exists($publicPath)) {
            throw new Exception('Public file not found', 404);
        }

        if (file_exists($privatePath)) {
            throw new Exception('Private file already exists', 409);
        }

        if (rename($publicPath, $privatePath)) {
            return true;
        } else {
            throw new Exception('Failed to move file to private', 500);
        }
    }

    /**
     * Получает информацию о файле
     */
    public function getFileInfo($fileName)
    {
        try {
            // Сначала ищем в приватной папке
            $filePath = $this->privatePath . $fileName;
            if (!file_exists($filePath)) {
                // Если не найден в приватной, ищем в публичной
                $filePath = $this->publicPath . $fileName;
                if (!file_exists($filePath)) {
                    throw new Exception('File not found', 404);
                }
            }
            
            $fileInfo = pathinfo($filePath);
            $stats = stat($filePath);
            
            return array(
                'fileName' => $fileName,
                'filePath' => $filePath,
                'fileSize' => $stats['size'],
                'fileType' => $fileInfo['extension'],
                'mimeType' => $this->getMimeType($fileInfo['extension']),
                'uploadDate' => date('Y-m-d H:i:s', $stats['mtime']),
                'lastModified' => date('Y-m-d H:i:s', $stats['mtime']),
                'isPublic' => $this->isFilePublic($fileName),
                'isReadable' => is_readable($filePath),
                'isWritable' => is_writable($filePath)
            );

        } catch (Exception $e) {
            throw new Exception('Error getting file info: ' . $e->getMessage(), $e->getCode());
        }
    }

    // === СТАТИСТИКА И ИНФОРМАЦИЯ ===

    /**
     * Получает размер хранилища
     */
    public function getStorageSize()
    {
        try {
            $totalSize = 0;
            $fileCount = 0;
            $typeStats = array();
            
            // Подсчитываем приватные файлы
            $privateFiles = glob($this->privatePath . '*');
            foreach ($privateFiles as $file) {
                if (is_file($file)) {
                    $size = filesize($file);
                    $totalSize += $size;
                    $fileCount++;
                    
                    $extension = strtolower(pathinfo($file, PATHINFO_EXTENSION));
                    $typeStats[$extension] = (isset($typeStats[$extension]) ? $typeStats[$extension] : 0) + $size;
                }
            }
            
            // Подсчитываем публичные файлы
            $publicFiles = glob($this->publicPath . '*');
            foreach ($publicFiles as $file) {
                if (is_file($file)) {
                    $size = filesize($file);
                    $totalSize += $size;
                    $fileCount++;
                    
                    $extension = strtolower(pathinfo($file, PATHINFO_EXTENSION));
                    $typeStats[$extension] = (isset($typeStats[$extension]) ? $typeStats[$extension] : 0) + $size;
                }
            }
            
            return array(
                'totalSize' => $totalSize,
                'totalSizeFormatted' => $this->formatBytes($totalSize),
                'fileCount' => $fileCount,
                'typeStats' => $typeStats
            );

        } catch (Exception $e) {
            throw new Exception('Error getting storage size: ' . $e->getMessage(), $e->getCode());
        }
    }

    /**
     * Проверяет, является ли файл публичным
     */
    public function isFilePublic($fileName)
    {
        return file_exists($this->publicPath . $fileName);
    }

    /**
     * Проверяет существование файла
     */
    public function fileExists($filePath)
    {
        return file_exists($filePath);
    }

    // === ПРИВАТНЫЕ МЕТОДЫ ===

    /**
     * Создает необходимые директории
     */
    private function ensureDirectoriesExist()
    {
        if (!is_dir($this->privatePath)) {
            mkdir($this->privatePath, 0755, true);
        }
        
        if (!is_dir($this->publicPath)) {
            mkdir($this->publicPath, 0755, true);
        }
    }

    /**
     * Валидирует загруженный файл
     */
    private function validateUploadedFile($file)
    {
        if ($file['error'] !== UPLOAD_ERR_OK) {
            throw new Exception('File upload error: ' . $file['error'], 400);
        }
        
        if ($file['size'] > $this->maxFileSize) {
            throw new Exception('File size exceeds maximum allowed size', 400);
        }
        
        $extension = strtolower($this->getFileExtension($file['name']));
        
        if (!in_array($extension, $this->allowedTypes)) {
            throw new Exception('File type not allowed', 400);
        }
    }



    /**
     * Получает расширение файла
     */
    private function getFileExtension($fileName)
    {
        return strtolower(pathinfo($fileName, PATHINFO_EXTENSION));
    }



    /**
     * Получает MIME тип по расширению
     */
    private function getMimeType($extension)
    {
        $mimeTypes = array(
            'pdf' => 'application/pdf',
            'doc' => 'application/msword',
            'docx' => 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'txt' => 'text/plain'
        );
        
        return isset($mimeTypes[$extension]) ? $mimeTypes[$extension] : 'application/octet-stream';
    }

    /**
     * Форматирует размер файла
     */
    private function formatBytes($bytes, $precision = 2)
    {
        $units = array('B', 'KB', 'MB', 'GB');
        
        for ($i = 0; $bytes > 1024 && $i < count($units) - 1; $i++) {
            $bytes /= 1024;
        }
        
        return round($bytes, $precision) . ' ' . $units[$i];
    }
}