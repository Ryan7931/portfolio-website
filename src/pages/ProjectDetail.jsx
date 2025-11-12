// src/pages/ProjectDetail.jsx
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/Projects.js';
import './Projects.css'; // gebruik dezelfde styling als Projecten

const ProjectDetail = () => {
  const { id } = useParams();

  // Zoek het juiste project op basis van de URL
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
        <Link to="/projecten" className="details-btn">← Terug naar projecten</Link>
      </div>
    </main>
  );
};

export default ProjectDetail;
