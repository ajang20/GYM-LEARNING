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

        //status errors
    if(xhr.status<200 || xhr.status>299){
        reject(`Status Error: ${xhr.status}`);
        return;
    }
    //checking content type errors
     const contentType = xhr.getResponseHeader('content-type');
   
  if(!contentType || !contentType.includes('application/json')){
        reject(`content type ain't JSON but ${contentType}`);
        return;
     }
     
     try{
        const response = JSON.parse(xhr.responseText);
        resolve(response)
     }
     catch(err){
        reject(err)
     }
}
xhr.onerror = function (){
        reject(`Request Failed!`);
    }
    //send request
    xhr.send();
    });
}


myFetch(`https://jsonplaceholder.typicode.com/posts`)
.then(data=>console.log(data))
.catch(err=>console.log(err))