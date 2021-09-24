//ES6 Classes
// class Vehicle {
//   constructor(year) {
//     this.year = year;
//   }
// }

// class Truck extends Vehicle {};

// class Car extends Vehicle {};


// Constructors and Prototypes

// function Vehicle(year) {
//   this.year = year;
// }

// function Truck(year) {
//   Vehicle.call(this, year);
// }

// function Car(year) {
//   Vehicle.call(this,year);
// }

//OLOO

let vehiclePrototype = {
  init(year) {
    this.year = year;
    return this;
  }
}

let truckPrototype = {
  init(year) {
    vehiclePrototype.init.call(this, year);
    return this;
  }
}

let carPrototype = {
  init(year) {
    vehiclePrototype.init.call(this, year);
    return this;
  }
}

//Function Factory

// function vehicle(year) {
//   return {
//     year,
//   }
// }


let truck = Object.create(truckPrototype).init(2003);
console.log(truck.year); // 2003

let car = Object.create(carPrototype).init(2015);
console.log(car.year); // 2015