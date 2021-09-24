//ES6 Class Syntax
/*
class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Cat extends Pet {
  constructor(name, age, fur) {
    super(name, age);
    this.fur = fur;
  }

  info() {
    return `My cat ${this.name} is ${this.age} years old and has ${this.fur} fur.`; 
  }
}
*/

//Constructors and Prototypes
/*
function Pet(name, age) {
  this.name = name;
  this.age = age;
}

function Cat(name, age, fur) {
  Pet.call(this, name, age);
  this.fur = fur;
}

Cat.prototype.info = function() {
  return `My cat ${this.name} is ${this.age} years old and has ${this.fur} fur.`;
}
*/


//OLOO

/*
let PetPrototype = {
  init(name, age) {
    this.name = name;
    this.age = age;
    return this;
  },
}

let CatPrototype = Object.create(PetPrototype);

CatPrototype.init = function(name, age, fur) {
  this.name = name;
  this.age = age;
  this.fur = fur;
  return this;
}

CatPrototype.info = function() {
  return `My cat ${this.name} is ${this.age} years old and has ${this.fur} fur.`;
}
*/

//Object Factory

function pet(name, age) {
  return {
    name,
    age,
  };
}

function cat(name, age, fur) {
  let cat = pet(name, age);
  cat.fur = fur;
  cat.info = function() {
    return `My cat ${this.name} is ${this.age} years old and has ${this.fur} fur.`;
  }
  return cat; 
}

let pudding = cat('Pudding', 7, 'black and white');
let butterscotch = cat('Butterscotch', 10, 'tan and white');

console.log(pudding.info());
console.log(butterscotch.info());
