import SingleExperience from '../../components/Experience/SingleExperience';
import Client from './ClientSection';

import bucketImg1 from '../../assets/img/icons/bucket.png'

const Experience = () => {

    return (
        <div id="services" className="cs-experience">
            <div className="cs-container">
                <div className="sec-title text-center pb-85 md-pb-50">
                    <h2 className="title white-color">REAL-WORLD EXPERIENCE</h2>
                    <p className="desc">The best business consulting firm you can count on!</p>
                </div>
                <div className="experience-part pb-150 md-pb-75">
                    <SingleExperience 
                        itemClass='single-experience'
                        Title={<>WEALTH <br />MANAGEMENT</>}
                        btnText='Read More'
                        Icon={bucketImg1}
                    />
                    <SingleExperience 
                        itemClass='single-experience'
                        Title={<>WEALTH <br />MANAGEMENT</>}
                        btnText='Read More'
                        Icon={bucketImg1}
                    />
                    <SingleExperience 
                        itemClass='single-experience'
                        Title={<>WEALTH <br />MANAGEMENT</>}
                        btnText='Read More'
                        Icon={bucketImg1}
                    />
                </div>
                <Client />
            </div>
        </div>
    );
}

export default Experience;