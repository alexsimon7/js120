
// ES6 Class
// class Person {
//   constructor(name = 'John Doe') {
//     this.name = name;
//   }
// }

//Constructors and Prototypes
// function Person(name = 'John Doe') {
//   this.name = name;
// }

//OLOO

// let personPrototype = {
//   init(name = 'John Doe') {
//     this.name = name;
//     return this;
//   }
// }

// Factory Function

function cat(name = 'John Doe') {
  return {
    name,
  }
}


let person1 = cat();
let person2 = cat("Pepe");

console.log(person1.name); // John Doe
console.log(person2.name); // Pepe
