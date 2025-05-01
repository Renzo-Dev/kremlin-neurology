# Используем официальный образ PHP 8.2 с флагом FPM (FastCGI Process Manager)
FROM php:8.2-fpm

# Устанавливаем необходимые расширения для работы с PHP
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libzip-dev \
    git \
    unzip \
    supervisor \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd zip pdo pdo_mysql

# Копируем composer для управления зависимостями PHP
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Устанавливаем рабочую директорию для приложения
WORKDIR /app

# Удаляем старый сокет, если он существует
RUN rm -f /var/run/supervisord.sock

# Устанавливаем точку входа
ENTRYPOINT ["/usr/bin/supervisord"]

# По умолчанию запускаем supervisor с указанным конфигурационным файлом
CMD ["-c", "/etc/supervisor/supervisord.conf"]
