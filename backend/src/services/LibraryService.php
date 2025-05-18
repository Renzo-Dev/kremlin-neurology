<?php

require_once __DIR__ . '/../services/CatalogService.php';

class LibraryService
{
    private $libraryPath;

    public function __construct()
    {
        $this->libraryPath = $_SERVER['DOCUMENT_ROOT'] . '/storage/library/';
    }

    public function download($fileName)
    {
        $filePath = $this->libraryPath . $fileName;

        if (!file_exists($filePath)) {
            header('HTTP/1.1 404 Not Found');
            echo json_encode(array(
                'error' => 'File not found'
            ));
            exit();
        }

        header('Content-Description: File Transfer');
        header('Content-Type: application/octet-stream');
        header('Content-Disposition: attachment; fileName="' . $fileName . '"');
        header('Expires: 0');
        header('Cache-Control: must-revalidate');
        header('Pragma: public');
        header('Content-Length: ' . filesize($filePath));


        if (readfile($filePath) === false) {
            header('HTTP/1.0 500 Internal Server Error');
            echo json_encode(array(
                'error' => 'Failed to read file: ' . $fileName,
            ));
        }
        exit();
    }

    public function upload($fileName)
    {
        $catalogService = new CatalogService();

        // Добавляем файл в каталог и проверяем есть у нас уже такой файл
        $catalogService->addItemToCatalog(
            array(
                'filename' => $fileName,
                'title' => $_POST['title'],
                'authors' => $_POST['authors'],
            )
        );

        // Сохраняем файл в хранилище
        $filePath = $this->libraryPath . $fileName;
        if (move_uploaded_file($_FILES['file']['tmp_name'], $filePath)) {
            echo json_encode(array(
                'success' => true,
                'message' => 'File uploaded successfully'
            ));
        } else {
            http_response_code(500);
            echo json_encode(array(
                'success' => false,
                'message' => 'Failed to move uploaded file'
            ));
        }
        exit();
    }

    public function delete($fileName)
    {
        $catalogService = new CatalogService();
        // Удаляем файл из каталога
        $catalogService->deleteItemFromCatalog($fileName);
        // Удаляем файл из хранилища
        $filePath = $this->libraryPath . $fileName;
        // Проверяем, существует ли файл
        if (file_exists($filePath)) {
            // Удаляем файл
            if (unlink($filePath)) {
                echo json_encode(array(
                    'success' => true,
                    'message' => 'File deleted successfully'
                ));
            } else {
                http_response_code(500);
                echo json_encode(array(
                    'success' => false,
                    'message' => 'Failed to delete file from storage'
                ));
            }
        } else {
            http_response_code(404);
            echo json_encode(array(
                'success' => false,
                'message' => 'File not found in storage'
            ));
        }
    }

    private function getFileType($filename)
    {
        $ext = strtolower(pathinfo($filename, PATHINFO_EXTENSION));
        if ($ext === 'pdf') return 'pdf';
        if (in_array($ext, array('doc', 'docx', 'rtf'))) return 'word';
        if (in_array($ext, array('zip', 'djvu'))) return 'zip';
        return 'other';
    }
}
