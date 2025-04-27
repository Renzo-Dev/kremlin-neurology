<?php
session_start();

// пароль от библиотеки
define('ACCESS_PASSWORD', 'mypass');

if (isset($_POST['password']) && $_POST['password'] == ACCESS_PASSWORD) {
    $_SESSION['authenticated'] = true;
    $_SESSION['expires_at'] = time() + 3600; // 1 h
    echo 'success';
} else {
    echo 'error';
}