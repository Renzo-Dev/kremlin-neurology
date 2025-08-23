<?php

require_once __DIR__ . '/../services/ResponseService.php';
require_once __DIR__ . '/../services/CatalogService.php';

/** Контроллер каталога - только получение данных */
class CatalogController
{
    private $catalogService;

    public function __construct(CatalogService $catalogService)
    {
        $this->catalogService = $catalogService;
    }

    /** Получает публичный каталог (без аутентификации) */
    public function getPublicCatalog()
    {
        try {
            $catalog = $this->catalogService->getCatalog('public');
            ResponseService::success($catalog);
        } catch (Exception $e) {
            ResponseService::errorFromException($e, 'Error loading public catalog');
        }
    }

    /** Получает приватный каталог (требует аутентификации) */
    public function getPrivateCatalog()
    {
        try {
            $catalog = $this->catalogService->getCatalog('private');
            ResponseService::success($catalog);
        } catch (Exception $e) {
            ResponseService::errorFromException($e, 'Error loading private catalog');
        }
    }

    /** Получает каталог с фильтрацией по автору */
    public function getCatalogByAuthor(string $author)
    {
        try {
            if (empty(trim($author))) {
                ResponseService::badRequest('Author name is required');
                return;
            }

            // Получаем тип каталога из GET параметра, по умолчанию 'public'
            $type = $_GET['type'] ?? 'public';
            
            if (!in_array($type, ['public', 'private'])) {
                ResponseService::badRequest('Invalid catalog type. Use "public" or "private"');
                return;
            }

            $catalog = $this->catalogService->getCatalogByAuthor($author, $type);
            ResponseService::success($catalog);
        } catch (Exception $e) {
            ResponseService::errorFromException($e, 'Error loading catalog by author');
        }
    }

    /** Получает каталог с пагинацией */
    public function getCatalogPaginated()
    {
        try {
            // Получаем параметры пагинации из GET запроса
            $page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
            $limit = isset($_GET['limit']) ? (int)$_GET['limit'] : 20;
            
            // Валидация параметров
            if ($page < 1 || $limit < 1 || $limit > 100) {
                ResponseService::badRequest('Invalid pagination parameters. Page must be >= 1, limit must be 1-100');
                return;
            }

            // Получаем тип каталога из GET параметра, по умолчанию 'public'
            $type = $_GET['type'] ?? 'public';
            
            if (!in_array($type, ['public', 'private'])) {
                ResponseService::badRequest('Invalid catalog type. Use "public" or "private"');
                return;
            }

            $catalog = $this->catalogService->getCatalogPaginated($page, $limit, $type);
            ResponseService::success($catalog);
        } catch (Exception $e) {
            ResponseService::errorFromException($e, 'Error loading paginated catalog');
        }
    }
}