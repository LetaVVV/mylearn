/**
 * 
 * @param {number} num 
 */
let isEven = function (num) {
  const input = prompt(`Введите число, ${name} `) ?? '-';
  const num = +input;
  return num === random_number;
};
while (true) {
  switch (num === random_number)

    if (num === random_number) {
    console.log("Вы выиграли!!");
    break;
  }
  if (input === "stop") {
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
  if (num > 20) {
    console.log("Введите число от 0 до 20");
    continue;
  }
  if (num < 0) {
    console.log("Введите число от 0 до 20");
    continue;
  }
}



