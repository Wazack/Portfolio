import { useContext, useEffect, useState } from 'react';
import { NavContext } from '../../context/NavContext'
import Logo from '../assets/logo/logo_ts.png';
import './Navbar.scss';

function Navbar() {
    const [showLinks, setShowLinks] = useState(false);
    const [navBg, setNavBg] = useState(false);
    
    const { activeLinkId } = useContext(NavContext);

    const handleShowLinks = (e: any) => {
        if (e.target.tagName === 'A')
            setShowLinks(false)
        else
            setShowLinks(!showLinks);
    }

    const changeNavBg = () => {
        window.scrollY >= 1 ? setNavBg(true) : setNavBg(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNavBg);
    })

    return (
        <nav className={`navbar ${showLinks ? "show-nav" : ""} ${navBg ? "nav-bg" : "nav-not-bg"}`}>
            <a className='logo-link' href='#top'><img src={Logo} alt='logo' /></a>
            <ul>
                <li onClick={handleShowLinks} className={activeLinkId === "About" ? 'active' : ''}><a href='#about'>A Propos</a></li>
                <li onClick={handleShowLinks} className={activeLinkId === "Projects" ? 'active' : ''}><a href='#projects'>Projets</a></li>
                <li onClick={handleShowLinks} className={activeLinkId === "Contact" ? 'active' : ''}><a href='#contact'>Contact</a></li>
            </ul>
            <button onClick={handleShowLinks} className='burger'>
                <span className='burger-bar'></span>
            </button>
        </nav>
    )
}

export default Navbar;