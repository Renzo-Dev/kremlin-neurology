<?php

class CatalogService
{
    function getCatalogList()
    {
        $catalog = $this->loadCatalogFromFile();
        // Инициализируем ассоциативный массив
        $newCatalog = array();

        // Группировка публикаций по первой букве фамилии автора
        foreach ($catalog as $file) {
            // Проверяем, существует ли поле authors
            $fileLetter = mb_strtoupper(mb_substr($file['authors'], 0, 1, 'UTF-8'), 'UTF-8');
            // Проверяем, существует ли буква в массиве $letters
            if (!isset($newCatalog[$fileLetter])) {
                $newCatalog[$fileLetter] = array();
            }
            // Добавляем файл в соответствующий массив
            $file['type'] = $this->getFileType($file['filename']);
            $newCatalog[$fileLetter][] = $file;
        }

        // Сортируем массив по ключам
        ksort($newCatalog);


        return json_encode($newCatalog);
    }

    // загружает каталог из файла
    function loadCatalogFromFile()
    {
        $catalogFile = $_SERVER['DOCUMENT_ROOT'] . '/storage/catalog.json';
        $catalog = array();

        // Проверяем, существует ли файл и является ли он массивом
        if (file_exists($catalogFile)) {
            // Получаем содержимое файла
            $json = file_get_contents($catalogFile);
            $decode = json_decode($json, true); // true - для ассоциативного массива

            // Проверяем, является ли декодированный JSON массивом
            if (is_array($decode)) {
                $catalog = $decode;
            }
        }
        // Если файл не существует или не является массивом, возвращаем пустой массив
        return $catalog;
    }

    // Проверяет, существует ли файл с таким именем в каталоге
    function checkFileExists($catalog, $fileName)
    {
        foreach ($catalog as $entry) {
            if (isset($entry['filename']) && $entry['filename'] == $fileName) {
                return true;
            }
        }
        return false;
    }

    // Добавляет элемент в каталог
    function addItemToCatalog($item)
    {
        $catalog = $this->loadCatalogFromFile();
        // Проверяем, существует ли файл с таким именем в каталоге
        if ($this->checkFileExists($catalog, $item['filename'])) {
            http_response_code(400);
            echo json_encode(array(
                'success' => false,
                'message' => 'File with this name already exists'
            ));
            exit();
        }

        $catalog[] = $item; // Добавляем элемент в массив

        // Сохраняем обновленный каталог в файл
        if ($this->saveCatalogToFile($catalog)) {
            return true; // Успешно сохранено
        } else {
            return false; // Ошибка при сохранении
        }
    }

    // сохраняет каталог в файл
    function saveCatalogToFile($catalog)
    {
        $catalogFile = $_SERVER['DOCUMENT_ROOT'] . '/storage/catalog.json';
        file_put_contents($catalogFile, json_encode($catalog));
        // Проверяем, успешно ли записан файл
        if (file_exists($catalogFile)) {
            $fileSize = filesize($catalogFile);
            if ($fileSize > 0) {
                return true; // Файл успешно записан
            } else {
                return false; // Файл пустой
            }
        } else {
            return false; // Файл не существует
        }
    }

    // Удаляет элемент из каталога
    function deleteItemFromCatalog($fileName)
    {
        $catalog = $this->loadCatalogFromFile();
        $newCatalog = array();

        // Ищем элемент для удаления
        foreach ($catalog as $entry) {
            if (isset($entry['filename']) && $entry['filename'] != $fileName) {
                $newCatalog[] = $entry; // Добавляем все элементы, кроме удаляемого
            }
        }

        // Сохраняем обновленный каталог в файл
        if ($this->saveCatalogToFile($newCatalog)) {
            return true; // Успешно сохранено
        } else {
            return false; // Ошибка при сохранении
        }
    }

    function getFileType($filename)
    {
        $ext = strtolower(pathinfo($filename, PATHINFO_EXTENSION));
        if ($ext === 'pdf') return 'pdf';
        if (in_array($ext, array('doc', 'docx', 'rtf'))) return 'word';
        if (in_array($ext, array('zip', 'djvu'))) return 'zip';
        return 'other';
    }
}