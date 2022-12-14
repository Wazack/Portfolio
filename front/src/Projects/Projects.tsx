import weatherApp from '../components/assets/projects/DisplayWeather.png';
import transcendence from '../components/assets/projects/transcendence_home.webp';
import memoji from '../components/assets/memoji/memoji_me_gusta.png';
import './Projects.scss';

function Projects() {
    return (
        <section className="projects" id='projects'>
            <h1>Projets Recents</h1>
            <div className="project-img">
                <img src={weatherApp} alt='Application météo' />
                <img src={transcendence} alt='Transcendence' />
            </div>
        </section>
    )
}

export default Projects