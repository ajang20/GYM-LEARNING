
// function callback_BasedFunction(arg1, arg2, callback) {
//   // Perform asynchronous operations
//   // Call the callback with the result or error
//   setTimeout(() => {
//     const result = arg1 + arg2;
//     if (result % 2 !== 0) {
//       callback(null, result);
//     } else {
//       callback(new Error('Result is not odd!'), null);
//     }
//   }, 1000);
// }

function callback_BasedFunction(arg1, arg2, callback) {
  setTimeout(() => {
    const result = arg1 + arg2;
    if (result % 2 !== 0) {
      callback(null, result);
    } else {
      callback(new Error('Result is not odd!'), null);
    }
  }, 1000);
}

function callbackPromise(arg1,arg2){
    return new Promise((resolve, reject)=>{
      callback_BasedFunction(arg1,arg2,(err,data)=>{
      err?reject(err):resolve(data);
        });
    });
}

//with thenables
callbackPromise(11,1)
.then(data=>console.log(data))
.catch(err=>console.log(err))

//with async
async function run(){
    try{
        const data = await callbackPromise(11,2);
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
}
run()