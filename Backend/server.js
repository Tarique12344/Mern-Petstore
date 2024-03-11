// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const crypto = require('crypto');

const authRoutes = require('./routes/authRoutes');
const petRoutes = require('./routes/petRoutes');

dotenv.config();

const app = express();

// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// View engine
app.set('view engine', 'ejs');

// Database connection
const mongoURI = process.env.MONGODB_URI;
mongoose
  .connect(mongoURI)
  .then(() => app.listen(process.env.PORT || 5000))
  .catch((err) => console.log(err));

// Routes
app.get('/', (req, res) => res.render('home'));
app.use('/pets', petRoutes); // Assuming you have pet-related routes
app.use('/auth', authRoutes); // Assuming you want to prefix auth routes with '/auth'

// Generate a random secret key with 32 bytes and convert it to a hexadecimal string
const secretKey = process.env.SECRET_KEY || crypto.randomBytes(32).toString('hex');
console.log('Secret Key:', secretKey);

console.log('Running on port:', process.env.PORT || 5000);

module.exports = app;
