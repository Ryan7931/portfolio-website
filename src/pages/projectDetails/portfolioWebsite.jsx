// src/pages/projectDetails/RocketBoost.jsx
import { Link } from 'react-router-dom';
import '../Projects.css';

const RocketBoost = () => {
  return (
    <main className="projects-page">
      <div className="project-detail">
        <h1 className="project-detail-title">Portfolio website</h1>
        <p className="project-detail-desc">
            Dit is mijn persoonlijke portfolio website, gebouwd met React.js en CSS.
            De site bevat een overzicht van mijn projecten en vaardigheden.
        </p>

        <Link to="/projecten">
          <button className="details-btn">← Terug naar projecten</button>
        </Link>
      </div>
    </main>
  );
};

export default RocketBoost;
