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
//Используя цикл, создайте объект, где ключи — это id,
// а значения — это объекты с полем value. То есть результат должен быть следующим:
//let result = {
//1: { value: "Apple"; },
//2: { value: "Banana"; },
//3: { value: "Cherry"; }
//};
