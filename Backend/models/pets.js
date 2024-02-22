// models/pet.js
const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: String,
  description: String,
  age: Number,
  
});

module.exports = mongoose.model('Pet', petSchema);