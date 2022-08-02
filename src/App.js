//App.js
// Main App component that handles routing

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import Cart from './components/Cart';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
