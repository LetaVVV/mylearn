class Koordinates {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    return this;
  }
  createNumberCoord() {
    const resultNum = [];
    for (const xNum of this.x) {
      for (const yNum of this.y) {
        resultNum.push(parseInt(`${xNum}${yNum}`));
      }
    }

    return resultNum;
  }
}


const coords = new Koordinates([10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
  [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]);

console.log(coords.createNumberCoord());


const cell = {
  cellCheckEmpty(index) {
    if (coords[index] - (9 / 10) === coords[index] - 1) {
      const empty = true;
      return empty;
    }
    if (coords[index] === )
  }
};