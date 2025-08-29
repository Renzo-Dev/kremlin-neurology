<?php

/** Интерфейс для аутентификации - проверка прав пользователя */
interface AuthInterface
{
    /** Проверяет, аутентифицирован ли пользователь */
    public function isAuthenticated();
    
    /** Проверяет, является ли пользователь администратором */
    public function isAdmin();
    
    /** Получает информацию о текущем пользователе */
    public function getCurrentUser();
}

/** Интерфейс для управления сессиями - start, set, get, destroy */
interface SessionInterface
{
    /** Запускает сессию */
    public function start();
    
    /** Устанавливает значение в сессии */
    public function set($key, $value);
    
    /** Получает значение из сессии */
    public function get($key);
    
    /** Уничтожает сессию */
    public function destroy();
}
