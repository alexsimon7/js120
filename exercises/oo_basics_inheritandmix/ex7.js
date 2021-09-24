const towMixin = {
  tow() {
    console.log("I can tow a trailer!");
  }
}


// //ES6 Class
// class Truck {}

// Object.assign(Truck.prototype, towMixin);

// class Car {}

// Constructors and Prototypes

// function Truck() {};

// Object.assign(Truck.prototype, towMixin)

// function Car(){};

//OLOO

let truckPrototype = {};

let carPrototype = {};

Object.assign(truckPrototype, towMixin);

let truck = Object.create(truckPrototype);
truck.tow();
