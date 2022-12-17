import Navbar from "../components/Navbar/Navbar";
import './Intro.scss';
import memoji from '../components/assets/memoji/memoji_laptop.png';
import useNav from "../hooks/useNav";
import { useEffect, useState } from "react";

function Intro() {
	const introRef = useNav("Intro");

	const [isDisplay, setIsDisplay] = useState(false);

	const displayScroll = () => {
        window.scrollY >= 1 ? setIsDisplay(true) : setIsDisplay(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', displayScroll);
    })

	return (
		<section ref={introRef} className="welcome">
			<div className="presentation">
				<h1>Salut, je me prénomme <span>Thomas Simon</span></h1>
				<div className="divider"></div>
				<p>Développeur front-end.</p>
			</div>
			<div className="face">
				<img src={memoji} alt="memoji" />
				<svg viewBox="0 0 271 305" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M247.81 46.525C272.161 79.712 274.101 128.415 265.481 177.98C256.861 227.76 237.897 278.618 202.124 296.721C166.351 314.823 113.769 299.953 73.2545 274.955C32.7405 249.742 4.50999 214.184 1.06199 178.627C-2.60152 143.069 18.9485 107.727 44.3775 74.109C70.022 40.491 99.761 8.81251 138.12 1.91651C176.479 -4.97949 223.458 13.1225 247.81 46.525Z" fill="url(#paint0_linear_11_26)"/>
					<defs>
					<linearGradient id="paint0_linear_11_26" x1="135.4" y1="0.463226" x2="135.4" y2="304.731" gradientUnits="userSpaceOnUse">
					<stop stopColor="#FBA81F"/>
					<stop offset="1" stopColor="#F87537"/>
					</linearGradient>
					</defs>
				</svg>
			</div>
			<a href="#about" className={`scroll-link ${isDisplay ? "is-scrolled" : ""}`}>
				<svg 
					width="30px" viewBox="0 0 14.334 24.75" >
					<circle className="circle-1" fill="white" cx="7.167" cy="6" r="1.2"/>
					<circle className="circle-2" fill="white" cx="7.167" cy="6" r="1.2"/>
				<path stroke="white" fill="transparent" d="M7.167,0.5C3.485,0.5,0.5,3.485,0.5,7.167v10.416                   c0,3.682,2.985,6.667,6.667,6.667s6.667-2.985,6.667-6.667V7.167C13.834,3.485,10.849,0.5,7.167,0.5z"/>
				</svg>
			</a>
		</section>
	)
}

export default Intro;