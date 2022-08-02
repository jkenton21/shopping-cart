//Home.js
// Home screen component with basic web store info and links

import React from 'react';
import About from './About';
import Shop from './Shop';
import Cart from './Cart';
import {Link} from 'react-router-dom';

const Home = () => {
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
        <div className="HomeData">
            The worlds number one supplier of nothing!
        </div>
        <footer>
            by jkenton21
        </footer>
      </div>
    );
  };

  export default Home;