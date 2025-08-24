# Запуск проекта через Docker

## Структура проекта
```
kremlin-neurology/
├── backend/           # PHP Backend
│   ├── Dockerfile
│   └── src/
├── frontend/          # Vue.js Frontend
│   ├── Dockerfile
│   └── .dockerignore
└── docker-compose.yml # Основной файл для запуска всего проекта
```

## Быстрый запуск

### Запуск всего проекта
```bash
# Из корневой папки проекта
docker-compose up --build
```

## Доступные сервисы

### Backend (PHP)
- **URL**: http://localhost:5000
- **API**: http://localhost:5000/api/*
- **Контейнер**: php-backend

### Frontend (Vue.js + Node.js 20)
- **URL**: http://localhost:3000
- **Контейнер**: frontend
- **Node.js**: версия 20 (Alpine)

## Команды управления

### Запуск
```bash
docker-compose up -d        # Запуск в фоновом режиме
docker-compose up --build   # Пересборка и запуск
```

### Остановка
```bash
docker-compose down         # Остановка и удаление контейнеров
docker-compose down -v      # + удаление volumes
```

### Логи
```bash
docker-compose logs -f      # Все логи
docker-compose logs -f frontend  # Логи только frontend
docker-compose logs -f backend   # Логи только backend
```

### Перезапуск
```bash
docker-compose restart      # Перезапуск всех сервисов
docker-compose restart frontend  # Перезапуск только frontend
```

## Разработка

### Hot Reload
- **Frontend**: автоматическая перезагрузка при изменении файлов
- **Backend**: изменения в PHP файлах применяются сразу

### Volumes
- `./frontend:/app` - синхронизация frontend кода
- `./backend/src/:/app` - синхронизация backend кода
- `/app/node_modules` - изолированные node_modules

### Environment Variables
- `NODE_ENV=development` - режим разработки
- `CHOKIDAR_USEPOLLING=true` - поддержка hot reload в Docker

## Troubleshooting

### Проблемы с портами
```bash
# Проверить занятые порты
netstat -tulpn | grep :3000
netstat -tulpn | grep :5000

# Остановить процессы на портах
sudo lsof -ti:3000 | xargs kill -9
sudo lsof -ti:5000 | xargs kill -9
```

### Пересборка образов
```bash
docker-compose build --no-cache  # Полная пересборка
docker-compose up --build        # Пересборка и запуск
```

### Очистка Docker
```bash
docker system prune -a           # Удаление неиспользуемых образов
docker volume prune              # Удаление неиспользуемых volumes
```

## Полезные команды

### Войти в контейнер
```bash
docker exec -it frontend sh      # Frontend контейнер
docker exec -it php-backend sh   # Backend контейнер
```

### Проверить статус
```bash
docker-compose ps                # Статус сервисов
docker-compose top               # Процессы в контейнерах
```

### Обновить зависимости
```bash
# Frontend
docker exec -it frontend npm install
docker exec -it frontend npm update

# Backend
docker exec -it php-backend composer install
docker exec -it php-backend composer update
```
