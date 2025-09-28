import './Services.css';
import SingleService from './SingleService';
const Services = ({serviceHeading, serviceContent}) => {
    return (
        <div className="services" id='synergy-services'>
            <h1 className='section-heading'>{serviceHeading}</h1>
            <p className='tagline center'>Explore our services</p>
            <div className='service-content'>
                {serviceContent?.map((element, i) => {
                    return (
                        <SingleService service ={element} />
                    )
            })}
            </div>
            
            
        </div>
    );
}
export default Services;