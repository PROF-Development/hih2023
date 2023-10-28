# Локальное развертывание проекта


## Установка зависимостей

```shell
poetry install 
```


## Запуск СУБД
```shell
docker-compose up
```


## Копирование локальных настроек
```shell
cp app/config/local.yaml.tmpl app/config/local.yaml
```


## Запуск приложения
```shell
poetry run app/main.py
```
