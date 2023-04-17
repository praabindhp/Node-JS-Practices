const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);
    if(req.url === '/'){
        res.end('Welcome To Our Home Page');
    }
    if(req.url === '/about'){
        res.end('Welcome To Our About Page');
    }
    // request.write('Hello World, Welcome To Home Page');
    res.end(``);
});

server.listen(5000);