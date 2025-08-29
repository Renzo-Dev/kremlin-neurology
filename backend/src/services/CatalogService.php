<?php

require_once __DIR__ . '/../utils/respondHandler.php';

/** Единый сервис для работы с каталогом - чтение и управление */
class CatalogService
{
    private $publicCatalogPath;
    private $privateCatalogPath;
    
    // Временные свойства для сортировки (для совместимости с PHP 5.3)
    private $sortField;
    private $sortDirection;

    public function __construct()
    {
        $this->publicCatalogPath = __DIR__ . '/../data/public/catalog.json';
        $this->privateCatalogPath = __DIR__ . '/../data/private/catalog.json';
    }

    // === ОСНОВНАЯ ФУНКЦИЯ ПОЛУЧЕНИЯ КАТАЛОГА ===

    /**
     * Универсальная функция получения каталога
     * @param string $type - 'public' или 'private'
     * @return array - каталог, сгруппированный по авторам
     */
    public function getCatalog($type = 'public')
    {
        try {
            // Определяем путь к файлу каталога
            $catalogPath = $this->getCatalogPath($type);
            
            // Загружаем каталог из соответствующего файла
            $catalog = $this->loadCatalogFromFile($catalogPath);
            
            // Группируем по авторам и возвращаем
            return $this->groupCatalogByAuthorFirstLetter($catalog);
            
        } catch (Exception $e) {
            throw new Exception('Error loading catalog: ' . $e->getMessage(), $e->getCode());
        }
    }

    // === ДОПОЛНИТЕЛЬНЫЕ МЕТОДЫ ===

    /** Получает каталог по конкретному автору */
    public function getCatalogByAuthor($author, $type = 'public')
    {
        try {
            $catalogPath = $this->getCatalogPath($type);
            $catalog = $this->loadCatalogFromFile($catalogPath);
            
            $filteredCatalog = array();
            foreach ($catalog as $item) {
                if (stripos($item['authors'], $author) !== false) {
                    $filteredCatalog[] = $item;
                }
            }
            
            return array_values($filteredCatalog);
            
        } catch (Exception $e) {
            throw new Exception('Error getting catalog by author: ' . $e->getMessage(), $e->getCode());
        }
    }

    /** Получает каталог с пагинацией и поиском */
    public function getCatalogPaginated($page = 1, $limit = 20, $type = 'public', $filters = array())
    {
        try {
            $catalogPath = $this->getCatalogPath($type);
            $catalog = $this->loadCatalogFromFile($catalogPath);
            
            // Применяем фильтры
            $filteredCatalog = $this->applyFilters($catalog, $filters);
            
            $totalItems = count($filteredCatalog);
            $totalPages = ceil($totalItems / $limit);
            
            $offset = ($page - 1) * $limit;
            $items = array_slice($filteredCatalog, $offset, $limit);
            
            // Группируем по авторам для совместимости с frontend
            $groupedItems = $this->groupCatalogByAuthorFirstLetter($items);
            
            return array(
                'items' => $groupedItems,
                'pagination' => array(
                    'currentPage' => $page,
                    'totalPages' => $totalPages,
                    'totalItems' => $totalItems,
                    'itemsPerPage' => $limit,
                    'hasNextPage' => $page < $totalPages,
                    'hasPrevPage' => $page > 1
                )
            );
            
        } catch (Exception $e) {
            throw new Exception('Error getting paginated catalog: ' . $e->getMessage(), $e->getCode());
        }
    }

    /**
     * Получает каталог с полной фильтрацией, сортировкой, группировкой и пагинацией
     * @param array $params - все параметры в одном запросе
     * @return array - каталог с пагинацией
     */
    public function getCatalogWithFilters($params)
    {
        try {
            $type = isset($params['type']) ? $params['type'] : 'public';
            $page = isset($params['page']) ? $params['page'] : 1;
            $limit = isset($params['limit']) ? $params['limit'] : 20;
            
            $catalogPath = $this->getCatalogPath($type);
            $catalog = $this->loadCatalogFromFile($catalogPath);
            
            // Применяем фильтры
            $filteredCatalog = $this->applyAdvancedFilters($catalog, isset($params['filters']) ? $params['filters'] : array());
            
            // Применяем сортировку
            $sortedCatalog = $this->applySorting($filteredCatalog, isset($params['sorting']) ? $params['sorting'] : array());
            
            // Сначала применяем пагинацию к плоскому массиву
            $totalItems = count($sortedCatalog);
            $totalPages = ceil($totalItems / $limit);
            
            $offset = ($page - 1) * $limit;
            $paginatedItems = array_slice($sortedCatalog, $offset, $limit);
            
            // Затем применяем группировку к пагинированным данным
            $groupedCatalog = $this->applyGrouping($paginatedItems, isset($params['grouping']) ? $params['grouping'] : array());
            
            return array(
                'items' => $groupedCatalog,
                'pagination' => array(
                    'currentPage' => $page,
                    'totalPages' => $totalPages,
                    'totalItems' => $totalItems,
                    'itemsPerPage' => $limit,
                    'hasNextPage' => $page < $totalPages,
                    'hasPrevPage' => $page > 1
                )
            );
            
        } catch (Exception $e) {
            throw new Exception('Error getting catalog with filters: ' . $e->getMessage(), $e->getCode());
        }
    }

    // === МЕТОДЫ УПРАВЛЕНИЯ (только для приватного каталога) ===

    /** Добавляет новый файл в приватный каталог */
    public function addFileToCatalog($fileData)
    {
        try {
            // Файлы добавляются только в приватный каталог
            $catalog = $this->loadCatalogFromFile($this->privateCatalogPath);
            
            // Проверяем, существует ли файл
            if ($this->fileExistsInCatalog($fileData['fileName'], $catalog)) {
                throw new Exception('File already exists in catalog', 400);
            }

            // Добавляем новую запись
            $catalog[] = array(
                'title' => $fileData['title'],
                'authors' => $fileData['authors'],
                'fileName' => $fileData['fileName'],
                'uploadDate' => date('Y-m-d H:i:s'),
                'fileSize' => isset($fileData['fileSize']) ? $fileData['fileSize'] : null,
                'category' => isset($fileData['category']) ? $fileData['category'] : null,
                'description' => isset($fileData['description']) ? $fileData['description'] : null
            );

            $this->saveCatalogToFile($catalog, $this->privateCatalogPath);
            
            return true;

        } catch (Exception $e) {
            throw new Exception('Error adding file to catalog: ' . $e->getMessage(), $e->getCode());
        }
    }

    /** Удаляет файл из приватного каталога */
    public function removeFileFromCatalog($fileName)
    {
        try {
            $catalog = $this->loadCatalogFromFile($this->privateCatalogPath);
            
            if (!$this->fileExistsInCatalog($fileName, $catalog)) {
                throw new Exception('File not found in catalog', 404);
            }

            // Удаляем запись
            $filteredCatalog = array();
            foreach ($catalog as $item) {
                if ($item['fileName'] !== $fileName) {
                    $filteredCatalog[] = $item;
                }
            }
            $catalog = $filteredCatalog;

            $this->saveCatalogToFile(array_values($catalog), $this->privateCatalogPath);
            return true;

        } catch (Exception $e) {
            throw new Exception('Error removing file from catalog: ' . $e->getMessage(), $e->getCode());
        }
    }

    /** Обновляет файл в приватном каталоге */
    public function updateFileInCatalog($updateData)
    {
        try {
            $catalog = $this->loadCatalogFromFile($this->privateCatalogPath);
            
            // Ищем файл в каталоге
            $fileIndex = -1;
            foreach ($catalog as $index => $file) {
                if ($file['fileName'] === $updateData['fileName']) {
                    $fileIndex = $index;
                    break;
                }
            }
            
            if ($fileIndex === -1) {
                throw new Exception('File not found in private catalog', 404);
            }
            
            // Обновляем данные файла
            $catalog[$fileIndex]['title'] = $updateData['title'];
            $catalog[$fileIndex]['authors'] = $updateData['authors'];
            $catalog[$fileIndex]['category'] = isset($updateData['category']) ? $updateData['category'] : null;
            $catalog[$fileIndex]['description'] = $updateData['description'];
            $catalog[$fileIndex]['updatedAt'] = date('Y-m-d H:i:s');
            
            // Сохраняем обновленный каталог
            $this->saveCatalogToFile($catalog, $this->privateCatalogPath);
            
            return true;
            
        } catch (Exception $e) {
            throw new Exception('Error updating file in catalog: ' . $e->getMessage(), $e->getCode());
        }
    }

    /** Получает информацию о файле */
    public function getFileInfo($fileName, $type = 'public')
    {
        try {
            $catalogPath = $this->getCatalogPath($type);
            $catalog = $this->loadCatalogFromFile($catalogPath);
            
            foreach ($catalog as $item) {
                if ($item['fileName'] === $fileName) {
                    return $item;
                }
            }
            
            return null;

        } catch (Exception $e) {
            throw new Exception('Error getting file info: ' . $e->getMessage(), $e->getCode());
        }
    }

    /** Проверяет существование файла в каталоге */
    public function fileExists($fileName, $type = 'public')
    {
        try {
            $catalogPath = $this->getCatalogPath($type);
            $catalog = $this->loadCatalogFromFile($catalogPath);
            return $this->fileExistsInCatalog($fileName, $catalog);
        } catch (Exception $e) {
            return false;
        }
    }

    /** Получает размер каталога */
    public function getCatalogSize($type = 'public')
    {
        try {
            $catalogPath = $this->getCatalogPath($type);
            $catalog = $this->loadCatalogFromFile($catalogPath);
            return count($catalog);
        } catch (Exception $e) {
            return 0;
        }
    }

    /** Очищает приватный каталог (удаляет все записи) */
    public function clearPrivateCatalog()
    {
        try {
            $this->saveCatalogToFile(array(), $this->privateCatalogPath);
            return true;
        } catch (Exception $e) {
            throw new Exception('Error clearing private catalog: ' . $e->getMessage(), $e->getCode());
        }
    }

    /** Получает список уникальных категорий из приватного каталога */
    public function getCategories()
    {
        try {
            $catalog = $this->loadCatalogFromFile($this->privateCatalogPath);
            
            // Извлекаем все категории
            $categories = array();
            foreach ($catalog as $item) {
                if (isset($item['category']) && !empty($item['category'])) {
                    $categories[] = $item['category'];
                }
            }
            
            // Убираем дубликаты и сортируем
            $uniqueCategories = array_unique($categories);
            sort($uniqueCategories);
            
            return $uniqueCategories;
            
        } catch (Exception $e) {
            throw new Exception('Error getting categories: ' . $e->getMessage(), $e->getCode());
        }
    }

    // === ПРИВАТНЫЕ МЕТОДЫ ===

    /**
     * Определяет путь к файлу каталога по типу
     */
    private function getCatalogPath($type)
    {
        switch (strtolower($type)) {
            case 'public':
                return $this->publicCatalogPath;
            case 'private':
                return $this->privateCatalogPath;
            default:
                throw new Exception('Invalid catalog type. Use "public" or "private"', 400);
        }
    }

    /** Загружает каталог из файла */
    private function loadCatalogFromFile($catalogPath)
    {
        if (!file_exists($catalogPath)) {
            return array();
        }

        $json = file_get_contents($catalogPath);
        $catalog = json_decode($json, true);

        if (!is_array($catalog)) {
            return array();
        }

        return $catalog;
    }

    /** Сохраняет каталог в файл */
    private function saveCatalogToFile($catalog, $catalogPath)
    {
        $json = json_encode($catalog);
        
        if (file_put_contents($catalogPath, $json) === false) {
            throw new Exception('Failed to save catalog to file', 500);
        }
    }

    /** Проверяет существование файла в каталоге */
    private function fileExistsInCatalog($fileName, $catalog)
    {
        foreach ($catalog as $item) {
            if ($item['fileName'] === $fileName) {
                return true;
            }
        }
        return false;
    }

    /** Группирует каталог по первой букве фамилии автора */
    private function groupCatalogByAuthorFirstLetter($catalog)
    {
        $groupedCatalog = array();

        foreach ($catalog as $file) {
            $fileLetter = strtoupper(substr($file['authors'], 0, 1));
            
            if (!isset($groupedCatalog[$fileLetter])) {
                $groupedCatalog[$fileLetter] = array();
            }
            
            $file['type'] = $this->getFileType($file['fileName']);
            $groupedCatalog[$fileLetter][] = $file;
        }

        ksort($groupedCatalog);
        return $groupedCatalog;
    }

    /** Определяет тип файла по расширению */
    private function getFileType($filename)
    {
        $ext = strtolower(pathinfo($filename, PATHINFO_EXTENSION));
        
        if ($ext === 'pdf') return 'pdf';
        if (in_array($ext, array('doc', 'docx', 'rtf'))) return 'word';
        if (in_array($ext, array('zip', 'rar', '7z'))) return 'archive';
        if (in_array($ext, array('jpg', 'jpeg', 'png', 'gif'))) return 'image';
        
        return 'other';
    }

    /** Применяет фильтры к каталогу */
    private function applyFilters($catalog, $filters)
    {
        if (empty($filters)) {
            return $catalog;
        }

        $filteredCatalog = array();
        foreach ($catalog as $item) {
            $includeItem = true;
            
            // Поиск по названию
            if (isset($filters['search']) && !empty($filters['search'])) {
                $search = strtolower($filters['search']);
                $title = strtolower(isset($item['title']) ? $item['title'] : '');
                $authors = strtolower(isset($item['authors']) ? $item['authors'] : '');
                $description = strtolower(isset($item['description']) ? $item['description'] : '');
                
                if (strpos($title, $search) === false && 
                    strpos($authors, $search) === false && 
                    strpos($description, $search) === false) {
                    $includeItem = false;
                }
            }
            
            // Фильтр по автору
            if ($includeItem && isset($filters['author']) && !empty($filters['author'])) {
                $author = strtolower($filters['author']);
                $itemAuthors = strtolower(isset($item['authors']) ? $item['authors'] : '');
                if (strpos($itemAuthors, $author) === false) {
                    $includeItem = false;
                }
            }
            
            // Фильтр по типу файла
            if ($includeItem && isset($filters['fileType']) && !empty($filters['fileType'])) {
                $fileType = strtolower($filters['fileType']);
                $fileName = strtolower(isset($item['fileName']) ? $item['fileName'] : '');
                if (strpos($fileName, $fileType) === false) {
                    $includeItem = false;
                }
            }
            
            if ($includeItem) {
                $filteredCatalog[] = $item;
            }
        }
        
        return $filteredCatalog;
    }

    /**
     * Применяет расширенные фильтры к каталогу
     */
    private function applyAdvancedFilters($catalog, $filters)
    {
        if (empty($filters)) {
            return $catalog;
        }

        $filteredCatalog = array();
        foreach ($catalog as $item) {
            $includeItem = true;
            
            // Поиск по названию, авторам, описанию
            if (isset($filters['search']) && !empty($filters['search'])) {
                $search = strtolower($filters['search']);
                $title = strtolower(isset($item['title']) ? $item['title'] : '');
                $authors = strtolower(isset($item['authors']) ? $item['authors'] : '');
                $description = strtolower(isset($item['description']) ? $item['description'] : '');
                
                if (strpos($title, $search) === false && 
                    strpos($authors, $search) === false && 
                    strpos($description, $search) === false) {
                    $includeItem = false;
                }
            }
            
            // Фильтр по автору
            if ($includeItem && isset($filters['author']) && !empty($filters['author'])) {
                $author = strtolower($filters['author']);
                $itemAuthors = strtolower(isset($item['authors']) ? $item['authors'] : '');
                if (strpos($itemAuthors, $author) === false) {
                    $includeItem = false;
                }
            }
            
            // Фильтр по типу файла
            if ($includeItem && isset($filters['fileType']) && !empty($filters['fileType'])) {
                $fileType = strtolower($filters['fileType']);
                $fileName = strtolower(isset($item['fileName']) ? $item['fileName'] : '');
                if (strpos($fileName, $fileType) === false) {
                    $includeItem = false;
                }
            }
            
            // Фильтр по категории
            if ($includeItem && isset($filters['category']) && !empty($filters['category'])) {
                $category = strtolower($filters['category']);
                $itemCategory = strtolower(isset($item['category']) ? $item['category'] : '');
                if (strpos($itemCategory, $category) === false) {
                    $includeItem = false;
                }
            }
            
            // Фильтр по размеру файла
            if ($includeItem && isset($filters['minSize']) && !empty($filters['minSize'])) {
                if ((isset($item['fileSize']) ? $item['fileSize'] : 0) < $filters['minSize']) {
                    $includeItem = false;
                }
            }
            
            if ($includeItem && isset($filters['maxSize']) && !empty($filters['maxSize'])) {
                if ((isset($item['fileSize']) ? $item['fileSize'] : 0) > $filters['maxSize']) {
                    $includeItem = false;
                }
            }
            
            // Фильтр по дате
            if ($includeItem && isset($filters['dateFrom']) && !empty($filters['dateFrom'])) {
                $itemDate = strtotime(isset($item['uploadDate']) ? $item['uploadDate'] : '');
                $fromDate = strtotime($filters['dateFrom']);
                if ($itemDate < $fromDate) {
                    $includeItem = false;
                }
            }
            
            if ($includeItem && isset($filters['dateTo']) && !empty($filters['dateTo'])) {
                $itemDate = strtotime(isset($item['uploadDate']) ? $item['uploadDate'] : '');
                $toDate = strtotime($filters['dateTo']);
                if ($itemDate > $toDate) {
                    $includeItem = false;
                }
            }
            
            if ($includeItem) {
                $filteredCatalog[] = $item;
            }
        }
        
        return $filteredCatalog;
    }

    /**
     * Применяет сортировку к каталогу
     */
    private function applySorting($catalog, $sorting)
    {
        if (empty($sorting) || empty($sorting['field'])) {
            return $catalog;
        }

        $field = $sorting['field'];
        $direction = isset($sorting['direction']) ? $sorting['direction'] : 'asc';

        // Создаем временные свойства для сортировки
        $this->sortField = $field;
        $this->sortDirection = $direction;
        
        usort($catalog, array($this, 'compareCatalogItems'));

        return $catalog;
    }

    /**
     * Применяет группировку к каталогу
     */
    private function applyGrouping($catalog, $grouping)
    {
        if (empty($grouping) || empty($grouping['by']) || $grouping['by'] === 'none') {
            // Если группировка не указана или 'none', возвращаем плоский массив
            return $catalog;
        }

        $groupBy = $grouping['by'];
        $groupedCatalog = array();

        foreach ($catalog as $file) {
            $groupKey = '';
            
            switch ($groupBy) {
                case 'author':
                    $groupKey = strtoupper(substr(isset($file['authors']) ? $file['authors'] : '', 0, 1));
                    break;
                case 'category':
                    $groupKey = isset($file['category']) ? $file['category'] : 'Без категории';
                    break;
                case 'type':
                    $groupKey = $this->getFileType(isset($file['fileName']) ? $file['fileName'] : '');
                    break;
                case 'date':
                    $uploadDate = isset($file['uploadDate']) ? $file['uploadDate'] : '';
                    $groupKey = date('Y-m', strtotime($uploadDate));
                    break;
                default:
                    $groupKey = 'Все файлы';
            }
            
            if (!isset($groupedCatalog[$groupKey])) {
                $groupedCatalog[$groupKey] = array();
            }
            
            $groupedCatalog[$groupKey][] = $file;
        }

        // Сортируем группы
        ksort($groupedCatalog);
        
        return $groupedCatalog;
    }
    
    /**
     * Метод сравнения для usort (совместимость с PHP 5.3)
     */
    private function compareCatalogItems($a, $b)
    {
        $valueA = isset($a[$this->sortField]) ? $a[$this->sortField] : '';
        $valueB = isset($b[$this->sortField]) ? $b[$this->sortField] : '';

        // Специальная обработка для дат
        if ($this->sortField === 'uploadDate') {
            $valueA = strtotime($valueA);
            $valueB = strtotime($valueB);
        }
        
        // Специальная обработка для размера файла
        if ($this->sortField === 'fileSize') {
            $valueA = (int)$valueA;
            $valueB = (int)$valueB;
        }

        if ($this->sortDirection === 'asc') {
            if ($valueA < $valueB) return -1;
            if ($valueA > $valueB) return 1;
            return 0;
        } else {
            if ($valueB < $valueA) return -1;
            if ($valueB > $valueA) return 1;
            return 0;
        }
    }
}