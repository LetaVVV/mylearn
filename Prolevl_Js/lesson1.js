const student = {
  name: "Alexey",
  age: 20,
  course: "3rd year"
};
console.log(student.course);
student.age = 21;
console.log(student);
//Выведите в консоль значение свойства`course`.Затем измените значение свойства `age` на 21 и снова выведите весь объект.
//### 3. Добавление нового свойства
//Создайте объект `phone` с двумя свойствами: `brand` и`model`.Затем добавьте третье свойство `color` и присвойте ему значение.Выведите объект в консоль.

const phone = {
  brand: "samsung",
  model: 16,
};
phone.color = "blue";
console.log(phone);



//### 4. Удаление свойства
//Создайте объект:

const house = {
  floors: 2,
  material: "brick",
  area: 120
};
delete house.material;
console.log(house);

//Удалите свойство `material` из объекта и выведите оставшийся объект в консоль.



//### 5. Проверка наличия свойства
//Дан объект:

const human = {
  name: "Sergey",
  age: 30
};
console.log('isWorking' in human);
console.log('name' in human);

//С помощью оператора **in** проверьте, есть ли свойства `isWorking` и `name` в объекте.Результаты выведите в консоль.;

let house = {
  location: {
    city: "Сочи",
    street: "Ривьерская"
  },
  floors: 2
};

console.log(house.location.street);

//### Задача 6: Проверка существования свойства
//Напишите код, который проверяет, существует ли у вложенного объекта location свойство street, и выведите результат в консоль.

let employee = {
  name: "Мария",
  position: "Менеджер",
  contact: {
    phone: "555-1234",
    email: "maria@example.com"
  }
};

const copyEmployee = JSON.parse(JSON.stringify(employee));
copyEmployee.contact.phone = 123;
console.log(copyEmployee.contact);


//### Задача 7: Копирование вложенного объекта;
//Напишите код, который сделает "глубокую копию" объекта employee (то есть вложенный объект contact также должен быть скопирован). Затем измените в копии номер телефона (phone) и проверьте, что оригинальный объект не изменился.

let product = {
  name: "Ноутбук",
  details: {
    manufacturer: "Dell",
    warranty: "2 года",
    price: 50000
  }
};

for (const key in product.details) {
  if (product.details.hasOwnProperty(key)) {
    console.log(`${key} : ${product.details[key]}`);
  }
}

//### Задача 8: Перебор свойств во вложенном объекте
//Напишите цикл, который выведет все свойства (и их значения) вложенного объекта details в консоль.

let users = [
  { name: "Анна", email: "anna@example.com", address: { city: "Казань", street: "Пушкина" } },
  { name: "Виктор", email: "victor@example.com", address: { city: "Уфа", street: "Ленина" } },
  { name: "Сергей", email: "sergey@example.com", address: { city: "Сочи", street: "Горького" } }
];

for (let i = 0; i < users.length; i++) {
  const { name, email, address: { city } } = users[i];
  console.log(`Имя: ${name}, Email: ${email},Город: ${city}`);
}

//вложенная деструктуризация

//### Задача 9: Вложенные объекты в массиве
//Выведите всех пользователей в формате:
//Имя: [name], Email: [email], Город: [city]

let data = [
  { id: 1, value: "Apple" },
  { id: 2, value: "Banana" },
  { id: 3, value: "Cherry" }
];

const result = {};

for (let i = 0; i < data.length; i++) {
  let item = data[i];
  result[item.id] = { value: item.value };
}
console.log(result);

//### Задача 10: Создание вложенной структуры из массива
//Используя цикл, создайте объект, где ключи — это id, а значения — это объекты с полем value. То есть результат должен быть следующим:
//let result = {
//1: { value: "Apple"; },
//2: { value: "Banana"; },
//3: { value: "Cherry"; }
//};



