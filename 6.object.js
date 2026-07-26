//OBJECT
// An object in JavaScript is a way to store related data as key-value pairs, instead of just a list like an array.
// let user_name =''
// let user_email = ''
// let user = [1, "john", "john1232gmail,com"];
// let user1 = [2, "johhn", "john123dd2gmail,com"];

// let users = [
//   [1, "john", "john1232gmail,com"],
//   [2, "johhn", "john123dd2gmail,com"],
// ];

//! new keyword / object constructor
// const obj = new Object();

//* object literal
// let user = {
//   _id: 1,
//   name: "john",
//   email: "john@gmail.com",
//   password: 12234444,
// };
//*reading properties
//!dot notation
// const email = user.email; //returns the value of email
// console.log(email);
// console.log(user._id);
// console.log(user.email);
// console.log(user);
//!bracket notation ->[]
// const password = user["password"];
// console.log(password);
// console.log(user);

//* adding new properties
//! dot notation
// user.address = "kathmandu";
// console.log(user);

//!bracket notation for adding properties
// user["is_student"] = false;
// console.log(user);

//*Modify properties u can either use dot notation or bracket notation
//*when to use these if there is space in string we cannot use dot notation we have to use bracket notation . for example below
// console.log(user["full name]);

// user.name = "jack dai"; //first method
// user["name"] = "jack mama"; //second method
// user.email = "ashok#@gmail.com";
// console.log(user);

// let read_val = "password"; //stores value of password in new variable
// console.log("hello", user[read_val]); //user['password']
// console.log(user);

// user["role"] = "marketing manager";
// console.log(user);
// let add_val = "role"; // for adding new properties in same line we use bracket notation like line 59 and 60
// user[add_val] = "marketing manager";
// console.log(user[add_val]);
// let add_val2 = "Salary";
// user[add_val2] = 50000;
// console.log(user[add_val2]);
// console.log(user);

//!es6
//?spread operator => ...
//arr/object
// let u1 = {
//   a: "a",
//   b: "b",
// };
// let u2 = { ...u1 };
// let u2 = { ...u1, c: "c" }; //to add new properties

// u2.a = "abc";
// console.log(u1);
// console.log(u2);

//?destructing
// let name = user.name;
// let email = user.email;
// let password = user.passoword;
//now if we want to use only properties we want like we need name and email we do by this method

// let { name, email } = user;
// console.log(name, email);

// let { name: userName, email: userEmail } = user;
// console.log(userName, userEmail);

//*todo task : REST OPERATOR TO LEARN

// let { name: userName, email: userEmail } = user;
// console.log(userName, userEmail);
let user = {
  _id: 1,
  name: "john",
  email: "john@gmail.com",
  password: 12234444,
};

let { name, email, ...rest } = user;
console.log(name, email);

console.log(rest);

//Object literal
// let car = {
//   brand: "Toyota",
//   model: "Corolla",
//   price: 250000,
// };

//Reading properties
// console.log(car.brand); //dot notation ->"toyota"
// console.log(car["model"]); // bracket notation -."corolla"

//use bracket when the key has a space or is stored in a variable
// let key = "price";
// console.log(car[key]); //250000

// Adding new properties
// car.color = "white"; // Dot notation
// car["year"] = 2023; //Bracket notation
// console.log(car);

// Modifying Properties

// car.price = 700000; //dot notation
// car["brand"] = "BMW"; //brakcet notation
// console.log(car);

// Deleting a StylePropertyMap
// delete car.color;
// console.log(car);

//!Spread Operator // copy an object optionally add more
// let baseUser = { id: 1, name: "sita" };
// let fullUser = { ...baseUser, age: 22, city: "pokhara" };
// console.log(baseUser); // unchanged
// console.log(fullUser); //add new properties

// let a = { info: { score: 10 } };
// let b = { ...a };
// b.info.socre = 99;
// console.log(a.info.score);

//Destructing -pullout only what you need

// let student = { id: 5, name: "ashok", grade: "A+" };

// let { name, grade } = student;
// console.log(name, grade);

//Renaming while destructing
// let { name: studentName, grade: studentGrade } = student;
// console.log(studentName, studentGrade);
