//control flow

//control statement
//conditionals
//if/else/if else

//if
// let age = 18;
// if (age) {
//   console.log("you are", age, "years old");
// }

// let age = null;
// if (age) {
//   console.log("you are", age, "years old");
// } else {
//   console.log("not found");
// }

// let age = 20;
// if ((age = !20)) {
//   console.log("eligible to vote");
// } else {
//   console.log("not eligible");
// }

// else if
// let age = 12;
// if (age >= 60) {
//   console.log("old");
// } else if (age >= 18) {
//   console.log("adult");
// } else {
//   console.log("kid");
// }

//Switch Case
// let day = 4;
// switch (day) {
//   case 1: {
//     console.log("sunday");
//     break;
//   }
//   case 2: {
//     console.log("Monday");
//     break;
//   }

//   case 3: {
//     console.log("Tuesday");
//     break;
//   }
//   case 4: {
//     console.log("Wednesday");
//     break;
//   }
//   case 5: {
//     console.log("Thrusday");
//     break;
//   }
//   case 6: {
//     console.log("Friday");
//     break;
//   }
//   default: {
//     console.log("Enter the day between 1-6");
//   }
// }

//types of Loops
//do while loop
// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

//while loop
// let j = 1;
// while (j <= 10) {
//   console.log(j);
//   j++;
// }

// FOR LOOP

for (let k = 1; k <= 10; k++) {
  console.log(k);
}

//jump//branchinh keywords
//break, continue, return

for (let k = 1; k <= 10; k++) {
  if (k == 5) {
    continue;
    return;
  }
  console.log(k);
}
