// function greet(name) {
//   return "Hello " + name.toUpperCase();
// }

// const names = ["alice", "bob", 123];
// names.forEach(greet);



function greet(name:unknown):string | any {

  if(typeof name ==='string'){
    return "Hello " + name.toUpperCase();
  }
  else if(typeof name !=='string'){
    return name;
  } 
}

const names = ["alice", "bob", 123];
 names.forEach(name=>{
    console.log(greet(name))
 });

