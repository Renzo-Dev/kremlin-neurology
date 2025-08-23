<?php

require_once __DIR__ . '/../utils/respondHandler.php';

/** Единый сервис для работы с каталогом - чтение и управление */
class CatalogService
{
    private $publicCatalogPath;
    private $privateCatalogPath;

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
    public function getCatalog(string $type = 'public'): array
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
    public function getCatalogByAuthor(string $author, string $type = 'public'): array
    {
        try {
            $catalogPath = $this->getCatalogPath($type);
            $catalog = $this->loadCatalogFromFile($catalogPath);
            
            $filteredCatalog = array_filter($catalog, function($item) use ($author) {
                return stripos($item['authors'], $author) !== false;
            });
            
            return array_values($filteredCatalog);
            
        } catch (Exception $e) {
            throw new Exception('Error getting catalog by author: ' . $e->getMessage(), $e->getCode());
        }
    }

    /** Получает каталог с пагинацией */
    public function getCatalogPaginated(int $page = 1, int $limit = 20, string $type = 'public'): array
    {
        try {
            $catalogPath = $this->getCatalogPath($type);
            $catalog = $this->loadCatalogFromFile($catalogPath);
            
            $totalItems = count($catalog);
            $totalPages = ceil($totalItems / $limit);
            
            $offset = ($page - 1) * $limit;
            $items = array_slice($catalog, $offset, $limit);
            
            return [
                'items' => $items,
                'pagination' => [
                    'currentPage' => $page,
                    'totalPages' => $totalPages,
                    'totalItems' => $totalItems,
                    'itemsPerPage' => $limit,
                    'hasNextPage' => $page < $totalPages,
                    'hasPrevPage' => $page > 1
                ]
            ];
            
        } catch (Exception $e) {
            throw new Exception('Error getting paginated catalog: ' . $e->getMessage(), $e->getCode());
        }
    }

    // === МЕТОДЫ УПРАВЛЕНИЯ (только для приватного каталога) ===

    /** Добавляет новый файл в приватный каталог */
    public function addFileToCatalog(array $fileData): bool
    {
        try {
            // Файлы добавляются только в приватный каталог
            $catalog = $this->loadCatalogFromFile($this->privateCatalogPath);
            
            // Проверяем, существует ли файл
            if ($this->fileExistsInCatalog($fileData['fileName'], $catalog)) {
                throw new Exception('File already exists in catalog', 400);
            }

            // Добавляем новую запись
            $catalog[] = [
                'title' => $fileData['title'],
                'authors' => $fileData['authors'],
                'fileName' => $fileData['fileName'],
                'uploadDate' => date('Y-m-d H:i:s'),
                'fileSize' => $fileData['fileSize'] ?? null,
                'description' => $fileData['description'] ?? null
            ];

            $this->saveCatalogToFile($catalog, $this->privateCatalogPath);
            return true;

        } catch (Exception $e) {
            throw new Exception('Error adding file to catalog: ' . $e->getMessage(), $e->getCode());
        }
    }

    /** Удаляет файл из приватного каталога */
    public function removeFileFromCatalog(string $fileName): bool
    {
        try {
            $catalog = $this->loadCatalogFromFile($this->privateCatalogPath);
            
            if (!$this->fileExistsInCatalog($fileName, $catalog)) {
                throw new Exception('File not found in catalog', 404);
            }

            // Удаляем запись
            $catalog = array_filter($catalog, function($item) use ($fileName) {
                return $item['fileName'] !== $fileName;
            });

            $this->saveCatalogToFile(array_values($catalog), $this->privateCatalogPath);
            return true;

        } catch (Exception $e) {
            throw new Exception('Error removing file from catalog: ' . $e->getMessage(), $e->getCode());
        }
    }

    /** Получает информацию о файле */
    public function getFileInfo(string $fileName, string $type = 'public'): ?array
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
    public function fileExists(string $fileName, string $type = 'public'): bool
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
    public function getCatalogSize(string $type = 'public'): int
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
    public function clearPrivateCatalog(): bool
    {
        try {
            $this->saveCatalogToFile([], $this->privateCatalogPath);
            return true;
        } catch (Exception $e) {
            throw new Exception('Error clearing private catalog: ' . $e->getMessage(), $e->getCode());
        }
    }

    // === ПРИВАТНЫЕ МЕТОДЫ ===

    /**
     * Определяет путь к файлу каталога по типу
     */
    private function getCatalogPath(string $type): string
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
    private function loadCatalogFromFile(string $catalogPath): array
    {
        if (!file_exists($catalogPath)) {
            return [];
        }

        $json = file_get_contents($catalogPath);
        $catalog = json_decode($json, true);

        if (!is_array($catalog)) {
            return [];
        }

        return $catalog;
    }

    /** Сохраняет каталог в файл */
    private function saveCatalogToFile(array $catalog, string $catalogPath): void
    {
        $json = json_encode($catalog, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
        
        if (file_put_contents($catalogPath, $json) === false) {
            throw new Exception('Failed to save catalog to file', 500);
        }
    }

    /** Проверяет существование файла в каталоге */
    private function fileExistsInCatalog(string $fileName, array $catalog): bool
    {
        foreach ($catalog as $item) {
            if ($item['fileName'] === $fileName) {
                return true;
            }
        }
        return false;
    }

    /** Группирует каталог по первой букве фамилии автора */
    private function groupCatalogByAuthorFirstLetter(array $catalog): array
    {
        $groupedCatalog = [];

        foreach ($catalog as $file) {
            $fileLetter = mb_strtoupper(mb_substr($file['authors'], 0, 1, 'UTF-8'), 'UTF-8');
            
            if (!isset($groupedCatalog[$fileLetter])) {
                $groupedCatalog[$fileLetter] = [];
            }
            
            $file['type'] = $this->getFileType($file['fileName']);
            $groupedCatalog[$fileLetter][] = $file;
        }

        ksort($groupedCatalog);
        return $groupedCatalog;
    }

    /** Определяет тип файла по расширению */
    private function getFileType(string $filename): string
    {
        $ext = strtolower(pathinfo($filename, PATHINFO_EXTENSION));
        
        if ($ext === 'pdf') return 'pdf';
        if (in_array($ext, ['doc', 'docx', 'rtf'])) return 'word';
        if (in_array($ext, ['zip', 'rar', '7z'])) return 'archive';
        if (in_array($ext, ['jpg', 'jpeg', 'png', 'gif'])) return 'image';
        
        return 'other';
    }
}