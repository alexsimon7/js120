let person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
};

console.log(person.fullName); //Logs NaN . The use of the 'this' keyword
//outside a function  is bound to the global object. Because neither
// firstName or lastName exist in the global object, both are undefined.
// Thus undefined + undefined returns NaN.
