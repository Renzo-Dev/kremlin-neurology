<?php

require_once __DIR__ . '/../services/CatalogService.php';

class LibraryService
{
    private $libraryPath;

    public function __construct()
    {
        $this->libraryPath = $_SERVER['DOCUMENT_ROOT'] . '/storage/library/';
//        $this->libraryPath = realpath(__DIR__ . '/../../../') . '/storage/library/';
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

        $catalogService->addItemToCatalog(array(
            'filename' => $fileName,
            'title' => $_POST['title'],
            'authors' => $_POST['authors'],
        ));

        $filePath = $this->libraryPath . $fileName;

        if (!move_uploaded_file($_FILES['file']['tmp_name'], $filePath)) {
            throw new Exception('Failed to move uploaded file');
        }
    }

    public function delete($fileName)
    {
        $catalogService = new CatalogService();
        $catalogService->deleteItemFromCatalog($fileName);

        $filePath = $this->libraryPath . $fileName;

        if (file_exists($filePath)) {
            if (!unlink($filePath)) {
                throw new Exception('Failed to delete file from storage');
            }
        } else {
            throw new Exception('File not found in storage');
        }
    }
}