import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Signup from './Components/Signup';
import Login from './Components/Login';
import StoreFront from './Components/Storefront';
import PetForm from './Components/PetForm';
import Footer from './Components/Footer'
import NavigationBar from './Components/Navbar'
import Cart from './Components/Cart';
import Donation from './Components/Donation';

const App = () => {
  return (
    <div>
      <NavigationBar />
      <br />
      <br />
      <br />
      <br />
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
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default App;
