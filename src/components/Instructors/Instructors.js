// Import Necessary file
import React, { useEffect, useState } from 'react';
import Instructor from '../Instructor/Instructor';

const Instructors = () => {
    // useState set
    const [teacher, setTeacher] = useState([]);

    // useEffect set
    useEffect(() => {
        // Data fetch from fake data
        fetch('./teachers.JSON')
            .then(res => res.json())
            .then(data => setTeacher(data));
    }, [])
    return (
        // Show on Instructor UI
        <div className="container mb-4 mt-4">
            <h2>Our Experienced Instructors</h2>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {
                    teacher.map(teach => <Instructor
                        key={teach.ocupation}
                        teach={teach}
                    ></Instructor>)
                }
            </div>
        </div>
    );
};

// Export Instructor Component
export default Instructors;