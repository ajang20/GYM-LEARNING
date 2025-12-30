// function greet(name) {
//   return "Hello " + name.toUpperCase();
// }

// const names = ["alice", "bob", 123];
// names.forEach(greet);

function greet(name:string|number):string{
  if(typeof name==='string'){
     return `Hello ${name.toUpperCase()}`;
  }
  else{
    return `Not string, data type is ${typeof name}`;
  }
}

const names:(string|number)[] =["alice", "bob", 123];
names.forEach(name=>{
  console.log(greet(name))
});