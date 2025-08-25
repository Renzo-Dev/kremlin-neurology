<?php

require_once __DIR__ . '/../services/ResponseService.php';
require_once __DIR__ . '/../services/CatalogService.php';
require_once __DIR__ . '/../services/FileService.php';
require_once __DIR__ . '/../utils/respondHandler.php';
require_once __DIR__ . '/../utils/RateLimiter.php';

/** Единый контроллер для работы с файлами */
class FileController
{
    private $catalogService;
    private $fileService = null;

    public function __construct(CatalogService $catalogService)
    {
        $this->catalogService = $catalogService;
        // Убираем создание FileService из конструктора
    }

    /**
     * Получает экземпляр FileService (ленивая инициализация)
     */
    private function getFileService()
    {
        if ($this->fileService === null) {
            $this->fileService = new FileService();
        }
        return $this->fileService;
    }

    // === СКАЧИВАНИЕ ФАЙЛОВ ===

    /** Скачивает публичный файл */
    public function downloadFile($isPrivate = false)
    {
        try {
            error_log("=== FileController::downloadFile DEBUG ===");
            error_log("Is private: " . ($isPrivate ? 'true' : 'false'));
            
            // Проверяем rate limiting для скачиваний
            $rateLimiter = new RateLimiter();
            $downloadLimitCheck = $rateLimiter->checkDownloadLimit();
            
            if (!$downloadLimitCheck['allowed']) {
                respondHandler::respond(array(
                    'error' => 'Rate limit exceeded',
                    'message' => $downloadLimitCheck['message'],
                    'retry_after' => $downloadLimitCheck['retry_after']
                ), 429);
                return;
            }
            
            $data = json_decode(file_get_contents('php://input'), true);
            error_log("Download request data: " . print_r($data, true));
            
            if (empty($data['fileName'])) {
                throw new Exception('File name is required', 400);
            }
            $fileName = basename($data['fileName']);
            error_log("Requested file: '$fileName'");

            if ($isPrivate) {
                error_log("Downloading private file: '$fileName'");
                $this->getFileService()->getPrivateFile($fileName);
            } else {
                error_log("Downloading public file: '$fileName'");
                $this->getFileService()->getPublicFile($fileName);
            }
            
            // Увеличиваем счетчик скачиваний
            $rateLimiter->incrementDownloadCount();
            
        } catch (Exception $e) {
            error_log("Download error: " . $e->getMessage());
            respondHandler::respond(array(
                'error' => 'File download error',
                'message' => $e->getMessage()
            ), $e->getCode());
        }
    }

    // === УПРАВЛЕНИЕ ФАЙЛАМИ ===

    /** Сохраняет файл в систему */
    public function saveFile()
    {
        try {
            // Проверяем rate limiting для загрузок
            $rateLimiter = new RateLimiter();
            $uploadLimitCheck = $rateLimiter->checkUploadLimit();
            
            if (!$uploadLimitCheck['allowed']) {
                ResponseService::error('Rate limit exceeded', $uploadLimitCheck['message'], 429);
                return;
            }
            
            // Проверяем, загружен ли файл
            if (!isset($_FILES['file']) || $_FILES['file']['error'] !== UPLOAD_ERR_OK) {
                error_log("File validation failed:");
                error_log("FILES['file'] exists: " . (isset($_FILES['file']) ? 'yes' : 'no'));
                if (isset($_FILES['file'])) {
                    error_log("File error code: " . $_FILES['file']['error']);
                    error_log("File details: " . print_r($_FILES['file'], true));
                }
                
                // Возвращаем ошибку валидации в правильном формате
                respondHandler::respond([
                    'error' => 'Validation failed',
                    'message' => 'Ошибка валидации данных',
                    'errors' => [
                        'file' => ['Файл обязателен для загрузки']
                    ]
                ], 400);
                return;
            }

            // Логируем все POST данные
            error_log("=== FileController::saveFile DEBUG ===");
            error_log("POST data: " . print_r($_POST, true));
            error_log("FILES data: " . print_r($_FILES, true));
            
            // Проверяем обязательные поля
            if (empty($_POST['title']) || empty($_POST['authors'])) {
                error_log("Required fields validation failed");
                error_log("Title: '" . ($_POST['title'] ?? 'NOT SET') . "'");
                error_log("Authors: '" . ($_POST['authors'] ?? 'NOT SET') . "'");
                
                // Возвращаем ошибку валидации в правильном формате
                respondHandler::respond([
                    'error' => 'Validation failed',
                    'message' => 'Ошибка валидации данных',
                    'errors' => [
                        'title' => empty($_POST['title']) ? ['Название файла обязательно'] : [],
                        'authors' => empty($_POST['authors']) ? ['Авторы обязательны'] : []
                    ]
                ], 400);
                return;
            }

            // Сохраняем файл на диск через FileService
            $fileInfo = $this->getFileService()->saveUploadedFile(
                $_FILES['file'],
                $_POST['title'],
                $_POST['authors']
            );

            // Добавляем запись в каталог
            $catalogData = [
                'fileName' => $fileInfo['fileName'],
                'title' => $_POST['title'],
                'authors' => $_POST['authors'],
                'fileSize' => $fileInfo['fileSize'],
                'category' => $_POST['category'] ?? null,
                'description' => $_POST['description'] ?? null
            ];

            $this->catalogService->addFileToCatalog($catalogData);

            // Увеличиваем счетчик загрузок
            $rateLimiter->incrementUploadCount();

            ResponseService::success([
                'message' => 'File saved successfully',
                'fileInfo' => $fileInfo
            ]);

        } catch (Exception $e) {
            ResponseService::errorFromException($e, 'Error saving file');
        }
    }

    /** Удаляет файл из системы */
    public function deleteFile()
    {
        try {
            $rawInput = file_get_contents('php://input');
            $data = json_decode($rawInput, true);
            $fileName = $data['fileName'] ?? '';

            if (empty($fileName)) {
                ResponseService::badRequest('File name is required');
                return;
            }

            // Удаляем из каталога
            $this->catalogService->removeFileFromCatalog($fileName);
            
            // Удаляем файл с диска через FileService
            $this->getFileService()->deleteFile($fileName);

            ResponseService::success([
                'message' => 'File deleted successfully'
            ]);

        } catch (Exception $e) {
            ResponseService::errorFromException($e, 'Error deleting file');
        }
    }

    /** Обновляет файл в системе */
    public function updateFile()
    {
        try {
            error_log("=== FILE UPDATE DEBUG ===");
            $rawInput = file_get_contents('php://input');
            error_log("Raw input: " . $rawInput);
            
            $data = json_decode($rawInput, true);
            error_log("Decoded data: " . print_r($data, true));
            
            if (json_last_error() !== JSON_ERROR_NONE) {
                error_log("JSON decode error: " . json_last_error_msg());
                ResponseService::badRequest('Invalid JSON data');
                return;
            }

            // Проверяем обязательные поля
            if (empty($data['fileName'])) {
                error_log("fileName is missing");
                respondHandler::respond([
                    'error' => 'Validation failed',
                    'message' => 'Ошибка валидации данных',
                    'errors' => [
                        'fileName' => ['Имя файла обязательно']
                    ]
                ], 400);
                return;
            }

            if (empty($data['title'])) {
                error_log("title is missing");
                respondHandler::respond([
                    'error' => 'Validation failed',
                    'message' => 'Ошибка валидации данных',
                    'errors' => [
                        'title' => ['Название файла обязательно']
                    ]
                ], 400);
                return;
            }

            if (empty($data['authors'])) {
                error_log("authors is missing");
                respondHandler::respond([
                    'error' => 'Validation failed',
                    'message' => 'Ошибка валидации данных',
                    'errors' => [
                        'authors' => ['Авторы обязательны']
                    ]
                ], 400);
                return;
            }

            // Обновляем запись в каталоге
            $updateData = [
                'fileName' => $data['fileName'],
                'title' => $data['title'],
                'authors' => $data['authors'],
                'category' => $data['category'] ?? null,
                'description' => $data['description'] ?? null
            ];

            error_log("Updating catalog with data: " . print_r($updateData, true));
            
            $this->catalogService->updateFileInCatalog($updateData);

            ResponseService::success([
                'message' => 'File updated successfully',
                'updatedData' => $updateData
            ]);

        } catch (Exception $e) {
            error_log("Error updating file: " . $e->getMessage());
            ResponseService::errorFromException($e, 'Error updating file');
        }
    }

    /** Получает информацию о файле */
    public function getFileInfo()
    {
        try {
            $data = json_decode(file_get_contents('php://input'), true);
            $fileName = $data['fileName'] ?? '';

            if (empty($fileName)) {
                ResponseService::badRequest('File name is required');
                return;
            }

            $fileInfo = $this->getFileService()->getFileInfo($fileName);
            ResponseService::success($fileInfo);

        } catch (Exception $e) {
            ResponseService::errorFromException($e, 'Error getting file info');
        }
    }

    /** Получает статистику хранилища */
    public function getStorageStats()
    {
        try {
            $storageStats = $this->getFileService()->getStorageSize();
            $catalogStats = [
                'catalogSize' => $this->catalogService->getCatalogSize(),
                'publicFiles' => count($this->catalogService->getPublicCatalog()),
                'privateFiles' => count($this->catalogService->getPrivateCatalog())
            ];
            
            $combinedStats = array_merge($storageStats, $catalogStats);
            ResponseService::success($combinedStats);

        } catch (Exception $e) {
            ResponseService::errorFromException($e, 'Error getting storage stats');
        }
    }
}