// Программа, которая создает новые обьекты на основе прототипа person, используя данные, вводимые пользователем. Также выводит нужные блоки данных при вооде соответствующей команды//
/**
 * 
 * @param {string} message 
 * @returns {string}
 */
function getName(message) {
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
function getNumber(message) {
  let inputNumber;
  do {
    let inputNumber = +(prompt(message + ":") ?? "-");
    if (!isNaN(inputNumber)) return inputNumber;

    console.error("Нужно ввести число ");
  } while (true);
}


/**
 * 
 * @param {string} message 
 * @returns {string}
 */

function getTelegramNick(message) {
  let input = "@" + prompt(message);
  return input;
}

/**
 * 
 * @param {string} message 
 * @returns {string}
 */

function inputNumber(message) {
  let input = "+" + getNumber(message);
  return input;
}

let person = {
  constructor: function Person() {
    this.name = getName("Введите имя");
    this.age = getNumber("Введите возраст");
    this.tg = getTelegramNick("Введите ник в телеграмм");
    this.numberPhone = inputNumber("Введите номер телефона, без + ");
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
  let input = prompt("Введите команду: name, age, tg, numberPhone, profile или exit");
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
    case "numberPhone":
      for (let i = 0; i < people.length; i++) {
        console.log(people[i].numberPhone);
      }
      continue;

    case "profile":
      for (let i = 0; i < people.length; i++) {
        console.log(people[i]);
      }


    case "exit":
      break;

    default: {
      console.error('Неверная команда');
      continue;
    }
  }
}

deleteusers:
while (confirm("Выхотите удалить данные?")) {
  console.log('Данные всех пользователей:');
  console.table(people);

  let user = prompt("Выберите пользователя, данные которoго хотите удалить, по нумерации в таблице:");
  console.log(user);

  if (user === "exit"):
    break;
  if (
    people.splice(user, 1);
  console.log(`Удаление  пользователя ${user} прошло успешно.`);
  continue deleteusers;



}





console.log("Всего хорошего!");









