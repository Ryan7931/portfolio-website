import './Projects.css';

const ProjectCard = ({ title, description }) => {
  return (
    <div className="project-card">
      <h3 className="project-title">{title}</h3>
      <p className="project-desc">{description}</p>
      <button className="details-btn">Details</button>
    </div>
  );
};

export default ProjectCard;