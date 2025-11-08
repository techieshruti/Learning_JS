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
let arr =[5,0,3,0,12,0,1]
function moveZero(){
    let L =0;
for(let R=0; R<=arr.length-1; R++){
    if(arr[R] !==0){
        [arr[L], arr[R]] = [arr[R], arr[L]]
        L++;
    }
}
return arr;
}
console.log(moveZero(arr))
