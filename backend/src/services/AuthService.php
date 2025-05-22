<?php

class AuthService
{
    public static function startSession()
    {
        try {
            // Check if session is already started
            if (!isset($_SESSION)) {
                session_start();
            }
        } catch (Exception $e) {
            // Handle exception (e.g., log it)
            error_log('Error starting session: ' . $e->getMessage());
        }
    }

    public static function setAuthenticated()
    {
        self::startSession();
        try {
            $_SESSION['authenticated'] = true;
            $_SESSION['expires_at'] = time() + 3600; // Set session expiration time (1 hour)
        } catch (\Exception $exception) {
            // Handle exception (e.g., log it)
            error_log('Error setting authenticated session: ' . $exception->getMessage());
        }
    }

    public static function setAdminAuthenticated()
    {
        self::startSession();
        try {
            self::setAuthenticated();
            $_SESSION['is_admin'] = true;
        } catch (\Exception $exception) {
            // Handle exception (e.g., log it)
            error_log('Error setting admin authenticated session: ' . $exception->getMessage());
        }
    }

    // Check if the user is authenticated
    public static function getAuthenticated()
    {
        self::startSession();
        try {
            if (isset($_SESSION['authenticated']) && $_SESSION['authenticated'] === true) {
                // Check if the session has expired
                if (isset($_SESSION['expires_at']) && time() > $_SESSION['expires_at']) {
                    self::destroy(); // Destroy the session if expired
                    return false;
                }
                return true; // User is authenticated
            }
            return false; // User is not authenticated
        } catch (\Exception $exception) {
            // Handle exception (e.g., log it)
            error_log('Error checking authenticated session: ' . $exception->getMessage());
            return false;
        }
    }

    public static function getAdminAuthenticated()
    {
        self::startSession();
        try {
            if (self::getAuthenticated() && isset($_SESSION['is_admin']) && $_SESSION['is_admin'] === true) {
                return true; // User is admin
            }
            return false; // User is not admin
        } catch (\Exception $exception) {
            // Handle exception (e.g., log it)
            error_log('Error checking admin authenticated session: ' . $exception->getMessage());
            return false;
        }
    }

    static function destroy()
    {
        self::startSession();
        try {
            $_SESSION = array(); // Clear all session variables

            if (ini_get("session.use_cookies")) {
                $params = session_get_cookie_params();
                setcookie(session_name(), '', time() - 42000,
                    $params["path"], $params["domain"],
                    $params["secure"], $params["httponly"]
                );
            }
            session_destroy(); // Destroy the session
        } catch (\Exception $exception) {
            // Handle exception (e.g., log it)
            error_log('Error destroying session: ' . $exception->getMessage());
        }
    }
}