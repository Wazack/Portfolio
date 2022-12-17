import weatherApp from '../components/assets/projects/WeatherApp/DisplayWeather.png';
import weatherAppSearch from '../components/assets/projects/WeatherApp/SearchCity.png';
import transcendenceHome from '../components/assets/projects/Transcendence/transcendence_home.webp';
import transcendenceProfile from '../components/assets/projects/Transcendence/ProfileTranscendence.png';
import transcendenceMap from '../components/assets/projects/Transcendence/SelectMapTranscendence.png';
import './Projects.scss';
import Tilt from 'react-parallax-tilt';
import useNav from '../hooks/useNav';

function Projects() {
    const projectsRef = useNav("Projects");

    return (
        <section ref={projectsRef} className="projects" id='projects'>
            <h1>Projets Recents</h1>
            <div className="project-img">
                <div className="weather-app">
                    <Tilt>
                        <img src={weatherApp} alt='Application météo' />
                    </Tilt>
                    <Tilt>
                        <img src={weatherAppSearch} alt='Application météo' />
                    </Tilt>
                </div>
                <div className="transcendence">
                    <Tilt>
                        <img src={transcendenceHome} alt='Transcendence' />
                    </Tilt>
                    <Tilt>
                        <img src={transcendenceProfile} alt='Profile Transcendence' />
                    </Tilt>
                    <Tilt>
                        <img src={transcendenceMap} alt='Choix map Transcendence' />
                    </Tilt>
                </div>
            </div>
        </section>
    )
}

export default Projects