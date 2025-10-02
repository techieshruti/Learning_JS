//🥇 Level 1: Print numbers 1 to 5

for(let i =1; i<=5; i++){
    console.log(i);
}

//🥈 Level 2: Greet all users in a list
let users = ["Rahul", "Simran", "Amit"];
users.forEach(function(greet){
    console.log("Hello "+ greet);
});

//🥉 Level 3: Keep doubling n till it reaches or passes 100
let n = 2;
while(n<100)
{
    console.log(n=n*2);
}

//🏅 Level 4: Loop over object keys
let user = { name: "Rahul", age: 22, city: "Delhi" };
for (let name in user){
    console.log(name + ":", user[name]);
}

// 🧠 Bonus: Print characters of the word "JAVASCRIPT"
let word="JAVASCRIPT";
for(let char in word){
    console.log(word[char]);
}

// better with charecters
for(let c of word){
    console.log(c);
}

// 💪 Mini Task (Interactive Practice)
let stud = ["Rahul", "Simran", "Amit"];
console.log(stud);

// push
stud.push("Sam");
console.log(stud);

// pop
let remove= stud.pop();
console.log(remove);

// shift
let remove1=stud.shift();
console.log(remove1);

// unshift
stud.unshift("remo");
console.log(stud);

// Create an array [1, 2, 3, 4] and double all values using map.
let arr=[1, 2, 3, 4];
let double = arr.map(num=>num*2);
console.log(double);
console.log(arr);

// From [12, 25, 8, 30], get only those ≥ 18 using filter.
let arr1 = [12, 25, 8, 30];
let age = arr1.filter(num => num>=18);
console.log(age);
console.log(arr1);

// Sum [10, 20, 30] using reduce.
let arr2 = [10, 20, 30];
let red = arr2.reduce((num,acc) => acc+num,0);
console.log(red);
console.log(arr2);

// Find first odd number in [2, 4, 5, 8] using find.
let arr3 =[2, 4, 5, 8];
let odd=arr3.find(num => num%2 !==0)
console.log(odd);
console.log(arr3);

// Check if any number is negative in [1, 2, -3, 4] using some.
let arr4 = [1, 2, -3, 4];
let neg = arr4.some(num=>num<=0)
console.log(neg);
console.log(arr4);

// Check if all numbers in [2, 4, 6] are even using every.
let arr5 = [2, 4, 6];
let even=arr5.every(num=>num>=1)
console.log(even);
console.log(arr5);

// 📌 Step 2: Custom .push() JS arrays are just objects with numbered keys, plus a length property.
let myArray={
    length: 0,
    data : {}
}

function customPush(array, value){
    array.data[array.length]=value;
    array.length++;
    return array.length;
}

customPush(myArray, "ram");
customPush(myArray, "Simran");
console.log(myArray);

// 📌 Step 2: Custom .pop()
function customPop(array, value){
    if (array.length === 0) return undefined;

    let lastIndex = array.length-1;
    let remove2 = array.data[lastIndex];
    delete array.data[lastIndex];
    array.length--;
    return remove2;
}

customPop(myArray); // removes 'Simran'
console.log(myArray);