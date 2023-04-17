const path = require('path');

console.log(path.sep);

const filePath = path.join('/Context', 'Content', 'Hello.txt');
console.log(`File Path : ${filePath}`);

const base = path.basename(filePath);
console.log(`Base File Name : ${base}`);

const absolute = path.join(__dirname, 'Context', 'Content', 'Hello.txt');
console.log(`Absolute Path : ${absolute}`);