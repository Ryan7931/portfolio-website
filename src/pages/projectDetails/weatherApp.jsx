// src/pages/projectDetails/RocketBoost.jsx
import { Link } from 'react-router-dom';
import '../Projects.css';

const RocketBoost = () => {
  return (
    <main className="projects-page">
      <div className="project-detail">
        <h1 className="project-detail-title">Weer App</h1>
        <p className="project-detail-desc">
          Een weer app waarin je actief het weer kon zien met enkele kleine features zoals leuke feitjes om het uur.
          Gebouwd met HTML, CSS en JavaScript. Het doel was om API's te leren gebruiken.
        </p>

        <Link to="/projecten">
          <button className="details-btn">← Terug naar projecten</button>
        </Link>
      </div>
    </main>
  );
};

export default RocketBoost;
