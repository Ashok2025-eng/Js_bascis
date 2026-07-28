//dynamic typed,single threaded,interpreted language
//used in web development, server-side development, game development, and mobile app development
//web page runs on browser, server-side runs on Node.js where browser js is engine[v8, spidermonkey] node is also like engibe for server
//console -> dev tools to debug or print something in console
//console.log()
console.log("Hello World");

//multiline comment
/* This is a multiline comment
 */
//variable declaration methods
var a = 10;
console.log(a); //prints 10

a = 200;
console.log(a); //prints 200 here the value of a 200 is stored in memory address replacing the previous value 10 because var variable can be reassigned and redeclared in the same scope

//let varuiable can be reassigned but not redeclared in the same scope means we cannot use same varibale name twice in Let method whereas var can be redeclared in the same scope or same name
let b = 24;
console.log(b); //prints 24

b = 2;
console.log(b); //prints hello
let b = 3;
console.log(b); //SyntaxError: Identifier 'b' has already been declared error because let variable cannot be redeclared in the same scope

//const variable cannot be reassigned or redeclared in the same scope
const c = 23;
console.log(c); //prints 23

// c = 34;
// console.log(c);//error because const variable cannot be reassigned

// in dynamic method we can change the data type of variable at runtime anytime furthers

// there is two things data declaration and initlization, declaration is when we declare a variable and initialization is when we assign a value to that variable
// variables;

// hello this is example of git stash oeoeoe