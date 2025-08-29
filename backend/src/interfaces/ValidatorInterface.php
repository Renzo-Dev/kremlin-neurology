<?php

/** Интерфейс для валидаторов - различные типы валидации */
interface ValidatorInterface
{
    /** Валидирует данные и возвращает результат */
    public function validate($data);
    
    /** Проверяет, применим ли валидатор к маршруту */
    public function canValidate($route, $method);
}

/** Результат валидации с ошибками и данными */
class ValidationResult
{
    private $isValid;
    private $errors;
    private $validatedData;

    public function __construct($isValid, $errors = array(), $validatedData = array())
    {
        $this->isValid = $isValid;
        $this->errors = $errors;
        $this->validatedData = $validatedData;
    }

    public function isValid()
    {
        return $this->isValid;
    }

    public function getErrors()
    {
        return $this->errors;
    }

    public function getValidatedData()
    {
        return $this->validatedData;
    }
}
