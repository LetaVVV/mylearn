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

// ---

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


// ---

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

// ---

// ### 4. Расширение методов с использованием`super`
// Используйте пример из предыдущего задания.
// Создайте в классе Dog метод describe,
//  который вызывает метод makeSound из родительского класса(Animal) через super.
// Проверьте, как это работает.

// ---

// ### 5. Статические методы
// Создайте класс MathHelper с методом static add(a, b),
//  который возвращает сумму двух чисел.
// Продемонстрируйте использование этого метода без создания объекта класса.

// ---

// ### 6. Геттеры и сеттеры
// Создайте класс Circle, у которого есть свойство radius.
// Реализуйте геттер diameter, который возвращает диаметр круга(2 * радиус),
//  и сеттер diameter, который изменяет радиус(деля переданное значение на 2).
// Проверьте корректность работы геттера и сеттера.

// ---

// ### 7. Проверка на instanceof
//   Создайте два класса: Car и Motorcycle.
// Создайте объекты для обоих классов, затем проверьте,
//  являются ли созданные объекты экземплярами этих или других классов,
//  используя оператор instanceof.

// ---

// ### 8. Поля классов
// Добавьте приватное поле _balance в класс BankAccount,
// которое нельзя использовать напрямую из - за его приватности
// (через # перед названием свойства).
// Добавьте методы deposit(amount) и getBalance(),
//  которые позволяют изменять и получать баланс безопасно.

// ---

// ### 9. Работа с массивом объектов
// Создайте класс Student, где будут свойства name и grade(оценка).
// Создайте массив объектов этого класса для нескольких учеников.
// Реализуйте метод, который выводит в консоль имена всех учеников с оценкой выше 75.;

// ---

// ### 10. Абстрактные классы
// Создайте базовый класс Shape с методом getArea(),
// который должен выдавать ошибку(например, throw Error('Метод должен быть переопределен')),
//  если используется напрямую.Затем создайте дочерние классы Square и Triangle,
//  которые реализуют метод getArea() для квадратов и треугольников соответственно.
// Проверьте их работу.;