import '../pages/Projects.css';

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
            <button className="details-btn">Details</button>
          </div>

          <div className="project-card">
            <h3 className="project-title">Portfolio Website</h3>
            <p className="project-desc">
              Mijn persoonlijke portfolio met React en animaties
            </p>
            <button className="details-btn">Details</button>
          </div>

          <div className="project-card">
            <h3 className="project-title">WeerApp</h3>
            <p className="project-desc">
              Een webapp die het actuele weer toont via een API
            </p>
            <button className="details-btn">Details</button>
          </div>

        </div>
      </section>

      {/* --- Lijn tussen secties --- */}
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
            <button className="details-btn">Details</button>
          </div>

          <div className="project-card">
            <h3 className="project-title">Task Manager</h3>
            <p className="project-desc">
              Een app om taken te plannen en deadlines te beheren
            </p>
            <button className="details-btn">Details</button>
          </div>

          <div className="project-card">
            <h3 className="project-title">E-commerce Platform</h3>
            <p className="project-desc">
              Een webshop met login, productbeheer en betalingssysteem
            </p>
            <button className="details-btn">Details</button>
          </div>

        </div>
      </section>
    </>
  );
};

export default ProjectCard;
