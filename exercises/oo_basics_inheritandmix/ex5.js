const walkMixin = {
  walk() {
    return "Let's go for a walk!";
  }
}


// //ES6 Class
// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   greet() {
//     return `Hello! My name is ${this.name}!`;
//   }
// }

// //Constructors and Prototypes
// function Cat(name) {
//   this.name = name;
// }

// Cat.prototype.greet = function() {
//   return `Hello! My name is ${this.name}!`;
// }

//OLOO
// let catPrototype = {
//   init(name) {
//     this.name = name;
//     return this;
//   },

//   greet() {
//     return `Hello! My name is ${this.name}!`;
//   },
// }

//Factory Function

function cat(name) {
  return {
    name,
    greet() {
      return `Hello! My name is ${this.name}!`;
    },
  }
}
let kitty = cat("Sophie");
Object.assign(kitty, walkMixin);
console.log(kitty.greet());
console.log(kitty.walk());
