// server.js
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const petRoutes = require('./routes/petRoutes');
const crypto = require('crypto');


const dotenv = require('dotenv');

dotenv.config();

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// view engine
app.set('view engine', 'ejs');

// database connection
const mongoURI = process.env.MONGODB_URI;
mongoose
  .connect(mongoURI)
  .then((result) => app.listen(5000))
  .catch((err) => console.log(err));

// routes
app.get('/', (req, res) => res.render('home'));
app.use(petRoutes);
app.use(authRoutes)

// Generate a random secret key with 32 bytes and convert it to a hexadecimal string
const secretKey = process.env.SECRET_KEY
console.log('Secret Key:', secretKey);

console.log("RUnning on port:",process.env.PORT)


module.exports = app;
