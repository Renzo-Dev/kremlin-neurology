<?php

require_once __DIR__ . '/../services/AuthService.php';
require_once __DIR__ . '/../middleware/Middleware.php';

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
        // ПРОСТАЯ ЛОГИКА: только защищенные маршруты требуют аутентификации
        
        // Защищенные маршруты (требуют аутентификации)
        $protectedRoutes = [
            '/api/catalog' => ['POST', 'DELETE'],              // Управление файлами
            '/api/privateDownload' => ['POST'],                // Скачивание приватных файлов
            '/api/catalog/private' => ['GET'],                 // Приватный каталог
            '/api/file/info' => ['POST']                       // Информация о файле
        ];

        // Если маршрут в списке защищенных - требуем аутентификацию
        if (isset($protectedRoutes[$route]) && in_array($method, $protectedRoutes[$route])) {
            return true; // Требует аутентификации
        }

        // ВСЕ ОСТАЛЬНЫЕ маршруты - публичные (НЕ требуют аутентификации)
        return false;
    }
}
