const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);
    if(req.url === '/'){
        res.end('Welcome To Our Home Page');
    }
    else if(req.url === '/about'){
        res.end('Welcome To Our About Page');
    } else {
        res.end(`${req.url} - This Page Is Not Available`);
    }
});

server.listen(5000);
console.log('Server Is Listening On Port 5000');