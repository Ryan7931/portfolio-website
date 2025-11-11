// src/pages/projectDetails/RocketBoost.jsx
import { Link } from 'react-router-dom';
import '../Projects.css';

const RocketBoost = () => {
  return (
    <main className="projects-page">
      <div className="project-detail">
        <h1 className="project-detail-title">Rocket Boost</h1>
        <p className="project-detail-desc">
          Rocket Boost is een 2D game waarin je een raket bestuurt die obstakels
          moet ontwijken. Gebouwd in Unity met C#. Het doel was om physics en
          game-mechanics te leren.
        </p>

        <Link to="/projecten">
          <button className="details-btn">← Terug naar projecten</button>
        </Link>
      </div>
    </main>
  );
};

export default RocketBoost;
