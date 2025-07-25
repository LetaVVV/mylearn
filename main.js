class Coordinates {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
  }
  checkIndex() {
    this.x.forEach((element, index) => {
      if (element === index) {
        console.log(`Элемент X[${index}] = ${element} равен своему индексу`);
      }
    });

    this.y.forEach((element, index) => {
      if (element === index) {
        console.log(`Элемент Y[${index}] = ${element} равен своему индексу`);
      }
    });

    return this;
  }
  notNumber(x, y) {
    return (typeof x === 'number' && typeof y === 'number');
  };
  map(x, y) {
    get massivZ(x, y){
      return this.x.map((x, x) => [y, this.y[y]]);
    }
  }
};

const map = new Coordinates([0, 1, 2, 3, 4], [0, 1, 2, 3, 4]);







console.log(map.checkIndex(1, 3)); // true
console.log(map.checkIndex(0, 2)); // true
console.log(map.checkIndex(0, 3)); // false