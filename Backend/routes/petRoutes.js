// petRoutes.js
const express = require('express');
const router = express.Router();
const Pet = require('../models/pets');

// Add a new pet with an image
router.post('/storefront', async (req, res) => {
  try {
    const { name, description, age, image } = req.body;

    const newPet = new Pet({
      name,
      description,
      age,
      image: {
        data: Buffer.from(image, 'base64'), // Convert base64 string to Buffer
        contentType: 'image/png', // Adjust accordingly based on the image type
      },
    });

    const savedPet = await newPet.save();
    res.status(201).json(savedPet);
  } catch (error) {
    console.error('Error adding pet:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
