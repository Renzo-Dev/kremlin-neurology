<?php

require_once __DIR__ . '/../utils/cors.php';
require_once __DIR__ . '/../services/SessionService.php';

$ACCESS_PASSWORD = '123123';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);

    if (!isset($data["password"])) {
        SessionService::respond(false, 'Password is required', 400);
    }
    if ($data["password"] == "") {
        SessionService::respond(false, 'Password is empty', 400);
    }

    if ($data["password"] === $ACCESS_PASSWORD) {
        SessionService::setAuthenticated();
    } else {
        SessionService::destroy();
        SessionService::respond(false, 'Invalid password', 401);
    }
}

exit();