const {readFile, writeFile} = require('fs');

console.log('Start');
readFile('Modules/Context/1ST.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile('Modules/Context/2ND.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile(
            'Modules/Context/Result.txt',
            `Here Is The Result : \n${first}${second}`,
            (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log('Done With This Task');
            }
        )
    })
})
console.log('Starting Next Task');

// Start
// Starting Next Task
// Done With This Task