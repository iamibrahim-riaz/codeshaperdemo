
const SingleExperience = (props) => {
	const { itemClass, Title, btnText, Icon } = props;
    return (
        <div className={itemClass ? itemClass : 'single-experience'}>
            <div className="content-part">
                <h3 className="title">{Title ? Title : 'WEALTH MANAGEMENT'}</h3>
                <a className="btn-part" href="#">{btnText ? btnText : 'Read More'}</a>
            </div>
            <div className="img-part">
                <img 
                    src= {Icon} 
                    alt="Bucket"
                />
            </div>
        </div>
    )
}

export default SingleExperience