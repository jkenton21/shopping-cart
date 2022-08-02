//Cart.js
// Shopping Cart web page component with shopping cart items and checkout prices

import React from 'react';
import Home from './Home';
import About from './About';
import Shop from './Shop';

const Cart = () => {
    return (
      <div className="AppContainer">
        <header>
            Great Mall of Nothing! Cart
        </header>
        <div className="NavBar">
            <ul className="NavItems">
                <li link={Home}>HOME</li>
                <li link={About}>ABOUT</li>
                <li link={Shop}>SHOP</li>
                <li link={Cart}>VIEW CART</li>
            </ul>
        </div>
        <footer>
            by jkenton21
        </footer>
      </div>
    );
  };

  export default Cart;