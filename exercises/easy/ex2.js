// ES6 Class Syntax
/*
class Rectangle {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }

  getWidth() {
    return this.width;
  }

  getLength() {
    return this.length;
  }

  getArea() {
    return this.width * this.length;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }
}


// Constructors and Prototypes

function Rectangle(width, length) {
  this.width = width;
  this.length = length;
}

Rectangle.prototype.getWidth = function() {
  return this.width;
}

Rectangle.prototype.getLength = function () {
  return this.length;
}

Rectangle.prototype.getArea = function() {
  return this.width * this.length;
}

function Square(side) {
  Rectangle.call(this, side, side);
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;



//Object Factory

function Rectangle(width, length) {
  return {
    width,
    length,
    getWidth: function() {
      return this.width;
    },
    getLength: function() {
      return this.length;
    },
    getArea: function() {
      return this.length * this.width;
    },
  }
}

function Square(size) {
  return Rectangle(size, size);
}

*/

//OLOO

let rectanglePrototype = {
  getWidth: function() {
    return this.width;
  },
  getLength: function() {
    return this.length;
  },
  getArea: function() {
    return this.length * this.width;
  },

  innit(width, length) {
    this.width = width;
    this.length = length;
    return this;
  },
}

let squarePrototype = Object.create(rectanglePrototype);

squarePrototype.innit = function (size) {
  this.width = size;
  this.length = size;
  return this;
}



let square = Object.create(squarePrototype).innit(5);
console.log(`area of square = ${square.getArea()}`); // area of square = 25

