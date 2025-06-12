//Выведи все числа от 1 до 100, которые делятся на 3 или на 5.//
let func = function () {
  for (let i = 1; i < 100; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      console.log(i);
    }
  }

};
func();

//Напиши цикл, который находит первое число в диапазоне от 1 до 100, которое делится на 7 и 13 одновременно.//
let func2 = function () {
  for (let i = 1; i < 100; i++) {
    if (i % 7 === 0 && i % 13 === 0) {
      console.log(i);
    }
  }
};
func2();

//Напиши функцию greet(name), которая принимает имя и возвращает строку "Привет, [имя]!".//

let name = '' + prompt("Напишите свое имя ");

/**
 * @param {string} name 
 * @returns {string}
 */
function greet(name) {
  console.log("Привет" + "  " + name + "!");
  return name;
}

greet(name);

//Напиши функцию isEven(num), которая возвращает true, если число чётное, и false — если нечётное.//

/**
 * 
 * @param {number} num 
 * @returns {boolean}
 */
function isEven(num) {
  return Number(num) % 2 === 0;



}

while (true) {
  const input = prompt("Введите число") ?? '-';

  if (input == "stop") {
    console.log("цикл остановлен");
    break;
  }

  const num = +input;

  if (isNaN(num)) {
    console.log("error");
    continue;
  }

  console.log(isEven(num));
}

// не понимаю почему мне в консоль выводит False при введении строкового значения, код в VSC работает//

console.log('Конец программы');