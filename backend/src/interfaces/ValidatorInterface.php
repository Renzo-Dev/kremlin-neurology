<?php

/** Интерфейс для валидаторов - различные типы валидации */
interface ValidatorInterface
{
    /** Валидирует данные и возвращает результат */
    public function validate(array $data): ValidationResult;
    
    /** Проверяет, применим ли валидатор к маршруту */
    public function canValidate(string $route, string $method): bool;
}

/** Результат валидации с ошибками и данными */
class ValidationResult
{
    private $isValid;
    private $errors;
    private $validatedData;

    public function __construct(bool $isValid, array $errors = [], array $validatedData = [])
    {
        $this->isValid = $isValid;
        $this->errors = $errors;
        $this->validatedData = $validatedData;
    }

    public function isValid(): bool
    {
        return $this->isValid;
    }

    public function getErrors(): array
    {
        return $this->errors;
    }

    public function getValidatedData(): array
    {
        return $this->validatedData;
    }
}
