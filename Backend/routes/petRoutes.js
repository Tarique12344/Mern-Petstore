// routes/petRoutes.js
const express = require('express');
const router = express.Router();
const Pet = require('../models/pets');

// Add a new pet
router.post('/storefront', async (req, res) => {
  try {
    const { name, description, age, image } = req.body;

    const newPet = new Pet({
      name,
      description,
      age,
      image: {
        url: image,
      },
    });

    const savedPet = await newPet.save();
    res.status(201).json(savedPet);
  } catch (error) {
    console.error('Error adding pet:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Get all pets
router.get('/storefront', async (req, res) => {
  try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (error) {
    console.error('Error fetching pets:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
