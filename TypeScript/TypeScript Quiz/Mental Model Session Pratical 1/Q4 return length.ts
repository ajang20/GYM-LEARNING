// type ID = string | number;

// function getLength(id: ID) {
//   return id.length;
// }

// getLength(123);
// getLength("abc");

type ID = string | number;

function getLength(id: ID):number {
 return typeof id==='string'?id.length:(id.toString()).length;
}

console.log(getLength(123))
console.log(getLength("abc"))