# Валидатор персональных данных

**<font color="red">Написано в образовательных целях. Не использовать в реальных проектах!</font>**

Библиотека помогает валидировать персональны данные - ФИО, серия паспорта (РФ), номер паспорта (РФ) и дату рождения

Установка:
```
npm i persvalidata
```

Пример использования:
```
const validate = require('persvalidata');

validate.checkName("Давид"); //true
validate.checkNum("5413"); //true
validate.checkSerie("342644"); //true
validate.birthday(19, 2, 1990); //true
```