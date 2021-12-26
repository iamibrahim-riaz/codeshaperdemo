
import checkImg1 from '../../assets/img/icons/check.png'
import tabImg1 from '../../assets/img/tab/1.png'

const BusinessTab = () => {

    return (
        <div id="tab" className="cs-business-tab">
            <div className="cs-container">
                <div className="cs-tab-part">
                    <ul className="cs-business-nav nav-tabs" id="businessTabs" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="business-tab1" data-toggle="tab" href="#businessTab1" role="tab" aria-controls="businessTab1" aria-selected="true">Business Growth</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="business-tab2" data-toggle="tab" href="#businessTab2" role="tab" aria-controls="businessTab2" aria-selected="false">Business Growth</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="business-tab3" data-toggle="tab" href="#businessTab3" role="tab" aria-controls="businessTab3" aria-selected="false">Business Growth</a>
                        </li>
                    </ul>

                    <div className="cs-business-content tab-content" id="businessTabContents">
                        <div className="tab-pane show active fade single-tab-area" id="businessTab1" role="tabpanel" aria-labelledby="business-tab1">
                            <div className="content-area">
                                <div className="content-service">
                                    <div className="single-content-service">
                                        <div className="icon-part">
                                            <img src={checkImg1} alt="" />
                                        </div>
                                        <div className="text-part">
                                            <h4 className="title">HIGHEST SUCCESS RATES</h4>
                                            <span className="desc">Lorem Ipsum nibh vel velit auctor aliqu. Aenean sollic tudin, lorem is simply free text quis bibendum.</span>
                                        </div>
                                    </div>
                                    <div className="single-content-service">
                                        <div className="icon-part">
                                            <img src={checkImg1} alt="" />
                                        </div>
                                        <div className="text-part">
                                            <h4 className="title">WE BUILD EXPERIENCE</h4>
                                            <span className="desc">Lorem Ipsum nibh vel velit auctor aliqu. Aenean sollic tudin, lorem is simply free text quis bibendum.</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-text">
                                    <p className="desc">There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form injected humour or randomised words which don't look believable.</p>
                                    <ul className="list">
                                        <li>If you are going to use a passage</li>
                                        <li>Lorem Ipsum you need to be sure</li>
                                        <li>There isn't anything embarrassing</li>
                                        <li>Hidden in the middle of text</li>
                                    </ul>
                                </div>
                                <div className="content-img">
                                    <img src={tabImg1} alt="" /> 
                                </div>
                            </div>
                        </div>
                        
                        <div className="tab-pane fade single-tab-area" id="businessTab2" role="tabpanel" aria-labelledby="business-tab2">
                            <div className="content-area">
                                <div className="content-service">
                                    <div className="single-content-service">
                                        <div className="icon-part">
                                            <img src={checkImg1} alt="" />
                                        </div>
                                        <div className="text-part">
                                            <h4 className="title">HIGHEST SUCCESS RATES</h4>
                                            <span className="desc">Lorem Ipsum nibh vel velit auctor aliqu. Aenean sollic tudin, lorem is simply free text quis bibendum.</span>
                                        </div>
                                    </div>
                                    <div className="single-content-service">
                                        <div className="icon-part">
                                            <img src={checkImg1} alt="" />
                                        </div>
                                        <div className="text-part">
                                            <h4 className="title">WE BUILD EXPERIENCE</h4>
                                            <span className="desc">Lorem Ipsum nibh vel velit auctor aliqu. Aenean sollic tudin, lorem is simply free text quis bibendum.</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-text">
                                    <p className="desc">There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form injected humour or randomised words which don't look believable.</p>
                                    <ul className="list">
                                        <li>If you are going to use a passage</li>
                                        <li>Lorem Ipsum you need to be sure</li>
                                        <li>There isn't anything embarrassing</li>
                                        <li>Hidden in the middle of text</li>
                                    </ul>
                                </div>
                                <div className="content-img">
                                    <img src={tabImg1} alt="" /> 
                                </div>
                            </div>
                        </div>
                        
                        <div className="tab-pane fade single-tab-area" id="businessTab3" role="tabpanel" aria-labelledby="business-tab3">
                            <div className="content-area">
                                <div className="content-service">
                                    <div className="single-content-service">
                                        <div className="icon-part">
                                            <img src={checkImg1} alt="" />
                                        </div>
                                        <div className="text-part">
                                            <h4 className="title">HIGHEST SUCCESS RATES</h4>
                                            <span className="desc">Lorem Ipsum nibh vel velit auctor aliqu. Aenean sollic tudin, lorem is simply free text quis bibendum.</span>
                                        </div>
                                    </div>
                                    <div className="single-content-service">
                                        <div className="icon-part">
                                            <img src={checkImg1} alt="" />
                                        </div>
                                        <div className="text-part">
                                            <h4 className="title">WE BUILD EXPERIENCE</h4>
                                            <span className="desc">Lorem Ipsum nibh vel velit auctor aliqu. Aenean sollic tudin, lorem is simply free text quis bibendum.</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-text">
                                    <p className="desc">There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form injected humour or randomised words which don't look believable.</p>
                                    <ul className="list">
                                        <li>If you are going to use a passage</li>
                                        <li>Lorem Ipsum you need to be sure</li>
                                        <li>There isn't anything embarrassing</li>
                                        <li>Hidden in the middle of text</li>
                                    </ul>
                                </div>
                                <div className="content-img">
                                    <img src={tabImg1} alt="" /> 
                                </div>
                            </div>                                  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BusinessTab;