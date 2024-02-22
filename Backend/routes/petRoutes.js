const express = require('express');
const router = express.Router();
const Pet = require('../models/pets');

// Route to add a pet
router.post('/storefront', async (req, res) => {
  try {
    const { name, description } = req.body;
    const pet = new Pet({ name, species });
    await pet.save();
    res.status(201).json({ message: 'Pet added successfully' });
  } catch (error) {
    console.error('Error adding pet:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
