<?php

require_once __DIR__ . '/Middleware.php';
require_once __DIR__ . '/AuthMiddleware.php';
require_once __DIR__ . '/ValidationMiddleware.php';

class MiddlewareManager
{
    private $middlewares = [];
    private $request;

    public function __construct()
    {
        $this->initializeMiddlewares();
    }

    /**
     * Инициализирует все middleware
     */
    private function initializeMiddlewares()
    {
        // Правила валидации для разных маршрутов
        $authValidationRules = [
            'password' => [
                ['type' => 'required', 'message' => 'Пароль обязателен'],
                ['type' => 'minLength', 'value' => 3, 'message' => 'Пароль должен содержать минимум 3 символа'],
                ['type' => 'maxLength', 'value' => 50, 'message' => 'Пароль не должен превышать 50 символов']
            ]
        ];

        $catalogPostValidationRules = [
            'title' => [
                ['type' => 'required', 'message' => 'Название файла обязательно'],
                ['type' => 'minLength', 'value' => 2, 'message' => 'Название должно содержать минимум 2 символа'],
                ['type' => 'maxLength', 'value' => 255, 'message' => 'Название не должно превышать 255 символов']
            ],
            'authors' => [
                ['type' => 'required', 'message' => 'Авторы обязательны'],
                ['type' => 'minLength', 'value' => 2, 'message' => 'Имена авторов должны содержать минимум 2 символа']
            ],
            'file' => [
                ['type' => 'file', 'allowedTypes' => ['pdf', 'doc', 'docx', 'txt'], 'maxSize' => 50 * 1024 * 1024, 'message' => 'Файл должен быть PDF, DOC, DOCX или TXT и не превышать 50MB']
            ]
        ];

        $catalogDeleteValidationRules = [
            'fileName' => [
                ['type' => 'required', 'message' => 'Имя файла обязательно'],
                ['type' => 'minLength', 'value' => 1, 'message' => 'Имя файла не может быть пустым'],
                ['type' => 'maxLength', 'value' => 255, 'message' => 'Имя файла слишком длинное'],
                ['type' => 'regex', 'pattern' => '/^[a-zA-Z0-9._\-\s]+$/', 'message' => 'Имя файла содержит недопустимые символы']
            ]
        ];

        // Регистрируем middleware
        $this->middlewares = [
            new AuthMiddleware(false), // Обычная аутентификация
            new AuthMiddleware(true),  // Админ аутентификация
            new ValidationMiddleware($authValidationRules),
            new ValidationMiddleware($catalogPostValidationRules),
            new ValidationMiddleware($catalogDeleteValidationRules)
        ];
    }

    /**
     * Выполняет все middleware для маршрута
     * @param string $route Маршрут
     * @param string $method HTTP метод
     * @return bool|array true если все прошло успешно, массив с ошибкой если нет
     */
    public function run($route, $method)
    {
        $this->request = $this->prepareRequest($route, $method);

        foreach ($this->middlewares as $middleware) {
            if ($middleware->shouldRun($route, $method)) {
                $result = $middleware->handle($this->request);
                
                if ($result !== true) {
                    return $result;
                }
            }
        }

        return true;
    }

    /**
     * Подготавливает данные запроса для middleware
     * @param string $route Маршрут
     * @param string $method HTTP метод
     * @return array
     */
    private function prepareRequest($route, $method)
    {
        $request = [
            'route' => $route,
            'method' => $method,
            'get' => $_GET,
            'post' => $_POST,
            'files' => $_FILES
        ];

        // Добавляем JSON данные если есть
        if ($method === 'POST' || $method === 'PUT' || $method === 'DELETE') {
            $jsonInput = file_get_contents('php://input');
            if (!empty($jsonInput)) {
                $jsonData = json_decode($jsonInput, true);
                if ($jsonData !== null) {
                    $request['json'] = $jsonData;
                }
            }
        }

        return $request;
    }

    /**
     * Получает данные запроса
     * @return array
     */
    public function getRequest()
    {
        return $this->request;
    }

    /**
     * Проверяет, требуется ли аутентификация для маршрута
     * @param string $route Маршрут
     * @param string $method HTTP метод
     * @return bool
     */
    public function requiresAuth($route, $method)
    {
        foreach ($this->middlewares as $middleware) {
            if ($middleware instanceof AuthMiddleware && $middleware->shouldRun($route, $method)) {
                return true;
            }
        }
        return false;
    }

    /**
     * Проверяет, требуется ли валидация для маршрута
     * @param string $route Маршрут
     * @param string $method HTTP метод
     * @return bool
     */
    public function requiresValidation($route, $method)
    {
        foreach ($this->middlewares as $middleware) {
            if ($middleware instanceof ValidationMiddleware && $middleware->shouldRun($route, $method)) {
                return true;
            }
        }
        return false;
    }
}
