const express = require("express");
const app = express();

app.use(express.static("Express/public"));

// app.get("/", (req, res) => {
//   console.log("User Hits The Resources");
//   res.status(200).send("Home Page");
// });

// app.get("/about", (req, res) => {
//   res.send("About Page");
// });

app.all("*", (req, res) => {
  res.status(404).send("<h3>404 !!! Resource Not Found</h3>");
});

app.listen(5000, () => {
  console.log("Listening On Port 5000");
});
