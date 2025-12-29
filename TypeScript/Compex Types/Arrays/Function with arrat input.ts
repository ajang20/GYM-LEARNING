// 2. Function with array input
// Write a function that:
// Accepts an array of numbers
// Returns the average
// Errors at compile time if the array contains anything else

function average(arr:number[]):number{
    let sum:number =  arr.reduce((a:number,b:number)=>a+b,0);
   return sum/arr.length;
}

console.log(average([10,20,30,40]));


