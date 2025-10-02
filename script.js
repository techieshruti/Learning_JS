// variables
console.log(a);// undefined
var a = 10;
console.log(a); //10
let b = 20;
console.log(b); //20
const c = 30;
console.log(c); //30


function multiply(a, b) {
  var result = a * b;
  return result;
}

var x = multiply(2, 3); 
var y = multiply(4, 5);

console.log(x); // 6
console.log(y); // 20
