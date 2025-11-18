// src/components/ProjectCard.jsx
import '../pages/Projects.css';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects.js';

const ProjectCard = () => {
  const projects2425 = projects.filter(p => p.year === '24-25');
  const projects2526 = projects.filter(p => p.year === '25-26');

  return (
    <>
      <section className="projects-section">
        <h2 className="projects-title">Projecten ‘24 - ‘25</h2>
        <div className="projects-grid">
          {projects2425.map(project => (
            <div className="project-card" key={project.id}>
              <h3 className="project-title">{project.title}</h3>
              {/* clickable thumbnail links to project details */}
              <Link to={`/project/${project.id}`}>
                <img src={project.image} alt={project.title} className="project-thumb" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <div className="divider"></div>

      <section className="projects-section">
        <h2 className="projects-title">Projecten ‘25 - ‘26</h2>
        <div className="projects-grid">
          {projects2526.map(project => (
            <div className="project-card" key={project.id}>
              <h3 className="project-title">{project.title}</h3>
              <Link to={`/project/${project.id}`}>
                <img src={project.image} alt={project.title} className="project-thumb" />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProjectCard;
