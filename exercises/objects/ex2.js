let item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  discount: function(percent) {
    let discount = this.price * percent / 100;
    let discountPrice = this.price - discount;
    
    return discountPrice;
  },
};

console.log(item.discount(20));   // should return 40

console.log(item.discount(50));   // should return 25

console.log(item.discount(25));   // should return 37.5


/*
The code as previously written was mutating the price variable after each time the discount function was called. Accordingly, each subsequent
call of the discount function was using a different, and incorrect price amount. As altered, the code now declares and initialized a new variable called
'discountPrice' within the discount function which stores the value of the discount price based on the discount. Each subsequent call of discount now instead
uses price at its original value (50) and does not alter it.

*/