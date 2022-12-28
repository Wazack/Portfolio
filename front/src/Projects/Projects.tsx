import weatherApp from '../components/assets/projects/WeatherApp/WeatherApp.png';
import transcendenceHome from '../components/assets/projects/Transcendence/transcendence_home.webp';
import './Projects.scss';
import useNav from '../hooks/useNav';

function Projects() {
    const projectsRef = useNav("Projects");

    const projects = [
        {id: 1, img: weatherApp, imgAlt: 'Applcation météo', git: 'https://github.com/Wazack/weather-app', title: 'Weather App', hardSkills: ['React', 'TypeScript', 'Axios'], desc: <p>Cette application météo vous permet de connaître les conditions météorologiques en temps réel en vous localisant ou en recherchant une ville spécifique. Elle vous donne la température, l'humidité dans l'air et la vitesse du vent. Les données sont récupérées en utilisant l'API OpenWeatherMap.</p>},
        {id: 2, img: transcendenceHome, imgAlt: 'ft_transcendence', git: 'https://github.com/Wazack/weather-app', title: 'ft_transcendence', hardSkills: ['React', 'TypeScript', 'NestJS', 'PostgreSql', 'Redux', 'TypeOrm'], desc: <p>Notre groupe a développé un site web permettant aux utilisateurs de jouer au célèbre jeu Pong. Nous avons mis en place des fonctionnalités telles que la personnalisation des maps, le système de match en ligne, la liste d'amis et la messagerie instantanée pour offrir une expérience de jeu personnalisée et interactive à nos utilisateurs. Le site a été réalisé par un groupe de 4 persones de notre équipe.</p>}
    ]

    function Project(props: any) {
        function hardSkills(skills: any) {
            const ret = skills.map((skill: any) => <li>{skill}</li>)
            return (
                <ul className='hard-skills'>
                    {ret}
                </ul>
            )
        }
        const content = props.projects.map((project: any) =>
            <article key={project.id}>
                <img src={project.img} alt={project.imgAlt} />
                <div className="description">
                    <span>0{project.id}.</span>
                    <h3>{project.title}</h3>
                    {project.desc}
                    <div className="hard-skills">
                        {hardSkills(project.hardSkills)}
                    </div>
                    <div className="links">
                        <a href={project.git} target="_blank">
                            <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 2.5C8.0957 2.5 2.5 8.0957 2.5 15C2.5 21.9043 8.0957 27.5 15 27.5C21.9043 27.5 27.5 21.9043 27.5 15C27.5 8.0957 21.9043 2.5 15 2.5ZM15 5C20.5127 5 25 9.48731 25 15C25 15.5859 24.9414 16.1621 24.8438 16.7188C24.5361 16.6504 24.082 16.5674 23.5547 16.5625C23.1641 16.5576 22.6758 16.6211 22.2656 16.6797C22.4072 16.2451 22.5 15.7666 22.5 15.2734C22.5 14.0723 21.9141 12.9541 20.9766 12.0313C21.2354 11.0693 21.4893 9.41895 20.8203 8.75C18.8428 8.75 17.749 10.1611 17.6953 10.2344C17.085 10.0879 16.4551 10 15.7813 10C14.917 10 14.0918 10.1563 13.3203 10.3906L13.5547 10.1953C13.5547 10.1953 12.4561 8.67188 10.4297 8.67188C9.72168 9.38477 10.0439 11.1914 10.3125 12.1094C9.35547 13.0225 8.75 14.1016 8.75 15.2734C8.75 15.6836 8.84766 16.0742 8.94531 16.4453C8.59863 16.4063 7.34863 16.2891 6.83594 16.2891C6.38184 16.2891 5.67871 16.3965 5.11719 16.5234C5.03906 16.0254 5 15.5176 5 15C5 9.48731 9.48731 5 15 5ZM6.83594 16.6016C7.3291 16.6016 8.82813 16.7773 9.02344 16.7969C9.04785 16.8652 9.07227 16.9287 9.10156 16.9922C8.56445 16.9434 7.52441 16.8701 6.83594 16.9531C6.37695 17.0068 5.79102 17.1729 5.27344 17.3047C5.23438 17.1484 5.18555 16.9971 5.15625 16.8359C5.70313 16.7188 6.4209 16.6016 6.83594 16.6016ZM23.5547 16.875C24.0527 16.8799 24.5068 16.9629 24.8047 17.0313C24.79 17.1143 24.7461 17.1826 24.7266 17.2656C24.4092 17.1924 23.8867 17.085 23.2813 17.0703C22.9883 17.0654 22.5195 17.0801 22.1094 17.1094C22.1289 17.0703 22.1338 17.0313 22.1484 16.9922C22.5732 16.9336 23.1152 16.8701 23.5547 16.875ZM7.61719 17.2266C8.32031 17.2314 8.97949 17.2803 9.25781 17.3047C9.91211 18.5254 11.2354 19.4287 13.2813 19.8047C12.7783 20.083 12.3291 20.4736 11.9922 20.9375C11.6992 20.9619 11.3916 20.9766 11.0938 20.9766C10.2246 20.9766 9.68262 20.2002 9.21875 19.5313C8.75 18.8623 8.17383 18.7891 7.85156 18.75C7.52441 18.7109 7.41211 18.8965 7.57813 19.0234C8.53027 19.7559 8.87207 20.625 9.25781 21.4063C9.60449 22.1094 10.332 22.5 11.1328 22.5H11.2891C11.2646 22.6367 11.25 22.7637 11.25 22.8906V24.2578C8.36426 23.0908 6.16699 20.625 5.35156 17.5781C5.86426 17.4512 6.44043 17.3193 6.875 17.2656C7.0752 17.2412 7.3291 17.2217 7.61719 17.2266ZM23.2813 17.3828C23.8428 17.3975 24.3408 17.5049 24.6484 17.5781C23.96 20.166 22.2607 22.3193 20 23.6328V22.8906C20 21.8262 19.1602 20.459 17.9688 19.8047C19.9463 19.4434 21.2354 18.5791 21.9141 17.4219C22.3877 17.3877 22.9443 17.373 23.2813 17.3828ZM15.625 22.5C15.9668 22.5 16.25 22.7832 16.25 23.125V24.9219C15.8398 24.9756 15.4248 25 15 25V23.125C15 22.7832 15.2832 22.5 15.625 22.5ZM13.125 23.75C13.4668 23.75 13.75 24.0332 13.75 24.375V24.9219C13.3301 24.8682 12.9053 24.79 12.5 24.6875V24.375C12.5 24.0332 12.7832 23.75 13.125 23.75ZM18.125 23.75C18.4277 23.75 18.6914 23.9697 18.75 24.2578C18.3447 24.4238 17.9297 24.5752 17.5 24.6875V24.375C17.5 24.0332 17.7832 23.75 18.125 23.75Z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </article>
        )
        return (
            content
        )
    }

    return (
        <section ref={projectsRef} className="projects" id='projects'>
            <div className="title">
                <h2>Projets Recents</h2>
                <div className="divider"></div>
            </div>
            <div className="projects-container">
                <Project projects={projects} />
            </div>
        </section>
    )
}

export default Projects