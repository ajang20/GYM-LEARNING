// 4. Optional values
// const values = [1, 2, undefined, 4];

// Filter out undefined
// Ensure the final array is typed as number[], not (number | undefined)[]
const values:unknown[] = [1, 2, undefined, 4];

//first approach
function num(arr:unknown[]):number[]{
    return arr.filter(ele=>typeof ele==='number');
}
console.log(num(values))

//second approach 
const array:(number|undefined)[] = [1, 2, undefined, 4];

function arrNum(arr:(number|undefined)[]):number[]{
    return arr.filter((ele):ele is number =>typeof ele==="number")
}
console.log(arrNum(array));