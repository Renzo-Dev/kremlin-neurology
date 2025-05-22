<?php

class respondHandler
{
    static function respond($sendData = array(), $code = 200)
    {
        header('HTTP/1.1 ' . $code);
        try {
            if (!isset($sendData)) {
                throw new Exception('No data to send');
            }
            echo json_encode($sendData);
            exit();
        } catch (Exception $e) {
            header('HTTP/1.1 500 Internal Server Error');
            echo json_encode(array('error' => 'Internal Server Error', 'message' => $e->getMessage()));
            exit();
        }
    }

}