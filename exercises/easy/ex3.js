//ES6 Class Syntax

/*
class Cat {
  constructor(name) {
    this.name = name;
  }
  speaks() {
    return `${this.name} says meowwww.`;
  }
}


// Constructors and Prototypes

function Cat(name) {
  this.name = name;
}

Cat.prototype.speaks = function() {
  return `${this.name} says mewowww.`;
}
*/

// OLOO

let catPrototype = {
  init(name) {
    this.name = name;
    return this;
  },

  speaks() {
    return `${this.name} says mewowww.`;
  }

}

let fakeCat =  Object.create(catPrototype);
console.log(catPrototype.isPrototypeOf(fakeCat)); // logs true
console.log(fakeCat.name);           // logs undefined
console.log(fakeCat.speaks());       // logs undefined says meowwww.
