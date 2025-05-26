<?php

namespace App\Controllers;

use App\Services\FileService;
use App\Utils\respondHandler;
use Exception;

class FileController
{
    public static function downloadFile()
    {
        try {

            $data = json_decode(file_get_contents('php://input'), true);
            if (empty($data['fileName'])) {
                throw new Exception('File name is required', 400);
            }
            $fileName = basename($data['fileName']);

            FileService::downloadFile($fileName);
        } catch (Exception $e) {
            respondHandler::respond(
                array(
                    'error' => 'File download error',
                    'message' => $e->getMessage()
                ), $e->getCode()
            );
        }
    }
}