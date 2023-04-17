// Async/await is a modern approach to handling asynchronous code that uses a combination of Promises and async and await keywords to write more synchronous-looking code.

function fetchData() {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        const data = "Hello, World!";
        resolve(data); // Resolves the promise with data
      }, 1000);
    });
  }
  
  async function getData() {
    try {
      const data = await fetchData(); // Wait for the promise to resolve
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  
  getData();
  
// the getData function is declared as async, and the await keyword is used to wait for the Promise returned by fetchData to resolve. The try block handles the resolved value, and the catch block handles any errors that may occur during the asynchronous operation.