
const obj = {
  abc: 123,
  test: function () {
    console.log(this);
  }
};


const obj2 = new obj.test();

const obj3 = Object.create(obj.test.prototype);
obj.test.call(obj3);


console.log(obj2.__proto__ === obj.test.prototype);
console.log(obj3.__proto__ === obj.test.prototype);


// {} -> {}.__proto__ -> Object.prototype -> .prototype.__proto__ -> null
// function(){} -> function(){}.__proto__ -> Object.prototype -> .prototype.__proto__ -> null
// function(){}.prototype -> 

function Man(name, age) {
  this.name = name;
  this.age = age;
}

Man.prototype.sayHello = function sayHello() {
  console.log(this.name, this.age);
};

const roman = new Man('Roman', 31);

roman.sayHello();


class Man2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(this.name, this.age);
  }
}

const roman2 = new Man2('Roman', 31);

roman2.sayHello();


class SuperMan extends Man2 {

  constructor(name, age, skills) {
    super(name, age);
    this.skills = skills;
  }

  sayHello() {
    super.sayHello();
    console.log(this.skills);
  }
}

const roman3 = new SuperMan('Roman', 31, ['JS', 'TS']);

roman3.sayHello();


SuperMan.prototype.__proto__; // Man2.prototpe

console.log(SuperMan.prototype.__proto__ === Man2.prototype);


const obj4 = {['this']: 123}

obj4.this 