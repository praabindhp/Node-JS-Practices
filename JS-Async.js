function fetchData() {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        const data = "Hello, world!";
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
  