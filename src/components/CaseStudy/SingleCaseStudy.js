
const SingleCaseStudy = (props) => {
	const { itemClass, itemImg, subTitle, Title, Icon } = props;
    return (
        <div className={itemClass ? itemClass : 'single-case-study'}>
            <div className="img-part">
                <img 
                    src= {itemImg} 
                    alt="Image"
                />
            </div>
            <div className="content-part">
                <img 
                    src= {Icon} 
                    alt="Icon"
                />
                <span className="subtitle">{subTitle ? subTitle : 'Thought Leadership'}</span>
                <h3 className="title">{Title ? Title : 'Businesses Growth'}</h3>
            </div>
        </div>
    )
}

export default SingleCaseStudy