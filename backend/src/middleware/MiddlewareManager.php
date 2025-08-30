<?php

require_once __DIR__ . '/../middleware/Middleware.php';
require_once __DIR__ . '/../middleware/AuthMiddleware.php';
require_once __DIR__ . '/../middleware/ValidationMiddleware.php';
require_once __DIR__ . '/../middleware/PrivateAccessMiddleware.php';
require_once __DIR__ . '/../middleware/DeleteFileValidationMiddleware.php';

class MiddlewareManager
{
    private $middlewares = array();
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
        $authValidationRules = array(
            'password' => array(
                array('type' => 'required', 'message' => 'Пароль обязателен'),
                array('type' => 'minLength', 'value' => 3, 'message' => 'Пароль должен содержать минимум 3 символа'),
                array('type' => 'maxLength', 'value' => 50, 'message' => 'Пароль не должен превышать 50 символов')
            )
        );

        // Валидация POST запросов перенесена в FileController

        $catalogDeleteValidationRules = array(
            'fileName' => array(
                array('type' => 'required', 'message' => 'Имя файла обязательно'),
                array('type' => 'minLength', 'value' => 1, 'message' => 'Имя файла не может быть пустым'),
                array('type' => 'maxLength', 'value' => 255, 'message' => 'Имя файла слишком длинное'),
                array('type' => 'regex', 'pattern' => '/^[a-zA-Z0-9._\-\s]+$/', 'message' => 'Имя файла содержит недопустимые символы')
            )
        );

        $catalogUpdateValidationRules = array(
            'fileName' => array(
                array('type' => 'required', 'message' => 'Имя файла обязательно'),
                array('type' => 'minLength', 'value' => 1, 'message' => 'Имя файла не может быть пустым'),
                array('type' => 'maxLength', 'value' => 255, 'message' => 'Имя файла слишком длинное'),
                array('type' => 'regex', 'pattern' => '/^[a-zA-Z0-9._\-\s]+$/', 'message' => 'Имя файла содержит недопустимые символы')
            ),
            'title' => array(
                array('type' => 'required', 'message' => 'Название файла обязательно'),
                array('type' => 'minLength', 'value' => 2, 'message' => 'Название должно содержать минимум 2 символов'),
                array('type' => 'maxLength', 'value' => 255, 'message' => 'Название не должно превышать 255 символов')
            ),
            'authors' => array(
                array('type' => 'required', 'message' => 'Авторы обязательны'),
                array('type' => 'minLength', 'value' => 2, 'message' => 'Имена авторов должны содержать минимум 2 символа')
            )
        );

        // Регистрируем middleware в правильном порядке
        $this->middlewares = array(
            new PrivateAccessMiddleware(),                    // 1. Проверка приватных параметров (первым!)
            new AuthMiddleware(false),                       // 2. Обычная аутентификация
            new DeleteFileValidationMiddleware(),            // 3. Валидация DELETE запросов (только fileName)
            new ValidationMiddleware($catalogUpdateValidationRules)  // 4. Валидация PUT запросов обновления каталога
        );
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
            $middlewareClass = get_class($middleware);
            
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
        $request = array(
            'route' => $route,
            'method' => $method,
            'get' => $_GET,
            'post' => $_POST,
            'files' => $_FILES,
            'json' => array()
        );

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
