const express = require("express");
const app = express();
const logger = require("./Logger");
const authorize = require("./Authorize");

// Req => Middleware => Res
app.use([logger, authorize]);

PORT = 5000;
app.get('/', [logger, authorize], function (req, res) {
    res.send('Home Page');
});

app.get('/about', [logger, authorize], function (req, res) {
    res.send('About Page');
});

app.listen(PORT, () => {
  console.log(`Server Is Listening On Port ${PORT}`);
});