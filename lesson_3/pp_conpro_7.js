let ninjaA;

{
  const Ninja = function() {
    this.swung = false;
  };

  ninjaA = new Ninja();
}

// create a `ninjaB` object here; don't change anything else

let ninjaB = new ninjaA.constructor();

//let ninjaB = Object.create(ninjaA);
//flaw: puts the swung property in the prototype object instead of the 
//  ninjaB object where it belongs


console.log(ninjaA.constructor === ninjaB.constructor) // => true
