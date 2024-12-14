# Atlas UI

## Описание

Atlas UI - это пользовательский интерфейс сервиса по размещению заказов на выполнение различных работ, поиск специалистов по категориям и размещению анкет специалистов. Проект создан с использованием Create React App и представляет собой современное веб-приложение, предоставляющее удобный и интуитивно понятный интерфейс для пользователей.

## Установка и запуск

### Предварительные требования

Для запуска проекта вам потребуется установленный Docker и Docker Compose.

### Шаги для запуска

1. Клонируйте репозиторий:
    ```sh
    git clone https://github.com/osechinskiy/atlas_ui.git
    ```

2. Перейдите в директорию проекта:
    ```sh
    cd atlas_ui
    ```

3. Запустите приложение с использованием Docker Compose:
    ```sh
    docker-compose up --build
    ```

После выполнения этих шагов приложение будет доступно по адресу [http://localhost:3000](http://localhost:3000).

## Доступные скрипты

В директории проекта вы также можете запустить следующие команды:

### `npm start`

Запускает приложение в режиме разработки.
Откройте [http://localhost:3000](http://localhost:3000) для просмотра в браузере.

### `npm run build`

Собирает приложение для продакшена в папку `build`.