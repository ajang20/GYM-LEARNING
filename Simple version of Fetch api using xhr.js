// Create a function called myFetch
// that should work as a simple version of the native fetch() API.
// The function myFetch should use the XMLHttpRequest to make a GET Request
// and return a promise that resolves with the request's response 
// and rejects with an error if any.

// function myFetch(){
//     //... your code here
// }

// myFetch('https://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data))
// .catch(error => console.log('Error:', error))

function myFetch(url){
  return new Promise ((resolve,reject)=>{
    //object 
    const xhr = new XMLHttpRequest();

    //create request
    xhr.open("GET",url)
    xhr.onload = function (){
    if(xhr.status===200){
        resolve(xhr.responseText);
    }
    else{
        reject(`Status Error:${response.status}`);
    }
    xhr.oneError = function (){
        reject(`Request Failed!`);
    }
}
    //send request
    xhr.send();
    });
}



myFetch(`https://jsonplaceholder.typicode.com/posts`)
.then(data=>console.log(data))
.then(err=>console.error(err))