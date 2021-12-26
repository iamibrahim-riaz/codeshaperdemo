import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {

    return (
        <React.Fragment>
            <div id="banner" className="cs-banner">
                <div className="slider-part">
                    <div className="single-slide">
                        <div className="cs-container">
                            <div className="cs-slide-content">
                                <span className="cs-slide-sub-heading">Welcome to Codeshaper</span>
                                <h2 className="cs-slide-heading">Consulting <br />For Every <br />Business</h2>
                                <Link className="btn" to="/">
                                    Discover More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Banner;