# Используем официальный Node.js образ в качестве базового
FROM node:16

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json в контейнер
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install --force

# Копируем остальные файлы проекта в контейнер
COPY . .

# Собираем приложение
RUN npm run build

# Устанавливаем Nginx для обслуживания статических файлов
FROM nginx:alpine

# Копируем собранное приложение из предыдущего этапа в директорию Nginx
COPY --from=0 /app/target/classes/public /usr/share/nginx/html

# Копируем конфигурацию Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Открываем порт 80 для доступа к приложению
EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]