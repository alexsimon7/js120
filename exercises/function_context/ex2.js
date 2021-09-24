
let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    return [1, 2, 3].map(function(number) {
      return this.name + ' ' + number;
    }, this);
  },
};

/*

let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    let context = this;
    return [1, 2, 3].map(function(number) {
      return context.name + ' ' + number;
    });
  },
};

let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    return [1, 2, 3].map((number) => {
      return this.name + ' ' + number;
    });
  },
};

let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    return [1, 2, 3].map(function(number) {
      return this.name + ' ' + number;
    }.bind(this));
  },
};
*/
let obj = Object.create(franchise);

console.log(obj.allMovies());

//The above fails to create the desired array because the 'this' keyword
//points to the global scope. The 'this' keyword has lost its execution
//context because the function it exists in is being called within the 
//.map method. Loss of execution context can be fixed in several ways
//including: 1. preserving the execution context in a seperate variable,
//2.  using .bind to permantly lock the execution context, 3. using an 
//arrow function, instead of a function declaration (arrow functions
//inherit their execution context from the surrounding scope), 4. using the optional thisArg argument (as seen above);

//[
//  'How to Train Your Dragon 1',
//  'How to Train Your Dragon 2',
//  'How to Train Your Dragon 3'
//]
