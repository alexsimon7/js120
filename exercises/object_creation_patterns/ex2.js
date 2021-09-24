//Psuedo Classical Approach / Constructors and Prototypes

// function Person(firstName, lastName, age, gender) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.gender = gender;
// }

// Person.prototype.fullName = function() {
//   return this.firstName + ' ' + this.lastName;
// }

// Person.prototype.communicate = function() {
//   console.log('Communicating');
// }

// Person.prototype.eat = function() {
//   console.log('Eating');
// }

// Person.prototype.sleep = function() {
//   console.log('Sleeping');
// }

// function Doctor (firstName, lastName, age, gender, specialization) {
//   Person.call(this, firstName, lastName, age, gender);
//   this.specialization = specialization;
// }

// Doctor.prototype = Object.create(Person.prototype);
// Doctor.prototype.constructor = Doctor;

// Doctor.prototype.diagnose = function() {
//   console.log('Diagnosing');
// }

// function Professor (firstName, lastName, age, gender, subject) {
//   Person.call(this, firstName, lastName, age, gender);
//   this.subject = subject;
// }

// Professor.prototype = Object.create(Person.prototype);
// Professor.prototype.constructor = Professor;

// Professor.prototype.teach = function() {
//   console.log('Teaching');
// }

// function Student (firstName, lastName, age, gender, degree) {
//   Person.call(this, firstName, lastName, age, gender);
//   this.degree = degree;
// }

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;

// Student.prototype.study = function(){
//   console.log('Studying');
// }

// function GraduateStudent (firstName, lastName, age, gender, degree, graduateDegree) {
//   Student.call(this, firstName, lastName, age, gender, degree);
//   this.graduateDegree = graduateDegree;
// }

// GraduateStudent.prototype = Object.create(Student.prototype);
// GraduateStudent.prototype.constructor = GraduateStudent;

// GraduateStudent.prototype.research = function() {
//   console.log('Researching');
// }

// ES6 Classes

// class Person {
//   constructor(firstName, lastName, age, gender) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.gender = gender;
//   }
  
//   fullName() {
//     return this.firstName + ' ' + this.lastName;
//   }

//   communicate() {
//     console.log('Communicating');
//   }

//   eat() {
//     console.log('Eating');
//   }

//   sleep() {
//     console.log('Sleeping');
//   }
// }

// class Doctor extends Person {
//   constructor(firstName, lastName, age, gender, specialization) {
//     super(firstName, lastName, age, gender);
//     this.specialization = specialization
//   }

//   diagnose() {
//     console.log('Diagnosing');
//   }
// }

// class Professor extends Person {
//   constructor(firstName, lastName, age, gender, subject) {
//     super(firstName, lastName, age, gender);
//     this.subject = subject;
//   }

//   teach() {
//     console.log('Teaching');
//   }
// }

// class Student extends Person {
//   constructor(firstName, lastName, age, gender, degree) {
//     super(firstName, lastName, age, gender);
//     this.degree = degree;
//   }

//   study() {
//     console.log('Studying');
//   }
// }

// class GraduateStudent extends Student {
//   constructor(firstName, lastName, age, gender, degree, graduateDegree) {
//     super(firstName, lastName, age, gender, degree);
//     this.graduateDegree = graduateDegree;
//   }

//   research() {
//     console.log('Researching');
//   }
// }

// Objects Linking Other Objects

let personPrototype = {
  init(firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    return this;
  },

  fullName() {
    return this.firstName + ' ' + this.lastName;
  },

  communicate() {
    console.log('Communicating');
  },

  eat() {
    console.log('Eating');
  },

  sleep() {
    console.log('Sleeping');
  },
}

let doctorPrototype = Object.create(personPrototype);

doctorPrototype.init = function(firstName, lastName, age, gender, specialization) {
  personPrototype.init.call(this, firstName, lastName, age, gender);
  this.specialization = specialization;
  return this;
}

doctorPrototype.diagnose = function() {
  console.log('Diagnosing');
}

let professorPrototype = Object.create(personPrototype);

professorPrototype.init = function(firstName, lastName, age, gender, subject) {
  personPrototype.init.call(this, firstName, lastName, age, gender);
  this.subject = subject;
  return this;
}

professorPrototype.teach = function() {
  console.log('Teaching');
}

let studentPrototype = Object.create(personPrototype);

studentPrototype.init = function(firstName, lastName, age, gender, degree) {
  personPrototype.init.call(this, firstName, lastName, age, gender);
  this.degree = degree;
  return this;
}

studentPrototype.study = function() {
  console.log('Studying');
}

let graduateStudentPrototype = Object.create(studentPrototype);

graduateStudentPrototype.init = function(firstName,lastName, age, gender, degree, graduateDegree) {
  studentPrototype.init.call(this, firstName, lastName, age, gender, degree);
  this.graduateDegree = graduateDegree;
  return this;
}

graduateStudentPrototype.research = function() {
  console.log('Researching');
}



let person = Object.create(personPrototype).init('foo', 'bar', 21, 'gender');
// console.log(person instanceof personPrototype);     // logs true
person.eat();                              // logs 'Eating'
person.communicate();                      // logs 'Communicating'
person.sleep();                            // logs 'Sleeping'
console.log(person.fullName());            // logs 'foo bar'

let doctor = Object.create(doctorPrototype).init('foo', 'bar', 21, 'gender', 'Pediatrics');
// console.log(doctor instanceof personPrototype);     // logs true
// console.log(doctor instanceof doctorPrototype);     // logs true
doctor.eat();                              // logs 'Eating'
doctor.communicate();                      // logs 'Communicating'
doctor.sleep();                            // logs 'Sleeping'
console.log(doctor.fullName());            // logs 'foo bar'
doctor.diagnose();                         // logs 'Diagnosing'

let graduateStudent = Object.create(graduateStudentPrototype).init('foo', 'bar', 21, 'gender', 'BS Industrial Engineering', 'MS Industrial Engineering');
// logs true for next three statements
// console.log(graduateStudent instanceof personPrototype);
// console.log(graduateStudent instanceof studentPrototype);
// console.log(graduateStudent instanceof graduateStudentPrototype);
graduateStudent.eat();                     // logs 'Eating'
graduateStudent.communicate();             // logs 'Communicating'
graduateStudent.sleep();                   // logs 'Sleeping'
console.log(graduateStudent.fullName());   // logs 'foo bar'
graduateStudent.study();                   // logs 'Studying'
graduateStudent.research();                // logs 'Researching'