function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],
    info() {
      console.log(`${this.name} is a ${this.year} year student`)
    },
    addCourse(course) {
      this.courses.push(course);
    },
    listCourses() {
      return this.courses;
    },
    addNote(code, note) {
      this.courses.forEach(element => {
        if(element.code === code) {
          if(element.notes) {
             element.notes += `; ${note}`
          } else {
            element.notes = note;
          }
        }
      });
    },

    viewNotes() {
      this.courses.forEach(element => {
        if(element.notes) {
          console.log(`${element.name}: ${element.notes}`);
        }
      });
    },

    updateNote(code, note) {
      this.courses.forEach(element => {
        if(element.code === code) {
          element.notes = note;
        }
      });
    },

  }
}


function createSchool() {
  return {
    students: {},
    
    addStudent(newStudent) {
      if(['1st', '2nd', '3rd', '4th', '5th'].includes(newStudent.year)) {
        this.students[newStudent.name] = newStudent;
      } else {
        console.log('Invalid Year');
      }
    },

    enrollStudent(student, course) {
      student.addCourse(course);
    },

    addGrade(student, code, grade) {
      this.students[student.name].courses.forEach(element => {
        if(element.code === code) {
          element.grade = grade;
        }
      });
    },

    getReportCard(student) {
      this.students[student.name].courses.forEach(element => {
        if (element.grade) {
          console.log(`${element.name}: ${element.grade}`);
        } else {
          console.log(`${element.name}: In progress`);
        }
      });
    },

    courseReport(course) {
      let courseGrades = [];
      console.log(`= ${course} Grades=`);
      Object.keys(this.students).forEach(courseList => {
        this.students[courseList].courses.forEach(courseTaken => {
          if (courseTaken.name === course && courseTaken.grade) {
            console.log(`${courseList}: ${courseTaken.grade}`);
            courseGrades.push(courseTaken.grade);
          };
        });
      });
      console.log('---');
      let average = courseGrades.reduce((accum, element) => accum + element, 0) / courseGrades.length;
      if(average || average === 0) {
        console.log(`Course Average: ${average}`);
      }
    },

  };
}



let foo = createStudent('Foo', '1st');
let bar = createStudent('Bar', '1st');
let qux = createStudent('Qux', '2nd');
let fake = createStudent('Fake', '0th');

let school = createSchool();

school.addStudent(foo);
school.addStudent(bar);
school.addStudent(qux);
school.addStudent(fake);

console.log(school.students);

school.enrollStudent(foo, { name: 'Math', code: 101 });
school.enrollStudent(foo, { name: 'Advanced Math', code: 102 });
school.enrollStudent(foo, { name: 'Physics', code: 202 });
school.enrollStudent(bar, { name: 'Math', code: 101 });
school.enrollStudent(qux, { name: 'Math', code: 101 });
school.enrollStudent(qux, { name: 'Advanced Math', code: 102 });

school.addGrade(foo, 101, 95);
school.addGrade(foo, 102, 90);
school.addGrade(bar, 101, 91);
school.addGrade(qux, 101, 93);
school.addGrade(qux, 102, 90);

school.getReportCard(foo);
school.getReportCard(bar);
school.getReportCard(qux);

school.courseReport('Math');
school.courseReport('Advanced Math');
school.courseReport('Physics');