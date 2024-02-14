

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.get('/contact', (req, res) => {
  res.send('Contact Page');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// server.js (add this section to the existing code)
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/petstore', { useNewUrlParser: true, useUnifiedTopology: true });


// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const signupRoutes = require('./routes/signupRoutes'); // Import the signupRoutes
const authRoutes = require('./routes/authRoutes');  // Import the authRoutes
const apiRoutes = require('./routes/api');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost/petstore', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Use the signupRoutes for user signup functionality
app.use('/signup', signupRoutes);

// Use the authRoutes for login functionality
app.use('/auth', authRoutes);

// Use the apiRoutes for other API functionalities
app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

