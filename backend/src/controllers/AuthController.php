<?php

require_once __DIR__ . '/../services/AuthService.php';
require_once __DIR__ . '/../utils/respondHandler.php';
require_once __DIR__ . '/../utils/RateLimiter.php';

class AuthController
{
    private static $authPassword = '123123';
    private static $adminPassword = 'admin';

    public static function login()
    {
        try {
            // Проверяем rate limiting
            $rateLimiter = new RateLimiter();
            $clientIp = isset($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : 'unknown';
            $rateLimitCheck = $rateLimiter->checkAuthLimit($clientIp);
            
            if (!$rateLimitCheck['allowed']) {
                respondHandler::respond(array(
                    'authenticated' => false,
                    'error' => 'Rate limit exceeded',
                    'message' => $rateLimitCheck['message'],
                    'retry_after' => $rateLimitCheck['retry_after']
                ), 429);
                return;
            }
            
            $data = json_decode(file_get_contents('php://input'), true);

            if (!isset($data['password']) || $data['password'] === '') {
                respondHandler::respond(array(
                    'authenticated' => false,
                    'error' => 'Password is required',
                    'message' => 'Password is required'
                ), 400);
                return;
            }

            $password = $data['password'];

            if ($password === self::$adminPassword) {
                // Сбрасываем счетчик неудачных попыток при успешной аутентификации
                $rateLimiter->resetFailedAuthAttempts($clientIp);
                
                AuthService::setAdminAuthenticated();
                respondHandler::respond(array(
                    'authenticated' => true,
                    'isAdmin' => true,
                    'message' => 'Authenticated as admin successfully'
                ));
                return;
            }

            if ($password === self::$authPassword) {
                // Сбрасываем счетчик неудачных попыток при успешной аутентификации
                $rateLimiter->resetFailedAuthAttempts($clientIp);
                
                AuthService::setAuthenticated();
                respondHandler::respond(array(
                    'authenticated' => true,
                    'message' => 'Authenticated successfully'
                ));
                return;
            }

            // Увеличиваем счетчик неудачных попыток
            $rateLimiter->incrementFailedAuthAttempts($clientIp);
            
            respondHandler::respond(array(
                'authenticated' => false,
                'error' => 'Invalid password',
                'message' => 'Invalid password'
            ), 401);
        } catch (Exception $e) {
            respondHandler::respond(array(
                'authenticated' => false,
                'error' => 'Server error',
                'message' => $e->getMessage()
            ), 500);
        }
    }

    // Check if the user is authenticated
    public static function auth()
    {
        $isAuthenticated = AuthService::getAuthenticated();
        $isAdmin = AuthService::getAdminAuthenticated();

        if ($isAuthenticated) {
            $response = array(
                'authenticated' => true,
                'message' => 'Authenticated successfully'
            );
            if ($isAdmin) {
                $response['isAdmin'] = true;
                $response['message'] = 'Authenticated as admin successfully';
            }

            respondHandler::respond($response);
        } else {
            respondHandler::respond(array(
                'authenticated' => false,
                'message' => 'Not authenticated'
            ), 401);
        }
    }
}