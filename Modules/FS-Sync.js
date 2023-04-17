const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('Modules/Context/1ST.txt', 'utf-8');
const second = readFileSync('Modules/Context/2ND.txt', 'utf-8');

writeFileSync(
    'Modules/Context/Result.txt',
    `Here Is The Result : \n${first}${second}`
)

console.log('Done With This Task');