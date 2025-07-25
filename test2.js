// Создайте класс Person, который имеет свойство name и метод sayHello.
// Метод должен выводить в консоль строку: Привет, меня зовут < имя >
//  (имя берется из свойства name). Создайте объект этого класса и вызовите метод.

class Person {
  constructor(name) {
    this.name = name;
    return this;
  }
  sayHello(name) {
    console.log("Привет, меня зовут" + " " + this.name);
  }
}
const anotherPerson = new Person("Вася");

anotherPerson.sayHello();


// ### 2. Конструктор с несколькими параметрами
// Создайте класс Rectangle, который принимает два параметра — ширину(width)
//  и высоту(height).
// Добавьте метод getArea, который рассчитывает площадь прямоугольника.
// Создайте объект прямоугольника с шириной 10 и высотой 20,
//  затем вызовите метод и выведите площадь.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    return this;
  }
  getArea(width, height) {
    let s = +(this.width) * +(this.height);
    console.log(s);
  }
}

const sRectangle = new Rectangle(10, 20);

sRectangle.getArea();


// ### 3. Наследование классов
// Создайте класс Animal с конструктором и методом makeSound,
//  который выводит строку Животное издает звук.
// Затем создайте класс Dog, который наследуется от Animal
// и переопределяет метод makeSound, чтобы вывести строку Собака лает.
// Создайте объект обеих классов и вызовите их методы.


class Animal {
  constructor(animal) {
    this.animal = animal ?? "Животное";
    return this;
  }
  makeSound() {
    console.log(this.animal + " " + "издает звук");
  }
}

class Dog extends Animal {
  makeSound(animal) {
    console.log(`${this.animal} лает`);
  }
}
const dog = new Dog("Собака");
const someAnimal = new Animal();






someAnimal.makeSound();
dog.makeSound();
