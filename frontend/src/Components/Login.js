// frontend/src/components/Login.js
import React, { useState } from 'react';
import NavigationBar from './Navbar';
import Footer from './Footer';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      // Save the token to local storage or session storage
      localStorage.setItem('token', data.token);

      // Redirect to the homepage
      window.location.href = '/';
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div>
      <div>
        <NavigationBar />
      </div>
      <h2>Login</h2>
      <form>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>

      <Footer />
    </div>
  );
};

export default Login;