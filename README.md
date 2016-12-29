# js-standard-library-extensions
Расширения стандартной библиотеки JavaScript.
## Начало работы
```js
require('js-standard-library-extensions')
```
## Array
### .shuffle()
Перемешивает элементы массива в случайном порядке.
```js
let arr = [6, 3, 10]
arr.shuffle() // => [3, 10, 6]
```
### .remove(value)
Удаляет элемент массива по его значению (`value`).
```js
let arr = [6, 3, 10]
arr.remove(3) // => [6, 10]
```
## Math
### .round(num, limit)
Округляет число (`num`) до указанного количества знаков после запятой (`limit`).
```js
Math.round(1.76521, 2) // => 1.77
Math.round(1.76521) // => 2
```
### .randomInt(min, max)
Генерирует случайное целое число диапазоне от минимального (`min`) до максимального (`max`). Если второй аргумент не указан, то первый интерпретируется как максимальное, а минимальное как **ноль**.
```js
Math.randomInt(1, 5) // => 4
Math.randomInt(3) // => 0
```
## Object
### .copy(obj)
```js
let obj1 = {age: 5, name: null}
let obj2 = Object.copy(obj1) // => {age: 5, name: null}
```
