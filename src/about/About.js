import './About.css'
const About = ({about}) => {
    return (
        <div className="about" id='synergy-about'>
            <div className='about-content'>
                <h1>{about?.heading}</h1>
                <p className='tagline'>{about?.subtitle}</p>
                <p className='description'>{about?.description}</p>
            </div>
            <div className='about-image'>

            </div>
            
        </div>
    
    
    )
    
}
export default About;