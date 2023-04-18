const { readFile } = require("fs");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const start = async () => {
    try {
        const first = await getText("Modules/Context/1ST.txt");
        const second = await getText("Modules/Context/2ND.txt");
        console.log(`${first}\n${second}`);
    } catch (error) {
        console.log(error);
    }
};

start();

// getText("Modules/Context/1ST.txt")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// readFile("Modules/Context/1ST.txt", "utf8", (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   } else {
//     console.log(result);
//   }
// });