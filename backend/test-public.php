<?php
// Тестовый файл для проверки публичного каталога
require_once __DIR__ . '/src/services/CatalogService.php';
require_once __DIR__ . '/src/services/ResponseService.php';

try {
    $catalogService = new CatalogService();
    $catalog = $catalogService->getCatalog('public');
    
    header('Content-Type: application/json');
    echo json_encode([
        'success' => true,
        'data' => $catalog,
        'message' => 'Публичный каталог загружен успешно'
    ]);
} catch (Exception $e) {
    header('Content-Type: application/json');
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'Ошибка загрузки каталога',
        'message' => $e->getMessage()
    ]);
}
