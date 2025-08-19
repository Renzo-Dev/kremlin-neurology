<?php

require_once __DIR__ . '/../utils/respondHandler.php';

/** Единый сервис для работы с каталогом - чтение и управление */
class CatalogService
{
    private $catalogPath;

    public function __construct()
    {
        $this->catalogPath = __DIR__ . '/../data/catalog.json';
    }

    // === МЕТОДЫ ЧТЕНИЯ (Query) ===

    /** Получает полный каталог, сгруппированный по авторам */
    public function getCatalogGroupedByAuthors(): array
    {
        $catalog = $this->loadCatalogFromFile();
        return $this->groupCatalogByAuthorFirstLetter($catalog);
    }

    /** Получает публичный каталог (файлы из публичной папки) */
    public function getPublicCatalog(): array
    {
        $catalog = $this->loadCatalogFromFile();
        $publicCatalog = $this->filterPublicCatalog($catalog);
        return $this->groupCatalogByAuthorFirstLetter($publicCatalog);
    }

    /** Получает приватный каталог (файлы из приватной папки) */
    public function getPrivateCatalog(): array
    {
        $catalog = $this->loadCatalogFromFile();
        $privateCatalog = $this->filterPrivateCatalog($catalog);
        return $this->groupCatalogByAuthorFirstLetter($privateCatalog);
    }

    /** Получает каталог по конкретному автору */
    public function getCatalogByAuthor(string $author): array
    {
        $catalog = $this->loadCatalogFromFile();
        $filteredCatalog = array_filter($catalog, function($item) use ($author) {
            return stripos($item['authors'], $author) !== false;
        });
        
        return array_values($filteredCatalog);
    }

    /** Получает каталог с пагинацией */
    public function getCatalogPaginated(int $page = 1, int $limit = 20): array
    {
        $catalog = $this->loadCatalogFromFile();
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
    }

    /** Получает каталог по типу файла */
    public function getCatalogByFileType(string $fileType): array
    {
        $catalog = $this->loadCatalogFromFile();
        $filteredCatalog = array_filter($catalog, function($item) use ($fileType) {
            $itemFileType = $this->getFileType($item['fileName']);
            return $itemFileType === $fileType;
        });
        
        return array_values($filteredCatalog);
    }

    /** Получает статистику каталога */
    public function getCatalogStats(): array
    {
        $catalog = $this->loadCatalogFromFile();
        
        $stats = [
            'totalFiles' => count($catalog),
            'totalAuthors' => count(array_unique(array_column($catalog, 'authors'))),
            'fileTypes' => [],
            'authorsCount' => []
        ];

        foreach ($catalog as $item) {
            $fileType = $this->getFileType($item['fileName']);
            $stats['fileTypes'][$fileType] = ($stats['fileTypes'][$fileType] ?? 0) + 1;
            
            $author = $item['authors'];
            $stats['authorsCount'][$author] = ($stats['authorsCount'][$author] ?? 0) + 1;
        }

        return $stats;
    }

    // === МЕТОДЫ УПРАВЛЕНИЯ (Management) ===

    /** Добавляет новый файл в каталог */
    public function addFileToCatalog(array $fileData): bool
    {
        try {
            $catalog = $this->loadCatalogFromFile();
            
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

            $this->saveCatalogToFile($catalog);
            return true;

        } catch (Exception $e) {
            throw new Exception('Error adding file to catalog: ' . $e->getMessage(), $e->getCode());
        }
    }

    /** Удаляет файл из каталога */
    public function removeFileFromCatalog(string $fileName): bool
    {
        try {
            $catalog = $this->loadCatalogFromFile();
            
            if (!$this->fileExistsInCatalog($fileName, $catalog)) {
                throw new Exception('File not found in catalog', 404);
            }

            // Удаляем запись
            $catalog = array_filter($catalog, function($item) use ($fileName) {
                return $item['fileName'] !== $fileName;
            });

            $this->saveCatalogToFile(array_values($catalog));
            return true;

        } catch (Exception $e) {
            throw new Exception('Error removing file from catalog: ' . $e->getMessage(), $e->getCode());
        }
    }

    /** Получает информацию о файле */
    public function getFileInfo(string $fileName): ?array
    {
        try {
            $catalog = $this->loadCatalogFromFile();
            
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
    public function fileExists(string $fileName): bool
    {
        try {
            $catalog = $this->loadCatalogFromFile();
            return $this->fileExistsInCatalog($fileName, $catalog);
        } catch (Exception $e) {
            return false;
        }
    }

    /** Получает размер каталога */
    public function getCatalogSize(): int
    {
        try {
            $catalog = $this->loadCatalogFromFile();
            return count($catalog);
        } catch (Exception $e) {
            return 0;
        }
    }

    /** Очищает каталог (удаляет все записи) */
    public function clearCatalog(): bool
    {
        try {
            $this->saveCatalogToFile([]);
            return true;
        } catch (Exception $e) {
            throw new Exception('Error clearing catalog: ' . $e->getMessage(), $e->getCode());
        }
    }

    // === ПРИВАТНЫЕ МЕТОДЫ ===

    /** Загружает каталог из файла */
    private function loadCatalogFromFile(): array
    {
        if (!file_exists($this->catalogPath)) {
            return [];
        }

        $json = file_get_contents($this->catalogPath);
        $catalog = json_decode($json, true);

        if (!is_array($catalog)) {
            return [];
        }

        return $catalog;
    }

    /** Сохраняет каталог в файл */
    private function saveCatalogToFile(array $catalog): void
    {
        $json = json_encode($catalog, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
        
        if (file_put_contents($this->catalogPath, $json) === false) {
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

    /** Фильтрует публичный каталог */
    private function filterPublicCatalog(array $catalog): array
    {
        $publicCatalog = [];
        
        foreach ($catalog as $file) {
            if ($this->isFilePublic($file['fileName'])) {
                $publicCatalog[] = [
                    'title' => $file['title'],
                    'authors' => $file['authors'],
                    'type' => $this->getFileType($file['fileName']),
                    'uploadDate' => $file['uploadDate'] ?? null
                ];
            }
        }
        
        return $publicCatalog;
    }

    /** Фильтрует приватный каталог */
    private function filterPrivateCatalog(array $catalog): array
    {
        $privateCatalog = [];
        
        foreach ($catalog as $file) {
            if (!$this->isFilePublic($file['fileName'])) {
                $privateCatalog[] = [
                    'title' => $file['title'],
                    'authors' => $file['authors'],
                    'type' => $this->getFileType($file['fileName']),
                    'uploadDate' => $file['uploadDate'] ?? null
                ];
            }
        }
        
        return $privateCatalog;
    }

    /** Проверяет, является ли файл публичным */
    private function isFilePublic(string $fileName): bool
    {
        require_once __DIR__ . '/FileService.php';
        return FileService::isFilePublic($fileName);
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