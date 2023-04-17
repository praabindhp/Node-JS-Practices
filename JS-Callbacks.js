// Callbacks are functions that are passed as arguments to other functions and are executed at a later time, usually after an asynchronous task completes.

// console.log('fired first');
// console.log('fired second');

// setTimeout(() => {
//     console.log('fired third');
// }, 2000);

// console.log('fired last');

function fetchData(callback) {
  setTimeout(function() {
    const data = "Hello, world!";
    callback(null, data); // Passes data to the callback function
  }, 1000);
}

function handleData(error, data) {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
}

fetchData(handleData); // Call fetchData with handleData as the callback function

// fetchData simulates an asynchronous task that fetches data after a delay of 1 second. The handleData function is passed as a callback to fetchData, and it gets executed with the fetched data when it's available.