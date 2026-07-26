// operators
//operators are basically symbols that perform operations on variables and values. In JavaScript, there are several types of operators, including:
// 1. Arithmetic operators
//examples: +, -, *, /, %, ++, --,**
console.log(5 + 2); // 7
let a = 10;
let b = 3;
console.log(a - b);
let sum = a + b;
console.log(sum);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(2 ** 4); // exponentiation

//assignment operators
//examples: =, +=, -=, *=, /=, %=
let c = 10;
c = c + 5; // c = 15
c += 5; // c = 20
console.log(c);
//c += d; //c= c+d

console.log("hello" + " " + "world"); //helloworld

//comparison operators
//examples: ==, ===, !=, !==, >, <, >=, <=
//== doesnt check type but checks value onplay
//===checks value and type both
let e = 10;
let f = "10";
console.log(e >= f);
console.log(e <= f);
console.log(e == f);
console.log(e === f);
console.log(e != f);
console.log(e !== f);
console.log(e > f);
console.log(e < f);
//logical operators
//AND && ,or || and Not !
// return boolean
console.log(true && true); //true
console.log(false && true); //false
console.log(true && false); //false

//OR
console.log(true || true); //true
console.log(false || true); //true
console.log(true || false); //true
console.log(false || false); //false
//NOT
console.log(!true);
console.log(!false);

//urinary operators
//increment -> ++ and decrement --
//pre & post
let count = 1;
console.log(count++); //  1  counts first and print
console.log(++count); //  3print first and count
console.log(count); //2

//ternary operator
//condition ? exp_1 :exp_2
let age = 16;
// age >= 18 ? console.log("can vote") : console.log("cant vote");
const res = age >= 18 ? "can vote" : "cant vote";
console.log(res);

// typeOf
console.log(typeof res);
console.log(typeof "");
console.log(typeof 12);
console.log(typeof count);
console.log(typeof count === "number");

//null coalescing or null safety -> ??
// let user = null;
let user;
console.log(user ?? "guest");

//
// TODO TASK = TYPE CONVERSION

// Type converison is a process of changing datatype from one type to another. It can be done in two ways, implicit and explicit. Implicit type conversion is done by the javascript engine automatically whereas explicit type conversion is done by the programmer using built-in functions like String(), Number(), Boolean() etc.
//explicit

console.log(Boolean(12)); //true
console.log(String(12)); //"12"
console.log(Number("12")); //12
console.log(Number("abc")); //NaN
// TODO = TYPE COERCING
// Type coercing is also the process changing datatype from one type to another but is done  by the javascript engine automaticllly without asking you .
console.log("12" + 12);
console.log(12 - "8");
//TODO TASK:
//truthy & falsely value
//if a value give output false in boolean context is called falsy value

//falsely value -> 0, -0,null, undefined,"",false, NaN

console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean(" "));
console.log(Boolean(NaN));

let x = 0;
if (!x) {
  console.log("run");
}
