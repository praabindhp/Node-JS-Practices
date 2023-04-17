// Promises are objects that represent the eventual completion or failure of an asynchronous operation and allow chaining of multiple asynchronous tasks.

// const fs = require('fs');

// const data = fs.readFile('hello.txt', 'utf-8', function(err, res) {
//     if(err){
//         console.log(err)
//     } else {
//         console.log(res)
//     }
// });

function fetchData() {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        const data = "Hello, world!";
        resolve(data); // Resolves the promise with data
      }, 1000);
    });
  }
  
  fetchData()
    .then(function(data) {
      console.log(data);
    })
    .catch(function(error) {
      console.error(error);
    });

// fetchData returns a Promise that resolves with the fetched data. The then method is used to handle the resolved value, and the catch method is used to handle any errors that may occur during the asynchronous operation.