// Программа, которая создает новые обьекты на основе прототипа person, используя данные, вводимые пользователем. Также выводит нужные блоки данных при вооде соответствующей команды//
/**
 * 
 * @param {string} message 
 * @returns {string}
 */
function inputname(message) {
  let input;

  do {
    input = prompt("Введите имя") ?? "-";
    if (isNaN(+(input))) {
      return input;
    }
    console.error("Нужно ввести имя");
  } while (true);
}


/**
 * 
 * @param {string} message 
 * @returns {number}
 */
function number(message) {
  let input;
  let inputNumber = isNaN(input = +(prompt(message + ":") ?? "-"));

  while (inputNumber) {
    console.error("Нужно ввести число ");
  }
  return input;
}

/**
 * 
 * @param {string} message 
 * @returns {string}
 */

function tg() {
  let input = "@" + prompt("Введите ник в телеграмм");
  return input;
}

/**
 * 
 * @param {string} message 
 * @returns {string}
 */

function inputNumber() {
  let input = "+" + number("Введите номер телефона, без + ");
  return input;
}

let person = {
  constructor: function Person() {
    this.name = inputname("Введите имя");
    this.age = number("Введите возраст");
    this.tg = tg();
    this.numberPhone = inputNumber();
    return this;
  }
};

const people = [];

do {
  let newPerson = Object.create(person).constructor();
  people.push(newPerson);
  console.log(`Создан новый профиль ${newPerson.name}`);
} while (confirm("Вы хотите продолжить?"));

while (confirm("Вы хотите просмотреть данные пользователей?")) {
  let input = prompt("Введите команду: name, age, tg, numberPhone или profile");
  switch (input) {
    case 'name':
      for (let i = 0; i < people.length; i++) {
        console.log(people[i].name);
      }
      continue;
    case "age":
      for (let i = 0; i < people.length; i++) {
        console.log(people[i].age);
      }
      continue;
    case "tg":
      for (let i = 0; i < people.length; i++) {
        console.log(people[i].tg);
      }
      continue;
    case "numberTph":
      for (let i = 0; i < people.length; i++) {
        console.log(people[i].numberPhone);
      }
      continue;

    case "profile":
      for (let i = 0; i < people.length; i++) {
        console.log(people[i]);
      }
      continue;

    default: {
      console.error('Неверная команда');
      continue;
    }
  }
}
console.log("Всего хорошего!");









