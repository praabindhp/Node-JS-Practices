const http = require("http");
const { readFileSync } = require("fs");

// Get All Files
const homePage = readFileSync("NavBar-App/index.html");
const homeStyles = readFileSync("NavBar-App/styles.css");
const homeImage = readFileSync("NavBar-App/logo.svg");
const homeLogic = readFileSync("NavBar-App/browser-app.js");

const server = http.createServer((req, res) => {
  console.log(req.url);
  // Home Page
  if (req.url === "/" || req.url === "/home") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(homePage);
    res.end();
  }
  // About Page
  else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Welcome To Our About Page<h1>");
    res.end();
  }
  // Styles
  else if (req.url === "/styles.css") {
    res.writeHead(200, { "Content-Type": "text/css" });
    res.write(homeStyles);
    res.end();
  }
  // Logo SVG
  else if (req.url === "/logo.svg") {
    res.writeHead(200, { "Content-Type": "image/svg+xml" });
    res.write(homeImage);
    res.end();
  }
  // Nav-Bar Logic
  else if (req.url === "/browser-app.js") {
    res.writeHead(200, { "Content-Type": "text/javascript" });
    res.write(homeLogic);
    res.end();
  }
  // 404 Page
  else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>404 Page Not Found</h1>");
    res.end();
  }
});

server.listen(5000);
console.log("Server Is Listening On Port 5000");
