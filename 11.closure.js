// function outer() {
//   let e = "outer value";
//   function inner() {
//     console.log(e);
//   }
//   return inner;
// }
// const myfunc = outer();
// myfunc();

// why closure is used

// const counter = () => {
//   let count = 1;

//   const increment = () => {
//     count++;
//     console.log(count);
//   };

//   const decrement = () => {
//     count--;
//     console.log(count);
//   };
//   return {
//     increment: increment,
//     decrement: decrement,
//   };
// };
// const counter1 = counter(); //(increment) =counter
// const counter2 = counter();
// // counter1();
// // counter1();
// // counter2();
// // counter2();

// counter1.decrement();
// counter1.decrement();
// counter1.decrement();

// const Account = (name, initial_amt = 1000) => {
//   let userName = name;
//   let balance = initial_amt;

//   const deposit = (amt) => {
//     if (amt < 500) {
//       console.log("amount should be more than 500");
//       return;
//     }
//     balance += amt;
//   };
//   const withdraw = (amt) => {
//     if (amt < 500) {
//       console.log("amount should be more than 500");
//       return;
//     }
//     balance -= amt;
//   };
//   const inquiry = () => {
//     console.log(balance);
//   };
//   return {
//     deposit,
//     withdraw,
//     inquiry,
//   };
// };
// const ram = Account("ram", 1000);
// ram.deposit(500);

//!Lexical Scoping

// function init() {
//   let name = "google";

//   function displayName() {
// var age = 12;
//     console.log("Hello", name);
//   }
//   function displayNmae2() {
//     console.log("Good Morning", name);
// console.log(age);//cannot access from another child class
//   }
//   displayNmae2();
//   return displayName;
// }
// const showName = init();
// showName();

//! Closure
// function makeFunc() {
//   const name = "Mozilla";
//   function displayName() {
//     console.log(name);
//   }
//   return displayName;
// }

// const myFunc = makeFunc();
// myFunc();

function makeAdder(x) {
  return function add(y) {
    return x + y;
  };
  return add
}
const add5 = makeAdder(10);
console.log(add5(2));
