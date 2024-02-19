const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/user'); // Import or define your User model

// Login route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {

    // Find the user by username
    const user = await User.login(username, password);
    const token = createToken(user.id);
    res.cookie('jwt', token, {maxAge: 3 * 24 * 60 * 60 * 1000})
    res.status(200).json({user: user._id})
    // If the user does not exist or the password is incorrect, return an error
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Use environment variable for the secret key
    // const secretKey = process.env.JWT_SECRET || '123456';

    // Create a JWT token with additional data if needed

    // Send the token as a response
    // res.json({ token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Logout route (if needed)
router.post('/logout', (req, res) => {
  // Implement logout logic here, if necessary
  // For example, you might invalidate the user's token on the server
  res.json({ message: 'Logout successful' });
});

module.exports = router;
