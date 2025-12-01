// Create a function called fetchUserTodos that 
// uses the Promise.all() method to fetch users and todos concurrently 
// from the provided API endpoints and combine them based on the userId. 
// The function should return a promise that resolves with the combined data.

// - Users endpoints:
// [`https://jsonplaceholder.typicode.com/users`](https://jsonplaceholder.typicode.com/users)
// - Todos endpoints:
// [`https://jsonplaceholder.typicode.com/todos`](https://jsonplaceholder.typicode.com/todos) 
  
// The returned promise should resolve into an array of users,
// where each user object has a new key todos.
// This key should contain an array of todos that belong to the user, 
// determined by matching the userId of the todo with the id of the user. 
// User objects may look like 


//   // User object may look like
//   {
//       id: 10,
//     name: 'Clementina DuBuque',
//     ...
//   }

//   // Todo object may look like
//   {
//       userId: 5,
//     completed: false,
//       ...
//   }

//   // The result array will have objects that look like

//   {
//       id: 10,
//     name: 'Clementina DuBuque',
//     todos: [
//           {
//               userId: 10,
//             completed: false,
//               ...
//           },
//           {
//               userId: 10,
//             completed: false,
//               ...
//           }
//       ]
//       ...
//   }
function fetchUserTodos(arr){
    const urls = arr.map(ele=>fetch(ele).then(res=>res.json()))
    return Promise.all(urls)
}
let links = [`https://jsonplaceholder.typicode.com/users`,`https://jsonplaceholder.typicode.com/todos`]
fetchUserTodos(links)
.then(data=>{
    let [user,todo]= data
    // console.log(user)
    //  console.log(user)
    //  let todos = todo.filter(ele=>ele)
// data.filter((ele)=>{

    let array =[]

    for(let j=0; j<user.length;j++){

         let object = {
        id: user[j].id,
        name:user[j].name,
        Todos:[]
    }

    for(let i=0;i<todo.length;i++){
        if(user[j].id===todo[i].userId){
      object.Todos.push(todo[i])
        }
    }
    array.push(object)
    }

    return array;

})
.then(data=>console.log(data))
.catch(err=>console.error(err))