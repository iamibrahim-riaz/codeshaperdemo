

import SingleCaseStudy from '../../components/CaseStudy/SingleCaseStudy'
import SingleService from '../../components/Services/SingleService'
import caseImg1 from '../../assets/img/case-study/1.png'
import carImg1 from '../../assets/img/icons/car.png'

const CaseStudy = () => {

    return (
        <div id="case-shop" className="cs-case-study">
            <div className="cs-container">
                <div className="service-part">
                    <SingleService /> 
                    <SingleService /> 
                </div>
                <div className="sec-title text-center pb-85 md-pb-50">
                    <h2 className="title title-color uppercase">New Case Studies</h2>
                    <p className="desc">We help our clients renew their business</p>
                </div>
                <div className="case-study-part">
                    <SingleCaseStudy 
                        itemClass='single-case-study'
                        itemImg={caseImg1}
                        Icon={carImg1}
                        subTitle='Thought Leadership'
                        Title={<>Businesses <br />Growth</>}
                    />
                    <SingleCaseStudy 
                        itemClass='single-case-study'
                        itemImg={caseImg1}
                        Icon={carImg1}
                        subTitle='Thought Leadership'
                        Title={<>Businesses <br />Growth</>}
                    />
                    <SingleCaseStudy 
                        itemClass='single-case-study'
                        itemImg={caseImg1}
                        Icon={carImg1}
                        subTitle='Thought Leadership'
                        Title={<>Businesses <br />Growth</>}
                    />
                </div>
            </div>
        </div>
    );
}

export default CaseStudy;