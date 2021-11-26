// Import Necessary file
import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        // Show on NotFound UI
        <div className="mt-5 mb-5 pt-5 pb-5">
            <div class="card text-center">
                <div class="card-body">
                    <h1 class="card-title">404</h1>
                    <h4 class="card-text">Oh!! Page not Found</h4>
                    <NavLink to="/home" className="btn btn-primary">Go to Home</NavLink>
                </div>
            </div>
        </div>
    );
};

// Export NotFound Component
export default NotFound;