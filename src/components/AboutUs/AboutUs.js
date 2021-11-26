// Import Necessary file
import React from 'react';

const AboutUs = () => {
    return (
        // About us page
        <div className="container mt-4 mb-4">
            <h1>About us</h1>
            <h2 className="text-center container">Hello. Our school has been <br /> present for over 20 years in the market. <br /> We make the most of all our students.</h2>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card">
                        <div class="card-body">
                            <h5 class="card-title fs-1">Experience</h5>
                            <p class="card-text">This section focuses on the writing element of the language experience approach.
                                For an overview of all elements of the language experience approach and examples of it in practice see The language experience approach (Reading and Viewing). While the approach can be used across the primary years, it is particularly suitable for F-2.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div class="card-body">
                            <h5 class="card-title fs-1">Professionality</h5>
                            <p class="card-text">Before you begin texting people on behalf of your business, you need to read up on the rules of professional texting. Knowing how business texting differs from casual, everyday texting will help you maintain good standing with your customers and avoid crossing boundaries. Professional writing differs from technical because of the.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div class="card-body">
                            <h5 class="card-title fs-1">Guarantee</h5>
                            <p class="card-text">Guarantee is a legal term more comprehensive and of higher import than either warranty or "security". It most commonly designates a private transaction by means of which one person, to obtain some trust, confidence or credit for another, engages to be answerable for him.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div class="card-body">
                            <h5 class="card-title fs-1">Quality</h5>
                            <p class="card-text">If you own a website, you’ll undoubtedly have been told multiple times how important it is to write “high quality content”. In SEO terms, this goes hand in hand with the concept of E-A-T (Expertise, Authority and Trustworthiness), which Google uses to assess the quality of content.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Export AboutUs Component
export default AboutUs;