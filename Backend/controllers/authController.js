const User = require('../models/user');
const jwt = require('jsonwebtoken');

const handleErrors = (err) => {
  console.log(err.message, err.code);

  let errors = { email: '', password: '' };

  if (err.message === 'incorrect email') {
    errors.email = 'This email is not registered';
  }

  if (err.message === 'incorrect password') {
    errors.password = 'That password is incorrect';
  }

  if (err.code === 11000) {
    errors.email = 'This email is already in use!';
    return errors;
  }

  if (err.message.includes('user validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
  return jwt.sign({ id }, 'your_secret_key', {
    expiresIn: maxAge,
  });
};

// controller actions
const signup_get = (req, res) => {
  res.render('signup');
};

const login_get = (req, res) => {
  res.render('login');
};

const signup_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.create({ email, password });
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user: user._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

const login_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      throw Error('Invalid email or password.');
    }

    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({ user: user._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

// Logout controller
const logout = (req, res) => {
  // Clear the JWT cookie
  res.clearCookie('jwt');
  
  // Send a response indicating successful logout
  res.status(200).json({ message: 'Logout successful' });
};




// Controller to check authentication status
checkAuthenticationStatus = (req, res) => {
  try {
    // Check authentication status here
    if (req.user) {
      // User is authenticated
      res.status(200).json({ isAuthenticated: true });
    } else {
      // User is not authenticated
      res.status(200).json({ isAuthenticated: false });
    }
  } catch (error) {
    console.error('Error checking authentication status:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



module.exports = { signup_get, login_get, signup_post, login_post, logout, checkAuthenticationStatus };
