type data = {name:string,age:number}

function printUser(user:data) {
  console.log(user.name.toUpperCase());
  console.log(user.age + 1);
}
printUser({ name: "Sara", age: 25 });


//interface
interface Data {name:string,age:number}
function PrintUser(user:Data):void{
  console.log(user.name.toUpperCase());
  console.log(user.age+1)
}
PrintUser({name:'sara',age:25});

//anonymous
function printUserData(user:{name:string,age:number}):void{
  console.log(user.name.toUpperCase());
  console.log(user.age+1)
}
printUserData({name:"sara",age:25})