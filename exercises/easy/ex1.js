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


// Constructors and Prototypes

function Rectangle(width, length) {
  this.width = width;
  this.length = length;
}

Rectangle.prototype.getWidth = function() {
  return this.width;
}

Rectangle.prototype.getLength = function() {
  return this.length;
}

Rectangle.prototype.getArea = function () {
  return this.width * this.length;
}


// Object Factory

function Rectangle(width, length) {
  return {
    width,
    length,
    getWidth: function() {
      return this.width;
    },
    getLength: function () {
      return this.length;
    },
    getArea: function() {
      return this.width * this.length;
    },
  }
}

*/

// OLOO

rectanglePrototype = {
  getWidth() {
    return this.width;
  },
  getLength() {
    return this.length;
  },
  getArea() {
    return this.width * this.length;
  },
  innit(width, length) {
    this.width = width;
    this.length = length;
    return this;
  }

}


let rect = Object.create(rectanglePrototype).innit(4, 5);

console.log(rect.getWidth()); // 4
console.log(rect.getLength()); // 5
console.log(rect.getArea()); // 20
