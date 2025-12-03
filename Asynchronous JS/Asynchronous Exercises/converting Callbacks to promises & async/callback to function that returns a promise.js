// Q1. Convert this callback version of getUser into a function that returns a Promise:
// function getUser(id, callback) {
//   setTimeout(() => {
//     if (!id) return callback('Missing ID');
//     callback(null, { id, name: 'Lean' });
//   }, 1000);
// }


// Expected:

// getUserPromise(10).then(...)

//callback
function getUser(id, callback) {
  setTimeout(() => {
    if (!id){
       return callback('Missing ID'); 
    } 
    else{
       callback(null, { id, name: 'Lean' }); 
    }
    
  }, 1000);
}
//callback wrapped in a promise function
function getUserPromisified(id){
    return new Promise((resolve,reject)=>{
        getUser(id,(err,data)=>{
            if(err){
                reject(err);
            }
            resolve(data);
        })
    })
}

// Then & catch
getUserPromisified(10)
.then(data=>console.log(data))
.catch(err=>console.log(err))

// async & await operation
async function run(){
    try{
    const data = await getUserPromisified(10);
    console.log(data);
    }
    catch(err){
        console.log(err);
    }
}
run()
