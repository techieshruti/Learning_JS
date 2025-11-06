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
// let n = Number(prompt("enter any number"));
// if(isNaN(n))
// {
//   console.log("please enter a valid number")
// }
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
// else{
//   if (n > 0) {
//     for (let i = n; i > 0; i--) {
//       console.log(i);
//     }
//   }
//   else{
//     console.log("please enter any positive number");
//   }
// }
// sum of n natural num
// let sum =0;
// for(let i=0; i<=n; i++)
// {
//   sum +=i;
// }
// console.log(sum)

//factorial of n
// let fact=1;
// for(let i=1; i<=n; i++)
// {
//   fact *=i;
// }
// console.log(fact)

// factors of a number
// for(let i=0; i<=(Math.floor(n/2)); i++)
// {
//   if(n%i==0)
//   {
//     console.log(i);
//   }
// }
//   console.log(n);

// prime numbers
// function isPrime(n){
//   if(n<=1) return false;
//   if(n ==2) return true;
//   if(n%2==0) return false;
//   for(let i=3; i<=Math.floor(Math.sqrt(n)); i+=2)
//   {
//     if(n%1==0) return false;
//   }
//   return true;
// }

// console.log(isPrime(n));

//sum of digits
// console.log(n);
// let sum = 0;
// while(n>0)
// {
//   let ans = n%10;
//   sum += ans;
//   n=Math.floor(n/10);
// }
// console.log(sum);

// reverse a digit
// let rev =0;
// while(n>0){
//   let digit = n%10;
//   rev = rev*10 + digit;
//   n = Math.floor(n/10);
// }
// console.log(rev);

// strong number
// let copy = n;
// let sum =0;
// while(n>0){
//   let fact = 1;
//   let lastDigit = Math.floor(n%10);
//   for(let i=1; i<=lastDigit; i++)
//     {
//       fact = fact * i;
//     } 
//     sum = sum +fact;
//     n=Math.floor(n/10);
// }
// if(copy === sum){
//   console.log(`${copy} is strong Number`);
// }
// else{
//   console.log(`${copy} is not strong Number`);
// }

// **********pattern 1**********
// for(let i=0; i<3; i++)
// {
//     let res="";
//     for(let j=0; j<4; j++){
//         res+="* ";
//     }
//     console.log(res);
// }
// **********pattern 2**********
// for(let i =0; i<5; i++)
// {
//     let res = "";
//     for(let j=0; j<i; j++)
//     {
//         res+="* ";
//     }
//     console.log(res);
// }
// *************pattern 3**********
// for(let i=1; i<6; i++)
// {
//     let res="";
//     for(let j=1; j<=i; j++)
//     {
//         res+=j+" ";
//     }
//     console.log(res);
// }
// **********pattern 4*******
// for(let i=1; i<=5; i++)
// {
//     let res="";
//     for(let j=1; j<=i; j++)
//     {
//         res+=i+" ";
//     }
//     console.log(res);
// }
// ************pattern 5***********
// for(let i=5; i>=1; i--)
// {
//     let res="";
//     for(let j=1; j<=i; j++)
//     {
//         res+="* ";
//     }
//     console.log(res);
// }
// ************pattern 6*************
// for(let i=5; i>=1; i--){
//     let res="";
//     for(let j=1; j<=i; j++)
//     {
//         res+=j+" ";
//     }
//     console.log(res);
// }
// ************pattern 7***********
// let n=5;
// for(let i=0; i<5; i++)
// {
//     //spaces
//     let res="";
//     for(let j=0; j<n-i-1; j++){
//         res+="-";
//     }
//     //stars
//     for(let j=0; j<2*i+1; j++){
//         res+="*";
//     }
//     //spaces
//     for(let j=0; j<n-i-1; j++){
//         res+="-";
//     }
//     console.log(res);
// }
// **************pattern 8**************
//  let n=5;
//  for(let i=0; i<5; i++)
//  {
//      let res="";
//      //spaces
//      for(let j=0; j<i; j++)
//      {
//          res+="-";
//      }
//      //stars
//      for(let j=0; j<2*n-(2*i+1); j++)
//      {
//          res+="*";
//      }
//      //spaces
//      for(let j=0; j<i; j++)
//      {
//          res+="-";
//      }
//      console.log(res);
//  }

// ****************Arrays*************
// add element at end
let arr=[10,20,30,40,50] 
let value =60;
// arr[arr.length]=value;
// console.log(arr)
// TC- O(1) SP- O(1)

// add element at start
for(let i = arr.length-1; i>=0; i--)
{
    arr[i+1]=arr[i];
}
arr[0]=value;
console.log(arr);

// add element at specific position