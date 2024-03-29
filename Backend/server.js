const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const crypto = require('crypto');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const petRoutes = require('./routes/petRoutes');
const authController = require('./controllers/authController');

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
mongoose.connect(mongoURI)
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
const API_KEY = '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'

app.post('/completions', async (req, res) => {
    const options = {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: 'user', content: req.body.message}],
        max_tokens: 1000,
      })
    };

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', options);
      const data = await response.json();
      res.send(data);
    } catch (error) {
      console.error(error);
    }
});
