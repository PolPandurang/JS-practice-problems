let arr = [1,2,3,4,5];

for (let i=0 ;i<arr.length;i++){
    console.log(arr[i])
}

// using for of loop
for (let  value of arr){
    console.log(value)
}

// using for each loop
arr.forEach(value => console.log(value))