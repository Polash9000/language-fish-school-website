// Import Necessary file
import React from 'react';

const ServiceSummary = () => {
    return (
        // Service Summary page show for home UI
        <div className="container mt-4 mb-4">
            <h2>Our Featured Services</h2>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                <div className="col">
                    <div className="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX6TGc9lnrb_5QsR6mno54HpjErGBaha_ilVqVS9hus_J8bnm-9MzqVis8oxL8RDb5EzM&usqp=CAU" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Spanish Language</h5>
                            <h6 className="card-title">$58</h6>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqdOgVTaDKNCyFZA3gMeAGgrE8Anbs8420ypd3Pu8Ge0UZy6nH_rrtsQgZdgZFoFYmY74&usqp=CAU" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Arabic Language</h5>
                            <h6 className="card-title">$55</h6>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWYR3Ke2oAtH36TQ2uoL93lFg7VpuqCaD_NzIti8dYwYL8MMxtmd_cF2goBghkmxdRXLk&usqp=CAU" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Greek Language</h5>
                            <h6 className="card-title">$45</h6>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpxSALzPRrGC6pPsweMpre_bYvbMKJ_qW5MrdlINQu8Okzp0lycs0BnsDpXGcaUfz9J9k&usqp=CAU" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Italian Language</h5>
                            <h6 className="card-title">$35</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Export ServiceSummary Component
export default ServiceSummary;