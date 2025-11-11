// src/components/ProjectCard.jsx
import '../pages/Projects.css';
import { Link } from 'react-router-dom';

const ProjectCard = () => {
  return (
    <>
      {/* === PROJECTEN 2024 - 2025 === */}
      <section className="projects-section">
        <h2 className="projects-title">Projecten ‘24 - ‘25</h2>

        <div className="projects-grid">
          <div className="project-card">
            <h3 className="project-title">Rocket Boost</h3>
            <p className="project-desc">
              Een game waar je met een rocket door obstakels vliegt
            </p>
            <Link to="/projects/rocket-boost">
              <button className="details-btn">Details</button>
            </Link>
          </div>

          <div className="project-card">
            <h3 className="project-title">Portfolio Website</h3>
            <p className="project-desc">
              Mijn persoonlijke portfolio met React en animaties
            </p>
            <Link to="/projects/portfolio">
              <button className="details-btn">Details</button>
            </Link>
          </div>

          <div className="project-card">
            <h3 className="project-title">WeerApp</h3>
            <p className="project-desc">
              Een webapp die het actuele weer toont via een API
            </p>
            <Link to="/projects/weerapp">
              <button className="details-btn">Details</button>
            </Link>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* === PROJECTEN 2025 - 2026 === */}
      <section className="projects-section">
        <h2 className="projects-title">Projecten ‘25 - ‘26</h2>

        <div className="projects-grid">
          <div className="project-card">
            <h3 className="project-title">AI Chatbot</h3>
            <p className="project-desc">
              Een chatbot die vragen beantwoordt met OpenAI API
            </p>
            <Link to="/projects/ai-chatbot">
              <button className="details-btn">Details</button>
            </Link>
          </div>

          <div className="project-card">
            <h3 className="project-title">Task Manager</h3>
            <p className="project-desc">
              Een app om taken te plannen en deadlines te beheren
            </p>
            <Link to="/projects/task-manager">
              <button className="details-btn">Details</button>
            </Link>
          </div>

          <div className="project-card">
            <h3 className="project-title">E-commerce Platform</h3>
            <p className="project-desc">
              Een webshop met login, productbeheer en betalingssysteem
            </p>
            <Link to="/projects/ecommerce">
              <button className="details-btn">Details</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectCard;
