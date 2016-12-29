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
Возвращает округленное число (`num`) до указанного количества знаков после запятой (`limit`).
```js
let n = Math.round(1.76521, 2) // => 1.77
let n = Math.round(1.76521) // => 2
```
### .randomInt(min, max)
Возвращает случайное целое число диапазоне от минимального (`min`) до максимального (`max`). Если второй аргумент не указан, то первый интерпретируется как максимальное, а минимальное как **ноль**.
```js
let n = Math.randomInt(1, 5) // => 4
let n = Math.randomInt(3) // => 0
```
## Object
### .copy(obj)
Возвращает копию объекта (`obj`). Используется глубокое копирование.
```js
let obj1 = {a: 5, b: {c: null}}
let obj2 = Object.copy(obj1) // => obj2 = {a: 5, b: {c: null}}
```
### .forEach(obj, callback)
Перебирает все поля объекта (`obj`) и вызывает функцию (`callback`) на каждой итерации. Функция (`callback`) принимает три значения в качестве аргументов: ключ поля (`key`), значение поля (`value`) и ссылка на перебираемый объект (`obj`).
```js
let obj = {a: 5, b: 'qwerty'}
Object.forEach(obj, (key, value, obj) => {
    ...
})
```
### .isEmpty(obj)
Вернет **true**, если объект (`obj`) не имеет ни одного поля.
```js
Object.isEmpty({a: 5, b: 'qwerty'}) // => false
Object.isEmpty({}) // => true
```
### .isObject(obj)
Вернет **true**, если переданное значение (`obj`) является объектом.
```js
Object.isObject({a: 5, b: 'qwerty'}) // => true
Object.isObject([6, 3, 10]) // => false
```
## String
### .format(...)
Возвращает отформатированную строку согласно заданному шаблону. Поддерживаются следующие спецификаторы: `%s`, `%d`, `%f`, `%b`. Для вещественных чисел доступно округление до заданного количества знаков после запятой.
```js
'qwe %f %s %d %.2f %b'.format(7.342, 'rty', 111, 1.56786, '')
// => qwe 7.342 rty 111 1.57 false
```
