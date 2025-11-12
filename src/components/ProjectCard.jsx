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
              <p className="project-desc">{project.desc}</p>
              <Link to={`/project/${project.id}`}>
                <button className="details-btn">Details</button>
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
              <p className="project-desc">{project.desc}</p>
              <Link to={`/project/${project.id}`}>
                <button className="details-btn">Details</button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProjectCard;
