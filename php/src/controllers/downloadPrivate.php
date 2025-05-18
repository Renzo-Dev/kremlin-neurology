<?php

require_once __DIR__ . '/../utils/cors.php';
require_once __DIR__ . '/../services/SessionService.php';
require_once __DIR__ . '/../services/LibraryService.php';

if (SessionService::isAuthenticated() === false) {
    SessionService::respond(false, 'Not authenticated', 401);
    exit();
}

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