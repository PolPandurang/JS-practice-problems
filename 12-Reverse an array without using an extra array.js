// Reverse an array without using an extra array.

let arr = [1,2,3,4];
let a=0;
for(let i=0;i<arr.length/2 ;i++){
   a=arr[i];
   arr[i]= arr[arr.length-1-i];
   arr[arr.length-1-i]= a;
}

console.log(arr)