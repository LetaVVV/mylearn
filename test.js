const Person = {
  name: "Roman",
  age: 31,
  tg: "vikicimpa",
  numberTph: 493877628756,
};
const Person2 = { ...Person };


let person = {
  constructor: function Person() {
    this.name = prompt("Введите имя");
    this.age = number("Введите возраст");
    this.tg = prompt("Введите ник в телеграмм");
    this.numberTph = number("Введите номер телефона");
    return this;
  }
};
let person2 = { ...}

