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
    public function getCatalogByAuthor($author)
    {
        try {
            $trimmedAuthor = trim($author);
            if (empty($trimmedAuthor)) {
                ResponseService::badRequest('Author name is required');
                return;
            }

            // Получаем тип каталога из GET параметра, по умолчанию 'public'
            $type = isset($_GET['type']) ? $_GET['type'] : 'public';
            
            if (!in_array($type, array('public', 'private'))) {
                ResponseService::badRequest('Invalid catalog type. Use "public" or "private"');
                return;
            }

            $catalog = $this->catalogService->getCatalogByAuthor($trimmedAuthor, $type);
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
            $type = isset($_GET['type']) ? $_GET['type'] : 'public';
            
            if (!in_array($type, array('public', 'private'))) {
                ResponseService::error('Invalid catalog type. Use "public" or "private"', 'Invalid catalog type', 400);
                return;
            }

            // Проверяем аутентификацию для приватного типа
            if ($type === 'private') {
                require_once __DIR__ . '/../services/AuthService.php';
                if (!AuthService::getAuthenticated()) {
                    ResponseService::error('Unauthorized access', 'Требуется аутентификация для доступа к приватным данным', 401);
                    return;
                }
            }

            // Собираем фильтры
            $filters = array();
            if (isset($_GET['search']) && !empty($_GET['search'])) {
                $filters['search'] = $_GET['search'];
            }
            if (isset($_GET['author']) && !empty($_GET['author'])) {
                $filters['author'] = $_GET['author'];
            }
            if (isset($_GET['fileType']) && !empty($_GET['fileType'])) {
                $filters['fileType'] = $_GET['fileType'];
            }

            $catalog = $this->catalogService->getCatalogPaginated($page, $limit, $type, $filters);
            ResponseService::success($catalog);
        } catch (Exception $e) {
            ResponseService::errorFromException($e, 'Error loading paginated catalog');
        }
    }

    /** Получает каталог с полной фильтрацией, сортировкой и пагинацией */
    public function getCatalogWithFilters()
    {
        try {
            // Получаем данные из POST запроса
            $input = json_decode(file_get_contents('php://input'), true);
            
            if (!$input) {
                ResponseService::badRequest('Invalid JSON data');
                return;
            }

            // Валидация обязательных параметров
            if (!isset($input['type']) || !in_array($input['type'], array('public', 'private'))) {
                ResponseService::badRequest('Invalid catalog type. Use "public" or "private"');
                return;
            }

            // Проверяем аутентификацию для приватного типа
            if ($input['type'] === 'private') {
                require_once __DIR__ . '/../services/AuthService.php';
                if (!AuthService::getAuthenticated()) {
                    ResponseService::error('Unauthorized access', 'Требуется аутентификация для доступа к приватным данным', 401);
                    return;
                }
            }

            // Валидация пагинации
            $page = isset($input['page']) ? $input['page'] : 1;
            $limit = isset($input['limit']) ? $input['limit'] : 20;
            
            if ($page < 1 || $limit < 1 || $limit > 100) {
                ResponseService::badRequest('Invalid pagination parameters. Page must be >= 1, limit must be 1-100');
                return;
            }

            $catalog = $this->catalogService->getCatalogWithFilters($input);
            ResponseService::success($catalog);
        } catch (Exception $e) {
            ResponseService::errorFromException($e, 'Error loading catalog with filters');
        }
    }

    /** Получает список уникальных категорий из приватного каталога */
    public function getCategories()
    {
        try {
            // Проверяем аутентификацию для доступа к приватным данным
            require_once __DIR__ . '/../services/AuthService.php';
            if (!AuthService::getAuthenticated()) {
                ResponseService::error('Unauthorized access', 'Требуется аутентификация для доступа к приватным данным', 401);
                return;
            }

            $categories = $this->catalogService->getCategories();
            ResponseService::success($categories);
        } catch (Exception $e) {
            ResponseService::errorFromException($e, 'Error loading categories');
        }
    }
}