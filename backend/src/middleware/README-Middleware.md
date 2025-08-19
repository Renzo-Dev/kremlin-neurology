# Система Middleware

Система middleware позволяет централизованно управлять аутентификацией, валидацией и другими проверками перед выполнением основного кода.

## 🏗️ Архитектура

### Основные компоненты:

1. **`Middleware`** - базовый абстрактный класс
2. **`AuthMiddleware`** - проверка аутентификации и прав доступа
3. **`ValidationMiddleware`** - валидация входных данных
4. **`MiddlewareManager`** - управление и выполнение всех middleware

## 🔧 Как это работает

### 1. В роутере (routes.php)

```php
// Инициализируем менеджер middleware
$middlewareManager = new MiddlewareManager();

// Запускаем middleware перед обработкой запроса
$middlewareResult = $middlewareManager->run($request, $method);

if ($middlewareResult !== true) {
    // Middleware вернул ошибку
    respondHandler::respond([
        'error' => $middlewareResult['error'],
        'message' => $middlewareResult['message'],
        'errors' => $middlewareResult['errors'] ?? null
    ], $middlewareResult['code']);
    exit();
}

// Все middleware прошли успешно, продолжаем обработку
switch (true) {
    case $request === '/api/catalog' && $method === 'GET':
        CatalogController::getCatalog();
        break;
    // ... другие маршруты
}
```

### 2. Автоматическое выполнение

Middleware автоматически выполняются для соответствующих маршрутов:

- **Аутентификация**: `/api/catalog` (GET, POST, DELETE), `/api/privateDownload` (POST)
- **Валидация**: `/api/auth` (POST), `/api/catalog` (POST, DELETE)

## 🛡️ Типы Middleware

### AuthMiddleware

**Назначение**: Проверка аутентификации и прав доступа

**Проверки**:
- Обычная аутентификация для защищенных маршрутов
- Права администратора для критических операций

**Маршруты**:
- `/api/catalog` (GET, POST, DELETE) - требует аутентификации
- `/api/catalog` (POST, DELETE) - требует прав администратора
- `/api/privateDownload` (POST) - требует аутентификации

### ValidationMiddleware

**Назначение**: Валидация входных данных

**Правила валидации**:

#### Аутентификация (`/api/auth` POST)
```php
'password' => [
    ['type' => 'required', 'message' => 'Пароль обязателен'],
    ['type' => 'minLength', 'value' => 3, 'message' => 'Минимум 3 символа'],
    ['type' => 'maxLength', 'value' => 50, 'message' => 'Максимум 50 символов']
]
```

#### Загрузка файла (`/api/catalog` POST)
```php
'title' => [
    ['type' => 'required', 'message' => 'Название файла обязательно'],
    ['type' => 'minLength', 'value' => 2, 'message' => 'Минимум 2 символа'],
    ['type' => 'maxLength', 'value' => 255, 'message' => 'Максимум 255 символов']
],
'authors' => [
    ['type' => 'required', 'message' => 'Авторы обязательны'],
    ['type' => 'minLength', 'value' => 2, 'message' => 'Минимум 2 символа']
],
'file' => [
    ['type' => 'file', 'allowedTypes' => ['pdf', 'doc', 'docx', 'txt'], 'maxSize' => 50 * 1024 * 1024]
]
```

#### Удаление файла (`/api/catalog` DELETE)
```php
'fileName' => [
    ['type' => 'required', 'message' => 'Имя файла обязательно'],
    ['type' => 'minLength', 'value' => 1, 'message' => 'Имя файла не может быть пустым'],
    ['type' => 'maxLength', 'value' => 255, 'message' => 'Имя файла слишком длинное'],
    ['type' => 'regex', 'pattern' => '/^[a-zA-Z0-9._\-\s]+$/', 'message' => 'Недопустимые символы']
]
```

## 📝 Доступные типы валидации

- **`required`** - обязательное поле
- **`minLength`** - минимальная длина строки
- **`maxLength`** - максимальная длина строки
- **`email`** - валидация email адреса
- **`numeric`** - числовое значение
- **`min`** - минимальное числовое значение
- **`max`** - максимальное числовое значение
- **`file`** - валидация файла (тип, размер)
- **`in`** - значение из списка разрешенных
- **`regex`** - проверка регулярным выражением

## 🚀 Преимущества

1. **Централизация** - вся логика проверок в одном месте
2. **Переиспользование** - middleware работают для всех маршрутов
3. **Гибкость** - легко добавлять новые правила валидации
4. **Безопасность** - автоматическая проверка всех запросов
5. **Читаемость** - роутер стал чище и понятнее

## 🔍 Отладка

### Проверка требований к маршруту
```php
$middlewareManager = new MiddlewareManager();

$requiresAuth = $middlewareManager->requiresAuth('/api/catalog', 'POST');
$requiresValidation = $middlewareManager->requiresValidation('/api/catalog', 'POST');

echo "Требует аутентификации: " . ($requiresAuth ? 'Да' : 'Нет') . "\n";
echo "Требует валидации: " . ($requiresValidation ? 'Да' : 'Нет') . "\n";
```

### Логирование выполнения
```php
$startTime = microtime(true);
$result = $middlewareManager->run($request, $method);
$endTime = microtime(true);

$executionTime = ($endTime - $startTime) * 1000;
echo "Время выполнения middleware: {$executionTime}ms\n";
```

## 📋 Примеры ответов

### Успешная валидация
```json
{
    "success": true
}
```

### Ошибка валидации
```json
{
    "success": false,
    "error": "Validation failed",
    "message": "Ошибка валидации данных",
    "errors": {
        "title": ["Название файла обязательно"],
        "file": ["Файл должен быть PDF, DOC, DOCX или TXT и не превышать 50MB"]
    },
    "code": 400
}
```

### Ошибка аутентификации
```json
{
    "success": false,
    "error": "Unauthorized access",
    "message": "Требуется аутентификация",
    "code": 401
}
```

### Недостаточно прав
```json
{
    "success": false,
    "error": "Insufficient permissions",
    "message": "Требуются права администратора",
    "code": 403
}
```

## 🎯 Добавление новых middleware

1. Создайте класс, наследующий от `Middleware`
2. Реализуйте метод `handle()`
3. При необходимости переопределите `shouldRun()`
4. Зарегистрируйте в `MiddlewareManager::initializeMiddlewares()`

## ⚠️ Важные моменты

- Middleware выполняются **перед** основным кодом контроллера
- При ошибке middleware запрос **прерывается** и возвращается ошибка
- Все middleware выполняются **последовательно**
- Middleware могут изменять данные запроса для последующих обработчиков
