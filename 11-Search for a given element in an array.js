// Search for a given element in an array.

let arr= [1,2,3,4,5,6];
let value = 6;
let ans = false;

for(let i=0;i<arr.length;i++){
    if(value==arr[i]){
     ans=true;
    }
}
console.log(ans);