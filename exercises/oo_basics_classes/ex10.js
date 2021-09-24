
//ES6 Classes
// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   static genericGreeting() {
//     console.log("Hello! I'm a cat!");
//   }

//   personalGreeting() {
//     console.log(`Hello! My name is ${this.name}!`);
//   }
// }

//Constructors and Prototypes

// function Cat(name) {
//   this.name = name;
// }

// Cat.genericGreeting = function() {
//   console.log("Hello! I'm a cat!");
// }

// Cat.prototype.personalGreeting = function() {
//   console.log(`Hello! My name is ${this.name}!`);
// }

//OLOO

let catPrototype = {
  init(name) {
    this.name = name;
    return this;
  },

  genericGreeting() {
    console.log("Hello! I'm a cat!");
  },

  personalGreeting() {
    console.log(`Hello! My name is ${this.name}!`);
  }
}


let kitty = Object.create(catPrototype).init("Sophie");
catPrototype.genericGreeting();
kitty.personalGreeting();
