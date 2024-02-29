// models/pets.js
const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  image: {
    url: {
      type: String,
      required: true,
    },
  },
});

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;
