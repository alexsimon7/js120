class Vehicle {
  constructor(make, model, wheels) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }

  getWheels() {
    return this.wheels;
  }

  info() {
    return `${this.make} ${this.model}`;
  }
}


class Car extends Vehicle {
  constructor(make, model) {
    super(make, model, 4);
  }
}

class Motorcycle extends Vehicle {
  constructor(make, model) {
    super(make, model, 2);
  }
}

class Truck extends Vehicle {
  constructor(make, model, payload) {
    super(make, model, 6);
    this.payload = payload;
  }
}

class Boat extends Vehicle {
  constructor(make, model) {
    super(make, model, 'None');
  }
}

let boat = new Boat('Yamaha', 'Speedster');
console.log(boat.getWheels());
console.log(boat.info());

let truck = new Truck('Peterbuilt', 'Hauler', '100 Tons');
console.log(truck.getWheels());
console.log(truck.info());
console.log(truck.payload);


