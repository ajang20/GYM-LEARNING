// Write a JavaScript function fetchToDo that uses XMLHttpRequest 
// to fetch data from the given URL (https://jsonplaceholder.typicode.com/todos/1). 
// The function should handle both successful responses and 
// errors (such as network issues or invalid URLs). 
// Upon receiving a successful response, it should log the fetched data to the console. 
// If there's an error, it should catch the error and log an appropriate message.

function XHRfetch(url){
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open('GET',url);

        xhr.onload = function (){
        
            if(xhr.status < 200 && xhr.status > 299){
                reject(`Status Error : ${xhr.status}`);
                return;
            }

            const contentType = xhr.getResponseHeader("content-type");
            if(!contentType.includes('application/json') || !contentType){
                reject(`Content type not JSON but ${contentType}`)
                return;
            }

            try{
                const data = JSON.parse(xhr.responseText)
                resolve(data);
            }
            catch(err){
                reject(`Error ${err}`)
            }
        }


        xhr.onerror = function (){
            reject(`Network Error!`);
        }

        xhr.send();
    });
}
XHRfetch('https://jsonplaceholder.typicode.com/todos/1')
.then(data=>console.log(data))
.catch(err=>console.error(err))