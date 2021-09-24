//ES6 Classes

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   greet() {
//     console.log(`Hello! My name is ${this.name}!`);
//   }
// }

//Constructors Prototypes

// function Cat(name) {
//   this.name = name;
// }

// Cat.prototype.greet = function() {
//   console.log(`Hello! My name is ${this.name}!`);
// }

//OLOO

// let catPrototype = {
//   init(name) {
//     this.name = name;
//     return this;
//   },

//   greet() {
//     console.log(`Hello! My name is ${this.name}!`);
//   },
// }

//Function Factory

function cat(name) {
  return {
    name,
    greet() {
      console.log(`Hello! My name is ${this.name}!`);
    },
  };
}


let kitty = cat('Sophie');
kitty.greet();
