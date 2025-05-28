<?php

require_once __DIR__ . '/../utils/respondHandler.php';
require_once __DIR__ . '/../services/FileService.php';

class FileController
{
    public static function downloadFile($isPrivate = false)
    {
        try {
            $data = json_decode(file_get_contents('php://input'), true);
            if (empty($data['fileName'])) {
                throw new Exception('File name is required', 400);
            }
            $fileName = basename($data['fileName']);

            if ($isPrivate) {
                FileService::getPrivateFile($fileName);
            } else {
                FileService::getPublicFile($fileName);
            }
        } catch (Exception $e) {
            respondHandler::respond(array(
                'error' => 'File download error',
                'message' => $e->getMessage()
            ), $e->getCode());
        }
    }
}