// Function that must NOT mutate
// Write a function:

// Accepts a readonly number[]
// Returns a new sorted array
// Prove at compile time that mutation is impossible
const values:number[] = [2,1,3,0] as const;

function NoMutate(arr:readonly number[]):number[]{
let duplicate:number[] = [...arr]
return duplicate.sort((a,b)=>a-b);
}

console.log(NoMutate(values))