import './Projects.css';

const Projects = () => {
  return (
    <main className="projects-page">
      {/* Bovenste sectie */}
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
            <h3 className="project-title">Rocket Boost</h3>
            <p className="project-desc">
              Een game waar je met een rocket door obstakels vliegt
            </p>
            <button className="details-btn">Details</button>
          </div>

          <div className="project-card">
            <h3 className="project-title">Rocket Boost</h3>
            <p className="project-desc">
              Een game waar je met een rocket door obstakels vliegt
            </p>
            <button className="details-btn">Details</button>
          </div>
          
        </div>
      </section>

      <header className="divider"></header>

      {/* Tweede sectie */}
      <section className="projects-section">
        <h2 className="projects-title">Projecten ‘25 - ‘26</h2>
        <div className="projects-grid">
          {/* 3 projectkaarten */}
        </div>
      </section>
    </main>
  );
};

export default Projects;
