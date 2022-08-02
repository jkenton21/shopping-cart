//Shop.js
// Shop web page component with products to choose to add to the cart

import React from 'react';
import Home from './Home';
import About from './About';
import Cart from './Cart';

const Shop = () => {
    return (
      <div className="AppContainer">
        <header>
            Great Mall of Nothing! Shop
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

  export default Shop;