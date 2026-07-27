//!function
//A function is defined as block of  code {}which is reusable
//task
//syntax
// function function_name() {
//function body
//block
// }
// function call/invoke
// function_name();

//!function declaration
// function greet() {
//   console.log("hellow world"); // function body
// }
// greet(); // function call

//!function with parameters
// function greet(name) {
//place holder is parameter
//   console.log("hellow", name); // function body
// }
// greet("Ram"); // function call passed value inside function is called arguments
// greet("john"); // john is a argument here

//!default parameter
// function greet(name = "Guest") {
//place holder is parameter
//   console.log("hellow", name); // function body
// }
// greet("Ram"); // function call passed value inside function is called arguments
// greet("john"); // john is a argument here
// greet(); // prints guest is value is not passed because guest is given it is undefined

//!function with return type
// function greet(name = "Guest") {
//place holder is parameter
//   console.log("hellow", name); // function body
//   const message = `hello ${name}`;
//   return message;
// console.log("hellow")unreachable code because it doesnt print anything after return it breaks or skips
// }
// const m = greet("Ram"); // function call passed value inside function is called arguments
// console.log(m);
// const j = greet("john");
// console.log(j); // john is a argument here
// const g = greet();
// console.log(g);

//! function with multiple arguments
// function greet(name = "Guest", age) {
//place holder is parameter
//   console.log("hellow", name); // function body
//   const message = `hello iam ${name} iam ${age}`;
//   return message;
// console.log("hellow")unreachable code because it doesnt print anything after return it breaks or skips
// }
// const x = greet("ram", 30);
// console.log(x);

// console.log(greet(30, "ashok"));

//!add

// function add(a, b) {
//   const num = a + b;
//   return num;
// }
// const sum = add(3, 5);
// console.log("the sum of two numbers is:", sum);

// //! SUB
// function minus(c, d) {
//   const nums = c - d;
//   return nums;
// }
// const sub = minus(30, 15);
// console.log("the sub of two numbers is:", sub);

//*function expression
//let const var we can store in any variable for function
// var add = function (a, b) {
// we can use any varibale
// let add = function (a, b) {
//     const add = function (a, b) {
//   return a + b;
// };
// console.log(add(3, 5));

//!Arrow function

// const adds = (a = 0, b = 0) => {
//   return a + b;
// };
// const adds = (a = 0, b = 0) => a + b; // if there only one value to return no need to need {}

//division
// const div = (a = 1, b = 1) => {
//   return a / b;
// };
// console.log(adds()); // prints 0
// console.log(div()); //prints 1 if value not passed

//*Callback function
//A callback function is passed as an argument to another function and is executed after the completion of that function.
// function num(n, callback) {
//   return callback(n);
// }

// const double = (n) => n * 2;

// console.log(num(5, double));

//example two
// function parent(callback) {
//   console.log(callback);
//   console.log("parent");
//   const square = callback(100);
//   console.log("square", square);
// }

// function child(num = 0) {
//   console.log("child", num * num);
//   return num * num;
// }
// parent(child);
// parent(child);

// parent(function (num) {
//   return num * num;
// });
// parent((num) => num * num);
// function greet(name, callback) {
//   console.log("Hello, " + name);
//   callback();
// }

// function sayBye() {
//   console.log("Goodbye!");
// }

// greet("Ajay", sayBye);

//!Types of function
// higher order function

// const outer = () => {
//   console.log("outer");
//   const inner = () => {
//     console.log("inner");
//   };
//   return inner;
// };
// const a = outer();
// console.log(a);
// a();
// todo task pratice functions

function greet(name, callback) {
  console.log("hello" + name);
  callback();
}

function sayBye() {
  console.log("Goodbye");
}
greet("Ajay", sayBye);

function processUser(name, callback) {
  console.log("processing:" + name);
  callback(name);
}
function sayHello(name) {
  console.log("hello" + name);
}
processUser("Ashok", sayHello);

function addNumber(x, y) {
  return x + y;
}

function multiplyNumbers(x, y) {
  return x * y;
}
function calculate(a, b, callback) {
  return callback(a, b);
}

console.log(calculate(4, 5, addNumber));
console.log(calculate(4, 5, multiplyNumbers));
// todo IIFE - Immediately invoked function expression

//! syntax
(function () {
  console.log("heloo");
})(); //()this is the call, immediately invoking the function you just wrapped.

//with out parameter and basic iide
(function () {
  console.log("this runs immediately");
})();

//Arrow function iife
(() => {
  console.log("this runs immediatley");
})();

//iife with parameters
(function (name) {
  console.log("Hello this is", name);
})("ashok");

//iife with multiple parameter
(function (a, b) {
  console.log("sum:", a + b);
  console.log("multiply:", a / b);
})(20, 5);

//iife keeping a variable private
(function () {
  let secretCode = 12345;
  console.log("confidential", secretCode);
})();

console.log(typeof secretCode); //"undefined" → proves it never leaked outside
//iife retuns a value
const result = (function () {
  return 5 * 5;
})();
console.log("Result form iife:", result);

// Generator Function
//A generator function is a special type of function that can pause itself midway and resume later, instead of running start-to-finish in one go like normal functions.
//syntax
// function* myGenerator(){
//   yeild 1;
//   yeild 2;
//   yeild 3;

// }

function* myGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = myGenerator(); // doesn't run the code yet, just creates the iterator

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }
