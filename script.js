// // variables
// console.log(a);// undefined
// var a = 10;
// console.log(a); //10
// let b = 20;
// console.log(b); //20
// const c = 30;
// console.log(c); //30

// //**************************************
// function multiply(a, b) {
//   var result = a * b;
//   return result;
// }

// var x = multiply(2, 3); 
// var y = multiply(4, 5);

// console.log(x); // 6
// console.log(y); // 20

// //**************************************
// var p = 100;
// function test(num) {
//   console.log("Inside function, p =", p);
//   var a = 50;
//   console.log("Now a =", p);
//   return num + p;
// }
// var result = test(10);
// console.log("Final result =", result);
// // Inside function, p = undefined
// // Now p=50
// // Final result = 60

// // *****************************
// //closures
// function outer() {
//   var count = 0;

//   return function inner() {
//     count++;
//     console.log("Count:", count);
//   };
// }
// var counter = outer();
// counter(); // Count: 1
// counter(); // Count: 2
// counter(); // Count: 3


// function makeAdder(x) {
//   return function(y) {
//     return x + y;
//   };
// }

// var add5 = makeAdder(5);
// var add10 = makeAdder(10);

// console.log(add5(2));   // ?
// console.log(add10(3));  // ?

// var x = 1;

// function outer() {
//   var x = 10;

//   return function inner() {
//     var x = 20;
//     console.log(x);
//   };
// }

// var fn = outer();
// fn();
// console.log(x);

// // ***************RECURSION**********
// function factorial(n) {
//   if (n === 0) return 1;  // base case
//   return n * factorial(n - 1);
// }
// console.log(factorial(5));

// loops print n words
let n = Number(prompt("enter any number"));
if(isNaN(n))
{
  console.log("please enter a valid number")
}
// else{
//   if(n > 0) {
//     for(let i = 0; i < n; i++) {
//       console.log("!!Welcome!!");
//     }
//   } else {
//     console.log("Please enter a positive number");
//   }
// }

// 1-n and n-1
else{
  if (n > 0) {
    for (let i = 0; i < n; i++) {
      console.log(i);
    }
  }
  else{
    console.log("please enter any positive number");
  }
}
