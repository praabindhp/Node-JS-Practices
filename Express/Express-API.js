const express = require("express");
const app = express();
PORT = 5000;

const data = [
  { id: 1, name: "Praabindh", message: "Howdy, Welcome To Our Admin Page" },
  { id: 2, name: "Pradeep", message: "Howdy, Welcome To Our Home Page" },
];

app.get("/", (req, res) => {
  res.send("Welcome To Our Home Page");
});

app.get("/all", (req, res) => {
  res.json(data);
  data.forEach((item) => {
    console.log(item);
  });
  res.end();
});

app.get("/api/users", (req, res) => {
  const users = data.map((user) => {
    const { id, name } = user;
    return { id, name };
  });
  res.json(users);
});

app.get("/api/users/:id", (req, res) => {
  const user = data.find((user) => user.id === Number(req.params.id));
  if (!user) {
    res.status(404).send("User Not Found");
  }
  res.json(user);
});

app.listen(PORT, () => {
  console.log(`Listening On Port ${PORT}`);
});
