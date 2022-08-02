//Shop.js
// Shop web page component with products to choose to add to the cart

import React from 'react';
import Home from './Home';
import About from './About';
import Cart from './Cart';
import {Link} from 'react-router-dom';

const Shop = () => {
    return (
      <div className="AppContainer">
        <header>
            Great Mall of Nothing! Shop
        </header>
        <div className="NavBar">
            <ul className="NavItems">
                <Link to="/"><li>HOME</li></Link>
                <Link to="/about"><li>ABOUT</li></Link>
                <Link to="/shop"><li>SHOP</li></Link>
                <Link to="/cart"><li>VIEW CART</li></Link>
            </ul>
        </div>
        <div className="shopContainer">
            <h3>Shop</h3>
            <div className="productsContainer">
                
            </div>
        </div>
        <footer>
            by jkenton21
        </footer>
      </div>
    );
  };

  export default Shop;