import '../pages/Projects.css';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects.js';

const ProjectCard = () => {
  const projects2425 = projects.filter(p => p.year === '24-25');
  const projects2526 = projects.filter(p => p.year === '25-26');

  const renderGroup = (items, label) => (
    <section className="projects-section">
      <h2 className="projects-year">{label}</h2>
      <div className="projects-grid">
        {items.map(project => (
          <div className="project-card" key={project.id}>
            <Link to={`/project/${project.id}`} className="project-thumb-link">
              <img src={project.image} alt={project.title} className="project-thumb" loading="lazy" />
            </Link>
            <div className="project-card-body">
              <h3 className="project-title">{project.title}</h3>
              <Link to={`/project/${project.id}`} className="details-btn">
                Details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <>
      {projects2425.length > 0 && renderGroup(projects2425, "Schooljaar '24 – '25")}
      {projects2526.length > 0 && renderGroup(projects2526, "Schooljaar '25 – '26")}
    </>
  );
};

export default ProjectCard;
