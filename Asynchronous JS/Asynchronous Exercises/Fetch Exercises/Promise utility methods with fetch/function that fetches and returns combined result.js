// Write a JavaScript function that fetches data from multiple APIs
//  concurrently and returns a combined result using Promises
const apiUrls = [
  'https://jsonplaceholder.typicode.com/posts/4',
  'https://jsonplaceholder.typicode.com/posts/5',
  'https://jsonplaceholder.typicode.com/posts/6'
]

function fetches(url){
    const arr = url.map(ele=>fetch(ele).then(res=>{
        if(!res.ok){
            throw new Error(`Status error :${res.status}`)
        }

        const contentType = res.headers.get('content-type');
        if(!contentType || !contentType.includes('application/json')){
            throw new Error(`Content type is no JSON but ${contentType}`)
        }

        return res.json();
    }));

    return Promise.all(arr);
}

fetche(apiUrls)
.then(data=>{
    if(!data){
        throw new Error('No data');
    }
    console.log(data)
})
.catch(err=>console.error(err))


//ASYNC & AWAIT
async function fetche(url){
    
        const arr = url.map(async ele=>{
        const response = await fetch(ele);

        if(!response.ok){
            throw new Error(`Status Error :${response.status}`);
        }

        const contentType = response.headers.get('content-type');
        if(!contentType || !contentType.includes('application/json')){
            throw new Error(`Content type is not JSON but ${contentType}`);
        }

        return response.json();
        });
        
    return Promise.all(arr);

}