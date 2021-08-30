function joinOr(array, punctuation = ', ', joiner = 'or') {
  switch(array) {
    case array.length === 1:
      return array[0];
    case array.length === 2:
      return `${array[0]} ${joiner} ${array[1]}`;
    default:
      return `${array.slice(0, array.length - 1).join(punctuation)}${punctuation}${joiner} ${array[array.length - 1]}`;
  }
};


// obj is the context for `joinOr`; replace it with the correct context.
console.log(joinOr([1, 2]));                   // => "1 or 2"
console.log(joinOr([1, 2, 3]));                // => "1, 2, or 3"
console.log(joinOr([1, 2, 3], '; '));         // => "1; 2; or 3"
console.log(joinOr([1, 2, 3], ', ', 'and'))  // => "1, 2, and 3"
