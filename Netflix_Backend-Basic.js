// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Create express app
const app = express();

// Parse request bodies as JSON
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/netflix-clone', { useNewUrlParser: true });

// Define database schema and models (assuming 'Movie' and 'User' are the model names)
const movieSchema = new mongoose.Schema({
  title: String,
  genre: String,
  // Additional fields as needed
});

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  // Additional fields as needed
});

const Movie = mongoose.model('Movie', movieSchema);
const User = mongoose.model('User', userSchema);

// Define API routes

// Get list of movies
app.get('/movies', (req, res) => {
  Movie.find({}, (err, movies) => {
    if (err) {
      res.status(500).send('Error fetching movies');
    } else {
      res.json(movies);
    }
  });
});

// Get movie details
app.get('/movies/:id', (req, res) => {
  Movie.findById(req.params.id, (err, movie) => {
    if (err) {
      res.status(500).send('Error fetching movie details');
    } else {
      res.json(movie);
    }
  });
});

// Register new user
app.post('/users', (req, res) => {
  const newUser = new User({
    username: req.body.username,
    password: req.body.password,
    // Additional fields as needed
  });

  newUser.save((err, user) => {
    if (err) {
      res.status(500).send('Error registering user');
    } else {
      res.json(user);
    }
  });
});

// Authenticate user
app.post('/users/login', (req, res) => {
  const { username, password } = req.body;

  User.findOne({ username, password }, (err, user) => {
    if (err) {
      res.status(500).send('Error authenticating user');
    } else if (!user) {
      res.status(401).send('Invalid username or password');
    } else {
      res.json(user);
    }
  });
});

// Add more routes as needed

// Start server
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
