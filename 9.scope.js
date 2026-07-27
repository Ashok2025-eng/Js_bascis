//!Scope
// accesiblity or visibility of varibale & function declaration

//* global scope
var global_var = "global var"; //global scope
let global_let = "global let";
const global_const = "global_const";
// console.log(global_var);
// console.log(global_let);
// console.log(global_const);
//*blocked function
//{}
if (true) {
  var global_var = "global var";
  let global_let = "global let";
  const global_const = "global_const";
  //   console.log(global_var);
  //   console.log(global_let);
  //   console.log(global_const);
}
// console.log(global_var);
// console.log(global_let);
// console.log(global_const);
// //*function scope
// function scope() {
var function_var = "function var"; //inside function it is function scoped
let function_let = "function let";
const function_const = "function_const";
//   console.log("function");
//   console.log(global_var);
//   console.log(global_let);
//   console.log(global_const);
//   console.log(function_var);
//   console.log(function_let);
//   console.log(function_const);
// }
// scope();
// onsole.log(function_var); //error
// console.log(function_let); //error
// console.log(function_const); //error

//*lexical scope
//  a child function passed into parent function can access to parent funtion is lexical scope
//meaning child can look to prent function but parent cant access child function
function outer() {
  let x = "outer";
  console.log(x);
  //   console.log(y); //can access child function
  function inner() {
    let y = "inner";
    console.log(y);
    console.log(x); //can access the parent function
  }
  inner();
}
outer();

//*lexical chain
let x = 12;

function outer() {
  console.log(x);
  function inner() {
    let x = "inner";
    let y = "12";
    console.log(x);
    console.log(y);
  }
  inner();
}
outer();


