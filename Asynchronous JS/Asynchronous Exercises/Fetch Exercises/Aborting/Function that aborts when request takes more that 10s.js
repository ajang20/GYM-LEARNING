// Write a function that takes a URL 
// and fetches data from that URL 
// but aborts when the request takes more than 10ms

 function abort2(url){
    let controller = new AbortController();
    
    setTimeout(()=>{
       controller.abort();
    },1000);
    
 return fetch(`${url}`,{signal:controller.signal})
       .then(response=>response.json())
       .then(data=>console.log(data))
       .catch(err=>console.log(err))
  }
  abort2("https://restcountries.eu/rest/v2/all");
  abort2("https://jsonplaceholder.typicode.com/posts");


  //ASYNC AND AWAIT VERSIONS
  async function Abort(url){
    const controller = new AbortController();

    setTimeout(()=>{
      controller.abort();
    },10)

    try{
      const response = await fetch(`${url}`,{signal:controller.signal});

      if(!response.ok){
        throw new Error(`status Error:${response.status}`);
      } 

      const data = await response.json()
      console.log(data);
    }
    catch(err){
      console.log(`Something is aborted ${err}`)
    }
  }
  Abort("https://jsonplaceholder.typicode.com/posts");