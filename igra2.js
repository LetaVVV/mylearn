let greet = function () {
  return 'Привет,' + this.name;
};


let person = {
  name: prompt(`Введите имя `) ?? '-',
  age: prompt(`Введите возраст `) ?? '-',
  greet: greet
};

let anotherPerson = {
  name: prompt(`Введите имя `) ?? '-',
  age: prompt(`Введите возраст `) ?? '-',
  greet: greet
};
console.log(person.greet());
console.log(anotherPerson.greet());

let totalMovies = 0;
while (totalMovies < 100) {
  (totalMovies++ % 2) + 1;
}



const random_number = Math.floor(Math.random() * 20) + 0;
/**
 * 
 * @param {number} num
 * @param {number} num2
 */
function isEven(num, num2) {
  while ((totalMovies % 2) === 0) {
    const input = prompt(`Введите число, ${person.name} `) ?? '-';
    const num = +input;
    if (num === random_number) {
      console.log(`Вы выиграли, ${person.name}!`);
      break;
    }
    if (input === "stop") {
      console.log("Игра  остановлена");
      break;
    }

    if (typeof (num) == typeof (input)) {
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

    if (num > random_number) {
      console.log("Вы ввели число больше! Попробуйте снова!");
      continue;
    }
    if (num < random_number) {
      console.log("Вы ввели число меньше! Попробуйте снова!");
      continue;
    }
  }
  while ((totalMovies % 2) !== 0) {
    const input2 = prompt(`Введите число, ${anotherPerson.name} `) ?? '-';
    const num2 = +input2;

    if (num2 === random_number) {
      console.log(`Вы выиграли, ${anotherPerson.name}!`);
      break;
    }
    if (input2 === "stop") {
      console.log("Игра  остановлена");
      break;
    }

    if (typeof (num2) == typeof (input2)) {
      console.log("Ошибка: вы ввели не число.");
      continue;
    }

    if (num2 > 20) {
      console.log("Введите число от 0 до 20");
      continue;
    }

    if (num2 < 0) {
      console.log("Введите число от 0 до 20");
      continue;
    }
    if (num2 > random_number) {
      console.log("Вы ввели число больше! Попробуйте снова!");
      continue;
    }

    if (num2 < random_number) {
      console.log("Вы ввели число меньше! Попробуйте снова!");
      continue;
    }
  }
}
isEven();