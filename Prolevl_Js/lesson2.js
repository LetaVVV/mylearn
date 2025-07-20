// ### Простые задачи:

// 1. Рекурсивное вычисление факториала  
// Напишите функцию, которая с использованием рекурсии вычисляет факториал числа \(n \) (например, \(5! = 5 \cdot 4 \cdot 3 \cdot 2 \cdot 1 \)).

function factorial(n) {
  if (n === 1 || n === typeof (n.toString())) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(5));

// 2. Сумма чисел от 1 до \(n \)  
// Рекурсивно найдите сумму всех чисел от 1 до заданного числа \(n \).Например, для \(n = 4 \), результат будет \(1 + 2 + 3 + 4 = 10 \).

function summ(start, finish) {
  if (start > finish) {
    return 0;
  }
  return start + summ(start + 1, finish);
}
console.log(summ(1, 4));

function summ2(n) {
  if (n == 0) {
    return 0;
  }
  return n + summ2(n - 1);
}
console.log(summ2(4));

// 3. Возведение числа в степень  
// Напишите функцию, которая рекурсивно вычисляет результат возведения числа \(a \) в степень \(b \) (то есть \(a ^ b \)).Например, \(2 ^ 3 = 2 \cdot 2 \cdot 2 = 8 \).

function stepen(a, b) {
  if (a === 0 || b === 0) {
    return 1;
  }
  return a * stepen(a, b - 1);
}
console.log(stepen(2, 3));


// 4. Поиск максимального элемента в массиве  
// Рекурсивно найдите наибольший элемент в массиве.Например, для массива[1, 5, 3, 9, 2] результат — 9.;

function findMax(arr) {
  if (arr.length === 1) return arr[0];
  const maxOfRest = findMax(arr.slice(1));
  return Math.max(arr[0], maxOfRest);
}
findMax([1, 2, 3, 4, 5]);

// 5. Числа Фибоначчи  
// Рекурсивно реализуйте функцию, которая возвращает \(n \) -е число Фибоначчи.
// Числа Фибоначчи определяются как:
// \[
//   f(0) = 0, \, f(1) = 1, \, f(n) = f(n - 1) + f(n - 2)
//   \];
// Например, для \(n = 5 \), результат будет: \(0, 1, 1, 2, 3, 5 \), ответ — 5.;

/**
 * @param {number} n 
 * @returns {number}
 */
function f(n) {
  if (n <= 1) return n;

  return f(n - 1) + f(n - 2);
}

console.log(f(5));
// ---

// ### Средние задачи:

// 6. Проверка строки на палиндром  
// Напишите рекурсивную функцию, которая проверяет, является ли заданная строка палиндромом(читается одинаково справа налево и слева направо).
//   Пример: "radar" — палиндром, "hello" — нет.
/**
 * @param {string} input
 * @returns {boolean}
 */
function isPalindrom(input) {
  if (input.length < 2)
    return true;

  if (input.at(0) !== input.at(-1))
    return false;

  return isPalindrom(input.slice(1, -1));
}

console.log(isPalindrom('radar'));


// 7. Рекурсивная функция для подсчёта цифр в числе  
// Рекурсивно подсчитайте, сколько цифр содержит заданное число.Например, для числа 12345 результат — 5.;

/**
 * @param {number} num
 */
function num(number) {
  if (number === 0) {
    return 0;
  }
  return num(Math.floor(number / 10)) + 1;
}
console.log(num(123456));

// 8. Сумма цифр числа  
// Напишите рекурсивную функцию для расчёта суммы всех цифр заданного числа.Например, для числа 456 результат \(4 + 5 + 6 = 15 \).

/**
 * @param {number} num
 */
function num(number) {
  if (number === 0) {
    return 0;
  }
  return num(Math.floor(number / 10)) + (number % 10);
}
console.log(num(123));


// 9. Печать всех элементов массива с конца
// Рекурсивно выведите все элементы массива в обратном порядке.
// Например, [1, 2, 3, 4] → "4 3 2 1".



// ---

// ### Сложные задачи:

// 10. Рекурсивная реализация сортировки;
// Например, реализуйте рекурсивный алгоритм сортировки массива(например,
//  сортировка вставками или quicksort).;

/**
 * 
 * @param {number[]} array 
 * @returns {number[]}
 */

function sort(array) {
  if (array.length < 2)
    return array;

  for (let i = 1; i < array.length; i++) {
    if (array[i - 1] > array[i]) {
      const acc = array[i - 1];
      array[i - 1] = array[i];
      array[i] = acc;
      return sort(array);
    }
  }

  return array;
}
console.log(sort([3, 1, 4, 2]));