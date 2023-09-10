### Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)

```
node index.js --action="list"
```
[Screenshot_1](https://prnt.sc/eA3WeCVRwh5Y)

### Отримуємо контакт по id і виводимо у консоль об'єкт контакту або null, якщо контакту з таким id не існує.

```
node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6
```
[Screenshot_2](https://prnt.sc/fDR8HVjYjAwc)

### Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту

```
node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22
```
[Screenshot_3](https://prnt.sc/Immz2Lmb5LMq)

### Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту або null, якщо контакту з таким id не існує.

```
node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH
```
[Screenshot_4](https://prnt.sc/dae8m477NW-B)
