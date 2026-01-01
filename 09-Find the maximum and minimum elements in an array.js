// Find the maximum and minimum elements in an array.

let arr = [12,43,567,39,7,8,1];
let max = arr[0];
let min= arr[0];

for(let i=0 ; i<arr.length;++i){
    if(max<arr[i]){
        max=arr[i]
    }
    else if(min>arr[i]){
        min=arr[i]
    }
};
console.log(max)
console.log(min);