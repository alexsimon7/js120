//ES6 Class

// class Vehicle {
//   constructor(year) {
//     this.year = year;
//   }
// }

// class Truck extends Vehicle {
//   constructor(year) {
//     super(year);
//     this.startEngine();
//   }

//   startEngine() {
//     console.log('Ready to go!');
//   }

// }

//Constructors and Prototypes

// function Vehicle(year) {
//   this.year = year;
// }

// function Truck(year) {
//   Vehicle.call(this, year);
//   this.startEngine();
// }

// Truck.prototype = Object.create(Vehicle.prototype);
// Truck.prototype.constructor = Truck;

// Truck.prototype.startEngine = function() {
//   console.log('Ready to go!');
// }

//OLOO

let vehiclePrototype = {
  init(year) {
    this.year = year;
    return this;
  },
}

let truckPrototype = Object.create(vehiclePrototype);

truckPrototype.init = function(year) {
  vehiclePrototype.init.call(this, year);
  this.startEngine();
  return this;
}

truckPrototype.startEngine = function() {
  console.log('Ready to go!');
}

let truck = Object.create(truckPrototype).init(2003);
console.log(truck.year); // 2003
