<?php

//require_once __DIR__ . '/../auth/check_session.php';
require_once __DIR__ . '/../utils/cors.php';

$catalogFile = __DIR__ . '/catalog.json';

if (!file_exists($catalogFile)) {
    echo json_encode(array(
        'success' => true,
        'files' => array()
    ));
    exit;
}

$catalog = json_decode(file_get_contents($catalogFile), true);
if (!is_array($catalog)) {
    echo json_encode(array(
        'success' => true,
        'groups' => array()
    ));
    exit;
}

echo json_encode(array(
    'success' => true,
    'files' => $catalog
));