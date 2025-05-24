<?php

// получения каталога
// добавление элемента в каталог (проверка на уже существующий элемент, добавление)
// удаление элемента из каталога

class CatalogService
{
    public function __construct()
    {
    }

    private static function getCatalogPath()
    {
        return __DIR__ . '/../data/catalog.json';
    }

    // Метод для добавления элемента в каталог
    public static function addItemToCatalog()
    {
        try {
            $catalog = self::loadCatalogFromFile(); // Загружаем текущий каталог

            // Проверяем, существует ли файл в каталоге
            if (self::itemExistsInCatalog($_FILES['file']['name'], $catalog)) {
                throw new Exception('Item already exists in catalog', 400);
            } else {
                // Добавляем новый элемент в каталог
                $catalog[] = array(
                    'title' => isset($_POST['title']) ? trim($_POST['title']) : '',
                    'authors' => isset($_POST['authors']) ? trim($_POST['authors']) : '',
                    'fileName' => $_FILES['file']['name'],
                ); // Добавляем имя файла в массив каталога

                // Сохраняем обновленный каталог в файл
                file_put_contents(self::getCatalogPath(), json_encode($catalog, JSON_UNESCAPED_UNICODE));
                // Если сохранение прошло успешно, возвращаем true
            }
            return true; // Возвращаем true, если добавление прошло успешно

        } catch (Exception $e) {
            // Обработка исключения
            respondHandler::respond(array(
                'error' => 'Error adding item to catalog',
                'message' => $e->getMessage()
            ), $e->getCode()// Используем код ошибки из исключения или 500 по умолчанию
            );
        }
        return false; // Возвращаем false, если произошла ошибка
    }

    // Проверка на существование элемента в каталоге
    public static function itemExistsInCatalog($fileName, $catalog)
    {
        // Проверяем, существует ли элемент в каталоге
        foreach ($catalog as $item) {
            if ($item['fileName'] === $fileName) {
                return true; // Элемент найден
            }
        }
        return false; // Элемент не найден
    }

    public static function loadCatalogFromFile()
    {
        try {
            $catalog = array(); // Инициализируем пустой массив для каталога
            // Проверяем, существует ли файл
            if (self::catalogExists()) {
                // Загружаем содержимое файла
                $json = file_get_contents(self::getCatalogPath());

                // Декодируем JSON в массив
                $decode = json_decode($json, true);

                // Проверяем, успешно ли де кодировался JSON
                if (is_array($decode)) {
                    $catalog = $decode;
                } else {
                    // Если декодирование не удалось, значит файл пустой и выдаем просто пустой массив
                    return array();
                    //throw new Exception('Failed to decode JSON');
                }
            } else {
                throw new Exception('Catalog file does not exist', 404);
            }
        } catch (Exception $e) {
            // Обработка исключения
            respondHandler::respond(array(
                'error' => 'Error loading catalog',
                'message' => $e->getMessage()
            ), $e->getCode()); // Используем код ошибки из исключения или 500 по умолчанию
            exit();
        }
        return $catalog;
    }

    // Группировка публикаций по первой букве фамилии автора
    public static function groupCatalogByAuthorFirstLetter($catalog)
    {
        $groupedCatalog = array();

        // Группировка публикаций по первой букве фамилии автора
        foreach ($catalog as $file) {
            // Проверяем, существует ли поле authors
            $fileLetter = mb_strtoupper(mb_substr($file['authors'], 0, 1, 'UTF-8'), 'UTF-8');
            // Проверяем, существует ли буква в массиве $letters
            if (!isset($groupedCatalog[$fileLetter])) {
                $groupedCatalog[$fileLetter] = array();
            }
            // Добавляем файл в соответствующий массив
            $file['type'] = self::getFileType($file['fileName']);
            $groupedCatalog[$fileLetter][] = $file;
        }

        // Сортируем массив по ключам
        ksort($groupedCatalog);
        return $groupedCatalog;
    }

    private static function getFileType($filename)
    {
        $ext = strtolower(pathinfo($filename, PATHINFO_EXTENSION));
        if ($ext === 'pdf') return 'pdf';
        if (in_array($ext, array('doc', 'docx', 'rtf'))) return 'word';
        if (in_array($ext, array('zip', 'djvu'))) return 'zip';
        return 'other';
    }


    private static function catalogExists()
    {
        if (file_exists(self::getCatalogPath())) {
            return true;
        } else {
            return false;
        }
    }
}