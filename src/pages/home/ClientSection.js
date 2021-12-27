import React from 'react';
import Slider from "react-slick";

import Img1 from '../../assets/img/brand/1.png'

const Client = () => {

    const sliderSettings = {
        dots: false,
        arrows: true,
        infinite: true,
        centerMode: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                
                breakpoint: 1366,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                }
            },
            {

                breakpoint: 576,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                }
            }
        ]
    };

    return (
        <React.Fragment>
            <div className="client-part">
                <span className="client-title">MEET THE PARTNERS</span>
                <div className="client-list">
                    <Slider {...sliderSettings}>
                        <div className="single-client">
                            <a href="#" target="_blank">
                                <img src={Img1} alt="" />
                            </a>
                        </div>
                        <div className="single-client">
                            <a href="#" target="_blank">
                                <img src={Img1} alt="" />
                            </a>
                        </div>
                        <div className="single-client">
                            <a href="#" target="_blank">
                                <img src={Img1} alt="" />
                            </a>
                        </div>
                        <div className="single-client">
                            <a href="#" target="_blank">
                                <img src={Img1} alt="" />
                            </a>
                        </div>
                        <div className="single-client">
                            <a href="#" target="_blank">
                                <img src={Img1} alt="" />
                            </a>
                        </div>
                        <div className="single-client">
                            <a href="#" target="_blank">
                                <img src={Img1} alt="" />
                            </a>
                        </div>
                        <div className="single-client">
                            <a href="#" target="_blank">
                                <img src={Img1} alt="" />
                            </a>
                        </div>
                    </Slider>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Client