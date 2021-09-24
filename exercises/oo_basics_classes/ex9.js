//ES6 Class

// class Cat {
//   static genericGreeting() {
//     console.log(`Hello! I'm a cat!`);
//   }
// }

//Constructors and Prototypes

// function Cat() {};

// Cat.genericGreeting = function() {
//   console.log(`Hello! I'm a cat!`);
// };

//OLOO

let catPrototype = {
  genericGreeting() {
    console.log(`Hello! I'm a cat!`);
  }
}

catPrototype.genericGreeting();




