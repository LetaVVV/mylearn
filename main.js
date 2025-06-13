let greet = function () {
  return 'Привет! Меня зовут,' + this.name;
};


let person = {
  name: 'Leta',
  age: 29,
  greet: greet
};

let anotherPerson = {
  name: 'Рома',
  age: '31',
  greet: greet
};
console.log(person.greet());
console.log(anotherPerson.greet());
