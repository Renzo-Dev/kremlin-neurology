<?php

require_once __DIR__ . '/../utils/respondHandler.php';

/** Сервис для обработки HTTP ответов */
class ResponseService
{
    /** Отправляет успешный ответ */
    public static function success($data, int $code = 200): void
    {
        // Если данные уже в нужном формате, отправляем как есть
        if (is_array($data) && isset($data['success'])) {
            respondHandler::respond($data, $code);
        } else {
            // Иначе оборачиваем в стандартный формат
            respondHandler::respond([
                'success' => true,
                'data' => $data
            ], $code);
        }
    }

    /** Отправляет ответ с ошибкой */
    public static function error(string $error, string $message, int $code = 500): void
    {
        respondHandler::respond([
            'error' => $error,
            'message' => $message
        ], $code);
    }

    /** Отправляет ответ с ошибкой из исключения */
    public static function errorFromException(Exception $e, string $defaultError = 'Internal Server Error'): void
    {
        $code = $e->getCode() ?: 500;
        $message = $e->getMessage() ?: $defaultError;
        
        self::error($defaultError, $message, $code);
    }

    /** Отправляет ответ "не найдено" */
    public static function notFound(string $message = 'Resource not found'): void
    {
        self::error('Not Found', $message, 404);
    }

    /** Отправляет ответ "не авторизован" */
    public static function unauthorized(string $message = 'Unauthorized access'): void
    {
        self::error('Unauthorized', $message, 401);
    }

    /** Отправляет ответ "запрещено" */
    public static function forbidden(string $message = 'Access forbidden'): void
    {
        self::error('Forbidden', $message, 403);
    }

    /** Отправляет ответ "неверный запрос" */
    public static function badRequest(string $message = 'Bad request'): void
    {
        self::error('Bad Request', $message, 400);
    }
}
