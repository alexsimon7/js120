//ES6 Class Syntax

// class Person {
//   greeting(text) {
//     console.log(text);
//   }
// }

// class Shouter extends Person {
//   greeting(text) {
//     super.greeting((text.toUpperCase()));
//   }
// }

// let person = new Person();
// let shouter = new Shouter();

// person.greeting('Hello my friend.'); // Hello. It's very nice to meet you
// shouter.greeting('Hello my friend.');

// Constructors and Prototypes

// function Person() {};

// Person.prototype.greeting = function(text) {
//   console.log(text);
// };

// function Shouter() {
//   Person.call(this);
// };

// Shouter.prototype = Object.create(Person.prototype);
// Shouter.prototype.constructor = Shouter;

// Shouter.prototype.greeting = function(text) {
//   Person.prototype.greeting.call(this, text.toUpperCase());
// }

// OLOO

// let personPrototype = {
//   greeting(text) {
//     console.log(text);
//   }
// }

// let shouterPrototype = Object.create(personPrototype);

// shouterPrototype.greeting = function(text) {
//   console.log(text.toUpperCase());
// }

// Factory Function

function person() {
  return {
    greeting(text) {
      console.log(text);
    } 
  };
}

function shouter() {
  let shouter = person.call(this);
  shouter.greeting = function(text) {
    console.log(text.toUpperCase());
  };
  return shouter;
}


let person1 = person();
let shouter1 = shouter();

person1.greeting("Hello. It's very nice to meet you."); // Hello. It's very nice to meet you
shouter1.greeting("Hello my friend."); // HELLO MY FRIEND.