// function printUser(user) {
//   console.log(user.name.toUpperCase());
//   console.log(user.age + 1);
// }

// printUser({ name: "Sara", age: "25" });

//using anonymaous object type
function printUser(user:{name:string,age:number}) {
  console.log(user.name.toUpperCase());
  console.log(user.age + 1);
}
printUser({ name: "Sara", age: 25 });

//using a named object type
interface data{
    name:string,
    age:number
}
function printUser1(user:data){
    console.log(user.name.toUpperCase());
    console.log(user.age+1);
}
printUser1({ name: "Sara", age: 25 });


//using type alias
type Data = {
    name:string,
    age:number
}

function printUser2(user:Data) {
  console.log(user.name.toUpperCase());
  console.log(user.age + 1);
}
printUser2({ name: "Sara", age: 25 });
