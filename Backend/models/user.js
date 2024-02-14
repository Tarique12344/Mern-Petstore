// backend/models/user.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: {
    type: String,
    required: true,
    validate: {
      validator: function (password) {
        // Check if the password meets the complexity requirements
        const minLength = 6;
        const capitalLetterRegex = /[A-Z]/;
        const specialCharacterRegex = /[!@#$%^&*(),.?":{}|<>]/;

        return (
          password.length >= minLength &&
          capitalLetterRegex.test(password) &&
          specialCharacterRegex.test(password)
        );
      },
      message:
        'Password must be at least six characters long and contain at least one capital letter and one special character',
    },
  },
});

// Hash the password before saving it to the database
userSchema.pre('save', async function (next) {
  try {
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = mongoose.model('User', userSchema);
