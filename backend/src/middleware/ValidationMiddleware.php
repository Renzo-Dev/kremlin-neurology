<?php

require_once __DIR__ . '/Middleware.php';

class ValidationMiddleware extends Middleware
{
    private $rules;

    public function __construct($rules = [])
    {
        $this->rules = $rules;
    }

    public function handle($request)
    {
        if (empty($this->rules)) {
            return true;
        }

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

            case 'email':
                if (!empty($value) && !filter_var($value, FILTER_VALIDATE_EMAIL)) {
                    return $rule['message'] ?? "Поле '{$field}' должно быть корректным email адресом";
                }
                break;

            case 'file':
                if (!isset($_FILES[$field]) || $_FILES[$field]['error'] !== UPLOAD_ERR_OK) {
                    return $rule['message'] ?? "Файл '{$field}' обязателен";
                }
                
                $file = $_FILES[$field];
                
                // Проверка размера
                if (isset($rule['maxSize']) && $file['size'] > $rule['maxSize']) {
                    return "Размер файла не должен превышать " . $this->formatBytes($rule['maxSize']);
                }
                
                // Проверка типа
                if (isset($rule['allowedTypes'])) {
                    $fileExtension = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
                    if (!in_array($fileExtension, $rule['allowedTypes'])) {
                        return "Тип файла должен быть одним из: " . implode(', ', $rule['allowedTypes']);
                    }
                }
                break;

            case 'regex':
                if (!empty($value) && !preg_match($rule['pattern'], $value)) {
                    return $rule['message'] ?? "Поле '{$field}' имеет недопустимый формат";
                }
                break;

            case 'in':
                if (!empty($value) && !in_array($value, $rule['values'])) {
                    return $rule['message'] ?? "Поле '{$field}' должно быть одним из: " . implode(', ', $rule['values']);
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

    private function formatBytes($bytes, $precision = 2)
    {
        $units = ['B', 'KB', 'MB', 'GB'];
        
        for ($i = 0; $bytes > 1024 && $i < count($units) - 1; $i++) {
            $bytes /= 1024;
        }
        
        return round($bytes, $precision) . ' ' . $units[$i];
    }

    public function shouldRun($route, $method)
    {
        // Маршруты, требующие валидации
        $validationRoutes = [
            '/api/catalog' => ['POST', 'DELETE']
        ];

        return isset($validationRoutes[$route]) && in_array($method, $validationRoutes[$route]);
    }
}
