# js-standard-library-extensions
Набор расширений для стандартной библиотеки **JavaScript**. Добавлены функции для работы с массивами, числами, объектами и строками.

## Установка
Добавление пакета в проект через [npm](https://www.npmjs.com):
```bash
npm install --save js-standard-library-extensions
```
Инициализация модуля:
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
Math.round(1.76521, 2) // => 1.77
Math.round(1.76521) // => 2
```
### .randomInt(min, max)
Возвращает случайное целое число диапазоне от минимального (`min`) до максимального (`max`) включительно. Если второй аргумент не указан, то первый интерпретируется как максимальное, а минимальное как **ноль**.
```js
Math.randomInt(1, 5) // => 4
Math.randomInt(3) // => 0
```
### .clamp(num, min, max)
Возвращает число (`num`) ограниченное в диапазоне от минимального (`min`) до максимального (`max`) включительно. Если третий аргумент не указан, то второй интерпретируется как максимальное, а минимальное как **ноль**.
```js
Math.clamp(2, 1, 5) // => 2
Math.clamp(6, 1, 5) // => 5
Math.clamp(0.9, 1, 1.1) // => 1
```
## Object
### .copy(obj)
Возвращает копию объекта (`obj`). Реализовано глубокое копирование.
```js
let obj = {a: 5, b: {c: null}}
Object.copy(obj) // => {a: 5, b: {c: null}}
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
Вернет **true**, если объект (`obj`) не имеет полей.
```js
Object.isEmpty({a: 5, b: 'qwerty'}) // => false
Object.isEmpty({}) // => true
```
## String
### .format(...)
Возвращает отформатированную строку согласно заданному шаблону. Поддерживаются следующие спецификаторы: `%s`, `%c`, `%f`, `%p` `%e`, `%o`, `%x`, `%X`, `%u`, `%d`, `%b`.
```js
'%s %s'.format('This is a string', 11) // => 'This is a string 11'
'Array: %s'.format(['12.3', 13.6]) // => 'Array: ["12.3",13.6]'
'Object: %s'.format({test: 'test', id: 12}) // => 'Object: {"test":"test","id":12}'
'%c'.format('Test') // => 'T'
'%b %b %b %b'.format('', 0, 1, 'test') // => 'false false true true'
'%5d'.format(12) // => '   12'
'%3u'.format(5) // => '  5'
'%05d'.format(12) // => '00012'
'%-5d'.format(12) // => '12   '
'%5.2d'.format(123) // => '  120'
'%5.2f'.format(1.1) // => ' 1.10'
'%10.2e'.format(1.1) // => '   1.10e+0'
'%5.3p'.format(1.12345) // => ' 1.12'
'%o'.format(12) // => '14'
'%5x'.format(45054) // => ' affe'
'%5X'.format(45054) // => ' AFFE'
'%20#2x'.format('45054') // => '    1010111111111110'
'%6#2d'.format('111') // => '     7'
'%6#16d'.format('affe') // => ' 45054'
```
## Global
### isObject(value)
Вернет **true**, если переданное значение (`value`) является объектом.
```js
isObject({a: 5, b: 'qwerty'}) // => true
isObject([6, 3, 10]) // => false
```
