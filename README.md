# Валидатор персональных данных

**<font color="red">Написано в образовательных целях. Не использовать в реальных проектах!</font>**

Библиотека помогает валидировать персональные данные - ФИО, серия паспорта (РФ), номер паспорта (РФ), дату рождения, ИНН, номер мобильного телефона 

Установка:
```
npm i persvalidata
```

Пример использования:
```
const validate = require('persvalidata');

validate.checkName("Давид"); => true
validate.checkNum("5413"); => true
validate.checkSerie("342644"); => true
validate.checkBirthday(19, 2, 1990); => true
validate.checkInn('438900616615'); => true
validate.checkPhone('9793254533'); => true
```