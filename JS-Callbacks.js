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
