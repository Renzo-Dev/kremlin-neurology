<?php

require_once __DIR__ . '/../services/SessionService.php';
require_once __DIR__ . '/../utils/cors.php';

SessionService::checkAuth();