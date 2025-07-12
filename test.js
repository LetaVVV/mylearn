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