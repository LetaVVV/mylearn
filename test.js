const Person = {
  name: "Roman",
  age: 31,
  tg: "vikicimpa",
  numberTph: 493877628756,
};
const Person2 = { ...Person };


let person = {
  Person() {
    this.name = prompt("Введите имя");

    return this;
  }
};
console.log(this);
