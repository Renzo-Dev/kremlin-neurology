<?php
session_start();

if (!isset($_SESSION['authenticated']) || $_SESSION['authenticated'] !== true || time() > $_SESSION['expires_at']) {
    // Нет доступа — отправляем статус 403
    header('HTTP/1.1 403 Forbidden');
    echo 'Доступ запрещён';
    exit();
}

echo 'Доступ разрешён';
