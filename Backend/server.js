const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const petRoutes = require('./routes/petRoutes');
const crypto = require('crypto');
const authController = require('./controllers/authController');
const dotenv = require('dotenv');

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
  .then((result) => app.listen(process.env.PORT || 5000))
  .catch((err) => console.log(err));

// Routes
app.use(petRoutes);
app.use(authRoutes);
app.get('/check-authentication', authController.checkAuthenticationStatus);

// Generate a random secret key with 32 bytes and convert it to a hexadecimal string
const secretKey = process.env.SECRET_KEY || crypto.randomBytes(32).toString('hex');
console.log('Secret Key:', secretKey);

console.log('Running on port:', process.env.PORT || 5000);

// API Key
const API_KEY = process.env.API_KEY;

app.post('/getMessages', async (req, res) => {
  const { prompt } = req.body;
  const apiKey = 'YOUR_OPENAI_API_KEY'; // Replace with your actual OpenAI API key

  const options = {
      method: 'POST',
      body: JSON.stringify({ prompt, max_tokens: 100 }),
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
      }
  };

  try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', options);
      const data = await response.json();
      
      // You can process the response data as needed...
      res.json(data);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
  }
});
module.exports = app;
