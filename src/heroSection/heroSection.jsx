import { useState } from 'react';
import Close from '../assets/icons8-close-50.png'
import Logo from '../assets/logo.png';
import './heroSection.css';

const HeroSection = (props) => {
    const [mobileNav, setMobileNav] = useState(false);
    const [close, setClose] = useState(false);
    const openMobileNavigation = () => {
        setClose(false);
        setMobileNav(true);
    }
    const closeHandler = () => {
        setClose(true);
        setTimeout(() => {
            setMobileNav(false);
        }, 1000);
    }
    const { heading, subHeading } = props.heroContent;
    const navigationArray = [
        {
            name: 'HOME',
            id: 'synergy-home'
        },
        {
            name: 'ABOUT',
            id: 'synergy-about'
        },
        {
            name: 'SERVICES',
            id: 'synergy-services'
        },
        {
            name: 'TESTIMONIALS',
            id: 'synergy-testimonials'
        },
        {
            name: 'CONTACT',
            id: 'synergy-contact'
        }
    ]
    const renderLinks = (closeHandler) => {
        const onClickProp = closeHandler ? { onClick: closeHandler } : {}
        return (
            <>
                {navigationArray?.map((link) => <a href={`#${link.id}`} {...onClickProp}>{link.name}</a>)}
            </>
        )
    }

    return (
        <div className='hero-section' id='synergy-home'>
            {mobileNav && <div className={close ? 'close mobile-navigation' : 'mobile-navigation'}>
                <div className='close-icon' onClick={closeHandler}><img src={Close}></img>

                </div>
                <div className='mobile-links'>
                    {renderLinks(closeHandler)}
                </div>

            </div>
            }
            <div className="navigation">
                <div className="logo">
                    <img src={Logo}></img>
                </div>
                <div className='hamburger' onClick={openMobileNavigation}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <div className="links">
                    <ul>
                        {renderLinks()}
                    </ul>
                </div>
            </div>
            <div className='heading'>
                <h1> {heading}</h1>
                <p>{subHeading}</p>
                <a href='#synergy-services'><button className='learn-more'>Learn more</button></a>
            </div>

        </div>

    )
}
export default HeroSection;