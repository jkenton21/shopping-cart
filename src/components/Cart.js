//Cart.js
// Shopping Cart web page component with shopping cart items and checkout prices

import React from 'react';
import Home from './Home';
import About from './About';
import Shop from './Shop';
import {Link} from 'react-router-dom';

const Cart = () => {
    return (
      <div className="AppContainer">
        <header>
            Great Mall of Nothing! Cart
        </header>
        <div className="NavBar">
            <ul className="NavItems">
                <Link to="/"><li>HOME</li></Link>
                <Link to="/about"><li>ABOUT</li></Link>
                <Link to="/shop"><li>SHOP</li></Link>
                <Link to="/cart"><li>VIEW CART</li></Link>
            </ul>
        </div>
        <div className="cartContainer">
            <h3>Shopping Cart</h3>
            <div className="cartItems">

            </div>
            <div className="cartTotal">
                
            </div>
        </div>
        <footer>
            by jkenton21
        </footer>
      </div>
    );
  };

  export default Cart;