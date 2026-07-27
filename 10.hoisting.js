//* hoisting
//? js behavour where declarations are processed before execution
//? js behaviour where declarations are moved to top of their scope
// var x;
// console.log(x);
// let x = 12;
// console.log(x);

//example
// greet();
// function greet() {
//   console.log("hello");
// }
// greet();

//?TEMPORAL DEAD ZONE
//?period between declaration entering in scope & execution for declaration of let or const

//*function expression
// a();
// var a = function () {
//   console.log("a");
// };

//! CallStack ,execution contexxt
//Phases of execuation context
//memory creation phase where it allocates memory by scanning code from first to last

//{x:undefined,y:undefined,a:(){}}

//execution phase
//{x:40,y:56,a:(){}}

// var x = 40;
// console.log(x);
// var y = 56;

// function a() {
//   console.log("a");
//   function b() {
//     console.log("b");
//     function c() {
//       console.log("c");
//     }
//     c();
//   }
//   b();
// }
// a();
// a();
// a();

// console.log(a);
// console.log(b);

// const a = 10;
// const b = 10;
var msg;
function test() {
  // var msg;
  console.log(msg);
  var msg = "inside function";
  // console.log(msg);
  // var msg = "inside function";
}
test();

console.log(typeof foo);
var foo = "bar";

// var foo 
// console.log(typeof foo);
// var foo = "bar";

sayHello();
var sayHello = function(){
  console.log("hello")
}

var sayHello =function sayHello(){
  console.log("hi from declaration")
}