# Установка проекта
install:
	npm ci

# Сбор и запуск докера
docker:
	docker compose build
	docker compose up

# Запуск линтера
lint:
	npx eslint .

# Запуск линтера + автоматический фикс
lint-fix:
	npx eslint . --fix