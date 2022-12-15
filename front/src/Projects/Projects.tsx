import weatherApp from '../components/assets/projects/DisplayWeather.png';
import transcendence from '../components/assets/projects/transcendence_home.webp';
import memoji from '../components/assets/memoji/memoji_me_gusta.png';
import './Projects.scss';
import useNav from '../hooks/useNav';

function Projects() {
    const projectsRef = useNav("Projects");

    return (
        <section ref={projectsRef} className="projects" id='projects'>
            <h1>Projets Recents</h1>
            <div className="project-img">
                <img src={weatherApp} alt='Application météo' />
                <img src={transcendence} alt='Transcendence' />
            </div>
        </section>
    )
}

export default Projects