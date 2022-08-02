//About.js
// About web page component with information about the store and products

import React from 'react';
import Home from './Home';
import Shop from './Shop';
import Cart from './Cart';
import {Link} from 'react-router-dom';

const About = () => {
    return (
      <div className="AppContainer">
        <header>
            Great Mall of Nothing!
        </header>
        <div className="NavBar">
            <ul className="NavItems">
                <Link to="/"><li>HOME</li></Link>
                <Link to="/about"><li>ABOUT</li></Link>
                <Link to="/shop"><li>SHOP</li></Link>
                <Link to="/cart"><li>VIEW CART</li></Link>
            </ul>
        </div>
        <div className="AboutInfo">
            <h3>About the Store</h3>
            <p>This is a fake store that is only being used for personal project
                purposes. You cannot actually buy anything here and I own no rights
                to any of the products displayed.
            </p>
        </div>
        <footer>
            by jkenton21
        </footer>
      </div>
    );
  };

  export default About;