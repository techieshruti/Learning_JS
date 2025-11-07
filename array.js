// ****************Arrays*************
// add element at end
let arr = [10, 20, 30, 40, 50];
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
console.log(arr)
arr[1]=99
console.log(arr)