import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationBar from './Navbar';
import Footer from './Footer';


const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Signup successful:', data.message);
        // Redirect to the login page after successful signup
        navigate('/login', { replace: true });
      } else {
        console.error('Signup failed:', data.message);
        alert('Signup failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      alert('Error during signup. Please try again later.');
    }
  };

  useEffect(() => {
    // Clear input fields after successful signup
    setUsername('');
    setPassword('');
  }, []);

  return (
    <div>
    <div>
      <NavigationBar />
    </div>
      <h2>Signup</h2>
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
        <button type="button" onClick={handleSignup}>
          Signup
        </button>
      </form>
      <Footer />
    </div>
    
  );
};

export default Signup;
