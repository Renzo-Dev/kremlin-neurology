<?php

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

    public function getCatalogList()
    {

    }

    public function uploadFIle()
    {

    }

    public function delete()
    {
        // Удаляем файл из каталога
        // Удаляем файл из хранилища
    }
}