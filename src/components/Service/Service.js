// Import Necessary file
import React from 'react';

const Service = (props) => {
    // Data Destructuring
    const { name, img, price } = props.course;
    return (
        // Show on Service UI
        <div className="col">
            <div className="card">
                <img src={img} className="card-img-top" alt="..." height="250px" />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <h6 class="card-title">${price}</h6>
                </div>
            </div>
        </div>
    );
};

// Export Service Component
export default Service;