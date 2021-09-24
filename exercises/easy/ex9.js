// ES6 Class Syntax

// const walkMixin = {
//   walk() {
//     return `${this.name} ${this.gait()} forward`;
//   }
// };

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   gait() {
//     return "strolls";
//   }
// }

// Object.assign(Person.prototype, walkMixin);

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   gait() {
//     return "saunters";
//   }
// }

// Object.assign(Cat.prototype, walkMixin);

// class Cheetah {
//   constructor(name) {
//     this.name = name;
//   }

//   gait() {
//     return "runs";
//   }
// }

// Object.assign(Cheetah.prototype, walkMixin);

//Constructors and Prototypes

// const walkMixin = {
//   walk() {
//     return `${this.name} ${this.gait()} forward`
//   },
// }


// function Person(name) {
//   this.name = name;
// }

// Person.prototype.gait = function() {
//   return 'strolls';
// }

// Object.assign(Person.prototype, walkMixin);

// function Cat(name) {
//   this.name = name;
// }

// Cat.prototype.gait = function() {
//   return 'saunters'
// }
// Object.assign(Cat.prototype, walkMixin);

// function Cheetah(name) {
//   this.name = name;
// }

// Cheetah.prototype.gait = function() {
//   return 'runs';
// }
// Object.assign(Cheetah.prototype, walkMixin);

// OLOO


// const walkMixin = {
//   walk() {
//     return `${this.name} ${this.gait()} forward`
//   },
// }

// let personPrototype = {
//   init(name) {
//     this.name = name;
//     return this;
//   },

//   gait() {
//     return 'strolls';
//   }
// }

// Object.assign(personPrototype, walkMixin);

// let catPrototype = {
//   init(name) {
//     this.name = name;
//     return this;
//   },

//   gait() {
//     return 'saunters';
//   }
// }

// Object.assign(catPrototype, walkMixin);

// let cheetahPrototype = {
//   init(name) {
//     this.name = name;
//     return this;
//   },

//   gait() {
//     return 'runs';
//   }
// }

// Object.assign(cheetahPrototype, walkMixin);


// Object Factory

const walkMixin = {
  walk() {
    return `${this.name} ${this.gait()} forward`
  },
}

function person(name) {
  return {
    name,
    gait() {
      return 'strolls';
    }
  }
}

let mike = person('Mike');
Object.assign(mike, walkMixin);

console.log(mike.walk());
// "Mike strolls forward"

function cat(name) {
  return {
    name,
    gait() {
      return 'strolls';
    },
  };
}


let kitty = cat('Kitty');
Object.assign(kitty, walkMixin);

console.log(kitty.walk());
// "Kitty saunters forward"

function cheetah(name) {
  return {
    name,
    gait() {
      return 'runs'
    },
  };
}

let flash = cheetah("Flash");
Object.assign(flash, walkMixin);

console.log(flash.walk());
// "Flash runs forward"
