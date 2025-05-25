<?php

namespace App\Controllers;

use App\Services\AuthService;
use App\Utils\respondHandler;

class AuthController
{
    private static $authPassword = '123123';
    private static $adminPassword = 'admin';

    public static function login()
    {
        $data = json_decode(file_get_contents('php://input'), true);

        if (!isset($data['password']) || $data['password'] === '') {
            respondHandler::respond([
                'authenticated' => false,
                'error' => 'Password is required',
                'message' => 'Password is required'
            ], 400);
            return;
        }

        $password = $data['password'];

        if ($password === self::$adminPassword) {
            AuthService::setAdminAuthenticated();
            respondHandler::respond([
                'authenticated' => true,
                'isAdmin' => true,
                'message' => 'Authenticated as admin successfully'
            ]);
            return;
        }

        if ($password === self::$authPassword) {
            AuthService::setAuthenticated();
            respondHandler::respond([
                'authenticated' => true,
                'message' => 'Authenticated successfully'
            ]);
            return;
        }

        respondHandler::respond([
            'authenticated' => false,
            'error' => 'Invalid password',
            'message' => 'Invalid password'
        ], 401);
    }

    // Check if the user is authenticated
    public static function auth()
    {
        $isAuthenticated = AuthService::getAuthenticated();
        $isAdmin = AuthService::getAdminAuthenticated();

        if ($isAuthenticated) {
            $response = array(
                'authenticated' => true,
                'message' => 'Authenticated successfully'
            );
            if ($isAdmin) {
                $response['isAdmin'] = true;
                $response['message'] = 'Authenticated as admin successfully';
            }

            respondHandler::respond($response);
        } else {
            respondHandler::respond(array(
                'authenticated' => false,
                'message' => 'Not authenticated'
            ), 401);
        }
    }
}