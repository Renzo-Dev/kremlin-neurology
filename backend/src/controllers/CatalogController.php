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

    /** Получает каталог, сгруппированный по авторам */
    public function getCatalog()
    {
        try {
            $catalog = $this->catalogService->getCatalogGroupedByAuthors();
            ResponseService::success($catalog);
        } catch (Exception $e) {
            ResponseService::errorFromException($e, 'Error loading catalog');
        }
    }

    /** Получает публичный каталог (без аутентификации) */
    public function getPublicCatalog()
    {
        try {
            $catalog = $this->catalogService->getPublicCatalog();
            ResponseService::success($catalog);
        } catch (Exception $e) {
            ResponseService::errorFromException($e, 'Error loading public catalog');
        }
    }

    /** Получает приватный каталог (требует аутентификации) */
    public function getPrivateCatalog()
    {
        try {
            $catalog = $this->catalogService->getPrivateCatalog();
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

            $catalog = $this->catalogService->getCatalogByAuthor($author);
            ResponseService::success($catalog);
        } catch (Exception $e) {
            ResponseService::errorFromException($e, 'Error loading catalog by author');
        }
    }

    /** Получает каталог с пагинацией */
    public function getCatalogPaginated(int $page = 1, int $limit = 20)
    {
        try {
            if ($page < 1 || $limit < 1 || $limit > 100) {
                ResponseService::badRequest('Invalid pagination parameters');
                return;
            }

            $catalog = $this->catalogService->getCatalogPaginated($page, $limit);
            ResponseService::success($catalog);
        } catch (Exception $e) {
            ResponseService::errorFromException($e, 'Error loading paginated catalog');
        }
    }

    /** Получает статистику каталога */
    public function getCatalogStats()
    {
        try {
            $stats = $this->catalogService->getCatalogStats();
            ResponseService::success($stats);
        } catch (Exception $e) {
            ResponseService::errorFromException($e, 'Error loading catalog statistics');
        }
    }
}