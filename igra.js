//игра угадай число от 0 до 20//
//шаг первый - приветствие//
let name = '' + prompt("Напишите свое имя ");
/**
 * @param {string} name 
 * @returns {string}
 */
function greet(name) {
  console.log("Привет" + "  " + name + "!"
  );
  return name;
}
greet(name);
//шаг второй - рандомное число//

//шаг третий - ввод пользователя//

/**
 * 
 * @param {number} num
 * @param {number} random_number
 */
const random_number = Math.floor(Math.random() * 20) + 0;
function isEven(num) {

  while (true) {
    const input = prompt(`Введите число, ${name} `) ?? '-';
    const num = +input;

    if (num === random_number) {
      console.log("Вы выиграли!!");
      break;

    }
    if (num == "stop") {
      console.log("Игра  остановлена");
      break;
    }
    if (num > random_number) {
      console.log("Вы ввели число больше! Попробуйте снова!");
      continue;
    }
    if (num < random_number) {
      console.log("Вы ввели число меньше! Попробуйте снова!");
      continue;
    }
    if (num === input) {
      console.log("Ошибка: вы ввели не число.");
      continue;
    }
  }
}
isEven();



console.log('Конец');

