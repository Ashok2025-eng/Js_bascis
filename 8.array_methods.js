// //* for of ->iterables -> array,strings can do for array and strings but not object
// let arr = [1, 3, 5, 7];
// for (i = 0; i < arr.length - 1; i++) {
//   console.log(arr[i]);
// }

//insted of above  // for (i = 0; i < arr.length - 1; i++) {
//   console.log(arr[i]);
// }you can also do this below
// for (let x of arr) {
//   console.log(x);
// }
// for (let value of "hello") {
//   console.log(value);
// }

// //* for in -> non iterables - >object
// let user = {
//   name: "john",
//   email: "john@gmail.com",
//   password: "12234455",
// };
// for (let key in user) {
//   console.log(key, user[key]);
// }

// for (let key in arr) {
//   console.log(key);
// }

// //!ARRAY METHODS
//arr.push(),pop,shift,unshift,splice,slice,includes,indeof

// //?Higher order methods
// used for loops,transform,filter
// let numbers = [1, 2, 3, 4, 5, 6];
// //*forEach -> loop
// //*arr_name.forEach(callback)

//value,index,arr
// numbers.forEach((value, index, arr) => {
//   console.log(value, index, arr);
// });

// //*Map -> transformation
//The map() method is an ES5 feature that creates a new array by applying a function to each element of the original array. It skips empty elements and does not modify the original array.
// //*return new array
// const doubled = numbers.map((v, i, arr) => {
//   return v * 2;
//   return "*";
// });
// console.log(numbers);
// console.log(doubled);

// let users = [
//   {
//     name: "john",
//     email: "john@gmail.com",
//   },
//   {
//     name: "ram",
//     email: "ram@gmail.com",
//   },
//   {
//     name: "alice",
//     email: "alice@gmail.com",
//   },
// ];
// let newUser = users.map((v, i, arr) => {
//   console.log(v);
//   return v.email;
// });
// console.log(users);
// console.log(newUser);

// const cart = [
//   { product: "Laptop", price: 1000, quantity: 1 },
//   { product: "Mouse", price: 25, quantity: 2 },
//   { product: "Headphones", price: 80, quantity: 3 },
// ];

// const Prices = cart.map((v, i, arr) => {
//   console.log(v);
//   return v.price * v.quantity;
// });
// console.log(Prices);
// const users = [
//   { id: 101, name: "alice" },
//   { id: 102, name: "bob" },
//   { id: 103, name: "charlie" },
// ];
// const updatedUser = users.map((user) => {
//   return {
//     name: user.name.toUpperCase,
//   };
// });
// console.log(updatedUser);

// //* filter,reduce
// let numbers = [12, 23, 34, 45, 6];

// const even_numbers = numbers.filter((num, i) => {
//   if (num % 2 === 0) {
//     return i;
//   }
// });
// console.log(numbers);
// console.log(even_numbers);

// const students = [
//   {
//     name: "john",
//     marks: [24, 56, 78, 68],
//   },
//   {
//     name: ["Alice"],
//     marks: [52, 56, 67, 78, 45],
//   },
//   {
//     name: "Bob",
//     marks: [52, 56, 67, 78, 45],
//   },
// ];

// const newArr = students.map((student) => {
//   console.log(student.marks);
//   const avg_marks =
//     student.marks.reduce((accum, mark) => {
//       return accum + mark;
//     }, 0) / student.marks.length;
//   return {
//     ...student,
//     avg_marks,
//   };
// });
// const passedStudent = newArr.filter((stu) => stu.avg_marks >= 50);

// const result = passedStudent.map((stu) => {
//   return stu.name;
// });

// console.log(result);

// VAR-02 – Tiered Electricity Bill: Calculate a bill using progressive slab rates ($1/unit for first 100, $2/unit for next 100, $5/unit beyond 200).
function calculateElectricBill(units) {
  let bill = 0;
  if (units <= 100) {
    bill = units * 1;
  } else if (units <= 200) {
    bill = units * 2;
  } else {
    bill = units * 5;
  }
  return bill;
}
console.log(calculateElectricBill(250));

function splitBill(total, friends) {
  const share = Math.floor(total / friends);
  const remainder = total % friends;
  return { share, remainder };
}

console.log(splitBill(1277, 4));

function ageCalculator(dobString) {
  const dob = new Date(dobString);
  const today = new Date();

  let age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();
  const dayDiff = today.getDate() - dob.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }
  return age;
}

console.log(ageCalculator("2005-04-11"));

function discountCheck(price, discount) {
  const discounts = (price * discount) / 100;
  const finalPrice = price - discount;
  return finalPrice.toFixed(2);
}
console.log(discountCheck(1200.5, 15));

function calculatePayroll(hours, rate) {
  if (hours > 40) {
    const regularPay = 40 * rate;
    const overTime = hours - 40;
    const overTimePay = overTime * (rate * 1.5);
    totalPay = regularPay + overTimePay;
  } else {
    totalPay = hours * rate;
  }
  return totalPay;
}
console.log(calculatePayroll(45, 40));
