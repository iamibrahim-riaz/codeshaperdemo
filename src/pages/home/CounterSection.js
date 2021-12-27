import React, { useState } from "react";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor'; 

import countImg1 from '../../assets/img/icons/count-icon.png'

const Counter = () => {

    const [state, setState] = useState(true);

    const counters = [
        {
            countImg: countImg1,
            countNum : 420,
            countTitle: 'CONSULTING SOLUTIONS'
        },
        {
            countImg: countImg1,
            countNum : 420,
            countTitle: 'CONSULTING SOLUTIONS'
        },
        {
            countImg: countImg1,
            countNum : 420,
            countTitle: 'CONSULTING SOLUTIONS'
        },
        {
            countImg: countImg1,
            countNum : 420,
            countTitle: 'CONSULTING SOLUTIONS'
        }

    ];

    return(
        <div id="counter" className="cs-counter">
            <div className="cs-container">
                {counters &&
                    <div className="counter-part">
                        {counters.map( (counter, num) => (
                        <div key={num} className="single-counter text-center">
                            <div className="counter-icon">
                                <img src={counter.countImg} alt="" />
                            </div>
                            <div className="counter-content">       
                                <div className="counter-number white-color">
                                    <CountUp start={state ? 0 : counter.countNum} end={counter.countNum} duration={20} onEnd= {()=> setState(false)} />
                                    {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                    )}
                                </div>
                                <span className="counter-title white-color">{counter.countTitle}</span>
                            </div>
                        </div>
                        ))}                
                    </div>
                } 
            </div>
        </div>
    )
}
export default Counter;