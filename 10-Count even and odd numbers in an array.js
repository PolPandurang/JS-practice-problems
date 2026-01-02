
let arr = [0,4,1,4,5,6,2,9];
let even = 0;
let odd = 0;

for(let i=0;i<arr.length;++i){

    if(arr[i]==0){
        continue
    }
    if(arr[i]%2==0){
        even=even+1;
    }
        if(arr[i]%2==1){
        odd=odd+1;
    }

}
console.log(even)
console.log(odd)