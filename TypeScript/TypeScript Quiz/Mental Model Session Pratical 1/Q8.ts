// type Value = string | null | undefined;

// function logLength(value: Value) {
//   if (value) {
//     console.log(value.length);
//   }
// }

type Value = string | null | undefined;

function logLength(value: Value):void {
  if (typeof value === "string") {
    console.log(value.length);
    return;
  }
  else{
    console.log(value)
  }
}
logLength('Hello');