<?php

require_once __DIR__ . '/../services/ResponseService.php';
require_once __DIR__ . '/../services/CatalogService.php';
require_once __DIR__ . '/../services/FileService.php';
require_once __DIR__ . '/../utils/respondHandler.php';

/** Единый контроллер для работы с файлами */
class FileController
{
    private $catalogService;
    private $fileService;

    public function __construct(CatalogService $catalogService)
    {
        $this->catalogService = $catalogService;
        $this->fileService = new FileService();
    }

    // === СКАЧИВАНИЕ ФАЙЛОВ ===

    /** Скачивает публичный файл */
    public function downloadFile($isPrivate = false)
    {
        try {
            $data = json_decode(file_get_contents('php://input'), true);
            if (empty($data['fileName'])) {
                throw new Exception('File name is required', 400);
            }
            $fileName = basename($data['fileName']);

            if ($isPrivate) {
                $this->fileService->getPrivateFile($fileName);
            } else {
                $this->fileService->getPublicFile($fileName);
            }
        } catch (Exception $e) {
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
            // Проверяем, загружен ли файл
            if (!isset($_FILES['file']) || $_FILES['file']['error'] !== UPLOAD_ERR_OK) {
                ResponseService::badRequest('File upload failed');
                return;
            }

            // Проверяем обязательные поля
            if (empty($_POST['title']) || empty($_POST['authors'])) {
                ResponseService::badRequest('Title and authors are required');
                return;
            }

            // Сохраняем файл на диск через FileService
            $fileInfo = $this->fileService->saveUploadedFile(
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
                'description' => $_POST['description'] ?? null
            ];

            $this->catalogService->addFileToCatalog($catalogData);

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
            $this->fileService->deleteFile($fileName);

            ResponseService::success([
                'message' => 'File deleted successfully'
            ]);

        } catch (Exception $e) {
            ResponseService::errorFromException($e, 'Error deleting file');
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

            $fileInfo = $this->fileService->getFileInfo($fileName);
            ResponseService::success($fileInfo);

        } catch (Exception $e) {
            ResponseService::errorFromException($e, 'Error getting file info');
        }
    }

    /** Получает статистику хранилища */
    public function getStorageStats()
    {
        try {
            $storageStats = $this->fileService->getStorageSize();
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