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
        $this->allowedTypes = ['pdf', 'doc', 'docx', 'txt']; // Соответствует frontend
        $this->maxFileSize = 50 * 1024 * 1024; // 50MB (соответствует frontend)
        
        // Убираем автоматическое создание директорий
        // this->ensureDirectoriesExist();
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
            error_log("=== FileService::getPrivateFile DEBUG ===");
            error_log("Requested file: '$fileName'");
            
            $filePath = $this->privatePath . $fileName;
            error_log("Full file path: '$filePath'");
            error_log("File exists: " . (file_exists($filePath) ? 'yes' : 'no'));
            
            if (file_exists($filePath)) {
                error_log("File size: " . filesize($filePath) . " bytes");
            }
            
            $this->loadFile($filePath, $fileName);
        } catch (Exception $e) {
            error_log("getPrivateFile error: " . $e->getMessage());
            throw new Exception($e->getMessage(), $e->getCode());
        }
    }

    /**
     * Загружает и отправляет файл для скачивания
     */
    private function loadFile($filePath, $fileName)
    {
        try {
            error_log("=== FileService::loadFile DEBUG ===");
            error_log("Loading file: '$fileName' from path: '$filePath'");
            
            if (!file_exists($filePath)) {
                error_log("File not found: '$filePath'");
                throw new Exception('File not found', 404);
            }
            
            $fileSize = filesize($filePath);
            error_log("File size: $fileSize bytes");
            error_log("Setting headers for file download...");
            
            header('Content-Description: File Transfer');
            header('Content-Type: application/octet-stream');
            header('Content-Disposition: attachment; filename="' . $fileName . '"');
            header('Expires: 0');
            header('Cache-Control: must-revalidate');
            header('Pragma: public');
            header('Content-Length: ' . $fileSize);
            
            error_log("Headers set, starting file read...");
            
            if (readfile($filePath) === false) {
                error_log("Error reading file: '$filePath'");
                throw new Exception('Error reading file', 500);
            }
            
            error_log("File read successful, exiting...");
            exit;
            
        } catch (Exception $e) {
            error_log("loadFile error: " . $e->getMessage());
            throw $e;
        }
    }

    // === ЗАГРУЗКА И СОХРАНЕНИЕ ФАЙЛОВ ===

    /**
     * Сохраняет загруженный файл
     */
    public function saveUploadedFile(array $file, string $title, string $authors): array
    {
        try {
            error_log("=== FileService::saveUploadedFile DEBUG ===");
            error_log("File data: " . print_r($file, true));
            error_log("Title: '$title'");
            error_log("Authors: '$authors'");
            
            // Валидация файла
            $this->validateUploadedFile($file);
            
            // Создаем директории только при необходимости
            $this->ensureDirectoriesExist();
            
            // Генерируем уникальное имя файла
            $fileName = $this->generateUniqueFileName($file['name'], $title);
            error_log("Generated filename: '$fileName'");
            
            // Создаем путь для сохранения (по умолчанию в приватную папку)
            $filePath = $this->privatePath . $fileName;
            error_log("File path: '$filePath'");
            
            // Перемещаем файл
            if (!move_uploaded_file($file['tmp_name'], $filePath)) {
                error_log("Failed to move uploaded file from '{$file['tmp_name']}' to '$filePath'");
                throw new Exception('Failed to move uploaded file', 500);
            }
            
            error_log("File successfully moved to: '$filePath'");
            
            // Проверяем реальный размер сохраненного файла
            $actualFileSize = filesize($filePath);
            error_log("Original file size from upload: " . $file['size']);
            error_log("Actual file size after save: " . $actualFileSize);
            
            // Получаем информацию о файле
            $fileInfo = [
                'fileName' => $fileName,
                'originalName' => $file['name'],
                'filePath' => $filePath,
                'fileSize' => $actualFileSize, // Используем реальный размер
                'fileType' => $this->getFileExtension($file['name']),
                'title' => $title,
                'authors' => $authors,
                'uploadDate' => date('Y-m-d H:i:s'),
                'mimeType' => $file['type']
            ];
            
            error_log("File info: " . print_r($fileInfo, true));
            return $fileInfo;

        } catch (Exception $e) {
            throw new Exception('Error saving uploaded file: ' . $e->getMessage(), $e->getCode());
        }
    }

    // === УПРАВЛЕНИЕ ФАЙЛАМИ ===

    /**
     * Удаляет файл
     */
    public function deleteFile(string $fileName): bool
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
    public function moveToPublic($fileName): bool
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
    public function moveToPrivate($fileName): bool
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
    public function getFileInfo(string $fileName): array
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
            
            return [
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
            ];

        } catch (Exception $e) {
            throw new Exception('Error getting file info: ' . $e->getMessage(), $e->getCode());
        }
    }

    // === СТАТИСТИКА И ИНФОРМАЦИЯ ===

    /**
     * Получает размер хранилища
     */
    public function getStorageSize(): array
    {
        try {
            $totalSize = 0;
            $fileCount = 0;
            $typeStats = [];
            
            // Подсчитываем приватные файлы
            $privateFiles = glob($this->privatePath . '*');
            foreach ($privateFiles as $file) {
                if (is_file($file)) {
                    $size = filesize($file);
                    $totalSize += $size;
                    $fileCount++;
                    
                    $extension = strtolower(pathinfo($file, PATHINFO_EXTENSION));
                    $typeStats[$extension] = ($typeStats[$extension] ?? 0) + $size;
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
                    $typeStats[$extension] = ($typeStats[$extension] ?? 0) + $size;
                }
            }
            
            return [
                'totalSize' => $totalSize,
                'totalSizeFormatted' => $this->formatBytes($totalSize),
                'fileCount' => $fileCount,
                'typeStats' => $typeStats
            ];

        } catch (Exception $e) {
            throw new Exception('Error getting storage size: ' . $e->getMessage(), $e->getCode());
        }
    }

    /**
     * Проверяет, является ли файл публичным
     */
    public function isFilePublic($fileName): bool
    {
        return file_exists($this->publicPath . $fileName);
    }

    /**
     * Проверяет существование файла
     */
    public function fileExists($filePath): bool
    {
        return file_exists($filePath);
    }

    // === ПРИВАТНЫЕ МЕТОДЫ ===

    /**
     * Создает необходимые директории
     */
    private function ensureDirectoriesExist(): void
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
    private function validateUploadedFile(array $file): void
    {
        error_log("=== FileService::validateUploadedFile DEBUG ===");
        error_log("File error code: " . $file['error']);
        error_log("File size: " . $file['size'] . " bytes");
        error_log("Max allowed size: " . $this->maxFileSize . " bytes");
        error_log("File name: " . $file['name']);
        error_log("File type: " . $file['type']);
        
        if ($file['error'] !== UPLOAD_ERR_OK) {
            error_log("File upload error: " . $file['error']);
            throw new Exception('File upload error: ' . $file['error'], 400);
        }
        
        if ($file['size'] > $this->maxFileSize) {
            error_log("File size validation failed: {$file['size']} > {$this->maxFileSize}");
            throw new Exception('File size exceeds maximum allowed size', 400);
        }
        
        $extension = strtolower($this->getFileExtension($file['name']));
        error_log("File extension: '$extension'");
        error_log("Allowed types: " . print_r($this->allowedTypes, true));
        
        if (!in_array($extension, $this->allowedTypes)) {
            error_log("File type validation failed: '$extension' not in allowed types");
            throw new Exception('File type not allowed', 400);
        }
        
        error_log("File validation passed successfully");
    }

    /**
     * Генерирует уникальное имя файла
     */
    private function generateUniqueFileName(string $originalName, string $title): string
    {
        $extension = $this->getFileExtension($originalName);
        $sanitizedTitle = $this->sanitizeFileName($title);
        $timestamp = time();
        $random = uniqid();
        
        return $sanitizedTitle . '_' . $timestamp . '_' . $random . '.' . $extension;
    }

    /**
     * Получает расширение файла
     */
    private function getFileExtension(string $fileName): string
    {
        return strtolower(pathinfo($fileName, PATHINFO_EXTENSION));
    }

    /**
     * Санитизирует имя файла
     */
    private function sanitizeFileName(string $fileName): string
    {
        // Убираем специальные символы, оставляем только буквы, цифры и пробелы
        $sanitized = preg_replace('/[^a-zA-Z0-9\s]/', '', $fileName);
        // Заменяем пробелы на подчеркивания
        $sanitized = str_replace(' ', '_', $sanitized);
        // Ограничиваем длину
        return substr($sanitized, 0, 50);
    }

    /**
     * Получает MIME тип по расширению
     */
    private function getMimeType(string $extension): string
    {
        $mimeTypes = [
            'pdf' => 'application/pdf',
            'doc' => 'application/msword',
            'docx' => 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'txt' => 'text/plain'
        ];
        
        return $mimeTypes[$extension] ?? 'application/octet-stream';
    }

    /**
     * Форматирует размер файла
     */
    private function formatBytes(int $bytes, int $precision = 2): string
    {
        $units = ['B', 'KB', 'MB', 'GB'];
        
        for ($i = 0; $bytes > 1024 && $i < count($units) - 1; $i++) {
            $bytes /= 1024;
        }
        
        return round($bytes, $precision) . ' ' . $units[$i];
    }
}