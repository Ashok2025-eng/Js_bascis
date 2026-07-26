//Array is a complex data structure
//methods to create array
//1 new keyword/array constructor
// const arr = new Array(12);

//2 array literal

//element
// numbered indexed -> start from 0> oth index

// const numbers = [12, 2, 5, 6, 8, 73];

//index , bracket notation to read
// array length
//syntax array.length
// const first = numbers[0];
// numbers.push(15, 16, 17);
// numbers.unshift(7);
// console.log(first);
// console.log(numbers[1]);
// console.log(numbers[4]);

// adding new element to last push
//push ->numbers.push(...items)

//to add elements in first of the element
//unshift -> num.unshift

//Removing element for array
//end index
// syntax pop()>numbers.pop()
// console.log("length of the array is:", numbers.length);
// console.log("last element:", numbers[numbers.length - 1]); //to find last element of array  when added or removed

// const ele = numbers.pop(); //remove array as well as return removed array
// console.log(ele);

//removign element from the start with shift
//synatax shift()> numbers.shift()
// const elem = numbers.shift();
// console.log(elem);
// console.log(numbers);

//splice

//Splice is used to add any elemnt in the middle or remove
// syntax numbers.splice(start_index,delete_count, ele1,ele2,ele3)

// const a = numbers.splice(1, 2, 34, 5, 6, 7, 8);
// console.log(numbers);
// console.log(numbers.length);

//SEARCHING ARRAY
//INCLUDE / FEATURE BOOLEAN
// console.log(numbers.includes(8));

// console.log(numbers.includes(100));

//INDEXOF
// used to find the index of existing elements in an array
// syntax indexOf()

// console.log(numbers.indexOf(12));
// console.log(numbers.indexOf(112));

// const colors = ["Red", "Blue", "green"];

// const firstcolor = colors[0];
// colors.push("yellow", "black");
// colors.unshift("dark", "maron");
// const clr = colors.pop();
// console.log("color removed at back", clr);
// const fornt = colors.shift();
// console.log("color remvoed at front", fornt);
// console.log(firstcolor);

// console.log("length of the color is:", colors.length);
// console.log("the last element of colors is:", colors[colors.length - 1]);

// console.log(colors);

//Splice is used to add any elemnt in the middle or remove
// syntax numbers.splice(start_index,delete_count, ele1,ele2,ele3)

//PRACTICE
//LENGTH
let countries = ["Spain", "France", "Portugal", "Brasil"];
console.log(countries);
console.log(countries[0]);
console.log(countries[3]);
console.log(countries.length);
console.log(countries[countries.length - 1]);

//push to add at the end
countries.push("Croatia", "Netherlands");
console.log(countries);
//Unshift to add at the begainning
countries.unshift("Norway", "Germany");
console.log(countries);

//Pop to remove from the end
const ctr = countries.pop();
console.log(ctr);
//shift to remove from the front of an arry
const ctrl = countries.shift();
console.log(ctrl);

//splice
const c = countries.splice(0, 1, "cape verde");
console.log(countries);

//Includes gives boolean values
console.log(countries.includes("cape verde"));
console.log(countries.includes("cavo verde"));

//indexOf
console.log(countries.indexOf("cape verde"));

//SLICE
console.log(countries.slice(1, 5));
console.log(countries.slice(0, 4));
