const express = require('express');
const Contact = require('../models/contact'); // Import your Contact model

const router = express.Router();

router.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Create a new contact message
    const newContact = new Contact({
      name,
      email,
      message,
    });

    // Save the contact message to the database
    await newContact.save();

    res.status(201).json({ message: 'Contact message submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;

