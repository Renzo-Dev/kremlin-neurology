<?php

require_once __DIR__ . '/../services/LibraryService.php';
require_once __DIR__ . '/../utils/cors.php';

if (empty($_GET['fileName'])) {
    header('HTTP/1.1 400 Bad Request');
    echo json_encode(array(
        'error' => 'File parameter is required',
    ));
    exit;
}

$fileName = basename($_GET['fileName']);

$libraryService = new LibraryService();
$libraryService->download($fileName);