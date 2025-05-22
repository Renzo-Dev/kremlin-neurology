<?php

require_once __DIR__ . '/../services/AuthService.php';
require_once __DIR__ . '/../utils/respondHandler.php';

class AuthController
{
    private static $authPassword = '123123';
    private static $adminPassword = '123456';


    public static function login()
    {
        $data = json_decode(file_get_contents('php://input'), true);

        if (!isset($data['password'])) {
            respondHandler::respond(array(
                'authenticated' => false,
                'error' => 'Password is required',
                'message' => 'Password is required'
            ), 400);
            exit();
        } else if ($data['password'] === '') {
            respondHandler::respond(array(
                'authenticated' => false,
                'error' => 'Password is empty',
                'message' => 'Password is empty'
            ), 400);
            exit();
        } else if ($data['password'] !== self::$authPassword) {
            respondHandler::respond(array(
                'authenticated' => false,
                'error' => 'Invalid password',
                'message' => 'Invalid password'
            ), 401);
            exit();
        } else if ($data['password'] !== self::$adminPassword) {
            AuthService::setAuthenticated();
            respondHandler::respond(array(
                'authenticated' => true,
                'message' => 'Authenticated successfully'
            ), 200);
            exit();
        } else if ($data['password'] === self::$adminPassword) {
            AuthService::setAdminAuthenticated();
            respondHandler::respond(array(
                'authenticated' => true,
                'isAdmin' => true,
                'message' => 'Authenticated as admin successfully'
            ), 200);
            exit();
        } else {
            respondHandler::respond(array(
                'authenticated' => false,
                'error' => 'Invalid password',
                'message' => 'Invalid password'
            ), 401);
            exit();
        }
    }
}