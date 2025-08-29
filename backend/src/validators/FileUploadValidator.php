<?php

require_once __DIR__ . '/../interfaces/ValidatorInterface.php';

/** Валидатор для загрузки файлов - проверяет title, authors, file */
class FileUploadValidator implements ValidatorInterface
{
    private $rules;

    public function __construct()
    {
        $this->rules = array(
            'title' => array(
                'required' => true,
                'minLength' => 2,
                'maxLength' => 255,
                'message' => 'Название файла обязательно и должно содержать 2-255 символов'
            ),
            'authors' => array(
                'required' => true,
                'minLength' => 2,
                'maxLength' => 500,
                'message' => 'Авторы обязательны и должны содержать минимум 2 символа'
            ),
            'file' => array(
                'required' => true,
                'allowedTypes' => array('pdf', 'doc', 'docx', 'txt'),
                'maxSize' => 50 * 1024 * 1024, // 50MB
                'message' => 'Файл обязателен, должен быть PDF/DOC/DOCX/TXT и не превышать 50MB'
            )
        );
    }

    /** Валидирует данные загрузки файла */
    public function validate($data)
    {
        $errors = array();
        $validatedData = array();

        // Валидация title
        if ($this->rules['title']['required'] && empty($data['title'])) {
            $errors['title'] = array($this->rules['title']['message']);
        } elseif (!empty($data['title'])) {
            $title = $data['title'];
            if (strlen($title) < $this->rules['title']['minLength']) {
                $errors['title'] = array('Название должно содержать минимум ' . $this->rules['title']['minLength'] . ' символов');
            } elseif (strlen($title) > $this->rules['title']['maxLength']) {
                $errors['title'] = array('Название не должно превышать ' . $this->rules['title']['maxLength'] . ' символов');
            } else {
                $validatedData['title'] = $title;
            }
        }

        // Валидация authors
        if ($this->rules['authors']['required'] && empty($data['authors'])) {
            $errors['authors'] = array($this->rules['authors']['message']);
        } elseif (!empty($data['authors'])) {
            $authors = $data['authors'];
            if (strlen($authors) < $this->rules['authors']['minLength']) {
                $errors['authors'] = array('Авторы должны содержать минимум ' . $this->rules['authors']['minLength'] . ' символа');
            } else {
                $validatedData['authors'] = $authors;
            }
        }

        // Валидация файла
        if ($this->rules['file']['required'] && (!isset($_FILES['file']) || $_FILES['file']['error'] !== UPLOAD_ERR_OK)) {
            $errors['file'] = array($this->rules['file']['message']);
        } elseif (isset($_FILES['file']) && $_FILES['file']['error'] === UPLOAD_ERR_OK) {
            $file = $_FILES['file'];
            
            // Проверка размера
            if ($file['size'] > $this->rules['file']['maxSize']) {
                $errors['file'] = array('Размер файла не должен превышать ' . $this->formatBytes($this->rules['file']['maxSize']));
            }
            
            // Проверка типа
            $fileExtension = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
            if (!in_array($fileExtension, $this->rules['file']['allowedTypes'])) {
                $errors['file'] = array('Тип файла должен быть одним из: ' . implode(', ', $this->rules['file']['allowedTypes']));
            } else {
                $validatedData['file'] = $file;
            }
        }

        $isValid = empty($errors);
        return new ValidationResult($isValid, $errors, $validatedData);
    }

    /** Проверяет, подходит ли маршрут для валидации */
    public function canValidate($route, $method)
    {
        return $route === '/api/catalog' && $method === 'POST';
    }

    /** Форматирует размер файла в читаемый вид */
    private function formatBytes($bytes, $precision = 2)
    {
        $units = array('B', 'KB', 'MB', 'GB');
        
        for ($i = 0; $bytes > 1024 && $i < count($units) - 1; $i++) {
            $bytes /= 1024;
        }
        
        return round($bytes, $precision) . ' ' . $units[$i];
    }
}
