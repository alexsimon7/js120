class Pet {
  constructor(type, name) {
    this.type = type;
    this.name = name;
  }
}

class Owner {
  constructor(name) {
    this.name = name;
    this.pets = 0;
  }

  name() {
    return this.name;
  }

  numberOfPets() {
    return this.pets;
  }

}

class Shelter {
  constructor() {
    this.adoptions = {};
  }

  adopt(owner, pet){
    owner.pets += 1;
    if(this.adoptions[owner.name]) {
      this.adoptions[owner.name].push([pet.type, pet.name]);
    } else {
      this.adoptions[owner.name] = [[pet.type, pet.name]];
    }
  }

  printAdoptions() {
    for(let element in this.adoptions) {
      console.log(`${element} has adopted the following pets: `);
      this.adoptions[element].forEach(pair => {
        console.log(`a ${pair[0]} named ${pair[1]}`);
      });
      console.log('');
    }
  }
}


let butterscotch = new Pet('cat', 'Butterscotch');
let pudding      = new Pet('cat', 'Pudding');
let darwin       = new Pet('bearded dragon', 'Darwin');
let kennedy      = new Pet('dog', 'Kennedy');
let sweetie      = new Pet('parakeet', 'Sweetie Pie');
let molly        = new Pet('dog', 'Molly');
let chester      = new Pet('fish', 'Chester');

let phanson = new Owner('P Hanson');
let bholmes = new Owner('B Holmes');

let shelter = new Shelter();
shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(phanson, darwin);
shelter.adopt(bholmes, kennedy);
shelter.adopt(bholmes, sweetie);
shelter.adopt(bholmes, molly);
shelter.adopt(bholmes, chester);
shelter.printAdoptions();
console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);