
const SingleService = (props) => {
	const { itemClass, listNumber, Title, Desc } = props;
    return (
        <div className={itemClass ? itemClass : 'single-service'}>
            <div className="list-number">
                <span className="list-title">{listNumber ? listNumber : '01'}</span>
            </div>
            <div className="service-content">
                <h3 className="title">{Title ? Title : 'GET PROFESSIONAL ADVICE'}</h3>
                <p>{Desc ? Desc : 'There are many variations of available but the majority have suffered alteration.'}</p>
            </div>
        </div>
    )
}

export default SingleService