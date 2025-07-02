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