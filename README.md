russian-requisites-validator
============================

NPM Модуль валидации Российских реквизитов: ИНН, КПП, ОГРН, ОГРНИП

## Установка
```
npm install russian-requisites-validator
```

## Применение
```js
var requisitesValidator = require('russian-requisites-validator');


requisitesValidator.inn('772390615212');  // true
requisitesValidator.ogrn('316774600096240'); // true


```