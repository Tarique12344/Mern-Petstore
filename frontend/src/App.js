import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Signup from './components/Signup';
import Login from './components/Login';
import StoreFront from './components/Storefront';
import PetForm from './components/PetForm';
import Storefront2 from './components/Storefront2';
import Footer from './components/Footer'
import NavigationBar from './components/Navbar'
import Cart from './components/Cart';
import Donation from './components/Donation';

const App = () => {
  return (
    <div>
    <br/>
    <br/>
    <br/>
     <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/storefront" element={<StoreFront />} />
        <Route path="/petform" element={<PetForm />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <br/>
      <br/>
      <br/>
      <br/>
      <Footer />
    </div>
  );
};

export default App;
