<?php

abstract class Middleware
{
    /**
     * Выполняет middleware
     * @param array $request Данные запроса
     * @return bool|array true если прошло успешно, массив с ошибкой если нет
     */
    abstract public function handle($request);

    /**
     * Проверяет, нужно ли выполнять middleware для данного маршрута
     * @param string $route Маршрут
     * @param string $method HTTP метод
     * @return bool
     */
    public function shouldRun($route, $method)
    {
        return true;
    }
}
