class User {
  name;
  email;
  #password; //privte property

  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.#password = password;
  }
  //!methods
  getName() {
    return this.name;
  }
  getPassword() {
    return this.#password;
  }
  getEmail() {
    return this.email;
  }
}
// //* creting user object
// // should use new keyword here

// const john = new User("Ashok", "ashok@gmail.com", "12345");
// const ram = new User("ram", "ram@gamil.com", "22333");
// console.log(john);
// console.log(ram);
// console.log(ram.getEmail());
// console.log(ram.getPassword());

// class student {
//   name;
//   email;
//   #password;
//   year;
//   facultyRoll;

//   constructor(name, email, password, year, facultyRoll) {
//     this.name = name;
//     this.email = email;
//     this.#password = password;
//     this.year = year;
//     this.facultyRoll = facultyRoll;
//   }

//   //!methods
//   getName() {
//     return this.name;
//   }
//   getEmail() {
//     return this.email;
//   }
//   getPassword() {
//     return this.#password;
//   }
// }
// const ashok = new student("ashok", "ashok@gmail.com", "12345", "2022", "IT");
// console.log(ashok);
// console.log(ashok.getName());
// console.log(ashok.getEmail());
// const ashok = new student("ashok", "ashok@gmail.com", "12345", "2022", "IT");
// console.log(ashok);
// console.log(ashok.getName());
// console.log(ashok.getEmail());

//!inheritance
class student extends User {
  year;
  facultyRoll;

  constructor(name, email, password, year, facultyRoll) {
    super(name, email, password);
    this.year = year;
    this.facultyRoll = facultyRoll;
  }

  // getPassword() {
  //     return this.#password;

  // }
}
const ashok = new student("ashok", "ashok@gmail.com", "12345", "2022", "IT");
console.log(ashok);
console.log(ashok.getName());
console.log(ashok.getEmail());
console.log(ashok.getPassword());

//!methods
//   getName() {
//     return this.name;
//   }
//   getEmail() {
//     return this.email;
//   }
//   getPassword() {
//     return this.#password;
//   }
// }
// getPassword() {
//     return this.#password;
// }
