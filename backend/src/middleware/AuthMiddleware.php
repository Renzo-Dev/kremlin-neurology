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
            return array(
                'success' => false,
                'error' => 'Unauthorized access',
                'message' => 'Требуется аутентификация',
                'code' => 401
            );
        }

        // Если требуется админ, проверяем права
        if ($this->requireAdmin && !AuthService::getAdminAuthenticated()) {
            return array(
                'success' => false,
                'error' => 'Insufficient permissions',
                'message' => 'Требуются права администратора',
                'code' => 403
            );
        }

        return true;
    }

    public function shouldRun($route, $method)
    {
        // ПРОСТАЯ ЛОГИКА: только защищенные маршруты требуют аутентификации
        
        // Защищенные маршруты (требуют аутентификации)
        $protectedRoutes = array(
            '/api/catalog' => array('POST', 'DELETE'),              // Управление файлами
            '/api/privateDownload' => array('POST'),                // Скачивание приватных файлов
            '/api/catalog/private' => array('GET'),                 // Приватный каталог
            '/api/file/info' => array('POST')                       // Информация о файле
        );

        // Если маршрут в списке защищенных - требуем аутентификацию
        if (isset($protectedRoutes[$route]) && in_array($method, $protectedRoutes[$route])) {
            return true; // Требует аутентификации
        }

        // ВСЕ ОСТАЛЬНЫЕ маршруты - публичные (НЕ требуют аутентификации)
        return false;
    }
}
