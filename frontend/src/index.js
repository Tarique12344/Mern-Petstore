// index.js or App.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import App from './App';
import './index.css';
import { CartProviderfunc } from './context/CartProviderfunc';

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <CartProviderfunc>
        <App />
      </CartProviderfunc>
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
