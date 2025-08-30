<?php
// Тестирование проверки существования файла в updateFile
require_once 'backend/src/services/ResponseService.php';
require_once 'backend/src/services/CatalogService.php';
require_once 'backend/src/controllers/FileController.php';

echo "=== Тестирование проверки существования файла в updateFile ===\n\n";

// Создаем экземпляр CatalogService
$catalogService = new CatalogService();
$fileController = new FileController($catalogService);

// Тест 1: Попытка обновить существующий файл
echo "Тест 1: Обновление существующего файла\n";
$_GET['fileName'] = 'test.txt';
$_GET['title'] = 'Тест существующего файла';
$_GET['authors'] = 'Тест авторы';
$_GET['category'] = 'Тест категория';
$_GET['description'] = 'Тест описание';

try {
    $fileController->updateFile();
    echo "✅ Существующий файл обновлен успешно!\n";
} catch (Exception $e) {
    echo "❌ Ошибка при обновлении существующего файла: " . $e->getMessage() . "\n";
}

echo "\n";

// Тест 2: Попытка обновить несуществующий файл
echo "Тест 2: Обновление несуществующего файла\n";
$_GET['fileName'] = 'nonexistent_file.txt';
$_GET['title'] = 'Тест несуществующего файла';
$_GET['authors'] = 'Тест авторы';
$_GET['category'] = 'Тест категория';
$_GET['description'] = 'Тест описание';

try {
    $fileController->updateFile();
    echo "❌ Несуществующий файл обновлен (это ошибка!)\n";
} catch (Exception $e) {
    echo "✅ Правильно! Несуществующий файл не обновлен: " . $e->getMessage() . "\n";
}

echo "\n";

// Тест 3: Проверка что существующий файл не изменился
echo "Тест 3: Проверка что существующий файл не изменился\n";
try {
    $catalog = $catalogService->getPrivateCatalog();
    foreach ($catalog as $file) {
        if ($file['fileName'] === 'test.txt') {
            echo "Файл test.txt в каталоге:\n";
            echo "title: " . $file['title'] . "\n";
            echo "authors: " . $file['authors'] . "\n";
            echo "category: " . $file['category'] . "\n";
            echo "description: " . $file['description'] . "\n";
            break;
        }
    }
} catch (Exception $e) {
    echo "❌ Ошибка при проверке каталога: " . $e->getMessage() . "\n";
}

echo "\n=== Тестирование завершено ===\n";
?>
