// routes/api.js
const express = require('express');
const router = express.Router();
const Pet = require('../models/pet');

router.get('/pets', async (req, res) => {
  try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
