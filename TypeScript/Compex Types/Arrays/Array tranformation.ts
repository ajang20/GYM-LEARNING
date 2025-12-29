// 3. Array transformation
// Given:
// const names = ["lean", "alex", "sarah"];

// Return a new array with all names capitalized
// Ensure the return type is inferred correctly (no any)

const names:string[] = ["lean", "alex", "sarah"];

function capitalized(arr:string[]):string[] {
return arr.map(ele=>ele.toUpperCase());
}

console.log(capitalized(names))