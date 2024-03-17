import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationBar from './Navbar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      setLoading(true);
      setErrorMessage('');

      const response = await fetch('https://mern-petstore-backend.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Login successful');
        // Redirect to the home page after successful login
        navigate('/');
      } else {
        console.error('Login failed:', data.message);
        setErrorMessage('Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('Error during login. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <NavigationBar />
      <br />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card login">
              <div className="card-body card-content">
                <h2 className="card-title text-center mb-4 login">Login</h2>
                <form>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email:
                    </label>
                    <input
                      id="email"
                      type="text"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password:
                    </label>
                    <input
                      id="password"
                      type="password"
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="text-center button">
                    <button type="button" onClick={handleLogin} disabled={loading} className="sign">
                      {loading ? 'Logging In...' : 'Login'}
                    </button>
                  </div>
                  <br />
                  <p className='text-center'>No account? Sign up <a href='./signup'>Here!</a></p>
                  {errorMessage && <p className="text-center mt-3" style={{ color: 'red' }}>{errorMessage}</p>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="foot">
        {/* Your footer content */}
      </div>
    </div>
  );
};

export default Login;
