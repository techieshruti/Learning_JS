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