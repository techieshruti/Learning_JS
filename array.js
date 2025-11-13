// ****************Arrays*************

// ******LEVEL 1 — EASY (Basics & Overwrite)*******

// add element at end
// let arr = [10, 20, 30, 40, 50];
// let value = 60;
// arr[arr.length]=value;
// console.log(arr)
// TC- O(1) SP- O(1)

// add element at start
// function addElem() {
//   for (let i = arr.length - 1; i >= 0; i--) {
//     arr[i + 1] = arr[i];
//   }
//   arr[0] = value;
//   return arr;
// }
// console.log(addElem());

// add element at specific position
// let pos =2;
// function addAtPos(){
//     for(let i=arr.length-1; i>=pos; i--){
//     arr[i+1]=arr[i];
// }
// arr[pos]=value
// return arr;
// }
// console.log(addAtPos());

// delete an elem from end of array
// arr.pop();
// arr.length=arr-length-1;

// delete an elem from start of array
// function removeEle(){
//     for(let i = 1; i < arr.length; i++){
//     arr[i-1]=arr[i]
// }
// arr.length=arr.length-1
// return arr
// }
// console.log(removeEle())

// delete an elem at specific pos
// let pos =2
// console.log(arr)
// for(let i=pos; i<arr.length;i++){
//     arr[i]=arr[i+1]
// }
// arr.length--;
// console.log(arr)

// overwrite
// console.log(arr)
// arr[1]=99
// console.log(arr)

/*****LEVEL 2 — MEDIUM (Combine operations + logic)*****/

// 9.Insert 60 and 70 at the end of [10,20,30,40,50] without using push (use only length property).
// let arr = [10, 20, 30, 40, 50];
// let val=60;
// arr[arr.length]=60;
// arr[arr.length]=70;
// console.log(arr)

// 10.Insert 5 at start, 25 at index 2, and 60 at end of [10,20,30,40,50].
// let arr = [10, 20, 30, 40, 50];
// arr[arr.length]=60;
// function elemInsert(){
//     for(let i=arr.length-1; i>=0; i--){
//     arr[i+1]=arr[i]
// }
// arr[0]=5;
// return arr;
// }
// console.log(elemInsert())

// function elemAtMid(arr,pos,val){
//     for(let i=arr.length-1; i>=pos; i--){
//     arr[i+1]=arr[i]
// }
// arr[pos]=val;
// return arr;
// }

// console.log(elemAtMid(arr,2,25))

// 11.Delete the first and last element of [10,20,30,40,50].
// let arr = [10,20,30,40,50];
// arr.length--;
// function delStart(){
//     for(let i=0; i<=arr.length-1;i++){
//         arr[i]=arr[i+1]
//     }
//     arr.length--;
//     return arr;

// }
// console.log(delStart())

// 12.Write a function removeAt(arr, pos) that deletes the element at index pos and returns the modified array.
// let arr = [10,20,30,40,50]
// function removeAt(arr, pos){
// if(pos<0 || pos>=arr.length){
//     console.log("invalid position");
//     return arr;
// }
// else {

//     for(let i=pos; i<=arr.length-1; i++)
//     {
//         arr[i]=arr[i+1]
//     }
//     arr.length--;
//     return arr;

// }
// }
// console.log(removeAt(arr, 6));

// 14.Traverse [10,15,20,25,30], replace each even number with 0
// let arr = [10,15,20,25,30];
// function even(){
//     for(let i=0; i<=arr.length-1; i++){
//     if(arr[i]%2 === 0){
//         arr[i]=0
//     }
// }
// return arr
// }
// console.log(even())

// 15.Given [0,1,0,3,12], move all zeros to the end without using extra array.
// let arr = [0, 1, 0, 3, 12];
// function moveZero() {
//   for (let k = 0; k < arr.length; k++) {
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] === 0) {
//         let temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//       }
//     }

//   }
//   return arr;
// }
// console.log(moveZero());
//*********optimized approach********/
// let arr =[5,0,3,0,12,0,1]
// function moveZero(){
//     let L =0;
// for(let R=0; R<=arr.length-1; R++){
//     if(arr[R] !==0){
//         [arr[L], arr[R]] = [arr[R], arr[L]]
//         L++;
//     }
// }
// return arr;
// }
// console.log(moveZero(arr))

// 16.Rotate Array Right by 1
// [10,20,30,40,50] → [50,10,20,30,40]
// let arr = [10, 20, 30, 40, 50];
// function rotate() {
//   let val = arr[arr.length - 1];
//   arr.length--;
//   for (let i = arr.length - 1; i >= 0; i--) {
//     arr[i + 1] = arr[i];
//   }
//   arr[0] = val;
//   return arr;
// }
// console.log(rotate(arr));

// 17.Rotate Array Right by given no.
// [10,20,30,40,50] → [50,10,20,30,40]

// 18.Reverse Array (manual) Swap elements using a loop until the middle.
// Example: [10,20,30,40,50] → [50,40,30,20,10]

// let arr = [10, 20, 30, 40, 50];

// let mid = Math.floor(arr.length / 2);

// function reverse() {
//   let L = 0;
//   for (let R = arr.length - 1; R >= mid; R--) {
//     if (arr[R] !== mid) {
//       [arr[L], arr[R]] = [arr[R], arr[L]];
//       L++;
//     }
//   }
//     return arr;
// }
// console.log(reverse());

//***************LEVEL 3 — HARD****************

// 🎯 Goal: Combine shifting, multiple updates, and deep index control — no built-in helpers.

// 19. Insert While Maintaining Sorted Order.
// Insert 35 into [10,20,30,40,50] so array stays sorted.
// (Find where 35 fits → shift right → insert.)
// let arr = [10, 20, 30, 40, 50];
// let pos = arr.length; let val=35;
// function insert() {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 35) {
//       pos = i;
//       break;
//     }
//   }
//   for (let i = arr.length - 1; i >= pos; i--) {
//     arr[i + 1] = arr[i];
//   }
//   arr[pos] = val;
//   return arr;
// }
// console.log(insert());

// optimized approach

// let arr = [10, 20, 30, 40, 50];
// let L=0; val=35
// let R=arr.length-1;
// let P=arr.length;
// while(L<=R){
//     let mid=Math.floor((L+R)/2);
//     if(arr[mid]>val){
//         P=mid;
//     R=mid-1;
//     }
//     else{
//         L=mid+1;
//     }
// }

// for (let i = arr.length - 1; i >= P; i--) {
//   arr[i + 1] = arr[i];
// }
// arr[P]=val
//   console.log(arr)


// 20. Delete All Occurrences of a Given Value
// Input: [10,20,30,20,40,50,20] and value 20
// Output: [10,30,40,50]
// let arr = [10,20,30,20,40,50,20];
// function removeOccurrences(arr,val){
//     let j=0;
//     for(let i=0; i<arr.length; i++){
//     if (arr[i] !== val) {
//       arr[j] = arr[i];
//       j++;
//     }
//     }
// arr.length=j;
// return arr;
// }
// console.log(removeOccurrences(arr,20))


// 21. Insert Multiple Values at Once
// Insert [60,70,80] at position 3 in [10,20,30,40,50] manually.
// let arr = [10, 20, 30, 40, 50];
// let k = [60, 70, 80];

// function insertMultiple(arr, pos, k) {
//   let count = k.length;
//   // Step 1: Shift existing elements right by count
//   for (let i = arr.length - 1; i >= pos; i--) {
//     arr[i + count] = arr[i];
//   }
//   //Step 2: Insert all new elements
//   for (let j = 0; j < count; j++) {
//     arr[pos + j] = k[j];
//   }
//   return arr;
// }
// console.log(insertMultiple(arr, 3, k));


// 22. Remove Duplicates (without Set)
// Input: [10,20,20,30,30,30,40]
// Output: [10,20,30,40]

// 23. Merge Two Sorted Arrays into One (without concat or sort)
// [1,3,5,7] and [2,4,6,8] → [1,2,3,4,5,6,7,8]

// 24. Rotate Array Right by K positions
// [1,2,3,4,5,6,7] and k=3 → [5,6,7,1,2,3,4]
// (Challenge: do it in-place.)

// 25. Shift All Negative Numbers to Left
// [1,-1,3,-2,4,-5] → [-1,-2,-5,1,3,4]
// (Partition technique like in QuickSort.)

// 26. Implement Custom Splice
// Create mySplice(arr, pos, delCount, val) →
// works like JS splice: removes delCount elements at pos, optionally inserts val.

// 27. Find Missing Number (1 to n)
// [1,2,4,5,6] → 3

// 28. Dynamic Insertion Game
// Start empty array [].
// Insert random numbers at random positions (0 to current length).
// Print the array after each insertion.
