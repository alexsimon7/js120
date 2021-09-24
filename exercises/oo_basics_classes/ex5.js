//ES6 Classes

// class Cat {
//   constructor(name) {
//     this.name = name;
//     console.log(`Hello! My name is ${this.name}!`);
//   }
// }

//Constructors and Prototypes

// function Cat(name) {
//   this.name = name;
//   console.log(`Hello! My name is ${this.name}!`);
// }


//OLOO

// let catPrototype = {
//   init(name) {
//     this.name = name;
//     console.log(`Hello! My name is ${this.name}!`);
//     return this;
//   }
// }

//Factory Functions

function cat(name) {
  return {
    name,
    hello(){
      console.log(`Hello! My name is ${this.name}!`);
    },
  };
}


let kitty = cat('Sophie');
kitty.hello();