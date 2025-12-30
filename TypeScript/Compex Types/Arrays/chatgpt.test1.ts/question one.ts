// const scores = [10, 20, 30];
// Explicitly type this array.

// Prevent adding a string later.

// What happens if you try scores.push("40")?

//explicitly typing the array
const scores = [10,20,30]

//Preventing adding strings
const scores1:number[] = scores;

//try pushing a string
scores.push("40")
//An error is thrown saying that string is no assinable to the variable of number. 