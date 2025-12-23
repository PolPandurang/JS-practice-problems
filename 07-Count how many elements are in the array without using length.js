// Count how many elements are in the array without using length.


let arr=[1,7,8,6,5,7,8];
let count=0;
for (let i=0;arr[i]!=undefined;i++){
    count++
}

console.log(count)



// another way
count=0;
for(value of arr){
    count++;
}
console.log(count)