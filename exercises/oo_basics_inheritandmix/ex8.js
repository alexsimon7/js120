const towMixin = {
  tow() {
    return "I can tow a trailer!";
  }
}

//ES6 Class
// class Vehicle {
//   constructor(year) {
//     this.year = year;
//   }
// }

// class Truck extends Vehicle {
//   constructor(year) {
//     super(year);
//     Object.assign(this, towMixin);
//   }
// }

// class Car extends Vehicle {}

//Constructors and Prototypes

// function Vehicle(year) {
//   this.year = year;
// }

// function Truck(year) {
//   Vehicle.call(this, year);
// }

// Object.assign(Truck.prototype, towMixin);

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
Object.assign(truckPrototype, towMixin);

let carPrototype = Object.create(vehiclePrototype);



let truck = Object.create(truckPrototype).init(2002);
console.log(truck.year);
console.log(truck.tow());

let car = Object.create(carPrototype).init(2015);
console.log(car.year);
