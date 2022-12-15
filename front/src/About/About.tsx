import './About.scss';
import memoji from '../components/assets/memoji/memoji_hello.png';
import useNav from '../hooks/useNav';
function About() {
    const aboutRef = useNav("About");
    return (
        <section ref={aboutRef} className="about" id='about'>
            <div className="about-text">
                <h1>A Propos</h1>
                <p>Je suis depuis très jeune pris par la passion du développement web. <br />
En 2020 je rejoins l’Ecole 42 dans laquelle j’ai effectué deux années très enrichissantes où j’ai pu me développer sur un plan personnel comme profesionnel et acquérir des compétences qui me servent maintenant dans mon métier de développeur frontend.</p>
            </div>
            <div className="face">
                <img src={memoji} alt='memoji' />
                <svg viewBox="0 0 274 223" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M236.57 52.61C271.172 92.426 285.392 151.676 262.64 183.434C239.888 215.192 179.69 218.51 140.348 220.88C100.532 223.25 81.572 224.672 60.716 218.51C40.334 212.348 18.0561 199.076 7.62805 176.324C-3.27395 153.572 -2.32595 121.34 13.316 85.79C29.432 50.24 60.716 11.846 103.85 2.36602C146.984 -7.11398 201.968 12.794 236.57 52.61Z" fill="url(#paint0_linear_12_14)"/>
                    <defs>
                    <linearGradient id="paint0_linear_12_14" x1="0.361816" y1="222.905" x2="218.675" y2="-44.8237" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F87537"/>
                    <stop offset="1" stopColor="#FBA81F"/>
                    </linearGradient>
                    </defs>
                </svg>
            </div>
        </section>
    )
}

export default About;