<?php

require_once __DIR__ . '/Middleware.php';

/**
 * Middleware для валидации удаления файлов
 * Проверяет только обязательное поле fileName
 */
class DeleteFileValidationMiddleware extends Middleware
{
    private $rules = [
        'fileName' => [
            ['type' => 'required', 'message' => 'Имя файла обязательно'],
            ['type' => 'minLength', 'value' => 1, 'message' => 'Имя файла не может быть пустым'],
            ['type' => 'maxLength', 'value' => 255, 'message' => 'Имя файла слишком длинное'],
            ['type' => 'regex', 'pattern' => '/^[a-zA-Z0-9._\-\s]+$/', 'message' => 'Имя файла содержит недопустимые символы']
        ]
    ];

    public function handle($request)
    {
        $errors = [];
        $data = $this->getRequestData($request);

        foreach ($this->rules as $field => $fieldRules) {
            foreach ($fieldRules as $rule) {
                $validationResult = $this->validateField($field, $rule, $data);
                if ($validationResult !== true) {
                    if (!isset($errors[$field])) {
                        $errors[$field] = [];
                    }
                    $errors[$field][] = $validationResult;
                }
            }
        }

        if (!empty($errors)) {
            return [
                'success' => false,
                'error' => 'Validation failed',
                'errors' => $errors,
                'message' => 'Ошибка валидации данных',
                'code' => 400
            ];
        }

        return true;
    }

    private function validateField($field, $rule, $data)
    {
        $value = $this->getFieldValue($field, $data);
        
        switch ($rule['type']) {
            case 'required':
                if (empty($value) && $value !== '0') {
                    return $rule['message'] ?? "Поле '{$field}' обязательно";
                }
                break;

            case 'minLength':
                if (!empty($value) && strlen($value) < $rule['value']) {
                    return $rule['message'] ?? "Поле '{$field}' должно содержать минимум {$rule['value']} символов";
                }
                break;

            case 'maxLength':
                if (!empty($value) && strlen($value) > $rule['value']) {
                    return $rule['message'] ?? "Поле '{$field}' не должно превышать {$rule['value']} символов";
                }
                break;

            case 'regex':
                if (!empty($value) && !preg_match($rule['pattern'], $value)) {
                    return $rule['message'] ?? "Поле '{$field}' имеет недопустимый формат";
                }
                break;
        }

        return true;
    }

    private function getRequestData($request)
    {
        $data = [];
        
        // JSON данные
        if (isset($request['json'])) {
            $data = array_merge($data, $request['json']);
        }
        
        // POST данные
        if (isset($request['post'])) {
            $data = array_merge($data, $request['post']);
        }
        
        // GET данные
        if (isset($request['get'])) {
            $data = array_merge($data, $request['get']);
        }
        
        return $data;
    }

    private function getFieldValue($field, $data)
    {
        // Сначала проверяем в переданных данных
        if (isset($data[$field])) {
            return $data[$field];
        }
        
        // Затем в POST данных
        if (isset($_POST[$field])) {
            return $_POST[$field];
        }
        
        // Затем в GET данных
        if (isset($_GET[$field])) {
            return $_GET[$field];
        }
        
        return null;
    }

    public function shouldRun($route, $method)
    {
        // Применяем только к DELETE запросам каталога
        return $route === '/api/catalog' && $method === 'DELETE';
    }
}
