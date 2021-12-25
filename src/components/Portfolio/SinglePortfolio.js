import React from 'react';

const SinglePortfolio = (props) => {
	const { portfolioClass, portfolioImg, portfolioCategory, portfolioFormat, portfolioURL, portfolioName } = props;
	return(
        <div className={portfolioClass ? portfolioClass : 'rn-portfolio'}>
            <div class="inner">
                <div class="thumbnail">
                    <a href="#">
                        <img src={portfolioImg} alt="Personal Portfolio Images" />
                    </a>
                </div>
                <div class="content">
                    <div class="category-info">
                        <div class="category-list">
                            <a href="#">{portfolioCategory ? portfolioCategory : 'React'}</a>
                        </div>
                        <div class="meta">
                            <span><a href="#"></a>{portfolioFormat ? portfolioFormat : 'Template'}</span>
                        </div>
                    </div>
                    <h4 class="title"><a href={portfolioURL ? portfolioURL : '#'} target="_blank">{portfolioName ? portfolioName : 'My Portfolio'} <i class="feather-arrow-up-right"></i></a></h4>
                </div>
            </div>
        </div>
	)
}

export default SinglePortfolio