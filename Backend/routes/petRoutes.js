const express = require('express');
const router = express.Router();
const Pet = require('../models/pets');

router.post('/storefront', async (req, res) => {
  try {
    const { name, description, breed, age, image, category } = req.body;

    // Generate a unique ID for the pet
    const id = generateUniqueId(); // You need to implement this function

    const newPet = new Pet({
      name,
      description,
      breed,
      age,
      image,
      category,
      id
    });

    const savedPet = await newPet.save();
    res.status(201).json(savedPet);
  } catch (error) {
    console.error('Error adding pet:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.get('/storefront', async (req, res) => {
  try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (error) {
    console.error('Error fetching pets:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.get('/storefront/:category', async (req, res) => {
  const { category } = req.params;

  try {
    const petsByCategory = await Pet.find({ category });
    res.json(petsByCategory);
  } catch (error) {
    console.error('Error fetching pets by category:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Helper function to generate a unique ID (you need to implement this)
function generateUniqueId() {
  // Generate a unique ID using a library or a custom algorithm
}

module.exports = router;
