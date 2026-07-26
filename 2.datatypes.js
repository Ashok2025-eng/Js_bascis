// *
let i = null;
console.log(i); //prints null
// *bigint
console.log(Number.MAX_SAFE_INTEGER); //prints 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); //prints -9007199254740991
let j = 9007199254740991;
const big = BigInt(12);
console.log(big); //prints 12n
console.log(9007199254740991n + 2n); //prints 9007199254740992n
console.log(9007199254740991n + 3n);
//console,log(12n+1); //error because we cannot add bigint and number
console.log(12n + 1n);

// *symbol
let id = Symbol("id");
let id1 = Symbol("id");
console.log(id); //prints Symbol(id)
console.log(id1); //prints Symbol(id)
console.log(id === id1); //prints false

//undefined and not defined are different, undefined is a primitive data type which is assigned to a variable when it is declared but not initialized whereas not defined is an error which occurs when we try to access a variable which is not declared or initialized
let k;
console.log(k); //prints undefined
console.log(L); //prints ReferenceError: L is not defined

// non primitive data types are objects and functions which are reference types
//*object
// TODO TASK = TYPE CONVERSION

// Type converison is a process of changing datatype from one type to another. It can be done in two ways, implicit and explicit. Implicit type conversion is done by the javascript engine automatically whereas explicit type conversion is done by the programmer using built-in functions like String(), Number(), Boolean() etc.
//explicit

console.log(Boolean(12)); //true
console.log(String(12)); //"12"
console.log(Number("12")); //12
console.log(Number("abc")); //NaN
// TODO = TYPE COERCING
// Type coercing is also the process changing datatype from one type to another but is done  by the javascript engine automaticllly without asking you .

// *array
// *function
