import { useContext, useEffect, useState } from 'react';
import { NavContext } from '../../context/NavContext'
import Logo from '../assets/logo/logo_ts.png';
import './Navbar.scss';

function Navbar() {
    const [showLinks, setShowLinks] = useState(false);
    const [navBg, setNavBg] = useState(false);
    
    const { activeLinkId } = useContext(NavContext);
    console.log(activeLinkId);

    const handleShowLinks = () => {
        setShowLinks(!showLinks);
    }

    const changeNavBg = () => {
        window.scrollY >= 1 ? setNavBg(true) : setNavBg(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNavBg);
    })

    return (
        <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"} ${navBg ? "nav-bg" : "nav-not-bg"}`}>
            <a className='logo-link' href='#welcome'><img src={Logo} alt='logo' /></a>
            <ul>
                <li className={activeLinkId === "About" ? 'active' : ''}><a href='#about'>A Propos</a></li>
                <li className={activeLinkId === "Projects" ? 'active' : ''}><a href='#projects'>Projets</a></li>
                <li className={activeLinkId === "Contact" ? 'active' : ''}><a href='#contact'>Contact</a></li>
            </ul>
            <button onClick={handleShowLinks} className='burger'>
                <span className='burger-bar'></span>
            </button>
        </nav>
    )
}

export default Navbar;