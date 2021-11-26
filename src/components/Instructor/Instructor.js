// Import Necessary file
import React from 'react';

const Instructor = (props) => {
    // Data Destructuring
    const { name, img, description, ocupation } = props.teach;
    return (
        // Show on Instructor UI
        <div>
            <div className="col">
                <div className="card">
                    <img src={img} className="card-img-top" alt="..." height="250px" />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h6 className="card-title">{ocupation}</h6>
                        <p className="card-text">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Export Instructor Component
export default Instructor;