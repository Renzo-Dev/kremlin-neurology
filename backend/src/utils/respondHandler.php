<?php

class respondHandler
{
    static function respond($sendData = array(), $code = 200)
    {
        try {
            // CORS заголовки для всех ответов
            $origin = $_SERVER['HTTP_ORIGIN'] ?? '*';
            header("Access-Control-Allow-Origin: $origin");
            header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
            header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
            header('Access-Control-Allow-Credentials: true');
            
            header('HTTP/1.1 ' . $code);
            header('Content-Type: application/json; charset=UTF-8');
            if (!isset($sendData)) {
                throw new Exception('No data to send');
            }
            echo json_encode($sendData);
            exit();
        } catch (Exception $e) {
            header('HTTP/1.1 500 Internal Server Error');
            header('Content-Type: application/json; charset=UTF-8');
            echo json_encode(array('error' => 'Internal Server Error', 'message' => $e->getMessage()));
            exit();
        }
    }
}