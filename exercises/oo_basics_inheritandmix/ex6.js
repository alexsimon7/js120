const swimMixin = {
  swim() {
    return `${this.name} is swimming.`;
  }
}

//ES6 Class
// class Fish {
//   constructor(name) {
//     this.name = name;
//   }
// }

// Object.assign(Fish.prototype, swimMixin);

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }

// Object.assign(Dog.prototype, swimMixin);


// class Maltese extends Dog {}

//Constructors and Prototypes

// function Fish(name) {
//   this.name = name;
// }

// Object.assign(Fish.prototype, swimMixin);

// function Dog(name) {
//   this.name = name;
// }

// Object.assign(Dog.prototype, swimMixin);

// function Maltese(name) {
//   Dog.call(this, name);
// }

// Maltese.prototype = Object.create(Dog.prototype);
// Maltese.prototype.constuctor = Maltese;

//OLOO

let fishPrototype = {
  init(name) {
    this.name = name;
    return this;
  },
}

Object.assign(fishPrototype, swimMixin);

let dogPrototype = {
  init(name) {
    this.name = name;
    return this;
  }
}

Object.assign(dogPrototype, swimMixin);

let maltesePrototype = Object.create(dogPrototype);

let dog1 = Object.create(maltesePrototype).init("Buddy", 5);
let fish1 = Object.create(fishPrototype).init("Nemo");

console.log(dog1.swim());
console.log(fish1.swim());

