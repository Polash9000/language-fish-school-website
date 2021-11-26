// Import Necessary file
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../logo.png'

const Footer = () => {
    // Show on Footer UI
    return (
        <div className="bg-success">
            <NavLink to="/home">
                <img src={logo} alt="" width="150" height="60px" />
            </NavLink>
            <p>&copy; Copyright 2021 Languagefish.com</p>
        </div>
    );
};

// Export Footer Component
export default Footer;