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

            if (empty($data['fileName'])) {
                throw new Exception('File name is required', 400);
            }
            $fileName = basename($data['fileName']);

            if ($isPrivate) {
                $this->getFileService()->getPrivateFile($fileName);
            } else {
                $this->getFileService()->getPublicFile($fileName);
            }

            // Увеличиваем счетчик скачиваний
            $rateLimiter->incrementDownloadCount();

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
                respondHandler::respond(array(
                    'error' => 'Validation failed',
                    'message' => 'Ошибка валидации данных',
                    'errors' => array(
                        'file' => array('Файл обязателен для загрузки')
                    )
                ), 400);
                return;
            }

            // Логируем все POST данные
            error_log("=== FileController::saveFile DEBUG ===");
            error_log("POST data: " . print_r($_POST, true));
            error_log("FILES data: " . print_r($_FILES, true));

            // Проверяем обязательные поля
            if (empty($_POST['title']) || empty($_POST['authors'])) {
                error_log("Required fields validation failed");
                error_log("Title: '" . (isset($_POST['title']) ? $_POST['title'] : 'NOT SET') . "'");
                error_log("Authors: '" . (isset($_POST['authors']) ? $_POST['authors'] : 'NOT SET') . "'");

                // Возвращаем ошибку валидации в правильном формате
                respondHandler::respond(array(
                    'error' => 'Validation failed',
                    'message' => 'Ошибка валидации данных',
                    'errors' => array(
                        'title' => empty($_POST['title']) ? array('Название файла обязательно') : array(),
                        'authors' => empty($_POST['authors']) ? array('Авторы обязательны') : array()
                    )
                ), 400);
                return;
            }

            // Сохраняем файл на диск через FileService
            $fileInfo = $this->getFileService()->saveUploadedFile(
                $_FILES['file'],
                $_POST['title'],
                $_POST['authors']
            );

            // Добавляем запись в каталог
            $catalogData = array(
                'fileName' => $fileInfo['fileName'],
                'title' => $_POST['title'],
                'authors' => $_POST['authors'],
                'fileSize' => $fileInfo['fileSize'],
                'category' => isset($_POST['category']) ? $_POST['category'] : null,
                'description' => isset($_POST['description']) ? $_POST['description'] : null
            );

            $this->catalogService->addFileToCatalog($catalogData);

            // Увеличиваем счетчик загрузок
            $rateLimiter->incrementUploadCount();

            ResponseService::success(array(
                'message' => 'File saved successfully',
                'fileInfo' => $fileInfo
            ));

        } catch (Exception $e) {
            ResponseService::errorFromException($e, 'Error saving file');
        }
    }

    /** Удаляет файл из системы */
    public function deleteFile()
    {
        try {
            if (isset($_GET['fileName'])) {
                $fileName = $_GET['fileName'];
            } else {
                // 2️⃣ Если в query нет → пробуем достать JSON из тела запроса
                $rawData = file_get_contents("php://input");
                if (!empty($rawData)) {
                    $json = json_decode($rawData, true);
                    if (isset($json['fileName'])) {
                        $fileName = $json['fileName'];
                    }
                }
            }
            if (empty($fileName)) {
                ResponseService::badRequest('File name is required');
                return;
            }

            // Удаляем из каталога
            $this->catalogService->removeFileFromCatalog($fileName);

            // Удаляем файл с диска через FileService
            $this->getFileService()->deleteFile($fileName);

            ResponseService::success(array(
                'message' => 'File deleted successfully'
            ));

        } catch (Exception $e) {
            ResponseService::errorFromException($e, 'Error deleting file');
        }
    }

    /** Обновляет файл в системе */
    public function updateFile()
    {
        try {
            $rawInput = file_get_contents('php://input');
            var_dump($_POST);
            exjt;

            $data = json_decode($rawInput, true);

            if (json_last_error() !== JSON_ERROR_NONE) {
                ResponseService::badRequest('Invalid JSON data');
                return;
            }

            // Проверяем обязательные поля
            if (empty($data['fileName'])) {
                respondHandler::respond(array(
                    'error' => 'Validation failed',
                    'message' => 'Ошибка валидации данных',
                    'errors' => array(
                        'fileName' => array('Имя файла обязательно')
                    )
                ), 400);
                return;
            }

            if (empty($data['title'])) {
                respondHandler::respond(array(
                    'error' => 'Validation failed',
                    'message' => 'Ошибка валидации данных',
                    'errors' => array(
                        'title' => array('Название файла обязательно')
                    )
                ), 400);
                return;
            }

            if (empty($data['authors'])) {
                respondHandler::respond(array(
                    'error' => 'Validation failed',
                    'message' => 'Ошибка валидации данных',
                    'errors' => array(
                        'authors' => array('Авторы обязательны')
                    )
                ), 400);
                return;
            }

            // Обновляем запись в каталоге
            $updateData = array(
                'fileName' => $data['fileName'],
                'title' => $data['title'],
                'authors' => $data['authors'],
                'category' => isset($data['category']) ? $data['category'] : null,
                'description' => isset($data['description']) ? $data['description'] : null
            );

            $this->catalogService->updateFileInCatalog($updateData);

            ResponseService::success(array(
                'message' => 'File updated successfully',
                'updatedData' => $updateData
            ));

        } catch (Exception $e) {
            ResponseService::errorFromException($e, 'Error updating file');
        }
    }

    /** Получает информацию о файле */
    public function getFileInfo()
    {
        try {
            $data = json_decode(file_get_contents('php://input'), true);
            $fileName = isset($data['fileName']) ? $data['fileName'] : '';

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
            $catalogStats = array(
                'catalogSize' => $this->catalogService->getCatalogSize(),
                'publicFiles' => count($this->catalogService->getPublicCatalog()),
                'privateFiles' => count($this->catalogService->getPrivateCatalog())
            );

            $combinedStats = array_merge($storageStats, $catalogStats);
            ResponseService::success($combinedStats);

        } catch (Exception $e) {
            ResponseService::errorFromException($e, 'Error getting storage stats');
        }
    }
}