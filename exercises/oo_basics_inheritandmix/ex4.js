//ES6 Class

// class Vehicle {
//   startEngine() {
//     return 'Ready to go!';
//   }
// }

// class Truck extends Vehicle {
//   startEngine(speed) {
//     return `${super.startEngine()} Drive ${speed}, please!`);
//   }
// }

// //Constructors and Prototypes

// function Vehicle() {};

// Vehicle.prototype.startEngine = function() {
//   return 'Ready to go!';
// }

// function Truck() {};

// Truck.prototype = Object.create(Vehicle.prototype);
// Truck.prototype.constructor = Truck;

// Truck.prototype.startEngine = function(speed) {
//   return `${Vehicle.prototype.startEngine()} Drive ${speed}, please!`;
// }

//OLOO

// let vehiclePrototype = {
//   startEngine() {
//     return 'Ready to go!';
//   },
// }

// let truckPrototype = Object.create(vehiclePrototype);

// truckPrototype.startEngine = function(speed) {
//   return `${vehiclePrototype.startEngine()} Drive ${speed}, please!`;
// }

let truck1 = Object.create(truckPrototype);
console.log(truck1.startEngine('fast'));

let truck2 = Object.create(truckPrototype);
console.log(truck2.startEngine('slow'));
