
// ```
// Implement a timeout for an asynchronous fetch request. If the request takes longer than 3 milliseconds, it should be aborted.
// ```

// ```
// https://restcountries.eu/rest/v2/all
// ```

async function abort(url){
    const controller = new AbortController();

    setTimeout(()=>{
        controller.abort()
    },3);

    try {
        const Response = await fetch(`${url}`, { signal: controller.signal });
        const data = await Response.json();
        return console.log(data);
    } catch (err) {
        return console.log(err);
    }
}
//abort('https://restcountries.eu/rest/v2/all')

// ASYNC AND AWAIT VERSION
async function Abort(url,delay=5000) {
    const controller = new AbortController()

    setTimeout(()=>{
        controller.abort()
    },delay);

    try{
        const response = await fetch(url,{signal:controller.signal});
        if(!response.ok){
            reject(`Status Error:${response.status}`);
        }
        const contentType = response.headers.get('content-type');
        if(!contentType || !contentType.includes('content-type')){
            throw new Error(`Expected JSON but got ${contentType}`);
        }

        const data = await response.json()
        return console.log(data);
    }
    catch(err){
        return console.log(`Error ${err}`);
    }
    
}

//console.log(Abort('https://restcountries.eu/rest/v2/all'));
abort("https://jsonplaceholder.typicode.com/posts")
