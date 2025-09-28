import Quotes from '../assets/icons8-quotes-64.png'
import './Testimonials.css';

const Testimonials = ({testimonials}) => {
    return (
        <div className="testimonials" id='synergy-testimonials'>
            <h1 className="testimonials-heading">Testimonials</h1>
            <div className="testimonials-content">
                {testimonials?.content?.map((element) => {
                    return (
                        <div className="testimonials-container">
                            <div className='quotes'><img src={Quotes}></img></div>
                            <p>{element?.description}</p>
                            <div className='author'> {element?.author}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    ) 
}
export default Testimonials;