// Write a JavaScript function that fetches data from an API
//  and retries the request a specified number of times if it fails.

 function retry (url,retries=3,delay){
    return new Promise((resolve,reject)=>{
        const attempt = (n) =>{
            fetch(url)
            .then(res=>{

                if(!res.ok){
                    throw new Error(`status error ${res.status}`);
                }

            return res.json();
            })
            .then(resolve)
            .catch((err)=>{
                if(n===0){
                    reject(`Number of attempts is depleted`);
                    return;
                }

                console.log(`Attempt ${retries - n}`);

                let wait = delay *(2**(retries-n));

                setTimeout(()=>attempt(n-1),wait);

            });
        }
        attempt(retries);
    });
 }
 retry("https://jsonplaceholder.typicode.com/posts/4", 3, 500)
 .then(console.log)
 .catch(err=>console.log(err))