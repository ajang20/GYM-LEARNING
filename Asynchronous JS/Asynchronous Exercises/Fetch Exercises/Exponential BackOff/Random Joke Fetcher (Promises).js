// ## **Exercise 1 – Random Joke Fetcher (Promises)**

// **Your task:** Implement a function `fetchRandomJokeWithRetries()` that does the following:

// 1. **Fetches a random joke** from the Joke API:
    
//     `https://official-joke-api.appspot.com/random_joke`
    
// 2. If the request fails (network error or non-200 status), retry up to **3 times**.
// 3. Once a successful response is received, **return an object** with:
//     - `setup`: the setup of the joke
//     - `punchline`: the punchline of the joke
// 4. **Log errors** if all retries fail.

// **Tips:**

// - Use `Promise` constructor and `.then()/.catch()` for everything (no async/await yet).
// - Use `fetch(url)` and check `response.ok`.
// - You can simulate delays between retries using `setTimeout`.

function fetchRandomJokeWithRetries(url,retries=3,delay){
    return new Promise((resolve,reject)=>{

        const attempt = (n) => {
            
            fetch(url)
            .then(res=>{
                if(!res.ok){
                    throw new Error(`Status Error ${res.status}`);
                }
                return res.json();
            })
            .then(resolve)
            .catch(err=>{
                if(n===0){
                    reject(`Number of attempts is dipleated`);
                    return
                }

                console.log(`This is attempt ${retries-n}`);

                let wait = delay*(2**(retries-n));

                setTimeout(()=>attempt(n-1));
            })
        }
        attempt(retries);
    })
}

fetchRandomJokeWithRetries(`https://official-joke-api.appspot.com/random_joke`,3,500)
.then(data=>{
    
    let object = {
        setup:data.setup,
        punchLine: data.punchline
    }

    console.log(object)
})
.catch(err=>console.log(err))