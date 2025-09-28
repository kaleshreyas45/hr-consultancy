import './MissionAndVision.css';

const MissionAndVision = ({mission, vision}) => {
    return (
        <div className="mission-vision">

                <div className='single-box'>
                    <div className='heading-icon'>
                        <h1>{mission?.heading}</h1>
                        <img src={mission?.img}></img>
                    </div>
                    
                    <p>{mission?.description}</p>
                </div>
                <div className='single-box'>
                    <div className='heading-icon'>
                        <h1>{vision?.heading}</h1>
                        <img src={vision?.img}></img>
                    </div>
                    <p>{vision?.description}</p>
                </div>

        </div>
    )
}
export default MissionAndVision