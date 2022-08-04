//Home.js
// Home component for the home web page

import React from "react";
import '../styles/App.css';
import { Link } from "react-router-dom";

function Home() {
    return (
        <div id="home">
            <h1>The Great Store of Nothing! </h1>
            <p>The number one supplier of nothing in the world!</p>
            <p>We have you covered for all of your nothing needs.</p>
            <Link to='/shop'>
                <button>Start Shopping</button>
            </Link>
        </div>
    );
}

export default Home;