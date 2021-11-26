// Import necessary file
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    // useState set
    const [course, setCourses] = useState([]);

    // useEffect set
    useEffect(() => {
        // Data fetch from fake data
        fetch('./services.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    return (
        // Show on Services UI
        <div className="container mb-4 mt-4">
            <h2>Our Services</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    course.map(course => <Service
                        key={course.price}
                        course={course}
                    ></Service>)
                }
            </div>
        </div>
    );
};

// Export Services Component
export default Services;