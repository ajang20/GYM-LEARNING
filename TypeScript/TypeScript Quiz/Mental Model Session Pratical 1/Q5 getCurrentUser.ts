// type User = {
//   id: number;
//   name: string;
//   isAdmin: boolean;
// };

// function getCurrentUser(): User {
//   if (Math.random() > 0.5) {
//     return { id: 1, name: "Alice", isAdmin: true };
//   }
// }

type User = {
  id: number;
  name: string;
  isAdmin: boolean;
};

function getCurrentUser(): User {
  if (Math.random() > 0.5) {
    return { id: 1, name: "Alice", isAdmin: true };
  }
  throw new Error('No current User')
}

console.log(getCurrentUser());

//option two
function GetCurrentUser():User|undefined{
    if(Math.random() > 0.5){
         return { id: 2, name: "Alice", isAdmin: true };
    }
}
console.log(GetCurrentUser());


//option 3
function getCurrentuser():User|null{
if(Math.random() > 0.5){
    return { id: 3, name: "Alice", isAdmin: true };
}
else{
    return null
}
}
console.log(getCurrentuser())