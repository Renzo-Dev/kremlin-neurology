# Используем обычный Debian-образ Node.js 20 вместо Alpine
# Чтобы избежать проблем с musl и optional deps
FROM node:20

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Удаляем node_modules и package-lock.json, если они были скопированы
# (необязательно, но гарантирует чистоту)
#RUN rm -rf node_modules package-lock.json

# Устанавливаем зависимости. Используем `npm install`, а не `npm ci`
# `npm install` лучше обрабатывает optional dependencies
RUN npm install

# Копируем исходный код
#COPY . .

# Экспонируем порт Vite
EXPOSE 3000

# Запускаем dev-сервер
CMD ["npm", "run", "dev", "--", "--host", "--port", "3000", "--strictPort"]