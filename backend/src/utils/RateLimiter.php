<?php

/**
 * Простой Rate Limiter без БД
 * Использует файлы и сессии для ограничения запросов
 */
class RateLimiter
{
    private $blockedFile;
    private $authAttemptsFile;
    
    public function __construct()
    {
        $this->blockedFile = __DIR__ . '/../data/blocked_ips.txt';
        $this->authAttemptsFile = __DIR__ . '/../data/auth_attempts.txt';
        
        // Создаем директории если не существуют
        $this->ensureDirectoriesExist();
    }
    
    /**
     * Проверяет лимит аутентификации для IP
     */
    public function checkAuthLimit($ip)
    {
        // Проверяем блокировку IP
        if ($this->isIpBlocked($ip)) {
            return [
                'allowed' => false,
                'message' => 'IP заблокирован из-за превышения лимита попыток входа',
                'retry_after' => $this->getBlockExpiry($ip)
            ];
        }
        
        // Проверяем количество неудачных попыток
        $attempts = $this->getAuthAttempts($ip);
        $failedAttempts = $attempts[$ip]['count'] ?? 0;
        
        // Если уже превышен лимит неудачных попыток
        if ($failedAttempts >= 5) {
            return [
                'allowed' => false,
                'message' => 'Превышено количество попыток входа. Попробуйте позже.',
                'retry_after' => $this->getRetryAfterTime($ip)
            ];
        }
        
        return ['allowed' => true];
    }
    
    /**
     * Проверяет лимит загрузки файлов в сессии
     */
    public function checkUploadLimit()
    {
        if (!isset($_SESSION['uploads_today'])) {
            $_SESSION['uploads_today'] = 0;
            $_SESSION['uploads_date'] = date('Y-m-d');
        }
        
        // Сброс счетчика если новый день
        if ($_SESSION['uploads_date'] !== date('Y-m-d')) {
            $_SESSION['uploads_today'] = 0;
            $_SESSION['uploads_date'] = date('Y-m-d');
        }
        
        $maxUploads = 20; // Максимум 20 загрузок в день
        
        if ($_SESSION['uploads_today'] >= $maxUploads) {
            return [
                'allowed' => false,
                'message' => 'Достигнут лимит загрузок на сегодня (20 файлов)',
                'retry_after' => 'tomorrow'
            ];
        }
        
        return ['allowed' => true];
    }
    
    /**
     * Проверяет лимит скачивания файлов в сессии
     */
    public function checkDownloadLimit()
    {
        if (!isset($_SESSION['downloads_hour'])) {
            $_SESSION['downloads_hour'] = 0;
            $_SESSION['downloads_reset'] = time() + 3600;
        }
        
        // Сброс счетчика если прошел час
        if (time() > $_SESSION['downloads_reset']) {
            $_SESSION['downloads_hour'] = 0;
            $_SESSION['downloads_reset'] = time() + 3600;
        }
        
        $maxDownloads = 30; // Максимум 30 скачиваний в час
        
        if ($_SESSION['downloads_hour'] >= $maxDownloads) {
            $retryAfter = $_SESSION['downloads_reset'] - time();
            return [
                'allowed' => false,
                'message' => 'Достигнут лимит скачиваний в час (30 файлов)',
                'retry_after' => $retryAfter
            ];
        }
        
        return ['allowed' => true];
    }
    
    /**
     * Увеличивает счетчик неудачных попыток аутентификации для IP
     */
    public function incrementFailedAuthAttempts($ip)
    {
        $attempts = $this->getAuthAttempts($ip);
        $attempts[$ip] = [
            'count' => ($attempts[$ip]['count'] ?? 0) + 1,
            'first_attempt' => $attempts[$ip]['first_attempt'] ?? time(),
            'last_attempt' => time()
        ];
        
        // Блокируем IP после 5 неудачных попыток в течение 15 минут
        if ($attempts[$ip]['count'] >= 5 && 
            (time() - $attempts[$ip]['first_attempt']) <= 900) {
            $this->blockIp($ip, 3600); // Блокировка на 1 час
        }
        
        $this->saveAuthAttempts($attempts);
    }
    
    /**
     * Сбрасывает счетчик неудачных попыток при успешной аутентификации
     */
    public function resetFailedAuthAttempts($ip)
    {
        $attempts = $this->getAuthAttempts($ip);
        if (isset($attempts[$ip])) {
            unset($attempts[$ip]);
            $this->saveAuthAttempts($attempts);
        }
    }
    
    /**
     * Получает попытки аутентификации для IP
     */
    private function getAuthAttempts($ip)
    {
        if (!file_exists($this->authAttemptsFile)) {
            return [];
        }
        
        $data = file_get_contents($this->authAttemptsFile);
        $attempts = json_decode($data, true) ?: [];
        
        // Очищаем старые попытки (старше 15 минут)
        foreach ($attempts as $ipAddr => $info) {
            if (time() - $info['last_attempt'] > 900) {
                unset($attempts[$ipAddr]);
            }
        }
        
        return $attempts;
    }
    
    /**
     * Сохраняет попытки аутентификации
     */
    private function saveAuthAttempts($attempts)
    {
        file_put_contents($this->authAttemptsFile, json_encode($attempts));
    }
    
    /**
     * Блокирует IP адрес
     */
    private function blockIp($ip, $duration = 3600)
    {
        $blocked = $this->getBlockedIps();
        $blocked[$ip] = time() + $duration;
        $this->saveBlockedIps($blocked);
    }
    
    /**
     * Проверяет заблокирован ли IP
     */
    private function isIpBlocked($ip)
    {
        $blocked = $this->getBlockedIps();
        
        if (isset($blocked[$ip])) {
            if (time() < $blocked[$ip]) {
                return true;
            } else {
                // Убираем истекшую блокировку
                unset($blocked[$ip]);
                $this->saveBlockedIps($blocked);
            }
        }
        
        return false;
    }
    
    /**
     * Получает заблокированные IP
     */
    private function getBlockedIps()
    {
        if (!file_exists($this->blockedFile)) {
            return [];
        }
        
        $data = file_get_contents($this->blockedFile);
        return json_decode($data, true) ?: [];
    }
    
    /**
     * Сохраняет заблокированные IP
     */
    private function saveBlockedIps($blocked)
    {
        file_put_contents($this->blockedFile, json_encode($blocked));
    }
    
    /**
     * Получает время истечения блокировки для IP
     */
    private function getBlockExpiry($ip)
    {
        $blocked = $this->getBlockedIps();
        return isset($blocked[$ip]) ? $blocked[$ip] - time() : 0;
    }
    
    /**
     * Получает время до следующей попытки входа
     */
    private function getRetryAfterTime($ip)
    {
        $attempts = $this->getAuthAttempts($ip);
        if (isset($attempts[$ip])) {
            $firstAttempt = $attempts[$ip]['first_attempt'];
            $timeWindow = 900; // 15 минут
            $retryTime = $firstAttempt + $timeWindow;
            $remaining = $retryTime - time();
            
            if ($remaining > 0) {
                return $remaining;
            }
        }
        return 0;
    }
    
    /**
     * Увеличивает счетчик загрузок
     */
    public function incrementUploadCount()
    {
        if (!isset($_SESSION['uploads_today'])) {
            $_SESSION['uploads_today'] = 0;
            $_SESSION['uploads_date'] = date('Y-m-d');
        }
        
        $_SESSION['uploads_today']++;
    }
    
    /**
     * Увеличивает счетчик скачиваний
     */
    public function incrementDownloadCount()
    {
        if (!isset($_SESSION['downloads_hour'])) {
            $_SESSION['downloads_hour'] = 0;
            $_SESSION['downloads_reset'] = time() + 3600;
        }
        
        $_SESSION['downloads_hour']++;
    }
    
    /**
     * Создает необходимые директории
     */
    private function ensureDirectoriesExist()
    {
        $dir = dirname($this->blockedFile);
        if (!is_dir($dir)) {
            mkdir($dir, 0755, true);
        }
    }
    
    /**
     * Очищает старые записи (вызывать периодически)
     */
    public function cleanup()
    {
        // Очищаем старые попытки аутентификации
        $attempts = $this->getAuthAttempts('');
        $this->saveAuthAttempts($attempts);
        
        // Очищаем истекшие блокировки
        $blocked = $this->getBlockedIps();
        $this->saveBlockedIps($blocked);
    }
}
