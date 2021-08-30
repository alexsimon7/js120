class Person {
  greeting(text) {
    console.log(text);
  }
}

class Shouter extends Person {
  greeting(text) {
    super.greeting((text.toUpperCase()));
  }
}

let person = new Person();
let shouter = new Shouter();

person.greeting('Hello my friend.'); // Hello. It's very nice to meet you
shouter.greeting('Hello my friend.');
