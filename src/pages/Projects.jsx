import '../pages/Projects.css';
import ProjectCard from '../components/ProjectCard.jsx';

const Projects = () => {
  return (
    <main className="projects-page">
      <div className="projects-header">
        <span className="projects-eyebrow">Mijn werk</span>
        <h1 className="projects-title">Projecten</h1>
      </div>
      <ProjectCard />
    </main>
  );
};

export default Projects;
