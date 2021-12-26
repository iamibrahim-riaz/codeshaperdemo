
const SingleTestimonial = (props) => {
	const { itemClass, itemImg, Title, Designation, Desc } = props;
    return (
        <div className={itemClass ? itemClass : 'single-testimonial'}>
            <p class="testi-desc">{Desc ? Desc : 'Lorem ipsum is simply free text dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum is simply free text dolor sit amet,consectetur notted adipisicing elit sed do eiusmod tempor'}</p>
            <div class="testi-info">
                <h4 class="testi-name">{Title ? Title : 'TODD HIGGINS'}</h4>
                <p class="testi-designation">{Designation ? Designation : 'Customer'}</p>
            </div>
            <img 
                className="testi-photo" 
                src= {itemImg} 
                alt="TODD HIGGINS"
            />
        </div>
    )
}

export default SingleTestimonial