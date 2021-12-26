import React from "react";

const ProgressBar = (props) => {
    const { title, progressClass, completed } = props;

    const fillerStyles = {
        height: '18px',
        width: `${completed}%`,
        transition: 'width 1s ease-in-out',
        visibility: 'visible',
    }

    return (
        <div className={progressClass ? progressClass : 'progress-part'}>
            <div className="progress-bar">
                <div className="progress-main" style={fillerStyles}></div>
            </div>
            <div className="progress-content">
                <span className="title">{title ? title : 'Consulting'}</span>
                <span className="percent-label">{`${completed}%`}</span>
            </div>
        </div>
    );
};

export default ProgressBar;