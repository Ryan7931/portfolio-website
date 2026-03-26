import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects.js';
import './Projects.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <main className="projects-page">
        <div className="project-not-found">
          <h2 className="project-detail-title">Project niet gevonden</h2>
          <Link to="/projecten" className="project-detail-back">← Terug naar projecten</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="projects-page">
      <div className="project-detail">
        <Link to="/projecten" className="project-detail-back">← Terug naar projecten</Link>

        <h1 className="project-detail-title">{project.title}</h1>

        {(project.detailImage || project.image) && (
          <img
            src={project.detailImage || project.image}
            alt={project.title}
            className="project-detail-image"
            loading="lazy"
          />
        )}

        <p className="project-detail-desc">{project.desc}</p>

        {project.repo && (
          <a
            href={project.repo}
            className="repo-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            ⚙ Bekijk op GitHub
          </a>
        )}
      </div>
    </main>
  );
};

export default ProjectDetail;
