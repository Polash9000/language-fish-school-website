// Import Necessary file
import React from 'react';
import Feature from '../Feature/Feature';
import ServiceSummary from '../ServiceSummary/ServiceSummary';

const Home = () => {
    return (
        <div>
            {/* Feature and Service Summary add */}
            <Feature></Feature>
            <ServiceSummary></ServiceSummary>
        </div>
    );
};

// Export Home Component
export default Home;