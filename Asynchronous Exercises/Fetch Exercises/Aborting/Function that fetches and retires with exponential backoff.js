// Write a JavaScript function that fetches data from an API 
// and retries the request a specified number of times if it fails.
//  Wrap a promise around it.

function exponentialBackoff (url,retries=3, delay){
    return new Promise((resolve,reject)=>{
        let attempt = (n) =>{

             fetch(`${url}`)
    .then((response)=>{
        if(!response.ok){
            throw new Error(`Status Error ${response.status}`);
        }
        return response.json()
    })
    .then(resolve)
    .catch(err=>{
        
            if(n===0){
                console.log(`Number of retries exhausted!`)
                return reject(err);
            }

            console.log(`Attempt ${retries-n}`);

            let wait =  delay * (2**(retries-n));
            console.log(`Number of minutes left ${wait}`);

            setTimeout(()=>attempt(n-1),wait);
        })
   
    }
    attempt(retries)
    
})
    }
   


exponentialBackoff("https://deelay.me/3000/https://jsonplaceholder.typicode.com/posts/1",3,500)
.then(console.log)