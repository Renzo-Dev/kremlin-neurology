<?php

require_once __DIR__ . '/../services/AuthService.php';
require_once __DIR__ . '/../middleware/Middleware.php';

/**
 * Middleware для проверки доступа к приватным данным через GET параметры
 * Защищает от попыток получить приватные данные через type=private
 */
class PrivateAccessMiddleware extends Middleware
{
    public function handle($request)
    {
        // Проверяем GET параметры на наличие type=private
        if (isset($request['get']['type']) && $request['get']['type'] === 'private') {
            // Если запрашивается приватный тип, проверяем аутентификацию
            if (!AuthService::getAuthenticated()) {
                return [
                    'success' => false,
                    'error' => 'Unauthorized access',
                    'message' => 'Требуется аутентификация для доступа к приватным данным',
                    'code' => 401
                ];
            }
        }

        return true;
    }

    public function shouldRun($route, $method)
    {
        // Применяем к GET запросам, которые могут содержать приватные параметры
        $routesWithPrivateParams = [
            '/api/catalog/paginated' => ['GET']  // Пагинация с type параметром
        ];

        return isset($routesWithPrivateParams[$route]) && in_array($method, $routesWithPrivateParams[$route]);
    }
}
