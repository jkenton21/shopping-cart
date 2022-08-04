//RouteSwitch.js
// RouteSwitch component handles web page routing

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Cart from './components/Cart'
import Shop from './components/Shop'
import About from './components/About'
import Card from './components/Card';

function RouteSwitch({addItem, currentItem, setCurrentItem, shoppingCart, setShoppingCart, addAmount}) {
  return (
      <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/shop' exact element={<Shop />} />
          <Route path='/about' element={<About />} />
          <Route path='/cart' element={<Cart shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />} />
          <Route path={'/shop/:name'} element={<Card addItem={addItem}/>} />
      </Routes>
  );
}

export default RouteSwitch;