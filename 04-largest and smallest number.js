// largest and smallest number in an array


let arr = [5,2,5,7,4,7];

let max=arr[0];
let min=arr[0];

for (let i=0;i<arr.length;i++){
    if(max<arr[i]) max=arr[i]
    if(min>arr[i]) min=arr[i]
}
console.log(max)
console.log(min)