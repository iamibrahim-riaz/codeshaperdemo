import React from "react";

const ProgressBar = (props) => {
    const { title, progressClass, progressBarClass, completed } = props;

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        transition: 'width 1s ease-in-out',
        visibility: 'visible',
    }

    return (
        <div className={progressClass ? progressClass : 'progress-charts'}>
            <h6 class="heading heading-h6">{title ? title : 'HTML'}</h6>
            <div class="progress">
                <div className={progressBarClass ? progressBarClass : 'progress-bar wow fadeInLeft'}  style={fillerStyles}>
                    <span className='percent-label'>{`${completed}%`}</span>
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;