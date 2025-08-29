<?php

require_once __DIR__ . '/../utils/respondHandler.php';

/** Сервис для обработки HTTP ответов */
class ResponseService
{
    /** Отправляет успешный ответ */
    public static function success($data, $code = 200)
    {
        // Если данные уже в нужном формате, отправляем как есть
        if (is_array($data) && isset($data['success'])) {
            respondHandler::respond($data, $code);
        } else {
            // Иначе оборачиваем в стандартный формат
            respondHandler::respond(array(
                'success' => true,
                'data' => $data
            ), $code);
        }
    }

    /** Отправляет ответ с ошибкой */
    public static function error($error, $message, $code = 500)
    {
        respondHandler::respond(array(
            'error' => $error,
            'message' => $message
        ), $code);
    }

    /** Отправляет ответ с ошибкой из исключения */
    public static function errorFromException($e, $defaultError = 'Internal Server Error')
    {
        $code = $e->getCode();
        if ($code === 0 || $code === null) {
            $code = 500;
        }
        $message = $e->getMessage();
        if (empty($message)) {
            $message = $defaultError;
        }
        
        self::error($defaultError, $message, $code);
    }

    /** Отправляет ответ "не найдено" */
    public static function notFound($message = 'Resource not found')
    {
        self::error('Not Found', $message, 404);
    }

    /** Отправляет ответ "не авторизован" */
    public static function unauthorized($message = 'Unauthorized access')
    {
        self::error('Unauthorized', $message, 401);
    }

    /** Отправляет ответ "запрещено" */
    public static function forbidden($message = 'Access forbidden')
    {
        self::error('Forbidden', $message, 403);
    }

    /** Отправляет ответ "неверный запрос" */
    public static function badRequest($message = 'Bad request')
    {
        self::error('Bad Request', $message, 400);
    }
}
