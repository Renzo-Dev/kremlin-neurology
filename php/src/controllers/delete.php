<?php
//require_once __DIR__ . '/../auth/check_session.php';
require_once __DIR__ . '/../utils/cors.php';
require_once __DIR__ . '/../utils/catalog.php';

$filename = isset($_POST['filename']) ? basename($_POST['filename']) : '';

if ($filename === '') {
    http_response_code(400);
    echo json_encode(array(
        'success' => false,
        'message' => 'Filename cannot be empty.'
    ));
    exit();
}