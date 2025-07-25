//### 11. Создание объекта с массивом
//Создайте объект bookstore с двумя свойствами: name и books.
// Значение books должно быть массивом строк(названий книг).
// Выведите название второго элемента массива books в консоль.
const bookstore = {
  name: "Книжная лавка",
  books: [
    "JavaScript: The Good Parts",
    "You Don't Know JS",
    "Eloquent JavaScript",
    "Clean Code",
    "The Pragmatic Programmer"
  ]
};

console.log(bookstore.books[1]);


//### 12. Изменение вложенного свойства
//Создайте объект car, который содержит свойства make, model и details.details должен быть
//  вложенным объектом с свойствами year и color.
// Измените цвет автомобиля и выведите весь объект в консоль.

let car = {
  make: "Toyota",
  model: "Toyota",
  details: {
    details: {
      year: 1995,
      color: "yellow",
    }
  }
};
car.details.details.color = "red";
console.log(car);

//### 13. Объект с методом, принимающим параметры
//Создайте объект calculator с методом add, который принимает два параметра
//  и возвращает их сумму.Вызовите метод с двумя числами и выведите результат в консоль.


const calculator = {
  add: function add() {
    let number1 = +(prompt("Введите первое число..") ?? "0");
    let number2 = +(prompt("Введите второе число..") ?? "0");
    let summ = number1 + number2;
    console.log(summ);
    return summ;
  }
};
calculator.add();


//### 14. Копирование объекта с помощью оператора распространения
//Создайте объект person с произвольными свойствами.
// Создайте его копию с помощью оператора распространения(...).
// Добавьте новое свойство city в копию и убедитесь, что оригинальный объект не изменился.

const person = {
  name: "Masha",
  age: 21,
};
const copyPerson = { ...person };
copyPerson.city = "Moskov";
console.log(person);
console.log(copyPerson);


//### 15. Условная проверка на наличие свойства
//Создайте объект device с полями type, brand, и model.
// Проверьте, есть ли в объекте свойство brand и выведите соответствующее сообщение в консоль.

const device = {
  type: "phone",
  brand: "IPhone",
  model: 12345,
};
const monitoring = "brand" in device;

if (monitoring) {
  console.log(`В обьекте device есть свойство brand`);
} else { console.log(`В обьекте device нет свойства brand`); }


//### 16. Удаление нескольких свойств
//Создайте объект profile с тремя свойствами: username, email, и password.
// Удалите свойства email и password, затем выведите оставшийся объект в консоль.

const profile = {
  username: "leta",
  email: "leta@mail.com",
  password: 12345
};
console.log(profile);
delete profile?.email;
delete profile?.password;
console.log(profile);

//### 17. Вложенные массивы
//Создайте объект playlist, который содержит название плейлиста(строка) и массив из объектов песен.
// Каждый объект песни должен содержать свойства title и duration.
// Выведите название первой песни в консоль.

const playlist = {
  name: "Summer mood",
  songs: [
    {
      title: "Sailor Song",
      duration: 3.20
    },
    {
      title: "To Build A Home ",
      duration: 2.90
    }
  ]
};
console.log(playlist.songs[0]?.title);

//### 18. Итерация по ключам и значениям
//Создайте объект fruit с тремя фруктами и их калорийностью.
// Используйте цикл for...of для выведения каждого фрукта и его калорийности.

const fruit = {
  banana: 91,
  apple: 47,
  lemon: 34
};
for (const key of Object.keys(fruit)) {
  console.log(`${key} : ${fruit[key]}`);
};

//### 19. Проверка типа значения свойства
//Создайте объект profile, содержащий свойства age, isActive и name.
// Проверьте, является ли тип свойства isActive логическим(boolean) и выведите результат в консоль.

const profile = {
  name: "Lena",
  age: 30,
  isActive: true
};
const monitoring = (typeof profile.isActive === 'boolean');

if (monitoring) {
  console.log("isActive является логичесским свойством");
} else {
  console.log("isActive не является логичесским свойством");
};

//### 20. Создание объекта с вычисляемыми свойствами
//Создайте объект rectangle, у которого будут свойства width и height,
//  и вычисляемое свойство area, равное произведению ширины и высоты.
// Выведите значение площади в консоль.;

const rectangle = {
  width: 20,
  height: 30,
  get area() {
    return this.height * this.width;
  }
};
console.log(rectangle.area);