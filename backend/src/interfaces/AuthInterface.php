<?php

/** Интерфейс для аутентификации - проверка прав пользователя */
interface AuthInterface
{
    /** Проверяет, аутентифицирован ли пользователь */
    public function isAuthenticated(): bool;
    
    /** Проверяет, является ли пользователь администратором */
    public function isAdmin(): bool;
    
    /** Получает информацию о текущем пользователе */
    public function getCurrentUser(): ?array;
}

/** Интерфейс для управления сессиями - start, set, get, destroy */
interface SessionInterface
{
    /** Запускает сессию */
    public function start(): bool;
    
    /** Устанавливает значение в сессии */
    public function set(string $key, $value): bool;
    
    /** Получает значение из сессии */
    public function get(string $key);
    
    /** Уничтожает сессию */
    public function destroy(): bool;
}
