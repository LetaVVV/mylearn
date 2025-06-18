// Программа, которая создает новые обьекты на основе прототипа person, используя данные, вводимые пользователем. Также выводит нужные блоки данных при вооде соответствующей команды//

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

let person = {
  constructor: function Person() {
    this.name = prompt("Введите имя");
    this.age = number("Введите возраст");
    this.tg = prompt("Введите ник в телеграмм");
    this.numberTph = number("Введите номер телефона");
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
  let input = prompt("Введите команду: name, age, tg, numberTph или profile");
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
        console.log(people[i].numberTph);
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
console.log("Всего хорошего!")







