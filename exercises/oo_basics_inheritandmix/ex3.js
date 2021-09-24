//ES6 Class
// class Vehicle {
//   constructor(year) {
//     this.year = year;
//   }
// }

// class Truck extends Vehicle {
//   constructor(year, bedType) {
//     super(year);
//     this.bedType = bedType;
//   }
// }

// class Car extends Vehicle {}

//Constructors and Prototypes

// function Vehicle(year) {
//   this.year = year;
// }

// function Truck(year, bedType) {
//   Vehicle.call(this, year);
//   this.bedType = bedType;
// }

// Truck.prototype = Object.create(Vehicle.prototype);
// Truck.prototype.constructor = Truck;



// function Car(year) {
//   Vehicle.call(this, year);
// }

// Car.prototype = Object.create(Vehicle.prototype);
// Car.prototype.constructor = Car;

//OLOO

let vehiclePrototype = {
  init(year) {
    this.year = year;
    return this;
  }
}

let truckPrototype = Object.create(vehiclePrototype);

truckPrototype.init = function(year, bedType) {
  vehiclePrototype.init.call(this, year);
  this.bedType = bedType;
  return this;
}

let carPrototype = Object.create(vehiclePrototype);


let truck1 = Object.create(truckPrototype).init(2003, 'Short');
console.log(truck1.year);
console.log(truck1.bedType);

let car1 = Object.create(carPrototype).init(2008);
console.log(car1.year);
