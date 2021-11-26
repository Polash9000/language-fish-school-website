// Import Necessary file
import React from 'react';
import Navigation from '../Navigation/Navigation';

const Header = () => {
    // Show on Header UI
    return (
        <div className="bg-success p-5">
            <h2 className="fs-1 site-text-color">Our Language Fish School</h2>
            <Navigation></Navigation>
        </div>
    );
};

// Export Header Component
export default Header;