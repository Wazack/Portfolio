import { useState } from 'react';
import Logo from '../assets/logo/logo_ts.png';
import './Navbar.scss';

function Navbar() {

const [showLinks, setShowLinks] = useState(false);

const handleShowLinks = () => {
    setShowLinks(!showLinks);
}

    return (
        <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
            <img src={Logo} alt='logo' />
            <ul>
                <li><a href='/'>A Propos</a></li>
                <li><a href='/'>Projets</a></li>
                <li><a href='/'>Contact</a></li>
            </ul>
            <button onClick={handleShowLinks} className='burger'>
                <span className='burger-bar'></span>
            </button>
        </nav>
    )
}

export default Navbar;