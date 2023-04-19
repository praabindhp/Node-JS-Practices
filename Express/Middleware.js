const express = require("express");
const app = express();
const logger = require("./Logger");
const authorize = require("./Authorize");
const morgan = require("morgan");

// Req => Middleware => Res
// app.use([logger, authorize]);

app.use(morgan('tiny'));

PORT = 5000;
app.get('/', function (req, res) {
    res.send('Home Page');
});

app.get('/about', [logger, authorize], function (req, res) {
    res.send('About Page');
});

app.listen(PORT, () => {
  console.log(`Server Is Listening On Port ${PORT}`);
});