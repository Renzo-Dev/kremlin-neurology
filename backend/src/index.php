<?php

require_once __DIR__ . '/app/src/vendor/autoload.php';

if (strpos($_SERVER['REQUEST_URI'], '/api') !== false) {
    require_once __DIR__ . '/routes/routes.php';
    exit();
}