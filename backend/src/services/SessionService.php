<?php

class SessionService
{
    public static function start()
    {
        if (!isset($_SESSION)) {
            session_start();
        }
    }

    // Устанавливает аутентификацию пользователя
    public static function setAuthenticated($isAdmin = false)
    {
        self::start();
        $_SESSION['authenticated'] = true;
        if ($isAdmin) {
            $_SESSION['isAdmin'] = $isAdmin;
        }
        $_SESSION['expires_at'] = time() + 3600; // Устанавливаем время жизни сессии на 1 час
        SessionService::respond(true, 'Authenticated', 200, $isAdmin);
    }

    // Проверяет аутентификацию пользователя
    public static function isAuthenticated()
    {
        self::start();
        return isset($_SESSION['authenticated']) && $_SESSION['authenticated'] === true;
    }

    public static function checkAuth()
    {
        self::start();
        if (!self::isAuthenticated()) {
            self::respond(false, 'Access denied not authenticated', 401);
        }

        if (isset($_SESSION['expires_at']) && time() > $_SESSION['expires_at']) {
            self::destroy();
            self::respond(false, 'Access denied: session expired.', 403);
        }
        
        self::respond(true, 'Authenticated', 200, isset($_SESSION['isAdmin']) && $_SESSION['isAdmin'] === true);
    }

    public static function destroy()
    {
        self::start();
        $_SESSION = array();

        if (ini_get("session.use_cookies")) {
            $params = session_get_cookie_params();
            setcookie(session_name(), '', time() - 42000,
                $params["path"], $params["domain"],
                $params["secure"], $params["httponly"]
            );
        }
        session_destroy();
    }

    public static function respond($authenticated, $message, $code, $isAdmin = false)
    {
        header('HTTP/1.1 ' . $code);
        header('Content-Type: application/json');
        $sendData = array(
            'authenticated' => $authenticated,
            'message' => $message
        );
        if ($isAdmin === true) {
            $sendData['isAdmin'] = true;
        }

        echo json_encode($sendData);
        exit;
    }
}