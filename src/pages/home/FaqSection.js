
import faqImg1 from '../../assets/img/faq/1.png'

const Faq = () => {

    return (
        <div className="cs-faq">
            <div className="cs-container">
                <div className="sec-title text-center pb-75 md-pb-50">
                    <h2 className="title title-color">QUESTION ANSWERS</h2>
                    <p className="desc">We help our clients renew their business</p>
                </div>
                <div className="faq-section-part">
                    <div className="faq-part">
                        <div id="accordion">
                            <div className="card">
                                <div className="card-header" id="headingOne">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            <span>1.</span> THINK AHEAD AND BOOST YOUR BUSINESS?
                                        </button>
                                    </h5>
                                </div>

                                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                    <div className="card-body">
                                        There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingTwo">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            <span>2.</span> HOW CONSULTANCY EXPERTS WORK?
                                        </button>
                                    </h5>
                                </div>
                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                    <div className="card-body">
                                        There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingThree">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            <span>3.</span> WHAT IS THE BEST ADVICE FOR GROWTH?
                                        </button>
                                    </h5>
                                </div>
                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                    <div className="card-body">
                                        There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingFour">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            <span>4.</span> HOW TO IMPROVE YOUR BUSINESS?
                                        </button>
                                    </h5>
                                </div>
                                <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                                    <div className="card-body">
                                        There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="faq-content-part">
                        <div className="img-part">
                            <img src={faqImg1} alt="" />
                        </div>
                        <div className="content-part">
                            <ul className="list-part">
                                <li><i className="icofont-check"></i> Nsectetur cing elit.</li>
                                <li><i className="icofont-check"></i> Suspe ndisse suscipit sagittis leo.</li>
                                <li><i className="icofont-check"></i> Entum estibulum dignissim posuere.</li>
                                <li><i className="icofont-check"></i> If you are going to use a passage.</li>
                                <li><i className="icofont-check"></i> If you are going to use a passage test data.</li>
                            </ul>
                            <div className="experience-year">
                                <span>30</span> Years of <br />Experience
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faq;