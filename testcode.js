import { isNumericLiteral } from "typescript";
let greet = function () {
  return 'Привет,' + this.name;
};
let person = {
  name: prompt(`Введите имя `) ?? '-',
  greet: greet
};

let anotherPerson = {
  name: prompt(`Введите имя `) ?? '-',
  greet: greet
};
console.log(person.greet());
console.log(anotherPerson.greet());




function makeMovie() {
  let currentPlayer = 1;
  let gameOver = false;

  const min = Number(prompt("Введите минимальное число") ?? "-");
  const max = Number(prompt("Введите максимальное число") ?? "-");
  console.log(`Минимальное значение : ${min} Максимальное значение: ${max} Приятной игры!`);

  const random_number = Math.floor(Math.random() * max) + min;

  let input = prompt(`Введите число`) ?? `-`;
  let num = +input;


  while (true) {
    let input = prompt(`Введите число`) ?? `-`;
    let num = +input;

    if (num === random_number) {
      gameOver = true;
      console.log(`Игрок ${currentPlayer} угадал число ${random_number}!`);
      break;

    } else if (num < random_number) {
      console.log(`Игрок ${currentPlayer}: ${input} - слишком мало!`);
      continue;
    } else {
      console.log(`Игрок ${currentPlayer}: ${input} - слишком много!`);
      continue;
    }

  };


  if (!gameOver) {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
  }

}
makeMovie();





console.log('Спасибо за игру!')



