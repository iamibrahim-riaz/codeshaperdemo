import React from 'react';
import Slider from "react-slick";
import SingleTestimonial from '../../components/Testimonial/SingleTestimonial';

import testiImg1 from '../../assets/img/testimonial/1.png';
import testiImg2 from '../../assets/img/testimonial/2.png';

const Testimonial = () => {

    const sliderSettings = {
        dots: false,
        arrows: true,
        infinite: true,
        centerMode: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                }
            }
        ]
    };

    return (
        <React.Fragment>
            <div className="cs-testimonial">
                <div className="cs-container">
                    <div className="testimonial-divider">
                        <div className="left-part">
                            <div className="sec-title">
                                <h2 className="title">WHAT THEY ARE TALKING ABOUT?</h2>
                                <p className="desc">Trusted by more than 4,200 customers</p>
                            </div>
                        </div>
                        <div class="right-part">
                            <div className="cs-testimonial-slider">
                                <Slider {...sliderSettings}>
                                    <SingleTestimonial
                                        itemImg={testiImg1}
                                        Title="TODD HIGGINS"
                                        Designation="Customer"
                                        Desc="Lorem ipsum is simply free text dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum is simply free text dolor sit amet,consectetur notted adipisicing elit sed do eiusmod tempor"
                                    />
                                    <SingleTestimonial
                                        itemImg={testiImg2}
                                        Title="Backey Tompson"
                                        Designation="Customer"
                                        Desc="Lorem ipsum is simply free text dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum is simply free text dolor sit amet,consectetur notted adipisicing elit sed do eiusmod tempor"
                                    />
                                    <SingleTestimonial
                                        itemImg={testiImg1}
                                        Title="TODD HIGGINS"
                                        Designation="Customer"
                                        Desc="Lorem ipsum is simply free text dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum is simply free text dolor sit amet,consectetur notted adipisicing elit sed do eiusmod tempor"
                                    />
                                    <SingleTestimonial
                                        itemImg={testiImg2}
                                        Title="Backey Tompson"
                                        Designation="Customer"
                                        Desc="Lorem ipsum is simply free text dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum is simply free text dolor sit amet,consectetur notted adipisicing elit sed do eiusmod tempor"
                                    />
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Testimonial