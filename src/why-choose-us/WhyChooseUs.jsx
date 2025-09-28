import './WhyChooseUs.css';
const WhyChooseUs = ({whyChooseUs}) => {
    return (
        <div className="why-choose-us">
            <div className='why-choose-us-heading'>
                <h1 className=''>Why choose us</h1>
                <p>Your Strategic Partner in People Excellence</p>
                <div className='why-choose-us-img'></div>
            </div>
            <div className="why-choose-us-content">
                {whyChooseUs?.description?.map((element) => {
                    return (
                        <div className='single-container'>
                            <h3>{element?.heading}</h3>
                            <p>{element?.subheading}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default WhyChooseUs