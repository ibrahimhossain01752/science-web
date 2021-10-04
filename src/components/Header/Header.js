import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

//Navbar


const Header = () => {

    return (
        <div className="header">

            <nav>

                <NavLink to="/home">Home</NavLink>
                <NavLink to="/service">Service</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>

            </nav>
            <div className="head">
                <h1><span style={{ color: "orange" }}>Science</span> Academy</h1>
            </div>
        </div>
    );
};

export default Header;