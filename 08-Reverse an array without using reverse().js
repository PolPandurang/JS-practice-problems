// Reverse an array without using reverse().


let arr= [1,2,3,4,5];

for(let i=1;i<=arr.length;i++){
    arr[i-1]=arr[arr.length-i];
}
console.log(arr);