// Object Factories

// function vehicle(make, model) {
//   return {
//     make,
//     model,
//     info() {
//       return `${this.make} ${this.model}`;
//     }
//   };
// }

// function car(make, model) {
//   let car = vehicle(make, model);
//   car.getWheels = function() {
//     return 4;
//   }
//   return car;
// }

// function motorcycle(make, model) {
//   let motorcycle = vehicle(make, model);
//   motorcycle.getWheels = function() {
//     return 2;
//   }
//   return motorcycle;
// }

// function truck(make, model, payload) {
//   let truck = vehicle(make, model);
//   truck.payload = payload;
//   truck.getWheels = function() {
//     return 6;
//   }
//   return truck;
// }

//OLOO

// let vehiclePrototype = {
//   init(make, model) {
//     this.make = make;
//     this.model = model;
//     return this;
//   },

//   info() {
//     return `${this.make} ${this.model}`;
//   }
// }

// let carPrototype = Object.create(vehiclePrototype);

// carPrototype.getWheels = function() {
//   return 4;
// };

// let motorcyclePrototype = Object.create(vehiclePrototype);

// motorcyclePrototype.getWheels = function() {
//   return 2;
// }

// let truckPrototype = Object.create(vehiclePrototype);

// truckPrototype.init = function(make, model, payload) {
//   vehiclePrototype.init.call(this, make, model);
//   this.payload = payload;
//   return this;
// }

// truckPrototype.getWheels = function() {
//   return 6;
// }


//Constructors and Prototypes

// function Vehicle(make, model) {
//   this.make = make;
//   this.model = model;
// }

// Vehicle.prototype.info = function() {
//   return `${this.make} ${this.model}`;
// }

// function Car(make, model) {
//   Vehicle.call(this, make, model);
// }

// Car.prototype = Object.create(Vehicle.prototype);
// Car.prototype.constructor = Car;

// Car.prototype.getWheels = function() {
//   return 4;
// }

// let car1 = new Car('Nissan', 'Leaf');
// console.log(car1);
// console.log(car1.getWheels());

// function Motorcycle(make, model) {
//   Vehicle.call(this, make, model);
// }

// Motorcycle.prototype = Object.create(Vehicle.prototype);
// Motorcycle.prototype.constructor = Motorcycle;

// Motorcycle.prototype.getWheels = function() {
//   return 2;
// }


// let mot1 = new Motorcycle('Honda', 'Rebel');
// console.log(mot1);
// console.log(mot1.getWheels());


// function Truck(make, model, payload) {
//   Vehicle.call(this, make, model);
//   this.payload = payload;
// }

// Truck.prototype = Object.create(Vehicle.prototype);
// Truck.prototype.constructor = Truck;

// Truck.prototype.getWheels = function() {
//   return 6;
// }



// let truck1 = new Truck('Nissan', 'Big Boy', 'Rebels');
// console.log(truck1);
// console.log(truck1.getWheels());


//ES6 Class Syntax

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  info() {
    return `${this.make} ${this.model}`;
  }
}

class Car extends Vehicle {
  getWheels() {
    return 4;
  }
}

class Motorcycle extends Vehicle {
  getWheels() {
    return 2;
  }
}

class Truck extends Vehicle {
  constructor(make, model, payload) {
    super(make, model);
    this.payload = payload;
  }

  getWheels() {
    return 6;
  }
}


let car1 = new Car('Nissan', 'Leaf');
console.log(car1);
console.log(car1.getWheels());


let mot1 = new Motorcycle('Honda', 'Rebel');
console.log(mot1);
console.log(mot1.getWheels());

let truck1 = new Truck('Nissan', 'Big Boy', 'Rebels');
console.log(truck1);
console.log(truck1.getWheels());