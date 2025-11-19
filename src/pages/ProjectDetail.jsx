// src/pages/ProjectDetail.jsx
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects.js';
import './Projects.css'; 

const ProjectDetail = () => {
  const { id } = useParams();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <main className="projects-page">
        <h2>Project niet gevonden</h2>
        <Link to="/projects" className="details-btn">← Terug naar projecten</Link>
      </main>
    );
  }

  return (
    <main className="projects-page">
      <div className="project-detail">
        <h1 className="project-detail-title">{project.title}</h1>
        <p className="project-detail-desc">{project.desc}</p>

        { (project.detailImage || project.image) && (
          <img
            src={project.detailImage || project.image}
            alt={project.title}
            className="project-detail-image"
            loading="lazy"
          />
        )}
        {project.repo && (
          <a
            href={project.repo}
            className="repo-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bekijk op GitHub
          </a>
        )}
        <Link to="/projecten" className="details-btn">← Terug naar projecten</Link>
      </div>
    </main>
  );
};

export default ProjectDetail;
