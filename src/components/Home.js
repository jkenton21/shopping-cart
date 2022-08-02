//Home.js
// Home screen component with basic web store info and links

import React from 'react';
import About from './About';
import Shop from './Shop';
import Cart from './Cart';

const Home = () => {
    return (
      <div className="AppContainer">
        <header>
            Great Mall of Nothing!
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

  export default Home;