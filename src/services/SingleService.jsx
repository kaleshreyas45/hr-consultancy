import CheckmarkImage from '../assets/checkmark.png'
import './SingleService.css';

const SingleService = ({ service }) => {
    return (
        <div className="single-service-container">
            <div className='heading-row'>
                <img src={service?.src} alt="checkmark--v1" />
                <h2>{service?.serviceHeading}</h2>
            </div>
            
            {service?.points?.map((point, i) => {
                return (
                    <div className='point-row'>
                        <img src={CheckmarkImage} alt="checkmark--v1" />
                        <p>{point}</p>
                    </div>
                )
            })}

        </div>
    );
}
export default SingleService;