// Create a function called `getFastPosts`that fetches posts 
// from multiple endpoints simultaneously and returns data 
// from the fastest source.

// const apiUrls = [
//   'https://jsonplaceholder.typicode.com/posts/4',
//   'https://jsonplaceholder.typicode.com/posts/5',
//   'https://jsonplaceholder.typicode.com/posts/6'
// ];

function getPosts(url){
    let 
    return fetch(url)
    .then(Response=>Response.json)
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
}