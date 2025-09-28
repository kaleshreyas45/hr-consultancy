import Call from '../assets/icons8-call-50.png';
import Email from '../assets/icons8-email-50.png';
import Address from '../assets/icons8-address-50.png';
import BusinessHours from '../assets/icons8-last-24-hours-50.png';

import './Contact.css';
const Contact = () => {
    return (
        <div className="contact" id='synergy-contact'>
            <div className='contact-heading'>
                <h1>Contact us</h1>
                <p>Let's build success together</p>
                <div className='contact-content'>
                    <div className='left'>
                        <div className='subsection address+phone'>
                            <div className='img-text'><img src={Call}></img><p>9665746087</p></div>
                            <div className='img-text'><img src={Email}></img><p>kaleshreyas45@gmail.com</p></div>
                            
                        </div>
                    </div>
                    <div className='right'>
                        <div className='subsection email+businessHours'>
                            <div className='img-text'><img src={Address}></img><p>Hinjewadi Phase 1, Pune, 411057.</p></div>
                            <div className='img-text'><img src={BusinessHours}></img><p>9:00 am to 5:00 pm </p></div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default Contact;