<?php

require_once __DIR__ . '/../auth/check_session.php';
require_once __DIR__ . '/../utils/cors.php';

checkAuthOrDeny();

require_once __DIR__ . '/../utils/fileDownload.php';