// Import Necessary file
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../logo.png';

const Navigation = () => {
    return (
        // Show on Navigation UI
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-success container">
                <div className="container row-cols-md-2">
                    <NavLink className="navbar-brand row row-cols-1 row-cols-md-3" to="/home">
                        <img src={logo} alt="" width="100%" height="50" className="d-inline-block align-text-top" />
                    </NavLink>
                    <nav className="row row-cols-1 row-cols-md-9">
                        <div>
                            <NavLink className="navbar-brand text-white-50" to="/home">Home</NavLink>
                            <NavLink className="navbar-brand text-white-50" to="/services">Services</NavLink>
                            <NavLink className="navbar-brand text-white-50" to="/instructor">Instructors</NavLink>
                            <NavLink className="navbar-brand text-white-50" to="/about">About Us</NavLink>
                        </div>
                    </nav>
                </div>
            </nav>

        </div>
    );
};

// Export Navigation Component
export default Navigation;