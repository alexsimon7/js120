// ES6 Class Syntax

/*
class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, 'cat', status);
  }

  introduce() {
    return super.introduce() + ' Meow meow!';
  }
}


class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, 'dog', status);
    this.master = master;
  }

  greetMaster() {
    return `Hello ${this.master}! Woof, woof!`;
  }
}


//Constructors and Prototypes

function Animal(name, age, legs, species, status) {
  this.name = name;
  this.age = age;
  this.legs = legs;
  this.species = species;
  this.status = status;
}

Animal.prototype.introduce = function() {
  return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
}

function Cat(name, age, status) {
  Animal.call(this, name, age, 4, 'cat', status);
}

Cat.prototype = Object.assign(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.introduce = function() {
  return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.` + ' Meow meow!';
}

function Dog(name, age, status, master) {
  Animal.call(this, name, age, 4, 'dog', status);
  this.master = master;
}

Dog.prototype = Object.assign(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.greetMaster = function() {
  return `Hello ${this.master}! Woof, woof!`;
}


//OLOO

let animalPrototype = {
  init(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
    return this;
  },

  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
  }
}

let catPrototype = Object.create(animalPrototype);

catPrototype.init = function(name, age, status) {
  animalPrototype.init.call(this, name, age, 4, 'Cat', status);
  return this;
}


catPrototype.introduce = function() {
  return animalPrototype.introduce.call(this) + 'Meow meow!'
}

let cat = Object.create(catPrototype).init("Pepe", 2, "happy");
console.log(cat.introduce());

let dogPrototype = Object.create(animalPrototype);

dogPrototype.init = function(name, age, status, master) {
  animalPrototype.init.call(this, name, age, 4, 'Dog', status);
  this.master = master;
  return this;
}

dogPrototype.greetMaster = function() {
  return `Hello ${this.master}! Woof, woof!`;
}

let dog = Object.create(dogPrototype).init('Ellie', 12, 'nervous', 'Bob');
console.log(dog.introduce());
console.log(dog.greetMaster());
*/

// Function Object Factory

function animal(name, age, legs, species, status) {
  return {
    name,
    age,
    legs,
    species,
    status,
    introduce() {
      return `Hello, my name is ${this.name}, I am ${this.age} years old and ${this.status}.`;
    }
  };
}

function cat(name, age, status) {
  let cat = animal(name, age, 4, 'Cat', status);
  cat.introduce = function() {
    return `Hello, my name is ${this.name}, I am ${this.age} years old and ${this.status}.` + ' Meow mewo!';
  };
  return cat;
}

let cat1 = cat("Pepe", 2, "happy");
console.log(cat1.introduce());

function dog(name, age, status, master) {
  let dog = animal(name, age, 4, 'Dog', status);
  this.master = master;
  dog.greetMaster = () => {
    return `Hello ${this.master}! Woof, woof!`;
  }
  return dog;
}

let dog1 = dog('Ellie', 12, 'nervous', 'Bob');
console.log(dog1.introduce());
console.log(dog1.greetMaster());