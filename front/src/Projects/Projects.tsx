import weatherApp from '../components/assets/projects/WeatherApp/DisplayWeather.png';
import weatherAppSearch from '../components/assets/projects/WeatherApp/SearchCity.png';
import transcendenceHome from '../components/assets/projects/Transcendence/transcendence_home.webp';
import transcendenceProfile from '../components/assets/projects/Transcendence/ProfileTranscendence.png';
import transcendenceMap from '../components/assets/projects/Transcendence/SelectMapTranscendence.png';
import './Projects.scss';
import useNav from '../hooks/useNav';

function Projects() {
    const projectsRef = useNav("Projects");

    return (
        <section ref={projectsRef} className="projects" id='projects'>
            <h1>Projets Recents</h1>
            <div className="project-img">
                <div className="weather-app">
                    <img src={weatherApp} alt='Application météo' />
                    <img src={weatherAppSearch} alt='Application météo' />
                </div>
                <div className="transcendence">
                    <img src={transcendenceHome} alt='Transcendence' />
                    <img src={transcendenceProfile} alt='Profile Transcendence' />
                    <img src={transcendenceMap} alt='Choix map Transcendence' />
                </div>
            </div>
        </section>
    )
}

export default Projects