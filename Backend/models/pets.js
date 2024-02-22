const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: String,
  description: String,
  age: Number,
  image: {
    data: Buffer,
    contentType: String
  }
});

module.exports = mongoose.model('Pet', petSchema);
