// Implement a timeout for an asynchronous fetch request.
// If the request takes longer than 3 milliseconds, it should be aborted.

// Test URL
// https://restcountries.eu/rest/v2/all


function abort(url){
const controller = new AbortController();
setTimeout(()=>{
controller.Abort();
  },3000);
  
 return fetch(`${url}`,{signal:controller.signal})
        .then(response =>response.json())
        .then(data=>console.log(data))
        .catch(err=>console.log(`Something is aborted ${err}`));
}


//Examples in Use
abort("https://restcountries.eu/rest/v2/all");
abort("https://jsonplaceholder.typicode.com/posts");