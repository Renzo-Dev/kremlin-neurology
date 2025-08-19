<?php

require_once __DIR__ . '/../services/AuthService.php';
require_once __DIR__ . '/Middleware.php';

class AuthMiddleware extends Middleware
{
    private $requireAdmin;

    public function __construct($requireAdmin = false)
    {
        $this->requireAdmin = $requireAdmin;
    }

    public function handle($request)
    {
        // Проверяем аутентификацию
        if (!AuthService::getAuthenticated()) {
            return [
                'success' => false,
                'error' => 'Unauthorized access',
                'message' => 'Требуется аутентификация',
                'code' => 401
            ];
        }

        // Если требуется админ, проверяем права
        if ($this->requireAdmin && !AuthService::getAdminAuthenticated()) {
            return [
                'success' => false,
                'error' => 'Insufficient permissions',
                'message' => 'Требуются права администратора',
                'code' => 403
            ];
        }

        return true;
    }

    public function shouldRun($route, $method)
    {
        // Защищенные маршруты
        $protectedRoutes = [
            '/api/catalog' => ['GET', 'POST', 'DELETE'],
            '/api/privateDownload' => ['POST']
        ];

        return isset($protectedRoutes[$route]) && in_array($method, $protectedRoutes[$route]);
    }
}
