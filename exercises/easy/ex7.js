// class Something {
//   constructor() {
//     this.data = "Hello";
//   }

//   dupData() {
//     return this.data + this.data;
//   }

//   static dupData() {
//     return "ByeBye";
//   }
// }

// let thing = new Something();
// console.log(Something.dupData());
// console.log(thing.dupData());


/*
The above code will log 'ByeBye' and 'HelloHello'.
*/


// Constructors and Prototypes

// function Something() {
//   this.data = 'Hello';
//   Something.dupData = function() {
//     return 'ByeBye';
//   }
// }

// Something.prototype.dupData = function() {
//   return this.data + this.data;
// }

// let thing = new Something();
// console.log(Something.dupData());
// console.log(thing.dupData());


// // OLOO

// let somethingPrototype = {
//   init() {
//     this.data = 'Hello';
//     return this;
//   },
//   dupData() {
//     return this.data + this.data;
//   },
// }

// let thing = Object.create(somethingPrototype).init();
// console.log(thing.dupData());

// Factory Functions

function something() {
  return {
    data: 'Hello',
    dupData() {
      return this.data + this.data;
    },
  };
}

let thing = something();
console.log(thing.dupData());