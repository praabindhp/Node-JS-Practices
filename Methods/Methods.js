const express = require("express");
const app = express();
let { people } = require("./People");

app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Req => Middleware => Res
// app.use([logger, authorize]);

app.get("/api/people", function(req, res) {
    res.status(200).json({success: true, data: people});
});

app.post("/api/people", function(req, res) {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({success: false, msg: "Please Provide Name Value"});
    }
    res.status(201).send({success: true, person: name});
});

app.post("/api/postman/people", function(req, res) {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({success: false, msg: "Please Provide Name Value"});
    }
    res.status(201).send({success: true, data: [...people, name]});
});

app.post('/login', (req, res) => {
    const { name } = req.body;
    if (name) {
        return res.status(200).send(`Welcome ${name}`);
    }
    res.status(401).send('Please Provide Credentials');
});

app.put("/api/people/:id", function(req, res) {
    const { id } = req.params;
    const { name } = req.body;

    const person = people.find((person) => person.id === Number(id));
    
    if (!person) {
        return res.status(404).json({success: false, msg: `No Person With ID ${id}`});
    }
    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name;
        }
        return person;
    });
    res.status(200).json({success: true, data: newPeople});
});

app.delete("/api/people/:id", function(req, res) {
    const person = people.find((person) => person.id === Number(req.params.id));
    
    if (!person) {
        return res.status(404).json({success: false, msg: `No Person With ID ${req.params.id}`});
    }
    const newPeople = people.filter((person) => person.id !== Number(req.params.id));
    return res.status(200).json({success: true, data: newPeople});
});

PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server Is Listening On Port ${PORT}`);
});