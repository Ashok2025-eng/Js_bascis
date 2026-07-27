//this -> object
// this and module.exports indicates same object
// module.exports.name = "John";
// module.exports.email = "addld";
// // console.log(this);

// module.exports = {
//   age: 17,
// };
// // module.exports.email = "addld";
// console.log(this);

// //*
// function a() {
//   console.log(a);
// }
// a();

// let user = {
//   name: "ashok",
//   email: "ashok123@gmail.com",
//   getName() {
//     console.log(this);
//   },
// };
// user.getName();

// let user = {
//   name: "ashok",
//   email: "ashok123@gmail.com",
//   getName() {
//     console.log(this.name);
//     console.log(this.email);
//   },
// };
// user.getName();

//* ARROW FUNCTION

// let user = {
//   name: "ashok",
//   email: "ashok123@gmail.com",
//   getName: () => {
//     console.log(this);
//   },
// };
// user.getName();

// let user = {
//   name: "ashok",
//   email: "ashok123@gmail.com",
//   getName()  {
//     console.log(this);
//   },
// };
// const fn = user.getName;
// fn();

// class User {
//   name;
//   email;

//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }

//   getEmail() {
//     console.log(this.email);
//   }
// }
// const u = new User("ram", "ram@gmail.com");
// const u1 = new User("john", "john@gmail.com");
// //new ->{}->this
// //this.name => {name}
// //this.email => {name,email}
// //return this =>u

// console.log(u);

// u.getEmail();
// u1.getEmail();
// console.log(u1);

// const u = new User("ram", "ram@gmail.com");
// const u1 = new User("john", "john@gmail.com");

// function introduce(age, address) {
//   console.log("i am", this.name, age, address);
// }
// //! call,apply,bind
// introduce.call(u, 12, "kathmandu");
// introduce.apply(u1, [12, "kathmandu"]);
// const fn = introduce.bind(4, 40, "kathmandu");
// fn();

// const dog = {
//   name: "Rex",
//   speak: function () {
//     console.log(this.name + " says woof");
//   }
// };
// const bark = dog.speak;
// bark()

// const dog = {
//   name: "Rex",
//   speak: () => {
//     console.log(this.name + " says woof");
//   },
// };
// dog.speak();
// const cat = {
//   name: "Tom", // property: cat.name = "Tom"
//   speak: function () {
// property: cat.speak = a regular function
//     console.log(this); // let's see what "this" actually IS first, before using .name
//   },
// };

// cat.speak();
// HOW is speak being called? --> cat.speak()
// There IS a dot, and "cat" is sitting directly to the left of that dot.
// RULE: this = whatever is immediately to the left of the dot at the call site.
// So: this = cat  (the entire object)

// const cat = {
//   name: "Tom",
//   speak: function () {
//     console.log(this); // you already saw this prints the whole cat object
//     console.log(this.name); // now watch this pull just "Tom" out of that same object
//   },
// };

// cat.speak();

// const cat = {
//   name: "TOM",
//   speak: function () {
//     console.log(this);
//     console.log(this.name);
//   },
// };
// const loose = cat.speak;
// loose();

//! Three states of this
//* Normal method call(dot in front)
// const car = {
//   brand: "toyota",
//   drive: function () {
//     console.log(this);
//   },
// };
// car.drive();

//* Function ripped out,called with no dot
// const bike = {
//   name: "ninja",
//   rider: function () {
//     console.log(this);
//     console.log(this.brand);
//   },
// };
// const go = bike.rider;
// go();

//* Arrow function as the method
// const cycle = {
//   brand: "bmx",
//   ride: function () {
//     console.log(this);

//     const pedal = () => {
//       console.log(this);
//       console.log(this.brand);
//     };
//     pedal();
//   },
// };
// cycle.ride();

// function greet() {
//   console.log("Hello" + this.name);
// }
// const person = { name: "Ashok" };
// greet.call(person);

// const user = {
//   name: "Sam",
//   sayName: function () {
//     console.log(this.name);
//   },
// };
// const extracted = user.sayName.bind(user);
// extracted(); // broken — fix it using bind, without changing how extracted() is called

// function introduce() {
//   console.log("i am" + this.name + ",a" + this.job);
// }
// const person1 = { name: "Maya", job: "engineer" };
// introduce.call(person1);

// function power(exponent) {
//   console.log(this.base + "^" + exponent + "calculation started");
// }
// const num = { base: 5 };
// power.call(num, 10);

// function fullName(middle, last) {
//   console.log(this.first + " " + middle + " " + last);
// }
// const person2 = { first: "John" };
// fullName.apply(person2, ["micheal", "smith"]);
// Use .apply() to run fullName with this = person2, passing "Michael" and "Smith" as an array

// const team = {
//   name: "Falcons",
//   announce: function () {
//     console.log("Team: " + this.name);
//   },
// };
// // Extract "announce" into a variable called "announceLater",
// // permanently bound to team, then call it
// const announceLater = team.announce.bind(team);
// announceLater();

// const num = {
//   val: 1,
//   show: function () {
//     console.log(this.val);
//   },
// };
// num.show();
// const num = {
//   name: "Ashok",
//   show: function () {
//     console.log(this.name);
//   },
// };
// num.show();

// const c = {
//   x: 10,
//   y: 20,
//   add: function () {
//     console.log(this.x + this.y);
//   },
// };
// c.add();

// const d = {
//   items: [1, 2, 3],
//   count: function () {
//     this.items.push(4, 5, 6);
//     this.items[0] = 8;
//     console.log(this.items);
//   },
// };
// d.count();

// function showThis() {
//   console.log(this);
// }

// showThis(); // Prints the 'window' object (in browsers)

const corporate = {
  brand: "Apple",
  startLog: function() {
    // Arrow function borrows 'this' from startLog
    setTimeout(() => {
      console.log(this.brand); 
    }, 1000);
  }
};

corporate.startLog(); // Prints: "Apple" after 1 second
