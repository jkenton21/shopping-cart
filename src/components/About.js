//About.js
// About web page component with information about the store and products

import React from 'react';
import Home from './Home';
import Shop from './Shop';
import Cart from './Cart';

const About = () => {
    return (
      <div className="AppContainer">
        <header>
            Great Mall of Nothing! About
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

  export default About;