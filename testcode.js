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
  /**
   * 
   * @param {number} num 
   *
   */
  function checkInput(num) {
    if (num === random_number) {
      gameOver = true;
      return `Игрок ${currentPlayer} угадал число ${random_number}!`;
    } else if (num < random_number) {
      return `Игрок ${currentPlayer}: ${input} - слишком мало!`;
    } else {
      return `Игрок ${currentPlayer}: ${input} - слишком много!`;
    }
  }
  checkInput(num);

  if (!gameOver) {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
  }

}
makeMovie();





console.log('Спасибо за игру!')



