//ES6 Class
// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   rename(newName) {
//     this.name = newName;
//   }
// }

//Prototypes and Constructors

// function Cat(name) {
//   this.name = name;
// }

// Cat.prototype.rename = function(newName) {
//   this.name = newName;
// }

//OLOO

// let catPrototype = {
//   init(name) {
//     this.name = name;
//     return this;
//   },

//   rename(newName) {
//     this.name = newName;
//   }
// }

//Factory Function

function cat(name) {
  return {
    name,
    rename(newName) {
      this.name = newName;
    },
  };
}



let kitty = cat('Sophie');
console.log(kitty.name); // Sophie
kitty.rename('Chloe');
console.log(kitty.name); // Chloe
